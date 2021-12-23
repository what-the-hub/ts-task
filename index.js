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
//import "reflect-metadata";
/*const requiredMetadataKey = Symbol("required");

function required(target: Object, propertyKey: string | symbol, parameterIndex: number) {
    let existingRequiredParameters: number[] = Reflect.getOwnMetadata(requiredMetadataKey, target, propertyKey) || [];
    existingRequiredParameters.push(parameterIndex);
    Reflect.defineMetadata( requiredMetadataKey, existingRequiredParameters, target, propertyKey);
}*/
/*function validate(target: any, propertyName: string, descriptor: TypedPropertyDescriptor<Function>) {
    let method = descriptor.value!;

    descriptor.value = function () {
        throw new Error("Missing required argument.");

        return method.apply(this, arguments);
    };
}*/
function checkEmail(value) {
    return function (target, propertyKey, descriptor) {
        console.log(value);
        console.log(propertyKey);
        console.log(descriptor.value, 'into factory');
        // console.log(target.propertyIsEnumerable('email'), 'target')
        // console.log(propertyKey, "prop")
        // console.log(descriptor.value, 'descr')
        //throw new Error('something wrong')
    };
}
class User {
    constructor(email, phone) {
        this.email = email;
        this.phone = phone;
    }
    getEmail() {
        return this.email;
    }
    validateEmail() {
        console.log(this.email);
        return this.phone;
    }
}
__decorate([
    checkEmail('sdfsdf'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], User.prototype, "validateEmail", null);
let user = new User('zhenia', 25324243);
user.validateEmail();
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
