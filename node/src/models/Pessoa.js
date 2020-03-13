const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const PessoaSchema = new mongoose.Schema({

    matricula:{
        type: String,
        required: true,
    },
    tipo:{
        type: String,
        required: true,
    },
    cpf:{
        type: String,
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

PessoaSchema.plugin(mongoosePaginate);
mongoose.model('Pessoa', PessoaSchema);
