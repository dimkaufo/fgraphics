import { PIXI } from "./typings/PIXI";
export interface IPixiAdapterInitData {
    renderer?: PIXI.SystemRenderer;
    rendererSettings?: PIXI.RendererOptions;
    rendererWidth?: number;
    rendererHeight?: number;
    nativeStage?: PIXI.Container;
}
