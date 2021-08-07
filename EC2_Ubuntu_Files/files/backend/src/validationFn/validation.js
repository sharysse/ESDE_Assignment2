const validator = require('validator');
const jwt = require('jsonwebtoken');
const logger = require('../logger');

var validationFn = {

    verifyTokenUserID: function (req, res, next) { // logger.info("verifyTokenUserID middleware called"); 
        let token = req.headers['authorization']; res.type('json'); 
        if (!token || !token.includes("Bearer ")) { 
            console.log("Unauthorized Access Attempt Was Made, No Token") 
            res.status(403); res.send(`{"Message":"Not Authorized"}`); 
            logger.error(`403 unauthorized access attempt was made, no token ||  ${res.statusMessage} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
        } 
        else { 
            token = token.split('Bearer ')[1]; 
            jwt.verify(token,config.JWTKey,function(err,decoded){ 
                if(err){ 
                    console.log("Unauthorized Access Attempt Was Made, Invalid Token") 
                    res.status(403); res.send(`{"Message":"Not Authorized"}`); 
                    logger.error(`403 unauthorized access attempt was made, no token ||  ${res.statusMessage} - ${req.originalUrl} - ${req.method} - ${req.ip}`);

                }
                else{ 
                    req.body.userId = decoded.id; 
                    req.role = decoded.role; 
                    next(); } });
                }
            },

    validateRegister: function (req, res, next) {

        var fullname = req.body.fullname;
        var email = req.body.email;
        var password = req.body.password;

        refullname = new RegExp(`^[a-zA-Z\s,']+$`);
        reEmail = new RegExp(`^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$`);
        rePassword = new RegExp(`^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]{8,}$`);
    

        
        if (refullname.test(fullname) && rePassword.test(password) && reEmail.test(email)) {

            next();
        } else {

            res.status(500);
            res.send(`{"Message":"Error!!"}`);
            logger.error(`500 error ||  ${res.statusMessage} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
        }
    },

    validateUserid: function (req, res, next) {
        var userid = req.params.userid;
        reUserid = new RegExp(`^[1-9][0-9]*$`);
        

        if (reUserid.test(userid)) {
            next();
        } else {

            res.status(500);
            res.send(`{"Message":"Error!!"}`);
            logger.error(`500 error ||  ${res.statusMessage} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
        }

    },

    validateUpdateSubmission: function (req, res, next) { 
        console.log("validateUpdateSubmission middleware called"); 
        const fileId = req.body.fileId; 
        const designTitleInput = req.body.designTitle; 
        const designDescriptionInput = req.body.designDescription; 
        reDesignTitleInput = new RegExp(`^[\\w\\s]+$`); 
        reDesignDescriptionInput = new RegExp(`^[\\w\\s\\.]+$`); 
        reFileId = new RegExp(`^\\d+$`); 
        if (reDesignTitleInput.test(designTitleInput) && reDesignDescriptionInput.test(designDescriptionInput) && reFileId.test(fileId)) {

        next(); 
    } else { 
        console.log("Error while submitting, most likely validation error"); 
        res.status(500); 
        res.send(`{"message":"Error!!"}`); } 
        logger.error(`500 error while submitting, most likely validation error ||  ${res.statusMessage} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
    },

    validateCreateSubmission: function (req, res, next) { 
        console.log("validateCreateSubmission middleware called"); 
        const designTitleInput = req.body.designTitle; 
        const designDescriptionInput = req.body.designDescription; 
        reDesignTitleInput = new RegExp(`^[\\w\\s]+$`); 
        reDesignDescriptionInput = new RegExp(`^[\\w\\s\\.]+$`); 
        reUserid = new RegExp(`^\\d+$`); 
        if (reDesignTitleInput.test(designTitleInput) && reDesignDescriptionInput.test(designDescriptionInput)) {

        next(); 
    } else { 
        console.log("Error while submitting, most likely validation error"); 
        res.status(500); 
        res.send(`{"message":"Error!!"}`); } 
        logger.error(`500 error while submitting, most likely validation error ||  ${res.statusMessage} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
    },


    sanitizeResult: function (result){
        //[
        //{"username":"<jon>;","email":"jon@gmail.com"},
        //{"username":"mary","email":"mary@gmail.com"},
        //..
        //]
        //&lt;jon&gt;
        for (i = 0; i < result.length; i++) {
            var row = result[i];
            console.log(row);
            for (var key in row) {
                val = row[key];
                if (typeof val === "string") {
                    row[key] = validator.escape(val);
                }
            }
        }

    }

}

module.exports = validationFn;