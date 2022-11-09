import { IButtonProps } from './Button';

const heroButton: IButtonProps = {
  variant: 'filled-yellow',
  children: 'Zistiť viac',
};

const contactUsButton: IButtonProps = {
  variant: 'filled-gray',
  children: 'Kontaktujte nás',
};

const weOfferButton: IButtonProps = {
  variant: 'outline-gray',
  children: 'Čo ponúkame',
};

const iAmInterestedButton: IButtonProps = {
  variant: 'outline-white',
  children: 'Mám záujem',
};

export const sampleButtons = {
  heroButton,
  contactUsButton,
  weOfferButton,
  iAmInterestedButton,
};
