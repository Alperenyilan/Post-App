import { render, screen } from "@testing-library/react";
import Header from "./Header";
import "@testing-library/jest-dom";

describe("Header component", () => {
  test("renders Header component with menu items", () => {
    render(<Header />);

    // Ana Sayfa metnini içeren öğe kontrolü
    const homeLink = screen.getByText("Ana Sayfa");
    expect(homeLink).toBeInTheDocument();

    // Sepet metnini içeren öğe kontrolü
    const cartLinks = screen.getAllByText("Sepet");
    expect(cartLinks.length).toBeGreaterThan(0);

    // Faturalar metnini içeren öğe kontrolü
    const invoicesLink = screen.queryByText("Faturalar");
    expect(invoicesLink).toBeInTheDocument();

    // Müşteriler metnini içeren öğe kontrolü
    const customersLink = screen.queryByText("Müşteriler");
    expect(customersLink).toBeInTheDocument();
  });

  it("renders logo text correctly", () => {
    render(<Header />);
    const logoText = screen.getByText("LOGO");
    expect(logoText).toBeInTheDocument();
  });

  it("renders search input with placeholder", () => {
    render(<Header />);
    const searchInput = screen.getByPlaceholderText("Ürün Ara...");
    expect(searchInput).toBeInTheDocument();
  });

  it("renders menu links with correct texts", () => {
    render(<Header />);
    const menuItems = [
      "Ana Sayfa",
      "Sepet",
      "Faturalar",
      "Müşteriler",
      "İstatistikler",
      "Çıkış",
    ];
    menuItems.forEach((menuItem) => {
      const menuText = screen.getAllByText(menuItem);
      menuText.forEach((menuText) => {
        expect(menuText).toBeInTheDocument();
      });
    });
  });
});

describe("Renders component", () => {
  it("renders mobile cart icon when screen size is reduced", () => {
    // Simulate a smaller screen size
    global.innerWidth = 500;
    window.dispatchEvent(new Event("resize"));

    render(<Header />);
    const mobileCartIcon = screen.queryByTestId("mobile-cart-icon"); // Change getByTestId to queryByTestId
    expect(mobileCartIcon).not.toBeNull();
  });
});
