Function.prototype.myCall = function (context) {
  if (typeof this !== "function") console.log("type error");

  let args = [...arguments].slice(1);
  let result = null;

  context = context || window;
  context.fn = this;
  result = context.fn(...args);
  delete context.fn;

  return result;
};

const obj = {
  a: 1,
};

const window = {
  a: 2,
};

function test() {
  console.log(this.a);
}

test.myCall();
