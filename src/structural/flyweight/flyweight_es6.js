class TreeType {
    constructor(type, color, texture){
      this.type = type;
      this.color = color;
      this.texture = texture;
    }
}

class ShallowTree {
    constructor(type, height){
      this.type = type;
      this.height = height;
    }
    render(treeType) {
      console.log(`${this.height} - ${treeType.color} - ${treeType.texture}`);
    }
    getSize() {
      return roughSizeOfObject(this);
    }
}

class DeepTree {
    constructor(treeType, height){
      this.treeType = treeType;
      this.height = height;
    }
    render() {
      console.log(`${this.height} - ${this.treeType.color} - ${this.treeType.texture}`);
    }
    getSize() {
      return roughSizeOfObject(this);
    }
}

class ShallowforestFactory {
    constructor(){
        this.treeTypes = {};
        this.trees = [];
    }
    addTrees(treeType, count) {
        if (this.treeTypes[treeType.type] === undefined)
          this.treeTypes[treeType.type] = treeType;
        for (let i = 0; i <= count; i++)
          this.trees.push(new ShallowTree(treeType.type, i * 10));
    }
    renderForest() {
      for (let i = 0; i < this.trees.length; i++)
        this.trees[i].render(this.treeTypes[this.trees[i].type]);
    }
    getSize() {
      let size = 0;
      for (let i = 0; i < this.trees.length; i++)
        size += this.trees[i].getSize();
      return size;
    }
};

class DeepforestFactory {
    constructor(){
      this.trees = [];
    }
    addTrees(treeType, count) {
      for (let i = 0; i <= count; i++)
        this.trees.push(new DeepTree(treeType, i * 10));
    }
    renderForest() {
      for (let i = 0; i < this.trees.length; i++)
        this.trees[i].render();
    }
    getSize() {
      let size = 0;
      for (let i = 0; i < this.trees.length; i++)
        size += this.trees[i].getSize();
      return size;
    }
};

function roughSizeOfObject( object ) {

    var objectList = [];
    var stack = [ object ];
    var bytes = 0;

    while ( stack.length ) {
        var value = stack.pop();

        if ( typeof value === 'boolean' ) {
            bytes += 4;
        }
        else if ( typeof value === 'string' ) {
            bytes += value.length * 2;
        }
        else if ( typeof value === 'number' ) {
            bytes += 8;
        }
        else if
        (
            typeof value === 'object'
            && objectList.indexOf( value ) === -1
        )
        {
            objectList.push( value );

            for( var i in value ) {
                stack.push( value[ i ] );
            }
        }
    }
    return bytes;
}


export { TreeType, ShallowTree, DeepTree, ShallowforestFactory, DeepforestFactory };
