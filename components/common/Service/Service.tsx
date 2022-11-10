import React from 'react';
import Link from 'next/link';
import { ShowMoreIcon } from '../../icons';

export interface IServiceProps {
  heading: string;
  description: string;
}

const Service = ({ heading, description }: IServiceProps) => {
  return (
    <>
      <div className={'border-b-2 border-secondary'}>
        <div className={'mx-8'}>
          <h4
            className={
              'font-epilogue text-white font-bold text-[24px] leading-7 uppercase pt-[45px] mb-[20px]'
            }
          >
            {heading}
          </h4>
          <p className={'text-primary-gray mb-[35px]'}>{description}</p>
          <Link href={'/'}>
            <ShowMoreIcon classname={'mb-[45px]'} />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Service;
