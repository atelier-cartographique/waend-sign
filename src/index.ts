

import * as debug from 'debug';
import { source } from './source';
import App from './app';
import { appShape, IShape } from './shape';
import { configure as configureEvents } from './events';
import { configure as configureQueries } from './queries';

const logger = debug('waend:index');


const displayException = (err: string) => {
    const title = document.createElement('h1');
    const errorBlock = document.createElement('div');
    const link = document.createElement('a');
    const body = document.body;
    while (body.firstChild) {
        body.removeChild(body.firstChild);
    }
    title.appendChild(document.createTextNode('Sorry, Application Crashed'));
    err.split('\n').forEach((line) => {
        const e = document.createElement('pre');
        e.appendChild(document.createTextNode(line));
        errorBlock.appendChild(e);
    });
    link.setAttribute('href', document.location.href);
    link.appendChild(document.createTextNode('Reload the application'));

    body.appendChild(title);
    body.appendChild(link);
    body.appendChild(errorBlock);

};

document.onreadystatechange = () => {

    if ('interactive' === document.readyState) {

        try {
            const initialState: IShape = {
                ...appShape,
            };
            const start = source<IShape, keyof IShape>(['app/user']);
            const store = start(initialState);
            configureEvents(store);
            configureQueries(store);
            const app = App(store);
            logger('start rendering');
            app.start();
        }
        catch (err) {
            displayException(`${err}`);
            throw (err);
        }
    }
};

logger('loaded');
