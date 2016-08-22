"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var PixiDisplayObjectContainerWrapper_1 = require("./PixiDisplayObjectContainerWrapper");
var PixiMovieClipWrapper = (function (_super) {
    __extends(PixiMovieClipWrapper, _super);
    function PixiMovieClipWrapper() {
        _super.call(this);
        this.isMovieClipWrapper = true;
    }
    PixiMovieClipWrapper.prototype.commitData = function () {
        _super.prototype.commitData.call(this);
        this.pixiflashMovieClip = this.object;
    };
    PixiMovieClipWrapper.prototype.gotoAndPlay = function (frame) {
        this.pixiflashMovieClip.gotoAndPlay(frame);
    };
    PixiMovieClipWrapper.prototype.gotoAndStop = function (frame) {
        this.pixiflashMovieClip.gotoAndStop(frame);
    };
    Object.defineProperty(PixiMovieClipWrapper.prototype, "labels", {
        get: function () {
            return this.pixiflashMovieClip.labels;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PixiMovieClipWrapper.prototype, "totalFrames", {
        get: function () {
            return this.pixiflashMovieClip.timeline.duration;
        },
        enumerable: true,
        configurable: true
    });
    return PixiMovieClipWrapper;
}(PixiDisplayObjectContainerWrapper_1.PixiDisplayObjectContainerWrapper));
exports.PixiMovieClipWrapper = PixiMovieClipWrapper;
//# sourceMappingURL=PixiMovieClipWrapper.js.map