import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ItemRow from "../ItemRow";
import { MemoryRouter } from "react-router-dom";

describe("Test the ItemRow Component", () => {
    test("check the props pass correctly", () => {
        render(<ItemRow item={{ name: "Test" }} />, { wrapper: MemoryRouter });
        const name = screen.getByText("Test");
        expect(name).toBeInTheDocument();
    });

    test("Snapshot of ItemRow", () => {
        const { container } = render(<ItemRow item={{ name: "Test" }} />, { wrapper: MemoryRouter });
        expect(container).toMatchSnapshot();
    });

});
