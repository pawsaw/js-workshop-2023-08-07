import { inc, value } from './inc.js';

console.log('before', value());
inc();
inc();
console.log('after', value());