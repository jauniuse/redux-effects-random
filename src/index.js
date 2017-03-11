/**
 * Action type
 */

const RANDOM = 'EFFECT_RANDOM'

/**
 * Random number generator
 */

function randomMiddleware (rng = () => Math.random()) {
  return () => next => action =>
    action.type === RANDOM
      ? Promise.resolve(rng())
      : next(action)
}

/**
 * Exports
 */

export default randomMiddleware
export {
  RANDOM
}
