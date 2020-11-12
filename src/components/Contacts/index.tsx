import React from 'react';
import { Typography, Box } from '@material-ui/core';
import ContactsList from "./ContactList";
import currentUser from 'helpers/currentUser';

const Contacts = (props: any) => {
  const { access_token } = currentUser;
  if (!access_token()) {
    return (
      <Box className="w-full flex items-center py-4 px-4">
        <Typography variant="h6" component="div" color="textPrimary">
          You need to go through auth process before accessing contact list. 
        </Typography>
      </Box>
    )
  }

  return (
    <ContactsList />
  );
};

export default Contacts;
