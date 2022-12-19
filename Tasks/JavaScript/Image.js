img1_im = document.getElementById('img1');
btn1_bt = document.getElementById('btn1');
img2_im = document.getElementById('img2');
btn2_bt = document.getElementById('btn2');
img3_im = document.getElementById('img3');
btn3_bt = document.getElementById('btn3');

function get() {
    btn1_bt = img1_im.style.display='inline-block';
    // btn1_bt = document.getElementById('img1').style.display='block';
}
function change() {
    btn2_bt = img2_im.src ='https://tinypng.com/images/social/website.jpg';
    // document.getElementById('img1').src="https://tinypng.com/images/social/website.jpg";
}
val = document.getElementById('img3').src='https://thumbs.dreamstime.com/b/birch-tree-silhouette-sunrise-18185054.jpg';
function again() {
    if (img3_im.src == val) {
        btn3_bt = img3_im.src ='https://tinypng.com/images/social/website.jpg';
    } 
    else {
        btn3_bt = img3_im.src ='https://thumbs.dreamstime.com/b/birch-tree-silhouette-sunrise-18185054.jpg';
    }
}