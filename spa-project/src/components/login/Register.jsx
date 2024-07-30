import { Avatar, Typography } from '@mui/material';
import { LoginContainer, StyledTextField, LoginButton } from './style';

export const Register = () => {

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
                    Please register to continue working!
                </Typography>
                <StyledTextField
                    variant='outlined'
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Enter your login (email)"
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
                    label="Enter password"
                    name='password'
                    autoComplete='password'
                    autoFocus
                >
                </StyledTextField>

                <StyledTextField
                    variant='outlined'
                    margin="normal"
                    required
                    fullWidth
                    id="password"
                    label="Repeat password"
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
                >Register</LoginButton>
            </LoginContainer>
        </>
    )
}