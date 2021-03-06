/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const SET_AUTH = 'pinterest/App/SET_AUTH';
export const DEFAULT_LOCALE = 'en';
export const LOGOUT_REQUEST = 'pinterest/APP/LOGOUT_REQUEST'; 
export const LOGOUT_SUCCESS = 'pinterest/APP/LOGOUT_SUCCESS'; 
export const LOGOUT_ERROR = 'pinterest/APP/LOGOUT_ERROR'; 

export const VOTE_PHOTO_REQUEST = 'pinterest/APP/VOTE_PHOTO_REQUEST';
export const VOTE_PHOTO_SUCCESS = 'pinterest/APP/VOTE_PHOTO_SUCCESS'; 
export const VOTE_PHOTO_ERROR = 'pinterest/APP/VOTE_PHOTO_ERROR'; 

export const TEST_PHOTO_ERROR = 'pinterest/APP/TEST_PHOTO_ERROR'; 

export const SHOW_NOTIFICATION = 'pinterest/APP/SHOW_NOTIFICATION';
export const CLEAR_NOTIFICATION = 'pinterest/APP/CLEAR_NOTIFICATION';

