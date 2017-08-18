
import { stringify } from 'querystring';
import * as debug from 'debug';
import { dispatch } from './index';
import { AppLayout } from '../shape';
import { getconfig } from 'waend-lib';
import { Transport, PostOptions, getBinder } from 'waend-shell';


const logger = debug('waend:events/app');

const mainLayout: AppLayout = 'main';

const events = {

    login(username: string, password: string) {
        const transport = new Transport();

        getconfig('loginUrl')
            .then((loginUrl) => {
                const options: PostOptions<void> = {
                    url: loginUrl,
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    body: stringify({ username, password }),
                    parse: () => { },
                };

                return transport.post(options);
            })
            .then(() => getBinder().getMe())
            .then((user) => {
                dispatch('data/user', () => user);
                dispatch('app/layout', () => mainLayout);
            });

    },


    updateName(n: string) {
        dispatch('component/login', s => Object.assign(s, { username: n }));
    },

    updatePassword(p: string) {
        dispatch('component/login', s => Object.assign(s, { password: p }));
    },
};

export default events;

logger('loaded');
