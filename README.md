
# injectable

dependency injection

## example

```js
var injectable = require('injectable');

var context = {
  foo: 'bar'
, hello: 'world'
};

var inject = injectable(context);

inject(function(foo, hello){
  console.log(foo); // 'bar'
  console.log(hello); // 'world'
});
```

## License

MIT
