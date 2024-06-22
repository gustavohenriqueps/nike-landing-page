import { useState } from "react";
import { nikeLogo } from "../assets/images";
import {
  CloseOutlined,
  HeartOutlined,
  MenuOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { navLinks } from "../constants";
import ButtonSecondary from "./ButtonSecondary";

const NavMobile = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const toggle = () => setIsOpenMenu(!isOpenMenu);

  return (
    <nav className="flex justify-between items-center w-full lg:hidden">
      <a href="#home">
        <img src={nikeLogo} alt="nike logo" width={80} />
      </a>

      <div className="flex gap-6">
        <a>
          <SearchOutlined className="text-xl p-1 cursor-pointer" />
        </a>

        <a>
          <HeartOutlined className="text-xl p-1 text-coral-red cursor-pointer" />
        </a>

        <a>
          <ShoppingCartOutlined className="text-xl p-1 cursor-pointer" />
        </a>

        <a>
          <MenuOutlined
            className="text-xl p-1 cursor-pointer"
            onClick={toggle}
          />
        </a>

        {isOpenMenu && (
          <div
            className="absolute h-screen inset-0 bg-neutral-950 opacity-50"
            onClick={toggle}
          ></div>
        )}

        <div
          className={`absolute top-0 left-0 bg-neutral-50 shadow transition-all duration-300 ease-in-out h-screen ${
            isOpenMenu ? "w-4/5 sm:w-3/6" : "w-0"
          }`}
        >
          {isOpenMenu && (
            <div className="w-full h-full flex flex-col justify-between py-5 px-[4%]">
              <div className="flex justify-between items-center w-full">
                <a href="#home">
                  <img
                    src={nikeLogo}
                    alt="nike logo"
                    onClick={toggle}
                    width={80}
                  />
                </a>
                <CloseOutlined className="text-xl p-1" onClick={toggle} />
              </div>

              <div>
                <ul className="flex flex-col gap-4 font-poppins font-medium">
                  {navLinks.map((link) => (
                    <li
                      key={link.label}
                      className="w-full py-2 px-4 hover:bg-neutral-200 hover:text-coral-red rounded"
                    >
                      <a
                        href={link.href}
                        className="py-2 px-4
                                 w-full"
                        onClick={toggle}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col gap-2 font-medium font-poppins">
                <ButtonSecondary
                  label="Learn More"
                  backgroundColor="bg-neutral-50"
                  hover="hover:bg-gradient-to-r from-neutral-50 to-neutral-200"
                  handleClick={toggle}
                />

                <ButtonSecondary
                  label="Sign In"
                  backgroundColor="bg-neutral-900"
                  hover="hover:bg-gradient-to-r from-neutral-900 to-neutral-700"
                  textColor="text-neutral-50"
                  handleClick={toggle}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavMobile;
