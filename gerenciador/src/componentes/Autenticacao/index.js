import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from 'react-bootstrap/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import '../Autenticacao/styles.css';

export default function index() {

    return (

        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div id="paper">
                <Avatar id="avatar">
                    <LockOutlinedIcon/>
                </Avatar>
                <form noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="matricula"
                        label="Matrícula"
                        name="Matricula"
                        autoFocus
                        color="secondary"
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="Senha"
                        label="Senha"
                        type="password"
                        id="senha"
                        color="secondary"

                    />
                    <Button
                        type="submit"
                        variant="danger" 
                        size="lg" 
                        block
                        id="submit"
                        >
                        Login
          </Button>
                </form>
            </div>
            <Box mt={8}>
            </Box>
        </Container>
    );
}