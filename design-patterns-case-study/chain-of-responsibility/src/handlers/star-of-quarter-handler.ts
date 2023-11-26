import { Employee } from "../models/employee";
import { HikeHandler } from "./handler";

export class StarOfQuarterHandler extends HikeHandler {
    handle(employee: Employee) {
        switch(true) {
            case employee.isStarOfTheQuarter: 
                employee.StarBonusPoints += employee.salary * 0.02;
                break;
        }
        return super.handle(employee);
    }
}