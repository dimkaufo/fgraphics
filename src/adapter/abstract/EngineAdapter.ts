import {IEngineAdapter} from "./IEngineAdapter";
import {BaseEventListenerObject} from "fcore/src/index";

export class EngineAdapter extends BaseEventListenerObject {
    public static instance:IEngineAdapter;
}
