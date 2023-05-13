/*
 * jQuery JavaScript Library v1.9.0
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2012 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2013-1-14
 */
(function (bU, bS) {
    var bi, aR, V = bU.document, ax = bU.location, b = bU.jQuery, a = bU.$, t = {}, w = [], F = "1.9.0", v = w.concat,
        A = w.push, C = w.slice, y = w.indexOf, D = t.toString, x = t.hasOwnProperty, E = F.trim,
        aw = function (b1, e) {
            return new aw.fn.init(b1, e, bi)
        }, z = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, B = /\S+/g, by = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        bn = /^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/, bt = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, bF = /^[\],:{}\s]*$/,
        bE = /(?:^|:|,)(?:\s*\[)+/g, bG = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
        bH = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g, ba = /^-ms-/, aP = /-([\da-z])/gi,
        Z = function (e, b1) {
            return b1.toUpperCase()
        }, W = function () {
            if (V.addEventListener) {
                V.removeEventListener("DOMContentLoaded", W, false);
                aw.ready()
            } else {
                if (V.readyState === "complete") {
                    V.detachEvent("onreadystatechange", W);
                    aw.ready()
                }
            }
        };
    aw.fn = aw.prototype = {
        jquery: F, constructor: aw, init: function (b4, e, b3) {
            var b2, b1;
            if (!b4) {
                return this
            }
            if (typeof b4 === "string") {
                if (b4.charAt(0) === "<" && b4.charAt(b4.length - 1) === ">" && b4.length >= 3) {
                    b2 = [null, b4, null]
                } else {
                    b2 = bn.exec(b4)
                }
                if (b2 && (b2[1] || !e)) {
                    if (b2[1]) {
                        e = e instanceof aw ? e[0] : e;
                        aw.merge(this, aw.parseHTML(b2[1], e && e.nodeType ? e.ownerDocument || e : V, true));
                        if (bt.test(b2[1]) && aw.isPlainObject(e)) {
                            for (b2 in e) {
                                if (aw.isFunction(this[b2])) {
                                    this[b2](e[b2])
                                } else {
                                    this.attr(b2, e[b2])
                                }
                            }
                        }
                        return this
                    } else {
                        b1 = V.getElementById(b2[2]);
                        if (b1 && b1.parentNode) {
                            if (b1.id !== b2[2]) {
                                return b3.find(b4)
                            }
                            this.length = 1;
                            this[0] = b1
                        }
                        this.context = V;
                        this.selector = b4;
                        return this
                    }
                } else {
                    if (!e || e.jquery) {
                        return (e || b3).find(b4)
                    } else {
                        return this.constructor(e).find(b4)
                    }
                }
            } else {
                if (b4.nodeType) {
                    this.context = this[0] = b4;
                    this.length = 1;
                    return this
                } else {
                    if (aw.isFunction(b4)) {
                        return b3.ready(b4)
                    }
                }
            }
            if (b4.selector !== bS) {
                this.selector = b4.selector;
                this.context = b4.context
            }
            return aw.makeArray(b4, this)
        }, selector: "", length: 0, size: function () {
            return this.length
        }, toArray: function () {
            return C.call(this)
        }, get: function (e) {
            return e == null ? this.toArray() : (e < 0 ? this[this.length + e] : this[e])
        }, pushStack: function (e) {
            var b1 = aw.merge(this.constructor(), e);
            b1.prevObject = this;
            b1.context = this.context;
            return b1
        }, each: function (b1, e) {
            return aw.each(this, b1, e)
        }, ready: function (e) {
            aw.ready.promise().done(e);
            return this
        }, slice: function () {
            return this.pushStack(C.apply(this, arguments))
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        }, eq: function (e) {
            var b2 = this.length, b1 = +e + (e < 0 ? b2 : 0);
            return this.pushStack(b1 >= 0 && b1 < b2 ? [this[b1]] : [])
        }, map: function (e) {
            return this.pushStack(aw.map(this, function (b1, b2) {
                return e.call(b1, b2, b1)
            }))
        }, end: function () {
            return this.prevObject || this.constructor(null)
        }, push: A, sort: [].sort, splice: [].splice
    };
    aw.fn.init.prototype = aw.fn;
    aw.extend = aw.fn.extend = function () {
        var b7, b6, b8, b1, b2, e, b9 = arguments[0] || {}, b4 = 1, b5 = arguments.length, b3 = false;
        if (typeof b9 === "boolean") {
            b3 = b9;
            b9 = arguments[1] || {};
            b4 = 2
        }
        if (typeof b9 !== "object" && !aw.isFunction(b9)) {
            b9 = {}
        }
        if (b5 === b4) {
            b9 = this;
            --b4
        }
        for (; b4 < b5; b4++) {
            if ((b7 = arguments[b4]) != null) {
                for (b6 in b7) {
                    b8 = b9[b6];
                    b1 = b7[b6];
                    if (b9 === b1) {
                        continue
                    }
                    if (b3 && b1 && (aw.isPlainObject(b1) || (b2 = aw.isArray(b1)))) {
                        if (b2) {
                            b2 = false;
                            e = b8 && aw.isArray(b8) ? b8 : []
                        } else {
                            e = b8 && aw.isPlainObject(b8) ? b8 : {}
                        }
                        b9[b6] = aw.extend(b3, e, b1)
                    } else {
                        if (b1 !== bS) {
                            b9[b6] = b1
                        }
                    }
                }
            }
        }
        return b9
    };
    aw.extend({
        noConflict: function (e) {
            if (bU.$ === aw) {
                bU.$ = a
            }
            if (e && bU.jQuery === aw) {
                bU.jQuery = b
            }
            return aw
        }, isReady: false, readyWait: 1, holdReady: function (e) {
            if (e) {
                aw.readyWait++
            } else {
                aw.ready(true)
            }
        }, ready: function (e) {
            if (e === true ? --aw.readyWait : aw.isReady) {
                return
            }
            if (!V.body) {
                return setTimeout(aw.ready)
            }
            aw.isReady = true;
            if (e !== true && --aw.readyWait > 0) {
                return
            }
            aR.resolveWith(V, [aw]);
            if (aw.fn.trigger) {
                aw(V).trigger("ready").off("ready")
            }
        }, isFunction: function (e) {
            return aw.type(e) === "function"
        }, isArray: Array.isArray || function (e) {
            return aw.type(e) === "array"
        }, isWindow: function (e) {
            return e != null && e == e.window
        }, isNumeric: function (e) {
            return !isNaN(parseFloat(e)) && isFinite(e)
        }, type: function (e) {
            if (e == null) {
                return String(e)
            }
            return typeof e === "object" || typeof e === "function" ? t[D.call(e)] || "object" : typeof e
        }, isPlainObject: function (b3) {
            if (!b3 || aw.type(b3) !== "object" || b3.nodeType || aw.isWindow(b3)) {
                return false
            }
            try {
                if (b3.constructor && !x.call(b3, "constructor") && !x.call(b3.constructor.prototype, "isPrototypeOf")) {
                    return false
                }
            } catch (b1) {
                return false
            }
            var b2;
            for (b2 in b3) {
            }
            return b2 === bS || x.call(b3, b2)
        }, isEmptyObject: function (b1) {
            var e;
            for (e in b1) {
                return false
            }
            return true
        }, error: function (e) {
            throw new Error(e)
        }, parseHTML: function (b1, e, b2) {
            if (!b1 || typeof b1 !== "string") {
                return null
            }
            if (typeof e === "boolean") {
                b2 = e;
                e = false
            }
            e = e || V;
            var b3 = bt.exec(b1), b4 = !b2 && [];
            if (b3) {
                return [e.createElement(b3[1])]
            }
            b3 = aw.buildFragment([b1], e, b4);
            if (b4) {
                aw(b4).remove()
            }
            return aw.merge([], b3.childNodes)
        }, parseJSON: function (e) {
            if (bU.JSON && bU.JSON.parse) {
                return bU.JSON.parse(e)
            }
            if (e === null) {
                return e
            }
            if (typeof e === "string") {
                e = aw.trim(e);
                if (e) {
                    if (bF.test(e.replace(bG, "@").replace(bH, "]").replace(bE, ""))) {
                        return (new Function("return " + e))()
                    }
                }
            }
            aw.error("Invalid JSON: " + e)
        }, parseXML: function (b1) {
            var b4, b3;
            if (!b1 || typeof b1 !== "string") {
                return null
            }
            try {
                if (bU.DOMParser) {
                    b3 = new DOMParser();
                    b4 = b3.parseFromString(b1, "text/xml")
                } else {
                    b4 = new ActiveXObject("Microsoft.XMLDOM");
                    b4.async = "false";
                    b4.loadXML(b1)
                }
            } catch (b2) {
                b4 = bS
            }
            if (!b4 || !b4.documentElement || b4.getElementsByTagName("parsererror").length) {
                aw.error("Invalid XML: " + b1)
            }
            return b4
        }, noop: function () {
        }, globalEval: function (e) {
            if (e && aw.trim(e)) {
                (bU.execScript || function (b1) {
                    bU["eval"].call(bU, b1)
                })(e)
            }
        }, camelCase: function (e) {
            return e.replace(ba, "ms-").replace(aP, Z)
        }, nodeName: function (e, b1) {
            return e.nodeName && e.nodeName.toLowerCase() === b1.toLowerCase()
        }, each: function (b5, b1, e) {
            var b6, b2 = 0, b4 = b5.length, b3 = ar(b5);
            if (e) {
                if (b3) {
                    for (; b2 < b4; b2++) {
                        b6 = b1.apply(b5[b2], e);
                        if (b6 === false) {
                            break
                        }
                    }
                } else {
                    for (b2 in b5) {
                        b6 = b1.apply(b5[b2], e);
                        if (b6 === false) {
                            break
                        }
                    }
                }
            } else {
                if (b3) {
                    for (; b2 < b4; b2++) {
                        b6 = b1.call(b5[b2], b2, b5[b2]);
                        if (b6 === false) {
                            break
                        }
                    }
                } else {
                    for (b2 in b5) {
                        b6 = b1.call(b5[b2], b2, b5[b2]);
                        if (b6 === false) {
                            break
                        }
                    }
                }
            }
            return b5
        }, trim: E && !E.call("\uFEFF\xA0") ? function (e) {
            return e == null ? "" : E.call(e)
        } : function (e) {
            return e == null ? "" : (e + "").replace(by, "")
        }, makeArray: function (e, b1) {
            var b2 = b1 || [];
            if (e != null) {
                if (ar(Object(e))) {
                    aw.merge(b2, typeof e === "string" ? [e] : e)
                } else {
                    A.call(b2, e)
                }
            }
            return b2
        }, inArray: function (b1, e, b2) {
            var b3;
            if (e) {
                if (y) {
                    return y.call(e, b1, b2)
                }
                b3 = e.length;
                b2 = b2 ? b2 < 0 ? Math.max(0, b3 + b2) : b2 : 0;
                for (; b2 < b3; b2++) {
                    if (b2 in e && e[b2] === b1) {
                        return b2
                    }
                }
            }
            return -1
        }, merge: function (e, b4) {
            var b3 = b4.length, b1 = e.length, b2 = 0;
            if (typeof b3 === "number") {
                for (; b2 < b3; b2++) {
                    e[b1++] = b4[b2]
                }
            } else {
                while (b4[b2] !== bS) {
                    e[b1++] = b4[b2++]
                }
            }
            e.length = b1;
            return e
        }, grep: function (b1, e, b3) {
            var b6, b5 = [], b2 = 0, b4 = b1.length;
            b3 = !!b3;
            for (; b2 < b4; b2++) {
                b6 = !!e(b1[b2], b2);
                if (b3 !== b6) {
                    b5.push(b1[b2])
                }
            }
            return b5
        }, map: function (b2, b1, e) {
            var b7, b3 = 0, b5 = b2.length, b4 = ar(b2), b6 = [];
            if (b4) {
                for (; b3 < b5; b3++) {
                    b7 = b1(b2[b3], b3, e);
                    if (b7 != null) {
                        b6[b6.length] = b7
                    }
                }
            } else {
                for (b3 in b2) {
                    b7 = b1(b2[b3], b3, e);
                    if (b7 != null) {
                        b6[b6.length] = b7
                    }
                }
            }
            return v.apply([], b6)
        }, guid: 1, proxy: function (b2, b1) {
            var b4, e, b3;
            if (typeof b1 === "string") {
                b4 = b2[b1];
                b1 = b2;
                b2 = b4
            }
            if (!aw.isFunction(b2)) {
                return bS
            }
            e = C.call(arguments, 2);
            b3 = function () {
                return b2.apply(b1 || this, e.concat(C.call(arguments)))
            };
            b3.guid = b2.guid = b2.guid || aw.guid++;
            return b3
        }, access: function (b2, b4, b6, b9, b1, b3, b8) {
            var b5 = 0, b7 = b2.length, e = b6 == null;
            if (aw.type(b6) === "object") {
                b1 = true;
                for (b5 in b6) {
                    aw.access(b2, b4, b5, b6[b5], true, b3, b8)
                }
            } else {
                if (b9 !== bS) {
                    b1 = true;
                    if (!aw.isFunction(b9)) {
                        b8 = true
                    }
                    if (e) {
                        if (b8) {
                            b4.call(b2, b9);
                            b4 = null
                        } else {
                            e = b4;
                            b4 = function (ca, cb, cc) {
                                return e.call(aw(ca), cc)
                            }
                        }
                    }
                    if (b4) {
                        for (; b5 < b7; b5++) {
                            b4(b2[b5], b6, b8 ? b9 : b9.call(b2[b5], b5, b4(b2[b5], b6)))
                        }
                    }
                }
            }
            return b1 ? b2 : e ? b4.call(b2) : b7 ? b4(b2[0], b6) : b3
        }, now: function () {
            return (new Date()).getTime()
        }
    });
    aw.ready.promise = function (b3) {
        if (!aR) {
            aR = aw.Deferred();
            if (V.readyState === "complete") {
                setTimeout(aw.ready)
            } else {
                if (V.addEventListener) {
                    V.addEventListener("DOMContentLoaded", W, false);
                    bU.addEventListener("load", aw.ready, false)
                } else {
                    V.attachEvent("onreadystatechange", W);
                    bU.attachEvent("onload", aw.ready);
                    var b4 = false;
                    try {
                        b4 = bU.frameElement == null && V.documentElement
                    } catch (b2) {
                    }
                    if (b4 && b4.doScroll) {
                        (function b1() {
                            if (!aw.isReady) {
                                try {
                                    b4.doScroll("left")
                                } catch (b5) {
                                    return setTimeout(b1, 50)
                                }
                                aw.ready()
                            }
                        })()
                    }
                }
            }
        }
        return aR.promise(b3)
    };
    aw.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, b1) {
        t["[object " + b1 + "]"] = b1.toLowerCase()
    });

    function ar(b1) {
        var e = b1.length, b2 = aw.type(b1);
        if (aw.isWindow(b1)) {
            return false
        }
        if (b1.nodeType === 1 && e) {
            return true
        }
        return b2 === "array" || b2 !== "function" && (e === 0 || typeof e === "number" && e > 0 && (e - 1) in b1)
    }

    bi = aw(V);
    var aC = {};

    function I(b1) {
        var e = aC[b1] = {};
        aw.each(b1.match(B) || [], function (b2, b3) {
            e[b3] = true
        });
        return e
    }

    aw.Callbacks = function (b8) {
        b8 = typeof b8 === "string" ? (aC[b8] || I(b8)) : aw.extend({}, b8);
        var b7, b1, b2, b5, b4, b3, b6 = [], ca = !b8.once && [], e = function (cb) {
            b7 = b8.memory && cb;
            b1 = true;
            b3 = b5 || 0;
            b5 = 0;
            b4 = b6.length;
            b2 = true;
            for (; b6 && b3 < b4; b3++) {
                if (b6[b3].apply(cb[0], cb[1]) === false && b8.stopOnFalse) {
                    b7 = false;
                    break
                }
            }
            b2 = false;
            if (b6) {
                if (ca) {
                    if (ca.length) {
                        e(ca.shift())
                    }
                } else {
                    if (b7) {
                        b6 = []
                    } else {
                        b9.disable()
                    }
                }
            }
        }, b9 = {
            add: function () {
                if (b6) {
                    var cc = b6.length;
                    (function cb(cd) {
                        aw.each(cd, function (ce, cf) {
                            var cg = aw.type(cf);
                            if (cg === "function") {
                                if (!b8.unique || !b9.has(cf)) {
                                    b6.push(cf)
                                }
                            } else {
                                if (cf && cf.length && cg !== "string") {
                                    cb(cf)
                                }
                            }
                        })
                    })(arguments);
                    if (b2) {
                        b4 = b6.length
                    } else {
                        if (b7) {
                            b5 = cc;
                            e(b7)
                        }
                    }
                }
                return this
            }, remove: function () {
                if (b6) {
                    aw.each(arguments, function (cb, cc) {
                        var cd;
                        while ((cd = aw.inArray(cc, b6, cd)) > -1) {
                            b6.splice(cd, 1);
                            if (b2) {
                                if (cd <= b4) {
                                    b4--
                                }
                                if (cd <= b3) {
                                    b3--
                                }
                            }
                        }
                    })
                }
                return this
            }, has: function (cb) {
                return aw.inArray(cb, b6) > -1
            }, empty: function () {
                b6 = [];
                return this
            }, disable: function () {
                b6 = ca = b7 = bS;
                return this
            }, disabled: function () {
                return !b6
            }, lock: function () {
                ca = bS;
                if (!b7) {
                    b9.disable()
                }
                return this
            }, locked: function () {
                return !ca
            }, fireWith: function (cc, cb) {
                cb = cb || [];
                cb = [cc, cb.slice ? cb.slice() : cb];
                if (b6 && (!b1 || ca)) {
                    if (b2) {
                        ca.push(cb)
                    } else {
                        e(cb)
                    }
                }
                return this
            }, fire: function () {
                b9.fireWith(this, arguments);
                return this
            }, fired: function () {
                return !!b1
            }
        };
        return b9
    };
    aw.extend({
        Deferred: function (b1) {
            var b4 = [["resolve", "done", aw.Callbacks("once memory"), "resolved"], ["reject", "fail", aw.Callbacks("once memory"), "rejected"], ["notify", "progress", aw.Callbacks("memory")]],
                b3 = "pending", b2 = {
                    state: function () {
                        return b3
                    }, always: function () {
                        e.done(arguments).fail(arguments);
                        return this
                    }, then: function () {
                        var b5 = arguments;
                        return aw.Deferred(function (b6) {
                            aw.each(b4, function (b9, ca) {
                                var b7 = ca[0], b8 = aw.isFunction(b5[b9]) && b5[b9];
                                e[ca[1]](function () {
                                    var cb = b8 && b8.apply(this, arguments);
                                    if (cb && aw.isFunction(cb.promise)) {
                                        cb.promise().done(b6.resolve).fail(b6.reject).progress(b6.notify)
                                    } else {
                                        b6[b7 + "With"](this === b2 ? b6.promise() : this, b8 ? [cb] : arguments)
                                    }
                                })
                            });
                            b5 = null
                        }).promise()
                    }, promise: function (b5) {
                        return b5 != null ? aw.extend(b5, b2) : b2
                    }
                }, e = {};
            b2.pipe = b2.then;
            aw.each(b4, function (b5, b8) {
                var b6 = b8[2], b7 = b8[3];
                b2[b8[1]] = b6.add;
                if (b7) {
                    b6.add(function () {
                        b3 = b7
                    }, b4[b5 ^ 1][2].disable, b4[2][2].lock)
                }
                e[b8[0]] = function () {
                    e[b8[0] + "With"](this === e ? b2 : this, arguments);
                    return this
                };
                e[b8[0] + "With"] = b6.fireWith
            });
            b2.promise(e);
            if (b1) {
                b1.call(e, e)
            }
            return e
        }, when: function (b8) {
            var b1 = 0, b7 = C.call(arguments), b2 = b7.length,
                b5 = b2 !== 1 || (b8 && aw.isFunction(b8.promise)) ? b2 : 0, e = b5 === 1 ? b8 : aw.Deferred(),
                b9 = function (cb, ca, cc) {
                    return function (cd) {
                        ca[cb] = this;
                        cc[cb] = arguments.length > 1 ? C.call(arguments) : cd;
                        if (cc === b4) {
                            e.notifyWith(ca, cc)
                        } else {
                            if (!(--b5)) {
                                e.resolveWith(ca, cc)
                            }
                        }
                    }
                }, b4, b3, b6;
            if (b2 > 1) {
                b4 = new Array(b2);
                b3 = new Array(b2);
                b6 = new Array(b2);
                for (; b1 < b2; b1++) {
                    if (b7[b1] && aw.isFunction(b7[b1].promise)) {
                        b7[b1].promise().done(b9(b1, b6, b7)).fail(e.reject).progress(b9(b1, b3, b4))
                    } else {
                        --b5
                    }
                }
            }
            if (!b5) {
                e.resolveWith(b6, b7)
            }
            return e.promise()
        }
    });
    aw.support = (function () {
        var cc, b2, b1, cb, ca, b8, b6, b5, b9, b7, b3 = V.createElement("div");
        b3.setAttribute("className", "t");
        b3.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
        b2 = b3.getElementsByTagName("*");
        b1 = b3.getElementsByTagName("a")[0];
        if (!b2 || !b1 || !b2.length) {
            return {}
        }
        cb = V.createElement("select");
        ca = cb.appendChild(V.createElement("option"));
        b8 = b3.getElementsByTagName("input")[0];
        b1.style.cssText = "top:1px;float:left;opacity:.5";
        cc = {
            getSetAttribute: b3.className !== "t",
            leadingWhitespace: b3.firstChild.nodeType === 3,
            tbody: !b3.getElementsByTagName("tbody").length,
            htmlSerialize: !!b3.getElementsByTagName("link").length,
            style: /top/.test(b1.getAttribute("style")),
            hrefNormalized: b1.getAttribute("href") === "/a",
            opacity: /^0.5/.test(b1.style.opacity),
            cssFloat: !!b1.style.cssFloat,
            checkOn: !!b8.value,
            optSelected: ca.selected,
            enctype: !!V.createElement("form").enctype,
            html5Clone: V.createElement("nav").cloneNode(true).outerHTML !== "<:nav></:nav>",
            boxModel: V.compatMode === "CSS1Compat",
            deleteExpando: true,
            noCloneEvent: true,
            inlineBlockNeedsLayout: false,
            shrinkWrapBlocks: false,
            reliableMarginRight: true,
            boxSizingReliable: true,
            pixelPosition: false
        };
        b8.checked = true;
        cc.noCloneChecked = b8.cloneNode(true).checked;
        cb.disabled = true;
        cc.optDisabled = !ca.disabled;
        try {
            delete b3.test
        } catch (b4) {
            cc.deleteExpando = false
        }
        b8 = V.createElement("input");
        b8.setAttribute("value", "");
        cc.input = b8.getAttribute("value") === "";
        b8.value = "t";
        b8.setAttribute("type", "radio");
        cc.radioValue = b8.value === "t";
        b8.setAttribute("checked", "t");
        b8.setAttribute("name", "t");
        b6 = V.createDocumentFragment();
        b6.appendChild(b8);
        cc.appendChecked = b8.checked;
        cc.checkClone = b6.cloneNode(true).cloneNode(true).lastChild.checked;
        if (b3.attachEvent) {
            b3.attachEvent("onclick", function () {
                cc.noCloneEvent = false
            });
            b3.cloneNode(true).click()
        }
        for (b7 in {submit: true, change: true, focusin: true}) {
            b3.setAttribute(b5 = "on" + b7, "t");
            cc[b7 + "Bubbles"] = b5 in bU || b3.attributes[b5].expando === false
        }
        b3.style.backgroundClip = "content-box";
        b3.cloneNode(true).style.backgroundClip = "";
        cc.clearCloneStyle = b3.style.backgroundClip === "content-box";
        aw(function () {
            var cd, cf, cg,
                ce = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
                e = V.getElementsByTagName("body")[0];
            if (!e) {
                return
            }
            cd = V.createElement("div");
            cd.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px";
            e.appendChild(cd).appendChild(b3);
            b3.innerHTML = "<table><tr><td></td><td>t</td></tr></table>";
            cg = b3.getElementsByTagName("td");
            cg[0].style.cssText = "padding:0;margin:0;border:0;display:none";
            b9 = (cg[0].offsetHeight === 0);
            cg[0].style.display = "";
            cg[1].style.display = "none";
            cc.reliableHiddenOffsets = b9 && (cg[0].offsetHeight === 0);
            b3.innerHTML = "";
            b3.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;";
            cc.boxSizing = (b3.offsetWidth === 4);
            cc.doesNotIncludeMarginInBodyOffset = (e.offsetTop !== 1);
            if (bU.getComputedStyle) {
                cc.pixelPosition = (bU.getComputedStyle(b3, null) || {}).top !== "1%";
                cc.boxSizingReliable = (bU.getComputedStyle(b3, null) || {width: "4px"}).width === "4px";
                cf = b3.appendChild(V.createElement("div"));
                cf.style.cssText = b3.style.cssText = ce;
                cf.style.marginRight = cf.style.width = "0";
                b3.style.width = "1px";
                cc.reliableMarginRight = !parseFloat((bU.getComputedStyle(cf, null) || {}).marginRight)
            }
            if (typeof b3.style.zoom !== "undefined") {
                b3.innerHTML = "";
                b3.style.cssText = ce + "width:1px;padding:1px;display:inline;zoom:1";
                cc.inlineBlockNeedsLayout = (b3.offsetWidth === 3);
                b3.style.display = "block";
                b3.innerHTML = "<div></div>";
                b3.firstChild.style.width = "5px";
                cc.shrinkWrapBlocks = (b3.offsetWidth !== 3);
                e.style.zoom = 1
            }
            e.removeChild(cd);
            cd = b3 = cg = cf = null
        });
        b2 = cb = b6 = ca = b1 = b8 = null;
        return cc
    })();
    var aI = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/, bb = /([A-Z])/g;

    function ap(b2, b7, b1, b8) {
        if (!aw.acceptData(b2)) {
            return
        }
        var ca, b9, b5 = aw.expando, b3 = typeof b7 === "string", b6 = b2.nodeType, e = b6 ? aw.cache : b2,
            b4 = b6 ? b2[b5] : b2[b5] && b5;
        if ((!b4 || !e[b4] || (!b8 && !e[b4].data)) && b3 && b1 === bS) {
            return
        }
        if (!b4) {
            if (b6) {
                b2[b5] = b4 = w.pop() || aw.guid++
            } else {
                b4 = b5
            }
        }
        if (!e[b4]) {
            e[b4] = {};
            if (!b6) {
                e[b4].toJSON = aw.noop
            }
        }
        if (typeof b7 === "object" || typeof b7 === "function") {
            if (b8) {
                e[b4] = aw.extend(e[b4], b7)
            } else {
                e[b4].data = aw.extend(e[b4].data, b7)
            }
        }
        ca = e[b4];
        if (!b8) {
            if (!ca.data) {
                ca.data = {}
            }
            ca = ca.data
        }
        if (b1 !== bS) {
            ca[aw.camelCase(b7)] = b1
        }
        if (b3) {
            b9 = ca[b7];
            if (b9 == null) {
                b9 = ca[aw.camelCase(b7)]
            }
        } else {
            b9 = ca
        }
        return b9
    }

    function aq(b1, b6, b7) {
        if (!aw.acceptData(b1)) {
            return
        }
        var b8, b2, b5, b4 = b1.nodeType, e = b4 ? aw.cache : b1, b3 = b4 ? b1[aw.expando] : aw.expando;
        if (!e[b3]) {
            return
        }
        if (b6) {
            b8 = b7 ? e[b3] : e[b3].data;
            if (b8) {
                if (!aw.isArray(b6)) {
                    if (b6 in b8) {
                        b6 = [b6]
                    } else {
                        b6 = aw.camelCase(b6);
                        if (b6 in b8) {
                            b6 = [b6]
                        } else {
                            b6 = b6.split(" ")
                        }
                    }
                } else {
                    b6 = b6.concat(aw.map(b6, aw.camelCase))
                }
                for (b2 = 0, b5 = b6.length; b2 < b5; b2++) {
                    delete b8[b6[b2]]
                }
                if (!(b7 ? at : aw.isEmptyObject)(b8)) {
                    return
                }
            }
        }
        if (!b7) {
            delete e[b3].data;
            if (!at(e[b3])) {
                return
            }
        }
        if (b4) {
            aw.cleanData([b1], true)
        } else {
            if (aw.support.deleteExpando || e != e.window) {
                delete e[b3]
            } else {
                e[b3] = null
            }
        }
    }

    aw.extend({
        cache: {},
        expando: "jQuery" + (F + Math.random()).replace(/\D/g, ""),
        noData: {embed: true, object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000", applet: true},
        hasData: function (e) {
            e = e.nodeType ? aw.cache[e[aw.expando]] : e[aw.expando];
            return !!e && !at(e)
        },
        data: function (b1, b2, e) {
            return ap(b1, b2, e, false)
        },
        removeData: function (e, b1) {
            return aq(e, b1, false)
        },
        _data: function (b1, b2, e) {
            return ap(b1, b2, e, true)
        },
        _removeData: function (e, b1) {
            return aq(e, b1, true)
        },
        acceptData: function (e) {
            var b1 = e.nodeName && aw.noData[e.nodeName.toLowerCase()];
            return !b1 || b1 !== true && e.getAttribute("classid") === b1
        }
    });
    aw.fn.extend({
        data: function (b4, b6) {
            var e, b5, b2 = this[0], b3 = 0, b1 = null;
            if (b4 === bS) {
                if (this.length) {
                    b1 = aw.data(b2);
                    if (b2.nodeType === 1 && !aw._data(b2, "parsedAttrs")) {
                        e = b2.attributes;
                        for (; b3 < e.length; b3++) {
                            b5 = e[b3].name;
                            if (!b5.indexOf("data-")) {
                                b5 = aw.camelCase(b5.substring(5));
                                S(b2, b5, b1[b5])
                            }
                        }
                        aw._data(b2, "parsedAttrs", true)
                    }
                }
                return b1
            }
            if (typeof b4 === "object") {
                return this.each(function () {
                    aw.data(this, b4)
                })
            }
            return aw.access(this, function (b7) {
                if (b7 === bS) {
                    return b2 ? S(b2, b4, aw.data(b2, b4)) : null
                }
                this.each(function () {
                    aw.data(this, b4, b7)
                })
            }, null, b6, arguments.length > 1, null, true)
        }, removeData: function (e) {
            return this.each(function () {
                aw.removeData(this, e)
            })
        }
    });

    function S(b3, b4, b1) {
        if (b1 === bS && b3.nodeType === 1) {
            var b5 = "data-" + b4.replace(bb, "-$1").toLowerCase();
            b1 = b3.getAttribute(b5);
            if (typeof b1 === "string") {
                try {
                    b1 = b1 === "true" ? true : b1 === "false" ? false : b1 === "null" ? null : +b1 + "" === b1 ? +b1 : aI.test(b1) ? aw.parseJSON(b1) : b1
                } catch (b2) {
                }
                aw.data(b3, b4, b1)
            } else {
                b1 = bS
            }
        }
        return b1
    }

    function at(b1) {
        var e;
        for (e in b1) {
            if (e === "data" && aw.isEmptyObject(b1[e])) {
                continue
            }
            if (e !== "toJSON") {
                return false
            }
        }
        return true
    }

    aw.extend({
        queue: function (b1, b3, e) {
            var b2;
            if (b1) {
                b3 = (b3 || "fx") + "queue";
                b2 = aw._data(b1, b3);
                if (e) {
                    if (!b2 || aw.isArray(e)) {
                        b2 = aw._data(b1, b3, aw.makeArray(e))
                    } else {
                        b2.push(e)
                    }
                }
                return b2 || []
            }
        }, dequeue: function (e, b6) {
            b6 = b6 || "fx";
            var b4 = aw.queue(e, b6), b5 = b4.length, b1 = b4.shift(), b2 = aw._queueHooks(e, b6), b3 = function () {
                aw.dequeue(e, b6)
            };
            if (b1 === "inprogress") {
                b1 = b4.shift();
                b5--
            }
            b2.cur = b1;
            if (b1) {
                if (b6 === "fx") {
                    b4.unshift("inprogress")
                }
                delete b2.stop;
                b1.call(e, b3, b2)
            }
            if (!b5 && b2) {
                b2.empty.fire()
            }
        }, _queueHooks: function (e, b2) {
            var b1 = b2 + "queueHooks";
            return aw._data(e, b1) || aw._data(e, b1, {
                empty: aw.Callbacks("once memory").add(function () {
                    aw._removeData(e, b2 + "queue");
                    aw._removeData(e, b1)
                })
            })
        }
    });
    aw.fn.extend({
        queue: function (b2, e) {
            var b1 = 2;
            if (typeof b2 !== "string") {
                e = b2;
                b2 = "fx";
                b1--
            }
            if (arguments.length < b1) {
                return aw.queue(this[0], b2)
            }
            return e === bS ? this : this.each(function () {
                var b3 = aw.queue(this, b2, e);
                aw._queueHooks(this, b2);
                if (b2 === "fx" && b3[0] !== "inprogress") {
                    aw.dequeue(this, b2)
                }
            })
        }, dequeue: function (e) {
            return this.each(function () {
                aw.dequeue(this, e)
            })
        }, delay: function (e, b1) {
            e = aw.fx ? aw.fx.speeds[e] || e : e;
            b1 = b1 || "fx";
            return this.queue(b1, function (b3, b2) {
                var b4 = setTimeout(b3, e);
                b2.stop = function () {
                    clearTimeout(b4)
                }
            })
        }, clearQueue: function (e) {
            return this.queue(e || "fx", [])
        }, promise: function (b7, b4) {
            var b6, e = 1, b1 = aw.Deferred(), b2 = this, b3 = this.length, b5 = function () {
                if (!(--e)) {
                    b1.resolveWith(b2, [b2])
                }
            };
            if (typeof b7 !== "string") {
                b4 = b7;
                b7 = bS
            }
            b7 = b7 || "fx";
            while (b3--) {
                b6 = aw._data(b2[b3], b7 + "queueHooks");
                if (b6 && b6.empty) {
                    e++;
                    b6.empty.add(b5)
                }
            }
            b5();
            return b1.promise(b4)
        }
    });
    var az, r, aL = /[\t\r\n]/g, bp = /\r/g, aV = /^(?:input|select|textarea|button|object)$/i, aN = /^(?:a|area)$/i,
        aH = /^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,
        bD = /^(?:checked|selected)$/i, ah = aw.support.getSetAttribute, ai = aw.support.input;
    aw.fn.extend({
        attr: function (e, b1) {
            return aw.access(this, aw.attr, e, b1, arguments.length > 1)
        }, removeAttr: function (e) {
            return this.each(function () {
                aw.removeAttr(this, e)
            })
        }, prop: function (e, b1) {
            return aw.access(this, aw.prop, e, b1, arguments.length > 1)
        }, removeProp: function (e) {
            e = aw.propFix[e] || e;
            return this.each(function () {
                try {
                    this[e] = bS;
                    delete this[e]
                } catch (b1) {
                }
            })
        }, addClass: function (b8) {
            var e, b3, b2, b1, b5, b4 = 0, b6 = this.length, b7 = typeof b8 === "string" && b8;
            if (aw.isFunction(b8)) {
                return this.each(function (b9) {
                    aw(this).addClass(b8.call(this, b9, this.className))
                })
            }
            if (b7) {
                e = (b8 || "").match(B) || [];
                for (; b4 < b6; b4++) {
                    b3 = this[b4];
                    b2 = b3.nodeType === 1 && (b3.className ? (" " + b3.className + " ").replace(aL, " ") : " ");
                    if (b2) {
                        b5 = 0;
                        while ((b1 = e[b5++])) {
                            if (b2.indexOf(" " + b1 + " ") < 0) {
                                b2 += b1 + " "
                            }
                        }
                        b3.className = aw.trim(b2)
                    }
                }
            }
            return this
        }, removeClass: function (b8) {
            var e, b3, b2, b1, b5, b4 = 0, b6 = this.length,
                b7 = arguments.length === 0 || typeof b8 === "string" && b8;
            if (aw.isFunction(b8)) {
                return this.each(function (b9) {
                    aw(this).removeClass(b8.call(this, b9, this.className))
                })
            }
            if (b7) {
                e = (b8 || "").match(B) || [];
                for (; b4 < b6; b4++) {
                    b3 = this[b4];
                    b2 = b3.nodeType === 1 && (b3.className ? (" " + b3.className + " ").replace(aL, " ") : "");
                    if (b2) {
                        b5 = 0;
                        while ((b1 = e[b5++])) {
                            while (b2.indexOf(" " + b1 + " ") >= 0) {
                                b2 = b2.replace(" " + b1 + " ", " ")
                            }
                        }
                        b3.className = b8 ? aw.trim(b2) : ""
                    }
                }
            }
            return this
        }, toggleClass: function (b3, b1) {
            var b2 = typeof b3, e = typeof b1 === "boolean";
            if (aw.isFunction(b3)) {
                return this.each(function (b4) {
                    aw(this).toggleClass(b3.call(this, b4, this.className, b1), b1)
                })
            }
            return this.each(function () {
                if (b2 === "string") {
                    var b4, b6 = 0, b7 = aw(this), b8 = b1, b5 = b3.match(B) || [];
                    while ((b4 = b5[b6++])) {
                        b8 = e ? b8 : !b7.hasClass(b4);
                        b7[b8 ? "addClass" : "removeClass"](b4)
                    }
                } else {
                    if (b2 === "undefined" || b2 === "boolean") {
                        if (this.className) {
                            aw._data(this, "__className__", this.className)
                        }
                        this.className = this.className || b3 === false ? "" : aw._data(this, "__className__") || ""
                    }
                }
            })
        }, hasClass: function (b3) {
            var e = " " + b3 + " ", b1 = 0, b2 = this.length;
            for (; b1 < b2; b1++) {
                if (this[b1].nodeType === 1 && (" " + this[b1].className + " ").replace(aL, " ").indexOf(e) >= 0) {
                    return true
                }
            }
            return false
        }, val: function (b4) {
            var b1, b3, b2, e = this[0];
            if (!arguments.length) {
                if (e) {
                    b1 = aw.valHooks[e.type] || aw.valHooks[e.nodeName.toLowerCase()];
                    if (b1 && "get" in b1 && (b3 = b1.get(e, "value")) !== bS) {
                        return b3
                    }
                    b3 = e.value;
                    return typeof b3 === "string" ? b3.replace(bp, "") : b3 == null ? "" : b3
                }
                return
            }
            b2 = aw.isFunction(b4);
            return this.each(function (b5) {
                var b7, b6 = aw(this);
                if (this.nodeType !== 1) {
                    return
                }
                if (b2) {
                    b7 = b4.call(this, b5, b6.val())
                } else {
                    b7 = b4
                }
                if (b7 == null) {
                    b7 = ""
                } else {
                    if (typeof b7 === "number") {
                        b7 += ""
                    } else {
                        if (aw.isArray(b7)) {
                            b7 = aw.map(b7, function (b8) {
                                return b8 == null ? "" : b8 + ""
                            })
                        }
                    }
                }
                b1 = aw.valHooks[this.type] || aw.valHooks[this.nodeName.toLowerCase()];
                if (!b1 || !("set" in b1) || b1.set(this, b7, "value") === bS) {
                    this.value = b7
                }
            })
        }
    });
    aw.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var b1 = e.attributes.value;
                    return !b1 || b1.specified ? e.value : e.text
                }
            }, select: {
                get: function (e) {
                    var b7, b5, b6 = e.options, b2 = e.selectedIndex, b4 = e.type === "select-one" || b2 < 0,
                        b8 = b4 ? null : [], b3 = b4 ? b2 + 1 : b6.length, b1 = b2 < 0 ? b3 : b4 ? b2 : 0;
                    for (; b1 < b3; b1++) {
                        b5 = b6[b1];
                        if ((b5.selected || b1 === b2) && (aw.support.optDisabled ? !b5.disabled : b5.getAttribute("disabled") === null) && (!b5.parentNode.disabled || !aw.nodeName(b5.parentNode, "optgroup"))) {
                            b7 = aw(b5).val();
                            if (b4) {
                                return b7
                            }
                            b8.push(b7)
                        }
                    }
                    return b8
                }, set: function (e, b1) {
                    var b2 = aw.makeArray(b1);
                    aw(e).find("option").each(function () {
                        this.selected = aw.inArray(aw(this).val(), b2) >= 0
                    });
                    if (!b2.length) {
                        e.selectedIndex = -1
                    }
                    return b2
                }
            }
        },
        attr: function (e, b2, b6) {
            var b5, b1, b3, b4 = e.nodeType;
            if (!e || b4 === 3 || b4 === 8 || b4 === 2) {
                return
            }
            if (typeof e.getAttribute === "undefined") {
                return aw.prop(e, b2, b6)
            }
            b3 = b4 !== 1 || !aw.isXMLDoc(e);
            if (b3) {
                b2 = b2.toLowerCase();
                b1 = aw.attrHooks[b2] || (aH.test(b2) ? r : az)
            }
            if (b6 !== bS) {
                if (b6 === null) {
                    aw.removeAttr(e, b2)
                } else {
                    if (b1 && b3 && "set" in b1 && (b5 = b1.set(e, b6, b2)) !== bS) {
                        return b5
                    } else {
                        e.setAttribute(b2, b6 + "");
                        return b6
                    }
                }
            } else {
                if (b1 && b3 && "get" in b1 && (b5 = b1.get(e, b2)) !== null) {
                    return b5
                } else {
                    if (typeof e.getAttribute !== "undefined") {
                        b5 = e.getAttribute(b2)
                    }
                    return b5 == null ? bS : b5
                }
            }
        },
        removeAttr: function (b1, b5) {
            var b3, b4, b2 = 0, e = b5 && b5.match(B);
            if (e && b1.nodeType === 1) {
                while ((b3 = e[b2++])) {
                    b4 = aw.propFix[b3] || b3;
                    if (aH.test(b3)) {
                        if (!ah && bD.test(b3)) {
                            b1[aw.camelCase("default-" + b3)] = b1[b4] = false
                        } else {
                            b1[b4] = false
                        }
                    } else {
                        aw.attr(b1, b3, "")
                    }
                    b1.removeAttribute(ah ? b3 : b4)
                }
            }
        },
        attrHooks: {
            type: {
                set: function (e, b2) {
                    if (!aw.support.radioValue && b2 === "radio" && aw.nodeName(e, "input")) {
                        var b1 = e.value;
                        e.setAttribute("type", b2);
                        if (b1) {
                            e.value = b1
                        }
                        return b2
                    }
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function (e, b2, b6) {
            var b5, b1, b3, b4 = e.nodeType;
            if (!e || b4 === 3 || b4 === 8 || b4 === 2) {
                return
            }
            b3 = b4 !== 1 || !aw.isXMLDoc(e);
            if (b3) {
                b2 = aw.propFix[b2] || b2;
                b1 = aw.propHooks[b2]
            }
            if (b6 !== bS) {
                if (b1 && "set" in b1 && (b5 = b1.set(e, b6, b2)) !== bS) {
                    return b5
                } else {
                    return (e[b2] = b6)
                }
            } else {
                if (b1 && "get" in b1 && (b5 = b1.get(e, b2)) !== null) {
                    return b5
                } else {
                    return e[b2]
                }
            }
        },
        propHooks: {
            tabIndex: {
                get: function (b1) {
                    var e = b1.getAttributeNode("tabindex");
                    return e && e.specified ? parseInt(e.value, 10) : aV.test(b1.nodeName) || aN.test(b1.nodeName) && b1.href ? 0 : bS
                }
            }
        }
    });
    r = {
        get: function (b2, b3) {
            var b4 = aw.prop(b2, b3), e = typeof b4 === "boolean" && b2.getAttribute(b3),
                b1 = typeof b4 === "boolean" ? ai && ah ? e != null : bD.test(b3) ? b2[aw.camelCase("default-" + b3)] : !!e : b2.getAttributeNode(b3);
            return b1 && b1.value !== false ? b3.toLowerCase() : bS
        }, set: function (e, b2, b1) {
            if (b2 === false) {
                aw.removeAttr(e, b1)
            } else {
                if (ai && ah || !bD.test(b1)) {
                    e.setAttribute(!ah && aw.propFix[b1] || b1, b1)
                } else {
                    e[aw.camelCase("default-" + b1)] = e[b1] = true
                }
            }
            return b1
        }
    };
    if (!ai || !ah) {
        aw.attrHooks.value = {
            get: function (e, b1) {
                var b2 = e.getAttributeNode(b1);
                return aw.nodeName(e, "input") ? e.defaultValue : b2 && b2.specified ? b2.value : bS
            }, set: function (e, b2, b1) {
                if (aw.nodeName(e, "input")) {
                    e.defaultValue = b2
                } else {
                    return az && az.set(e, b2, b1)
                }
            }
        }
    }
    if (!ah) {
        az = aw.valHooks.button = {
            get: function (e, b1) {
                var b2 = e.getAttributeNode(b1);
                return b2 && (b1 === "id" || b1 === "name" || b1 === "coords" ? b2.value !== "" : b2.specified) ? b2.value : bS
            }, set: function (e, b3, b1) {
                var b2 = e.getAttributeNode(b1);
                if (!b2) {
                    e.setAttributeNode((b2 = e.ownerDocument.createAttribute(b1)))
                }
                b2.value = b3 += "";
                return b1 === "value" || b3 === e.getAttribute(b1) ? b3 : bS
            }
        };
        aw.attrHooks.contenteditable = {
            get: az.get, set: function (e, b2, b1) {
                az.set(e, b2 === "" ? false : b2, b1)
            }
        };
        aw.each(["width", "height"], function (e, b1) {
            aw.attrHooks[b1] = aw.extend(aw.attrHooks[b1], {
                set: function (b2, b3) {
                    if (b3 === "") {
                        b2.setAttribute(b1, "auto");
                        return b3
                    }
                }
            })
        })
    }
    if (!aw.support.hrefNormalized) {
        aw.each(["href", "src", "width", "height"], function (e, b1) {
            aw.attrHooks[b1] = aw.extend(aw.attrHooks[b1], {
                get: function (b2) {
                    var b3 = b2.getAttribute(b1, 2);
                    return b3 == null ? bS : b3
                }
            })
        });
        aw.each(["href", "src"], function (e, b1) {
            aw.propHooks[b1] = {
                get: function (b2) {
                    return b2.getAttribute(b1, 4)
                }
            }
        })
    }
    if (!aw.support.style) {
        aw.attrHooks.style = {
            get: function (e) {
                return e.style.cssText || bS
            }, set: function (e, b1) {
                return (e.style.cssText = b1 + "")
            }
        }
    }
    if (!aw.support.optSelected) {
        aw.propHooks.selected = aw.extend(aw.propHooks.selected, {
            get: function (e) {
                var b1 = e.parentNode;
                if (b1) {
                    b1.selectedIndex;
                    if (b1.parentNode) {
                        b1.parentNode.selectedIndex
                    }
                }
                return null
            }
        })
    }
    if (!aw.support.enctype) {
        aw.propFix.enctype = "encoding"
    }
    if (!aw.support.checkOn) {
        aw.each(["radio", "checkbox"], function () {
            aw.valHooks[this] = {
                get: function (e) {
                    return e.getAttribute("value") === null ? "on" : e.value
                }
            }
        })
    }
    aw.each(["radio", "checkbox"], function () {
        aw.valHooks[this] = aw.extend(aw.valHooks[this], {
            set: function (e, b1) {
                if (aw.isArray(b1)) {
                    return (e.checked = aw.inArray(aw(e).val(), b1) >= 0)
                }
            }
        })
    });
    var aX = /^(?:input|select|textarea)$/i, a5 = /^key/, a9 = /^(?:mouse|contextmenu)|click/,
        aW = /^(?:focusinfocus|focusoutblur)$/, bA = /^([^.]*)(?:\.(.+)|)$/;

    function aU() {
        return true
    }

    function aT() {
        return false
    }

    aw.event = {
        global: {},
        add: function (b1, cg, b7, e, cb) {
            var b6, b3, ce, b4, cd, b5, cc, b8, cf, b9, ca, b2 = b1.nodeType !== 3 && b1.nodeType !== 8 && aw._data(b1);
            if (!b2) {
                return
            }
            if (b7.handler) {
                b6 = b7;
                b7 = b6.handler;
                cb = b6.selector
            }
            if (!b7.guid) {
                b7.guid = aw.guid++
            }
            if (!(b4 = b2.events)) {
                b4 = b2.events = {}
            }
            if (!(b3 = b2.handle)) {
                b3 = b2.handle = function (ch) {
                    return typeof aw !== "undefined" && (!ch || aw.event.triggered !== ch.type) ? aw.event.dispatch.apply(b3.elem, arguments) : bS
                };
                b3.elem = b1
            }
            cg = (cg || "").match(B) || [""];
            cd = cg.length;
            while (cd--) {
                ce = bA.exec(cg[cd]) || [];
                cf = ca = ce[1];
                b9 = (ce[2] || "").split(".").sort();
                cc = aw.event.special[cf] || {};
                cf = (cb ? cc.delegateType : cc.bindType) || cf;
                cc = aw.event.special[cf] || {};
                b5 = aw.extend({
                    type: cf,
                    origType: ca,
                    data: e,
                    handler: b7,
                    guid: b7.guid,
                    selector: cb,
                    needsContext: cb && aw.expr.match.needsContext.test(cb),
                    namespace: b9.join(".")
                }, b6);
                if (!(b8 = b4[cf])) {
                    b8 = b4[cf] = [];
                    b8.delegateCount = 0;
                    if (!cc.setup || cc.setup.call(b1, e, b9, b3) === false) {
                        if (b1.addEventListener) {
                            b1.addEventListener(cf, b3, false)
                        } else {
                            if (b1.attachEvent) {
                                b1.attachEvent("on" + cf, b3)
                            }
                        }
                    }
                }
                if (cc.add) {
                    cc.add.call(b1, b5);
                    if (!b5.handler.guid) {
                        b5.handler.guid = b7.guid
                    }
                }
                if (cb) {
                    b8.splice(b8.delegateCount++, 0, b5)
                } else {
                    b8.push(b5)
                }
                aw.event.global[cf] = true
            }
            b1 = null
        },
        remove: function (e, cg, b4, cb, b7) {
            var b6, b9, ce, b2, cd, b3, cc, b5, cf, b8, ca, b1 = aw.hasData(e) && aw._data(e);
            if (!b1 || !(b2 = b1.events)) {
                return
            }
            cg = (cg || "").match(B) || [""];
            cd = cg.length;
            while (cd--) {
                ce = bA.exec(cg[cd]) || [];
                cf = ca = ce[1];
                b8 = (ce[2] || "").split(".").sort();
                if (!cf) {
                    for (cf in b2) {
                        aw.event.remove(e, cf + cg[cd], b4, cb, true)
                    }
                    continue
                }
                cc = aw.event.special[cf] || {};
                cf = (cb ? cc.delegateType : cc.bindType) || cf;
                b5 = b2[cf] || [];
                ce = ce[2] && new RegExp("(^|\\.)" + b8.join("\\.(?:.*\\.|)") + "(\\.|$)");
                b9 = b6 = b5.length;
                while (b6--) {
                    b3 = b5[b6];
                    if ((b7 || ca === b3.origType) && (!b4 || b4.guid === b3.guid) && (!ce || ce.test(b3.namespace)) && (!cb || cb === b3.selector || cb === "**" && b3.selector)) {
                        b5.splice(b6, 1);
                        if (b3.selector) {
                            b5.delegateCount--
                        }
                        if (cc.remove) {
                            cc.remove.call(e, b3)
                        }
                    }
                }
                if (b9 && !b5.length) {
                    if (!cc.teardown || cc.teardown.call(e, b8, b1.handle) === false) {
                        aw.removeEvent(e, cf, b1.handle)
                    }
                    delete b2[cf]
                }
            }
            if (aw.isEmptyObject(b2)) {
                delete b1.handle;
                aw._removeData(e, "events")
            }
        },
        trigger: function (b6, b3, b5, cb) {
            var b9, b2, ce, b1, cc, b8, cd, b7 = [b5 || V], cf = b6.type || b6,
                ca = b6.namespace ? b6.namespace.split(".") : [];
            b2 = ce = b5 = b5 || V;
            if (b5.nodeType === 3 || b5.nodeType === 8) {
                return
            }
            if (aW.test(cf + aw.event.triggered)) {
                return
            }
            if (cf.indexOf(".") >= 0) {
                ca = cf.split(".");
                cf = ca.shift();
                ca.sort()
            }
            cc = cf.indexOf(":") < 0 && "on" + cf;
            b6 = b6[aw.expando] ? b6 : new aw.Event(cf, typeof b6 === "object" && b6);
            b6.isTrigger = true;
            b6.namespace = ca.join(".");
            b6.namespace_re = b6.namespace ? new RegExp("(^|\\.)" + ca.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
            b6.result = bS;
            if (!b6.target) {
                b6.target = b5
            }
            b3 = b3 == null ? [b6] : aw.makeArray(b3, [b6]);
            cd = aw.event.special[cf] || {};
            if (!cb && cd.trigger && cd.trigger.apply(b5, b3) === false) {
                return
            }
            if (!cb && !cd.noBubble && !aw.isWindow(b5)) {
                b1 = cd.delegateType || cf;
                if (!aW.test(b1 + cf)) {
                    b2 = b2.parentNode
                }
                for (; b2; b2 = b2.parentNode) {
                    b7.push(b2);
                    ce = b2
                }
                if (ce === (b5.ownerDocument || V)) {
                    b7.push(ce.defaultView || ce.parentWindow || bU)
                }
            }
            b9 = 0;
            while ((b2 = b7[b9++]) && !b6.isPropagationStopped()) {
                b6.type = b9 > 1 ? b1 : cd.bindType || cf;
                b8 = (aw._data(b2, "events") || {})[b6.type] && aw._data(b2, "handle");
                if (b8) {
                    b8.apply(b2, b3)
                }
                b8 = cc && b2[cc];
                if (b8 && aw.acceptData(b2) && b8.apply && b8.apply(b2, b3) === false) {
                    b6.preventDefault()
                }
            }
            b6.type = cf;
            if (!cb && !b6.isDefaultPrevented()) {
                if ((!cd._default || cd._default.apply(b5.ownerDocument, b3) === false) && !(cf === "click" && aw.nodeName(b5, "a")) && aw.acceptData(b5)) {
                    if (cc && b5[cf] && !aw.isWindow(b5)) {
                        ce = b5[cc];
                        if (ce) {
                            b5[cc] = null
                        }
                        aw.event.triggered = cf;
                        try {
                            b5[cf]()
                        } catch (b4) {
                        }
                        aw.event.triggered = bS;
                        if (ce) {
                            b5[cc] = ce
                        }
                    }
                }
            }
            return b6.result
        },
        dispatch: function (b1) {
            b1 = aw.event.fix(b1);
            var b5, b6, b8, b7, b2, b3 = [], e = C.call(arguments),
                b4 = (aw._data(this, "events") || {})[b1.type] || [], b9 = aw.event.special[b1.type] || {};
            e[0] = b1;
            b1.delegateTarget = this;
            if (b9.preDispatch && b9.preDispatch.call(this, b1) === false) {
                return
            }
            b3 = aw.event.handlers.call(this, b1, b4);
            b5 = 0;
            while ((b7 = b3[b5++]) && !b1.isPropagationStopped()) {
                b1.currentTarget = b7.elem;
                b6 = 0;
                while ((b2 = b7.handlers[b6++]) && !b1.isImmediatePropagationStopped()) {
                    if (!b1.namespace_re || b1.namespace_re.test(b2.namespace)) {
                        b1.handleObj = b2;
                        b1.data = b2.data;
                        b8 = ((aw.event.special[b2.origType] || {}).handle || b2.handler).apply(b7.elem, e);
                        if (b8 !== bS) {
                            if ((b1.result = b8) === false) {
                                b1.preventDefault();
                                b1.stopPropagation()
                            }
                        }
                    }
                }
            }
            if (b9.postDispatch) {
                b9.postDispatch.call(this, b1)
            }
            return b1.result
        },
        handlers: function (b2, b5) {
            var b6, b7, b8, b3, b4 = [], b1 = b5.delegateCount, e = b2.target;
            if (b1 && e.nodeType && (!b2.button || b2.type !== "click")) {
                for (; e != this; e = e.parentNode || this) {
                    if (e.disabled !== true || b2.type !== "click") {
                        b7 = [];
                        for (b6 = 0; b6 < b1; b6++) {
                            b3 = b5[b6];
                            b8 = b3.selector + " ";
                            if (b7[b8] === bS) {
                                b7[b8] = b3.needsContext ? aw(b8, this).index(e) >= 0 : aw.find(b8, this, null, [e]).length
                            }
                            if (b7[b8]) {
                                b7.push(b3)
                            }
                        }
                        if (b7.length) {
                            b4.push({elem: e, handlers: b7})
                        }
                    }
                }
            }
            if (b1 < b5.length) {
                b4.push({elem: this, handlers: b5.slice(b1)})
            }
            return b4
        },
        fix: function (b1) {
            if (b1[aw.expando]) {
                return b1
            }
            var b3, b5, b4 = b1, b2 = aw.event.fixHooks[b1.type] || {},
                e = b2.props ? this.props.concat(b2.props) : this.props;
            b1 = new aw.Event(b4);
            b3 = e.length;
            while (b3--) {
                b5 = e[b3];
                b1[b5] = b4[b5]
            }
            if (!b1.target) {
                b1.target = b4.srcElement || V
            }
            if (b1.target.nodeType === 3) {
                b1.target = b1.target.parentNode
            }
            b1.metaKey = !!b1.metaKey;
            return b2.filter ? b2.filter(b1, b4) : b1
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "), filter: function (e, b1) {
                if (e.which == null) {
                    e.which = b1.charCode != null ? b1.charCode : b1.keyCode
                }
                return e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (b3, b6) {
                var b4, b2, e, b1 = b6.button, b5 = b6.fromElement;
                if (b3.pageX == null && b6.clientX != null) {
                    b4 = b3.target.ownerDocument || V;
                    b2 = b4.documentElement;
                    e = b4.body;
                    b3.pageX = b6.clientX + (b2 && b2.scrollLeft || e && e.scrollLeft || 0) - (b2 && b2.clientLeft || e && e.clientLeft || 0);
                    b3.pageY = b6.clientY + (b2 && b2.scrollTop || e && e.scrollTop || 0) - (b2 && b2.clientTop || e && e.clientTop || 0)
                }
                if (!b3.relatedTarget && b5) {
                    b3.relatedTarget = b5 === b3.target ? b6.toElement : b5
                }
                if (!b3.which && b1 !== bS) {
                    b3.which = (b1 & 1 ? 1 : (b1 & 2 ? 3 : (b1 & 4 ? 2 : 0)))
                }
                return b3
            }
        },
        special: {
            load: {noBubble: true}, click: {
                trigger: function () {
                    if (aw.nodeName(this, "input") && this.type === "checkbox" && this.click) {
                        this.click();
                        return false
                    }
                }
            }, focus: {
                trigger: function () {
                    if (this !== V.activeElement && this.focus) {
                        try {
                            this.focus();
                            return false
                        } catch (b1) {
                        }
                    }
                }, delegateType: "focusin"
            }, blur: {
                trigger: function () {
                    if (this === V.activeElement && this.blur) {
                        this.blur();
                        return false
                    }
                }, delegateType: "focusout"
            }, beforeunload: {
                postDispatch: function (e) {
                    if (e.result !== bS) {
                        e.originalEvent.returnValue = e.result
                    }
                }
            }
        },
        simulate: function (b5, b3, b4, b1) {
            var b2 = aw.extend(new aw.Event(), b4, {type: b5, isSimulated: true, originalEvent: {}});
            if (b1) {
                aw.event.trigger(b2, null, b3)
            } else {
                aw.event.dispatch.call(b3, b2)
            }
            if (b2.isDefaultPrevented()) {
                b4.preventDefault()
            }
        }
    };
    aw.removeEvent = V.removeEventListener ? function (e, b2, b1) {
        if (e.removeEventListener) {
            e.removeEventListener(b2, b1, false)
        }
    } : function (e, b3, b1) {
        var b2 = "on" + b3;
        if (e.detachEvent) {
            if (typeof e[b2] === "undefined") {
                e[b2] = null
            }
            e.detachEvent(b2, b1)
        }
    };
    aw.Event = function (b1, e) {
        if (!(this instanceof aw.Event)) {
            return new aw.Event(b1, e)
        }
        if (b1 && b1.type) {
            this.originalEvent = b1;
            this.type = b1.type;
            this.isDefaultPrevented = (b1.defaultPrevented || b1.returnValue === false || b1.getPreventDefault && b1.getPreventDefault()) ? aU : aT
        } else {
            this.type = b1
        }
        if (e) {
            aw.extend(this, e)
        }
        this.timeStamp = b1 && b1.timeStamp || aw.now();
        this[aw.expando] = true
    };
    aw.Event.prototype = {
        isDefaultPrevented: aT,
        isPropagationStopped: aT,
        isImmediatePropagationStopped: aT,
        preventDefault: function () {
            var b1 = this.originalEvent;
            this.isDefaultPrevented = aU;
            if (!b1) {
                return
            }
            if (b1.preventDefault) {
                b1.preventDefault()
            } else {
                b1.returnValue = false
            }
        },
        stopPropagation: function () {
            var b1 = this.originalEvent;
            this.isPropagationStopped = aU;
            if (!b1) {
                return
            }
            if (b1.stopPropagation) {
                b1.stopPropagation()
            }
            b1.cancelBubble = true
        },
        stopImmediatePropagation: function () {
            this.isImmediatePropagationStopped = aU;
            this.stopPropagation()
        }
    };
    aw.each({mouseenter: "mouseover", mouseleave: "mouseout"}, function (b1, e) {
        aw.event.special[b1] = {
            delegateType: e, bindType: e, handle: function (b2) {
                var b5, b6 = this, b4 = b2.relatedTarget, b3 = b2.handleObj;
                if (!b4 || (b4 !== b6 && !aw.contains(b6, b4))) {
                    b2.type = b3.origType;
                    b5 = b3.handler.apply(this, arguments);
                    b2.type = e
                }
                return b5
            }
        }
    });
    if (!aw.support.submitBubbles) {
        aw.event.special.submit = {
            setup: function () {
                if (aw.nodeName(this, "form")) {
                    return false
                }
                aw.event.add(this, "click._submit keypress._submit", function (b1) {
                    var b2 = b1.target, b3 = aw.nodeName(b2, "input") || aw.nodeName(b2, "button") ? b2.form : bS;
                    if (b3 && !aw._data(b3, "submitBubbles")) {
                        aw.event.add(b3, "submit._submit", function (e) {
                            e._submit_bubble = true
                        });
                        aw._data(b3, "submitBubbles", true)
                    }
                })
            }, postDispatch: function (e) {
                if (e._submit_bubble) {
                    delete e._submit_bubble;
                    if (this.parentNode && !e.isTrigger) {
                        aw.event.simulate("submit", this.parentNode, e, true)
                    }
                }
            }, teardown: function () {
                if (aw.nodeName(this, "form")) {
                    return false
                }
                aw.event.remove(this, "._submit")
            }
        }
    }
    if (!aw.support.changeBubbles) {
        aw.event.special.change = {
            setup: function () {
                if (aX.test(this.nodeName)) {
                    if (this.type === "checkbox" || this.type === "radio") {
                        aw.event.add(this, "propertychange._change", function (e) {
                            if (e.originalEvent.propertyName === "checked") {
                                this._just_changed = true
                            }
                        });
                        aw.event.add(this, "click._change", function (e) {
                            if (this._just_changed && !e.isTrigger) {
                                this._just_changed = false
                            }
                            aw.event.simulate("change", this, e, true)
                        })
                    }
                    return false
                }
                aw.event.add(this, "beforeactivate._change", function (b1) {
                    var b2 = b1.target;
                    if (aX.test(b2.nodeName) && !aw._data(b2, "changeBubbles")) {
                        aw.event.add(b2, "change._change", function (e) {
                            if (this.parentNode && !e.isSimulated && !e.isTrigger) {
                                aw.event.simulate("change", this.parentNode, e, true)
                            }
                        });
                        aw._data(b2, "changeBubbles", true)
                    }
                })
            }, handle: function (b1) {
                var e = b1.target;
                if (this !== e || b1.isSimulated || b1.isTrigger || (e.type !== "radio" && e.type !== "checkbox")) {
                    return b1.handleObj.handler.apply(this, arguments)
                }
            }, teardown: function () {
                aw.event.remove(this, "._change");
                return !aX.test(this.nodeName)
            }
        }
    }
    if (!aw.support.focusinBubbles) {
        aw.each({focus: "focusin", blur: "focusout"}, function (b3, b1) {
            var e = 0, b2 = function (b4) {
                aw.event.simulate(b1, b4.target, aw.event.fix(b4), true)
            };
            aw.event.special[b1] = {
                setup: function () {
                    if (e++ === 0) {
                        V.addEventListener(b3, b2, true)
                    }
                }, teardown: function () {
                    if (--e === 0) {
                        V.removeEventListener(b3, b2, true)
                    }
                }
            }
        })
    }
    aw.fn.extend({
        on: function (b6, b4, e, b1, b2) {
            var b3, b5;
            if (typeof b6 === "object") {
                if (typeof b4 !== "string") {
                    e = e || b4;
                    b4 = bS
                }
                for (b5 in b6) {
                    this.on(b5, b4, e, b6[b5], b2)
                }
                return this
            }
            if (e == null && b1 == null) {
                b1 = b4;
                e = b4 = bS
            } else {
                if (b1 == null) {
                    if (typeof b4 === "string") {
                        b1 = e;
                        e = bS
                    } else {
                        b1 = e;
                        e = b4;
                        b4 = bS
                    }
                }
            }
            if (b1 === false) {
                b1 = aT
            } else {
                if (!b1) {
                    return this
                }
            }
            if (b2 === 1) {
                b3 = b1;
                b1 = function (b7) {
                    aw().off(b7);
                    return b3.apply(this, arguments)
                };
                b1.guid = b3.guid || (b3.guid = aw.guid++)
            }
            return this.each(function () {
                aw.event.add(this, b6, b1, e, b4)
            })
        }, one: function (b3, b2, e, b1) {
            return this.on(b3, b2, e, b1, 1)
        }, off: function (b4, b2, e) {
            var b1, b3;
            if (b4 && b4.preventDefault && b4.handleObj) {
                b1 = b4.handleObj;
                aw(b4.delegateTarget).off(b1.namespace ? b1.origType + "." + b1.namespace : b1.origType, b1.selector, b1.handler);
                return this
            }
            if (typeof b4 === "object") {
                for (b3 in b4) {
                    this.off(b3, b2, b4[b3])
                }
                return this
            }
            if (b2 === false || typeof b2 === "function") {
                e = b2;
                b2 = bS
            }
            if (e === false) {
                e = aT
            }
            return this.each(function () {
                aw.event.remove(this, b4, e, b2)
            })
        }, bind: function (b2, e, b1) {
            return this.on(b2, null, e, b1)
        }, unbind: function (b1, e) {
            return this.off(b1, null, e)
        }, delegate: function (b2, b3, e, b1) {
            return this.on(b3, b2, e, b1)
        }, undelegate: function (b1, b2, e) {
            return arguments.length === 1 ? this.off(b1, "**") : this.off(b2, b1 || "**", e)
        }, trigger: function (b1, e) {
            return this.each(function () {
                aw.event.trigger(b1, e, this)
            })
        }, triggerHandler: function (b2, e) {
            var b1 = this[0];
            if (b1) {
                return aw.event.trigger(b2, e, b1, true)
            }
        }, hover: function (b1, e) {
            return this.mouseenter(b1).mouseleave(e || b1)
        }
    });
    aw.each(("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu").split(" "), function (e, b1) {
        aw.fn[b1] = function (b2, b3) {
            return arguments.length > 0 ? this.on(b1, null, b2, b3) : this.trigger(b1)
        };
        if (a5.test(b1)) {
            aw.event.fixHooks[b1] = aw.event.keyHooks
        }
        if (a9.test(b1)) {
            aw.event.fixHooks[b1] = aw.event.mouseHooks
        }
    });
    /*
 * Sizzle CSS Selector Engine
 * Copyright 2012 jQuery Foundation and other contributors
 * Released under the MIT license
 * http://sizzlejs.com/
 */
    (function (de, dc) {
        var cs, b5, co, cq, cw, b8, cr, cF, c0, ci, ch, cj, cM, cL, cA, cb, c6, cn = "sizzle" + -(new Date()),
            cH = de.document, c8 = {}, cg = 0, ck = 0, b7 = cd(), c9 = cd(), b9 = cd(), c7 = typeof dc, cC = 1 << 31,
            b2 = [], cG = b2.pop, cJ = b2.push, c5 = b2.slice, cu = b2.indexOf || function (e) {
                var df = 0, dg = this.length;
                for (; df < dg; df++) {
                    if (this[df] === e) {
                        return df
                    }
                }
                return -1
            }, dd = "[\\x20\\t\\r\\n\\f]", b6 = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", ct = b6.replace("w", "w#"),
            cE = "([*^$|!~]?=)",
            b4 = "\\[" + dd + "*(" + b6 + ")" + dd + "*(?:" + cE + dd + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + ct + ")|)|)" + dd + "*\\]",
            cI = ":(" + b6 + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + b4.replace(3, 8) + ")*)|.*)\\)|)",
            cX = new RegExp("^" + dd + "+|((?:^|[^\\\\])(?:\\\\.)*)" + dd + "+$", "g"),
            cO = new RegExp("^" + dd + "*," + dd + "*"),
            cN = new RegExp("^" + dd + "*([\\x20\\t\\r\\n\\f>+~])" + dd + "*"), cU = new RegExp(cI),
            cR = new RegExp("^" + ct + "$"), cB = {
                ID: new RegExp("^#(" + b6 + ")"),
                CLASS: new RegExp("^\\.(" + b6 + ")"),
                NAME: new RegExp("^\\[name=['\"]?(" + b6 + ")['\"]?\\]"),
                TAG: new RegExp("^(" + b6.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + b4),
                PSEUDO: new RegExp("^" + cI),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + dd + "*(even|odd|(([+-]|)(\\d*)n|)" + dd + "*(?:([+-]|)" + dd + "*(\\d+)|))" + dd + "*\\)|)", "i"),
                needsContext: new RegExp("^" + dd + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + dd + "*((?:-\\d)?\\d*)" + dd + "*\\)|)(?=[^-]|$)", "i")
            }, cW = /[\x20\t\r\n\f]*[+~]/, cT = /\{\s*\[native code\]\s*\}/, cV = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            cS = /^(?:input|select|textarea|button)$/i, cQ = /^h\d$/i, cP = /'|\\/g,
            cK = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g, cY = /\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,
            cp = function (e, df) {
                var dg = "0x" + df - 65536;
                return dg !== dg ? df : dg < 0 ? String.fromCharCode(dg + 65536) : String.fromCharCode(dg >> 10 | 55296, dg & 1023 | 56320)
            };
        try {
            c5.call(ch.childNodes, 0)[0].nodeType
        } catch (cl) {
            c5 = function (df) {
                var e, dg = [];
                for (; (e = this[df]); df++) {
                    dg.push(e)
                }
                return dg
            }
        }

        function cv(e) {
            return cT.test(e + "")
        }

        function cd() {
            var e, df = [];
            return (e = function (dg, dh) {
                if (df.push(dg += " ") > co.cacheLength) {
                    delete e[df.shift()]
                }
                return (e[dg] = dh)
            })
        }

        function cx(e) {
            e[cn] = true;
            return e
        }

        function b3(dh) {
            var df = ci.createElement("div");
            try {
                return dh(df)
            } catch (dg) {
                return false
            } finally {
                df = null
            }
        }

        function c4(dt, e, dr, ds) {
            var dj, df, di, dn, dh, dg, dp, dm, dk, dl;
            if ((e ? e.ownerDocument || e : cH) !== ci) {
                c0(e)
            }
            e = e || ci;
            dr = dr || [];
            if (!dt || typeof dt !== "string") {
                return dr
            }
            if ((dn = e.nodeType) !== 1 && dn !== 9) {
                return []
            }
            if (!cj && !ds) {
                if ((dj = cV.exec(dt))) {
                    if ((di = dj[1])) {
                        if (dn === 9) {
                            df = e.getElementById(di);
                            if (df && df.parentNode) {
                                if (df.id === di) {
                                    dr.push(df);
                                    return dr
                                }
                            } else {
                                return dr
                            }
                        } else {
                            if (e.ownerDocument && (df = e.ownerDocument.getElementById(di)) && cb(e, df) && df.id === di) {
                                dr.push(df);
                                return dr
                            }
                        }
                    } else {
                        if (dj[2]) {
                            cJ.apply(dr, c5.call(e.getElementsByTagName(dt), 0));
                            return dr
                        } else {
                            if ((di = dj[3]) && c8.getByClassName && e.getElementsByClassName) {
                                cJ.apply(dr, c5.call(e.getElementsByClassName(di), 0));
                                return dr
                            }
                        }
                    }
                }
                if (c8.qsa && !cM.test(dt)) {
                    dp = true;
                    dm = cn;
                    dk = e;
                    dl = dn === 9 && dt;
                    if (dn === 1 && e.nodeName.toLowerCase() !== "object") {
                        dg = da(dt);
                        if ((dp = e.getAttribute("id"))) {
                            dm = dp.replace(cP, "\\$&")
                        } else {
                            e.setAttribute("id", dm)
                        }
                        dm = "[id='" + dm + "'] ";
                        dh = dg.length;
                        while (dh--) {
                            dg[dh] = dm + db(dg[dh])
                        }
                        dk = cW.test(dt) && e.parentNode || e;
                        dl = dg.join(",")
                    }
                    if (dl) {
                        try {
                            cJ.apply(dr, c5.call(dk.querySelectorAll(dl), 0));
                            return dr
                        } catch (dq) {
                        } finally {
                            if (!dp) {
                                e.removeAttribute("id")
                            }
                        }
                    }
                }
            }
            return cZ(dt.replace(cX, "$1"), e, dr, ds)
        }

        cw = c4.isXML = function (df) {
            var e = df && (df.ownerDocument || df).documentElement;
            return e ? e.nodeName !== "HTML" : false
        };
        c0 = c4.setDocument = function (df) {
            var e = df ? df.ownerDocument || df : cH;
            if (e === ci || e.nodeType !== 9 || !e.documentElement) {
                return ci
            }
            ci = e;
            ch = e.documentElement;
            cj = cw(e);
            c8.tagNameNoComments = b3(function (dg) {
                dg.appendChild(e.createComment(""));
                return !dg.getElementsByTagName("*").length
            });
            c8.attributes = b3(function (dg) {
                dg.innerHTML = "<select></select>";
                var dh = typeof dg.lastChild.getAttribute("multiple");
                return dh !== "boolean" && dh !== "string"
            });
            c8.getByClassName = b3(function (dg) {
                dg.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>";
                if (!dg.getElementsByClassName || !dg.getElementsByClassName("e").length) {
                    return false
                }
                dg.lastChild.className = "e";
                return dg.getElementsByClassName("e").length === 2
            });
            c8.getByName = b3(function (dg) {
                dg.id = cn + 0;
                dg.innerHTML = "<a name='" + cn + "'></a><div name='" + cn + "'></div>";
                ch.insertBefore(dg, ch.firstChild);
                var dh = e.getElementsByName && e.getElementsByName(cn).length === 2 + e.getElementsByName(cn + 0).length;
                c8.getIdNotName = !e.getElementById(cn);
                ch.removeChild(dg);
                return dh
            });
            co.attrHandle = b3(function (dg) {
                dg.innerHTML = "<a href='#'></a>";
                return dg.firstChild && typeof dg.firstChild.getAttribute !== c7 && dg.firstChild.getAttribute("href") === "#"
            }) ? {} : {
                href: function (dg) {
                    return dg.getAttribute("href", 2)
                }, type: function (dg) {
                    return dg.getAttribute("type")
                }
            };
            if (c8.getIdNotName) {
                co.find.ID = function (dh, dg) {
                    if (typeof dg.getElementById !== c7 && !cj) {
                        var di = dg.getElementById(dh);
                        return di && di.parentNode ? [di] : []
                    }
                };
                co.filter.ID = function (dh) {
                    var dg = dh.replace(cY, cp);
                    return function (di) {
                        return di.getAttribute("id") === dg
                    }
                }
            } else {
                co.find.ID = function (dh, dg) {
                    if (typeof dg.getElementById !== c7 && !cj) {
                        var di = dg.getElementById(dh);
                        return di ? di.id === dh || typeof di.getAttributeNode !== c7 && di.getAttributeNode("id").value === dh ? [di] : dc : []
                    }
                };
                co.filter.ID = function (dh) {
                    var dg = dh.replace(cY, cp);
                    return function (di) {
                        var dj = typeof di.getAttributeNode !== c7 && di.getAttributeNode("id");
                        return dj && dj.value === dg
                    }
                }
            }
            co.find.TAG = c8.tagNameNoComments ? function (dh, dg) {
                if (typeof dg.getElementsByTagName !== c7) {
                    return dg.getElementsByTagName(dh)
                }
            } : function (dk, dg) {
                var dh, dl = [], di = 0, dj = dg.getElementsByTagName(dk);
                if (dk === "*") {
                    for (; (dh = dj[di]); di++) {
                        if (dh.nodeType === 1) {
                            dl.push(dh)
                        }
                    }
                    return dl
                }
                return dj
            };
            co.find.NAME = c8.getByName && function (dh, dg) {
                if (typeof dg.getElementsByName !== c7) {
                    return dg.getElementsByName(name)
                }
            };
            co.find.CLASS = c8.getByClassName && function (dg, dh) {
                if (typeof dh.getElementsByClassName !== c7 && !cj) {
                    return dh.getElementsByClassName(dg)
                }
            };
            cL = [];
            cM = [":focus"];
            if ((c8.qsa = cv(e.querySelectorAll))) {
                b3(function (dg) {
                    dg.innerHTML = "<select><option selected=''></option></select>";
                    if (!dg.querySelectorAll("[selected]").length) {
                        cM.push("\\[" + dd + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)")
                    }
                    if (!dg.querySelectorAll(":checked").length) {
                        cM.push(":checked")
                    }
                });
                b3(function (dg) {
                    dg.innerHTML = "<input type='hidden' i=''/>";
                    if (dg.querySelectorAll("[i^='']").length) {
                        cM.push("[*^$]=" + dd + "*(?:\"\"|'')")
                    }
                    if (!dg.querySelectorAll(":enabled").length) {
                        cM.push(":enabled", ":disabled")
                    }
                    dg.querySelectorAll("*,:x");
                    cM.push(",.*:")
                })
            }
            if ((c8.matchesSelector = cv((cA = ch.matchesSelector || ch.mozMatchesSelector || ch.webkitMatchesSelector || ch.oMatchesSelector || ch.msMatchesSelector)))) {
                b3(function (dg) {
                    c8.disconnectedMatch = cA.call(dg, "div");
                    cA.call(dg, "[s!='']:x");
                    cL.push("!=", cI)
                })
            }
            cM = new RegExp(cM.join("|"));
            cL = new RegExp(cL.join("|"));
            cb = cv(ch.contains) || ch.compareDocumentPosition ? function (dg, di) {
                var dh = dg.nodeType === 9 ? dg.documentElement : dg, dj = di && di.parentNode;
                return dg === dj || !!(dj && dj.nodeType === 1 && (dh.contains ? dh.contains(dj) : dg.compareDocumentPosition && dg.compareDocumentPosition(dj) & 16))
            } : function (dg, dh) {
                if (dh) {
                    while ((dh = dh.parentNode)) {
                        if (dh === dg) {
                            return true
                        }
                    }
                }
                return false
            };
            c6 = ch.compareDocumentPosition ? function (dg, dh) {
                var di;
                if (dg === dh) {
                    cr = true;
                    return 0
                }
                if ((di = dh.compareDocumentPosition && dg.compareDocumentPosition && dg.compareDocumentPosition(dh))) {
                    if (di & 1 || dg.parentNode && dg.parentNode.nodeType === 11) {
                        if (dg === e || cb(cH, dg)) {
                            return -1
                        }
                        if (dh === e || cb(cH, dh)) {
                            return 1
                        }
                        return 0
                    }
                    return di & 4 ? -1 : 1
                }
                return dg.compareDocumentPosition ? -1 : 1
            } : function (dg, dj) {
                var dm, dn = 0, di = dg.parentNode, dl = dj.parentNode, dh = [dg], dk = [dj];
                if (dg === dj) {
                    cr = true;
                    return 0
                } else {
                    if (dg.sourceIndex && dj.sourceIndex) {
                        return (~dj.sourceIndex || cC) - (cb(cH, dg) && ~dg.sourceIndex || cC)
                    } else {
                        if (!di || !dl) {
                            return dg === e ? -1 : dj === e ? 1 : di ? -1 : dl ? 1 : 0
                        } else {
                            if (di === dl) {
                                return c3(dg, dj)
                            }
                        }
                    }
                }
                dm = dg;
                while ((dm = dm.parentNode)) {
                    dh.unshift(dm)
                }
                dm = dj;
                while ((dm = dm.parentNode)) {
                    dk.unshift(dm)
                }
                while (dh[dn] === dk[dn]) {
                    dn++
                }
                return dn ? c3(dh[dn], dk[dn]) : dh[dn] === cH ? -1 : dk[dn] === cH ? 1 : 0
            };
            cr = false;
            [0, 0].sort(c6);
            c8.detectDuplicates = cr;
            return ci
        };
        c4.matches = function (df, e) {
            return c4(df, null, null, e)
        };
        c4.matchesSelector = function (dg, dh) {
            if ((dg.ownerDocument || dg) !== ci) {
                c0(dg)
            }
            dh = dh.replace(cK, "='$1']");
            if (c8.matchesSelector && !cj && (!cL || !cL.test(dh)) && !cM.test(dh)) {
                try {
                    var di = cA.call(dg, dh);
                    if (di || c8.disconnectedMatch || dg.document && dg.document.nodeType !== 11) {
                        return di
                    }
                } catch (df) {
                }
            }
            return c4(dh, ci, null, [dg]).length > 0
        };
        c4.contains = function (e, df) {
            if ((e.ownerDocument || e) !== ci) {
                c0(e)
            }
            return cb(e, df)
        };
        c4.attr = function (e, df) {
            var dg;
            if ((e.ownerDocument || e) !== ci) {
                c0(e)
            }
            if (!cj) {
                df = df.toLowerCase()
            }
            if ((dg = co.attrHandle[df])) {
                return dg(e)
            }
            if (cj || c8.attributes) {
                return e.getAttribute(df)
            }
            return ((dg = e.getAttributeNode(df)) || e.getAttribute(df)) && e[df] === true ? df : dg && dg.specified ? dg.value : null
        };
        c4.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        };
        c4.uniqueSort = function (di) {
            var df, e = [], dg = 1, dh = 0;
            cr = !c8.detectDuplicates;
            di.sort(c6);
            if (cr) {
                for (; (df = di[dg]); dg++) {
                    if (df === di[dg - 1]) {
                        dh = e.push(dg)
                    }
                }
                while (dh--) {
                    di.splice(e[dh], 1)
                }
            }
            return di
        };

        function c3(e, df) {
            var dg = e && df && e.nextSibling;
            for (; dg; dg = dg.nextSibling) {
                if (dg === df) {
                    return -1
                }
            }
            return e ? 1 : -1
        }

        function ce(e) {
            return function (df) {
                var dg = df.nodeName.toLowerCase();
                return dg === "input" && df.type === e
            }
        }

        function cc(e) {
            return function (df) {
                var dg = df.nodeName.toLowerCase();
                return (dg === "input" || dg === "button") && df.type === e
            }
        }

        function cf(e) {
            return cx(function (df) {
                df = +df;
                return cx(function (dk, di) {
                    var dh, dj = e([], dk.length, df), dg = dj.length;
                    while (dg--) {
                        if (dk[(dh = dj[dg])]) {
                            dk[dh] = !(di[dh] = dk[dh])
                        }
                    }
                })
            })
        }

        cq = c4.getText = function (e) {
            var dg, di = "", df = 0, dh = e.nodeType;
            if (!dh) {
                for (; (dg = e[df]); df++) {
                    di += cq(dg)
                }
            } else {
                if (dh === 1 || dh === 9 || dh === 11) {
                    if (typeof e.textContent === "string") {
                        return e.textContent
                    } else {
                        for (e = e.firstChild; e; e = e.nextSibling) {
                            di += cq(e)
                        }
                    }
                } else {
                    if (dh === 3 || dh === 4) {
                        return e.nodeValue
                    }
                }
            }
            return di
        };
        co = c4.selectors = {
            cacheLength: 50,
            createPseudo: cx,
            match: cB,
            find: {},
            relative: {
                ">": {dir: "parentNode", first: true},
                " ": {dir: "parentNode"},
                "+": {dir: "previousSibling", first: true},
                "~": {dir: "previousSibling"}
            },
            preFilter: {
                ATTR: function (e) {
                    e[1] = e[1].replace(cY, cp);
                    e[3] = (e[4] || e[5] || "").replace(cY, cp);
                    if (e[2] === "~=") {
                        e[3] = " " + e[3] + " "
                    }
                    return e.slice(0, 4)
                }, CHILD: function (e) {
                    e[1] = e[1].toLowerCase();
                    if (e[1].slice(0, 3) === "nth") {
                        if (!e[3]) {
                            c4.error(e[0])
                        }
                        e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * (e[3] === "even" || e[3] === "odd"));
                        e[5] = +((e[7] + e[8]) || e[3] === "odd")
                    } else {
                        if (e[3]) {
                            c4.error(e[0])
                        }
                    }
                    return e
                }, PSEUDO: function (df) {
                    var e, dg = !df[5] && df[2];
                    if (cB.CHILD.test(df[0])) {
                        return null
                    }
                    if (df[4]) {
                        df[2] = df[4]
                    } else {
                        if (dg && cU.test(dg) && (e = da(dg, true)) && (e = dg.indexOf(")", dg.length - e) - dg.length)) {
                            df[0] = df[0].slice(0, e);
                            df[2] = dg.slice(0, e)
                        }
                    }
                    return df.slice(0, 3)
                }
            },
            filter: {
                TAG: function (e) {
                    if (e === "*") {
                        return function () {
                            return true
                        }
                    }
                    e = e.replace(cY, cp).toLowerCase();
                    return function (df) {
                        return df.nodeName && df.nodeName.toLowerCase() === e
                    }
                }, CLASS: function (e) {
                    var df = b7[e + " "];
                    return df || (df = new RegExp("(^|" + dd + ")" + e + "(" + dd + "|$)")) && b7(e, function (dg) {
                        return df.test(dg.className || (typeof dg.getAttribute !== c7 && dg.getAttribute("class")) || "")
                    })
                }, ATTR: function (df, dg, e) {
                    return function (dh) {
                        var di = c4.attr(dh, df);
                        if (di == null) {
                            return dg === "!="
                        }
                        if (!dg) {
                            return true
                        }
                        di += "";
                        return dg === "=" ? di === e : dg === "!=" ? di !== e : dg === "^=" ? e && di.indexOf(e) === 0 : dg === "*=" ? e && di.indexOf(e) > -1 : dg === "$=" ? e && di.substr(di.length - e.length) === e : dg === "~=" ? (" " + di + " ").indexOf(e) > -1 : dg === "|=" ? di === e || di.substr(0, e.length + 1) === e + "-" : false
                    }
                }, CHILD: function (dk, dl, e, df, dh) {
                    var dj = dk.slice(0, 3) !== "nth", dg = dk.slice(-4) !== "last", di = dl === "of-type";
                    return df === 1 && dh === 0 ? function (dm) {
                        return !!dm.parentNode
                    } : function (dr, dn, dz) {
                        var dm, dv, dt, dp, du, dx, dq = dj !== dg ? "nextSibling" : "previousSibling",
                            dw = dr.parentNode, ds = di && dr.nodeName.toLowerCase(), dy = !dz && !di;
                        if (dw) {
                            if (dj) {
                                while (dq) {
                                    dt = dr;
                                    while ((dt = dt[dq])) {
                                        if (di ? dt.nodeName.toLowerCase() === ds : dt.nodeType === 1) {
                                            return false
                                        }
                                    }
                                    dx = dq = dk === "only" && !dx && "nextSibling"
                                }
                                return true
                            }
                            dx = [dg ? dw.firstChild : dw.lastChild];
                            if (dg && dy) {
                                dv = dw[cn] || (dw[cn] = {});
                                dm = dv[dk] || [];
                                du = dm[0] === cg && dm[1];
                                dp = dm[0] === cg && dm[2];
                                dt = du && dw.childNodes[du];
                                while ((dt = ++du && dt && dt[dq] || (dp = du = 0) || dx.pop())) {
                                    if (dt.nodeType === 1 && ++dp && dt === dr) {
                                        dv[dk] = [cg, du, dp];
                                        break
                                    }
                                }
                            } else {
                                if (dy && (dm = (dr[cn] || (dr[cn] = {}))[dk]) && dm[0] === cg) {
                                    dp = dm[1]
                                } else {
                                    while ((dt = ++du && dt && dt[dq] || (dp = du = 0) || dx.pop())) {
                                        if ((di ? dt.nodeName.toLowerCase() === ds : dt.nodeType === 1) && ++dp) {
                                            if (dy) {
                                                (dt[cn] || (dt[cn] = {}))[dk] = [cg, dp]
                                            }
                                            if (dt === dr) {
                                                break
                                            }
                                        }
                                    }
                                }
                            }
                            dp -= dh;
                            return dp === df || (dp % df === 0 && dp / df >= 0)
                        }
                    }
                }, PSEUDO: function (dh, df) {
                    var e,
                        dg = co.pseudos[dh] || co.setFilters[dh.toLowerCase()] || c4.error("unsupported pseudo: " + dh);
                    if (dg[cn]) {
                        return dg(df)
                    }
                    if (dg.length > 1) {
                        e = [dh, dh, "", df];
                        return co.setFilters.hasOwnProperty(dh.toLowerCase()) ? cx(function (dm, dl) {
                            var dj, dk = dg(dm, df), di = dk.length;
                            while (di--) {
                                dj = cu.call(dm, dk[di]);
                                dm[dj] = !(dl[dj] = dk[di])
                            }
                        }) : function (di) {
                            return dg(di, 0, e)
                        }
                    }
                    return dg
                }
            },
            pseudos: {
                not: cx(function (dh) {
                    var e = [], dg = [], df = b8(dh.replace(cX, "$1"));
                    return df[cn] ? cx(function (dm, dl, di, dp) {
                        var dj, dn = df(dm, null, dp, []), dk = dm.length;
                        while (dk--) {
                            if ((dj = dn[dk])) {
                                dm[dk] = !(dl[dk] = dj)
                            }
                        }
                    }) : function (dj, di, dk) {
                        e[0] = dj;
                        df(e, null, dk, dg);
                        return !dg.pop()
                    }
                }), has: cx(function (e) {
                    return function (df) {
                        return c4(e, df).length > 0
                    }
                }), contains: cx(function (e) {
                    return function (df) {
                        return (df.textContent || df.innerText || cq(df)).indexOf(e) > -1
                    }
                }), lang: cx(function (e) {
                    if (!cR.test(e || "")) {
                        c4.error("unsupported lang: " + e)
                    }
                    e = e.replace(cY, cp).toLowerCase();
                    return function (df) {
                        var dg;
                        do {
                            if ((dg = cj ? df.getAttribute("xml:lang") || df.getAttribute("lang") : df.lang)) {
                                dg = dg.toLowerCase();
                                return dg === e || dg.indexOf(e + "-") === 0
                            }
                        } while ((df = df.parentNode) && df.nodeType === 1);
                        return false
                    }
                }), target: function (e) {
                    var df = de.location && de.location.hash;
                    return df && df.slice(1) === e.id
                }, root: function (e) {
                    return e === ch
                }, focus: function (e) {
                    return e === ci.activeElement && (!ci.hasFocus || ci.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                }, enabled: function (e) {
                    return e.disabled === false
                }, disabled: function (e) {
                    return e.disabled === true
                }, checked: function (e) {
                    var df = e.nodeName.toLowerCase();
                    return (df === "input" && !!e.checked) || (df === "option" && !!e.selected)
                }, selected: function (e) {
                    if (e.parentNode) {
                        e.parentNode.selectedIndex
                    }
                    return e.selected === true
                }, empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling) {
                        if (e.nodeName > "@" || e.nodeType === 3 || e.nodeType === 4) {
                            return false
                        }
                    }
                    return true
                }, parent: function (e) {
                    return !co.pseudos.empty(e)
                }, header: function (e) {
                    return cQ.test(e.nodeName)
                }, input: function (e) {
                    return cS.test(e.nodeName)
                }, button: function (e) {
                    var df = e.nodeName.toLowerCase();
                    return df === "input" && e.type === "button" || df === "button"
                }, text: function (df) {
                    var e;
                    return df.nodeName.toLowerCase() === "input" && df.type === "text" && ((e = df.getAttribute("type")) == null || e.toLowerCase() === df.type)
                }, first: cf(function () {
                    return [0]
                }), last: cf(function (df, e) {
                    return [e - 1]
                }), eq: cf(function (dg, df, e) {
                    return [e < 0 ? e + df : e]
                }), even: cf(function (dg, df) {
                    var e = 0;
                    for (; e < df; e += 2) {
                        dg.push(e)
                    }
                    return dg
                }), odd: cf(function (dg, df) {
                    var e = 1;
                    for (; e < df; e += 2) {
                        dg.push(e)
                    }
                    return dg
                }), lt: cf(function (dh, dg, e) {
                    var df = e < 0 ? e + dg : e;
                    for (; --df >= 0;) {
                        dh.push(df)
                    }
                    return dh
                }), gt: cf(function (dh, dg, e) {
                    var df = e < 0 ? e + dg : e;
                    for (; ++df < dg;) {
                        dh.push(df)
                    }
                    return dh
                })
            }
        };
        for (cs in {radio: true, checkbox: true, file: true, password: true, image: true}) {
            co.pseudos[cs] = ce(cs)
        }
        for (cs in {submit: true, reset: true}) {
            co.pseudos[cs] = cc(cs)
        }

        function da(dk, di) {
            var dh, dg, dm, dn, dl, df, dj, e = c9[dk + " "];
            if (e) {
                return di ? 0 : e.slice(0)
            }
            dl = dk;
            df = [];
            dj = co.preFilter;
            while (dl) {
                if (!dh || (dg = cO.exec(dl))) {
                    if (dg) {
                        dl = dl.slice(dg[0].length) || dl
                    }
                    df.push(dm = [])
                }
                dh = false;
                if ((dg = cN.exec(dl))) {
                    dh = dg.shift();
                    dm.push({value: dh, type: dg[0].replace(cX, " ")});
                    dl = dl.slice(dh.length)
                }
                for (dn in co.filter) {
                    if ((dg = cB[dn].exec(dl)) && (!dj[dn] || (dg = dj[dn](dg)))) {
                        dh = dg.shift();
                        dm.push({value: dh, type: dn, matches: dg});
                        dl = dl.slice(dh.length)
                    }
                }
                if (!dh) {
                    break
                }
            }
            return di ? dl.length : dl ? c4.error(dk) : c9(dk, df).slice(0)
        }

        function db(dh) {
            var e = 0, df = dh.length, dg = "";
            for (; e < df; e++) {
                dg += dh[e].value
            }
            return dg
        }

        function b1(dj, dg, e) {
            var dh = dg.dir, df = e && dg.dir === "parentNode", di = ck++;
            return dg.first ? function (dl, dk, dm) {
                while ((dl = dl[dh])) {
                    if (dl.nodeType === 1 || df) {
                        return dj(dl, dk, dm)
                    }
                }
            } : function (dp, dl, dr) {
                var dm, dk, dq, dn = cg + " " + di;
                if (dr) {
                    while ((dp = dp[dh])) {
                        if (dp.nodeType === 1 || df) {
                            if (dj(dp, dl, dr)) {
                                return true
                            }
                        }
                    }
                } else {
                    while ((dp = dp[dh])) {
                        if (dp.nodeType === 1 || df) {
                            dq = dp[cn] || (dp[cn] = {});
                            if ((dk = dq[dh]) && dk[0] === dn) {
                                if ((dm = dk[1]) === true || dm === b5) {
                                    return dm === true
                                }
                            } else {
                                dk = dq[dh] = [dn];
                                dk[1] = dj(dp, dl, dr) || b5;
                                if (dk[1] === true) {
                                    return true
                                }
                            }
                        }
                    }
                }
            }
        }

        function cm(e) {
            return e.length > 1 ? function (dg, df, di) {
                var dh = e.length;
                while (dh--) {
                    if (!e[dh](dg, df, di)) {
                        return false
                    }
                }
                return true
            } : e[0]
        }

        function ca(dm, dj, dg, e, dn) {
            var df, dl = [], dh = 0, di = dm.length, dk = dj != null;
            for (; dh < di; dh++) {
                if ((df = dm[dh])) {
                    if (!dg || dg(df, e, dn)) {
                        dl.push(df);
                        if (dk) {
                            dj.push(dh)
                        }
                    }
                }
            }
            return dl
        }

        function c2(di, dj, e, df, dg, dh) {
            if (df && !df[cn]) {
                df = c2(df)
            }
            if (dg && !dg[cn]) {
                dg = c2(dg, dh)
            }
            return cx(function (dv, du, dk, dx) {
                var dw, dn, dl, dt = [], dr = [], ds = du.length, dm = dv || cD(dj || "*", dk.nodeType ? [dk] : dk, []),
                    dp = di && (dv || !dj) ? ca(dm, dt, di, dk, dx) : dm,
                    dq = e ? dg || (dv ? di : ds || df) ? [] : du : dp;
                if (e) {
                    e(dp, dq, dk, dx)
                }
                if (df) {
                    dw = ca(dq, dr);
                    df(dw, [], dk, dx);
                    dn = dw.length;
                    while (dn--) {
                        if ((dl = dw[dn])) {
                            dq[dr[dn]] = !(dp[dr[dn]] = dl)
                        }
                    }
                }
                if (dv) {
                    if (dg || di) {
                        if (dg) {
                            dw = [];
                            dn = dq.length;
                            while (dn--) {
                                if ((dl = dq[dn])) {
                                    dw.push((dp[dn] = dl))
                                }
                            }
                            dg(null, (dq = []), dw, dx)
                        }
                        dn = dq.length;
                        while (dn--) {
                            if ((dl = dq[dn]) && (dw = dg ? cu.call(dv, dl) : dt[dn]) > -1) {
                                dv[dw] = !(du[dw] = dl)
                            }
                        }
                    }
                } else {
                    dq = ca(dq === du ? dq.splice(ds, dq.length) : dq);
                    if (dg) {
                        dg(null, du, dq, dx)
                    } else {
                        cJ.apply(du, dq)
                    }
                }
            })
        }

        function cz(dp) {
            var e, dm, dh, dj = dp.length, di = co.relative[dp[0].type], dg = di || co.relative[" "], df = di ? 1 : 0,
                dl = b1(function (dq) {
                    return dq === e
                }, dg, true), dk = b1(function (dq) {
                    return cu.call(e, dq) > -1
                }, dg, true), dn = [function (dr, dq, ds) {
                    return (!di && (ds || dq !== cF)) || ((e = dq).nodeType ? dl(dr, dq, ds) : dk(dr, dq, ds))
                }];
            for (; df < dj; df++) {
                if ((dm = co.relative[dp[df].type])) {
                    dn = [b1(cm(dn), dm)]
                } else {
                    dm = co.filter[dp[df].type].apply(null, dp[df].matches);
                    if (dm[cn]) {
                        dh = ++df;
                        for (; dh < dj; dh++) {
                            if (co.relative[dp[dh].type]) {
                                break
                            }
                        }
                        return c2(df > 1 && cm(dn), df > 1 && db(dp.slice(0, df - 1)).replace(cX, "$1"), dm, df < dh && cz(dp.slice(df, dh)), dh < dj && cz((dp = dp.slice(dh))), dh < dj && db(dp))
                    }
                    dn.push(dm)
                }
            }
            return cm(dn)
        }

        function cy(dg, di) {
            var dh = 0, df = di.length > 0, e = dg.length > 0, dj = function (dx, dk, dA, dw, dq) {
                var dn, ds, du, dy = [], dt = 0, dr = "0", dz = dx && [], dv = dq != null, dl = cF,
                    dp = dx || e && co.find.TAG("*", dq && dk.parentNode || dk), dm = (cg += dl == null ? 1 : Math.E);
                if (dv) {
                    cF = dk !== ci && dk;
                    b5 = dh
                }
                for (; (dn = dp[dr]) != null; dr++) {
                    if (e && dn) {
                        for (ds = 0; (du = dg[ds]); ds++) {
                            if (du(dn, dk, dA)) {
                                dw.push(dn);
                                break
                            }
                        }
                        if (dv) {
                            cg = dm;
                            b5 = ++dh
                        }
                    }
                    if (df) {
                        if ((dn = !du && dn)) {
                            dt--
                        }
                        if (dx) {
                            dz.push(dn)
                        }
                    }
                }
                dt += dr;
                if (df && dr !== dt) {
                    for (ds = 0; (du = di[ds]); ds++) {
                        du(dz, dy, dk, dA)
                    }
                    if (dx) {
                        if (dt > 0) {
                            while (dr--) {
                                if (!(dz[dr] || dy[dr])) {
                                    dy[dr] = cG.call(dw)
                                }
                            }
                        }
                        dy = ca(dy)
                    }
                    cJ.apply(dw, dy);
                    if (dv && !dx && dy.length > 0 && (dt + di.length) > 1) {
                        c4.uniqueSort(dw)
                    }
                }
                if (dv) {
                    cg = dm;
                    cF = dl
                }
                return dz
            };
            return df ? cx(dj) : dj
        }

        b8 = c4.compile = function (di, dg) {
            var dh, dj = [], df = [], e = b9[di + " "];
            if (!e) {
                if (!dg) {
                    dg = da(di)
                }
                dh = dg.length;
                while (dh--) {
                    e = cz(dg[dh]);
                    if (e[cn]) {
                        dj.push(e)
                    } else {
                        df.push(e)
                    }
                }
                e = b9(di, cy(df, dj))
            }
            return e
        };

        function cD(di, e, dh) {
            var df = 0, dg = e.length;
            for (; df < dg; df++) {
                c4(di, e[df], dh)
            }
            return dh
        }

        function cZ(dk, e, di, dj) {
            var dg, dm, dl, dn, df, dh = da(dk);
            if (!dj) {
                if (dh.length === 1) {
                    dm = dh[0] = dh[0].slice(0);
                    if (dm.length > 2 && (dl = dm[0]).type === "ID" && e.nodeType === 9 && !cj && co.relative[dm[1].type]) {
                        e = co.find.ID(dl.matches[0].replace(cY, cp), e)[0];
                        if (!e) {
                            return di
                        }
                        dk = dk.slice(dm.shift().value.length)
                    }
                    for (dg = cB.needsContext.test(dk) ? -1 : dm.length - 1; dg >= 0; dg--) {
                        dl = dm[dg];
                        if (co.relative[(dn = dl.type)]) {
                            break
                        }
                        if ((df = co.find[dn])) {
                            if ((dj = df(dl.matches[0].replace(cY, cp), cW.test(dm[0].type) && e.parentNode || e))) {
                                dm.splice(dg, 1);
                                dk = dj.length && db(dm);
                                if (!dk) {
                                    cJ.apply(di, c5.call(dj, 0));
                                    return di
                                }
                                break
                            }
                        }
                    }
                }
            }
            b8(dk, dh)(dj, e, cj, di, cW.test(dk));
            return di
        }

        co.pseudos.nth = co.pseudos.eq;

        function c1() {
        }

        co.filters = c1.prototype = co.pseudos;
        co.setFilters = new c1();
        c0();
        c4.attr = aw.attr;
        aw.find = c4;
        aw.expr = c4.selectors;
        aw.expr[":"] = aw.expr.pseudos;
        aw.unique = c4.uniqueSort;
        aw.text = c4.getText;
        aw.isXMLDoc = c4.isXML;
        aw.contains = c4.contains
    })(bU);
    var bB = /Until$/, bk = /^(?:parents|prev(?:Until|All))/, av = /^.[^:#\[\.,]*$/, bc = aw.expr.match.needsContext,
        am = {children: true, contents: true, next: true, prev: true};
    aw.fn.extend({
        find: function (b2) {
            var e, b1, b3;
            if (typeof b2 !== "string") {
                b3 = this;
                return this.pushStack(aw(b2).filter(function () {
                    for (e = 0; e < b3.length; e++) {
                        if (aw.contains(b3[e], this)) {
                            return true
                        }
                    }
                }))
            }
            b1 = [];
            for (e = 0; e < this.length; e++) {
                aw.find(b2, this[e], b1)
            }
            b1 = this.pushStack(aw.unique(b1));
            b1.selector = (this.selector ? this.selector + " " : "") + b2;
            return b1
        }, has: function (b2) {
            var e, b3 = aw(b2, this), b1 = b3.length;
            return this.filter(function () {
                for (e = 0; e < b1; e++) {
                    if (aw.contains(this, b3[e])) {
                        return true
                    }
                }
            })
        }, not: function (e) {
            return this.pushStack(bV(this, e, false))
        }, filter: function (e) {
            return this.pushStack(bV(this, e, true))
        }, is: function (e) {
            return !!e && (typeof e === "string" ? bc.test(e) ? aw(e, this.context).index(this[0]) >= 0 : aw.filter(e, this).length > 0 : this.filter(e).length > 0)
        }, closest: function (b6, e) {
            var b1, b2 = 0, b3 = this.length, b5 = [],
                b4 = bc.test(b6) || typeof b6 !== "string" ? aw(b6, e || this.context) : 0;
            for (; b2 < b3; b2++) {
                b1 = this[b2];
                while (b1 && b1.ownerDocument && b1 !== e && b1.nodeType !== 11) {
                    if (b4 ? b4.index(b1) > -1 : aw.find.matchesSelector(b1, b6)) {
                        b5.push(b1);
                        break
                    }
                    b1 = b1.parentNode
                }
            }
            return this.pushStack(b5.length > 1 ? aw.unique(b5) : b5)
        }, index: function (e) {
            if (!e) {
                return (this[0] && this[0].parentNode) ? this.first().prevAll().length : -1
            }
            if (typeof e === "string") {
                return aw.inArray(this[0], aw(e))
            }
            return aw.inArray(e.jquery ? e[0] : e, this)
        }, add: function (b2, b1) {
            var b3 = typeof b2 === "string" ? aw(b2, b1) : aw.makeArray(b2 && b2.nodeType ? [b2] : b2),
                e = aw.merge(this.get(), b3);
            return this.pushStack(aw.unique(e))
        }, addBack: function (e) {
            return this.add(e == null ? this.prevObject : this.prevObject.filter(e))
        }
    });
    aw.fn.andSelf = aw.fn.addBack;

    function bN(e, b1) {
        do {
            e = e[b1]
        } while (e && e.nodeType !== 1);
        return e
    }

    aw.each({
        parent: function (e) {
            var b1 = e.parentNode;
            return b1 && b1.nodeType !== 11 ? b1 : null
        }, parents: function (e) {
            return aw.dir(e, "parentNode")
        }, parentsUntil: function (e, b1, b2) {
            return aw.dir(e, "parentNode", b2)
        }, next: function (e) {
            return bN(e, "nextSibling")
        }, prev: function (e) {
            return bN(e, "previousSibling")
        }, nextAll: function (e) {
            return aw.dir(e, "nextSibling")
        }, prevAll: function (e) {
            return aw.dir(e, "previousSibling")
        }, nextUntil: function (e, b1, b2) {
            return aw.dir(e, "nextSibling", b2)
        }, prevUntil: function (e, b1, b2) {
            return aw.dir(e, "previousSibling", b2)
        }, siblings: function (e) {
            return aw.sibling((e.parentNode || {}).firstChild, e)
        }, children: function (e) {
            return aw.sibling(e.firstChild)
        }, contents: function (e) {
            return aw.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : aw.merge([], e.childNodes)
        }
    }, function (b1, e) {
        aw.fn[b1] = function (b4, b3) {
            var b2 = aw.map(this, e, b4);
            if (!bB.test(b1)) {
                b3 = b4
            }
            if (b3 && typeof b3 === "string") {
                b2 = aw.filter(b3, b2)
            }
            b2 = this.length > 1 && !am[b1] ? aw.unique(b2) : b2;
            if (this.length > 1 && bk.test(b1)) {
                b2 = b2.reverse()
            }
            return this.pushStack(b2)
        }
    });
    aw.extend({
        filter: function (b1, e, b2) {
            if (b2) {
                b1 = ":not(" + b1 + ")"
            }
            return e.length === 1 ? aw.find.matchesSelector(e[0], b1) ? [e[0]] : [] : aw.find.matches(b1, e)
        }, dir: function (b2, b1, b4) {
            var b3 = [], e = b2[b1];
            while (e && e.nodeType !== 9 && (b4 === bS || e.nodeType !== 1 || !aw(e).is(b4))) {
                if (e.nodeType === 1) {
                    b3.push(e)
                }
                e = e[b1]
            }
            return b3
        }, sibling: function (b1, e) {
            var b2 = [];
            for (; b1; b1 = b1.nextSibling) {
                if (b1.nodeType === 1 && b1 !== e) {
                    b2.push(b1)
                }
            }
            return b2
        }
    });

    function bV(e, b3, b2) {
        b3 = b3 || 0;
        if (aw.isFunction(b3)) {
            return aw.grep(e, function (b4, b5) {
                var b6 = !!b3.call(b4, b5, b4);
                return b6 === b2
            })
        } else {
            if (b3.nodeType) {
                return aw.grep(e, function (b4) {
                    return (b4 === b3) === b2
                })
            } else {
                if (typeof b3 === "string") {
                    var b1 = aw.grep(e, function (b4) {
                        return b4.nodeType === 1
                    });
                    if (av.test(b3)) {
                        return aw.filter(b3, b1, !b2)
                    } else {
                        b3 = aw.filter(b3, b1)
                    }
                }
            }
        }
        return aw.grep(e, function (b4) {
            return (aw.inArray(b4, b3) >= 0) === b2
        })
    }

    function J(e) {
        var b1 = aA.split("|"), b2 = e.createDocumentFragment();
        if (b2.createElement) {
            while (b1.length) {
                b2.createElement(b1.pop())
            }
        }
        return b2
    }

    var aA = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        a3 = / jQuery\d+="(?:null|\d+)"/g, bf = new RegExp("<(?:" + aA + ")[\\s/>]", "i"), a6 = /^\s+/,
        bI = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, bw = /<([\w:]+)/,
        bx = /<tbody/i, a2 = /<|&#?\w+;/, be = /<(?:script|style|link)/i, ay = /^(?:checkbox|radio)$/i,
        aK = /checked\s*(?:[^=]|=\s*.checked.)/i, br = /^$|\/(?:java|ecma)script/i, bs = /^true\/(.*)/,
        aM = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, bW = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: aw.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        }, bJ = J(V), ad = bJ.appendChild(V.createElement("div"));
    bW.optgroup = bW.option;
    bW.tbody = bW.tfoot = bW.colgroup = bW.caption = bW.thead;
    bW.th = bW.td;
    aw.fn.extend({
        text: function (e) {
            return aw.access(this, function (b1) {
                return b1 === bS ? aw.text(this) : this.empty().append((this[0] && this[0].ownerDocument || V).createTextNode(b1))
            }, null, e, arguments.length)
        }, wrapAll: function (e) {
            if (aw.isFunction(e)) {
                return this.each(function (b2) {
                    aw(this).wrapAll(e.call(this, b2))
                })
            }
            if (this[0]) {
                var b1 = aw(e, this[0].ownerDocument).eq(0).clone(true);
                if (this[0].parentNode) {
                    b1.insertBefore(this[0])
                }
                b1.map(function () {
                    var b2 = this;
                    while (b2.firstChild && b2.firstChild.nodeType === 1) {
                        b2 = b2.firstChild
                    }
                    return b2
                }).append(this)
            }
            return this
        }, wrapInner: function (e) {
            if (aw.isFunction(e)) {
                return this.each(function (b1) {
                    aw(this).wrapInner(e.call(this, b1))
                })
            }
            return this.each(function () {
                var b2 = aw(this), b1 = b2.contents();
                if (b1.length) {
                    b1.wrapAll(e)
                } else {
                    b2.append(e)
                }
            })
        }, wrap: function (e) {
            var b1 = aw.isFunction(e);
            return this.each(function (b2) {
                aw(this).wrapAll(b1 ? e.call(this, b2) : e)
            })
        }, unwrap: function () {
            return this.parent().each(function () {
                if (!aw.nodeName(this, "body")) {
                    aw(this).replaceWith(this.childNodes)
                }
            }).end()
        }, append: function () {
            return this.domManip(arguments, true, function (e) {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                    this.appendChild(e)
                }
            })
        }, prepend: function () {
            return this.domManip(arguments, true, function (e) {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                    this.insertBefore(e, this.firstChild)
                }
            })
        }, before: function () {
            return this.domManip(arguments, false, function (e) {
                if (this.parentNode) {
                    this.parentNode.insertBefore(e, this)
                }
            })
        }, after: function () {
            return this.domManip(arguments, false, function (e) {
                if (this.parentNode) {
                    this.parentNode.insertBefore(e, this.nextSibling)
                }
            })
        }, remove: function (b3, b2) {
            var e, b1 = 0;
            for (; (e = this[b1]) != null; b1++) {
                if (!b3 || aw.filter(b3, [e]).length > 0) {
                    if (!b2 && e.nodeType === 1) {
                        aw.cleanData(ag(e))
                    }
                    if (e.parentNode) {
                        if (b2 && aw.contains(e.ownerDocument, e)) {
                            bK(ag(e, "script"))
                        }
                        e.parentNode.removeChild(e)
                    }
                }
            }
            return this
        }, empty: function () {
            var e, b1 = 0;
            for (; (e = this[b1]) != null; b1++) {
                if (e.nodeType === 1) {
                    aw.cleanData(ag(e, false))
                }
                while (e.firstChild) {
                    e.removeChild(e.firstChild)
                }
                if (e.options && aw.nodeName(e, "select")) {
                    e.options.length = 0
                }
            }
            return this
        }, clone: function (e, b1) {
            e = e == null ? false : e;
            b1 = b1 == null ? e : b1;
            return this.map(function () {
                return aw.clone(this, e, b1)
            })
        }, html: function (e) {
            return aw.access(this, function (b5) {
                var b2 = this[0] || {}, b3 = 0, b4 = this.length;
                if (b5 === bS) {
                    return b2.nodeType === 1 ? b2.innerHTML.replace(a3, "") : bS
                }
                if (typeof b5 === "string" && !be.test(b5) && (aw.support.htmlSerialize || !bf.test(b5)) && (aw.support.leadingWhitespace || !a6.test(b5)) && !bW[(bw.exec(b5) || ["", ""])[1].toLowerCase()]) {
                    b5 = b5.replace(bI, "<$1></$2>");
                    try {
                        for (; b3 < b4; b3++) {
                            b2 = this[b3] || {};
                            if (b2.nodeType === 1) {
                                aw.cleanData(ag(b2, false));
                                b2.innerHTML = b5
                            }
                        }
                        b2 = 0
                    } catch (b1) {
                    }
                }
                if (b2) {
                    this.empty().append(b5)
                }
            }, null, e, arguments.length)
        }, replaceWith: function (b1) {
            var e = aw.isFunction(b1);
            if (!e && typeof b1 !== "string") {
                b1 = aw(b1).not(this).detach()
            }
            return this.domManip([b1], true, function (b2) {
                var b3 = this.nextSibling, b4 = this.parentNode;
                if (b4 && this.nodeType === 1 || this.nodeType === 11) {
                    aw(this).remove();
                    if (b3) {
                        b3.parentNode.insertBefore(b2, b3)
                    } else {
                        b4.appendChild(b2)
                    }
                }
            })
        }, detach: function (e) {
            return this.remove(e, true)
        }, domManip: function (e, cd, b1) {
            e = v.apply([], e);
            var b4, b3, cb, b5, ca, b2, b6 = 0, b9 = this.length, cc = this, b7 = b9 - 1, ce = e[0],
                b8 = aw.isFunction(ce);
            if (b8 || !(b9 <= 1 || typeof ce !== "string" || aw.support.checkClone || !aK.test(ce))) {
                return this.each(function (cf) {
                    var cg = cc.eq(cf);
                    if (b8) {
                        e[0] = ce.call(this, cf, cd ? cg.html() : bS)
                    }
                    cg.domManip(e, cd, b1)
                })
            }
            if (b9) {
                b4 = aw.buildFragment(e, this[0].ownerDocument, false, this);
                b3 = b4.firstChild;
                if (b4.childNodes.length === 1) {
                    b4 = b3
                }
                if (b3) {
                    cd = cd && aw.nodeName(b3, "tr");
                    cb = aw.map(ag(b4, "script"), U);
                    b5 = cb.length;
                    for (; b6 < b9; b6++) {
                        ca = b4;
                        if (b6 !== b7) {
                            ca = aw.clone(ca, true, true);
                            if (b5) {
                                aw.merge(cb, ag(ca, "script"))
                            }
                        }
                        b1.call(cd && aw.nodeName(this[b6], "table") ? aa(this[b6], "tbody") : this[b6], ca, b6)
                    }
                    if (b5) {
                        b2 = cb[cb.length - 1].ownerDocument;
                        aw.map(cb, aS);
                        for (b6 = 0; b6 < b5; b6++) {
                            ca = cb[b6];
                            if (br.test(ca.type || "") && !aw._data(ca, "globalEval") && aw.contains(b2, ca)) {
                                if (ca.src) {
                                    aw.ajax({
                                        url: ca.src,
                                        type: "GET",
                                        dataType: "script",
                                        async: false,
                                        global: false,
                                        "throws": true
                                    })
                                } else {
                                    aw.globalEval((ca.text || ca.textContent || ca.innerHTML || "").replace(aM, ""))
                                }
                            }
                        }
                    }
                    b4 = b3 = null
                }
            }
            return this
        }
    });

    function aa(e, b1) {
        return e.getElementsByTagName(b1)[0] || e.appendChild(e.ownerDocument.createElement(b1))
    }

    function U(b1) {
        var e = b1.getAttributeNode("type");
        b1.type = (e && e.specified) + "/" + b1.type;
        return b1
    }

    function aS(e) {
        var b1 = bs.exec(e.type);
        if (b1) {
            e.type = b1[1]
        } else {
            e.removeAttribute("type")
        }
        return e
    }

    function bK(b1, b3) {
        var e, b2 = 0;
        for (; (e = b1[b2]) != null; b2++) {
            aw._data(e, "globalEval", !b3 || aw._data(b3[b2], "globalEval"))
        }
    }

    function u(b6, b1) {
        if (b1.nodeType !== 1 || !aw.hasData(b6)) {
            return
        }
        var b7, b3, b4, b5 = aw._data(b6), e = aw._data(b1, b5), b2 = b5.events;
        if (b2) {
            delete e.handle;
            e.events = {};
            for (b7 in b2) {
                for (b3 = 0, b4 = b2[b7].length; b3 < b4; b3++) {
                    aw.event.add(b1, b7, b2[b7][b3])
                }
            }
        }
        if (e.data) {
            e.data = aw.extend({}, e.data)
        }
    }

    function ab(b5, b2) {
        var b4, b1, b3;
        if (b2.nodeType !== 1) {
            return
        }
        b4 = b2.nodeName.toLowerCase();
        if (!aw.support.noCloneEvent && b2[aw.expando]) {
            b1 = aw._data(b2);
            for (b3 in b1.events) {
                aw.removeEvent(b2, b3, b1.handle)
            }
            b2.removeAttribute(aw.expando)
        }
        if (b4 === "script" && b2.text !== b5.text) {
            U(b2).text = b5.text;
            aS(b2)
        } else {
            if (b4 === "object") {
                if (b2.parentNode) {
                    b2.outerHTML = b5.outerHTML
                }
                if (aw.support.html5Clone && (b5.innerHTML && !aw.trim(b2.innerHTML))) {
                    b2.innerHTML = b5.innerHTML
                }
            } else {
                if (b4 === "input" && ay.test(b5.type)) {
                    b2.defaultChecked = b2.checked = b5.checked;
                    if (b2.value !== b5.value) {
                        b2.value = b5.value
                    }
                } else {
                    if (b4 === "option") {
                        b2.defaultSelected = b2.selected = b5.defaultSelected
                    } else {
                        if (b4 === "input" || b4 === "textarea") {
                            b2.defaultValue = b5.defaultValue
                        }
                    }
                }
            }
        }
    }

    aw.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, b1) {
        aw.fn[e] = function (b7) {
            var b2, b3 = 0, b6 = [], b4 = aw(b7), b5 = b4.length - 1;
            for (; b3 <= b5; b3++) {
                b2 = b3 === b5 ? this : this.clone(true);
                aw(b4[b3])[b1](b2);
                A.apply(b6, b2.get())
            }
            return this.pushStack(b6)
        }
    });

    function ag(e, b5) {
        var b2, b1, b4 = 0,
            b3 = typeof e.getElementsByTagName !== "undefined" ? e.getElementsByTagName(b5 || "*") : typeof e.querySelectorAll !== "undefined" ? e.querySelectorAll(b5 || "*") : bS;
        if (!b3) {
            for (b3 = [], b2 = e.childNodes || e; (b1 = b2[b4]) != null; b4++) {
                if (!b5 || aw.nodeName(b1, b5)) {
                    b3.push(b1)
                } else {
                    aw.merge(b3, ag(b1, b5))
                }
            }
        }
        return b5 === bS || b5 && aw.nodeName(e, b5) ? aw.merge([e], b3) : b3
    }

    function ac(e) {
        if (ay.test(e.type)) {
            e.defaultChecked = e.checked
        }
    }

    aw.extend({
        clone: function (b4, b1, b2) {
            var b3, b8, b7, b5, e, b6 = aw.contains(b4.ownerDocument, b4);
            if (aw.support.html5Clone || aw.isXMLDoc(b4) || !bf.test("<" + b4.nodeName + ">")) {
                e = b4.cloneNode(true)
            } else {
                ad.innerHTML = b4.outerHTML;
                ad.removeChild(e = ad.firstChild)
            }
            if ((!aw.support.noCloneEvent || !aw.support.noCloneChecked) && (b4.nodeType === 1 || b4.nodeType === 11) && !aw.isXMLDoc(b4)) {
                b3 = ag(e);
                b8 = ag(b4);
                for (b5 = 0; (b7 = b8[b5]) != null; ++b5) {
                    if (b3[b5]) {
                        ab(b7, b3[b5])
                    }
                }
            }
            if (b1) {
                if (b2) {
                    b8 = b8 || ag(b4);
                    b3 = b3 || ag(e);
                    for (b5 = 0; (b7 = b8[b5]) != null; b5++) {
                        u(b7, b3[b5])
                    }
                } else {
                    u(b4, e)
                }
            }
            b3 = ag(e, "script");
            if (b3.length > 0) {
                bK(b3, !b6 && ag(b4, "script"))
            }
            b3 = b8 = b7 = null;
            return e
        }, buildFragment: function (b3, b1, b9, ca) {
            var e, b2, cb, cd, ce, cc, b5, b6 = b3.length, b8 = J(b1), b7 = [], b4 = 0;
            for (; b4 < b6; b4++) {
                b2 = b3[b4];
                if (b2 || b2 === 0) {
                    if (aw.type(b2) === "object") {
                        aw.merge(b7, b2.nodeType ? [b2] : b2)
                    } else {
                        if (!a2.test(b2)) {
                            b7.push(b1.createTextNode(b2))
                        } else {
                            cd = cd || b8.appendChild(b1.createElement("div"));
                            cb = (bw.exec(b2) || ["", ""])[1].toLowerCase();
                            ce = bW[cb] || bW._default;
                            cd.innerHTML = ce[1] + b2.replace(bI, "<$1></$2>") + ce[2];
                            b5 = ce[0];
                            while (b5--) {
                                cd = cd.lastChild
                            }
                            if (!aw.support.leadingWhitespace && a6.test(b2)) {
                                b7.push(b1.createTextNode(a6.exec(b2)[0]))
                            }
                            if (!aw.support.tbody) {
                                b2 = cb === "table" && !bx.test(b2) ? cd.firstChild : ce[1] === "<table>" && !bx.test(b2) ? cd : 0;
                                b5 = b2 && b2.childNodes.length;
                                while (b5--) {
                                    if (aw.nodeName((cc = b2.childNodes[b5]), "tbody") && !cc.childNodes.length) {
                                        b2.removeChild(cc)
                                    }
                                }
                            }
                            aw.merge(b7, cd.childNodes);
                            cd.textContent = "";
                            while (cd.firstChild) {
                                cd.removeChild(cd.firstChild)
                            }
                            cd = b8.lastChild
                        }
                    }
                }
            }
            if (cd) {
                b8.removeChild(cd)
            }
            if (!aw.support.appendChecked) {
                aw.grep(ag(b7, "input"), ac)
            }
            b4 = 0;
            while ((b2 = b7[b4++])) {
                if (ca && aw.inArray(b2, ca) !== -1) {
                    continue
                }
                e = aw.contains(b2.ownerDocument, b2);
                cd = ag(b8.appendChild(b2), "script");
                if (e) {
                    bK(cd)
                }
                if (b9) {
                    b5 = 0;
                    while ((b2 = cd[b5++])) {
                        if (br.test(b2.type || "")) {
                            b9.push(b2)
                        }
                    }
                }
            }
            cd = null;
            return b8
        }, cleanData: function (b5, e) {
            var b2, b7, b4, ca, b6 = 0, b8 = aw.expando, b1 = aw.cache, b3 = aw.support.deleteExpando,
                b9 = aw.event.special;
            for (; (b4 = b5[b6]) != null; b6++) {
                if (e || aw.acceptData(b4)) {
                    b7 = b4[b8];
                    b2 = b7 && b1[b7];
                    if (b2) {
                        if (b2.events) {
                            for (ca in b2.events) {
                                if (b9[ca]) {
                                    aw.event.remove(b4, ca)
                                } else {
                                    aw.removeEvent(b4, ca, b2.handle)
                                }
                            }
                        }
                        if (b1[b7]) {
                            delete b1[b7];
                            if (b3) {
                                delete b4[b8]
                            } else {
                                if (typeof b4.removeAttribute !== "undefined") {
                                    b4.removeAttribute(b8)
                                } else {
                                    b4[b8] = null
                                }
                            }
                            w.push(b7)
                        }
                    }
                }
            }
        }
    });
    var R, aj, an, aG = /alpha\([^)]*\)/i, bj = /opacity\s*=\s*([^)]*)/, bl = /^(top|right|bottom|left)$/,
        aQ = /^(none|table(?!-c[ea]).+)/, a8 = /^margin/, bh = new RegExp("^(" + z + ")(.*)$", "i"),
        bg = new RegExp("^(" + z + ")(?!px)[a-z%]+$", "i"), bo = new RegExp("^([+-])=(" + z + ")", "i"),
        Y = {BODY: "block"}, Q = {position: "absolute", visibility: "hidden", display: "block"},
        O = {letterSpacing: 0, fontWeight: 400}, N = ["Top", "Right", "Bottom", "Left"],
        P = ["Webkit", "O", "Moz", "ms"];

    function bT(b4, b2) {
        if (b2 in b4) {
            return b2
        }
        var e = b2.charAt(0).toUpperCase() + b2.slice(1), b3 = b2, b1 = P.length;
        while (b1--) {
            b2 = P[b1] + e;
            if (b2 in b4) {
                return b2
            }
        }
        return b3
    }

    function au(b1, e) {
        b1 = e || b1;
        return aw.css(b1, "display") === "none" || !aw.contains(b1.ownerDocument, b1)
    }

    function bM(b1, b4) {
        var e, b5 = [], b2 = 0, b3 = b1.length;
        for (; b2 < b3; b2++) {
            e = b1[b2];
            if (!e.style) {
                continue
            }
            b5[b2] = aw._data(e, "olddisplay");
            if (b4) {
                if (!b5[b2] && e.style.display === "none") {
                    e.style.display = ""
                }
                if (e.style.display === "" && au(e)) {
                    b5[b2] = aw._data(e, "olddisplay", M(e.nodeName))
                }
            } else {
                if (!b5[b2] && !au(e)) {
                    aw._data(e, "olddisplay", aw.css(e, "display"))
                }
            }
        }
        for (b2 = 0; b2 < b3; b2++) {
            e = b1[b2];
            if (!e.style) {
                continue
            }
            if (!b4 || e.style.display === "none" || e.style.display === "") {
                e.style.display = b4 ? b5[b2] || "" : "none"
            }
        }
        return b1
    }

    aw.fn.extend({
        css: function (e, b1) {
            return aw.access(this, function (b2, b6, b8) {
                var b7, b4, b5 = {}, b3 = 0;
                if (aw.isArray(b6)) {
                    b7 = aj(b2);
                    b4 = b6.length;
                    for (; b3 < b4; b3++) {
                        b5[b6[b3]] = aw.css(b2, b6[b3], false, b7)
                    }
                    return b5
                }
                return b8 !== bS ? aw.style(b2, b6, b8) : aw.css(b2, b6)
            }, e, b1, arguments.length > 1)
        }, show: function () {
            return bM(this, true)
        }, hide: function () {
            return bM(this)
        }, toggle: function (b1) {
            var e = typeof b1 === "boolean";
            return this.each(function () {
                if (e ? b1 : au(this)) {
                    aw(this).show()
                } else {
                    aw(this).hide()
                }
            })
        }
    });
    aw.extend({
        cssHooks: {
            opacity: {
                get: function (b1, e) {
                    if (e) {
                        var b2 = R(b1, "opacity");
                        return b2 === "" ? "1" : b2
                    }
                }
            }
        },
        cssNumber: {
            columnCount: true,
            fillOpacity: true,
            fontWeight: true,
            lineHeight: true,
            opacity: true,
            orphans: true,
            widows: true,
            zIndex: true,
            zoom: true
        },
        cssProps: {"float": aw.support.cssFloat ? "cssFloat" : "styleFloat"},
        style: function (b2, b5, ca, b3) {
            if (!b2 || b2.nodeType === 3 || b2.nodeType === 8 || !b2.style) {
                return
            }
            var b7, b9, b4, b6 = aw.camelCase(b5), b8 = b2.style;
            b5 = aw.cssProps[b6] || (aw.cssProps[b6] = bT(b8, b6));
            b4 = aw.cssHooks[b5] || aw.cssHooks[b6];
            if (ca !== bS) {
                b9 = typeof ca;
                if (b9 === "string" && (b7 = bo.exec(ca))) {
                    ca = (b7[1] + 1) * b7[2] + parseFloat(aw.css(b2, b5));
                    b9 = "number"
                }
                if (ca == null || b9 === "number" && isNaN(ca)) {
                    return
                }
                if (b9 === "number" && !aw.cssNumber[b6]) {
                    ca += "px"
                }
                if (!aw.support.clearCloneStyle && ca === "" && b5.indexOf("background") === 0) {
                    b8[b5] = "inherit"
                }
                if (!b4 || !("set" in b4) || (ca = b4.set(b2, ca, b3)) !== bS) {
                    try {
                        b8[b5] = ca
                    } catch (b1) {
                    }
                }
            } else {
                if (b4 && "get" in b4 && (b7 = b4.get(b2, false, b3)) !== bS) {
                    return b7
                }
                return b8[b5]
            }
        },
        css: function (e, b3, b1, b6) {
            var b7, b4, b2, b5 = aw.camelCase(b3);
            b3 = aw.cssProps[b5] || (aw.cssProps[b5] = bT(e.style, b5));
            b2 = aw.cssHooks[b3] || aw.cssHooks[b5];
            if (b2 && "get" in b2) {
                b7 = b2.get(e, true, b1)
            }
            if (b7 === bS) {
                b7 = R(e, b3, b6)
            }
            if (b7 === "normal" && b3 in O) {
                b7 = O[b3]
            }
            if (b1) {
                b4 = parseFloat(b7);
                return b1 === true || aw.isNumeric(b4) ? b4 || 0 : b7
            }
            return b7
        },
        swap: function (b2, b5, b1, e) {
            var b6, b3, b4 = {};
            for (b3 in b5) {
                b4[b3] = b2.style[b3];
                b2.style[b3] = b5[b3]
            }
            b6 = b1.apply(b2, e || []);
            for (b3 in b5) {
                b2.style[b3] = b4[b3]
            }
            return b6
        }
    });
    if (bU.getComputedStyle) {
        aj = function (e) {
            return bU.getComputedStyle(e, null)
        };
        R = function (b2, b5, e) {
            var b8, b4, b3, b1 = e || aj(b2), b6 = b1 ? b1.getPropertyValue(b5) || b1[b5] : bS, b7 = b2.style;
            if (b1) {
                if (b6 === "" && !aw.contains(b2.ownerDocument, b2)) {
                    b6 = aw.style(b2, b5)
                }
                if (bg.test(b6) && a8.test(b5)) {
                    b8 = b7.width;
                    b4 = b7.minWidth;
                    b3 = b7.maxWidth;
                    b7.minWidth = b7.maxWidth = b7.width = b6;
                    b6 = b1.width;
                    b7.width = b8;
                    b7.minWidth = b4;
                    b7.maxWidth = b3
                }
            }
            return b6
        }
    } else {
        if (V.documentElement.currentStyle) {
            aj = function (e) {
                return e.currentStyle
            };
            R = function (b2, b4, e) {
                var b3, b6, b7, b1 = e || aj(b2), b5 = b1 ? b1[b4] : bS, b8 = b2.style;
                if (b5 == null && b8 && b8[b4]) {
                    b5 = b8[b4]
                }
                if (bg.test(b5) && !bl.test(b4)) {
                    b3 = b8.left;
                    b6 = b2.runtimeStyle;
                    b7 = b6 && b6.left;
                    if (b7) {
                        b6.left = b2.currentStyle.left
                    }
                    b8.left = b4 === "fontSize" ? "1em" : b5;
                    b5 = b8.pixelLeft + "px";
                    b8.left = b3;
                    if (b7) {
                        b6.left = b7
                    }
                }
                return b5 === "" ? "auto" : b5
            }
        }
    }

    function bL(e, b3, b2) {
        var b1 = bh.exec(b3);
        return b1 ? Math.max(0, b1[1] - (b2 || 0)) + (b1[2] || "px") : b3
    }

    function q(e, b4, b1, b3, b5) {
        var b2 = b1 === (b3 ? "border" : "content") ? 4 : b4 === "width" ? 1 : 0, b6 = 0;
        for (; b2 < 4; b2 += 2) {
            if (b1 === "margin") {
                b6 += aw.css(e, b1 + N[b2], true, b5)
            }
            if (b3) {
                if (b1 === "content") {
                    b6 -= aw.css(e, "padding" + N[b2], true, b5)
                }
                if (b1 !== "margin") {
                    b6 -= aw.css(e, "border" + N[b2] + "Width", true, b5)
                }
            } else {
                b6 += aw.css(e, "padding" + N[b2], true, b5);
                if (b1 !== "padding") {
                    b6 += aw.css(e, "border" + N[b2] + "Width", true, b5)
                }
            }
        }
        return b6
    }

    function ak(e, b3, b1) {
        var b6 = true, b5 = b3 === "width" ? e.offsetWidth : e.offsetHeight, b4 = aj(e),
            b2 = aw.support.boxSizing && aw.css(e, "boxSizing", false, b4) === "border-box";
        if (b5 <= 0 || b5 == null) {
            b5 = R(e, b3, b4);
            if (b5 < 0 || b5 == null) {
                b5 = e.style[b3]
            }
            if (bg.test(b5)) {
                return b5
            }
            b6 = b2 && (aw.support.boxSizingReliable || b5 === e.style[b3]);
            b5 = parseFloat(b5) || 0
        }
        return (b5 + q(e, b3, b1 || (b2 ? "border" : "content"), b6, b4)) + "px"
    }

    function M(b2) {
        var b1 = V, e = Y[b2];
        if (!e) {
            e = d(b2, b1);
            if (e === "none" || !e) {
                an = (an || aw("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(b1.documentElement);
                b1 = (an[0].contentWindow || an[0].contentDocument).document;
                b1.write("<!doctype html><html><body>");
                b1.close();
                e = d(b2, b1);
                an.detach()
            }
            Y[b2] = e
        }
        return e
    }

    function d(b3, b1) {
        var b2 = aw(b1.createElement(b3)).appendTo(b1.body), e = aw.css(b2[0], "display");
        b2.remove();
        return e
    }

    aw.each(["height", "width"], function (e, b1) {
        aw.cssHooks[b1] = {
            get: function (b3, b2, b4) {
                if (b2) {
                    return b3.offsetWidth === 0 && aQ.test(aw.css(b3, "display")) ? aw.swap(b3, Q, function () {
                        return ak(b3, b1, b4)
                    }) : ak(b3, b1, b4)
                }
            }, set: function (b2, b5, b3) {
                var b4 = b3 && aj(b2);
                return bL(b2, b5, b3 ? q(b2, b1, b3, aw.support.boxSizing && aw.css(b2, "boxSizing", false, b4) === "border-box", b4) : 0)
            }
        }
    });
    if (!aw.support.opacity) {
        aw.cssHooks.opacity = {
            get: function (b1, e) {
                return bj.test((e && b1.currentStyle ? b1.currentStyle.filter : b1.style.filter) || "") ? (0.01 * parseFloat(RegExp.$1)) + "" : e ? "1" : ""
            }, set: function (b1, b5) {
                var b4 = b1.style, e = b1.currentStyle, b3 = aw.isNumeric(b5) ? "alpha(opacity=" + b5 * 100 + ")" : "",
                    b2 = e && e.filter || b4.filter || "";
                b4.zoom = 1;
                if ((b5 >= 1 || b5 === "") && aw.trim(b2.replace(aG, "")) === "" && b4.removeAttribute) {
                    b4.removeAttribute("filter");
                    if (b5 === "" || e && !e.filter) {
                        return
                    }
                }
                b4.filter = aG.test(b2) ? b2.replace(aG, b3) : b2 + " " + b3
            }
        }
    }
    aw(function () {
        if (!aw.support.reliableMarginRight) {
            aw.cssHooks.marginRight = {
                get: function (b1, e) {
                    if (e) {
                        return aw.swap(b1, {display: "inline-block"}, R, [b1, "marginRight"])
                    }
                }
            }
        }
        if (!aw.support.pixelPosition && aw.fn.position) {
            aw.each(["top", "left"], function (e, b1) {
                aw.cssHooks[b1] = {
                    get: function (b3, b2) {
                        if (b2) {
                            b2 = R(b3, b1);
                            return bg.test(b2) ? aw(b3).position()[b1] + "px" : b2
                        }
                    }
                }
            })
        }
    });
    if (aw.expr && aw.expr.filters) {
        aw.expr.filters.hidden = function (e) {
            return (e.offsetWidth === 0 && e.offsetHeight === 0) || (!aw.support.reliableHiddenOffsets && ((e.style && e.style.display) || aw.css(e, "display")) === "none")
        };
        aw.expr.filters.visible = function (e) {
            return !aw.expr.filters.hidden(e)
        }
    }
    aw.each({margin: "", padding: "", border: "Width"}, function (e, b1) {
        aw.cssHooks[e + b1] = {
            expand: function (b5) {
                var b3 = 0, b2 = {}, b4 = typeof b5 === "string" ? b5.split(" ") : [b5];
                for (; b3 < 4; b3++) {
                    b2[e + N[b3] + b1] = b4[b3] || b4[b3 - 2] || b4[0]
                }
                return b2
            }
        };
        if (!a8.test(e)) {
            aw.cssHooks[e + b1].set = bL
        }
    });
    var aF = /%20/g, aJ = /\[\]$/, aO = /\r?\n/g, bv = /^(?:submit|button|image|reset)$/i,
        bu = /^(?:input|select|textarea|keygen)/i;
    aw.fn.extend({
        serialize: function () {
            return aw.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                var e = aw.prop(this, "elements");
                return e ? aw.makeArray(e) : this
            }).filter(function () {
                var e = this.type;
                return this.name && !aw(this).is(":disabled") && bu.test(this.nodeName) && !bv.test(e) && (this.checked || !ay.test(e))
            }).map(function (b1, e) {
                var b2 = aw(this).val();
                return b2 == null ? null : aw.isArray(b2) ? aw.map(b2, function (b3) {
                    return {name: e.name, value: b3.replace(aO, "\r\n")}
                }) : {name: e.name, value: b2.replace(aO, "\r\n")}
            }).get()
        }
    });
    aw.param = function (e, b4) {
        var b2, b3 = [], b1 = function (b5, b6) {
            b6 = aw.isFunction(b6) ? b6() : (b6 == null ? "" : b6);
            b3[b3.length] = encodeURIComponent(b5) + "=" + encodeURIComponent(b6)
        };
        if (b4 === bS) {
            b4 = aw.ajaxSettings && aw.ajaxSettings.traditional
        }
        if (aw.isArray(e) || (e.jquery && !aw.isPlainObject(e))) {
            aw.each(e, function () {
                b1(this.name, this.value)
            })
        } else {
            for (b2 in e) {
                s(b2, e[b2], b4, b1)
            }
        }
        return b3.join("&").replace(aF, "+")
    };

    function s(b3, b2, b4, e) {
        var b1;
        if (aw.isArray(b2)) {
            aw.each(b2, function (b5, b6) {
                if (b4 || aJ.test(b3)) {
                    e(b3, b6)
                } else {
                    s(b3 + "[" + (typeof b6 === "object" ? b5 : "") + "]", b6, b4, e)
                }
            })
        } else {
            if (!b4 && aw.type(b2) === "object") {
                for (b1 in b2) {
                    s(b3 + "[" + b1 + "]", b2[b1], b4, e)
                }
            } else {
                e(b3, b2)
            }
        }
    }

    var m, l, g = aw.now(), h = /\?/, a0 = /#.*$/, bz = /([?&])_=[^&]*/, a1 = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
        a7 = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, bd = /^(?:GET|HEAD)$/, bm = /^\/\//,
        bC = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, c = aw.fn.load, aD = {}, bP = {}, n = "*/".concat("*");
    try {
        l = ax.href
    } catch (X) {
        l = V.createElement("a");
        l.href = "";
        l = l.href
    }
    m = bC.exec(l.toLowerCase()) || [];

    function f(e) {
        return function (b2, b4) {
            if (typeof b2 !== "string") {
                b4 = b2;
                b2 = "*"
            }
            var b1, b5 = 0, b3 = b2.toLowerCase().match(B) || [];
            if (aw.isFunction(b4)) {
                while ((b1 = b3[b5++])) {
                    if (b1[0] === "+") {
                        b1 = b1.slice(1) || "*";
                        (e[b1] = e[b1] || []).unshift(b4)
                    } else {
                        (e[b1] = e[b1] || []).push(b4)
                    }
                }
            }
        }
    }

    function ao(b6, b3, b4, b2) {
        var b1 = {}, b5 = (b6 === bP);

        function e(b7) {
            var b8;
            b1[b7] = true;
            aw.each(b6[b7] || [], function (b9, cb) {
                var ca = cb(b3, b4, b2);
                if (typeof ca === "string" && !b5 && !b1[ca]) {
                    b3.dataTypes.unshift(ca);
                    e(ca);
                    return false
                } else {
                    if (b5) {
                        return !(b8 = ca)
                    }
                }
            });
            return b8
        }

        return e(b3.dataTypes[0]) || !b1["*"] && e("*")
    }

    function j(b4, b3) {
        var b2, e, b1 = aw.ajaxSettings.flatOptions || {};
        for (b2 in b3) {
            if (b3[b2] !== bS) {
                (b1[b2] ? b4 : (e || (e = {})))[b2] = b3[b2]
            }
        }
        if (e) {
            aw.extend(true, b4, e)
        }
        return b4
    }

    aw.fn.load = function (b7, b2, e) {
        if (typeof b7 !== "string" && c) {
            return c.apply(this, arguments)
        }
        var b4, b6, b3, b5 = this, b1 = b7.indexOf(" ");
        if (b1 >= 0) {
            b4 = b7.slice(b1, b7.length);
            b7 = b7.slice(0, b1)
        }
        if (aw.isFunction(b2)) {
            e = b2;
            b2 = bS
        } else {
            if (b2 && typeof b2 === "object") {
                b6 = "POST"
            }
        }
        if (b5.length > 0) {
            aw.ajax({url: b7, type: b6, dataType: "html", data: b2}).done(function (b8) {
                b3 = arguments;
                b5.html(b4 ? aw("<div>").append(aw.parseHTML(b8)).find(b4) : b8)
            }).complete(e && function (b8, b9) {
                b5.each(e, b3 || [b8.responseText, b9, b8])
            })
        }
        return this
    };
    aw.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, b1) {
        aw.fn[b1] = function (b2) {
            return this.on(b1, b2)
        }
    });
    aw.each(["get", "post"], function (e, b1) {
        aw[b1] = function (b5, b3, b2, b4) {
            if (aw.isFunction(b3)) {
                b4 = b4 || b2;
                b2 = b3;
                b3 = bS
            }
            return aw.ajax({url: b5, type: b1, dataType: b4, data: b3, success: b2})
        }
    });
    aw.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: l,
            type: "GET",
            isLocal: a7.test(m[1]),
            global: true,
            processData: true,
            async: true,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": n,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {xml: /xml/, html: /html/, json: /json/},
            responseFields: {xml: "responseXML", text: "responseText"},
            converters: {"* text": bU.String, "text html": true, "text json": aw.parseJSON, "text xml": aw.parseXML},
            flatOptions: {url: true, context: true}
        },
        ajaxSetup: function (b1, e) {
            return e ? j(j(b1, aw.ajaxSettings), e) : j(aw.ajaxSettings, b1)
        },
        ajaxPrefilter: f(aD),
        ajaxTransport: f(bP),
        ajax: function (cn, cb) {
            if (typeof cn === "object") {
                cb = cn;
                cn = bS
            }
            cb = cb || {};
            var cm, b1, cg, cf, cl, cc, b7, b9, ch = aw.ajaxSetup({}, cb), b2 = ch.context || ch,
                b8 = ch.context && (b2.nodeType || b2.jquery) ? aw(b2) : aw.event, b4 = aw.Deferred(),
                b3 = aw.Callbacks("once memory"), cj = ch.statusCode || {}, cd = {}, ce = {}, ci = 0, ck = "canceled",
                ca = {
                    readyState: 0, getResponseHeader: function (e) {
                        var co;
                        if (ci === 2) {
                            if (!cf) {
                                cf = {};
                                while ((co = a1.exec(cg))) {
                                    cf[co[1].toLowerCase()] = co[2]
                                }
                            }
                            co = cf[e.toLowerCase()]
                        }
                        return co == null ? null : co
                    }, getAllResponseHeaders: function () {
                        return ci === 2 ? cg : null
                    }, setRequestHeader: function (co, cp) {
                        var e = co.toLowerCase();
                        if (!ci) {
                            co = ce[e] = ce[e] || co;
                            cd[co] = cp
                        }
                        return this
                    }, overrideMimeType: function (e) {
                        if (!ci) {
                            ch.mimeType = e
                        }
                        return this
                    }, statusCode: function (co) {
                        var e;
                        if (co) {
                            if (ci < 2) {
                                for (e in co) {
                                    cj[e] = [cj[e], co[e]]
                                }
                            } else {
                                ca.always(co[ca.status])
                            }
                        }
                        return this
                    }, abort: function (co) {
                        var e = co || ck;
                        if (cm) {
                            cm.abort(e)
                        }
                        b5(0, e);
                        return this
                    }
                };
            b4.promise(ca).complete = b3.add;
            ca.success = ca.done;
            ca.error = ca.fail;
            ch.url = ((cn || ch.url || l) + "").replace(a0, "").replace(bm, m[1] + "//");
            ch.type = cb.method || cb.type || ch.method || ch.type;
            ch.dataTypes = aw.trim(ch.dataType || "*").toLowerCase().match(B) || [""];
            if (ch.crossDomain == null) {
                cc = bC.exec(ch.url.toLowerCase());
                ch.crossDomain = !!(cc && (cc[1] !== m[1] || cc[2] !== m[2] || (cc[3] || (cc[1] === "http:" ? 80 : 443)) != (m[3] || (m[1] === "http:" ? 80 : 443))))
            }
            if (ch.data && ch.processData && typeof ch.data !== "string") {
                ch.data = aw.param(ch.data, ch.traditional)
            }
            ao(aD, ch, cb, ca);
            if (ci === 2) {
                return ca
            }
            b7 = ch.global;
            if (b7 && aw.active++ === 0) {
                aw.event.trigger("ajaxStart")
            }
            ch.type = ch.type.toUpperCase();
            ch.hasContent = !bd.test(ch.type);
            b1 = ch.url;
            if (!ch.hasContent) {
                if (ch.data) {
                    b1 = (ch.url += (h.test(b1) ? "&" : "?") + ch.data);
                    delete ch.data
                }
                if (ch.cache === false) {
                    ch.url = bz.test(b1) ? b1.replace(bz, "$1_=" + g++) : b1 + (h.test(b1) ? "&" : "?") + "_=" + g++
                }
            }
            if (ch.ifModified) {
                if (aw.lastModified[b1]) {
                    ca.setRequestHeader("If-Modified-Since", aw.lastModified[b1])
                }
                if (aw.etag[b1]) {
                    ca.setRequestHeader("If-None-Match", aw.etag[b1])
                }
            }
            if (ch.data && ch.hasContent && ch.contentType !== false || cb.contentType) {
                ca.setRequestHeader("Content-Type", ch.contentType)
            }
            ca.setRequestHeader("Accept", ch.dataTypes[0] && ch.accepts[ch.dataTypes[0]] ? ch.accepts[ch.dataTypes[0]] + (ch.dataTypes[0] !== "*" ? ", " + n + "; q=0.01" : "") : ch.accepts["*"]);
            for (b9 in ch.headers) {
                ca.setRequestHeader(b9, ch.headers[b9])
            }
            if (ch.beforeSend && (ch.beforeSend.call(b2, ca, ch) === false || ci === 2)) {
                return ca.abort()
            }
            ck = "abort";
            for (b9 in {success: 1, error: 1, complete: 1}) {
                ca[b9](ch[b9])
            }
            cm = ao(bP, ch, cb, ca);
            if (!cm) {
                b5(-1, "No Transport")
            } else {
                ca.readyState = 1;
                if (b7) {
                    b8.trigger("ajaxSend", [ca, ch])
                }
                if (ch.async && ch.timeout > 0) {
                    cl = setTimeout(function () {
                        ca.abort("timeout")
                    }, ch.timeout)
                }
                try {
                    ci = 1;
                    cm.send(cd, b5)
                } catch (b6) {
                    if (ci < 2) {
                        b5(-1, b6)
                    } else {
                        throw b6
                    }
                }
            }

            function b5(cu, cr, ct, co) {
                var cp, cw, e, cs, cq, cv = cr;
                if (ci === 2) {
                    return
                }
                ci = 2;
                if (cl) {
                    clearTimeout(cl)
                }
                cm = bS;
                cg = co || "";
                ca.readyState = cu > 0 ? 4 : 0;
                if (ct) {
                    cs = k(ch, ca, ct)
                }
                if (cu >= 200 && cu < 300 || cu === 304) {
                    if (ch.ifModified) {
                        cq = ca.getResponseHeader("Last-Modified");
                        if (cq) {
                            aw.lastModified[b1] = cq
                        }
                        cq = ca.getResponseHeader("etag");
                        if (cq) {
                            aw.etag[b1] = cq
                        }
                    }
                    if (cu === 304) {
                        cp = true;
                        cv = "notmodified"
                    } else {
                        cp = i(ch, cs);
                        cv = cp.state;
                        cw = cp.data;
                        e = cp.error;
                        cp = !e
                    }
                } else {
                    e = cv;
                    if (cu || !cv) {
                        cv = "error";
                        if (cu < 0) {
                            cu = 0
                        }
                    }
                }
                ca.status = cu;
                ca.statusText = (cr || cv) + "";
                if (cp) {
                    b4.resolveWith(b2, [cw, cv, ca])
                } else {
                    b4.rejectWith(b2, [ca, cv, e])
                }
                ca.statusCode(cj);
                cj = bS;
                if (b7) {
                    b8.trigger(cp ? "ajaxSuccess" : "ajaxError", [ca, ch, cp ? cw : e])
                }
                b3.fireWith(b2, [ca, cv]);
                if (b7) {
                    b8.trigger("ajaxComplete", [ca, ch]);
                    if (!(--aw.active)) {
                        aw.event.trigger("ajaxStop")
                    }
                }
            }

            return ca
        },
        getScript: function (b1, e) {
            return aw.get(b1, bS, e, "script")
        },
        getJSON: function (b2, b1, e) {
            return aw.get(b2, b1, e, "json")
        }
    });

    function k(b8, b5, b7) {
        var b1, b9, b3, b4, e = b8.contents, b2 = b8.dataTypes, b6 = b8.responseFields;
        for (b9 in b6) {
            if (b9 in b7) {
                b5[b6[b9]] = b7[b9]
            }
        }
        while (b2[0] === "*") {
            b2.shift();
            if (b1 === bS) {
                b1 = b8.mimeType || b5.getResponseHeader("Content-Type")
            }
        }
        if (b1) {
            for (b9 in e) {
                if (e[b9] && e[b9].test(b1)) {
                    b2.unshift(b9);
                    break
                }
            }
        }
        if (b2[0] in b7) {
            b3 = b2[0]
        } else {
            for (b9 in b7) {
                if (!b2[0] || b8.converters[b9 + " " + b2[0]]) {
                    b3 = b9;
                    break
                }
                if (!b4) {
                    b4 = b9
                }
            }
            b3 = b3 || b4
        }
        if (b3) {
            if (b3 !== b2[0]) {
                b2.unshift(b3)
            }
            return b7[b3]
        }
    }

    function i(ca, b9) {
        var b1, b2, b4, cb, b3 = {}, b7 = 0, b5 = ca.dataTypes.slice(), b8 = b5[0];
        if (ca.dataFilter) {
            b9 = ca.dataFilter(b9, ca.dataType)
        }
        if (b5[1]) {
            for (b1 in ca.converters) {
                b3[b1.toLowerCase()] = ca.converters[b1]
            }
        }
        for (; (b4 = b5[++b7]);) {
            if (b4 !== "*") {
                if (b8 !== "*" && b8 !== b4) {
                    b1 = b3[b8 + " " + b4] || b3["* " + b4];
                    if (!b1) {
                        for (b2 in b3) {
                            cb = b2.split(" ");
                            if (cb[1] === b4) {
                                b1 = b3[b8 + " " + cb[0]] || b3["* " + cb[0]];
                                if (b1) {
                                    if (b1 === true) {
                                        b1 = b3[b2]
                                    } else {
                                        if (b3[b2] !== true) {
                                            b4 = cb[0];
                                            b5.splice(b7--, 0, b4)
                                        }
                                    }
                                    break
                                }
                            }
                        }
                    }
                    if (b1 !== true) {
                        if (b1 && ca["throws"]) {
                            b9 = b1(b9)
                        } else {
                            try {
                                b9 = b1(b9)
                            } catch (b6) {
                                return {state: "parsererror", error: b1 ? b6 : "No conversion from " + b8 + " to " + b4}
                            }
                        }
                    }
                }
                b8 = b4
            }
        }
        return {state: "success", data: b9}
    }

    aw.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /(?:java|ecma)script/},
        converters: {
            "text script": function (e) {
                aw.globalEval(e);
                return e
            }
        }
    });
    aw.ajaxPrefilter("script", function (e) {
        if (e.cache === bS) {
            e.cache = false
        }
        if (e.crossDomain) {
            e.type = "GET";
            e.global = false
        }
    });
    aw.ajaxTransport("script", function (b1) {
        if (b1.crossDomain) {
            var b2, e = V.head || aw("head")[0] || V.documentElement;
            return {
                send: function (b3, b4) {
                    b2 = V.createElement("script");
                    b2.async = true;
                    if (b1.scriptCharset) {
                        b2.charset = b1.scriptCharset
                    }
                    b2.src = b1.url;
                    b2.onload = b2.onreadystatechange = function (b5, b6) {
                        if (b6 || !b2.readyState || /loaded|complete/.test(b2.readyState)) {
                            b2.onload = b2.onreadystatechange = null;
                            if (b2.parentNode) {
                                b2.parentNode.removeChild(b2)
                            }
                            b2 = null;
                            if (!b6) {
                                b4(200, "success")
                            }
                        }
                    };
                    e.insertBefore(b2, e.firstChild)
                }, abort: function () {
                    if (b2) {
                        b2.onload(bS, true)
                    }
                }
            }
        }
    });
    var aB = [], a4 = /(=)\?(?=&|$)|\?\?/;
    aw.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            var e = aB.pop() || (aw.expando + "_" + (g++));
            this[e] = true;
            return e
        }
    });
    aw.ajaxPrefilter("json jsonp", function (b6, b3, b1) {
        var e, b4, b5,
            b2 = b6.jsonp !== false && (a4.test(b6.url) ? "url" : typeof b6.data === "string" && !(b6.contentType || "").indexOf("application/x-www-form-urlencoded") && a4.test(b6.data) && "data");
        if (b2 || b6.dataTypes[0] === "jsonp") {
            e = b6.jsonpCallback = aw.isFunction(b6.jsonpCallback) ? b6.jsonpCallback() : b6.jsonpCallback;
            if (b2) {
                b6[b2] = b6[b2].replace(a4, "$1" + e)
            } else {
                if (b6.jsonp !== false) {
                    b6.url += (h.test(b6.url) ? "&" : "?") + b6.jsonp + "=" + e
                }
            }
            b6.converters["script json"] = function () {
                if (!b5) {
                    aw.error(e + " was not called")
                }
                return b5[0]
            };
            b6.dataTypes[0] = "json";
            b4 = bU[e];
            bU[e] = function () {
                b5 = arguments
            };
            b1.always(function () {
                bU[e] = b4;
                if (b6[e]) {
                    b6.jsonpCallback = b3.jsonpCallback;
                    aB.push(e)
                }
                if (b5 && aw.isFunction(b4)) {
                    b4(b5[0])
                }
                b5 = b4 = bS
            });
            return "script"
        }
    });
    var bX, b0, bY = 0, bZ = bU.ActiveXObject && function () {
        var e;
        for (e in bX) {
            bX[e](bS, true)
        }
    };

    function K() {
        try {
            return new bU.XMLHttpRequest()
        } catch (b1) {
        }
    }

    function G() {
        try {
            return new bU.ActiveXObject("Microsoft.XMLHTTP")
        } catch (b1) {
        }
    }

    aw.ajaxSettings.xhr = bU.ActiveXObject ? function () {
        return !this.isLocal && K() || G()
    } : K;
    b0 = aw.ajaxSettings.xhr();
    aw.support.cors = !!b0 && ("withCredentials" in b0);
    b0 = aw.support.ajax = !!b0;
    if (b0) {
        aw.ajaxTransport(function (b1) {
            if (!b1.crossDomain || aw.support.cors) {
                var e;
                return {
                    send: function (b5, b2) {
                        var b4, b6, b7 = b1.xhr();
                        if (b1.username) {
                            b7.open(b1.type, b1.url, b1.async, b1.username, b1.password)
                        } else {
                            b7.open(b1.type, b1.url, b1.async)
                        }
                        if (b1.xhrFields) {
                            for (b6 in b1.xhrFields) {
                                b7[b6] = b1.xhrFields[b6]
                            }
                        }
                        if (b1.mimeType && b7.overrideMimeType) {
                            b7.overrideMimeType(b1.mimeType)
                        }
                        if (!b1.crossDomain && !b5["X-Requested-With"]) {
                            b5["X-Requested-With"] = "XMLHttpRequest"
                        }
                        try {
                            for (b6 in b5) {
                                b7.setRequestHeader(b6, b5[b6])
                            }
                        } catch (b3) {
                        }
                        b7.send((b1.hasContent && b1.data) || null);
                        e = function (b8, cb) {
                            var ce, cf, cc, cd, cg;
                            try {
                                if (e && (cb || b7.readyState === 4)) {
                                    e = bS;
                                    if (b4) {
                                        b7.onreadystatechange = aw.noop;
                                        if (bZ) {
                                            delete bX[b4]
                                        }
                                    }
                                    if (cb) {
                                        if (b7.readyState !== 4) {
                                            b7.abort()
                                        }
                                    } else {
                                        cd = {};
                                        ce = b7.status;
                                        cg = b7.responseXML;
                                        cc = b7.getAllResponseHeaders();
                                        if (cg && cg.documentElement) {
                                            cd.xml = cg
                                        }
                                        if (typeof b7.responseText === "string") {
                                            cd.text = b7.responseText
                                        }
                                        try {
                                            cf = b7.statusText
                                        } catch (b9) {
                                            cf = ""
                                        }
                                        if (!ce && b1.isLocal && !b1.crossDomain) {
                                            ce = cd.text ? 200 : 404
                                        } else {
                                            if (ce === 1223) {
                                                ce = 204
                                            }
                                        }
                                    }
                                }
                            } catch (ca) {
                                if (!cb) {
                                    b2(-1, ca)
                                }
                            }
                            if (cd) {
                                b2(ce, cf, cd, cc)
                            }
                        };
                        if (!b1.async) {
                            e()
                        } else {
                            if (b7.readyState === 4) {
                                setTimeout(e)
                            } else {
                                b4 = ++bY;
                                if (bZ) {
                                    if (!bX) {
                                        bX = {};
                                        aw(bU).unload(bZ)
                                    }
                                    bX[b4] = e
                                }
                                b7.onreadystatechange = e
                            }
                        }
                    }, abort: function () {
                        if (e) {
                            e(bS, true)
                        }
                    }
                }
            }
        })
    }
    var ae, bO, aZ = /^(?:toggle|show|hide)$/, aY = new RegExp("^(?:([+-])=|)(" + z + ")([a-z%]*)$", "i"),
        bq = /queueHooks$/, p = [T], bR = {
            "*": [function (b3, b9) {
                var e, b8, b7 = this.createTween(b3, b9), b2 = aY.exec(b9), b6 = b7.cur(), b5 = +b6 || 0, b4 = 1, b1 = 20;
                if (b2) {
                    e = +b2[2];
                    b8 = b2[3] || (aw.cssNumber[b3] ? "" : "px");
                    if (b8 !== "px" && b5) {
                        b5 = aw.css(b7.elem, b3, true) || e || 1;
                        do {
                            b4 = b4 || ".5";
                            b5 = b5 / b4;
                            aw.style(b7.elem, b3, b5 + b8)
                        } while (b4 !== (b4 = b7.cur() / b6) && b4 !== 1 && --b1)
                    }
                    b7.unit = b8;
                    b7.start = b5;
                    b7.end = b2[1] ? b5 + (b2[1] + 1) * e : e
                }
                return b7
            }]
        };

    function H() {
        setTimeout(function () {
            ae = bS
        });
        return (ae = aw.now())
    }

    function L(e, b1) {
        aw.each(b1, function (b5, b6) {
            var b2 = (bR[b5] || []).concat(bR["*"]), b3 = 0, b4 = b2.length;
            for (; b3 < b4; b3++) {
                if (b2[b3].call(e, b5, b6)) {
                    return
                }
            }
        })
    }

    function o(b2, b6, b5) {
        var b8, b9, b3 = 0, b4 = p.length, b1 = aw.Deferred().always(function () {
            delete ca.elem
        }), ca = function () {
            if (b9) {
                return false
            }
            var cb = ae || H(), cf = Math.max(0, e.startTime + e.duration - cb), cg = cf / e.duration || 0, ce = 1 - cg,
                cc = 0, cd = e.tweens.length;
            for (; cc < cd; cc++) {
                e.tweens[cc].run(ce)
            }
            b1.notifyWith(b2, [e, ce, cf]);
            if (ce < 1 && cd) {
                return cf
            } else {
                b1.resolveWith(b2, [e]);
                return false
            }
        }, e = b1.promise({
            elem: b2,
            props: aw.extend({}, b6),
            opts: aw.extend(true, {specialEasing: {}}, b5),
            originalProperties: b6,
            originalOptions: b5,
            startTime: ae || H(),
            duration: b5.duration,
            tweens: [],
            createTween: function (cc, cb) {
                var cd = aw.Tween(b2, e.opts, cc, cb, e.opts.specialEasing[cc] || e.opts.easing);
                e.tweens.push(cd);
                return cd
            },
            stop: function (cb) {
                var cc = 0, cd = cb ? e.tweens.length : 0;
                if (b9) {
                    return this
                }
                b9 = true;
                for (; cc < cd; cc++) {
                    e.tweens[cc].run(1)
                }
                if (cb) {
                    b1.resolveWith(b2, [e, cb])
                } else {
                    b1.rejectWith(b2, [e, cb])
                }
                return this
            }
        }), b7 = e.props;
        aE(b7, e.opts.specialEasing);
        for (; b3 < b4; b3++) {
            b8 = p[b3].call(e, b2, b7, e.opts);
            if (b8) {
                return b8
            }
        }
        L(e, b7);
        if (aw.isFunction(e.opts.start)) {
            e.opts.start.call(b2, e)
        }
        aw.fx.timer(aw.extend(ca, {elem: b2, anim: e, queue: e.opts.queue}));
        return e.progress(e.opts.progress).done(e.opts.done, e.opts.complete).fail(e.opts.fail).always(e.opts.always)
    }

    function aE(b4, b5) {
        var b2, b3, e, b6, b1;
        for (b2 in b4) {
            b3 = aw.camelCase(b2);
            e = b5[b3];
            b6 = b4[b2];
            if (aw.isArray(b6)) {
                e = b6[1];
                b6 = b4[b2] = b6[0]
            }
            if (b2 !== b3) {
                b4[b3] = b6;
                delete b4[b2]
            }
            b1 = aw.cssHooks[b3];
            if (b1 && "expand" in b1) {
                b6 = b1.expand(b6);
                delete b4[b3];
                for (b2 in b6) {
                    if (!(b2 in b4)) {
                        b4[b2] = b6[b2];
                        b5[b2] = e
                    }
                }
            } else {
                b5[b3] = e
            }
        }
    }

    aw.Animation = aw.extend(o, {
        tweener: function (b4, e) {
            if (aw.isFunction(b4)) {
                e = b4;
                b4 = ["*"]
            } else {
                b4 = b4.split(" ")
            }
            var b3, b1 = 0, b2 = b4.length;
            for (; b1 < b2; b1++) {
                b3 = b4[b1];
                bR[b3] = bR[b3] || [];
                bR[b3].unshift(e)
            }
        }, prefilter: function (e, b1) {
            if (b1) {
                p.unshift(e)
            } else {
                p.push(e)
            }
        }
    });

    function T(b2, cc, b9) {
        var b6, cb, cg, b7, b1, ce, cf, b5, b8, e = this, cd = b2.style, ca = {}, b3 = [], b4 = b2.nodeType && au(b2);
        if (!b9.queue) {
            b5 = aw._queueHooks(b2, "fx");
            if (b5.unqueued == null) {
                b5.unqueued = 0;
                b8 = b5.empty.fire;
                b5.empty.fire = function () {
                    if (!b5.unqueued) {
                        b8()
                    }
                }
            }
            b5.unqueued++;
            e.always(function () {
                e.always(function () {
                    b5.unqueued--;
                    if (!aw.queue(b2, "fx").length) {
                        b5.empty.fire()
                    }
                })
            })
        }
        if (b2.nodeType === 1 && ("height" in cc || "width" in cc)) {
            b9.overflow = [cd.overflow, cd.overflowX, cd.overflowY];
            if (aw.css(b2, "display") === "inline" && aw.css(b2, "float") === "none") {
                if (!aw.support.inlineBlockNeedsLayout || M(b2.nodeName) === "inline") {
                    cd.display = "inline-block"
                } else {
                    cd.zoom = 1
                }
            }
        }
        if (b9.overflow) {
            cd.overflow = "hidden";
            if (!aw.support.shrinkWrapBlocks) {
                e.done(function () {
                    cd.overflow = b9.overflow[0];
                    cd.overflowX = b9.overflow[1];
                    cd.overflowY = b9.overflow[2]
                })
            }
        }
        for (b6 in cc) {
            cg = cc[b6];
            if (aZ.exec(cg)) {
                delete cc[b6];
                ce = ce || cg === "toggle";
                if (cg === (b4 ? "hide" : "show")) {
                    continue
                }
                b3.push(b6)
            }
        }
        b7 = b3.length;
        if (b7) {
            b1 = aw._data(b2, "fxshow") || aw._data(b2, "fxshow", {});
            if ("hidden" in b1) {
                b4 = b1.hidden
            }
            if (ce) {
                b1.hidden = !b4
            }
            if (b4) {
                aw(b2).show()
            } else {
                e.done(function () {
                    aw(b2).hide()
                })
            }
            e.done(function () {
                var ch;
                aw._removeData(b2, "fxshow");
                for (ch in ca) {
                    aw.style(b2, ch, ca[ch])
                }
            });
            for (b6 = 0; b6 < b7; b6++) {
                cb = b3[b6];
                cf = e.createTween(cb, b4 ? b1[cb] : 0);
                ca[cb] = b1[cb] || aw.style(b2, cb);
                if (!(cb in b1)) {
                    b1[cb] = cf.start;
                    if (b4) {
                        cf.end = cf.start;
                        cf.start = cb === "width" || cb === "height" ? 1 : 0
                    }
                }
            }
        }
    }

    function bQ(b1, b3, b4, b2, e) {
        return new bQ.prototype.init(b1, b3, b4, b2, e)
    }

    aw.Tween = bQ;
    bQ.prototype = {
        constructor: bQ, init: function (b1, b3, b4, b2, e, b5) {
            this.elem = b1;
            this.prop = b4;
            this.easing = e || "swing";
            this.options = b3;
            this.start = this.now = this.cur();
            this.end = b2;
            this.unit = b5 || (aw.cssNumber[b4] ? "" : "px")
        }, cur: function () {
            var e = bQ.propHooks[this.prop];
            return e && e.get ? e.get(this) : bQ.propHooks._default.get(this)
        }, run: function (b2) {
            var e, b1 = bQ.propHooks[this.prop];
            if (this.options.duration) {
                this.pos = e = aw.easing[this.easing](b2, this.options.duration * b2, 0, 1, this.options.duration)
            } else {
                this.pos = e = b2
            }
            this.now = (this.end - this.start) * e + this.start;
            if (this.options.step) {
                this.options.step.call(this.elem, this.now, this)
            }
            if (b1 && b1.set) {
                b1.set(this)
            } else {
                bQ.propHooks._default.set(this)
            }
            return this
        }
    };
    bQ.prototype.init.prototype = bQ.prototype;
    bQ.propHooks = {
        _default: {
            get: function (b1) {
                var e;
                if (b1.elem[b1.prop] != null && (!b1.elem.style || b1.elem.style[b1.prop] == null)) {
                    return b1.elem[b1.prop]
                }
                e = aw.css(b1.elem, b1.prop, "auto");
                return !e || e === "auto" ? 0 : e
            }, set: function (e) {
                if (aw.fx.step[e.prop]) {
                    aw.fx.step[e.prop](e)
                } else {
                    if (e.elem.style && (e.elem.style[aw.cssProps[e.prop]] != null || aw.cssHooks[e.prop])) {
                        aw.style(e.elem, e.prop, e.now + e.unit)
                    } else {
                        e.elem[e.prop] = e.now
                    }
                }
            }
        }
    };
    bQ.propHooks.scrollTop = bQ.propHooks.scrollLeft = {
        set: function (e) {
            if (e.elem.nodeType && e.elem.parentNode) {
                e.elem[e.prop] = e.now
            }
        }
    };
    aw.each(["toggle", "show", "hide"], function (b1, b2) {
        var e = aw.fn[b2];
        aw.fn[b2] = function (b5, b4, b3) {
            return b5 == null || typeof b5 === "boolean" ? e.apply(this, arguments) : this.animate(af(b2, true), b5, b4, b3)
        }
    });
    aw.fn.extend({
        fadeTo: function (b2, b3, b1, e) {
            return this.filter(au).css("opacity", 0).show().end().animate({opacity: b3}, b2, b1, e)
        }, animate: function (b5, b6, b2, e) {
            var b3 = aw.isEmptyObject(b5), b4 = aw.speed(b6, b2, e), b1 = function () {
                var b7 = o(this, aw.extend({}, b5), b4);
                b1.finish = function () {
                    b7.stop(true)
                };
                if (b3 || aw._data(this, "finish")) {
                    b7.stop(true)
                }
            };
            b1.finish = b1;
            return b3 || b4.queue === false ? this.each(b1) : this.queue(b4.queue, b1)
        }, stop: function (b3, e, b1) {
            var b2 = function (b4) {
                var b5 = b4.stop;
                delete b4.stop;
                b5(b1)
            };
            if (typeof b3 !== "string") {
                b1 = e;
                e = b3;
                b3 = bS
            }
            if (e && b3 !== false) {
                this.queue(b3 || "fx", [])
            }
            return this.each(function () {
                var b5 = true, b6 = b3 != null && b3 + "queueHooks", b7 = aw.timers, b4 = aw._data(this);
                if (b6) {
                    if (b4[b6] && b4[b6].stop) {
                        b2(b4[b6])
                    }
                } else {
                    for (b6 in b4) {
                        if (b4[b6] && b4[b6].stop && bq.test(b6)) {
                            b2(b4[b6])
                        }
                    }
                }
                for (b6 = b7.length; b6--;) {
                    if (b7[b6].elem === this && (b3 == null || b7[b6].queue === b3)) {
                        b7[b6].anim.stop(b1);
                        b5 = false;
                        b7.splice(b6, 1)
                    }
                }
                if (b5 || !b1) {
                    aw.dequeue(this, b3)
                }
            })
        }, finish: function (e) {
            if (e !== false) {
                e = e || "fx"
            }
            return this.each(function () {
                var b3, b1 = aw._data(this), b5 = b1[e + "queue"], b2 = b1[e + "queueHooks"], b6 = aw.timers,
                    b4 = b5 ? b5.length : 0;
                b1.finish = true;
                aw.queue(this, e, []);
                if (b2 && b2.cur && b2.cur.finish) {
                    b2.cur.finish.call(this)
                }
                for (b3 = b6.length; b3--;) {
                    if (b6[b3].elem === this && b6[b3].queue === e) {
                        b6[b3].anim.stop(true);
                        b6.splice(b3, 1)
                    }
                }
                for (b3 = 0; b3 < b4; b3++) {
                    if (b5[b3] && b5[b3].finish) {
                        b5[b3].finish.call(this)
                    }
                }
                delete b1.finish
            })
        }
    });

    function af(b3, b2) {
        var b4, e = {height: b3}, b1 = 0;
        b2 = b2 ? 1 : 0;
        for (; b1 < 4; b1 += 2 - b2) {
            b4 = N[b1];
            e["margin" + b4] = e["padding" + b4] = b3
        }
        if (b2) {
            e.opacity = e.width = b3
        }
        return e
    }

    aw.each({
        slideDown: af("show"),
        slideUp: af("hide"),
        slideToggle: af("toggle"),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, function (e, b1) {
        aw.fn[e] = function (b4, b3, b2) {
            return this.animate(b1, b4, b3, b2)
        }
    });
    aw.speed = function (b3, e, b1) {
        var b2 = b3 && typeof b3 === "object" ? aw.extend({}, b3) : {
            complete: b1 || !b1 && e || aw.isFunction(b3) && b3,
            duration: b3,
            easing: b1 && e || e && !aw.isFunction(e) && e
        };
        b2.duration = aw.fx.off ? 0 : typeof b2.duration === "number" ? b2.duration : b2.duration in aw.fx.speeds ? aw.fx.speeds[b2.duration] : aw.fx.speeds._default;
        if (b2.queue == null || b2.queue === true) {
            b2.queue = "fx"
        }
        b2.old = b2.complete;
        b2.complete = function () {
            if (aw.isFunction(b2.old)) {
                b2.old.call(this)
            }
            if (b2.queue) {
                aw.dequeue(this, b2.queue)
            }
        };
        return b2
    };
    aw.easing = {
        linear: function (e) {
            return e
        }, swing: function (e) {
            return 0.5 - Math.cos(e * Math.PI) / 2
        }
    };
    aw.timers = [];
    aw.fx = bQ.prototype.init;
    aw.fx.tick = function () {
        var b1, b2 = aw.timers, e = 0;
        ae = aw.now();
        for (; e < b2.length; e++) {
            b1 = b2[e];
            if (!b1() && b2[e] === b1) {
                b2.splice(e--, 1)
            }
        }
        if (!b2.length) {
            aw.fx.stop()
        }
        ae = bS
    };
    aw.fx.timer = function (e) {
        if (e() && aw.timers.push(e)) {
            aw.fx.start()
        }
    };
    aw.fx.interval = 13;
    aw.fx.start = function () {
        if (!bO) {
            bO = setInterval(aw.fx.tick, aw.fx.interval)
        }
    };
    aw.fx.stop = function () {
        clearInterval(bO);
        bO = null
    };
    aw.fx.speeds = {slow: 600, fast: 200, _default: 400};
    aw.fx.step = {};
    if (aw.expr && aw.expr.filters) {
        aw.expr.filters.animated = function (e) {
            return aw.grep(aw.timers, function (b1) {
                return e === b1.elem
            }).length
        }
    }
    aw.fn.offset = function (b4) {
        if (arguments.length) {
            return b4 === bS ? this : this.each(function (b6) {
                aw.offset.setOffset(this, b4, b6)
            })
        }
        var b2, b5, e = {top: 0, left: 0}, b3 = this[0], b1 = b3 && b3.ownerDocument;
        if (!b1) {
            return
        }
        b2 = b1.documentElement;
        if (!aw.contains(b2, b3)) {
            return e
        }
        if (typeof b3.getBoundingClientRect !== "undefined") {
            e = b3.getBoundingClientRect()
        }
        b5 = al(b1);
        return {
            top: e.top + (b5.pageYOffset || b2.scrollTop) - (b2.clientTop || 0),
            left: e.left + (b5.pageXOffset || b2.scrollLeft) - (b2.clientLeft || 0)
        }
    };
    aw.offset = {
        setOffset: function (b8, ca, b9) {
            var cb = aw.css(b8, "position");
            if (cb === "static") {
                b8.style.position = "relative"
            }
            var b3 = aw(b8), b5 = b3.offset(), b2 = aw.css(b8, "top"), b1 = aw.css(b8, "left"),
                e = (cb === "absolute" || cb === "fixed") && aw.inArray("auto", [b2, b1]) > -1, cc = {}, b6 = {}, b7,
                b4;
            if (e) {
                b6 = b3.position();
                b7 = b6.top;
                b4 = b6.left
            } else {
                b7 = parseFloat(b2) || 0;
                b4 = parseFloat(b1) || 0
            }
            if (aw.isFunction(ca)) {
                ca = ca.call(b8, b9, b5)
            }
            if (ca.top != null) {
                cc.top = (ca.top - b5.top) + b7
            }
            if (ca.left != null) {
                cc.left = (ca.left - b5.left) + b4
            }
            if ("using" in ca) {
                ca.using.call(b8, cc)
            } else {
                b3.css(cc)
            }
        }
    };
    aw.fn.extend({
        position: function () {
            if (!this[0]) {
                return
            }
            var b2, b1, b3 = {top: 0, left: 0}, e = this[0];
            if (aw.css(e, "position") === "fixed") {
                b1 = e.getBoundingClientRect()
            } else {
                b2 = this.offsetParent();
                b1 = this.offset();
                if (!aw.nodeName(b2[0], "html")) {
                    b3 = b2.offset()
                }
                b3.top += aw.css(b2[0], "borderTopWidth", true);
                b3.left += aw.css(b2[0], "borderLeftWidth", true)
            }
            return {
                top: b1.top - b3.top - aw.css(e, "marginTop", true),
                left: b1.left - b3.left - aw.css(e, "marginLeft", true)
            }
        }, offsetParent: function () {
            return this.map(function () {
                var e = this.offsetParent || V.documentElement;
                while (e && (!aw.nodeName(e, "html") && aw.css(e, "position") === "static")) {
                    e = e.offsetParent
                }
                return e || V.documentElement
            })
        }
    });
    aw.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (e, b1) {
        var b2 = /Y/.test(b1);
        aw.fn[e] = function (b3) {
            return aw.access(this, function (b4, b5, b6) {
                var b7 = al(b4);
                if (b6 === bS) {
                    return b7 ? (b1 in b7) ? b7[b1] : b7.document.documentElement[b5] : b4[b5]
                }
                if (b7) {
                    b7.scrollTo(!b2 ? b6 : aw(b7).scrollLeft(), b2 ? b6 : aw(b7).scrollTop())
                } else {
                    b4[b5] = b6
                }
            }, e, b3, arguments.length, null)
        }
    });

    function al(e) {
        return aw.isWindow(e) ? e : e.nodeType === 9 ? e.defaultView || e.parentWindow : false
    }

    aw.each({Height: "height", Width: "width"}, function (e, b1) {
        aw.each({padding: "inner" + e, content: b1, "": "outer" + e}, function (b2, b3) {
            aw.fn[b3] = function (b6, b7) {
                var b4 = arguments.length && (b2 || typeof b6 !== "boolean"),
                    b5 = b2 || (b6 === true || b7 === true ? "margin" : "border");
                return aw.access(this, function (b9, ca, cb) {
                    var b8;
                    if (aw.isWindow(b9)) {
                        return b9.document.documentElement["client" + e]
                    }
                    if (b9.nodeType === 9) {
                        b8 = b9.documentElement;
                        return Math.max(b9.body["scroll" + e], b8["scroll" + e], b9.body["offset" + e], b8["offset" + e], b8["client" + e])
                    }
                    return cb === bS ? aw.css(b9, ca, b5) : aw.style(b9, ca, cb, b5)
                }, b1, b4 ? b6 : bS, b4, null)
            }
        })
    });
    bU.jQuery = bU.$ = aw;
    if (typeof define === "function" && define.amd && define.amd.jQuery) {
        define("jquery", [], function () {
            return aw
        })
    }
})(window);
