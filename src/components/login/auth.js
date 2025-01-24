let isLoggedIn = false;

function storeToken(token){
    sessionStorage.setItem("tokenID",token);
}

function deleteToken(){
    sessionStorage.removeItem("tokenID");
}

function retrieveToken(){
    return sessionStorage.getItem("tokenID");
}

function storeUser(user){
    sessionStorage.setItem("userinfo",JSON.stringify(user));
}

function deleteUser(){
    sessionStorage.removeItem("userinfo");
}

function retrieveUser(){
    return sessionStorage.getItem("userinfo");
}

function getRole(){
    let user = JSON.parse(retrieveUser());
    return user.role;
}

export default {isLoggedIn: isLoggedIn,
    storeToken: storeToken,
    retrieveToken: retrieveToken,
    deleteToken: deleteToken,
    storeUser: storeUser,
    deleteUser: deleteUser,
    retrieveUser: retrieveUser,
    getRole: getRole
};