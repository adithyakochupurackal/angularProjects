let x: string = 'ust@trivandrum'
console.log('up and running'+x)
const y: number =10.8
console.warn("number type" ,y)
let a: any
a="j"
console.log(typeof a)
let b : string|null|number|Date
b="10/10/21"
console.log(typeof b)

let num: number[]= [10,29,29]
console.log(typeof num)
num.push(89)
console.log(num)

let o = 0;
num.forEach((n) => {
    o=n
    console.log(o * n**2);
});

let newData : any[]=["m",true,10,null]
console.log(newData[2]+newData[0])




function newFunction(p: number, q?: number): number {/// the question mark indicates that the value is optinal in the function


    if(q == undefined){
        return p**2
    }

    else{
    return p + q;
    }
  }
  
  console.log(newFunction(10)); // This will log 3
  
  class Product {
    private _pid: number;
    private _description: string;
    private _price: number;

    constructor(pid: number, description: string, price: number) {
        this._pid = pid;
        this._description = description;
        this._price = price;
    }

    // Getter for pid
    get pid(): number {
        return this._pid;
    }

    // Setter for pid
    set pid(value: number) {
        this._pid = value;
    }

    // Getter for description
    get description(): string {
        return this._description;
    }

    // Setter for description
    set description(value: string) {
        this._description = value;
    }

    // Getter for price
    get price(): number {
        return this._price;
    }

    // Setter for price
    set price(value: number) {
        this._price = value;
    }
    public printAll(): void {
        console.log('ProductId:'+ this.pid);
        console.log('Description'+ this._description);
        console.log('Price:' + this.price)      
    }
}
const product = new Product(1, "Sample Product", 19.99);
console.log(product.pid); // 1
console.log(product.description); // "Sample Product"
console.log(product.price); // 19.99

product.price = 24.99; // Update price
console.log(product.price); // 24.99
console.log(product)
console.log(product.printAll());

