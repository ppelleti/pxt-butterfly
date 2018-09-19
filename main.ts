/**
 * NeoPixel Butterfly.
 */
//% color="#a000c0" weight=50 icon="\uf1d1" block="Butterfly"
namespace butterfly {
    /**
     * Create a NeoPixel strip for `butterflies` butterflies.
     * @param pin the pin where the butterflies are connected.
     * @param butterflies number of butterflies in the strip, eg: 5
     */
    //% block="NeoPixel butterflies at pin %pin|with %butterflies|butterflies"
    //% blockSetVariable=strip
    export function create(pin: DigitalPin,
                           butterflies: number) : neopixel.Strip {
        return neopixel.create(pin, butterflies * 18, RGB_RGB)
    }

    /**
     * Set the inner pixels on the specified butterfly.
     * @param neo the NeoPixel strip
     * @param butterfly the number of the butterfly (0-based)
     * @param rgb RGB color to set
     */
    //% block="on %neo| set inner pixels of butterfly %butterfly| to %rgb=neopixel_colors"
    export function setInner(neo: neopixel.Strip,
                             butterfly: number,
                             rgb: number) {
        let offset: number = butterfly * 18
        for (let idx of innerPixels()) {
            neo.setPixelColor(idx + offset, rgb)
        }
    }

    /**
     * Return the indices of the inner pixels on the butterfly.
     */
    //% block="inner pixels"
    export function innerPixels() : number[] {
        return [0, 3, 9, 12]
    }
}
