


class Carts {
    private id: string;
    private owner: string;
    private cartContents: [string];
    private maximumObjectsInTheCart: Number;
    private isDeleted: Boolean;
    public dateCreated: Date;
    
    constructor(id: string, maximumObjectsInTheCart: Number, cartContents: [string], dateCreated: Date, isDeleted: Boolean, owner: string){
        this.id = id;
        this.maximumObjectsInTheCart = maximumObjectsInTheCart;
        this.cartContents = cartContents;
        this.isDeleted = isDeleted;
        this.owner= owner;
        this.dateCreated = dateCreated
    }


    addToCarts(itemsId: string){
        return this.cartContents.push(itemsId)
    }

    removeObjectFromCart(itemId: string) {
        return this.cartContents.remove(itemId)
    }


 }


 export {Carts}