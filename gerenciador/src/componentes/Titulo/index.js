import React, {useState, useEffect} from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import "./styles.css"
import api from '../../servicos/api'
import '../LoginUsuarios/styles.css'

export default function Titulo(props) {

    const[Nome, setNome] = useState([]);

    useEffect(() => {
        api.get(`Nome/${localStorage.matricula}`).then(response => {
          setNome(response.data);
      })
      },[Nome]);

    return (


        <Container className="container_titulo" maxWidth="sm">
            {props.tituloHome && <Typography className="titulo" component="h2" variant="overline" gutterBottom>
                <font className="fonte">E</font>ncontre seu  <font className="fonte">O</font>rientador
            </Typography>}
            {!props.tituloHome &&
            Nome.map(nomes => (
            <Typography className="titulo" component="h2" variant="overline" gutterBottom key={nomes.matricula}>
                 <font className="nome"> Bem-vindo</font>  {(nomes.nome).split(' ')[0]} {(nomes.nome).split(' ')[1]} 
            </Typography>
            ))}

        </Container>

    );
}
