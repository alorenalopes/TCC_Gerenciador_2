import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import "./styles.css"


const Titulo = () => {
return(
<Container className="container_titulo" maxWidth="sm">
<Typography className= "titulo" component="h2" variant="overline"  gutterBottom>
 <font className="fonte">E</font>ncontre seu  <font className="fonte">O</font>rientador
</Typography>
</Container>
);
}

export default Titulo;