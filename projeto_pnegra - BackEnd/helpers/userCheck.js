module.exports = {
    logado : (req, res, next) => {
        if(req.isAuthenticated()) {
            return next();
        } else {
            console.log('Usuario nao logado!' + ' ' + req.user);
            req.flash('error_msg', 'Você deve estar logado para acessar esta página');
            res.redirect('http://localhost:8080/login');
        }
    }
}