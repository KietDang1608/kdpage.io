var op1 = document.getElementById("am-ll-inf");
var op2 = document.getElementById("am-st-inf");
var op3 = document.getElementById("am-ht-inf");
var imgshow= document.getElementById('am-r-img')

var choose = document.getElementsByClassName('am-option')
choose[0].style.textDecoration = 'underline';
function switchToLL(){
    op1.style.display = 'block';
    op2.style.display = 'none';
    op3.style.display = 'none';
    for (var i = 0;i<choose.length;i++){
        choose[i].style.textDecoration = 'none'
    }
    choose[0].style.textDecoration = 'underline';
    imgshow.innerHTML = `<img src="../assets/images/self_img2.jpg" alt="">`

}
function switchToST(){
    op1.style.display = 'none';
    op2.style.display = 'block';
    op3.style.display = 'none';
    for (var i = 0;i<choose.length;i++){
        choose[i].style.textDecoration = 'none'
    }
    choose[1].style.textDecoration = 'underline';
    imgshow.innerHTML = `<img src="../assets/images/self_img3.jpg" alt="">`
}
function switchToHT(){
    op1.style.display = 'none';
    op2.style.display = 'none';
    op3.style.display = 'block';
    for (var i = 0;i<choose.length;i++){
        choose[i].style.textDecoration = 'none'
    }
    choose[2].style.textDecoration = 'underline';
    imgshow.innerHTML = `<img src="../assets/images/self_img4.jpg" alt="">`
}

