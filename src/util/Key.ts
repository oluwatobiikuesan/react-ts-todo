


export const generateKey = () : number =>{

    const date = new Date();
    const random = parseInt((Math.random() * 100000).toFixed());
    const key = parseInt(Math.abs((random * ((date.getMilliseconds()-date.getFullYear()) * date.getDay()))* (random / date.getMinutes() + parseInt((Math.random() * 100).toFixed(0)))
     + ((random / Math.sqrt(random)) * (date.getFullYear() + date.getMonth() + date.getDay() + date.getHours() + date.getMinutes() + date.getSeconds() + date.getMilliseconds()))).toFixed(0));
    return key;
}
