import {IDisplayObjectContainerWrapper} from "../../../abstract/wrapper/display/IDisplayObjectContainerWrapper";
import {IDisplayObjectWrapper} from "../../../abstract/wrapper/display/IDisplayObjectWrapper";
import {EngineAdapter} from "../../../abstract/EngineAdapter";
import {PixiDisplayObjectWrapper} from "./PixiDisplayObjectWrapper";
import {DisplayObjectWrapperEvent} from "../../../abstract/wrapper/events/DisplayObjectWrapperEvent";

// import {PIXI} from "../../typings/index";

export class PixiDisplayObjectContainerWrapper extends PixiDisplayObjectWrapper implements IDisplayObjectContainerWrapper {
    public isDisplayObjectContainerWrapper:boolean = true;

    protected pixiContainer:PIXI.Container;

    constructor() {
        super();
    }

    protected addListeners():void {
        super.addListeners();

        this.eventListenerHelper.addEventListener(
            this,
            DisplayObjectWrapperEvent.ADDED_TO_STAGE,
            () => {
                this.updateChildrenAddedToStage(true);
            }
        );
        this.eventListenerHelper.addEventListener(
            this,
            DisplayObjectWrapperEvent.REMOVED_FROM_STAGE,
            () => {
                this.updateChildrenAddedToStage(false);
            }
        );
    }


    protected updateChildrenAddedToStage(isAdded:boolean):void {
        let childrenCount:number = this.nativeChildren.length;
        for (let childIndex:number = 0; childIndex < childrenCount; childIndex++) {
            this.getChildAt(childIndex).updateAddedToStage(isAdded);
        }
    }


    protected commitData():void {
        super.commitData();

        this.pixiContainer = (this.object as PIXI.Container);
    }

    public get width():number {
        return this.pixiContainer.width;
    }
    public set width(value:number) {
        this.pixiContainer.width = value;
    }

    public get height():number {
        return this.pixiContainer.height;
    }
    public set height(value:number) {
        this.pixiContainer.height = value;
    }



    public addChild(child:IDisplayObjectWrapper):void {
        this.pixiContainer.addChild(child.object);
    }

    public addChildAt(child:IDisplayObjectWrapper, index:number):void {
        this.pixiContainer.addChildAt(child.object, index);
    }


    public removeChild(child:IDisplayObjectWrapper):void {
        this.pixiContainer.removeChild(child.object);
    }

    public removeChildAt(index:number):void {
        this.pixiContainer.removeChildAt(index);
    }


    public getChildAt(index:number):IDisplayObjectWrapper {
        var result:IDisplayObjectWrapper;

        var tempNativeObject:any = this.pixiContainer.getChildAt(index);
        if (tempNativeObject) {
            result = EngineAdapter.instance.createDisplayWrapperBasedOnObject(tempNativeObject);
        }

        return result;
    }

    public setChildIndex(child:IDisplayObjectWrapper, index:number):void {
        this.pixiContainer.setChildIndex(child.object, index);
    }


    public get nativeChildren():any[] {
        return this.pixiContainer.children;
    }


    /*public resize(width:number, height:number):void {
        this.pixiContainer.width = width;
        this.pixiContainer.height = height;
    }*/

    /*public getScaledBounds():Rectangle {
        var result:Rectangle = super.getScaledBounds();
        result.width = this.pixiContainer.width;
        result.height = this.pixiContainer.height;

        return result;
    }*/
}
