import {ISpriteWrapper} from "../../../abstract/wrapper/display/ISpriteWrapper";
import {Point} from "fcore/src/index";
import {PixiDisplayObjectContainerWrapper} from "./PixiDisplayObjectContainerWrapper";
import Sprite = pixiflash.Sprite;

export class PixiSpriteWrapper extends PixiDisplayObjectContainerWrapper implements ISpriteWrapper {

    public isSpriteWrapper:boolean = true;

    protected pixiflashSprite:Sprite;

    constructor() {
        super();
    }


    protected commitData():void {
        super.commitData();

        this.pixiflashSprite = (this.object as Sprite);
    }


    //public gotoAndStop(frame: number): void
    //{
    //    this.pixiflashSprite.gotoAndStop(frame);
    //}


    public get texture():any {
        return this.pixiflashSprite.texture;
    }

    public set texture(value:any) {
        this.pixiflashSprite.texture = value;
    }


    public get anchor():Point {
        return new Point(
            this.pixiflashSprite.anchor.x,
            this.pixiflashSprite.anchor.y
        );
    }

    public set anchor(value:Point) {
        this.pixiflashSprite.anchor = new PIXI.Point(value.x, value.y);
    }
}
