/**
 * @param {string[]} bank
 * @return {number}
 */
var numberOfBeams = function(banks) {
    let result=[];
    banks.forEach((bank)=>{
        let count=bank.split('').reduce((accum,current)=>(current=='1')?accum+1:accum,0);
        if(count!==0){
            result.push(count);
        }
    });
    let final=0;
    for(let i =0;i<result.length-1;i++){
        final+=result[i]*result[i+1];
    }
    return final;
};
