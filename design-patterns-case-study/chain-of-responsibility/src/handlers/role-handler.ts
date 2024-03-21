import { Employee } from "../models/employee";
import { Role } from "../models/role";
import { HikeHandler } from "./handler";

export class RoleHandler extends HikeHandler {
    handle(employee: Employee) {        
        switch(employee.role) {
            case Role.TL:
                employee.salary += employee.salary * 0.06;
                break;
            case Role.SSE: 
                employee.salary += employee.salary * 0.08;
                break;
            case Role.SE3:
                employee.salary += employee.salary * 0.1;
                break;
            case Role.SE2: 
                employee.salary += employee.salary * 0.14;
                break;
            case Role.SE1:
                employee.salary += employee.salary * 0.18;
                break;
            default:
                break;
        }
        return super.handle(employee);
    }
}