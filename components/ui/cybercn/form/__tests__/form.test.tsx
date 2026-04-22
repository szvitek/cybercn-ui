import { render } from "@testing-library/react";
import { CyberForm } from "../form";

describe("Form Component", () => {
  it("renders a form element", () => {
    const { container } = render(
      <CyberForm>
        <input />
      </CyberForm>,
    );
    const form = container.querySelector("form");
    expect(form).toBeInTheDocument();
  });

  it("renders children correctly", () => {
    const { getByText } = render(
      <CyberForm>
        <button>Submit</button>
      </CyberForm>,
    );
    expect(getByText("Submit")).toBeInTheDocument();
  });

  it("forwards all props to form element", () => {
    const { container } = render(
      <CyberForm
        className="custom-form"
        data-testid="test-form"
        onSubmit={(e) => e.preventDefault()}
      >
        <input />
      </CyberForm>,
    );
    const form = container.querySelector("form");
    expect(form).toHaveClass("custom-form");
    expect(form).toHaveAttribute("data-testid", "test-form");
  });

  it("applies space-y-4 spacing class", () => {
    const { container } = render(
      <CyberForm data-testid="test-form">
        <input />
      </CyberForm>,
    );
    const form = container.querySelector("form");
    expect(form).toHaveClass("space-y-4");
  });
});
