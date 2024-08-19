const fav = "avatar";
let guess = prompt("Guess My favorite Movie Name'quit' if you don't want to continue playing this game");
const q = "quit";
let i = 0;
while((guess!= fav ) && ( guess != q )){
    guess = prompt(`Wrong Guess Try Again Guess No: ${i} "quit" if you don't want to continue playing this game`);i++;
    console.log(guess);
    console.log(guess!= fav );
    console.log(guess != q);

    

}if(guess === fav){
    console.log("congrats");
}