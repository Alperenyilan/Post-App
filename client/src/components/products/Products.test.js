import { render, screen } from "@testing-library/react";
import Products from "./Products";

describe("Products component", () => {
  it("renders product items correctly", () => {
    render(<Products />);

    // İlgili ürünlerin varlığını kontrol etme
    const appleItems = screen.getAllByText("Elma");
    expect(appleItems).toHaveLength(2); // İki adet "Elma" metninin olup olmadığını kontrol et

    // İlgili fiyatların varlığını kontrol etme
    const priceItems = screen.getAllByText("12");
    expect(priceItems).toHaveLength(2); // İki adet "12" fiyatının olup olmadığını kontrol et

    // Resimleri alt metni yerine src özelliğine dayalı olarak kontrol etme
    const productImages = screen.getAllByAltText("", {
      src: "https://www.verita.com.tr/wp-content/uploads/2014/08/elma.jpg",
    });
    expect(productImages).toHaveLength(2); // İki adet "Elma" resminin olup olmadığını kontrol et
  });

  // Diğer test senaryoları buraya eklenebilir
});
