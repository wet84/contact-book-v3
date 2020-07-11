
import React from 'react'
import { connect } from 'react-redux';
import ContactList from './contact-list/ContactList';
import ContactForm from './contact-form/ContactForm';
import {openForm, deleteContact} from '../../store/actions'
import './contacts.scss'

const NAME = 'Name';
const SURNAME = 'Surname';
const PHONE = 'Phone';
const ADD_CONTACT = 'add contact';

function renderHeader () {
    return (
        <thead>
            <tr>
                <th>{NAME}</th>
                <th>{SURNAME}</th>
                <th>{PHONE}</th>
                <th></th>
            </tr>
        </thead>
    )
}

function Contacts({contacts, formVisible, showForm, onDeleteContact}) {
    return (
        <div>
            <div className="contacts-list-wrapper">
                <table className="contacts-list">
                    { renderHeader() }
                    <tbody >
                        {contacts.map((contact) => (
                            <ContactList
                                contact={contact}
                                key={contact.id}
                                onDeleteContact={onDeleteContact}
                            ></ContactList>
                        ))}
                    </tbody>
                </table>
            </div>
            <button className="button" onClick={() => showForm()}>{ADD_CONTACT}</button>
            {formVisible ? <ContactForm /> : null}
        </div>
    )
}

function mapStateToProps(state) {
    return {
        contacts: state.contacts,
        formVisible: state.formVisible,
    };
}

const mapDispatchToProps = {
    showForm: openForm,
    onDeleteContact: deleteContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
