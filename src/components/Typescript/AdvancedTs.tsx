
type Admin = {
  name:string;
  privileges:string[

  ]
}
type Employee={
  name: string;
  startDate:Date;
}
type ElevatedEmployee=Admin & Employee
const e1:ElevatedEmployee={
  name:'Alex',
  privileges:['Admin', 'Product Manager', 'Tech Lead', 'Architect'],
  startDate: new Date()
}
type Combinable = string|number;
type Numberic = number| boolean
type Universal = Combinable & Numberic
const universal:Universal=2023

const add = (a:Combinable,b:Combinable)=>{
  if(typeof a == 'string' || typeof b==='string'){
    return a.toString()+b.toString()
  }
  return a+b
}

type UnknownEmployee = Employee | Admin
const printEmployeeInformation = (emp:UnknownEmployee)=>{
  console.log(`Name: ${emp.name}`)
  if('privileges' in emp){
    console.log(`Privileges: ${emp.privileges}`);
  }
  if('startDate' in emp){
    console.log(`Start date: ${emp.startDate}`)
  }
}
class Car {
drive(){
  console.log('Driving a car...')
}
}
class Truck{
  drive(){
    console.log('Driving a truck...')
  }
  loadCargo(amount:number){
    console.log(`Loading cargo ... ${amount}`)
  }
}
type Vehicle = Car | Truck;
const car1 = new Car()
const car2 = new Truck()
const useVehicle = (vehicle:Vehicle)=>{
  vehicle.drive()
  if(vehicle instanceof Truck){
    vehicle.loadCargo(100)
  }
  // if('loadCargo' in vehicle){
  //   vehicle.loadCargo(100)
  // }
}
interface Bird {
  type: 'bird',
  flyingSpeed:number
}
interface Horse{
  type:'horse',
  runningSpeed:number
}
type Animal = Bird | Horse

const moveAnimal =(animal:Animal)=>{
  let speed;
switch (animal.type){
  case 'bird': 
  speed=animal.flyingSpeed;
  break;
  case 'horse':
    speed=animal.runningSpeed;
    break;
}
console.log(`Moving speed: ${speed}`)
}
// const paragraph = document.querySelector('p')
//////////////////////////////////
// console.log(add('1','3'))
// console.log(e1)
// console.log(universal)
// printEmployeeInformation(e1)
// printEmployeeInformation({name:'Alex', startDate: new Date()})
// const input = document.getElementById('user-input')! as HTMLInputElement
// input.value = 'Hello!'
interface ErrorContainer{
  [prop:string]:string;
}
const errorBug:ErrorContainer={
  email:'Invalid email!',
  userName:'GODofCODE'
}
//function overloads
function addOverload(a:number,b:number):number
function addOverload(a:string,b:string):string
function addOverload(a: Combinable, b: Combinable){
  if (typeof a == 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}
console.log(addOverload(2, 4));
console.log(addOverload('2', '4'));
const AppTs = ()=> {
  // useVehicle(car1)
  // useVehicle(car2)
  moveAnimal({type:'bird',flyingSpeed:20})
  return (
    <div>
      <p>Advanced Typescript</p>
      <input type="text" id="user-input"/>
    </div>
  );
}

export default AppTs;
