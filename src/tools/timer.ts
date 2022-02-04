


export const timer =(secLimit:number,startTime=0)=>{
    let endTime = new Date()
    let dif = endTime.getSeconds() - startTime
    if (dif < 3) return false
    else return true

}