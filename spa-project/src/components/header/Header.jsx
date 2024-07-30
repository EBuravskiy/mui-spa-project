import { AppBar, LinearProgress, Toolbar, Container, Link, IconButton, Box } from '@mui/material'
import { Button, Avatar, Typography } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';

export const Header = () => {
    return (
        <>
            <AppBar position='fixed' sx={{background: 'whitesmoke'}}>
                <LinearProgress 
                sx={{
                    position: 'fixed',
                    width: '100%',
                    }}>
                </LinearProgress>
                <Toolbar>
                    <Container sx={{
                        display:'flex',
                        justifyContent: "space-between",
                        alignItems: 'center'
                    }}>
                        <Link to="/">
                            <IconButton edge="start" color="primary">
                                Logo
                            </IconButton>
                        </Link>
                        <Box display="flex" alignItems='center'>
                            <Button
                                variant='outlined'
                                component="a"
                                href='/table'
                                endIcon={<LoginIcon></LoginIcon>}>
                                    <Box display="flex">
                                        <Avatar sx={{
                                            width: 24,
                                            height: 24,
                                            marginRight: 1,
                                        }}>
                                        </Avatar>
                                        <Typography component="span">
                                            Enter
                                        </Typography>
                                    </Box>
                            </Button>
                        </Box>
                    </Container>
                </Toolbar>
            </AppBar>
        </>
    )
}