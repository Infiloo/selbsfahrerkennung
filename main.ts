basic.forever(function () {
    Rover.Move(100)
    if (Rover.Ultrasonic() <= 5) {
        Rover.MotorRunDual(-100, -100)
        basic.pause(200)
        Rover.MotorRunDual(-200, 200)
        basic.pause(400)
    }
})
basic.forever(function () {
    Rover.setALLRGB(Rover.colors(RoverColors.Orange))
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . # . .
        `)
    Rover.setALLRGB(Rover.colors(RoverColors.Blue))
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . # # # .
        . # # # .
        `)
    Rover.setALLRGB(Rover.colors(RoverColors.Red))
    basic.showLeds(`
        . . . . .
        . . . . .
        # # # # #
        # # # # #
        # # # # #
        `)
    Rover.setALLRGB(Rover.colors(RoverColors.Green))
    basic.showLeds(`
        . . . . .
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    Rover.setALLRGB(Rover.colors(RoverColors.Indigo))
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    Rover.setALLRGB(Rover.colors(RoverColors.Violet))
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . # . .
        `)
    Rover.setALLRGB(Rover.colors(RoverColors.Purple))
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . # . # .
        . . # . .
        `)
    Rover.setALLRGB(Rover.colors(RoverColors.Red))
    basic.showLeds(`
        . . # . .
        . # . # .
        # . # . #
        . # . # .
        . . # . .
        `)
    Rover.setALLRGB(Rover.colors(RoverColors.Orange))
    basic.showLeds(`
        . . . . .
        . . . . .
        # . . . .
        . . . . .
        . . . . .
        `)
    Rover.setALLRGB(Rover.colors(RoverColors.Red))
    basic.showLeds(`
        . . . . .
        . # . . .
        # . . . .
        . . . . .
        . . . . .
        `)
    Rover.setALLRGB(Rover.colors(RoverColors.Purple))
    basic.showLeds(`
        . . . . .
        . # . . .
        # . # . .
        . . . . .
        . . . . .
        `)
    Rover.setALLRGB(Rover.colors(RoverColors.Yellow))
    basic.showLeds(`
        . . . . .
        . # . . .
        # . # . .
        . . . # .
        . . . . .
        `)
    Rover.setALLRGB(Rover.colors(RoverColors.Blue))
    basic.showLeds(`
        . . . . .
        . # . . .
        # . # . #
        . . . # .
        . . . . .
        `)
    Rover.setALLRGB(Rover.colors(RoverColors.Green))
    basic.showLeds(`
        . . . . .
        . # . # .
        # . # . #
        . . . # .
        . . . . .
        `)
    Rover.setALLRGB(Rover.colors(RoverColors.Orange))
    basic.showLeds(`
        . . . . .
        . # . # .
        # . # . #
        . # . # .
        . . . . .
        `)
    Rover.setALLRGB(Rover.colors(RoverColors.Indigo))
})
