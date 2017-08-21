

import maps from './maps';
import user from './user';
import { DIV } from "../elements";



const render =
    () => (
        DIV({},
            user(),
            maps())
    );

export default render;
