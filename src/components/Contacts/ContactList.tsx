import React, { useState, useEffect } from 'react';
import { Typography, Box, List, ListItem, Divider, ListItemText, ListItemAvatar, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import currentUser from 'helpers/currentUser';
import AddContact from './AddContactForm';
import axios from "helpers/apiReq";

interface contact {
  Id: string;
  Name: string;
  PhotoUrl?: string;
  Email?: string;
  MobilePhone?: string;
}

const GET_CONTACTS = `
    SELECT Id, Name, PhotoUrl, Email, MobilePhone
    FROM Contact
    ORDER BY CreatedDate DESC
    LIMIT 20
`;

const FetchContacts = async (setContacts: Function) => {
  const { access_token } = currentUser;
  const response = await axios.get("/services/data/v49.0/query/", {
    params: { q: GET_CONTACTS },
    headers: {
      Authorization: `Bearer ${access_token()}`
    }
  });
  if ((response as any).data && (response as any).data.records) {
    setContacts((response as any).data.records);
  }
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '500px',
    backgroundColor: '#f7fafc',
    marginTop: '20px'
  },
  inline: {
    display: 'inline',
  },
}));


const Contacts = (props: any) => {
  const [contacts, setContacts] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    FetchContacts(setContacts);
  }, [])

  return (
    <Box className="w-full flex py-4 px-4">
       <Box className="w-1/2 py-4 px-4 h-full">
        <Typography variant="h6" component="div" color="textPrimary">
          Add Contact
        </Typography>
        <AddContact refetchContacts={() => FetchContacts(setContacts)} />
      </Box>
      <Box className="w-1/2 py-4 px-4">
        <Typography variant="h6" component="div" color="textPrimary">
          Contacts
        </Typography>
        <List className={classes.root}>
          {(contacts as Array<contact>).map((contact: contact, index, contacts) =>
            (
              <Box key={contact.Id}>
                <ListItem alignItems="flex-start" >
                  <ListItemAvatar>
                    <Avatar alt={contact.Name} src={`https://cors-anywhere.herokuapp.com/https://ap16.salesforce.com${contact.PhotoUrl}`} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={contact.Name}
                    color="primary"
                    secondary={
                      <>
                        <Typography
                          component="span"
                          variant="body2"
                          className={classes.inline}
                          color="primary"
                        >
                          Email
                      </Typography>
                        {` — ${contact.Email}`}
                        {' '}
                        <Typography
                          component="span"
                          variant="body2"
                          className={classes.inline}
                          color="primary"
                        >
                          Mobile
                      </Typography>
                        {` — ${contact.MobilePhone}`}
                      </>
                    }
                  />
                </ListItem>
                {(contacts.length - 1) !== index && <Divider variant="inset" component="li" />}
              </Box>
            )
          )}
        </List>
      </Box>
    </Box>
  );
};

export default Contacts;
