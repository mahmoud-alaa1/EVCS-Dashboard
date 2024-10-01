export function processPathName(path: string) {
  path = path.slice(1);
  return path.charAt(0).toUpperCase() + path.slice(1);
}

export function toLowerCaseWords(str: string) {
  return str
    .split(" ") // Split the string into words
    .map((word) => word.charAt(0).toLowerCase() + word.slice(1)) // Convert the first letter to lowercase
    .join(" "); // Join the words back into a string
}
