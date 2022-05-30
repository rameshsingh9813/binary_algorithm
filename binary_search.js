//shorten the console keyword
const c=(x)=>{
    return console.log(x)
}

//array generator between the lower and upper bound
const arrGen=(lower, upper)=>{
    let value=[];
    if(lower<upper){
        while(lower<=upper){
            value.push(lower);
            lower+=1;
    }
    return value;
    }
}

//random value generator 
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

//binary search algorith 
const binary=(lower,upper)=>{
    let array=arrGen(lower,upper);
    let value=randGen(lower, upper);
    let low=0;
    let up=array.length-1;
    let count=0;
    while(low<=up){
       count +=1;
       let middle= low+Math.floor((up-low)/2);
        if(value==array[middle]){
            return [array[middle],`Number of time loop executed=${count}`]
        }
        else{
            if(value<array[middle]){
               up=middle-1;
            }
            else{
               low=middle+1;
            }
    }
    }
}

c(binary( 10,4000000));




