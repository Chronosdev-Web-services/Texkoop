import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import Footer from '../components/Footer';
import Layout from '../components/Layout';

const About = () => {
  const { t, lang } = useTranslation('about');

  return (
    <Layout title="About">
      <p>{t('about')}</p>
    </Layout>
  );
};

export default About;

export async function getStaticProps({ locale }) {
  let about =
    locale === 'en-US' ? 'English my g' : locale === 'fr' ? 'french nigga' : '';
  return {
    props: {
      about,
    },
  };
}
