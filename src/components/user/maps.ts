
import queries from '../../queries/user';
import { DIV, H1, A } from "../elements";

const render =
    () => {
        const groups = queries.getMaps().map((group) => {
            const name: string = group.getData().name;
            return (
                DIV({ className: 'group-item' }, 
                A({
                    href:`/edit/${group.id}`,
                }, name)));
        });

        return DIV({}, H1({}, 'Maps'), ...groups);
    };

export default render;
