export interface Node {
    key: string;
    value: any;
}

export enum OptionType {
    default = 0, // 随机树
    binaryTree = 1, // 二叉树
}

export interface Options {
    type: OptionType | undefined | null; // 树类型
    level: number | '' | undefined | null; // 层级
    nodeNums: number | 20; // 节点个数
}
