import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { Button } from "@/components/ui/button";

describe("Button Component", () => {
  it("renders correctly with default props", () => {
    render(<Button>Click me</Button>);
    const buttonElement = screen.getByRole("button", { name: /Click me/i });
    expect(buttonElement).toBeInTheDocument();
  });

  it("applies variant classes correctly", () => {
    render(<Button variant="destructive">Destructive</Button>);
    const buttonElement = screen.getByRole("button", { name: /Destructive/i });
    expect(buttonElement).toHaveClass("bg-destructive");
  });

  it("applies size classes correctly", () => {
    render(<Button size="sm">Small</Button>);
    const buttonElement = screen.getByRole("button", { name: /Small/i });
    expect(buttonElement).toHaveClass("h-8");
  });

  it("is disabled when disabled prop is provided", () => {
    render(<Button disabled>Disabled</Button>);
    const buttonElement = screen.getByRole("button", { name: /Disabled/i });
    expect(buttonElement).toBeDisabled();
  });
});
