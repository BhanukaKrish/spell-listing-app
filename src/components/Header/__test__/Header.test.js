import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "../Header";
import { MemoryRouter } from "react-router-dom";

describe("Test the Header Component", () => {
  test("header should have a logo", () => {
    render(<Header />, { wrapper: MemoryRouter });
    const logo = screen.getByRole("img");
    expect(logo).toBeInTheDocument();
  });

  test("header should have a Home menu", () => {
    render(<Header />, { wrapper: MemoryRouter });
    const menu = screen.getByText("Home");
    expect(menu).toBeInTheDocument();
  });

  test("header should have a Favourites menu", () => {
    render(<Header />, { wrapper: MemoryRouter });
    const menu = screen.getByText("Favourites");
    expect(menu).toBeInTheDocument();
  });

  test("Snapshot of Header", () => {
    const { container } = render(<Header />, { wrapper: MemoryRouter });
    expect(container).toMatchSnapshot();
  });
});
