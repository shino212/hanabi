input.onGesture(Gesture.Shake, function () {
    x = 0
    y = 0
    lightPositionX = []
    lightPositionY = []
    for (let index = 0; index <= 4; index++) {
        led.plot(2, 4 - index)
        basic.pause(200)
        led.unplot(2, 4 - index)
    }
    basic.pause(200)
    basic.showIcon(IconNames.SmallDiamond)
    list[randint(0, 2)].showImage(0)
    for (let index = 0; index < 5; index++) {
        for (let index = 0; index < 5; index++) {
            if (led.point(x, y)) {
                lightPositionX.push(x)
                lightPositionY.push(y)
            } else {
                lightPositionX.push(-1)
                lightPositionY.push(-1)
            }
            x = x + 1
        }
        x = 0
        y = y + 1
    }
    for (let index = 0; index <= 24; index++) {
        x = randint(0, 24 - index)
        if (lightPositionX[x] != -1) {
            led.unplot(lightPositionX[x], lightPositionY[x])
            basic.pause(100)
        }
        lightPositionX.removeAt(x)
        lightPositionY.removeAt(x)
    }
})
let lightPositionY: number[] = []
let lightPositionX: number[] = []
let y = 0
let x = 0
let list: Image[] = []
list = [images.iconImage(IconNames.Happy), images.iconImage(IconNames.Butterfly), images.iconImage(IconNames.Heart), images.iconImage(IconNames.Chessboard), images.iconImage(IconNames.EigthNote), images.iconImage(IconNames.Target)]
