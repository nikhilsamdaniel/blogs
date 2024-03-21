import { EMPLOYEES } from "./data";
import { RoleHandler, YOEHandler, GradeHandler, StarOfQuarterHandler } from "./handlers";
import { Employee } from "./models/employee";
import { IHikeHandler } from "./models/hike-handler";

const calcEmployeeHike = (handler: IHikeHandler, employees: Employee[]) => {
    const transformedEmployees = employees.map((employee) => handler.handle(employee));
    const initialSalary = employees.reduce((total, employee) => total + employee.salary, 0);
    const finalSalary = transformedEmployees.reduce((total, employee) => total + employee.salary, 0);
    const bonusAmount = transformedEmployees.reduce((total, employee) => total + (employee.bonusPercentage * employee.salary), 0);
    const starOfQuarterBonus = transformedEmployees.reduce((total, employee) => total + employee.StarBonusPoints, 0);
    const costIncreasePercentage = ((finalSalary + bonusAmount + starOfQuarterBonus - initialSalary) / initialSalary) * 100;
    return { transformedEmployees, costIncreasePercentage };
};

const roleHandler = new RoleHandler();
const yoeHandler = new YOEHandler();
const gradeHandler = new GradeHandler();
const starOfQuarterHandler = new StarOfQuarterHandler();

roleHandler.setNext(yoeHandler).setNext(gradeHandler).setNext(starOfQuarterHandler);

const employees: Employee[] = EMPLOYEES;

const result = calcEmployeeHike(roleHandler, employees);
console.log(result);