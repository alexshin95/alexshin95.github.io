---
id: leetcode-sliding-window
title: Sliding Window
sidebar_position: 2
---

# Sliding Window

Sliding window problems will boil down to having start and end pointers that will both increment based on the constraint given by the problem.

## Constants

Constants in a sliding window problem:

- max_sum or min_sum - *This keeps track of the maximum or minimum len of the subarray*
- start - *Starting pointer, usually the pointer that will be incremented once the end has met some sort of constraint*
- end - *Ending pointer, usually the pointer that is being incremented in the for loop*
- dictionary - *More difficult sliding window problems will require some sort of tracking of array values*

## Example problems

### [Smallest Subarray With a Greater Sum (Easy)](https://www.educative.io/courses/grokking-the-coding-interview/7XMlMEQPnnQ)

Classic example of sliding window with two pointers

Problem Statement  
Given an array of positive integers and a number ‘S,’ find the length of the smallest contiguous subarray whose sum is greater than or equal to ‘S’. Return 0 if no such subarray exists.
```
Example 2:  
Input: [2, 1, 5, 2, 8], S=7  
Output: 1  
Explanation: The smallest subarray with a sum greater than or equal to ‘7’ is [8].

Example 3:  
Input: [3, 4, 1, 1, 6], S=8  
Output: 3  
Explanation: Smallest subarrays with a sum greater than or equal to ‘8’ are [3, 4, 1] or [1, 1, 6].
```
```python
def smallest_subarray_sum(s, arr):
  if len(arr) < 1:
    return -1
  
  window_start = 0
  min_len = float('inf')
  curr_sum = 0

  for window_end in range(len(arr)):
    curr_sum += arr[window_end]
    while curr_sum >= s:
      min_len = min(min_len, window_end+1 - window_start)
      curr_sum -= arr[window_start]
      window_start += 1
    
  
  return min_len
```

### [Longest Substring with maximum K Distinct Characters (Medium)](https://www.educative.io/courses/grokking-the-coding-interview/YQQwQMWLx80)

Example use of a dictionary in sliding window problem:

Problem Statement  
Given a string, find the length of the longest substring in it with no more than K distinct characters.  
```
Example 3:  
Input: String="cbbebi", K=3  
Output: 5  
Explanation: The longest substrings with no more than '3' distinct characters are "cbbeb" & "bbebi".

Example 4:  
Input: String="cbbebi", K=10  
Output: 6  
Explanation: The longest substring with no more than '10' distinct characters is "cbbebi".
```
```python
def longest_substring_with_k_distinct(str1, k):
  d = {}
  window_start = 0
  max_sum = float('-inf')

  for window_end in range(len(str1)):
    if str1[window_end] not in d:
      d[str1[window_end]] = 1
    else:
      d[str1[window_end]] += 1
    
    while len(d) > k:
      d[str1[window_start]] -= 1
      if d[str1[window_start]] == 0:
        del d[str1[window_start]]
      window_start += 1

    max_sum = max(max_sum, window_end - window_start + 1)

  return max_sum
```

### [Longest Substring with Distinct Characters (Hard)](https://www.educative.io/courses/grokking-the-coding-interview/YMzBx1gE5EO)

Example use of a dictionary in sliding window problem:

Problem Statement  
Given a string, find the length of the longest substring, which has all distinct characters.  
```
Example 1:  
Input: String="aabccbb"  
Output: 3  
Explanation: The longest substring with distinct characters is "abc".  

Example 2:  
Input: String="abbbb"  
Output: 2  
Explanation: The longest substring with distinct characters is "ab".
```
```python
def non_repeat_substring(str):
  d = {}
  max_sum = 0
  start = 0

  for end in range(len(str)):
    if str[end] not in d:
      d[str[end]] = 1
    else:
      d[str[end]] += 1
      
    while d[str[end]] > 1:
      d[str[start]] -= 1
      if d[str[start]] == 0:
        del d[str[start]]
      start += 1

    max_sum = max(max_sum, end - start + 1)

  return max_sum
```