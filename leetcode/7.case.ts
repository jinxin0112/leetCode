// 二叉树打印左视图

class TreeNode {
	constructor(public value: number, public left?: TreeNode, public right?: TreeNode) {}
}

function maxPathSum(root: TreeNode, total?: number, max?: number): number | false {
	if (!root) return false;

	if (total === undefined) {
		total = root.value;
		max = root.value;
	} else if (total < 0 && root.value > total) {
		total = 0;
	}

	total += root.value;
	max = Math.max(total, max);
	const { left, right } = root;
	maxPathSum(left, total, max);
	maxPathSum(right, total, max);
	return max;
}
