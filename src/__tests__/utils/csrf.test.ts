import { NextRequest, NextResponse } from "next/server";
import { csrfProtection, withCsrfProtection } from "@/lib/csrf";
import { getToken } from "next-auth/jwt";

// Mock NextAuth's getToken function
jest.mock("next-auth/jwt", () => ({
  getToken: jest.fn(),
}));

// Mock Sentry
jest.mock("@sentry/nextjs", () => ({
  captureMessage: jest.fn(),
  captureException: jest.fn(),
}));

describe("CSRF Protection Utilities", () => {
  let mockRequest: NextRequest;

  beforeEach(() => {
    // Reset mocks
    jest.clearAllMocks();

    // Create a mock request
    mockRequest = {
      method: "POST",
      headers: new Headers(),
      nextUrl: { protocol: "http:" },
    } as unknown as NextRequest;

    // Set default environment variables
    process.env.NODE_ENV = "production";
    process.env.NEXT_PUBLIC_APP_URL = "http://example.com";
  });

  describe("csrfProtection function", () => {
    it("should allow safe methods to pass through", async () => {
      mockRequest.method = "GET";
      const result = await csrfProtection(mockRequest);
      expect(result).toBeNull();
    });

    it("should allow requests in development mode", async () => {
      process.env.NODE_ENV = "development";
      const result = await csrfProtection(mockRequest);
      expect(result).toBeNull();
    });

    it("should check authentication for requests without origin", async () => {
      (getToken as jest.Mock).mockResolvedValueOnce(null);
      const result = await csrfProtection(mockRequest);
      expect(result).toBeInstanceOf(NextResponse);
      expect(result?.status).toBe(403);
    });

    it("should allow authenticated requests without origin", async () => {
      (getToken as jest.Mock).mockResolvedValueOnce({ id: "user-123" });
      const result = await csrfProtection(mockRequest);
      expect(result).toBeNull();
    });
  });

  describe("withCsrfProtection wrapper", () => {
    it("should call the handler when CSRF check passes", async () => {
      // Create mock handler
      const mockHandler = jest
        .fn()
        .mockResolvedValue(NextResponse.json({ success: true }));

      // Set up to pass CSRF check (development mode)
      process.env.NODE_ENV = "development";

      // Create protected handler
      const protectedHandler = withCsrfProtection(mockHandler);

      // Call the protected handler
      await protectedHandler(mockRequest);

      // Verify the original handler was called
      expect(mockHandler).toHaveBeenCalledWith(mockRequest);
    });

    it("should return error response when CSRF check fails", async () => {
      // Create mock handler
      const mockHandler = jest.fn();

      // Set up to fail CSRF check
      process.env.NODE_ENV = "production";
      (getToken as jest.Mock).mockResolvedValueOnce(null);

      // Create protected handler
      const protectedHandler = withCsrfProtection(mockHandler);

      // Call the protected handler
      const response = await protectedHandler(mockRequest);

      // Verify the original handler was not called
      expect(mockHandler).not.toHaveBeenCalled();

      // Verify the response was an error
      expect(response.status).toBe(403);
    });
  });
});
