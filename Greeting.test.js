const Greeting = require("./Greeting");

//Arrange
//Act
//Assert
test("it should have the correct greeting when the name is supplied", () => {
  const greeting = new Greeting(); //Arrange
  const name = "adam"; // Arrange
  const result = greeting.hello(name); //Act
  expect(result).toBe("Hello adam"); //Assert
});

test("it should have the correct greeting when the name is supplied Joe", () => {
  const greeting = new Greeting(); //Arrange
  const name = "Joe"; // Arrange
  const result = greeting.hello(name); //Act
  expect(result).toBe("Welcome Joe!"); //Assert
});

test("it should have the correct greeting when the name is supplied for hola", () => {
  const greeting = new Greeting(); //Arrange
  const name = "adam"; // Arrange
  const result = greeting.hola(name); //Act
  expect(result).toBe("Hola adam"); //Assert
});
