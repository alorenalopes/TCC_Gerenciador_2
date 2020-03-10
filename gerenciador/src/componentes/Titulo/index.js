import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import "./styles.css"


const Titulo = () => {
return(
<Container maxWidth="sm">
<Typography component="h2" variant="overline" id="Titulo" gutterBottom>
 <font id="Fonte">E</font>ncontre seu  <font id="Fonte">O</font>rientador
</Typography>
</Container>
);
}

export default Titulo;