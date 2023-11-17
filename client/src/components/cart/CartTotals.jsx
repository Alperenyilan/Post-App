const CartTotals = () => {
  return (
    <div className="cart h-full max-h-[calc(100vh_-_90px)] flex flex-col">
      <h2 className="bg-blue-600 text-center py-4 text-white font-bold tracking-wide">
        Sepetteki ürünler
      </h2>
      <div className="cart-items">
        <div className="cart-item">cart item </div>
      </div>
      <div className="cart-totals mt-auto  ">
        <div>
          <div className="flex justify-between">
            <b>Ara Toplam</b>
            <span>99₺</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartTotals;
