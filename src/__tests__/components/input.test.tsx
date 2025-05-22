import { render, screen } from "@testing-library/react";
import { Input } from "@/components/ui/input";
import userEvent from "@testing-library/user-event";

describe("Input Component", () => {
  it("renders correctly with default props", () => {
    render(<Input />);
    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toBeInTheDocument();
  });

  it("applies custom className correctly", () => {
    render(<Input className="custom-class" />);
    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toHaveClass("custom-class");
  });

  it("handles value changes correctly", async () => {
    const handleChange = jest.fn();
    render(<Input onChange={handleChange} />);

    const inputElement = screen.getByRole("textbox");
    await userEvent.type(inputElement, "test input");

    expect(handleChange).toHaveBeenCalled();
  });

  it("respects disabled state", () => {
    render(<Input disabled />);
    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toBeDisabled();
  });

  it("accepts placeholder text", () => {
    render(<Input placeholder="Enter text here" />);
    const inputElement = screen.getByPlaceholderText("Enter text here");
    expect(inputElement).toBeInTheDocument();
  });
});
