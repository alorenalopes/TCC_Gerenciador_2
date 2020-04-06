import React, {useState, useEffect} from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import "./styles.css"
import api from '../../servicos/api';

export default function Titulo(props) {

    const[Nome, setNome] = useState([]);

    useEffect(() => {
        api.get(`Nome/${localStorage.matricula}`).then(response => {
          setNome(response.data);
      })
      },[Nome]);

    return (


        <Container className="container_titulo" maxWidth="sm">
            {props.titulo && <Typography className="titulo" component="h2" variant="overline" gutterBottom>
                <font className="fonte">E</font>ncontre seu  <font className="fonte">O</font>rientador
            </Typography>}
            {Nome.map(nomes => (
            <Typography className="titulo" component="h2" variant="overline" gutterBottom>
                 <font className="nome"> Bem-vindo</font>  {nomes.nome} 
            </Typography>
            ))}
        </Container>

    );
}
