import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import <%= name %>, { I<%= name %>Props } from './<%= name %>';

export default {
  title: 'Components/<%= name %>',
  component: <%= name %>,
  argTypes: {
    onClick: { action: 'clicked' },
  },
} as Meta;

const Template: Story<I<%= name %>Props> = (args) => <<%= name %> {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: '<%= name %> Content',
};

export const Secondary = Template.bind({});
Secondary.args = {
  ...Primary.args,
};
