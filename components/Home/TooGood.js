import useTranslation from "next-translate/useTranslation";
import React from "react";
import { landing } from "../../utils/data";

const TooGood = () => {
  const { too_goood } = landing;
  const { t, lang } = useTranslation("home");
  return (
    <section className="bg-pri  my-20 mb-52">
      <div className="max-w-[1440px] mx-auto">
        <div className=" w-[90%] mx-auto text-white grid md:grid-cols-2">
          <div className=""></div>
          <div className="my-10">
            <p className="h2-text font-bold">Too Good to be True</p>
            <div className="grid grid-cols-2 mt-5 gap-3">
              {too_goood.map((data) => (
                <div
                  key={data.id}
                  className={`flex gap-2 items-center ${
                    data.id % 2 === 0 ? "" : "justify-"
                  }`}
                >
                  <div>
                    <img src="/icons/tick.svg" />
                  </div>
                  <p>{t(data.text)}</p>
                </div>
              ))}
            </div>
            <div className="w-[80%] ml-auto flex  my-10">
              <div className="w-[80%]">
                <p className="p-text">Karim Tabet</p>
                <p className="my-2 uppercase text-xs">LYON SELECT EKVAL</p>
                <p className="mt-5 text-base">
                  Il s'agit d'une jeune entreprise qui a fait preuve de
                  diligence et de cohérence dans la prestation de ses services.
                  Ils dépassent toujours les attentes et je suis impressionné
                  par leurs offres.
                </p>
              </div>
              <div className="w-[20%]">
                <img src="/images/1/quotes.svg" alt="what they say quotes" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TooGood;
