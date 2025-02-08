function one(){
    document.getElementById("i1").style.display = "block";
    document.getElementById("i2").style.display = "none";
    document.getElementById("i3").style.display = "none";
    document.getElementById("i4").style.display = "none";
}
function two(){
    document.getElementById("i1").style.display = "block";
    document.getElementById("i2").style.display = "block";
    document.getElementById("i3").style.display = "none";
    document.getElementById("i4").style.display = "none";
}
function three(){
    document.getElementById("i1").style.display = "block";
    document.getElementById("i2").style.display = "block";
    document.getElementById("i3").style.display = "block";
    document.getElementById("i4").style.display = "none";
}
function four(){
    document.getElementById("i1").style.display = "block";
    document.getElementById("i2").style.display = "block";
    document.getElementById("i3").style.display = "block";
    document.getElementById("i4").style.display = "block";
}

function Upload1(){
    const fileInput1 = document.getElementById("up1");

    if (!fileInput1 || !fileInput1.files.length) {
        return alert("No file selected");
    }

    const image1 = fileInput1.files[0];

    if (!image1.type.includes('image')) {
        return alert("Only Images allowed");
    }

    const file1 = new FileReader();

    file1.onload = function(event) {
        const imgUrl = event.target.result;
        const imgElement = document.getElementById("im1");

        if (imgElement) {
            imgElement.setAttribute("src",imgUrl);
            imgElement.style.backgroundSize = "cover"; // Ensure the image fits properly
            imgElement.style.backgroundPosition = "center";
        } else {
            alert("Image container not found!");
        }
    };

    file1.readAsDataURL(image1);
}

function Upload2(){
    const fileInput2 = document.getElementById("up2");

    if (!fileInput2 || !fileInput2.files.length) {
        return alert("No file selected");
    }

    const image2 = fileInput2.files[0];

    if (!image2.type.includes('image')) {
        return alert("Only Images allowed");
    }

    const file2 = new FileReader();

    file2.onload = function(event) {
        const imgUrl2 = event.target.result;
        const imgElement2 = document.getElementById("im2");

        if (imgElement2) {
            imgElement2.setAttribute("src",imgUrl2);
            imgElement2.style.backgroundSize = "cover"; // Ensure the image fits properly
            imgElement2.style.backgroundPosition = "center";
        } else {
            alert("Image container not found!");
        }
    };

    file2.readAsDataURL(image2);
}

function Upload3(){
    const fileInput3 = document.getElementById("up3");

    if (!fileInput3 || !fileInput3.files.length) {
        return alert("No file selected");
    }

    const image3 = fileInput3.files[0];

    if (!image3.type.includes('image')) {
        return alert("Only Images allowed");
    }

    const file3 = new FileReader();

    file3.onload = function(event) {
        const imgUrl3 = event.target.result;
        const imgElement3 = document.getElementById("im3");

        if (imgElement3) {
            imgElement3.setAttribute("src",imgUrl3);
            imgElement3.style.backgroundSize = "cover"; // Ensure the image fits properly
            imgElement3.style.backgroundPosition = "center";
        } else {
            alert("Image container not found!");
        }
    };

    file3.readAsDataURL(image3);
}

function Upload4(){
    const fileInput4 = document.getElementById("up4");

    if (!fileInput4 || !fileInput4.files.length) {
        return alert("No file selected");
    }

    const image4 = fileInput4.files[0];

    if (!image4.type.includes('image')) {
        return alert("Only Images allowed");
    }

    const file4 = new FileReader();

    file4.onload = function(event) {
        const imgUrl4 = event.target.result;
        const imgElement4 = document.getElementById("im4");

        if (imgElement4) {
            imgElement4.setAttribute("src",imgUrl4);
            imgElement4.style.backgroundSize = "cover"; // Ensure the image fits properly
            imgElement4.style.backgroundPosition = "center";
        } else {
            alert("Image container not found!");
        }
    };

    file4.readAsDataURL(image4);
}