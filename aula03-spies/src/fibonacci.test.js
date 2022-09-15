const Fibonacci = require('./fibonacci')
const sinon = require('sinon')

;
(async () => {
  {
    const fibonacci = new Fibonacci()
    const spy = sinon.spy(fibonacci, fibonacci.execute.name)
    fibonacci.execute()
    fibonacci.execute()
    fibonacci.execute()

    console.log("callcount", spy.callCount)
  }
})()