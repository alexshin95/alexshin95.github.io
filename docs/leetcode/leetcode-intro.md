---
id: leetcode-intro
title: Leetcode Intro
---

```python 
class Solution:
    def trap(self, height: List[int]) -> int:
        
        water = 0
        left = 0
        right = 0
        left_height = [0]*len(height)
        
        for i, h in enumerate(height):
            left = max(left, h)
            left_height[i] = left
        
        
        for i in reversed(range(len(height))):
            right = max(right, height[i])
            water += min(left_height[i],right) - height[i]
            
        return water
```