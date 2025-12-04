import jtw from 'jsonwebtoken';

export const generateToken = (userId, res) => {
  const { JWT_SECRET, NODE_ENV} = process.env;
  if(!JWT_SECRET) {
    throw new Error("JWT_SECRET is not configured");
  }


  const token = jtw.sign({ userId }, JWT_SECRET, {
    expiresIn: '7d',
  });

  res.cookie('jwt', token, {
    maxAge: 7 * 24 * 60 * 1000,
    httpOnly: true, // XSS atk prevention
    sameSite: "strict", //CSRF atk prevention
    secure: process.env.NODE_ENV === "development" ? false: true,
  });

  return token;
};