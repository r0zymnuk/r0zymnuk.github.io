let img_urls =['https://www.wsupercars.com/wallpapers-regular/Mercedes-Benz/2022-Mercedes-AMG-SL63-008-1080.jpg', 
'https://www.wsupercars.com/wallpapers-regular/Mercedes-Benz/2023-Mercedes-AMG-C63-S-E-Performance-009-1080.jpg',
'https://www.wsupercars.com/wallpapers-regular/Mercedes-Benz/2019-Mercedes-AMG-G63-005-1080.jpg',
'https://www.wsupercars.com/wallpapers-regular/Mercedes-Benz/2023-Mercedes-AMG-EQE-53-002-1080.jpg',
'https://wallpapercave.com/wp/wp7951604.jpg']

let img_carousel_el = document.getElementById("head-carousel")
var i = 0

function changeImageURL(){
    img_carousel_el.src = img_urls[i]
    i++
    if(i >= 4){
        i = 0
    }
}

const intervalID = setInterval(changeImageURL, 4000)