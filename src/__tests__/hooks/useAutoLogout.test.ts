import { renderHook, act } from "@testing-library/react";
import { useAutoLogout } from "@/hooks/useAutoLogout";
import { signOut } from "next-auth/react";
import { toast } from "sonner";

// Mock next-auth
jest.mock("next-auth/react", () => ({
  signOut: jest.fn(),
}));

// Mock sonner
jest.mock("sonner", () => ({
  toast: {
    info: jest.fn(),
  },
}));

// Mock timers
jest.useFakeTimers();

describe("useAutoLogout", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    // Create mocks for event listeners
    window.addEventListener = jest.fn();
    window.removeEventListener = jest.fn();
  });

  it("sets up event listeners when enabled", () => {
    renderHook(() => useAutoLogout({ timeoutMinutes: 30, enabled: true }));

    // Check that event listeners were added
    expect(window.addEventListener).toHaveBeenCalledWith(
      "mousedown",
      expect.any(Function),
    );
    expect(window.addEventListener).toHaveBeenCalledWith(
      "mousemove",
      expect.any(Function),
    );
    expect(window.addEventListener).toHaveBeenCalledWith(
      "keypress",
      expect.any(Function),
    );
    expect(window.addEventListener).toHaveBeenCalledWith(
      "scroll",
      expect.any(Function),
    );
    expect(window.addEventListener).toHaveBeenCalledWith(
      "touchstart",
      expect.any(Function),
    );
  });

  it("does not set up event listeners when disabled", () => {
    renderHook(() => useAutoLogout({ enabled: false }));

    // Check that event listeners were not added
    expect(window.addEventListener).not.toHaveBeenCalled();
  });

  it("shows warning before timeout", () => {
    // Set up hook with 10 minutes timeout and 2 minute warning
    const { result } = renderHook(() =>
      useAutoLogout({
        timeoutMinutes: 10,
        warningMinutes: 2,
        enabled: true,
      }),
    );

    // Initially no warning should be shown
    expect(result.current.showWarning).toBe(false);

    // Advance time to just before warning (8 minutes of inactivity)
    act(() => {
      jest.advanceTimersByTime(8 * 60 * 1000 - 1);
    });
    expect(result.current.showWarning).toBe(false);

    // Advance time to warning threshold (8 minutes of inactivity)
    act(() => {
      jest.advanceTimersByTime(1);
    });
    expect(result.current.showWarning).toBe(true);
  });

  it("logs out after timeout period", () => {
    // Set up hook with 5 minutes timeout and 1 minute warning
    const { result } = renderHook(() =>
      useAutoLogout({
        timeoutMinutes: 5,
        warningMinutes: 1,
        enabled: true,
      }),
    );

    // Advance time to just before logout (5 minutes)
    act(() => {
      jest.advanceTimersByTime(5 * 60 * 1000 - 1);
    });

    // signOut should not have been called yet
    expect(signOut).not.toHaveBeenCalled();

    // Advance time to logout threshold
    act(() => {
      jest.advanceTimersByTime(1);
    });

    // Should have shown toast and called signOut
    expect(toast.info).toHaveBeenCalledWith(
      "You have been logged out due to inactivity.",
    );
    expect(signOut).toHaveBeenCalledWith({ callbackUrl: "/login" });
  });

  it("resets timer when resetTimer is called", () => {
    const { result } = renderHook(() =>
      useAutoLogout({
        timeoutMinutes: 10,
        warningMinutes: 2,
        enabled: true,
      }),
    );

    // Advance time to show warning
    act(() => {
      jest.advanceTimersByTime(8 * 60 * 1000);
    });
    expect(result.current.showWarning).toBe(true);

    // Call resetTimer
    act(() => {
      result.current.resetTimer();
    });

    // Warning should be hidden after reset
    expect(result.current.showWarning).toBe(false);

    // Advance time again, should still not show warning (timer was reset)
    act(() => {
      jest.advanceTimersByTime(7 * 60 * 1000);
    });
    expect(result.current.showWarning).toBe(false);
  });
});
