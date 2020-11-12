import Cookie from 'js-cookie';

const user = {
  access_token: () => Cookie.get('access_token'),
  refresh_token: () => Cookie.get('refresh_token')
};

export default user;
