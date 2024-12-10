function logProperties(obj) {
  const keys = Object.keys(obj);
  keys.forEach(key => {
    console.log(`${key}: ${obj[key]}`);
  });
}

const exampleObject = {
  name: 'Alice',
  age: 30,
  city: 'Wonderland'
};

logProperties(exampleObject);