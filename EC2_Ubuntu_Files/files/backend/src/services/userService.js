const config = require('../config/config');
const pool = require('../config/database');
// const nodemailer = require('nodemailer');
// const {mailtrapUserName, mailtrapPassword} = require('../config/config');
// const transporter = nodemailer.createTransport({
//     host: "smtp.mailtrap.io",
//     port: 2525,
//     auth : {
//     user: mailtrapUserName,
//     pass: mailtrapPassword
//     }
// })
const mailgun = require("mailgun-js");

module.exports.createUser = (fullname, email, password, callback) => {
        console.log('Checking the input parameter variable content.');
        console.log(fullname, email, password);
            pool.getConnection((err, connection) => {
                if (err) {
                    console.log('Database connection error ', err);
                    callback(null, err);
                } else {
                    connection.query(`INSERT INTO user ( fullname, email, user_password, 
                        role_id) VALUES (?,?,?,2) `, [fullname, email, password], (err, rows) => {
                        if (err) {
                            callback(null, err);
                        } else {
                            callback(rows, null);
                        }
                        connection.release();
                    });
                }
            });


    } // End of createUser

module.exports.updateUser = (recordId, newRoleId) => {

        return new Promise((resolve, reject) => {
            //I referred to https://www.codota.com/code/javascript/functions/mysql/Pool/getConnection
            //to prepare the following code pattern which does not use callback technique (uses Promise technique)
            pool.getConnection((err, connection) => {
                if (err) {
                    console.log('Database connection error ', err);
                    resolve(err);
                } else {
                    updateUserQuery = `UPDATE user SET role_id = ? WHERE user_id= ?`;
                    // connection.query(`UPDATE user SET role_id =${newRoleId} WHERE user_id=${recordId}`, (err, rows) => {
                    connection.query(updateUserQuery, [newRoleId, recordId], (err, rows) => {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(rows);
                        }
                        connection.release();
                    });
                }
            });
        }); //End of new Promise object creation

    } //End of updateUser


module.exports.getUserData = (pageNumber, search) => {
        console.log('getUserData method is called.');
        const page = pageNumber;
        if (search == null) { search = ''; };
        const limit = 4; //Due to lack of test files, I have set a 3 instead of larger number such as 10 records per page
        const offset = (page - 1) * limit;

        //If the user did not provide any search text, the search variable
        //should be null. The following console.log should output undefined.
        //console.log(search);
        //-------------- Code which does not use stored procedure -----------
        //Query for fetching data with page number, search text and offset value
        if ((search == '') || (search == null)) {
            console.log('Prepare query without search text');
            userDataQuery = `SELECT user_id, fullname, email, role_name 
        FROM user INNER JOIN role ON user.role_id = role.role_id LIMIT ${limit} OFFSET ${offset};
        SET @total_records =(SELECT count(user_id) FROM user    );SELECT @total_records total_records; `;
        } else {
            userDataQuery = `SELECT user_id, fullname, email, role_name 
        FROM user INNER JOIN role ON user.role_id = role.role_id AND fullname LIKE '%?%'  LIMIT ${limit} OFFSET ${offset};
    SET @total_records =(SELECT count(user_id) FROM user WHERE fullname LIKE '%?%' );SELECT @total_records total_records;`;
        }

        return new Promise((resolve, reject) => {
            //I referred to https://www.codota.com/code/javascript/functions/mysql/Pool/getConnection
            //to prepare the following code pattern which does not use callback technique (uses Promise technique)
            pool.getConnection((err, connection) => {
                if (err) {
                    console.log('Database connection error ', err);
                    resolve(err);
                } else {

                    connection.query(userDataQuery, [search, offset, limit], (err, results) => {
                        if (err) {
                            reject(err);
                        } else {
                            console.log('Accessing total number of rows : ', results[2][0].total_records);
                            resolve(results);
                        }
                        connection.release();
                    });
                }
            });
        }); //End of new Promise object creation

    } //End of getUserData

module.exports.getOneUserData = function(recordId) {
        console.log('getOneUserData method is called.');
        console.log('Prepare query to fetch one user record');
        userDataQuery = `SELECT user_id, fullname, email, user.role_id, role_name 
        FROM user INNER JOIN role ON user.role_id = role.role_id WHERE user_id= ?`;
        // FROM user INNER JOIN role ON user.role_id = role.role_id WHERE user_id=` + recordId;

        return new Promise((resolve, reject) => {
            //I referred to https://www.codota.com/code/javascript/functions/mysql/Pool/getConnection
            //to prepare the following code pattern which does not use callback technique (uses Promise technique)
            pool.getConnection((err, connection) => {
                if (err) {
                    console.log('Database connection error ', err);
                    resolve(err);
                } else {

                    //connection.query(userDataQuery, (err, results) => {  
                    connection.query(userDataQuery, [recordId], (err, results) => {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(results);
                        }
                        connection.release();
                    });
                }
            });
        }); //End of new Promise object creation

    } //End of getOneUserData
    module.exports.getOneUserDataByEmail = function(search) {
        console.log('getOneUserDataByEmail method is called.');
        console.log('Prepare query to fetch one user record');
        userDataQuery = `SELECT user_id, fullname, email, user.role_id, role_name 
        FROM user INNER JOIN role ON user.role_id = role.role_id WHERE email= ?`;

        //FROM user INNER JOIN role on user.role_id = role.role_id WHERE email = '" + search + "'";

        return new Promise((resolve, reject) => {
            //I referred to https://www.codota.com/code/javascript/functions/mysql/Pool/getConnection
            //to prepare the following code pattern which does not use callback technique (uses Promise technique)
            pool.getConnection((err, connection) => {
                if (err) {
                    console.log('Database connection error ', err);
                    resolve(err);
                } else {
                    //connection.query(userDataQuery, (err, results)=> {
                    connection.query(userDataQuery, [search],(err, results) => {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(results);
                        }
                        connection.release();
                    });
                }
            });
        }); //End of new Promise object creation

    } //End of getOneUserDataByEmail

module.exports.getOneDesignData = function(recordId) {
        console.log('getOneDesignData method is called.');
        console.log('Prepare query to fetch one design record');
        userDataQuery = `SELECT file_id,cloudinary_file_id,cloudinary_url,design_title,design_description 
        FROM file WHERE file_id= ?`;
        //FROM file WHERE file_id=` + recordId;

        return new Promise((resolve, reject) => {
            //I referred to https://www.codota.com/code/javascript/functions/mysql/Pool/getConnection
            //to prepare the following code pattern which does not use callback technique (uses Promise technique)
            pool.getConnection((err, connection) => {
                if (err) {
                    console.log('Database connection error ', err);
                    resolve(err);
                } else {
                    //connection.query(userDataQuery, (err, results) => {
                    connection.query(userDataQuery, [recordId], (err, results) => {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(results);
                        }
                        connection.release();
                    });
                }
            });
        }); //End of new Promise object creation

    } //End of getOneDesignData

module.exports.updateDesign = (recordId, title, description) => {

        return new Promise((resolve, reject) => {
            //I referred to https://www.codota.com/code/javascript/functions/mysql/Pool/getConnection
            //to prepare the following code pattern which does not use callback technique (uses Promise technique)
            pool.getConnection((err, connection) => {
                if (err) {
                    console.log('Database connection error ', err);
                    resolve(err);
                } else {
                    updateDesignQuery = `UPDATE file SET design_title =? , design_description=? WHERE file_id= ?`;

                    //connection.query(`UPDATE file SET design_title ='${title}' , design_description='${description}' WHERE file_id=${recordId}`, (err, rows) => {
                    connection.query(updateDesignQuery, [title, description, recordId], (err, rows) => {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(rows);
                        }
                        connection.release();
                    });
                }
            });
        }); //End of new Promise object creation

    } //End of updateDesign


module.exports.createOneEmailInvitation = (userData,recipientName, recipientEmail) => {
    
    return new Promise((resolve, reject) => {
        console.log('userService createOneEmailInvitation is running');
        console.log(userData);
        console.log(config.mailGunApiKey);
        console.log(config.mailGunDomain);

        try{
            let info = transporter.sendMail({
                from: `${userData.fullname}<${userData.email}>`,
                to: recipientEmail,
                subject: "Hello from Bee competition system admin",
                text: `Hi ${recipientName} You have been invited by your friend, ${userData.email}`,
                html: `Hi ${recipientName} You have been invited by your friend,`
            });
            resolve({status:'success', description:'Email sent'});
        }catch(error){
            reject({status:'fail', description: error});
        } //from video stop from here

        mailGunVerifiedEmail = 'tan_hu-shien@ichat.sp.edu.sg';
        //userEmail variable should have the user's actual email.
        //When the system sends an email to the target recipient, the user
        //should receive a copy. Since you use free version of MailGun,
        //you can only hardcode your own verified email to test your code instead
        //of using the user's respective email.
        userEmail = 'tan_hu-shien@ichat.sp.edu.sg';
        recipientEmail = mailGunVerifiedEmail;
        //I copied the code from official MailGun API tutorial website.
        const mg = mailgun({ apiKey: config.mailGunApiKey, domain: config.mailGunDomain });

        console.log(`recipientEmail variable has been converted to (hardcode to) ${mailGunVerifiedEmail}`);
        let emailData = {
            from: `competition system admin <admin@samples.mailgun.org>`,
            cc: userEmail,
            to: recipientEmail,
            subject: `Your friend ${userData.fullname}, <${userData.email}> has invited you to join a competition!`,
            text: `Hi ${recipientName} <br />You have been invited by your friend, ${userData.fullname} to participate in a competition at http://localhost:3001`
        };
        mg.messages().send(emailData, function (error, body) {
            if(error){
                console.log(`Sending email has failed`,error);
                
                reject(error);
                
            }else{   
            console.log(`Sent email.`,body);
                resolve({status: 'done'});
            }
        });
    }); //End of new Promise object creation

    } //End of createOneEmailInvitation

