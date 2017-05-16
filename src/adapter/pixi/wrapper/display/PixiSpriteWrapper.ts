import {ISpriteWrapper} from "../../../abstract/wrapper/display/ISpriteWrapper";
import {Point} from "fcore/dist/index";
import {PixiDisplayObjectContainerWrapper} from "./PixiDisplayObjectContainerWrapper";

// import {PIXI} from "../../typings/index";

export class PixiSpriteWrapper extends PixiDisplayObjectContainerWrapper implements ISpriteWrapper {

    public isSpriteWrapper:boolean = true;

    protected pixiSprite:PIXI.Sprite;

    protected wrapperAnchor: Point = new Point();
    protected wrapperTextureId: string;

    constructor() {
        super();
    }


    protected commitData():void {
        super.commitData();

        this.pixiSprite = (this.object as PIXI.Sprite);
    }


    //public gotoAndStop(frame: number): void
    //{
    //    this.pixiflashSprite.gotoAndStop(frame);
    //}


    public get texture():any {
        return this.pixiSprite.texture;
    }
    public set texture(value:any) {
        this.pixiSprite.texture = value;
    }


    public get textureId():any {
        return this.wrapperTextureId;
    }
    public set textureId(value:any) {
        if (value === this.wrapperTextureId) {
            return;
        }

        this.wrapperTextureId = value;

        this.texture = PIXI.Texture.from(this.textureId);
    }


    public get anchor():Point {
        /*return new Point(
            this.pixiSprite.anchor.x,
            this.pixiSprite.anchor.y
        );*/

        this.wrapperAnchor.x = this.pixiSprite.anchor.x;
        this.wrapperAnchor.y = this.pixiSprite.anchor.y;

        return this.wrapperAnchor;
    }
    public set anchor(value:Point) {
        this.wrapperAnchor.x = value.x;
        this.wrapperAnchor.y = value.y;

        this.pixiSprite.anchor.set(value.x, value.y);
    }
}
