document.addEventListener('DOMContentLoaded', () => {
    const questionsListDiv = document.getElementById('questions-list');
    const hintModal = document.getElementById('hint-modal');
    const hintQuestionTitle = document.getElementById('hint-question');
    const hintContentDiv = document.getElementById('hint-content');
    const closeBtn = document.querySelector('.close-btn');

    // Complete list of Fasal coding questions with hints and answers
    const fasalQuestions = [
        // ... (your existing question array remains the same)
                  {
  "question": "Find indices of two numbers in an array that add up to a target.",
  "description": "Tests array manipulation and hashing.",
  "hint": "Use a HashMap to store visited elements.",
  "answer": `
    <pre><code class="language-java">
    import java.util.*;

    public int[] twoSum(int[] nums, int target) {
      Map<Integer, Integer> map = new HashMap<>();
      for (int i = 0; i < nums.length; i++) {
        int complement = target - nums[i];
        if (map.containsKey(complement)) {
          return new int[]{map.get(complement), i};
        }
        map.put(nums[i], i);
      }
      return new int[]{};
    }
    </code></pre>
  `
},
{
  "question": "Reverse a singly linked list.",
  "description": "Tests understanding of linked list operations.",
  "hint": "Use three pointers: prev, curr, next.",
  "answer": `
    <pre><code class="language-java">
    class ListNode {
      int val;
      ListNode next;
      ListNode(int x) { val = x; }
    }

    public ListNode reverseList(ListNode head) {
      ListNode prev = null;
      while (head != null) {
        ListNode next = head.next;
        head.next = prev;
        prev = head;
        head = next;
      }
      return prev;
    }
    </code></pre>
  `
},
{
  "question": "Check if a given string is a palindrome.",
  "description": "Tests string manipulation.",
  "hint": "Use two pointers to compare characters.",
  "answer": `
    <pre><code class="language-java">
    public boolean isPalindrome(String s) {
      int left = 0, right = s.length() - 1;
      while (left < right) {
        if (s.charAt(left++) != s.charAt(right--)) return false;
      }
      return true;
    }
    </code></pre>
  `
},
{
  "question": "Check if a linked list has a cycle.",
  "description": "Tests Floyd's Cycle detection algorithm.",
  "hint": "Use slow and fast pointers.",
  "answer": `
    <pre><code class="language-java">
    public boolean hasCycle(ListNode head) {
      if (head == null) return false;
      ListNode slow = head, fast = head.next;
      while (slow != fast) {
        if (fast == null || fast.next == null) return false;
        slow = slow.next;
        fast = fast.next.next;
      }
      return true;
    }
    </code></pre>
  `
},
{
  "question": "Merge two sorted arrays into one sorted array.",
  "description": "Tests basic array manipulation.",
  "hint": "Use two pointers from both arrays.",
  "answer": `
    <pre><code class="language-java">
    public int[] mergeSortedArrays(int[] a, int[] b) {
      int[] result = new int[a.length + b.length];
      int i = 0, j = 0, k = 0;

      while (i < a.length && j < b.length) {
        if (a[i] < b[j]) result[k++] = a[i++];
        else result[k++] = b[j++];
      }

      while (i < a.length) result[k++] = a[i++];
      while (j < b.length) result[k++] = b[j++];
      return result;
    }
    </code></pre>
  `
},
{
  "question": "Find the maximum sum of a contiguous subarray.",
  "description": "Tests dynamic programming skills.",
  "hint": "Use Kadane's Algorithm.",
  "answer": `
    <pre><code class="language-java">
    public int maxSubArray(int[] nums) {
      int maxSoFar = nums[0], current = nums[0];
      for (int i = 1; i < nums.length; i++) {
        current = Math.max(nums[i], current + nums[i]);
        maxSoFar = Math.max(maxSoFar, current);
      }
      return maxSoFar;
    }
    </code></pre>
  `
},
{
  "question": "Return the index of the first non-repeating character.",
  "description": "Tests hashing and string processing.",
  "hint": "Use frequency count with a HashMap or array.",
  "answer": `
    <pre><code class="language-java">
    public int firstUniqChar(String s) {
      int[] count = new int[26];
      for (char c : s.toCharArray()) count[c - 'a']++;
      for (int i = 0; i < s.length(); i++) {
        if (count[s.charAt(i) - 'a'] == 1) return i;
      }
      return -1;
    }
    </code></pre>
  `
},
{
  "question": "Check if a string has valid parentheses.",
  "description": "Tests stack usage.",
  "hint": "Push opening brackets to a stack and check closing ones.",
  "answer": `
    <pre><code class="language-java">
    public boolean isValid(String s) {
      Stack<Character> stack = new Stack<>();
      for (char c : s.toCharArray()) {
        if (c == '(') stack.push(')');
        else if (c == '{') stack.push('}');
        else if (c == '[') stack.push(']');
        else if (stack.isEmpty() || stack.pop() != c) return false;
      }
      return stack.isEmpty();
    }
    </code></pre>
  `
},
{
  "question": "You can climb 1 or 2 steps at a time. How many ways to reach the top?",
  "description": "Classic dynamic programming question.",
  "hint": "Similar to Fibonacci sequence.",
  "answer": `
    <pre><code class="language-java">
    public int climbStairs(int n) {
      if (n <= 2) return n;
      int a = 1, b = 2;
      for (int i = 3; i <= n; i++) {
        int temp = a + b;
        a = b;
        b = temp;
      }
      return b;
    }
    </code></pre>
  `
},
{
  "question": "Find a peak element in an array.",
  "description": "Tests binary search understanding.",
  "hint": "A peak is greater than its neighbors.",
  "answer": `
    <pre><code class="language-java">
    public int findPeakElement(int[] nums) {
      int left = 0, right = nums.length - 1;
      while (left < right) {
        int mid = (left + right) / 2;
        if (nums[mid] > nums[mid + 1]) right = mid;
        else left = mid + 1;
      }
      return left;
    }
    </code></pre>
  `
},
{
  "question": "Find the length of the longest substring without repeating characters.",
  "description": "Tests sliding window technique.",
  "hint": "Use a HashSet to track characters in the current window.",
  "answer": `
    <pre><code class="language-java">
    public int lengthOfLongestSubstring(String s) {
      Set<Character> set = new HashSet<>();
      int left = 0, maxLen = 0;
      for (int right = 0; right < s.length(); right++) {
        while (set.contains(s.charAt(right))) {
          set.remove(s.charAt(left++));
        }
        set.add(s.charAt(right));
        maxLen = Math.max(maxLen, right - left + 1);
      }
      return maxLen;
    }
    </code></pre>
  `
},
{
  "question": "Rotate an array to the right by k steps.",
  "description": "Tests array manipulation skills.",
  "hint": "Use reversal algorithm in three steps.",
  "answer": `
    <pre><code class="language-java">
    public void rotate(int[] nums, int k) {
      k = k % nums.length;
      reverse(nums, 0, nums.length - 1);
      reverse(nums, 0, k - 1);
      reverse(nums, k, nums.length - 1);
    }

    private void reverse(int[] nums, int start, int end) {
      while (start < end) {
        int temp = nums[start];
        nums[start++] = nums[end];
        nums[end--] = temp;
      }
    }
    </code></pre>
  `
},
{
  "question": "Find the missing number in an array containing n distinct numbers in range [0, n].",
  "description": "Tests math and logic.",
  "hint": "Use sum formula: n(n+1)/2.",
  "answer": `
    <pre><code class="language-java">
    public int missingNumber(int[] nums) {
      int n = nums.length;
      int total = n * (n + 1) / 2;
      int sum = 0;
      for (int num : nums) sum += num;
      return total - sum;
    }
    </code></pre>
  `
},
{
  "question": "Move all 0s to the end of the array while maintaining the order of other elements.",
  "description": "Tests in-place array manipulation.",
  "hint": "Use two pointers.",
  "answer": `
    <pre><code class="language-java">
    public void moveZeroes(int[] nums) {
      int index = 0;
      for (int num : nums) {
        if (num != 0) nums[index++] = num;
      }
      while (index < nums.length) nums[index++] = 0;
    }
    </code></pre>
  `
},
{
  "question": "Find the element that appears more than n/2 times.",
  "description": "Tests use of Boyer-Moore Voting Algorithm.",
  "hint": "Track a candidate and its count.",
  "answer": `
    <pre><code class="language-java">
    public int majorityElement(int[] nums) {
      int count = 0, candidate = 0;
      for (int num : nums) {
        if (count == 0) candidate = num;
        count += (num == candidate) ? 1 : -1;
      }
      return candidate;
    }
    </code></pre>
  `
},
{
  "question": "Find the intersection of two arrays.",
  "description": "Tests set operations.",
  "hint": "Use HashSet to track unique elements.",
  "answer": `
    <pre><code class="language-java">
    public int[] intersection(int[] nums1, int[] nums2) {
      Set<Integer> set1 = new HashSet<>();
      for (int num : nums1) set1.add(num);
      Set<Integer> result = new HashSet<>();
      for (int num : nums2) {
        if (set1.contains(num)) result.add(num);
      }
      return result.stream().mapToInt(i -> i).toArray();
    }
    </code></pre>
  `
},
{
  "question": "Check if two strings are anagrams.",
  "description": "Tests string character frequency comparison.",
  "hint": "Use a frequency array or hashmap.",
  "answer": `
    <pre><code class="language-java">
    public boolean isAnagram(String s, String t) {
      if (s.length() != t.length()) return false;
      int[] count = new int[26];
      for (int i = 0; i < s.length(); i++) {
        count[s.charAt(i) - 'a']++;
        count[t.charAt(i) - 'a']--;
      }
      for (int c : count) if (c != 0) return false;
      return true;
    }
    </code></pre>
  `
},
{
  "question": "Merge overlapping intervals.",
  "description": "Tests sorting and interval merging logic.",
  "hint": "Sort by start time and merge if overlapping.",
  "answer": `
    <pre><code class="language-java">
    public int[][] merge(int[][] intervals) {
      Arrays.sort(intervals, (a, b) -> a[0] - b[0]);
      List<int[]> merged = new ArrayList<>();
      for (int[] interval : intervals) {
        if (merged.isEmpty() || merged.get(merged.size() - 1)[1] < interval[0]) {
          merged.add(interval);
        } else {
          merged.get(merged.size() - 1)[1] = Math.max(merged.get(merged.size() - 1)[1], interval[1]);
        }
      }
      return merged.toArray(new int[merged.size()][]);
    }
    </code></pre>
  `
},
{
  "question": "Implement a queue using two stacks.",
  "description": "Tests stack manipulation and simulation of queue behavior.",
  "hint": "Use one stack for input and one for output.",
  "answer": `
    <pre><code class="language-java">
    class MyQueue {
      Stack<Integer> input = new Stack<>();
      Stack<Integer> output = new Stack<>();

      public void push(int x) {
        input.push(x);
      }

      public int pop() {
        peek();
        return output.pop();
      }

      public int peek() {
        if (output.isEmpty()) {
          while (!input.isEmpty()) {
            output.push(input.pop());
          }
        }
        return output.peek();
      }

      public boolean empty() {
        return input.isEmpty() && output.isEmpty();
      }
    }
    </code></pre>
  `
},
{
  "question": "Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.",
  "description": "Tests design and auxiliary stack usage.",
  "hint": "Use an extra stack to keep track of minimums.",
  "answer": `
    <pre><code class="language-java">
    class MinStack {
      Stack<Integer> stack = new Stack<>();
      Stack<Integer> minStack = new Stack<>();

      public void push(int val) {
        stack.push(val);
        if (minStack.isEmpty() || val <= minStack.peek()) {
          minStack.push(val);
        }
      }

      public void pop() {
        if (stack.pop().equals(minStack.peek())) {
          minStack.pop();
        }
      }

      public int top() {
        return stack.peek();
      }

      public int getMin() {
        return minStack.peek();
      }
    }
    </code></pre>
  `
},
{
  "question": "Write an SQL query to find the second highest salary from an Employee table.",
  "description": "Tests SQL querying and subqueries.",
  "hint": "Use a subquery with < MAX().",
  "answer": `
    <pre><code class="language-sql">
    SELECT MAX(salary) AS SecondHighestSalary
    FROM Employee
    WHERE salary < (SELECT MAX(salary) FROM Employee);
    </code></pre>
  `
},
{
  "question": "Tell me about a time you had a conflict with a team member. How did you handle it?",
  "description": "Tests your conflict resolution and interpersonal skills.",
  "hint": "Use the STAR method — explain Situation, Task, Action, and Result.",
  "answer": `
    <p><strong>Sample Answer:</strong> In a group project, a teammate disagreed on the approach. I scheduled a meeting to understand their view, discussed alternatives, and we reached a compromise. The project succeeded, and our teamwork improved.</p>
  `
},
{
  "question": "Describe a situation where you demonstrated leadership without being asked.",
  "description": "Assesses leadership potential and initiative-taking.",
  "hint": "Pick a scenario where you voluntarily stepped up and guided others.",
  "answer": `
    <p><strong>Sample Answer:</strong> During a college fest, the team leader fell sick. I took the initiative to manage the tasks, coordinated with different teams, and ensured smooth execution. The event was successful, and I was appreciated for my efforts.</p>
  `
},
{
  "question": "What are your long-term career goals and how does this role align with them?",
  "description": "Assesses career vision and alignment with the company.",
  "hint": "Connect your personal growth with the company’s growth.",
  "answer": `
    <p><strong>Sample Answer:</strong> My long-term goal is to become a tech lead. This role helps me build a strong foundation in software development, work with experienced professionals, and contribute to meaningful projects that shape my journey.</p>
  `
},
{
  "question": "How do you manage stress and deadlines?",
  "description": "Evaluates time management and emotional stability under pressure.",
  "hint": "Describe real strategies you use to stay focused and calm.",
  "answer": `
    <p><strong>Sample Answer:</strong> I plan tasks ahead, break them into smaller goals, and use tools like Trello or Google Calendar. I also take short breaks to stay refreshed. This helps me stay productive and meet deadlines without burnout.</p>
  `
},
{
  "question": "What is your greatest strength and how has it helped you in the past?",
  "description": "Assesses self-awareness and application of skills.",
  "hint": "Choose a strength that is relevant to the role.",
  "answer": `
    <p><strong>Sample Answer:</strong> My greatest strength is problem-solving. During my internship, I identified a bug that caused data mismatch. I analyzed logs, traced the issue, and fixed it, which improved the system’s reliability.</p>
  `
}


























    ];

    fasalQuestions.forEach((question, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question-item');

        const title = document.createElement('h3');
        title.textContent = `${index + 1}. ${question.question}`;

        const description = document.createElement('p');
        description.textContent = question.description;

        // Create button container
        const buttonContainer = document.createElement('div');
        buttonContainer.style.display = 'flex';
        buttonContainer.style.gap = '10px';
        buttonContainer.style.marginTop = '15px';

        // Hint Button
        const hintButton = document.createElement('button');
        hintButton.textContent = 'Show Hint';
        hintButton.style.padding = '10px 20px';
        hintButton.style.border = 'none';
        hintButton.style.borderRadius = '5px';
        hintButton.style.backgroundColor = '#4CAF50';
        hintButton.style.color = 'white';
        hintButton.style.fontWeight = 'bold';
        hintButton.style.cursor = 'pointer';
        hintButton.style.transition = 'all 0.3s ease';
        hintButton.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
        
        // Hover effect for hint button
        hintButton.addEventListener('mouseover', () => {
            hintButton.style.backgroundColor = '#45a049';
            hintButton.style.transform = 'translateY(-2px)';
            hintButton.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
        });
        
        hintButton.addEventListener('mouseout', () => {
            hintButton.style.backgroundColor = '#4CAF50';
            hintButton.style.transform = 'translateY(0)';
            hintButton.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
        });
        
        hintButton.addEventListener('click', () => {
            hintQuestionTitle.textContent = question.question;
            hintContentDiv.innerHTML = `<p>${question.hint}</p>`;
            hintModal.style.display = 'block';
        });

        // Answer Button
        const answerButton = document.createElement('button');
        answerButton.textContent = 'Show Answer';
        answerButton.style.padding = '10px 20px';
        answerButton.style.border = 'none';
        answerButton.style.borderRadius = '5px';
        answerButton.style.backgroundColor = '#2196F3';
        answerButton.style.color = 'white';
        answerButton.style.fontWeight = 'bold';
        answerButton.style.cursor = 'pointer';
        answerButton.style.transition = 'all 0.3s ease';
        answerButton.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
        
        // Hover effect for answer button
        answerButton.addEventListener('mouseover', () => {
            answerButton.style.backgroundColor = '#0b7dda';
            answerButton.style.transform = 'translateY(-2px)';
            answerButton.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
        });
        
        answerButton.addEventListener('mouseout', () => {
            answerButton.style.backgroundColor = '#2196F3';
            answerButton.style.transform = 'translateY(0)';
            answerButton.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
        });
        
        answerButton.addEventListener('click', () => {
            hintQuestionTitle.textContent = question.question;
            hintContentDiv.innerHTML = question.answer;
            hintModal.style.display = 'block';
        });

        // Add buttons to container
        buttonContainer.appendChild(hintButton);
        buttonContainer.appendChild(answerButton);

        questionDiv.appendChild(title);
        questionDiv.appendChild(description);
        questionDiv.appendChild(buttonContainer);
        questionsListDiv.appendChild(questionDiv);
    });

    closeBtn.addEventListener('click', () => {
        hintModal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === hintModal) {
            hintModal.style.display = 'none';
        }
    });
});