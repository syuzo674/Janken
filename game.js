let playerCards = ["star", "star", "star", "rock", "rock", "rock", "paper", "paper", "paper", "scissors", "scissors", "scissors"];
let playerStars = 3;
let opponentStars = 3;
let playerRockCount = 4;
let playerPaperCount = 4;
let playerScissorsCount = 4;
let opponentRockCount = 4;
let opponentPaperCount = 4;
let opponentScissorsCount = 4;

function playGame(playerChoice) {
    // プレイヤーの手札から対応するカードを消費する
    let playerCard;
    if (playerChoice === "rock" && playerRockCount > 0) {
        playerCard = "rock";
        playerRockCount--;
    } else if (playerChoice === "paper" && playerPaperCount > 0) {
        playerCard = "paper";
        playerPaperCount--;
    } else if (playerChoice === "scissors" && playerScissorsCount > 0) {
        playerCard = "scissors";
        playerScissorsCount--;
    } else {
        alert("選択したカードがありません！");
        return;
    }

    // コンピュータの手札からランダムに1枚のカードを選択する
    const opponentCardIndex = Math.floor(Math.random() * playerCards.length);
    const opponentCard = playerCards.splice(opponentCardIndex, 1)[0];

    // 対戦相手の手札から対応するカードを消費する
    let opponentCardConsumed = false;
    if (opponentCard === "rock" && opponentRockCount > 0) {
        opponentRockCount--;
        opponentCardConsumed = true;
    } else if (opponentCard === "paper" && opponentPaperCount > 0) {
        opponentPaperCount--;
        opponentCardConsumed = true;
    } else if (opponentCard === "scissors" && opponentScissorsCount > 0) {
        opponentScissorsCount--;
        opponentCardConsumed = true;
    }

    // 勝敗の判定
    let result;
    if (playerCard === opponentCard) {
        result = "引き分けです！";
    } else if (
        (playerCard === "rock" && opponentCard === "scissors") ||
        (playerCard === "paper" && opponentCard === "rock") ||
        (playerCard === "scissors" && opponentCard === "paper")
    ) {
        result = "勝ちました！相手の星を1つ手に入れました！";
        opponentStars--;
        playerStars++;
        if (opponentCardConsumed) {
            // 勝った場合、CPUの手札からもカードを消費する
            if (opponentCard === "rock") {
                opponentRockCount--;
            } else if (opponentCard === "paper") {
                opponentPaperCount--;
            } else if (opponentCard === "scissors") {
                opponentScissorsCount--;
            }
        }
    } else {
        result = "負けました！自分の星を1つ失いました！";
        playerStars--;
        opponentStars++;
        if (opponentCardConsumed) {
            // 負けた場合、CPUの手札からもカードを消費する
            if (opponentCard === "rock") {
                opponentRockCount--;
            } else if (opponentCard === "paper") {
                opponentPaperCount--;
            } else if (opponentCard === "scissors") {
                opponentScissorsCount--;
            }
        }
    }


    // 結果の表示
    document.getElementById("result").textContent = result;
    document.getElementById("playerStars").textContent = playerStars;
    document.getElementById("opponentStars").textContent = opponentStars;
    document.getElementById("playerRockCount").textContent = playerRockCount;
    document.getElementById("playerPaperCount").textContent = playerPaperCount;
    document.getElementById("playerScissorsCount").textContent = playerScissorsCount;
    document.getElementById("opponentRockCount").textContent = opponentRockCount;
    document.getElementById("opponentPaperCount").textContent = opponentPaperCount;

    // ゲームの終了判定
    if (playerStars === 0) {
        alert("あなたの負けです！");
    } else if (opponentStars === 0) {
        alert("あなたの勝ちです！");
    }
}

// ゲームの開始
function startGame() {
    // 初期状態の表示
    document.getElementById("playerStars").textContent = playerStars;
    document.getElementById("opponentStars").textContent = opponentStars;
    document.getElementById("playerRockCount").textContent = playerRockCount;
    document.getElementById("playerPaperCount").textContent = playerPaperCount;
    document.getElementById("playerScissorsCount").textContent = playerScissorsCount;
    document.getElementById("opponentRockCount").textContent = opponentRockCount;
    document.getElementById("opponentPaperCount").textContent = opponentPaperCount;

    // プレイヤーの選択に応じてじゃんけんを実行
    document.getElementById("rockButton").addEventListener("click", function () {
        playGame("rock");
    });
    document.getElementById("paperButton").addEventListener("click", function () {
        playGame("paper");
    });
    document.getElementById("scissorsButton").addEventListener("click", function () {
        playGame("scissors");
    });
}

// ゲームの開始処理を呼び出す
startGame();
