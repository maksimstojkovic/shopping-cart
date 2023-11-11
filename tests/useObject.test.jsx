import { renderHook, waitFor } from "@testing-library/react";
import useObject from "../src/components/hooks/useObject";

describe("useObject", () => {
  it("passes with valid product endpoint", async () => {
    const { result } = renderHook(() =>
      useObject("https://fakestoreapi.com/products/", 1)
    );

    await waitFor(() => expect(result.current.loading).toBe(false), {
      timeout: 5000,
    });

    expect(result.current).toEqual({
      object: {
        id: 1,
        title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        price: 109.95,
        description:
          "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        rating: {
          rate: 3.9,
          count: 120,
        },
      },
      error: null,
      loading: false,
    });
  });

  it("has correct initial state", () => {
    const { result } = renderHook(() =>
      useObject("https://fakestoreapi.com/products/", 1)
    );

    expect(result.current).toEqual({
      object: null,
      error: null,
      loading: true,
    });
  });

  it("fails with invalid product", async () => {
    const { result } = renderHook(() =>
      useObject("https://fakestoreapi.com/products/", 0)
    );

    await waitFor(() => expect(result.current.loading).toBe(false), {
      timeout: 5000,
    });

    expect(result.current.error).not.toBeNull();
  });
});
