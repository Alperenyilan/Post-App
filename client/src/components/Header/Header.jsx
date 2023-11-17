/* eslint-disable react/jsx-no-comment-textnodes */
import { Input, Badge } from "antd";
import {
  SearchOutlined,
  HomeOutlined,
  ShoppingCartOutlined,
  CopyOutlined,
  UserOutlined,
  BarChartOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
const Header = () => {
  return (
    <div className="mb-6 border-b">
      <header className="flex items-center justify-between gap-10 px-6 py-4">
        <div className="logo">
          <a href="/">
            <h2 className="text-2xl font-bold md:text-4xl">LOGO</h2>
          </a>
        </div>
        <div className="flex-1 header-search flex justify-center">
          <Input
            size="large"
            placeholder="Ürün Ara..."
            prefix={<SearchOutlined />}
            className="rounded-full max-w-[800px]"
          />
        </div>
        <div className="flex items-center justify-between gap-7 md-border-t-0 border-t md:px-0 px-4 py-1 md:static fixed bottom-0 md:w-auto w-screen md:bg-transparent left-0 bg-white  menu-links  ">
          <a
            href={"/"}
            className="menu-link flex flex-col hover:text-[#40a9ff]  transition-all"
          >
            <HomeOutlined className="text-xl md:text-2xl  " />
            <span className="md:text-xs text-[10px]">Ana Sayfa</span>
          </a>
          <Badge count={5} offset={[0, 6]} className="md:flex hidden">
            <a
              href={"/"}
              className="menu-link  flex flex-col hover:text-[#40a9ff] transition-all"
            >
              <ShoppingCartOutlined className="text-xl md:text-2xl  " />
              <span className="md:text-xs text-[10px]">Sepet</span>
            </a>
          </Badge>
          <a
            href={"/"}
            className="menu-link flex flex-col hover:text-[#40a9ff] transition-all"
          >
            <CopyOutlined className="text-xl md:text-2xl" />
            <span className="md:text-xs text-[10px]">Faturalar</span>
          </a>

          <a
            href={"/"}
            className="menu-link flex flex-col hover:text-[#40a9ff] transition-all"
          >
            <UserOutlined className="text-xl md:text-2xl" />
            <span className="md:text-xs text-[10px]">Müşteriler</span>
          </a>
          <a
            href={"/"}
            className="menu-link flex flex-col hover:text-[#40a9ff] transition-all"
          >
            <BarChartOutlined className="text-xl md:text-2xl" />
            <span className="md:text-xs text-[10px]">İstatistikler</span>
          </a>
          <a
            href={"/"}
            className="menu-link flex flex-col hover:text-[#40a9ff] transition-all"
          >
            <LogoutOutlined className="text-xl md:text-2xl" />
            <span className="md:text-xs text-[10px]">Çıkış</span>
          </a>
        </div>
        {/* //! BURADA EKRAN KÜCÜLDÜGÜNDE SAĞ TARAFTA SEPET GÖZÜKECEK */}
        <Badge count={5} offset={[0, 6]} className="md:hidden flex">
          <a
            href={"/"}
            className="menu-link  flex flex-col hover:text-[#40a9ff] transition-all"
          >
            <ShoppingCartOutlined className=" text-2xl" />
            <span className="md:text-xs text-[10px]">Sepet</span>
          </a>
        </Badge>
      </header>
    </div>
  );
};

export default Header;
