/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     children: Node[]
 *     constructor(val?: number, children?: Node[]) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.children = (children===undefined ? [] : children)
 *     }
 * }
 */

function maxDepth(root: Node | null): number {
    if (root === null) {
        return 0;
    }

    let max = 0; // Initialize maximum depth

    // Check for all children and find the maximum depth
    for (const child of root.children) {
        max = Math.max(max, maxDepth(child));
    }

    return 1 + max; // 1 for the current node, plus the maximum depth of its children
}