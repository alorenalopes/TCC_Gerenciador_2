import React from 'react'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import './styles.css'

export default function Copyright() {
    return (
        <div className="copyright">
      <Typography className="typography" variant="body2">
        {'Copyright © '}
        <Link className="link">
          Lorena Silveira Lopes
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
      <Typography variant="body2" className="typography">
        <Link className="Link">
          Desenvolvido para trabalho de conclusão de curso para Universidade Federal de Ouro Preto
        </Link>{' '}
      </Typography>
      </div>
    );
  }

