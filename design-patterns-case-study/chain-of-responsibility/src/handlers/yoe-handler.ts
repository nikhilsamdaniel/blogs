import { Employee } from "../models/employee";
import { Role } from "../models/role";
import { HikeHandler } from "./handler";

export class YOEHandler extends HikeHandler {
    handle(employee: Employee) {
        switch(true) {
            case (employee.role === Role.TL && employee.yoe > 10):
                employee.role = Role.STL;
                employee.salary += employee.salary * 0.03;
                break;
            case (employee.role === Role.SSE && employee.yoe > 7):
                employee.role = Role.TL;
                employee.salary += employee.salary * 0.05;
                break;
            case (employee.role === Role.SE3 && employee.yoe > 5):
                employee.role = Role.SSE;
                employee.salary += employee.salary * 0.1;
                break;
            case (employee.role === Role.SE2 && employee.yoe > 3):
                employee.role = Role.SE3;
                employee.salary += employee.salary * 0.15;
                break;
            case (employee.role === Role.SE1 && employee.yoe > 2):
                employee.role = Role.SE2;
                employee.salary += employee.salary * 0.16;
                break;
            default:
                break;
        }
        return super.handle(employee);
    }
}