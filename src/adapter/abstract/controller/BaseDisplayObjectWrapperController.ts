import {BaseEventListenerObject, EventListenerHelper, Point} from "fcore";
import {IDisplayObjectWrapper} from "../wrapper/display/IDisplayObjectWrapper";
import {DisplayObjectWrapperEvent} from "../wrapper/events/DisplayObjectWrapperEvent";

export class BaseDisplayObjectWrapperController<ViewType extends IDisplayObjectWrapper> extends BaseEventListenerObject {

    protected resizeSize:Point = new Point();

    private _view:ViewType;
    protected viewAddToStageEventListenerHelper:EventListenerHelper<string>;
    protected viewEventListenerHelper:EventListenerHelper<string>;

    constructor(...args) {
        super(...args);
    }

    protected construction(...args):void {
        super.construction(...args);

        this.viewEventListenerHelper = new EventListenerHelper(this);
        this.viewAddToStageEventListenerHelper = new EventListenerHelper(this);
    }

    public destruction():void {
        super.destruction();

        if (this.viewEventListenerHelper) {
            this.viewEventListenerHelper.destruction();
            this.viewEventListenerHelper = null;
        }

        if (this.viewAddToStageEventListenerHelper) {
            this.viewAddToStageEventListenerHelper.destruction();
            this.viewAddToStageEventListenerHelper = null;
        }

        if (this.view) {
            this.view = null;
        }
    }

    get view():ViewType {
        return this._view;
    }
    set view(value:ViewType) {
        if (value === this._view) {
            return;
        }

        this.removeViewListeners();
        this.viewAddToStageEventListenerHelper.removeAllListeners();

        this._view = value;
        if (this.view) {
            if (this.view.isAddedToStage) {
                this.onViewAddedToStage()
            }
            this.viewAddToStageEventListenerHelper.addEventListener(
                this.view,
                DisplayObjectWrapperEvent.ADDED_TO_STAGE,
                () => this.onViewAddedToStage()
            );
        }

        this.commitViewData();
    }

    protected addViewListeners():void {
        this.removeViewListeners();

        if (!this.view) {
            return;
        }

        this.viewEventListenerHelper.addEventListener(
            this.view,
            DisplayObjectWrapperEvent.REMOVED_FROM_STAGE,
            () => {
                this.removeViewListeners();
            }
        );
    }

    protected removeViewListeners():void {
        this.viewEventListenerHelper.removeAllListeners();
    }

    protected onViewAddedToStage():void {
        this.addViewListeners();
    }

    protected commitViewData():void {
        // ToDo: implement view-specific changes

        this.arrange();
    }


    public resize(width:number, height:number):void {
        this.resizeSize.x = width;
        this.resizeSize.y = height;

        this.arrange();
    }
}