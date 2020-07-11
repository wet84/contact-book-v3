import {
    ACTION_SET_CONTACT_BOOK,
    ACTION_OPEN_FORM,
    ACTION_CLOSE_FORM,
    ACTION_CHANGE_FORM_ITEM,
    ACTION_SAVE_ITEM,
    ACTION_DELETE_CONTACT,
    ACTION_VALID_FORM,
} from '../actions';

const EMPTY_STRING = '';

const initialState = {
    contacts: [],
    formVisible: false,
    formItem: {
        name: EMPTY_STRING,
        surname: EMPTY_STRING,
        phone: EMPTY_STRING,
    },
    
    isValidInput: {
        name: EMPTY_STRING,
        surname: EMPTY_STRING,
        phone: EMPTY_STRING,
    },
};

export default function (state = initialState, { type, payload }) {

    switch (type) {
        case ACTION_SET_CONTACT_BOOK:
            return { ...state, contacts: payload };
        
        case ACTION_OPEN_FORM:
            return { ...state, formVisible: true };
        
        case ACTION_CLOSE_FORM:
            return { ...state, formVisible: false };

        case ACTION_CHANGE_FORM_ITEM:
            return {
                ...state,
                formItem: { ...state.formItem, ...payload },
            };

        case ACTION_SAVE_ITEM:
            return {
                ...state,
                contacts: [...state.contacts, payload],
                formVisible: false,
                formItem: null,
                isValidInput: {
                    name: EMPTY_STRING,
                    surname: EMPTY_STRING,
                    phone: EMPTY_STRING,
                },
            };
            
        case ACTION_DELETE_CONTACT:
            return {
                ...state,
                contacts: state.contacts.filter((contact) => contact.id !== payload),
            }

        case ACTION_VALID_FORM:
            return {
                ...state,
                isValidInput: { ...state.isValidInput, ...payload },
            }

        default:
            return state;
    }
}