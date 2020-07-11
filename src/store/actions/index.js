import api from '../../contactBookServices';

export const ACTION_SET_CONTACT_BOOK = 'ACTION_SET_CONTACT_BOOK';
export function setContactBook(data) {
    return {
        type: ACTION_SET_CONTACT_BOOK,
        payload: data,
    };
}

export const ACTION_OPEN_FORM = 'ACTION_OPEN_FORM';
export function openForm() {
    return {
        type: ACTION_OPEN_FORM,
    };
}

export const ACTION_CLOSE_FORM = 'ACTION_CLOSE_FORM';
export function closeForm() {
    return {
        type: ACTION_CLOSE_FORM,
    };
}

export const ACTION_CHANGE_FORM_ITEM = 'ACTION_CHANGE_FORM_ITEM';
export function changeFormItem(changes) {
    return {
        type: ACTION_CHANGE_FORM_ITEM,
        payload: changes,
    };
}

export const ACTION_VALID_FORM = 'ACTION_VALID_FORM';
export function validForm(changes) {
    return {
        type: ACTION_VALID_FORM,
        payload: changes,
    };
}

export const ACTION_SAVE_ITEM = 'ACTION_SAVE_ITEM';
export function saveForm(changes) {
    return function (dispatch) {
        api.post('', changes).then((resp) =>
        dispatch({
                type: ACTION_SAVE_ITEM,
                payload: resp.data,
            })
        );
    };
}

export const ACTION_DELETE_CONTACT = 'ACTION_DELETE_CONTACT';
export function deleteContact(id) {
    return function (dispatch) {
        api.delete(id).then(() =>
            dispatch({
                type: ACTION_DELETE_CONTACT,
                payload: id,
            })
        );
    };
}

export function fetchContactBook() {
    return function (dispatch) {
        api.get().then((resp) => dispatch(setContactBook(resp.data)));
    };
}