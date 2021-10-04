import { Container, Grid, TextField, Typography, Button } from '@mui/material';
import FormControls from '../Form/FormControls';

const Login = () => {
  const {
    handleInputChange,
    formIsValid,
    handleLogin
  } = FormControls();
  return (
    <>
    <Container maxWidth='sm'>
      <form className='login-form' onSubmit={handleLogin}>
        <Grid
          container
          direction='column'
          justifyContent='center'
        >
            <Typography
              variant='h3'
            >
              BobaTapGo Merchant Portal
            </Typography>
            <TextField
              id='email'
              margin='normal'
              name='email'
              size='small'
              label='Email'
              onChange={handleInputChange}
            />
            <TextField
              id='password'
              // margin='normal'
              name='password'
              size='small'
              label='Password'
              onChange={handleInputChange}
            />
            <Button
              type='submit'
              size='small'
              variant='contained'
              sx={{ mt: 3 }}
              disabled={!formIsValid()}
            >
              Log In
            </Button>
            <Typography
              paragraph
              sx={{ mt: 2 }}
            >
              By logging in you are agreeing to our Merchant Agreement and our Privacy Policy.
            </Typography>
        </Grid>
      </form>
    </Container>
    </>
  )
}

export default Login;