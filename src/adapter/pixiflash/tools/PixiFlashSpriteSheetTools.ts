import SpriteSheet = pixiflash.SpriteSheet;
import {IPixiFlashLoadedSpriteSheetData} from "../data/IPixiFlashLoadedSpriteSheetData";

export class PixiFlashSpriteSheetTools {

    static fromLoadedData (id:string, createJSSpriteSheet:IPixiFlashLoadedSpriteSheetData):SpriteSheet {
        // Create a new spritesheet object
        var spriteSheet = new SpriteSheet();
        spriteSheet.addToGlobal(id);

        // Clone the data
        var data = {
            frames: createJSSpriteSheet.frames.concat(),
            images: []
        };

        createJSSpriteSheet.images.forEach(
            (value:HTMLImageElement | string, index:number, array:(HTMLImageElement | string)[]):void => {
                var tempTexture:PIXI.BaseTexture;
                if (value instanceof HTMLImageElement) {
                    tempTexture = new PIXI.BaseTexture(<HTMLImageElement>value);

                } else {
                    tempTexture = PIXI.BaseTexture.fromImage(<string>value);
                }

                data.images[index] = tempTexture;
            }
        );

        spriteSheet._addFrames(data);

        //
        return spriteSheet;
    };
}