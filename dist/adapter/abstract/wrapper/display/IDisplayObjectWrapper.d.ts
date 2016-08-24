import {IBaseClassWrapper, IEventDispatcher, Rectangle} from "fcore/dist/index";
import {IDisplayObjectContainerWrapper} from "./IDisplayObjectContainerWrapper";
export interface IDisplayObjectWrapper extends IBaseClassWrapper, IEventDispatcher<string> {
    isDisplayObjectWrapper: boolean;
    alpha: number;
    x: number;
    y: number;
    scaleX: number;
    scaleY: number;
    visible: boolean;
    interactive: boolean;
    buttonMode: boolean;
    cache: boolean;
    parent: IDisplayObjectContainerWrapper;
    getGlobalBounds(): Rectangle;
    getScaledBounds(): Rectangle;
    checkIfParamIsParent(paramName: string): boolean;
}
