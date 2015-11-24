'use strict';

module.exports = Command;

function Command(options) {
  this.argv = options.argv;
}

/**
 * Returns a promise that resolves or rejects with a Response object
 */
Command.prototype.run = function() {
  throw new Error("Command should implement run");
}
/**
 * Returns an options object for the command
 */
Command.prototype.buildOptions = function() {
  throw new Error("Command should implement buildOptions");
}