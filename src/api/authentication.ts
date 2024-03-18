import axios from "axios";

interface loginDto {
  username?: string;
  password?: string;
}

interface registerDto {
  name?: string;
  email?: string;
  phoneNumber?: string;
  address?: string;
  username?: string;
  password?: string;
}

interface forgotPasswordDto {
  email?: string;
}

interface VerifyForgotPasswordDto {
  otp?: string;
  email?: string;
  newPassword?: string;
}

export const LoginAPI = async (body: loginDto) => {
  return axios.post(`${process.env.API_URL}/auth/login`, body);
};

export const RegisterAPI = async (body: registerDto) => {
  return axios.post(`${process.env.API_URL}/auth/register`, body);
};

export const ForgotPasswordAPI = async (body: forgotPasswordDto) => {
  return axios.post(`${process.env.API_URL}/auth/forgot-password`, body);
};

export const VerifyForgotPasswordAPI = async (
  body: VerifyForgotPasswordDto
) => {
  return axios.post(`${process.env.API_URL}/auth/verify-forgot-password`, body);
};
