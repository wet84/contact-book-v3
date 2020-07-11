import React from 'react'
import './contactList.scss'

const DELETE = "delete";

function ContactList({contact, onDeleteContact}) {

    return (
        <tr className="table-tr">
            <td>{contact.name}</td>
            <td>{contact.surname}</td>
            <td>{contact.phone}</td>
            <td>
                <button className="delete-button" onClick={e => e.stopPropagation() || onDeleteContact(contact.id)}>{DELETE}</button>
            </td>
        </tr>
    )
}

export default ContactList;