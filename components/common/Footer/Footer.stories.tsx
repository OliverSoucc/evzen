import { ComponentMeta, ComponentStory } from '@storybook/react';
import Footer from './Footer';

export default {
  title: 'components/common/Footer',
  component: Footer,
  argTypes: {},
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = () => <Footer />;

export const DefaultFooter = Template.bind({});
DefaultFooter.args = {};
