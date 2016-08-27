import {IEngineAdapterInitData} from "../abstract/IEngineAdapterInitData";
export interface IPixiAdapterInitData extends IEngineAdapterInitData {
    renderer?:PIXI.SystemRenderer;
    stage?:PIXI.Container;
}
