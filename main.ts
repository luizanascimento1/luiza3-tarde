function escolherAlvo () {
    alvo = jogadores[randint(0, jogadores.length - 1)]
}
input.onGesture(Gesture.Shake, function () {
    if (batata > 0) {
        escolherAlvo()
        if (alvo != eu) {
            radio.sendValue(alvo, batata)
            batata = -1
        } else {
            escolherAlvo()
        }
    }
})
input.onButtonPressed(Button.AB, function () {
    batata = randint(10, 30)
})
let alvo = ""
let eu = ""
let batata = 0
let jogadores: string[] = []
jogadores = [
"j1",
"j2",
"j3",
"j4"
]
batata = -1
eu = "j4"
alvo = "j"
radio.setGroup(1)
basic.forever(function () {
    batata += -1
    if (batata > 0) {
        basic.showIcon(IconNames.Happy)
    } else if (batata == 0) {
        basic.showIcon(IconNames.Rollerskate)
        basic.pause(2000)
    } else {
        basic.clearScreen()
    }
})
