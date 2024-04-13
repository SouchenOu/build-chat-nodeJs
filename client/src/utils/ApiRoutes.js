export const HOST = "http://localhost:8000"

const AuthRoute = `${HOST}/api/auth`;
const MessageRoute = `${HOST}/api/messages`

export const check_user_Route = `${AuthRoute}/check-user`;
export const REGISTER_USER_ROUTE = `${AuthRoute}/register-user`;
export const Get_All_Users = `${AuthRoute}/All-Users`;


/******messages */


export const CREATE_MESSAGE = `${MessageRoute}/Create-message`;
export const GET_MESSAGES = `${MessageRoute}/get-messages`;
export const ADD_IMAGE_MESSAGE_ROUTES = `${MessageRoute}/add-image-message`;
export const ADD_AUDIO_MESSAGE_ROUTES = `${MessageRoute}/add-audio-message`;
export  const searching_messages = `${MessageRoute}/search-messages`;
export const GET_CONTACTS = `${MessageRoute}/get-contacts`;
export const FILTER_CONTACTS = `${MessageRoute}/filter-contacts`;