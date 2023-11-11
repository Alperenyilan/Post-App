const Products = () => {
  return (
    <div className="product-wrapper grid grid-cols-card gap-4">
      <div className="product-item border hover:shadow-lg cursor-pointer transition-all ">
        <div className="product-img">
          <img
            src="https://www.verita.com.tr/wp-content/uploads/2014/08/elma.jpg"
            alt=""
            className="h-28 object-cover w-full border-b"
          />
        </div>
        <div className="product-info">
          <span>Elma</span>
          <span>12</span>
        </div>
      </div>
      <div className="product-item border hover:shadow-lg cursor-pointer transition-all">
        <div className="product-img">
          <img
            src="https://www.verita.com.tr/wp-content/uploads/2014/08/elma.jpg"
            alt=""
            className="h-28 object-cover w-full border-b"
          />
        </div>
        <div className="product-info">
          <span>Elma</span>
          <span>12</span>
        </div>
      </div>
    </div>
  );
};

export default Products;
