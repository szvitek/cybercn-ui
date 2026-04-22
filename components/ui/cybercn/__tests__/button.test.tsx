import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from "../button";

// Mock radix-ui Slot component
jest.mock("radix-ui", () => ({
  Slot: ({
    children,
    ...props
  }: {
    children?: React.ReactNode;
    [key: string]: unknown;
  }) => <div {...props}>{children}</div>,
}));

describe("Button Component", () => {
  it("renders a button element", () => {
    render(<Button>Click me</Button>);
    const button = screen.getByRole("button", { name: /click me/i });
    expect(button).toBeInTheDocument();
  });

  it("calls onClick handler when clicked", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);

    const button = screen.getByRole("button", { name: /click me/i });
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("applies cyber-button class", () => {
    render(<Button data-testid="test-button">Click me</Button>);
    const button = screen.getByTestId("test-button");
    expect(button).toHaveClass("cyber-button");
  });

  it("supports disabled state", () => {
    render(<Button disabled>Disabled Button</Button>);
    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
  });

  it("forwards custom className", () => {
    render(
      <Button className="custom-class" data-testid="test-button">
        Click
      </Button>,
    );
    const button = screen.getByTestId("test-button");
    expect(button).toHaveClass("cyber-button");
    expect(button).toHaveClass("custom-class");
  });

  it("forwards all HTML attributes", () => {
    render(
      <Button data-testid="test-button" type="submit" aria-label="Submit form">
        Submit
      </Button>,
    );
    const button = screen.getByTestId("test-button");
    expect(button).toHaveAttribute("type", "submit");
    expect(button).toHaveAttribute("aria-label", "Submit form");
  });

  it("supports different variant styles", () => {
    const { container } = render(<Button variant="red">Red Button</Button>);
    expect(container.querySelector("button")).toBeInTheDocument();
  });
});
