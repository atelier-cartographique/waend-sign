
import queries from '../../queries/app';
import { DIV } from '../elements';


const renderTitle =
    (title: string) => (
        DIV({ className: 'header' },
            DIV({ className: 'title' }, title)));

const render =
    () => renderTitle(queries.getTitle());

export default render;
