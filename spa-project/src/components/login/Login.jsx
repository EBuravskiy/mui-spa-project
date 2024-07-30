import { Avatar, Typography } from '@mui/material';
import { LoginContainer, StyledTextField, LoginButton } from './style';

export const Login = () => {

    return (
        <>
            <LoginContainer>
                <Avatar sx={{
                    width: 64,
                    height: 64,
                    marginBottom: 1,
                }}>
                </Avatar>
                <Typography component="h1" variant='h5'>
                    Login to continue working!
                </Typography>
                <StyledTextField
                    variant='outlined'
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Login (email)"
                    name='email'
                    autoComplete='email'
                    autoFocus
                >

                </StyledTextField>
                <StyledTextField
                    variant='outlined'
                    margin="normal"
                    required
                    fullWidth
                    id="password"
                    label="Password"
                    name='password'
                    autoComplete='password'
                    autoFocus
                >
                </StyledTextField>
                <LoginButton
                    type='submit'
                    fullWidth
                    variant='contained'
                    color='primary'
                >Enter</LoginButton>
            </LoginContainer>
        </>
    )
}