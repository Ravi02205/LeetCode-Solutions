<h2><a href="https://leetcode.com/problems/minimum-number-game/"><div id="big-omega-company-tags"><div id="big-omega-topbar"><div class="companyTagsContainer" style="overflow-x: scroll; flex-wrap: nowrap;"><div class="companyTagsContainer--tag">No companies found for this problem</div></div><div class="companyTagsContainer--chevron"><div><svg version="1.1" id="icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 32 32" fill="#4087F1" xml:space="preserve" style="width: 20px;"><polygon points="16,22 6,12 7.4,10.6 16,19.2 24.6,10.6 26,12 "></polygon><rect id="_x3C_Transparent_Rectangle_x3E_" class="st0" fill="none" width="32" height="32"></rect></svg></div></div></div></div>2974. Minimum Number Game</a></h2><h3>Easy</h3><hr><div><p>You are given a <strong>0-indexed</strong> integer array <code>nums</code> of <strong>even</strong> length and there is also an empty array <code>arr</code>. Alice and Bob decided to play a game where in every round Alice and Bob will do one move. The rules of the game are as follows:</p>

<ul>
	<li>Every round, first Alice will remove the <strong>minimum</strong> element from <code>nums</code>, and then Bob does the same.</li>
	<li>Now, first Bob will append the removed element in the array <code>arr</code>, and then Alice does the same.</li>
	<li>The game continues until <code>nums</code> becomes empty.</li>
</ul>

<p>Return <em>the resulting array </em><code>arr</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre><strong>Input:</strong> nums = [5,4,2,3]
<strong>Output:</strong> [3,2,5,4]
<strong>Explanation:</strong> In round one, first Alice removes 2 and then Bob removes 3. Then in arr firstly Bob appends 3 and then Alice appends 2. So arr = [3,2].
At the begining of round two, nums = [5,4]. Now, first Alice removes 4 and then Bob removes 5. Then both append in arr which becomes [3,2,5,4].
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre><strong>Input:</strong> nums = [2,5]
<strong>Output:</strong> [5,2]
<strong>Explanation:</strong> In round one, first Alice removes 2 and then Bob removes 5. Then in arr firstly Bob appends and then Alice appends. So arr = [5,2].
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 100</code></li>
	<li><code>1 &lt;= nums[i] &lt;= 100</code></li>
	<li><code>nums.length % 2 == 0</code></li>
</ul>
</div>