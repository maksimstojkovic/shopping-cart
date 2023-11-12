import { render, screen } from "@testing-library/react";
import Navbar from "../src/components/shared/Navbar";
import { MemoryRouter } from "react-router-dom";

describe("useObject", () => {
  it("displays correct number of cart items", () => {
    const { rerender } = render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    const button = screen.getByRole("link", { name: "Cart" });
    expect(button.textContent).toBe("Cart - 0");

    rerender(
      <MemoryRouter>
        <Navbar cart={[{ title: "test product" }]} />
      </MemoryRouter>
    );

    expect(button.textContent).toBe("Cart - 1");
  });
});
