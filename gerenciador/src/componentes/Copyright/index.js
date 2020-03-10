import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import './styles.css';

const Copyright = () => {
    return (
        <div>
      <Typography variant="body2" id="Copyright">
        {'Copyright © '}
        <Link id="Link">
          Lorena Silveira Lopes
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
      <Typography variant="body2" id="Copyright">
        <Link id="Link">
          Desenvolvido para trabalho de conclusão de curso para Universidade Federal de Ouro Preto
        </Link>{' '}
      </Typography>
      </div>
    );
  }

  export default Copyright;