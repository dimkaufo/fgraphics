"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var index_1 = require("fcore/dist/index");
var DisplayObjectWrapperMouseEvent_1 = require("../../../abstract/wrapper/display/DisplayObjectWrapperMouseEvent");
var EngineAdapter_1 = require("../../../abstract/EngineAdapter");
var PixiMouseEvent_1 = require("./PixiMouseEvent");
var PixiDisplayObjectWrapper = (function (_super) {
    __extends(PixiDisplayObjectWrapper, _super);
    function PixiDisplayObjectWrapper() {
        _super.call(this);
        this.isDisplayObjectWrapper = true;
        this.tempBounds = new index_1.Rectangle();
    }
    PixiDisplayObjectWrapper.prototype.commitData = function () {
        _super.prototype.commitData.call(this);
        this.pixiDisplayObject = this.object;
    };
    PixiDisplayObjectWrapper.prototype.destruction = function () {
        _super.prototype.destruction.call(this);
        if (this.pixiDisplayObject) {
            this.pixiDisplayObject = null;
        }
    };
    PixiDisplayObjectWrapper.prototype.removeListeners = function () {
        _super.prototype.removeListeners.call(this);
        if (this.pixiDisplayObject) {
            this.removePixiObjectListeners(this.pixiDisplayObject);
        }
    };
    PixiDisplayObjectWrapper.prototype.addPixiObjectListeners = function (pixiObject) {
        if (!pixiObject) {
            return;
        }
        pixiObject.on(PixiMouseEvent_1.PixiMouseEvent.CLICK, this.onPixiClick, this);
        pixiObject.on(PixiMouseEvent_1.PixiMouseEvent.TAP, this.onPixiTap, this);
        pixiObject.on(PixiMouseEvent_1.PixiMouseEvent.MOUSE_DOWN, this.onPixiMouseDown, this);
        pixiObject.on(PixiMouseEvent_1.PixiMouseEvent.MOUSE_UP, this.onPixiMouseUp, this);
        pixiObject.on(PixiMouseEvent_1.PixiMouseEvent.MOUSE_UP_OUTSIDE, this.onPixiMouseUpOutside, this);
        pixiObject.on(PixiMouseEvent_1.PixiMouseEvent.TOUCH_START, this.onPixiMouseDown, this);
        pixiObject.on(PixiMouseEvent_1.PixiMouseEvent.TOUCH_END, this.onPixiMouseUp, this);
        pixiObject.on(PixiMouseEvent_1.PixiMouseEvent.TOUCH_END_OUTSIDE, this.onPixiMouseUpOutside, this);
        pixiObject.on(PixiMouseEvent_1.PixiMouseEvent.MOUSE_OVER, this.onPixiMouseOver, this);
        pixiObject.on(PixiMouseEvent_1.PixiMouseEvent.MOUSE_OUT, this.onPixiMouseOut, this);
    };
    PixiDisplayObjectWrapper.prototype.removePixiObjectListeners = function (pixiObject) {
        if (!pixiObject) {
            return;
        }
        pixiObject.removeListener(PixiMouseEvent_1.PixiMouseEvent.CLICK, this.onPixiClick, this);
        pixiObject.removeListener(PixiMouseEvent_1.PixiMouseEvent.TAP, this.onPixiTap, this);
        pixiObject.removeListener(PixiMouseEvent_1.PixiMouseEvent.MOUSE_DOWN, this.onPixiMouseDown, this);
        pixiObject.removeListener(PixiMouseEvent_1.PixiMouseEvent.MOUSE_UP, this.onPixiMouseUp, this);
        pixiObject.removeListener(PixiMouseEvent_1.PixiMouseEvent.MOUSE_UP_OUTSIDE, this.onPixiMouseUpOutside, this);
        pixiObject.removeListener(PixiMouseEvent_1.PixiMouseEvent.TOUCH_START, this.onPixiMouseDown, this);
        pixiObject.removeListener(PixiMouseEvent_1.PixiMouseEvent.TOUCH_END, this.onPixiMouseUp, this);
        pixiObject.removeListener(PixiMouseEvent_1.PixiMouseEvent.TOUCH_END_OUTSIDE, this.onPixiMouseUpOutside, this);
        pixiObject.removeListener(PixiMouseEvent_1.PixiMouseEvent.MOUSE_OVER, this.onPixiMouseOver, this);
        pixiObject.removeListener(PixiMouseEvent_1.PixiMouseEvent.MOUSE_OUT, this.onPixiMouseOut, this);
    };
    PixiDisplayObjectWrapper.prototype.onPixiClick = function (event) {
        this.dispatchEvent(DisplayObjectWrapperMouseEvent_1.DisplayObjectWrapperMouseEvent.CLICK);
    };
    PixiDisplayObjectWrapper.prototype.onPixiTap = function (event) {
        this.dispatchEvent(DisplayObjectWrapperMouseEvent_1.DisplayObjectWrapperMouseEvent.CLICK);
    };
    PixiDisplayObjectWrapper.prototype.onPixiMouseDown = function (event) {
        this.dispatchEvent(DisplayObjectWrapperMouseEvent_1.DisplayObjectWrapperMouseEvent.MOUSE_DOWN);
    };
    PixiDisplayObjectWrapper.prototype.onPixiMouseUp = function (event) {
        this.dispatchEvent(DisplayObjectWrapperMouseEvent_1.DisplayObjectWrapperMouseEvent.MOUSE_UP);
    };
    PixiDisplayObjectWrapper.prototype.onPixiMouseUpOutside = function (event) {
        this.dispatchEvent(DisplayObjectWrapperMouseEvent_1.DisplayObjectWrapperMouseEvent.MOUSE_UP_OUTSIDE);
    };
    PixiDisplayObjectWrapper.prototype.onPixiMouseOver = function (event) {
        this.dispatchEvent(DisplayObjectWrapperMouseEvent_1.DisplayObjectWrapperMouseEvent.ROLL_OVER);
    };
    PixiDisplayObjectWrapper.prototype.onPixiMouseOut = function (event) {
        this.dispatchEvent(DisplayObjectWrapperMouseEvent_1.DisplayObjectWrapperMouseEvent.ROLL_OUT);
    };
    Object.defineProperty(PixiDisplayObjectWrapper.prototype, "pixiDisplayObject", {
        get: function () {
            return this._pixiDisplayObject;
        },
        set: function (value) {
            this.removePixiObjectListeners(this.pixiDisplayObject);
            //
            this._pixiDisplayObject = value;
            this.addPixiObjectListeners(this.pixiDisplayObject);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PixiDisplayObjectWrapper.prototype, "cache", {
        get: function () {
            return this.pixiDisplayObject.cacheAsBitmap;
        },
        set: function (value) {
            this.pixiDisplayObject.cacheAsBitmap = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PixiDisplayObjectWrapper.prototype, "alpha", {
        get: function () {
            return this.pixiDisplayObject.alpha;
        },
        set: function (value) {
            this.pixiDisplayObject.alpha = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PixiDisplayObjectWrapper.prototype, "x", {
        get: function () {
            return this.pixiDisplayObject.position.x;
        },
        set: function (value) {
            this.pixiDisplayObject.position.x = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PixiDisplayObjectWrapper.prototype, "y", {
        get: function () {
            return this.pixiDisplayObject.position.y;
        },
        set: function (value) {
            this.pixiDisplayObject.position.y = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PixiDisplayObjectWrapper.prototype, "scaleX", {
        get: function () {
            return this.pixiDisplayObject.scale.x;
        },
        set: function (value) {
            this.pixiDisplayObject.scale.x = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PixiDisplayObjectWrapper.prototype, "scaleY", {
        get: function () {
            return this.pixiDisplayObject.scale.y;
        },
        set: function (value) {
            this.pixiDisplayObject.scale.y = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PixiDisplayObjectWrapper.prototype, "visible", {
        get: function () {
            return this.pixiDisplayObject.visible;
        },
        set: function (value) {
            this.pixiDisplayObject.visible = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PixiDisplayObjectWrapper.prototype, "interactive", {
        get: function () {
            return this.pixiDisplayObject.interactive;
        },
        set: function (value) {
            this.pixiDisplayObject.interactive = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PixiDisplayObjectWrapper.prototype, "buttonMode", {
        get: function () {
            return this.pixiDisplayObject.buttonMode;
        },
        set: function (value) {
            this.pixiDisplayObject.buttonMode = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PixiDisplayObjectWrapper.prototype, "parent", {
        get: function () {
            if (!this.tempParent) {
                this.tempParent = EngineAdapter_1.EngineAdapter.instance.createDisplayObjectContainerWrapper(this.pixiDisplayObject.parent);
            }
            this.tempParent.object = this.pixiDisplayObject.parent;
            return this.tempParent;
        },
        enumerable: true,
        configurable: true
    });
    PixiDisplayObjectWrapper.prototype.getGlobalBounds = function () {
        var tempPixiBounds = this.pixiDisplayObject.getBounds();
        this.tempBounds.x = tempPixiBounds.x;
        this.tempBounds.y = tempPixiBounds.y;
        this.tempBounds.width = tempPixiBounds.width;
        this.tempBounds.height = tempPixiBounds.height;
        return this.tempBounds.clone();
    };
    /*public getUnscaledBounds(): Rectangle
     {
     this.tempBounds = this.getBounds();
     this.tempBounds.multiply(1 / this.scaleX, 1 / this.scaleY);

     return this.tempBounds.clone();
     }*/
    PixiDisplayObjectWrapper.prototype.getScaledBounds = function () {
        this.tempBounds = this.getGlobalBounds();
        this.tempBounds.multiply(this.scaleX, this.scaleY);
        return this.tempBounds.clone();
    };
    /*public resize(width:number, height:number):void {
        var tempUnscaledbounds:Rectangle = this.getGlobalBounds();
        this.scaleX = width / tempUnscaledbounds.width;
        this.scaleY = height / tempUnscaledbounds.height;
    }*/
    PixiDisplayObjectWrapper.prototype.checkIfParamIsParent = function (paramName) {
        var result;
        if (paramName == "parent") {
            result = true;
        }
        return result;
    };
    return PixiDisplayObjectWrapper;
}(index_1.BaseClassWrapper));
exports.PixiDisplayObjectWrapper = PixiDisplayObjectWrapper;
//# sourceMappingURL=PixiDisplayObjectWrapper.js.map