function led2 (y: number, speed: number) {
    while (true) {
        for (let index = 0; index <= 4; index++) {
            if (list[y][index] == 1) {
                led.plot(index, y)
            } else {
                led.unplot(index, y)
            }
        }
        list[y].unshift(list[y].pop())
        basic.pause(speed)
    }
}
let list: number[][] = []
list = [
[
1,
0,
0,
0,
0
],
[
1,
0,
0,
0,
0
],
[
1,
0,
0,
0,
0
],
[
1,
0,
0,
0,
0
],
[
1,
0,
0,
0,
0
],
[
0,
0,
0,
0,
0
]
]
control.inBackground(function () {
    led2(0, 1000)
})
control.inBackground(function () {
    led2(3, 200)
})
control.inBackground(function () {
    led2(1, 500)
})
control.inBackground(function () {
    led2(4, 100)
})
control.inBackground(function () {
    led2(2, 250)
})
