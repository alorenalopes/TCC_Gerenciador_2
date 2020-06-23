import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import TextField from '@material-ui/core/TextField'
import Container from '@material-ui/core/Container'
import api from '../../servicos/api'
import {useNavigate} from 'react-router-dom'
import {FiUser} from 'react-icons/fi'
import './styles.css'


export default function LoginUsuarios() {

    const navigate = useNavigate();

    const [Matricula, setMatricula] = useState('');
    const [Senha, setSenha] = useState('');
    const [state, setState] = useState(3);

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
            setState(0)
          }
        }catch(err){
          setState(0)
        }
    }

    function alerta() {
        if (state === 0) {
          return (<div class="alert alert-danger" role="alert">
            Erro no login, tente novamente!
          </div>)
        } else{
          return(<div></div>)
        }
      }

    return (
        <Container maxWidth="xs">
            {alerta()}
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
        </Container>
    );
}