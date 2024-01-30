/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function(key, message) {
    key=[...new Set(key.replaceAll(' ','').split(''))].join('');
    return message.split('').reduce((acc,curr)=>{
        if(curr==' '){
            acc+=' ';
            return acc;
        }
        let index=key.indexOf(curr);
        acc+='abcdefghijklmnopqrstuvwxyz'[index];
        return acc;
    },'')
};