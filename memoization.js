let smartCalculator = function(num){
    let lookUp = {};
    return function(){
        if(num in lookUp){
            return lookUp[num];
        }
        lookUp[num] = num+100;
        return lookUp[num];
    }
}
 let fn = smartCalculator(50);

 console.log(fn());// 150;


let smartCalculator = function(){
    let lookUp = {};
    return function(num){
        if(num in lookUp){
            return lookUp[num];
        }
        lookUp[num] = num+100;
        return lookUp[num];
    }
}

let fn = smartCalculator();
console.log(fn(50));//150
