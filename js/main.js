//ToDoリストに追加
function AddToDo() {
    //元のテキストボックス内の文字列を取得
    const msg = document.getElementById("txtbox").value;
    //ToDoリストグループ<div>読み込み
    const ToDoRist = document.getElementById("ToDoRist");

    //len番目のテキストボックス
    const len = ToDoRist.childNodes.length;

    //ToDoリスト１つをまとめる<div>
    const div1 = document.createElement("div");
    div1.setAttribute("id", "div" + len);
    ToDoRist.appendChild(div1);
    //チェックボックス作成
    const input1 = document.createElement("input");
    input1.setAttribute("type", "checkbox");
    input1.setAttribute("id", "checkbox");
    input1.setAttribute("onclick", "AddDone(txtbox" + len + ".id, div" + len + ")");
    div1.appendChild(input1);
    //テキストボックス作成
    const input2 = document.createElement("input");
    input2.setAttribute("type", "text");
    input2.setAttribute("value", msg);
    input2.setAttribute("id", "txtbox" + len);
    div1.appendChild(input2);
    //削除ボタン作成
    const input3 = document.createElement("input");
    input3.setAttribute("type", "button");
    input3.setAttribute("value", "削除");
    input3.setAttribute("id", "del_button");
    input3.setAttribute("onclick", "DelToDo(div" + len + ")");
    div1.appendChild(input3);
}

//ToDoリストの削除（ToDoリストのdivのid）
function DelToDo(ele) {
    const ToDoRist = document.getElementById("ToDoRist");
    ToDoRist.removeChild(ele);
}

//Doneリストに追加（ToDoリストのテキストボックスのid、ToDoリストのdivのid）
function AddDone(_ele_txt, _ele_div) {
    //ToDoリストのテキストボックス内の文字列を取得
    const msg = document.getElementById(_ele_txt).value; 
    //Doneリストグループ<div>読み込み
    const DoneRist = document.getElementById("DoneRist");

    //len番目のテキストボックス
    const len = DoneRist.childNodes.length;

    //Doneリスト１つをまとめる<div>
    const div1 = document.createElement("div");
    div1.setAttribute("id", "done_div" + len);
    DoneRist.appendChild(div1);
    //チェックボックス作成
    const input1 = document.createElement("input");
    input1.setAttribute("type", "checkbox");
    input1.setAttribute("checked", "true");
    input1.setAttribute("id", "done_checkbox");
    div1.appendChild(input1);
    //テキストボックス作成
    const input2 = document.createElement("input");
    input2.setAttribute("type", "text");
    input2.setAttribute("value", msg);
    input2.setAttribute("id", "done_txtbox" + len);
    div1.appendChild(input2);
    //削除ボタン作成
    const input3 = document.createElement("input");
    input3.setAttribute("type", "button");
    input3.setAttribute("value", "削除");
    input3.setAttribute("id", "del_button");
    input3.setAttribute("onclick", "DelDone(done_div" + len + ")");
    div1.appendChild(input3);

    //ToDoから削除
    DelToDo(_ele_div);
}

//Doneリストの削除（Doneリストのdivのid）
function DelDone(ele) {
    const DoneRist = document.getElementById("DoneRist");
    DoneRist.removeChild(ele);
}