import { Employee } from "./employee";

export interface IHikeHandler {
    setNext(handle: IHikeHandler): IHikeHandler;
    handle(employee: Employee) : Employee;
}