const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const TccSchema = new mongoose.Schema({

    matriculaAluno:{
        type: String,
        required: true,
    },
    matriculaProfessor:{
        type: String,
        required: true,
    },
    codigoTcc:{
        type: String,
        required: true,
    },
    nome:{
        type: String,
        required: true,
    },
});

TccSchema.plugin(mongoosePaginate);
mongoose.model('Tcc', TccSchema);
