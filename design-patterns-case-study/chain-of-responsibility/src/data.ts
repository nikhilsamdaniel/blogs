import { Employee } from "./models/employee";
import { Grade } from "./models/grade";
import { Role } from "./models/role";

export const EMPLOYEES: Employee[] = [
    {
        "id": 1,
        "name": "Ellen Roxburgh",
        "role": Role.TL,
        "salary": 2000000,
        "yoe": 8,
        "grade": Grade.Good,
        "isStarOfTheQuarter": false,
        "bonusPercentage": 0,
        "StarBonusPoints": 0
    },
    {
        "id": 2,
        "name": "Jojo Toffts",
        "role": Role.SE3,
        "salary": 1500000,
        "yoe": 6,
        "grade": Grade.Good,
        "isStarOfTheQuarter": false,
        "bonusPercentage": 0,
        "StarBonusPoints": 0
    },
    {
        "id": 3,
        "name": "Annamarie Keiling",
        "role": Role.SE3,
        "salary": 1200000,
        "yoe": 5,
        "grade": Grade.BeyodExpectation,
        "isStarOfTheQuarter": true,
        "bonusPercentage": 0,
        "StarBonusPoints": 0
    },
    {
        "id": 4,
        "name": "Malvin Stockdale",
        "role": Role.SE2,
        "salary": 900000,
        "yoe": 3,
        "grade": Grade.Average,
        "isStarOfTheQuarter": false,
        "bonusPercentage": 0,
        "StarBonusPoints": 0
    },
    {
        "id": 5,
        "name": "Rois Wines",
        "role": Role.SE1,
        "salary": 700000,
        "yoe": 2,
        "grade": Grade.Good,
        "isStarOfTheQuarter": false,
        "bonusPercentage": 0,
        "StarBonusPoints": 0
    },
    {
        "id": 6,
        "name": "Stormi Yeliashev",
        "role": Role.SSE,
        "salary": 1800000,
        "yoe": 7,
        "grade": Grade.BeyodExpectation,
        "isStarOfTheQuarter": true,
        "bonusPercentage": 0,
        "StarBonusPoints": 0
    },
    {
        "id": 7,
        "name": "Cally Thewlis",
        "role": Role.SE3,
        "salary": 1500000,
        "yoe": 6,
        "grade": Grade.Average,
        "isStarOfTheQuarter": false,
        "bonusPercentage": 0,
        "StarBonusPoints": 0
    },
    {
        "id": 8,
        "name": "Jessalyn Scarf",
        "role": Role.SE2,
        "salary": 1100000,
        "yoe": 4,
        "grade": Grade.UnderPerformed,
        "isStarOfTheQuarter": false,
        "bonusPercentage": 0,
        "StarBonusPoints": 0
    },
    {
        "id": 9,
        "name": "Courtnay Leyborne",
        "role": Role.TL,
        "salary": 3000000,
        "yoe": 13,
        "grade": Grade.Good,
        "isStarOfTheQuarter": false,
        "bonusPercentage": 0,
        "StarBonusPoints": 0
    },
    {
        "id": 10,
        "name": "Carmel Goldspink",
        "role": Role.SE1,
        "salary": 800000,
        "yoe": 2,
        "grade":  Grade.BeyodExpectation,
        "isStarOfTheQuarter": true,
        "bonusPercentage": 0,
        "StarBonusPoints": 0
    }
]