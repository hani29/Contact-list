import Cookie from 'js-cookie';

interface setCookieParams {
  access_token: string;
  refresh_token: string;
  expires?: number;
}

const setCookie = (props: setCookieParams) => {
  const { access_token, refresh_token, expires = 20 } = props;
  Cookie.set('access_token', access_token, { expires });
  Cookie.set('refresh_token', refresh_token, { expires });
  return true;
};

export const resetCookie = () => {
  Cookie.remove('access_token');
  Cookie.remove('refresh_token');
  return true;
};

export default setCookie;
