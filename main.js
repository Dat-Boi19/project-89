score = 0;
function updateScore() {
    score = score + 1;
    document.getElementById("score").innerHTML = "Score: " + score
}
function saveScore(){
    localStorage.setItem("score" , score);
}
function nextPage(){
    window.location = "activity_2.html";
}
function addUser() {
    player1_name =document.getElementById("player1_name_imput").value;
    player2_name = document.getElementById("player2_name_imput").value;

    localStorage.setItem("player1_name", player1_name);
    localStorage.setItem("player2_name", player2_name);

    window.location = "game_page.html";
}
player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");
player1_score = 0;
player2_score = 0;
document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name  ;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name  ;

function send()  {
get_word + document.getElementById("word").value
word = get_word.toLowerCase;
console.log("word in lowerCase = " + word);

charAt1 = word.charAt(1);
console.log(charAt1);

length_divide_2 = Math.floor(word.lenth/2);
charAt2 = word.charAt(length_divide_2);
console.log(charAt2);

lenth_minus_1 = word.lenth - 1;
charAt3 = word.charAt(lenth_minus_1);
console.log(charAt3);

remove.charAt1 = word.replace(charAt1, "_")
remove.charAt2 = remove_charAt1.replace(charAt2, "_")
remove.charAt3 = remove_charAt2.replace(charAt3, "_")
console.log(remove_charAt3);

question_word = "<h4 id='word_display'> Q. "+remove_charAt3+"</h4>";
input_box = "<br>Answer  : <input type='text' id= 'input_check_box'>";
check_button = "<br><br><button class 'btn btn-info' onclick= check()'>Check</button";
row = question_word +input_box+check_button ;
document.getElementById("output").innerHTML = row;
document.getElementById("word").value = "";
}