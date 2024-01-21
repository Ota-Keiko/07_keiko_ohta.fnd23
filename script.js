'use strict'
// 1行目に記載している 'use strict' は削除しないでください



//ONIKU SEARCH

const input = document.getElementById("search-input");
const btn = document.getElementById("button")
const output = document.getElementById("search-output");


function searh() {
  if (input.value === "タン" || input.value === "たん") {
    return output.innerText = "脂肪分が多く、歯ごたえのある食感";
  } else if (input.value === "カルビ" || input.value === "かるび") {
    return output.innerText = "脂のミミが豊富で、口当たりが柔らかな食感。ジューシーさと旨みが共存";
  } else if (input.value === "ロース" || input.value === "ろーす") {
    return output.innerText = "赤身と脂身のバランスが良く、程よい霜降り。筋が少なく、柔らかな食感";
  }
}

searh(input.value);

btn.addEventListener("click", searh);








//ONIKU LIST

const addValue1 = document.getElementsByClassName('task_item')[0];
const addValue2 = document.getElementsByClassName('task_item')[1];
const submitBtn = document.getElementById('task_btn');
const taskList1 = document.getElementsByClassName('task_list')[0];



function addList() {

  //入力値の読み出し
  const task1 = addValue1.value
  const task2 = addValue2.value

  //入力値をリストへの追加
  const listItem = document.createElement('li');
  const showItem = taskList1.appendChild(listItem);
  showItem.innerHTML = task1 + "　　" + task2 +"　　";

  //入力欄を空にする
  addValue1.value = '';
  addValue2.value = '';

  //リストアイテムに削除ボタン追加
  const deleteBtn = document.createElement('button');
  deleteBtn.innerHTML = 'Delete';
  listItem.appendChild(deleteBtn);

  //削除ボタンをクリックしたらタスク削除
  const deleteItem = function() {
    const chosenTask = deleteBtn.closest('li');
    taskList1.removeChild(chosenTask);
  }

  deleteBtn.addEventListener('click', deleteItem);


}



submitBtn.addEventListener('click', addList)









//Menu

const ushi = document.getElementById("btn1");
const buta = document.getElementById("btn2");
const niwatori = document.getElementById("btn3");
const menue = document.getElementById("menue");
const menue2 = document.getElementById("menue");


function ushiMenue() {
  const items = ["焼肉", "ローストビーフ", "ステーキ🥩", "牛丼", "ハンバーグ"];
  //Math.random()：0以上1未満のランダム数字、 .floor：切り捨て
  let i = Math.floor(Math.random() * items.length);
  menue.innerText = items[i];
}

ushi.addEventListener("click", ushiMenue);


function butaMenue() {
  const items = ["しゃぶしゃぶ", "肉じゃが", "カレー🍛", "豚丼"];
  //Math.random()：0以上1未満のランダム数字、 .floor：切り捨て
  let i = Math.floor(Math.random() * items.length);
  menue.innerText = items[i];
}

buta.addEventListener("click", butaMenue);


function niwatoriMenue() {
  const items = ["親子丼", "焼き鳥", "唐揚げ", "タンドリーキチン", "つくね"];
  //Math.random()：0以上1未満のランダム数字、 .floor：切り捨て
  let i = Math.floor(Math.random() * items.length);
  menue.innerText = items[i];
}

niwatori.addEventListener("click", niwatoriMenue);




