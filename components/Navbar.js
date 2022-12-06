import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import useTranslation from "next-translate/useTranslation";
import Button from "./Reusable/Button";
const menu = [
  {
    id: 1,
    title: "En",
    locale: "en-Us",
    link: "en-Us",
    image: "gb",
    country: "United Kingdom",
  },
  {
    id: 2,
    title: "Fr",
    locale: "fr",
    link: "fr",
    image: "fr",
    country: "France",
  },
];
const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [image, setImage] = useState("gb");
  const [name, setName] = useState("En");

  const { t } = useTranslation("common");
  const router = useRouter();
  useEffect(() => {
    if (router.locale === "fr") {
      setImage("fr");
      setName("Fr");
    }
    if (router.locale === "en-Us") {
      setImage("gb");
      setName("En");
    }
  }, [router]);

  return (
    <div className={` sticky  z-10 w-full top-0 ${navOpen && "bg-white"}`}>
      {!navOpen && <div className="header_class "></div>}
      <nav className="container z-20 flex lg:h-auto flex-col lg:flex-row  py-4 lg:py-7 lg:items-center font-[600] lg:text-white mx-auto">
        <div className="flex justify-between relative z-20 lg:block items-center w-full lg:w-auto">
          <div className=" max-w-[200px]">
            <Link href="/">
              <img
                src="/icons/logo_black.svg"
                alt="Texkoop Logo"
                className="w-[90%]  lg:hidden"
              />
            </Link>
            <Link href="/">
              <img
                src="/icons/Logo.svg"
                alt="Texkoop Logo"
                className="hidden lg:block w-[80%] xl:w-full"
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
          className={` flex lg:flex-grow flex-col lg:items-center my-7 lg:my-0 gap-12 lg:flex-row justify-between ${
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
          <div className="lg:mr-auto">
            <Link href="#">
              <p>{t("Nav4")}</p>
            </Link>
          </div>
          <Link href="/partner">
            <Button text={t("Nav5")} />
          </Link>

          <div className={`dropdown px-1 space-x-3 relative middle  flex`}>
            <div className="flex items-center">
              {name === "En" ? (
                <div>
                  <img
                    src="https://flagcdn.com/gb.svg"
                    width="30"
                    alt="United Kingdom"
                  />
                </div>
              ) : (
                <div>
                  <img
                    src="https://flagcdn.com/fr.svg"
                    width="30"
                    alt="United Kingdom"
                  />
                </div>
              )}
            </div>
            <p>{name}</p>
            <div
              className={`dropdown_list slide-up border text-black space-y-3 rounded-md shadow-xl p-3 absolute left-[-20px] top-5 bg-white`}
            >
              <div>
                <Link
                  href={`${router.asPath}`}
                  locale="en-US"
                  className="flex gap-2 items-center"
                >
                  <div>
                    <img
                      src="https://flagcdn.com/w20/gb.png"
                      srcSet="https://flagcdn.com/w40/gb.png 2x"
                      width="20"
                      height="10"
                      alt="United Kingdom"
                    />
                  </div>
                  <p>En</p>
                </Link>

                <Link
                  href={router.asPath}
                  locale="fr"
                  className={`flex gap-2 items-center`}
                >
                  <div className="">
                    <img
                      src="https://flagcdn.com/w20/fr.png"
                      srcSet="https://flagcdn.com/w40/fr.png 2x"
                      width="20"
                      height="10"
                      alt="France"
                    />
                  </div>
                  <p>Fr</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
