import { useState } from 'react';
import { Burger } from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const [opened, setOpened] = useState(false);
  return (
    <nav className={`bg-primary w-full ${opened && 'h-screen'}`}>
      <div
        className={`flex justify-between items-center mx-8 py-[15px] ${
          opened && 'border-b-2 border-[#A9A8A8]'
        }`}
      >
        {opened ? (
          <>
            <div
              className={
                'flex items-center font-bold leading-[16px] gap-[30px] py-[4px]'
              }
            >
              <span className={'text-white'}>EN</span>
              <address className={'flex flex-col text-white'}>
                <Link href={'tel:+421 911 076 927'}>
                  <a>+421 911 076 927</a>
                </Link>
                <Link href={'tel:+49 152 23634849'}>
                  <a>+49 152 23634849</a>
                </Link>
              </address>
            </div>
          </>
        ) : (
          <Image
            src={'/img/logo.png'}
            width={150}
            height={40}
            alt={'Evzen logo'}
          />
        )}
        <Burger
          opened={opened}
          color={'#ffffff'}
          onClick={() => setOpened((o) => !o)}
        />
      </div>
      {opened && (
        <div
          className={
            'flex flex-col gap-[45px] items-center text-white text-[28px] leading-[28px] mt-[100px]'
          }
        >
          <span>Domov</span>
          <span>O nás</span>
          <span>Služby</span>
          <span>Projekty</span>
          <span>Kariéra</span>
          <span>Kontakt</span>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
