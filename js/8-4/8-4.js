var ar = ["Hello", "Good Day", "Your Welcome", "hotdog", "hamburgers"];

var result = ar.join('').split('').reduce(function(o, e) {
  return o[e] = (o[e] || 0) + 1, o
}, {});
console.log(result)


