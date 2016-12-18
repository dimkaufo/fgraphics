// import * as PIXI from "@types/pixi.js";

// import {PIXI} from "@types/pixi.js";

// import PIXI = require('pixi.js');
// import {PIXI} from "@types/pixi.js";
// import PIXI = require("@types/pixi.js");

// import {PIXI} from "./typings/index";

export interface IPixiAdapterInitData {

    // If no renderer is passed, then a new one will be created
    renderer?:PIXI.SystemRenderer;
    // Specific renderer settings will be used only in case of creating the new renderer instance
    rendererSettings?:PIXI.RendererOptions;
    rendererWidth?:number;
    rendererHeight?:number;

    // If no native stage is passed, then a new container will be created and used as stage
    nativeStage?:PIXI.Container;
}