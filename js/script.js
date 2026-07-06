// =========================
// しゅっちょーアプリ
// Version 0.1.0
// =========================

window.addEventListener("load", () => {
    registerEvents();
});

// -------------------------
// イベント登録
// -------------------------

function registerEvents() {

    addClick("scheduleBtn", openSchedule);
    addClick("trainBtn", openTrain);
    addClick("hotelBtn", openHotel);
    addClick("eventBtn", openEvent);
    addClick("mapBtn", openMap);
    addClick("gourmetBtn", openGourmet);
    addClick("shoppingBtn", openShopping);
    addClick("checkBtn", openChecklist);

}

function addClick(id, func){

    const button = document.getElementById(id);

    if(button){

        button.addEventListener("click", func);

    }

}

// -------------------------
// 各画面
// -------------------------

function openSchedule(){

    alert("📅 今日の予定\n\n（次回実装）");

}

function openTrain(){

    alert("🚄 新幹線\n\n・行き\n・帰り\n・予約番号");

}

function openHotel(){

    const result = confirm(
`🏨 アパホテル〈名古屋栄〉

Googleマップを開きますか？`
    );

    if(result){

        window.open(
            "https://maps.google.com/?q=アパホテル名古屋栄",
            "_blank"
        );

    }

}

function openEvent(){

    const result = confirm(
`📍 中日ビル

Googleマップを開きますか？`
    );

    if(result){

        window.open(
            "https://maps.google.com/?q=中日ビル 名古屋",
            "_blank"
        );

    }

}

function openMap(){

    window.open(
        "https://maps.google.com",
        "_blank"
    );

}

function openGourmet(){

    alert(
`🍜 グルメ候補

・ひつまぶし
・味噌カツ
・きしめん

（次回実装）`
    );

}

function openShopping(){

    alert(
`🛍 買い物

・Supreme
・Aesop

（次回実装）`
    );

}

function openChecklist(){

    alert(
`☑ 持ち物

（次回実装）`
    );

}