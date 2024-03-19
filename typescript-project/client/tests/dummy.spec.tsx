import { render } from "@testing-library/react";

const DummyComponent = () => {
  return <div data-testid="test">Dummy</div>;
};

describe("Dummy Test Suite", () => {
  it("should render Dummy", () => {
    const component = <DummyComponent />;
    const { queryByTestId } = render(component);
    const dummy = queryByTestId("test");
    expect(dummy).toBeInTheDocument();
  });
});
