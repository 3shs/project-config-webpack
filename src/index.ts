new Promise((resolve) => {

  setTimeout(() => {
    resolve(1)
  }, 250)
})

function test(...args: number[]): void {
  console.log('args', args.join(','))
}

test()

const arr: number[] = [1, 2, 3]
arr.includes(1)

class MyPromise {
  constructor(fn: Function) {
    fn()
  }
}

new MyPromise(() => {
  console.log('promise')
})

1


2
