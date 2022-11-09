import { ComponentMeta, ComponentStory } from '@storybook/react';
import Button, { IButtonProps } from './Button';
import { sampleButtons } from './Button.mocks';

export default {
  title: 'components/ui/Button',
  component: Button,
  argTypes: {},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const HeroButton = Template.bind({});
HeroButton.args = {
  ...sampleButtons.heroButton,
} as IButtonProps;

export const ContactUsButton = Template.bind({});
ContactUsButton.args = {
  ...sampleButtons.contactUsButton,
} as IButtonProps;

export const WeOfferButton = Template.bind({});
WeOfferButton.args = {
  ...sampleButtons.weOfferButton,
} as IButtonProps;

export const IamInterestedButton = Template.bind({});
IamInterestedButton.args = {
  ...sampleButtons.iAmInterestedButton,
} as IButtonProps;
