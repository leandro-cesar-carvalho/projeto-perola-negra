const localStrategy = require('passport-local').Strategy;
const knex = require('../Database/knex');
const bcrypt = require('bcryptjs');

module.exports = (passport) => {
    passport.use(new localStrategy({usernameField: 'usuario', passwordField: 'senha'}, (usuario, senha, done) => {
        knex('clientes').where({
            usuario : usuario
        }).then((data) => {
            if  (!usuario) {
                console.log('Erro')
                return done(null, false, {message : 'Esta conta não existe'});
            } else {
                bcrypt.compare(senha, data[0].senha, (erro, ok) => {
                    if (ok) {
                        return done(null, data[0]);
                    }else {
                        console.log('Erro de senha')
                        return done(null, false, {message : 'Senha incorreta!'});
                    }
                })
            }
        })
    }));

    passport.serializeUser((usuario, done) => {
        console.log('serializing user: ', usuario.id);
        done(null, usuario.id);
    });

    passport.deserializeUser((id, done) => {
        //cliente.findByPk(id)
        knex('clientes').where({
            id:id
        }).then((usuario) => {
            done(null, usuario[0]);
        }).catch((done));
    });
}
