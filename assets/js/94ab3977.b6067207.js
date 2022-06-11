"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6305],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return p}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=u(n),p=i,w=m["".concat(l,".").concat(p)]||m[p]||c[p]||a;return n?r.createElement(w,o(o({ref:t},d),{},{components:n})):r.createElement(w,o({ref:t},d))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},636:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return c}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],s={id:"leetcode-sliding-window",title:"Sliding Window",sidebar_position:2},l="Sliding Window",u={unversionedId:"leetcode/leetcode-sliding-window",id:"leetcode/leetcode-sliding-window",title:"Sliding Window",description:"Sliding window problems will boil down to having a start and end pointer that will both be incrementing based on the constraint given by the problem.",source:"@site/docs/leetcode/sliding-window.md",sourceDirName:"leetcode",slug:"/leetcode/leetcode-sliding-window",permalink:"/docs/leetcode/leetcode-sliding-window",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"leetcode-sliding-window",title:"Sliding Window",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Leetcode Intro",permalink:"/docs/leetcode/leetcode-intro"}},d={},c=[{value:"Constants",id:"constants",level:2},{value:"Example problems",id:"example-problems",level:2},{value:"Smallest Subarray With a Greater Sum (Easy)",id:"smallest-subarray-with-a-greater-sum-easy",level:3},{value:"Longest Substring with maximum K Distinct Characters (Medium)",id:"longest-substring-with-maximum-k-distinct-characters-medium",level:3},{value:"Longest Substring with Distinct Characters (Hard)",id:"longest-substring-with-distinct-characters-hard",level:3}],m={toc:c};function p(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"sliding-window"},"Sliding Window"),(0,a.kt)("p",null,"Sliding window problems will boil down to having a start and end pointer that will both be incrementing based on the constraint given by the problem."),(0,a.kt)("h2",{id:"constants"},"Constants"),(0,a.kt)("p",null,"Some staples in the sliding window problem will have:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"max_sum or min_sum - ",(0,a.kt)("em",{parentName:"li"},"This keeps track of the maximum or minimum len of the subarray")),(0,a.kt)("li",{parentName:"ul"},"start - ",(0,a.kt)("em",{parentName:"li"},"Starting pointer, usually the pointer that will be incremented once the end has met some sort of constraint")),(0,a.kt)("li",{parentName:"ul"},"end - ",(0,a.kt)("em",{parentName:"li"},"Ending pointer, usually the pointer that is being incremented in the for loop")),(0,a.kt)("li",{parentName:"ul"},"dictionary - ",(0,a.kt)("em",{parentName:"li"},"More difficult sliding window problems will require some sort of tracking of array values"))),(0,a.kt)("h2",{id:"example-problems"},"Example problems"),(0,a.kt)("h3",{id:"smallest-subarray-with-a-greater-sum-easy"},(0,a.kt)("a",{parentName:"h3",href:"https://www.educative.io/courses/grokking-the-coding-interview/7XMlMEQPnnQ"},"Smallest Subarray With a Greater Sum (Easy)")),(0,a.kt)("p",null,"Classic example of sliding window with two pointers"),(0,a.kt)("p",null,"Problem Statement",(0,a.kt)("br",{parentName:"p"}),"\n","Given an array of positive integers and a number \u2018S,\u2019 find the length of the smallest contiguous subarray whose sum is greater than or equal to \u2018S\u2019. Return 0 if no such subarray exists."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Example 2:  \nInput: [2, 1, 5, 2, 8], S=7  \nOutput: 1  \nExplanation: The smallest subarray with a sum greater than or equal to \u20187\u2019 is [8].\n\nExample 3:  \nInput: [3, 4, 1, 1, 6], S=8  \nOutput: 3  \nExplanation: Smallest subarrays with a sum greater than or equal to \u20188\u2019 are [3, 4, 1] or [1, 1, 6].\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def smallest_subarray_sum(s, arr):\n  if len(arr) < 1:\n    return -1\n  \n  window_start = 0\n  min_len = float('inf')\n  curr_sum = 0\n\n  for window_end in range(len(arr)):\n    curr_sum += arr[window_end]\n    while curr_sum >= s:\n      min_len = min(min_len, window_end+1 - window_start)\n      curr_sum -= arr[window_start]\n      window_start += 1\n    \n  \n  return min_len\n\n")),(0,a.kt)("h3",{id:"longest-substring-with-maximum-k-distinct-characters-medium"},(0,a.kt)("a",{parentName:"h3",href:"https://www.educative.io/courses/grokking-the-coding-interview/YQQwQMWLx80"},"Longest Substring with maximum K Distinct Characters (Medium)")),(0,a.kt)("p",null,"Example use of a dictionary in sliding window problem:"),(0,a.kt)("p",null,"Problem Statement",(0,a.kt)("br",{parentName:"p"}),"\n","Given a string, find the length of the longest substring in it with no more than K distinct characters.  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'Example 3:  \nInput: String="cbbebi", K=3  \nOutput: 5  \nExplanation: The longest substrings with no more than \'3\' distinct characters are "cbbeb" & "bbebi".\n\nExample 4:  \nInput: String="cbbebi", K=10  \nOutput: 6  \nExplanation: The longest substring with no more than \'10\' distinct characters is "cbbebi".\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def longest_substring_with_k_distinct(str1, k):\n  d = {}\n  window_start = 0\n  max_sum = float('-inf')\n\n  for window_end in range(len(str1)):\n    if str1[window_end] not in d:\n      d[str1[window_end]] = 1\n    else:\n      d[str1[window_end]] += 1\n    \n    while len(d) > k:\n      d[str1[window_start]] -= 1\n      if d[str1[window_start]] == 0:\n        del d[str1[window_start]]\n      window_start += 1\n\n    max_sum = max(max_sum, window_end - window_start + 1)\n\n  return max_sum\n")),(0,a.kt)("h3",{id:"longest-substring-with-distinct-characters-hard"},(0,a.kt)("a",{parentName:"h3",href:"https://www.educative.io/courses/grokking-the-coding-interview/YMzBx1gE5EO"},"Longest Substring with Distinct Characters (Hard)")),(0,a.kt)("p",null,"Example use of a dictionary in sliding window problem:"),(0,a.kt)("p",null,"Problem Statement",(0,a.kt)("br",{parentName:"p"}),"\n","Given a string, find the length of the longest substring, which has all distinct characters.  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'Example 1:  \nInput: String="aabccbb"  \nOutput: 3  \nExplanation: The longest substring with distinct characters is "abc".  \n\nExample 2:  \nInput: String="abbbb"  \nOutput: 2  \nExplanation: The longest substring with distinct characters is "ab".\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def non_repeat_substring(str):\n  d = {}\n  max_sum = 0\n  start = 0\n\n  for end in range(len(str)):\n    if str[end] not in d:\n      d[str[end]] = 1\n    else:\n      d[str[end]] += 1\n      \n    while d[str[end]] > 1:\n      d[str[start]] -= 1\n      if d[str[start]] == 0:\n        del d[str[start]]\n      start += 1\n\n    max_sum = max(max_sum, end - start + 1)\n\n  return max_sum\n")))}p.isMDXComponent=!0}}]);