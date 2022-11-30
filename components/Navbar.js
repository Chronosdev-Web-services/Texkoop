import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import useTranslation from "next-translate/useTranslation";
import Button from "./Reusable/Button";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const { t } = useTranslation("common");
  const router = useRouter();

  return (
    <div className={` sticky  z-10 w-full top-0 ${navOpen && "bg-white"}`}>
      {!navOpen && <div className="header_class "></div>}
      <nav className="max-w-[1440px] w-[90%] flex lg:h-auto flex-col lg:flex-row  py-4 lg:py-7 lg:items-center font-[600] z-10 lg:text-white mx-auto">
        <div className="flex relative z-20 lg:block items-center w-full lg:w-auto justify-between">
          <div className="">
            <Link href="/">
              <img
                src="/icons/logo_black.svg"
                alt="Texkoop Logo"
                className="w-[50%] md:w-[30%] lg:hidden"
              />
            </Link>
            <Link href="/">
              <img
                src="/icons/Logo.svg"
                alt="Texkoop Logo"
                className="w-[50%] hidden lg:block"
              />
            </Link>
          </div>
          <div
            onClick={() => {
              setNavOpen(!navOpen);
            }}
            className={` relative w-6  items-center lg:hidden`}
          >
            <div
              className={`origin-center inset-0 w-6 h-0.5 m-auto rounded bg-sec transition duration-500 ${
                navOpen && "absolute rotate-45"
              }`}
            ></div>
            <div
              className={`inset-0 origin-center w-6 h-0.5 mt-2 rounded bg-sec transition duration-500 ${
                navOpen && "absolute -rotate-45 mt-0"
              } `}
            ></div>
            <div
              className={`w-6 origin-center h-0.5 mt-2 rounded bg-sec transition duration-500${
                navOpen ? " opacity-0 mt-0" : " "
              }`}
            ></div>
          </div>
        </div>

        <div
          id="navlinks"
          className={` flex lg:flex-grow flex-col lg:items-center my-7 lg:my-0 gap-10 lg:flex-row justify-between ${
            navOpen ? "lg:flex z-30 bg-white" : "hidden lg:flex"
          }`}
        >
          <div className="lg:ml-auto">
            <Link href="/about">
              <p>{t("Nav1")}</p>
            </Link>
          </div>
          <Link href="/services">
            <p>{t("Nav2")}</p>
          </Link>
          <Link href="/contact">
            <p>{t("Nav3")}</p>
          </Link>
          <div className="lg:float-left">
            <Link href="#">
              <p>{t("Nav4")}</p>
            </Link>
          </div>
          <div className=" lg:ml-auto">
            <Button text={t("Nav5")} />
          </div>
          <div>
            <Link
              href={`${router.asPath}`}
              locale="en-US"
              className="flex gap-2 items-center"
            >
              <div>
                <img src="/icons/gb.svg" alt="English" className="w-[15px]" />
              </div>
              En
            </Link>

            <Link
              href={router.asPath}
              locale="fr"
              className="flex gap-2 items-center"
            >
              <div>
                <img src="/icons/fr.svg" alt="french" className="w-[15px] " />
              </div>
              <p>Fr</p>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
