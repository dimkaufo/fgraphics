"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var index_1 = require("fcore/dist/index");
var PixiDisplayObjectContainerWrapper_1 = require("./PixiDisplayObjectContainerWrapper");
// import {PIXI} from "../../typings/index";
var PixiSpriteWrapper = (function (_super) {
    __extends(PixiSpriteWrapper, _super);
    function PixiSpriteWrapper() {
        var _this = _super.call(this) || this;
        _this.isSpriteWrapper = true;
        _this.wrapperAnchor = new index_1.Point();
        return _this;
    }
    PixiSpriteWrapper.prototype.commitData = function () {
        _super.prototype.commitData.call(this);
        this.pixiSprite = this.object;
    };
    Object.defineProperty(PixiSpriteWrapper.prototype, "texture", {
        //public gotoAndStop(frame: number): void
        //{
        //    this.pixiflashSprite.gotoAndStop(frame);
        //}
        get: function () {
            return this.pixiSprite.texture;
        },
        set: function (value) {
            this.pixiSprite.texture = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PixiSpriteWrapper.prototype, "textureId", {
        get: function () {
            return this.wrapperTextureId;
        },
        set: function (value) {
            if (value === this.wrapperTextureId) {
                return;
            }
            this.wrapperTextureId = value;
            this.texture = PIXI.Texture.from(this.textureId);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PixiSpriteWrapper.prototype, "anchor", {
        get: function () {
            /*return new Point(
                this.pixiSprite.anchor.x,
                this.pixiSprite.anchor.y
            );*/
            this.wrapperAnchor.x = this.pixiSprite.anchor.x;
            this.wrapperAnchor.y = this.pixiSprite.anchor.y;
            return this.wrapperAnchor;
        },
        set: function (value) {
            this.wrapperAnchor.x = value.x;
            this.wrapperAnchor.y = value.y;
            this.pixiSprite.anchor.set(value.x, value.y);
        },
        enumerable: true,
        configurable: true
    });
    return PixiSpriteWrapper;
}(PixiDisplayObjectContainerWrapper_1.PixiDisplayObjectContainerWrapper));
exports.PixiSpriteWrapper = PixiSpriteWrapper;
//# sourceMappingURL=PixiSpriteWrapper.js.map