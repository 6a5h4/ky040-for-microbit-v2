pins.onPulsed(DigitalPin.P3, PulseValue.Low, function () {
    if (input.pinIsPressed(TouchPin.P2)) {
        a += 1
    } else {
        a += -1
    }
    basic.showNumber(a)
})
let a = 0
a = 0
namespace RotaryEncoder {

    /**
     * rotary encoder was rotated.
     */
    //% blockId=rotary_ky_rotated_left_event
    //% block="on rotated |%dir" shim=RotaryEncoder::onRotateEvent
    export function onRotateEvent(dir: Rotation, body: () => void): void{
        return;
    }

    /**
     * rotary encoder button was pressed.
     */
    //% blockId=rotary_ky_pressed_event
    //% block="on button pressed" shim=RotaryEncoder::onPressEvent
    export function onPressEvent(body: () => void): void{
        return;
    }

    /**
     * initialises local variables and enables the rotary encoder.
     */ 
    //% blockId=rotary_ky_init
    //% block="connect clk %clk|dt %dt|sw %sw"
    //% icon="\uf1ec" shim=RotaryEncoder::init
    export function init(clk: DigitalPin, dt: DigitalPin, sw: DigitalPin): void{
        return;
    }
}
