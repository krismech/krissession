const clickUserAction = function(user){
    console.log("I am action and will received the user")
    console.log(user);
    console.log(user.first);

return({

    type:"USER_CLICKED",
    payload:user
})

}
;
export default clickUserAction;