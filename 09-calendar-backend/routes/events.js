const { Router } = require("express");
const router = Router();
const { getEvents, createEvent, updateEvent, deleteEvent } = require("../controllers/events");
const { validarJWT } = require("../middlewares/validar-jwt");
const { check } = require("express-validator");
const { validarCampos } = require("../middlewares/validar-campos");
const { isDate } = require("../helpers/isDate");

//Todas las rutas tienen que pasar por la validación del JWT

router.use(validarJWT);

//Obtener eventos
router.get('/', getEvents);

//Crear un nuevo evento
router.post('/createEvent', 
    [
        check('title', 'El título es obligatorio').not().isEmpty(),
        check('start', 'Fecha de inicio es obligatoria').custom(isDate),
        check('end', 'Fecha de finalización es obligatoria').custom(isDate),
        validarCampos
    ],
    createEvent);

//Actualizar evento
router.put('/:id', updateEvent);

//Borrar evento
router.delete('/:id', deleteEvent);

module.exports = router;

