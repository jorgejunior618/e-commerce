export type User = {
  id?: number,
  name: string,
  email: string,
  password?: string,
};

export type UpdateUser = {
  email: string,
  password: string,
  name?: string,
  newEmail?: string,
  newPassword?: string,
};

