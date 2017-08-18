
import { query } from './index';


const queries = {
    getUsername() {
        return query('component/login').username;
    },

    getPassword() {
        return query('component/login').password;
    },

};

export default queries;
