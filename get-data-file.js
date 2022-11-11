var fs = require("fs");
var text = fs.readFileSync("Output.txt", "utf-8");
var perWords = text.split(" ");
perWords.forEach(findFourWords);
function findFourWords(item,index){
    if(item.length == 4) { 
        console.log(item);
        console.log(index);
    }
}