import { Container, Grid, TextField, Typography, Button } from '@mui/material';

const Login = () => {
  return (
    <>
    <Container maxWidth='sm'>
      <form className='login-form'>
        <Grid
          container
          direction='column'
          justifyContent='center'
        >
            <Typography
              variant='h3'
            >
              BobaTapGo Merchant
            </Typography>
            <TextField
              id='email'
              name='email'
              size='small'
              label='Email'
            />
            <TextField
              id='password'
              name='password'
              size='small'
              label='Password'
            />
            <Button
              type='submit'
              size='small'
              variant='contained'
            >
              Log In
            </Button>
        </Grid>
      </form>
    </Container>
    </>
  )
}

export default Login;