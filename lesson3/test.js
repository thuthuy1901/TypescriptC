function divide(x, y) {
  if (y === 0) {
    throw new Error("Cannot divide by zero");
  }
  return x / y;
}

try {
  var result = divide(10, 0);
  console.log(result); // This line will not be executed if an exception is thrown
} catch (error) {
  console.error("Error:", error.message); // Handle the exception
}
