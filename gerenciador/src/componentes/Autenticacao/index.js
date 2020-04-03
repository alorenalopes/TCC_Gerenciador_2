import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from 'react-bootstrap/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Container from '@material-ui/core/Container';
import '../Autenticacao/styles.css';
import api from '../../servicos/api';
import {useHistory} from 'react-router-dom';


export default function Autenticacao() {

    const history = useHistory();

    const [Matricula, setMatricula] = useState('');
    const [Senha, setSenha] = useState('');

    async function login(e) {
        e.preventDefault();

        console.log(Matricula);
        console.log(Senha);

        try{
         const response = await api.get('Login', {
            headers: {
                matricula: Matricula,
                senha: Senha,
              }
            });
            console.log(response.data.nome)
          localStorage.setItem('matricula', Matricula);
          history.push('/profile');
         
        }catch(err){
          alert('Erro no login, tente novamente');
        }
    }

    return (

        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div id="paper">
                <Avatar id="avatar">
                    <LockOutlinedIcon />
                </Avatar>
                <form onSubmit={login}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        label="Matrícula"
                        autoFocus
                        color="secondary"
                        value={Matricula}
                        onChange={e => setMatricula(e.target.value)}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        label="Senha"
                        type="password"
                        color="secondary"
                        value={Senha}
                        onChange={e => setSenha(e.target.value)}

                    />
                    <Button
                        type="submit"
                        variant="danger"
                        size="lg"
                        block
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