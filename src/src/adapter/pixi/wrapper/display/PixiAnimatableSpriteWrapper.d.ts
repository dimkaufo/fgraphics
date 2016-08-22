import {PixiSpriteWrapper} from "./PixiSpriteWrapper";
import {IAnimatableSpriteWrapper} from "../../../abstract/wrapper/display/IAnimatableSpriteWrapper";
import {ISpriteSheetWrapper} from "../../../abstract/wrapper/display/ISpriteSheetWrapper";
export declare class PixiAnimatableSpriteWrapper extends PixiSpriteWrapper implements IAnimatableSpriteWrapper {
    isAnimatableSpriteWrapper: boolean;
    private _currentFrame;
    private pixiflashSpriteSheet;
    private isPlaying;
    isLooped: boolean;
    constructor();
    protected addListeners(): void;
    protected onTick(): void;
    protected commitData(): void;
    play(): void;
    stop(): void;
    gotoAndPlay(frame: number): void;
    gotoAndStop(frame: number): void;
    spriteSheet: ISpriteSheetWrapper;
    currentFrame: number;
    totalFrames: number;
}
