import { Card, Contact, Service } from '../components/common';
import { Button } from '../components/ui';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRightUpIcon,
  ArrowRightDownIcon,
  PlayIcon,
  ContactUsIcon,
  PhoneIcon,
  EmailIcon,
  MapPointerIcon,
} from '../components/icons';
import Email from '../components/icons/Email';
import PastPojectsSwiper from '../components/swiper/PastProjectsSwiper';

const Home = () => {
  return (
    <>
      <div className={'bg-primary'}>
        <section className={'relative w-full xl:max-w-[1920px] bg-none'}>
          <div className={'h-full w-full absolute z-10'}>
            <Image
              objectFit="cover"
              layout="fill"
              alt="hero image"
              src={`/img/hero_image.jpg`}
            />
          </div>
          <div className={'mx-8 z-20 relative'}>
            <h1
              className={
                'text-white font-epilogue font-[800] text-[28px] leading-[38px] uppercase pt-[60px] mb-[10px]'
              }
            >
              Elektrické práce v{' '}
              <span className={'text-primary-yellow'}>
                najvyššej kvalite, fLExibilite a cene
              </span>{' '}
              pre váš projekt.
            </h1>
            <p className={'text-white mb-[45px]'}>
              Cenová ponuka do 48 hodín. Realizujeme elektroinštalačné a
              stavebné práce v celej SR.
            </p>
            <Button className={'mb-[60px]'} variant={'filled-yellow'}>
              <ArrowRightUpIcon />
            </Button>
          </div>
        </section>
        <Link href={'/'}>
          <a
            className={
              'py-[35px] flex justify-center border-b-2 border-secondary'
            }
          >
            <ArrowRightDownIcon />
          </a>
        </Link>
        <Link href={'/'}>
          <a
            className={
              'py-[35px] flex justify-center border-b-2 border-secondary'
            }
          >
            <PlayIcon />
          </a>
        </Link>
        <section>
          <div className={'border-b-2 border-secondary'}>
            <div className={'mx-8'}>
              <h2
                className={
                  'font-epilogue text-white font-[800] text-[38px] leading-[38px] uppercase mb-[15px] pt-[45px]'
                }
              >
                <span className={'text-primary-yellow'}>Služby</span> ktoré
                ponúkame
              </h2>
              <p className={'text-primary-gray pb-[45px]'}>
                Našou úlohou je zabezpečenie kvalitnej a efektívnej práce,
                prispôsobenej vašim požiadavkám.
              </p>
            </div>
          </div>
          {[
            {
              heading: 'Elektroinštalačné práce',
              description:
                'Realizujeme kompletné elektroinštalačné práce v najvyššej kvalite, flexibilite a cene pre váš projekt.',
            },
            {
              heading: 'Stavebné práce',
              description:
                'Realizujeme montáž sadrokartónových a kazetových podhľadov, obkladačské práce.Poskytujeme vnútornú architektúru.',
            },
            {
              heading: 'Fotovoltaika',
              description:
                'Realizujeme montáž a inštaláciu fotovoltaických modulov na obytných budovách a solárnych parkoch.',
            },
            {
              heading: 'Montáž optiky',
              description:
                'Náš tím vyškolených technikov pracuje s najmodernejšími technológiami a dokáže sa prispôsobiť každej situácií či už v interiéroch alebo exteriéroch. Realizujeme kompletné riešenie výstavby optických sietí na kľúč.',
            },
            {
              heading: 'Zváračské práce',
              description:
                'V krajinách EÚ ponúkame zváračské práce metódami\n' +
                'TIG/ WIG, MIG (CO2), MAG.\n' +
                'Realizujeme činnosti rôzneho charakteru a taktiež sa venujeme špeciálnym projektom. Pre každý projekt vieme poskytnúť potrebný počet vyškolených pracovníkov.',
            },
          ].map(({ ...props }, index) => (
            <Service key={index} {...props} />
          ))}
        </section>
        <section className={'border-b-2 border-primary-gray'}>
          <div className={'mx-8'}>
            <h2
              className={
                'font-epilogue font-[800] text-[38px] leading-[38px] uppercase pt-[45px] text-white mb-[20px]'
              }
            >
              O firme{' '}
              <span className={'text-primary-yellow'}>EVŽEN BUILDER</span>
            </h2>
            <p className={'text-white text-[16px] mb-[45px]'}>
              Sme medzinárodná spoločnosť so sídlom v Poprade, pôsobiaca v
              oblasti elektroinštalačných, stavebných práca inovačných prechodov
              na optickú sieť na celom území Slovenska. Našim cieľom je
              poskytnutie dôvery našim zákazníkom, kvalitne odvedené práce,
              dodržanie termínov a dlhodobej spolupráce.
            </p>
            <h4
              className={
                'font-epilogue font-[800] text-[24px] leading-[24px] text-primary-yellow uppercase mb-[45px]'
              }
            >
              <span className={'text-white'}>Čo nás charakterizuje ?</span>{' '}
              Flexibilita, kvalita, bezkonkurenčná cena a dlhodobá spolupráca{' '}
            </h4>
            <Card />
            <h3
              className={
                'font-epilogue text-white mb-[20px] font-[800] text-[28px] leading-[28px] uppercase'
              }
            >
              Silné stránky
            </h3>
            <p className={'text-white mb-[45px]'}>
              Sme tím ambicióznych ľudí, ktorí presadzujú inovatívne riešenia.
              Našou prioritou je kvalita a spokojnosť našich obchodných
              partnerov.K projektom pristupujeme maximálne zodpovedne.
            </p>
          </div>
        </section>
        <section className={'pt-[45px] border-b-2 border-primary-gray'}>
          <div className={'mx-8'}>
            <h2
              className={
                'font-epilogue text-white font-[800] text-[38px] leading-[38px] uppercase mb-[15px]'
              }
            >
              <span className={'text-primary-yellow'}>Certifikát TÜV SÜD</span>{' '}
              systém manažérstva kvality
            </h2>
            <p className={'text-primary-gray mb-[50px]'}>
              TÜV SÜD Slovakia s.r.o. Certifikačný orgán systémov manažérstva
              potvrdzuje, že organizácia Evžen company s.r.o. zaviedla a používa
              systém manažérstva kvality v oblasti elektroinštalačných a
              stavebných prác.
            </p>
            <div
              className={
                'flex flex-col items-center justify-center gap-[30px] mb-[45px]'
              }
            >
              <Image
                width={90}
                height={90}
                alt="TUV certificate"
                src={`/img/TUV.png`}
              />
              <div className={'flex gap-[15px]'}>
                <Image
                  width={140}
                  height={210}
                  alt="zertifikat"
                  src={`/img/zertifikat.jpg`}
                />
                <Image
                  width={140}
                  height={210}
                  alt="certificate"
                  src={`/img/certifikat.jpg`}
                />
              </div>
              <Image
                width={140}
                height={210}
                alt="security certificate"
                src={`/img/security.jpg`}
              />
            </div>
          </div>
        </section>
        <PastPojectsSwiper />
        <section className={'bg-primary-yellow'}>
          <div className={'mx-8'}>
            <h2
              className={
                'font-epilogue font-[800] text-[38px] leading-[55px] uppercase pt-[45px] pb-[15px] border-b-2 border-dashed border-black mb-[15px]'
              }
            >
              <span className={'font-[300]'}>Stante sa</span> naším klientom{' '}
            </h2>
            <p className={'mb-[45px]'}>
              Garancia vysokokvalifikovaného personálu pre váš projekt, rýchlo a
              za najvýhodnejšiu cenu.
            </p>
            <Button variant={'filled-gray'} href={'/'} className={'mb-[15px]'}>
              <ContactUsIcon />
            </Button>
            <Button variant={'outline-gray'} href={'/'} className={'mb-[45px]'}>
              Čo ponúkame
            </Button>
          </div>
        </section>
        <section className={'pt-[45px] mx-8'}>
          <p className={'text-white text-[18px] leading-[20px] mb-[35px]'}>
            Ak ste kvalifikovaný elektrikár alebo inštalatér, neváhajte nás
            kontaktovať a dajte nám vedieť, o akú prácu by ste mali záujem.
          </p>
          <Button variant={'outline-white'} href={'/'} className={'mb-[45px]'}>
            Mám záujem
          </Button>
          <h2
            className={
              'font-epilogue font-[800] text-[38px] text-white leading-[38px] uppercase mb-[10px]'
            }
          >
            <span className={'text-primary-yellow'}>Kontaktujte</span> nás
          </h2>
          <p className={'text-primary-gray mb-[35px]'}>
            Na akýkoľvek dopyt/kontakt/záujem odpovieme do 24 hodín.
          </p>
          <div className={'flex flex-col gap-[25px] pb-[45px]'}>
            {[
              {
                icon: <PhoneIcon />,
                heading: 'Telefón',
                contactData: '+421 911 076 927',
              },
              {
                icon: <PhoneIcon />,
                heading: 'Email',
                contactData: 'office@evzenbuilder.eu',
                isBorderDashed: true,
              },
              {
                icon: <PhoneIcon />,
                heading: 'Adresa',
                contactData: 'Huszova 4994/6, Poprad',
              },
            ].map(({ ...props }, index) => (
              <Contact key={index} {...props} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
