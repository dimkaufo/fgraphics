"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var PixiSpriteWrapper_1 = require("./PixiSpriteWrapper");
var EngineAdapter_1 = require("../../../abstract/EngineAdapter");
var TickerEvent_1 = require("../../../abstract/wrapper/ticker/TickerEvent");
var AnimatableSpriteWrapperEvent_1 = require("../../../abstract/wrapper/display/AnimatableSpriteWrapperEvent");
var PixiAnimatableSpriteWrapper = (function (_super) {
    __extends(PixiAnimatableSpriteWrapper, _super);
    function PixiAnimatableSpriteWrapper() {
        _super.call(this);
        this.isAnimatableSpriteWrapper = true;
    }
    PixiAnimatableSpriteWrapper.prototype.addListeners = function () {
        _super.prototype.addListeners.call(this);
        this.eventListenerHelper.addEventListener(EngineAdapter_1.EngineAdapter.instance.mainTicker, TickerEvent_1.TickerEvent.TICK, this.onTick);
    };
    PixiAnimatableSpriteWrapper.prototype.onTick = function () {
        if (this.isPlaying) {
            if (this.pixiflashSpriteSheet &&
                this.totalFrames > 0) {
                if (this.currentFrame >= this.totalFrames - 1) {
                    this.dispatchEvent(AnimatableSpriteWrapperEvent_1.AnimatableSpriteWrapperEvent.ANIMATION_COMPLETE);
                    if (this.isLooped) {
                        this.currentFrame = 0;
                    }
                }
                else {
                    this.currentFrame++;
                }
            }
        }
    };
    PixiAnimatableSpriteWrapper.prototype.commitData = function () {
        _super.prototype.commitData.call(this);
        if (this.pixiflashSpriteSheet &&
            this.pixiflashSpriteSheet.frames &&
            this.pixiflashSpriteSheet.frames.length > this.currentFrame) {
            this.texture = this.pixiflashSpriteSheet.getFrame(this.currentFrame);
        }
    };
    PixiAnimatableSpriteWrapper.prototype.play = function () {
        this.isPlaying = true;
    };
    PixiAnimatableSpriteWrapper.prototype.stop = function () {
        this.isPlaying = false;
    };
    PixiAnimatableSpriteWrapper.prototype.gotoAndPlay = function (frame) {
        this.play();
        this.currentFrame = frame;
    };
    PixiAnimatableSpriteWrapper.prototype.gotoAndStop = function (frame) {
        this.stop();
        this.currentFrame = frame;
    };
    Object.defineProperty(PixiAnimatableSpriteWrapper.prototype, "spriteSheet", {
        get: function () {
            return this.pixiflashSpriteSheet;
        },
        set: function (value) {
            this.pixiflashSpriteSheet = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PixiAnimatableSpriteWrapper.prototype, "currentFrame", {
        get: function () {
            return this._currentFrame;
        },
        set: function (value) {
            if (this.currentFrame == value) {
                return;
            }
            this._currentFrame = value;
            this.commitData();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PixiAnimatableSpriteWrapper.prototype, "totalFrames", {
        get: function () {
            if (this.pixiflashSpriteSheet && this.pixiflashSpriteSheet.frames) {
                return this.pixiflashSpriteSheet.frames.length;
            }
            else {
                return 0;
            }
        },
        enumerable: true,
        configurable: true
    });
    return PixiAnimatableSpriteWrapper;
}(PixiSpriteWrapper_1.PixiSpriteWrapper));
exports.PixiAnimatableSpriteWrapper = PixiAnimatableSpriteWrapper;
//# sourceMappingURL=PixiAnimatableSpriteWrapper.js.map