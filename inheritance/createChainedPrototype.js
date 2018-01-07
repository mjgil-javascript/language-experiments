export const makeChainedPrototype = (assignTo, assignFrom) => {
  const chainedPrototype = Object.assign(Object.create(assignTo.prototype), assignFrom.prototype)
  const factory = (...args) => { return Object.assign(Object.create(chainedPrototype), assignTo(...args)) }
  return factory
}