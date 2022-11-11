import React from 'react';
import Image from 'next/image';
import {
  FacebookIcon,
  InstagramIcon,
  LetterIcon,
  LinkedInIcon,
  LogoDPIcon,
} from '../../icons';

const Footer = () => {
  return (
    <footer className={'bg-primary '}>
      <div
        className={
          'flex flex-col items-center border-t-2 border-b-2 border-primary-gray text-white'
        }
      >
        <div className={'pt-[45px] mb-[70px]'}>
          <Image
            src={'/img/logo.png'}
            width={150}
            height={40}
            alt={'Evzen logo'}
          />
        </div>
        <div className={'flex gap-[20px] items-center mb-[15px]'}>
          <FacebookIcon />
          <InstagramIcon />
          <LinkedInIcon />
          <LetterIcon />
        </div>
        <span>Ochrana osobných údajov (GDPR)</span>
        <span className={'text-center text-primary-gray mb-[30px]'}>
          EvženBuilder © 2022| Všetky práva vyhradené
        </span>
        <Image
          width={90}
          height={90}
          alt="TUV certificate"
          src={`/img/TUV.png`}
        />
        <h4
          className={
            'font-epilogue my-[45px] font-[800] text-[20px] leading-[20px] uppercase'
          }
        >
          Navigácia
        </h4>
        <div
          className={
            'flex flex-col gap-[20px] text-[16px] leading-[16px] items-center'
          }
        >
          <span>O nás</span>
          <span>Služby</span>
          <span>Projekty</span>
          <span>Kariéra</span>
          <span>Kontakt</span>
        </div>
        <h4
          className={
            'font-epilogue my-[45px] font-[800] text-[20px] leading-[20px] uppercase'
          }
        >
          Služby
        </h4>
        <div
          className={
            'flex flex-col gap-[20px]  text-[16px] leading-[16px] items-center mb-[45px]'
          }
        >
          <span>Stavebné práce</span>
          <span>Fotovoltaika</span>
          <span>Montáž optiky</span>
          <span>Zváračské práce</span>
        </div>
        <address className={'text-center'}>
          <h4
            className={
              'font-epilogue font-[800] text-[20px] leading-[20px] uppercase'
            }
          >
            Telefón
          </h4>
          <span className={'text-center block mb-[45px]'}>
            +421 911 076 927{' '}
          </span>
          <h4
            className={
              'font-epilogue font-[800] text-[20px] leading-[20px] uppercase'
            }
          >
            Email
          </h4>
          <span className={'text-center block mb-[45px]'}>
            office@evzenbuilder.eu
          </span>
          <h4
            className={
              'font-epilogue font-[800] text-[20px] leading-[20px] uppercase'
            }
          >
            Adresa
          </h4>
          <span className={'text-center block mb-[45px]'}>
            Huszova 4994/6,Poprad
          </span>
        </address>
      </div>
      <div className={'pt-[45px] flex flex-col items-center'}>
        <LogoDPIcon />
        <p className={'font-epilogue text-center text-primary-gray mb-[30px]'}>
          Táto webová stránka bola nadizajnovaná a vytvorená spoločnosťou dp
          Marketing Group s. r. o.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
