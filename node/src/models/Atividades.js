const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const AtividadesSchema = new mongoose.Schema({

    codigoTcc:{
        type: String,
        required: true,
    },
    atividade:{
        type: String,
        required: true,
    },
    descricao:{
        type: String,
        required: true,
    },
    dataEntrega:{
        type: String,
        required: true,
    },

});

AtividadesSchema.plugin(mongoosePaginate);
mongoose.model('Atividades', AtividadesSchema);
