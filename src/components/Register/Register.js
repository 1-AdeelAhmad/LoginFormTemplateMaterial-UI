import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import PermIdentityIcon from '@material-ui/icons/PermIdentityOutlined'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: '0 auto',
    marginBottom: '1rem',
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Register = ({ onRouteChange}) => {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
      <Paper style={{padding: '2rem'}}>
        <Avatar className={classes.avatar}>
            <PermIdentityIcon/>
        </Avatar>
            <Typography component="h1" variant="h5">
            Register
            </Typography>
            <form className={classes.form} noValidate>
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="name"
                label="Name"
                name="name"
                type='text'
                autoComplete="name"
                autoFocus
            />
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                type='email'
                autoComplete="email"
            />
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
            />
            
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                value='Register'
                onClick={ () => onRouteChange('dashboard') }
            > Register
            </Button>
            <Grid container>
                <Grid item xs>
                    <Link onClick={() => onRouteChange('login')} variant="body2">Back</Link>
                </Grid>
            </Grid>
            </form>
        </Paper>
      </div>
    </Container>
  );
}

export default Register