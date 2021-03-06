/**
 * NeoPixel Butterfly.
 */
//% color="#9000d0" weight=50 icon="\uf1d1" block="Butterfly"
namespace butterfly {
    const NPIX: number = 18

    /**
     * Create a NeoPixel strip for `butterflies` butterflies.
     * @param pin the pin where the butterflies are connected.
     * @param butterflies number of butterflies in the strip, eg: 5
     */
    //% blockId="butterfly_create"
    //% block="NeoPixel butterflies at pin %pin|with %butterflies|butterflies"
    //% blockSetVariable=strip
    export function create(pin: DigitalPin, butterflies: number): neopixel.Strip {
        return neopixel.create(pin, butterflies * NPIX, NeoPixelMode.RGB_RGB)
    }

    /**
     * Set the inner pixels on the specified butterfly.
     * @param neo the NeoPixel strip
     * @param butterfly the number of the butterfly (0-based)
     * @param rgb RGB color to set
     */
    //% blockId="butterfly_setInner"
    //% block="on %neo=variables_get(strip)| set inner pixels of butterfly %butterfly| to %rgb=neopixel_colors"
    export function setInner(neo: neopixel.Strip, butterfly: number, rgb: number) {
        let offset: number = butterfly * NPIX
        for (let idx of innerPixels()) {
            neo.setPixelColor(idx + offset, rgb)
        }
    }

    /**
     * Set the middle pixels on the specified butterfly.
     * @param neo the NeoPixel strip
     * @param butterfly the number of the butterfly (0-based)
     * @param rgb RGB color to set
     */
    //% blockId="butterfly_setMiddle"
    //% block="on %neo=variables_get(strip)| set middle pixels of butterfly %butterfly| to %rgb=neopixel_colors"
    export function setMiddle(neo: neopixel.Strip, butterfly: number, rgb: number) {
        let offset: number = butterfly * NPIX
        for (let idx of middlePixels()) {
            neo.setPixelColor(idx + offset, rgb)
        }
    }

    /**
     * Set the outer pixels on the specified butterfly.
     * @param neo the NeoPixel strip
     * @param butterfly the number of the butterfly (0-based)
     * @param rgb RGB color to set
     */
    //% blockId="butterfly_setOuter"
    //% block="on %neo=variables_get(strip)| set outer pixels of butterfly %butterfly| to %rgb=neopixel_colors"
    export function setOuter(neo: neopixel.Strip, butterfly: number, rgb: number) {
        let offset: number = butterfly * NPIX
        for (let idx of outerPixels()) {
            neo.setPixelColor(idx + offset, rgb)
        }
    }

    /**
     * Return the indices of the inner pixels on the butterfly.
     */
    //% blockId="butterfly_innerPixels"
    //% block="inner pixels"
    //% advanced
    export function innerPixels(): number[] {
        return [0, 3, 9, 12]
    }

    /**
     * Return the indices of the middle pixels on the butterfly.
     */
    //% blockId="butterfly_middlePixels"
    //% block="middle pixels"
    //% advanced
    export function middlePixels(): number[] {
        return [1, 4, 6, 8, 10, 13, 15, 17]
    }

    /**
     * Return the indices of the outer pixels on the butterfly.
     */
    //% blockId="butterfly_outerPixels"
    //% block="outer pixels"
    //% advanced
    export function outerPixels(): number[] {
        return [2, 5, 7, 11, 14, 16]
    }
}
