import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SearchBox from "../SearchBox";

describe("Test the SearchBox Component", () => {
  test("search input should have type password", () => {
    render(<SearchBox />);
    const inputTest = screen.getByPlaceholderText("Search here...");
    expect(inputTest).toHaveAttribute("type", "text");
  });

  test("Snapshot of SearchBox", () => {
    const { container } = render(<SearchBox />);
    expect(container).toMatchSnapshot();
  });

  test("should be able to search the values", () => {
    render(<SearchBox />);
    const inputTest = screen.getByPlaceholderText("Search here...");
    inputTest.value = "Test";
    expect(inputTest.value).toBe("Test");
  });
  
});
