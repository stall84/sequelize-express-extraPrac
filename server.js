const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('./models');
const prompt = require('prompt-promise');

//const user = require('./models/user');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extend: true}));

const PORT = process.env.PORT || 3000;

// Input prompt for user/message 

var userObj = {
    userName: '',
    email: '',
};

var postObj = {
    postBody: ''
};    

prompt('Welcome to Message-Post. Enter to Username then hit enter')
    .then(function userName(val) {
        userObj.userName = val;
        return prompt('Now enter users email');
    })
    .then(function email(val) {
        userObj.email = val;
        console.log(userObj);
        addUser(userObj);
        return prompt('Now enter your post/message');
    })
    .then(function message(val) {
        postObj.postBody = val;
        addPost(postObj);
        prompt.done();
    })
    .catch (err => {
        console.log('problem occurred: ' + err);
        prompt.finish();
    })



function addUser (userObj) {
    db.User.create(userObj)
    .then(response =>{
        console.log(response);
    })
    .catch (err => {
        console.error('error adding user: ' + err);
    }) 
};

function addPost (postObj) {
    db.Posts.create(postObj)
    .then(response =>{
        console.log(response);
    })
    .catch (err => {
        console.error('error adding user: ' + err);
    }) 
};



app.listen(PORT, () => {
    console.log(`Message-Post server is UP on port: ${PORT}`);
});



