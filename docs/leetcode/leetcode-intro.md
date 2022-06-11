---
id: leetcode-intro
title: Leetcode Intro
sidebar_position: 1
---

# Container with Most Water

## Problem
11. Container With Most Water
Medium

17385

960

Add to List

Share
You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.

 

Example 1:

```
Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
Example 2:

Input: height = [1,1]
Output: 1
```

Constraints:
```
n == height.length
2 <= n <= 105
0 <= height[i] <= 104
```

## Solution
```python 
class Solution:
    def maxArea(self, height: List[int]) -> int:
        if len(height) < 2:
            return 0
        left = 0
        right = len(height) - 1
        res = 0
        
        #two pointers left and right. Start at both ends of height array and compare which pointer has a 
        #larger height. If left height is less than the right, then we know the most water that can be contained
        #is the left height * the width ( right - left ).
        while left < right:
            if height[left] <= height[right]:
                temp = height[left] * (right - left)
                left += 1
            else:
                temp = height[right] * (right - left)
                right -= 1
            res = max(res, temp)
        return res
```