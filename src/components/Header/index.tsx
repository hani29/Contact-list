import React from 'react';
import { Box, Button } from '@material-ui/core';
import { resetCookie } from '../../helpers/cookie';
import currentUser from 'helpers/currentUser';

const handleLogin = () => {
  window.location.href = process.env.REACT_APP_AUTH_URLs as string;
}

const handleLogout = () => {
  resetCookie();
  window.location.href = '/';
}

const Header = (props: any) => {
  const { access_token } = currentUser;
  return (
    <Box className="w-full h-16 border border-gray-500 border-solid flex items-center justify-end px-4" bgcolor="primary.dark">
      {access_token() ? (
        <Button variant="contained" color="primary" onClick={handleLogout}>
          Log Out
        </Button>
      ) : (
          <Button variant="contained" color="primary" onClick={handleLogin}>
            Log In
          </Button>
        )}
    </Box>
  );
};

export default Header;
