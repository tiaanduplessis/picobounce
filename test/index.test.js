import picobounce from '../src'

test('should export function that returns function', () => {
  const debounce = picobounce()
  expect(picobounce).toBeDefined()
  expect(typeof debounce).toBe('function')
})

test('should only call function once', done => {
  const debounce = picobounce()
  const func = jest.fn(() => {
    expect(func).toHaveBeenCalledTimes(1)
    done()
  })

  debounce(func)
  debounce(func)
  debounce(func)
})
