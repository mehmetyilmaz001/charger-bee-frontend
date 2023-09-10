import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import TestComponent, { ITestComponentProps } from './TestComponent';

export default {
  title: 'Components/TestComponent',
  component: TestComponent,
  argTypes: {
    onClick: { action: 'clicked' },
  },
} as Meta;

const Template: Story<ITestComponentProps> = (args) => <TestComponent {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'TestComponent Content',
};

export const Secondary = Template.bind({});
Secondary.args = {
  ...Primary.args,
};
