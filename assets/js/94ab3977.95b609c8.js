"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6305],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=i,b=p["".concat(s,".").concat(m)]||p[m]||u[m]||o;return n?r.createElement(b,a(a({ref:t},d),{},{components:n})):r.createElement(b,a({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},636:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],l={id:"leetcode-sliding-window",title:"Sliding Window",sidebar_position:2},s="Sliding Window",c={unversionedId:"leetcode/leetcode-sliding-window",id:"leetcode/leetcode-sliding-window",title:"Sliding Window",description:"Sliding window problems will boil down to having a start and end pointer that will both be incrementing based on the constraint given by the problem.",source:"@site/docs/leetcode/sliding-window.md",sourceDirName:"leetcode",slug:"/leetcode/leetcode-sliding-window",permalink:"/docs/leetcode/leetcode-sliding-window",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"leetcode-sliding-window",title:"Sliding Window",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Leetcode Intro",permalink:"/docs/leetcode/leetcode-intro"}},d={},u=[{value:"Constants",id:"constants",level:2},{value:"Example problems",id:"example-problems",level:2},{value:"Longest Substring with Distinct Characters",id:"longest-substring-with-distinct-characters",level:3}],p={toc:u};function m(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"sliding-window"},"Sliding Window"),(0,o.kt)("p",null,"Sliding window problems will boil down to having a start and end pointer that will both be incrementing based on the constraint given by the problem."),(0,o.kt)("h2",{id:"constants"},"Constants"),(0,o.kt)("p",null,"Some staples in the sliding window problem will have:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"max_sum or min_sum - ",(0,o.kt)("em",{parentName:"li"},"This keeps track of the maximum or minimum len of the subarray")),(0,o.kt)("li",{parentName:"ul"},"start - ",(0,o.kt)("em",{parentName:"li"},"Starting pointer, usually the pointer that will be incremented once the end has met some sort of constraint")),(0,o.kt)("li",{parentName:"ul"},"end - ",(0,o.kt)("em",{parentName:"li"},"Ending pointer, usually the pointer that is being incremented in the for loop")),(0,o.kt)("li",{parentName:"ul"},"dictionary - ",(0,o.kt)("em",{parentName:"li"},"More difficult sliding window problems will require some sort of tracking of array values"))),(0,o.kt)("h2",{id:"example-problems"},"Example problems"),(0,o.kt)("h3",{id:"longest-substring-with-distinct-characters"},(0,o.kt)("a",{parentName:"h3",href:"https://www.educative.io/courses/grokking-the-coding-interview/YMzBx1gE5EO"},"Longest Substring with Distinct Characters")),(0,o.kt)("p",null,"Example use of a dictionary in sliding window problem:"),(0,o.kt)("p",null,"Problem Statement",(0,o.kt)("br",{parentName:"p"}),"\n","Given a string, find the length of the longest substring, which has all distinct characters.  "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'Example 1:  \nInput: String="aabccbb"  \nOutput: 3  \nExplanation: The longest substring with distinct characters is "abc".  \n\nExample 2:  \nInput: String="abbbb"  \nOutput: 2  \nExplanation: The longest substring with distinct characters is "ab".\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"def non_repeat_substring(str):\n  d = {}\n  max_sum = 0\n  start = 0\n\n  for end in range(len(str)):\n    if str[end] not in d:\n      d[str[end]] = 1\n    else:\n      d[str[end]] += 1\n      \n    while d[str[end]] > 1:\n      d[str[start]] -= 1\n      if d[str[start]] == 0:\n        del d[str[start]]\n      start += 1\n\n    max_sum = max(max_sum, end - start + 1)\n\n  return max_sum\n")))}m.isMDXComponent=!0}}]);