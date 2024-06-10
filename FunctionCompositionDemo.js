//Function composition is a fundamental concept in functional programming where you combine multiple functions to create a new function.

const deductTaxes = (grossSalary) => grossSalary * 0.8;
const addBonus = (grossSalary) => grossSalary + 500;

const netSalary = addBonus(deductTaxes(2000));

console.log("Net Salary:", netSalary);
