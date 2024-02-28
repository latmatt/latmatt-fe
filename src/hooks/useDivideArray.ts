export function useDivideArray(array: any[]) {
  const middleIndex = Math.floor(array.length / 2);
  const firstHalf = array.slice(0, middleIndex);
  const secondHalf = array.slice(middleIndex);
  return { firstHalf, secondHalf };
}
