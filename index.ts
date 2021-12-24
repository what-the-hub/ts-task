console.log('hello')

const emailReg = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
const phoneRegex = /^\+?3?8?(0\d{9})$/

const checkRegex = (email: string, regExp: any) => {
    return email.match(regExp)
}

function validate(value: RegExp): Function {
    return function (target: { [k in string]: any }, propertyKey: string, descriptor: PropertyDescriptor): void {
        const originalFn = target[propertyKey];
        descriptor.value = function (param: string) {
            if (checkRegex(param, value))
                return originalFn.call(this, param)
            else {
                throw new Error(`Something wrong with ${param}`)
            }
        }
    }
}

class CheckValid {
    @validate(emailReg)
    sendEmail(email: string): void {
        console.log(email)
    }
    @validate(phoneRegex)
    call(phone: string): void {
        console.log(phone)
    }
}

const user = new CheckValid()
user.sendEmail('ssd@sdda.com')
user.call('0684008020')





