let list = ["Sony Xperia", "Samsung Galaxy", "Nokia 6", "Xiaomi Redmi Note 4", "Apple Iphone 6s",
    "Xiaomi Mi 5s Plus", "Apple Iphone 8 Plus", "Oppo A71"
]
// hien thi danh sach
function showAll(){
    let content="";
    for (let i = 0; i < list.length; i++) {
        content += "<tr><td>"+list[i]+"</td><td><button class='giao-dien' onclick="+"deleteTask("+i+")"+">Delete</button><button class='sua-lol' onclick="+"edit("+i+")"+">Edit</button></td></tr>";
    }
    document.getElementById("list").innerHTML = content;
}
//tao moi
function createNewTask(){
    //lay du lieu
    let newTask = document.getElementById("newTask").value;
    //them moi vao mang
    list.push(newTask);
    // hien thi lai ra bang
    showAll();
}
function deleteTask(index){
    //xoa trong mang
    list.splice(index, 1);
    //hien thi lai du lieu
    showAll();
}
function edit(index){
    // lay gia tri moi
    let newValue = prompt("Moi nhap gia tri moi", list[index]);
    //gan lai gia tri
    list[index] = newValue;
    //hien thi lai danh sach
    showAll();
}