import { IServiceProps } from './Service';

const defaultServiceOffer: IServiceProps = {
  heading: 'Fotovoltaika',
  description:
    'Realizujeme montáž a inštaláciu fotovoltaických modulov na obytných budovách a solárnych parkoch.',
};

const longServiceOffer: IServiceProps = {
  heading: 'Elektroinštalačné práce',
  description:
    'V krajinách EÚ ponúkame zváračské práce metódami TIG/ WIG, MIG (CO2), MAG Realizujeme činnosti rôzneho charakteru a taktiež sa venujeme špeciálnym projektom. Pre každý projekt vieme poskytnúť potrebný počet vyškolených pracovníkov.',
};

export const sampleServiceOffer = {
  defaultServiceOffer,
  longServiceOffer,
};
