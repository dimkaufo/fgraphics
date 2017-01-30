import {BaseClassWrapper, Rectangle, Logger, Point} from "fcore/dist/index";
import {IDisplayObjectWrapper} from "../../../abstract/wrapper/display/IDisplayObjectWrapper";
import {IDisplayObjectContainerWrapper} from "../../../abstract/wrapper/display/IDisplayObjectContainerWrapper";
import {DisplayObjectWrapperMouseEvent} from "../../../abstract/wrapper/events/DisplayObjectWrapperMouseEvent";
import {EngineAdapter} from "../../../abstract/EngineAdapter";
import {PixiMouseEvent} from "../events/PixiMouseEvent";
import {PixiDisplayObjectEvent} from "../events/PixiDisplayObjectEvent";
import {DisplayObjectTools} from "../../../../tools/display/DisplayObjectTools";
import {DisplayObjectWrapperEvent} from "../../../abstract/wrapper/events/DisplayObjectWrapperEvent";

// import {PIXI} from "../../typings/index";

export class PixiDisplayObjectWrapper extends BaseClassWrapper implements IDisplayObjectWrapper {

    public isDisplayObjectWrapper:boolean = true;
    private _pixiDisplayObject:PIXI.DisplayObject;

    protected tempParent:IDisplayObjectContainerWrapper;

    private _isAddedToStage:boolean;

    constructor() {
        super();

    }


    protected commitData():void {
        super.commitData();

        this.pixiDisplayObject = (this.object as PIXI.DisplayObject);

        if (this.pixiDisplayObject) {
            if (this.interactive) {
                this.addPixiObjectInteractiveListeners(this.pixiDisplayObject);

            } else {
                this.removePixiObjectInteractiveListeners(this.pixiDisplayObject);
            }
        }
    }

    public destruction():void {
        super.destruction();

        if (this.pixiDisplayObject) {
            this.pixiDisplayObject = null;
        }
        if (this.tempParent) {
            this.tempParent.destruction();
        }
    }


    protected removeListeners():void {
        super.removeListeners();

        if (this.pixiDisplayObject) {
            this.removePixiObjectListeners(this.pixiDisplayObject);
        }
    }


    protected addPixiObjectListeners(pixiObject:PIXI.DisplayObject):void {
        if (!pixiObject) {
            return;
        }

        // To prevent double listeners (memory leaks)
        this.removePixiObjectListeners(pixiObject);

        this.pixiDisplayObject.addListener(PixiDisplayObjectEvent.ADDED, this.onAdded, this);
        this.pixiDisplayObject.addListener(PixiDisplayObjectEvent.REMOVED, this.onRemoved, this);
    }

    protected removePixiObjectListeners(pixiObject:PIXI.DisplayObject):void {
        if (!pixiObject) {
            return;
        }

        this.removePixiObjectInteractiveListeners(pixiObject);

        this.pixiDisplayObject.removeListener(PixiDisplayObjectEvent.ADDED, this.onAdded, this);
        this.pixiDisplayObject.removeListener(PixiDisplayObjectEvent.REMOVED, this.onRemoved, this);
    }


    protected addPixiObjectInteractiveListeners(pixiObject:PIXI.DisplayObject):void {
        if (!pixiObject) {
            return;
        }

        // To prevent double listeners (memory leaks)
        this.removePixiObjectInteractiveListeners(pixiObject);

        if (this.interactive) {
            pixiObject.on(PixiMouseEvent.CLICK, this.onPixiClick, this);
            pixiObject.on(PixiMouseEvent.TAP, this.onPixiTap, this);
            pixiObject.on(PixiMouseEvent.MOUSE_DOWN, this.onPixiMouseDown, this);
            pixiObject.on(PixiMouseEvent.MOUSE_UP, this.onPixiMouseUp, this);
            pixiObject.on(PixiMouseEvent.MOUSE_UP_OUTSIDE, this.onPixiMouseUpOutside, this);
            pixiObject.on(PixiMouseEvent.TOUCH_START, this.onPixiMouseDown, this);
            pixiObject.on(PixiMouseEvent.TOUCH_END, this.onPixiMouseUp, this);
            pixiObject.on(PixiMouseEvent.TOUCH_END_OUTSIDE, this.onPixiMouseUpOutside, this);
            pixiObject.on(PixiMouseEvent.MOUSE_OVER, this.onPixiMouseOver, this);
            pixiObject.on(PixiMouseEvent.MOUSE_OUT, this.onPixiMouseOut, this);
        }
    }

    protected removePixiObjectInteractiveListeners(pixiObject:PIXI.DisplayObject):void {
        if (!pixiObject) {
            return;
        }

        pixiObject.removeListener(PixiMouseEvent.CLICK, this.onPixiClick, this);
        pixiObject.removeListener(PixiMouseEvent.TAP, this.onPixiTap, this);
        pixiObject.removeListener(PixiMouseEvent.MOUSE_DOWN, this.onPixiMouseDown, this);
        pixiObject.removeListener(PixiMouseEvent.MOUSE_UP, this.onPixiMouseUp, this);
        pixiObject.removeListener(PixiMouseEvent.MOUSE_UP_OUTSIDE, this.onPixiMouseUpOutside, this);
        pixiObject.removeListener(PixiMouseEvent.TOUCH_START, this.onPixiMouseDown, this);
        pixiObject.removeListener(PixiMouseEvent.TOUCH_END, this.onPixiMouseUp, this);
        pixiObject.removeListener(PixiMouseEvent.TOUCH_END_OUTSIDE, this.onPixiMouseUpOutside, this);
        pixiObject.removeListener(PixiMouseEvent.MOUSE_OVER, this.onPixiMouseOver, this);
        pixiObject.removeListener(PixiMouseEvent.MOUSE_OUT, this.onPixiMouseOut, this);
    }


    protected onAdded(parent:PIXI.Container):void {
        // console.log("PixiDisplayObjectWrapper | onAdded __ parent: ", parent);
        if (!this.isAddedToStage) {
            this.updateAddedToStage(true);
        }
    }

    protected onRemoved(parent:PIXI.Container):void {
        // console.log("PixiDisplayObjectWrapper | onAdded __ parent: ", parent);
        if (this.isAddedToStage) {
            this.updateAddedToStage(false);
        }
    }

    public updateAddedToStage(isAdded:boolean):void {
        if (isAdded !== this.isAddedToStage) {
            let tempIsAdded:boolean = false;
            DisplayObjectTools.processAllParents(
                this,
                (parent:IDisplayObjectContainerWrapper) => {
                    if (parent.object === EngineAdapter.instance.stage.object) {
                        tempIsAdded = true;
                        return false;

                    } else {
                        return true;
                    }
                }
            );

            this.isAddedToStage = tempIsAdded;
        }
    }

    protected onPixiClick(event:PIXI.interaction.InteractionEvent):void {
        this.dispatchEvent(DisplayObjectWrapperMouseEvent.CLICK, DisplayObjectWrapperMouseEvent.CLICK);
    }

    protected onPixiTap(event:PIXI.interaction.InteractionEvent):void {
        this.dispatchEvent(DisplayObjectWrapperMouseEvent.CLICK, DisplayObjectWrapperMouseEvent.CLICK);
    }

    protected onPixiMouseDown(event:PIXI.interaction.InteractionEvent):void {
        this.dispatchEvent(DisplayObjectWrapperMouseEvent.MOUSE_DOWN, DisplayObjectWrapperMouseEvent.MOUSE_DOWN);
    }

    protected onPixiMouseUp(event:PIXI.interaction.InteractionEvent):void {
        this.dispatchEvent(DisplayObjectWrapperMouseEvent.MOUSE_UP, DisplayObjectWrapperMouseEvent.MOUSE_UP);
    }

    protected onPixiMouseUpOutside(event:PIXI.interaction.InteractionEvent):void {
        this.dispatchEvent(DisplayObjectWrapperMouseEvent.MOUSE_UP_OUTSIDE, DisplayObjectWrapperMouseEvent.MOUSE_UP_OUTSIDE);
    }

    protected onPixiMouseOver(event:PIXI.interaction.InteractionEvent):void {
        this.dispatchEvent(DisplayObjectWrapperMouseEvent.ROLL_OVER, DisplayObjectWrapperMouseEvent.ROLL_OVER);
    }

    protected onPixiMouseOut(event:PIXI.interaction.InteractionEvent):void {
        this.dispatchEvent(DisplayObjectWrapperMouseEvent.ROLL_OUT, DisplayObjectWrapperMouseEvent.ROLL_OUT);
    }


    protected get pixiDisplayObject():PIXI.DisplayObject {
        return this._pixiDisplayObject;
    }

    protected set pixiDisplayObject(value:PIXI.DisplayObject) {
        if (this.pixiDisplayObject == value) {
            return;
        }

        // Remove listeners from the previous object
        // this.removePixiObjectInteractiveListeners(this.pixiDisplayObject);
        this.removePixiObjectListeners(this.pixiDisplayObject);
        //
        this._pixiDisplayObject = value;
        this.addPixiObjectListeners(this.pixiDisplayObject);

        this.commitData();
    }


    public get cache():boolean {
        return this.pixiDisplayObject.cacheAsBitmap;
    }
    public set cache(value:boolean) {
        this.pixiDisplayObject.cacheAsBitmap = value;
    }


    public get alpha():number {
        return this.pixiDisplayObject.alpha;
    }
    public set alpha(value:number) {
        this.pixiDisplayObject.alpha = value;
    }


    public get x():number {
        return this.pixiDisplayObject.position.x;
    }
    public set x(value:number) {
        this.pixiDisplayObject.position.x = value;
    }


    public get y():number {
        return this.pixiDisplayObject.position.y;
    }
    public set y(value:number) {
        this.pixiDisplayObject.position.y = value;
    }


    public get scaleX():number {
        return this.pixiDisplayObject.scale.x;
    }
    public set scaleX(value:number) {
        this.pixiDisplayObject.scale.x = value;
    }


    public get scaleY():number {
        return this.pixiDisplayObject.scale.y;
    }
    public set scaleY(value:number) {
        this.pixiDisplayObject.scale.y = value;
    }


    public get visible():boolean {
        return this.pixiDisplayObject.visible;
    }
    public set visible(value:boolean) {
        this.pixiDisplayObject.visible = value;
    }


    public get interactive():boolean {
        return this.pixiDisplayObject.interactive;
    }
    public set interactive(value:boolean) {
        this.pixiDisplayObject.interactive = value;

        this.commitData();
    }


    public get buttonMode():boolean {
        return this.pixiDisplayObject.buttonMode;
    }
    public set buttonMode(value:boolean) {
        this.pixiDisplayObject.buttonMode = value;
    }


    public get cursor():string {
        return this.pixiDisplayObject.defaultCursor;
    }
    public set cursor(value:string) {
        this.pixiDisplayObject.defaultCursor = value;
    }


    public get parent():IDisplayObjectContainerWrapper {
        if (!this.pixiDisplayObject.parent) {
            return null;

        } else {

            if (!this.tempParent) {
                this.tempParent = EngineAdapter.instance.createDisplayObjectContainerWrapper(this.pixiDisplayObject.parent);
            }
            this.tempParent.object = this.pixiDisplayObject.parent;

            return this.tempParent;
        }
    }


    public getGlobalBounds():Rectangle {
        var tempPixiBounds:PIXI.Rectangle = this.pixiDisplayObject.getBounds();
        return new Rectangle(tempPixiBounds.x, tempPixiBounds.y, tempPixiBounds.width, tempPixiBounds.height);
    }

    public getLocalBounds():Rectangle {
        var tempPixiBounds:PIXI.Rectangle = this.pixiDisplayObject.getLocalBounds();
        return new Rectangle(tempPixiBounds.x, tempPixiBounds.y, tempPixiBounds.width, tempPixiBounds.height);
    }


    public toGlobal(position:Point):Point {
        let tempPixiPos:PIXI.Point = this.pixiDisplayObject.toGlobal(new PIXI.Point(position.x, position.y));
        return new Point(tempPixiPos.x, tempPixiPos.y);
    }
    public toLocal(position:Point):Point {
        let tempPixiPos:PIXI.Point = this.pixiDisplayObject.toLocal(new PIXI.Point(position.x, position.y));
        return new Point(tempPixiPos.x, tempPixiPos.y);
    }


    public get width():number {
        return this.getLocalBounds().width / this.scaleX;
    }
    public set width(value:number) {
        Logger.error("PixiDisplayObjectWrapper | set width __ WARNING! Setter is not implemented for simple display objects!")
    }

    public get height():number {
        return this.getLocalBounds().height / this.scaleY;
    }
    public set height(value:number) {
        Logger.error("PixiDisplayObjectWrapper | set height __ WARNING! Setter is not implemented for simple display objects!")
    }


    public checkIfParamIsParent(paramName:string):boolean {
        var result:boolean;
        if (paramName == "parent") {
            result = true;
        }

        return result;
    }


    get isAddedToStage():boolean {
        return this._isAddedToStage;
    }
    set isAddedToStage(value:boolean) {
        if (value === this.isAddedToStage) {
            return;
        }

        this._isAddedToStage = value;

        if (this.isAddedToStage) {
            this.dispatchEvent(DisplayObjectWrapperEvent.ADDED_TO_STAGE, DisplayObjectWrapperEvent.ADDED_TO_STAGE);
        } else {
            this.dispatchEvent(DisplayObjectWrapperEvent.REMOVED_FROM_STAGE, DisplayObjectWrapperEvent.REMOVED_FROM_STAGE);
        }
    }
}
