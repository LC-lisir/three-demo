$(document).ready(function () {
    function b() {
        var d = $(window).width(), e = (768 - d) / 768 + 1, f = 1;
        fmhPara = $(".feature-mi").height() < 641 || $(".feature-ai").height() < 641 || $(".feature-bi").height() < 641 ? 0 : 1, 768 > d ? ($(".mi-headline-bg").css("height", $(".feature-mi").height() + 28 * e * f + "px"), $(".ai-headline-bg").css("height", $(".feature-ai").height() + 28 * e * f + "px"), $(".bi-headline-bg").css("height", $(".feature-bi").height() + 28 * e * f + "px"), $(".ee-headline-bg").css("height", $(".feature-ee").height() + parseInt($(".feature-ee").css("padding-top")) + 20 * e + "px")) : ($(".mi-headline-bg").removeAttr("style"), $(".ai-headline-bg").removeAttr("style"), $(".bi-headline-bg").removeAttr("style"), $(".ee-headline-bg").removeAttr("style"))
    }

    setTimeout(function () {
        b()
    }, 100), $(window).resize(function () {
        b()
    })
}), function (c, d) {
    "function" == typeof define && "object" == typeof define.amd ? define([], function () {
        return d(c)
    }) : c.SineWaves = d(c)
}(this, function () {
    function q(b) {
        if (this.options = y.defaults(this.options, b), this.el = this.options.el, delete this.options.el, !this.el) {
            throw"No Canvas Selected"
        }
        if (this.ctx = this.el.getContext("2d"), this.waves = this.options.waves, delete this.options.waves, !this.waves || !this.waves.length) {
            throw"No waves specified"
        }
        this.dpr = window.devicePixelRatio || 1, this.updateDimensions(), window.addEventListener("resize", this.updateDimensions.bind(this)), this.setupUserFunctions(), this.easeFn = y.getFn(D, this.options.ease, "linear"), this.rotation = y.degreesToRadians(this.options.rotate), y.isType(this.options.running, "boolean") && (this.running = this.options.running), this.setupWaveFns(), this.loop()
    }

    function r(c, d) {
        return y.isType(c, "number") ? c : (c = c.toString(), c.indexOf("%") > -1 ? (c = parseFloat(c), c > 1 && (c /= 100), d * c) : c.indexOf("px") > -1 ? parseInt(c, 10) : void 0)
    }

    Function.prototype.bind || (Function.prototype.bind = function (f) {
        if ("function" != typeof this) {
            throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable")
        }
        var g = Array.prototype.slice.call(arguments, 1), h = this, i = function () {
        }, j = function () {
            return h.apply(this instanceof i && f ? this : f, g.concat(Array.prototype.slice.call(arguments)))
        };
        return i.prototype = this.prototype, j.prototype = new i, j
    });
    for (var s = ["ms", "moz", "webkit", "o"], t = 0; t < s.length && !window.requestAnimationFrame; ++t) {
        window.requestAnimationFrame = window[s[t] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[s[t] + "CancelAnimationFrame"] || window[s[t] + "CancelRequestAnimationFrame"]
    }
    if (!window.requestAnimationFrame) {
        var u = 0;
        window.requestAnimationFrame = function (e) {
            var f = (new Date).getTime(), g = Math.max(0, 16 - (f - u)), h = window.setTimeout(function () {
                e(f + g)
            }, g);
            return u = f + g, h
        }
    }
    window.cancelAnimationFrame || (window.cancelAnimationFrame = function (b) {
        clearTimeout(b)
    });
    var v = Math.PI / 180, w = 2 * Math.PI, x = Math.PI / 2, y = {}, z = y.isType = function (d, e) {
        var f = {}.toString.call(d).toLowerCase();
        return f === "[object " + e.toLowerCase() + "]"
    }, A = y.isFunction = function (b) {
        return z(b, "function")
    }, B = y.isString = function (b) {
        return z(b, "string")
    }, C = (y.isNumber = function (b) {
        return z(b, "number")
    }, y.shallowClone = function (d) {
        var e = {};
        for (var f in d) {
            d.hasOwnProperty(f) && (e[f] = d[f])
        }
        return e
    }), D = (y.defaults = function (e, f) {
        z(f, "object") || (f = {});
        var g = C(e);
        for (var h in f) {
            f.hasOwnProperty(h) && (g[h] = f[h])
        }
        return g
    }, y.degreesToRadians = function (b) {
        if (!z(b, "number")) {
            throw new TypeError("Degrees is not a number")
        }
        return b * v
    }, y.getFn = function (d, e, f) {
        return A(e) ? e : B(e) && A(d[e.toLowerCase()]) ? d[e.toLowerCase()] : d[f]
    }, {});
    D.linear = function (c, d) {
        return d
    }, D.sinein = function (c, d) {
        return d * (Math.sin(c * Math.PI - x) + 1) * 0.5
    }, D.sineout = function (c, d) {
        return d * (Math.sin(c * Math.PI + x) + 1) * 0.5
    }, D.sineinout = function (c, d) {
        return d * (Math.sin(c * w - x) + 1) * 0.5
    };
    var E = {};
    E.sine = function (b) {
        return Math.sin(b)
    }, E.sin = E.sine, E.sign = function (b) {
        return b = +b, 0 === b || isNaN(b) ? b : b > 0 ? 1 : -1
    }, E.square = function (b) {
        return E.sign(Math.sin(b * w))
    }, E.sawtooth = function (b) {
        return 2 * (b - Math.floor(b + 0.5))
    }, E.triangle = function (b) {
        return Math.abs(E.sawtooth(b))
    }, q.prototype.options = {
        speed: 10,
        rotate: 0,
        ease: "Linear",
        wavesWidth: "95%"
    }, q.prototype.setupWaveFns = function () {
        for (var c = -1, d = this.waves.length; ++c < d;) {
            this.waves[c].waveFn = y.getFn(E, this.waves[c].type, "sine")
        }
    }, q.prototype.setupUserFunctions = function () {
        y.isFunction(this.options.resizeEvent) && (this.options.resizeEvent.call(this), window.addEventListener("resize", this.options.resizeEvent.bind(this))), y.isFunction(this.options.initialize) && this.options.initialize.call(this)
    };
    var F = {
        timeModifier: 1,
        amplitude: 50,
        wavelength: 50,
        segmentLength: 10,
        lineWidth: 1,
        strokeStyle: "rgba(255, 255, 255, 0.2)",
        type: "Sine"
    };
    return q.prototype.getDimension = function (b) {
        return y.isNumber(this.options[b]) ? this.options[b] : y.isFunction(this.options[b]) ? this.options[b].call(this, this.el) : "width" === b ? this.el.clientWidth : "height" === b ? this.el.clientHeight : void 0
    }, q.prototype.updateDimensions = function () {
        var b = this.getDimension("width"), d = this.getDimension("height");
        this.width = this.el.width = b * this.dpr, this.height = this.el.height = d * this.dpr, this.el.style.width = b + "px", this.el.style.height = d + "px", this.waveWidth = r(this.options.wavesWidth, this.width), this.waveLeft = (this.width - this.waveWidth) / 2, this.yAxis = this.height / 2
    }, q.prototype.clear = function () {
        this.ctx.clearRect(0, 0, this.width, this.height)
    }, q.prototype.time = 0, q.prototype.update = function (e) {
        this.time = this.time - 0.007, "undefined" == typeof e && (e = this.time);
        var f = -1, g = this.waves.length;
        for (this.clear(), this.ctx.save(), this.rotation > 0 && (this.ctx.translate(this.width / 2, this.height / 2), this.ctx.rotate(this.rotation), this.ctx.translate(-this.width / 2, -this.height / 2)); ++f < g;) {
            var h = this.waves[f].timeModifier || 1;
            this.drawWave(e * h, this.waves[f])
        }
        this.ctx.restore(), f = void 0, g = void 0
    }, q.prototype.getPoint = function (g, h, i) {
        var j = g * this.options.speed + (-this.yAxis + h) / i.wavelength, k = i.waveFn.call(this, j, E),
            l = this.easeFn.call(this, h / this.waveWidth, i.amplitude);
        return j = h + this.waveLeft, k = l * k + this.yAxis, {x: j, y: k}
    }, q.prototype.drawWave = function (e, f) {
        f = y.defaults(F, f), this.ctx.lineWidth = f.lineWidth * this.dpr, this.ctx.strokeStyle = f.strokeStyle, this.ctx.lineCap = "butt", this.ctx.lineJoin = "round", this.ctx.beginPath(), this.ctx.moveTo(0, this.yAxis), this.ctx.lineTo(this.waveLeft, this.yAxis);
        var g, h;
        for (g = 0; g < this.waveWidth; g += f.segmentLength) {
            h = this.getPoint(e, g, f), this.ctx.lineTo(h.x, h.y), h = void 0
        }
        g = void 0, f = void 0, this.ctx.lineTo(this.width, this.yAxis), this.ctx.stroke()
    }, q.prototype.running = !0, q.prototype.loop = function () {
        this.running === !0 && this.update(), window.requestAnimationFrame(this.loop.bind(this))
    }, q.prototype.Waves = E, q.prototype.Ease = D, q
}), $(function () {
    var g = new SineWaves({
            el: document.getElementById("waves"),
            speed: 8,
            width: function () {
                var b = $(document).width();
                return 768 > b ? 3 * $("#waves").parent().width() : 1.4 * $("#waves").parent().width()
            },
            height: function () {
                return $("#waves").parent().height()
            },
            wavesWidth: "100%",
            ease: "SineInOut",
            waves: [{
                timeModifier: 0.5,
                lineWidth: 2,
                amplitude: 150,
                wavelength: 200,
                segmentLength: 1
            }, {timeModifier: 0.5, lineWidth: 2, amplitude: 100, wavelength: 150, segmentLength: 1}, {
                timeModifier: 0.5,
                lineWidth: 2,
                amplitude: 50,
                wavelength: 80,
                segmentLength: 1
            }],
            initialize: function () {
            },
            resizeEvent: function () {
                var d = this.ctx.createLinearGradient(0, 0, this.width, 0);
                d.addColorStop(0, "rgba(255, 255, 255, 0)"), d.addColorStop(0.5, "rgba(255, 255, 255, 0.2)"), d.addColorStop(1, "rgba(255, 255, 255, 0)");
                for (var e = -1, f = this.waves.length; ++e < f;) {
                    this.waves[e].strokeStyle = d
                }
                e = void 0, f = void 0, d = void 0
            }
        }), h = $("#waves"), i = $(document).scrollTop(), j = $(document).scrollTop() + $(window).height(),
        k = h.offset().top + h.height(), l = h.offset().top;
    (i > k || l > j) && (g.running = !1, g.update()), $(window).bind("scroll", function () {
        i = $(document).scrollTop(), j = $(document).scrollTop() + $(window).height(), k = h.offset().top + h.height(), l = h.offset().top, i > k || l > j ? (g.running = !1, g.update()) : (g.running = !0, g.update())
    })
}), $(function () {
    var g = new SineWaves({
            el: document.getElementById("waves21"),
            speed: 8,
            width: function () {
                var b = $(document).width();
                return 768 > b ? 3 * $("#waves").parent().width() : 1.4 * $("#waves").parent().width()
            },
            height: function () {
                return $("#waves").parent().height()
            },
            wavesWidth: "100%",
            ease: "SineInOut",
            waves: [{
                timeModifier: 0.5,
                lineWidth: 2,
                amplitude: 160,
                wavelength: 150,
                segmentLength: 1
            }, {timeModifier: 0.6, lineWidth: 2, amplitude: 100, wavelength: 100, segmentLength: 1}],
            initialize: function () {
            },
            resizeEvent: function () {
                var d = this.ctx.createLinearGradient(0, 0, this.width, 0);
                d.addColorStop(0, "rgba(255, 255, 255, 0)"), d.addColorStop(0.5, "rgba(255, 255, 255, 0.2)"), d.addColorStop(1, "rgba(255, 255, 255, 0)");
                for (var e = -1, f = this.waves.length; ++e < f;) {
                    this.waves[e].strokeStyle = d
                }
                e = void 0, f = void 0, d = void 0
            }
        }), h = $("#waves21"), i = $(document).scrollTop(), j = $(document).scrollTop() + $(window).height(),
        k = h.offset().top + h.height(), l = h.offset().top;
    (i > k || l > j) && (g.running = !1, g.update()), $(window).bind("scroll", function () {
        i = $(document).scrollTop(), j = $(document).scrollTop() + $(window).height(), k = h.offset().top + h.height(), l = h.offset().top, i > k || l > j ? (g.running = !1, g.update()) : (g.running = !0, g.update())
    })
}), $(function () {
    var g = new SineWaves({
            el: document.getElementById("waves2"),
            speed: 8,
            width: function () {
                var b = $(document).width();
                return 768 > b ? 3 * $("#waves2").parent().width() : 1.4 * $("#waves2").parent().width()
            },
            height: function () {
                return $("#waves2").parent().height()
            },
            wavesWidth: "100%",
            ease: "SineInOut",
            waves: [{
                timeModifier: 0.5,
                lineWidth: 2,
                amplitude: 100,
                wavelength: 150,
                segmentLength: 1
            }, {timeModifier: 0.5, lineWidth: 2, amplitude: 50, wavelength: 80, segmentLength: 1}],
            initialize: function () {
            },
            resizeEvent: function () {
                var d = this.ctx.createLinearGradient(0, 0, this.width, 0);
                d.addColorStop(0, "rgba(255, 255, 255, 0)"), d.addColorStop(0.5, "rgba(255, 255, 255, 0.2)"), d.addColorStop(1, "rgba(255, 255, 255, 0)");
                for (var e = -1, f = this.waves.length; ++e < f;) {
                    this.waves[e].strokeStyle = d
                }
                e = void 0, f = void 0, d = void 0
            }
        }), h = $("#waves2"), i = $(document).scrollTop(), j = $(document).scrollTop() + $(window).height(),
        k = h.offset().top + h.height(), l = h.offset().top;
    (i > k || l > j) && (g.running = !1, g.update()), $(window).bind("scroll", function () {
        i = $(document).scrollTop(), j = $(document).scrollTop() + $(window).height(), k = h.offset().top + h.height(), l = h.offset().top, i > k || l > j ? (g.running = !1, g.update()) : (g.running = !0, g.update())
    })
});
