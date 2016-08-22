import {PixiAdapter} from "../pixi/PixiAdapter";
import {ISpriteSheetRawData} from "../abstract/data/ISpriteSheetRawData";
import {ISpriteSheetLoadedData} from "../abstract/data/ISpriteSheetLoadedData";
export declare class PixiFlashAdapter extends PixiAdapter {
    processLoadedSpritesheet(id: string, rawData: ISpriteSheetRawData, loadedData: ISpriteSheetLoadedData): void;
}
