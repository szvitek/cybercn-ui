import { render, screen } from "@testing-library/react";
import { Heading } from "../heading";

describe("Heading Component", () => {
  it("renders h1 by default", () => {
    render(<Heading Tag="h1">Test Heading</Heading>);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toHaveTextContent("Test Heading");
  });

  it("renders different heading levels based on Tag prop", () => {
    const { rerender } = render(<Heading Tag="h2">H2 Heading</Heading>);
    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(
      "H2 Heading",
    );

    rerender(<Heading Tag="h3">H3 Heading</Heading>);
    expect(screen.getByRole("heading", { level: 3 })).toHaveTextContent(
      "H3 Heading",
    );

    rerender(<Heading Tag="h4">H4 Heading</Heading>);
    expect(screen.getByRole("heading", { level: 4 })).toHaveTextContent(
      "H4 Heading",
    );
  });

  it("applies cyber-heading class", () => {
    render(
      <Heading Tag="h1" data-testid="test-heading">
        Test
      </Heading>,
    );
    const heading = screen.getByTestId("test-heading");
    expect(heading).toHaveClass("cyber-heading");
  });

  it("applies glitched variant class", () => {
    render(
      <Heading Tag="h1" glitched data-testid="test-heading">
        Test
      </Heading>,
    );
    const heading = screen.getByTestId("test-heading");
    // Check that glitched class is applied (depends on CVA implementation)
    expect(heading).toHaveClass("animate-h1-glitched");
  });

  it("forwards custom className", () => {
    render(
      <Heading Tag="h1" className="custom-class" data-testid="test-heading">
        Test
      </Heading>,
    );
    const heading = screen.getByTestId("test-heading");
    expect(heading).toHaveClass("custom-class");
    expect(heading).toHaveClass("cyber-heading");
  });

  it("renders children correctly", () => {
    render(
      <Heading Tag="h1">
        <span>Complex</span> Content
      </Heading>,
    );
    expect(screen.getByText("Complex")).toBeInTheDocument();
    expect(screen.getByRole("heading")).toHaveTextContent("Complex Content");
  });

  it("forwards all HTML attributes", () => {
    render(
      <Heading Tag="h1" data-testid="test-heading">
        Test
      </Heading>,
    );
    const heading = screen.getByTestId("test-heading");
    expect(heading).toHaveAttribute("data-testid", "test-heading");
  });
});
