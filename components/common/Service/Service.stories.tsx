import { ComponentMeta, ComponentStory } from '@storybook/react';
import Service, { IServiceProps } from './Service';
import { sampleServiceOffer } from './Service.mocks';

export default {
  title: 'components/common/Service',
  component: Service,
  argTypes: {},
} as ComponentMeta<typeof Service>;

const Template: ComponentStory<typeof Service> = (args) => (
  <Service {...args} />
);

export const DefaultService = Template.bind({});
DefaultService.args = {
  ...sampleServiceOffer.defaultServiceOffer,
} as IServiceProps;

export const LongService = Template.bind({});
LongService.args = {
  ...sampleServiceOffer.longServiceOffer,
} as IServiceProps;
