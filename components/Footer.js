import Link from "next/link";
import React from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterSquare,
  AiOutlineMail,
  AiFillClockCircle,
} from "react-icons/ai";
import { IoLocationSharp } from "react-icons/io5";
import { CgPhone } from "react-icons/cg";
import useTranslation from "next-translate/useTranslation";

const Footer = () => {
  const year = new Date().getFullYear();
  const { t } = useTranslation("common");

  return (
    <div className="bg-pri">
      <footer className="mt-10 py-5 mx-auto max-w-[1440px] w-[90%] text-white text-[14px] font-normal">
        <div className="grid md:grid-cols-5">
          <div className="">
            <div className="relative md:mt-5 ">
              <img
                src="/icons/Logo.svg"
                alt="Texkoop Logo"
                width="150"
                height="150"
                layout="responsive"
                className="object-cover"
              />
            </div>

            <div className="flex">
              <AiFillFacebook size={35} color="#FAA019" />
              <AiFillTwitterSquare size={35} color="#FAA019" />
              <AiFillInstagram size={35} color="#FAA019" />
              <AiFillLinkedin size={35} color="#FAA019" />
            </div>
          </div>

          <div className="grid gap-1">
            <p className="text-[25px] font-bold">Support</p>
            <>
              <p>{t("Foo1ai")}</p>
            </>
            <>
              <p>{t("Foo1aii")}</p>
            </>
            <>
              <p>{t("Foo1aiii")}</p>
            </>
          </div>
          <div className="grid gap-1">
            <p className="text-[25px] font-bold">{t("Foo1b")}</p>
            <Link href="/about">
              <p>{t("Foo1bi")}</p>
            </Link>
            <>
              <p>{t("Foo1bii")}</p>
            </>
            <Link href="/partners">
              <p>{t("Foo1biii")}</p>
            </Link>
          </div>
          <div className="grid gap-1">
            <p className="text-[25px] font-bold">{t("Foo1c")}</p>
            <>
              <p>{t("Foo1ci")}</p>
            </>
            <>
              <p>{t("Foo1cii")}</p>
            </>
            <>
              <p>{t("Foo1ciii")}</p>
            </>
            <>
              <p>{t("Foo1civ")}</p>
            </>
            <>
              <p>{t("Foo1cv")}</p>
            </>
          </div>
          <div className="grid gap-1">
            <p className="text-[25px] font-bold">Contact</p>
            <div className="flex items-center gap-1">
              <IoLocationSharp color="#FAA019" />{" "}
              <p>53B Émile Decorps,69100, Villeurbanne</p>
            </div>
            <div className="flex items-center gap-1">
              <CgPhone color="#FAA019" />
              <p>+33 6 8450 7079</p>
            </div>
            <div className="flex items-center gap-1">
              <AiOutlineMail color="#FAA019" />
              <p>info@texkoop.com</p>
            </div>
            <div className="flex items-center gap-1">
              <AiFillClockCircle color="#FAA019" />
              <p>08:00 AM - 21:00 PM</p>
            </div>
          </div>
        </div>
        <div className="text-white pb-5">
          <p>
            Copyright© {year}. {t("Copyright")}.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
