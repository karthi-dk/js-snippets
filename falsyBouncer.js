let falsyBouncer = arr => arr.filter(el => Boolean(el))

console.log(falsyBouncer(["2", "", undefined, null]))