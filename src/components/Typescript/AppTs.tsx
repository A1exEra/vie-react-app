/* eslint-disable @typescript-eslint/no-unused-vars */

const names:Array<string>=['Alex','Sandro']
const promise: Promise<string> = new Promise((res,_rej)=>{
    setTimeout(()=>{
        res('The promise is resolved...')
    },2000)
})

function merge<T extends object,U extends object>(a:T,b:U){
    return Object.assign(a,b)
}
interface Lengthy{
    length:number
}
function countAndPrint<T extends Lengthy>(element:T):[T,string]{
    let descriptionIndex = 'Got no value.'
    if(element.length>0){
        descriptionIndex=`Got ${element.length} elements`
    }
    return [element,descriptionIndex]
}
function extractAndConvert<T extends object,U extends keyof T>(obj:T,key:U){
    return obj[key]
}
///////////////////
// console.log(names)
// const mergeObj = merge<{name:string,age:number},{job:string}>({ name: 'Alex', age:36}, { job: 'Software Engeneer' });
// console.log(mergeObj)
// console.log(countAndPrint('Rock and roll'))
// console.log(countAndPrint(['Rock and roll','Go For Glory']))
console.log(extractAndConvert({name:'Sandro'},'name'))
const AppTs = () => {
  return <div>AppTs</div>;
};
export default AppTs