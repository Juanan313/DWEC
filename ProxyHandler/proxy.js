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

var p = new Proxy( {}, handler);

p.foo = 'bar';
p.bar = 'baz';

console.log(p.foo, p.bar, p.foobar);