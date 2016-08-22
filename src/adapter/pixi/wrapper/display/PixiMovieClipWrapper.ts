import {PixiDisplayObjectContainerWrapper} from "./PixiDisplayObjectContainerWrapper";
import {IMovieClipWrapper} from "../../../abstract/wrapper/display/IDisplayMovieClipWrapper";
import {IMovieClipLabel} from "../../../abstract/wrapper/display/IMovieClipLabel";
import MovieClip = pixiflash.MovieClip;

export class PixiMovieClipWrapper extends PixiDisplayObjectContainerWrapper implements IMovieClipWrapper {

    public isMovieClipWrapper:boolean = true;

    protected pixiflashMovieClip:MovieClip;

    constructor() {
        super();
    }


    protected commitData():void {
        super.commitData();

        this.pixiflashMovieClip = (this.object as MovieClip);
    }


    public gotoAndPlay(frame:number | string):void {
        this.pixiflashMovieClip.gotoAndPlay(frame);
    }

    public gotoAndStop(frame:number | string):void {
        this.pixiflashMovieClip.gotoAndStop(frame);
    }

    public get labels():IMovieClipLabel[] {
        return this.pixiflashMovieClip.labels;
    }

    public get totalFrames():number {
        return this.pixiflashMovieClip.timeline.duration;
    }

}
