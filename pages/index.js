import useTranslation from "next-translate/useTranslation";
import Layout from "../components/Layout";
import { landing } from "../utils/data";
import Button from "../components/Reusable/Button";
import Image from "next/image";

export default function Home() {
  const { t, lang } = useTranslation("home");
  const { delivery, why_we_stand_out, logos } = landing;

  return (
    <Layout title="Homepage">
      <div className=" mx-auto">
        <div>
          <video src="/videos/1.mp4" className="w-full object-cover h-full" />
        </div>
      </div>
      <section className="mx-auto w-[90%] max-w-[1440px] my-10">
        <div>
          <p className="h2-text font-bold md:w-[70%] text-pri_7">
            {t("2ai")}...
            <br></br>
            {t("2aii")}
          </p>
          <p className="w-[70%] p-text mt-5">{t("2aiii")}</p>
        </div>
      </section>
      <section className="mx-auto w-[90%] max-w-[1440px] grid md:grid-cols-2 gap-5 my-20">
        {delivery.map((card) => (
          <div key={card.id} className="h-auto w-full">
            <Image
              src={card.image}
              alt="what we do"
              className="w-full object-cover"
              width="100"
              height="100"
            />
            <div className="shadow-md px-5 py-3 grid gap-5 hover:bg-sec transition">
              <p className="text-[12px]">{t(card.nav)}</p>
              <p className="h4-text font-bold">{t(card.head)}</p>
              <p className="p-text">{t(card.text)}</p>
              <div className="flex justify-end">
                <Button text={t("card_button")} />
              </div>
            </div>
          </div>
        ))}
      </section>
      <section className="my-20 mx-auto w-[90%] max-w-[1440px]">
        <p className="h2-text font-bold my-5 text-pri_7">{t("heading2")}</p>
        <div className="my-5 grid md:grid-cols-3 lg:grid-cols-4 gap-5">
          {why_we_stand_out.map((card) => (
            <div
              key={card.id}
              className="px-5 py-3 grid gap-5 hover:bg-sec transition"
            >
              <div>
                <Image
                  src={card.image}
                  alt="how we stand out"
                  className="w-full object-cover"
                  width="100"
                  height="100"
                />
              </div>
              <p className="text-lg font-bold ">{t(card.head)}</p>
              <p className="text-sm">{t(card.text)}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="max-w-[1440px] mx-auto md:flex">
        <div className="md:min-w-[60%] bg-pri_7 py-5">
          <div className="w-[80%] mx-auto ">
            <div className="w-[80%]  md:[w-90%] text-white grid gap-5 gap-y-5 my-10">
              <p className="uppercase text-sec text-xs lg:text-lg">
                {t("location_top")}
              </p>
              <p className="h2-text font-bold">
                {t("location_headi")}
                <br></br>
                {t("location_headii")}
              </p>
              <p>{t("location_text")}</p>
              <div>
                <Button text={t("location_button")} />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-full"></div>
      </section>
      <section className="my-20 w-[90%] mx-auto max-w-[1440px] grid md:grid-cols-2">
        <div className=" flex flex-col gap-10 justify-center">
          <p className="w-[90%] h2-text text-pri_7 font-bold ">
            {t("local_businesses")}
          </p>
          <div className="flex gap-3">
            {logos.map((logo) => (
              <div key={logo.id}>
                <img
                  src={logo.image}
                  alt={logo.alt}
                  className="w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <img
            src="/images/1/e.svg"
            className="object-cover w-full"
            alt="locations of Texkoop on Map"
          />
          <div className="circle red absolute top-1/3 right-1/2 bg-sec"></div>
          <div className="circle red absolute bottom-1/3 left-[67%] bg-[#F4CC41]"></div>
        </div>
      </section>
    </Layout>
  );
}
