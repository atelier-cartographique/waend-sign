
import queries from '../../queries/login';
import events from '../../events/login';
import { DIV, INPUT, BUTTON } from '../elements';


export interface LoginState {
    username: string;
    password: string;
}

export const defaultLoginState =
    (): LoginState => ({
        username: '',
        password: '',
    });


const render =
    () => (
        DIV({ className: 'login' },
            DIV({}, 'username', INPUT({
                type: 'text',
                onChange(e) {
                    events.updateName(e.target.value);
                },
            })),
            DIV({}, 'password', INPUT({
                type: 'password',
                onChange(e) {
                    events.updatePassword(e.target.value);
                },
            })),
            DIV({}, BUTTON({
                onClick() {
                    const un = queries.getUsername();
                    const pw = queries.getPassword();
                    events.login(un, pw);
                },
            }, 'login')))
    );

export default render;
