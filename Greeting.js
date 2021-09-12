class Greeting {
  hello(name) {
    if (name === "Joe") {
      return "Welcome Joe!";
    }
    return "Hello " + name;
  }

  hola(name) {
    return "Hola " + name;
  }
}

module.exports = Greeting;
