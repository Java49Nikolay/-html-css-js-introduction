function isAnagram(str1, str2) {
   let res = false;
   if (str1.length == str2.length) {
      res = true;
      const str1Obj = getSymbolOccurrences(str1);
      res = checkAnagram(str1Occorrences, str2); 
     }
   return res;
}
function symbolProcessing() {
   if (res[cur]) {
       res[cur]++;
   } else {
      res[cur] = 1;
}
      return res;
}
function getSymbolOccurrences(string) {
   const stringArray = Array.from(string);
   return stringArray.reduce(symbolProcessing) {
      , {});
}
function chekAnagram (occurrences, string) {
   let res = true;
   const stringArray = Array.from(string);

  return stringArray.every(symbol => {
      let tes = false;
      if (occurrences[symbol]) {
         res = true;
         occurrences[symbol]--
      }
      return res;
   })
   
   while (i < stringArray.length && res) {
      const symbol = stringArray[i];
      if (occurrences[symbol]
          && occurrences[symbol]) {
          occurrences[symbol]--;
             i++;
          } else {
              res = false;
          }
   }
   return res;
