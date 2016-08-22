import {PixiSpriteWrapper} from "./PixiSpriteWrapper";
import {IAnimatableSpriteWrapper} from "../../../abstract/wrapper/display/IAnimatableSpriteWrapper";
import {EngineAdapter} from "../../../abstract/EngineAdapter";
import {TickerEvent} from "../../../abstract/wrapper/ticker/TickerEvent";
import {AnimatableSpriteWrapperEvent} from "../../../abstract/wrapper/display/AnimatableSpriteWrapperEvent";
import {ISpriteSheetWrapper} from "../../../abstract/wrapper/display/ISpriteSheetWrapper";
import SpriteSheet = pixiflash.SpriteSheet;
export class PixiAnimatableSpriteWrapper extends PixiSpriteWrapper implements IAnimatableSpriteWrapper {

    public isAnimatableSpriteWrapper:boolean = true;

    private _currentFrame:number;
    private pixiflashSpriteSheet:SpriteSheet;

    private isPlaying:boolean;

    public isLooped:boolean;

    constructor() {
        super();
    }

    protected addListeners():void {
        super.addListeners();

        this.eventListenerHelper.addEventListener(EngineAdapter.instance.mainTicker, TickerEvent.TICK, this.onTick);
    }


    protected onTick():void {
        if (this.isPlaying) {
            if (this.pixiflashSpriteSheet &&
                this.totalFrames > 0) {
                if (this.currentFrame >= this.totalFrames - 1) {
                    this.dispatchEvent(AnimatableSpriteWrapperEvent.ANIMATION_COMPLETE);

                    if (this.isLooped) {
                        this.currentFrame = 0;
                    }

                } else {
                    this.currentFrame++;
                }
            }
        }
    }


    protected commitData():void {
        super.commitData();


        if (this.pixiflashSpriteSheet &&
            this.pixiflashSpriteSheet.frames &&
            this.pixiflashSpriteSheet.frames.length > this.currentFrame) {
            this.texture = this.pixiflashSpriteSheet.getFrame(this.currentFrame);
        }
    }


    public play():void {
        this.isPlaying = true;
    }

    public stop():void {
        this.isPlaying = false;
    }

    public gotoAndPlay(frame:number):void {
        this.play();
        this.currentFrame = frame;
    }

    public gotoAndStop(frame:number):void {
        this.stop();
        this.currentFrame = frame;
    }


    public get spriteSheet():ISpriteSheetWrapper {
        return this.pixiflashSpriteSheet;
    }

    public set spriteSheet(value:ISpriteSheetWrapper) {
        this.pixiflashSpriteSheet = (value as SpriteSheet);
    }


    public get currentFrame():number {
        return this._currentFrame;
    }

    public set currentFrame(value:number) {
        if (this.currentFrame == value) {
            return;
        }

        this._currentFrame = value;

        this.commitData();
    }

    public get totalFrames():number {
        if (this.pixiflashSpriteSheet && this.pixiflashSpriteSheet.frames) {
            return this.pixiflashSpriteSheet.frames.length;

        } else {
            return 0;
        }
    }
}
