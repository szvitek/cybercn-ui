import { render, screen } from "@testing-library/react";
import { CyberInput } from "../input";

describe("Input Component", () => {
  it("renders an input element", () => {
    render(<CyberInput />);
    const input = screen.getByRole("textbox");
    expect(input).toBeInTheDocument();
  });

  it("forwards all props to the input element", () => {
    render(
      <CyberInput
        placeholder="Enter text"
        type="email"
        disabled
        data-testid="custom-input"
      />,
    );
    const input = screen.getByTestId("custom-input");
    expect(input).toHaveAttribute("placeholder", "Enter text");
    expect(input).toHaveAttribute("type", "email");
    expect(input).toBeDisabled();
  });

  it("applies cyber-input class", () => {
    render(<CyberInput data-testid="custom-input" />);
    const input = screen.getByTestId("custom-input");
    expect(input).toHaveClass("cyber-input");
  });

  it("handles value changes", () => {
    const { container } = render(<CyberInput defaultValue="test" />);
    const input = container.querySelector("input");
    expect(input).toHaveValue("test");
  });

  it("supports custom className merging", () => {
    render(<CyberInput className="custom-class" data-testid="custom-input" />);
    const input = screen.getByTestId("custom-input");
    expect(input).toHaveClass("cyber-input");
    expect(input).toHaveClass("custom-class");
  });
});
