import { AsyncStorage } from 'react-native';
const initialState = {
    validAuth: { authCheck: null, error: null },
    authProgress: false
}
export const auth = (state = initialState, action) => {
    switch (action.type) {
        case 'VALID_AUTH':
            return { ...state, validAuth: action.payload }
        case 'AUTH_IN_PROGRESS':
            return { ...state, authProgress: action.payload }
        case 'REMOVE_ERROR':
            return { ...state, validAuth: { error: null } }
        default:
            return state;
    }
}