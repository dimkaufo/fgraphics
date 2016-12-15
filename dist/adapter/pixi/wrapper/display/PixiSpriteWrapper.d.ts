import { ISpriteWrapper } from "../../../abstract/wrapper/display/ISpriteWrapper";
import { Point } from "fcore/dist/index";
import { PixiDisplayObjectContainerWrapper } from "./PixiDisplayObjectContainerWrapper";
import { PIXI } from "../../typings/PIXI";
export declare class PixiSpriteWrapper extends PixiDisplayObjectContainerWrapper implements ISpriteWrapper {
    isSpriteWrapper: boolean;
    protected pixiSprite: PIXI.Sprite;
    constructor();
    protected commitData(): void;
    texture: any;
    anchor: Point;
}
