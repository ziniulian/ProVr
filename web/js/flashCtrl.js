// Flash 控制器
var fc = {
    flash: null,
    count: 0,   // 总帧数
    end: 0,

    load: function (doe, url) {
        if (!url) {
            url = fc.gn();
        }
        fc.flash = document.createElement("embed");
        fc.flash.src = url;
        // doe.insertBefore(fc.flash, doe.childNodes[0]);
        doe.appendChild(fc.flash);
        requestAnimationFrame(fc.loading);
    },

    gn: function () {
        var p = "../v/dl";
        var e = ".swf";
        var s = nDoe.className.substr(7);
        return p + s + e;
    },

    // 资源加载中
    loading: function () {
        if (fc.flash.PercentLoaded) {
            fc.flash.StopPlay();
            if (fc.flash.PercentLoaded() === 100) {
                fc.flash.Rewind();
                fc.count = fc.flash.TotalFrames();
// console.log(fc.count);
            }
        }
        if (fc.count === 0) {
            requestAnimationFrame(fc.loading);
        }
    },

    stop: function () {
        fc.flash.StopPlay();
        fc.end = 0;
    },

    autoPlay: function (s) {
        if (fc.count && (fc.end === 0)) {
            fc.jump(s);
            fc.flash.Play();
        }
    },

    play: function (s, e) {
        if (fc.count) {
            fc.stop();
            fc.jump(s);
            if (e) {
                if (e >= fc.count) {
                    e = fc.count - 1;
                }
                if (e > s) {
                    fc.end = e;
                    fc.flash.Play();
                    requestAnimationFrame(fc.playing);
                }
            }
        }
    },

    jump: function (p) {
        if (p >= 0) {
            if (p >= fc.count) {
                p = fc.count - 1;
            }
            fc.flash.GotoFrame(p);
        }
    },

    playing: function () {
        if (fc.end && fc.flash.IsPlaying() && (fc.flash.CurrentFrame() < fc.end)) {
// console.log(fc.flash.CurrentFrame());
            requestAnimationFrame(fc.playing);
        } else {
            fc.stop();
        }
    }
};
