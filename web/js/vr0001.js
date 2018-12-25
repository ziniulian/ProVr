function init () {
    fc.load(fDoe);
    fc.loading();
}

var dat = {
    run: function () {
        if (runDoe.innerHTML === "播放") {
            fc.autoPlay();
            runDoe.innerHTML = "停止";
        } else {
            fc.stop();
            runDoe.innerHTML = "播放";
        }
    },

    part: function (s, e) {
        runDoe.innerHTML = "停止";
        if (!e) {
            e = s + 50;
        }
        fc.play(s, e);
    }
};
