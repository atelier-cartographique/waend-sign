
import queries from '../../queries/user';
import { DIV, H1, A, UL, LI, BUTTON } from "../elements";
import { Group } from "waend-lib/defs";

const addMap = BUTTON({ className: 'add' }, A({ href: '/edit/new' }, "+ add map"));

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
            DIV({ className: 'maps' },
                H1({}, 'Maps'),
                UL({},
                    addMap,
                    ...groups)));
    };

export default render;
