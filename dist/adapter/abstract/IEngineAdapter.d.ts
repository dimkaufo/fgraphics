import {IEventDispatcher, Point} from "fcore/dist/index";
import {ITickerWrapper} from "./wrapper/ticker/ITickerWrapper";
import {IDisplayObjectWrapper} from "./wrapper/display/IDisplayObjectWrapper";
import {IDisplayObjectContainerWrapper} from "./wrapper/display/IDisplayObjectContainerWrapper";
import {IMovieClipWrapper} from "./wrapper/display/IDisplayMovieClipWrapper";
import {ISpriteWrapper} from "./wrapper/display/ISpriteWrapper";
import {IAnimatableSpriteWrapper} from "./wrapper/display/IAnimatableSpriteWrapper";
import {ITextWrapper} from "./wrapper/display/ITextWrapper";
import {IGraphicsWrapper} from "./wrapper/display/IGraphicsWrapper";
import {DisplayObjectWithNameVO} from "../../tools/display/DisplayObjectWithNameVO";
import {ISpriteSheetRawData} from "./data/ISpriteSheetRawData";
import {ISpriteSheetLoadedData} from "./data/ISpriteSheetLoadedData";
export interface IEngineAdapter extends IEventDispatcher<string> {
    customPreparation(canvas: HTMLElement): void;
    initGraphics(): void;
    renderGraphics(): void;
    changeRenderSize(width: number, height: number): void;
    getRenderSize(): Point;
    mainTicker: ITickerWrapper;
    stage: IDisplayObjectContainerWrapper;
    globalMouseX: number;
    globalMouseY: number;
    BaseDisplayObjectClass: any;
    createDisplayWrapperBasedOnObject<WrapperType extends IDisplayObjectWrapper>(object: any): WrapperType;
    createDisplayObjectContainerWrapper(object?: any): IDisplayObjectContainerWrapper;
    createPerformanceDisplayObjectContainerWrapper(object?: any): IDisplayObjectContainerWrapper;
    createDisplayObjectWrapper(object?: any): IDisplayObjectWrapper;
    createGraphicsWrapper(object?: any): IGraphicsWrapper;
    createSpriteWrapper(object?: any): ISpriteWrapper;
    createTextWrapper(object?: any): ITextWrapper;
    createMovieClipWrapper?(object?: any): IMovieClipWrapper;
    processLoadedSpritesheet?(id: string, rawData: ISpriteSheetRawData, loadedData: ISpriteSheetLoadedData): void;
    createAnimatableSpriteWrapper?(object?: any): IAnimatableSpriteWrapper;
    findChildrenByNamePart<ChildType extends IDisplayObjectWrapper>(nativeContainer: any, namePart: string, isRecursive: boolean): DisplayObjectWithNameVO<ChildType>[];
    findChildByName<ChildType extends IDisplayObjectWrapper>(nativeContainer: any, childName: string, isRecursive: boolean): ChildType;
    getNativeObjectsUnderPoint(root: any, x: number, y: number): IObjectUnderPointVO;
}
export interface IObjectUnderPointVO {
    object: any;
    children: IObjectUnderPointVO[];
}
