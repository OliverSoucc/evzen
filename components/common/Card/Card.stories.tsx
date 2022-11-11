import { ComponentMeta, ComponentStory } from '@storybook/react';
import Card from './Card';

export default {
  title: 'components/common/Card',
  component: Card,
  argTypes: {},
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = () => <Card />;

export const DefaultCard = Template.bind({});
DefaultCard.args = {};
