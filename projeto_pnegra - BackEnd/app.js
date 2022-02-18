//Express
const express = require('express');
const app = express();
//Gerenciamento do Banco de Dados
const knex = require('./Database/knex');
//Sessões
const session = require('express-session');
const flash = require('connect-flash');
//Cors
var cors = require('cors')
//Bcrypt (Hash para senha)
const bcrypt = require('bcryptjs');
//Passport (Autenticação de Usuário)
const passport = require('passport');
require('./config/auth')(passport);
const {logado} = require('./helpers/userCheck');
const port = 2022;

//Configuração de Cors
app.use(cors({credentials: true, origin: 'http://192.168.0.6:8080'}))

//Configuração do BodyParser
app.use(express.urlencoded({extended : false}));
app.use(express.json());

//Configuração de sessões
app.use(session({
    secret: 'BarbeariaPerolaNegra',
    resave: true,
    saveUninitialized: true
}));
//Configuração do passport como middleware
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

//Middleware
app.use( (req, res, next) => {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    //Variável global caso apresentar algum erro
    res.locals.error = req.flash('error');
    //Variável com os dados do usuário logado
    res.locals.user = req.user || null;
    next();
});


//Processo de inserção de usuário no banco de dados
app.post('/confirma-cadastro', (req, res) => {
    //Variável para receber erros
    let erros = [];

    //Armazenando os valores de requisição en uma variável objeto
    const user = {
        nome : req.body.nome,
        cpf : req.body.cpf,
        endereco : req.body.endereco,
        bairro : req.body.bairro,
        telefone : req.body.telefone,
        usuario : req.body.usuario,
        senha : req.body.senha
    };

    if(!user.nome || typeof user.nome == undefined || user.nome == null) {
        erros.push({texto: 'Nome inválido'});
    };
    if(!user.cpf || typeof user.cpf == undefined || user.cpf == null) {
        erros.push({texto: 'CPF inválido'});
    };
    if(!user.endereco || typeof user.endereco == undefined || user.endereco == null) {
        erros.push({texto: 'Endereço inválido'});
    };
    if(!user.bairro || typeof user.bairro == undefined || user.bairro == null) {
        erros.push({texto: 'Bairro inválido'});
    };
    if(!user.telefone || typeof user.telefone == undefined || user.telefone == null) {
        erros.push({texto: 'Telefone inválido'});
    };
    if(!user.usuario || typeof user.usuario == undefined || user.usuario == null) {
        erros.push({texto: 'Usuário inválido'});
    }

    if(erros.length > 0) {
        res.render('http://192.168.0.6:8080/cadastro');
    }else {
        //Processo para criptografar a senha do usuário
        bcrypt.genSalt(10, (erro, salt) => {
            bcrypt.hash(user.senha, salt, (erro, hash) => {
                //Se não tiver sucesso o hash da senha
                if(erro) {
                    req.console.log("Erro durante o registro do usuario")
                    res.redirect('http://192.168.0.6:8080/cadastro');
                }else {
                    user.senha = hash;
                    //Inserindo no banco de dados com a senha em hash
                    knex('clientes').insert({
                        nome : user.nome,
                        cpf : user.cpf,
                        endereco : user.endereco,
                        bairro : user.bairro,
                        telefone : user.telefone,
                        usuario : user.usuario,
                        senha : user.senha,
                        createdAt : new Date,
                        updatedAt : new Date
                    }).then( () => {
                        req.flash('success_msg', 'Cadastro Realizado com sucesso');
                        console.log('Cadastro de novo usuário realizado com sucesso')
                        res.redirect('http://192.168.0.6:8080/login');
                    }).catch((erro) => {
                        req.flash('error_msg', 'Houve um erro ao salvar o cadastro, tente novamente')
                        res.send('Erro: ' + erro);
                    })
                }
            })
        })
    }
    
});

//Processo de autenticação do usuário
app.post('/busca-usuario', (req, res, next) => {
    var erros = [];
    passport.authenticate('local', {
        successRedirect: 'http://192.168.0.6:8080/cliente',
        failureRedirect: 'http://192.168.0.6:8080/login',
        failureFlash: true,
    })(req, res, next);
});

//Requisição para apresentar informações sobre o cliente autenticado
app.get('/userInfo', logado, (req, res) => {
    let result = null;
    console.log(req.user.nome + ' Requisitando informações');

    knex('clientes').where({
        id : req.user.id
    }).then( (data) => {
        console.log(data);
        res.send(data[0]);

    }).catch( (error) => {
        console.log(error);
    })
    
});

//Processo de inserção de agendamento no banco de dados
app.post('/agendar', logado, (req, res) => {
    req.body.valor = Number(req.body.valor.substring(3,5));
    
    if(req.body.servicos == '' || typeof req.body.servicos == undefined) {console.log('Erro em serviços')}
    else if(req.body.data == '' || typeof req.body.data == undefined) {console.log('Erro em data')}
    else if(req.body.valor == '' || typeof req.body.servicos == undefined) {console.log('Erro em valores')}

    knex('agendas').insert({
        data : new Date(req.body.data),
        servico : req.body.servicos,
        valor : req.body.valor,
        clienteId : req.user.id,
        createdAt : new Date,
        updatedAt : new Date
    }).then( () => {
        console.log('Agendamento realizado com sucesso!');
        res.redirect('http://192.168.0.6:8080/cliente');
    }).catch((erro) => {
        console.log(erro)
    })

});

//Processo de busca de agendamentos
app.get('/busca-agendamento', logado, (req, res) => {
    console.log('Requisição de agenda do cliente ' + req.user.nome)

    knex('agendas').where({
        clienteId : req.user.id
    }).then( (response) => {
        if(response.length >= 1) {
            console.log(response);
            res.send(response);
        }else {
            result=JSON.stringify('Não há registros no banco de dados');
            return res.json(result);
        };
        
    }).catch( (error) => {
        console.log(error);
    })
        /*
        console.log(response);
        
            JSON.stringify(response);
            res.send(response)
       
    }).catch( (erro) =>{
        res.send('Erro: ' + erro);
    })*/
});

//Processo de Logout do usuário
app.get('/logout', (req, res) => {
    req.logout();
    req.flash('success_msg', 'Desligado com sucesso');
    res.redirect('http://192.168.0.6:8080/');
});

app.listen(port, () => {
    console.log('Server running into ' + port + ' Port!');
})