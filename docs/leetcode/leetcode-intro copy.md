---
id: leetcode-sliding-window
title: Sliding Window
sidebar_position: 2
---

Sliding window problems will boil down to having a start and end pointer that will both be incrementing based on the constraint given by the problem.

Some staples in the sliding window problem will have:

max_sum or min_sum - *This keeps track of the maximum or minimum len of the subarray*
start - *Starting pointer, usually the pointer that will be incremented once the end has met some sort of constraint*
end - *Ending pointer, usually the pointer that is being incremented in the for loop*
dictionary - *More difficult sliding window problems will require some sort of tracking of array values*

Example use of a dictionary in sliding window problem: [Longest Substring with Distinct Characters] (https://www.educative.io/courses/grokking-the-coding-interview/YMzBx1gE5EO).

Problem Statement
Given a string, find the length of the longest substring, which has all distinct characters.
Example 1:
Input: String="aabccbb"
Output: 3
Explanation: The longest substring with distinct characters is "abc".

Example 2:
Input: String="abbbb"
Output: 2
Explanation: The longest substring with distinct characters is "ab".

Example 3:
Input: String="abccde"
Output: 3
Explanation: Longest substrings with distinct characters are "abc" & "cde".
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