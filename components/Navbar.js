import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import useTranslation from 'next-translate/useTranslation';
import Button from './Reusable/Button';

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const { t } = useTranslation('common');
  const router = useRouter();

  return (
    <div
      className={`text-white absolute z-10 w-full top-0 ${
        navOpen && 'h-[100vh]'
      }`}
    >
      <div className="header_class"></div>
      <nav className="max-w-[1440px] w-[90%] mx-auto flex flex-col lg:flex-row justify-between py-7 items-center font-[600] z-10 text-white ">
        <div className="flex md:block items-center ">
          <div className="mr-auto">
            <img
              src="/icons/Logo.svg"
              alt="Texkoop Logo"
              width="150"
              height="150"
              layout="responsive"
              className=""
            />
          </div>
          <div className={` hidden`}>
            <div className="hamburger" onClick={() => setNavOpen(!navOpen)}>
              <div className="bar"></div>
            </div>
          </div>
        </div>

        <div className="hidden lg:flex gap-10 flex-col md:flex-row justify-between">
          <Link href="#">
            <p>{t('Nav1')}</p>
          </Link>
          <Link href="#">
            <p>{t('Nav2')}</p>
          </Link>
          <Link href="#">
            <p>{t('Nav3')}</p>
          </Link>
          <Link href="#">
            <p>{t('Nav4')}</p>
          </Link>
        </div>
        <div className="hidden lg:flex flex-col md:flex-row justify-between gap-10">
          <Button text={t('Nav5')} />

          <div>
            <ul>
              <Link
                href={`${router.asPath}`}
                locale="en-US"
                className="flex gap-2 items-center"
              >
                <div>
                  <img src="/icons/gb.svg" alt="English" className="w-[15px]" />
                </div>
                En
              </Link>

              <Link
                href={router.asPath}
                locale="fr"
                className="flex gap-2 items-center"
              >
                <div>
                  <img src="/icons/fr.svg" alt="french" className="w-[15px]" />
                </div>
                <p>Fr</p>
              </Link>
            </ul>
          </div>
        </div>

        {/* desktop menu  */}
      </nav>
    </div>
  );
};

export default Navbar;
