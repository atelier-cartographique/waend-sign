
import queries from '../../queries/app';
import { DIV } from '../elements';
import maps from './maps';


const renderTitle =
    (title: string) => (
        DIV({ className: 'header' },
            DIV({ className: 'title' }, title),
            maps()));

const render =
    () => renderTitle(queries.getTitle());

export default render;
