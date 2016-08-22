import CreateJSTimeline = createjs.Timeline;

declare module pixiflash {

    export class SpriteSheet {
        public frames:any[];

        public getFrame(frame:number):any;

        public  addToGlobal(id:string):void;

        public _addFrames(data:any);

        static fromData(data:any, callback:any):void;
    }


    export class MovieClip extends PIXI.Container {
        public gotoAndPlay(frame:number | string):void;

        public gotoAndStop(frame:number | string):void;

        public labels:{ label: string, position: number }[];

        public timeline:CreateJSTimeline;
    }

    export class Sprite extends PIXI.Sprite {
        public texture:any;
        public spriteSheet:SpriteSheet;

        public gotoAndStop(frame:number):void;
    }

}