import {Point} from "fcore/src/index";
import {IDisplayObjectContainerWrapper} from "./IDisplayObjectContainerWrapper";
export interface ISpriteWrapper extends IDisplayObjectContainerWrapper {
    isSpriteWrapper: boolean;
    texture: any;
    anchor: Point;
}
