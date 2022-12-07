import useTranslation from "next-translate/useTranslation";
import React from "react";
import Layout from "../components/Layout";
import { terms } from "../utils/data";

const TermsConditions = () => {
  const { t } = useTranslation("terms");
  const { data } = terms;
  return (
    <Layout title="Terms and Conditions">
      <section className="container mx-auto w-[90%] mb-20">
        <p className="h2-text">{t("main_head")}</p>
        <div>
          {data.map((data) => (
            <div key={data.id}>
              {data.head && <p className="h2-text my-5">{t(data.head)}</p>}
              {data.text && <p className="p-text">{t(data.text)}</p>}
              {data.sub &&
                data.sub.map((item) => (
                  <div key={item.id} className>
                    {item.head && (
                      <p className="h2-text my-5">{t(item.head)}</p>
                    )}
                    {item.text && <p className="p-text">{t(item.text)}</p>}
                  </div>
                ))}
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default TermsConditions;
