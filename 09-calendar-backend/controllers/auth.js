const { response } = require('express');
const Usuario = require('../models/Usuario');
const bcrypt = require('bcryptjs');
const { generarJWT } = require('../helpers/jwt');


const crearUsuario =  async (req, res = response) => { 

    const { email, password } = req.body;
    try {  
        
        let usuario = await Usuario.findOne({ email });

        if( usuario ) {
            return res.status(400).json({
                ok: true,
                msg: 'El usuario ya existe',
            })
        }

        usuario = new Usuario(req.body);

        //Encriptar contraseña
        const salt = bcrypt.genSaltSync();
        usuario.password = bcrypt.hashSync(password, salt);

        //Generar JWT
        const token = await generarJWT(usuario.id, usuario.name);
    
        await usuario.save();
    
        res.status(200).json({
            ok: true,
            uid: usuario.id,
            name: usuario.name,
            token
        })
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            uid: usuario.id,
            name: usuario.name   
        })
    } 

}

const loginUsuario = async (req, res = response) => { 
    const { email, password } = req.body;

    try {
        let usuario = await Usuario.findOne({ email });

        if( !usuario ) {
            return res.status(400).json({
                ok: true,
                msg: 'El usuario o la contraseña no son correctos',
            })
        }

        const validPasswords = bcrypt.compareSync(password, usuario.password);

        if( !validPasswords ) {
            return res.status(400).json({
                ok: true,
                msg: 'Password incorrecto',
            })
        }

        const token = await generarJWT(usuario.id, usuario.name);

        res.status(200).json({
            ok: true,
            uid: usuario.id,
            name: usuario.name,
            token
        })
    }   
    catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador'   
        })
    }
}

const renovarToken = async (req, res = response) => { 

   const {uid, name} = req;
   
   //Generar un nuevo jwt
   const token = await generarJWT(uid, name);

    res.json({
        ok: true,
        uid,
        name,
        token
    })
}

module.exports = {
    crearUsuario,
    loginUsuario,
    renovarToken
}