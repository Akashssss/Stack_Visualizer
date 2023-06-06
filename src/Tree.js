export class Tree {
    // static data = new Array()
    #children = [];
    #parent = null;
    #name;
    #arguments = [];
    dat = [] 
    treeHistory = []

    constructor(name) {
        this.#name = name;

    }

    get name() {
        return this.#name;
    }

    set name(newName) {
        this.#name = newName;
    }



    get childern() {
        return this.#children;
    }
    get childrenCount() {
        return this.#children.length;
    }

    get parentNode() {
        return this.#parent;
    }
    set parentNode(newParent) {
        if (newParent !== this.parentNode && (newParent == null || newParent instanceof Tree))
            this.#parent = newParent;
    }


    get arguments() {
        return this.#arguments;
    }
    set arguments(NewArgs) {
        this.#arguments = NewArgs;
    }


    createChildNode(name) {
        const newNode = new Tree(name);
        this.#children.push(newNode);
        newNode.parentNode = this;
        return newNode;
    }

    #getTreeString = (node, spaceCount = 0) => {
        let str = "\n";
        node.#children.forEach((child) => {
            str += `${" ".repeat(spaceCount)}Function Name :${child.name + "  args: " + child.arguments}${this.#getTreeString(child, spaceCount + 2)}`
        });
        return str;
    }

    print() {
        console.log(`\nFunction Name :${this.name + "  args: " + this.arguments}${this.#getTreeString(this, 2)}`)
    }


    traverse() {

        for (let child of this.childern) {

            console.log(child.name);
            child.traverse()
        }
    }


    // static dataPrint(node, obj) {

    //     let NodeData =
    //     {
    //         name: node.name,
    //         arguments: node.arguments.join(" , "),
    //         children: []
    //     };
    //     obj.push(NodeData)

    //     for (let child of node.childern) {
    //         Tree.dataPrint(child, obj[obj.length - 1].children)
    //     }

    // }

    // static getJsonTree(node, obj) {
    //     Tree.dataPrint(node, obj)
    //     return JSON.stringify(Tree.data)
    // }


    datPrint( obj ) { 

        let NodeData =
        {
            name: this.name,
            arguments: this.arguments.join(" , "),
            children: []
        };
        obj.dat.push(NodeData) ; 
        for (let child of obj.childern) {
            child.datPrint( obj[obj.length - 1].children)
        }

    }


    getJsonDat(node, obj ,his ) {
        obj.push({
            name: node.name,
            arguments: JSON.stringify(node.arguments),
            children: [] ,
        });

        const s = JSON.stringify(this.dat) ; 
        his.push( JSON.parse(s)) ; 
        for (let child of node.childern) {
            this.getJsonDat(child, obj[obj.length - 1].children ,his)

        }
    }
} 


// const tree = new Tree("root" )
// const pre = tree.createChildNode("pre" )
// const post = tree.createChildNode("post" ) ; 
// const ppree = pre.createChildNode("ppree") ; 
// tree.print()
// tree.traverse()

// console.log( Tree.getJsonTree(tree , Tree.data))










// function getCallStackSize(a, b) {
//   const error = new Error();
//   let stackTrace = error.stack.split('\n')
//   console.log("arguments value : " + Array.from(arguments));
//   console.log("function name : " + arguments.callee.name);
//   const callerName = stackTrace[2].replace(/^\s*at\s*/, '').replace(/\s*$/g, '');
//   console.log("caller function name : " + callerName);
//   stackTrace = stackTrace.slice(1)

//   stackTrace.splice(-6)
//   console.log(stackTrace)
// }