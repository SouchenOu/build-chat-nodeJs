import { reducerCases } from "./constants";

export const initialState = {
    userInfo : undefined,
    newUser : false,
    contactsPage : false,
};
/******reducer: Defines a function that takes the current state and an action as parameters and returns the new state based on the action type.

The switch statement handles different action types:

reducerCases.SET_USER_INFO: Updates the state by replacing the userInfo property with the userInfo value from the action.
reducerCases.SET_NEW_USER: Logs the action and updates the state by replacing the newUser property with the newUser value from the action.
reducerCases.SET_ALL_CONTACTS_PAGE: Toggles the contactsPage property in the state (changes it to the opposite boolean value).
default: If the action type doesn't match any of the cases, it returns the current state unchanged. */

const reducer = (state, action)=>{
    switch(action.type){
        case reducerCases.SET_USER_INFO :
            return {
                ...state,
                userInfo: action.userInfo,
            }
        case reducerCases.SET_NEW_USER :
            console.log("action2-->", action);
            return {
                ...state,
                newUser: action.newUser,
            }
        case reducerCases.SET_ALL_CONTACTS_PAGE: 
            return {
                ...state,
                contactsPage: !state.contactsPage,
            }
        default : return state;
    }

}

export default reducer;