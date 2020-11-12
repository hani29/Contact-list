import React from 'react';
import setCookie from 'helpers/cookie';
import { getQueryParams } from 'helpers/getQueryParam';

const LoginRedirect = (props: any) => {
  const { children } = props;
  const url = decodeURI(window.location.href);
  const access_token = getQueryParams('access_token', url);
  const refresh_token = getQueryParams('refresh_token', url);

  if (access_token) {
    setCookie({ access_token: access_token, refresh_token: (refresh_token as string) });
    window.location.href = '/';
  }
  return <>{children}</>;
};

export default LoginRedirect;
