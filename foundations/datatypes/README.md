# Datatypes

There are various data types in Javascript:

- **Number:** Numbers are stored in 64-bit IEEE-754 double-precision floating points format. Unlike other programming languages, Javascript does not differ between integers and fractional numbers.

  ```javascript
  let integerExample = 1;
  let fractionalExample = 1.5;
  ```

- **String:** Strings represent character sequences and are used to store text. There is no char-type like in other programming languages. They can be defined with single or double quotes.

  ```javascript
  let singleQuoteString = "Hello, World!";
  let doubleQuoteString = "Hello, World!";
  ```

- **Boolean:** These are basically like in most other languages, and can either be _true_ or _false_

  ```javascript
  let isTrue = true;
  let isFalse = false;
  ```

- **BigInt:** They behave like array of integers, while supporting the common arithmetic operators. This allows the developer to utilize integers of any precision. A BigInt is defined with the 'n' suffix or the BigInt() constructor.

  ```javascript
  let bigInteger = 1234567890123456789012345678901234567890n;
  ```

- **null:** The null type represents the intentional absence of any object value. It is one of JavaScript's primitive values.

  ```javascript
  let emptyValue = null;
  ```

- **undefined:** undefined is a primitive value automatically assigned to variables that have just been declared, or to formal arguments for which there are no actual arguments.

  ```javascript
  let notAssigned;
  ```

- **Symbol:** Symbols are unique and immutable primitive values and may be used as the key of an Object property.

  ```javascript
  let sym = Symbol("description");
  ```

- **Object:** Objects in JavaScript are collections of key/value pairs. The values can be properties or functions.

  ```javascript
  let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    greet: function () {
      console.log("Hello, " + this.firstName);
    },
  };
  ```
