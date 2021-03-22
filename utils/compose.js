module.exports = (...fns) => {
  fns.reduceRight(
    (prevFn, nextFn) => (...args) => nextFn(prevFn(...args)),
    (value) => value
  );
};

/**
 * This also turned out to be obsolete in the end,
 * as I was either thinking to build a middleware
 * class or simply compose the functions together.
 * But as I stated somewhere else, if I had more
 * brainpower I would build a middleware handler
 * and hook that onto the Object class (or any
 * other classes that could use middleware
 * functionality!).
 */
