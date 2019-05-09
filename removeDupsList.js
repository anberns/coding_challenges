/*
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/*
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  if (!head) {
      return head;
  }
  let temp1 = head;
  let temp2 = head;
  let temp3 = head;
  let tempVal = head.val;
  
  // while list
  while (temp1.next) {
      
      // while repeated values
      while(temp2.next && temp2.val === tempVal) {
          temp2 = temp2.next;
      }
      
      // special case of duplicate ending nodes
      if (!temp2.next && temp2.val === tempVal) {
          temp1.next = null;
          break;
      }
      
      // cut repeats
      while (temp3.next !== temp2) {
          temp3 = temp3.next;
      }
      
      if (temp1.next !== temp2) {
          temp1.next = temp2;
      }
      
      if (temp3.next !== temp2) {
          temp3.next = null;
      }
      
      // reset node pointers and tempVal
      temp1 = temp2;
      temp3 = temp2;
      tempVal = temp2.val;
      
  }
  
  temp1 = null;
  temp2 = null;
  temp3 = null;
  return head;
};