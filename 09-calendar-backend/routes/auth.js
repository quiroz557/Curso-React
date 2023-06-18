/*
    Rutas de usuarios /Auth
    host + /api/auth
*/

const { Router } = require('express');
const router = Router();
const { crearUsuario, loginUsuario, renovarToken,  } = require('../controllers/auth');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');



router.post(
    '/register', 
    [ //Middlewares
         check('name','El nombre es obligatorio').not().isEmpty(),
         check('email','El email es obligatorio').not().isEmpty(),
         check('password','El password debe de ser de 6 caracteres').isLength({min: 6}),
         validarCampos
    ],
    crearUsuario
);

router.post(
    '/',
    [ //Middlewares
        check('email','El email es obligatorio').not().isEmpty(),
        check('password','El password debe de ser de 6 caracteres').isLength({min: 6}),
        validarCampos
    ],
    loginUsuario
);

router.get('/renewtoken', validarJWT, renovarToken);

module.exports = router;