const playerList = document.getElementById('player-list')
let players = []


function addToList(element) {

    const playerName = element.parentNode.parentNode.children[1].innerText;
    if (players.length < 5) {

        players.push(playerName);
    }
    else {
        alert('You already added 5 players')
    }
    playerList.innerHTML = '';
    for (let player of players) {
        const playerName = player
        let li = document.createElement('li')
        li.innerText = playerName

        playerList.appendChild(li)
    }

}

document.getElementById('btn-player').addEventListener('click', function () {
    const playerInput = document.getElementById('player-input')
    const playerInputString = playerInput.value
    const playerInputValue = parseFloat(playerInputString)
    if (isNaN(document.getElementById('player-input').value)) {
        alert('please insert a validation number')
        return
    }
    playerInput.value = ''

    const playerLength = players.length
    const toatlExpense = playerInputValue * playerLength;

    const expenses = document.getElementById('expenses')
    expenses.innerText = toatlExpense;



})

document.getElementById('calculate-total').addEventListener('click', function () {
    const expenses = document.getElementById('expenses');
    const expensesString = expenses.innerText;
    const expensesValue = parseFloat(expensesString)



    const managerInput = document.getElementById('manager-input')
    const managerInputString = managerInput.value;
    const managerInputValue = parseFloat(managerInputString)
    if (isNaN(document.getElementById('manager-input').value)) {
        alert('please insert a validation number')
        return
    }
    managerInput.value = ''

    const coachInput = document.getElementById('coach-input')
    const coachInputString = coachInput.value;
    const coachInputValue = parseFloat(coachInputString)
    if (isNaN(document.getElementById('coach-input').value)) {
        alert('please insert a validation number')
        return
    }
    coachInput.value = ''
    const total = expensesValue + managerInputValue + coachInputValue;

    const totalArea = document.getElementById('total');
    totalArea.innerText = total;
})


