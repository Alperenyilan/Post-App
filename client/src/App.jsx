import Header from "./components/Header/Header";
import CartTotals from "./components/cart/CartTotals";
import Categories from "./components/categories/Categories";
import Products from "./components/products/Products";

function App() {
  return (
    <div>
      <Header />
      <div className="home px-6 justify-between md:flex-row flex flex-col gap-10 md:pb-0 pb-24 ">
        <div className="categories  overflow-auto max-h-[calc(100vh-_-112px)] md:pb-64 md:mr-0 -mr-[24px]">
          <Categories />
        </div>
        <div className="products flex-[8]">
          <Products />
        </div>
        <div className="cart-wrapper min-w-[300px] md:-mr-[24px] md:-mt-[24px] border">
          <CartTotals />
        </div>
      </div>
    </div>
  );
}

export default App;
