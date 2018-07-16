
var image = document.getElementById("Side1");

function changeImage() {
 
 if (image.getAttribute('src') == "img/side1.png") {
     image.src = "img/side2.png";
} else if (image.getAttribute('src') == "img/side2.png")
{image.src = "img/side3.png";
} else if (image.getAttribute('src') == "img/side3.png")
{image.src = "img/side4.png";
} else if (image.getAttribute('src') == "img/side4.png")
{image.src = "img/side5.png";
} else if (image.getAttribute('src') == "img/side5.png")
{image.src = "img/side6.png";
} else if (image.getAttribute('src') == "img/side6.png")
{image.src = "img/side1.png";
}
 }
