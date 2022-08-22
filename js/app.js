const playerList = document.getElementById('player-list')
let players = []


function addToList(element) {

    const playerName = element.parentNode.parentNode.children[1].innerText;
    players.push(playerName);
    playerList.innerHTML = '';
    for (let player of players) {
        const playerName = player
        let li = document.createElement('li')
        li.innerText = playerName
        playerList.appendChild(li)
    }

}

document.getElementById('btn-player').addEventListener('click', function () {
    console.log('clicked')
})