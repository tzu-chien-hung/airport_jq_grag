

const game_form =document.getElementById("gameForm");
const game_form_done =document.getElementById("gameFormDone");
const game_form_submit_btn = document.getElementById("gameFormSubmit");
const game_form_btn_gohome = document.getElementsByClassName("game_form_btn_gohome")[0];

console.log(game_form_btn_gohome)
game_form_submit_btn.addEventListener("click", () => {
    game_form.style="display:none";
    game_form_done.style="display:block";
});
game_form_btn_gohome.addEventListener("click", () => {
    location.href="https://tzu-chien-hung.github.io/airport_jq_grag/jq_drag/index.html"
});