export function fizzbuzz(input: number): string {
  if (isMultipleOf(15, input)) return "fizzbuzz";
  if (isMultipleOf(3, input)) return "fizz";
  if (isMultipleOf(5, input)) return "buzz";
  return toString(input);
}

function toString(input: number): string {
  return input.toString();
}

function isMultipleOf(multiple: number, input: number) {
  return input % multiple === 0;
}
