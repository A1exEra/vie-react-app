//DECORATORS
function Logger() {
  console.log("Logging...");
}
// @Logger
class Person {
  name = "Sandro";
  constructor() {
    console.log("Creating Person object....");
  }
}
//////////////////////
const sandro = new Person();
console.log(sandro);
const AppTs = () => {
  return <div>AppTs</div>;
};

export default AppTs;
