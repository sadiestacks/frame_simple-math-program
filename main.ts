input.onButtonPressed(Button.A, function () {
    count = count * 2
    basic.showNumber(count)
})
input.onButtonPressed(Button.B, function () {
    count = count + 1
    basic.showNumber(count)
})
input.onGesture(Gesture.Shake, function () {
    count = 1
    basic.showNumber(count)
})
let count = 0
count = 2
basic.showNumber(count)
basic.forever(function () {
	
})
