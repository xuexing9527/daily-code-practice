type siblings<T> = T[keyof T] | T | null

class BinaryTree<T> {
    public left: siblings<T>;
    public right: siblings<T>;
    public parent: siblings<T>;

    constructor (nodeProps: T) {
        Object.assign(this, nodeProps)
    }

}