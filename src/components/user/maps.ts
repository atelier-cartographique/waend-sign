
import queries from '../../queries/user';
import { DIV, H1, A, UL, LI } from "../elements";
import { Group } from "waend-lib/defs";

const addMap = DIV({}, A({ href: '/edit/new' }, "+ add map"));

const renderMapItem =
    (group: Group) => (
        LI({ className: 'group-item' },
            A({
                href: `/edit/${group.id}`,
            }, group.getData().name)));


const render =
    () => {
        const groups = queries.getMaps().map(renderMapItem);

        return (
            DIV({},
                H1({}, 'Maps'),
                addMap,
                UL({},
                    ...groups)));
    };

export default render;
