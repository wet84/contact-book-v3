import axios from 'axios';

const url = 'https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/contacts';

export default axios.create({
    baseURL: url,
    headers: {
        'Content-Type': 'application/json',
    },
});