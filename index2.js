function expandits(id,id2){
    btn = document.getElementById(id2);
    obj = document.getElementById(id);
    if (obj.style.display=="none"){
        obj.style.display="";
        btn.style.display="none";
    }
    else {
        obj.style.display="none";
        btn.style.display="";
    }
}

function addComment(id) {
    div = document.getElementById(id);
    name = prompt("Your Name:","");
    comment = prompt("Your comment:","...");
    var newCom = document.createElement("div");
    newCom.method = "post";
    var im = String(getRandomInt(10, 12));
    im+=".jpg";
    newCom.innerHTML='<img src='+im+' align="left" style="left: 10%;height: 40px;width: 40px; border-radius: 20px; z-index: 25; float: left; position: relative">'+
        '<p style="top:0; left: 20%; position: relative;width: 70%"><b>'+name +'</b></p>'+
        '<br><p style="top:50%; left: 20%; position: relative; width: 55%">'+comment+'</p><br><br>';
    div.appendChild(newCom);
}

function getRandomInt(min, max)
{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

