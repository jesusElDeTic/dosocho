radio.onReceivedNumber(function (receivedNumber) {
    basic.showString("Temperatura satélite" + receivedNumber)
})
input.onButtonPressed(Button.A, function () {
    basic.showString("Temperatura base" + input.temperature())
})
radio.onReceivedString(function (receivedString) {
    radio.sendNumber(input.temperature())
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("temperatura satélite?")
})
radio.setGroup(1)
