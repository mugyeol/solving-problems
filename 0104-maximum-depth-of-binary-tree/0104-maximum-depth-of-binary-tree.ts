/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function maxDepth(root: TreeNode | null): number {

    if(root === null)return 0

    
    let queue = [root]
    let depth = 0
    
    while(queue.length){
        const len = queue.length;

      for(let i=0; i<len; i++){
        let current = queue.shift()
        if(current.left) queue.push(current.left)
        if(current.right) queue.push(current.right)  
        }
        
        depth ++;  
    }
    return depth
    
}
// function maxDepth(root: TreeNode | null): number {
 
// if(!root){
//     return 0
// }
    
//    let depth = 0
//    let queue = [root]
    
//    while (queue.length){
       
//        const len = queue.length
       
//        for(let i =0; i<len; i++){
//               const current = queue.shift()
//         if(current.left) queue.push(current.left)
//        if(current.right) queue.push(current.right)
//        }
       
//     depth++;
//    }
//     return depth
// };
