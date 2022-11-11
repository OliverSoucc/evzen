import { ComponentMeta, ComponentStory } from '@storybook/react';
import PastPojectsSwiper from './PastPojectsSwiper';

export default {
  title: 'components/swiper/PastProjectsSwiper',
  component: PastPojectsSwiper,
  argTypes: {},
} as ComponentMeta<typeof PastPojectsSwiper>;

const Template: ComponentStory<typeof PastPojectsSwiper> = () => (
  <PastPojectsSwiper />
);

export const DefaultSwiper = Template.bind({});
DefaultSwiper.args = {};
