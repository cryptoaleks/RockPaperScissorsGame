let playerPoints = 0;

document.getElementById("playButton").addEventListener("click", function() {
    // Варианты выбора
    const choices = ["Камень", "Ножницы", "Бумага"];
    
    // Выбор компьютера
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    
    // Выбор пользователя
    const playerChoice = choices[Math.floor(Math.random() * choices.length)];
    
    // Вычисление результата
    let result;
    if (playerChoice === computerChoice) {
        result = "Ничья";
    } else if (
        (playerChoice === "Камень" && computerChoice === "Ножницы") ||
        (playerChoice === "Ножницы" && computerChoice === "Бумага") ||
        (playerChoice === "Бумага" && computerChoice === "Камень")
    ) {
        result = "Вы выиграли!";
        playerPoints++;
    } else {
        result = "Компьютер выиграл!";
    }
    
    // Отображение результатов
    document.getElementById("gameArea").style.display = "block";
    document.getElementById("computerChoice").innerText = computerChoice;
    document.getElementById("playerChoice").innerText = playerChoice;
    document.getElementById("result").innerText = result;
    document.getElementById("playerPoints").innerText = playerPoints;
});