import {Logger} from "fcore";

import {ITextWrapper} from "../../adapter/abstract/wrapper/display/ITextWrapper";
import {TextTruncateType} from "./TextTruncateType";

export class TextTools {

    public static truncateToFit(
        field:ITextWrapper,
        maxWidth:number,
        maxHeight:number = 0,
        truncateType:string = "",
        afterTruncateText:string = "..."):boolean {

        if (!maxWidth || field.width <= maxWidth) {
            maxWidth = field.width;
        }

        if (!maxHeight || field.height <= maxHeight) {
            maxHeight = field.height;
        }

        if (!truncateType) {
            truncateType = TextTruncateType.FROM_RIGHT;
        }

        if (!field.text || (field.width <= maxWidth && field.height <= maxHeight))
        {
            return false;
        }

        var text:string = field.text;
        var cached:string = text;
        var maxSteps:number = 1000;
        var step:number = 0;
        // Продолжаем цикл, пока есть текст, или пока размеры текста больше одной из сторон поля
        while (text.length > 0 &&
            ((field.width > maxWidth) || (field.height > maxHeight))) {

            if (truncateType === TextTruncateType.FROM_LEFT) {
                text = text.substring(1, text.length);
                field.text = afterTruncateText + text;
            } else {
                text = text.substring(0, text.length - 1);
                field.text = text + afterTruncateText;
            }


            // Код, чтобы цикл прерывался и не приводил к зависанию FlashPlayer
            // Preventing code from "stucking"
            step++;
            if(step >= maxSteps)
            {
                Logger.error("TextTools | truncateToFit __ ERROR! Max steps count!");
                break;
            }
        }

        return text !== cached;
    }
}