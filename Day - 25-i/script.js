async function dog(){
    try {
        var dogs=await fetch("https://dog.ceo/api/breeds/list/all")
        var doglist=await dogs.json();
        for(var dog in doglist.message){
            let option=document.createElement("option");
            option.innerHTML=dog;
            let select=document.getElementById("breedlist");
            select.appendChild(option);
        }
    } catch (error) {
        console.log(error)
    }
}
dog();


async function image(){
    try {
        var getdata=await fetch("https://dog.ceo/api/breeds/image/random/3")
        var imagedata=await getdata.json();

        let img1=document.getElementsByClassName("imgdiv1")[0];
        let img2=document.getElementsByClassName("imgdiv1")[1];
        let img3=document.getElementsByClassName("imgdiv1")[2];
        img1.src=imagedata.message[0];
        img2.src=imagedata.message[1];
        img3.src=imagedata.message[2];

        console.log(imagedata.message[0])
        console.log(imagedata.message[1])
        console.log(imagedata.message[2])
    } catch (error) {
       console.log(error) 
    }
}
image();

var button=document.getElementById("button")
button.addEventListener("click",function(){
    image();
});


async function subbreedlist(name){
    try {
        let getdata=await fetch(`https://dog.ceo/api/breed/${name}/images/random/10`);
        let imagedata=await getdata.json();
        for (let image of imagedata.message){
            let img=document.createElement("img");
            img.setAttribute("src",image);
            img.setAttribute("heigth",300);
            img.setAttribute("width",500);
            let div=document.getElementsByClassName("breedimg")[0];
            let divimg=document.getElementsByClassName("images")[0];

            divimg.appendChild(img);
            div.append(divimg)
        }
        console.log(imagedata)
    } catch (error) {
        console.log(error);
    }
}


let breedsearch=document.getElementById("search");
breedsearch.addEventListener("click",function(){
    var breedname=document.getElementById("breedlist").value;
    subbreedlist(breedname);
})