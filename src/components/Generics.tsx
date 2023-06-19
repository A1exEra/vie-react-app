/* eslint-disable @typescript-eslint/no-unused-vars */

const names: Array<string> = ["Alex", "Sandro"];
const promise: Promise<string> = new Promise((res, _rej) => {
  setTimeout(() => {
    res("The promise is resolved...");
  }, 2000);
});

function merge<T extends object, U extends object>(a: T, b: U) {
  return Object.assign(a, b);
}
interface Lengthy {
  length: number;
}
function countAndPrint<T extends Lengthy>(element: T): [T, string] {
  let descriptionIndex = "Got no value.";
  if (element.length > 0) {
    descriptionIndex = `Got ${element.length} elements`;
  }
  return [element, descriptionIndex];
}
function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return obj[key];
}
//CLASSES
class DataStorage<T extends string | number> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
    return this;
  }
  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
    return this;
  }
  getItems() {
    return [...this.data];
  }
}
//PARTIALS
interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}
function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  const courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  return courseGoal as CourseGoal;
}
///////////////////
// console.log(names)
// const mergeObj = merge<{name:string,age:number},{job:string}>({ name: 'Alex', age:36}, { job: 'Software Engeneer' });
// console.log(mergeObj)
// console.log(countAndPrint('Rock and roll'))
// console.log(countAndPrint(['Rock and roll','Go For Glory']))
// console.log(extractAndConvert({name:'Sandro'},'name'))
// const textStorage = new DataStorage();
// textStorage
//   .addItem("this is the first item")
//   .addItem("this is the second item item")
//   .addItem("this is the third item item")
//   .addItem("this is the fifth item")
//   .removeItem("this is the third item item");
// console.log(textStorage.getItems());
// const numberStorage = new DataStorage();
// numberStorage.addItem(3).addItem(4).addItem(5).addItem(6).removeItem(4);
// console.log(numberStorage.getItems());
console.log(
  createCourseGoal(
    "typescript course",
    "this is the advanced typescript course",
    new Date(2023, 5, 25)
  )
);
const Generics = () => {
  return <div>Generics</div>;
};
export default Generics;
