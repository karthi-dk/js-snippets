# js-snippets

### Flatten Array
```
function flatten(a) {
    return Array.isArray(a) ? [].concat(...a.map(flatten)) : a;
}

console.log(flatten([[1,2], [2,3,4, [5,6]]]))
```
[Solution](https://github.com/karthi-dk/js-snippets/blob/main/arrayFlat.js)

### Falsy Bouncer
```
let falsyBouncer = arr => arr.filter(el => Boolean(el))

console.log(falsyBouncer(["2", "", undefined, 6, true, null]))
```
[Solution](https://github.com/karthi-dk/js-snippets/blob/main/falsyBouncer.js)
