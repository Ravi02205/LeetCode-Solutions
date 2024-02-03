/**
 * @param {string} s
 * @return {string}
 */
var finalString = function(s) {
    let index=s.indexOf('i');
    while(index!=-1){
        let newstr=s.slice(0,index).split('').reverse().join('');
        newstr+=s.slice(index+1,s.length);
        s=newstr;
        index=s.indexOf('i');
    }
    return s;
};