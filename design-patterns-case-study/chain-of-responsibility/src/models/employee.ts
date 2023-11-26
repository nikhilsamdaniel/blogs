import { Grade } from "./grade";
import { Role } from "./role";

export type Employee = {
    name: string;
    id: number;
    salary: number;
    yoe: number;
    grade: Grade,
    isStarOfTheQuarter: boolean,
    role: Role,
    bonusPercentage: number,
    StarBonusPoints: number,
}