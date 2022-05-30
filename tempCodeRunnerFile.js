const randGen=(lower, upper)=>{
    let value=0;
    while(lower>0){
        value = Math.round(Math.random()*upper);
        if(value>lower){
            return value;
        }
    }
    return value
}
console.log(randGen(2,8))