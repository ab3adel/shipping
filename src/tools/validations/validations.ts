

export const isPassword =(val:string) =>{
    let numMatch=/[0-9]/
    let strMatch=/[A-Za-z]/
    let minLenght=7
    if (!numMatch.test(val)) {
        return ("يجب ان تحتوي كلمة السر على رقم واحد على الأقل")
    }
    if (!strMatch.test(val)) {
        return ('يجب أن تحتوي كلمة السر على حرف واحد على الأقل')
    }
    if (val.length <= minLenght) {
        return ("كلمة السر على الأقل يجب ان تكون من ثمانية أحرف")
    }
    else {
        return ""
    }
}
export const isPasswordConfirmed =(password:string,confirmationPassword:string) =>{
    if (password !== confirmationPassword) {
        return ('تأكيد كلمة المرور وكلمة المرور غير متطابقاتان')
    }
    return ""
}
export const isEmail =(val:string) =>{
    if (! val.includes('@')) {
        return ("يرجى ادخال بريد الكتروني صالح")
    }
    return ""
}
export const dummy =(val:string)=>{
    return ""
}