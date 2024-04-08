import config from '../gatsby-config';

export const asset = (path: string) => {
  const env = process.env.GATSBY_ENV;
  return env === "production" && config.pathPrefix ? `${config.pathPrefix}${path}` : `${path}`;
};
