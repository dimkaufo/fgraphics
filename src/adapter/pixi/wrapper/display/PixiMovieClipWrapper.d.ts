import {PixiDisplayObjectContainerWrapper} from "./PixiDisplayObjectContainerWrapper";
import {IMovieClipWrapper} from "../../../abstract/wrapper/display/IDisplayMovieClipWrapper";
import {IMovieClipLabel} from "../../../abstract/wrapper/display/IMovieClipLabel";
import MovieClip = pixiflash.MovieClip;
export declare class PixiMovieClipWrapper extends PixiDisplayObjectContainerWrapper implements IMovieClipWrapper {
    isMovieClipWrapper: boolean;
    protected pixiflashMovieClip: MovieClip;
    constructor();
    protected commitData(): void;
    gotoAndPlay(frame: number | string): void;
    gotoAndStop(frame: number | string): void;
    labels: IMovieClipLabel[];
    totalFrames: number;
}
