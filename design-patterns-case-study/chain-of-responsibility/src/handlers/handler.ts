import { Employee } from "../models/employee";
import { IHikeHandler } from "../models/hike-handler";

export abstract class HikeHandler implements IHikeHandler {
    private hikeHandler!: IHikeHandler;
    public costIncreasePercentage: number = 0;
    setNext(handler: IHikeHandler): IHikeHandler {
        this.hikeHandler = handler;
        return this.hikeHandler;
    }

    handle(employee: Employee) {
        if(this.hikeHandler) {
            return this.hikeHandler.handle(employee);
        }
        return employee;
    }
}