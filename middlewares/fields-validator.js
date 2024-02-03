const { response } = require('express');
const { validationResult } = require('express-validator');

const fieldsValidator = (req, res = response, next) => {

    // if(name.length < 5) { VAMOS A UTILIZAR EXPRESS VALIDATOR
    //     return res.status(400).json({
    //         ok: false,
    //         msg: 'El nombre debe ser mayor a 5 letras'
    //     })
    // }

    const errors = validationResult(req);
    if ( !errors.isEmpty() ){
        return res.status(400).json({
            ok: false,
            errors: errors.mapped()
        })
    }

    next();

}

module.exports = {
    fieldsValidator
}