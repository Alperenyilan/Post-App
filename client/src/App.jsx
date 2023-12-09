import Header from "./components/Header/Header";
import CartTotals from "./components/cart/CartTotals";
import Categories from "./components/categories/Categories";
import Products from "./components/products/Products";

function App() {
  return (
    <div>
      <Header data-testid="header-component" />
      <div className="flex flex-col justify-between gap-10 px-6 pb-24 home md:flex-row md:pb-0 ">
        <div
          className="categories  overflow-auto max-h-[calc(100vh-_-112px)] md:pb-64 "
          data-testid="categories-component"
        >
          <Categories />
        </div>
        <div className="products flex-[8]" data-testid="products-component">
          <Products />
        </div>
        <div
          className="cart-wrapper min-w-[300px] md:-mr-[24px] md:-mt-[24px] border"
          data-testid="cart-totals-component"
        >
          <CartTotals />
        </div>
      </div>
    </div>
  );
}

export default App;
