var milkcocoa = new MilkCocoa("https://io-ui2n0gy4p.mlkcca.com:443");

var chatDataStore = milkcocoa.dataStore("chat");

milkcocoa.dataStore('chat').query().limit(30).done(function(data) {
  for (var i = 0; i < data.length; i ++ ) {
    addText(data[i].message);
  }
});

var textArea, board;
window.onload = function(){
  textArea = document.getElementById("msg");
  board = document.getElementById("board");
}

function clickEvent(){
  var text = textArea.value;
  sendText(text);
}

function sendText(text){
  chatDataStore.push({message : text},function(data){
    console.log("送信完了!");
    textArea.value = "";
  });
}

chatDataStore.on("push",function(data){
  addText(data.value.message);
});

function addText(text){
  var msgDom = document.createElement("li");
  msgDom.innerHTML = text;
  board.insertBefore(msgDom, board.firstChild);
}
