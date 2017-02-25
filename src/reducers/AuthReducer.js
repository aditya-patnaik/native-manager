import { 
	EMAIL_CHANGED,
	PASSWORD_CHANGED,
	LOGIN_USER_SUCCESS,
	LOGIN_USER_FAIL,
	LOGIN_USER
} from '../actions/types';

const INITIAL_STATE = { 
	email: '',
	password: '',
	user: '',
	error: '',
	loading: false
};

export default ( state = INITIAL_STATE, action ) => { //if state is undefined, set it to INITIAL_STATE
	switch (action.type) {
		case EMAIL_CHANGED:
			return { ...state, email: action.payload }; //create a new instance of the existing state, and add the email attribute on top of it with the value of action.payload (If present, update it)
		case PASSWORD_CHANGED:
			return { ...state, password: action.payload };
		case LOGIN_USER:
			return { ...state, loading: true, error: '' };
		case LOGIN_USER_SUCCESS:
			return { ...state, ...INITIAL_STATE, user: action.payload };
		case LOGIN_USER_FAIL:
			return { ...state, error: 'Authentication Failed', password: '', loading: false };
		default:
			return state;
	}
}