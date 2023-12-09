import { render, screen } from "@testing-library/react";
import Categories from "./Categories";
import "@testing-library/jest-dom";
test("renders categories correctly", () => {
  render(<Categories />);

  // Kategori öğelerini kontrol etme
  const allCategories = screen.getAllByText(/Tümü/i);
  const foodCategories = screen.getAllByText(/Yiyecek/i);
  const drinkCategories = screen.getAllByText(/İcecek/i);

  // Her kategorinin varlığını kontrol etme
  expect(allCategories.length).toBe(3); // Toplam 3 "Tümü" kategorisi olmalı
  expect(foodCategories.length).toBe(3); // Toplam 3 "Yiyecek" kategorisi olmalı
  expect(drinkCategories.length).toBe(3); // Toplam 3 "İcecek" kategorisi olmalı

  // Her kategorinin doğru şekilde render edildiğini kontrol etme
  allCategories.forEach((category) => {
    expect(category).toBeInTheDocument();
  });

  foodCategories.forEach((category) => {
    expect(category).toBeInTheDocument();
  });

  drinkCategories.forEach((category) => {
    expect(category).toBeInTheDocument();
  });
});
