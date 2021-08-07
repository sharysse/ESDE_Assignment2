const logger = require('../logger');

module.exports.getClientUserId = (req, res, next) => {
        console.log('http header - user ', req.headers['user']);
        req.body.userId = req.headers['user'];
        console.log('Inspect user id which is planted inside the request header : ', req.body.userId);
        if (req.body.userId != null) {
            next()
            return;
        } else {
            res.status(403).json({ message: 'Unauthorized access' });
            logger.error(`403 unauthorized access || ${res.statusMessage} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
            
            return;
        }

    } //End of getClientUserId