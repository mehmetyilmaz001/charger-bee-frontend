import { I<%= name %>Props } from './<%= name %>.types';

export const use<%= name %> = (props: I<%= name %>Props) => {
  // Logic and hooks go here.

  const someValue = 'Hello from hook!';

  return {
    someValue
  };
};
