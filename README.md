# pxt-butterfly

This package is built on top of the [NeoPixel package][1] and adds
some blocks which make it more convenient to use my
[NeoPixel butterflies][2].  There are blocks for setting the inner,
middle, or outer LEDs on the butterfly as a group, rather than having
to set each LED individually.

[1]: https://github.com/microsoft/pxt-neopixel
[2]: https://github.com/ppelleti/ButterflyChain

## Basic usage

```blocks
// This creates a NeoPixel strip with 18 LEDs and RGB format
let strip = butterfly.create(DigitalPin.P0, 1)

// Set colors on the butterfly
butterfly.setInner(strip, 0, NeoPixelColors.Red)
butterfly.setMiddle(strip, 0, NeoPixelColors.Green)
butterfly.setOuter(strip, 0, NeoPixelColors.Blue)

// Send the data to the butterfly
strip.show()
```

## TODO

- [x] Add a reference for your blocks here
- [x] Add "icon.png" image (300x200) in the root folder
- [x] Add "- beta" to the GitHub project description if you are still iterating it.
- [x] Turn on your automated build on https://travis-ci.org
- [ ] Use "pxt bump" to create a tagged release on GitHub
- [ ] Get your package reviewed and approved https://makecode.microbit.org/packages/approval

Read more at https://makecode.microbit.org/packages/build-your-own

## License

MIT

## Supported targets

* for PXT/microbit
(The metadata above is needed for package search.)

