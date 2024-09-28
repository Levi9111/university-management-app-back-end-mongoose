import { TLoginUser } from './auth.interface';

const loginUser = async (payload: TLoginUser) => {};

const changePassword = async () => {};

const refreshToken = async (token: string) => {};

export const AuthServices = {
  loginUser,
  changePassword,
  refreshToken,
};
