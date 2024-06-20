import {
  HeartOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { nikeLogo } from "../assets/images";
import { navLinks } from "../constants";
import NavMobile from "./NavMobile";

const Navbar = () => {
  return (
    <header className="sticky top-0 left-0 w-full max-w-screen-2xl m-auto py-6 px-[6%] shadow bg-neutral-50 z-10">
      <nav className="flex justify-between items-center max-lg:hidden">
        <a href="#home">
          <img src={nikeLogo} alt="nike logo" width={80} />
        </a>

        <div>
          <ul className="flex gap-6 font-poppins font-medium">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="py-2 px-4 rounded hover:border-b border-neutral-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex gap-6 items-center">
          <a href="#" className="relative">
            <SearchOutlined className="absolute left-1 top-1 p-1 rounded-full hover:bg-neutral-100" />
            <input
              type="text"
              className="bg-neutral-200 rounded-full py-1 pl-8 outline-none"
              placeholder="Search"
            />
          </a>

          <a href="#">
            <HeartOutlined className="text-xl p-1 text-red-500" />
          </a>

          <a href="#">
            <ShoppingCartOutlined className="text-xl p-1" />
          </a>
        </div>
      </nav>
      <NavMobile />
    </header>
  );
};

export default Navbar;
