import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import api from '../../servicos/api'
import {useNavigate} from 'react-router-dom'
import {FiUser} from 'react-icons/fi'
import './styles.css'


export default function LoginUsuarios() {

    const navigate = useNavigate();

    const [Matricula, setMatricula] = useState('');
    const [Senha, setSenha] = useState('');

    async function login(e) {
        e.preventDefault();

        try{
         const response = await api.get('Login', {
            headers: {
                matricula: Matricula,
                senha: Senha,
              }
            });
          localStorage.setItem('matricula', Matricula);
          if(response.data.tipo === "1"){
          navigate('/perfil_Inicial_Aluno');
          }else if(response.data.tipo === "2"){
          navigate('/perfil_Inicial_Professor');}
          else{
            alert('Erro no login, tente novamente');
          }
        }catch(err){
          alert('Erro no login, tente novamente');
        }
    }

    return (

        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div id="paper">
            <FiUser className="avatar" size={40} color="#e0293d" />
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