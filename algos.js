
(function(){

var myString = "I ate big apple";
   var bigword =  findlongestWord(myString); //apple
   console.log(bigword);
alert(bigword);

})(); //end


function findlongestWord(mystring){

        var splitArray = mystring.split(' ');

            //splitArray[0] = i  splitArray[1] = ate  [2] big [3 ] apple

            var biggestWord= ""; //length of longest word

//

            for (var i = 0; i<splitArray.length; i++){  //length :4 

                    if(splitArray[i].length> biggestWord.length){

                        biggestWord = splitArray[i];

                    } //if

            }//for

            //alert("longest word length: "+biggestWord);

  // return biggestWord;
}
