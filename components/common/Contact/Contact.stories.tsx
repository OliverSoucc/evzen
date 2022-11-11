import { ComponentMeta, ComponentStory } from '@storybook/react';
import Contact, { IContactProps } from './Contact';
import { sampleContact } from './Contact.mocks';

export default {
  title: 'components/Common/Contact',
  component: Contact,
  argTypes: {},
} as ComponentMeta<typeof Contact>;

const Template: ComponentStory<typeof Contact> = (args) => (
  <Contact {...args} />
);

export const DefaultContact = Template.bind({});
DefaultContact.args = {
  ...sampleContact.solidContact,
} as IContactProps;

export const DashedContact = Template.bind({});
DashedContact.args = {
  ...sampleContact.dashedContact,
} as IContactProps;

export const DashedPointerContact = Template.bind({});
DashedContact.args = {
  ...sampleContact.solidPointerContact,
} as IContactProps;
