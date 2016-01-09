/**
 *
 * @param name
 * @param age
 * @param sex
 * @returns {{}}
 * Factory pattern
 */

var factory = function(name, age, sex){
    var obj = {};
    obj.name = name;
    obj.age = age;
    obj.sex = sex;
    return obj;
};

var f1 = factory("jm",34,"male");
console.log(f1);


/**
 *
 * @param name
 * @param age
 * @param sex
 */
var newObj = function(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
};

var n1 = new newObj("jm",34,"male")

console.log(n1)


/**
 *
 * @param name
 * @param age
 * @param sex
 * @constructor
 */
var Proto = function (name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex
}

Proto.prototype = {
    constructor : Proto
};

var p1 = new Proto("jm",34,"male");
console.log(p1);


