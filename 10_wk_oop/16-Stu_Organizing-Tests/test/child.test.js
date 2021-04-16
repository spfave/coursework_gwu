const Child = require("../child");

describe("Child", () => {
  // TODO: Add a comment describing the purpose of the following test suite
  /**
   * Tests the initialization of the Child object
   */
  describe("Initialization", () => {
    it("should create an object with a name and age if provided valid arguments", () => {
      const child = new Child("Sarah", 3);

      // TODO: Add a comment describing the purpose of the following statements
      /**
       * Checks if the Child object name property is properly set to the name input value
       * Checks if the Child object age property is properly set to the age input value
       */
      expect(child.name).toEqual("Sarah");
      expect(child.age).toEqual(3);
    });

    it("should throw an error if provided no arguments", () => {
      // TODO: Add a comment describing the purpose of the following expression
      /**
       * Wraps the Child object constructor in a function so errors are returned
       */
      const cb = () => new Child();

      // TODO: Add a comment describing the purpose of the following statement
      /**
       * Insures Child object throws error when no values are provided to the constructor
       */
      expect(cb).toThrow();
    });

    it("should throw an error if not provided an age", () => {
      const cb = () => new Child("Sarah");

      // TODO: Add a comment describing the purpose of the following declaration
      /**
       * Create a error object with specified error message
       */
      const err = new Error(
        "Expected parameter 'age' to be a non-negative number"
      );

      // TODO: Add a comment describing the purpose of the following statement
      /**
       * Insures proper error message is thrown if no value is passed to the Child age
       * property in the constructor
       */
      expect(cb).toThrowError(err);
    });

    it("should throw an error if 'name' is not a string", () => {
      const cb = () => new Child(3, 2);
      const err = new Error(
        "Expected parameter 'name' to be a non-empty string"
      );

      expect(cb).toThrowError(err);
    });

    it("should throw an error if 'age' is not a number", () => {
      const cb = () => new Child("Sarah", "2");
      const err = new Error(
        "Expected parameter 'age' to be a non-negative number"
      );

      expect(cb).toThrowError(err);
    });

    it("should throw an error if 'age' is less than 0", () => {
      const cb = () => new Child("Sarah", -1);
      const err = new Error(
        "Expected parameter 'age' to be a non-negative number"
      );

      expect(cb).toThrowError(err);
    });
  });
});
