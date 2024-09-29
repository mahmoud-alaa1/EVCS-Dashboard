export function processPathName(path: string) {
  path = path.slice(1);
  return path.charAt(0).toUpperCase() + path.slice(1);
}
