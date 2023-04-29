let playerHand = [];
let cpuHand = [];
let playerStars = 3;
let cpuStars = 3;

// プレイヤーとCPUの手札を初期化
playerHand = ["グー", "グー", "グー", "グー", "パー", "パー", "パー", "パー", "チョキ", "チョキ", "チョキ", "チョキ"];
cpuHand = ["グー", "グー", "グー", "グー", "パー", "パー", "パー", "パー", "チョキ", "チョキ", "チョキ", "チョキ"];

function updateUI() {
    document.getElementById("playerStars").textContent = `プレイヤーの星: ${playerStars}`;
    document.getElementById("cpuStars").textContent = `CPUの星: ${cpuStars}`;
    document.getElementById("playerHand").textContent = `プレイヤーの手札: ${playerHand.join(", ")}`;
    document.getElementById("cpuHand").textContent = `CPUの手札: ${cpuHand.join(", ")}`;
}

function playGame(playerChoice) {
    if (playerStars === 0 || cpuStars === 0) {
        // どちらかの星の残数が0になったら終了
        return;
    }

    let playerIndex = playerHand.indexOf(playerChoice);
    if (playerIndex !== -1) {
        playerHand.splice(playerIndex, 1);
    } else {
        alert("選択したカードがありません！");
        return;
    }

    let cpuIndex = Math.floor(Math.random() * cpuHand.length);
    let cpuChoice = cpuHand[cpuIndex];
    cpuHand.splice(cpuIndex, 1);

    let result;
    if (playerChoice === cpuChoice) {
        result = "引き分けです！";
    } else if (
        (playerChoice === "グー" && cpuChoice === "チョキ") ||
        (playerChoice === "パー" && cpuChoice === "グー") ||
        (playerChoice === "チョキ" && cpuChoice === "パー")
    ) {
        result = "勝ちました！相手の星を1つ手に入れました！";
        cpuStars--;
        playerStars++;
    } else {
        result = "負けました！自分の星を1つ失いました！";
        playerStars--;
        cpuStars++;
    }

    document.getElementById("result").textContent = result;
    updateUI();

    if (playerStars === 0 || cpuStars === 0) {
        // どちらかの星の残数が0になったら終了
        let gameResult = playerStars === 0 ? "あなたの負けです！" : "あなたの勝ちです！";
        document.getElementById("gameResult").textContent = gameResult;
    }
}

// 初期表示を更新
updateUI();
