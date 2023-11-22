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

function minDepth(root: TreeNode | null): number {
    if (root === null) {
        return 0;
    }

    if (root.left === null && root.right === null) {
        return 1;
    }

    let leftDepth = root.left ? minDepth(root.left) : Number.MAX_SAFE_INTEGER;
    let rightDepth = root.right ? minDepth(root.right) : Number.MAX_SAFE_INTEGER;

    return 1 + Math.min(leftDepth, rightDepth);
}