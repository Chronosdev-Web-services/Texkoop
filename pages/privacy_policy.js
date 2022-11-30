import useTranslation from "next-translate/useTranslation";
import React from "react";
import Layout from "../components/Layout";
import { privacy } from "../utils/data";

const privacy_policy = () => {
  const { t } = useTranslation("privacy");
  const { data } = privacy;
  return (
    <Layout title="Privacy Policy">
      <section className="mx-auto max-w-[1440px] w-[90%]">
        {data.map((card) => (
          <div className="my-10" key={card.id}>
            <p className="my-5 h2-text font-bold">{t(card.head)}</p>
            <p className="my-5 p-text ">{t(card.text)}</p>
            <div>
              {card.sub &&
                card.sub.map((data) => (
                  <div className="my-10" key={data.id}>
                    <p className="my-5 h2-text font-bold">{t(data.head)}</p>
                    <p className="my-5 p-text ">{t(data.text)}</p>
                  </div>
                ))}
            </div>
          </div>
        ))}
        <p>{t("date_done")}</p>
      </section>
    </Layout>
  );
};

export default privacy_policy;
