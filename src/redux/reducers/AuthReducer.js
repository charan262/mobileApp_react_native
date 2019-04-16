import { AsyncStorage } from 'react-native';

let initialState = {
    validAuth : null
}

export const auth = (state='', action) => {
    switch (action.type) {
        case 'VALID_AUTH':
            return action.payload
        default:
            return state;
    }
}