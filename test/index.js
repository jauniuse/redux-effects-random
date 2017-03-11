/**
 * Imports
 */

import test from 'tape'
import random, { RANDOM } from '../src'

/**
 * Tests
 */

test(`should resolve number when using custom random function`, ({equal, end}) => {
  const next = (action) => action
  const mw = random(() => 4)()(next)

  mw({ type: RANDOM }).then((value) => {
    equal(value, 4)
  })

  end()
})

test(`should resolve number when using default random function`, ({equal, end}) => {
  const next = (action) => action
  const mw = random()()(next)

  mw({ type: RANDOM }).then((value) => {
    equal(typeof value, 'number')
  })

  end()
})


test('should return next action when action type is ANY', ({equal, end}) => {
  const next = (action) => action
  const mw = random()()(next)

  equal(mw({ type: 'ANY' }).type, 'ANY')

  end()
})
