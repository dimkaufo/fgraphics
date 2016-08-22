"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var PixiAdapter_1 = require("../pixi/PixiAdapter");
var PixiFlashSpriteSheetTools_1 = require("./tools/PixiFlashSpriteSheetTools");
var PixiFlashAdapter = (function (_super) {
    __extends(PixiFlashAdapter, _super);
    function PixiFlashAdapter() {
        _super.apply(this, arguments);
    }
    PixiFlashAdapter.prototype.processLoadedSpritesheet = function (id, rawData, loadedData) {
        var pixiFlashSpriteSheetData = {
            frames: rawData.frames,
            images: loadedData._images
        };
        PixiFlashSpriteSheetTools_1.PixiFlashSpriteSheetTools.fromLoadedData(id, pixiFlashSpriteSheetData);
    };
    return PixiFlashAdapter;
}(PixiAdapter_1.PixiAdapter));
exports.PixiFlashAdapter = PixiFlashAdapter;
//# sourceMappingURL=PixiFlashAdapter.js.map