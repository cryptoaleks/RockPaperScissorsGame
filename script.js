let playerPoints = 0;

// Событие на нажатие кнопки "Играть"
document.getElementById("playButton").addEventListener("click", function() {
    document.getElementById("choicesArea").style.display = "block";
    document.getElementById("gameArea").style.display = "none";
});

// Варианты выбора
const choices = ["Камень", "Ножницы", "Бумага"];
const images = {
    "Камень": "https://github.com/cryptoaleks/RockPaperScissorsGame/raw/main/images/gratis-png-hand-rock-paper-scissors-iconos-de-computadora-hand-thumbnail.png",
    "Ножницы": "https://github.com/cryptoaleks/RockPaperScissorsGame/raw/main/images/gratis-png-tijeras-de-piedra-papel-iconos-de-computadora-tijeras.png",
    "Бумага": "https://github.com/cryptoaleks/RockPaperScissorsGame/raw/main/images/images.png"
};

// События на нажатие кнопок выбора
const choiceButtons = document.getElementsByClassName("choice-button");
for (let button of choiceButtons) {
    button.addEventListener("click", function() {
        startSpinner(button.id);
    });
}

// Запуск спиннера, затем выполнение логики игры
function startSpinner(playerChoice) {
    document.getElementById("spinnerArea").style.display = "block";
    document.getElementById("choicesArea").style.display = "none";

    // Имитируем вращение изображений в течение 2 секунд
    setTimeout(function() {
        document.getElementById("spinnerArea").style.display = "none";
        playGame(playerChoice);
    }, 2000);
}

// Основная логика игры
function playGame(playerChoice) {
    // Преобразование playerChoice в формат "Камень", "Ножницы", "Бумага"
    playerChoice = playerChoice === "rock" ? "Камень" : playerChoice === "scissors" ? "Ножницы" : "Бумага";
    
    // Выбор компьютера
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    
    // Обновление изображения спиннера на окончательное
    document.getElementById("spinnerImage").src = images[computerChoice];
    
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
    document.getElementById("choicesArea").style.display = "none";
    document.getElementById("computerChoice").innerText = computerChoice;
    document.getElementById("playerChoice").innerText = playerChoice;
    document.getElementById("result").innerText = result;
    document.getElementById("playerPoints").innerText = playerPoints;
}
