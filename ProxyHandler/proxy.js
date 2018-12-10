// Handler = custom logic for the methods
var handler = {
    get: function (target, name) {
        // Custom logic
        if (name in target) {
            return target[name];
        } else {
            return false;
        }
    }
};
// Syntax: var p = new Proxy(Target, handler);
var p = new Proxy( {}, handler);

p.foo = 'bar';
p.bar = 'baz';

console.log(p.foo, p.bar, p.foobar);