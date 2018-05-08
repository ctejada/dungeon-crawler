const constructorMethod = app => {
    // app.use('/', formRoutes);
    app.get('/public', (req, res) => {
        console.log('public resource');
        res.sendFile(path.resolve('static/site.css'));
    });

    app.use('*', (req, resp) => {
        resp.redirect('/');
    });
};

module.exports = constructorMethod;