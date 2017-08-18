
import * as debug from 'debug';
import { dispatch } from './index';
import { getBinder } from 'waend-shell';


const logger = debug('waend:events/user');


const events = {

    loadMaps(uid: string) {
        getBinder()
            .getGroups(uid)
            .then((groups) => {
                dispatch('data/groups', () => groups);
            });
    },
};

export default events;

logger('loaded');
