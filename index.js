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
const emailReg = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const phoneRegex = /^\+?3?8?(0\d{9})$/;
const checkRegex = (email, regExp) => {
    return email.match(regExp);
};
function validate(value) {
    return function (target, propertyKey, descriptor) {
        const originalFn = target[propertyKey];
        descriptor.value = function (param) {
            if (checkRegex(param, value))
                return originalFn.call(this, param);
            else {
                throw new Error(`Something wrong with ${param}`);
            }
        };
    };
}
class CheckValid {
    sendEmail(email) {
        console.log(email);
    }
    call(phone) {
        console.log(phone);
    }
}
__decorate([
    validate(emailReg),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CheckValid.prototype, "sendEmail", null);
__decorate([
    validate(phoneRegex),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CheckValid.prototype, "call", null);
const user = new CheckValid();
user.sendEmail('ssd@sdda.com');
user.call('0684008020');
