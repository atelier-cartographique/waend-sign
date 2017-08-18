
import queries from '../../queries/user';
import { DIV, H1 } from "../elements";

const render =
    () => {
        const groups = queries.getMaps().map((group) => {
            const name: string = group.getData().name;
            return DIV({ className: 'group-item' }, name, group.id);
        });

        return DIV({}, H1({}, 'Maps'), ...groups);
    };

export default render;
