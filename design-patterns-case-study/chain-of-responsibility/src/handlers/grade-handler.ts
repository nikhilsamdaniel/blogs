import { Employee } from "../models/employee";
import { Grade } from "../models/grade";
import { HikeHandler } from "./handler";

export class GradeHandler extends HikeHandler {
    handle(employee: Employee) {
        switch(employee.grade) {
            case Grade.UnderPerformed:
                employee.bonusPercentage += 0;
                break;
            case Grade.Average:
                employee.bonusPercentage += 0.04;
                break;
            case Grade.Good:
                employee.bonusPercentage += 0.08;
                break;
            case Grade.BeyodExpectation:
                employee.bonusPercentage += 0.1;
                break;
            default:
                break;
        }
        return super.handle(employee);
    }
}