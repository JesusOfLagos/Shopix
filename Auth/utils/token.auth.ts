import JWT from 'jsonwebtoken';

export const generateToken = (payload: any) => {
  return JWT.sign(payload, process.env.JWT_SECRET, {
    expiresIn: '1d',
  });
};

export const verifyToken = (token: string) => {
  return JWT.verify(token, process.env.JWT_SECRET);
};

export const decodeToken = (token: string) => {
  return JWT.decode(token);
};

export const generateRefreshToken = (payload: any) => {
  return JWT.sign(payload, process.env.JWT_REFRESH_SECRET, {
    expiresIn: '7d',
  });
};

export const verifyRefreshToken = (token: string) => {
  return JWT.verify(token, process.env.JWT_REFRESH_SECRET);
};

export const decodeRefreshToken = (token: string) => {
  return JWT.decode(token);
};

export const generateEmailToken = (payload: any) => {
  return JWT.sign(payload, process.env.JWT_EMAIL_SECRET, {
    expiresIn: '1d',
  });
};

export const verifyEmailToken = (token: string) => {
  return JWT.verify(token, process.env.JWT_EMAIL_SECRET);
};

export const decodeEmailToken = (token: string) => {
  return JWT.decode(token);
};

export const generatePasswordToken = (payload: any) => {
  return JWT.sign(payload, process.env.JWT_PASSWORD_SECRET, {
    expiresIn: '1d',
  });
};

export const verifyPasswordToken = (token: string) => {
  return JWT.verify(token, process.env.JWT_PASSWORD_SECRET);
};
