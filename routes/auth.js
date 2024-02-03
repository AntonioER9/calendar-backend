/*
    Rutas de Usuarios / Auth
    host + /api/auth
*/

const { Router } = require('express');
const { check } = require('express-validator');
const router = Router();

const { createUser, login, revalidateToken } = require('../controllers/auth');
const { fieldsValidator } = require('../middlewares/fields-validator');


router.post(
    '/new',
    [ //middlewares
        check('name', 'El nombre es obligatorio').not().isEmpty(),
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'El password debe tener 6 caracteres').isLength({min: 6}),
        fieldsValidator
    ],
    createUser
);

router.post(
    '/',
    [
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'El password debe tener 6 caracteres').isLength({min: 6}),
        fieldsValidator
    ],
    login
);

router.get('/renew', revalidateToken)

module.exports = router;