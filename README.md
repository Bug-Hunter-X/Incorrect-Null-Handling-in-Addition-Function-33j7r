# Incorrect Null Handling in Addition Function

This repository demonstrates a common bug in JavaScript related to null handling in an addition function. The function `foo` returns `null` if either of its arguments is `null`. This may not be the desired behavior in all cases.  A solution is provided to handle null values by treating them as 0.

## Bug

The original code uses strict equality (`===`) to check for null values. This prevents implicit type coercion, meaning null is not treated as 0.

## Solution

The improved code uses loose equality (`==`) or explicit null checks with a default value of 0 to address the issue.