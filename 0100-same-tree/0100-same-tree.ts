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

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    const queue = [p, q];

    while (queue.length > 0) {
        let node1 = queue.shift();
        let node2 = queue.shift();

        if (node1 === null && node2 === null) continue;
        if (node1 === null || node2 === null) return false;
        if (node1.val !== node2.val) return false;

        queue.push(node1.left);
        queue.push(node2.left);
        queue.push(node1.right);
        queue.push(node2.right);
    }

    return true;
}