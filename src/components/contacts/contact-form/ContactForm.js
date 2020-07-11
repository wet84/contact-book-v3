import React from 'react';
import { connect } from 'react-redux';
import './contactForm.scss';
import { closeForm, changeFormItem, saveForm, validForm } from '../../../store/actions'

const TITLE_FORM = "Form";
const ADD_CONTACT = "Add contact";
const HIDE_FORM = "hide form";

function ContactForm({ hideForm, onChange, formItem, onSubmit, validateInput, isValidInput }) {

    function onInputChange (e) {
        const { name, value } = e.target;
        const changes =  {
            [name]: value
        };
        onChange(changes);
        validateInput(changes);
    };

    function onFormSubmit(e){
        e.preventDefault();
        onSubmit(formItem);
    }

    return (
        <div>
            <div className="contact-form-wrapper">
                <h2>{TITLE_FORM}</h2>
                <form className="contact-form" onSubmit={onFormSubmit}>
                    <input
                        className={isValidInput.name !=='' ? '' : 'error'}
                        type="text"
                        name="name"
                        placeholder="Your name"
                        value={formItem.name}
                        onChange={onInputChange}
                    />
                    <input
                        className={isValidInput.surname !=='' ? '' : 'error'}
                        type="text"
                        name="surname"
                        placeholder="Your surname"
                        value={formItem.surname}
                        onChange={onInputChange}
                    />
                    <input
                        className={isValidInput.phone !=='' ? '' : 'error'}
                        type="text"
                        name="phone"
                        placeholder="Your telephone number"
                        value={formItem.phone}
                        onChange={onInputChange}
                    />
                    <input className={
                        isValidInput.name === '' || isValidInput.surname === '' || isValidInput.phone === '' 
                        ? 'disable-button' : 'button'}
                        type="submit"
                        value={ADD_CONTACT}/>
                </form>

                <button className="button" onClick={() => hideForm()}>{HIDE_FORM}</button>
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        formItem: state.formItem,
        isValidInput: state.isValidInput,
    };
}

const mapDispatchToProps = {
    hideForm: closeForm,
    onChange: changeFormItem,
    onSubmit: saveForm,
    validateInput: validForm
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
