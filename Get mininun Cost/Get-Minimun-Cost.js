/*
    ---HACKERANK CHALLENGE BY IBM - SEP 2025---

    You are given an array taskCosts of size n, where each element represents the cost of executing a task
    For each task, you can either:
    • Retain it, paying its individual cost, or
    • Remove it using a cleanup operation.

    Cleanup operations are available in bundles, each with the following properties:
    • It provides operationsPerBundle cleanup operations.
    • It costs bundleCost per bundle.
    • Multiple bundles can be allocated.
    • Unused operations within a bundle are allowed.

    Implement a function to compute the minimum total cost. defined as the sum of execution costs of all retained tasks
    plus the total cost of allocated cleanup bundles.

    The function getMinimumCost will take three inputs:
    •  int taskCostsini: an array representing the execution cost of each task.
    •  int operationsPer Bundle: the number of cleanup operations available in one bundle.
    •  int bundleCost: the cost to allocate one cleanup bundle.

    Exaxmple:
    n = 5;
    taskCosts = [7,1,6,3,6];
    operationsPerBundle = 2;
    bundleCost = 10;

    An optimal way to minimize cost
    task number | Retain Cost   | Use Cleanup
    0           |   7           |   yes
    1           |   1           |   no
    2           |   6           |   yes
    3           |   3           |   no
    4           |   6           |   no

    There are two operations to clean up, so one cleanup bundle is required.
    Hence, the total cost is 1 * 10 + (o + 1 + 0 + 3 + 6) = 20
    
    Constraints

*/

function getMinimumCost(taskCosts, operationsPerBundle, bundleCost) {

    let originalTotal = taskCosts.reduce((ac,cv) => ac+cv, 0);
    let sortedTask = taskCosts.sort((a,b) => b-a);
    let bestResult = originalTotal;

    for(let i = 1; i <= taskCosts.length; i++)
    {
        let sum = 0;
        let amountOfTasksReduced = 0;

        console.log('forEach: ' + i);
        sortedTask.forEach((task, idx, _) => 
        {
            if(idx > i - 1)
                sum += task;
            else
                amountOfTasksReduced++;
        });

        let bundlesUsed = Math.ceil(amountOfTasksReduced/operationsPerBundle);
        
        if(sum + (bundleCost * bundlesUsed) < bestResult)
            bestResult = sum + (bundleCost * bundlesUsed);          
    }
    
    return bestResult;
}

console.log(getMinimumCost([7,1,6,3,6], 2, 10));