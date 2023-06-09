const btn = document.createElement('button')
btn.innerText = 'click me'
btn.addEventListener('click', () => {
  test(1,2,3,4,5)
})

const test = (...args) => {
  console.log('args', args.join(','))
}

document.body.appendChild(btn)
