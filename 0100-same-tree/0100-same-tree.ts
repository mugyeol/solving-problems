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
    if (!p && !q) return true; // 두 트리 모두 null인 경우 같다고 판단
    if (!p || !q) return false; // 하나만 null인 경우는 다르다고 판단

    const pQueue = [p];
    const qQueue = [q];

    while (pQueue.length && qQueue.length) {
        const pNode = pQueue.shift();
        const qNode = qQueue.shift();

        // 두 노드를 검사
        if (!pNode && !qNode) continue;
        if (!pNode || !qNode) return false;
        if (pNode.val !== qNode.val) return false;

        // 두 노드의 자식들을 큐에 추가 (null이 아닌 경우만 추가)
        if (pNode.left || qNode.left) {
            pQueue.push(pNode.left);
            qQueue.push(qNode.left);
        }
        if (pNode.right || qNode.right) {
            pQueue.push(pNode.right);
            qQueue.push(qNode.right);
        }
    }

    return pQueue.length === qQueue.length; // 큐 길이가 같으면 true, 다르면 false
};

