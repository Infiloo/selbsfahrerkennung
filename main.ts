basic.forever(function () {
    Rover.Move(50)
    if (Rover.Ultrasonic() == 5) {
        Rover.MotorRunDual(-100, -100)
        basic.pause(200)
        Rover.MotorRunDual(-100, 100)
    }
})
