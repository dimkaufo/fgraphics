import {IBaseClassWrapper, IEventDispatcher, Rectangle, Point} from "fcore/dist/index";
import {IDisplayObjectContainerWrapper} from "./IDisplayObjectContainerWrapper";


export interface IDisplayObjectWrapper extends IBaseClassWrapper {
    // A way to check if object is an instance of the IDisplayObjectWrapper
    isDisplayObjectWrapper: boolean;


    alpha:number;

    x: number;
    y: number;

    width:number;
    height:number;

    scaleX: number;
    scaleY: number;

    visible: boolean;
    interactive: boolean;
    buttonMode: boolean;
    cursor: string;
    cache: boolean;

    parent: IDisplayObjectContainerWrapper;

    isAddedToStage:boolean;

    getGlobalBounds(): Rectangle;
    getLocalBounds(): Rectangle;

    toGlobal(position:Point):Point;
    toLocal(position:Point):Point;

    // resize(width:number, height:number): void;


    checkIfParamIsParent(paramName:string):boolean;
    updateAddedToStage(isAdded:boolean):void;
}
