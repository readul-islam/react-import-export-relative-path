const add = (num1, num2) => {
    const number = num1 + num2;
    return number;

}
const multi = (num1, num2) => {
    return num1 * num2;
}
//when you need multi function you use that you export element isn't defult so you can use {multi modules here sparate by comma}
//example below 

export{add, multi}