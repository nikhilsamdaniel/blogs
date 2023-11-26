# Chain of Responsibility Design Pattern: A TypeScript Case Study

## Introduction

Within the realm of software design patterns the Chain of Responsibility stands out as an powerful solution, for managing intricate workflows. In this case study we explore how to utilize TypeScript and apply the Chain of Responsibility design pattern to tackle the task of calculating employee salaries.

## Problem Statement

The challenge at hand is far from trivial. Determining employee salaries involves juggling factors such as role, years of experience, grade level and recognition as the star performer of the quarter. Our objective was to create a solution that not addressed these factors but also remained adaptable and expandable in response to evolving requirements.

## Solution Overview

Introducing the Chain of Responsibility design pattern—a pattern that enables an object to pass a request through a chain of handlers. This modular approach empowers each handler to address constraints leading to an scalable resolution.

## Implementation Details

The TypeScript code provided in this repository showcases an implementation of the Chain of Responsibility pattern. Lets delve deeper into how each handler, within the chain contributes to our solution.

### Constraints Handling

#### 1. Role Handler
- Default: TL - Hike 6%
- If more than 10 years of experience, promote to STL - Additional hike of 3% on overall

#### 2. Years of Experience Handler
- TL with more than 10 years: Promote to STL - Hike 3% on overall
- SSE with more than 7 years: Promote to TL - Hike 5% on overall
- SE3 with more than 5 years: Promote to SSE - Hike 10% on overall
- SE2 with more than 3 years: Promote to SE3 - Hike 15% on overall
- SE1 with more than 2 years: Promote to SE2 - Hike 16% on overall

#### 3. Grade Handler
- UnderPerformed: No bonus
- Average: Bonus 4%
- Good: Bonus 8%
- BeyondExpectation: Bonus 10%

#### 4. Star of Quarter Handler
- Star of the Quarter: Additional 2% of the Annual CTC as bonus points

## Results and Impact

The transformed employee objects reveal the success of our implementation. Salaries are calculated with precision, and each handler in the chain contributes to the overall result. The Chain of Responsibility pattern has proven its worth in providing a modular, maintainable, and scalable solution to our salary calculation challenge.

## Conclusion

In summary this case study showcases the advantages of utilizing the Chain of Responsibility design pattern. Its capacity to gracefully manage workflows. Adjust to evolving needs positions it as a valuable asset, for developers. As we delved into the intricacies of calculating employee salaries the Chain of Responsibility pattern emerged as a frontrunner providing a solution that's not efficient but also adaptable, for future requirements.


### GitHub Repository Link

Check out the [Chain of Responsibility Case Study Repository](https://github.com/nikhilsamdaniel/blogs/tree/chain-of-responsibility-case-study) for the complete code and documentation.

## References

[Refactoring Guru](https://refactoring.guru/design-patterns/chain-of-responsibility)
