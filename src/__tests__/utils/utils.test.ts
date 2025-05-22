import { cn } from "@/lib/utils";

describe("cn utility function", () => {
  it("should merge classnames correctly", () => {
    const result = cn("text-red-500", "bg-blue-500");
    expect(result).toBe("text-red-500 bg-blue-500");
  });

  it("should handle conditional classes", () => {
    const isActive = true;
    const result = cn("btn", isActive && "btn-active");
    expect(result).toBe("btn btn-active");
  });

  it("should deduplicate classes", () => {
    const result = cn("p-4 rounded", "p-4 bg-gray-200");
    expect(result).toBe("rounded p-4 bg-gray-200");
  });

  it("should handle arrays of classes", () => {
    const result = cn(["p-4", "rounded"], "bg-blue-500");
    expect(result).toBe("p-4 rounded bg-blue-500");
  });

  it("should handle falsy values", () => {
    const result = cn("btn", false && "hidden", null, undefined, 0);
    expect(result).toBe("btn");
  });
});
