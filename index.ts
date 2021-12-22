console.log('hello')

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


function addShow (target: Object, propertyKey: string | symbol){
    throw new Error('something wrong')
    //console.log('something')
}



class User {
    constructor(public email: string, public phone: number) {
        //console.log('Some text')
    }

    @addShow
    getNumber () {
        console.log(' get phone')
        //this.phone

    }
}

let user = new User('zhenia', 25324243)
user.getNumber()



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





