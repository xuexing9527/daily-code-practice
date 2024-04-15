type siblings<T> = T[keyof T] | T | null

interface Node {
    name: string;
    right: Node;
    left: Node;
    parent: Node;
}

class BinaryTree<T = Node> {
    public left: siblings<T>;
    public right: siblings<T>;
    public parent: siblings<T>;

    constructor (props: T) {
        Object.assign(this, props)
    }

}