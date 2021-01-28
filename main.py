def on_forever():
    if Rover.ultrasonic() == 5:
        Rover.motor_run_dual(-100, -100)
        basic.pause(200)
        Rover.motor_run_dual(-100, 100)
basic.forever(on_forever)
