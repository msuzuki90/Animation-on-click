$(document).ready(function () {

    let a;
    // fonction de création d'une couleur aléatoire
    function colorRandom() {
        let r = Math.floor(Math.random() * 255);
        let g = Math.floor(Math.random() * 255);
        let b = Math.floor(Math.random() * 255)
        color = "rgb(" + r + "," + g + "," + b + ")"; // concaténation
        return color;
    }

    function animate(y) {
        let last = $("div").last();
        let max = $(window).height(); // returns height of browser viewport
        last.animate({ top: max - a }, 2000 - 4 * y,
            function () {
                last.fadeOut(3000)
                // last.animate({left : "1000px"}, 2000)
            })
    }


    function circleOnClick(x, y) {
        div = $("<div>").html("")
        $("body").append(div); // ajout de la div au body
        a = 15 + Math.floor(Math.random() * 100); // taille aléatoire de la boule

        // css de la boule
        div.css({
            "height": a + "px",
            "width": a + "px",
            "background-color": colorRandom(),
            "border-radius": "50%",
            // "display": "flex",
            "position": "absolute",
            "left": x - a / 2 + "px",
            "top": y - a / 2 + "px",
        });
        return a;

    }

    $(document).on("click", function (event) {
        console.log(event.pageX + "  " + event.pageY);
        let x = event.pageX;
        let y = event.pageY;

        circleOnClick(x, y);
        console.log(a);
        animate(y);
    });




})
