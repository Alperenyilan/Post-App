import { render, screen } from "@testing-library/react";
import CartTotals from "./CartTotals";
import "@testing-library/jest-dom";
// eslint-disable-next-line no-undef
describe("CartTotals component", () => {
  // eslint-disable-next-line no-undef
  it("renders Cart component", () => {
    render(<CartTotals />);
    const plusButton = screen.getByRole("button", { name: /plus/i }); // Find Plus button
    const minusButton = screen.getByRole("button", { name: /minus/i }); // Find Minus button
    const countElement = screen.getByText("1"); // Find element containing count

    expect(plusButton).toBeInTheDocument();
    expect(minusButton).toBeInTheDocument();
    expect(countElement).toBeInTheDocument();

    // Sipariş Oluştur butonunun varlığını kontrol etme
    const createOrderButton = screen.getByText("Sipariş Oluştur");
    // eslint-disable-next-line no-undef
    expect(createOrderButton).toBeInTheDocument();

    // Temizle butonunun varlığını kontrol etme
    const clearButton = screen.getByText("Temizle");
    // eslint-disable-next-line no-undef
    expect(clearButton).toBeInTheDocument();
  });

  // Diğer test senaryoları buraya eklenebilir
});
