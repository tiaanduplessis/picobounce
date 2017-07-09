const picobounce = function (options = { wait: 300, immediate: false }) {
  const wait = typeof options === 'number' ? options : options.timeout
  let timeout

  return func => {
    const shouldCall = options.immediate && !timeout
    clearTimeout(timeout)

    timeout = setTimeout(() => {
      timeout = undefined

      if (!options.immediate) {
        func()
      }
    }, wait)

    shouldCall && func()
  }
}

export default picobounce
