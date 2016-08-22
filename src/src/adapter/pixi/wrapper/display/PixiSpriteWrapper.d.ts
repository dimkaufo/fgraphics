import {ISpriteWrapper} from "../../../abstract/wrapper/display/ISpriteWrapper";
import {Point} from "fcore/src/index";
import {PixiDisplayObjectContainerWrapper} from "./PixiDisplayObjectContainerWrapper";
import Sprite = pixiflash.Sprite;
export declare class PixiSpriteWrapper extends PixiDisplayObjectContainerWrapper implements ISpriteWrapper {
    isSpriteWrapper: boolean;
    protected pixiflashSprite: Sprite;
    constructor();
    protected commitData(): void;
    texture: any;
    anchor: Point;
}
