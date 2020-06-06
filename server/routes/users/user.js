let users = new Array();

function addUser(userInfo){
    let result = "";
    let isExist = false;
    for(var i = 0; i < users.length; i++){
        if(users[i].email === userInfo.email){
            isExist = true;
            break;
        }
    }

    if(!isExist){
        users.push(userInfo);
        result = "SUCCESS";
    }
    else{
        result = "EXIST";
    }

    return result;
}

function getUser(simpleUserInfo){
    let userEmail = simpleUserInfo.email;
    let userPw = simpleUserInfo.pw;
    let result = "";
    for(var i = 0; i < users.length; i++){
        if(userEmail === users[i].email && userPw === users[i].pw){
            result = users[i].keyword;
        }
    }

    return result;
}

module.exports = {addUser, getUser};
