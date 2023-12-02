const removeParenth = (target) => {
   const extract = /\([^)]+\)/;
   const result = target.replace(extract, ''); 
   return result; 
}; 
console.log(removeParenth('ido(not)liketocode')); 