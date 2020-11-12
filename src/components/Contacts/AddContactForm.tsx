import React, { useState } from 'react';
import { TextField, Button, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import axios from "helpers/apiReq";

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '500px',
      marginTop: '20px'
    },
  },
  button: {
    margin: theme.spacing(1),
  },
}));

const AddContact = (props: any) => {
  const { refetchContacts } = props;
  const [contact, setContact] = useState({});
  const classes = useStyles();
  const handleChange = (event: any, field: string) => {
    setContact({ ...contact, [field]: event.target.value });
  };

  const saveContact = async () => {
    const response = await axios.post("/services/data/v49.0/sobjects/Contact/", JSON.stringify(contact), {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    if ((response as any).data && (response as any).data.success) {
      refetchContacts();
    }
  };

  return (
    <form className={classes.root} noValidate autoComplete="off" onSubmit={(e) => e.preventDefault()}>
      <Box>
        <TextField
          id="outlined-name-input"
          label="First Name"
          type="Text"
          autoComplete="current-password"
          variant="outlined"
          onChange={(e) => handleChange(e, 'FirstName')}
          value={(contact as any).FirstName}
        />
        <TextField
          id="outlined-name-input"
          label="Last Name"
          type="Text"
          autoComplete="current-password"
          variant="outlined"
          onChange={(e) => handleChange(e, 'LastName')}
          value={(contact as any).LastName}
        />
        <TextField
          id="outlined-email-input"
          label="Email"
          type="email"
          autoComplete="current-password"
          variant="outlined"
          onChange={(e) => handleChange(e, 'Email')}
          value={(contact as any).Email}
        />
        <TextField
          id="outlined-email-input"
          label="Mobile"
          type="tel"
          autoComplete="current-password"
          variant="outlined"
          onChange={(e) => handleChange(e, 'MobilePhone')}
          value={(contact as any).MobilePhone}
        />
      </Box>
      <Button
        variant="contained"
        color="primary"
        size="medium"
        className={classes.button}
        onClick={saveContact}
      >
        Save
      </Button>
    </form >

  );

}

export default AddContact;