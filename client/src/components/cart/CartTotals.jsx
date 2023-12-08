import { Button } from "antd";
import {
  ClearOutlined,
  PlusCircleOutlined,
  MinusCircleOutlined,
} from "@ant-design/icons";

const CartTotals = () => {
  return (
    <div className="cart h-full max-h-[calc(100vh_-_90px)] flex flex-col">
      <h2 className="py-4 font-bold tracking-wide text-center text-white bg-blue-600">
        Sepetteki Ürünler
      </h2>
      <ul className="flex flex-col px-2 pt-2 cart-items gap-y-3">
        <li className="flex justify-between cart-item">
          <div className="flex items-center">
            <img
              src="https://www.verita.com.tr/wp-content/uploads/2014/08/elma.jpg"
              alt=""
              className="object-cover w-16 h-16"
            />
            <div className="flex flex-col ml-2">
              <b>Elma</b>
              <span>12₺ x 2</span>
            </div>
          </div>
          <div className="flex items-center ml-2 gap-x-1">
            <Button
              type="primary"
              size="middle"
              className="w-full mt-2 flex items-center justify-center !rounded-full"
              icon={<PlusCircleOutlined />}
            />
            <span className="mt-2">1</span>
            <Button
              type="primary"
              size="middle"
              className="w-full mt-2 flex items-center justify-center !rounded-full"
              icon={<MinusCircleOutlined />}
            />
          </div>
        </li>
      </ul>
      <div className="mt-auto cart-totals">
        <div className="border-t border-b">
          <div className="flex justify-between p-2">
            <b>Ara Toplam</b>
            <span>99₺</span>
          </div>
          <div className="flex justify-between p-2">
            <b>KDV %8</b>
            <span className="text-red-700">+7.92₺</span>
          </div>
        </div>
        <div className="mt-4 border-b">
          <div className="flex justify-between p-2">
            <b className="text-xl text-green-500">Genel Toplam</b>
            <span className="text-xl">99₺</span>
          </div>
        </div>
        <div className="px-2 py-4">
          <Button type="primary" size="large" className="w-full">
            Sipariş Oluştur
          </Button>
          <Button
            type="primary"
            size="large"
            className="flex items-center justify-center w-full mt-2"
            icon={<ClearOutlined />}
            danger
          >
            Temizle
          </Button>
        </div>
      </div>
    </div>
  );
};
export default CartTotals;
