console.log('hello')

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

function checkEmail (value: string){
    return function (target: Object, propertyKey: string | symbol, descriptor: PropertyDescriptor) {
        console.log(value)
        console.log(propertyKey)




        console.log(descriptor.value, 'into factory')

       // console.log(target.propertyIsEnumerable('email'), 'target')
       // console.log(propertyKey, "prop")
       // console.log(descriptor.value, 'descr')
        //throw new Error('something wrong')
    }
}



class User {
    email: string
    phone: number
    constructor(email: string, phone: number) {
        this.email = email
        this.phone = phone
    }

    getEmail():string{
        return this.email
    }

    @checkEmail('sdfsdf')
    validateEmail(){
        console.log(this.email)


        return this.phone

    }
}

let user = new User('zhenia', 25324243)
user.validateEmail()



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





