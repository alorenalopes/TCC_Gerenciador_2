const mongoose = require('mongoose');

const PersonSchema = new mongoose.Schema({

    matricula:{
        type: Number,
        required: true,
    },
    tipo:{
        type: Number,
        required: true,
    },
    cpf:{
        type: Number,
        required: true,
    },
    senha:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    nome:{
        type: String,
        required: true,
    },
});

mongoose.model('Person', PersonSchema);
