function hasAttr(attrName, obj) {
  return attrName in obj;
}

const example = {
  name: 'Alice',
  age: 30,
  city: 'Wonderland'
};

console.log(hasAttr('age', example));
console.log(hasAttr('country', example));