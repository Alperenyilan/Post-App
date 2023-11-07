import { Input } from "antd";
import { SearchOutlined, HomeOutlined } from "@ant-design/icons";
const Header = () => {
  return (
    <div className="border-b mb-6">
      <header className="py-4 px-6 flex justify-between items-center gap-10">
        <div className="logo">
          <a href="/">
            <h2 className="text-2xl font-bold md:text-4xl">LOGO</h2>
          </a>
        </div>
        <div className="header-search flex-1">
          <Input
            size="large"
            placeholder="Item Ara..."
            prefix={<SearchOutlined />}
            className="rounded-full max-w-800"
          />
        </div>
        <div className="menu-links flex justify-between items-center gap-10">
          <a href="/" className=" menu-link flex flex-col">
            <HomeOutlined className="md:text-2xl text-xl" />
            <span className="md:text-xs text-[10px]">Home</span>
          </a>
          <a href="/" className=" menu-link flex flex-col">
            <HomeOutlined className="md:text-2xl text-xl" />
            <span className="md:text-xs text-[10px]">Home</span>
          </a>
          <a href="/" className=" menu-link flex flex-col">
            <HomeOutlined className="md:text-2xl text-xl" />
            <span className="md:text-xs text-[10px]">Home</span>
          </a>
          <a href="/" className=" menu-link flex flex-col">
            <HomeOutlined className="md:text-2xl text-xl" />
            <span className="md:text-xs text-[10px]">Home</span>
          </a>
          <a href="/" className=" menu-link flex flex-col">
            <HomeOutlined className="md:text-2xl text-xl" />
            <span className="md:text-xs text-[10px]">Home</span>
          </a>
          <a href="/" className=" menu-link flex flex-col">
            <HomeOutlined className="md:text-2xl text-xl" />
            <span className="md:text-xs text-[10px]">Home</span>
          </a>
        </div>
      </header>
    </div>
  );
};

export default Header;
