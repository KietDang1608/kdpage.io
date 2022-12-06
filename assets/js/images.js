let list_hn_img = [
    '../assets/images/gallery/hn_01.jpg',
    '../assets/images/gallery/hn_02.jpg',
    '../assets/images/gallery/hn_03.jpg',
    '../assets/images/gallery/hn_04.jpg',
    '../assets/images/gallery/hn_05.jpg',
    '../assets/images/gallery/hn_06.jpg',
]
let list_dc_img = [
    '../assets/images/gallery/dc_01.jpg',
    '../assets/images/gallery/dc_02.jpg',
    '../assets/images/gallery/dc_03.jpg',
    '../assets/images/gallery/dc_04.jpg',
    '../assets/images/gallery/dc_05.jpg',
    '../assets/images/gallery/dc_06.jpg',
    '../assets/images/gallery/dc_07.jpg',
    '../assets/images/gallery/dc_08.jpg',
    '../assets/images/gallery/dc_09.jpg',
    '../assets/images/gallery/dc_10.jpg',
    '../assets/images/gallery/dc_11.jpg',
]
let list_c3_img = [
    '../assets/images/gallery/c3_01.jpg',
    '../assets/images/gallery/c3_02.jpg',
    '../assets/images/gallery/c3_03.jpg',
    '../assets/images/gallery/c3_04.jpg',
    '../assets/images/gallery/c3_05.jpg',
    '../assets/images/gallery/c3_06.jpg',
    '../assets/images/gallery/c3_07.jpg',
    '../assets/images/gallery/c3_08.jpg',
    '../assets/images/gallery/c3_09.jpg',
]
let list_ky_img = [
    '../assets/images/gallery/ky_01.jpg',
    '../assets/images/gallery/ky_02.jpg',
    '../assets/images/gallery/ky_03.jpg',
    '../assets/images/gallery/ky_04.jpg',
    '../assets/images/gallery/ky_05.jpg',
    '../assets/images/gallery/ky_06.jpg',
]
var choose = document.getElementsByClassName('i-option')
choose[0].style.background = '#FFFBC1';
choose[0].style.color = '#A9AF7E';
function showLst(list){
    let pos = document.getElementById('i-layout')
    pos.innerHTML = ''
    for (let i = 0;i<list.length;i++){
        pos.innerHTML +=`<img src="${list[i]}" alt="">`
    }
}
showLst(list_hn_img)
function showImgs(type){
    let num=0;
    switch(type){
        case 'hn':
            showLst(list_hn_img);
            num=0;
            break;
        case 'c3':
            showLst(list_c3_img);
            num=1;
            break;
        case 'dc':
            showLst(list_dc_img);
            num=3;
            break;
        case 'ky':
            showLst(list_ky_img);
            num=2;
            break;
    }
    for(let i =0;i<choose.length;i++){
        choose[i].style.background = '#A9AF7E';
        choose[i].style.color = '#FFFBC1';
    }
    choose[num].style.background = '#FFFBC1';
    choose[num].style.color = '#A9AF7E';
}


