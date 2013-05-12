
/**
 * Module dependencies.
 */

var fan = require('fan');

/**
 * Create an injectable using `context`.
 *
 * @param {Object} context
 * @return {Function}
 * @api public
 */

module.exports = function(context){
  return function(fn){
    var args = fan(fn).map(values(context));
    return fn.apply(this, args);
  };
};

/**
 * Object keys to values mapper.
 */

function values(obj){
  return function(key){
    return obj[key];
  };
}
