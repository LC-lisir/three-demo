CAV = {FRONT: 0, BACK: 1, DOUBLE: 2, SVGNS: "http://www.w3.org/2000/svg"};
CAV.Array = typeof Float32Array === "function" ? Float32Array : Array;
CAV.Utils = {
    isNumber: function (b) {
        return !isNaN(parseFloat(b)) && isFinite(b)
    }
};
(function () {
    for (var d = 0, e = ["ms", "moz", "webkit", "o"], f = 0; f < e.length && !window.requestAnimationFrame; ++f) {
        window.requestAnimationFrame = window[e[f] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[e[f] + "CancelAnimationFrame"] || window[e[f] + "CancelRequestAnimationFrame"]
    }
    if (!window.requestAnimationFrame) {
        window.requestAnimationFrame = function (a) {
            var h = (new Date).getTime(), i = Math.max(0, 16 - (h - d)), j = window.setTimeout(function () {
                a(h + i)
            }, i);
            d = h + i;
            return j
        }
    }
    if (!window.cancelAnimationFrame) {
        window.cancelAnimationFrame = function (b) {
            clearTimeout(b)
        }
    }
})();
Math.PIM2 = Math.PI * 2;
Math.PID2 = Math.PI / 2;
Math.randomInRange = function (c, d) {
    return c + (d - c) * Math.random()
};
Math.clamp = function (d, e, f) {
    d = Math.max(d, e);
    return d = Math.min(d, f)
};
CAV.Vector3 = {
    create: function (e, f, g) {
        var h = new CAV.Array(3);
        this.set(h, e, f, g);
        return h
    }, clone: function (c) {
        var d = this.create();
        this.copy(d, c);
        return d
    }, set: function (e, f, g, h) {
        e[0] = f || 0;
        e[1] = g || 0;
        e[2] = h || 0;
        return this
    }, setX: function (c, d) {
        c[0] = d || 0;
        return this
    }, setY: function (c, d) {
        c[1] = d || 0;
        return this
    }, setZ: function (c, d) {
        c[2] = d || 0;
        return this
    }, copy: function (c, d) {
        c[0] = d[0];
        c[1] = d[1];
        c[2] = d[2];
        return this
    }, add: function (c, d) {
        c[0] += d[0];
        c[1] += d[1];
        c[2] += d[2];
        return this
    }, addVectors: function (d, e, f) {
        d[0] = e[0] + f[0];
        d[1] = e[1] + f[1];
        d[2] = e[2] + f[2];
        return this
    }, addScalar: function (c, d) {
        c[0] += d;
        c[1] += d;
        c[2] += d;
        return this
    }, subtract: function (c, d) {
        c[0] -= d[0];
        c[1] -= d[1];
        c[2] -= d[2];
        return this
    }, subtractVectors: function (d, e, f) {
        d[0] = e[0] - f[0];
        d[1] = e[1] - f[1];
        d[2] = e[2] - f[2];
        return this
    }, subtractScalar: function (c, d) {
        c[0] -= d;
        c[1] -= d;
        c[2] -= d;
        return this
    }, multiply: function (c, d) {
        c[0] *= d[0];
        c[1] *= d[1];
        c[2] *= d[2];
        return this
    }, multiplyVectors: function (d, e, f) {
        d[0] = e[0] * f[0];
        d[1] = e[1] * f[1];
        d[2] = e[2] * f[2];
        return this
    }, multiplyScalar: function (c, d) {
        c[0] *= d;
        c[1] *= d;
        c[2] *= d;
        return this
    }, divide: function (c, d) {
        c[0] /= d[0];
        c[1] /= d[1];
        c[2] /= d[2];
        return this
    }, divideVectors: function (d, e, f) {
        d[0] = e[0] / f[0];
        d[1] = e[1] / f[1];
        d[2] = e[2] / f[2];
        return this
    }, divideScalar: function (c, d) {
        d !== 0 ? (c[0] /= d, c[1] /= d, c[2] /= d) : (c[0] = 0, c[1] = 0, c[2] = 0);
        return this
    }, cross: function (f, g) {
        var h = f[0], i = f[1], j = f[2];
        f[0] = i * g[2] - j * g[1];
        f[1] = j * g[0] - h * g[2];
        f[2] = h * g[1] - i * g[0];
        return this
    }, crossVectors: function (d, e, f) {
        d[0] = e[1] * f[2] - e[2] * f[1];
        d[1] = e[2] * f[0] - e[0] * f[2];
        d[2] = e[0] * f[1] - e[1] * f[0];
        return this
    }, min: function (c, d) {
        c[0] < d && (c[0] = d);
        c[1] < d && (c[1] = d);
        c[2] < d && (c[2] = d);
        return this
    }, max: function (c, d) {
        c[0] > d && (c[0] = d);
        c[1] > d && (c[1] = d);
        c[2] > d && (c[2] = d);
        return this
    }, clamp: function (d, e, f) {
        this.min(d, e);
        this.max(d, f);
        return this
    }, limit: function (e, f, g) {
        var h = this.length(e);
        f !== null && h < f ? this.setLength(e, f) : g !== null && h > g && this.setLength(e, g);
        return this
    }, dot: function (c, d) {
        return c[0] * d[0] + c[1] * d[1] + c[2] * d[2]
    }, normalise: function (b) {
        return this.divideScalar(b, this.length(b))
    }, negate: function (b) {
        return this.multiplyScalar(b, -1)
    }, distanceSquared: function (f, g) {
        var h = f[0] - g[0], i = f[1] - g[1], j = f[2] - g[2];
        return h * h + i * i + j * j
    }, distance: function (c, d) {
        return Math.sqrt(this.distanceSquared(c, d))
    }, lengthSquared: function (b) {
        return b[0] * b[0] + b[1] * b[1] + b[2] * b[2]
    }, length: function (b) {
        return Math.sqrt(this.lengthSquared(b))
    }, setLength: function (d, e) {
        var f = this.length(d);
        f !== 0 && e !== f && this.multiplyScalar(d, e / f);
        return this
    }
};
CAV.Vector4 = {
    create: function (e, f, g) {
        var h = new CAV.Array(4);
        this.set(h, e, f, g);
        return h
    }, set: function (f, g, h, i, j) {
        f[0] = g || 0;
        f[1] = h || 0;
        f[2] = i || 0;
        f[3] = j || 0;
        return this
    }, setX: function (c, d) {
        c[0] = d || 0;
        return this
    }, setY: function (c, d) {
        c[1] = d || 0;
        return this
    }, setZ: function (c, d) {
        c[2] = d || 0;
        return this
    }, setW: function (c, d) {
        c[3] = d || 0;
        return this
    }, add: function (c, d) {
        c[0] += d[0];
        c[1] += d[1];
        c[2] += d[2];
        c[3] += d[3];
        return this
    }, multiplyVectors: function (d, e, f) {
        d[0] = e[0] * f[0];
        d[1] = e[1] * f[1];
        d[2] = e[2] * f[2];
        d[3] = e[3] * f[3];
        return this
    }, multiplyScalar: function (c, d) {
        c[0] *= d;
        c[1] *= d;
        c[2] *= d;
        c[3] *= d;
        return this
    }, min: function (c, d) {
        c[0] < d && (c[0] = d);
        c[1] < d && (c[1] = d);
        c[2] < d && (c[2] = d);
        c[3] < d && (c[3] = d);
        return this
    }, max: function (c, d) {
        c[0] > d && (c[0] = d);
        c[1] > d && (c[1] = d);
        c[2] > d && (c[2] = d);
        c[3] > d && (c[3] = d);
        return this
    }, clamp: function (d, e, f) {
        this.min(d, e);
        this.max(d, f);
        return this
    }
};
CAV.Color = function (c, d) {
    this.rgba = CAV.Vector4.create();
    this.hex = c || "#000000";
    this.opacity = CAV.Utils.isNumber(d) ? d : 1;
    this.set(this.hex, this.opacity)
};
CAV.Color.prototype = {
    set: function (d, e) {
        var d = d.replace("#", ""), f = d.length / 3;
        this.rgba[0] = parseInt(d.substring(f * 0, f * 1), 16) / 255;
        this.rgba[1] = parseInt(d.substring(f * 1, f * 2), 16) / 255;
        this.rgba[2] = parseInt(d.substring(f * 2, f * 3), 16) / 255;
        this.rgba[3] = CAV.Utils.isNumber(e) ? e : this.rgba[3];
        return this
    }, hexify: function (b) {
        b = Math.ceil(b * 255).toString(16);
        b.length === 1 && (b = "0" + b);
        return b
    }, format: function () {
        var d = this.hexify(this.rgba[0]), e = this.hexify(this.rgba[1]), f = this.hexify(this.rgba[2]);
        return this.hex = "#" + d + e + f
    }
};
CAV.Object = function () {
    this.position = CAV.Vector3.create()
};
CAV.Object.prototype = {
    setPosition: function (d, e, f) {
        CAV.Vector3.set(this.position, d, e, f);
        return this
    }
};
CAV.Light = function (c, d) {
    CAV.Object.call(this);
    this.ambient = new CAV.Color(c || "#FFFFFF");
    this.diffuse = new CAV.Color(d || "#FFFFFF");
    this.ray = CAV.Vector3.create()
};
CAV.Light.prototype = Object.create(CAV.Object.prototype);
CAV.Vertex = function (d, e, f) {
    this.position = CAV.Vector3.create(d, e, f)
};
CAV.Vertex.prototype = {
    setPosition: function (d, e, f) {
        CAV.Vector3.set(this.position, d, e, f);
        return this
    }
};
CAV.Triangle = function (d, e, f) {
    this.a = d || new CAV.Vertex;
    this.b = e || new CAV.Vertex;
    this.c = f || new CAV.Vertex;
    this.vertices = [this.a, this.b, this.c];
    this.u = CAV.Vector3.create();
    this.v = CAV.Vector3.create();
    this.centroid = CAV.Vector3.create();
    this.normal = CAV.Vector3.create();
    this.color = new CAV.Color;
    this.polygon = document.createElementNS(CAV.SVGNS, "polygon");
    this.polygon.setAttributeNS(null, "stroke-linejoin", "round");
    this.polygon.setAttributeNS(null, "stroke-miterlimit", "1");
    this.polygon.setAttributeNS(null, "stroke-width", "1");
    this.computeCentroid();
    this.computeNormal()
};
CAV.Triangle.prototype = {
    computeCentroid: function () {
        this.centroid[0] = this.a.position[0] + this.b.position[0] + this.c.position[0];
        this.centroid[1] = this.a.position[1] + this.b.position[1] + this.c.position[1];
        this.centroid[2] = this.a.position[2] + this.b.position[2] + this.c.position[2];
        CAV.Vector3.divideScalar(this.centroid, 3);
        return this
    }, computeNormal: function () {
        CAV.Vector3.subtractVectors(this.u, this.b.position, this.a.position);
        CAV.Vector3.subtractVectors(this.v, this.c.position, this.a.position);
        CAV.Vector3.crossVectors(this.normal, this.u, this.v);
        CAV.Vector3.normalise(this.normal);
        return this
    }
};
CAV.Geometry = function () {
    this.vertices = [];
    this.triangles = [];
    this.dirty = false
};
CAV.Geometry.prototype = {
    update: function () {
        if (this.dirty) {
            var c, d;
            for (c = this.triangles.length - 1; c >= 0; c--) {
                d = this.triangles[c], d.computeCentroid(), d.computeNormal()
            }
            this.dirty = false
        }
        return this
    }
};
CAV.Plane = function (h, i, j, k) {
    CAV.Geometry.call(this);
    this.width = h || 100;
    this.height = i || 100;
    this.segments = j || 4;
    this.slices = k || 4;
    this.segmentWidth = this.width / this.segments;
    this.sliceHeight = this.height / this.slices;
    var m, n, o, j = [];
    m = this.width * -0.5;
    n = this.height * 0.5;
    for (h = 0; h <= this.segments; h++) {
        j.push([]);
        for (i = 0; i <= this.slices; i++) {
            k = new CAV.Vertex(m + h * this.segmentWidth, n - i * this.sliceHeight), j[h].push(k), this.vertices.push(k)
        }
    }
    for (h = 0; h < this.segments; h++) {
        for (i = 0; i < this.slices; i++) {
            k = j[h + 0][i + 0], m = j[h + 0][i + 1], n = j[h + 1][i + 0], o = j[h + 1][i + 1], t0 = new CAV.Triangle(k, m, n), t1 = new CAV.Triangle(n, m, o), this.triangles.push(t0, t1)
        }
    }
};
CAV.Plane.prototype = Object.create(CAV.Geometry.prototype);
CAV.Material = function (c, d) {
    this.ambient = new CAV.Color(c || "#444444");
    this.diffuse = new CAV.Color(d || "#FFFFFF");
    this.slave = new CAV.Color
};
CAV.Mesh = function (c, d) {
    CAV.Object.call(this);
    this.geometry = c || new CAV.Geometry;
    this.material = d || new CAV.Material;
    this.side = CAV.FRONT;
    this.visible = true
};
CAV.Mesh.prototype = Object.create(CAV.Object.prototype);
CAV.Mesh.prototype.update = function (h, i) {
    var j, k, m, n, o;
    this.geometry.update();
    if (i) {
        for (j = this.geometry.triangles.length - 1; j >= 0; j--) {
            k = this.geometry.triangles[j];
            CAV.Vector4.set(k.color.rgba);
            for (m = h.length - 1; m >= 0; m--) {
                n = h[m], CAV.Vector3.subtractVectors(n.ray, n.position, k.centroid), CAV.Vector3.normalise(n.ray), o = CAV.Vector3.dot(k.normal, n.ray), this.side === CAV.FRONT ? o = Math.max(o, 0) : this.side === CAV.BACK ? o = Math.abs(Math.min(o, 0)) : this.side === CAV.DOUBLE && (o = Math.max(Math.abs(o), 0)), CAV.Vector4.multiplyVectors(this.material.slave.rgba, this.material.ambient.rgba, n.ambient.rgba), CAV.Vector4.add(k.color.rgba, this.material.slave.rgba), CAV.Vector4.multiplyVectors(this.material.slave.rgba, this.material.diffuse.rgba, n.diffuse.rgba), CAV.Vector4.multiplyScalar(this.material.slave.rgba, o), CAV.Vector4.add(k.color.rgba, this.material.slave.rgba)
            }
            CAV.Vector4.clamp(k.color.rgba, 0, 1)
        }
    }
    return this
};
CAV.Scene = function () {
    this.meshes = [];
    this.lights = []
};
CAV.Scene.prototype = {
    add: function (b) {
        b instanceof CAV.Mesh && !~this.meshes.indexOf(b) ? this.meshes.push(b) : b instanceof CAV.Light && !~this.lights.indexOf(b) && this.lights.push(b);
        return this
    }, remove: function (b) {
        b instanceof CAV.Mesh && ~this.meshes.indexOf(b) ? this.meshes.splice(this.meshes.indexOf(b), 1) : b instanceof CAV.Light && ~this.lights.indexOf(b) && this.lights.splice(this.lights.indexOf(b), 1);
        return this
    }
};
CAV.Renderer = function () {
    this.halfHeight = this.halfWidth = this.height = this.width = 0
};
CAV.Renderer.prototype = {
    setSize: function (c, d) {
        if (!(this.width === c && this.height === d)) {
            return this.width = c, this.height = d, this.halfWidth = this.width * 0.5, this.halfHeight = this.height * 0.5, this
        }
    }, clear: function () {
        return this
    }, render: function () {
        return this
    }
};
CAV.CanvasRenderer = function () {
    CAV.Renderer.call(this);
    this.element = document.createElement("canvas");
    this.element.style.display = "block";
    this.context = this.element.getContext("2d");
    this.setSize(this.element.width, this.element.height)
};
CAV.CanvasRenderer.prototype = Object.create(CAV.Renderer.prototype);
CAV.CanvasRenderer.prototype.setSize = function (c, d) {
    CAV.Renderer.prototype.setSize.call(this, c, d);
    this.element.width = c;
    this.element.height = d;
    this.context.setTransform(1, 0, 0, -1, this.halfWidth, this.halfHeight);
    return this
};
CAV.CanvasRenderer.prototype.clear = function () {
    CAV.Renderer.prototype.clear.call(this);
    this.context.clearRect(-this.halfWidth, -this.halfHeight, this.width, this.height);
    return this
};
CAV.CanvasRenderer.prototype.render = function (g) {
    CAV.Renderer.prototype.render.call(this, g);
    var h, i, j, k, m;
    this.clear();
    this.context.lineJoin = "round";
    this.context.lineWidth = 1;
    for (h = g.meshes.length - 1; h >= 0; h--) {
        if (i = g.meshes[h], i.visible) {
            i.update(g.lights, true);
            for (j = i.geometry.triangles.length - 1; j >= 0; j--) {
                k = i.geometry.triangles[j], m = k.color.format(), this.context.beginPath(), this.context.moveTo(k.a.position[0], k.a.position[1]), this.context.lineTo(k.b.position[0], k.b.position[1]), this.context.lineTo(k.c.position[0], k.c.position[1]), this.context.closePath(), this.context.strokeStyle = m, this.context.fillStyle = m, this.context.stroke(), this.context.fill()
            }
        }
    }
    return this
};

function Victor(e, b) {
    if (!!document.createElement("canvas").getContext) {
        var ai = {
            width: 1.5,
            height: 1.5,
            depth: 10,
            segments: 12,
            slices: 6,
            xRange: 0.8,
            yRange: 0.1,
            zRange: 1,
            ambient: "#525252",
            diffuse: "#FFFFFF",
            speed: 0.0002
        };
        var Q = {
            count: 2,
            xyScalar: 1,
            zOffset: 100,
            ambient: "#002c4a",
            diffuse: "#005584",
            speed: 0.001,
            gravity: 1200,
            dampening: 0.95,
            minLimit: 10,
            maxLimit: null,
            minDistance: 20,
            maxDistance: 400,
            autopilot: false,
            draw: false,
            bounds: CAV.Vector3.create(),
            step: CAV.Vector3.create(Math.randomInRange(0.2, 1), Math.randomInRange(0.2, 1), Math.randomInRange(0.2, 1))
        };
        var aa = "canvas";
        var N = "svg";
        var am = {renderer: aa};
        var T, ac = Date.now();
        var Z = CAV.Vector3.create();
        var X = CAV.Vector3.create();
        var ao = document.getElementById(e || "container");
        var al = document.getElementById(b || "anitOut");
        var f, U, R, af, an;
        var P;
        var ag;

        function d() {
            O();
            ae();
            ah();
            c();
            ak();
            Y(ao.offsetWidth, ao.offsetHeight);
            ad()
        }

        function O() {
            P = new CAV.CanvasRenderer();
            S(am.renderer)
        }

        function S(g) {
            if (f) {
                al.removeChild(f.element)
            }
            switch (g) {
                case aa:
                    f = P;
                    break
            }
            f.setSize(ao.offsetWidth, ao.offsetHeight);
            al.appendChild(f.element)
        }

        function ae() {
            U = new CAV.Scene()
        }

        function ah() {
            U.remove(R);
            f.clear();
            af = new CAV.Plane(ai.width * f.width, ai.height * f.height, ai.segments, ai.slices);
            an = new CAV.Material(ai.ambient, ai.diffuse);
            R = new CAV.Mesh(af, an);
            U.add(R);
            var g, h;
            for (g = af.vertices.length - 1; g >= 0; g--) {
                h = af.vertices[g];
                h.anchor = CAV.Vector3.clone(h.position);
                h.step = CAV.Vector3.create(Math.randomInRange(0.2, 1), Math.randomInRange(0.2, 1), Math.randomInRange(0.2, 1));
                h.time = Math.randomInRange(0, Math.PIM2)
            }
        }

        function c() {
            var h, g;
            for (h = U.lights.length - 1; h >= 0; h--) {
                g = U.lights[h];
                U.remove(g)
            }
            f.clear();
            for (h = 0; h < Q.count; h++) {
                g = new CAV.Light(Q.ambient, Q.diffuse);
                g.ambientHex = g.ambient.format();
                g.diffuseHex = g.diffuse.format();
                U.add(g);
                g.mass = Math.randomInRange(0.5, 1);
                g.velocity = CAV.Vector3.create();
                g.acceleration = CAV.Vector3.create();
                g.force = CAV.Vector3.create()
            }
        }

        function Y(h, g) {
            f.setSize(h, g);
            CAV.Vector3.set(Z, f.halfWidth, f.halfHeight);
            ah()
        }

        function ad() {
            T = Date.now() - ac;
            aj();
            ab();
            requestAnimationFrame(ad)
        }

        function aj() {
            var j, i, h, k, n, p, o, m = ai.depth / 2;
            CAV.Vector3.copy(Q.bounds, Z);
            CAV.Vector3.multiplyScalar(Q.bounds, Q.xyScalar);
            CAV.Vector3.setZ(X, Q.zOffset);
            for (k = U.lights.length - 1; k >= 0; k--) {
                n = U.lights[k];
                CAV.Vector3.setZ(n.position, Q.zOffset);
                var g = Math.clamp(CAV.Vector3.distanceSquared(n.position, X), Q.minDistance, Q.maxDistance);
                var q = Q.gravity * n.mass / g;
                CAV.Vector3.subtractVectors(n.force, X, n.position);
                CAV.Vector3.normalise(n.force);
                CAV.Vector3.multiplyScalar(n.force, q);
                CAV.Vector3.set(n.acceleration);
                CAV.Vector3.add(n.acceleration, n.force);
                CAV.Vector3.add(n.velocity, n.acceleration);
                CAV.Vector3.multiplyScalar(n.velocity, Q.dampening);
                CAV.Vector3.limit(n.velocity, Q.minLimit, Q.maxLimit);
                CAV.Vector3.add(n.position, n.velocity)
            }
            for (p = af.vertices.length - 1; p >= 0; p--) {
                o = af.vertices[p];
                j = Math.sin(o.time + o.step[0] * T * ai.speed);
                i = Math.cos(o.time + o.step[1] * T * ai.speed);
                h = Math.sin(o.time + o.step[2] * T * ai.speed);
                CAV.Vector3.set(o.position, ai.xRange * af.segmentWidth * j, ai.yRange * af.sliceHeight * i, ai.zRange * m * h - m);
                CAV.Vector3.add(o.position, o.anchor)
            }
            af.dirty = true
        }

        function ab() {
            f.render(U)
        }

        function W(h) {
            var j, g, m = h;
            var i = function (n) {
                for (j = 0, l = U.lights.length; j < l; j++) {
                    g = U.lights[j];
                    g.ambient.set(n);
                    g.ambientHex = g.ambient.format()
                }
            };
            var k = function (n) {
                for (j = 0, l = U.lights.length; j < l; j++) {
                    g = U.lights[j];
                    g.diffuse.set(n);
                    g.diffuseHex = g.diffuse.format()
                }
            };
            return {
                set: function () {
                    i(m[0]);
                    k(m[1])
                }
            }
        }

        function ak() {
            window.addEventListener("resize", V)
        }

        function a(g) {
            CAV.Vector3.set(X, g.x, f.height - g.y);
            CAV.Vector3.subtract(X, Z)
        }

        function V(g) {
            Y(ao.offsetWidth, ao.offsetHeight);
            ab()
        }

        d()
    }
    return W
};
