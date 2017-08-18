
import { query } from './index';
import { Group } from "waend-lib/defs";



const queries = {

    getMaps(): Group[] {
        return query('data/groups');
    },

};

export default queries;
