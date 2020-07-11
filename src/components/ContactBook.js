import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
    Link,
} from 'react-router-dom';
import Home from './home/Home';
import About from './about/About';
import Contacts from './contacts/Contacts';
import './contactBook.scss';

const TITLE = 'Contact Book';

function ContactBook() {
    return (
        <Router>
            <header>
                <h2>{TITLE}</h2>
                <ul className="main-menu">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contacts">Contacts</Link>
                    </li>
                </ul>
            </header>
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/contacts">
                    <Contacts />
                </Route>
                <Route path="*">
                    <Redirect to="/" />
                </Route>
            </Switch>
        </Router>
    )
}

export default ContactBook
