import { Navbar, Service } from '../components/common';
import { Button } from '../components/ui';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRightUpIcon,
  ArrowRightDownIcon,
  PlayIcon,
} from '../components/icons';

const Home = () => {
  return (
    <>
      <Navbar />
      <section className={'relative w-full xl:max-w-[1920px]'}>
        <div className={'h-full w-full absolute -z-10'}>
          <Image
            objectFit="cover"
            layout="fill"
            alt="hero image"
            src={`/img/hero_image.jpg`}
            loading={'eager'}
          />
        </div>
        <div className={'mx-8'}>
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
            Cenová ponuka do 48 hodín. Realizujeme elektroinštalačné a stavebné
            práce v celej SR.
          </p>
          <Button className={'mb-[60px]'} variant={'filled-yellow'}>
            <ArrowRightUpIcon />
          </Button>
        </div>
      </section>
      <Link href={'/'}>
        <a
          className={
            'bg-primary py-[35px] flex justify-center border-b-2 border-secondary'
          }
        >
          <ArrowRightDownIcon />
        </a>
      </Link>
      <Link href={'/'}>
        <a
          className={
            'bg-primary py-[35px] flex justify-center border-b-2 border-secondary'
          }
        >
          <PlayIcon />
        </a>
      </Link>
      <section className={'bg-primary'}>
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
      <section>
        <h2>O firme EVŽEN BUILDER</h2>
        <p>
          Sme medzinárodná spoločnosť so sídlom v Poprade, pôsobiaca v oblasti
          elektroinštalačných, stavebných práca inovačných prechodov na optickú
          sieť na celom území Slovenska. Našim cieľom je poskytnutie dôvery
          našim zákazníkom, kvalitne odvedené práce, dodržanie termínov a
          dlhodobej spolupráce.
        </p>
        <h3>
          Čo nás charakterizuje ? Flexibilita, kvalita, bezkonkurenčná cena a
          dlhodobá spolupráca{' '}
        </h3>
      </section>
    </>
  );
};

export default Home;
