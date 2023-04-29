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

    // 対戦相手の手札から選択したカードを消費する
    let opponentCard;
    if (playerCard === "rock" && opponentRockCount > 0) {
        opponentCard = "rock";
        opponentRockCount--;
    } else if (playerCard === "paper" && opponentPaperCount > 0) {
        opponentCard = "paper";
        opponentPaperCount--;
    } else if (playerCard === "scissors" && opponentScissorsCount > 0) {
        opponentCard = "scissors";
        opponentScissorsCount--;
    } else {
        // カードが残っていない場合はランダムに選択する
        const opponentCardIndex = Math.floor(Math.random() * playerCards.length);
        opponentCard = playerCards[opponentCardIndex];
        playerCards.splice(opponentCardIndex, 1);
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
    } else {
        result = "負けました！自分の星を1つ失いました！";
        playerStars--;
        opponentStars++;
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
    document.getElementById("opponentScissorsCount").textContent = opponentScissorsCount;

    // ゲームの終了判定
    if (playerStars === 0) {
        alert("あなたの負けです！");
    } else if (opponentStars === 0) {
        alert("あなたの勝ちです！");
    }
}
