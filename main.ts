radio.setGroup(42)
let strip = neopixel.create(DigitalPin.P11, 24, NeoPixelMode.RGB)
let strip2 = neopixel.create(DigitalPin.P13, 24, NeoPixelMode.RGB)
let strip3 = neopixel.create(DigitalPin.P14, 24, NeoPixelMode.RGB)
strip.showColor(neopixel.colors(NeoPixelColors.Black))
strip.show()
let count = 0
basic.forever(function () {
    serial.writeNumber(pins.analogReadPin(AnalogPin.P3))
    serial.writeLine("")
    if (pins.analogReadPin(AnalogPin.P3) < 470) {
        count = 0
        for (let index2 = 0; index2 <= 24; index2++) {
            strip.setPixelColor(index2, neopixel.colors(NeoPixelColors.White))
            strip.show()
            basic.pause(40)
        }
    } else {
        count = 1
        for (let index2 = 0; index2 <= 24; index2++) {
            strip.setPixelColor(index2, neopixel.colors(NeoPixelColors.Black))
            strip.show()
            basic.pause(40)
        }
    }
    if (true) {
        count += 1
    }
})
