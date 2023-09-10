import React from 'react';
import { I<%= name %>Props } from './<%= name %>.types';
import { use<%= name %> } from './<%= name %>.hook';
import { <%= name %>Styled } from './<%= name %>.styled';

const <%= name %>: React.FC<I<%= name %>Props> = (props) => {
  const { someValue } = use<%= name %>(props);

  return <<%= name %>Styled>{someValue}</<%= name %>Styled>;
};

export default <%= name %>;
