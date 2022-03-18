function getLongestString(){
    // Get Data From Input Box
  var data=$( "#text" ).val()
 
  // split string 
  var stringSplit= data.split(' ');

  // variables
  var maxWordLength = 0;
  var maxWord ='';
  var previousStringLength=0;
  var previosWord='';

  for(var i = 0; i < stringSplit.length; i++){
    
    // check Splited string length if it is heigher the assigne to varialbe 
    if(stringSplit[i].length >= maxWordLength){ 

        maxWordLength = stringSplit[i].length; 
        maxWord=stringSplit[i];

        // Get Previous string 
        if(i!=0){
        previousStringLength = stringSplit[i-1].length;
        previosWord=stringSplit[i-1];
        }
     }

     //If Two string lenght is same 
     if(maxWordLength == previousStringLength){
        const maxVowelWordCount = maxWord.match(/[aeiou]/gi).length;
        const secondMaxVowelWordCount = previosWord.match(/[aeiou]/gi).length;

        if(maxVowelWordCount < secondMaxVowelWordCount){
            maxWord = previosWord;
            previosWord=''
        }
        else{
            previosWord = maxWord;
            maxWord='';
        }
     }


  }
    
   if(maxWord !=''){
    alert(maxWord)
   }
   if(previosWord !=''){
    alert(previosWord)
   }
}
