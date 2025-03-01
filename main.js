import { HashMap, hash } from './HashMap.js';

const test = new HashMap();

test.set('apple', 'red');
test.set('banana', 'yellow');
test.set('carrot', 'orange');
test.set('dog', 'brown');
test.set('elephant', 'gray');
test.set('frog', 'green');
test.set('grape', 'purple');
test.set('hat', 'black');
test.set('ice cream', 'white');
test.set('jacket', 'blue');
test.set('kite', 'pink');
test.set('lion', 'golden');

console.log(test.length());
test.set('kite', 'white');
test.set('jacket', 'teal');
console.log(test.length());
console.log(test);

test.set('moon', 'silver');
console.log(test);

test.set('ice cream', 'pink');
console.log(test);

console.log(test.get('ice cream'));
console.log(test.has('ice cream'));
console.log(test.remove('ice cream'));
console.log(test);
console.log(test.length());

console.log(test.keys());
console.log(test.values());
console.log(test.entries());
