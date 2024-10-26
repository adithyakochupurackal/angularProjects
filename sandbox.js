var x = 'ust@trivandrum';
console.log('up and running' + x);
var y = 10.8;
console.warn("number type", y);
var a;
a = "j";
console.log(typeof a);
var b;
b = "10/10/21";
console.log(typeof b);
var num = [10, 29, 29];
console.log(typeof num);
num.push(89);
console.log(num);
var o = 0;
num.forEach(function (n) {
    o = n;
    console.log(o * Math.pow(n, 2));
});
var newData = ["m", true, 10, null];
console.log(newData[2] + newData[0]);
function newFunction(p, q) {
    if (q == undefined) {
        return Math.pow(p, 2);
    }
    else {
        return p + q;
    }
}
console.log(newFunction(10)); // This will log 3
var Product = /** @class */ (function () {
    function Product(pid, description, price) {
        this._pid = pid;
        this._description = description;
        this._price = price;
    }
    Object.defineProperty(Product.prototype, "pid", {
        // Getter for pid
        get: function () {
            return this._pid;
        },
        // Setter for pid
        set: function (value) {
            this._pid = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "description", {
        // Getter for description
        get: function () {
            return this._description;
        },
        // Setter for description
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "price", {
        // Getter for price
        get: function () {
            return this._price;
        },
        // Setter for price
        set: function (value) {
            this._price = value;
        },
        enumerable: false,
        configurable: true
    });
    Product.prototype.printAll = function () {
        console.log('ProductId:' + this.pid);
        console.log('Description' + this._description);
        console.log('Price:' + this.price);
    };
    return Product;
}());
var product = new Product(1, "Sample Product", 19.99);
console.log(product.pid); // 1
console.log(product.description); // "Sample Product"
console.log(product.price); // 19.99
product.price = 24.99; // Update price
console.log(product.price); // 24.99
console.log(product);
console.log(product.printAll());
