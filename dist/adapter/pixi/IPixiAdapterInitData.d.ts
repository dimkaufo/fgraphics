/// <reference types="pixi.js" />
export interface IPixiAdapterInitData {
    renderer?: PIXI.SystemRenderer;
    rendererSettings?: any;
    rendererWidth?: number;
    rendererHeight?: number;
    nativeStage?: PIXI.Container;
}
