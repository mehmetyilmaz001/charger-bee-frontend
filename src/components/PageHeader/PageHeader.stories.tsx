import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import PageHeader, { IPageHeaderProps } from './PageHeader';

export default {
  title: 'Components/PageHeader',
  component: PageHeader,
  argTypes: {
    onClick: { action: 'clicked' },
  },
} as Meta;

const Template: Story<IPageHeaderProps> = (args) => <PageHeader {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'PageHeader Content',
};

export const Secondary = Template.bind({});
Secondary.args = {
  ...Primary.args,
};
