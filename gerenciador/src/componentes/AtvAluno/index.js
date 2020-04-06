import React,{ useState, useEffect } from 'react';
import './styles.css'
import api from '../../servicos/api';
import ProgressBar from 'react-bootstrap/ProgressBar'

export default function AtvAluno() {
    const now = 30;

    return (
        <div>
        <div className="progresso">
            <ProgressBar animated variant="danger" now={now} label={`${now}%`} />
        </div>
        </div>
    );
}