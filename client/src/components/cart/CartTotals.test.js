import { render, screen } from "@testing-library/react";
import CartTotals from "./CartTotals";
import "@testing-library/jest-dom";
// eslint-disable-next-line no-undef
describe("CartTotals component", () => {
  // eslint-disable-next-line no-undef
  it("renders Cart component", () => {
    render(<CartTotals />);

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
