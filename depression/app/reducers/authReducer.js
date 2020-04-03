import {START_GOOGLE_SIGN_IN, 
    GOOGLE_SIGN_IN_SUCCESS, 
    GOOGLE_SIGN_IN_FAILED,
    START_FB_SIGNIN,
    FB_SIGNIN_SUCCESS,
    FB_SIGNIN_FAILED,
    START_USER_FETCH_FROM_ASYNC,
    USER_FETCH_FROM_ASYNC_FAILED,
    USER_FETCH_FROM_ASYNC_SUCCESS, 
    SIGN_OUT_SUCCESS, 
    SIGN_OUT_FAILED, 
    START_SIGN_OUT, 
    START_EMAIL_PASSWORD_LOGIN,
    EMAIL_PASSWORD_LOGIN_SUCCESS,
    EMAIL_PASSWORD_LOGIN_FAILED,
    PICKER_IMAGE_SOURCE_SUCCESS,
    UPLOAD_IMAGE_STARTED,
    UPLOAD_IMAGE_FINISHED,
    FIRESTORE_UPLOAD_STARTED,
    FIRESTORE_UPLOAD_FAILED,
    FIRESTORE_UPLOAD_SUCCESS,
    START_EMAIL_PASSWORD_SIGNIN,
    EMAIL_PASSWORD_SIGNIN_SUCCESS,
    EMAIL_PASSWORD_SIGNIN_FAILED,
} from '../actions/types';

const DEFAULT_STATE={
    isAuthenticated: false,
    errorMessage: '',
    user:{},
    email: '',
    password: '',
    progressBarStatus: false,
    userFetchLoading: false,
    loading: false,
    imageSource: '',
    SignIn: false,
}
export default (state=DEFAULT_STATE, action)=>{
    switch(action.type){
        case START_SIGN_OUT:
            console.log("sign out reducer")
            return {
                ...state,
                loading: true
            }
        case SIGN_OUT_SUCCESS:
            return{
                ...state,
                user:{},
                loading: false,
                isAuthenticated: false,
                SignIn: false,
            }
        case SIGN_OUT_FAILED:
            return{
                ...state,
                loading: false
            }
        case START_USER_FETCH_FROM_ASYNC:
            return{
                ...state,
                userFetchLoading: true,
                user:{}
            }
        case USER_FETCH_FROM_ASYNC_FAILED:
            return{
                ...state,
                userFetchLoading: false,
                user:{}
            }
        case USER_FETCH_FROM_ASYNC_SUCCESS:
            return{
                ...state,
                isAuthenticated: true,
                userFetchLoading: false,
                user: action.payload
            }
        case START_FB_SIGNIN:
            return{
                ...state,
                loading: true,
                SignIn: false,
                user:{}
            }
        case FB_SIGNIN_SUCCESS:
            return{
                ...state,
                loading: false,
                SignIn: true,
                user: action.payload
            }
        case FB_SIGNIN_FAILED:
            return{
                ...state,
                loading: false,
                SignIn: false,
                user:{}
            }
        case START_GOOGLE_SIGN_IN:
            return{
                ...state,
                loading: true,
                progressBarStatus: true,
            }
        case GOOGLE_SIGN_IN_SUCCESS:
            return{
                ...state,
                progressBarStatus: false,
                user: action.payload,
                SignIn: true
            }
        case GOOGLE_SIGN_IN_FAILED:
            return{
                ...state,
                errorMessage: action.payload,
                progressBarStatus: false
            }
        case START_EMAIL_PASSWORD_SIGNIN:
            return{
                ...state,
                SignIn: false,
                progressBarStatus: true,
                user: {}
            }
        case EMAIL_PASSWORD_SIGNIN_SUCCESS:
            return{
                ...state, 
                SignIn: true,
                user: action.payload,
                progressBarStatus: false,   
            }
        case EMAIL_PASSWORD_SIGNIN_FAILED:
            return{
                ...state,
                progressBarStatus: false,
                errorMessage: action.payload
            }
        case START_EMAIL_PASSWORD_LOGIN:
            return{
                ...state,
                isAuthenticated: false,
                progressBarStatus: true,
                user: {}
            }
        case EMAIL_PASSWORD_LOGIN_SUCCESS:
            return{
                ...state, 
                isAuthenticated: true,
                user: action.payload,
                progressBarStatus: false,
                
            }
        case EMAIL_PASSWORD_LOGIN_FAILED:
            return{
                ...state,
                progressBarStatus: false,
                errorMessage: action.payload
            }
        case PICKER_IMAGE_SOURCE_SUCCESS:
            return{
                ...state,
                imageSource: action.payload
            }
        case UPLOAD_IMAGE_STARTED:
            return{
                ...state,
                progressBarStatus: true,
            }
        case UPLOAD_IMAGE_FINISHED: 
            return{
                ...state,
                progressBarStatus: false,
            }
        case FIRESTORE_UPLOAD_STARTED:
            return{
                ...state,
                progressBarStatus: true,
            }
        case FIRESTORE_UPLOAD_FAILED:
            return{
                ...state,
                progressBarStatus: false,
            }
        case FIRESTORE_UPLOAD_SUCCESS:
            return{
                ...state,
                progressBarStatus: false,
                isAuthenticated: true,
            }
        default:
            return state
    }
}
