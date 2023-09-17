import type { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';

import type { IPageHeaderProps } from './PageHeader';
import PageHeader from './PageHeader';

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
