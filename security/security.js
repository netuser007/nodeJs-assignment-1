const adminUser = require('./auth').adminUser;

const authorize = (req,res,next) => {
    //console.log('security !');

    if(!req.headers.authorization) {
        return res.status(401).json({
            error: 'Missing Authorization details!'
        });
    }

    const authStr = req.headers.authorization.split(' ')[1];
    const [userName,password] = Buffer.from(authStr,'base64').toString().split(':');

    if (userName == adminUser.userName && password === adminUser.password) {
        next()
    } else {
        //redirect to unAuthrized endpoint
        res.redirect('/unauthorise');
    }
}

module.exports = {
    authorize
}