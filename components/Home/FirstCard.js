import React from "react";
import useTranslation from "next-translate/useTranslation";
import Button from "../Reusable/Button";
import Link from "next/link";

const FirstCard = (card) => {
  const { t } = useTranslation("home");
  return (
    <div className="h-auto w-full">
      <img src={card.image} alt={card.nav} className="w-full object-cover" />
      <div className="shadow-md px-5 py-3 grid gap-5 hover:bg-sec transition">
        <p className="text-[12px]">{t(card.nav)}</p>
        <p className="h4-text font-bold">{t(card.head)}</p>
        <p className="p-text">{t(card.text)}</p>
        <div className="flex justify-end">
          <Link href="/partner">
            <Button text={t("card_button")} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FirstCard;
