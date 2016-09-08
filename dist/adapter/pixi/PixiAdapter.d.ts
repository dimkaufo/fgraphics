import { Point } from "fcore/dist/index";
import { PixiTickerWrapper } from "./wrapper/ticker/PixiTickerWrapper";
import { IEngineAdapter, IObjectUnderPointVO } from "../abstract/IEngineAdapter";
import { EngineAdapter } from "../abstract/EngineAdapter";
import { IDisplayObjectContainerWrapper } from "../abstract/wrapper/display/IDisplayObjectContainerWrapper";
import { ITickerWrapper } from "../abstract/wrapper/ticker/ITickerWrapper";
import { IDisplayObjectWrapper } from "../abstract/wrapper/display/IDisplayObjectWrapper";
import { ITextWrapper } from "../abstract/wrapper/display/ITextWrapper";
import { ISpriteWrapper } from "../abstract/wrapper/display/ISpriteWrapper";
import { PixiDisplayObjectContainerWrapper } from "./wrapper/display/PixiDisplayObjectContainerWrapper";
import { IGraphicsWrapper } from "../abstract/wrapper/display/IGraphicsWrapper";
import { DisplayObjectWithNameVO } from "../../tools/display/DisplayObjectWithNameVO";
import { IPixiAdapterInitData } from "./IPixiAdapterInitData";
export declare class PixiAdapter extends EngineAdapter implements IEngineAdapter {
    protected renderer: PIXI.SystemRenderer;
    protected _stage: PixiDisplayObjectContainerWrapper;
    protected tickerWrapper: PixiTickerWrapper;
    protected rendererSize: Point;
    private cachedPoint;
    constructor(initData?: IPixiAdapterInitData);
    protected construction(initData?: IPixiAdapterInitData): void;
    stage: IDisplayObjectContainerWrapper;
    canvas: HTMLCanvasElement;
    rendererWidth: number;
    rendererHeight: number;
    mainTicker: ITickerWrapper;
    BaseDisplayObjectClass: any;
    renderGraphics(): void;
    changeRenderSize(width: number, height: number): void;
    createDisplayWrapperBasedOnObject<WrapperType extends IDisplayObjectWrapper>(object: any): WrapperType;
    createTextWrapper(object?: any): ITextWrapper;
    createSpriteWrapper(object?: any): ISpriteWrapper;
    createDisplayObjectContainerWrapper(object?: any): IDisplayObjectContainerWrapper;
    createPerformanceDisplayObjectContainerWrapper(object?: any): IDisplayObjectContainerWrapper;
    createDisplayObjectWrapper(object?: any): IDisplayObjectWrapper;
    createGraphicsWrapper(object?: any): IGraphicsWrapper;
    globalMouseX: number;
    globalMouseY: number;
    findChildrenByNamePart<ChildType extends IDisplayObjectWrapper>(nativeContainer: any, namePart: string, isRecursive: boolean): DisplayObjectWithNameVO<ChildType>[];
    findChildByName<ChildType extends IDisplayObjectWrapper>(nativeContainer: any, childName: string, isRecursive: boolean): ChildType;
    getNativeObjectsUnderPoint(root: PIXI.DisplayObject, x: number, y: number): IObjectUnderPointVO;
}
