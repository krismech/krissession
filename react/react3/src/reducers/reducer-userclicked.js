
export default function(state =null, action){
switch (action.type){

    case "USER_CLICKED":
    console.log("Action is received in reducer")
    console.log(action.payload)
    return action.payload

    break;
    default:
    break;
}
return state;
}