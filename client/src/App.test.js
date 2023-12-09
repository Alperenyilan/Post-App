import { render, screen } from "@testing-library/react";
import App from "./App";
import "@testing-library/jest-dom";
describe("App component", () => {
  test("renders Header component", () => {
    render(<App />);
    // const headerComponent = screen.getByTestId("header-component");
    // expect(headerComponent).toBeInTheDocument();
  });

  test("renders Categories component", () => {
    render(<App />);
    const categoriesComponent = screen.getByTestId("categories-component");
    expect(categoriesComponent).toBeInTheDocument();
  });

  test("renders Products component", () => {
    render(<App />);
    const productsComponent = screen.getByTestId("products-component");
    expect(productsComponent).toBeInTheDocument();
  });

  test("renders CartTotals component", () => {
    render(<App />);
    const cartTotalsComponent = screen.getByTestId("cart-totals-component");
    expect(cartTotalsComponent).toBeInTheDocument();
  });
});
