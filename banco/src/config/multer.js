const multer = require('multer')
const path = require('path')
const crypto = require('crypto')

module.exports = {
    dest: path.resolve(__dirname, '..', '..', 'tmp'), //destino dos arquivos
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null,   path.resolve(__dirname, '..', '..', 'tmp'))
        },
        filename: (req, file, cb) => {
            crypto.randomBytes(16, (erro, hash) => {
                if(erro) cb(erro)
                const fileName = `${hash.toString("hex")}-${file.originalname}`;
                cb(null, fileName);
            })
        },
        limits: {
            fileSize: 1 * 1024 * 1024 * 1024,
        },
        fileFilter: (req, file, cb) =>{ //cb: call back
            const allowed = [
                'file/pdf'
            ];
    
            if(allowed.includes(file.mimetype)){
                cb(null, true);
            }else{
                cb(new Error('Tipo do arquivo inválido'))
            }
        },
    }),

    
}