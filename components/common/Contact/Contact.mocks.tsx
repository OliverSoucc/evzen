import { IContactProps } from './Contact';
import { EmailIcon, MapPointerIcon, PhoneIcon } from '../../icons';

const solidContact: IContactProps = {
  heading: 'Telefón',
  contactData: '+421 911 076 927',
  icon: <PhoneIcon />,
  isBorderDashed: false,
};

const dashedContact: IContactProps = {
  heading: 'Email',
  contactData: 'office@evzenbuilder.eu',
  icon: <EmailIcon />,
  isBorderDashed: true,
};

const solidPointerContact: IContactProps = {
  heading: 'Place',
  contactData: 'office@evzenbuilder.eu',
  icon: <MapPointerIcon />,
  isBorderDashed: false,
};

export const sampleContact = {
  solidContact,
  dashedContact,
  solidPointerContact,
};
