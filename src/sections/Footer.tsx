import { CopyrightCircleOutlined } from "@ant-design/icons";
import { nikeLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer className="py-20 px-[6%] m-auto max-w-screen-2xl flex flex-wrap gap-20 bg-neutral-950 text-white">
      <div className="max-w-sm flex flex-col gap-8">
        <div className="flex gap-2">
          <img src={nikeLogo} alt="nike logo" width={80} className="invert" />
          <h3 className="text-3xl font-poppins font-medium ">Nike</h3>
        </div>

        <p className="font-montserrat lg:text-lg text-neutral-400">
          Get shoes ready for the new term at your nearest Nike store. Find Your
          perfect Size in Store. Get Rewards
        </p>

        <div className="flex gap-4">
          {socialMedia.map((media) => (
            <div key={media.alt} className="bg-white rounded-full p-2">
              <img src={media.src} alt={media.alt} width={30} />
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap gap-12">
        {footerLinks.map((section) => (
          <div key={section.title} className="flex flex-col gap-8">
            <h3 className="font-poppins text-2xl lg:text-3xl">
              {section.title}
            </h3>

            <ul className="flex flex-col gap-2 font-montserrat lg:text-lg text-neutral-400">
              {section.links.map((link) => (
                <li key={link.name}>
                  <a href={link.link}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="max-sm:text-center w-full sm:flex justify-between items-center font-montserrat text-neutral-400">
        <p>
          <CopyrightCircleOutlined className="mr-2" />
          Copyright. All rights reserved.
        </p>

        <a href="#">Terms & Conditions</a>
      </div>
    </footer>
  );
};

export default Footer;
