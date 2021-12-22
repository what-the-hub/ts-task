"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
console.log('hello');
/*function logger(constrFn: Function) {
    console.log(constrFn)

}


function shouldLog(flag: boolean): any {
    return flag ? logger : null
}

@shouldLog(true)
class User {
    constructor(public name: string, public age: number) {
        console.log('Some text')
    }
}*/
function addShow(target, propertyKey) {
    throw new Error('something wrong');
    //console.log('something')
}
class User {
    constructor(email, phone) {
        this.email = email;
        this.phone = phone;
        //console.log('Some text')
    }
    getNumber() {
        console.log(' get phone');
        //this.phone
    }
}
__decorate([
    addShow,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], User.prototype, "getNumber", null);
let user = new User('zhenia', 25324243);
user.getNumber();
//import 'reflect-metadata'
/*
interface validationConfig {
    [property: string]: {
        [validationProperty: string]: string[]
    }
}

const validationObj: validationConfig = {}


function CheckEmail(target: any, name: string) {
    console.log(target)
    const className = target.constructor.name
    validationObj[className] = {
        [name]: ['checkEmail']
    }

    console.log(validationObj)


}

class Data {
    @CheckEmail
    email: string
    //phone: string

    constructor(public email: string, public phone: string) {
        this.email = email;
        this.phone = phone
    }

}
*/
