export default function getListStudentIds(arr) {
  let newArr = [];
  if (arr instanceof Array) {
    newArr = arr.map((x) => x.id);
  }

  return newArr;
}
