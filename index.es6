export default (fn) => function(...args) { 
  return fn.apply(null, args.reverse());
};
