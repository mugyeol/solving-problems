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
function evaluateTree(root: TreeNode | null): boolean {
    if (root === null) {
        return false;
    }
    if (root.left === null && root.right === null) {
        return root.val === 1;
    }
    let leftVal = evaluateTree(root.left);
    let rightVal = evaluateTree(root.right);
    if (root.val === 2) {
        return leftVal || rightVal;
    } else {
        return leftVal && rightVal;
    }
}

// 이 문제처럼 자식의 값을 알아야 하는 경우에는 BFS 방식이 적합하지 않음. (BFS는 경로의 특징을 저장하지 않고 훑어 나간다)
// BFS 방식으로 하려고 하면 굉장히 복잡해짐
// 참고 : BFS, DFS의 설명, 차이점 (https://velog.io/@lucky-korma/DFS-BFS%EC%9D%98-%EC%84%A4%EB%AA%85-%EC%B0%A8%EC%9D%B4%EC%A0%90)
