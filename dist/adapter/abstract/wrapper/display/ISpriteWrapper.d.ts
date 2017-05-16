import { Point } from "fcore/dist/index";
import { IDisplayObjectContainerWrapper } from "./IDisplayObjectContainerWrapper";
export interface ISpriteWrapper extends IDisplayObjectContainerWrapper {
    isSpriteWrapper: boolean;
    textureId: string;
    texture: any;
    anchor: Point;
}
