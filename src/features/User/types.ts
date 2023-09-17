export type User = {
  id: string;
  name: string;
  surname: string;
  fullName: string;
  email: string;
  phone: string;
  profilePicUrl?: string;
  role: Role[];
  createdDate: string;
};

export type Role = {
  id: string;
  name: (typeof roles)[number];
};

export const roles = ['user', 'admin', 'teacher'] as const;
