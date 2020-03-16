const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const ProfessorSchema = new mongoose.Schema({

    cpf:{
        type: String,
        required: true,
    },
    area:{
        type: String,
        required: true,
    },
    disponibilidade:{
        type: String,
        required: true,
    },
    propostas:{
        type:String,
        required:true,
    }
});

ProfessorSchema.plugin(mongoosePaginate);
mongoose.model('Professor', ProfessorSchema);
