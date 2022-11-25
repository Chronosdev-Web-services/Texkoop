import Head from 'next/head';
import Footer from '../components/Footer';
import useTranslation from 'next-translate/useTranslation';
import Layout from '../components/Layout';
import { landing } from '../utils/data';
import Button from '../components/Reusable/Button';

export default function Home() {
  const { t, lang } = useTranslation('home');
  const { delivery } = landing;

  return (
    <Layout title="Homepage">
      <div className=" mx-auto">
        <div>
          <video
            src="/videos/1.mp4"
            autoPlay
            loop
            muted
            className="w-full object-cover h-full"
          />
        </div>
      </div>
      <section className="mx-auto w-[90%] max-w-[1440px] my-10">
        <div>
          <p className="h2-text font-bold md:w-[70%]">
            {t('2ai')}...
            <br></br>
            {t('2aii')}
          </p>
          <p className="w-[70%] p-text mt-5">{t('2aiii')}</p>
        </div>
      </section>
      <section className="mx-auto w-[90%] max-w-[1440px] grid md:grid-cols-2 gap-5 my-5">
        {delivery.map((card) => (
          <div key={card.id} className="h-auto w-full">
            <img
              src={card.image}
              alt={card.nav}
              className="w-full object-cover"
            />
            <div className="shadow-md px-5 py-3 grid gap-5 hover:bg-sec transition">
              <p className="text-[12px]">{t(card.nav)}</p>
              <p className="h4-text font-bold">{t(card.head)}</p>
              <p className="p-text">{t(card.text)}</p>
              <div className="flex justify-end">
                <Button text={t('card_button')} />
              </div>
            </div>
          </div>
        ))}
      </section>
    </Layout>
  );
}
