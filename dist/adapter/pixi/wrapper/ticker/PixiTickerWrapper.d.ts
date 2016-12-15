import { ITickerWrapper } from "../../../abstract/wrapper/ticker/ITickerWrapper";
import { BaseClassWrapper } from "fcore/dist/index";
import { PIXI } from "../../typings/PIXI";
export declare class PixiTickerWrapper extends BaseClassWrapper implements ITickerWrapper {
    private _pixiTicker;
    protected prevLastTime: number;
    protected lastTime: number;
    constructor();
    protected removeListeners(): void;
    protected addTickerListeners(ticker: PIXI.ticker.Ticker): void;
    protected removeTickerListeners(ticker: PIXI.ticker.Ticker): void;
    protected onTick(deltaTime: number): void;
    protected commitData(): void;
    protected pixiTicker: PIXI.ticker.Ticker;
    readonly fps: number;
    readonly minFPS: number;
    readonly deltaTime: number;
    readonly deltaTimeToTargetFpsCoef: number;
    update(currentTime: number): void;
}
