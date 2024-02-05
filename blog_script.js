var like_button=document.querySelector(".like");
var like_Count=document.querySelector(".like_count");

var count = 0;
like_button.addEventListener("click", function() {
    count++;
    like_Count.textContent = count;
});