import React from 'react';
import Image from 'next/image';

const Card = () => {
  return (
    <>
      <figure className={'bg-black mb-[45px]'}>
        <div className={'h-[175px] w-full relative'}>
          <Image
            src={'/img/workers.jpg'}
            alt={'Evzen workers'}
            objectFit="cover"
            layout="fill"
          />
        </div>
        <figcaption
          className={
            'font-epilogue text-[#C2D1D9] font-[500] text-[18px] leading-[22px] p-[25px] text-center'
          }
        >
          TRANSPARENTNOSŤ,{' '}
          <span className={'text-primary-yellow'}>RÝCHLOSŤ</span>, VIERA V SILU
          KOMUNIKÁCIE,{' '}
          <span className={'text-primary-yellow'}>KOMPETENCIA</span>, KVALITA,
          FLEXIBILITA,{' '}
          <span className={'text-primary-yellow'}>DOCHVÍĽNOSŤ</span>, KOREKTNOSŤ
          A{' '}
          <span className={'text-primary-yellow'}>NAJLEPŠIA CENA NA TRHU</span>
        </figcaption>
      </figure>
    </>
  );
};

export default Card;
