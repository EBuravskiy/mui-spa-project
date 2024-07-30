import { Avatar, Typography } from '@mui/material';
import { LoginButton, LoginContainer, StyledTextField } from './style';

export const Reset = () => {

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
                    Reset the password!
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
                <LoginButton
                    type='submit'
                    fullWidth
                    variant='contained'
                    color='primary'
                >Reset the password</LoginButton>
            </LoginContainer>
        </>
    )
}