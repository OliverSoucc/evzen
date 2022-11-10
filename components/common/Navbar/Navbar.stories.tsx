import { ComponentMeta, ComponentStory } from '@storybook/react';
import Navbar from './Navbar';

export default {
  title: 'components/common/Navbar',
  component: Navbar,
  argTypes: {},
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = () => <Navbar />;

export const Nav = Template.bind({});
Nav.args = {};
