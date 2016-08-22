"use strict";
var SpriteSheet = pixiflash.SpriteSheet;
var PixiFlashSpriteSheetTools = (function () {
    function PixiFlashSpriteSheetTools() {
    }
    PixiFlashSpriteSheetTools.fromLoadedData = function (id, createJSSpriteSheet) {
        // Create a new spritesheet object
        var spriteSheet = new SpriteSheet();
        spriteSheet.addToGlobal(id);
        // Clone the data
        var data = {
            frames: createJSSpriteSheet.frames.concat(),
            images: []
        };
        createJSSpriteSheet.images.forEach(function (value, index, array) {
            var tempTexture;
            if (value instanceof HTMLImageElement) {
                tempTexture = new PIXI.BaseTexture(value);
            }
            else {
                tempTexture = PIXI.BaseTexture.fromImage(value);
            }
            data.images[index] = tempTexture;
        });
        spriteSheet._addFrames(data);
        //
        return spriteSheet;
    };
    ;
    return PixiFlashSpriteSheetTools;
}());
exports.PixiFlashSpriteSheetTools = PixiFlashSpriteSheetTools;
//# sourceMappingURL=PixiFlashSpriteSheetTools.js.map