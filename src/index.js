class DefferedJS {
    constructor(event){
        document.addEventListener(event, this.InitDefer, false);
    }
    InitDefer() {
        // Load All CSS Files After DomContentLoaded
        var defferedCss = document.getElementsByTagName("link");
        for (var i = 0; i < defferedCss.length; i++) {
            defferedCss[i]
                .setAttribute("href",
                    defferedCss[i].getAttribute("data-href"));
        }
        // Load All CSS Files After DomContentLoaded
        var defferedJs = document.getElementsByTagName("script");
        for (var i = 0; i < defferedJs.length; i++) {
            console.log(defferedJs[i].getAttribute("data-src"));
            if(defferedJs[i].getAttribute("data-src")!==null){
                defferedJs[i]
                .setAttribute("src",
                    defferedJs[i].getAttribute("data-src"));
            }
        }
        // Load All CSS Files After DomContentLoaded
        var defferedImages = document.getElementsByTagName("img");
        for (var i = 0;
            i < defferedImages.length;
            i++) {
            defferedImages[i]
                .setAttribute("src",
                    defferedImages[i].getAttribute("data-src"));
        }
    }
}

module.exports = DefferedJS;