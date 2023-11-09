import Header from "./components/Header/Header";
import Categories from "./components/categories/Categories";

function App() {
  return (
    <div>
      <Header />
      <div className="home px-6 justify-between flex gap-10 ">
        <div className="categories flex-1 overflow-auto max-h-[calc(100vh-_-112px)]">
          <Categories />
        </div>
        <div className="products flex-[8]">
          <div className="">products</div>
        </div>
        <div className="">
          <div>cart totals</div>
        </div>
      </div>
    </div>
  );
}

export default App;
