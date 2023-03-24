// 數量/小計計算
function plus(add){
    var nex=add.previousElementSibling;
    nex.value=Number(nex.value)+1;
    
    var price = parseInt(add.parentNode.previousElementSibling.innerHTML);
    var num = price*Number(nex.value);
    nex.parentNode.nextElementSibling.innerHTML = num;
}
function minus(less){
    var pre =less.nextElementSibling;
    var price = parseInt(less.parentNode.previousElementSibling.innerHTML);

    if (pre.value>0) {
        pre.value=Number(pre.value)-1;
        var num = price*Number(pre.value);
        pre.parentNode.nextElementSibling.innerHTML = num;    
    }else{
        pre.value=0;
        var num = price*Number(pre.value);
        pre.parentNode.nextElementSibling.innerHTML = num;    
    }    
}

// 刪除按鈕
function rm(obj){
    var table=obj.parentNode.parentNode.parentNode; //btn上td上tr上table
    var tr=obj.parentNode.parentNode;
    table.removeChild(tr);
  }
  
// 結帳按鈕
var button1=document.querySelector('#end');
var total=document.getElementById("total").value;
// var customer=document.getElementById("customer");
// var customer=document.getElementById("customer");
function end(){
    if(total>=1000){
       window.alert("您已下單完成！");
    }
    else{
        window.alert("您已下單完成！因未滿1000元，所以還有100元的運費喔!");
    }
}
button1.addEventListener('click',end);
