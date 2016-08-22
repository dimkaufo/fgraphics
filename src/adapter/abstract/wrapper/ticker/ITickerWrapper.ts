import {IEventDispatcher} from "fcore/src/index";
export interface ITickerWrapper extends IEventDispatcher<string> {
    fps: number;
    minFPS: number;

    deltaTime: number;
    deltaTimeToTargetFpsCoef: number;

    update(currentTime:number):void;
}
