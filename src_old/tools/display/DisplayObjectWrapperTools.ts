import {IDisplayObjectWrapper} from "../../adapter/abstract/wrapper/display/IDisplayObjectWrapper";

export class DisplayObjectWrapperTools {

    private static WRAPPER_PROPERTY_NAME:string = "flashistDisplayObjectWrapper";

    public static getObjectWrapper(object:any):IDisplayObjectWrapper {
        return object[DisplayObjectWrapperTools.WRAPPER_PROPERTY_NAME] || null;
    }

    public static addObjectWrapper(object:any, wrapper:IDisplayObjectWrapper):void {
        object[DisplayObjectWrapperTools.WRAPPER_PROPERTY_NAME] = wrapper;
    }
}