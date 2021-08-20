const topPlayers =document.getElementById("top-players");
const topBlogs =document.getElementById("top-blogs");

topPlayers.style.color = "red";
topBlogs.style.color = "red";

const player = document.getElementsByClassName("player");
for (const singlePlayer of player) {
    singlePlayer.style.color = "rgba(149, 106, 23, 0.7)";
}
