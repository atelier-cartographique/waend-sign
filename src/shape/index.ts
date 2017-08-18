

export type AppLayout =
    | 'main';


// State Interface


export interface IShapeApp {
    'app/user': string | null;
    'app/layout': AppLayout;

    // 'component/...': ...

    // 'port/...': ...
}


export interface IShapeData {

}

export type IShape = IShapeApp & IShapeData;

// Initial Application State 

export const appShape: IShapeApp = {
    'app/user': null,
    'app/layout': 'main',
};
