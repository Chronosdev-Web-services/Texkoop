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
import Image from "next/image";

const Footer = () => {
  const year = new Date().getFullYear();
  const { t } = useTranslation("common");

  return (
    <footer className="bg-pri">
      <div className="mt-10 py-5 mx-auto container text-white text-[14px] font-normal">
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-y-7 gap-x-5">
          <div className="flex flex-col gap-5 ">
            <div className="">
              <Image
                src="/icons/Logo.svg"
                alt="Texkoop Logo"
                width="100"
                height="150"
                layout="responsive"
                className="object-contain w-[50%] md:w-[70%]"
              />
            </div>

            <div className="flex gap-">
              <AiFillFacebook size={40} color="#FAA019" />
              <AiFillTwitterSquare size={40} color="#FAA019" />
              <AiFillInstagram size={40} color="#FAA019" />
              <AiFillLinkedin size={40} color="#FAA019" />
            </div>
          </div>

          <div className="flex flex-col gap-2 items-start">
            <p className="text-[25px] font-bold">Support</p>
            <div className="grid gap-1">
              <Link href="/FAQ">
                <p>{t("Foo1ai")}</p>
              </Link>
              <Link href="/privacy_policy  ">
                <p>{t("Foo1aii")}</p>
              </Link>

              <p>{t("Foo1aiii")}</p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-[25px] font-bold">{t("Foo1b")}</p>
            <div className="grid gap-1">
              <Link href="/about">
                <p>{t("Foo1bi")}</p>
              </Link>
              <>
                <p>{t("Foo1bii")}</p>
              </>
              <Link href="/partner">
                <p>{t("Foo1biii")}</p>
              </Link>
            </div>
          </div>
          <div className="grid gap-2  ">
            <p className="text-[25px] font-bold">{t("Foo1c")}</p>
            <div className="grid gap-1">
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
          </div>
          <div className="grid gap-2">
            <p className="text-[25px] font-bold">Contact</p>
            <div className="grid gap-1">
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
        </div>
        <div className="text-white pt-5 font-bold">
          <p>
            Copyright© {year}. {t("Copyright")}.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
