import React from 'react';

export interface IContactProps {
  isBorderDashed?: boolean;
  heading: string;
  icon: JSX.Element;
  contactData: string;
}

const Contact = ({
  isBorderDashed = false,
  heading,
  icon,
  contactData,
}: IContactProps) => {
  return (
    <div
      className={`border-2 border-white ${
        isBorderDashed ? 'border-dashed' : 'border-solid'
      }
      py-[35px] pl-[35px]`}
    >
      <div className={'flex gap-[25px]'}>
        {icon}
        <div>
          <h4
            className={
              'font-epilogue text-white font-bold text-[24px] leading-[20px] mb-[10px]'
            }
          >
            {heading}
          </h4>
          <address>
            <span className={'text-white'}>{contactData}</span>
          </address>
        </div>
      </div>
    </div>
  );
};

export default Contact;
