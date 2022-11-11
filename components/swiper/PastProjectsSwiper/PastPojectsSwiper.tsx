import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import Image from 'next/image';
import { ArrowLeftIcon, ArrowRightIcon, ShowMoreIcon } from '../../icons';

const PastPojectsSwiper = () => {
  return (
    <div
      className={`text-white py-[55px] xl:py-[110px] px-8 xl:px-0 flex flex-col w-full xl:max-w-[1200px] xl:mx-auto`}
    >
      <div
        className={`flex flex-col xl:flex-row w-full justify-between mb-[25px] xl:mb-[65px]`}
      >
        <div className={'flex flex-col'}>
          <h3 className="font-epilogue text-[38px] text-white leading-[38px] font-bold xl:text-[32px] xl:leading-[40px] xl:text-left mb-[15px] uppercase">
            Naše <span className={'text-primary-yellow'}>projekty</span>
          </h3>
          <p className={'text-white xl:max-w-[540px]'}>
            Projekty, ktoré sme realizovali
          </p>
        </div>
      </div>
      <Swiper
        className={'w-full'}
        direction={'horizontal'}
        modules={[Navigation]}
        navigation={{
          enabled: true,
          nextEl: '.int-next',
          prevEl: '.int-prev',
        }}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          1280: {
            slidesPerView: 4,
          },
        }}
      >
        {[
          {
            src: '/img/swiperPhoto.jpg',
            heading: 'Veža Euphoria',
            label:
              'Projekt nových bytových jednotiek Veža Euphoria v Košiciach, bol jedným z ďalších...',
          },
          {
            src: '/img/swiperPhoto.jpg',
            heading: 'Veža Euphoria',
            label:
              'Projekt nových bytových jednotiek Veža Euphoria v Košiciach, bol jedným z ďalších...',
          },
          {
            src: '/img/swiperPhoto.jpg',
            heading: 'Veža Euphoria',
            label:
              'Projekt nových bytových jednotiek Veža Euphoria v Košiciach, bol jedným z ďalších...',
          },
          {
            src: '/img/swiperPhoto.jpg',
            heading: 'Veža Euphoria',
            label:
              'Projekt nových bytových jednotiek Veža Euphoria v Košiciach, bol jedným z ďalších...',
          },
        ].map(({ src, heading, label }, index) => (
          <SwiperSlide className={`xl:w-full`} key={index}>
            <div
              className={
                'relative w-full xl:w-[255px] h-[195px] xl:h-[145px] xl:grayscale-[100%] xl:hover:grayscale-0'
              }
            >
              <Image
                priority={true}
                alt={'Swiper image'}
                src={src}
                layout={'fill'}
                objectFit={'cover'}
              />
            </div>
            <h5
              className={
                'font-epilogue mt-[45px] pb-[20px] mb-[15px] font-[800] text-[28px] leading-[28px] border-b-2 border-dashed border-primary-gray uppercase'
              }
            >
              {heading}
            </h5>
            <p>{label}</p>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex gap-[20px] justify-center my-[25px]">
        <div className={'flex items-center justify-center'}>
          <ArrowLeftIcon className="int-prev" />
        </div>
        <div className={'flex items-center justify-center'}>
          <ArrowRightIcon className="int-next" />
        </div>
      </div>
      <div className={'mx-auto'}>
        <ShowMoreIcon />
      </div>
    </div>
  );
};

export default PastPojectsSwiper;
