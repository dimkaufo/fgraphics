import {PixiAdapter} from "../pixi/PixiAdapter";
import {PixiFlashSpriteSheetTools} from "./tools/PixiFlashSpriteSheetTools";
import {IPixiFlashLoadedSpriteSheetData} from "./data/IPixiFlashLoadedSpriteSheetData";
import {ISpriteSheetRawData} from "../abstract/data/ISpriteSheetRawData";
import {ISpriteSheetLoadedData} from "../abstract/data/ISpriteSheetLoadedData";

export class PixiFlashAdapter extends PixiAdapter {

    public processLoadedSpritesheet(
        id:string,
        rawData:ISpriteSheetRawData,
        loadedData:ISpriteSheetLoadedData):void {

        var pixiFlashSpriteSheetData:IPixiFlashLoadedSpriteSheetData = {
            frames: rawData.frames,
            images: loadedData._images
        };

        PixiFlashSpriteSheetTools.fromLoadedData(
            id,
            pixiFlashSpriteSheetData
        );
    }

}
