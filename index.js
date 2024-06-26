const HashMap = require('./hashmap');

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

console.log('Initial capacity:', test.buckets.length);

test.set('apple', 'green');
test.set('banana', 'brown');
test.set('carrot', 'yellow');

test.set('moon', 'silver');

console.log('New capacity after resize:', test.buckets.length);


console.log('Get apple:', test.get('apple'));
console.log('Has lion:', test.has('lion'));
console.log('Remove frog:', test.remove('frog'));
console.log('Length:', test.length());
console.log('Keys:', test.keys());
console.log('Values:', test.values());
console.log('Entries:', test.entries());


test.clear();
console.log('Length after clear:', test.length());
console.log('Keys after clear:', test.keys());
console.log('Values after clear:', test.values());
console.log('Entries after clear:', test.entries());
