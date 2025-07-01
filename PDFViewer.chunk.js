/*! For license information please see PDFViewer.b982567e.chunk.js.LICENSE.txt */
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([[677], {
    60045: (e, t, r) => {
        "use strict";
        r.r(t),
        r.d(t, {
            default: () => k
        });
        var n = r(67294)
          , i = r(32951)
          , s = r(64581)
          , a = r(75995)
          , o = r(50953)
          , l = r(13894);
        const c = ["file", "onDocumentLoadSuccess", "onDocumentLoadFail", "onPageLoadSuccess", "onPageLoadFail", "onPageRenderSuccess", "onPageRenderFail", "page", "scale", "rotate", "cMapUrl", "cMapPacked", "workerSrc", "withCredentials", "baseWidth", "children"];
        var h = n.createElement;
        function d(e) {
            return "function" === typeof e
        }
        const u = n.forwardRef(( (e, t) => {
            let {file: r, onDocumentLoadSuccess: i, onDocumentLoadFail: l, onPageLoadSuccess: u, onPageLoadFail: p, onPageRenderSuccess: g, onPageRenderFail: _, page: m, scale: b, rotate: v, cMapUrl: y, cMapPacked: A, workerSrc: E, withCredentials: S, baseWidth: w, children: T} = e
              , x = (0,
            o.Z)(e, c);
            const C = (0,
            n.useRef)();
            (0,
            n.useImperativeHandle)(t, ( () => C.current));
            const R = f({
                canvasRef: C,
                file: r,
                onDocumentLoadSuccess: i,
                onDocumentLoadFail: l,
                onPageLoadSuccess: u,
                onPageLoadFail: p,
                onPageRenderSuccess: g,
                onPageRenderFail: _,
                page: m,
                scale: b,
                rotate: v,
                cMapUrl: y,
                cMapPacked: A,
                workerSrc: E,
                withCredentials: S,
                baseWidth: w
            })
              , k = h("canvas", (0,
            a.Z)({}, x, {
                ref: C
            }));
            return d(T) ? T((0,
            s.default)({
                canvas: k
            }, R)) : k
        }
        ))
          , f = e => {
            let {canvasRef: t, file: r, onDocumentLoadSuccess: i, onDocumentLoadFail: s, onPageLoadSuccess: a, onPageLoadFail: o, onPageRenderSuccess: c, onPageRenderFail: h, scale: u=1, rotate: f=0, page: p=1, cMapUrl: g, cMapPacked: _, workerSrc: m=`//cdnjs.cloudflare.com/ajax/libs/pdf.js/${l.Z.version}/pdf.worker.js`, withCredentials: b=!1, baseWidth: v} = e;
            const {0: y, 1: A} = (0,
            n.useState)()
              , {0: E, 1: S} = (0,
            n.useState)()
              , w = (0,
            n.useRef)(null)
              , T = (0,
            n.useRef)(i)
              , x = (0,
            n.useRef)(s)
              , C = (0,
            n.useRef)(a)
              , R = (0,
            n.useRef)(o)
              , k = (0,
            n.useRef)(c)
              , M = (0,
            n.useRef)(h);
            return (0,
            n.useEffect)(( () => {
                T.current = i
            }
            ), [i]),
            (0,
            n.useEffect)(( () => {
                x.current = s
            }
            ), [s]),
            (0,
            n.useEffect)(( () => {
                C.current = a
            }
            ), [a]),
            (0,
            n.useEffect)(( () => {
                R.current = o
            }
            ), [o]),
            (0,
            n.useEffect)(( () => {
                k.current = c
            }
            ), [c]),
            (0,
            n.useEffect)(( () => {
                M.current = h
            }
            ), [h]),
            (0,
            n.useEffect)(( () => {
                l.Z.GlobalWorkerOptions.workerSrc = m
            }
            ), [m]),
            (0,
            n.useEffect)(( () => {
                const e = {
                    url: r,
                    withCredentials: b
                };
                g && (e.cMapUrl = g,
                e.cMapPacked = _),
                l.Z.getDocument(e).promise.then((e => {
                    A(e),
                    d(T.current) && T.current(e)
                }
                ), ( () => {
                    d(x.current) && x.current()
                }
                ))
            }
            ), [r, b, g, _]),
            (0,
            n.useEffect)(( () => {
                const e = r => {
                    const n = 0 === f ? r.rotate : r.rotate + f
                      , i = window.devicePixelRatio;
                    let s = u * i;
                    s = v ? v / r.getViewport({
                        scale: 1,
                        rotation: n
                    }).width * (96 / 72) * 1 : s;
                    const a = r.getViewport({
                        scale: s,
                        rotation: n
                    })
                      , o = t.current;
                    if (!o)
                        return;
                    const l = o.getContext("2d");
                    if (l) {
                        if (o.style.width = a.width / i + "px",
                        o.style.height = a.height / i + "px",
                        o.height = a.height,
                        o.width = a.width,
                        !w.current)
                            return w.current = r.render({
                                canvasContext: l,
                                viewport: a
                            }),
                            w.current.promise.then(( () => {
                                w.current = null,
                                d(k.current) && k.current(r, o, a)
                            }
                            ), (t => {
                                w.current = null,
                                t && "RenderingCancelledException" === t.name ? e(r) : d(M.current) && M.current()
                            }
                            ));
                        w.current.cancel()
                    }
                }
                ;
                y && y.getPage(p).then((t => {
                    S(t),
                    d(C.current) && C.current(t),
                    e(t)
                }
                ), ( () => {
                    d(R.current) && R.current()
                }
                ))
            }
            ), [t, p, y, f, u, v]),
            {
                pdfDocument: y,
                pdfPage: E
            }
        }
          , p = u;
        var g = r(94184)
          , _ = r.n(g)
          , m = r(46091)
          , b = r(82670)
          , v = r.n(b)
          , y = r(26373)
          , A = r.n(y)
          , E = r(94886)
          , S = r.n(E);
        var w = n.createElement;
        const T = {};
        T.wrapper = {
            textAlign: "center",
            width: "100%"
        };
        const x = e => {
            let {children: t} = e;
            return w("div", {
                className: "block pdf_viewer selected",
                tabindex: "-1",
                style: {
                    outline: "none",
                    height: "100%"
                }
            }, w("div", {
                className: "ui message"
            }, w("div", {
                className: "ui active transition visible dimmer",
                style: {
                    display: "flex !important;"
                }
            }), w("div", {
                className: "ui active transition visible dimmer",
                style: {
                    display: "flex !important;"
                }
            }, w("div", {
                className: "content"
            }, w("div", {
                className: "ui indeterminate text loader"
            }))), t))
        }
          , C = e => {
            let {source: t, onScaleUp: r, onScaleDown: n, scale_ratio: i} = e;
            return w("div", {
                className: "pdf-toolbar pdf-toolbar-top"
            }, w("div", null, w("button", {
                className: "pdf-toolbar-btn",
                title: "Zoom In",
                onClick: r
            }, w(m.JO$, {
                name: v(),
                size: "15px"
            })), w("div", {
                className: "scale-separator"
            }), w("button", {
                className: "pdf-toolbar-btn",
                title: "Zoom Out",
                onClick: n
            }, w(m.JO$, {
                name: A(),
                size: "15px"
            })), w("p", {
                className: "scale-ratio"
            }, i + "%")), w("div", null, w("a", {
                href: t.url,
                onClick: () => {
                    ( (e, t) => {
                        const r = new CustomEvent("pdfDownloadEvent",{
                            detail: {
                                url: e,
                                file_name: t
                            }
                        });
                        document.body.dispatchEvent(r)
                    }
                    )(t.url, t.file)
                }
            }, w("button", {
                className: "pdf-toolbar-btn",
                title: "Download"
            }, w(m.JO$, {
                name: S(),
                size: "20px"
            })))))
        }
        ;
        function R(e) {
            let {page: t=1, initialScale: r=1, initial_scale_ratio: s=100, loader: a, navigation: o, css: l, document: c, showNavbar: h=!0, showToolbar: d=!0, enableScroll: u=!0, fitPageWidth: f=!1, onPageRenderSuccess: g} = e;
            const [m,b] = n.useState(0)
              , [v,y] = n.useState(t)
              , [A,E] = n.useState(!0)
              , [S,R] = n.useState(!1)
              , [k,M] = n.useState(s)
              , [P,I] = n.useState(r)
              , [D,O] = n.useState();
            n.useEffect(( () => {
                y(t || 1)
            }
            ), [t]);
            return n.useLayoutEffect(( () => {
                if (!u || 1 === m)
                    return;
                function e(e) {
                    e.deltaY < 0 ? y(Math.max(v - 1, 1)) : e.deltaY > 0 && y(Math.min(v + 1, m)),
                    e.preventDefault()
                }
                const t = document.querySelector(".pdf-wrapper");
                return t && t.addEventListener("wheel", e),
                () => {
                    const t = document.querySelector(".pdf-wrapper");
                    t && t.removeEventListener("wheel", e)
                }
            }
            ), [v, m, u]),
            w("div", {
                ref: (e, t, r) => {
                    e && e.clientWidth && e.clientWidth !== D && O(e.clientWidth)
                }
                ,
                className: !A && l ? _()(l, "pdf-wrapper") : _()("mgrpdf__wrapper", "pdf-wrapper"),
                style: T.wrapper
            }, d && w(C, {
                onScaleUp: () => {
                    I(P + .1),
                    M(k + 10)
                }
                ,
                onScaleDown: () => {
                    I(P - .1),
                    M(k - 10)
                }
                ,
                source: c,
                scale_ratio: k
            }), D > 0 && w(p, {
                baseWidth: f ? 1.3333333333333333 * D : void 0,
                file: c.file || c.url,
                content: c.base64,
                binaryContent: c.binary,
                documentInitParameters: c.connection,
                loading: a || A,
                page: v,
                scale: P,
                onPageRenderSuccess: (e, t, r) => {
                    E(!1),
                    R(!0),
                    g && g(e, t, r)
                }
                ,
                onPageRenderFail: () => {
                    E(!1),
                    R(!1)
                }
                ,
                workerSrc: i.default.settings.pdfWorkerSrc,
                onDocumentLoadSuccess: e => {
                    R(!0),
                    b(e.numPages)
                }
            }, (e => {
                let {pdfDocument: t, pdfPage: r, canvas: n} = e;
                return S ? n : w(x, null, n)
            }
            )), h && m > 1 ? w(o, {
                page: v,
                pages: m,
                handleNextClick: () => {
                    v !== m && y(v + 1)
                }
                ,
                handlePrevClick: () => {
                    1 !== v && y(v - 1)
                }
            }) : null)
        }
        R.defaultProps = {
            scale: 1
        };
        const k = R
    }
    ,
    26373: e => {
        e.exports = {
            attributes: {
                xmlns: "http://www.w3.org/2000/svg",
                width: "36",
                height: "36",
                viewBox: "0 0 36 36"
            },
            content: '<path fill-rule="evenodd" d="M5 19 31 19 31 17 5 17z"/>'
        }
    }
    ,
    13894: (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {
        "use strict";
        function getAugmentedNamespace(e) {
            var t = e.default;
            if ("function" == typeof t) {
                var r = function() {
                    return t.apply(this, arguments)
                };
                r.prototype = t.prototype
            } else
                r = {};
            return Object.defineProperty(r, "__esModule", {
                value: !0
            }),
            Object.keys(e).forEach((function(t) {
                var n = Object.getOwnPropertyDescriptor(e, t);
                Object.defineProperty(r, t, n.get ? n : {
                    enumerable: !0,
                    get: function() {
                        return e[t]
                    }
                })
            }
            )),
            r
        }
        __webpack_require__.d(__webpack_exports__, {
            Z: () => pdf_1
        });
        var global$1 = "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : "undefined" !== typeof window ? window : {};
        function defaultSetTimout() {
            throw new Error("setTimeout has not been defined")
        }
        function defaultClearTimeout() {
            throw new Error("clearTimeout has not been defined")
        }
        var cachedSetTimeout = defaultSetTimout
          , cachedClearTimeout = defaultClearTimeout;
        function runTimeout(e) {
            if (cachedSetTimeout === setTimeout)
                return setTimeout(e, 0);
            if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout)
                return cachedSetTimeout = setTimeout,
                setTimeout(e, 0);
            try {
                return cachedSetTimeout(e, 0)
            } catch (t) {
                try {
                    return cachedSetTimeout.call(null, e, 0)
                } catch (t) {
                    return cachedSetTimeout.call(this, e, 0)
                }
            }
        }
        function runClearTimeout(e) {
            if (cachedClearTimeout === clearTimeout)
                return clearTimeout(e);
            if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout)
                return cachedClearTimeout = clearTimeout,
                clearTimeout(e);
            try {
                return cachedClearTimeout(e)
            } catch (t) {
                try {
                    return cachedClearTimeout.call(null, e)
                } catch (t) {
                    return cachedClearTimeout.call(this, e)
                }
            }
        }
        "function" === typeof global$1.setTimeout && (cachedSetTimeout = setTimeout),
        "function" === typeof global$1.clearTimeout && (cachedClearTimeout = clearTimeout);
        var queue = [], draining = !1, currentQueue, queueIndex = -1;
        function cleanUpNextTick() {
            draining && currentQueue && (draining = !1,
            currentQueue.length ? queue = currentQueue.concat(queue) : queueIndex = -1,
            queue.length && drainQueue())
        }
        function drainQueue() {
            if (!draining) {
                var e = runTimeout(cleanUpNextTick);
                draining = !0;
                for (var t = queue.length; t; ) {
                    for (currentQueue = queue,
                    queue = []; ++queueIndex < t; )
                        currentQueue && currentQueue[queueIndex].run();
                    queueIndex = -1,
                    t = queue.length
                }
                currentQueue = null,
                draining = !1,
                runClearTimeout(e)
            }
        }
        function nextTick(e) {
            var t = new Array(arguments.length - 1);
            if (arguments.length > 1)
                for (var r = 1; r < arguments.length; r++)
                    t[r - 1] = arguments[r];
            queue.push(new Item(e,t)),
            1 !== queue.length || draining || runTimeout(drainQueue)
        }
        function Item(e, t) {
            this.fun = e,
            this.array = t
        }
        Item.prototype.run = function() {
            this.fun.apply(null, this.array)
        }
        ;
        var title = "browser"
          , platform = "browser"
          , browser = !0
          , env = {}
          , argv = []
          , version = ""
          , versions = {}
          , release = {}
          , config = {};
        function noop() {}
        var on = noop
          , addListener = noop
          , once = noop
          , off = noop
          , removeListener = noop
          , removeAllListeners = noop
          , emit = noop;
        function binding$1(e) {
            throw new Error("process.binding is not supported")
        }
        function cwd() {
            return "/"
        }
        function chdir(e) {
            throw new Error("process.chdir is not supported")
        }
        function umask() {
            return 0
        }
        var performance = global$1.performance || {}
          , performanceNow = performance.now || performance.mozNow || performance.msNow || performance.oNow || performance.webkitNow || function() {
            return (new Date).getTime()
        }
        ;
        function hrtime(e) {
            var t = .001 * performanceNow.call(performance)
              , r = Math.floor(t)
              , n = Math.floor(t % 1 * 1e9);
            return e && (r -= e[0],
            (n -= e[1]) < 0 && (r--,
            n += 1e9)),
            [r, n]
        }
        var startTime = new Date;
        function uptime() {
            return (new Date - startTime) / 1e3
        }
        var browser$1 = {
            nextTick: nextTick,
            title: title,
            browser: browser,
            env: env,
            argv: argv,
            version: version,
            versions: versions,
            on: on,
            addListener: addListener,
            once: once,
            off: off,
            removeListener: removeListener,
            removeAllListeners: removeAllListeners,
            emit: emit,
            binding: binding$1,
            cwd: cwd,
            chdir: chdir,
            umask: umask,
            hrtime: hrtime,
            platform: platform,
            release: release,
            config: config,
            uptime: uptime
        }
          , lookup = []
          , revLookup = []
          , Arr = "undefined" !== typeof Uint8Array ? Uint8Array : Array
          , inited = !1;
        function init() {
            inited = !0;
            for (var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", t = 0, r = e.length; t < r; ++t)
                lookup[t] = e[t],
                revLookup[e.charCodeAt(t)] = t;
            revLookup["-".charCodeAt(0)] = 62,
            revLookup["_".charCodeAt(0)] = 63
        }
        function toByteArray(e) {
            var t, r, n, i, s, a;
            inited || init();
            var o = e.length;
            if (o % 4 > 0)
                throw new Error("Invalid string. Length must be a multiple of 4");
            s = "=" === e[o - 2] ? 2 : "=" === e[o - 1] ? 1 : 0,
            a = new Arr(3 * o / 4 - s),
            n = s > 0 ? o - 4 : o;
            var l = 0;
            for (t = 0,
            r = 0; t < n; t += 4,
            r += 3)
                i = revLookup[e.charCodeAt(t)] << 18 | revLookup[e.charCodeAt(t + 1)] << 12 | revLookup[e.charCodeAt(t + 2)] << 6 | revLookup[e.charCodeAt(t + 3)],
                a[l++] = i >> 16 & 255,
                a[l++] = i >> 8 & 255,
                a[l++] = 255 & i;
            return 2 === s ? (i = revLookup[e.charCodeAt(t)] << 2 | revLookup[e.charCodeAt(t + 1)] >> 4,
            a[l++] = 255 & i) : 1 === s && (i = revLookup[e.charCodeAt(t)] << 10 | revLookup[e.charCodeAt(t + 1)] << 4 | revLookup[e.charCodeAt(t + 2)] >> 2,
            a[l++] = i >> 8 & 255,
            a[l++] = 255 & i),
            a
        }
        function tripletToBase64(e) {
            return lookup[e >> 18 & 63] + lookup[e >> 12 & 63] + lookup[e >> 6 & 63] + lookup[63 & e]
        }
        function encodeChunk(e, t, r) {
            for (var n, i = [], s = t; s < r; s += 3)
                n = (e[s] << 16) + (e[s + 1] << 8) + e[s + 2],
                i.push(tripletToBase64(n));
            return i.join("")
        }
        function fromByteArray(e) {
            var t;
            inited || init();
            for (var r = e.length, n = r % 3, i = "", s = [], a = 16383, o = 0, l = r - n; o < l; o += a)
                s.push(encodeChunk(e, o, o + a > l ? l : o + a));
            return 1 === n ? (t = e[r - 1],
            i += lookup[t >> 2],
            i += lookup[t << 4 & 63],
            i += "==") : 2 === n && (t = (e[r - 2] << 8) + e[r - 1],
            i += lookup[t >> 10],
            i += lookup[t >> 4 & 63],
            i += lookup[t << 2 & 63],
            i += "="),
            s.push(i),
            s.join("")
        }
        function read(e, t, r, n, i) {
            var s, a, o = 8 * i - n - 1, l = (1 << o) - 1, c = l >> 1, h = -7, d = r ? i - 1 : 0, u = r ? -1 : 1, f = e[t + d];
            for (d += u,
            s = f & (1 << -h) - 1,
            f >>= -h,
            h += o; h > 0; s = 256 * s + e[t + d],
            d += u,
            h -= 8)
                ;
            for (a = s & (1 << -h) - 1,
            s >>= -h,
            h += n; h > 0; a = 256 * a + e[t + d],
            d += u,
            h -= 8)
                ;
            if (0 === s)
                s = 1 - c;
            else {
                if (s === l)
                    return a ? NaN : 1 / 0 * (f ? -1 : 1);
                a += Math.pow(2, n),
                s -= c
            }
            return (f ? -1 : 1) * a * Math.pow(2, s - n)
        }
        function write(e, t, r, n, i, s) {
            var a, o, l, c = 8 * s - i - 1, h = (1 << c) - 1, d = h >> 1, u = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0, f = n ? 0 : s - 1, p = n ? 1 : -1, g = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
            for (t = Math.abs(t),
            isNaN(t) || t === 1 / 0 ? (o = isNaN(t) ? 1 : 0,
            a = h) : (a = Math.floor(Math.log(t) / Math.LN2),
            t * (l = Math.pow(2, -a)) < 1 && (a--,
            l *= 2),
            (t += a + d >= 1 ? u / l : u * Math.pow(2, 1 - d)) * l >= 2 && (a++,
            l /= 2),
            a + d >= h ? (o = 0,
            a = h) : a + d >= 1 ? (o = (t * l - 1) * Math.pow(2, i),
            a += d) : (o = t * Math.pow(2, d - 1) * Math.pow(2, i),
            a = 0)); i >= 8; e[r + f] = 255 & o,
            f += p,
            o /= 256,
            i -= 8)
                ;
            for (a = a << i | o,
            c += i; c > 0; e[r + f] = 255 & a,
            f += p,
            a /= 256,
            c -= 8)
                ;
            e[r + f - p] |= 128 * g
        }
        var toString = {}.toString
          , isArray$2 = Array.isArray || function(e) {
            return "[object Array]" == toString.call(e)
        }
          , INSPECT_MAX_BYTES = 50;
        function kMaxLength() {
            return Buffer.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
        }
        function createBuffer(e, t) {
            if (kMaxLength() < t)
                throw new RangeError("Invalid typed array length");
            return Buffer.TYPED_ARRAY_SUPPORT ? (e = new Uint8Array(t)).__proto__ = Buffer.prototype : (null === e && (e = new Buffer(t)),
            e.length = t),
            e
        }
        function Buffer(e, t, r) {
            if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer))
                return new Buffer(e,t,r);
            if ("number" === typeof e) {
                if ("string" === typeof t)
                    throw new Error("If encoding is specified then the first argument must be a string");
                return allocUnsafe(this, e)
            }
            return from(this, e, t, r)
        }
        function from(e, t, r, n) {
            if ("number" === typeof t)
                throw new TypeError('"value" argument must not be a number');
            return "undefined" !== typeof ArrayBuffer && t instanceof ArrayBuffer ? fromArrayBuffer(e, t, r, n) : "string" === typeof t ? fromString(e, t, r) : fromObject(e, t)
        }
        function assertSize(e) {
            if ("number" !== typeof e)
                throw new TypeError('"size" argument must be a number');
            if (e < 0)
                throw new RangeError('"size" argument must not be negative')
        }
        function alloc(e, t, r, n) {
            return assertSize(t),
            t <= 0 ? createBuffer(e, t) : void 0 !== r ? "string" === typeof n ? createBuffer(e, t).fill(r, n) : createBuffer(e, t).fill(r) : createBuffer(e, t)
        }
        function allocUnsafe(e, t) {
            if (assertSize(t),
            e = createBuffer(e, t < 0 ? 0 : 0 | checked(t)),
            !Buffer.TYPED_ARRAY_SUPPORT)
                for (var r = 0; r < t; ++r)
                    e[r] = 0;
            return e
        }
        function fromString(e, t, r) {
            if ("string" === typeof r && "" !== r || (r = "utf8"),
            !Buffer.isEncoding(r))
                throw new TypeError('"encoding" must be a valid string encoding');
            var n = 0 | byteLength(t, r)
              , i = (e = createBuffer(e, n)).write(t, r);
            return i !== n && (e = e.slice(0, i)),
            e
        }
        function fromArrayLike(e, t) {
            var r = t.length < 0 ? 0 : 0 | checked(t.length);
            e = createBuffer(e, r);
            for (var n = 0; n < r; n += 1)
                e[n] = 255 & t[n];
            return e
        }
        function fromArrayBuffer(e, t, r, n) {
            if (t.byteLength,
            r < 0 || t.byteLength < r)
                throw new RangeError("'offset' is out of bounds");
            if (t.byteLength < r + (n || 0))
                throw new RangeError("'length' is out of bounds");
            return t = void 0 === r && void 0 === n ? new Uint8Array(t) : void 0 === n ? new Uint8Array(t,r) : new Uint8Array(t,r,n),
            Buffer.TYPED_ARRAY_SUPPORT ? (e = t).__proto__ = Buffer.prototype : e = fromArrayLike(e, t),
            e
        }
        function fromObject(e, t) {
            if (internalIsBuffer(t)) {
                var r = 0 | checked(t.length);
                return 0 === (e = createBuffer(e, r)).length || t.copy(e, 0, 0, r),
                e
            }
            if (t) {
                if ("undefined" !== typeof ArrayBuffer && t.buffer instanceof ArrayBuffer || "length"in t)
                    return "number" !== typeof t.length || isnan(t.length) ? createBuffer(e, 0) : fromArrayLike(e, t);
                if ("Buffer" === t.type && isArray$2(t.data))
                    return fromArrayLike(e, t.data)
            }
            throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
        }
        function checked(e) {
            if (e >= kMaxLength())
                throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + kMaxLength().toString(16) + " bytes");
            return 0 | e
        }
        function internalIsBuffer(e) {
            return !(null == e || !e._isBuffer)
        }
        function byteLength(e, t) {
            if (internalIsBuffer(e))
                return e.length;
            if ("undefined" !== typeof ArrayBuffer && "function" === typeof ArrayBuffer.isView && (ArrayBuffer.isView(e) || e instanceof ArrayBuffer))
                return e.byteLength;
            "string" !== typeof e && (e = "" + e);
            var r = e.length;
            if (0 === r)
                return 0;
            for (var n = !1; ; )
                switch (t) {
                case "ascii":
                case "latin1":
                case "binary":
                    return r;
                case "utf8":
                case "utf-8":
                case void 0:
                    return utf8ToBytes(e).length;
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return 2 * r;
                case "hex":
                    return r >>> 1;
                case "base64":
                    return base64ToBytes(e).length;
                default:
                    if (n)
                        return utf8ToBytes(e).length;
                    t = ("" + t).toLowerCase(),
                    n = !0
                }
        }
        function slowToString(e, t, r) {
            var n = !1;
            if ((void 0 === t || t < 0) && (t = 0),
            t > this.length)
                return "";
            if ((void 0 === r || r > this.length) && (r = this.length),
            r <= 0)
                return "";
            if ((r >>>= 0) <= (t >>>= 0))
                return "";
            for (e || (e = "utf8"); ; )
                switch (e) {
                case "hex":
                    return hexSlice(this, t, r);
                case "utf8":
                case "utf-8":
                    return utf8Slice(this, t, r);
                case "ascii":
                    return asciiSlice(this, t, r);
                case "latin1":
                case "binary":
                    return latin1Slice(this, t, r);
                case "base64":
                    return base64Slice(this, t, r);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return utf16leSlice(this, t, r);
                default:
                    if (n)
                        throw new TypeError("Unknown encoding: " + e);
                    e = (e + "").toLowerCase(),
                    n = !0
                }
        }
        function swap(e, t, r) {
            var n = e[t];
            e[t] = e[r],
            e[r] = n
        }
        function bidirectionalIndexOf(e, t, r, n, i) {
            if (0 === e.length)
                return -1;
            if ("string" === typeof r ? (n = r,
            r = 0) : r > 2147483647 ? r = 2147483647 : r < -2147483648 && (r = -2147483648),
            r = +r,
            isNaN(r) && (r = i ? 0 : e.length - 1),
            r < 0 && (r = e.length + r),
            r >= e.length) {
                if (i)
                    return -1;
                r = e.length - 1
            } else if (r < 0) {
                if (!i)
                    return -1;
                r = 0
            }
            if ("string" === typeof t && (t = Buffer.from(t, n)),
            internalIsBuffer(t))
                return 0 === t.length ? -1 : arrayIndexOf(e, t, r, n, i);
            if ("number" === typeof t)
                return t &= 255,
                Buffer.TYPED_ARRAY_SUPPORT && "function" === typeof Uint8Array.prototype.indexOf ? i ? Uint8Array.prototype.indexOf.call(e, t, r) : Uint8Array.prototype.lastIndexOf.call(e, t, r) : arrayIndexOf(e, [t], r, n, i);
            throw new TypeError("val must be string, number or Buffer")
        }
        function arrayIndexOf(e, t, r, n, i) {
            var s, a = 1, o = e.length, l = t.length;
            if (void 0 !== n && ("ucs2" === (n = String(n).toLowerCase()) || "ucs-2" === n || "utf16le" === n || "utf-16le" === n)) {
                if (e.length < 2 || t.length < 2)
                    return -1;
                a = 2,
                o /= 2,
                l /= 2,
                r /= 2
            }
            function c(e, t) {
                return 1 === a ? e[t] : e.readUInt16BE(t * a)
            }
            if (i) {
                var h = -1;
                for (s = r; s < o; s++)
                    if (c(e, s) === c(t, -1 === h ? 0 : s - h)) {
                        if (-1 === h && (h = s),
                        s - h + 1 === l)
                            return h * a
                    } else
                        -1 !== h && (s -= s - h),
                        h = -1
            } else
                for (r + l > o && (r = o - l),
                s = r; s >= 0; s--) {
                    for (var d = !0, u = 0; u < l; u++)
                        if (c(e, s + u) !== c(t, u)) {
                            d = !1;
                            break
                        }
                    if (d)
                        return s
                }
            return -1
        }
        function hexWrite(e, t, r, n) {
            r = Number(r) || 0;
            var i = e.length - r;
            n ? (n = Number(n)) > i && (n = i) : n = i;
            var s = t.length;
            if (s % 2 !== 0)
                throw new TypeError("Invalid hex string");
            n > s / 2 && (n = s / 2);
            for (var a = 0; a < n; ++a) {
                var o = parseInt(t.substr(2 * a, 2), 16);
                if (isNaN(o))
                    return a;
                e[r + a] = o
            }
            return a
        }
        function utf8Write(e, t, r, n) {
            return blitBuffer(utf8ToBytes(t, e.length - r), e, r, n)
        }
        function asciiWrite(e, t, r, n) {
            return blitBuffer(asciiToBytes(t), e, r, n)
        }
        function latin1Write(e, t, r, n) {
            return asciiWrite(e, t, r, n)
        }
        function base64Write(e, t, r, n) {
            return blitBuffer(base64ToBytes(t), e, r, n)
        }
        function ucs2Write(e, t, r, n) {
            return blitBuffer(utf16leToBytes(t, e.length - r), e, r, n)
        }
        function base64Slice(e, t, r) {
            return 0 === t && r === e.length ? fromByteArray(e) : fromByteArray(e.slice(t, r))
        }
        function utf8Slice(e, t, r) {
            r = Math.min(e.length, r);
            for (var n = [], i = t; i < r; ) {
                var s, a, o, l, c = e[i], h = null, d = c > 239 ? 4 : c > 223 ? 3 : c > 191 ? 2 : 1;
                if (i + d <= r)
                    switch (d) {
                    case 1:
                        c < 128 && (h = c);
                        break;
                    case 2:
                        128 === (192 & (s = e[i + 1])) && (l = (31 & c) << 6 | 63 & s) > 127 && (h = l);
                        break;
                    case 3:
                        s = e[i + 1],
                        a = e[i + 2],
                        128 === (192 & s) && 128 === (192 & a) && (l = (15 & c) << 12 | (63 & s) << 6 | 63 & a) > 2047 && (l < 55296 || l > 57343) && (h = l);
                        break;
                    case 4:
                        s = e[i + 1],
                        a = e[i + 2],
                        o = e[i + 3],
                        128 === (192 & s) && 128 === (192 & a) && 128 === (192 & o) && (l = (15 & c) << 18 | (63 & s) << 12 | (63 & a) << 6 | 63 & o) > 65535 && l < 1114112 && (h = l)
                    }
                null === h ? (h = 65533,
                d = 1) : h > 65535 && (h -= 65536,
                n.push(h >>> 10 & 1023 | 55296),
                h = 56320 | 1023 & h),
                n.push(h),
                i += d
            }
            return decodeCodePointsArray(n)
        }
        Buffer.TYPED_ARRAY_SUPPORT = void 0 === global$1.TYPED_ARRAY_SUPPORT || global$1.TYPED_ARRAY_SUPPORT,
        kMaxLength(),
        Buffer.poolSize = 8192,
        Buffer._augment = function(e) {
            return e.__proto__ = Buffer.prototype,
            e
        }
        ,
        Buffer.from = function(e, t, r) {
            return from(null, e, t, r)
        }
        ,
        Buffer.TYPED_ARRAY_SUPPORT && (Buffer.prototype.__proto__ = Uint8Array.prototype,
        Buffer.__proto__ = Uint8Array),
        Buffer.alloc = function(e, t, r) {
            return alloc(null, e, t, r)
        }
        ,
        Buffer.allocUnsafe = function(e) {
            return allocUnsafe(null, e)
        }
        ,
        Buffer.allocUnsafeSlow = function(e) {
            return allocUnsafe(null, e)
        }
        ,
        Buffer.isBuffer = isBuffer,
        Buffer.compare = function(e, t) {
            if (!internalIsBuffer(e) || !internalIsBuffer(t))
                throw new TypeError("Arguments must be Buffers");
            if (e === t)
                return 0;
            for (var r = e.length, n = t.length, i = 0, s = Math.min(r, n); i < s; ++i)
                if (e[i] !== t[i]) {
                    r = e[i],
                    n = t[i];
                    break
                }
            return r < n ? -1 : n < r ? 1 : 0
        }
        ,
        Buffer.isEncoding = function(e) {
            switch (String(e).toLowerCase()) {
            case "hex":
            case "utf8":
            case "utf-8":
            case "ascii":
            case "latin1":
            case "binary":
            case "base64":
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return !0;
            default:
                return !1
            }
        }
        ,
        Buffer.concat = function(e, t) {
            if (!isArray$2(e))
                throw new TypeError('"list" argument must be an Array of Buffers');
            if (0 === e.length)
                return Buffer.alloc(0);
            var r;
            if (void 0 === t)
                for (t = 0,
                r = 0; r < e.length; ++r)
                    t += e[r].length;
            var n = Buffer.allocUnsafe(t)
              , i = 0;
            for (r = 0; r < e.length; ++r) {
                var s = e[r];
                if (!internalIsBuffer(s))
                    throw new TypeError('"list" argument must be an Array of Buffers');
                s.copy(n, i),
                i += s.length
            }
            return n
        }
        ,
        Buffer.byteLength = byteLength,
        Buffer.prototype._isBuffer = !0,
        Buffer.prototype.swap16 = function() {
            var e = this.length;
            if (e % 2 !== 0)
                throw new RangeError("Buffer size must be a multiple of 16-bits");
            for (var t = 0; t < e; t += 2)
                swap(this, t, t + 1);
            return this
        }
        ,
        Buffer.prototype.swap32 = function() {
            var e = this.length;
            if (e % 4 !== 0)
                throw new RangeError("Buffer size must be a multiple of 32-bits");
            for (var t = 0; t < e; t += 4)
                swap(this, t, t + 3),
                swap(this, t + 1, t + 2);
            return this
        }
        ,
        Buffer.prototype.swap64 = function() {
            var e = this.length;
            if (e % 8 !== 0)
                throw new RangeError("Buffer size must be a multiple of 64-bits");
            for (var t = 0; t < e; t += 8)
                swap(this, t, t + 7),
                swap(this, t + 1, t + 6),
                swap(this, t + 2, t + 5),
                swap(this, t + 3, t + 4);
            return this
        }
        ,
        Buffer.prototype.toString = function() {
            var e = 0 | this.length;
            return 0 === e ? "" : 0 === arguments.length ? utf8Slice(this, 0, e) : slowToString.apply(this, arguments)
        }
        ,
        Buffer.prototype.equals = function(e) {
            if (!internalIsBuffer(e))
                throw new TypeError("Argument must be a Buffer");
            return this === e || 0 === Buffer.compare(this, e)
        }
        ,
        Buffer.prototype.inspect = function() {
            var e = ""
              , t = INSPECT_MAX_BYTES;
            return this.length > 0 && (e = this.toString("hex", 0, t).match(/.{2}/g).join(" "),
            this.length > t && (e += " ... ")),
            "<Buffer " + e + ">"
        }
        ,
        Buffer.prototype.compare = function(e, t, r, n, i) {
            if (!internalIsBuffer(e))
                throw new TypeError("Argument must be a Buffer");
            if (void 0 === t && (t = 0),
            void 0 === r && (r = e ? e.length : 0),
            void 0 === n && (n = 0),
            void 0 === i && (i = this.length),
            t < 0 || r > e.length || n < 0 || i > this.length)
                throw new RangeError("out of range index");
            if (n >= i && t >= r)
                return 0;
            if (n >= i)
                return -1;
            if (t >= r)
                return 1;
            if (this === e)
                return 0;
            for (var s = (i >>>= 0) - (n >>>= 0), a = (r >>>= 0) - (t >>>= 0), o = Math.min(s, a), l = this.slice(n, i), c = e.slice(t, r), h = 0; h < o; ++h)
                if (l[h] !== c[h]) {
                    s = l[h],
                    a = c[h];
                    break
                }
            return s < a ? -1 : a < s ? 1 : 0
        }
        ,
        Buffer.prototype.includes = function(e, t, r) {
            return -1 !== this.indexOf(e, t, r)
        }
        ,
        Buffer.prototype.indexOf = function(e, t, r) {
            return bidirectionalIndexOf(this, e, t, r, !0)
        }
        ,
        Buffer.prototype.lastIndexOf = function(e, t, r) {
            return bidirectionalIndexOf(this, e, t, r, !1)
        }
        ,
        Buffer.prototype.write = function(e, t, r, n) {
            if (void 0 === t)
                n = "utf8",
                r = this.length,
                t = 0;
            else if (void 0 === r && "string" === typeof t)
                n = t,
                r = this.length,
                t = 0;
            else {
                if (!isFinite(t))
                    throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                t |= 0,
                isFinite(r) ? (r |= 0,
                void 0 === n && (n = "utf8")) : (n = r,
                r = void 0)
            }
            var i = this.length - t;
            if ((void 0 === r || r > i) && (r = i),
            e.length > 0 && (r < 0 || t < 0) || t > this.length)
                throw new RangeError("Attempt to write outside buffer bounds");
            n || (n = "utf8");
            for (var s = !1; ; )
                switch (n) {
                case "hex":
                    return hexWrite(this, e, t, r);
                case "utf8":
                case "utf-8":
                    return utf8Write(this, e, t, r);
                case "ascii":
                    return asciiWrite(this, e, t, r);
                case "latin1":
                case "binary":
                    return latin1Write(this, e, t, r);
                case "base64":
                    return base64Write(this, e, t, r);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return ucs2Write(this, e, t, r);
                default:
                    if (s)
                        throw new TypeError("Unknown encoding: " + n);
                    n = ("" + n).toLowerCase(),
                    s = !0
                }
        }
        ,
        Buffer.prototype.toJSON = function() {
            return {
                type: "Buffer",
                data: Array.prototype.slice.call(this._arr || this, 0)
            }
        }
        ;
        var MAX_ARGUMENTS_LENGTH = 4096;
        function decodeCodePointsArray(e) {
            var t = e.length;
            if (t <= MAX_ARGUMENTS_LENGTH)
                return String.fromCharCode.apply(String, e);
            for (var r = "", n = 0; n < t; )
                r += String.fromCharCode.apply(String, e.slice(n, n += MAX_ARGUMENTS_LENGTH));
            return r
        }
        function asciiSlice(e, t, r) {
            var n = "";
            r = Math.min(e.length, r);
            for (var i = t; i < r; ++i)
                n += String.fromCharCode(127 & e[i]);
            return n
        }
        function latin1Slice(e, t, r) {
            var n = "";
            r = Math.min(e.length, r);
            for (var i = t; i < r; ++i)
                n += String.fromCharCode(e[i]);
            return n
        }
        function hexSlice(e, t, r) {
            var n = e.length;
            (!t || t < 0) && (t = 0),
            (!r || r < 0 || r > n) && (r = n);
            for (var i = "", s = t; s < r; ++s)
                i += toHex(e[s]);
            return i
        }
        function utf16leSlice(e, t, r) {
            for (var n = e.slice(t, r), i = "", s = 0; s < n.length; s += 2)
                i += String.fromCharCode(n[s] + 256 * n[s + 1]);
            return i
        }
        function checkOffset(e, t, r) {
            if (e % 1 !== 0 || e < 0)
                throw new RangeError("offset is not uint");
            if (e + t > r)
                throw new RangeError("Trying to access beyond buffer length")
        }
        function checkInt(e, t, r, n, i, s) {
            if (!internalIsBuffer(e))
                throw new TypeError('"buffer" argument must be a Buffer instance');
            if (t > i || t < s)
                throw new RangeError('"value" argument is out of bounds');
            if (r + n > e.length)
                throw new RangeError("Index out of range")
        }
        function objectWriteUInt16(e, t, r, n) {
            t < 0 && (t = 65535 + t + 1);
            for (var i = 0, s = Math.min(e.length - r, 2); i < s; ++i)
                e[r + i] = (t & 255 << 8 * (n ? i : 1 - i)) >>> 8 * (n ? i : 1 - i)
        }
        function objectWriteUInt32(e, t, r, n) {
            t < 0 && (t = 4294967295 + t + 1);
            for (var i = 0, s = Math.min(e.length - r, 4); i < s; ++i)
                e[r + i] = t >>> 8 * (n ? i : 3 - i) & 255
        }
        function checkIEEE754(e, t, r, n, i, s) {
            if (r + n > e.length)
                throw new RangeError("Index out of range");
            if (r < 0)
                throw new RangeError("Index out of range")
        }
        function writeFloat(e, t, r, n, i) {
            return i || checkIEEE754(e, t, r, 4),
            write(e, t, r, n, 23, 4),
            r + 4
        }
        function writeDouble(e, t, r, n, i) {
            return i || checkIEEE754(e, t, r, 8),
            write(e, t, r, n, 52, 8),
            r + 8
        }
        Buffer.prototype.slice = function(e, t) {
            var r, n = this.length;
            if ((e = ~~e) < 0 ? (e += n) < 0 && (e = 0) : e > n && (e = n),
            (t = void 0 === t ? n : ~~t) < 0 ? (t += n) < 0 && (t = 0) : t > n && (t = n),
            t < e && (t = e),
            Buffer.TYPED_ARRAY_SUPPORT)
                (r = this.subarray(e, t)).__proto__ = Buffer.prototype;
            else {
                var i = t - e;
                r = new Buffer(i,void 0);
                for (var s = 0; s < i; ++s)
                    r[s] = this[s + e]
            }
            return r
        }
        ,
        Buffer.prototype.readUIntLE = function(e, t, r) {
            e |= 0,
            t |= 0,
            r || checkOffset(e, t, this.length);
            for (var n = this[e], i = 1, s = 0; ++s < t && (i *= 256); )
                n += this[e + s] * i;
            return n
        }
        ,
        Buffer.prototype.readUIntBE = function(e, t, r) {
            e |= 0,
            t |= 0,
            r || checkOffset(e, t, this.length);
            for (var n = this[e + --t], i = 1; t > 0 && (i *= 256); )
                n += this[e + --t] * i;
            return n
        }
        ,
        Buffer.prototype.readUInt8 = function(e, t) {
            return t || checkOffset(e, 1, this.length),
            this[e]
        }
        ,
        Buffer.prototype.readUInt16LE = function(e, t) {
            return t || checkOffset(e, 2, this.length),
            this[e] | this[e + 1] << 8
        }
        ,
        Buffer.prototype.readUInt16BE = function(e, t) {
            return t || checkOffset(e, 2, this.length),
            this[e] << 8 | this[e + 1]
        }
        ,
        Buffer.prototype.readUInt32LE = function(e, t) {
            return t || checkOffset(e, 4, this.length),
            (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3]
        }
        ,
        Buffer.prototype.readUInt32BE = function(e, t) {
            return t || checkOffset(e, 4, this.length),
            16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3])
        }
        ,
        Buffer.prototype.readIntLE = function(e, t, r) {
            e |= 0,
            t |= 0,
            r || checkOffset(e, t, this.length);
            for (var n = this[e], i = 1, s = 0; ++s < t && (i *= 256); )
                n += this[e + s] * i;
            return n >= (i *= 128) && (n -= Math.pow(2, 8 * t)),
            n
        }
        ,
        Buffer.prototype.readIntBE = function(e, t, r) {
            e |= 0,
            t |= 0,
            r || checkOffset(e, t, this.length);
            for (var n = t, i = 1, s = this[e + --n]; n > 0 && (i *= 256); )
                s += this[e + --n] * i;
            return s >= (i *= 128) && (s -= Math.pow(2, 8 * t)),
            s
        }
        ,
        Buffer.prototype.readInt8 = function(e, t) {
            return t || checkOffset(e, 1, this.length),
            128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
        }
        ,
        Buffer.prototype.readInt16LE = function(e, t) {
            t || checkOffset(e, 2, this.length);
            var r = this[e] | this[e + 1] << 8;
            return 32768 & r ? 4294901760 | r : r
        }
        ,
        Buffer.prototype.readInt16BE = function(e, t) {
            t || checkOffset(e, 2, this.length);
            var r = this[e + 1] | this[e] << 8;
            return 32768 & r ? 4294901760 | r : r
        }
        ,
        Buffer.prototype.readInt32LE = function(e, t) {
            return t || checkOffset(e, 4, this.length),
            this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24
        }
        ,
        Buffer.prototype.readInt32BE = function(e, t) {
            return t || checkOffset(e, 4, this.length),
            this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]
        }
        ,
        Buffer.prototype.readFloatLE = function(e, t) {
            return t || checkOffset(e, 4, this.length),
            read(this, e, !0, 23, 4)
        }
        ,
        Buffer.prototype.readFloatBE = function(e, t) {
            return t || checkOffset(e, 4, this.length),
            read(this, e, !1, 23, 4)
        }
        ,
        Buffer.prototype.readDoubleLE = function(e, t) {
            return t || checkOffset(e, 8, this.length),
            read(this, e, !0, 52, 8)
        }
        ,
        Buffer.prototype.readDoubleBE = function(e, t) {
            return t || checkOffset(e, 8, this.length),
            read(this, e, !1, 52, 8)
        }
        ,
        Buffer.prototype.writeUIntLE = function(e, t, r, n) {
            (e = +e,
            t |= 0,
            r |= 0,
            n) || checkInt(this, e, t, r, Math.pow(2, 8 * r) - 1, 0);
            var i = 1
              , s = 0;
            for (this[t] = 255 & e; ++s < r && (i *= 256); )
                this[t + s] = e / i & 255;
            return t + r
        }
        ,
        Buffer.prototype.writeUIntBE = function(e, t, r, n) {
            (e = +e,
            t |= 0,
            r |= 0,
            n) || checkInt(this, e, t, r, Math.pow(2, 8 * r) - 1, 0);
            var i = r - 1
              , s = 1;
            for (this[t + i] = 255 & e; --i >= 0 && (s *= 256); )
                this[t + i] = e / s & 255;
            return t + r
        }
        ,
        Buffer.prototype.writeUInt8 = function(e, t, r) {
            return e = +e,
            t |= 0,
            r || checkInt(this, e, t, 1, 255, 0),
            Buffer.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)),
            this[t] = 255 & e,
            t + 1
        }
        ,
        Buffer.prototype.writeUInt16LE = function(e, t, r) {
            return e = +e,
            t |= 0,
            r || checkInt(this, e, t, 2, 65535, 0),
            Buffer.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e,
            this[t + 1] = e >>> 8) : objectWriteUInt16(this, e, t, !0),
            t + 2
        }
        ,
        Buffer.prototype.writeUInt16BE = function(e, t, r) {
            return e = +e,
            t |= 0,
            r || checkInt(this, e, t, 2, 65535, 0),
            Buffer.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8,
            this[t + 1] = 255 & e) : objectWriteUInt16(this, e, t, !1),
            t + 2
        }
        ,
        Buffer.prototype.writeUInt32LE = function(e, t, r) {
            return e = +e,
            t |= 0,
            r || checkInt(this, e, t, 4, 4294967295, 0),
            Buffer.TYPED_ARRAY_SUPPORT ? (this[t + 3] = e >>> 24,
            this[t + 2] = e >>> 16,
            this[t + 1] = e >>> 8,
            this[t] = 255 & e) : objectWriteUInt32(this, e, t, !0),
            t + 4
        }
        ,
        Buffer.prototype.writeUInt32BE = function(e, t, r) {
            return e = +e,
            t |= 0,
            r || checkInt(this, e, t, 4, 4294967295, 0),
            Buffer.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24,
            this[t + 1] = e >>> 16,
            this[t + 2] = e >>> 8,
            this[t + 3] = 255 & e) : objectWriteUInt32(this, e, t, !1),
            t + 4
        }
        ,
        Buffer.prototype.writeIntLE = function(e, t, r, n) {
            if (e = +e,
            t |= 0,
            !n) {
                var i = Math.pow(2, 8 * r - 1);
                checkInt(this, e, t, r, i - 1, -i)
            }
            var s = 0
              , a = 1
              , o = 0;
            for (this[t] = 255 & e; ++s < r && (a *= 256); )
                e < 0 && 0 === o && 0 !== this[t + s - 1] && (o = 1),
                this[t + s] = (e / a >> 0) - o & 255;
            return t + r
        }
        ,
        Buffer.prototype.writeIntBE = function(e, t, r, n) {
            if (e = +e,
            t |= 0,
            !n) {
                var i = Math.pow(2, 8 * r - 1);
                checkInt(this, e, t, r, i - 1, -i)
            }
            var s = r - 1
              , a = 1
              , o = 0;
            for (this[t + s] = 255 & e; --s >= 0 && (a *= 256); )
                e < 0 && 0 === o && 0 !== this[t + s + 1] && (o = 1),
                this[t + s] = (e / a >> 0) - o & 255;
            return t + r
        }
        ,
        Buffer.prototype.writeInt8 = function(e, t, r) {
            return e = +e,
            t |= 0,
            r || checkInt(this, e, t, 1, 127, -128),
            Buffer.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)),
            e < 0 && (e = 255 + e + 1),
            this[t] = 255 & e,
            t + 1
        }
        ,
        Buffer.prototype.writeInt16LE = function(e, t, r) {
            return e = +e,
            t |= 0,
            r || checkInt(this, e, t, 2, 32767, -32768),
            Buffer.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e,
            this[t + 1] = e >>> 8) : objectWriteUInt16(this, e, t, !0),
            t + 2
        }
        ,
        Buffer.prototype.writeInt16BE = function(e, t, r) {
            return e = +e,
            t |= 0,
            r || checkInt(this, e, t, 2, 32767, -32768),
            Buffer.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8,
            this[t + 1] = 255 & e) : objectWriteUInt16(this, e, t, !1),
            t + 2
        }
        ,
        Buffer.prototype.writeInt32LE = function(e, t, r) {
            return e = +e,
            t |= 0,
            r || checkInt(this, e, t, 4, 2147483647, -2147483648),
            Buffer.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e,
            this[t + 1] = e >>> 8,
            this[t + 2] = e >>> 16,
            this[t + 3] = e >>> 24) : objectWriteUInt32(this, e, t, !0),
            t + 4
        }
        ,
        Buffer.prototype.writeInt32BE = function(e, t, r) {
            return e = +e,
            t |= 0,
            r || checkInt(this, e, t, 4, 2147483647, -2147483648),
            e < 0 && (e = 4294967295 + e + 1),
            Buffer.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24,
            this[t + 1] = e >>> 16,
            this[t + 2] = e >>> 8,
            this[t + 3] = 255 & e) : objectWriteUInt32(this, e, t, !1),
            t + 4
        }
        ,
        Buffer.prototype.writeFloatLE = function(e, t, r) {
            return writeFloat(this, e, t, !0, r)
        }
        ,
        Buffer.prototype.writeFloatBE = function(e, t, r) {
            return writeFloat(this, e, t, !1, r)
        }
        ,
        Buffer.prototype.writeDoubleLE = function(e, t, r) {
            return writeDouble(this, e, t, !0, r)
        }
        ,
        Buffer.prototype.writeDoubleBE = function(e, t, r) {
            return writeDouble(this, e, t, !1, r)
        }
        ,
        Buffer.prototype.copy = function(e, t, r, n) {
            if (r || (r = 0),
            n || 0 === n || (n = this.length),
            t >= e.length && (t = e.length),
            t || (t = 0),
            n > 0 && n < r && (n = r),
            n === r)
                return 0;
            if (0 === e.length || 0 === this.length)
                return 0;
            if (t < 0)
                throw new RangeError("targetStart out of bounds");
            if (r < 0 || r >= this.length)
                throw new RangeError("sourceStart out of bounds");
            if (n < 0)
                throw new RangeError("sourceEnd out of bounds");
            n > this.length && (n = this.length),
            e.length - t < n - r && (n = e.length - t + r);
            var i, s = n - r;
            if (this === e && r < t && t < n)
                for (i = s - 1; i >= 0; --i)
                    e[i + t] = this[i + r];
            else if (s < 1e3 || !Buffer.TYPED_ARRAY_SUPPORT)
                for (i = 0; i < s; ++i)
                    e[i + t] = this[i + r];
            else
                Uint8Array.prototype.set.call(e, this.subarray(r, r + s), t);
            return s
        }
        ,
        Buffer.prototype.fill = function(e, t, r, n) {
            if ("string" === typeof e) {
                if ("string" === typeof t ? (n = t,
                t = 0,
                r = this.length) : "string" === typeof r && (n = r,
                r = this.length),
                1 === e.length) {
                    var i = e.charCodeAt(0);
                    i < 256 && (e = i)
                }
                if (void 0 !== n && "string" !== typeof n)
                    throw new TypeError("encoding must be a string");
                if ("string" === typeof n && !Buffer.isEncoding(n))
                    throw new TypeError("Unknown encoding: " + n)
            } else
                "number" === typeof e && (e &= 255);
            if (t < 0 || this.length < t || this.length < r)
                throw new RangeError("Out of range index");
            if (r <= t)
                return this;
            var s;
            if (t >>>= 0,
            r = void 0 === r ? this.length : r >>> 0,
            e || (e = 0),
            "number" === typeof e)
                for (s = t; s < r; ++s)
                    this[s] = e;
            else {
                var a = internalIsBuffer(e) ? e : utf8ToBytes(new Buffer(e,n).toString())
                  , o = a.length;
                for (s = 0; s < r - t; ++s)
                    this[s + t] = a[s % o]
            }
            return this
        }
        ;
        var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g;
        function base64clean(e) {
            if ((e = stringtrim(e).replace(INVALID_BASE64_RE, "")).length < 2)
                return "";
            for (; e.length % 4 !== 0; )
                e += "=";
            return e
        }
        function stringtrim(e) {
            return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "")
        }
        function toHex(e) {
            return e < 16 ? "0" + e.toString(16) : e.toString(16)
        }
        function utf8ToBytes(e, t) {
            var r;
            t = t || 1 / 0;
            for (var n = e.length, i = null, s = [], a = 0; a < n; ++a) {
                if ((r = e.charCodeAt(a)) > 55295 && r < 57344) {
                    if (!i) {
                        if (r > 56319) {
                            (t -= 3) > -1 && s.push(239, 191, 189);
                            continue
                        }
                        if (a + 1 === n) {
                            (t -= 3) > -1 && s.push(239, 191, 189);
                            continue
                        }
                        i = r;
                        continue
                    }
                    if (r < 56320) {
                        (t -= 3) > -1 && s.push(239, 191, 189),
                        i = r;
                        continue
                    }
                    r = 65536 + (i - 55296 << 10 | r - 56320)
                } else
                    i && (t -= 3) > -1 && s.push(239, 191, 189);
                if (i = null,
                r < 128) {
                    if ((t -= 1) < 0)
                        break;
                    s.push(r)
                } else if (r < 2048) {
                    if ((t -= 2) < 0)
                        break;
                    s.push(r >> 6 | 192, 63 & r | 128)
                } else if (r < 65536) {
                    if ((t -= 3) < 0)
                        break;
                    s.push(r >> 12 | 224, r >> 6 & 63 | 128, 63 & r | 128)
                } else {
                    if (!(r < 1114112))
                        throw new Error("Invalid code point");
                    if ((t -= 4) < 0)
                        break;
                    s.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, 63 & r | 128)
                }
            }
            return s
        }
        function asciiToBytes(e) {
            for (var t = [], r = 0; r < e.length; ++r)
                t.push(255 & e.charCodeAt(r));
            return t
        }
        function utf16leToBytes(e, t) {
            for (var r, n, i, s = [], a = 0; a < e.length && !((t -= 2) < 0); ++a)
                n = (r = e.charCodeAt(a)) >> 8,
                i = r % 256,
                s.push(i),
                s.push(n);
            return s
        }
        function base64ToBytes(e) {
            return toByteArray(base64clean(e))
        }
        function blitBuffer(e, t, r, n) {
            for (var i = 0; i < n && !(i + r >= t.length || i >= e.length); ++i)
                t[i + r] = e[i];
            return i
        }
        function isnan(e) {
            return e !== e
        }
        function isBuffer(e) {
            return null != e && (!!e._isBuffer || isFastBuffer(e) || isSlowBuffer(e))
        }
        function isFastBuffer(e) {
            return !!e.constructor && "function" === typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
        }
        function isSlowBuffer(e) {
            return "function" === typeof e.readFloatLE && "function" === typeof e.slice && isFastBuffer(e.slice(0, 0))
        }
        function commonjsRequire(e) {
            throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')
        }
        var pdf$1 = {
            exports: {}
        }, _polyfillNode_fs = {}, _polyfillNode_fs$1 = Object.freeze({
            __proto__: null,
            default: _polyfillNode_fs
        }), require$$0 = getAugmentedNamespace(_polyfillNode_fs$1), _nodeResolve_empty = {}, _nodeResolve_empty$1 = Object.freeze({
            __proto__: null,
            default: _nodeResolve_empty
        }), require$$1 = getAugmentedNamespace(_nodeResolve_empty$1), domain, inherits;
        function EventHandlers() {}
        function EventEmitter() {
            EventEmitter.init.call(this)
        }
        function $getMaxListeners(e) {
            return void 0 === e._maxListeners ? EventEmitter.defaultMaxListeners : e._maxListeners
        }
        function emitNone(e, t, r) {
            if (t)
                e.call(r);
            else
                for (var n = e.length, i = arrayClone(e, n), s = 0; s < n; ++s)
                    i[s].call(r)
        }
        function emitOne(e, t, r, n) {
            if (t)
                e.call(r, n);
            else
                for (var i = e.length, s = arrayClone(e, i), a = 0; a < i; ++a)
                    s[a].call(r, n)
        }
        function emitTwo(e, t, r, n, i) {
            if (t)
                e.call(r, n, i);
            else
                for (var s = e.length, a = arrayClone(e, s), o = 0; o < s; ++o)
                    a[o].call(r, n, i)
        }
        function emitThree(e, t, r, n, i, s) {
            if (t)
                e.call(r, n, i, s);
            else
                for (var a = e.length, o = arrayClone(e, a), l = 0; l < a; ++l)
                    o[l].call(r, n, i, s)
        }
        function emitMany(e, t, r, n) {
            if (t)
                e.apply(r, n);
            else
                for (var i = e.length, s = arrayClone(e, i), a = 0; a < i; ++a)
                    s[a].apply(r, n)
        }
        function _addListener(e, t, r, n) {
            var i, s, a;
            if ("function" !== typeof r)
                throw new TypeError('"listener" argument must be a function');
            if ((s = e._events) ? (s.newListener && (e.emit("newListener", t, r.listener ? r.listener : r),
            s = e._events),
            a = s[t]) : (s = e._events = new EventHandlers,
            e._eventsCount = 0),
            a) {
                if ("function" === typeof a ? a = s[t] = n ? [r, a] : [a, r] : n ? a.unshift(r) : a.push(r),
                !a.warned && (i = $getMaxListeners(e)) && i > 0 && a.length > i) {
                    a.warned = !0;
                    var o = new Error("Possible EventEmitter memory leak detected. " + a.length + " " + t + " listeners added. Use emitter.setMaxListeners() to increase limit");
                    o.name = "MaxListenersExceededWarning",
                    o.emitter = e,
                    o.type = t,
                    o.count = a.length,
                    emitWarning(o)
                }
            } else
                a = s[t] = r,
                ++e._eventsCount;
            return e
        }
        function emitWarning(e) {
            "function" === typeof console.warn ? console.warn(e) : console.log(e)
        }
        function _onceWrap(e, t, r) {
            var n = !1;
            function i() {
                e.removeListener(t, i),
                n || (n = !0,
                r.apply(e, arguments))
            }
            return i.listener = r,
            i
        }
        function listenerCount$1(e) {
            var t = this._events;
            if (t) {
                var r = t[e];
                if ("function" === typeof r)
                    return 1;
                if (r)
                    return r.length
            }
            return 0
        }
        function spliceOne(e, t) {
            for (var r = t, n = r + 1, i = e.length; n < i; r += 1,
            n += 1)
                e[r] = e[n];
            e.pop()
        }
        function arrayClone(e, t) {
            for (var r = new Array(t); t--; )
                r[t] = e[t];
            return r
        }
        function unwrapListeners(e) {
            for (var t = new Array(e.length), r = 0; r < t.length; ++r)
                t[r] = e[r].listener || e[r];
            return t
        }
        EventHandlers.prototype = Object.create(null),
        EventEmitter.EventEmitter = EventEmitter,
        EventEmitter.usingDomains = !1,
        EventEmitter.prototype.domain = void 0,
        EventEmitter.prototype._events = void 0,
        EventEmitter.prototype._maxListeners = void 0,
        EventEmitter.defaultMaxListeners = 10,
        EventEmitter.init = function() {
            this.domain = null,
            EventEmitter.usingDomains && domain.active,
            this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = new EventHandlers,
            this._eventsCount = 0),
            this._maxListeners = this._maxListeners || void 0
        }
        ,
        EventEmitter.prototype.setMaxListeners = function(e) {
            if ("number" !== typeof e || e < 0 || isNaN(e))
                throw new TypeError('"n" argument must be a positive number');
            return this._maxListeners = e,
            this
        }
        ,
        EventEmitter.prototype.getMaxListeners = function() {
            return $getMaxListeners(this)
        }
        ,
        EventEmitter.prototype.emit = function(e) {
            var t, r, n, i, s, a, o, l = "error" === e;
            if (a = this._events)
                l = l && null == a.error;
            else if (!l)
                return !1;
            if (o = this.domain,
            l) {
                if (t = arguments[1],
                !o) {
                    if (t instanceof Error)
                        throw t;
                    var c = new Error('Uncaught, unspecified "error" event. (' + t + ")");
                    throw c.context = t,
                    c
                }
                return t || (t = new Error('Uncaught, unspecified "error" event')),
                t.domainEmitter = this,
                t.domain = o,
                t.domainThrown = !1,
                o.emit("error", t),
                !1
            }
            if (!(r = a[e]))
                return !1;
            var h = "function" === typeof r;
            switch (n = arguments.length) {
            case 1:
                emitNone(r, h, this);
                break;
            case 2:
                emitOne(r, h, this, arguments[1]);
                break;
            case 3:
                emitTwo(r, h, this, arguments[1], arguments[2]);
                break;
            case 4:
                emitThree(r, h, this, arguments[1], arguments[2], arguments[3]);
                break;
            default:
                for (i = new Array(n - 1),
                s = 1; s < n; s++)
                    i[s - 1] = arguments[s];
                emitMany(r, h, this, i)
            }
            return !0
        }
        ,
        EventEmitter.prototype.addListener = function(e, t) {
            return _addListener(this, e, t, !1)
        }
        ,
        EventEmitter.prototype.on = EventEmitter.prototype.addListener,
        EventEmitter.prototype.prependListener = function(e, t) {
            return _addListener(this, e, t, !0)
        }
        ,
        EventEmitter.prototype.once = function(e, t) {
            if ("function" !== typeof t)
                throw new TypeError('"listener" argument must be a function');
            return this.on(e, _onceWrap(this, e, t)),
            this
        }
        ,
        EventEmitter.prototype.prependOnceListener = function(e, t) {
            if ("function" !== typeof t)
                throw new TypeError('"listener" argument must be a function');
            return this.prependListener(e, _onceWrap(this, e, t)),
            this
        }
        ,
        EventEmitter.prototype.removeListener = function(e, t) {
            var r, n, i, s, a;
            if ("function" !== typeof t)
                throw new TypeError('"listener" argument must be a function');
            if (!(n = this._events))
                return this;
            if (!(r = n[e]))
                return this;
            if (r === t || r.listener && r.listener === t)
                0 === --this._eventsCount ? this._events = new EventHandlers : (delete n[e],
                n.removeListener && this.emit("removeListener", e, r.listener || t));
            else if ("function" !== typeof r) {
                for (i = -1,
                s = r.length; s-- > 0; )
                    if (r[s] === t || r[s].listener && r[s].listener === t) {
                        a = r[s].listener,
                        i = s;
                        break
                    }
                if (i < 0)
                    return this;
                if (1 === r.length) {
                    if (r[0] = void 0,
                    0 === --this._eventsCount)
                        return this._events = new EventHandlers,
                        this;
                    delete n[e]
                } else
                    spliceOne(r, i);
                n.removeListener && this.emit("removeListener", e, a || t)
            }
            return this
        }
        ,
        EventEmitter.prototype.off = function(e, t) {
            return this.removeListener(e, t)
        }
        ,
        EventEmitter.prototype.removeAllListeners = function(e) {
            var t, r;
            if (!(r = this._events))
                return this;
            if (!r.removeListener)
                return 0 === arguments.length ? (this._events = new EventHandlers,
                this._eventsCount = 0) : r[e] && (0 === --this._eventsCount ? this._events = new EventHandlers : delete r[e]),
                this;
            if (0 === arguments.length) {
                for (var n, i = Object.keys(r), s = 0; s < i.length; ++s)
                    "removeListener" !== (n = i[s]) && this.removeAllListeners(n);
                return this.removeAllListeners("removeListener"),
                this._events = new EventHandlers,
                this._eventsCount = 0,
                this
            }
            if ("function" === typeof (t = r[e]))
                this.removeListener(e, t);
            else if (t)
                do {
                    this.removeListener(e, t[t.length - 1])
                } while (t[0]);
            return this
        }
        ,
        EventEmitter.prototype.listeners = function(e) {
            var t, r = this._events;
            return r && (t = r[e]) ? "function" === typeof t ? [t.listener || t] : unwrapListeners(t) : []
        }
        ,
        EventEmitter.listenerCount = function(e, t) {
            return "function" === typeof e.listenerCount ? e.listenerCount(t) : listenerCount$1.call(e, t)
        }
        ,
        EventEmitter.prototype.listenerCount = listenerCount$1,
        EventEmitter.prototype.eventNames = function() {
            return this._eventsCount > 0 ? Reflect.ownKeys(this._events) : []
        }
        ,
        inherits = "function" === typeof Object.create ? function(e, t) {
            e.super_ = t,
            e.prototype = Object.create(t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            })
        }
        : function(e, t) {
            e.super_ = t;
            var r = function() {};
            r.prototype = t.prototype,
            e.prototype = new r,
            e.prototype.constructor = e
        }
        ;
        var inherits$1 = inherits
          , formatRegExp = /%[sdj%]/g;
        function format$1(e) {
            if (!isString(e)) {
                for (var t = [], r = 0; r < arguments.length; r++)
                    t.push(inspect(arguments[r]));
                return t.join(" ")
            }
            r = 1;
            for (var n = arguments, i = n.length, s = String(e).replace(formatRegExp, (function(e) {
                if ("%%" === e)
                    return "%";
                if (r >= i)
                    return e;
                switch (e) {
                case "%s":
                    return String(n[r++]);
                case "%d":
                    return Number(n[r++]);
                case "%j":
                    try {
                        return JSON.stringify(n[r++])
                    } catch (t) {
                        return "[Circular]"
                    }
                default:
                    return e
                }
            }
            )), a = n[r]; r < i; a = n[++r])
                isNull(a) || !isObject(a) ? s += " " + a : s += " " + inspect(a);
            return s
        }
        function deprecate(e, t) {
            if (isUndefined(global$1.process))
                return function() {
                    return deprecate(e, t).apply(this, arguments)
                }
                ;
            if (!0 === browser$1.noDeprecation)
                return e;
            var r = !1;
            return function() {
                if (!r) {
                    if (browser$1.throwDeprecation)
                        throw new Error(t);
                    browser$1.traceDeprecation ? console.trace(t) : console.error(t),
                    r = !0
                }
                return e.apply(this, arguments)
            }
        }
        var debugs = {}, debugEnviron;
        function debuglog(e) {
            if (isUndefined(debugEnviron) && (debugEnviron = browser$1.env.NODE_DEBUG || ""),
            e = e.toUpperCase(),
            !debugs[e])
                if (new RegExp("\\b" + e + "\\b","i").test(debugEnviron)) {
                    debugs[e] = function() {
                        var t = format$1.apply(null, arguments);
                        console.error("%s %d: %s", e, 0, t)
                    }
                } else
                    debugs[e] = function() {}
                    ;
            return debugs[e]
        }
        function inspect(e, t) {
            var r = {
                seen: [],
                stylize: stylizeNoColor
            };
            return arguments.length >= 3 && (r.depth = arguments[2]),
            arguments.length >= 4 && (r.colors = arguments[3]),
            isBoolean(t) ? r.showHidden = t : t && _extend(r, t),
            isUndefined(r.showHidden) && (r.showHidden = !1),
            isUndefined(r.depth) && (r.depth = 2),
            isUndefined(r.colors) && (r.colors = !1),
            isUndefined(r.customInspect) && (r.customInspect = !0),
            r.colors && (r.stylize = stylizeWithColor),
            formatValue(r, e, r.depth)
        }
        function stylizeWithColor(e, t) {
            var r = inspect.styles[t];
            return r ? "\x1b[" + inspect.colors[r][0] + "m" + e + "\x1b[" + inspect.colors[r][1] + "m" : e
        }
        function stylizeNoColor(e, t) {
            return e
        }
        function arrayToHash(e) {
            var t = {};
            return e.forEach((function(e, r) {
                t[e] = !0
            }
            )),
            t
        }
        function formatValue(e, t, r) {
            if (e.customInspect && t && isFunction$1(t.inspect) && t.inspect !== inspect && (!t.constructor || t.constructor.prototype !== t)) {
                var n = t.inspect(r, e);
                return isString(n) || (n = formatValue(e, n, r)),
                n
            }
            var i = formatPrimitive(e, t);
            if (i)
                return i;
            var s = Object.keys(t)
              , a = arrayToHash(s);
            if (e.showHidden && (s = Object.getOwnPropertyNames(t)),
            isError(t) && (s.indexOf("message") >= 0 || s.indexOf("description") >= 0))
                return formatError(t);
            if (0 === s.length) {
                if (isFunction$1(t)) {
                    var o = t.name ? ": " + t.name : "";
                    return e.stylize("[Function" + o + "]", "special")
                }
                if (isRegExp(t))
                    return e.stylize(RegExp.prototype.toString.call(t), "regexp");
                if (isDate(t))
                    return e.stylize(Date.prototype.toString.call(t), "date");
                if (isError(t))
                    return formatError(t)
            }
            var l, c = "", h = !1, d = ["{", "}"];
            (isArray$1(t) && (h = !0,
            d = ["[", "]"]),
            isFunction$1(t)) && (c = " [Function" + (t.name ? ": " + t.name : "") + "]");
            return isRegExp(t) && (c = " " + RegExp.prototype.toString.call(t)),
            isDate(t) && (c = " " + Date.prototype.toUTCString.call(t)),
            isError(t) && (c = " " + formatError(t)),
            0 !== s.length || h && 0 != t.length ? r < 0 ? isRegExp(t) ? e.stylize(RegExp.prototype.toString.call(t), "regexp") : e.stylize("[Object]", "special") : (e.seen.push(t),
            l = h ? formatArray(e, t, r, a, s) : s.map((function(n) {
                return formatProperty(e, t, r, a, n, h)
            }
            )),
            e.seen.pop(),
            reduceToSingleString(l, c, d)) : d[0] + c + d[1]
        }
        function formatPrimitive(e, t) {
            if (isUndefined(t))
                return e.stylize("undefined", "undefined");
            if (isString(t)) {
                var r = "'" + JSON.stringify(t).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
                return e.stylize(r, "string")
            }
            return isNumber(t) ? e.stylize("" + t, "number") : isBoolean(t) ? e.stylize("" + t, "boolean") : isNull(t) ? e.stylize("null", "null") : void 0
        }
        function formatError(e) {
            return "[" + Error.prototype.toString.call(e) + "]"
        }
        function formatArray(e, t, r, n, i) {
            for (var s = [], a = 0, o = t.length; a < o; ++a)
                hasOwnProperty$1(t, String(a)) ? s.push(formatProperty(e, t, r, n, String(a), !0)) : s.push("");
            return i.forEach((function(i) {
                i.match(/^\d+$/) || s.push(formatProperty(e, t, r, n, i, !0))
            }
            )),
            s
        }
        function formatProperty(e, t, r, n, i, s) {
            var a, o, l;
            if ((l = Object.getOwnPropertyDescriptor(t, i) || {
                value: t[i]
            }).get ? o = l.set ? e.stylize("[Getter/Setter]", "special") : e.stylize("[Getter]", "special") : l.set && (o = e.stylize("[Setter]", "special")),
            hasOwnProperty$1(n, i) || (a = "[" + i + "]"),
            o || (e.seen.indexOf(l.value) < 0 ? (o = isNull(r) ? formatValue(e, l.value, null) : formatValue(e, l.value, r - 1)).indexOf("\n") > -1 && (o = s ? o.split("\n").map((function(e) {
                return "  " + e
            }
            )).join("\n").substr(2) : "\n" + o.split("\n").map((function(e) {
                return "   " + e
            }
            )).join("\n")) : o = e.stylize("[Circular]", "special")),
            isUndefined(a)) {
                if (s && i.match(/^\d+$/))
                    return o;
                (a = JSON.stringify("" + i)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (a = a.substr(1, a.length - 2),
                a = e.stylize(a, "name")) : (a = a.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"),
                a = e.stylize(a, "string"))
            }
            return a + ": " + o
        }
        function reduceToSingleString(e, t, r) {
            return e.reduce((function(e, t) {
                return t.indexOf("\n"),
                e + t.replace(/\u001b\[\d\d?m/g, "").length + 1
            }
            ), 0) > 60 ? r[0] + ("" === t ? "" : t + "\n ") + " " + e.join(",\n  ") + " " + r[1] : r[0] + t + " " + e.join(", ") + " " + r[1]
        }
        function isArray$1(e) {
            return Array.isArray(e)
        }
        function isBoolean(e) {
            return "boolean" === typeof e
        }
        function isNull(e) {
            return null === e
        }
        function isNullOrUndefined(e) {
            return null == e
        }
        function isNumber(e) {
            return "number" === typeof e
        }
        function isString(e) {
            return "string" === typeof e
        }
        function isUndefined(e) {
            return void 0 === e
        }
        function isRegExp(e) {
            return isObject(e) && "[object RegExp]" === objectToString(e)
        }
        function isObject(e) {
            return "object" === typeof e && null !== e
        }
        function isDate(e) {
            return isObject(e) && "[object Date]" === objectToString(e)
        }
        function isError(e) {
            return isObject(e) && ("[object Error]" === objectToString(e) || e instanceof Error)
        }
        function isFunction$1(e) {
            return "function" === typeof e
        }
        function objectToString(e) {
            return Object.prototype.toString.call(e)
        }
        function _extend(e, t) {
            if (!t || !isObject(t))
                return e;
            for (var r = Object.keys(t), n = r.length; n--; )
                e[r[n]] = t[r[n]];
            return e
        }
        function hasOwnProperty$1(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }
        function BufferList() {
            this.head = null,
            this.tail = null,
            this.length = 0
        }
        inspect.colors = {
            bold: [1, 22],
            italic: [3, 23],
            underline: [4, 24],
            inverse: [7, 27],
            white: [37, 39],
            grey: [90, 39],
            black: [30, 39],
            blue: [34, 39],
            cyan: [36, 39],
            green: [32, 39],
            magenta: [35, 39],
            red: [31, 39],
            yellow: [33, 39]
        },
        inspect.styles = {
            special: "cyan",
            number: "yellow",
            boolean: "yellow",
            undefined: "grey",
            null: "bold",
            string: "green",
            date: "magenta",
            regexp: "red"
        },
        BufferList.prototype.push = function(e) {
            var t = {
                data: e,
                next: null
            };
            this.length > 0 ? this.tail.next = t : this.head = t,
            this.tail = t,
            ++this.length
        }
        ,
        BufferList.prototype.unshift = function(e) {
            var t = {
                data: e,
                next: this.head
            };
            0 === this.length && (this.tail = t),
            this.head = t,
            ++this.length
        }
        ,
        BufferList.prototype.shift = function() {
            if (0 !== this.length) {
                var e = this.head.data;
                return 1 === this.length ? this.head = this.tail = null : this.head = this.head.next,
                --this.length,
                e
            }
        }
        ,
        BufferList.prototype.clear = function() {
            this.head = this.tail = null,
            this.length = 0
        }
        ,
        BufferList.prototype.join = function(e) {
            if (0 === this.length)
                return "";
            for (var t = this.head, r = "" + t.data; t = t.next; )
                r += e + t.data;
            return r
        }
        ,
        BufferList.prototype.concat = function(e) {
            if (0 === this.length)
                return Buffer.alloc(0);
            if (1 === this.length)
                return this.head.data;
            for (var t = Buffer.allocUnsafe(e >>> 0), r = this.head, n = 0; r; )
                r.data.copy(t, n),
                n += r.data.length,
                r = r.next;
            return t
        }
        ;
        var isBufferEncoding = Buffer.isEncoding || function(e) {
            switch (e && e.toLowerCase()) {
            case "hex":
            case "utf8":
            case "utf-8":
            case "ascii":
            case "binary":
            case "base64":
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
            case "raw":
                return !0;
            default:
                return !1
            }
        }
        ;
        function assertEncoding(e) {
            if (e && !isBufferEncoding(e))
                throw new Error("Unknown encoding: " + e)
        }
        function StringDecoder(e) {
            switch (this.encoding = (e || "utf8").toLowerCase().replace(/[-_]/, ""),
            assertEncoding(e),
            this.encoding) {
            case "utf8":
                this.surrogateSize = 3;
                break;
            case "ucs2":
            case "utf16le":
                this.surrogateSize = 2,
                this.detectIncompleteChar = utf16DetectIncompleteChar;
                break;
            case "base64":
                this.surrogateSize = 3,
                this.detectIncompleteChar = base64DetectIncompleteChar;
                break;
            default:
                return void (this.write = passThroughWrite)
            }
            this.charBuffer = new Buffer(6),
            this.charReceived = 0,
            this.charLength = 0
        }
        function passThroughWrite(e) {
            return e.toString(this.encoding)
        }
        function utf16DetectIncompleteChar(e) {
            this.charReceived = e.length % 2,
            this.charLength = this.charReceived ? 2 : 0
        }
        function base64DetectIncompleteChar(e) {
            this.charReceived = e.length % 3,
            this.charLength = this.charReceived ? 3 : 0
        }
        StringDecoder.prototype.write = function(e) {
            for (var t = ""; this.charLength; ) {
                var r = e.length >= this.charLength - this.charReceived ? this.charLength - this.charReceived : e.length;
                if (e.copy(this.charBuffer, this.charReceived, 0, r),
                this.charReceived += r,
                this.charReceived < this.charLength)
                    return "";
                if (e = e.slice(r, e.length),
                !((i = (t = this.charBuffer.slice(0, this.charLength).toString(this.encoding)).charCodeAt(t.length - 1)) >= 55296 && i <= 56319)) {
                    if (this.charReceived = this.charLength = 0,
                    0 === e.length)
                        return t;
                    break
                }
                this.charLength += this.surrogateSize,
                t = ""
            }
            this.detectIncompleteChar(e);
            var n = e.length;
            this.charLength && (e.copy(this.charBuffer, 0, e.length - this.charReceived, n),
            n -= this.charReceived);
            var i;
            n = (t += e.toString(this.encoding, 0, n)).length - 1;
            if ((i = t.charCodeAt(n)) >= 55296 && i <= 56319) {
                var s = this.surrogateSize;
                return this.charLength += s,
                this.charReceived += s,
                this.charBuffer.copy(this.charBuffer, s, 0, s),
                e.copy(this.charBuffer, 0, 0, s),
                t.substring(0, n)
            }
            return t
        }
        ,
        StringDecoder.prototype.detectIncompleteChar = function(e) {
            for (var t = e.length >= 3 ? 3 : e.length; t > 0; t--) {
                var r = e[e.length - t];
                if (1 == t && r >> 5 == 6) {
                    this.charLength = 2;
                    break
                }
                if (t <= 2 && r >> 4 == 14) {
                    this.charLength = 3;
                    break
                }
                if (t <= 3 && r >> 3 == 30) {
                    this.charLength = 4;
                    break
                }
            }
            this.charReceived = t
        }
        ,
        StringDecoder.prototype.end = function(e) {
            var t = "";
            if (e && e.length && (t = this.write(e)),
            this.charReceived) {
                var r = this.charReceived
                  , n = this.charBuffer
                  , i = this.encoding;
                t += n.slice(0, r).toString(i)
            }
            return t
        }
        ,
        Readable.ReadableState = ReadableState;
        var debug = debuglog("stream");
        function prependListener(e, t, r) {
            if ("function" === typeof e.prependListener)
                return e.prependListener(t, r);
            e._events && e._events[t] ? Array.isArray(e._events[t]) ? e._events[t].unshift(r) : e._events[t] = [r, e._events[t]] : e.on(t, r)
        }
        function listenerCount(e, t) {
            return e.listeners(t).length
        }
        function ReadableState(e, t) {
            e = e || {},
            this.objectMode = !!e.objectMode,
            t instanceof Duplex && (this.objectMode = this.objectMode || !!e.readableObjectMode);
            var r = e.highWaterMark
              , n = this.objectMode ? 16 : 16384;
            this.highWaterMark = r || 0 === r ? r : n,
            this.highWaterMark = ~~this.highWaterMark,
            this.buffer = new BufferList,
            this.length = 0,
            this.pipes = null,
            this.pipesCount = 0,
            this.flowing = null,
            this.ended = !1,
            this.endEmitted = !1,
            this.reading = !1,
            this.sync = !0,
            this.needReadable = !1,
            this.emittedReadable = !1,
            this.readableListening = !1,
            this.resumeScheduled = !1,
            this.defaultEncoding = e.defaultEncoding || "utf8",
            this.ranOut = !1,
            this.awaitDrain = 0,
            this.readingMore = !1,
            this.decoder = null,
            this.encoding = null,
            e.encoding && (this.decoder = new StringDecoder(e.encoding),
            this.encoding = e.encoding)
        }
        function Readable(e) {
            if (!(this instanceof Readable))
                return new Readable(e);
            this._readableState = new ReadableState(e,this),
            this.readable = !0,
            e && "function" === typeof e.read && (this._read = e.read),
            EventEmitter.call(this)
        }
        function readableAddChunk(e, t, r, n, i) {
            var s = chunkInvalid(t, r);
            if (s)
                e.emit("error", s);
            else if (null === r)
                t.reading = !1,
                onEofChunk(e, t);
            else if (t.objectMode || r && r.length > 0)
                if (t.ended && !i) {
                    var a = new Error("stream.push() after EOF");
                    e.emit("error", a)
                } else if (t.endEmitted && i) {
                    var o = new Error("stream.unshift() after end event");
                    e.emit("error", o)
                } else {
                    var l;
                    !t.decoder || i || n || (r = t.decoder.write(r),
                    l = !t.objectMode && 0 === r.length),
                    i || (t.reading = !1),
                    l || (t.flowing && 0 === t.length && !t.sync ? (e.emit("data", r),
                    e.read(0)) : (t.length += t.objectMode ? 1 : r.length,
                    i ? t.buffer.unshift(r) : t.buffer.push(r),
                    t.needReadable && emitReadable(e))),
                    maybeReadMore(e, t)
                }
            else
                i || (t.reading = !1);
            return needMoreData(t)
        }
        function needMoreData(e) {
            return !e.ended && (e.needReadable || e.length < e.highWaterMark || 0 === e.length)
        }
        inherits$1(Readable, EventEmitter),
        Readable.prototype.push = function(e, t) {
            var r = this._readableState;
            return r.objectMode || "string" !== typeof e || (t = t || r.defaultEncoding) !== r.encoding && (e = Buffer.from(e, t),
            t = ""),
            readableAddChunk(this, r, e, t, !1)
        }
        ,
        Readable.prototype.unshift = function(e) {
            return readableAddChunk(this, this._readableState, e, "", !0)
        }
        ,
        Readable.prototype.isPaused = function() {
            return !1 === this._readableState.flowing
        }
        ,
        Readable.prototype.setEncoding = function(e) {
            return this._readableState.decoder = new StringDecoder(e),
            this._readableState.encoding = e,
            this
        }
        ;
        var MAX_HWM = 8388608;
        function computeNewHighWaterMark(e) {
            return e >= MAX_HWM ? e = MAX_HWM : (e--,
            e |= e >>> 1,
            e |= e >>> 2,
            e |= e >>> 4,
            e |= e >>> 8,
            e |= e >>> 16,
            e++),
            e
        }
        function howMuchToRead(e, t) {
            return e <= 0 || 0 === t.length && t.ended ? 0 : t.objectMode ? 1 : e !== e ? t.flowing && t.length ? t.buffer.head.data.length : t.length : (e > t.highWaterMark && (t.highWaterMark = computeNewHighWaterMark(e)),
            e <= t.length ? e : t.ended ? t.length : (t.needReadable = !0,
            0))
        }
        function chunkInvalid(e, t) {
            var r = null;
            return Buffer.isBuffer(t) || "string" === typeof t || null === t || void 0 === t || e.objectMode || (r = new TypeError("Invalid non-string/buffer chunk")),
            r
        }
        function onEofChunk(e, t) {
            if (!t.ended) {
                if (t.decoder) {
                    var r = t.decoder.end();
                    r && r.length && (t.buffer.push(r),
                    t.length += t.objectMode ? 1 : r.length)
                }
                t.ended = !0,
                emitReadable(e)
            }
        }
        function emitReadable(e) {
            var t = e._readableState;
            t.needReadable = !1,
            t.emittedReadable || (debug("emitReadable", t.flowing),
            t.emittedReadable = !0,
            t.sync ? nextTick(emitReadable_, e) : emitReadable_(e))
        }
        function emitReadable_(e) {
            debug("emit readable"),
            e.emit("readable"),
            flow(e)
        }
        function maybeReadMore(e, t) {
            t.readingMore || (t.readingMore = !0,
            nextTick(maybeReadMore_, e, t))
        }
        function maybeReadMore_(e, t) {
            for (var r = t.length; !t.reading && !t.flowing && !t.ended && t.length < t.highWaterMark && (debug("maybeReadMore read 0"),
            e.read(0),
            r !== t.length); )
                r = t.length;
            t.readingMore = !1
        }
        function pipeOnDrain(e) {
            return function() {
                var t = e._readableState;
                debug("pipeOnDrain", t.awaitDrain),
                t.awaitDrain && t.awaitDrain--,
                0 === t.awaitDrain && e.listeners("data").length && (t.flowing = !0,
                flow(e))
            }
        }
        function nReadingNextTick(e) {
            debug("readable nexttick read 0"),
            e.read(0)
        }
        function resume(e, t) {
            t.resumeScheduled || (t.resumeScheduled = !0,
            nextTick(resume_, e, t))
        }
        function resume_(e, t) {
            t.reading || (debug("resume read 0"),
            e.read(0)),
            t.resumeScheduled = !1,
            t.awaitDrain = 0,
            e.emit("resume"),
            flow(e),
            t.flowing && !t.reading && e.read(0)
        }
        function flow(e) {
            var t = e._readableState;
            for (debug("flow", t.flowing); t.flowing && null !== e.read(); )
                ;
        }
        function fromList(e, t) {
            return 0 === t.length ? null : (t.objectMode ? r = t.buffer.shift() : !e || e >= t.length ? (r = t.decoder ? t.buffer.join("") : 1 === t.buffer.length ? t.buffer.head.data : t.buffer.concat(t.length),
            t.buffer.clear()) : r = fromListPartial(e, t.buffer, t.decoder),
            r);
            var r
        }
        function fromListPartial(e, t, r) {
            var n;
            return e < t.head.data.length ? (n = t.head.data.slice(0, e),
            t.head.data = t.head.data.slice(e)) : n = e === t.head.data.length ? t.shift() : r ? copyFromBufferString(e, t) : copyFromBuffer(e, t),
            n
        }
        function copyFromBufferString(e, t) {
            var r = t.head
              , n = 1
              , i = r.data;
            for (e -= i.length; r = r.next; ) {
                var s = r.data
                  , a = e > s.length ? s.length : e;
                if (a === s.length ? i += s : i += s.slice(0, e),
                0 === (e -= a)) {
                    a === s.length ? (++n,
                    r.next ? t.head = r.next : t.head = t.tail = null) : (t.head = r,
                    r.data = s.slice(a));
                    break
                }
                ++n
            }
            return t.length -= n,
            i
        }
        function copyFromBuffer(e, t) {
            var r = Buffer.allocUnsafe(e)
              , n = t.head
              , i = 1;
            for (n.data.copy(r),
            e -= n.data.length; n = n.next; ) {
                var s = n.data
                  , a = e > s.length ? s.length : e;
                if (s.copy(r, r.length - e, 0, a),
                0 === (e -= a)) {
                    a === s.length ? (++i,
                    n.next ? t.head = n.next : t.head = t.tail = null) : (t.head = n,
                    n.data = s.slice(a));
                    break
                }
                ++i
            }
            return t.length -= i,
            r
        }
        function endReadable(e) {
            var t = e._readableState;
            if (t.length > 0)
                throw new Error('"endReadable()" called on non-empty stream');
            t.endEmitted || (t.ended = !0,
            nextTick(endReadableNT, t, e))
        }
        function endReadableNT(e, t) {
            e.endEmitted || 0 !== e.length || (e.endEmitted = !0,
            t.readable = !1,
            t.emit("end"))
        }
        function forEach(e, t) {
            for (var r = 0, n = e.length; r < n; r++)
                t(e[r], r)
        }
        function indexOf(e, t) {
            for (var r = 0, n = e.length; r < n; r++)
                if (e[r] === t)
                    return r;
            return -1
        }
        function nop() {}
        function WriteReq(e, t, r) {
            this.chunk = e,
            this.encoding = t,
            this.callback = r,
            this.next = null
        }
        function WritableState(e, t) {
            Object.defineProperty(this, "buffer", {
                get: deprecate((function() {
                    return this.getBuffer()
                }
                ), "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.")
            }),
            e = e || {},
            this.objectMode = !!e.objectMode,
            t instanceof Duplex && (this.objectMode = this.objectMode || !!e.writableObjectMode);
            var r = e.highWaterMark
              , n = this.objectMode ? 16 : 16384;
            this.highWaterMark = r || 0 === r ? r : n,
            this.highWaterMark = ~~this.highWaterMark,
            this.needDrain = !1,
            this.ending = !1,
            this.ended = !1,
            this.finished = !1;
            var i = !1 === e.decodeStrings;
            this.decodeStrings = !i,
            this.defaultEncoding = e.defaultEncoding || "utf8",
            this.length = 0,
            this.writing = !1,
            this.corked = 0,
            this.sync = !0,
            this.bufferProcessing = !1,
            this.onwrite = function(e) {
                onwrite(t, e)
            }
            ,
            this.writecb = null,
            this.writelen = 0,
            this.bufferedRequest = null,
            this.lastBufferedRequest = null,
            this.pendingcb = 0,
            this.prefinished = !1,
            this.errorEmitted = !1,
            this.bufferedRequestCount = 0,
            this.corkedRequestsFree = new CorkedRequest(this)
        }
        function Writable(e) {
            if (!(this instanceof Writable) && !(this instanceof Duplex))
                return new Writable(e);
            this._writableState = new WritableState(e,this),
            this.writable = !0,
            e && ("function" === typeof e.write && (this._write = e.write),
            "function" === typeof e.writev && (this._writev = e.writev)),
            EventEmitter.call(this)
        }
        function writeAfterEnd(e, t) {
            var r = new Error("write after end");
            e.emit("error", r),
            nextTick(t, r)
        }
        function validChunk(e, t, r, n) {
            var i = !0
              , s = !1;
            return null === r ? s = new TypeError("May not write null values to stream") : Buffer.isBuffer(r) || "string" === typeof r || void 0 === r || t.objectMode || (s = new TypeError("Invalid non-string/buffer chunk")),
            s && (e.emit("error", s),
            nextTick(n, s),
            i = !1),
            i
        }
        function decodeChunk(e, t, r) {
            return e.objectMode || !1 === e.decodeStrings || "string" !== typeof t || (t = Buffer.from(t, r)),
            t
        }
        function writeOrBuffer(e, t, r, n, i) {
            r = decodeChunk(t, r, n),
            Buffer.isBuffer(r) && (n = "buffer");
            var s = t.objectMode ? 1 : r.length;
            t.length += s;
            var a = t.length < t.highWaterMark;
            if (a || (t.needDrain = !0),
            t.writing || t.corked) {
                var o = t.lastBufferedRequest;
                t.lastBufferedRequest = new WriteReq(r,n,i),
                o ? o.next = t.lastBufferedRequest : t.bufferedRequest = t.lastBufferedRequest,
                t.bufferedRequestCount += 1
            } else
                doWrite(e, t, !1, s, r, n, i);
            return a
        }
        function doWrite(e, t, r, n, i, s, a) {
            t.writelen = n,
            t.writecb = a,
            t.writing = !0,
            t.sync = !0,
            r ? e._writev(i, t.onwrite) : e._write(i, s, t.onwrite),
            t.sync = !1
        }
        function onwriteError(e, t, r, n, i) {
            --t.pendingcb,
            r ? nextTick(i, n) : i(n),
            e._writableState.errorEmitted = !0,
            e.emit("error", n)
        }
        function onwriteStateUpdate(e) {
            e.writing = !1,
            e.writecb = null,
            e.length -= e.writelen,
            e.writelen = 0
        }
        function onwrite(e, t) {
            var r = e._writableState
              , n = r.sync
              , i = r.writecb;
            if (onwriteStateUpdate(r),
            t)
                onwriteError(e, r, n, t, i);
            else {
                var s = needFinish(r);
                s || r.corked || r.bufferProcessing || !r.bufferedRequest || clearBuffer(e, r),
                n ? nextTick(afterWrite, e, r, s, i) : afterWrite(e, r, s, i)
            }
        }
        function afterWrite(e, t, r, n) {
            r || onwriteDrain(e, t),
            t.pendingcb--,
            n(),
            finishMaybe(e, t)
        }
        function onwriteDrain(e, t) {
            0 === t.length && t.needDrain && (t.needDrain = !1,
            e.emit("drain"))
        }
        function clearBuffer(e, t) {
            t.bufferProcessing = !0;
            var r = t.bufferedRequest;
            if (e._writev && r && r.next) {
                var n = t.bufferedRequestCount
                  , i = new Array(n)
                  , s = t.corkedRequestsFree;
                s.entry = r;
                for (var a = 0; r; )
                    i[a] = r,
                    r = r.next,
                    a += 1;
                doWrite(e, t, !0, t.length, i, "", s.finish),
                t.pendingcb++,
                t.lastBufferedRequest = null,
                s.next ? (t.corkedRequestsFree = s.next,
                s.next = null) : t.corkedRequestsFree = new CorkedRequest(t)
            } else {
                for (; r; ) {
                    var o = r.chunk
                      , l = r.encoding
                      , c = r.callback;
                    if (doWrite(e, t, !1, t.objectMode ? 1 : o.length, o, l, c),
                    r = r.next,
                    t.writing)
                        break
                }
                null === r && (t.lastBufferedRequest = null)
            }
            t.bufferedRequestCount = 0,
            t.bufferedRequest = r,
            t.bufferProcessing = !1
        }
        function needFinish(e) {
            return e.ending && 0 === e.length && null === e.bufferedRequest && !e.finished && !e.writing
        }
        function prefinish(e, t) {
            t.prefinished || (t.prefinished = !0,
            e.emit("prefinish"))
        }
        function finishMaybe(e, t) {
            var r = needFinish(t);
            return r && (0 === t.pendingcb ? (prefinish(e, t),
            t.finished = !0,
            e.emit("finish")) : prefinish(e, t)),
            r
        }
        function endWritable(e, t, r) {
            t.ending = !0,
            finishMaybe(e, t),
            r && (t.finished ? nextTick(r) : e.once("finish", r)),
            t.ended = !0,
            e.writable = !1
        }
        function CorkedRequest(e) {
            var t = this;
            this.next = null,
            this.entry = null,
            this.finish = function(r) {
                var n = t.entry;
                for (t.entry = null; n; ) {
                    var i = n.callback;
                    e.pendingcb--,
                    i(r),
                    n = n.next
                }
                e.corkedRequestsFree ? e.corkedRequestsFree.next = t : e.corkedRequestsFree = t
            }
        }
        Readable.prototype.read = function(e) {
            debug("read", e),
            e = parseInt(e, 10);
            var t = this._readableState
              , r = e;
            if (0 !== e && (t.emittedReadable = !1),
            0 === e && t.needReadable && (t.length >= t.highWaterMark || t.ended))
                return debug("read: emitReadable", t.length, t.ended),
                0 === t.length && t.ended ? endReadable(this) : emitReadable(this),
                null;
            if (0 === (e = howMuchToRead(e, t)) && t.ended)
                return 0 === t.length && endReadable(this),
                null;
            var n, i = t.needReadable;
            return debug("need readable", i),
            (0 === t.length || t.length - e < t.highWaterMark) && debug("length less than watermark", i = !0),
            t.ended || t.reading ? debug("reading or ended", i = !1) : i && (debug("do read"),
            t.reading = !0,
            t.sync = !0,
            0 === t.length && (t.needReadable = !0),
            this._read(t.highWaterMark),
            t.sync = !1,
            t.reading || (e = howMuchToRead(r, t))),
            null === (n = e > 0 ? fromList(e, t) : null) ? (t.needReadable = !0,
            e = 0) : t.length -= e,
            0 === t.length && (t.ended || (t.needReadable = !0),
            r !== e && t.ended && endReadable(this)),
            null !== n && this.emit("data", n),
            n
        }
        ,
        Readable.prototype._read = function(e) {
            this.emit("error", new Error("not implemented"))
        }
        ,
        Readable.prototype.pipe = function(e, t) {
            var r = this
              , n = this._readableState;
            switch (n.pipesCount) {
            case 0:
                n.pipes = e;
                break;
            case 1:
                n.pipes = [n.pipes, e];
                break;
            default:
                n.pipes.push(e)
            }
            n.pipesCount += 1,
            debug("pipe count=%d opts=%j", n.pipesCount, t);
            var i = !t || !1 !== t.end ? a : c;
            function s(e) {
                debug("onunpipe"),
                e === r && c()
            }
            function a() {
                debug("onend"),
                e.end()
            }
            n.endEmitted ? nextTick(i) : r.once("end", i),
            e.on("unpipe", s);
            var o = pipeOnDrain(r);
            e.on("drain", o);
            var l = !1;
            function c() {
                debug("cleanup"),
                e.removeListener("close", f),
                e.removeListener("finish", p),
                e.removeListener("drain", o),
                e.removeListener("error", u),
                e.removeListener("unpipe", s),
                r.removeListener("end", a),
                r.removeListener("end", c),
                r.removeListener("data", d),
                l = !0,
                !n.awaitDrain || e._writableState && !e._writableState.needDrain || o()
            }
            var h = !1;
            function d(t) {
                debug("ondata"),
                h = !1,
                !1 !== e.write(t) || h || ((1 === n.pipesCount && n.pipes === e || n.pipesCount > 1 && -1 !== indexOf(n.pipes, e)) && !l && (debug("false write response, pause", r._readableState.awaitDrain),
                r._readableState.awaitDrain++,
                h = !0),
                r.pause())
            }
            function u(t) {
                debug("onerror", t),
                g(),
                e.removeListener("error", u),
                0 === listenerCount(e, "error") && e.emit("error", t)
            }
            function f() {
                e.removeListener("finish", p),
                g()
            }
            function p() {
                debug("onfinish"),
                e.removeListener("close", f),
                g()
            }
            function g() {
                debug("unpipe"),
                r.unpipe(e)
            }
            return r.on("data", d),
            prependListener(e, "error", u),
            e.once("close", f),
            e.once("finish", p),
            e.emit("pipe", r),
            n.flowing || (debug("pipe resume"),
            r.resume()),
            e
        }
        ,
        Readable.prototype.unpipe = function(e) {
            var t = this._readableState;
            if (0 === t.pipesCount)
                return this;
            if (1 === t.pipesCount)
                return e && e !== t.pipes || (e || (e = t.pipes),
                t.pipes = null,
                t.pipesCount = 0,
                t.flowing = !1,
                e && e.emit("unpipe", this)),
                this;
            if (!e) {
                var r = t.pipes
                  , n = t.pipesCount;
                t.pipes = null,
                t.pipesCount = 0,
                t.flowing = !1;
                for (var i = 0; i < n; i++)
                    r[i].emit("unpipe", this);
                return this
            }
            var s = indexOf(t.pipes, e);
            return -1 === s || (t.pipes.splice(s, 1),
            t.pipesCount -= 1,
            1 === t.pipesCount && (t.pipes = t.pipes[0]),
            e.emit("unpipe", this)),
            this
        }
        ,
        Readable.prototype.on = function(e, t) {
            var r = EventEmitter.prototype.on.call(this, e, t);
            if ("data" === e)
                !1 !== this._readableState.flowing && this.resume();
            else if ("readable" === e) {
                var n = this._readableState;
                n.endEmitted || n.readableListening || (n.readableListening = n.needReadable = !0,
                n.emittedReadable = !1,
                n.reading ? n.length && emitReadable(this) : nextTick(nReadingNextTick, this))
            }
            return r
        }
        ,
        Readable.prototype.addListener = Readable.prototype.on,
        Readable.prototype.resume = function() {
            var e = this._readableState;
            return e.flowing || (debug("resume"),
            e.flowing = !0,
            resume(this, e)),
            this
        }
        ,
        Readable.prototype.pause = function() {
            return debug("call pause flowing=%j", this._readableState.flowing),
            !1 !== this._readableState.flowing && (debug("pause"),
            this._readableState.flowing = !1,
            this.emit("pause")),
            this
        }
        ,
        Readable.prototype.wrap = function(e) {
            var t = this._readableState
              , r = !1
              , n = this;
            for (var i in e.on("end", (function() {
                if (debug("wrapped end"),
                t.decoder && !t.ended) {
                    var e = t.decoder.end();
                    e && e.length && n.push(e)
                }
                n.push(null)
            }
            )),
            e.on("data", (function(i) {
                (debug("wrapped data"),
                t.decoder && (i = t.decoder.write(i)),
                !t.objectMode || null !== i && void 0 !== i) && ((t.objectMode || i && i.length) && (n.push(i) || (r = !0,
                e.pause())))
            }
            )),
            e)
                void 0 === this[i] && "function" === typeof e[i] && (this[i] = function(t) {
                    return function() {
                        return e[t].apply(e, arguments)
                    }
                }(i));
            return forEach(["error", "close", "destroy", "pause", "resume"], (function(t) {
                e.on(t, n.emit.bind(n, t))
            }
            )),
            n._read = function(t) {
                debug("wrapped _read", t),
                r && (r = !1,
                e.resume())
            }
            ,
            n
        }
        ,
        Readable._fromList = fromList,
        Writable.WritableState = WritableState,
        inherits$1(Writable, EventEmitter),
        WritableState.prototype.getBuffer = function() {
            for (var e = this.bufferedRequest, t = []; e; )
                t.push(e),
                e = e.next;
            return t
        }
        ,
        Writable.prototype.pipe = function() {
            this.emit("error", new Error("Cannot pipe, not readable"))
        }
        ,
        Writable.prototype.write = function(e, t, r) {
            var n = this._writableState
              , i = !1;
            return "function" === typeof t && (r = t,
            t = null),
            Buffer.isBuffer(e) ? t = "buffer" : t || (t = n.defaultEncoding),
            "function" !== typeof r && (r = nop),
            n.ended ? writeAfterEnd(this, r) : validChunk(this, n, e, r) && (n.pendingcb++,
            i = writeOrBuffer(this, n, e, t, r)),
            i
        }
        ,
        Writable.prototype.cork = function() {
            this._writableState.corked++
        }
        ,
        Writable.prototype.uncork = function() {
            var e = this._writableState;
            e.corked && (e.corked--,
            e.writing || e.corked || e.finished || e.bufferProcessing || !e.bufferedRequest || clearBuffer(this, e))
        }
        ,
        Writable.prototype.setDefaultEncoding = function(e) {
            if ("string" === typeof e && (e = e.toLowerCase()),
            !(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((e + "").toLowerCase()) > -1))
                throw new TypeError("Unknown encoding: " + e);
            return this._writableState.defaultEncoding = e,
            this
        }
        ,
        Writable.prototype._write = function(e, t, r) {
            r(new Error("not implemented"))
        }
        ,
        Writable.prototype._writev = null,
        Writable.prototype.end = function(e, t, r) {
            var n = this._writableState;
            "function" === typeof e ? (r = e,
            e = null,
            t = null) : "function" === typeof t && (r = t,
            t = null),
            null !== e && void 0 !== e && this.write(e, t),
            n.corked && (n.corked = 1,
            this.uncork()),
            n.ending || n.finished || endWritable(this, n, r)
        }
        ,
        inherits$1(Duplex, Readable);
        for (var keys = Object.keys(Writable.prototype), v = 0; v < keys.length; v++) {
            var method = keys[v];
            Duplex.prototype[method] || (Duplex.prototype[method] = Writable.prototype[method])
        }
        function Duplex(e) {
            if (!(this instanceof Duplex))
                return new Duplex(e);
            Readable.call(this, e),
            Writable.call(this, e),
            e && !1 === e.readable && (this.readable = !1),
            e && !1 === e.writable && (this.writable = !1),
            this.allowHalfOpen = !0,
            e && !1 === e.allowHalfOpen && (this.allowHalfOpen = !1),
            this.once("end", onend)
        }
        function onend() {
            this.allowHalfOpen || this._writableState.ended || nextTick(onEndNT, this)
        }
        function onEndNT(e) {
            e.end()
        }
        function TransformState(e) {
            this.afterTransform = function(t, r) {
                return afterTransform(e, t, r)
            }
            ,
            this.needTransform = !1,
            this.transforming = !1,
            this.writecb = null,
            this.writechunk = null,
            this.writeencoding = null
        }
        function afterTransform(e, t, r) {
            var n = e._transformState;
            n.transforming = !1;
            var i = n.writecb;
            if (!i)
                return e.emit("error", new Error("no writecb in Transform class"));
            n.writechunk = null,
            n.writecb = null,
            null !== r && void 0 !== r && e.push(r),
            i(t);
            var s = e._readableState;
            s.reading = !1,
            (s.needReadable || s.length < s.highWaterMark) && e._read(s.highWaterMark)
        }
        function Transform(e) {
            if (!(this instanceof Transform))
                return new Transform(e);
            Duplex.call(this, e),
            this._transformState = new TransformState(this);
            var t = this;
            this._readableState.needReadable = !0,
            this._readableState.sync = !1,
            e && ("function" === typeof e.transform && (this._transform = e.transform),
            "function" === typeof e.flush && (this._flush = e.flush)),
            this.once("prefinish", (function() {
                "function" === typeof this._flush ? this._flush((function(e) {
                    done(t, e)
                }
                )) : done(t)
            }
            ))
        }
        function done(e, t) {
            if (t)
                return e.emit("error", t);
            var r = e._writableState
              , n = e._transformState;
            if (r.length)
                throw new Error("Calling transform done when ws.length != 0");
            if (n.transforming)
                throw new Error("Calling transform done when still transforming");
            return e.push(null)
        }
        function PassThrough(e) {
            if (!(this instanceof PassThrough))
                return new PassThrough(e);
            Transform.call(this, e)
        }
        function Stream() {
            EventEmitter.call(this)
        }
        inherits$1(Transform, Duplex),
        Transform.prototype.push = function(e, t) {
            return this._transformState.needTransform = !1,
            Duplex.prototype.push.call(this, e, t)
        }
        ,
        Transform.prototype._transform = function(e, t, r) {
            throw new Error("Not implemented")
        }
        ,
        Transform.prototype._write = function(e, t, r) {
            var n = this._transformState;
            if (n.writecb = r,
            n.writechunk = e,
            n.writeencoding = t,
            !n.transforming) {
                var i = this._readableState;
                (n.needTransform || i.needReadable || i.length < i.highWaterMark) && this._read(i.highWaterMark)
            }
        }
        ,
        Transform.prototype._read = function(e) {
            var t = this._transformState;
            null !== t.writechunk && t.writecb && !t.transforming ? (t.transforming = !0,
            this._transform(t.writechunk, t.writeencoding, t.afterTransform)) : t.needTransform = !0
        }
        ,
        inherits$1(PassThrough, Transform),
        PassThrough.prototype._transform = function(e, t, r) {
            r(null, e)
        }
        ,
        inherits$1(Stream, EventEmitter),
        Stream.Readable = Readable,
        Stream.Writable = Writable,
        Stream.Duplex = Duplex,
        Stream.Transform = Transform,
        Stream.PassThrough = PassThrough,
        Stream.Stream = Stream,
        Stream.prototype.pipe = function(e, t) {
            var r = this;
            function n(t) {
                e.writable && !1 === e.write(t) && r.pause && r.pause()
            }
            function i() {
                r.readable && r.resume && r.resume()
            }
            r.on("data", n),
            e.on("drain", i),
            e._isStdio || t && !1 === t.end || (r.on("end", a),
            r.on("close", o));
            var s = !1;
            function a() {
                s || (s = !0,
                e.end())
            }
            function o() {
                s || (s = !0,
                "function" === typeof e.destroy && e.destroy())
            }
            function l(e) {
                if (c(),
                0 === EventEmitter.listenerCount(this, "error"))
                    throw e
            }
            function c() {
                r.removeListener("data", n),
                e.removeListener("drain", i),
                r.removeListener("end", a),
                r.removeListener("close", o),
                r.removeListener("error", l),
                e.removeListener("error", l),
                r.removeListener("end", c),
                r.removeListener("close", c),
                e.removeListener("close", c)
            }
            return r.on("error", l),
            e.on("error", l),
            r.on("end", c),
            r.on("close", c),
            e.on("close", c),
            e.emit("pipe", r),
            e
        }
        ;
        var msg = {
            2: "need dictionary",
            1: "stream end",
            0: "",
            "-1": "file error",
            "-2": "stream error",
            "-3": "data error",
            "-4": "insufficient memory",
            "-5": "buffer error",
            "-6": "incompatible version"
        };
        function ZStream() {
            this.input = null,
            this.next_in = 0,
            this.avail_in = 0,
            this.total_in = 0,
            this.output = null,
            this.next_out = 0,
            this.avail_out = 0,
            this.total_out = 0,
            this.msg = "",
            this.state = null,
            this.data_type = 2,
            this.adler = 0
        }
        function arraySet(e, t, r, n, i) {
            if (t.subarray && e.subarray)
                e.set(t.subarray(r, r + n), i);
            else
                for (var s = 0; s < n; s++)
                    e[i + s] = t[r + s]
        }
        var Buf8 = Uint8Array
          , Buf16 = Uint16Array
          , Buf32 = Int32Array
          , Z_FIXED$2 = 4
          , Z_BINARY$1 = 0
          , Z_TEXT$1 = 1
          , Z_UNKNOWN$2 = 2;
        function zero$1(e) {
            for (var t = e.length; --t >= 0; )
                e[t] = 0
        }
        var STORED_BLOCK = 0
          , STATIC_TREES = 1
          , DYN_TREES = 2
          , MIN_MATCH$1 = 3
          , MAX_MATCH$1 = 258
          , LENGTH_CODES$1 = 29
          , LITERALS$1 = 256
          , L_CODES$1 = LITERALS$1 + 1 + LENGTH_CODES$1
          , D_CODES$1 = 30
          , BL_CODES$1 = 19
          , HEAP_SIZE$1 = 2 * L_CODES$1 + 1
          , MAX_BITS$1 = 15
          , Buf_size = 16
          , MAX_BL_BITS = 7
          , END_BLOCK = 256
          , REP_3_6 = 16
          , REPZ_3_10 = 17
          , REPZ_11_138 = 18
          , extra_lbits = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0]
          , extra_dbits = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13]
          , extra_blbits = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7]
          , bl_order = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]
          , DIST_CODE_LEN = 512
          , static_ltree = new Array(2 * (L_CODES$1 + 2));
        zero$1(static_ltree);
        var static_dtree = new Array(2 * D_CODES$1);
        zero$1(static_dtree);
        var _dist_code = new Array(DIST_CODE_LEN);
        zero$1(_dist_code);
        var _length_code = new Array(MAX_MATCH$1 - MIN_MATCH$1 + 1);
        zero$1(_length_code);
        var base_length = new Array(LENGTH_CODES$1);
        zero$1(base_length);
        var base_dist = new Array(D_CODES$1), static_l_desc, static_d_desc, static_bl_desc;
        function StaticTreeDesc(e, t, r, n, i) {
            this.static_tree = e,
            this.extra_bits = t,
            this.extra_base = r,
            this.elems = n,
            this.max_length = i,
            this.has_stree = e && e.length
        }
        function TreeDesc(e, t) {
            this.dyn_tree = e,
            this.max_code = 0,
            this.stat_desc = t
        }
        function d_code(e) {
            return e < 256 ? _dist_code[e] : _dist_code[256 + (e >>> 7)]
        }
        function put_short(e, t) {
            e.pending_buf[e.pending++] = 255 & t,
            e.pending_buf[e.pending++] = t >>> 8 & 255
        }
        function send_bits(e, t, r) {
            e.bi_valid > Buf_size - r ? (e.bi_buf |= t << e.bi_valid & 65535,
            put_short(e, e.bi_buf),
            e.bi_buf = t >> Buf_size - e.bi_valid,
            e.bi_valid += r - Buf_size) : (e.bi_buf |= t << e.bi_valid & 65535,
            e.bi_valid += r)
        }
        function send_code(e, t, r) {
            send_bits(e, r[2 * t], r[2 * t + 1])
        }
        function bi_reverse(e, t) {
            var r = 0;
            do {
                r |= 1 & e,
                e >>>= 1,
                r <<= 1
            } while (--t > 0);
            return r >>> 1
        }
        function bi_flush(e) {
            16 === e.bi_valid ? (put_short(e, e.bi_buf),
            e.bi_buf = 0,
            e.bi_valid = 0) : e.bi_valid >= 8 && (e.pending_buf[e.pending++] = 255 & e.bi_buf,
            e.bi_buf >>= 8,
            e.bi_valid -= 8)
        }
        function gen_bitlen(e, t) {
            var r, n, i, s, a, o, l = t.dyn_tree, c = t.max_code, h = t.stat_desc.static_tree, d = t.stat_desc.has_stree, u = t.stat_desc.extra_bits, f = t.stat_desc.extra_base, p = t.stat_desc.max_length, g = 0;
            for (s = 0; s <= MAX_BITS$1; s++)
                e.bl_count[s] = 0;
            for (l[2 * e.heap[e.heap_max] + 1] = 0,
            r = e.heap_max + 1; r < HEAP_SIZE$1; r++)
                (s = l[2 * l[2 * (n = e.heap[r]) + 1] + 1] + 1) > p && (s = p,
                g++),
                l[2 * n + 1] = s,
                n > c || (e.bl_count[s]++,
                a = 0,
                n >= f && (a = u[n - f]),
                o = l[2 * n],
                e.opt_len += o * (s + a),
                d && (e.static_len += o * (h[2 * n + 1] + a)));
            if (0 !== g) {
                do {
                    for (s = p - 1; 0 === e.bl_count[s]; )
                        s--;
                    e.bl_count[s]--,
                    e.bl_count[s + 1] += 2,
                    e.bl_count[p]--,
                    g -= 2
                } while (g > 0);
                for (s = p; 0 !== s; s--)
                    for (n = e.bl_count[s]; 0 !== n; )
                        (i = e.heap[--r]) > c || (l[2 * i + 1] !== s && (e.opt_len += (s - l[2 * i + 1]) * l[2 * i],
                        l[2 * i + 1] = s),
                        n--)
            }
        }
        function gen_codes(e, t, r) {
            var n, i, s = new Array(MAX_BITS$1 + 1), a = 0;
            for (n = 1; n <= MAX_BITS$1; n++)
                s[n] = a = a + r[n - 1] << 1;
            for (i = 0; i <= t; i++) {
                var o = e[2 * i + 1];
                0 !== o && (e[2 * i] = bi_reverse(s[o]++, o))
            }
        }
        function tr_static_init() {
            var e, t, r, n, i, s = new Array(MAX_BITS$1 + 1);
            for (r = 0,
            n = 0; n < LENGTH_CODES$1 - 1; n++)
                for (base_length[n] = r,
                e = 0; e < 1 << extra_lbits[n]; e++)
                    _length_code[r++] = n;
            for (_length_code[r - 1] = n,
            i = 0,
            n = 0; n < 16; n++)
                for (base_dist[n] = i,
                e = 0; e < 1 << extra_dbits[n]; e++)
                    _dist_code[i++] = n;
            for (i >>= 7; n < D_CODES$1; n++)
                for (base_dist[n] = i << 7,
                e = 0; e < 1 << extra_dbits[n] - 7; e++)
                    _dist_code[256 + i++] = n;
            for (t = 0; t <= MAX_BITS$1; t++)
                s[t] = 0;
            for (e = 0; e <= 143; )
                static_ltree[2 * e + 1] = 8,
                e++,
                s[8]++;
            for (; e <= 255; )
                static_ltree[2 * e + 1] = 9,
                e++,
                s[9]++;
            for (; e <= 279; )
                static_ltree[2 * e + 1] = 7,
                e++,
                s[7]++;
            for (; e <= 287; )
                static_ltree[2 * e + 1] = 8,
                e++,
                s[8]++;
            for (gen_codes(static_ltree, L_CODES$1 + 1, s),
            e = 0; e < D_CODES$1; e++)
                static_dtree[2 * e + 1] = 5,
                static_dtree[2 * e] = bi_reverse(e, 5);
            static_l_desc = new StaticTreeDesc(static_ltree,extra_lbits,LITERALS$1 + 1,L_CODES$1,MAX_BITS$1),
            static_d_desc = new StaticTreeDesc(static_dtree,extra_dbits,0,D_CODES$1,MAX_BITS$1),
            static_bl_desc = new StaticTreeDesc(new Array(0),extra_blbits,0,BL_CODES$1,MAX_BL_BITS)
        }
        function init_block(e) {
            var t;
            for (t = 0; t < L_CODES$1; t++)
                e.dyn_ltree[2 * t] = 0;
            for (t = 0; t < D_CODES$1; t++)
                e.dyn_dtree[2 * t] = 0;
            for (t = 0; t < BL_CODES$1; t++)
                e.bl_tree[2 * t] = 0;
            e.dyn_ltree[2 * END_BLOCK] = 1,
            e.opt_len = e.static_len = 0,
            e.last_lit = e.matches = 0
        }
        function bi_windup(e) {
            e.bi_valid > 8 ? put_short(e, e.bi_buf) : e.bi_valid > 0 && (e.pending_buf[e.pending++] = e.bi_buf),
            e.bi_buf = 0,
            e.bi_valid = 0
        }
        function copy_block(e, t, r, n) {
            bi_windup(e),
            n && (put_short(e, r),
            put_short(e, ~r)),
            arraySet(e.pending_buf, e.window, t, r, e.pending),
            e.pending += r
        }
        function smaller(e, t, r, n) {
            var i = 2 * t
              , s = 2 * r;
            return e[i] < e[s] || e[i] === e[s] && n[t] <= n[r]
        }
        function pqdownheap(e, t, r) {
            for (var n = e.heap[r], i = r << 1; i <= e.heap_len && (i < e.heap_len && smaller(t, e.heap[i + 1], e.heap[i], e.depth) && i++,
            !smaller(t, n, e.heap[i], e.depth)); )
                e.heap[r] = e.heap[i],
                r = i,
                i <<= 1;
            e.heap[r] = n
        }
        function compress_block(e, t, r) {
            var n, i, s, a, o = 0;
            if (0 !== e.last_lit)
                do {
                    n = e.pending_buf[e.d_buf + 2 * o] << 8 | e.pending_buf[e.d_buf + 2 * o + 1],
                    i = e.pending_buf[e.l_buf + o],
                    o++,
                    0 === n ? send_code(e, i, t) : (send_code(e, (s = _length_code[i]) + LITERALS$1 + 1, t),
                    0 !== (a = extra_lbits[s]) && send_bits(e, i -= base_length[s], a),
                    send_code(e, s = d_code(--n), r),
                    0 !== (a = extra_dbits[s]) && send_bits(e, n -= base_dist[s], a))
                } while (o < e.last_lit);
            send_code(e, END_BLOCK, t)
        }
        function build_tree(e, t) {
            var r, n, i, s = t.dyn_tree, a = t.stat_desc.static_tree, o = t.stat_desc.has_stree, l = t.stat_desc.elems, c = -1;
            for (e.heap_len = 0,
            e.heap_max = HEAP_SIZE$1,
            r = 0; r < l; r++)
                0 !== s[2 * r] ? (e.heap[++e.heap_len] = c = r,
                e.depth[r] = 0) : s[2 * r + 1] = 0;
            for (; e.heap_len < 2; )
                s[2 * (i = e.heap[++e.heap_len] = c < 2 ? ++c : 0)] = 1,
                e.depth[i] = 0,
                e.opt_len--,
                o && (e.static_len -= a[2 * i + 1]);
            for (t.max_code = c,
            r = e.heap_len >> 1; r >= 1; r--)
                pqdownheap(e, s, r);
            i = l;
            do {
                r = e.heap[1],
                e.heap[1] = e.heap[e.heap_len--],
                pqdownheap(e, s, 1),
                n = e.heap[1],
                e.heap[--e.heap_max] = r,
                e.heap[--e.heap_max] = n,
                s[2 * i] = s[2 * r] + s[2 * n],
                e.depth[i] = (e.depth[r] >= e.depth[n] ? e.depth[r] : e.depth[n]) + 1,
                s[2 * r + 1] = s[2 * n + 1] = i,
                e.heap[1] = i++,
                pqdownheap(e, s, 1)
            } while (e.heap_len >= 2);
            e.heap[--e.heap_max] = e.heap[1],
            gen_bitlen(e, t),
            gen_codes(s, c, e.bl_count)
        }
        function scan_tree(e, t, r) {
            var n, i, s = -1, a = t[1], o = 0, l = 7, c = 4;
            for (0 === a && (l = 138,
            c = 3),
            t[2 * (r + 1) + 1] = 65535,
            n = 0; n <= r; n++)
                i = a,
                a = t[2 * (n + 1) + 1],
                ++o < l && i === a || (o < c ? e.bl_tree[2 * i] += o : 0 !== i ? (i !== s && e.bl_tree[2 * i]++,
                e.bl_tree[2 * REP_3_6]++) : o <= 10 ? e.bl_tree[2 * REPZ_3_10]++ : e.bl_tree[2 * REPZ_11_138]++,
                o = 0,
                s = i,
                0 === a ? (l = 138,
                c = 3) : i === a ? (l = 6,
                c = 3) : (l = 7,
                c = 4))
        }
        function send_tree(e, t, r) {
            var n, i, s = -1, a = t[1], o = 0, l = 7, c = 4;
            for (0 === a && (l = 138,
            c = 3),
            n = 0; n <= r; n++)
                if (i = a,
                a = t[2 * (n + 1) + 1],
                !(++o < l && i === a)) {
                    if (o < c)
                        do {
                            send_code(e, i, e.bl_tree)
                        } while (0 !== --o);
                    else
                        0 !== i ? (i !== s && (send_code(e, i, e.bl_tree),
                        o--),
                        send_code(e, REP_3_6, e.bl_tree),
                        send_bits(e, o - 3, 2)) : o <= 10 ? (send_code(e, REPZ_3_10, e.bl_tree),
                        send_bits(e, o - 3, 3)) : (send_code(e, REPZ_11_138, e.bl_tree),
                        send_bits(e, o - 11, 7));
                    o = 0,
                    s = i,
                    0 === a ? (l = 138,
                    c = 3) : i === a ? (l = 6,
                    c = 3) : (l = 7,
                    c = 4)
                }
        }
        function build_bl_tree(e) {
            var t;
            for (scan_tree(e, e.dyn_ltree, e.l_desc.max_code),
            scan_tree(e, e.dyn_dtree, e.d_desc.max_code),
            build_tree(e, e.bl_desc),
            t = BL_CODES$1 - 1; t >= 3 && 0 === e.bl_tree[2 * bl_order[t] + 1]; t--)
                ;
            return e.opt_len += 3 * (t + 1) + 5 + 5 + 4,
            t
        }
        function send_all_trees(e, t, r, n) {
            var i;
            for (send_bits(e, t - 257, 5),
            send_bits(e, r - 1, 5),
            send_bits(e, n - 4, 4),
            i = 0; i < n; i++)
                send_bits(e, e.bl_tree[2 * bl_order[i] + 1], 3);
            send_tree(e, e.dyn_ltree, t - 1),
            send_tree(e, e.dyn_dtree, r - 1)
        }
        function detect_data_type(e) {
            var t, r = 4093624447;
            for (t = 0; t <= 31; t++,
            r >>>= 1)
                if (1 & r && 0 !== e.dyn_ltree[2 * t])
                    return Z_BINARY$1;
            if (0 !== e.dyn_ltree[18] || 0 !== e.dyn_ltree[20] || 0 !== e.dyn_ltree[26])
                return Z_TEXT$1;
            for (t = 32; t < LITERALS$1; t++)
                if (0 !== e.dyn_ltree[2 * t])
                    return Z_TEXT$1;
            return Z_BINARY$1
        }
        zero$1(base_dist);
        var static_init_done = !1;
        function _tr_init(e) {
            static_init_done || (tr_static_init(),
            static_init_done = !0),
            e.l_desc = new TreeDesc(e.dyn_ltree,static_l_desc),
            e.d_desc = new TreeDesc(e.dyn_dtree,static_d_desc),
            e.bl_desc = new TreeDesc(e.bl_tree,static_bl_desc),
            e.bi_buf = 0,
            e.bi_valid = 0,
            init_block(e)
        }
        function _tr_stored_block(e, t, r, n) {
            send_bits(e, (STORED_BLOCK << 1) + (n ? 1 : 0), 3),
            copy_block(e, t, r, !0)
        }
        function _tr_align(e) {
            send_bits(e, STATIC_TREES << 1, 3),
            send_code(e, END_BLOCK, static_ltree),
            bi_flush(e)
        }
        function _tr_flush_block(e, t, r, n) {
            var i, s, a = 0;
            e.level > 0 ? (e.strm.data_type === Z_UNKNOWN$2 && (e.strm.data_type = detect_data_type(e)),
            build_tree(e, e.l_desc),
            build_tree(e, e.d_desc),
            a = build_bl_tree(e),
            i = e.opt_len + 3 + 7 >>> 3,
            (s = e.static_len + 3 + 7 >>> 3) <= i && (i = s)) : i = s = r + 5,
            r + 4 <= i && -1 !== t ? _tr_stored_block(e, t, r, n) : e.strategy === Z_FIXED$2 || s === i ? (send_bits(e, (STATIC_TREES << 1) + (n ? 1 : 0), 3),
            compress_block(e, static_ltree, static_dtree)) : (send_bits(e, (DYN_TREES << 1) + (n ? 1 : 0), 3),
            send_all_trees(e, e.l_desc.max_code + 1, e.d_desc.max_code + 1, a + 1),
            compress_block(e, e.dyn_ltree, e.dyn_dtree)),
            init_block(e),
            n && bi_windup(e)
        }
        function _tr_tally(e, t, r) {
            return e.pending_buf[e.d_buf + 2 * e.last_lit] = t >>> 8 & 255,
            e.pending_buf[e.d_buf + 2 * e.last_lit + 1] = 255 & t,
            e.pending_buf[e.l_buf + e.last_lit] = 255 & r,
            e.last_lit++,
            0 === t ? e.dyn_ltree[2 * r]++ : (e.matches++,
            t--,
            e.dyn_ltree[2 * (_length_code[r] + LITERALS$1 + 1)]++,
            e.dyn_dtree[2 * d_code(t)]++),
            e.last_lit === e.lit_bufsize - 1
        }
        function adler32(e, t, r, n) {
            for (var i = 65535 & e | 0, s = e >>> 16 & 65535 | 0, a = 0; 0 !== r; ) {
                r -= a = r > 2e3 ? 2e3 : r;
                do {
                    s = s + (i = i + t[n++] | 0) | 0
                } while (--a);
                i %= 65521,
                s %= 65521
            }
            return i | s << 16 | 0
        }
        function makeTable() {
            for (var e, t = [], r = 0; r < 256; r++) {
                e = r;
                for (var n = 0; n < 8; n++)
                    e = 1 & e ? 3988292384 ^ e >>> 1 : e >>> 1;
                t[r] = e
            }
            return t
        }
        var crcTable = makeTable();
        function crc32(e, t, r, n) {
            var i = crcTable
              , s = n + r;
            e ^= -1;
            for (var a = n; a < s; a++)
                e = e >>> 8 ^ i[255 & (e ^ t[a])];
            return -1 ^ e
        }
        var Z_NO_FLUSH$1 = 0, Z_PARTIAL_FLUSH$1 = 1, Z_FULL_FLUSH$1 = 3, Z_FINISH$2 = 4, Z_BLOCK$2 = 5, Z_OK$2 = 0, Z_STREAM_END$2 = 1, Z_STREAM_ERROR$2 = -2, Z_DATA_ERROR$2 = -3, Z_BUF_ERROR$2 = -5, Z_DEFAULT_COMPRESSION$1 = -1, Z_FILTERED$1 = 1, Z_HUFFMAN_ONLY$1 = 2, Z_RLE$1 = 3, Z_FIXED$1 = 4, Z_UNKNOWN$1 = 2, Z_DEFLATED$2 = 8, MAX_MEM_LEVEL = 9, LENGTH_CODES = 29, LITERALS = 256, L_CODES = LITERALS + 1 + LENGTH_CODES, D_CODES = 30, BL_CODES = 19, HEAP_SIZE = 2 * L_CODES + 1, MAX_BITS = 15, MIN_MATCH = 3, MAX_MATCH = 258, MIN_LOOKAHEAD = MAX_MATCH + MIN_MATCH + 1, PRESET_DICT = 32, INIT_STATE = 42, EXTRA_STATE = 69, NAME_STATE = 73, COMMENT_STATE = 91, HCRC_STATE = 103, BUSY_STATE = 113, FINISH_STATE = 666, BS_NEED_MORE = 1, BS_BLOCK_DONE = 2, BS_FINISH_STARTED = 3, BS_FINISH_DONE = 4, OS_CODE = 3, configuration_table;
        function err(e, t) {
            return e.msg = msg[t],
            t
        }
        function rank(e) {
            return (e << 1) - (e > 4 ? 9 : 0)
        }
        function zero(e) {
            for (var t = e.length; --t >= 0; )
                e[t] = 0
        }
        function flush_pending(e) {
            var t = e.state
              , r = t.pending;
            r > e.avail_out && (r = e.avail_out),
            0 !== r && (arraySet(e.output, t.pending_buf, t.pending_out, r, e.next_out),
            e.next_out += r,
            t.pending_out += r,
            e.total_out += r,
            e.avail_out -= r,
            t.pending -= r,
            0 === t.pending && (t.pending_out = 0))
        }
        function flush_block_only(e, t) {
            _tr_flush_block(e, e.block_start >= 0 ? e.block_start : -1, e.strstart - e.block_start, t),
            e.block_start = e.strstart,
            flush_pending(e.strm)
        }
        function put_byte(e, t) {
            e.pending_buf[e.pending++] = t
        }
        function putShortMSB(e, t) {
            e.pending_buf[e.pending++] = t >>> 8 & 255,
            e.pending_buf[e.pending++] = 255 & t
        }
        function read_buf(e, t, r, n) {
            var i = e.avail_in;
            return i > n && (i = n),
            0 === i ? 0 : (e.avail_in -= i,
            arraySet(t, e.input, e.next_in, i, r),
            1 === e.state.wrap ? e.adler = adler32(e.adler, t, i, r) : 2 === e.state.wrap && (e.adler = crc32(e.adler, t, i, r)),
            e.next_in += i,
            e.total_in += i,
            i)
        }
        function longest_match(e, t) {
            var r, n, i = e.max_chain_length, s = e.strstart, a = e.prev_length, o = e.nice_match, l = e.strstart > e.w_size - MIN_LOOKAHEAD ? e.strstart - (e.w_size - MIN_LOOKAHEAD) : 0, c = e.window, h = e.w_mask, d = e.prev, u = e.strstart + MAX_MATCH, f = c[s + a - 1], p = c[s + a];
            e.prev_length >= e.good_match && (i >>= 2),
            o > e.lookahead && (o = e.lookahead);
            do {
                if (c[(r = t) + a] === p && c[r + a - 1] === f && c[r] === c[s] && c[++r] === c[s + 1]) {
                    s += 2,
                    r++;
                    do {} while (c[++s] === c[++r] && c[++s] === c[++r] && c[++s] === c[++r] && c[++s] === c[++r] && c[++s] === c[++r] && c[++s] === c[++r] && c[++s] === c[++r] && c[++s] === c[++r] && s < u);
                    if (n = MAX_MATCH - (u - s),
                    s = u - MAX_MATCH,
                    n > a) {
                        if (e.match_start = t,
                        a = n,
                        n >= o)
                            break;
                        f = c[s + a - 1],
                        p = c[s + a]
                    }
                }
            } while ((t = d[t & h]) > l && 0 !== --i);
            return a <= e.lookahead ? a : e.lookahead
        }
        function fill_window(e) {
            var t, r, n, i, s, a = e.w_size;
            do {
                if (i = e.window_size - e.lookahead - e.strstart,
                e.strstart >= a + (a - MIN_LOOKAHEAD)) {
                    arraySet(e.window, e.window, a, a, 0),
                    e.match_start -= a,
                    e.strstart -= a,
                    e.block_start -= a,
                    t = r = e.hash_size;
                    do {
                        n = e.head[--t],
                        e.head[t] = n >= a ? n - a : 0
                    } while (--r);
                    t = r = a;
                    do {
                        n = e.prev[--t],
                        e.prev[t] = n >= a ? n - a : 0
                    } while (--r);
                    i += a
                }
                if (0 === e.strm.avail_in)
                    break;
                if (r = read_buf(e.strm, e.window, e.strstart + e.lookahead, i),
                e.lookahead += r,
                e.lookahead + e.insert >= MIN_MATCH)
                    for (s = e.strstart - e.insert,
                    e.ins_h = e.window[s],
                    e.ins_h = (e.ins_h << e.hash_shift ^ e.window[s + 1]) & e.hash_mask; e.insert && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[s + MIN_MATCH - 1]) & e.hash_mask,
                    e.prev[s & e.w_mask] = e.head[e.ins_h],
                    e.head[e.ins_h] = s,
                    s++,
                    e.insert--,
                    !(e.lookahead + e.insert < MIN_MATCH)); )
                        ;
            } while (e.lookahead < MIN_LOOKAHEAD && 0 !== e.strm.avail_in)
        }
        function deflate_stored(e, t) {
            var r = 65535;
            for (r > e.pending_buf_size - 5 && (r = e.pending_buf_size - 5); ; ) {
                if (e.lookahead <= 1) {
                    if (fill_window(e),
                    0 === e.lookahead && t === Z_NO_FLUSH$1)
                        return BS_NEED_MORE;
                    if (0 === e.lookahead)
                        break
                }
                e.strstart += e.lookahead,
                e.lookahead = 0;
                var n = e.block_start + r;
                if ((0 === e.strstart || e.strstart >= n) && (e.lookahead = e.strstart - n,
                e.strstart = n,
                flush_block_only(e, !1),
                0 === e.strm.avail_out))
                    return BS_NEED_MORE;
                if (e.strstart - e.block_start >= e.w_size - MIN_LOOKAHEAD && (flush_block_only(e, !1),
                0 === e.strm.avail_out))
                    return BS_NEED_MORE
            }
            return e.insert = 0,
            t === Z_FINISH$2 ? (flush_block_only(e, !0),
            0 === e.strm.avail_out ? BS_FINISH_STARTED : BS_FINISH_DONE) : (e.strstart > e.block_start && (flush_block_only(e, !1),
            e.strm.avail_out),
            BS_NEED_MORE)
        }
        function deflate_fast(e, t) {
            for (var r, n; ; ) {
                if (e.lookahead < MIN_LOOKAHEAD) {
                    if (fill_window(e),
                    e.lookahead < MIN_LOOKAHEAD && t === Z_NO_FLUSH$1)
                        return BS_NEED_MORE;
                    if (0 === e.lookahead)
                        break
                }
                if (r = 0,
                e.lookahead >= MIN_MATCH && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + MIN_MATCH - 1]) & e.hash_mask,
                r = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h],
                e.head[e.ins_h] = e.strstart),
                0 !== r && e.strstart - r <= e.w_size - MIN_LOOKAHEAD && (e.match_length = longest_match(e, r)),
                e.match_length >= MIN_MATCH)
                    if (n = _tr_tally(e, e.strstart - e.match_start, e.match_length - MIN_MATCH),
                    e.lookahead -= e.match_length,
                    e.match_length <= e.max_lazy_match && e.lookahead >= MIN_MATCH) {
                        e.match_length--;
                        do {
                            e.strstart++,
                            e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + MIN_MATCH - 1]) & e.hash_mask,
                            r = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h],
                            e.head[e.ins_h] = e.strstart
                        } while (0 !== --e.match_length);
                        e.strstart++
                    } else
                        e.strstart += e.match_length,
                        e.match_length = 0,
                        e.ins_h = e.window[e.strstart],
                        e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + 1]) & e.hash_mask;
                else
                    n = _tr_tally(e, 0, e.window[e.strstart]),
                    e.lookahead--,
                    e.strstart++;
                if (n && (flush_block_only(e, !1),
                0 === e.strm.avail_out))
                    return BS_NEED_MORE
            }
            return e.insert = e.strstart < MIN_MATCH - 1 ? e.strstart : MIN_MATCH - 1,
            t === Z_FINISH$2 ? (flush_block_only(e, !0),
            0 === e.strm.avail_out ? BS_FINISH_STARTED : BS_FINISH_DONE) : e.last_lit && (flush_block_only(e, !1),
            0 === e.strm.avail_out) ? BS_NEED_MORE : BS_BLOCK_DONE
        }
        function deflate_slow(e, t) {
            for (var r, n, i; ; ) {
                if (e.lookahead < MIN_LOOKAHEAD) {
                    if (fill_window(e),
                    e.lookahead < MIN_LOOKAHEAD && t === Z_NO_FLUSH$1)
                        return BS_NEED_MORE;
                    if (0 === e.lookahead)
                        break
                }
                if (r = 0,
                e.lookahead >= MIN_MATCH && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + MIN_MATCH - 1]) & e.hash_mask,
                r = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h],
                e.head[e.ins_h] = e.strstart),
                e.prev_length = e.match_length,
                e.prev_match = e.match_start,
                e.match_length = MIN_MATCH - 1,
                0 !== r && e.prev_length < e.max_lazy_match && e.strstart - r <= e.w_size - MIN_LOOKAHEAD && (e.match_length = longest_match(e, r),
                e.match_length <= 5 && (e.strategy === Z_FILTERED$1 || e.match_length === MIN_MATCH && e.strstart - e.match_start > 4096) && (e.match_length = MIN_MATCH - 1)),
                e.prev_length >= MIN_MATCH && e.match_length <= e.prev_length) {
                    i = e.strstart + e.lookahead - MIN_MATCH,
                    n = _tr_tally(e, e.strstart - 1 - e.prev_match, e.prev_length - MIN_MATCH),
                    e.lookahead -= e.prev_length - 1,
                    e.prev_length -= 2;
                    do {
                        ++e.strstart <= i && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + MIN_MATCH - 1]) & e.hash_mask,
                        r = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h],
                        e.head[e.ins_h] = e.strstart)
                    } while (0 !== --e.prev_length);
                    if (e.match_available = 0,
                    e.match_length = MIN_MATCH - 1,
                    e.strstart++,
                    n && (flush_block_only(e, !1),
                    0 === e.strm.avail_out))
                        return BS_NEED_MORE
                } else if (e.match_available) {
                    if ((n = _tr_tally(e, 0, e.window[e.strstart - 1])) && flush_block_only(e, !1),
                    e.strstart++,
                    e.lookahead--,
                    0 === e.strm.avail_out)
                        return BS_NEED_MORE
                } else
                    e.match_available = 1,
                    e.strstart++,
                    e.lookahead--
            }
            return e.match_available && (n = _tr_tally(e, 0, e.window[e.strstart - 1]),
            e.match_available = 0),
            e.insert = e.strstart < MIN_MATCH - 1 ? e.strstart : MIN_MATCH - 1,
            t === Z_FINISH$2 ? (flush_block_only(e, !0),
            0 === e.strm.avail_out ? BS_FINISH_STARTED : BS_FINISH_DONE) : e.last_lit && (flush_block_only(e, !1),
            0 === e.strm.avail_out) ? BS_NEED_MORE : BS_BLOCK_DONE
        }
        function deflate_rle(e, t) {
            for (var r, n, i, s, a = e.window; ; ) {
                if (e.lookahead <= MAX_MATCH) {
                    if (fill_window(e),
                    e.lookahead <= MAX_MATCH && t === Z_NO_FLUSH$1)
                        return BS_NEED_MORE;
                    if (0 === e.lookahead)
                        break
                }
                if (e.match_length = 0,
                e.lookahead >= MIN_MATCH && e.strstart > 0 && (n = a[i = e.strstart - 1]) === a[++i] && n === a[++i] && n === a[++i]) {
                    s = e.strstart + MAX_MATCH;
                    do {} while (n === a[++i] && n === a[++i] && n === a[++i] && n === a[++i] && n === a[++i] && n === a[++i] && n === a[++i] && n === a[++i] && i < s);
                    e.match_length = MAX_MATCH - (s - i),
                    e.match_length > e.lookahead && (e.match_length = e.lookahead)
                }
                if (e.match_length >= MIN_MATCH ? (r = _tr_tally(e, 1, e.match_length - MIN_MATCH),
                e.lookahead -= e.match_length,
                e.strstart += e.match_length,
                e.match_length = 0) : (r = _tr_tally(e, 0, e.window[e.strstart]),
                e.lookahead--,
                e.strstart++),
                r && (flush_block_only(e, !1),
                0 === e.strm.avail_out))
                    return BS_NEED_MORE
            }
            return e.insert = 0,
            t === Z_FINISH$2 ? (flush_block_only(e, !0),
            0 === e.strm.avail_out ? BS_FINISH_STARTED : BS_FINISH_DONE) : e.last_lit && (flush_block_only(e, !1),
            0 === e.strm.avail_out) ? BS_NEED_MORE : BS_BLOCK_DONE
        }
        function deflate_huff(e, t) {
            for (var r; ; ) {
                if (0 === e.lookahead && (fill_window(e),
                0 === e.lookahead)) {
                    if (t === Z_NO_FLUSH$1)
                        return BS_NEED_MORE;
                    break
                }
                if (e.match_length = 0,
                r = _tr_tally(e, 0, e.window[e.strstart]),
                e.lookahead--,
                e.strstart++,
                r && (flush_block_only(e, !1),
                0 === e.strm.avail_out))
                    return BS_NEED_MORE
            }
            return e.insert = 0,
            t === Z_FINISH$2 ? (flush_block_only(e, !0),
            0 === e.strm.avail_out ? BS_FINISH_STARTED : BS_FINISH_DONE) : e.last_lit && (flush_block_only(e, !1),
            0 === e.strm.avail_out) ? BS_NEED_MORE : BS_BLOCK_DONE
        }
        function Config(e, t, r, n, i) {
            this.good_length = e,
            this.max_lazy = t,
            this.nice_length = r,
            this.max_chain = n,
            this.func = i
        }
        function lm_init(e) {
            e.window_size = 2 * e.w_size,
            zero(e.head),
            e.max_lazy_match = configuration_table[e.level].max_lazy,
            e.good_match = configuration_table[e.level].good_length,
            e.nice_match = configuration_table[e.level].nice_length,
            e.max_chain_length = configuration_table[e.level].max_chain,
            e.strstart = 0,
            e.block_start = 0,
            e.lookahead = 0,
            e.insert = 0,
            e.match_length = e.prev_length = MIN_MATCH - 1,
            e.match_available = 0,
            e.ins_h = 0
        }
        function DeflateState() {
            this.strm = null,
            this.status = 0,
            this.pending_buf = null,
            this.pending_buf_size = 0,
            this.pending_out = 0,
            this.pending = 0,
            this.wrap = 0,
            this.gzhead = null,
            this.gzindex = 0,
            this.method = Z_DEFLATED$2,
            this.last_flush = -1,
            this.w_size = 0,
            this.w_bits = 0,
            this.w_mask = 0,
            this.window = null,
            this.window_size = 0,
            this.prev = null,
            this.head = null,
            this.ins_h = 0,
            this.hash_size = 0,
            this.hash_bits = 0,
            this.hash_mask = 0,
            this.hash_shift = 0,
            this.block_start = 0,
            this.match_length = 0,
            this.prev_match = 0,
            this.match_available = 0,
            this.strstart = 0,
            this.match_start = 0,
            this.lookahead = 0,
            this.prev_length = 0,
            this.max_chain_length = 0,
            this.max_lazy_match = 0,
            this.level = 0,
            this.strategy = 0,
            this.good_match = 0,
            this.nice_match = 0,
            this.dyn_ltree = new Buf16(2 * HEAP_SIZE),
            this.dyn_dtree = new Buf16(2 * (2 * D_CODES + 1)),
            this.bl_tree = new Buf16(2 * (2 * BL_CODES + 1)),
            zero(this.dyn_ltree),
            zero(this.dyn_dtree),
            zero(this.bl_tree),
            this.l_desc = null,
            this.d_desc = null,
            this.bl_desc = null,
            this.bl_count = new Buf16(MAX_BITS + 1),
            this.heap = new Buf16(2 * L_CODES + 1),
            zero(this.heap),
            this.heap_len = 0,
            this.heap_max = 0,
            this.depth = new Buf16(2 * L_CODES + 1),
            zero(this.depth),
            this.l_buf = 0,
            this.lit_bufsize = 0,
            this.last_lit = 0,
            this.d_buf = 0,
            this.opt_len = 0,
            this.static_len = 0,
            this.matches = 0,
            this.insert = 0,
            this.bi_buf = 0,
            this.bi_valid = 0
        }
        function deflateResetKeep(e) {
            var t;
            return e && e.state ? (e.total_in = e.total_out = 0,
            e.data_type = Z_UNKNOWN$1,
            (t = e.state).pending = 0,
            t.pending_out = 0,
            t.wrap < 0 && (t.wrap = -t.wrap),
            t.status = t.wrap ? INIT_STATE : BUSY_STATE,
            e.adler = 2 === t.wrap ? 0 : 1,
            t.last_flush = Z_NO_FLUSH$1,
            _tr_init(t),
            Z_OK$2) : err(e, Z_STREAM_ERROR$2)
        }
        function deflateReset(e) {
            var t = deflateResetKeep(e);
            return t === Z_OK$2 && lm_init(e.state),
            t
        }
        function deflateInit2(e, t, r, n, i, s) {
            if (!e)
                return Z_STREAM_ERROR$2;
            var a = 1;
            if (t === Z_DEFAULT_COMPRESSION$1 && (t = 6),
            n < 0 ? (a = 0,
            n = -n) : n > 15 && (a = 2,
            n -= 16),
            i < 1 || i > MAX_MEM_LEVEL || r !== Z_DEFLATED$2 || n < 8 || n > 15 || t < 0 || t > 9 || s < 0 || s > Z_FIXED$1)
                return err(e, Z_STREAM_ERROR$2);
            8 === n && (n = 9);
            var o = new DeflateState;
            return e.state = o,
            o.strm = e,
            o.wrap = a,
            o.gzhead = null,
            o.w_bits = n,
            o.w_size = 1 << o.w_bits,
            o.w_mask = o.w_size - 1,
            o.hash_bits = i + 7,
            o.hash_size = 1 << o.hash_bits,
            o.hash_mask = o.hash_size - 1,
            o.hash_shift = ~~((o.hash_bits + MIN_MATCH - 1) / MIN_MATCH),
            o.window = new Buf8(2 * o.w_size),
            o.head = new Buf16(o.hash_size),
            o.prev = new Buf16(o.w_size),
            o.lit_bufsize = 1 << i + 6,
            o.pending_buf_size = 4 * o.lit_bufsize,
            o.pending_buf = new Buf8(o.pending_buf_size),
            o.d_buf = 1 * o.lit_bufsize,
            o.l_buf = 3 * o.lit_bufsize,
            o.level = t,
            o.strategy = s,
            o.method = r,
            deflateReset(e)
        }
        function deflate$1(e, t) {
            var r, n, i, s;
            if (!e || !e.state || t > Z_BLOCK$2 || t < 0)
                return e ? err(e, Z_STREAM_ERROR$2) : Z_STREAM_ERROR$2;
            if (n = e.state,
            !e.output || !e.input && 0 !== e.avail_in || n.status === FINISH_STATE && t !== Z_FINISH$2)
                return err(e, 0 === e.avail_out ? Z_BUF_ERROR$2 : Z_STREAM_ERROR$2);
            if (n.strm = e,
            r = n.last_flush,
            n.last_flush = t,
            n.status === INIT_STATE)
                if (2 === n.wrap)
                    e.adler = 0,
                    put_byte(n, 31),
                    put_byte(n, 139),
                    put_byte(n, 8),
                    n.gzhead ? (put_byte(n, (n.gzhead.text ? 1 : 0) + (n.gzhead.hcrc ? 2 : 0) + (n.gzhead.extra ? 4 : 0) + (n.gzhead.name ? 8 : 0) + (n.gzhead.comment ? 16 : 0)),
                    put_byte(n, 255 & n.gzhead.time),
                    put_byte(n, n.gzhead.time >> 8 & 255),
                    put_byte(n, n.gzhead.time >> 16 & 255),
                    put_byte(n, n.gzhead.time >> 24 & 255),
                    put_byte(n, 9 === n.level ? 2 : n.strategy >= Z_HUFFMAN_ONLY$1 || n.level < 2 ? 4 : 0),
                    put_byte(n, 255 & n.gzhead.os),
                    n.gzhead.extra && n.gzhead.extra.length && (put_byte(n, 255 & n.gzhead.extra.length),
                    put_byte(n, n.gzhead.extra.length >> 8 & 255)),
                    n.gzhead.hcrc && (e.adler = crc32(e.adler, n.pending_buf, n.pending, 0)),
                    n.gzindex = 0,
                    n.status = EXTRA_STATE) : (put_byte(n, 0),
                    put_byte(n, 0),
                    put_byte(n, 0),
                    put_byte(n, 0),
                    put_byte(n, 0),
                    put_byte(n, 9 === n.level ? 2 : n.strategy >= Z_HUFFMAN_ONLY$1 || n.level < 2 ? 4 : 0),
                    put_byte(n, OS_CODE),
                    n.status = BUSY_STATE);
                else {
                    var a = Z_DEFLATED$2 + (n.w_bits - 8 << 4) << 8;
                    a |= (n.strategy >= Z_HUFFMAN_ONLY$1 || n.level < 2 ? 0 : n.level < 6 ? 1 : 6 === n.level ? 2 : 3) << 6,
                    0 !== n.strstart && (a |= PRESET_DICT),
                    a += 31 - a % 31,
                    n.status = BUSY_STATE,
                    putShortMSB(n, a),
                    0 !== n.strstart && (putShortMSB(n, e.adler >>> 16),
                    putShortMSB(n, 65535 & e.adler)),
                    e.adler = 1
                }
            if (n.status === EXTRA_STATE)
                if (n.gzhead.extra) {
                    for (i = n.pending; n.gzindex < (65535 & n.gzhead.extra.length) && (n.pending !== n.pending_buf_size || (n.gzhead.hcrc && n.pending > i && (e.adler = crc32(e.adler, n.pending_buf, n.pending - i, i)),
                    flush_pending(e),
                    i = n.pending,
                    n.pending !== n.pending_buf_size)); )
                        put_byte(n, 255 & n.gzhead.extra[n.gzindex]),
                        n.gzindex++;
                    n.gzhead.hcrc && n.pending > i && (e.adler = crc32(e.adler, n.pending_buf, n.pending - i, i)),
                    n.gzindex === n.gzhead.extra.length && (n.gzindex = 0,
                    n.status = NAME_STATE)
                } else
                    n.status = NAME_STATE;
            if (n.status === NAME_STATE)
                if (n.gzhead.name) {
                    i = n.pending;
                    do {
                        if (n.pending === n.pending_buf_size && (n.gzhead.hcrc && n.pending > i && (e.adler = crc32(e.adler, n.pending_buf, n.pending - i, i)),
                        flush_pending(e),
                        i = n.pending,
                        n.pending === n.pending_buf_size)) {
                            s = 1;
                            break
                        }
                        s = n.gzindex < n.gzhead.name.length ? 255 & n.gzhead.name.charCodeAt(n.gzindex++) : 0,
                        put_byte(n, s)
                    } while (0 !== s);
                    n.gzhead.hcrc && n.pending > i && (e.adler = crc32(e.adler, n.pending_buf, n.pending - i, i)),
                    0 === s && (n.gzindex = 0,
                    n.status = COMMENT_STATE)
                } else
                    n.status = COMMENT_STATE;
            if (n.status === COMMENT_STATE)
                if (n.gzhead.comment) {
                    i = n.pending;
                    do {
                        if (n.pending === n.pending_buf_size && (n.gzhead.hcrc && n.pending > i && (e.adler = crc32(e.adler, n.pending_buf, n.pending - i, i)),
                        flush_pending(e),
                        i = n.pending,
                        n.pending === n.pending_buf_size)) {
                            s = 1;
                            break
                        }
                        s = n.gzindex < n.gzhead.comment.length ? 255 & n.gzhead.comment.charCodeAt(n.gzindex++) : 0,
                        put_byte(n, s)
                    } while (0 !== s);
                    n.gzhead.hcrc && n.pending > i && (e.adler = crc32(e.adler, n.pending_buf, n.pending - i, i)),
                    0 === s && (n.status = HCRC_STATE)
                } else
                    n.status = HCRC_STATE;
            if (n.status === HCRC_STATE && (n.gzhead.hcrc ? (n.pending + 2 > n.pending_buf_size && flush_pending(e),
            n.pending + 2 <= n.pending_buf_size && (put_byte(n, 255 & e.adler),
            put_byte(n, e.adler >> 8 & 255),
            e.adler = 0,
            n.status = BUSY_STATE)) : n.status = BUSY_STATE),
            0 !== n.pending) {
                if (flush_pending(e),
                0 === e.avail_out)
                    return n.last_flush = -1,
                    Z_OK$2
            } else if (0 === e.avail_in && rank(t) <= rank(r) && t !== Z_FINISH$2)
                return err(e, Z_BUF_ERROR$2);
            if (n.status === FINISH_STATE && 0 !== e.avail_in)
                return err(e, Z_BUF_ERROR$2);
            if (0 !== e.avail_in || 0 !== n.lookahead || t !== Z_NO_FLUSH$1 && n.status !== FINISH_STATE) {
                var o = n.strategy === Z_HUFFMAN_ONLY$1 ? deflate_huff(n, t) : n.strategy === Z_RLE$1 ? deflate_rle(n, t) : configuration_table[n.level].func(n, t);
                if (o !== BS_FINISH_STARTED && o !== BS_FINISH_DONE || (n.status = FINISH_STATE),
                o === BS_NEED_MORE || o === BS_FINISH_STARTED)
                    return 0 === e.avail_out && (n.last_flush = -1),
                    Z_OK$2;
                if (o === BS_BLOCK_DONE && (t === Z_PARTIAL_FLUSH$1 ? _tr_align(n) : t !== Z_BLOCK$2 && (_tr_stored_block(n, 0, 0, !1),
                t === Z_FULL_FLUSH$1 && (zero(n.head),
                0 === n.lookahead && (n.strstart = 0,
                n.block_start = 0,
                n.insert = 0))),
                flush_pending(e),
                0 === e.avail_out))
                    return n.last_flush = -1,
                    Z_OK$2
            }
            return t !== Z_FINISH$2 ? Z_OK$2 : n.wrap <= 0 ? Z_STREAM_END$2 : (2 === n.wrap ? (put_byte(n, 255 & e.adler),
            put_byte(n, e.adler >> 8 & 255),
            put_byte(n, e.adler >> 16 & 255),
            put_byte(n, e.adler >> 24 & 255),
            put_byte(n, 255 & e.total_in),
            put_byte(n, e.total_in >> 8 & 255),
            put_byte(n, e.total_in >> 16 & 255),
            put_byte(n, e.total_in >> 24 & 255)) : (putShortMSB(n, e.adler >>> 16),
            putShortMSB(n, 65535 & e.adler)),
            flush_pending(e),
            n.wrap > 0 && (n.wrap = -n.wrap),
            0 !== n.pending ? Z_OK$2 : Z_STREAM_END$2)
        }
        function deflateEnd(e) {
            var t;
            return e && e.state ? (t = e.state.status) !== INIT_STATE && t !== EXTRA_STATE && t !== NAME_STATE && t !== COMMENT_STATE && t !== HCRC_STATE && t !== BUSY_STATE && t !== FINISH_STATE ? err(e, Z_STREAM_ERROR$2) : (e.state = null,
            t === BUSY_STATE ? err(e, Z_DATA_ERROR$2) : Z_OK$2) : Z_STREAM_ERROR$2
        }
        configuration_table = [new Config(0,0,0,0,deflate_stored), new Config(4,4,8,4,deflate_fast), new Config(4,5,16,8,deflate_fast), new Config(4,6,32,32,deflate_fast), new Config(4,4,16,16,deflate_slow), new Config(8,16,32,32,deflate_slow), new Config(8,16,128,128,deflate_slow), new Config(8,32,128,256,deflate_slow), new Config(32,128,258,1024,deflate_slow), new Config(32,258,258,4096,deflate_slow)];
        var BAD$1 = 30
          , TYPE$1 = 12;
        function inflate_fast(e, t) {
            var r, n, i, s, a, o, l, c, h, d, u, f, p, g, _, m, b, v, y, A, E, S, w, T, x;
            r = e.state,
            n = e.next_in,
            T = e.input,
            i = n + (e.avail_in - 5),
            s = e.next_out,
            x = e.output,
            a = s - (t - e.avail_out),
            o = s + (e.avail_out - 257),
            l = r.dmax,
            c = r.wsize,
            h = r.whave,
            d = r.wnext,
            u = r.window,
            f = r.hold,
            p = r.bits,
            g = r.lencode,
            _ = r.distcode,
            m = (1 << r.lenbits) - 1,
            b = (1 << r.distbits) - 1;
            e: do {
                p < 15 && (f += T[n++] << p,
                p += 8,
                f += T[n++] << p,
                p += 8),
                v = g[f & m];
                t: for (; ; ) {
                    if (f >>>= y = v >>> 24,
                    p -= y,
                    0 === (y = v >>> 16 & 255))
                        x[s++] = 65535 & v;
                    else {
                        if (!(16 & y)) {
                            if (0 === (64 & y)) {
                                v = g[(65535 & v) + (f & (1 << y) - 1)];
                                continue t
                            }
                            if (32 & y) {
                                r.mode = TYPE$1;
                                break e
                            }
                            e.msg = "invalid literal/length code",
                            r.mode = BAD$1;
                            break e
                        }
                        A = 65535 & v,
                        (y &= 15) && (p < y && (f += T[n++] << p,
                        p += 8),
                        A += f & (1 << y) - 1,
                        f >>>= y,
                        p -= y),
                        p < 15 && (f += T[n++] << p,
                        p += 8,
                        f += T[n++] << p,
                        p += 8),
                        v = _[f & b];
                        r: for (; ; ) {
                            if (f >>>= y = v >>> 24,
                            p -= y,
                            !(16 & (y = v >>> 16 & 255))) {
                                if (0 === (64 & y)) {
                                    v = _[(65535 & v) + (f & (1 << y) - 1)];
                                    continue r
                                }
                                e.msg = "invalid distance code",
                                r.mode = BAD$1;
                                break e
                            }
                            if (E = 65535 & v,
                            p < (y &= 15) && (f += T[n++] << p,
                            (p += 8) < y && (f += T[n++] << p,
                            p += 8)),
                            (E += f & (1 << y) - 1) > l) {
                                e.msg = "invalid distance too far back",
                                r.mode = BAD$1;
                                break e
                            }
                            if (f >>>= y,
                            p -= y,
                            E > (y = s - a)) {
                                if ((y = E - y) > h && r.sane) {
                                    e.msg = "invalid distance too far back",
                                    r.mode = BAD$1;
                                    break e
                                }
                                if (S = 0,
                                w = u,
                                0 === d) {
                                    if (S += c - y,
                                    y < A) {
                                        A -= y;
                                        do {
                                            x[s++] = u[S++]
                                        } while (--y);
                                        S = s - E,
                                        w = x
                                    }
                                } else if (d < y) {
                                    if (S += c + d - y,
                                    (y -= d) < A) {
                                        A -= y;
                                        do {
                                            x[s++] = u[S++]
                                        } while (--y);
                                        if (S = 0,
                                        d < A) {
                                            A -= y = d;
                                            do {
                                                x[s++] = u[S++]
                                            } while (--y);
                                            S = s - E,
                                            w = x
                                        }
                                    }
                                } else if (S += d - y,
                                y < A) {
                                    A -= y;
                                    do {
                                        x[s++] = u[S++]
                                    } while (--y);
                                    S = s - E,
                                    w = x
                                }
                                for (; A > 2; )
                                    x[s++] = w[S++],
                                    x[s++] = w[S++],
                                    x[s++] = w[S++],
                                    A -= 3;
                                A && (x[s++] = w[S++],
                                A > 1 && (x[s++] = w[S++]))
                            } else {
                                S = s - E;
                                do {
                                    x[s++] = x[S++],
                                    x[s++] = x[S++],
                                    x[s++] = x[S++],
                                    A -= 3
                                } while (A > 2);
                                A && (x[s++] = x[S++],
                                A > 1 && (x[s++] = x[S++]))
                            }
                            break
                        }
                    }
                    break
                }
            } while (n < i && s < o);
            n -= A = p >> 3,
            f &= (1 << (p -= A << 3)) - 1,
            e.next_in = n,
            e.next_out = s,
            e.avail_in = n < i ? i - n + 5 : 5 - (n - i),
            e.avail_out = s < o ? o - s + 257 : 257 - (s - o),
            r.hold = f,
            r.bits = p
        }
        var MAXBITS = 15
          , ENOUGH_LENS$1 = 852
          , ENOUGH_DISTS$1 = 592
          , CODES$1 = 0
          , LENS$1 = 1
          , DISTS$1 = 2
          , lbase = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0]
          , lext = [16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78]
          , dbase = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0]
          , dext = [16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64];
        function inflate_table(e, t, r, n, i, s, a, o) {
            var l, c, h, d, u, f, p, g, _, m = o.bits, b = 0, v = 0, y = 0, A = 0, E = 0, S = 0, w = 0, T = 0, x = 0, C = 0, R = null, k = 0, M = new Buf16(MAXBITS + 1), P = new Buf16(MAXBITS + 1), I = null, D = 0;
            for (b = 0; b <= MAXBITS; b++)
                M[b] = 0;
            for (v = 0; v < n; v++)
                M[t[r + v]]++;
            for (E = m,
            A = MAXBITS; A >= 1 && 0 === M[A]; A--)
                ;
            if (E > A && (E = A),
            0 === A)
                return i[s++] = 20971520,
                i[s++] = 20971520,
                o.bits = 1,
                0;
            for (y = 1; y < A && 0 === M[y]; y++)
                ;
            for (E < y && (E = y),
            T = 1,
            b = 1; b <= MAXBITS; b++)
                if (T <<= 1,
                (T -= M[b]) < 0)
                    return -1;
            if (T > 0 && (e === CODES$1 || 1 !== A))
                return -1;
            for (P[1] = 0,
            b = 1; b < MAXBITS; b++)
                P[b + 1] = P[b] + M[b];
            for (v = 0; v < n; v++)
                0 !== t[r + v] && (a[P[t[r + v]]++] = v);
            if (e === CODES$1 ? (R = I = a,
            f = 19) : e === LENS$1 ? (R = lbase,
            k -= 257,
            I = lext,
            D -= 257,
            f = 256) : (R = dbase,
            I = dext,
            f = -1),
            C = 0,
            v = 0,
            b = y,
            u = s,
            S = E,
            w = 0,
            h = -1,
            d = (x = 1 << E) - 1,
            e === LENS$1 && x > ENOUGH_LENS$1 || e === DISTS$1 && x > ENOUGH_DISTS$1)
                return 1;
            for (; ; ) {
                p = b - w,
                a[v] < f ? (g = 0,
                _ = a[v]) : a[v] > f ? (g = I[D + a[v]],
                _ = R[k + a[v]]) : (g = 96,
                _ = 0),
                l = 1 << b - w,
                y = c = 1 << S;
                do {
                    i[u + (C >> w) + (c -= l)] = p << 24 | g << 16 | _ | 0
                } while (0 !== c);
                for (l = 1 << b - 1; C & l; )
                    l >>= 1;
                if (0 !== l ? (C &= l - 1,
                C += l) : C = 0,
                v++,
                0 === --M[b]) {
                    if (b === A)
                        break;
                    b = t[r + a[v]]
                }
                if (b > E && (C & d) !== h) {
                    for (0 === w && (w = E),
                    u += y,
                    T = 1 << (S = b - w); S + w < A && !((T -= M[S + w]) <= 0); )
                        S++,
                        T <<= 1;
                    if (x += 1 << S,
                    e === LENS$1 && x > ENOUGH_LENS$1 || e === DISTS$1 && x > ENOUGH_DISTS$1)
                        return 1;
                    i[h = C & d] = E << 24 | S << 16 | u - s | 0
                }
            }
            return 0 !== C && (i[u + C] = b - w << 24 | 64 << 16 | 0),
            o.bits = E,
            0
        }
        var CODES = 0
          , LENS = 1
          , DISTS = 2
          , Z_FINISH$1 = 4
          , Z_BLOCK$1 = 5
          , Z_TREES$1 = 6
          , Z_OK$1 = 0
          , Z_STREAM_END$1 = 1
          , Z_NEED_DICT$1 = 2
          , Z_STREAM_ERROR$1 = -2
          , Z_DATA_ERROR$1 = -3
          , Z_MEM_ERROR = -4
          , Z_BUF_ERROR$1 = -5
          , Z_DEFLATED$1 = 8
          , HEAD = 1
          , FLAGS = 2
          , TIME = 3
          , OS = 4
          , EXLEN = 5
          , EXTRA = 6
          , NAME = 7
          , COMMENT = 8
          , HCRC = 9
          , DICTID = 10
          , DICT = 11
          , TYPE = 12
          , TYPEDO = 13
          , STORED = 14
          , COPY_ = 15
          , COPY = 16
          , TABLE = 17
          , LENLENS = 18
          , CODELENS = 19
          , LEN_ = 20
          , LEN = 21
          , LENEXT = 22
          , DIST = 23
          , DISTEXT = 24
          , MATCH = 25
          , LIT = 26
          , CHECK = 27
          , LENGTH = 28
          , DONE = 29
          , BAD = 30
          , MEM = 31
          , SYNC = 32
          , ENOUGH_LENS = 852
          , ENOUGH_DISTS = 592;
        function zswap32(e) {
            return (e >>> 24 & 255) + (e >>> 8 & 65280) + ((65280 & e) << 8) + ((255 & e) << 24)
        }
        function InflateState() {
            this.mode = 0,
            this.last = !1,
            this.wrap = 0,
            this.havedict = !1,
            this.flags = 0,
            this.dmax = 0,
            this.check = 0,
            this.total = 0,
            this.head = null,
            this.wbits = 0,
            this.wsize = 0,
            this.whave = 0,
            this.wnext = 0,
            this.window = null,
            this.hold = 0,
            this.bits = 0,
            this.length = 0,
            this.offset = 0,
            this.extra = 0,
            this.lencode = null,
            this.distcode = null,
            this.lenbits = 0,
            this.distbits = 0,
            this.ncode = 0,
            this.nlen = 0,
            this.ndist = 0,
            this.have = 0,
            this.next = null,
            this.lens = new Buf16(320),
            this.work = new Buf16(288),
            this.lendyn = null,
            this.distdyn = null,
            this.sane = 0,
            this.back = 0,
            this.was = 0
        }
        function inflateResetKeep(e) {
            var t;
            return e && e.state ? (t = e.state,
            e.total_in = e.total_out = t.total = 0,
            e.msg = "",
            t.wrap && (e.adler = 1 & t.wrap),
            t.mode = HEAD,
            t.last = 0,
            t.havedict = 0,
            t.dmax = 32768,
            t.head = null,
            t.hold = 0,
            t.bits = 0,
            t.lencode = t.lendyn = new Buf32(ENOUGH_LENS),
            t.distcode = t.distdyn = new Buf32(ENOUGH_DISTS),
            t.sane = 1,
            t.back = -1,
            Z_OK$1) : Z_STREAM_ERROR$1
        }
        function inflateReset(e) {
            var t;
            return e && e.state ? ((t = e.state).wsize = 0,
            t.whave = 0,
            t.wnext = 0,
            inflateResetKeep(e)) : Z_STREAM_ERROR$1
        }
        function inflateReset2(e, t) {
            var r, n;
            return e && e.state ? (n = e.state,
            t < 0 ? (r = 0,
            t = -t) : (r = 1 + (t >> 4),
            t < 48 && (t &= 15)),
            t && (t < 8 || t > 15) ? Z_STREAM_ERROR$1 : (null !== n.window && n.wbits !== t && (n.window = null),
            n.wrap = r,
            n.wbits = t,
            inflateReset(e))) : Z_STREAM_ERROR$1
        }
        function inflateInit2(e, t) {
            var r, n;
            return e ? (n = new InflateState,
            e.state = n,
            n.window = null,
            (r = inflateReset2(e, t)) !== Z_OK$1 && (e.state = null),
            r) : Z_STREAM_ERROR$1
        }
        var virgin = !0, lenfix, distfix;
        function fixedtables(e) {
            if (virgin) {
                var t;
                for (lenfix = new Buf32(512),
                distfix = new Buf32(32),
                t = 0; t < 144; )
                    e.lens[t++] = 8;
                for (; t < 256; )
                    e.lens[t++] = 9;
                for (; t < 280; )
                    e.lens[t++] = 7;
                for (; t < 288; )
                    e.lens[t++] = 8;
                for (inflate_table(LENS, e.lens, 0, 288, lenfix, 0, e.work, {
                    bits: 9
                }),
                t = 0; t < 32; )
                    e.lens[t++] = 5;
                inflate_table(DISTS, e.lens, 0, 32, distfix, 0, e.work, {
                    bits: 5
                }),
                virgin = !1
            }
            e.lencode = lenfix,
            e.lenbits = 9,
            e.distcode = distfix,
            e.distbits = 5
        }
        function updatewindow(e, t, r, n) {
            var i, s = e.state;
            return null === s.window && (s.wsize = 1 << s.wbits,
            s.wnext = 0,
            s.whave = 0,
            s.window = new Buf8(s.wsize)),
            n >= s.wsize ? (arraySet(s.window, t, r - s.wsize, s.wsize, 0),
            s.wnext = 0,
            s.whave = s.wsize) : ((i = s.wsize - s.wnext) > n && (i = n),
            arraySet(s.window, t, r - n, i, s.wnext),
            (n -= i) ? (arraySet(s.window, t, r - n, n, 0),
            s.wnext = n,
            s.whave = s.wsize) : (s.wnext += i,
            s.wnext === s.wsize && (s.wnext = 0),
            s.whave < s.wsize && (s.whave += i))),
            0
        }
        function inflate$1(e, t) {
            var r, n, i, s, a, o, l, c, h, d, u, f, p, g, _, m, b, v, y, A, E, S, w, T, x = 0, C = new Buf8(4), R = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
            if (!e || !e.state || !e.output || !e.input && 0 !== e.avail_in)
                return Z_STREAM_ERROR$1;
            (r = e.state).mode === TYPE && (r.mode = TYPEDO),
            a = e.next_out,
            i = e.output,
            l = e.avail_out,
            s = e.next_in,
            n = e.input,
            o = e.avail_in,
            c = r.hold,
            h = r.bits,
            d = o,
            u = l,
            S = Z_OK$1;
            e: for (; ; )
                switch (r.mode) {
                case HEAD:
                    if (0 === r.wrap) {
                        r.mode = TYPEDO;
                        break
                    }
                    for (; h < 16; ) {
                        if (0 === o)
                            break e;
                        o--,
                        c += n[s++] << h,
                        h += 8
                    }
                    if (2 & r.wrap && 35615 === c) {
                        r.check = 0,
                        C[0] = 255 & c,
                        C[1] = c >>> 8 & 255,
                        r.check = crc32(r.check, C, 2, 0),
                        c = 0,
                        h = 0,
                        r.mode = FLAGS;
                        break
                    }
                    if (r.flags = 0,
                    r.head && (r.head.done = !1),
                    !(1 & r.wrap) || (((255 & c) << 8) + (c >> 8)) % 31) {
                        e.msg = "incorrect header check",
                        r.mode = BAD;
                        break
                    }
                    if ((15 & c) !== Z_DEFLATED$1) {
                        e.msg = "unknown compression method",
                        r.mode = BAD;
                        break
                    }
                    if (h -= 4,
                    E = 8 + (15 & (c >>>= 4)),
                    0 === r.wbits)
                        r.wbits = E;
                    else if (E > r.wbits) {
                        e.msg = "invalid window size",
                        r.mode = BAD;
                        break
                    }
                    r.dmax = 1 << E,
                    e.adler = r.check = 1,
                    r.mode = 512 & c ? DICTID : TYPE,
                    c = 0,
                    h = 0;
                    break;
                case FLAGS:
                    for (; h < 16; ) {
                        if (0 === o)
                            break e;
                        o--,
                        c += n[s++] << h,
                        h += 8
                    }
                    if (r.flags = c,
                    (255 & r.flags) !== Z_DEFLATED$1) {
                        e.msg = "unknown compression method",
                        r.mode = BAD;
                        break
                    }
                    if (57344 & r.flags) {
                        e.msg = "unknown header flags set",
                        r.mode = BAD;
                        break
                    }
                    r.head && (r.head.text = c >> 8 & 1),
                    512 & r.flags && (C[0] = 255 & c,
                    C[1] = c >>> 8 & 255,
                    r.check = crc32(r.check, C, 2, 0)),
                    c = 0,
                    h = 0,
                    r.mode = TIME;
                case TIME:
                    for (; h < 32; ) {
                        if (0 === o)
                            break e;
                        o--,
                        c += n[s++] << h,
                        h += 8
                    }
                    r.head && (r.head.time = c),
                    512 & r.flags && (C[0] = 255 & c,
                    C[1] = c >>> 8 & 255,
                    C[2] = c >>> 16 & 255,
                    C[3] = c >>> 24 & 255,
                    r.check = crc32(r.check, C, 4, 0)),
                    c = 0,
                    h = 0,
                    r.mode = OS;
                case OS:
                    for (; h < 16; ) {
                        if (0 === o)
                            break e;
                        o--,
                        c += n[s++] << h,
                        h += 8
                    }
                    r.head && (r.head.xflags = 255 & c,
                    r.head.os = c >> 8),
                    512 & r.flags && (C[0] = 255 & c,
                    C[1] = c >>> 8 & 255,
                    r.check = crc32(r.check, C, 2, 0)),
                    c = 0,
                    h = 0,
                    r.mode = EXLEN;
                case EXLEN:
                    if (1024 & r.flags) {
                        for (; h < 16; ) {
                            if (0 === o)
                                break e;
                            o--,
                            c += n[s++] << h,
                            h += 8
                        }
                        r.length = c,
                        r.head && (r.head.extra_len = c),
                        512 & r.flags && (C[0] = 255 & c,
                        C[1] = c >>> 8 & 255,
                        r.check = crc32(r.check, C, 2, 0)),
                        c = 0,
                        h = 0
                    } else
                        r.head && (r.head.extra = null);
                    r.mode = EXTRA;
                case EXTRA:
                    if (1024 & r.flags && ((f = r.length) > o && (f = o),
                    f && (r.head && (E = r.head.extra_len - r.length,
                    r.head.extra || (r.head.extra = new Array(r.head.extra_len)),
                    arraySet(r.head.extra, n, s, f, E)),
                    512 & r.flags && (r.check = crc32(r.check, n, f, s)),
                    o -= f,
                    s += f,
                    r.length -= f),
                    r.length))
                        break e;
                    r.length = 0,
                    r.mode = NAME;
                case NAME:
                    if (2048 & r.flags) {
                        if (0 === o)
                            break e;
                        f = 0;
                        do {
                            E = n[s + f++],
                            r.head && E && r.length < 65536 && (r.head.name += String.fromCharCode(E))
                        } while (E && f < o);
                        if (512 & r.flags && (r.check = crc32(r.check, n, f, s)),
                        o -= f,
                        s += f,
                        E)
                            break e
                    } else
                        r.head && (r.head.name = null);
                    r.length = 0,
                    r.mode = COMMENT;
                case COMMENT:
                    if (4096 & r.flags) {
                        if (0 === o)
                            break e;
                        f = 0;
                        do {
                            E = n[s + f++],
                            r.head && E && r.length < 65536 && (r.head.comment += String.fromCharCode(E))
                        } while (E && f < o);
                        if (512 & r.flags && (r.check = crc32(r.check, n, f, s)),
                        o -= f,
                        s += f,
                        E)
                            break e
                    } else
                        r.head && (r.head.comment = null);
                    r.mode = HCRC;
                case HCRC:
                    if (512 & r.flags) {
                        for (; h < 16; ) {
                            if (0 === o)
                                break e;
                            o--,
                            c += n[s++] << h,
                            h += 8
                        }
                        if (c !== (65535 & r.check)) {
                            e.msg = "header crc mismatch",
                            r.mode = BAD;
                            break
                        }
                        c = 0,
                        h = 0
                    }
                    r.head && (r.head.hcrc = r.flags >> 9 & 1,
                    r.head.done = !0),
                    e.adler = r.check = 0,
                    r.mode = TYPE;
                    break;
                case DICTID:
                    for (; h < 32; ) {
                        if (0 === o)
                            break e;
                        o--,
                        c += n[s++] << h,
                        h += 8
                    }
                    e.adler = r.check = zswap32(c),
                    c = 0,
                    h = 0,
                    r.mode = DICT;
                case DICT:
                    if (0 === r.havedict)
                        return e.next_out = a,
                        e.avail_out = l,
                        e.next_in = s,
                        e.avail_in = o,
                        r.hold = c,
                        r.bits = h,
                        Z_NEED_DICT$1;
                    e.adler = r.check = 1,
                    r.mode = TYPE;
                case TYPE:
                    if (t === Z_BLOCK$1 || t === Z_TREES$1)
                        break e;
                case TYPEDO:
                    if (r.last) {
                        c >>>= 7 & h,
                        h -= 7 & h,
                        r.mode = CHECK;
                        break
                    }
                    for (; h < 3; ) {
                        if (0 === o)
                            break e;
                        o--,
                        c += n[s++] << h,
                        h += 8
                    }
                    switch (r.last = 1 & c,
                    h -= 1,
                    3 & (c >>>= 1)) {
                    case 0:
                        r.mode = STORED;
                        break;
                    case 1:
                        if (fixedtables(r),
                        r.mode = LEN_,
                        t === Z_TREES$1) {
                            c >>>= 2,
                            h -= 2;
                            break e
                        }
                        break;
                    case 2:
                        r.mode = TABLE;
                        break;
                    case 3:
                        e.msg = "invalid block type",
                        r.mode = BAD
                    }
                    c >>>= 2,
                    h -= 2;
                    break;
                case STORED:
                    for (c >>>= 7 & h,
                    h -= 7 & h; h < 32; ) {
                        if (0 === o)
                            break e;
                        o--,
                        c += n[s++] << h,
                        h += 8
                    }
                    if ((65535 & c) !== (c >>> 16 ^ 65535)) {
                        e.msg = "invalid stored block lengths",
                        r.mode = BAD;
                        break
                    }
                    if (r.length = 65535 & c,
                    c = 0,
                    h = 0,
                    r.mode = COPY_,
                    t === Z_TREES$1)
                        break e;
                case COPY_:
                    r.mode = COPY;
                case COPY:
                    if (f = r.length) {
                        if (f > o && (f = o),
                        f > l && (f = l),
                        0 === f)
                            break e;
                        arraySet(i, n, s, f, a),
                        o -= f,
                        s += f,
                        l -= f,
                        a += f,
                        r.length -= f;
                        break
                    }
                    r.mode = TYPE;
                    break;
                case TABLE:
                    for (; h < 14; ) {
                        if (0 === o)
                            break e;
                        o--,
                        c += n[s++] << h,
                        h += 8
                    }
                    if (r.nlen = 257 + (31 & c),
                    c >>>= 5,
                    h -= 5,
                    r.ndist = 1 + (31 & c),
                    c >>>= 5,
                    h -= 5,
                    r.ncode = 4 + (15 & c),
                    c >>>= 4,
                    h -= 4,
                    r.nlen > 286 || r.ndist > 30) {
                        e.msg = "too many length or distance symbols",
                        r.mode = BAD;
                        break
                    }
                    r.have = 0,
                    r.mode = LENLENS;
                case LENLENS:
                    for (; r.have < r.ncode; ) {
                        for (; h < 3; ) {
                            if (0 === o)
                                break e;
                            o--,
                            c += n[s++] << h,
                            h += 8
                        }
                        r.lens[R[r.have++]] = 7 & c,
                        c >>>= 3,
                        h -= 3
                    }
                    for (; r.have < 19; )
                        r.lens[R[r.have++]] = 0;
                    if (r.lencode = r.lendyn,
                    r.lenbits = 7,
                    w = {
                        bits: r.lenbits
                    },
                    S = inflate_table(CODES, r.lens, 0, 19, r.lencode, 0, r.work, w),
                    r.lenbits = w.bits,
                    S) {
                        e.msg = "invalid code lengths set",
                        r.mode = BAD;
                        break
                    }
                    r.have = 0,
                    r.mode = CODELENS;
                case CODELENS:
                    for (; r.have < r.nlen + r.ndist; ) {
                        for (; m = (x = r.lencode[c & (1 << r.lenbits) - 1]) >>> 16 & 255,
                        b = 65535 & x,
                        !((_ = x >>> 24) <= h); ) {
                            if (0 === o)
                                break e;
                            o--,
                            c += n[s++] << h,
                            h += 8
                        }
                        if (b < 16)
                            c >>>= _,
                            h -= _,
                            r.lens[r.have++] = b;
                        else {
                            if (16 === b) {
                                for (T = _ + 2; h < T; ) {
                                    if (0 === o)
                                        break e;
                                    o--,
                                    c += n[s++] << h,
                                    h += 8
                                }
                                if (c >>>= _,
                                h -= _,
                                0 === r.have) {
                                    e.msg = "invalid bit length repeat",
                                    r.mode = BAD;
                                    break
                                }
                                E = r.lens[r.have - 1],
                                f = 3 + (3 & c),
                                c >>>= 2,
                                h -= 2
                            } else if (17 === b) {
                                for (T = _ + 3; h < T; ) {
                                    if (0 === o)
                                        break e;
                                    o--,
                                    c += n[s++] << h,
                                    h += 8
                                }
                                h -= _,
                                E = 0,
                                f = 3 + (7 & (c >>>= _)),
                                c >>>= 3,
                                h -= 3
                            } else {
                                for (T = _ + 7; h < T; ) {
                                    if (0 === o)
                                        break e;
                                    o--,
                                    c += n[s++] << h,
                                    h += 8
                                }
                                h -= _,
                                E = 0,
                                f = 11 + (127 & (c >>>= _)),
                                c >>>= 7,
                                h -= 7
                            }
                            if (r.have + f > r.nlen + r.ndist) {
                                e.msg = "invalid bit length repeat",
                                r.mode = BAD;
                                break
                            }
                            for (; f--; )
                                r.lens[r.have++] = E
                        }
                    }
                    if (r.mode === BAD)
                        break;
                    if (0 === r.lens[256]) {
                        e.msg = "invalid code -- missing end-of-block",
                        r.mode = BAD;
                        break
                    }
                    if (r.lenbits = 9,
                    w = {
                        bits: r.lenbits
                    },
                    S = inflate_table(LENS, r.lens, 0, r.nlen, r.lencode, 0, r.work, w),
                    r.lenbits = w.bits,
                    S) {
                        e.msg = "invalid literal/lengths set",
                        r.mode = BAD;
                        break
                    }
                    if (r.distbits = 6,
                    r.distcode = r.distdyn,
                    w = {
                        bits: r.distbits
                    },
                    S = inflate_table(DISTS, r.lens, r.nlen, r.ndist, r.distcode, 0, r.work, w),
                    r.distbits = w.bits,
                    S) {
                        e.msg = "invalid distances set",
                        r.mode = BAD;
                        break
                    }
                    if (r.mode = LEN_,
                    t === Z_TREES$1)
                        break e;
                case LEN_:
                    r.mode = LEN;
                case LEN:
                    if (o >= 6 && l >= 258) {
                        e.next_out = a,
                        e.avail_out = l,
                        e.next_in = s,
                        e.avail_in = o,
                        r.hold = c,
                        r.bits = h,
                        inflate_fast(e, u),
                        a = e.next_out,
                        i = e.output,
                        l = e.avail_out,
                        s = e.next_in,
                        n = e.input,
                        o = e.avail_in,
                        c = r.hold,
                        h = r.bits,
                        r.mode === TYPE && (r.back = -1);
                        break
                    }
                    for (r.back = 0; m = (x = r.lencode[c & (1 << r.lenbits) - 1]) >>> 16 & 255,
                    b = 65535 & x,
                    !((_ = x >>> 24) <= h); ) {
                        if (0 === o)
                            break e;
                        o--,
                        c += n[s++] << h,
                        h += 8
                    }
                    if (m && 0 === (240 & m)) {
                        for (v = _,
                        y = m,
                        A = b; m = (x = r.lencode[A + ((c & (1 << v + y) - 1) >> v)]) >>> 16 & 255,
                        b = 65535 & x,
                        !(v + (_ = x >>> 24) <= h); ) {
                            if (0 === o)
                                break e;
                            o--,
                            c += n[s++] << h,
                            h += 8
                        }
                        c >>>= v,
                        h -= v,
                        r.back += v
                    }
                    if (c >>>= _,
                    h -= _,
                    r.back += _,
                    r.length = b,
                    0 === m) {
                        r.mode = LIT;
                        break
                    }
                    if (32 & m) {
                        r.back = -1,
                        r.mode = TYPE;
                        break
                    }
                    if (64 & m) {
                        e.msg = "invalid literal/length code",
                        r.mode = BAD;
                        break
                    }
                    r.extra = 15 & m,
                    r.mode = LENEXT;
                case LENEXT:
                    if (r.extra) {
                        for (T = r.extra; h < T; ) {
                            if (0 === o)
                                break e;
                            o--,
                            c += n[s++] << h,
                            h += 8
                        }
                        r.length += c & (1 << r.extra) - 1,
                        c >>>= r.extra,
                        h -= r.extra,
                        r.back += r.extra
                    }
                    r.was = r.length,
                    r.mode = DIST;
                case DIST:
                    for (; m = (x = r.distcode[c & (1 << r.distbits) - 1]) >>> 16 & 255,
                    b = 65535 & x,
                    !((_ = x >>> 24) <= h); ) {
                        if (0 === o)
                            break e;
                        o--,
                        c += n[s++] << h,
                        h += 8
                    }
                    if (0 === (240 & m)) {
                        for (v = _,
                        y = m,
                        A = b; m = (x = r.distcode[A + ((c & (1 << v + y) - 1) >> v)]) >>> 16 & 255,
                        b = 65535 & x,
                        !(v + (_ = x >>> 24) <= h); ) {
                            if (0 === o)
                                break e;
                            o--,
                            c += n[s++] << h,
                            h += 8
                        }
                        c >>>= v,
                        h -= v,
                        r.back += v
                    }
                    if (c >>>= _,
                    h -= _,
                    r.back += _,
                    64 & m) {
                        e.msg = "invalid distance code",
                        r.mode = BAD;
                        break
                    }
                    r.offset = b,
                    r.extra = 15 & m,
                    r.mode = DISTEXT;
                case DISTEXT:
                    if (r.extra) {
                        for (T = r.extra; h < T; ) {
                            if (0 === o)
                                break e;
                            o--,
                            c += n[s++] << h,
                            h += 8
                        }
                        r.offset += c & (1 << r.extra) - 1,
                        c >>>= r.extra,
                        h -= r.extra,
                        r.back += r.extra
                    }
                    if (r.offset > r.dmax) {
                        e.msg = "invalid distance too far back",
                        r.mode = BAD;
                        break
                    }
                    r.mode = MATCH;
                case MATCH:
                    if (0 === l)
                        break e;
                    if (f = u - l,
                    r.offset > f) {
                        if ((f = r.offset - f) > r.whave && r.sane) {
                            e.msg = "invalid distance too far back",
                            r.mode = BAD;
                            break
                        }
                        f > r.wnext ? (f -= r.wnext,
                        p = r.wsize - f) : p = r.wnext - f,
                        f > r.length && (f = r.length),
                        g = r.window
                    } else
                        g = i,
                        p = a - r.offset,
                        f = r.length;
                    f > l && (f = l),
                    l -= f,
                    r.length -= f;
                    do {
                        i[a++] = g[p++]
                    } while (--f);
                    0 === r.length && (r.mode = LEN);
                    break;
                case LIT:
                    if (0 === l)
                        break e;
                    i[a++] = r.length,
                    l--,
                    r.mode = LEN;
                    break;
                case CHECK:
                    if (r.wrap) {
                        for (; h < 32; ) {
                            if (0 === o)
                                break e;
                            o--,
                            c |= n[s++] << h,
                            h += 8
                        }
                        if (u -= l,
                        e.total_out += u,
                        r.total += u,
                        u && (e.adler = r.check = r.flags ? crc32(r.check, i, u, a - u) : adler32(r.check, i, u, a - u)),
                        u = l,
                        (r.flags ? c : zswap32(c)) !== r.check) {
                            e.msg = "incorrect data check",
                            r.mode = BAD;
                            break
                        }
                        c = 0,
                        h = 0
                    }
                    r.mode = LENGTH;
                case LENGTH:
                    if (r.wrap && r.flags) {
                        for (; h < 32; ) {
                            if (0 === o)
                                break e;
                            o--,
                            c += n[s++] << h,
                            h += 8
                        }
                        if (c !== (4294967295 & r.total)) {
                            e.msg = "incorrect length check",
                            r.mode = BAD;
                            break
                        }
                        c = 0,
                        h = 0
                    }
                    r.mode = DONE;
                case DONE:
                    S = Z_STREAM_END$1;
                    break e;
                case BAD:
                    S = Z_DATA_ERROR$1;
                    break e;
                case MEM:
                    return Z_MEM_ERROR;
                default:
                    return Z_STREAM_ERROR$1
                }
            return e.next_out = a,
            e.avail_out = l,
            e.next_in = s,
            e.avail_in = o,
            r.hold = c,
            r.bits = h,
            (r.wsize || u !== e.avail_out && r.mode < BAD && (r.mode < CHECK || t !== Z_FINISH$1)) && updatewindow(e, e.output, e.next_out, u - e.avail_out),
            d -= e.avail_in,
            u -= e.avail_out,
            e.total_in += d,
            e.total_out += u,
            r.total += u,
            r.wrap && u && (e.adler = r.check = r.flags ? crc32(r.check, i, u, e.next_out - u) : adler32(r.check, i, u, e.next_out - u)),
            e.data_type = r.bits + (r.last ? 64 : 0) + (r.mode === TYPE ? 128 : 0) + (r.mode === LEN_ || r.mode === COPY_ ? 256 : 0),
            (0 === d && 0 === u || t === Z_FINISH$1) && S === Z_OK$1 && (S = Z_BUF_ERROR$1),
            S
        }
        function inflateEnd(e) {
            if (!e || !e.state)
                return Z_STREAM_ERROR$1;
            var t = e.state;
            return t.window && (t.window = null),
            e.state = null,
            Z_OK$1
        }
        var NONE = 0, DEFLATE = 1, INFLATE = 2, GZIP = 3, GUNZIP = 4, DEFLATERAW = 5, INFLATERAW = 6, UNZIP = 7, Z_NO_FLUSH = 0, Z_PARTIAL_FLUSH = 1, Z_SYNC_FLUSH = 2, Z_FULL_FLUSH = 3, Z_FINISH = 4, Z_BLOCK = 5, Z_TREES = 6, Z_OK = 0, Z_STREAM_END = 1, Z_NEED_DICT = 2, Z_ERRNO = -1, Z_STREAM_ERROR = -2, Z_DATA_ERROR = -3, Z_BUF_ERROR = -5, Z_NO_COMPRESSION = 0, Z_BEST_SPEED = 1, Z_BEST_COMPRESSION = 9, Z_DEFAULT_COMPRESSION = -1, Z_FILTERED = 1, Z_HUFFMAN_ONLY = 2, Z_RLE = 3, Z_FIXED = 4, Z_DEFAULT_STRATEGY = 0, Z_BINARY = 0, Z_TEXT = 1, Z_UNKNOWN = 2, Z_DEFLATED = 8, status;
        function Zlib$1(e) {
            if (e < DEFLATE || e > UNZIP)
                throw new TypeError("Bad argument");
            this.mode = e,
            this.init_done = !1,
            this.write_in_progress = !1,
            this.pending_close = !1,
            this.windowBits = 0,
            this.level = 0,
            this.memLevel = 0,
            this.strategy = 0,
            this.dictionary = null
        }
        function bufferSet(e, t) {
            for (var r = 0; r < e.length; r++)
                this[t + r] = e[r]
        }
        Zlib$1.prototype.init = function(e, t, r, n, i) {
            var s;
            switch (this.windowBits = e,
            this.level = t,
            this.memLevel = r,
            this.strategy = n,
            this.mode !== GZIP && this.mode !== GUNZIP || (this.windowBits += 16),
            this.mode === UNZIP && (this.windowBits += 32),
            this.mode !== DEFLATERAW && this.mode !== INFLATERAW || (this.windowBits = -this.windowBits),
            this.strm = new ZStream,
            this.mode) {
            case DEFLATE:
            case GZIP:
            case DEFLATERAW:
                s = deflateInit2(this.strm, this.level, Z_DEFLATED, this.windowBits, this.memLevel, this.strategy);
                break;
            case INFLATE:
            case GUNZIP:
            case INFLATERAW:
            case UNZIP:
                s = inflateInit2(this.strm, this.windowBits);
                break;
            default:
                throw new Error("Unknown mode " + this.mode)
            }
            s === Z_OK ? (this.write_in_progress = !1,
            this.init_done = !0) : this._error(s)
        }
        ,
        Zlib$1.prototype.params = function() {
            throw new Error("deflateParams Not supported")
        }
        ,
        Zlib$1.prototype._writeCheck = function() {
            if (!this.init_done)
                throw new Error("write before init");
            if (this.mode === NONE)
                throw new Error("already finalized");
            if (this.write_in_progress)
                throw new Error("write already in progress");
            if (this.pending_close)
                throw new Error("close is pending")
        }
        ,
        Zlib$1.prototype.write = function(e, t, r, n, i, s, a) {
            this._writeCheck(),
            this.write_in_progress = !0;
            var o = this;
            return browser$1.nextTick((function() {
                o.write_in_progress = !1;
                var l = o._write(e, t, r, n, i, s, a);
                o.callback(l[0], l[1]),
                o.pending_close && o.close()
            }
            )),
            this
        }
        ,
        Zlib$1.prototype.writeSync = function(e, t, r, n, i, s, a) {
            return this._writeCheck(),
            this._write(e, t, r, n, i, s, a)
        }
        ,
        Zlib$1.prototype._write = function(e, t, r, n, i, s, a) {
            if (this.write_in_progress = !0,
            e !== Z_NO_FLUSH && e !== Z_PARTIAL_FLUSH && e !== Z_SYNC_FLUSH && e !== Z_FULL_FLUSH && e !== Z_FINISH && e !== Z_BLOCK)
                throw new Error("Invalid flush value");
            null == t && (t = new Buffer(0),
            n = 0,
            r = 0),
            i._set ? i.set = i._set : i.set = bufferSet;
            var o, l = this.strm;
            switch (l.avail_in = n,
            l.input = t,
            l.next_in = r,
            l.avail_out = a,
            l.output = i,
            l.next_out = s,
            this.mode) {
            case DEFLATE:
            case GZIP:
            case DEFLATERAW:
                o = deflate$1(l, e);
                break;
            case UNZIP:
            case INFLATE:
            case GUNZIP:
            case INFLATERAW:
                o = inflate$1(l, e);
                break;
            default:
                throw new Error("Unknown mode " + this.mode)
            }
            return o !== Z_STREAM_END && o !== Z_OK && this._error(o),
            this.write_in_progress = !1,
            [l.avail_in, l.avail_out]
        }
        ,
        Zlib$1.prototype.close = function() {
            this.write_in_progress ? this.pending_close = !0 : (this.pending_close = !1,
            this.mode === DEFLATE || this.mode === GZIP || this.mode === DEFLATERAW ? deflateEnd(this.strm) : inflateEnd(this.strm),
            this.mode = NONE)
        }
        ,
        Zlib$1.prototype.reset = function() {
            switch (this.mode) {
            case DEFLATE:
            case DEFLATERAW:
                status = deflateReset(this.strm);
                break;
            case INFLATE:
            case INFLATERAW:
                status = inflateReset(this.strm)
            }
            status !== Z_OK && this._error(status)
        }
        ,
        Zlib$1.prototype._error = function(e) {
            this.onerror(msg[e] + ": " + this.strm.msg, e),
            this.write_in_progress = !1,
            this.pending_close && this.close()
        }
        ;
        var _binding = Object.freeze({
            __proto__: null,
            NONE: NONE,
            DEFLATE: DEFLATE,
            INFLATE: INFLATE,
            GZIP: GZIP,
            GUNZIP: GUNZIP,
            DEFLATERAW: DEFLATERAW,
            INFLATERAW: INFLATERAW,
            UNZIP: UNZIP,
            Z_NO_FLUSH: Z_NO_FLUSH,
            Z_PARTIAL_FLUSH: Z_PARTIAL_FLUSH,
            Z_SYNC_FLUSH: Z_SYNC_FLUSH,
            Z_FULL_FLUSH: Z_FULL_FLUSH,
            Z_FINISH: Z_FINISH,
            Z_BLOCK: Z_BLOCK,
            Z_TREES: Z_TREES,
            Z_OK: Z_OK,
            Z_STREAM_END: Z_STREAM_END,
            Z_NEED_DICT: Z_NEED_DICT,
            Z_ERRNO: Z_ERRNO,
            Z_STREAM_ERROR: Z_STREAM_ERROR,
            Z_DATA_ERROR: Z_DATA_ERROR,
            Z_BUF_ERROR: Z_BUF_ERROR,
            Z_NO_COMPRESSION: Z_NO_COMPRESSION,
            Z_BEST_SPEED: Z_BEST_SPEED,
            Z_BEST_COMPRESSION: Z_BEST_COMPRESSION,
            Z_DEFAULT_COMPRESSION: Z_DEFAULT_COMPRESSION,
            Z_FILTERED: Z_FILTERED,
            Z_HUFFMAN_ONLY: Z_HUFFMAN_ONLY,
            Z_RLE: Z_RLE,
            Z_FIXED: Z_FIXED,
            Z_DEFAULT_STRATEGY: Z_DEFAULT_STRATEGY,
            Z_BINARY: Z_BINARY,
            Z_TEXT: Z_TEXT,
            Z_UNKNOWN: Z_UNKNOWN,
            Z_DEFLATED: Z_DEFLATED,
            Zlib: Zlib$1
        });
        function assert(e, t) {
            if (!e)
                throw new Error(t)
        }
        var binding = {};
        Object.keys(_binding).forEach((function(e) {
            binding[e] = _binding[e]
        }
        )),
        binding.Z_MIN_WINDOWBITS = 8,
        binding.Z_MAX_WINDOWBITS = 15,
        binding.Z_DEFAULT_WINDOWBITS = 15,
        binding.Z_MIN_CHUNK = 64,
        binding.Z_MAX_CHUNK = 1 / 0,
        binding.Z_DEFAULT_CHUNK = 16384,
        binding.Z_MIN_MEMLEVEL = 1,
        binding.Z_MAX_MEMLEVEL = 9,
        binding.Z_DEFAULT_MEMLEVEL = 8,
        binding.Z_MIN_LEVEL = -1,
        binding.Z_MAX_LEVEL = 9,
        binding.Z_DEFAULT_LEVEL = binding.Z_DEFAULT_COMPRESSION;
        var codes = {
            Z_OK: binding.Z_OK,
            Z_STREAM_END: binding.Z_STREAM_END,
            Z_NEED_DICT: binding.Z_NEED_DICT,
            Z_ERRNO: binding.Z_ERRNO,
            Z_STREAM_ERROR: binding.Z_STREAM_ERROR,
            Z_DATA_ERROR: binding.Z_DATA_ERROR,
            Z_MEM_ERROR: binding.Z_MEM_ERROR,
            Z_BUF_ERROR: binding.Z_BUF_ERROR,
            Z_VERSION_ERROR: binding.Z_VERSION_ERROR
        };
        function createDeflate(e) {
            return new Deflate(e)
        }
        function createInflate(e) {
            return new Inflate(e)
        }
        function createDeflateRaw(e) {
            return new DeflateRaw(e)
        }
        function createInflateRaw(e) {
            return new InflateRaw(e)
        }
        function createGzip(e) {
            return new Gzip(e)
        }
        function createGunzip(e) {
            return new Gunzip(e)
        }
        function createUnzip(e) {
            return new Unzip(e)
        }
        function deflate(e, t, r) {
            return "function" === typeof t && (r = t,
            t = {}),
            zlibBuffer(new Deflate(t), e, r)
        }
        function deflateSync(e, t) {
            return zlibBufferSync(new Deflate(t), e)
        }
        function gzip(e, t, r) {
            return "function" === typeof t && (r = t,
            t = {}),
            zlibBuffer(new Gzip(t), e, r)
        }
        function gzipSync(e, t) {
            return zlibBufferSync(new Gzip(t), e)
        }
        function deflateRaw(e, t, r) {
            return "function" === typeof t && (r = t,
            t = {}),
            zlibBuffer(new DeflateRaw(t), e, r)
        }
        function deflateRawSync(e, t) {
            return zlibBufferSync(new DeflateRaw(t), e)
        }
        function unzip(e, t, r) {
            return "function" === typeof t && (r = t,
            t = {}),
            zlibBuffer(new Unzip(t), e, r)
        }
        function unzipSync(e, t) {
            return zlibBufferSync(new Unzip(t), e)
        }
        function inflate(e, t, r) {
            return "function" === typeof t && (r = t,
            t = {}),
            zlibBuffer(new Inflate(t), e, r)
        }
        function inflateSync(e, t) {
            return zlibBufferSync(new Inflate(t), e)
        }
        function gunzip(e, t, r) {
            return "function" === typeof t && (r = t,
            t = {}),
            zlibBuffer(new Gunzip(t), e, r)
        }
        function gunzipSync(e, t) {
            return zlibBufferSync(new Gunzip(t), e)
        }
        function inflateRaw(e, t, r) {
            return "function" === typeof t && (r = t,
            t = {}),
            zlibBuffer(new InflateRaw(t), e, r)
        }
        function inflateRawSync(e, t) {
            return zlibBufferSync(new InflateRaw(t), e)
        }
        function zlibBuffer(e, t, r) {
            var n = []
              , i = 0;
            function s() {
                for (var t; null !== (t = e.read()); )
                    n.push(t),
                    i += t.length;
                e.once("readable", s)
            }
            function a() {
                var t = Buffer.concat(n, i);
                n = [],
                r(null, t),
                e.close()
            }
            e.on("error", (function(t) {
                e.removeListener("end", a),
                e.removeListener("readable", s),
                r(t)
            }
            )),
            e.on("end", a),
            e.end(t),
            s()
        }
        function zlibBufferSync(e, t) {
            if ("string" === typeof t && (t = new Buffer(t)),
            !Buffer.isBuffer(t))
                throw new TypeError("Not a string or buffer");
            var r = binding.Z_FINISH;
            return e._processChunk(t, r)
        }
        function Deflate(e) {
            if (!(this instanceof Deflate))
                return new Deflate(e);
            Zlib.call(this, e, binding.DEFLATE)
        }
        function Inflate(e) {
            if (!(this instanceof Inflate))
                return new Inflate(e);
            Zlib.call(this, e, binding.INFLATE)
        }
        function Gzip(e) {
            if (!(this instanceof Gzip))
                return new Gzip(e);
            Zlib.call(this, e, binding.GZIP)
        }
        function Gunzip(e) {
            if (!(this instanceof Gunzip))
                return new Gunzip(e);
            Zlib.call(this, e, binding.GUNZIP)
        }
        function DeflateRaw(e) {
            if (!(this instanceof DeflateRaw))
                return new DeflateRaw(e);
            Zlib.call(this, e, binding.DEFLATERAW)
        }
        function InflateRaw(e) {
            if (!(this instanceof InflateRaw))
                return new InflateRaw(e);
            Zlib.call(this, e, binding.INFLATERAW)
        }
        function Unzip(e) {
            if (!(this instanceof Unzip))
                return new Unzip(e);
            Zlib.call(this, e, binding.UNZIP)
        }
        function Zlib(e, t) {
            if (this._opts = e = e || {},
            this._chunkSize = e.chunkSize || binding.Z_DEFAULT_CHUNK,
            Transform.call(this, e),
            e.flush && e.flush !== binding.Z_NO_FLUSH && e.flush !== binding.Z_PARTIAL_FLUSH && e.flush !== binding.Z_SYNC_FLUSH && e.flush !== binding.Z_FULL_FLUSH && e.flush !== binding.Z_FINISH && e.flush !== binding.Z_BLOCK)
                throw new Error("Invalid flush flag: " + e.flush);
            if (this._flushFlag = e.flush || binding.Z_NO_FLUSH,
            e.chunkSize && (e.chunkSize < binding.Z_MIN_CHUNK || e.chunkSize > binding.Z_MAX_CHUNK))
                throw new Error("Invalid chunk size: " + e.chunkSize);
            if (e.windowBits && (e.windowBits < binding.Z_MIN_WINDOWBITS || e.windowBits > binding.Z_MAX_WINDOWBITS))
                throw new Error("Invalid windowBits: " + e.windowBits);
            if (e.level && (e.level < binding.Z_MIN_LEVEL || e.level > binding.Z_MAX_LEVEL))
                throw new Error("Invalid compression level: " + e.level);
            if (e.memLevel && (e.memLevel < binding.Z_MIN_MEMLEVEL || e.memLevel > binding.Z_MAX_MEMLEVEL))
                throw new Error("Invalid memLevel: " + e.memLevel);
            if (e.strategy && e.strategy != binding.Z_FILTERED && e.strategy != binding.Z_HUFFMAN_ONLY && e.strategy != binding.Z_RLE && e.strategy != binding.Z_FIXED && e.strategy != binding.Z_DEFAULT_STRATEGY)
                throw new Error("Invalid strategy: " + e.strategy);
            if (e.dictionary && !Buffer.isBuffer(e.dictionary))
                throw new Error("Invalid dictionary: it should be a Buffer instance");
            this._binding = new binding.Zlib(t);
            var r = this;
            this._hadError = !1,
            this._binding.onerror = function(e, t) {
                r._binding = null,
                r._hadError = !0;
                var n = new Error(e);
                n.errno = t,
                n.code = binding.codes[t],
                r.emit("error", n)
            }
            ;
            var n = binding.Z_DEFAULT_COMPRESSION;
            "number" === typeof e.level && (n = e.level);
            var i = binding.Z_DEFAULT_STRATEGY;
            "number" === typeof e.strategy && (i = e.strategy),
            this._binding.init(e.windowBits || binding.Z_DEFAULT_WINDOWBITS, n, e.memLevel || binding.Z_DEFAULT_MEMLEVEL, i, e.dictionary),
            this._buffer = new Buffer(this._chunkSize),
            this._offset = 0,
            this._closed = !1,
            this._level = n,
            this._strategy = i,
            this.once("end", this.close)
        }
        Object.keys(codes).forEach((function(e) {
            codes[codes[e]] = e
        }
        )),
        inherits$1(Zlib, Transform),
        Zlib.prototype.params = function(e, t, r) {
            if (e < binding.Z_MIN_LEVEL || e > binding.Z_MAX_LEVEL)
                throw new RangeError("Invalid compression level: " + e);
            if (t != binding.Z_FILTERED && t != binding.Z_HUFFMAN_ONLY && t != binding.Z_RLE && t != binding.Z_FIXED && t != binding.Z_DEFAULT_STRATEGY)
                throw new TypeError("Invalid strategy: " + t);
            if (this._level !== e || this._strategy !== t) {
                var n = this;
                this.flush(binding.Z_SYNC_FLUSH, (function() {
                    n._binding.params(e, t),
                    n._hadError || (n._level = e,
                    n._strategy = t,
                    r && r())
                }
                ))
            } else
                browser$1.nextTick(r)
        }
        ,
        Zlib.prototype.reset = function() {
            return this._binding.reset()
        }
        ,
        Zlib.prototype._flush = function(e) {
            this._transform(new Buffer(0), "", e)
        }
        ,
        Zlib.prototype.flush = function(e, t) {
            var r = this._writableState;
            if (("function" === typeof e || void 0 === e && !t) && (t = e,
            e = binding.Z_FULL_FLUSH),
            r.ended)
                t && browser$1.nextTick(t);
            else if (r.ending)
                t && this.once("end", t);
            else if (r.needDrain) {
                var n = this;
                this.once("drain", (function() {
                    n.flush(t)
                }
                ))
            } else
                this._flushFlag = e,
                this.write(new Buffer(0), "", t)
        }
        ,
        Zlib.prototype.close = function(e) {
            if (e && browser$1.nextTick(e),
            !this._closed) {
                this._closed = !0,
                this._binding.close();
                var t = this;
                browser$1.nextTick((function() {
                    t.emit("close")
                }
                ))
            }
        }
        ,
        Zlib.prototype._transform = function(e, t, r) {
            var n, i = this._writableState, s = (i.ending || i.ended) && (!e || i.length === e.length);
            if (null === !e && !Buffer.isBuffer(e))
                return r(new Error("invalid input"));
            s ? n = binding.Z_FINISH : (n = this._flushFlag,
            e.length >= i.length && (this._flushFlag = this._opts.flush || binding.Z_NO_FLUSH)),
            this._processChunk(e, n, r)
        }
        ,
        Zlib.prototype._processChunk = function(e, t, r) {
            var n = e && e.length
              , i = this._chunkSize - this._offset
              , s = 0
              , a = this
              , o = "function" === typeof r;
            if (!o) {
                var l, c = [], h = 0;
                this.on("error", (function(e) {
                    l = e
                }
                ));
                do {
                    var d = this._binding.writeSync(t, e, s, n, this._buffer, this._offset, i)
                } while (!this._hadError && p(d[0], d[1]));
                if (this._hadError)
                    throw l;
                var u = Buffer.concat(c, h);
                return this.close(),
                u
            }
            var f = this._binding.write(t, e, s, n, this._buffer, this._offset, i);
            function p(l, d) {
                if (!a._hadError) {
                    var u = i - d;
                    if (assert(u >= 0, "have should not go down"),
                    u > 0) {
                        var f = a._buffer.slice(a._offset, a._offset + u);
                        a._offset += u,
                        o ? a.push(f) : (c.push(f),
                        h += f.length)
                    }
                    if ((0 === d || a._offset >= a._chunkSize) && (i = a._chunkSize,
                    a._offset = 0,
                    a._buffer = new Buffer(a._chunkSize)),
                    0 === d) {
                        if (s += n - l,
                        n = l,
                        !o)
                            return !0;
                        var g = a._binding.write(t, e, s, n, a._buffer, a._offset, a._chunkSize);
                        return g.callback = p,
                        void (g.buffer = e)
                    }
                    if (!o)
                        return !1;
                    r()
                }
            }
            f.buffer = e,
            f.callback = p
        }
        ,
        inherits$1(Deflate, Zlib),
        inherits$1(Inflate, Zlib),
        inherits$1(Gzip, Zlib),
        inherits$1(Gunzip, Zlib),
        inherits$1(DeflateRaw, Zlib),
        inherits$1(InflateRaw, Zlib),
        inherits$1(Unzip, Zlib);
        var _polyfillNode_zlib = {
            codes: codes,
            createDeflate: createDeflate,
            createInflate: createInflate,
            createDeflateRaw: createDeflateRaw,
            createInflateRaw: createInflateRaw,
            createGzip: createGzip,
            createGunzip: createGunzip,
            createUnzip: createUnzip,
            deflate: deflate,
            deflateSync: deflateSync,
            gzip: gzip,
            gzipSync: gzipSync,
            deflateRaw: deflateRaw,
            deflateRawSync: deflateRawSync,
            unzip: unzip,
            unzipSync: unzipSync,
            inflate: inflate,
            inflateSync: inflateSync,
            gunzip: gunzip,
            gunzipSync: gunzipSync,
            inflateRaw: inflateRaw,
            inflateRawSync: inflateRawSync,
            Deflate: Deflate,
            Inflate: Inflate,
            Gzip: Gzip,
            Gunzip: Gunzip,
            DeflateRaw: DeflateRaw,
            InflateRaw: InflateRaw,
            Unzip: Unzip,
            Zlib: Zlib
        }, _polyfillNode_zlib$1 = Object.freeze({
            __proto__: null,
            codes: codes,
            createDeflate: createDeflate,
            createInflate: createInflate,
            createDeflateRaw: createDeflateRaw,
            createInflateRaw: createInflateRaw,
            createGzip: createGzip,
            createGunzip: createGunzip,
            createUnzip: createUnzip,
            deflate: deflate,
            deflateSync: deflateSync,
            gzip: gzip,
            gzipSync: gzipSync,
            deflateRaw: deflateRaw,
            deflateRawSync: deflateRawSync,
            unzip: unzip,
            unzipSync: unzipSync,
            inflate: inflate,
            inflateSync: inflateSync,
            gunzip: gunzip,
            gunzipSync: gunzipSync,
            inflateRaw: inflateRaw,
            inflateRawSync: inflateRawSync,
            Deflate: Deflate,
            Inflate: Inflate,
            Gzip: Gzip,
            Gunzip: Gunzip,
            DeflateRaw: DeflateRaw,
            InflateRaw: InflateRaw,
            Unzip: Unzip,
            Zlib: Zlib,
            default: _polyfillNode_zlib
        }), require$$2 = getAugmentedNamespace(_polyfillNode_zlib$1), hasFetch = isFunction(global$1.fetch) && isFunction(global$1.ReadableStream), _blobConstructor, xhr;
        function blobConstructor() {
            if ("undefined" !== typeof _blobConstructor)
                return _blobConstructor;
            try {
                new global$1.Blob([new ArrayBuffer(1)]),
                _blobConstructor = !0
            } catch (e) {
                _blobConstructor = !1
            }
            return _blobConstructor
        }
        function checkTypeSupport(e) {
            xhr || (xhr = new global$1.XMLHttpRequest).open("GET", global$1.location.host ? "/" : "https://example.com");
            try {
                return xhr.responseType = e,
                xhr.responseType === e
            } catch (t) {
                return !1
            }
        }
        var haveArrayBuffer = "undefined" !== typeof global$1.ArrayBuffer
          , haveSlice = haveArrayBuffer && isFunction(global$1.ArrayBuffer.prototype.slice)
          , arraybuffer = haveArrayBuffer && checkTypeSupport("arraybuffer")
          , msstream = !hasFetch && haveSlice && checkTypeSupport("ms-stream")
          , mozchunkedarraybuffer = !hasFetch && haveArrayBuffer && checkTypeSupport("moz-chunked-arraybuffer")
          , overrideMimeType = isFunction(xhr.overrideMimeType)
          , vbArray = isFunction(global$1.VBArray);
        function isFunction(e) {
            return "function" === typeof e
        }
        xhr = null;
        var rStates = {
            UNSENT: 0,
            OPENED: 1,
            HEADERS_RECEIVED: 2,
            LOADING: 3,
            DONE: 4
        };
        function IncomingMessage(e, t, r) {
            var n, i = this;
            if (Readable.call(i),
            i._mode = r,
            i.headers = {},
            i.rawHeaders = [],
            i.trailers = {},
            i.rawTrailers = [],
            i.on("end", (function() {
                browser$1.nextTick((function() {
                    i.emit("close")
                }
                ))
            }
            )),
            "fetch" === r) {
                i._fetchResponse = t,
                i.url = t.url,
                i.statusCode = t.status,
                i.statusMessage = t.statusText;
                for (var s, a, o = t.headers[Symbol.iterator](); s = (a = o.next()).value,
                !a.done; )
                    i.headers[s[0].toLowerCase()] = s[1],
                    i.rawHeaders.push(s[0], s[1]);
                var l = t.body.getReader();
                (n = function() {
                    l.read().then((function(e) {
                        i._destroyed || (e.done ? i.push(null) : (i.push(new Buffer(e.value)),
                        n()))
                    }
                    ))
                }
                )()
            } else {
                if (i._xhr = e,
                i._pos = 0,
                i.url = e.responseURL,
                i.statusCode = e.status,
                i.statusMessage = e.statusText,
                e.getAllResponseHeaders().split(/\r?\n/).forEach((function(e) {
                    var t = e.match(/^([^:]+):\s*(.*)/);
                    if (t) {
                        var r = t[1].toLowerCase();
                        "set-cookie" === r ? (void 0 === i.headers[r] && (i.headers[r] = []),
                        i.headers[r].push(t[2])) : void 0 !== i.headers[r] ? i.headers[r] += ", " + t[2] : i.headers[r] = t[2],
                        i.rawHeaders.push(t[1], t[2])
                    }
                }
                )),
                i._charset = "x-user-defined",
                !overrideMimeType) {
                    var c = i.rawHeaders["mime-type"];
                    if (c) {
                        var h = c.match(/;\s*charset=([^;])(;|$)/);
                        h && (i._charset = h[1].toLowerCase())
                    }
                    i._charset || (i._charset = "utf-8")
                }
            }
        }
        function toArrayBuffer(e) {
            if (e instanceof Uint8Array) {
                if (0 === e.byteOffset && e.byteLength === e.buffer.byteLength)
                    return e.buffer;
                if ("function" === typeof e.buffer.slice)
                    return e.buffer.slice(e.byteOffset, e.byteOffset + e.byteLength)
            }
            if (isBuffer(e)) {
                for (var t = new Uint8Array(e.length), r = e.length, n = 0; n < r; n++)
                    t[n] = e[n];
                return t.buffer
            }
            throw new Error("Argument must be a Buffer")
        }
        function decideMode(e, t) {
            return hasFetch && t ? "fetch" : mozchunkedarraybuffer ? "moz-chunked-arraybuffer" : msstream ? "ms-stream" : arraybuffer && e ? "arraybuffer" : vbArray && e ? "text:vbarray" : "text"
        }
        function ClientRequest(e) {
            var t, r = this;
            Writable.call(r),
            r._opts = e,
            r._body = [],
            r._headers = {},
            e.auth && r.setHeader("Authorization", "Basic " + new Buffer(e.auth).toString("base64")),
            Object.keys(e.headers).forEach((function(t) {
                r.setHeader(t, e.headers[t])
            }
            ));
            var n = !0;
            if ("disable-fetch" === e.mode)
                n = !1,
                t = !0;
            else if ("prefer-streaming" === e.mode)
                t = !1;
            else if ("allow-wrong-content-type" === e.mode)
                t = !overrideMimeType;
            else {
                if (e.mode && "default" !== e.mode && "prefer-fast" !== e.mode)
                    throw new Error("Invalid value for opts.mode");
                t = !0
            }
            r._mode = decideMode(t, n),
            r.on("finish", (function() {
                r._onFinish()
            }
            ))
        }
        inherits$1(IncomingMessage, Readable),
        IncomingMessage.prototype._read = function() {}
        ,
        IncomingMessage.prototype._onXHRProgress = function() {
            var e = this
              , t = e._xhr
              , r = null;
            switch (e._mode) {
            case "text:vbarray":
                if (t.readyState !== rStates.DONE)
                    break;
                try {
                    r = new global$1.VBArray(t.responseBody).toArray()
                } catch (o) {}
                if (null !== r) {
                    e.push(new Buffer(r));
                    break
                }
            case "text":
                try {
                    r = t.responseText
                } catch (o) {
                    e._mode = "text:vbarray";
                    break
                }
                if (r.length > e._pos) {
                    var n = r.substr(e._pos);
                    if ("x-user-defined" === e._charset) {
                        for (var i = new Buffer(n.length), s = 0; s < n.length; s++)
                            i[s] = 255 & n.charCodeAt(s);
                        e.push(i)
                    } else
                        e.push(n, e._charset);
                    e._pos = r.length
                }
                break;
            case "arraybuffer":
                if (t.readyState !== rStates.DONE || !t.response)
                    break;
                r = t.response,
                e.push(new Buffer(new Uint8Array(r)));
                break;
            case "moz-chunked-arraybuffer":
                if (r = t.response,
                t.readyState !== rStates.LOADING || !r)
                    break;
                e.push(new Buffer(new Uint8Array(r)));
                break;
            case "ms-stream":
                if (r = t.response,
                t.readyState !== rStates.LOADING)
                    break;
                var a = new global$1.MSStreamReader;
                a.onprogress = function() {
                    a.result.byteLength > e._pos && (e.push(new Buffer(new Uint8Array(a.result.slice(e._pos)))),
                    e._pos = a.result.byteLength)
                }
                ,
                a.onload = function() {
                    e.push(null)
                }
                ,
                a.readAsArrayBuffer(r)
            }
            e._xhr.readyState === rStates.DONE && "ms-stream" !== e._mode && e.push(null)
        }
        ,
        inherits$1(ClientRequest, Writable);
        var unsafeHeaders = ["accept-charset", "accept-encoding", "access-control-request-headers", "access-control-request-method", "connection", "content-length", "cookie", "cookie2", "date", "dnt", "expect", "host", "keep-alive", "origin", "referer", "te", "trailer", "transfer-encoding", "upgrade", "user-agent", "via"];
        function statusValid(e) {
            try {
                var t = e.status;
                return null !== t && 0 !== t
            } catch (r) {
                return !1
            }
        }
        ClientRequest.prototype.setHeader = function(e, t) {
            var r = e.toLowerCase();
            -1 === unsafeHeaders.indexOf(r) && (this._headers[r] = {
                name: e,
                value: t
            })
        }
        ,
        ClientRequest.prototype.getHeader = function(e) {
            return this._headers[e.toLowerCase()].value
        }
        ,
        ClientRequest.prototype.removeHeader = function(e) {
            delete this._headers[e.toLowerCase()]
        }
        ,
        ClientRequest.prototype._onFinish = function() {
            var e = this;
            if (!e._destroyed) {
                var t, r = e._opts, n = e._headers;
                if ("POST" !== r.method && "PUT" !== r.method && "PATCH" !== r.method || (t = blobConstructor() ? new global$1.Blob(e._body.map((function(e) {
                    return toArrayBuffer(e)
                }
                )),{
                    type: (n["content-type"] || {}).value || ""
                }) : Buffer.concat(e._body).toString()),
                "fetch" === e._mode) {
                    var i = Object.keys(n).map((function(e) {
                        return [n[e].name, n[e].value]
                    }
                    ));
                    global$1.fetch(e._opts.url, {
                        method: e._opts.method,
                        headers: i,
                        body: t,
                        mode: "cors",
                        credentials: r.withCredentials ? "include" : "same-origin"
                    }).then((function(t) {
                        e._fetchResponse = t,
                        e._connect()
                    }
                    ), (function(t) {
                        e.emit("error", t)
                    }
                    ))
                } else {
                    var s = e._xhr = new global$1.XMLHttpRequest;
                    try {
                        s.open(e._opts.method, e._opts.url, !0)
                    } catch (err) {
                        return void browser$1.nextTick((function() {
                            e.emit("error", err)
                        }
                        ))
                    }
                    "responseType"in s && (s.responseType = e._mode.split(":")[0]),
                    "withCredentials"in s && (s.withCredentials = !!r.withCredentials),
                    "text" === e._mode && "overrideMimeType"in s && s.overrideMimeType("text/plain; charset=x-user-defined"),
                    Object.keys(n).forEach((function(e) {
                        s.setRequestHeader(n[e].name, n[e].value)
                    }
                    )),
                    e._response = null,
                    s.onreadystatechange = function() {
                        switch (s.readyState) {
                        case rStates.LOADING:
                        case rStates.DONE:
                            e._onXHRProgress()
                        }
                    }
                    ,
                    "moz-chunked-arraybuffer" === e._mode && (s.onprogress = function() {
                        e._onXHRProgress()
                    }
                    ),
                    s.onerror = function() {
                        e._destroyed || e.emit("error", new Error("XHR error"))
                    }
                    ;
                    try {
                        s.send(t)
                    } catch (err) {
                        return void browser$1.nextTick((function() {
                            e.emit("error", err)
                        }
                        ))
                    }
                }
            }
        }
        ,
        ClientRequest.prototype._onXHRProgress = function() {
            var e = this;
            statusValid(e._xhr) && !e._destroyed && (e._response || e._connect(),
            e._response._onXHRProgress())
        }
        ,
        ClientRequest.prototype._connect = function() {
            var e = this;
            e._destroyed || (e._response = new IncomingMessage(e._xhr,e._fetchResponse,e._mode),
            e.emit("response", e._response))
        }
        ,
        ClientRequest.prototype._write = function(e, t, r) {
            this._body.push(e),
            r()
        }
        ,
        ClientRequest.prototype.abort = ClientRequest.prototype.destroy = function() {
            var e = this;
            e._destroyed = !0,
            e._response && (e._response._destroyed = !0),
            e._xhr && e._xhr.abort()
        }
        ,
        ClientRequest.prototype.end = function(e, t, r) {
            "function" === typeof e && (r = e,
            e = void 0),
            Writable.prototype.end.call(this, e, t, r)
        }
        ,
        ClientRequest.prototype.flushHeaders = function() {}
        ,
        ClientRequest.prototype.setTimeout = function() {}
        ,
        ClientRequest.prototype.setNoDelay = function() {}
        ,
        ClientRequest.prototype.setSocketKeepAlive = function() {}
        ;
        var maxInt = 2147483647
          , base = 36
          , tMin = 1
          , tMax = 26
          , skew = 38
          , damp = 700
          , initialBias = 72
          , initialN = 128
          , delimiter = "-"
          , regexNonASCII = /[^\x20-\x7E]/
          , regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g
          , errors = {
            overflow: "Overflow: input needs wider integers to process",
            "not-basic": "Illegal input >= 0x80 (not a basic code point)",
            "invalid-input": "Invalid input"
        }
          , baseMinusTMin = base - tMin
          , floor = Math.floor
          , stringFromCharCode = String.fromCharCode;
        function error(e) {
            throw new RangeError(errors[e])
        }
        function map$1(e, t) {
            for (var r = e.length, n = []; r--; )
                n[r] = t(e[r]);
            return n
        }
        function mapDomain(e, t) {
            var r = e.split("@")
              , n = "";
            return r.length > 1 && (n = r[0] + "@",
            e = r[1]),
            n + map$1((e = e.replace(regexSeparators, ".")).split("."), t).join(".")
        }
        function ucs2decode(e) {
            for (var t, r, n = [], i = 0, s = e.length; i < s; )
                (t = e.charCodeAt(i++)) >= 55296 && t <= 56319 && i < s ? 56320 == (64512 & (r = e.charCodeAt(i++))) ? n.push(((1023 & t) << 10) + (1023 & r) + 65536) : (n.push(t),
                i--) : n.push(t);
            return n
        }
        function digitToBasic(e, t) {
            return e + 22 + 75 * (e < 26) - ((0 != t) << 5)
        }
        function adapt(e, t, r) {
            var n = 0;
            for (e = r ? floor(e / damp) : e >> 1,
            e += floor(e / t); e > baseMinusTMin * tMax >> 1; n += base)
                e = floor(e / baseMinusTMin);
            return floor(n + (baseMinusTMin + 1) * e / (e + skew))
        }
        function encode(e) {
            var t, r, n, i, s, a, o, l, c, h, d, u, f, p, g, _ = [];
            for (u = (e = ucs2decode(e)).length,
            t = initialN,
            r = 0,
            s = initialBias,
            a = 0; a < u; ++a)
                (d = e[a]) < 128 && _.push(stringFromCharCode(d));
            for (n = i = _.length,
            i && _.push(delimiter); n < u; ) {
                for (o = maxInt,
                a = 0; a < u; ++a)
                    (d = e[a]) >= t && d < o && (o = d);
                for (o - t > floor((maxInt - r) / (f = n + 1)) && error("overflow"),
                r += (o - t) * f,
                t = o,
                a = 0; a < u; ++a)
                    if ((d = e[a]) < t && ++r > maxInt && error("overflow"),
                    d == t) {
                        for (l = r,
                        c = base; !(l < (h = c <= s ? tMin : c >= s + tMax ? tMax : c - s)); c += base)
                            g = l - h,
                            p = base - h,
                            _.push(stringFromCharCode(digitToBasic(h + g % p, 0))),
                            l = floor(g / p);
                        _.push(stringFromCharCode(digitToBasic(l, 0))),
                        s = adapt(r, f, n == i),
                        r = 0,
                        ++n
                    }
                ++r,
                ++t
            }
            return _.join("")
        }
        function toASCII(e) {
            return mapDomain(e, (function(e) {
                return regexNonASCII.test(e) ? "xn--" + encode(e) : e
            }
            ))
        }
        function hasOwnProperty(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }
        var isArray = Array.isArray || function(e) {
            return "[object Array]" === Object.prototype.toString.call(e)
        }
        ;
        function stringifyPrimitive(e) {
            switch (typeof e) {
            case "string":
                return e;
            case "boolean":
                return e ? "true" : "false";
            case "number":
                return isFinite(e) ? e : "";
            default:
                return ""
            }
        }
        function stringify(e, t, r, n) {
            return t = t || "&",
            r = r || "=",
            null === e && (e = void 0),
            "object" === typeof e ? map(objectKeys(e), (function(n) {
                var i = encodeURIComponent(stringifyPrimitive(n)) + r;
                return isArray(e[n]) ? map(e[n], (function(e) {
                    return i + encodeURIComponent(stringifyPrimitive(e))
                }
                )).join(t) : i + encodeURIComponent(stringifyPrimitive(e[n]))
            }
            )).join(t) : n ? encodeURIComponent(stringifyPrimitive(n)) + r + encodeURIComponent(stringifyPrimitive(e)) : ""
        }
        function map(e, t) {
            if (e.map)
                return e.map(t);
            for (var r = [], n = 0; n < e.length; n++)
                r.push(t(e[n], n));
            return r
        }
        var objectKeys = Object.keys || function(e) {
            var t = [];
            for (var r in e)
                Object.prototype.hasOwnProperty.call(e, r) && t.push(r);
            return t
        }
        ;
        function parse$1(e, t, r, n) {
            t = t || "&",
            r = r || "=";
            var i = {};
            if ("string" !== typeof e || 0 === e.length)
                return i;
            var s = /\+/g;
            e = e.split(t);
            var a = 1e3;
            n && "number" === typeof n.maxKeys && (a = n.maxKeys);
            var o = e.length;
            a > 0 && o > a && (o = a);
            for (var l = 0; l < o; ++l) {
                var c, h, d, u, f = e[l].replace(s, "%20"), p = f.indexOf(r);
                p >= 0 ? (c = f.substr(0, p),
                h = f.substr(p + 1)) : (c = f,
                h = ""),
                d = decodeURIComponent(c),
                u = decodeURIComponent(h),
                hasOwnProperty(i, d) ? isArray(i[d]) ? i[d].push(u) : i[d] = [i[d], u] : i[d] = u
            }
            return i
        }
        var _polyfillNode_url = {
            parse: urlParse,
            resolve: urlResolve,
            resolveObject: urlResolveObject,
            fileURLToPath: urlFileURLToPath,
            format: urlFormat,
            Url: Url
        };
        function Url() {
            this.protocol = null,
            this.slashes = null,
            this.auth = null,
            this.host = null,
            this.port = null,
            this.hostname = null,
            this.hash = null,
            this.search = null,
            this.query = null,
            this.pathname = null,
            this.path = null,
            this.href = null
        }
        var protocolPattern = /^([a-z0-9.+-]+:)/i
          , portPattern = /:[0-9]*$/
          , simplePathPattern = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/
          , delims = ["<", ">", '"', "`", " ", "\r", "\n", "\t"]
          , unwise = ["{", "}", "|", "\\", "^", "`"].concat(delims)
          , autoEscape = ["'"].concat(unwise)
          , nonHostChars = ["%", "/", "?", ";", "#"].concat(autoEscape)
          , hostEndingChars = ["/", "?", "#"]
          , hostnameMaxLen = 255
          , hostnamePartPattern = /^[+a-z0-9A-Z_-]{0,63}$/
          , hostnamePartStart = /^([+a-z0-9A-Z_-]{0,63})(.*)$/
          , unsafeProtocol = {
            javascript: !0,
            "javascript:": !0
        }
          , hostlessProtocol = {
            javascript: !0,
            "javascript:": !0
        }
          , slashedProtocol = {
            http: !0,
            https: !0,
            ftp: !0,
            gopher: !0,
            file: !0,
            "http:": !0,
            "https:": !0,
            "ftp:": !0,
            "gopher:": !0,
            "file:": !0
        };
        function urlParse(e, t, r) {
            if (e && isObject(e) && e instanceof Url)
                return e;
            var n = new Url;
            return n.parse(e, t, r),
            n
        }
        function parse(e, t, r, n) {
            if (!isString(t))
                throw new TypeError("Parameter 'url' must be a string, not " + typeof t);
            var i = t.indexOf("?")
              , s = -1 !== i && i < t.indexOf("#") ? "?" : "#"
              , a = t.split(s);
            a[0] = a[0].replace(/\\/g, "/");
            var o = t = a.join(s);
            if (o = o.trim(),
            !n && 1 === t.split("#").length) {
                var l = simplePathPattern.exec(o);
                if (l)
                    return e.path = o,
                    e.href = o,
                    e.pathname = l[1],
                    l[2] ? (e.search = l[2],
                    e.query = r ? parse$1(e.search.substr(1)) : e.search.substr(1)) : r && (e.search = "",
                    e.query = {}),
                    e
            }
            var c, h, d, u, f = protocolPattern.exec(o);
            if (f) {
                var p = (f = f[0]).toLowerCase();
                e.protocol = p,
                o = o.substr(f.length)
            }
            if (n || f || o.match(/^\/\/[^@\/]+@[^@\/]+/)) {
                var g = "//" === o.substr(0, 2);
                !g || f && hostlessProtocol[f] || (o = o.substr(2),
                e.slashes = !0)
            }
            if (!hostlessProtocol[f] && (g || f && !slashedProtocol[f])) {
                var _, m, b = -1;
                for (c = 0; c < hostEndingChars.length; c++)
                    -1 !== (h = o.indexOf(hostEndingChars[c])) && (-1 === b || h < b) && (b = h);
                for (-1 !== (m = -1 === b ? o.lastIndexOf("@") : o.lastIndexOf("@", b)) && (_ = o.slice(0, m),
                o = o.slice(m + 1),
                e.auth = decodeURIComponent(_)),
                b = -1,
                c = 0; c < nonHostChars.length; c++)
                    -1 !== (h = o.indexOf(nonHostChars[c])) && (-1 === b || h < b) && (b = h);
                -1 === b && (b = o.length),
                e.host = o.slice(0, b),
                o = o.slice(b),
                parseHost(e),
                e.hostname = e.hostname || "";
                var v = "[" === e.hostname[0] && "]" === e.hostname[e.hostname.length - 1];
                if (!v) {
                    var y = e.hostname.split(/\./);
                    for (c = 0,
                    d = y.length; c < d; c++) {
                        var A = y[c];
                        if (A && !A.match(hostnamePartPattern)) {
                            for (var E = "", S = 0, w = A.length; S < w; S++)
                                A.charCodeAt(S) > 127 ? E += "x" : E += A[S];
                            if (!E.match(hostnamePartPattern)) {
                                var T = y.slice(0, c)
                                  , x = y.slice(c + 1)
                                  , C = A.match(hostnamePartStart);
                                C && (T.push(C[1]),
                                x.unshift(C[2])),
                                x.length && (o = "/" + x.join(".") + o),
                                e.hostname = T.join(".");
                                break
                            }
                        }
                    }
                }
                e.hostname.length > hostnameMaxLen ? e.hostname = "" : e.hostname = e.hostname.toLowerCase(),
                v || (e.hostname = toASCII(e.hostname)),
                u = e.port ? ":" + e.port : "";
                var R = e.hostname || "";
                e.host = R + u,
                e.href += e.host,
                v && (e.hostname = e.hostname.substr(1, e.hostname.length - 2),
                "/" !== o[0] && (o = "/" + o))
            }
            if (!unsafeProtocol[p])
                for (c = 0,
                d = autoEscape.length; c < d; c++) {
                    var k = autoEscape[c];
                    if (-1 !== o.indexOf(k)) {
                        var M = encodeURIComponent(k);
                        M === k && (M = escape(k)),
                        o = o.split(k).join(M)
                    }
                }
            var P = o.indexOf("#");
            -1 !== P && (e.hash = o.substr(P),
            o = o.slice(0, P));
            var I = o.indexOf("?");
            if (-1 !== I ? (e.search = o.substr(I),
            e.query = o.substr(I + 1),
            r && (e.query = parse$1(e.query)),
            o = o.slice(0, I)) : r && (e.search = "",
            e.query = {}),
            o && (e.pathname = o),
            slashedProtocol[p] && e.hostname && !e.pathname && (e.pathname = "/"),
            e.pathname || e.search) {
                u = e.pathname || "";
                var D = e.search || "";
                e.path = u + D
            }
            return e.href = format(e),
            e
        }
        function urlFileURLToPath(e) {
            if ("string" === typeof e)
                e = (new Url).parse(e);
            else if (!(e instanceof Url))
                throw new TypeError('The "path" argument must be of type string or an instance of URL. Received type ' + typeof e + String(e));
            if ("file:" !== e.protocol)
                throw new TypeError("The URL must be of scheme file");
            return getPathFromURLPosix(e)
        }
        function getPathFromURLPosix(e) {
            const t = e.pathname;
            for (let r = 0; r < t.length; r++)
                if ("%" === t[r]) {
                    const e = 32 | t.codePointAt(r + 2);
                    if ("2" === t[r + 1] && 102 === e)
                        throw new TypeError("must not include encoded / characters")
                }
            return decodeURIComponent(t)
        }
        function urlFormat(e) {
            return isString(e) && (e = parse({}, e)),
            format(e)
        }
        function format(e) {
            var t = e.auth || "";
            t && (t = (t = encodeURIComponent(t)).replace(/%3A/i, ":"),
            t += "@");
            var r = e.protocol || ""
              , n = e.pathname || ""
              , i = e.hash || ""
              , s = !1
              , a = "";
            e.host ? s = t + e.host : e.hostname && (s = t + (-1 === e.hostname.indexOf(":") ? e.hostname : "[" + this.hostname + "]"),
            e.port && (s += ":" + e.port)),
            e.query && isObject(e.query) && Object.keys(e.query).length && (a = stringify(e.query));
            var o = e.search || a && "?" + a || "";
            return r && ":" !== r.substr(-1) && (r += ":"),
            e.slashes || (!r || slashedProtocol[r]) && !1 !== s ? (s = "//" + (s || ""),
            n && "/" !== n.charAt(0) && (n = "/" + n)) : s || (s = ""),
            i && "#" !== i.charAt(0) && (i = "#" + i),
            o && "?" !== o.charAt(0) && (o = "?" + o),
            r + s + (n = n.replace(/[?#]/g, (function(e) {
                return encodeURIComponent(e)
            }
            ))) + (o = o.replace("#", "%23")) + i
        }
        function urlResolve(e, t) {
            return urlParse(e, !1, !0).resolve(t)
        }
        function urlResolveObject(e, t) {
            return e ? urlParse(e, !1, !0).resolveObject(t) : t
        }
        function parseHost(e) {
            var t = e.host
              , r = portPattern.exec(t);
            r && (":" !== (r = r[0]) && (e.port = r.substr(1)),
            t = t.substr(0, t.length - r.length)),
            t && (e.hostname = t)
        }
        Url.prototype.parse = function(e, t, r) {
            return parse(this, e, t, r)
        }
        ,
        Url.prototype.format = function() {
            return format(this)
        }
        ,
        Url.prototype.resolve = function(e) {
            return this.resolveObject(urlParse(e, !1, !0)).format()
        }
        ,
        Url.prototype.resolveObject = function(e) {
            if (isString(e)) {
                var t = new Url;
                t.parse(e, !1, !0),
                e = t
            }
            for (var r, n = new Url, i = Object.keys(this), s = 0; s < i.length; s++) {
                var a = i[s];
                n[a] = this[a]
            }
            if (n.hash = e.hash,
            "" === e.href)
                return n.href = n.format(),
                n;
            if (e.slashes && !e.protocol) {
                for (var o = Object.keys(e), l = 0; l < o.length; l++) {
                    var c = o[l];
                    "protocol" !== c && (n[c] = e[c])
                }
                return slashedProtocol[n.protocol] && n.hostname && !n.pathname && (n.path = n.pathname = "/"),
                n.href = n.format(),
                n
            }
            if (e.protocol && e.protocol !== n.protocol) {
                if (!slashedProtocol[e.protocol]) {
                    for (var h = Object.keys(e), d = 0; d < h.length; d++) {
                        var u = h[d];
                        n[u] = e[u]
                    }
                    return n.href = n.format(),
                    n
                }
                if (n.protocol = e.protocol,
                e.host || hostlessProtocol[e.protocol])
                    n.pathname = e.pathname;
                else {
                    for (r = (e.pathname || "").split("/"); r.length && !(e.host = r.shift()); )
                        ;
                    e.host || (e.host = ""),
                    e.hostname || (e.hostname = ""),
                    "" !== r[0] && r.unshift(""),
                    r.length < 2 && r.unshift(""),
                    n.pathname = r.join("/")
                }
                if (n.search = e.search,
                n.query = e.query,
                n.host = e.host || "",
                n.auth = e.auth,
                n.hostname = e.hostname || e.host,
                n.port = e.port,
                n.pathname || n.search) {
                    var f = n.pathname || ""
                      , p = n.search || "";
                    n.path = f + p
                }
                return n.slashes = n.slashes || e.slashes,
                n.href = n.format(),
                n
            }
            var g, _ = n.pathname && "/" === n.pathname.charAt(0), m = e.host || e.pathname && "/" === e.pathname.charAt(0), b = m || _ || n.host && e.pathname, v = b, y = n.pathname && n.pathname.split("/") || [], A = n.protocol && !slashedProtocol[n.protocol];
            if (r = e.pathname && e.pathname.split("/") || [],
            A && (n.hostname = "",
            n.port = null,
            n.host && ("" === y[0] ? y[0] = n.host : y.unshift(n.host)),
            n.host = "",
            e.protocol && (e.hostname = null,
            e.port = null,
            e.host && ("" === r[0] ? r[0] = e.host : r.unshift(e.host)),
            e.host = null),
            b = b && ("" === r[0] || "" === y[0])),
            m)
                n.host = e.host || "" === e.host ? e.host : n.host,
                n.hostname = e.hostname || "" === e.hostname ? e.hostname : n.hostname,
                n.search = e.search,
                n.query = e.query,
                y = r;
            else if (r.length)
                y || (y = []),
                y.pop(),
                y = y.concat(r),
                n.search = e.search,
                n.query = e.query;
            else if (!isNullOrUndefined(e.search))
                return A && (n.hostname = n.host = y.shift(),
                (g = !!(n.host && n.host.indexOf("@") > 0) && n.host.split("@")) && (n.auth = g.shift(),
                n.host = n.hostname = g.shift())),
                n.search = e.search,
                n.query = e.query,
                isNull(n.pathname) && isNull(n.search) || (n.path = (n.pathname ? n.pathname : "") + (n.search ? n.search : "")),
                n.href = n.format(),
                n;
            if (!y.length)
                return n.pathname = null,
                n.search ? n.path = "/" + n.search : n.path = null,
                n.href = n.format(),
                n;
            for (var E = y.slice(-1)[0], S = (n.host || e.host || y.length > 1) && ("." === E || ".." === E) || "" === E, w = 0, T = y.length; T >= 0; T--)
                "." === (E = y[T]) ? y.splice(T, 1) : ".." === E ? (y.splice(T, 1),
                w++) : w && (y.splice(T, 1),
                w--);
            if (!b && !v)
                for (; w--; w)
                    y.unshift("..");
            !b || "" === y[0] || y[0] && "/" === y[0].charAt(0) || y.unshift(""),
            S && "/" !== y.join("/").substr(-1) && y.push("");
            var x = "" === y[0] || y[0] && "/" === y[0].charAt(0);
            return A && (n.hostname = n.host = x ? "" : y.length ? y.shift() : "",
            (g = !!(n.host && n.host.indexOf("@") > 0) && n.host.split("@")) && (n.auth = g.shift(),
            n.host = n.hostname = g.shift())),
            (b = b || n.host && y.length) && !x && y.unshift(""),
            y.length ? n.pathname = y.join("/") : (n.pathname = null,
            n.path = null),
            isNull(n.pathname) && isNull(n.search) || (n.path = (n.pathname ? n.pathname : "") + (n.search ? n.search : "")),
            n.auth = e.auth || n.auth,
            n.slashes = n.slashes || e.slashes,
            n.href = n.format(),
            n
        }
        ,
        Url.prototype.parseHost = function() {
            return parseHost(this)
        }
        ;
        var _polyfillNode_url$1 = Object.freeze({
            __proto__: null,
            parse: urlParse,
            resolve: urlResolve,
            resolveObject: urlResolveObject,
            fileURLToPath: urlFileURLToPath,
            format: urlFormat,
            default: _polyfillNode_url,
            Url: Url
        });
        function request$1(e, t) {
            "string" === typeof e && (e = urlParse(e));
            var r = -1 === global$1.location.protocol.search(/^https?:$/) ? "http:" : ""
              , n = e.protocol || r
              , i = e.hostname || e.host
              , s = e.port
              , a = e.path || "/";
            i && -1 !== i.indexOf(":") && (i = "[" + i + "]"),
            e.url = (i ? n + "//" + i : "") + (s ? ":" + s : "") + a,
            e.method = (e.method || "GET").toUpperCase(),
            e.headers = e.headers || {};
            var o = new ClientRequest(e);
            return t && o.on("response", t),
            o
        }
        function get$1(e, t) {
            var r = request$1(e, t);
            return r.end(),
            r
        }
        function Agent$1() {}
        Agent$1.defaultMaxSockets = 4;
        var METHODS$1 = ["CHECKOUT", "CONNECT", "COPY", "DELETE", "GET", "HEAD", "LOCK", "M-SEARCH", "MERGE", "MKACTIVITY", "MKCOL", "MOVE", "NOTIFY", "OPTIONS", "PATCH", "POST", "PROPFIND", "PROPPATCH", "PURGE", "PUT", "REPORT", "SEARCH", "SUBSCRIBE", "TRACE", "UNLOCK", "UNSUBSCRIBE"]
          , STATUS_CODES$1 = {
            100: "Continue",
            101: "Switching Protocols",
            102: "Processing",
            200: "OK",
            201: "Created",
            202: "Accepted",
            203: "Non-Authoritative Information",
            204: "No Content",
            205: "Reset Content",
            206: "Partial Content",
            207: "Multi-Status",
            300: "Multiple Choices",
            301: "Moved Permanently",
            302: "Moved Temporarily",
            303: "See Other",
            304: "Not Modified",
            305: "Use Proxy",
            307: "Temporary Redirect",
            400: "Bad Request",
            401: "Unauthorized",
            402: "Payment Required",
            403: "Forbidden",
            404: "Not Found",
            405: "Method Not Allowed",
            406: "Not Acceptable",
            407: "Proxy Authentication Required",
            408: "Request Time-out",
            409: "Conflict",
            410: "Gone",
            411: "Length Required",
            412: "Precondition Failed",
            413: "Request Entity Too Large",
            414: "Request-URI Too Large",
            415: "Unsupported Media Type",
            416: "Requested Range Not Satisfiable",
            417: "Expectation Failed",
            418: "I'm a teapot",
            422: "Unprocessable Entity",
            423: "Locked",
            424: "Failed Dependency",
            425: "Unordered Collection",
            426: "Upgrade Required",
            428: "Precondition Required",
            429: "Too Many Requests",
            431: "Request Header Fields Too Large",
            500: "Internal Server Error",
            501: "Not Implemented",
            502: "Bad Gateway",
            503: "Service Unavailable",
            504: "Gateway Time-out",
            505: "HTTP Version Not Supported",
            506: "Variant Also Negotiates",
            507: "Insufficient Storage",
            509: "Bandwidth Limit Exceeded",
            510: "Not Extended",
            511: "Network Authentication Required"
        }
          , _polyfillNode_http = {
            request: request$1,
            get: get$1,
            Agent: Agent$1,
            METHODS: METHODS$1,
            STATUS_CODES: STATUS_CODES$1
        }
          , _polyfillNode_http$1 = Object.freeze({
            __proto__: null,
            request: request$1,
            get: get$1,
            Agent: Agent$1,
            METHODS: METHODS$1,
            STATUS_CODES: STATUS_CODES$1,
            default: _polyfillNode_http
        })
          , require$$3 = getAugmentedNamespace(_polyfillNode_http$1);
        function request(e, t) {
            "string" === typeof e && (e = urlParse(e));
            var r = -1 === global$1.location.protocol.search(/^https?:$/) ? "http:" : ""
              , n = e.protocol || r
              , i = e.hostname || e.host
              , s = e.port
              , a = e.path || "/";
            i && -1 !== i.indexOf(":") && (i = "[" + i + "]"),
            e.url = (i ? n + "//" + i : "") + (s ? ":" + s : "") + a,
            e.method = (e.method || "GET").toUpperCase(),
            e.headers = e.headers || {};
            var o = new ClientRequest(e);
            return t && o.on("response", t),
            o
        }
        function get(e, t) {
            var r = request(e, t);
            return r.end(),
            r
        }
        function Agent() {}
        Agent.defaultMaxSockets = 4;
        var METHODS = ["CHECKOUT", "CONNECT", "COPY", "DELETE", "GET", "HEAD", "LOCK", "M-SEARCH", "MERGE", "MKACTIVITY", "MKCOL", "MOVE", "NOTIFY", "OPTIONS", "PATCH", "POST", "PROPFIND", "PROPPATCH", "PURGE", "PUT", "REPORT", "SEARCH", "SUBSCRIBE", "TRACE", "UNLOCK", "UNSUBSCRIBE"]
          , STATUS_CODES = {
            100: "Continue",
            101: "Switching Protocols",
            102: "Processing",
            200: "OK",
            201: "Created",
            202: "Accepted",
            203: "Non-Authoritative Information",
            204: "No Content",
            205: "Reset Content",
            206: "Partial Content",
            207: "Multi-Status",
            300: "Multiple Choices",
            301: "Moved Permanently",
            302: "Moved Temporarily",
            303: "See Other",
            304: "Not Modified",
            305: "Use Proxy",
            307: "Temporary Redirect",
            400: "Bad Request",
            401: "Unauthorized",
            402: "Payment Required",
            403: "Forbidden",
            404: "Not Found",
            405: "Method Not Allowed",
            406: "Not Acceptable",
            407: "Proxy Authentication Required",
            408: "Request Time-out",
            409: "Conflict",
            410: "Gone",
            411: "Length Required",
            412: "Precondition Failed",
            413: "Request Entity Too Large",
            414: "Request-URI Too Large",
            415: "Unsupported Media Type",
            416: "Requested Range Not Satisfiable",
            417: "Expectation Failed",
            418: "I'm a teapot",
            422: "Unprocessable Entity",
            423: "Locked",
            424: "Failed Dependency",
            425: "Unordered Collection",
            426: "Upgrade Required",
            428: "Precondition Required",
            429: "Too Many Requests",
            431: "Request Header Fields Too Large",
            500: "Internal Server Error",
            501: "Not Implemented",
            502: "Bad Gateway",
            503: "Service Unavailable",
            504: "Gateway Time-out",
            505: "HTTP Version Not Supported",
            506: "Variant Also Negotiates",
            507: "Insufficient Storage",
            509: "Bandwidth Limit Exceeded",
            510: "Not Extended",
            511: "Network Authentication Required"
        }
          , _polyfillNode_https = {
            request: request,
            get: get,
            Agent: Agent,
            METHODS: METHODS,
            STATUS_CODES: STATUS_CODES
        }
          , _polyfillNode_https$1 = Object.freeze({
            __proto__: null,
            request: request,
            get: get,
            Agent: Agent,
            METHODS: METHODS,
            STATUS_CODES: STATUS_CODES,
            default: _polyfillNode_https
        })
          , require$$4 = getAugmentedNamespace(_polyfillNode_https$1)
          , require$$5 = getAugmentedNamespace(_polyfillNode_url$1);
        (function(module, exports) {
            var factory;
            globalThis,
            factory = () => ( () => {
                var __webpack_modules__ = [, (e, t, r) => {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }),
                    t.VerbosityLevel = t.Util = t.UnknownErrorException = t.UnexpectedResponseException = t.UNSUPPORTED_FEATURES = t.TextRenderingMode = t.StreamType = t.RenderingIntentFlag = t.PermissionFlag = t.PasswordResponses = t.PasswordException = t.PageActionEventType = t.OPS = t.MissingPDFException = t.LINE_FACTOR = t.LINE_DESCENT_FACTOR = t.InvalidPDFException = t.ImageKind = t.IDENTITY_MATRIX = t.FormatError = t.FontType = t.FeatureTest = t.FONT_IDENTITY_MATRIX = t.DocumentActionEventType = t.CMapCompressionType = t.BaseException = t.AnnotationType = t.AnnotationStateModelType = t.AnnotationReviewState = t.AnnotationReplyType = t.AnnotationMode = t.AnnotationMarkedState = t.AnnotationFlag = t.AnnotationFieldFlag = t.AnnotationEditorType = t.AnnotationEditorPrefix = t.AnnotationEditorParamsType = t.AnnotationBorderStyleType = t.AnnotationActionEventType = t.AbortException = void 0,
                    t.arrayByteLength = h,
                    t.arraysToBytes = function(e) {
                        const t = e.length;
                        if (1 === t && e[0]instanceof Uint8Array)
                            return e[0];
                        let r = 0;
                        for (let s = 0; s < t; s++)
                            r += h(e[s]);
                        let n = 0;
                        const i = new Uint8Array(r);
                        for (let s = 0; s < t; s++) {
                            let t = e[s];
                            t instanceof Uint8Array || (t = "string" === typeof t ? c(t) : new Uint8Array(t));
                            const r = t.byteLength;
                            i.set(t, n),
                            n += r
                        }
                        return i
                    }
                    ,
                    t.assert = function(e, t) {
                        e || a(t)
                    }
                    ,
                    t.bytesToString = function(e) {
                        "object" === typeof e && null !== e && void 0 !== e.length || a("Invalid argument for bytesToString");
                        const t = e.length
                          , r = 8192;
                        if (t < r)
                            return String.fromCharCode.apply(null, e);
                        const n = [];
                        for (let i = 0; i < t; i += r) {
                            const s = Math.min(i + r, t)
                              , a = e.subarray(i, s);
                            n.push(String.fromCharCode.apply(null, a))
                        }
                        return n.join("")
                    }
                    ,
                    t.createPromiseCapability = function() {
                        const e = Object.create(null);
                        let t = !1;
                        return Object.defineProperty(e, "settled", {
                            get: () => t
                        }),
                        e.promise = new Promise((function(r, n) {
                            e.resolve = function(e) {
                                t = !0,
                                r(e)
                            }
                            ,
                            e.reject = function(e) {
                                t = !0,
                                n(e)
                            }
                        }
                        )),
                        e
                    }
                    ,
                    t.createValidAbsoluteUrl = function(e, t=null, r=null) {
                        if (!e)
                            return null;
                        try {
                            if (r && "string" === typeof e) {
                                if (r.addDefaultProtocol && e.startsWith("www.")) {
                                    const t = e.match(/\./g);
                                    t && t.length >= 2 && (e = `http://${e}`)
                                }
                                if (r.tryConvertEncoding)
                                    try {
                                        e = p(e)
                                    } catch (n) {}
                            }
                            const i = t ? new URL(e,t) : new URL(e);
                            if (function(e) {
                                if (!e)
                                    return !1;
                                switch (e.protocol) {
                                case "http:":
                                case "https:":
                                case "ftp:":
                                case "mailto:":
                                case "tel:":
                                    return !0;
                                default:
                                    return !1
                                }
                            }(i))
                                return i
                        } catch (n) {}
                        return null
                    }
                    ,
                    t.escapeString = function(e) {
                        return e.replace(/([()\\\n\r])/g, (e => "\n" === e ? "\\n" : "\r" === e ? "\\r" : `\\${e}`))
                    }
                    ,
                    t.getModificationDate = function(e=new Date) {
                        return [e.getUTCFullYear().toString(), (e.getUTCMonth() + 1).toString().padStart(2, "0"), e.getUTCDate().toString().padStart(2, "0"), e.getUTCHours().toString().padStart(2, "0"), e.getUTCMinutes().toString().padStart(2, "0"), e.getUTCSeconds().toString().padStart(2, "0")].join("")
                    }
                    ,
                    t.getVerbosityLevel = function() {
                        return i
                    }
                    ,
                    t.info = function(e) {
                        i >= n.INFOS && console.log(`Info: ${e}`)
                    }
                    ,
                    t.isArrayBuffer = function(e) {
                        return "object" === typeof e && null !== e && void 0 !== e.byteLength
                    }
                    ,
                    t.isArrayEqual = function(e, t) {
                        if (e.length !== t.length)
                            return !1;
                        for (let r = 0, n = e.length; r < n; r++)
                            if (e[r] !== t[r])
                                return !1;
                        return !0
                    }
                    ,
                    t.isAscii = function(e) {
                        return /^[\x00-\x7F]*$/.test(e)
                    }
                    ,
                    t.objectFromMap = function(e) {
                        const t = Object.create(null);
                        for (const [r,n] of e)
                            t[r] = n;
                        return t
                    }
                    ,
                    t.objectSize = function(e) {
                        return Object.keys(e).length
                    }
                    ,
                    t.setVerbosityLevel = function(e) {
                        Number.isInteger(e) && (i = e)
                    }
                    ,
                    t.shadow = o,
                    t.string32 = function(e) {
                        return String.fromCharCode(e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, 255 & e)
                    }
                    ,
                    t.stringToBytes = c,
                    t.stringToPDFString = function(e) {
                        if (e[0] >= "\xef") {
                            let t;
                            if ("\xfe" === e[0] && "\xff" === e[1] ? t = "utf-16be" : "\xff" === e[0] && "\xfe" === e[1] ? t = "utf-16le" : "\xef" === e[0] && "\xbb" === e[1] && "\xbf" === e[2] && (t = "utf-8"),
                            t)
                                try {
                                    const r = new TextDecoder(t,{
                                        fatal: !0
                                    })
                                      , n = c(e);
                                    return r.decode(n)
                                } catch (r) {
                                    s(`stringToPDFString: "${r}".`)
                                }
                        }
                        const t = [];
                        for (let n = 0, i = e.length; n < i; n++) {
                            const r = f[e.charCodeAt(n)];
                            t.push(r ? String.fromCharCode(r) : e.charAt(n))
                        }
                        return t.join("")
                    }
                    ,
                    t.stringToUTF16BEString = function(e) {
                        const t = ["\xfe\xff"];
                        for (let r = 0, n = e.length; r < n; r++) {
                            const n = e.charCodeAt(r);
                            t.push(String.fromCharCode(n >> 8 & 255), String.fromCharCode(255 & n))
                        }
                        return t.join("")
                    }
                    ,
                    t.stringToUTF8String = p,
                    t.unreachable = a,
                    t.utf8StringToString = function(e) {
                        return unescape(encodeURIComponent(e))
                    }
                    ,
                    t.warn = s,
                    r(2),
                    t.IDENTITY_MATRIX = [1, 0, 0, 1, 0, 0],
                    t.FONT_IDENTITY_MATRIX = [.001, 0, 0, .001, 0, 0],
                    t.LINE_FACTOR = 1.35,
                    t.LINE_DESCENT_FACTOR = .35,
                    t.RenderingIntentFlag = {
                        ANY: 1,
                        DISPLAY: 2,
                        PRINT: 4,
                        ANNOTATIONS_FORMS: 16,
                        ANNOTATIONS_STORAGE: 32,
                        ANNOTATIONS_DISABLE: 64,
                        OPLIST: 256
                    },
                    t.AnnotationMode = {
                        DISABLE: 0,
                        ENABLE: 1,
                        ENABLE_FORMS: 2,
                        ENABLE_STORAGE: 3
                    },
                    t.AnnotationEditorPrefix = "pdfjs_internal_editor_",
                    t.AnnotationEditorType = {
                        DISABLE: -1,
                        NONE: 0,
                        FREETEXT: 3,
                        INK: 15
                    },
                    t.AnnotationEditorParamsType = {
                        FREETEXT_SIZE: 1,
                        FREETEXT_COLOR: 2,
                        FREETEXT_OPACITY: 3,
                        INK_COLOR: 11,
                        INK_THICKNESS: 12,
                        INK_OPACITY: 13
                    },
                    t.PermissionFlag = {
                        PRINT: 4,
                        MODIFY_CONTENTS: 8,
                        COPY: 16,
                        MODIFY_ANNOTATIONS: 32,
                        FILL_INTERACTIVE_FORMS: 256,
                        COPY_FOR_ACCESSIBILITY: 512,
                        ASSEMBLE: 1024,
                        PRINT_HIGH_QUALITY: 2048
                    },
                    t.TextRenderingMode = {
                        FILL: 0,
                        STROKE: 1,
                        FILL_STROKE: 2,
                        INVISIBLE: 3,
                        FILL_ADD_TO_PATH: 4,
                        STROKE_ADD_TO_PATH: 5,
                        FILL_STROKE_ADD_TO_PATH: 6,
                        ADD_TO_PATH: 7,
                        FILL_STROKE_MASK: 3,
                        ADD_TO_PATH_FLAG: 4
                    },
                    t.ImageKind = {
                        GRAYSCALE_1BPP: 1,
                        RGB_24BPP: 2,
                        RGBA_32BPP: 3
                    },
                    t.AnnotationType = {
                        TEXT: 1,
                        LINK: 2,
                        FREETEXT: 3,
                        LINE: 4,
                        SQUARE: 5,
                        CIRCLE: 6,
                        POLYGON: 7,
                        POLYLINE: 8,
                        HIGHLIGHT: 9,
                        UNDERLINE: 10,
                        SQUIGGLY: 11,
                        STRIKEOUT: 12,
                        STAMP: 13,
                        CARET: 14,
                        INK: 15,
                        POPUP: 16,
                        FILEATTACHMENT: 17,
                        SOUND: 18,
                        MOVIE: 19,
                        WIDGET: 20,
                        SCREEN: 21,
                        PRINTERMARK: 22,
                        TRAPNET: 23,
                        WATERMARK: 24,
                        THREED: 25,
                        REDACT: 26
                    },
                    t.AnnotationStateModelType = {
                        MARKED: "Marked",
                        REVIEW: "Review"
                    },
                    t.AnnotationMarkedState = {
                        MARKED: "Marked",
                        UNMARKED: "Unmarked"
                    },
                    t.AnnotationReviewState = {
                        ACCEPTED: "Accepted",
                        REJECTED: "Rejected",
                        CANCELLED: "Cancelled",
                        COMPLETED: "Completed",
                        NONE: "None"
                    },
                    t.AnnotationReplyType = {
                        GROUP: "Group",
                        REPLY: "R"
                    },
                    t.AnnotationFlag = {
                        INVISIBLE: 1,
                        HIDDEN: 2,
                        PRINT: 4,
                        NOZOOM: 8,
                        NOROTATE: 16,
                        NOVIEW: 32,
                        READONLY: 64,
                        LOCKED: 128,
                        TOGGLENOVIEW: 256,
                        LOCKEDCONTENTS: 512
                    },
                    t.AnnotationFieldFlag = {
                        READONLY: 1,
                        REQUIRED: 2,
                        NOEXPORT: 4,
                        MULTILINE: 4096,
                        PASSWORD: 8192,
                        NOTOGGLETOOFF: 16384,
                        RADIO: 32768,
                        PUSHBUTTON: 65536,
                        COMBO: 131072,
                        EDIT: 262144,
                        SORT: 524288,
                        FILESELECT: 1048576,
                        MULTISELECT: 2097152,
                        DONOTSPELLCHECK: 4194304,
                        DONOTSCROLL: 8388608,
                        COMB: 16777216,
                        RICHTEXT: 33554432,
                        RADIOSINUNISON: 33554432,
                        COMMITONSELCHANGE: 67108864
                    },
                    t.AnnotationBorderStyleType = {
                        SOLID: 1,
                        DASHED: 2,
                        BEVELED: 3,
                        INSET: 4,
                        UNDERLINE: 5
                    },
                    t.AnnotationActionEventType = {
                        E: "Mouse Enter",
                        X: "Mouse Exit",
                        D: "Mouse Down",
                        U: "Mouse Up",
                        Fo: "Focus",
                        Bl: "Blur",
                        PO: "PageOpen",
                        PC: "PageClose",
                        PV: "PageVisible",
                        PI: "PageInvisible",
                        K: "Keystroke",
                        F: "Format",
                        V: "Validate",
                        C: "Calculate"
                    },
                    t.DocumentActionEventType = {
                        WC: "WillClose",
                        WS: "WillSave",
                        DS: "DidSave",
                        WP: "WillPrint",
                        DP: "DidPrint"
                    },
                    t.PageActionEventType = {
                        O: "PageOpen",
                        C: "PageClose"
                    },
                    t.StreamType = {
                        UNKNOWN: "UNKNOWN",
                        FLATE: "FLATE",
                        LZW: "LZW",
                        DCT: "DCT",
                        JPX: "JPX",
                        JBIG: "JBIG",
                        A85: "A85",
                        AHX: "AHX",
                        CCF: "CCF",
                        RLX: "RLX"
                    },
                    t.FontType = {
                        UNKNOWN: "UNKNOWN",
                        TYPE1: "TYPE1",
                        TYPE1STANDARD: "TYPE1STANDARD",
                        TYPE1C: "TYPE1C",
                        CIDFONTTYPE0: "CIDFONTTYPE0",
                        CIDFONTTYPE0C: "CIDFONTTYPE0C",
                        TRUETYPE: "TRUETYPE",
                        CIDFONTTYPE2: "CIDFONTTYPE2",
                        TYPE3: "TYPE3",
                        OPENTYPE: "OPENTYPE",
                        TYPE0: "TYPE0",
                        MMTYPE1: "MMTYPE1"
                    };
                    const n = {
                        ERRORS: 0,
                        WARNINGS: 1,
                        INFOS: 5
                    };
                    t.VerbosityLevel = n,
                    t.CMapCompressionType = {
                        NONE: 0,
                        BINARY: 1,
                        STREAM: 2
                    },
                    t.OPS = {
                        dependency: 1,
                        setLineWidth: 2,
                        setLineCap: 3,
                        setLineJoin: 4,
                        setMiterLimit: 5,
                        setDash: 6,
                        setRenderingIntent: 7,
                        setFlatness: 8,
                        setGState: 9,
                        save: 10,
                        restore: 11,
                        transform: 12,
                        moveTo: 13,
                        lineTo: 14,
                        curveTo: 15,
                        curveTo2: 16,
                        curveTo3: 17,
                        closePath: 18,
                        rectangle: 19,
                        stroke: 20,
                        closeStroke: 21,
                        fill: 22,
                        eoFill: 23,
                        fillStroke: 24,
                        eoFillStroke: 25,
                        closeFillStroke: 26,
                        closeEOFillStroke: 27,
                        endPath: 28,
                        clip: 29,
                        eoClip: 30,
                        beginText: 31,
                        endText: 32,
                        setCharSpacing: 33,
                        setWordSpacing: 34,
                        setHScale: 35,
                        setLeading: 36,
                        setFont: 37,
                        setTextRenderingMode: 38,
                        setTextRise: 39,
                        moveText: 40,
                        setLeadingMoveText: 41,
                        setTextMatrix: 42,
                        nextLine: 43,
                        showText: 44,
                        showSpacedText: 45,
                        nextLineShowText: 46,
                        nextLineSetSpacingShowText: 47,
                        setCharWidth: 48,
                        setCharWidthAndBounds: 49,
                        setStrokeColorSpace: 50,
                        setFillColorSpace: 51,
                        setStrokeColor: 52,
                        setStrokeColorN: 53,
                        setFillColor: 54,
                        setFillColorN: 55,
                        setStrokeGray: 56,
                        setFillGray: 57,
                        setStrokeRGBColor: 58,
                        setFillRGBColor: 59,
                        setStrokeCMYKColor: 60,
                        setFillCMYKColor: 61,
                        shadingFill: 62,
                        beginInlineImage: 63,
                        beginImageData: 64,
                        endInlineImage: 65,
                        paintXObject: 66,
                        markPoint: 67,
                        markPointProps: 68,
                        beginMarkedContent: 69,
                        beginMarkedContentProps: 70,
                        endMarkedContent: 71,
                        beginCompat: 72,
                        endCompat: 73,
                        paintFormXObjectBegin: 74,
                        paintFormXObjectEnd: 75,
                        beginGroup: 76,
                        endGroup: 77,
                        beginAnnotations: 78,
                        endAnnotations: 79,
                        beginAnnotation: 80,
                        endAnnotation: 81,
                        paintJpegXObject: 82,
                        paintImageMaskXObject: 83,
                        paintImageMaskXObjectGroup: 84,
                        paintImageXObject: 85,
                        paintInlineImageXObject: 86,
                        paintInlineImageXObjectGroup: 87,
                        paintImageXObjectRepeat: 88,
                        paintImageMaskXObjectRepeat: 89,
                        paintSolidColorImageMask: 90,
                        constructPath: 91
                    },
                    t.UNSUPPORTED_FEATURES = {
                        unknown: "unknown",
                        forms: "forms",
                        javaScript: "javaScript",
                        signatures: "signatures",
                        smask: "smask",
                        shadingPattern: "shadingPattern",
                        font: "font",
                        errorTilingPattern: "errorTilingPattern",
                        errorExtGState: "errorExtGState",
                        errorXObject: "errorXObject",
                        errorFontLoadType3: "errorFontLoadType3",
                        errorFontState: "errorFontState",
                        errorFontMissing: "errorFontMissing",
                        errorFontTranslate: "errorFontTranslate",
                        errorColorSpace: "errorColorSpace",
                        errorOperatorList: "errorOperatorList",
                        errorFontToUnicode: "errorFontToUnicode",
                        errorFontLoadNative: "errorFontLoadNative",
                        errorFontBuildPath: "errorFontBuildPath",
                        errorFontGetPath: "errorFontGetPath",
                        errorMarkedContent: "errorMarkedContent",
                        errorContentSubStream: "errorContentSubStream"
                    },
                    t.PasswordResponses = {
                        NEED_PASSWORD: 1,
                        INCORRECT_PASSWORD: 2
                    };
                    let i = n.WARNINGS;
                    function s(e) {
                        i >= n.WARNINGS && console.log(`Warning: ${e}`)
                    }
                    function a(e) {
                        throw new Error(e)
                    }
                    function o(e, t, r) {
                        return Object.defineProperty(e, t, {
                            value: r,
                            enumerable: !0,
                            configurable: !0,
                            writable: !1
                        }),
                        r
                    }
                    const l = function() {
                        function e(t, r) {
                            this.constructor === e && a("Cannot initialize BaseException."),
                            this.message = t,
                            this.name = r
                        }
                        return e.prototype = new Error,
                        e.constructor = e,
                        e
                    }();
                    function c(e) {
                        "string" !== typeof e && a("Invalid argument for stringToBytes");
                        const t = e.length
                          , r = new Uint8Array(t);
                        for (let n = 0; n < t; ++n)
                            r[n] = 255 & e.charCodeAt(n);
                        return r
                    }
                    function h(e) {
                        return void 0 !== e.length ? e.length : void 0 !== e.byteLength ? e.byteLength : void a("Invalid argument for arrayByteLength")
                    }
                    t.BaseException = l,
                    t.PasswordException = class extends l {
                        constructor(e, t) {
                            super(e, "PasswordException"),
                            this.code = t
                        }
                    }
                    ,
                    t.UnknownErrorException = class extends l {
                        constructor(e, t) {
                            super(e, "UnknownErrorException"),
                            this.details = t
                        }
                    }
                    ,
                    t.InvalidPDFException = class extends l {
                        constructor(e) {
                            super(e, "InvalidPDFException")
                        }
                    }
                    ,
                    t.MissingPDFException = class extends l {
                        constructor(e) {
                            super(e, "MissingPDFException")
                        }
                    }
                    ,
                    t.UnexpectedResponseException = class extends l {
                        constructor(e, t) {
                            super(e, "UnexpectedResponseException"),
                            this.status = t
                        }
                    }
                    ,
                    t.FormatError = class extends l {
                        constructor(e) {
                            super(e, "FormatError")
                        }
                    }
                    ,
                    t.AbortException = class extends l {
                        constructor(e) {
                            super(e, "AbortException")
                        }
                    }
                    ,
                    t.FeatureTest = class {
                        static get isLittleEndian() {
                            return o(this, "isLittleEndian", function() {
                                const e = new Uint8Array(4);
                                return e[0] = 1,
                                1 === new Uint32Array(e.buffer,0,1)[0]
                            }())
                        }
                        static get isEvalSupported() {
                            return o(this, "isEvalSupported", function() {
                                try {
                                    return new Function(""),
                                    !0
                                } catch (e) {
                                    return !1
                                }
                            }())
                        }
                        static get isOffscreenCanvasSupported() {
                            return o(this, "isOffscreenCanvasSupported", "undefined" !== typeof OffscreenCanvas)
                        }
                    }
                    ;
                    const d = [...Array(256).keys()].map((e => e.toString(16).padStart(2, "0")));
                    class u {
                        static makeHexColor(e, t, r) {
                            return `#${d[e]}${d[t]}${d[r]}`
                        }
                        static scaleMinMax(e, t) {
                            let r;
                            e[0] ? (e[0] < 0 && (r = t[0],
                            t[0] = t[1],
                            t[1] = r),
                            t[0] *= e[0],
                            t[1] *= e[0],
                            e[3] < 0 && (r = t[2],
                            t[2] = t[3],
                            t[3] = r),
                            t[2] *= e[3],
                            t[3] *= e[3]) : (r = t[0],
                            t[0] = t[2],
                            t[2] = r,
                            r = t[1],
                            t[1] = t[3],
                            t[3] = r,
                            e[1] < 0 && (r = t[2],
                            t[2] = t[3],
                            t[3] = r),
                            t[2] *= e[1],
                            t[3] *= e[1],
                            e[2] < 0 && (r = t[0],
                            t[0] = t[1],
                            t[1] = r),
                            t[0] *= e[2],
                            t[1] *= e[2]),
                            t[0] += e[4],
                            t[1] += e[4],
                            t[2] += e[5],
                            t[3] += e[5]
                        }
                        static transform(e, t) {
                            return [e[0] * t[0] + e[2] * t[1], e[1] * t[0] + e[3] * t[1], e[0] * t[2] + e[2] * t[3], e[1] * t[2] + e[3] * t[3], e[0] * t[4] + e[2] * t[5] + e[4], e[1] * t[4] + e[3] * t[5] + e[5]]
                        }
                        static applyTransform(e, t) {
                            return [e[0] * t[0] + e[1] * t[2] + t[4], e[0] * t[1] + e[1] * t[3] + t[5]]
                        }
                        static applyInverseTransform(e, t) {
                            const r = t[0] * t[3] - t[1] * t[2];
                            return [(e[0] * t[3] - e[1] * t[2] + t[2] * t[5] - t[4] * t[3]) / r, (-e[0] * t[1] + e[1] * t[0] + t[4] * t[1] - t[5] * t[0]) / r]
                        }
                        static getAxialAlignedBoundingBox(e, t) {
                            const r = u.applyTransform(e, t)
                              , n = u.applyTransform(e.slice(2, 4), t)
                              , i = u.applyTransform([e[0], e[3]], t)
                              , s = u.applyTransform([e[2], e[1]], t);
                            return [Math.min(r[0], n[0], i[0], s[0]), Math.min(r[1], n[1], i[1], s[1]), Math.max(r[0], n[0], i[0], s[0]), Math.max(r[1], n[1], i[1], s[1])]
                        }
                        static inverseTransform(e) {
                            const t = e[0] * e[3] - e[1] * e[2];
                            return [e[3] / t, -e[1] / t, -e[2] / t, e[0] / t, (e[2] * e[5] - e[4] * e[3]) / t, (e[4] * e[1] - e[5] * e[0]) / t]
                        }
                        static apply3dTransform(e, t) {
                            return [e[0] * t[0] + e[1] * t[1] + e[2] * t[2], e[3] * t[0] + e[4] * t[1] + e[5] * t[2], e[6] * t[0] + e[7] * t[1] + e[8] * t[2]]
                        }
                        static singularValueDecompose2dScale(e) {
                            const t = [e[0], e[2], e[1], e[3]]
                              , r = e[0] * t[0] + e[1] * t[2]
                              , n = e[0] * t[1] + e[1] * t[3]
                              , i = e[2] * t[0] + e[3] * t[2]
                              , s = e[2] * t[1] + e[3] * t[3]
                              , a = (r + s) / 2
                              , o = Math.sqrt((r + s) ** 2 - 4 * (r * s - i * n)) / 2
                              , l = a + o || 1
                              , c = a - o || 1;
                            return [Math.sqrt(l), Math.sqrt(c)]
                        }
                        static normalizeRect(e) {
                            const t = e.slice(0);
                            return e[0] > e[2] && (t[0] = e[2],
                            t[2] = e[0]),
                            e[1] > e[3] && (t[1] = e[3],
                            t[3] = e[1]),
                            t
                        }
                        static intersect(e, t) {
                            const r = Math.max(Math.min(e[0], e[2]), Math.min(t[0], t[2]))
                              , n = Math.min(Math.max(e[0], e[2]), Math.max(t[0], t[2]));
                            if (r > n)
                                return null;
                            const i = Math.max(Math.min(e[1], e[3]), Math.min(t[1], t[3]))
                              , s = Math.min(Math.max(e[1], e[3]), Math.max(t[1], t[3]));
                            return i > s ? null : [r, i, n, s]
                        }
                        static bezierBoundingBox(e, t, r, n, i, s, a, o) {
                            const l = []
                              , c = [[], []];
                            let h, d, u, f, p, g, _, m;
                            for (let A = 0; A < 2; ++A)
                                if (0 === A ? (d = 6 * e - 12 * r + 6 * i,
                                h = -3 * e + 9 * r - 9 * i + 3 * a,
                                u = 3 * r - 3 * e) : (d = 6 * t - 12 * n + 6 * s,
                                h = -3 * t + 9 * n - 9 * s + 3 * o,
                                u = 3 * n - 3 * t),
                                Math.abs(h) < 1e-12) {
                                    if (Math.abs(d) < 1e-12)
                                        continue;
                                    f = -u / d,
                                    0 < f && f < 1 && l.push(f)
                                } else
                                    _ = d * d - 4 * u * h,
                                    m = Math.sqrt(_),
                                    _ < 0 || (p = (-d + m) / (2 * h),
                                    0 < p && p < 1 && l.push(p),
                                    g = (-d - m) / (2 * h),
                                    0 < g && g < 1 && l.push(g));
                            let b, v = l.length;
                            const y = v;
                            for (; v--; )
                                f = l[v],
                                b = 1 - f,
                                c[0][v] = b * b * b * e + 3 * b * b * f * r + 3 * b * f * f * i + f * f * f * a,
                                c[1][v] = b * b * b * t + 3 * b * b * f * n + 3 * b * f * f * s + f * f * f * o;
                            return c[0][y] = e,
                            c[1][y] = t,
                            c[0][y + 1] = a,
                            c[1][y + 1] = o,
                            c[0].length = c[1].length = y + 2,
                            [Math.min(...c[0]), Math.min(...c[1]), Math.max(...c[0]), Math.max(...c[1])]
                        }
                    }
                    t.Util = u;
                    const f = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 728, 711, 710, 729, 733, 731, 730, 732, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8226, 8224, 8225, 8230, 8212, 8211, 402, 8260, 8249, 8250, 8722, 8240, 8222, 8220, 8221, 8216, 8217, 8218, 8482, 64257, 64258, 321, 338, 352, 376, 381, 305, 322, 339, 353, 382, 0, 8364];
                    function p(e) {
                        return decodeURIComponent(escape(e))
                    }
                }
                , (e, t, r) => {
                    r(3)
                }
                , (e, t) => {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }),
                    t.isNodeJS = void 0;
                    const r = "object" === typeof browser$1 && browser$1 + "" === "[object process]" && !browser$1.versions.nw && !(browser$1.versions.electron && browser$1.type && "browser" !== browser$1.type);
                    t.isNodeJS = r
                }
                , (__unused_webpack_module, exports, __w_pdfjs_require__) => {
                    Object.defineProperty(exports, "__esModule", {
                        value: !0
                    }),
                    exports.build = exports.RenderTask = exports.PDFWorkerUtil = exports.PDFWorker = exports.PDFPageProxy = exports.PDFDocumentProxy = exports.PDFDocumentLoadingTask = exports.PDFDataRangeTransport = exports.LoopbackPort = exports.DefaultStandardFontDataFactory = exports.DefaultCanvasFactory = exports.DefaultCMapReaderFactory = void 0,
                    exports.getDocument = getDocument,
                    exports.setPDFNetworkStreamFactory = setPDFNetworkStreamFactory,
                    exports.version = void 0;
                    var _util = __w_pdfjs_require__(1)
                      , _annotation_storage = __w_pdfjs_require__(5)
                      , _display_utils = __w_pdfjs_require__(8)
                      , _font_loader = __w_pdfjs_require__(11)
                      , _canvas = __w_pdfjs_require__(12)
                      , _worker_options = __w_pdfjs_require__(15)
                      , _is_node = __w_pdfjs_require__(3)
                      , _message_handler = __w_pdfjs_require__(16)
                      , _metadata = __w_pdfjs_require__(17)
                      , _optional_content_config = __w_pdfjs_require__(18)
                      , _transport_stream = __w_pdfjs_require__(19)
                      , _xfa_text = __w_pdfjs_require__(20);
                    const DEFAULT_RANGE_CHUNK_SIZE = 65536
                      , RENDERING_CANCELLED_TIMEOUT = 100;
                    let DefaultCanvasFactory = _display_utils.DOMCanvasFactory;
                    exports.DefaultCanvasFactory = DefaultCanvasFactory;
                    let DefaultCMapReaderFactory = _display_utils.DOMCMapReaderFactory;
                    exports.DefaultCMapReaderFactory = DefaultCMapReaderFactory;
                    let DefaultStandardFontDataFactory = _display_utils.DOMStandardFontDataFactory, createPDFNetworkStream;
                    if (exports.DefaultStandardFontDataFactory = DefaultStandardFontDataFactory,
                    _is_node.isNodeJS) {
                        const {NodeCanvasFactory: e, NodeCMapReaderFactory: t, NodeStandardFontDataFactory: r} = __w_pdfjs_require__(21);
                        exports.DefaultCanvasFactory = DefaultCanvasFactory = e,
                        exports.DefaultCMapReaderFactory = DefaultCMapReaderFactory = t,
                        exports.DefaultStandardFontDataFactory = DefaultStandardFontDataFactory = r
                    }
                    function setPDFNetworkStreamFactory(e) {
                        createPDFNetworkStream = e
                    }
                    function getDocument(e) {
                        const t = new PDFDocumentLoadingTask;
                        let r;
                        if ("string" === typeof e || e instanceof URL)
                            r = {
                                url: e
                            };
                        else if ((0,
                        _util.isArrayBuffer)(e))
                            r = {
                                data: e
                            };
                        else if (e instanceof PDFDataRangeTransport)
                            r = {
                                range: e
                            };
                        else {
                            if ("object" !== typeof e)
                                throw new Error("Invalid parameter in getDocument, need either string, URL, TypedArray, or parameter object.");
                            if (!e.url && !e.data && !e.range)
                                throw new Error("Invalid parameter object: need either .data, .range or .url");
                            r = e
                        }
                        const n = Object.create(null);
                        let i = null
                          , s = null;
                        for (const l in r) {
                            const e = r[l];
                            switch (l) {
                            case "url":
                                if ("undefined" !== typeof window)
                                    try {
                                        n[l] = new URL(e,window.location).href;
                                        continue
                                    } catch (o) {
                                        (0,
                                        _util.warn)(`Cannot create valid URL: "${o}".`)
                                    }
                                else if ("string" === typeof e || e instanceof URL) {
                                    n[l] = e.toString();
                                    continue
                                }
                                throw new Error("Invalid PDF url data: either string or URL-object is expected in the url property.");
                            case "range":
                                i = e;
                                continue;
                            case "worker":
                                s = e;
                                continue;
                            case "data":
                                if (_is_node.isNodeJS && "undefined" !== typeof Buffer && e instanceof Buffer)
                                    n[l] = new Uint8Array(e);
                                else {
                                    if (e instanceof Uint8Array)
                                        break;
                                    if ("string" === typeof e)
                                        n[l] = (0,
                                        _util.stringToBytes)(e);
                                    else if ("object" !== typeof e || null === e || isNaN(e.length)) {
                                        if (!(0,
                                        _util.isArrayBuffer)(e))
                                            throw new Error("Invalid PDF binary data: either TypedArray, string, or array-like object is expected in the data property.");
                                        n[l] = new Uint8Array(e)
                                    } else
                                        n[l] = new Uint8Array(e)
                                }
                                continue
                            }
                            n[l] = e
                        }
                        if (n.CMapReaderFactory = n.CMapReaderFactory || DefaultCMapReaderFactory,
                        n.StandardFontDataFactory = n.StandardFontDataFactory || DefaultStandardFontDataFactory,
                        n.ignoreErrors = !0 !== n.stopAtErrors,
                        n.fontExtraProperties = !0 === n.fontExtraProperties,
                        n.pdfBug = !0 === n.pdfBug,
                        n.enableXfa = !0 === n.enableXfa,
                        (!Number.isInteger(n.rangeChunkSize) || n.rangeChunkSize < 1) && (n.rangeChunkSize = DEFAULT_RANGE_CHUNK_SIZE),
                        ("string" !== typeof n.docBaseUrl || (0,
                        _display_utils.isDataScheme)(n.docBaseUrl)) && (n.docBaseUrl = null),
                        (!Number.isInteger(n.maxImageSize) || n.maxImageSize < -1) && (n.maxImageSize = -1),
                        "string" !== typeof n.cMapUrl && (n.cMapUrl = null),
                        "string" !== typeof n.standardFontDataUrl && (n.standardFontDataUrl = null),
                        "boolean" !== typeof n.useWorkerFetch && (n.useWorkerFetch = n.CMapReaderFactory === _display_utils.DOMCMapReaderFactory && n.StandardFontDataFactory === _display_utils.DOMStandardFontDataFactory),
                        "boolean" !== typeof n.isEvalSupported && (n.isEvalSupported = !0),
                        "boolean" !== typeof n.disableFontFace && (n.disableFontFace = _is_node.isNodeJS),
                        "boolean" !== typeof n.useSystemFonts && (n.useSystemFonts = !_is_node.isNodeJS && !n.disableFontFace),
                        "object" === typeof n.ownerDocument && null !== n.ownerDocument || (n.ownerDocument = globalThis.document),
                        "boolean" !== typeof n.disableRange && (n.disableRange = !1),
                        "boolean" !== typeof n.disableStream && (n.disableStream = !1),
                        "boolean" !== typeof n.disableAutoFetch && (n.disableAutoFetch = !1),
                        (0,
                        _util.setVerbosityLevel)(n.verbosity),
                        !s) {
                            const e = {
                                verbosity: n.verbosity,
                                port: _worker_options.GlobalWorkerOptions.workerPort
                            };
                            s = e.port ? PDFWorker.fromPort(e) : new PDFWorker(e),
                            t._worker = s
                        }
                        const a = t.docId;
                        return s.promise.then((function() {
                            if (t.destroyed)
                                throw new Error("Loading aborted");
                            const e = _fetchDocument(s, n, i, a)
                              , r = new Promise((function(e) {
                                let t;
                                i ? t = new _transport_stream.PDFDataTransportStream({
                                    length: n.length,
                                    initialData: n.initialData,
                                    progressiveDone: n.progressiveDone,
                                    contentDispositionFilename: n.contentDispositionFilename,
                                    disableRange: n.disableRange,
                                    disableStream: n.disableStream
                                },i) : n.data || (t = createPDFNetworkStream({
                                    url: n.url,
                                    length: n.length,
                                    httpHeaders: n.httpHeaders,
                                    withCredentials: n.withCredentials,
                                    rangeChunkSize: n.rangeChunkSize,
                                    disableRange: n.disableRange,
                                    disableStream: n.disableStream
                                })),
                                e(t)
                            }
                            ));
                            return Promise.all([e, r]).then((function([e,r]) {
                                if (t.destroyed)
                                    throw new Error("Loading aborted");
                                const i = new _message_handler.MessageHandler(a,e,s.port)
                                  , o = new WorkerTransport(i,t,r,n);
                                t._transport = o,
                                i.send("Ready", null)
                            }
                            ))
                        }
                        )).catch(t._capability.reject),
                        t
                    }
                    async function _fetchDocument(e, t, r, n) {
                        if (e.destroyed)
                            throw new Error("Worker was destroyed");
                        r && (t.length = r.length,
                        t.initialData = r.initialData,
                        t.progressiveDone = r.progressiveDone,
                        t.contentDispositionFilename = r.contentDispositionFilename);
                        const i = await e.messageHandler.sendWithPromise("GetDocRequest", {
                            docId: n,
                            apiVersion: "2.16.105",
                            source: {
                                data: t.data,
                                url: t.url,
                                password: t.password,
                                disableAutoFetch: t.disableAutoFetch,
                                rangeChunkSize: t.rangeChunkSize,
                                length: t.length
                            },
                            maxImageSize: t.maxImageSize,
                            disableFontFace: t.disableFontFace,
                            docBaseUrl: t.docBaseUrl,
                            ignoreErrors: t.ignoreErrors,
                            isEvalSupported: t.isEvalSupported,
                            fontExtraProperties: t.fontExtraProperties,
                            enableXfa: t.enableXfa,
                            useSystemFonts: t.useSystemFonts,
                            cMapUrl: t.useWorkerFetch ? t.cMapUrl : null,
                            standardFontDataUrl: t.useWorkerFetch ? t.standardFontDataUrl : null
                        });
                        if (t.data && (t.data = null),
                        e.destroyed)
                            throw new Error("Worker was destroyed");
                        return i
                    }
                    class PDFDocumentLoadingTask {
                        static #e = 0;
                        constructor() {
                            this._capability = (0,
                            _util.createPromiseCapability)(),
                            this._transport = null,
                            this._worker = null,
                            this.docId = "d" + PDFDocumentLoadingTask.#e++,
                            this.destroyed = !1,
                            this.onPassword = null,
                            this.onProgress = null,
                            this.onUnsupportedFeature = null
                        }
                        get promise() {
                            return this._capability.promise
                        }
                        async destroy() {
                            this.destroyed = !0,
                            await (this._transport?.destroy()),
                            this._transport = null,
                            this._worker && (this._worker.destroy(),
                            this._worker = null)
                        }
                    }
                    exports.PDFDocumentLoadingTask = PDFDocumentLoadingTask;
                    class PDFDataRangeTransport {
                        constructor(e, t, r=!1, n=null) {
                            this.length = e,
                            this.initialData = t,
                            this.progressiveDone = r,
                            this.contentDispositionFilename = n,
                            this._rangeListeners = [],
                            this._progressListeners = [],
                            this._progressiveReadListeners = [],
                            this._progressiveDoneListeners = [],
                            this._readyCapability = (0,
                            _util.createPromiseCapability)()
                        }
                        addRangeListener(e) {
                            this._rangeListeners.push(e)
                        }
                        addProgressListener(e) {
                            this._progressListeners.push(e)
                        }
                        addProgressiveReadListener(e) {
                            this._progressiveReadListeners.push(e)
                        }
                        addProgressiveDoneListener(e) {
                            this._progressiveDoneListeners.push(e)
                        }
                        onDataRange(e, t) {
                            for (const r of this._rangeListeners)
                                r(e, t)
                        }
                        onDataProgress(e, t) {
                            this._readyCapability.promise.then(( () => {
                                for (const r of this._progressListeners)
                                    r(e, t)
                            }
                            ))
                        }
                        onDataProgressiveRead(e) {
                            this._readyCapability.promise.then(( () => {
                                for (const t of this._progressiveReadListeners)
                                    t(e)
                            }
                            ))
                        }
                        onDataProgressiveDone() {
                            this._readyCapability.promise.then(( () => {
                                for (const e of this._progressiveDoneListeners)
                                    e()
                            }
                            ))
                        }
                        transportReady() {
                            this._readyCapability.resolve()
                        }
                        requestDataRange(e, t) {
                            (0,
                            _util.unreachable)("Abstract method PDFDataRangeTransport.requestDataRange")
                        }
                        abort() {}
                    }
                    exports.PDFDataRangeTransport = PDFDataRangeTransport;
                    class PDFDocumentProxy {
                        constructor(e, t) {
                            this._pdfInfo = e,
                            this._transport = t,
                            Object.defineProperty(this, "fingerprint", {
                                get() {
                                    return (0,
                                    _display_utils.deprecated)("`PDFDocumentProxy.fingerprint`, please use `PDFDocumentProxy.fingerprints` instead."),
                                    this.fingerprints[0]
                                }
                            }),
                            Object.defineProperty(this, "getStats", {
                                value: async () => ((0,
                                _display_utils.deprecated)("`PDFDocumentProxy.getStats`, please use the `PDFDocumentProxy.stats`-getter instead."),
                                this.stats || {
                                    streamTypes: {},
                                    fontTypes: {}
                                })
                            })
                        }
                        get annotationStorage() {
                            return this._transport.annotationStorage
                        }
                        get numPages() {
                            return this._pdfInfo.numPages
                        }
                        get fingerprints() {
                            return this._pdfInfo.fingerprints
                        }
                        get stats() {
                            return this._transport.stats
                        }
                        get isPureXfa() {
                            return !!this._transport._htmlForXfa
                        }
                        get allXfaHtml() {
                            return this._transport._htmlForXfa
                        }
                        getPage(e) {
                            return this._transport.getPage(e)
                        }
                        getPageIndex(e) {
                            return this._transport.getPageIndex(e)
                        }
                        getDestinations() {
                            return this._transport.getDestinations()
                        }
                        getDestination(e) {
                            return this._transport.getDestination(e)
                        }
                        getPageLabels() {
                            return this._transport.getPageLabels()
                        }
                        getPageLayout() {
                            return this._transport.getPageLayout()
                        }
                        getPageMode() {
                            return this._transport.getPageMode()
                        }
                        getViewerPreferences() {
                            return this._transport.getViewerPreferences()
                        }
                        getOpenAction() {
                            return this._transport.getOpenAction()
                        }
                        getAttachments() {
                            return this._transport.getAttachments()
                        }
                        getJavaScript() {
                            return this._transport.getJavaScript()
                        }
                        getJSActions() {
                            return this._transport.getDocJSActions()
                        }
                        getOutline() {
                            return this._transport.getOutline()
                        }
                        getOptionalContentConfig() {
                            return this._transport.getOptionalContentConfig()
                        }
                        getPermissions() {
                            return this._transport.getPermissions()
                        }
                        getMetadata() {
                            return this._transport.getMetadata()
                        }
                        getMarkInfo() {
                            return this._transport.getMarkInfo()
                        }
                        getData() {
                            return this._transport.getData()
                        }
                        getDownloadInfo() {
                            return this._transport.downloadInfoCapability.promise
                        }
                        cleanup(e=!1) {
                            return this._transport.startCleanup(e || this.isPureXfa)
                        }
                        destroy() {
                            return this.loadingTask.destroy()
                        }
                        get loadingParams() {
                            return this._transport.loadingParams
                        }
                        get loadingTask() {
                            return this._transport.loadingTask
                        }
                        saveDocument() {
                            return this._transport.annotationStorage.size <= 0 && (0,
                            _display_utils.deprecated)("saveDocument called while `annotationStorage` is empty, please use the getData-method instead."),
                            this._transport.saveDocument()
                        }
                        getFieldObjects() {
                            return this._transport.getFieldObjects()
                        }
                        hasJSActions() {
                            return this._transport.hasJSActions()
                        }
                        getCalculationOrderIds() {
                            return this._transport.getCalculationOrderIds()
                        }
                    }
                    exports.PDFDocumentProxy = PDFDocumentProxy;
                    class PDFPageProxy {
                        constructor(e, t, r, n, i=!1) {
                            this._pageIndex = e,
                            this._pageInfo = t,
                            this._ownerDocument = n,
                            this._transport = r,
                            this._stats = i ? new _display_utils.StatTimer : null,
                            this._pdfBug = i,
                            this.commonObjs = r.commonObjs,
                            this.objs = new PDFObjects,
                            this._bitmaps = new Set,
                            this.cleanupAfterRender = !1,
                            this.pendingCleanup = !1,
                            this._intentStates = new Map,
                            this._annotationPromises = new Map,
                            this.destroyed = !1
                        }
                        get pageNumber() {
                            return this._pageIndex + 1
                        }
                        get rotate() {
                            return this._pageInfo.rotate
                        }
                        get ref() {
                            return this._pageInfo.ref
                        }
                        get userUnit() {
                            return this._pageInfo.userUnit
                        }
                        get view() {
                            return this._pageInfo.view
                        }
                        getViewport({scale: e, rotation: t=this.rotate, offsetX: r=0, offsetY: n=0, dontFlip: i=!1}={}) {
                            return new _display_utils.PageViewport({
                                viewBox: this.view,
                                scale: e,
                                rotation: t,
                                offsetX: r,
                                offsetY: n,
                                dontFlip: i
                            })
                        }
                        getAnnotations({intent: e="display"}={}) {
                            const t = this._transport.getRenderingIntent(e);
                            let r = this._annotationPromises.get(t.cacheKey);
                            return r || (r = this._transport.getAnnotations(this._pageIndex, t.renderingIntent),
                            this._annotationPromises.set(t.cacheKey, r),
                            r = r.then((e => {
                                for (const t of e)
                                    void 0 !== t.titleObj && Object.defineProperty(t, "title", {
                                        get: () => ((0,
                                        _display_utils.deprecated)("`title`-property on annotation, please use `titleObj` instead."),
                                        t.titleObj.str)
                                    }),
                                    void 0 !== t.contentsObj && Object.defineProperty(t, "contents", {
                                        get: () => ((0,
                                        _display_utils.deprecated)("`contents`-property on annotation, please use `contentsObj` instead."),
                                        t.contentsObj.str)
                                    });
                                return e
                            }
                            ))),
                            r
                        }
                        getJSActions() {
                            return this._jsActionsPromise ||= this._transport.getPageJSActions(this._pageIndex)
                        }
                        async getXfa() {
                            return this._transport._htmlForXfa?.children[this._pageIndex] || null
                        }
                        render({canvasContext: e, viewport: t, intent: r="display", annotationMode: n=_util.AnnotationMode.ENABLE, transform: i=null, imageLayer: s=null, canvasFactory: a=null, background: o=null, optionalContentConfigPromise: l=null, annotationCanvasMap: c=null, pageColors: h=null, printAnnotationStorage: d=null}) {
                            void 0 !== arguments[0]?.renderInteractiveForms && ((0,
                            _display_utils.deprecated)("render no longer accepts the `renderInteractiveForms`-option, please use the `annotationMode`-option instead."),
                            !0 === arguments[0].renderInteractiveForms && n === _util.AnnotationMode.ENABLE && (n = _util.AnnotationMode.ENABLE_FORMS)),
                            void 0 !== arguments[0]?.includeAnnotationStorage && ((0,
                            _display_utils.deprecated)("render no longer accepts the `includeAnnotationStorage`-option, please use the `annotationMode`-option instead."),
                            !0 === arguments[0].includeAnnotationStorage && n === _util.AnnotationMode.ENABLE && (n = _util.AnnotationMode.ENABLE_STORAGE)),
                            this._stats && this._stats.time("Overall");
                            const u = this._transport.getRenderingIntent(r, n, d);
                            this.pendingCleanup = !1,
                            l || (l = this._transport.getOptionalContentConfig());
                            let f = this._intentStates.get(u.cacheKey);
                            f || (f = Object.create(null),
                            this._intentStates.set(u.cacheKey, f)),
                            f.streamReaderCancelTimeout && (clearTimeout(f.streamReaderCancelTimeout),
                            f.streamReaderCancelTimeout = null);
                            const p = a || new DefaultCanvasFactory({
                                ownerDocument: this._ownerDocument
                            })
                              , g = !!(u.renderingIntent & _util.RenderingIntentFlag.PRINT);
                            f.displayReadyCapability || (f.displayReadyCapability = (0,
                            _util.createPromiseCapability)(),
                            f.operatorList = {
                                fnArray: [],
                                argsArray: [],
                                lastChunk: !1,
                                separateAnnots: null
                            },
                            this._stats && this._stats.time("Page Request"),
                            this._pumpOperatorList(u));
                            const _ = e => {
                                f.renderTasks.delete(m),
                                (this.cleanupAfterRender || g) && (this.pendingCleanup = !0),
                                this._tryCleanup(),
                                e ? (m.capability.reject(e),
                                this._abortOperatorList({
                                    intentState: f,
                                    reason: e instanceof Error ? e : new Error(e)
                                })) : m.capability.resolve(),
                                this._stats && (this._stats.timeEnd("Rendering"),
                                this._stats.timeEnd("Overall"))
                            }
                              , m = new InternalRenderTask({
                                callback: _,
                                params: {
                                    canvasContext: e,
                                    viewport: t,
                                    transform: i,
                                    imageLayer: s,
                                    background: o
                                },
                                objs: this.objs,
                                commonObjs: this.commonObjs,
                                annotationCanvasMap: c,
                                operatorList: f.operatorList,
                                pageIndex: this._pageIndex,
                                canvasFactory: p,
                                useRequestAnimationFrame: !g,
                                pdfBug: this._pdfBug,
                                pageColors: h
                            });
                            (f.renderTasks ||= new Set).add(m);
                            const b = m.task;
                            return Promise.all([f.displayReadyCapability.promise, l]).then(( ([e,t]) => {
                                this.pendingCleanup ? _() : (this._stats && this._stats.time("Rendering"),
                                m.initializeGraphics({
                                    transparency: e,
                                    optionalContentConfig: t
                                }),
                                m.operatorListChanged())
                            }
                            )).catch(_),
                            b
                        }
                        getOperatorList({intent: e="display", annotationMode: t=_util.AnnotationMode.ENABLE, printAnnotationStorage: r=null}={}) {
                            const n = this._transport.getRenderingIntent(e, t, r, !0);
                            let i, s = this._intentStates.get(n.cacheKey);
                            return s || (s = Object.create(null),
                            this._intentStates.set(n.cacheKey, s)),
                            s.opListReadCapability || (i = Object.create(null),
                            i.operatorListChanged = function() {
                                s.operatorList.lastChunk && (s.opListReadCapability.resolve(s.operatorList),
                                s.renderTasks.delete(i))
                            }
                            ,
                            s.opListReadCapability = (0,
                            _util.createPromiseCapability)(),
                            (s.renderTasks ||= new Set).add(i),
                            s.operatorList = {
                                fnArray: [],
                                argsArray: [],
                                lastChunk: !1,
                                separateAnnots: null
                            },
                            this._stats && this._stats.time("Page Request"),
                            this._pumpOperatorList(n)),
                            s.opListReadCapability.promise
                        }
                        streamTextContent({disableCombineTextItems: e=!1, includeMarkedContent: t=!1}={}) {
                            return this._transport.messageHandler.sendWithStream("GetTextContent", {
                                pageIndex: this._pageIndex,
                                combineTextItems: !0 !== e,
                                includeMarkedContent: !0 === t
                            }, {
                                highWaterMark: 100,
                                size: e => e.items.length
                            })
                        }
                        getTextContent(e={}) {
                            if (this._transport._htmlForXfa)
                                return this.getXfa().then((e => _xfa_text.XfaText.textContent(e)));
                            const t = this.streamTextContent(e);
                            return new Promise((function(e, r) {
                                const n = t.getReader()
                                  , i = {
                                    items: [],
                                    styles: Object.create(null)
                                };
                                !function t() {
                                    n.read().then((function({value: r, done: n}) {
                                        n ? e(i) : (Object.assign(i.styles, r.styles),
                                        i.items.push(...r.items),
                                        t())
                                    }
                                    ), r)
                                }()
                            }
                            ))
                        }
                        getStructTree() {
                            return this._structTreePromise ||= this._transport.getStructTree(this._pageIndex)
                        }
                        _destroy() {
                            this.destroyed = !0;
                            const e = [];
                            for (const t of this._intentStates.values())
                                if (this._abortOperatorList({
                                    intentState: t,
                                    reason: new Error("Page was destroyed."),
                                    force: !0
                                }),
                                !t.opListReadCapability)
                                    for (const r of t.renderTasks)
                                        e.push(r.completed),
                                        r.cancel();
                            this.objs.clear();
                            for (const t of this._bitmaps)
                                t.close();
                            return this._bitmaps.clear(),
                            this._annotationPromises.clear(),
                            this._jsActionsPromise = null,
                            this._structTreePromise = null,
                            this.pendingCleanup = !1,
                            Promise.all(e)
                        }
                        cleanup(e=!1) {
                            return this.pendingCleanup = !0,
                            this._tryCleanup(e)
                        }
                        _tryCleanup(e=!1) {
                            if (!this.pendingCleanup)
                                return !1;
                            for (const {renderTasks: t, operatorList: r} of this._intentStates.values())
                                if (t.size > 0 || !r.lastChunk)
                                    return !1;
                            this._intentStates.clear(),
                            this.objs.clear(),
                            this._annotationPromises.clear(),
                            this._jsActionsPromise = null,
                            this._structTreePromise = null,
                            e && this._stats && (this._stats = new _display_utils.StatTimer);
                            for (const t of this._bitmaps)
                                t.close();
                            return this._bitmaps.clear(),
                            this.pendingCleanup = !1,
                            !0
                        }
                        _startRenderPage(e, t) {
                            const r = this._intentStates.get(t);
                            r && (this._stats && this._stats.timeEnd("Page Request"),
                            r.displayReadyCapability && r.displayReadyCapability.resolve(e))
                        }
                        _renderPageChunk(e, t) {
                            for (let r = 0, n = e.length; r < n; r++)
                                t.operatorList.fnArray.push(e.fnArray[r]),
                                t.operatorList.argsArray.push(e.argsArray[r]);
                            t.operatorList.lastChunk = e.lastChunk,
                            t.operatorList.separateAnnots = e.separateAnnots;
                            for (const r of t.renderTasks)
                                r.operatorListChanged();
                            e.lastChunk && this._tryCleanup()
                        }
                        _pumpOperatorList({renderingIntent: e, cacheKey: t, annotationStorageMap: r}) {
                            const n = this._transport.messageHandler.sendWithStream("GetOperatorList", {
                                pageIndex: this._pageIndex,
                                intent: e,
                                cacheKey: t,
                                annotationStorage: r
                            }).getReader()
                              , i = this._intentStates.get(t);
                            i.streamReader = n;
                            const s = () => {
                                n.read().then(( ({value: e, done: t}) => {
                                    t ? i.streamReader = null : this._transport.destroyed || (this._renderPageChunk(e, i),
                                    s())
                                }
                                ), (e => {
                                    if (i.streamReader = null,
                                    !this._transport.destroyed) {
                                        if (i.operatorList) {
                                            i.operatorList.lastChunk = !0;
                                            for (const e of i.renderTasks)
                                                e.operatorListChanged();
                                            this._tryCleanup()
                                        }
                                        if (i.displayReadyCapability)
                                            i.displayReadyCapability.reject(e);
                                        else {
                                            if (!i.opListReadCapability)
                                                throw e;
                                            i.opListReadCapability.reject(e)
                                        }
                                    }
                                }
                                ))
                            }
                            ;
                            s()
                        }
                        _abortOperatorList({intentState: e, reason: t, force: r=!1}) {
                            if (e.streamReader) {
                                if (!r) {
                                    if (e.renderTasks.size > 0)
                                        return;
                                    if (t instanceof _display_utils.RenderingCancelledException)
                                        return void (e.streamReaderCancelTimeout = setTimeout(( () => {
                                            this._abortOperatorList({
                                                intentState: e,
                                                reason: t,
                                                force: !0
                                            }),
                                            e.streamReaderCancelTimeout = null
                                        }
                                        ), RENDERING_CANCELLED_TIMEOUT))
                                }
                                if (e.streamReader.cancel(new _util.AbortException(t.message)).catch(( () => {}
                                )),
                                e.streamReader = null,
                                !this._transport.destroyed) {
                                    for (const [t,r] of this._intentStates)
                                        if (r === e) {
                                            this._intentStates.delete(t);
                                            break
                                        }
                                    this.cleanup()
                                }
                            }
                        }
                        get stats() {
                            return this._stats
                        }
                    }
                    exports.PDFPageProxy = PDFPageProxy;
                    class LoopbackPort {
                        constructor() {
                            this._listeners = [],
                            this._deferred = Promise.resolve()
                        }
                        postMessage(e, t) {
                            const r = {
                                data: structuredClone(e, t)
                            };
                            this._deferred.then(( () => {
                                for (const e of this._listeners)
                                    e.call(this, r)
                            }
                            ))
                        }
                        addEventListener(e, t) {
                            this._listeners.push(t)
                        }
                        removeEventListener(e, t) {
                            const r = this._listeners.indexOf(t);
                            this._listeners.splice(r, 1)
                        }
                        terminate() {
                            this._listeners.length = 0
                        }
                    }
                    exports.LoopbackPort = LoopbackPort;
                    const PDFWorkerUtil = {
                        isWorkerDisabled: !1,
                        fallbackWorkerSrc: null,
                        fakeWorkerId: 0
                    };
                    if (exports.PDFWorkerUtil = PDFWorkerUtil,
                    _is_node.isNodeJS && "function" === typeof commonjsRequire)
                        PDFWorkerUtil.isWorkerDisabled = !0,
                        PDFWorkerUtil.fallbackWorkerSrc = "./pdf.worker.js";
                    else if ("object" === typeof document) {
                        const e = document?.currentScript?.src;
                        e && (PDFWorkerUtil.fallbackWorkerSrc = e.replace(/(\.(?:min\.)?js)(\?.*)?$/i, ".worker$1$2"))
                    }
                    PDFWorkerUtil.isSameOrigin = function(e, t) {
                        let r;
                        try {
                            if (r = new URL(e),
                            !r.origin || "null" === r.origin)
                                return !1
                        } catch (i) {
                            return !1
                        }
                        const n = new URL(t,r);
                        return r.origin === n.origin
                    }
                    ,
                    PDFWorkerUtil.createCDNWrapper = function(e) {
                        const t = `importScripts("${e}");`;
                        return URL.createObjectURL(new Blob([t]))
                    }
                    ;
                    class PDFWorker {
                        static #t = new WeakMap;
                        constructor({name: e=null, port: t=null, verbosity: r=(0,
                        _util.getVerbosityLevel)()}={}) {
                            if (t && PDFWorker.#t.has(t))
                                throw new Error("Cannot use more than one PDFWorker per port.");
                            if (this.name = e,
                            this.destroyed = !1,
                            this.verbosity = r,
                            this._readyCapability = (0,
                            _util.createPromiseCapability)(),
                            this._port = null,
                            this._webWorker = null,
                            this._messageHandler = null,
                            t)
                                return PDFWorker.#t.set(t, this),
                                void this._initializeFromPort(t);
                            this._initialize()
                        }
                        get promise() {
                            return this._readyCapability.promise
                        }
                        get port() {
                            return this._port
                        }
                        get messageHandler() {
                            return this._messageHandler
                        }
                        _initializeFromPort(e) {
                            this._port = e,
                            this._messageHandler = new _message_handler.MessageHandler("main","worker",e),
                            this._messageHandler.on("ready", (function() {}
                            )),
                            this._readyCapability.resolve()
                        }
                        _initialize() {
                            if (!PDFWorkerUtil.isWorkerDisabled && !PDFWorker._mainThreadWorkerMessageHandler) {
                                let {workerSrc: t} = PDFWorker;
                                try {
                                    PDFWorkerUtil.isSameOrigin(window.location.href, t) || (t = PDFWorkerUtil.createCDNWrapper(new URL(t,window.location).href));
                                    const e = new Worker(t)
                                      , r = new _message_handler.MessageHandler("main","worker",e)
                                      , n = () => {
                                        e.removeEventListener("error", i),
                                        r.destroy(),
                                        e.terminate(),
                                        this.destroyed ? this._readyCapability.reject(new Error("Worker was destroyed")) : this._setupFakeWorker()
                                    }
                                      , i = () => {
                                        this._webWorker || n()
                                    }
                                    ;
                                    e.addEventListener("error", i),
                                    r.on("test", (t => {
                                        e.removeEventListener("error", i),
                                        this.destroyed ? n() : t ? (this._messageHandler = r,
                                        this._port = e,
                                        this._webWorker = e,
                                        this._readyCapability.resolve(),
                                        r.send("configure", {
                                            verbosity: this.verbosity
                                        })) : (this._setupFakeWorker(),
                                        r.destroy(),
                                        e.terminate())
                                    }
                                    )),
                                    r.on("ready", (t => {
                                        if (e.removeEventListener("error", i),
                                        this.destroyed)
                                            n();
                                        else
                                            try {
                                                s()
                                            } catch (r) {
                                                this._setupFakeWorker()
                                            }
                                    }
                                    ));
                                    const s = () => {
                                        const e = new Uint8Array;
                                        r.send("test", e, [e.buffer])
                                    }
                                    ;
                                    return void s()
                                } catch (e) {
                                    (0,
                                    _util.info)("The worker has been disabled.")
                                }
                            }
                            this._setupFakeWorker()
                        }
                        _setupFakeWorker() {
                            PDFWorkerUtil.isWorkerDisabled || ((0,
                            _util.warn)("Setting up fake worker."),
                            PDFWorkerUtil.isWorkerDisabled = !0),
                            PDFWorker._setupFakeWorkerGlobal.then((e => {
                                if (this.destroyed)
                                    return void this._readyCapability.reject(new Error("Worker was destroyed"));
                                const t = new LoopbackPort;
                                this._port = t;
                                const r = "fake" + PDFWorkerUtil.fakeWorkerId++
                                  , n = new _message_handler.MessageHandler(r + "_worker",r,t);
                                e.setup(n, t);
                                const i = new _message_handler.MessageHandler(r,r + "_worker",t);
                                this._messageHandler = i,
                                this._readyCapability.resolve(),
                                i.send("configure", {
                                    verbosity: this.verbosity
                                })
                            }
                            )).catch((e => {
                                this._readyCapability.reject(new Error(`Setting up fake worker failed: "${e.message}".`))
                            }
                            ))
                        }
                        destroy() {
                            this.destroyed = !0,
                            this._webWorker && (this._webWorker.terminate(),
                            this._webWorker = null),
                            PDFWorker.#t.delete(this._port),
                            this._port = null,
                            this._messageHandler && (this._messageHandler.destroy(),
                            this._messageHandler = null)
                        }
                        static fromPort(e) {
                            if (!e?.port)
                                throw new Error("PDFWorker.fromPort - invalid method signature.");
                            return this.#t.has(e.port) ? this.#t.get(e.port) : new PDFWorker(e)
                        }
                        static get workerSrc() {
                            if (_worker_options.GlobalWorkerOptions.workerSrc)
                                return _worker_options.GlobalWorkerOptions.workerSrc;
                            if (null !== PDFWorkerUtil.fallbackWorkerSrc)
                                return _is_node.isNodeJS || (0,
                                _display_utils.deprecated)('No "GlobalWorkerOptions.workerSrc" specified.'),
                                PDFWorkerUtil.fallbackWorkerSrc;
                            throw new Error('No "GlobalWorkerOptions.workerSrc" specified.')
                        }
                        static get _mainThreadWorkerMessageHandler() {
                            try {
                                return globalThis.pdfjsWorker?.WorkerMessageHandler || null
                            } catch (e) {
                                return null
                            }
                        }
                        static get _setupFakeWorkerGlobal() {
                            const loader = async () => {
                                const mainWorkerMessageHandler = this._mainThreadWorkerMessageHandler;
                                if (mainWorkerMessageHandler)
                                    return mainWorkerMessageHandler;
                                if (_is_node.isNodeJS && "function" === typeof commonjsRequire) {
                                    const worker = eval("require")(this.workerSrc);
                                    return worker.WorkerMessageHandler
                                }
                                return await (0,
                                _display_utils.loadScript)(this.workerSrc),
                                window.pdfjsWorker.WorkerMessageHandler
                            }
                            ;
                            return (0,
                            _util.shadow)(this, "_setupFakeWorkerGlobal", loader())
                        }
                    }
                    exports.PDFWorker = PDFWorker,
                    PDFWorker.getWorkerSrc = function() {
                        return (0,
                        _display_utils.deprecated)("`PDFWorker.getWorkerSrc()`, please use `PDFWorker.workerSrc` instead."),
                        this.workerSrc
                    }
                    ;
                    class WorkerTransport {
                        #r = null;
                        #n = new Map;
                        #i = new Map;
                        #s = null;
                        constructor(e, t, r, n) {
                            this.messageHandler = e,
                            this.loadingTask = t,
                            this.commonObjs = new PDFObjects,
                            this.fontLoader = new _font_loader.FontLoader({
                                docId: t.docId,
                                onUnsupportedFeature: this._onUnsupportedFeature.bind(this),
                                ownerDocument: n.ownerDocument,
                                styleElement: n.styleElement
                            }),
                            this._params = n,
                            n.useWorkerFetch || (this.CMapReaderFactory = new n.CMapReaderFactory({
                                baseUrl: n.cMapUrl,
                                isCompressed: n.cMapPacked
                            }),
                            this.StandardFontDataFactory = new n.StandardFontDataFactory({
                                baseUrl: n.standardFontDataUrl
                            })),
                            this.destroyed = !1,
                            this.destroyCapability = null,
                            this._passwordCapability = null,
                            this._networkStream = r,
                            this._fullReader = null,
                            this._lastProgress = null,
                            this.downloadInfoCapability = (0,
                            _util.createPromiseCapability)(),
                            this.setupMessageHandler()
                        }
                        get annotationStorage() {
                            return (0,
                            _util.shadow)(this, "annotationStorage", new _annotation_storage.AnnotationStorage)
                        }
                        get stats() {
                            return this.#r
                        }
                        getRenderingIntent(e, t=_util.AnnotationMode.ENABLE, r=null, n=!1) {
                            let i = _util.RenderingIntentFlag.DISPLAY
                              , s = null;
                            switch (e) {
                            case "any":
                                i = _util.RenderingIntentFlag.ANY;
                                break;
                            case "display":
                                break;
                            case "print":
                                i = _util.RenderingIntentFlag.PRINT;
                                break;
                            default:
                                (0,
                                _util.warn)(`getRenderingIntent - invalid intent: ${e}`)
                            }
                            switch (t) {
                            case _util.AnnotationMode.DISABLE:
                                i += _util.RenderingIntentFlag.ANNOTATIONS_DISABLE;
                                break;
                            case _util.AnnotationMode.ENABLE:
                                break;
                            case _util.AnnotationMode.ENABLE_FORMS:
                                i += _util.RenderingIntentFlag.ANNOTATIONS_FORMS;
                                break;
                            case _util.AnnotationMode.ENABLE_STORAGE:
                                i += _util.RenderingIntentFlag.ANNOTATIONS_STORAGE,
                                s = (i & _util.RenderingIntentFlag.PRINT && r instanceof _annotation_storage.PrintAnnotationStorage ? r : this.annotationStorage).serializable;
                                break;
                            default:
                                (0,
                                _util.warn)(`getRenderingIntent - invalid annotationMode: ${t}`)
                            }
                            return n && (i += _util.RenderingIntentFlag.OPLIST),
                            {
                                renderingIntent: i,
                                cacheKey: `${i}_${_annotation_storage.AnnotationStorage.getHash(s)}`,
                                annotationStorageMap: s
                            }
                        }
                        destroy() {
                            if (this.destroyCapability)
                                return this.destroyCapability.promise;
                            this.destroyed = !0,
                            this.destroyCapability = (0,
                            _util.createPromiseCapability)(),
                            this._passwordCapability && this._passwordCapability.reject(new Error("Worker was destroyed during onPassword callback"));
                            const e = [];
                            for (const r of this.#n.values())
                                e.push(r._destroy());
                            this.#n.clear(),
                            this.#i.clear(),
                            this.hasOwnProperty("annotationStorage") && this.annotationStorage.resetModified();
                            const t = this.messageHandler.sendWithPromise("Terminate", null);
                            return e.push(t),
                            Promise.all(e).then(( () => {
                                this.commonObjs.clear(),
                                this.fontLoader.clear(),
                                this.#s = null,
                                this._getFieldObjectsPromise = null,
                                this._hasJSActionsPromise = null,
                                this._networkStream && this._networkStream.cancelAllRequests(new _util.AbortException("Worker was terminated.")),
                                this.messageHandler && (this.messageHandler.destroy(),
                                this.messageHandler = null),
                                this.destroyCapability.resolve()
                            }
                            ), this.destroyCapability.reject),
                            this.destroyCapability.promise
                        }
                        setupMessageHandler() {
                            const {messageHandler: e, loadingTask: t} = this;
                            e.on("GetReader", ( (e, t) => {
                                (0,
                                _util.assert)(this._networkStream, "GetReader - no `IPDFStream` instance available."),
                                this._fullReader = this._networkStream.getFullReader(),
                                this._fullReader.onProgress = e => {
                                    this._lastProgress = {
                                        loaded: e.loaded,
                                        total: e.total
                                    }
                                }
                                ,
                                t.onPull = () => {
                                    this._fullReader.read().then((function({value: e, done: r}) {
                                        r ? t.close() : ((0,
                                        _util.assert)((0,
                                        _util.isArrayBuffer)(e), "GetReader - expected an ArrayBuffer."),
                                        t.enqueue(new Uint8Array(e), 1, [e]))
                                    }
                                    )).catch((e => {
                                        t.error(e)
                                    }
                                    ))
                                }
                                ,
                                t.onCancel = e => {
                                    this._fullReader.cancel(e),
                                    t.ready.catch((e => {
                                        if (!this.destroyed)
                                            throw e
                                    }
                                    ))
                                }
                            }
                            )),
                            e.on("ReaderHeadersReady", (e => {
                                const r = (0,
                                _util.createPromiseCapability)()
                                  , n = this._fullReader;
                                return n.headersReady.then(( () => {
                                    n.isStreamingSupported && n.isRangeSupported || (this._lastProgress && t.onProgress?.(this._lastProgress),
                                    n.onProgress = e => {
                                        t.onProgress?.({
                                            loaded: e.loaded,
                                            total: e.total
                                        })
                                    }
                                    ),
                                    r.resolve({
                                        isStreamingSupported: n.isStreamingSupported,
                                        isRangeSupported: n.isRangeSupported,
                                        contentLength: n.contentLength
                                    })
                                }
                                ), r.reject),
                                r.promise
                            }
                            )),
                            e.on("GetRangeReader", ( (e, t) => {
                                (0,
                                _util.assert)(this._networkStream, "GetRangeReader - no `IPDFStream` instance available.");
                                const r = this._networkStream.getRangeReader(e.begin, e.end);
                                r ? (t.onPull = () => {
                                    r.read().then((function({value: e, done: r}) {
                                        r ? t.close() : ((0,
                                        _util.assert)((0,
                                        _util.isArrayBuffer)(e), "GetRangeReader - expected an ArrayBuffer."),
                                        t.enqueue(new Uint8Array(e), 1, [e]))
                                    }
                                    )).catch((e => {
                                        t.error(e)
                                    }
                                    ))
                                }
                                ,
                                t.onCancel = e => {
                                    r.cancel(e),
                                    t.ready.catch((e => {
                                        if (!this.destroyed)
                                            throw e
                                    }
                                    ))
                                }
                                ) : t.close()
                            }
                            )),
                            e.on("GetDoc", ( ({pdfInfo: e}) => {
                                this._numPages = e.numPages,
                                this._htmlForXfa = e.htmlForXfa,
                                delete e.htmlForXfa,
                                t._capability.resolve(new PDFDocumentProxy(e,this))
                            }
                            )),
                            e.on("DocException", (function(e) {
                                let r;
                                switch (e.name) {
                                case "PasswordException":
                                    r = new _util.PasswordException(e.message,e.code);
                                    break;
                                case "InvalidPDFException":
                                    r = new _util.InvalidPDFException(e.message);
                                    break;
                                case "MissingPDFException":
                                    r = new _util.MissingPDFException(e.message);
                                    break;
                                case "UnexpectedResponseException":
                                    r = new _util.UnexpectedResponseException(e.message,e.status);
                                    break;
                                case "UnknownErrorException":
                                    r = new _util.UnknownErrorException(e.message,e.details);
                                    break;
                                default:
                                    (0,
                                    _util.unreachable)("DocException - expected a valid Error.")
                                }
                                t._capability.reject(r)
                            }
                            )),
                            e.on("PasswordRequest", (e => {
                                if (this._passwordCapability = (0,
                                _util.createPromiseCapability)(),
                                t.onPassword) {
                                    const n = e => {
                                        e instanceof Error ? this._passwordCapability.reject(e) : this._passwordCapability.resolve({
                                            password: e
                                        })
                                    }
                                    ;
                                    try {
                                        t.onPassword(n, e.code)
                                    } catch (r) {
                                        this._passwordCapability.reject(r)
                                    }
                                } else
                                    this._passwordCapability.reject(new _util.PasswordException(e.message,e.code));
                                return this._passwordCapability.promise
                            }
                            )),
                            e.on("DataLoaded", (e => {
                                t.onProgress?.({
                                    loaded: e.length,
                                    total: e.length
                                }),
                                this.downloadInfoCapability.resolve(e)
                            }
                            )),
                            e.on("StartRenderPage", (e => {
                                this.destroyed || this.#n.get(e.pageIndex)._startRenderPage(e.transparency, e.cacheKey)
                            }
                            )),
                            e.on("commonobj", ( ([t,r,n]) => {
                                if (!this.destroyed && !this.commonObjs.has(t))
                                    switch (r) {
                                    case "Font":
                                        const i = this._params;
                                        if ("error"in n) {
                                            const e = n.error;
                                            (0,
                                            _util.warn)(`Error during font loading: ${e}`),
                                            this.commonObjs.resolve(t, e);
                                            break
                                        }
                                        let s = null;
                                        i.pdfBug && globalThis.FontInspector?.enabled && (s = {
                                            registerFont(e, t) {
                                                globalThis.FontInspector.fontAdded(e, t)
                                            }
                                        });
                                        const a = new _font_loader.FontFaceObject(n,{
                                            isEvalSupported: i.isEvalSupported,
                                            disableFontFace: i.disableFontFace,
                                            ignoreErrors: i.ignoreErrors,
                                            onUnsupportedFeature: this._onUnsupportedFeature.bind(this),
                                            fontRegistry: s
                                        });
                                        this.fontLoader.bind(a).catch((r => e.sendWithPromise("FontFallback", {
                                            id: t
                                        }))).finally(( () => {
                                            !i.fontExtraProperties && a.data && (a.data = null),
                                            this.commonObjs.resolve(t, a)
                                        }
                                        ));
                                        break;
                                    case "FontPath":
                                    case "Image":
                                        this.commonObjs.resolve(t, n);
                                        break;
                                    default:
                                        throw new Error(`Got unknown common object type ${r}`)
                                    }
                            }
                            )),
                            e.on("obj", ( ([e,t,r,n]) => {
                                if (this.destroyed)
                                    return;
                                const i = this.#n.get(t);
                                if (!i.objs.has(e))
                                    switch (r) {
                                    case "Image":
                                        i.objs.resolve(e, n);
                                        const t = 8e6;
                                        if (n) {
                                            let e;
                                            if (n.bitmap) {
                                                const {bitmap: t, width: r, height: s} = n;
                                                e = r * s * 4,
                                                i._bitmaps.add(t)
                                            } else
                                                e = n.data?.length || 0;
                                            e > t && (i.cleanupAfterRender = !0)
                                        }
                                        break;
                                    case "Pattern":
                                        i.objs.resolve(e, n);
                                        break;
                                    default:
                                        throw new Error(`Got unknown object type ${r}`)
                                    }
                            }
                            )),
                            e.on("DocProgress", (e => {
                                this.destroyed || t.onProgress?.({
                                    loaded: e.loaded,
                                    total: e.total
                                })
                            }
                            )),
                            e.on("DocStats", (e => {
                                this.destroyed || (this.#r = Object.freeze({
                                    streamTypes: Object.freeze(e.streamTypes),
                                    fontTypes: Object.freeze(e.fontTypes)
                                }))
                            }
                            )),
                            e.on("UnsupportedFeature", this._onUnsupportedFeature.bind(this)),
                            e.on("FetchBuiltInCMap", (e => this.destroyed ? Promise.reject(new Error("Worker was destroyed.")) : this.CMapReaderFactory ? this.CMapReaderFactory.fetch(e) : Promise.reject(new Error("CMapReaderFactory not initialized, see the `useWorkerFetch` parameter.")))),
                            e.on("FetchStandardFontData", (e => this.destroyed ? Promise.reject(new Error("Worker was destroyed.")) : this.StandardFontDataFactory ? this.StandardFontDataFactory.fetch(e) : Promise.reject(new Error("StandardFontDataFactory not initialized, see the `useWorkerFetch` parameter."))))
                        }
                        _onUnsupportedFeature({featureId: e}) {
                            this.destroyed || this.loadingTask.onUnsupportedFeature?.(e)
                        }
                        getData() {
                            return this.messageHandler.sendWithPromise("GetData", null)
                        }
                        getPage(e) {
                            if (!Number.isInteger(e) || e <= 0 || e > this._numPages)
                                return Promise.reject(new Error("Invalid page request."));
                            const t = e - 1
                              , r = this.#i.get(t);
                            if (r)
                                return r;
                            const n = this.messageHandler.sendWithPromise("GetPage", {
                                pageIndex: t
                            }).then((e => {
                                if (this.destroyed)
                                    throw new Error("Transport destroyed");
                                const r = new PDFPageProxy(t,e,this,this._params.ownerDocument,this._params.pdfBug);
                                return this.#n.set(t, r),
                                r
                            }
                            ));
                            return this.#i.set(t, n),
                            n
                        }
                        getPageIndex(e) {
                            return "object" !== typeof e || null === e || !Number.isInteger(e.num) || e.num < 0 || !Number.isInteger(e.gen) || e.gen < 0 ? Promise.reject(new Error("Invalid pageIndex request.")) : this.messageHandler.sendWithPromise("GetPageIndex", {
                                num: e.num,
                                gen: e.gen
                            })
                        }
                        getAnnotations(e, t) {
                            return this.messageHandler.sendWithPromise("GetAnnotations", {
                                pageIndex: e,
                                intent: t
                            })
                        }
                        saveDocument() {
                            return this.messageHandler.sendWithPromise("SaveDocument", {
                                isPureXfa: !!this._htmlForXfa,
                                numPages: this._numPages,
                                annotationStorage: this.annotationStorage.serializable,
                                filename: this._fullReader?.filename ?? null
                            }).finally(( () => {
                                this.annotationStorage.resetModified()
                            }
                            ))
                        }
                        getFieldObjects() {
                            return this._getFieldObjectsPromise ||= this.messageHandler.sendWithPromise("GetFieldObjects", null)
                        }
                        hasJSActions() {
                            return this._hasJSActionsPromise ||= this.messageHandler.sendWithPromise("HasJSActions", null)
                        }
                        getCalculationOrderIds() {
                            return this.messageHandler.sendWithPromise("GetCalculationOrderIds", null)
                        }
                        getDestinations() {
                            return this.messageHandler.sendWithPromise("GetDestinations", null)
                        }
                        getDestination(e) {
                            return "string" !== typeof e ? Promise.reject(new Error("Invalid destination request.")) : this.messageHandler.sendWithPromise("GetDestination", {
                                id: e
                            })
                        }
                        getPageLabels() {
                            return this.messageHandler.sendWithPromise("GetPageLabels", null)
                        }
                        getPageLayout() {
                            return this.messageHandler.sendWithPromise("GetPageLayout", null)
                        }
                        getPageMode() {
                            return this.messageHandler.sendWithPromise("GetPageMode", null)
                        }
                        getViewerPreferences() {
                            return this.messageHandler.sendWithPromise("GetViewerPreferences", null)
                        }
                        getOpenAction() {
                            return this.messageHandler.sendWithPromise("GetOpenAction", null)
                        }
                        getAttachments() {
                            return this.messageHandler.sendWithPromise("GetAttachments", null)
                        }
                        getJavaScript() {
                            return this.messageHandler.sendWithPromise("GetJavaScript", null)
                        }
                        getDocJSActions() {
                            return this.messageHandler.sendWithPromise("GetDocJSActions", null)
                        }
                        getPageJSActions(e) {
                            return this.messageHandler.sendWithPromise("GetPageJSActions", {
                                pageIndex: e
                            })
                        }
                        getStructTree(e) {
                            return this.messageHandler.sendWithPromise("GetStructTree", {
                                pageIndex: e
                            })
                        }
                        getOutline() {
                            return this.messageHandler.sendWithPromise("GetOutline", null)
                        }
                        getOptionalContentConfig() {
                            return this.messageHandler.sendWithPromise("GetOptionalContentConfig", null).then((e => new _optional_content_config.OptionalContentConfig(e)))
                        }
                        getPermissions() {
                            return this.messageHandler.sendWithPromise("GetPermissions", null)
                        }
                        getMetadata() {
                            return this.#s ||= this.messageHandler.sendWithPromise("GetMetadata", null).then((e => ({
                                info: e[0],
                                metadata: e[1] ? new _metadata.Metadata(e[1]) : null,
                                contentDispositionFilename: this._fullReader?.filename ?? null,
                                contentLength: this._fullReader?.contentLength ?? null
                            })))
                        }
                        getMarkInfo() {
                            return this.messageHandler.sendWithPromise("GetMarkInfo", null)
                        }
                        async startCleanup(e=!1) {
                            if (await this.messageHandler.sendWithPromise("Cleanup", null),
                            !this.destroyed) {
                                for (const e of this.#n.values())
                                    if (!e.cleanup())
                                        throw new Error(`startCleanup: Page ${e.pageNumber} is currently rendering.`);
                                this.commonObjs.clear(),
                                e || this.fontLoader.clear(),
                                this.#s = null,
                                this._getFieldObjectsPromise = null,
                                this._hasJSActionsPromise = null
                            }
                        }
                        get loadingParams() {
                            const e = this._params;
                            return (0,
                            _util.shadow)(this, "loadingParams", {
                                disableAutoFetch: e.disableAutoFetch,
                                enableXfa: e.enableXfa
                            })
                        }
                    }
                    class PDFObjects {
                        #a = Object.create(null);
                        #o(e) {
                            const t = this.#a[e];
                            return t || (this.#a[e] = {
                                capability: (0,
                                _util.createPromiseCapability)(),
                                data: null
                            })
                        }
                        get(e, t=null) {
                            if (t) {
                                const r = this.#o(e);
                                return r.capability.promise.then(( () => t(r.data))),
                                null
                            }
                            const r = this.#a[e];
                            if (!r?.capability.settled)
                                throw new Error(`Requesting object that isn't resolved yet ${e}.`);
                            return r.data
                        }
                        has(e) {
                            return this.#a[e]?.capability.settled || !1
                        }
                        resolve(e, t=null) {
                            const r = this.#o(e);
                            r.data = t,
                            r.capability.resolve()
                        }
                        clear() {
                            this.#a = Object.create(null)
                        }
                    }
                    class RenderTask {
                        #l = null;
                        constructor(e) {
                            this.#l = e,
                            this.onContinue = null
                        }
                        get promise() {
                            return this.#l.capability.promise
                        }
                        cancel() {
                            this.#l.cancel()
                        }
                        get separateAnnots() {
                            const {separateAnnots: e} = this.#l.operatorList;
                            if (!e)
                                return !1;
                            const {annotationCanvasMap: t} = this.#l;
                            return e.form || e.canvas && t?.size > 0
                        }
                    }
                    exports.RenderTask = RenderTask;
                    class InternalRenderTask {
                        static #c = new WeakSet;
                        constructor({callback: e, params: t, objs: r, commonObjs: n, annotationCanvasMap: i, operatorList: s, pageIndex: a, canvasFactory: o, useRequestAnimationFrame: l=!1, pdfBug: c=!1, pageColors: h=null}) {
                            this.callback = e,
                            this.params = t,
                            this.objs = r,
                            this.commonObjs = n,
                            this.annotationCanvasMap = i,
                            this.operatorListIdx = null,
                            this.operatorList = s,
                            this._pageIndex = a,
                            this.canvasFactory = o,
                            this._pdfBug = c,
                            this.pageColors = h,
                            this.running = !1,
                            this.graphicsReadyCallback = null,
                            this.graphicsReady = !1,
                            this._useRequestAnimationFrame = !0 === l && "undefined" !== typeof window,
                            this.cancelled = !1,
                            this.capability = (0,
                            _util.createPromiseCapability)(),
                            this.task = new RenderTask(this),
                            this._cancelBound = this.cancel.bind(this),
                            this._continueBound = this._continue.bind(this),
                            this._scheduleNextBound = this._scheduleNext.bind(this),
                            this._nextBound = this._next.bind(this),
                            this._canvas = t.canvasContext.canvas
                        }
                        get completed() {
                            return this.capability.promise.catch((function() {}
                            ))
                        }
                        initializeGraphics({transparency: e=!1, optionalContentConfig: t}) {
                            if (this.cancelled)
                                return;
                            if (this._canvas) {
                                if (InternalRenderTask.#c.has(this._canvas))
                                    throw new Error("Cannot use the same canvas during multiple render() operations. Use different canvas or ensure previous operations were cancelled or completed.");
                                InternalRenderTask.#c.add(this._canvas)
                            }
                            this._pdfBug && globalThis.StepperManager?.enabled && (this.stepper = globalThis.StepperManager.create(this._pageIndex),
                            this.stepper.init(this.operatorList),
                            this.stepper.nextBreakPoint = this.stepper.getNextBreakPoint());
                            const {canvasContext: r, viewport: n, transform: i, imageLayer: s, background: a} = this.params;
                            this.gfx = new _canvas.CanvasGraphics(r,this.commonObjs,this.objs,this.canvasFactory,s,t,this.annotationCanvasMap,this.pageColors),
                            this.gfx.beginDrawing({
                                transform: i,
                                viewport: n,
                                transparency: e,
                                background: a
                            }),
                            this.operatorListIdx = 0,
                            this.graphicsReady = !0,
                            this.graphicsReadyCallback && this.graphicsReadyCallback()
                        }
                        cancel(e=null) {
                            this.running = !1,
                            this.cancelled = !0,
                            this.gfx && this.gfx.endDrawing(),
                            this._canvas && InternalRenderTask.#c.delete(this._canvas),
                            this.callback(e || new _display_utils.RenderingCancelledException(`Rendering cancelled, page ${this._pageIndex + 1}`,"canvas"))
                        }
                        operatorListChanged() {
                            this.graphicsReady ? (this.stepper && this.stepper.updateOperatorList(this.operatorList),
                            this.running || this._continue()) : this.graphicsReadyCallback || (this.graphicsReadyCallback = this._continueBound)
                        }
                        _continue() {
                            this.running = !0,
                            this.cancelled || (this.task.onContinue ? this.task.onContinue(this._scheduleNextBound) : this._scheduleNext())
                        }
                        _scheduleNext() {
                            this._useRequestAnimationFrame ? window.requestAnimationFrame(( () => {
                                this._nextBound().catch(this._cancelBound)
                            }
                            )) : Promise.resolve().then(this._nextBound).catch(this._cancelBound)
                        }
                        async _next() {
                            this.cancelled || (this.operatorListIdx = this.gfx.executeOperatorList(this.operatorList, this.operatorListIdx, this._continueBound, this.stepper),
                            this.operatorListIdx === this.operatorList.argsArray.length && (this.running = !1,
                            this.operatorList.lastChunk && (this.gfx.endDrawing(),
                            this._canvas && InternalRenderTask.#c.delete(this._canvas),
                            this.callback())))
                        }
                    }
                    const version = "2.16.105";
                    exports.version = version;
                    const build = "172ccdbe5";
                    exports.build = build
                }
                , (e, t, r) => {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }),
                    t.PrintAnnotationStorage = t.AnnotationStorage = void 0;
                    var n = r(1)
                      , i = r(6)
                      , s = r(10);
                    class a {
                        constructor() {
                            this._storage = new Map,
                            this._modified = !1,
                            this.onSetModified = null,
                            this.onResetModified = null,
                            this.onAnnotationEditor = null
                        }
                        getValue(e, t) {
                            const r = this._storage.get(e);
                            return void 0 === r ? t : Object.assign(t, r)
                        }
                        getRawValue(e) {
                            return this._storage.get(e)
                        }
                        remove(e) {
                            if (this._storage.delete(e),
                            0 === this._storage.size && this.resetModified(),
                            "function" === typeof this.onAnnotationEditor) {
                                for (const e of this._storage.values())
                                    if (e instanceof i.AnnotationEditor)
                                        return;
                                this.onAnnotationEditor(null)
                            }
                        }
                        setValue(e, t) {
                            const r = this._storage.get(e);
                            let n = !1;
                            if (void 0 !== r)
                                for (const [i,s] of Object.entries(t))
                                    r[i] !== s && (n = !0,
                                    r[i] = s);
                            else
                                n = !0,
                                this._storage.set(e, t);
                            n && this.#h(),
                            t instanceof i.AnnotationEditor && "function" === typeof this.onAnnotationEditor && this.onAnnotationEditor(t.constructor._type)
                        }
                        has(e) {
                            return this._storage.has(e)
                        }
                        getAll() {
                            return this._storage.size > 0 ? (0,
                            n.objectFromMap)(this._storage) : null
                        }
                        get size() {
                            return this._storage.size
                        }
                        #h() {
                            this._modified || (this._modified = !0,
                            "function" === typeof this.onSetModified && this.onSetModified())
                        }
                        resetModified() {
                            this._modified && (this._modified = !1,
                            "function" === typeof this.onResetModified && this.onResetModified())
                        }
                        get print() {
                            return new o(this)
                        }
                        get serializable() {
                            if (0 === this._storage.size)
                                return null;
                            const e = new Map;
                            for (const [t,r] of this._storage) {
                                const n = r instanceof i.AnnotationEditor ? r.serialize() : r;
                                n && e.set(t, n)
                            }
                            return e
                        }
                        static getHash(e) {
                            if (!e)
                                return "";
                            const t = new s.MurmurHash3_64;
                            for (const [r,n] of e)
                                t.update(`${r}:${JSON.stringify(n)}`);
                            return t.hexdigest()
                        }
                    }
                    t.AnnotationStorage = a;
                    class o extends a {
                        #d = null;
                        constructor(e) {
                            super(),
                            this.#d = structuredClone(e.serializable)
                        }
                        get print() {
                            (0,
                            n.unreachable)("Should not call PrintAnnotationStorage.print")
                        }
                        get serializable() {
                            return this.#d
                        }
                    }
                    t.PrintAnnotationStorage = o
                }
                , (e, t, r) => {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }),
                    t.AnnotationEditor = void 0;
                    var n = r(7)
                      , i = r(1);
                    class s {
                        #u = this.focusin.bind(this);
                        #f = this.focusout.bind(this);
                        #p = !1;
                        #g = !1;
                        #_ = !1;
                        #m = s._zIndex++;
                        static _colorManager = new n.ColorManager;
                        static _zIndex = 1;
                        constructor(e) {
                            this.constructor === s && (0,
                            i.unreachable)("Cannot initialize AnnotationEditor."),
                            this.parent = e.parent,
                            this.id = e.id,
                            this.width = this.height = null,
                            this.pageIndex = e.parent.pageIndex,
                            this.name = e.name,
                            this.div = null;
                            const [t,r] = this.parent.viewportBaseDimensions;
                            this.x = e.x / t,
                            this.y = e.y / r,
                            this.rotation = this.parent.viewport.rotation,
                            this.isAttachedToDOM = !1
                        }
                        static get _defaultLineColor() {
                            return (0,
                            i.shadow)(this, "_defaultLineColor", this._colorManager.getHexCode("CanvasText"))
                        }
                        setInBackground() {
                            this.div.style.zIndex = 0
                        }
                        setInForeground() {
                            this.div.style.zIndex = this.#m
                        }
                        focusin(e) {
                            this.#p ? this.#p = !1 : this.parent.setSelected(this)
                        }
                        focusout(e) {
                            this.isAttachedToDOM && (e.relatedTarget?.closest(`#${this.id}`) || (e.preventDefault(),
                            this.parent.isMultipleSelection || this.commitOrRemove()))
                        }
                        commitOrRemove() {
                            this.isEmpty() ? this.remove() : this.commit()
                        }
                        commit() {
                            this.parent.addToAnnotationStorage(this)
                        }
                        dragstart(e) {
                            const t = this.parent.div.getBoundingClientRect();
                            this.startX = e.clientX - t.x,
                            this.startY = e.clientY - t.y,
                            e.dataTransfer.setData("text/plain", this.id),
                            e.dataTransfer.effectAllowed = "move"
                        }
                        setAt(e, t, r, n) {
                            const [i,s] = this.parent.viewportBaseDimensions;
                            [r,n] = this.screenToPageTranslation(r, n),
                            this.x = (e + r) / i,
                            this.y = (t + n) / s,
                            this.div.style.left = 100 * this.x + "%",
                            this.div.style.top = 100 * this.y + "%"
                        }
                        translate(e, t) {
                            const [r,n] = this.parent.viewportBaseDimensions;
                            [e,t] = this.screenToPageTranslation(e, t),
                            this.x += e / r,
                            this.y += t / n,
                            this.div.style.left = 100 * this.x + "%",
                            this.div.style.top = 100 * this.y + "%"
                        }
                        screenToPageTranslation(e, t) {
                            const {rotation: r} = this.parent.viewport;
                            switch (r) {
                            case 90:
                                return [t, -e];
                            case 180:
                                return [-e, -t];
                            case 270:
                                return [-t, e];
                            default:
                                return [e, t]
                            }
                        }
                        setDims(e, t) {
                            const [r,n] = this.parent.viewportBaseDimensions;
                            this.div.style.width = 100 * e / r + "%",
                            this.div.style.height = 100 * t / n + "%"
                        }
                        getInitialTranslation() {
                            return [0, 0]
                        }
                        render() {
                            this.div = document.createElement("div"),
                            this.div.setAttribute("data-editor-rotation", (360 - this.rotation) % 360),
                            this.div.className = this.name,
                            this.div.setAttribute("id", this.id),
                            this.div.setAttribute("tabIndex", 0),
                            this.setInForeground(),
                            this.div.addEventListener("focusin", this.#u),
                            this.div.addEventListener("focusout", this.#f);
                            const [e,t] = this.getInitialTranslation();
                            return this.translate(e, t),
                            (0,
                            n.bindEvents)(this, this.div, ["dragstart", "pointerdown"]),
                            this.div
                        }
                        pointerdown(e) {
                            const t = n.KeyboardManager.platform.isMac;
                            0 !== e.button || e.ctrlKey && t ? e.preventDefault() : (e.ctrlKey && !t || e.shiftKey || e.metaKey && t ? this.parent.toggleSelected(this) : this.parent.setSelected(this),
                            this.#p = !0)
                        }
                        getRect(e, t) {
                            const [r,n] = this.parent.viewportBaseDimensions
                              , [i,s] = this.parent.pageDimensions
                              , a = i * e / r
                              , o = s * t / n
                              , l = this.x * i
                              , c = this.y * s
                              , h = this.width * i
                              , d = this.height * s;
                            switch (this.rotation) {
                            case 0:
                                return [l + a, s - c - o - d, l + a + h, s - c - o];
                            case 90:
                                return [l + o, s - c + a, l + o + d, s - c + a + h];
                            case 180:
                                return [l - a - h, s - c + o, l - a, s - c + o + d];
                            case 270:
                                return [l - o - d, s - c - a - h, l - o, s - c - a];
                            default:
                                throw new Error("Invalid rotation")
                            }
                        }
                        getRectInCurrentCoords(e, t) {
                            const [r,n,i,s] = e
                              , a = i - r
                              , o = s - n;
                            switch (this.rotation) {
                            case 0:
                                return [r, t - s, a, o];
                            case 90:
                                return [r, t - n, o, a];
                            case 180:
                                return [i, t - n, a, o];
                            case 270:
                                return [i, t - s, o, a];
                            default:
                                throw new Error("Invalid rotation")
                            }
                        }
                        onceAdded() {}
                        isEmpty() {
                            return !1
                        }
                        enableEditMode() {
                            this.#_ = !0
                        }
                        disableEditMode() {
                            this.#_ = !1
                        }
                        isInEditMode() {
                            return this.#_
                        }
                        shouldGetKeyboardEvents() {
                            return !1
                        }
                        needsToBeRebuilt() {
                            return this.div && !this.isAttachedToDOM
                        }
                        rebuild() {
                            this.div?.addEventListener("focusin", this.#u)
                        }
                        serialize() {
                            (0,
                            i.unreachable)("An editor must be serializable")
                        }
                        static deserialize(e, t) {
                            const r = new this.prototype.constructor({
                                parent: t,
                                id: t.getNextId()
                            });
                            r.rotation = e.rotation;
                            const [n,i] = t.pageDimensions
                              , [s,a,o,l] = r.getRectInCurrentCoords(e.rect, i);
                            return r.x = s / n,
                            r.y = a / i,
                            r.width = o / n,
                            r.height = l / i,
                            r
                        }
                        remove() {
                            this.div.removeEventListener("focusin", this.#u),
                            this.div.removeEventListener("focusout", this.#f),
                            this.isEmpty() || this.commit(),
                            this.parent.remove(this)
                        }
                        select() {
                            this.div?.classList.add("selectedEditor")
                        }
                        unselect() {
                            this.div?.classList.remove("selectedEditor")
                        }
                        updateParams(e, t) {}
                        disableEditing() {}
                        enableEditing() {}
                        get propertiesToUpdate() {
                            return {}
                        }
                        get contentDiv() {
                            return this.div
                        }
                        get isEditing() {
                            return this.#g
                        }
                        set isEditing(e) {
                            this.#g = e,
                            e ? (this.parent.setSelected(this),
                            this.parent.setActiveEditor(this)) : this.parent.setActiveEditor(null)
                        }
                    }
                    t.AnnotationEditor = s
                }
                , (e, t, r) => {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }),
                    t.KeyboardManager = t.CommandManager = t.ColorManager = t.AnnotationEditorUIManager = void 0,
                    t.bindEvents = function(e, t, r) {
                        for (const n of r)
                            t.addEventListener(n, e[n].bind(e))
                    }
                    ,
                    t.opacityToHex = function(e) {
                        return Math.round(Math.min(255, Math.max(1, 255 * e))).toString(16).padStart(2, "0")
                    }
                    ;
                    var n = r(1)
                      , i = r(8);
                    class s {
                        #b = 0;
                        getId() {
                            return `${n.AnnotationEditorPrefix}${this.#b++}`
                        }
                    }
                    class a {
                        #v = [];
                        #y = !1;
                        #A;
                        #E = -1;
                        constructor(e=128) {
                            this.#A = e
                        }
                        add({cmd: e, undo: t, mustExec: r, type: n=NaN, overwriteIfSameType: i=!1, keepUndo: s=!1}) {
                            if (r && e(),
                            this.#y)
                                return;
                            const a = {
                                cmd: e,
                                undo: t,
                                type: n
                            };
                            if (-1 === this.#E)
                                return this.#v.length > 0 && (this.#v.length = 0),
                                this.#E = 0,
                                void this.#v.push(a);
                            if (i && this.#v[this.#E].type === n)
                                return s && (a.undo = this.#v[this.#E].undo),
                                void (this.#v[this.#E] = a);
                            const o = this.#E + 1;
                            o === this.#A ? this.#v.splice(0, 1) : (this.#E = o,
                            o < this.#v.length && this.#v.splice(o)),
                            this.#v.push(a)
                        }
                        undo() {
                            -1 !== this.#E && (this.#y = !0,
                            this.#v[this.#E].undo(),
                            this.#y = !1,
                            this.#E -= 1)
                        }
                        redo() {
                            this.#E < this.#v.length - 1 && (this.#E += 1,
                            this.#y = !0,
                            this.#v[this.#E].cmd(),
                            this.#y = !1)
                        }
                        hasSomethingToUndo() {
                            return -1 !== this.#E
                        }
                        hasSomethingToRedo() {
                            return this.#E < this.#v.length - 1
                        }
                        destroy() {
                            this.#v = null
                        }
                    }
                    t.CommandManager = a;
                    class o {
                        constructor(e) {
                            this.buffer = [],
                            this.callbacks = new Map,
                            this.allKeys = new Set;
                            const t = o.platform.isMac;
                            for (const [r,n] of e)
                                for (const e of r) {
                                    const r = e.startsWith("mac+");
                                    t && r ? (this.callbacks.set(e.slice(4), n),
                                    this.allKeys.add(e.split("+").at(-1))) : t || r || (this.callbacks.set(e, n),
                                    this.allKeys.add(e.split("+").at(-1)))
                                }
                        }
                        static get platform() {
                            const e = "undefined" !== typeof navigator ? navigator.platform : "";
                            return (0,
                            n.shadow)(this, "platform", {
                                isWin: e.includes("Win"),
                                isMac: e.includes("Mac")
                            })
                        }
                        #S(e) {
                            e.altKey && this.buffer.push("alt"),
                            e.ctrlKey && this.buffer.push("ctrl"),
                            e.metaKey && this.buffer.push("meta"),
                            e.shiftKey && this.buffer.push("shift"),
                            this.buffer.push(e.key);
                            const t = this.buffer.join("+");
                            return this.buffer.length = 0,
                            t
                        }
                        exec(e, t) {
                            if (!this.allKeys.has(t.key))
                                return;
                            const r = this.callbacks.get(this.#S(t));
                            r && (r.bind(e)(),
                            t.stopPropagation(),
                            t.preventDefault())
                        }
                    }
                    t.KeyboardManager = o;
                    class l {
                        #w = null;
                        copy(e) {
                            e && (Array.isArray(e) ? this.#w = e.map((e => e.serialize())) : this.#w = [e.serialize()],
                            this.#w = this.#w.filter((e => !!e)),
                            0 === this.#w.length && (this.#w = null))
                        }
                        paste() {
                            return this.#w
                        }
                        isEmpty() {
                            return null === this.#w
                        }
                        destroy() {
                            this.#w = null
                        }
                    }
                    class c {
                        static _colorsMapping = new Map([["CanvasText", [0, 0, 0]], ["Canvas", [255, 255, 255]]]);
                        get _colors() {
                            const e = new Map([["CanvasText", null], ["Canvas", null]]);
                            return (0,
                            i.getColorValues)(e),
                            (0,
                            n.shadow)(this, "_colors", e)
                        }
                        convert(e) {
                            const t = (0,
                            i.getRGB)(e);
                            if (!window.matchMedia("(forced-colors: active)").matches)
                                return t;
                            for (const [r,n] of this._colors)
                                if (n.every(( (e, r) => e === t[r])))
                                    return c._colorsMapping.get(r);
                            return t
                        }
                        getHexCode(e) {
                            const t = this._colors.get(e);
                            return t ? n.Util.makeHexColor(...t) : e
                        }
                    }
                    t.ColorManager = c;
                    class h {
                        #T = null;
                        #x = new Map;
                        #C = new Map;
                        #R = new l;
                        #k = new a;
                        #M = 0;
                        #P = null;
                        #I = null;
                        #D = new s;
                        #O = !1;
                        #F = n.AnnotationEditorType.NONE;
                        #L = new Set;
                        #N = this.keydown.bind(this);
                        #B = this.onEditingAction.bind(this);
                        #U = this.onPageChanging.bind(this);
                        #j = {
                            isEditing: !1,
                            isEmpty: !0,
                            hasEmptyClipboard: !0,
                            hasSomethingToUndo: !1,
                            hasSomethingToRedo: !1,
                            hasSelectedEditor: !1
                        };
                        #z = null;
                        static _keyboardManager = new o([[["ctrl+a", "mac+meta+a"], h.prototype.selectAll], [["ctrl+c", "mac+meta+c"], h.prototype.copy], [["ctrl+v", "mac+meta+v"], h.prototype.paste], [["ctrl+x", "mac+meta+x"], h.prototype.cut], [["ctrl+z", "mac+meta+z"], h.prototype.undo], [["ctrl+y", "ctrl+shift+Z", "mac+meta+shift+Z"], h.prototype.redo], [["Backspace", "alt+Backspace", "ctrl+Backspace", "shift+Backspace", "mac+Backspace", "mac+alt+Backspace", "mac+ctrl+Backspace", "Delete", "ctrl+Delete", "shift+Delete"], h.prototype.delete], [["Escape", "mac+Escape"], h.prototype.unselectAll]]);
                        constructor(e, t) {
                            this.#z = e,
                            this.#I = t,
                            this.#I._on("editingaction", this.#B),
                            this.#I._on("pagechanging", this.#U)
                        }
                        destroy() {
                            this.#$(),
                            this.#I._off("editingaction", this.#B),
                            this.#I._off("pagechanging", this.#U);
                            for (const e of this.#C.values())
                                e.destroy();
                            this.#C.clear(),
                            this.#x.clear(),
                            this.#T = null,
                            this.#L.clear(),
                            this.#R.destroy(),
                            this.#k.destroy()
                        }
                        onPageChanging({pageNumber: e}) {
                            this.#M = e - 1
                        }
                        focusMainContainer() {
                            this.#z.focus()
                        }
                        #H() {
                            this.#z.addEventListener("keydown", this.#N)
                        }
                        #$() {
                            this.#z.removeEventListener("keydown", this.#N)
                        }
                        keydown(e) {
                            this.getActive()?.shouldGetKeyboardEvents() || h._keyboardManager.exec(this, e)
                        }
                        onEditingAction(e) {
                            ["undo", "redo", "cut", "copy", "paste", "delete", "selectAll"].includes(e.name) && this[e.name]()
                        }
                        #q(e) {
                            Object.entries(e).some(( ([e,t]) => this.#j[e] !== t)) && this.#I.dispatch("annotationeditorstateschanged", {
                                source: this,
                                details: Object.assign(this.#j, e)
                            })
                        }
                        #W(e) {
                            this.#I.dispatch("annotationeditorparamschanged", {
                                source: this,
                                details: e
                            })
                        }
                        setEditingState(e) {
                            e ? (this.#H(),
                            this.#q({
                                isEditing: this.#F !== n.AnnotationEditorType.NONE,
                                isEmpty: this.#Z(),
                                hasSomethingToUndo: this.#k.hasSomethingToUndo(),
                                hasSomethingToRedo: this.#k.hasSomethingToRedo(),
                                hasSelectedEditor: !1,
                                hasEmptyClipboard: this.#R.isEmpty()
                            })) : (this.#$(),
                            this.#q({
                                isEditing: !1
                            }))
                        }
                        registerEditorTypes(e) {
                            this.#P = e;
                            for (const t of this.#P)
                                this.#W(t.defaultPropertiesToUpdate)
                        }
                        getId() {
                            return this.#D.getId()
                        }
                        addLayer(e) {
                            this.#C.set(e.pageIndex, e),
                            this.#O ? e.enable() : e.disable()
                        }
                        removeLayer(e) {
                            this.#C.delete(e.pageIndex)
                        }
                        updateMode(e) {
                            if (this.#F = e,
                            e === n.AnnotationEditorType.NONE)
                                this.setEditingState(!1),
                                this.#G();
                            else {
                                this.setEditingState(!0),
                                this.#X();
                                for (const t of this.#C.values())
                                    t.updateMode(e)
                            }
                        }
                        updateToolbar(e) {
                            e !== this.#F && this.#I.dispatch("switchannotationeditormode", {
                                source: this,
                                mode: e
                            })
                        }
                        updateParams(e, t) {
                            for (const r of this.#L)
                                r.updateParams(e, t);
                            for (const r of this.#P)
                                r.updateDefaultParams(e, t)
                        }
                        #X() {
                            if (!this.#O) {
                                this.#O = !0;
                                for (const e of this.#C.values())
                                    e.enable()
                            }
                        }
                        #G() {
                            if (this.unselectAll(),
                            this.#O) {
                                this.#O = !1;
                                for (const e of this.#C.values())
                                    e.disable()
                            }
                        }
                        getEditors(e) {
                            const t = [];
                            for (const r of this.#x.values())
                                r.pageIndex === e && t.push(r);
                            return t
                        }
                        getEditor(e) {
                            return this.#x.get(e)
                        }
                        addEditor(e) {
                            this.#x.set(e.id, e)
                        }
                        removeEditor(e) {
                            this.#x.delete(e.id),
                            this.unselect(e)
                        }
                        #Y(e) {
                            const t = this.#C.get(e.pageIndex);
                            t ? t.addOrRebuild(e) : this.addEditor(e)
                        }
                        setActiveEditor(e) {
                            this.#T !== e && (this.#T = e,
                            e && this.#W(e.propertiesToUpdate))
                        }
                        toggleSelected(e) {
                            if (this.#L.has(e))
                                return this.#L.delete(e),
                                e.unselect(),
                                void this.#q({
                                    hasSelectedEditor: this.hasSelection
                                });
                            this.#L.add(e),
                            e.select(),
                            this.#W(e.propertiesToUpdate),
                            this.#q({
                                hasSelectedEditor: !0
                            })
                        }
                        setSelected(e) {
                            for (const t of this.#L)
                                t !== e && t.unselect();
                            this.#L.clear(),
                            this.#L.add(e),
                            e.select(),
                            this.#W(e.propertiesToUpdate),
                            this.#q({
                                hasSelectedEditor: !0
                            })
                        }
                        isSelected(e) {
                            return this.#L.has(e)
                        }
                        unselect(e) {
                            e.unselect(),
                            this.#L.delete(e),
                            this.#q({
                                hasSelectedEditor: this.hasSelection
                            })
                        }
                        get hasSelection() {
                            return 0 !== this.#L.size
                        }
                        undo() {
                            this.#k.undo(),
                            this.#q({
                                hasSomethingToUndo: this.#k.hasSomethingToUndo(),
                                hasSomethingToRedo: !0,
                                isEmpty: this.#Z()
                            })
                        }
                        redo() {
                            this.#k.redo(),
                            this.#q({
                                hasSomethingToUndo: !0,
                                hasSomethingToRedo: this.#k.hasSomethingToRedo(),
                                isEmpty: this.#Z()
                            })
                        }
                        addCommands(e) {
                            this.#k.add(e),
                            this.#q({
                                hasSomethingToUndo: !0,
                                hasSomethingToRedo: !1,
                                isEmpty: this.#Z()
                            })
                        }
                        #Z() {
                            if (0 === this.#x.size)
                                return !0;
                            if (1 === this.#x.size)
                                for (const e of this.#x.values())
                                    return e.isEmpty();
                            return !1
                        }
                        delete() {
                            if (this.#T && this.#T.commitOrRemove(),
                            !this.hasSelection)
                                return;
                            const e = [...this.#L];
                            this.addCommands({
                                cmd: () => {
                                    for (const t of e)
                                        t.remove()
                                }
                                ,
                                undo: () => {
                                    for (const t of e)
                                        this.#Y(t)
                                }
                                ,
                                mustExec: !0
                            })
                        }
                        copy() {
                            if (this.#T && this.#T.commitOrRemove(),
                            this.hasSelection) {
                                const e = [];
                                for (const t of this.#L)
                                    t.isEmpty() || e.push(t);
                                if (0 === e.length)
                                    return;
                                this.#R.copy(e),
                                this.#q({
                                    hasEmptyClipboard: !1
                                })
                            }
                        }
                        cut() {
                            this.copy(),
                            this.delete()
                        }
                        paste() {
                            if (this.#R.isEmpty())
                                return;
                            this.unselectAll();
                            const e = this.#C.get(this.#M)
                              , t = this.#R.paste().map((t => e.deserialize(t)));
                            this.addCommands({
                                cmd: () => {
                                    for (const e of t)
                                        this.#Y(e);
                                    this.#V(t)
                                }
                                ,
                                undo: () => {
                                    for (const e of t)
                                        e.remove()
                                }
                                ,
                                mustExec: !0
                            })
                        }
                        #V(e) {
                            this.#L.clear();
                            for (const t of e)
                                t.isEmpty() || (this.#L.add(t),
                                t.select());
                            this.#q({
                                hasSelectedEditor: !0
                            })
                        }
                        selectAll() {
                            for (const e of this.#L)
                                e.commit();
                            this.#V(this.#x.values())
                        }
                        unselectAll() {
                            if (this.#T)
                                this.#T.commitOrRemove();
                            else if (0 !== this.#V.size) {
                                for (const e of this.#L)
                                    e.unselect();
                                this.#L.clear(),
                                this.#q({
                                    hasSelectedEditor: !1
                                })
                            }
                        }
                        isActive(e) {
                            return this.#T === e
                        }
                        getActive() {
                            return this.#T
                        }
                        getMode() {
                            return this.#F
                        }
                    }
                    t.AnnotationEditorUIManager = h
                }
                , (e, t, r) => {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }),
                    t.StatTimer = t.RenderingCancelledException = t.PixelsPerInch = t.PageViewport = t.PDFDateString = t.DOMStandardFontDataFactory = t.DOMSVGFactory = t.DOMCanvasFactory = t.DOMCMapReaderFactory = t.AnnotationPrefix = void 0,
                    t.deprecated = function(e) {
                        console.log("Deprecated API usage: " + e)
                    }
                    ,
                    t.getColorValues = function(e) {
                        const t = document.createElement("span");
                        t.style.visibility = "hidden",
                        document.body.append(t);
                        for (const r of e.keys()) {
                            t.style.color = r;
                            const n = window.getComputedStyle(t).color;
                            e.set(r, _(n))
                        }
                        t.remove()
                    }
                    ,
                    t.getCurrentTransform = function(e) {
                        const {a: t, b: r, c: n, d: i, e: s, f: a} = e.getTransform();
                        return [t, r, n, i, s, a]
                    }
                    ,
                    t.getCurrentTransformInverse = function(e) {
                        const {a: t, b: r, c: n, d: i, e: s, f: a} = e.getTransform().invertSelf();
                        return [t, r, n, i, s, a]
                    }
                    ,
                    t.getFilenameFromUrl = function(e) {
                        const t = e.indexOf("#")
                          , r = e.indexOf("?")
                          , n = Math.min(t > 0 ? t : e.length, r > 0 ? r : e.length);
                        return e.substring(e.lastIndexOf("/", n) + 1, n)
                    }
                    ,
                    t.getPdfFilenameFromUrl = function(e, t="document.pdf") {
                        if ("string" !== typeof e)
                            return t;
                        if (f(e))
                            return (0,
                            i.warn)('getPdfFilenameFromUrl: ignore "data:"-URL for performance reasons.'),
                            t;
                        const r = /[^/?#=]+\.pdf\b(?!.*\.pdf\b)/i
                          , n = /^(?:(?:[^:]+:)?\/\/[^/]+)?([^?#]*)(\?[^#]*)?(#.*)?$/.exec(e);
                        let s = r.exec(n[1]) || r.exec(n[2]) || r.exec(n[3]);
                        if (s && (s = s[0],
                        s.includes("%")))
                            try {
                                s = r.exec(decodeURIComponent(s))[0]
                            } catch (a) {}
                        return s || t
                    }
                    ,
                    t.getRGB = _,
                    t.getXfaPageViewport = function(e, {scale: t=1, rotation: r=0}) {
                        const {width: n, height: i} = e.attributes.style
                          , s = [0, 0, parseInt(n), parseInt(i)];
                        return new d({
                            viewBox: s,
                            scale: t,
                            rotation: r
                        })
                    }
                    ,
                    t.isDataScheme = f,
                    t.isPdfFile = function(e) {
                        return "string" === typeof e && /\.pdf$/i.test(e)
                    }
                    ,
                    t.isValidFetchUrl = p,
                    t.loadScript = function(e, t=!1) {
                        return new Promise(( (r, n) => {
                            const i = document.createElement("script");
                            i.src = e,
                            i.onload = function(e) {
                                t && i.remove(),
                                r(e)
                            }
                            ,
                            i.onerror = function() {
                                n(new Error(`Cannot load script at: ${i.src}`))
                            }
                            ,
                            (document.head || document.documentElement).append(i)
                        }
                        ))
                    }
                    ;
                    var n = r(9)
                      , i = r(1);
                    t.AnnotationPrefix = "pdfjs_internal_id_";
                    class s {
                        static CSS = 96;
                        static PDF = 72;
                        static PDF_TO_CSS_UNITS = this.CSS / this.PDF
                    }
                    t.PixelsPerInch = s;
                    class a extends n.BaseCanvasFactory {
                        constructor({ownerDocument: e=globalThis.document}={}) {
                            super(),
                            this._document = e
                        }
                        _createCanvas(e, t) {
                            const r = this._document.createElement("canvas");
                            return r.width = e,
                            r.height = t,
                            r
                        }
                    }
                    async function o(e, t=!1) {
                        if (p(e, document.baseURI)) {
                            const r = await fetch(e);
                            if (!r.ok)
                                throw new Error(r.statusText);
                            return t ? new Uint8Array(await r.arrayBuffer()) : (0,
                            i.stringToBytes)(await r.text())
                        }
                        return new Promise(( (r, n) => {
                            const s = new XMLHttpRequest;
                            s.open("GET", e, !0),
                            t && (s.responseType = "arraybuffer"),
                            s.onreadystatechange = () => {
                                if (s.readyState === XMLHttpRequest.DONE) {
                                    if (200 === s.status || 0 === s.status) {
                                        let e;
                                        if (t && s.response ? e = new Uint8Array(s.response) : !t && s.responseText && (e = (0,
                                        i.stringToBytes)(s.responseText)),
                                        e)
                                            return void r(e)
                                    }
                                    n(new Error(s.statusText))
                                }
                            }
                            ,
                            s.send(null)
                        }
                        ))
                    }
                    t.DOMCanvasFactory = a;
                    class l extends n.BaseCMapReaderFactory {
                        _fetchData(e, t) {
                            return o(e, this.isCompressed).then((e => ({
                                cMapData: e,
                                compressionType: t
                            })))
                        }
                    }
                    t.DOMCMapReaderFactory = l;
                    class c extends n.BaseStandardFontDataFactory {
                        _fetchData(e) {
                            return o(e, !0)
                        }
                    }
                    t.DOMStandardFontDataFactory = c;
                    class h extends n.BaseSVGFactory {
                        _createSVG(e) {
                            return document.createElementNS("http://www.w3.org/2000/svg", e)
                        }
                    }
                    t.DOMSVGFactory = h;
                    class d {
                        constructor({viewBox: e, scale: t, rotation: r, offsetX: n=0, offsetY: i=0, dontFlip: s=!1}) {
                            this.viewBox = e,
                            this.scale = t,
                            this.rotation = r,
                            this.offsetX = n,
                            this.offsetY = i;
                            const a = (e[2] + e[0]) / 2
                              , o = (e[3] + e[1]) / 2;
                            let l, c, h, d, u, f, p, g;
                            switch ((r %= 360) < 0 && (r += 360),
                            r) {
                            case 180:
                                l = -1,
                                c = 0,
                                h = 0,
                                d = 1;
                                break;
                            case 90:
                                l = 0,
                                c = 1,
                                h = 1,
                                d = 0;
                                break;
                            case 270:
                                l = 0,
                                c = -1,
                                h = -1,
                                d = 0;
                                break;
                            case 0:
                                l = 1,
                                c = 0,
                                h = 0,
                                d = -1;
                                break;
                            default:
                                throw new Error("PageViewport: Invalid rotation, must be a multiple of 90 degrees.")
                            }
                            s && (h = -h,
                            d = -d),
                            0 === l ? (u = Math.abs(o - e[1]) * t + n,
                            f = Math.abs(a - e[0]) * t + i,
                            p = Math.abs(e[3] - e[1]) * t,
                            g = Math.abs(e[2] - e[0]) * t) : (u = Math.abs(a - e[0]) * t + n,
                            f = Math.abs(o - e[1]) * t + i,
                            p = Math.abs(e[2] - e[0]) * t,
                            g = Math.abs(e[3] - e[1]) * t),
                            this.transform = [l * t, c * t, h * t, d * t, u - l * t * a - h * t * o, f - c * t * a - d * t * o],
                            this.width = p,
                            this.height = g
                        }
                        clone({scale: e=this.scale, rotation: t=this.rotation, offsetX: r=this.offsetX, offsetY: n=this.offsetY, dontFlip: i=!1}={}) {
                            return new d({
                                viewBox: this.viewBox.slice(),
                                scale: e,
                                rotation: t,
                                offsetX: r,
                                offsetY: n,
                                dontFlip: i
                            })
                        }
                        convertToViewportPoint(e, t) {
                            return i.Util.applyTransform([e, t], this.transform)
                        }
                        convertToViewportRectangle(e) {
                            const t = i.Util.applyTransform([e[0], e[1]], this.transform)
                              , r = i.Util.applyTransform([e[2], e[3]], this.transform);
                            return [t[0], t[1], r[0], r[1]]
                        }
                        convertToPdfPoint(e, t) {
                            return i.Util.applyInverseTransform([e, t], this.transform)
                        }
                    }
                    t.PageViewport = d;
                    class u extends i.BaseException {
                        constructor(e, t) {
                            super(e, "RenderingCancelledException"),
                            this.type = t
                        }
                    }
                    function f(e) {
                        const t = e.length;
                        let r = 0;
                        for (; r < t && "" === e[r].trim(); )
                            r++;
                        return "data:" === e.substring(r, r + 5).toLowerCase()
                    }
                    function p(e, t) {
                        try {
                            const {protocol: r} = t ? new URL(e,t) : new URL(e);
                            return "http:" === r || "https:" === r
                        } catch (r) {
                            return !1
                        }
                    }
                    let g;
                    function _(e) {
                        if (e.startsWith("#")) {
                            const t = parseInt(e.slice(1), 16);
                            return [(16711680 & t) >> 16, (65280 & t) >> 8, 255 & t]
                        }
                        return e.startsWith("rgb(") ? e.slice(4, -1).split(",").map((e => parseInt(e))) : e.startsWith("rgba(") ? e.slice(5, -1).split(",").map((e => parseInt(e))).slice(0, 3) : ((0,
                        i.warn)(`Not a valid color format: "${e}"`),
                        [0, 0, 0])
                    }
                    t.RenderingCancelledException = u,
                    t.StatTimer = class {
                        constructor() {
                            this.started = Object.create(null),
                            this.times = []
                        }
                        time(e) {
                            e in this.started && (0,
                            i.warn)(`Timer is already running for ${e}`),
                            this.started[e] = Date.now()
                        }
                        timeEnd(e) {
                            e in this.started || (0,
                            i.warn)(`Timer has not been started for ${e}`),
                            this.times.push({
                                name: e,
                                start: this.started[e],
                                end: Date.now()
                            }),
                            delete this.started[e]
                        }
                        toString() {
                            const e = [];
                            let t = 0;
                            for (const r of this.times) {
                                const e = r.name;
                                e.length > t && (t = e.length)
                            }
                            for (const r of this.times) {
                                const n = r.end - r.start;
                                e.push(`${r.name.padEnd(t)} ${n}ms\n`)
                            }
                            return e.join("")
                        }
                    }
                    ,
                    t.PDFDateString = class {
                        static toDateObject(e) {
                            if (!e || "string" !== typeof e)
                                return null;
                            g || (g = new RegExp("^D:(\\d{4})(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?([Z|+|-])?(\\d{2})?'?(\\d{2})?'?"));
                            const t = g.exec(e);
                            if (!t)
                                return null;
                            const r = parseInt(t[1], 10);
                            let n = parseInt(t[2], 10);
                            n = n >= 1 && n <= 12 ? n - 1 : 0;
                            let i = parseInt(t[3], 10);
                            i = i >= 1 && i <= 31 ? i : 1;
                            let s = parseInt(t[4], 10);
                            s = s >= 0 && s <= 23 ? s : 0;
                            let a = parseInt(t[5], 10);
                            a = a >= 0 && a <= 59 ? a : 0;
                            let o = parseInt(t[6], 10);
                            o = o >= 0 && o <= 59 ? o : 0;
                            const l = t[7] || "Z";
                            let c = parseInt(t[8], 10);
                            c = c >= 0 && c <= 23 ? c : 0;
                            let h = parseInt(t[9], 10) || 0;
                            return h = h >= 0 && h <= 59 ? h : 0,
                            "-" === l ? (s += c,
                            a += h) : "+" === l && (s -= c,
                            a -= h),
                            new Date(Date.UTC(r, n, i, s, a, o))
                        }
                    }
                }
                , (e, t, r) => {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }),
                    t.BaseStandardFontDataFactory = t.BaseSVGFactory = t.BaseCanvasFactory = t.BaseCMapReaderFactory = void 0;
                    var n = r(1);
                    class i {
                        constructor() {
                            this.constructor === i && (0,
                            n.unreachable)("Cannot initialize BaseCanvasFactory.")
                        }
                        create(e, t) {
                            if (e <= 0 || t <= 0)
                                throw new Error("Invalid canvas size");
                            const r = this._createCanvas(e, t);
                            return {
                                canvas: r,
                                context: r.getContext("2d")
                            }
                        }
                        reset(e, t, r) {
                            if (!e.canvas)
                                throw new Error("Canvas is not specified");
                            if (t <= 0 || r <= 0)
                                throw new Error("Invalid canvas size");
                            e.canvas.width = t,
                            e.canvas.height = r
                        }
                        destroy(e) {
                            if (!e.canvas)
                                throw new Error("Canvas is not specified");
                            e.canvas.width = 0,
                            e.canvas.height = 0,
                            e.canvas = null,
                            e.context = null
                        }
                        _createCanvas(e, t) {
                            (0,
                            n.unreachable)("Abstract method `_createCanvas` called.")
                        }
                    }
                    t.BaseCanvasFactory = i;
                    class s {
                        constructor({baseUrl: e=null, isCompressed: t=!1}) {
                            this.constructor === s && (0,
                            n.unreachable)("Cannot initialize BaseCMapReaderFactory."),
                            this.baseUrl = e,
                            this.isCompressed = t
                        }
                        async fetch({name: e}) {
                            if (!this.baseUrl)
                                throw new Error('The CMap "baseUrl" parameter must be specified, ensure that the "cMapUrl" and "cMapPacked" API parameters are provided.');
                            if (!e)
                                throw new Error("CMap name must be specified.");
                            const t = this.baseUrl + e + (this.isCompressed ? ".bcmap" : "")
                              , r = this.isCompressed ? n.CMapCompressionType.BINARY : n.CMapCompressionType.NONE;
                            return this._fetchData(t, r).catch((e => {
                                throw new Error(`Unable to load ${this.isCompressed ? "binary " : ""}CMap at: ${t}`)
                            }
                            ))
                        }
                        _fetchData(e, t) {
                            (0,
                            n.unreachable)("Abstract method `_fetchData` called.")
                        }
                    }
                    t.BaseCMapReaderFactory = s;
                    class a {
                        constructor({baseUrl: e=null}) {
                            this.constructor === a && (0,
                            n.unreachable)("Cannot initialize BaseStandardFontDataFactory."),
                            this.baseUrl = e
                        }
                        async fetch({filename: e}) {
                            if (!this.baseUrl)
                                throw new Error('The standard font "baseUrl" parameter must be specified, ensure that the "standardFontDataUrl" API parameter is provided.');
                            if (!e)
                                throw new Error("Font filename must be specified.");
                            const t = `${this.baseUrl}${e}`;
                            return this._fetchData(t).catch((e => {
                                throw new Error(`Unable to load font data at: ${t}`)
                            }
                            ))
                        }
                        _fetchData(e) {
                            (0,
                            n.unreachable)("Abstract method `_fetchData` called.")
                        }
                    }
                    t.BaseStandardFontDataFactory = a;
                    class o {
                        constructor() {
                            this.constructor === o && (0,
                            n.unreachable)("Cannot initialize BaseSVGFactory.")
                        }
                        create(e, t, r=!1) {
                            if (e <= 0 || t <= 0)
                                throw new Error("Invalid SVG dimensions");
                            const n = this._createSVG("svg:svg");
                            return n.setAttribute("version", "1.1"),
                            r || (n.setAttribute("width", `${e}px`),
                            n.setAttribute("height", `${t}px`)),
                            n.setAttribute("preserveAspectRatio", "none"),
                            n.setAttribute("viewBox", `0 0 ${e} ${t}`),
                            n
                        }
                        createElement(e) {
                            if ("string" !== typeof e)
                                throw new Error("Invalid SVG element type");
                            return this._createSVG(e)
                        }
                        _createSVG(e) {
                            (0,
                            n.unreachable)("Abstract method `_createSVG` called.")
                        }
                    }
                    t.BaseSVGFactory = o
                }
                , (e, t, r) => {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }),
                    t.MurmurHash3_64 = void 0;
                    var n = r(1);
                    const i = 3285377520
                      , s = 4294901760
                      , a = 65535;
                    t.MurmurHash3_64 = class {
                        constructor(e) {
                            this.h1 = e ? 4294967295 & e : i,
                            this.h2 = e ? 4294967295 & e : i
                        }
                        update(e) {
                            let t, r;
                            if ("string" === typeof e) {
                                t = new Uint8Array(2 * e.length),
                                r = 0;
                                for (let n = 0, i = e.length; n < i; n++) {
                                    const i = e.charCodeAt(n);
                                    i <= 255 ? t[r++] = i : (t[r++] = i >>> 8,
                                    t[r++] = 255 & i)
                                }
                            } else {
                                if (!(0,
                                n.isArrayBuffer)(e))
                                    throw new Error("Wrong data format in MurmurHash3_64_update. Input must be a string or array.");
                                t = e.slice(),
                                r = t.byteLength
                            }
                            const i = r >> 2
                              , o = r - 4 * i
                              , l = new Uint32Array(t.buffer,0,i);
                            let c = 0
                              , h = 0
                              , d = this.h1
                              , u = this.h2;
                            const f = 3432918353
                              , p = 461845907
                              , g = 11601
                              , _ = 13715;
                            for (let n = 0; n < i; n++)
                                1 & n ? (c = l[n],
                                c = c * f & s | c * g & a,
                                c = c << 15 | c >>> 17,
                                c = c * p & s | c * _ & a,
                                d ^= c,
                                d = d << 13 | d >>> 19,
                                d = 5 * d + 3864292196) : (h = l[n],
                                h = h * f & s | h * g & a,
                                h = h << 15 | h >>> 17,
                                h = h * p & s | h * _ & a,
                                u ^= h,
                                u = u << 13 | u >>> 19,
                                u = 5 * u + 3864292196);
                            switch (c = 0,
                            o) {
                            case 3:
                                c ^= t[4 * i + 2] << 16;
                            case 2:
                                c ^= t[4 * i + 1] << 8;
                            case 1:
                                c ^= t[4 * i],
                                c = c * f & s | c * g & a,
                                c = c << 15 | c >>> 17,
                                c = c * p & s | c * _ & a,
                                1 & i ? d ^= c : u ^= c
                            }
                            this.h1 = d,
                            this.h2 = u
                        }
                        hexdigest() {
                            let e = this.h1
                              , t = this.h2;
                            e ^= t >>> 1,
                            e = 3981806797 * e & s | 36045 * e & a,
                            t = 4283543511 * t & s | (2950163797 * (t << 16 | e >>> 16) & s) >>> 16,
                            e ^= t >>> 1,
                            e = 444984403 * e & s | 60499 * e & a,
                            t = 3301882366 * t & s | (3120437893 * (t << 16 | e >>> 16) & s) >>> 16,
                            e ^= t >>> 1;
                            const r = (e >>> 0).toString(16)
                              , n = (t >>> 0).toString(16);
                            return r.padStart(8, "0") + n.padStart(8, "0")
                        }
                    }
                }
                , (e, t, r) => {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }),
                    t.FontLoader = t.FontFaceObject = void 0;
                    var n = r(1);
                    class i {
                        constructor({docId: e, onUnsupportedFeature: t, ownerDocument: r=globalThis.document, styleElement: s=null}) {
                            this.constructor === i && (0,
                            n.unreachable)("Cannot initialize BaseFontLoader."),
                            this.docId = e,
                            this._onUnsupportedFeature = t,
                            this._document = r,
                            this.nativeFontFaces = [],
                            this.styleElement = null
                        }
                        addNativeFontFace(e) {
                            this.nativeFontFaces.push(e),
                            this._document.fonts.add(e)
                        }
                        insertRule(e) {
                            let t = this.styleElement;
                            t || (t = this.styleElement = this._document.createElement("style"),
                            t.id = `PDFJS_FONT_STYLE_TAG_${this.docId}`,
                            this._document.documentElement.getElementsByTagName("head")[0].append(t));
                            const r = t.sheet;
                            r.insertRule(e, r.cssRules.length)
                        }
                        clear() {
                            for (const e of this.nativeFontFaces)
                                this._document.fonts.delete(e);
                            this.nativeFontFaces.length = 0,
                            this.styleElement && (this.styleElement.remove(),
                            this.styleElement = null)
                        }
                        async bind(e) {
                            if (e.attached || e.missingFile)
                                return;
                            if (e.attached = !0,
                            this.isFontLoadingAPISupported) {
                                const t = e.createNativeFontFace();
                                if (t) {
                                    this.addNativeFontFace(t);
                                    try {
                                        await t.loaded
                                    } catch (r) {
                                        throw this._onUnsupportedFeature({
                                            featureId: n.UNSUPPORTED_FEATURES.errorFontLoadNative
                                        }),
                                        (0,
                                        n.warn)(`Failed to load font '${t.family}': '${r}'.`),
                                        e.disableFontFace = !0,
                                        r
                                    }
                                }
                                return
                            }
                            const t = e.createFontFaceRule();
                            if (t) {
                                if (this.insertRule(t),
                                this.isSyncFontLoadingSupported)
                                    return;
                                await new Promise((r => {
                                    const n = this._queueLoadingCallback(r);
                                    this._prepareFontLoadEvent([t], [e], n)
                                }
                                ))
                            }
                        }
                        _queueLoadingCallback(e) {
                            (0,
                            n.unreachable)("Abstract method `_queueLoadingCallback`.")
                        }
                        get isFontLoadingAPISupported() {
                            const e = !!this._document?.fonts;
                            return (0,
                            n.shadow)(this, "isFontLoadingAPISupported", e)
                        }
                        get isSyncFontLoadingSupported() {
                            (0,
                            n.unreachable)("Abstract method `isSyncFontLoadingSupported`.")
                        }
                        get _loadTestFont() {
                            (0,
                            n.unreachable)("Abstract method `_loadTestFont`.")
                        }
                        _prepareFontLoadEvent(e, t, r) {
                            (0,
                            n.unreachable)("Abstract method `_prepareFontLoadEvent`.")
                        }
                    }
                    let s;
                    t.FontLoader = s,
                    t.FontLoader = s = class extends i {
                        constructor(e) {
                            super(e),
                            this.loadingContext = {
                                requests: [],
                                nextRequestId: 0
                            },
                            this.loadTestFontId = 0
                        }
                        get isSyncFontLoadingSupported() {
                            let e = !1;
                            return ("undefined" === typeof navigator || /Mozilla\/5.0.*?rv:(\d+).*? Gecko/.exec(navigator.userAgent)?.[1] >= 14) && (e = !0),
                            (0,
                            n.shadow)(this, "isSyncFontLoadingSupported", e)
                        }
                        _queueLoadingCallback(e) {
                            const t = this.loadingContext
                              , r = {
                                id: "pdfjs-font-loading-" + t.nextRequestId++,
                                done: !1,
                                complete: function() {
                                    for ((0,
                                    n.assert)(!r.done, "completeRequest() cannot be called twice."),
                                    r.done = !0; t.requests.length > 0 && t.requests[0].done; ) {
                                        const e = t.requests.shift();
                                        setTimeout(e.callback, 0)
                                    }
                                },
                                callback: e
                            };
                            return t.requests.push(r),
                            r
                        }
                        get _loadTestFont() {
                            return (0,
                            n.shadow)(this, "_loadTestFont", atob("T1RUTwALAIAAAwAwQ0ZGIDHtZg4AAAOYAAAAgUZGVE1lkzZwAAAEHAAAABxHREVGABQAFQAABDgAAAAeT1MvMlYNYwkAAAEgAAAAYGNtYXABDQLUAAACNAAAAUJoZWFk/xVFDQAAALwAAAA2aGhlYQdkA+oAAAD0AAAAJGhtdHgD6AAAAAAEWAAAAAZtYXhwAAJQAAAAARgAAAAGbmFtZVjmdH4AAAGAAAAAsXBvc3T/hgAzAAADeAAAACAAAQAAAAEAALZRFsRfDzz1AAsD6AAAAADOBOTLAAAAAM4KHDwAAAAAA+gDIQAAAAgAAgAAAAAAAAABAAADIQAAAFoD6AAAAAAD6AABAAAAAAAAAAAAAAAAAAAAAQAAUAAAAgAAAAQD6AH0AAUAAAKKArwAAACMAooCvAAAAeAAMQECAAACAAYJAAAAAAAAAAAAAQAAAAAAAAAAAAAAAFBmRWQAwAAuAC4DIP84AFoDIQAAAAAAAQAAAAAAAAAAACAAIAABAAAADgCuAAEAAAAAAAAAAQAAAAEAAAAAAAEAAQAAAAEAAAAAAAIAAQAAAAEAAAAAAAMAAQAAAAEAAAAAAAQAAQAAAAEAAAAAAAUAAQAAAAEAAAAAAAYAAQAAAAMAAQQJAAAAAgABAAMAAQQJAAEAAgABAAMAAQQJAAIAAgABAAMAAQQJAAMAAgABAAMAAQQJAAQAAgABAAMAAQQJAAUAAgABAAMAAQQJAAYAAgABWABYAAAAAAAAAwAAAAMAAAAcAAEAAAAAADwAAwABAAAAHAAEACAAAAAEAAQAAQAAAC7//wAAAC7////TAAEAAAAAAAABBgAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAD/gwAyAAAAAQAAAAAAAAAAAAAAAAAAAAABAAQEAAEBAQJYAAEBASH4DwD4GwHEAvgcA/gXBIwMAYuL+nz5tQXkD5j3CBLnEQACAQEBIVhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYAAABAQAADwACAQEEE/t3Dov6fAH6fAT+fPp8+nwHDosMCvm1Cvm1DAz6fBQAAAAAAAABAAAAAMmJbzEAAAAAzgTjFQAAAADOBOQpAAEAAAAAAAAADAAUAAQAAAABAAAAAgABAAAAAAAAAAAD6AAAAAAAAA=="))
                        }
                        _prepareFontLoadEvent(e, t, r) {
                            function i(e, t) {
                                return e.charCodeAt(t) << 24 | e.charCodeAt(t + 1) << 16 | e.charCodeAt(t + 2) << 8 | 255 & e.charCodeAt(t + 3)
                            }
                            function s(e, t, r, n) {
                                return e.substring(0, t) + n + e.substring(t + r)
                            }
                            let a, o;
                            const l = this._document.createElement("canvas");
                            l.width = 1,
                            l.height = 1;
                            const c = l.getContext("2d");
                            let h = 0;
                            const d = `lt${Date.now()}${this.loadTestFontId++}`;
                            let u = this._loadTestFont;
                            u = s(u, 976, d.length, d);
                            const f = 1482184792;
                            let p = i(u, 16);
                            for (a = 0,
                            o = d.length - 3; a < o; a += 4)
                                p = p - f + i(d, a) | 0;
                            a < d.length && (p = p - f + i(d + "XXX", a) | 0),
                            u = s(u, 16, 4, (0,
                            n.string32)(p));
                            const g = `@font-face {font-family:"${d}";src:url(data:font/opentype;base64,${btoa(u)});}`;
                            this.insertRule(g);
                            const _ = [];
                            for (const n of t)
                                _.push(n.loadedName);
                            _.push(d);
                            const m = this._document.createElement("div");
                            m.style.visibility = "hidden",
                            m.style.width = m.style.height = "10px",
                            m.style.position = "absolute",
                            m.style.top = m.style.left = "0px";
                            for (const n of _) {
                                const e = this._document.createElement("span");
                                e.textContent = "Hi",
                                e.style.fontFamily = n,
                                m.append(e)
                            }
                            this._document.body.append(m),
                            function e(t, r) {
                                if (h++,
                                h > 30)
                                    return (0,
                                    n.warn)("Load test font never loaded."),
                                    void r();
                                c.font = "30px " + t,
                                c.fillText(".", 0, 20),
                                c.getImageData(0, 0, 1, 1).data[3] > 0 ? r() : setTimeout(e.bind(null, t, r))
                            }(d, ( () => {
                                m.remove(),
                                r.complete()
                            }
                            ))
                        }
                    }
                    ,
                    t.FontFaceObject = class {
                        constructor(e, {isEvalSupported: t=!0, disableFontFace: r=!1, ignoreErrors: n=!1, onUnsupportedFeature: i, fontRegistry: s=null}) {
                            this.compiledGlyphs = Object.create(null);
                            for (const a in e)
                                this[a] = e[a];
                            this.isEvalSupported = !1 !== t,
                            this.disableFontFace = !0 === r,
                            this.ignoreErrors = !0 === n,
                            this._onUnsupportedFeature = i,
                            this.fontRegistry = s
                        }
                        createNativeFontFace() {
                            if (!this.data || this.disableFontFace)
                                return null;
                            let e;
                            if (this.cssFontInfo) {
                                const t = {
                                    weight: this.cssFontInfo.fontWeight
                                };
                                this.cssFontInfo.italicAngle && (t.style = `oblique ${this.cssFontInfo.italicAngle}deg`),
                                e = new FontFace(this.cssFontInfo.fontFamily,this.data,t)
                            } else
                                e = new FontFace(this.loadedName,this.data,{});
                            return this.fontRegistry && this.fontRegistry.registerFont(this),
                            e
                        }
                        createFontFaceRule() {
                            if (!this.data || this.disableFontFace)
                                return null;
                            const e = (0,
                            n.bytesToString)(this.data)
                              , t = `url(data:${this.mimetype};base64,${btoa(e)});`;
                            let r;
                            if (this.cssFontInfo) {
                                let e = `font-weight: ${this.cssFontInfo.fontWeight};`;
                                this.cssFontInfo.italicAngle && (e += `font-style: oblique ${this.cssFontInfo.italicAngle}deg;`),
                                r = `@font-face {font-family:"${this.cssFontInfo.fontFamily}";${e}src:${t}}`
                            } else
                                r = `@font-face {font-family:"${this.loadedName}";src:${t}}`;
                            return this.fontRegistry && this.fontRegistry.registerFont(this, t),
                            r
                        }
                        getPathGenerator(e, t) {
                            if (void 0 !== this.compiledGlyphs[t])
                                return this.compiledGlyphs[t];
                            let r;
                            try {
                                r = e.get(this.loadedName + "_path_" + t)
                            } catch (i) {
                                if (!this.ignoreErrors)
                                    throw i;
                                return this._onUnsupportedFeature({
                                    featureId: n.UNSUPPORTED_FEATURES.errorFontGetPath
                                }),
                                (0,
                                n.warn)(`getPathGenerator - ignoring character: "${i}".`),
                                this.compiledGlyphs[t] = function(e, t) {}
                            }
                            if (this.isEvalSupported && n.FeatureTest.isEvalSupported) {
                                const e = [];
                                for (const t of r) {
                                    const r = void 0 !== t.args ? t.args.join(",") : "";
                                    e.push("c.", t.cmd, "(", r, ");\n")
                                }
                                return this.compiledGlyphs[t] = new Function("c","size",e.join(""))
                            }
                            return this.compiledGlyphs[t] = function(e, t) {
                                for (const n of r)
                                    "scale" === n.cmd && (n.args = [t, -t]),
                                    e[n.cmd].apply(e, n.args)
                            }
                        }
                    }
                }
                , (e, t, r) => {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }),
                    t.CanvasGraphics = void 0;
                    var n = r(8)
                      , i = r(1)
                      , s = r(13)
                      , a = r(14)
                      , o = r(3);
                    const l = 4096
                      , c = o.isNodeJS && "undefined" === typeof Path2D ? -1 : 1e3
                      , h = 16;
                    class d {
                        constructor(e) {
                            this.canvasFactory = e,
                            this.cache = Object.create(null)
                        }
                        getCanvas(e, t, r) {
                            let n;
                            return void 0 !== this.cache[e] ? (n = this.cache[e],
                            this.canvasFactory.reset(n, t, r)) : (n = this.canvasFactory.create(t, r),
                            this.cache[e] = n),
                            n
                        }
                        delete(e) {
                            delete this.cache[e]
                        }
                        clear() {
                            for (const e in this.cache) {
                                const t = this.cache[e];
                                this.canvasFactory.destroy(t),
                                delete this.cache[e]
                            }
                        }
                    }
                    function u(e, t, r, i, s, a, o, l, c, h) {
                        const [d,u,f,p,g,_] = (0,
                        n.getCurrentTransform)(e);
                        if (0 === u && 0 === f) {
                            const n = o * d + g
                              , m = Math.round(n)
                              , b = l * p + _
                              , v = Math.round(b)
                              , y = (o + c) * d + g
                              , A = Math.abs(Math.round(y) - m) || 1
                              , E = (l + h) * p + _
                              , S = Math.abs(Math.round(E) - v) || 1;
                            return e.setTransform(Math.sign(d), 0, 0, Math.sign(p), m, v),
                            e.drawImage(t, r, i, s, a, 0, 0, A, S),
                            e.setTransform(d, u, f, p, g, _),
                            [A, S]
                        }
                        if (0 === d && 0 === p) {
                            const n = l * f + g
                              , m = Math.round(n)
                              , b = o * u + _
                              , v = Math.round(b)
                              , y = (l + h) * f + g
                              , A = Math.abs(Math.round(y) - m) || 1
                              , E = (o + c) * u + _
                              , S = Math.abs(Math.round(E) - v) || 1;
                            return e.setTransform(0, Math.sign(u), Math.sign(f), 0, m, v),
                            e.drawImage(t, r, i, s, a, 0, 0, S, A),
                            e.setTransform(d, u, f, p, g, _),
                            [S, A]
                        }
                        return e.drawImage(t, r, i, s, a, o, l, c, h),
                        [Math.hypot(d, u) * c, Math.hypot(f, p) * h]
                    }
                    class f {
                        constructor(e, t) {
                            this.alphaIsShape = !1,
                            this.fontSize = 0,
                            this.fontSizeScale = 1,
                            this.textMatrix = i.IDENTITY_MATRIX,
                            this.textMatrixScale = 1,
                            this.fontMatrix = i.FONT_IDENTITY_MATRIX,
                            this.leading = 0,
                            this.x = 0,
                            this.y = 0,
                            this.lineX = 0,
                            this.lineY = 0,
                            this.charSpacing = 0,
                            this.wordSpacing = 0,
                            this.textHScale = 1,
                            this.textRenderingMode = i.TextRenderingMode.FILL,
                            this.textRise = 0,
                            this.fillColor = "#000000",
                            this.strokeColor = "#000000",
                            this.patternFill = !1,
                            this.fillAlpha = 1,
                            this.strokeAlpha = 1,
                            this.lineWidth = 1,
                            this.activeSMask = null,
                            this.transferMaps = null,
                            this.startNewPathAndClipBox([0, 0, e, t])
                        }
                        clone() {
                            const e = Object.create(this);
                            return e.clipBox = this.clipBox.slice(),
                            e
                        }
                        setCurrentPoint(e, t) {
                            this.x = e,
                            this.y = t
                        }
                        updatePathMinMax(e, t, r) {
                            [t,r] = i.Util.applyTransform([t, r], e),
                            this.minX = Math.min(this.minX, t),
                            this.minY = Math.min(this.minY, r),
                            this.maxX = Math.max(this.maxX, t),
                            this.maxY = Math.max(this.maxY, r)
                        }
                        updateRectMinMax(e, t) {
                            const r = i.Util.applyTransform(t, e)
                              , n = i.Util.applyTransform(t.slice(2), e);
                            this.minX = Math.min(this.minX, r[0], n[0]),
                            this.minY = Math.min(this.minY, r[1], n[1]),
                            this.maxX = Math.max(this.maxX, r[0], n[0]),
                            this.maxY = Math.max(this.maxY, r[1], n[1])
                        }
                        updateScalingPathMinMax(e, t) {
                            i.Util.scaleMinMax(e, t),
                            this.minX = Math.min(this.minX, t[0]),
                            this.maxX = Math.max(this.maxX, t[1]),
                            this.minY = Math.min(this.minY, t[2]),
                            this.maxY = Math.max(this.maxY, t[3])
                        }
                        updateCurvePathMinMax(e, t, r, n, s, a, o, l, c, h) {
                            const d = i.Util.bezierBoundingBox(t, r, n, s, a, o, l, c);
                            if (h)
                                return h[0] = Math.min(h[0], d[0], d[2]),
                                h[1] = Math.max(h[1], d[0], d[2]),
                                h[2] = Math.min(h[2], d[1], d[3]),
                                void (h[3] = Math.max(h[3], d[1], d[3]));
                            this.updateRectMinMax(e, d)
                        }
                        getPathBoundingBox(e=s.PathType.FILL, t=null) {
                            const r = [this.minX, this.minY, this.maxX, this.maxY];
                            if (e === s.PathType.STROKE) {
                                t || (0,
                                i.unreachable)("Stroke bounding box must include transform.");
                                const e = i.Util.singularValueDecompose2dScale(t)
                                  , n = e[0] * this.lineWidth / 2
                                  , s = e[1] * this.lineWidth / 2;
                                r[0] -= n,
                                r[1] -= s,
                                r[2] += n,
                                r[3] += s
                            }
                            return r
                        }
                        updateClipFromPath() {
                            const e = i.Util.intersect(this.clipBox, this.getPathBoundingBox());
                            this.startNewPathAndClipBox(e || [0, 0, 0, 0])
                        }
                        isEmptyClip() {
                            return this.minX === 1 / 0
                        }
                        startNewPathAndClipBox(e) {
                            this.clipBox = e,
                            this.minX = 1 / 0,
                            this.minY = 1 / 0,
                            this.maxX = 0,
                            this.maxY = 0
                        }
                        getClippedPathBoundingBox(e=s.PathType.FILL, t=null) {
                            return i.Util.intersect(this.clipBox, this.getPathBoundingBox(e, t))
                        }
                    }
                    function p(e, t, r=null) {
                        if ("undefined" !== typeof ImageData && t instanceof ImageData)
                            return void e.putImageData(t, 0, 0);
                        const n = t.height
                          , s = t.width
                          , a = n % h
                          , o = (n - a) / h
                          , l = 0 === a ? o : o + 1
                          , c = e.createImageData(s, h);
                        let d, u = 0;
                        const f = t.data
                          , p = c.data;
                        let g, _, m, b, v, y, A, E;
                        if (r)
                            switch (r.length) {
                            case 1:
                                v = r[0],
                                y = r[0],
                                A = r[0],
                                E = r[0];
                                break;
                            case 4:
                                v = r[0],
                                y = r[1],
                                A = r[2],
                                E = r[3]
                            }
                        if (t.kind === i.ImageKind.GRAYSCALE_1BPP) {
                            const t = f.byteLength
                              , r = new Uint32Array(p.buffer,0,p.byteLength >> 2)
                              , n = r.length
                              , b = s + 7 >> 3;
                            let v = 4294967295
                              , y = i.FeatureTest.isLittleEndian ? 4278190080 : 255;
                            for (E && 255 === E[0] && 0 === E[255] && ([v,y] = [y, v]),
                            g = 0; g < l; g++) {
                                for (m = g < o ? h : a,
                                d = 0,
                                _ = 0; _ < m; _++) {
                                    const e = t - u;
                                    let n = 0;
                                    const i = e > b ? s : 8 * e - 7
                                      , a = -8 & i;
                                    let o = 0
                                      , l = 0;
                                    for (; n < a; n += 8)
                                        l = f[u++],
                                        r[d++] = 128 & l ? v : y,
                                        r[d++] = 64 & l ? v : y,
                                        r[d++] = 32 & l ? v : y,
                                        r[d++] = 16 & l ? v : y,
                                        r[d++] = 8 & l ? v : y,
                                        r[d++] = 4 & l ? v : y,
                                        r[d++] = 2 & l ? v : y,
                                        r[d++] = 1 & l ? v : y;
                                    for (; n < i; n++)
                                        0 === o && (l = f[u++],
                                        o = 128),
                                        r[d++] = l & o ? v : y,
                                        o >>= 1
                                }
                                for (; d < n; )
                                    r[d++] = 0;
                                e.putImageData(c, 0, g * h)
                            }
                        } else if (t.kind === i.ImageKind.RGBA_32BPP) {
                            const t = !!(v || y || A);
                            for (_ = 0,
                            b = s * h * 4,
                            g = 0; g < o; g++) {
                                if (p.set(f.subarray(u, u + b)),
                                u += b,
                                t)
                                    for (let e = 0; e < b; e += 4)
                                        v && (p[e + 0] = v[p[e + 0]]),
                                        y && (p[e + 1] = y[p[e + 1]]),
                                        A && (p[e + 2] = A[p[e + 2]]);
                                e.putImageData(c, 0, _),
                                _ += h
                            }
                            if (g < l) {
                                if (b = s * a * 4,
                                p.set(f.subarray(u, u + b)),
                                t)
                                    for (let e = 0; e < b; e += 4)
                                        v && (p[e + 0] = v[p[e + 0]]),
                                        y && (p[e + 1] = y[p[e + 1]]),
                                        A && (p[e + 2] = A[p[e + 2]]);
                                e.putImageData(c, 0, _)
                            }
                        } else {
                            if (t.kind !== i.ImageKind.RGB_24BPP)
                                throw new Error(`bad image kind: ${t.kind}`);
                            {
                                const t = !!(v || y || A);
                                for (m = h,
                                b = s * m,
                                g = 0; g < l; g++) {
                                    for (g >= o && (m = a,
                                    b = s * m),
                                    d = 0,
                                    _ = b; _--; )
                                        p[d++] = f[u++],
                                        p[d++] = f[u++],
                                        p[d++] = f[u++],
                                        p[d++] = 255;
                                    if (t)
                                        for (let e = 0; e < d; e += 4)
                                            v && (p[e + 0] = v[p[e + 0]]),
                                            y && (p[e + 1] = y[p[e + 1]]),
                                            A && (p[e + 2] = A[p[e + 2]]);
                                    e.putImageData(c, 0, g * h)
                                }
                            }
                        }
                    }
                    function g(e, t) {
                        if (t.bitmap)
                            return void e.drawImage(t.bitmap, 0, 0);
                        const r = t.height
                          , n = t.width
                          , i = r % h
                          , s = (r - i) / h
                          , o = 0 === i ? s : s + 1
                          , l = e.createImageData(n, h);
                        let c = 0;
                        const d = t.data
                          , u = l.data;
                        for (let f = 0; f < o; f++) {
                            const t = f < s ? h : i;
                            ({srcPos: c} = (0,
                            a.applyMaskImageData)({
                                src: d,
                                srcPos: c,
                                dest: u,
                                width: n,
                                height: t
                            })),
                            e.putImageData(l, 0, f * h)
                        }
                    }
                    function _(e, t) {
                        const r = ["strokeStyle", "fillStyle", "fillRule", "globalAlpha", "lineWidth", "lineCap", "lineJoin", "miterLimit", "globalCompositeOperation", "font"];
                        for (let n = 0, i = r.length; n < i; n++) {
                            const i = r[n];
                            void 0 !== e[i] && (t[i] = e[i])
                        }
                        void 0 !== e.setLineDash && (t.setLineDash(e.getLineDash()),
                        t.lineDashOffset = e.lineDashOffset)
                    }
                    function m(e, t) {
                        e.strokeStyle = e.fillStyle = t || "#000000",
                        e.fillRule = "nonzero",
                        e.globalAlpha = 1,
                        e.lineWidth = 1,
                        e.lineCap = "butt",
                        e.lineJoin = "miter",
                        e.miterLimit = 10,
                        e.globalCompositeOperation = "source-over",
                        e.font = "10px sans-serif",
                        void 0 !== e.setLineDash && (e.setLineDash([]),
                        e.lineDashOffset = 0)
                    }
                    function b(e, t, r, n) {
                        const i = e.length;
                        for (let s = 3; s < i; s += 4) {
                            const i = e[s];
                            if (0 === i)
                                e[s - 3] = t,
                                e[s - 2] = r,
                                e[s - 1] = n;
                            else if (i < 255) {
                                const a = 255 - i;
                                e[s - 3] = e[s - 3] * i + t * a >> 8,
                                e[s - 2] = e[s - 2] * i + r * a >> 8,
                                e[s - 1] = e[s - 1] * i + n * a >> 8
                            }
                        }
                    }
                    function v(e, t, r) {
                        const n = e.length;
                        for (let i = 3; i < n; i += 4) {
                            const n = r ? r[e[i]] : e[i];
                            t[i] = t[i] * n * .00392156862745098 | 0
                        }
                    }
                    function y(e, t, r) {
                        const n = e.length;
                        for (let i = 3; i < n; i += 4) {
                            const n = 77 * e[i - 3] + 152 * e[i - 2] + 28 * e[i - 1];
                            t[i] = r ? t[i] * r[n >> 8] >> 8 : t[i] * n >> 16
                        }
                    }
                    function A(e, t, r, n) {
                        const i = n[0]
                          , s = n[1]
                          , a = n[2] - i
                          , o = n[3] - s;
                        0 !== a && 0 !== o && (function(e, t, r, n, i, s, a, o, l, c, h) {
                            const d = !!s
                              , u = d ? s[0] : 0
                              , f = d ? s[1] : 0
                              , p = d ? s[2] : 0;
                            let g;
                            g = "Luminosity" === i ? y : v;
                            const _ = Math.min(n, Math.ceil(1048576 / r));
                            for (let m = 0; m < n; m += _) {
                                const i = Math.min(_, n - m)
                                  , s = e.getImageData(o - c, m + (l - h), r, i)
                                  , v = t.getImageData(o, m + l, r, i);
                                d && b(s.data, u, f, p),
                                g(s.data, v.data, a),
                                t.putImageData(v, o, m + l)
                            }
                        }(t.context, r, a, o, t.subtype, t.backdrop, t.transferMap, i, s, t.offsetX, t.offsetY),
                        e.save(),
                        e.globalAlpha = 1,
                        e.globalCompositeOperation = "source-over",
                        e.setTransform(1, 0, 0, 1, 0, 0),
                        e.drawImage(r.canvas, 0, 0),
                        e.restore())
                    }
                    function E(e, t) {
                        const r = i.Util.singularValueDecompose2dScale(e);
                        r[0] = Math.fround(r[0]),
                        r[1] = Math.fround(r[1]);
                        const s = Math.fround((globalThis.devicePixelRatio || 1) * n.PixelsPerInch.PDF_TO_CSS_UNITS);
                        return void 0 !== t ? t : r[0] <= s || r[1] <= s
                    }
                    const S = ["butt", "round", "square"]
                      , w = ["miter", "round", "bevel"]
                      , T = {}
                      , x = {};
                    class C {
                        constructor(e, t, r, n, i, s, a, o) {
                            this.ctx = e,
                            this.current = new f(this.ctx.canvas.width,this.ctx.canvas.height),
                            this.stateStack = [],
                            this.pendingClip = null,
                            this.pendingEOFill = !1,
                            this.res = null,
                            this.xobjs = null,
                            this.commonObjs = t,
                            this.objs = r,
                            this.canvasFactory = n,
                            this.imageLayer = i,
                            this.groupStack = [],
                            this.processingType3 = null,
                            this.baseTransform = null,
                            this.baseTransformStack = [],
                            this.groupLevel = 0,
                            this.smaskStack = [],
                            this.smaskCounter = 0,
                            this.tempSMask = null,
                            this.suspendedCtx = null,
                            this.contentVisible = !0,
                            this.markedContentStack = [],
                            this.optionalContentConfig = s,
                            this.cachedCanvases = new d(this.canvasFactory),
                            this.cachedPatterns = new Map,
                            this.annotationCanvasMap = a,
                            this.viewportScale = 1,
                            this.outputScaleX = 1,
                            this.outputScaleY = 1,
                            this.backgroundColor = o?.background || null,
                            this.foregroundColor = o?.foreground || null,
                            this._cachedScaleForStroking = null,
                            this._cachedGetSinglePixelWidth = null,
                            this._cachedBitmapsMap = new Map
                        }
                        getObject(e, t=null) {
                            return "string" === typeof e ? e.startsWith("g_") ? this.commonObjs.get(e) : this.objs.get(e) : t
                        }
                        beginDrawing({transform: e, viewport: t, transparency: r=!1, background: i=null}) {
                            const s = this.ctx.canvas.width
                              , a = this.ctx.canvas.height
                              , o = i || "#ffffff";
                            if (this.ctx.save(),
                            this.foregroundColor && this.backgroundColor) {
                                this.ctx.fillStyle = this.foregroundColor;
                                const e = this.foregroundColor = this.ctx.fillStyle;
                                this.ctx.fillStyle = this.backgroundColor;
                                const t = this.backgroundColor = this.ctx.fillStyle;
                                let r = !0
                                  , i = o;
                                if (this.ctx.fillStyle = o,
                                i = this.ctx.fillStyle,
                                r = "string" === typeof i && /^#[0-9A-Fa-f]{6}$/.test(i),
                                "#000000" === e && "#ffffff" === t || e === t || !r)
                                    this.foregroundColor = this.backgroundColor = null;
                                else {
                                    const [r,s,a] = (0,
                                    n.getRGB)(i)
                                      , o = e => (e /= 255) <= .03928 ? e / 12.92 : ((e + .055) / 1.055) ** 2.4
                                      , l = Math.round(.2126 * o(r) + .7152 * o(s) + .0722 * o(a));
                                    this.selectColor = (r, n, i) => {
                                        const s = .2126 * o(r) + .7152 * o(n) + .0722 * o(i);
                                        return Math.round(s) === l ? t : e
                                    }
                                }
                            }
                            if (this.ctx.fillStyle = this.backgroundColor || o,
                            this.ctx.fillRect(0, 0, s, a),
                            this.ctx.restore(),
                            r) {
                                const e = this.cachedCanvases.getCanvas("transparent", s, a);
                                this.compositeCtx = this.ctx,
                                this.transparentCanvas = e.canvas,
                                this.ctx = e.context,
                                this.ctx.save(),
                                this.ctx.transform(...(0,
                                n.getCurrentTransform)(this.compositeCtx))
                            }
                            this.ctx.save(),
                            m(this.ctx, this.foregroundColor),
                            e && (this.ctx.transform(...e),
                            this.outputScaleX = e[0],
                            this.outputScaleY = e[0]),
                            this.ctx.transform(...t.transform),
                            this.viewportScale = t.scale,
                            this.baseTransform = (0,
                            n.getCurrentTransform)(this.ctx),
                            this.imageLayer && ((0,
                            n.deprecated)("The `imageLayer` functionality will be removed in the future."),
                            this.imageLayer.beginLayout())
                        }
                        executeOperatorList(e, t, r, n) {
                            const s = e.argsArray
                              , a = e.fnArray;
                            let o = t || 0;
                            const l = s.length;
                            if (l === o)
                                return o;
                            const c = l - o > 10 && "function" === typeof r
                              , h = c ? Date.now() + 15 : 0;
                            let d = 0;
                            const u = this.commonObjs
                              , f = this.objs;
                            let p;
                            for (; ; ) {
                                if (void 0 !== n && o === n.nextBreakPoint)
                                    return n.breakIt(o, r),
                                    o;
                                if (p = a[o],
                                p !== i.OPS.dependency)
                                    this[p].apply(this, s[o]);
                                else
                                    for (const e of s[o]) {
                                        const t = e.startsWith("g_") ? u : f;
                                        if (!t.has(e))
                                            return t.get(e, r),
                                            o
                                    }
                                if (o++,
                                o === l)
                                    return o;
                                if (c && ++d > 10) {
                                    if (Date.now() > h)
                                        return r(),
                                        o;
                                    d = 0
                                }
                            }
                        }
                        #K() {
                            for (; this.stateStack.length || this.inSMaskMode; )
                                this.restore();
                            this.ctx.restore(),
                            this.transparentCanvas && (this.ctx = this.compositeCtx,
                            this.ctx.save(),
                            this.ctx.setTransform(1, 0, 0, 1, 0, 0),
                            this.ctx.drawImage(this.transparentCanvas, 0, 0),
                            this.ctx.restore(),
                            this.transparentCanvas = null)
                        }
                        endDrawing() {
                            this.#K(),
                            this.cachedCanvases.clear(),
                            this.cachedPatterns.clear();
                            for (const e of this._cachedBitmapsMap.values()) {
                                for (const t of e.values())
                                    "undefined" !== typeof HTMLCanvasElement && t instanceof HTMLCanvasElement && (t.width = t.height = 0);
                                e.clear()
                            }
                            this._cachedBitmapsMap.clear(),
                            this.imageLayer && this.imageLayer.endLayout()
                        }
                        _scaleImage(e, t) {
                            const r = e.width
                              , n = e.height;
                            let i, s, a = Math.max(Math.hypot(t[0], t[1]), 1), o = Math.max(Math.hypot(t[2], t[3]), 1), l = r, c = n, h = "prescale1";
                            for (; a > 2 && l > 1 || o > 2 && c > 1; ) {
                                let t = l
                                  , r = c;
                                a > 2 && l > 1 && (t = Math.ceil(l / 2),
                                a /= l / t),
                                o > 2 && c > 1 && (r = Math.ceil(c / 2),
                                o /= c / r),
                                i = this.cachedCanvases.getCanvas(h, t, r),
                                s = i.context,
                                s.clearRect(0, 0, t, r),
                                s.drawImage(e, 0, 0, l, c, 0, 0, t, r),
                                e = i.canvas,
                                l = t,
                                c = r,
                                h = "prescale1" === h ? "prescale2" : "prescale1"
                            }
                            return {
                                img: e,
                                paintWidth: l,
                                paintHeight: c
                            }
                        }
                        _createMaskCanvas(e) {
                            const t = this.ctx
                              , {width: r, height: a} = e
                              , o = this.current.fillColor
                              , l = this.current.patternFill
                              , c = (0,
                            n.getCurrentTransform)(t);
                            let h, d, f, p;
                            if ((e.bitmap || e.data) && e.count > 1) {
                                const t = e.bitmap || e.data.buffer
                                  , r = c.slice(0, 4);
                                d = JSON.stringify(l ? r : [r, o]),
                                h = this._cachedBitmapsMap.get(t),
                                h || (h = new Map,
                                this._cachedBitmapsMap.set(t, h));
                                const n = h.get(d);
                                if (n && !l)
                                    return {
                                        canvas: n,
                                        offsetX: Math.round(Math.min(c[0], c[2]) + c[4]),
                                        offsetY: Math.round(Math.min(c[1], c[3]) + c[5])
                                    };
                                f = n
                            }
                            f || (p = this.cachedCanvases.getCanvas("maskCanvas", r, a),
                            g(p.context, e));
                            let _ = i.Util.transform(c, [1 / r, 0, 0, -1 / a, 0, 0]);
                            _ = i.Util.transform(_, [1, 0, 0, 1, 0, -a]);
                            const m = i.Util.applyTransform([0, 0], _)
                              , b = i.Util.applyTransform([r, a], _)
                              , v = i.Util.normalizeRect([m[0], m[1], b[0], b[1]])
                              , y = Math.round(v[2] - v[0]) || 1
                              , A = Math.round(v[3] - v[1]) || 1
                              , S = this.cachedCanvases.getCanvas("fillCanvas", y, A)
                              , w = S.context
                              , T = Math.min(m[0], b[0])
                              , x = Math.min(m[1], b[1]);
                            w.translate(-T, -x),
                            w.transform(..._),
                            f || (f = this._scaleImage(p.canvas, (0,
                            n.getCurrentTransformInverse)(w)),
                            f = f.img,
                            h && l && h.set(d, f)),
                            w.imageSmoothingEnabled = E((0,
                            n.getCurrentTransform)(w), e.interpolate),
                            u(w, f, 0, 0, f.width, f.height, 0, 0, r, a),
                            w.globalCompositeOperation = "source-in";
                            const C = i.Util.transform((0,
                            n.getCurrentTransformInverse)(w), [1, 0, 0, 1, -T, -x]);
                            return w.fillStyle = l ? o.getPattern(t, this, C, s.PathType.FILL) : o,
                            w.fillRect(0, 0, r, a),
                            h && !l && (this.cachedCanvases.delete("fillCanvas"),
                            h.set(d, S.canvas)),
                            {
                                canvas: S.canvas,
                                offsetX: Math.round(T),
                                offsetY: Math.round(x)
                            }
                        }
                        setLineWidth(e) {
                            e !== this.current.lineWidth && (this._cachedScaleForStroking = null),
                            this.current.lineWidth = e,
                            this.ctx.lineWidth = e
                        }
                        setLineCap(e) {
                            this.ctx.lineCap = S[e]
                        }
                        setLineJoin(e) {
                            this.ctx.lineJoin = w[e]
                        }
                        setMiterLimit(e) {
                            this.ctx.miterLimit = e
                        }
                        setDash(e, t) {
                            const r = this.ctx;
                            void 0 !== r.setLineDash && (r.setLineDash(e),
                            r.lineDashOffset = t)
                        }
                        setRenderingIntent(e) {}
                        setFlatness(e) {}
                        setGState(e) {
                            for (let t = 0, r = e.length; t < r; t++) {
                                const r = e[t]
                                  , n = r[0]
                                  , i = r[1];
                                switch (n) {
                                case "LW":
                                    this.setLineWidth(i);
                                    break;
                                case "LC":
                                    this.setLineCap(i);
                                    break;
                                case "LJ":
                                    this.setLineJoin(i);
                                    break;
                                case "ML":
                                    this.setMiterLimit(i);
                                    break;
                                case "D":
                                    this.setDash(i[0], i[1]);
                                    break;
                                case "RI":
                                    this.setRenderingIntent(i);
                                    break;
                                case "FL":
                                    this.setFlatness(i);
                                    break;
                                case "Font":
                                    this.setFont(i[0], i[1]);
                                    break;
                                case "CA":
                                    this.current.strokeAlpha = r[1];
                                    break;
                                case "ca":
                                    this.current.fillAlpha = r[1],
                                    this.ctx.globalAlpha = r[1];
                                    break;
                                case "BM":
                                    this.ctx.globalCompositeOperation = i;
                                    break;
                                case "SMask":
                                    this.current.activeSMask = i ? this.tempSMask : null,
                                    this.tempSMask = null,
                                    this.checkSMaskState();
                                    break;
                                case "TR":
                                    this.current.transferMaps = i
                                }
                            }
                        }
                        get inSMaskMode() {
                            return !!this.suspendedCtx
                        }
                        checkSMaskState() {
                            const e = this.inSMaskMode;
                            this.current.activeSMask && !e ? this.beginSMaskMode() : !this.current.activeSMask && e && this.endSMaskMode()
                        }
                        beginSMaskMode() {
                            if (this.inSMaskMode)
                                throw new Error("beginSMaskMode called while already in smask mode");
                            const e = this.ctx.canvas.width
                              , t = this.ctx.canvas.height
                              , r = "smaskGroupAt" + this.groupLevel
                              , i = this.cachedCanvases.getCanvas(r, e, t);
                            this.suspendedCtx = this.ctx,
                            this.ctx = i.context;
                            const s = this.ctx;
                            s.setTransform(...(0,
                            n.getCurrentTransform)(this.suspendedCtx)),
                            _(this.suspendedCtx, s),
                            function(e, t) {
                                if (e._removeMirroring)
                                    throw new Error("Context is already forwarding operations.");
                                e.__originalSave = e.save,
                                e.__originalRestore = e.restore,
                                e.__originalRotate = e.rotate,
                                e.__originalScale = e.scale,
                                e.__originalTranslate = e.translate,
                                e.__originalTransform = e.transform,
                                e.__originalSetTransform = e.setTransform,
                                e.__originalResetTransform = e.resetTransform,
                                e.__originalClip = e.clip,
                                e.__originalMoveTo = e.moveTo,
                                e.__originalLineTo = e.lineTo,
                                e.__originalBezierCurveTo = e.bezierCurveTo,
                                e.__originalRect = e.rect,
                                e.__originalClosePath = e.closePath,
                                e.__originalBeginPath = e.beginPath,
                                e._removeMirroring = () => {
                                    e.save = e.__originalSave,
                                    e.restore = e.__originalRestore,
                                    e.rotate = e.__originalRotate,
                                    e.scale = e.__originalScale,
                                    e.translate = e.__originalTranslate,
                                    e.transform = e.__originalTransform,
                                    e.setTransform = e.__originalSetTransform,
                                    e.resetTransform = e.__originalResetTransform,
                                    e.clip = e.__originalClip,
                                    e.moveTo = e.__originalMoveTo,
                                    e.lineTo = e.__originalLineTo,
                                    e.bezierCurveTo = e.__originalBezierCurveTo,
                                    e.rect = e.__originalRect,
                                    e.closePath = e.__originalClosePath,
                                    e.beginPath = e.__originalBeginPath,
                                    delete e._removeMirroring
                                }
                                ,
                                e.save = function() {
                                    t.save(),
                                    this.__originalSave()
                                }
                                ,
                                e.restore = function() {
                                    t.restore(),
                                    this.__originalRestore()
                                }
                                ,
                                e.translate = function(e, r) {
                                    t.translate(e, r),
                                    this.__originalTranslate(e, r)
                                }
                                ,
                                e.scale = function(e, r) {
                                    t.scale(e, r),
                                    this.__originalScale(e, r)
                                }
                                ,
                                e.transform = function(e, r, n, i, s, a) {
                                    t.transform(e, r, n, i, s, a),
                                    this.__originalTransform(e, r, n, i, s, a)
                                }
                                ,
                                e.setTransform = function(e, r, n, i, s, a) {
                                    t.setTransform(e, r, n, i, s, a),
                                    this.__originalSetTransform(e, r, n, i, s, a)
                                }
                                ,
                                e.resetTransform = function() {
                                    t.resetTransform(),
                                    this.__originalResetTransform()
                                }
                                ,
                                e.rotate = function(e) {
                                    t.rotate(e),
                                    this.__originalRotate(e)
                                }
                                ,
                                e.clip = function(e) {
                                    t.clip(e),
                                    this.__originalClip(e)
                                }
                                ,
                                e.moveTo = function(e, r) {
                                    t.moveTo(e, r),
                                    this.__originalMoveTo(e, r)
                                }
                                ,
                                e.lineTo = function(e, r) {
                                    t.lineTo(e, r),
                                    this.__originalLineTo(e, r)
                                }
                                ,
                                e.bezierCurveTo = function(e, r, n, i, s, a) {
                                    t.bezierCurveTo(e, r, n, i, s, a),
                                    this.__originalBezierCurveTo(e, r, n, i, s, a)
                                }
                                ,
                                e.rect = function(e, r, n, i) {
                                    t.rect(e, r, n, i),
                                    this.__originalRect(e, r, n, i)
                                }
                                ,
                                e.closePath = function() {
                                    t.closePath(),
                                    this.__originalClosePath()
                                }
                                ,
                                e.beginPath = function() {
                                    t.beginPath(),
                                    this.__originalBeginPath()
                                }
                            }(s, this.suspendedCtx),
                            this.setGState([["BM", "source-over"], ["ca", 1], ["CA", 1]])
                        }
                        endSMaskMode() {
                            if (!this.inSMaskMode)
                                throw new Error("endSMaskMode called while not in smask mode");
                            this.ctx._removeMirroring(),
                            _(this.ctx, this.suspendedCtx),
                            this.ctx = this.suspendedCtx,
                            this.suspendedCtx = null
                        }
                        compose(e) {
                            if (!this.current.activeSMask)
                                return;
                            e ? (e[0] = Math.floor(e[0]),
                            e[1] = Math.floor(e[1]),
                            e[2] = Math.ceil(e[2]),
                            e[3] = Math.ceil(e[3])) : e = [0, 0, this.ctx.canvas.width, this.ctx.canvas.height];
                            const t = this.current.activeSMask;
                            A(this.suspendedCtx, t, this.ctx, e),
                            this.ctx.save(),
                            this.ctx.setTransform(1, 0, 0, 1, 0, 0),
                            this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height),
                            this.ctx.restore()
                        }
                        save() {
                            this.inSMaskMode ? (_(this.ctx, this.suspendedCtx),
                            this.suspendedCtx.save()) : this.ctx.save();
                            const e = this.current;
                            this.stateStack.push(e),
                            this.current = e.clone()
                        }
                        restore() {
                            0 === this.stateStack.length && this.inSMaskMode && this.endSMaskMode(),
                            0 !== this.stateStack.length && (this.current = this.stateStack.pop(),
                            this.inSMaskMode ? (this.suspendedCtx.restore(),
                            _(this.suspendedCtx, this.ctx)) : this.ctx.restore(),
                            this.checkSMaskState(),
                            this.pendingClip = null,
                            this._cachedScaleForStroking = null,
                            this._cachedGetSinglePixelWidth = null)
                        }
                        transform(e, t, r, n, i, s) {
                            this.ctx.transform(e, t, r, n, i, s),
                            this._cachedScaleForStroking = null,
                            this._cachedGetSinglePixelWidth = null
                        }
                        constructPath(e, t, r) {
                            const s = this.ctx
                              , a = this.current;
                            let o, l, c = a.x, h = a.y;
                            const d = (0,
                            n.getCurrentTransform)(s)
                              , u = 0 === d[0] && 0 === d[3] || 0 === d[1] && 0 === d[2]
                              , f = u ? r.slice(0) : null;
                            for (let n = 0, p = 0, g = e.length; n < g; n++)
                                switch (0 | e[n]) {
                                case i.OPS.rectangle:
                                    c = t[p++],
                                    h = t[p++];
                                    const e = t[p++]
                                      , r = t[p++]
                                      , n = c + e
                                      , g = h + r;
                                    s.moveTo(c, h),
                                    0 === e || 0 === r ? s.lineTo(n, g) : (s.lineTo(n, h),
                                    s.lineTo(n, g),
                                    s.lineTo(c, g)),
                                    u || a.updateRectMinMax(d, [c, h, n, g]),
                                    s.closePath();
                                    break;
                                case i.OPS.moveTo:
                                    c = t[p++],
                                    h = t[p++],
                                    s.moveTo(c, h),
                                    u || a.updatePathMinMax(d, c, h);
                                    break;
                                case i.OPS.lineTo:
                                    c = t[p++],
                                    h = t[p++],
                                    s.lineTo(c, h),
                                    u || a.updatePathMinMax(d, c, h);
                                    break;
                                case i.OPS.curveTo:
                                    o = c,
                                    l = h,
                                    c = t[p + 4],
                                    h = t[p + 5],
                                    s.bezierCurveTo(t[p], t[p + 1], t[p + 2], t[p + 3], c, h),
                                    a.updateCurvePathMinMax(d, o, l, t[p], t[p + 1], t[p + 2], t[p + 3], c, h, f),
                                    p += 6;
                                    break;
                                case i.OPS.curveTo2:
                                    o = c,
                                    l = h,
                                    s.bezierCurveTo(c, h, t[p], t[p + 1], t[p + 2], t[p + 3]),
                                    a.updateCurvePathMinMax(d, o, l, c, h, t[p], t[p + 1], t[p + 2], t[p + 3], f),
                                    c = t[p + 2],
                                    h = t[p + 3],
                                    p += 4;
                                    break;
                                case i.OPS.curveTo3:
                                    o = c,
                                    l = h,
                                    c = t[p + 2],
                                    h = t[p + 3],
                                    s.bezierCurveTo(t[p], t[p + 1], c, h, c, h),
                                    a.updateCurvePathMinMax(d, o, l, t[p], t[p + 1], c, h, c, h, f),
                                    p += 4;
                                    break;
                                case i.OPS.closePath:
                                    s.closePath()
                                }
                            u && a.updateScalingPathMinMax(d, f),
                            a.setCurrentPoint(c, h)
                        }
                        closePath() {
                            this.ctx.closePath()
                        }
                        stroke(e) {
                            e = "undefined" === typeof e || e;
                            const t = this.ctx
                              , r = this.current.strokeColor;
                            t.globalAlpha = this.current.strokeAlpha,
                            this.contentVisible && ("object" === typeof r && r?.getPattern ? (t.save(),
                            t.strokeStyle = r.getPattern(t, this, (0,
                            n.getCurrentTransformInverse)(t), s.PathType.STROKE),
                            this.rescaleAndStroke(!1),
                            t.restore()) : this.rescaleAndStroke(!0)),
                            e && this.consumePath(this.current.getClippedPathBoundingBox()),
                            t.globalAlpha = this.current.fillAlpha
                        }
                        closeStroke() {
                            this.closePath(),
                            this.stroke()
                        }
                        fill(e) {
                            e = "undefined" === typeof e || e;
                            const t = this.ctx
                              , r = this.current.fillColor;
                            let i = !1;
                            this.current.patternFill && (t.save(),
                            t.fillStyle = r.getPattern(t, this, (0,
                            n.getCurrentTransformInverse)(t), s.PathType.FILL),
                            i = !0);
                            const a = this.current.getClippedPathBoundingBox();
                            this.contentVisible && null !== a && (this.pendingEOFill ? (t.fill("evenodd"),
                            this.pendingEOFill = !1) : t.fill()),
                            i && t.restore(),
                            e && this.consumePath(a)
                        }
                        eoFill() {
                            this.pendingEOFill = !0,
                            this.fill()
                        }
                        fillStroke() {
                            this.fill(!1),
                            this.stroke(!1),
                            this.consumePath()
                        }
                        eoFillStroke() {
                            this.pendingEOFill = !0,
                            this.fillStroke()
                        }
                        closeFillStroke() {
                            this.closePath(),
                            this.fillStroke()
                        }
                        closeEOFillStroke() {
                            this.pendingEOFill = !0,
                            this.closePath(),
                            this.fillStroke()
                        }
                        endPath() {
                            this.consumePath()
                        }
                        clip() {
                            this.pendingClip = T
                        }
                        eoClip() {
                            this.pendingClip = x
                        }
                        beginText() {
                            this.current.textMatrix = i.IDENTITY_MATRIX,
                            this.current.textMatrixScale = 1,
                            this.current.x = this.current.lineX = 0,
                            this.current.y = this.current.lineY = 0
                        }
                        endText() {
                            const e = this.pendingTextPaths
                              , t = this.ctx;
                            if (void 0 !== e) {
                                t.save(),
                                t.beginPath();
                                for (const r of e)
                                    t.setTransform(...r.transform),
                                    t.translate(r.x, r.y),
                                    r.addToPath(t, r.fontSize);
                                t.restore(),
                                t.clip(),
                                t.beginPath(),
                                delete this.pendingTextPaths
                            } else
                                t.beginPath()
                        }
                        setCharSpacing(e) {
                            this.current.charSpacing = e
                        }
                        setWordSpacing(e) {
                            this.current.wordSpacing = e
                        }
                        setHScale(e) {
                            this.current.textHScale = e / 100
                        }
                        setLeading(e) {
                            this.current.leading = -e
                        }
                        setFont(e, t) {
                            const r = this.commonObjs.get(e)
                              , n = this.current;
                            if (!r)
                                throw new Error(`Can't find font for ${e}`);
                            if (n.fontMatrix = r.fontMatrix || i.FONT_IDENTITY_MATRIX,
                            0 !== n.fontMatrix[0] && 0 !== n.fontMatrix[3] || (0,
                            i.warn)("Invalid font matrix for font " + e),
                            t < 0 ? (t = -t,
                            n.fontDirection = -1) : n.fontDirection = 1,
                            this.current.font = r,
                            this.current.fontSize = t,
                            r.isType3Font)
                                return;
                            const s = r.loadedName || "sans-serif";
                            let a = "normal";
                            r.black ? a = "900" : r.bold && (a = "bold");
                            const o = r.italic ? "italic" : "normal"
                              , l = `"${s}", ${r.fallbackName}`;
                            let c = t;
                            t < 16 ? c = 16 : t > 100 && (c = 100),
                            this.current.fontSizeScale = t / c,
                            this.ctx.font = `${o} ${a} ${c}px ${l}`
                        }
                        setTextRenderingMode(e) {
                            this.current.textRenderingMode = e
                        }
                        setTextRise(e) {
                            this.current.textRise = e
                        }
                        moveText(e, t) {
                            this.current.x = this.current.lineX += e,
                            this.current.y = this.current.lineY += t
                        }
                        setLeadingMoveText(e, t) {
                            this.setLeading(-t),
                            this.moveText(e, t)
                        }
                        setTextMatrix(e, t, r, n, i, s) {
                            this.current.textMatrix = [e, t, r, n, i, s],
                            this.current.textMatrixScale = Math.hypot(e, t),
                            this.current.x = this.current.lineX = 0,
                            this.current.y = this.current.lineY = 0
                        }
                        nextLine() {
                            this.moveText(0, this.current.leading)
                        }
                        paintChar(e, t, r, s) {
                            const a = this.ctx
                              , o = this.current
                              , l = o.font
                              , c = o.textRenderingMode
                              , h = o.fontSize / o.fontSizeScale
                              , d = c & i.TextRenderingMode.FILL_STROKE_MASK
                              , u = !!(c & i.TextRenderingMode.ADD_TO_PATH_FLAG)
                              , f = o.patternFill && !l.missingFile;
                            let p;
                            (l.disableFontFace || u || f) && (p = l.getPathGenerator(this.commonObjs, e)),
                            l.disableFontFace || f ? (a.save(),
                            a.translate(t, r),
                            a.beginPath(),
                            p(a, h),
                            s && a.setTransform(...s),
                            d !== i.TextRenderingMode.FILL && d !== i.TextRenderingMode.FILL_STROKE || a.fill(),
                            d !== i.TextRenderingMode.STROKE && d !== i.TextRenderingMode.FILL_STROKE || a.stroke(),
                            a.restore()) : (d !== i.TextRenderingMode.FILL && d !== i.TextRenderingMode.FILL_STROKE || a.fillText(e, t, r),
                            d !== i.TextRenderingMode.STROKE && d !== i.TextRenderingMode.FILL_STROKE || a.strokeText(e, t, r)),
                            u && (this.pendingTextPaths || (this.pendingTextPaths = [])).push({
                                transform: (0,
                                n.getCurrentTransform)(a),
                                x: t,
                                y: r,
                                fontSize: h,
                                addToPath: p
                            })
                        }
                        get isFontSubpixelAAEnabled() {
                            const {context: e} = this.cachedCanvases.getCanvas("isFontSubpixelAAEnabled", 10, 10);
                            e.scale(1.5, 1),
                            e.fillText("I", 0, 10);
                            const t = e.getImageData(0, 0, 10, 10).data;
                            let r = !1;
                            for (let n = 3; n < t.length; n += 4)
                                if (t[n] > 0 && t[n] < 255) {
                                    r = !0;
                                    break
                                }
                            return (0,
                            i.shadow)(this, "isFontSubpixelAAEnabled", r)
                        }
                        showText(e) {
                            const t = this.current
                              , r = t.font;
                            if (r.isType3Font)
                                return this.showType3Text(e);
                            const a = t.fontSize;
                            if (0 === a)
                                return;
                            const o = this.ctx
                              , l = t.fontSizeScale
                              , c = t.charSpacing
                              , h = t.wordSpacing
                              , d = t.fontDirection
                              , u = t.textHScale * d
                              , f = e.length
                              , p = r.vertical
                              , g = p ? 1 : -1
                              , _ = r.defaultVMetrics
                              , m = a * t.fontMatrix[0]
                              , b = t.textRenderingMode === i.TextRenderingMode.FILL && !r.disableFontFace && !t.patternFill;
                            let v;
                            if (o.save(),
                            o.transform(...t.textMatrix),
                            o.translate(t.x, t.y + t.textRise),
                            d > 0 ? o.scale(u, -1) : o.scale(u, 1),
                            t.patternFill) {
                                o.save();
                                const e = t.fillColor.getPattern(o, this, (0,
                                n.getCurrentTransformInverse)(o), s.PathType.FILL);
                                v = (0,
                                n.getCurrentTransform)(o),
                                o.restore(),
                                o.fillStyle = e
                            }
                            let y = t.lineWidth;
                            const A = t.textMatrixScale;
                            if (0 === A || 0 === y) {
                                const e = t.textRenderingMode & i.TextRenderingMode.FILL_STROKE_MASK;
                                e !== i.TextRenderingMode.STROKE && e !== i.TextRenderingMode.FILL_STROKE || (y = this.getSinglePixelWidth())
                            } else
                                y /= A;
                            1 !== l && (o.scale(l, l),
                            y /= l),
                            o.lineWidth = y;
                            let E, S = 0;
                            for (E = 0; E < f; ++E) {
                                const t = e[E];
                                if ("number" === typeof t) {
                                    S += g * t * a / 1e3;
                                    continue
                                }
                                let n = !1;
                                const i = (t.isSpace ? h : 0) + c
                                  , s = t.fontChar
                                  , u = t.accent;
                                let f, y, A, w = t.width;
                                if (p) {
                                    const e = t.vmetric || _
                                      , r = -(t.vmetric ? e[1] : .5 * w) * m
                                      , n = e[2] * m;
                                    w = e ? -e[0] : w,
                                    f = r / l,
                                    y = (S + n) / l
                                } else
                                    f = S / l,
                                    y = 0;
                                if (r.remeasure && w > 0) {
                                    const e = 1e3 * o.measureText(s).width / a * l;
                                    if (w < e && this.isFontSubpixelAAEnabled) {
                                        const t = w / e;
                                        n = !0,
                                        o.save(),
                                        o.scale(t, 1),
                                        f /= t
                                    } else
                                        w !== e && (f += (w - e) / 2e3 * a / l)
                                }
                                if (this.contentVisible && (t.isInFont || r.missingFile))
                                    if (b && !u)
                                        o.fillText(s, f, y);
                                    else if (this.paintChar(s, f, y, v),
                                    u) {
                                        const e = f + a * u.offset.x / l
                                          , t = y - a * u.offset.y / l;
                                        this.paintChar(u.fontChar, e, t, v)
                                    }
                                A = p ? w * m - i * d : w * m + i * d,
                                S += A,
                                n && o.restore()
                            }
                            p ? t.y -= S : t.x += S * u,
                            o.restore(),
                            this.compose()
                        }
                        showType3Text(e) {
                            const t = this.ctx
                              , r = this.current
                              , n = r.font
                              , s = r.fontSize
                              , a = r.fontDirection
                              , o = n.vertical ? 1 : -1
                              , l = r.charSpacing
                              , c = r.wordSpacing
                              , h = r.textHScale * a
                              , d = r.fontMatrix || i.FONT_IDENTITY_MATRIX
                              , u = e.length;
                            let f, p, g, _;
                            if (r.textRenderingMode !== i.TextRenderingMode.INVISIBLE && 0 !== s) {
                                for (this._cachedScaleForStroking = null,
                                this._cachedGetSinglePixelWidth = null,
                                t.save(),
                                t.transform(...r.textMatrix),
                                t.translate(r.x, r.y),
                                t.scale(h, a),
                                f = 0; f < u; ++f) {
                                    if (p = e[f],
                                    "number" === typeof p) {
                                        _ = o * p * s / 1e3,
                                        this.ctx.translate(_, 0),
                                        r.x += _ * h;
                                        continue
                                    }
                                    const a = (p.isSpace ? c : 0) + l
                                      , u = n.charProcOperatorList[p.operatorListId];
                                    u ? (this.contentVisible && (this.processingType3 = p,
                                    this.save(),
                                    t.scale(s, s),
                                    t.transform(...d),
                                    this.executeOperatorList(u),
                                    this.restore()),
                                    g = i.Util.applyTransform([p.width, 0], d)[0] * s + a,
                                    t.translate(g, 0),
                                    r.x += g * h) : (0,
                                    i.warn)(`Type3 character "${p.operatorListId}" is not available.`)
                                }
                                t.restore(),
                                this.processingType3 = null
                            }
                        }
                        setCharWidth(e, t) {}
                        setCharWidthAndBounds(e, t, r, n, i, s) {
                            this.ctx.rect(r, n, i - r, s - n),
                            this.ctx.clip(),
                            this.endPath()
                        }
                        getColorN_Pattern(e) {
                            let t;
                            if ("TilingPattern" === e[0]) {
                                const r = e[1]
                                  , i = this.baseTransform || (0,
                                n.getCurrentTransform)(this.ctx)
                                  , a = {
                                    createCanvasGraphics: e => new C(e,this.commonObjs,this.objs,this.canvasFactory)
                                };
                                t = new s.TilingPattern(e,r,this.ctx,a,i)
                            } else
                                t = this._getPattern(e[1], e[2]);
                            return t
                        }
                        setStrokeColorN() {
                            this.current.strokeColor = this.getColorN_Pattern(arguments)
                        }
                        setFillColorN() {
                            this.current.fillColor = this.getColorN_Pattern(arguments),
                            this.current.patternFill = !0
                        }
                        setStrokeRGBColor(e, t, r) {
                            const n = this.selectColor?.(e, t, r) || i.Util.makeHexColor(e, t, r);
                            this.ctx.strokeStyle = n,
                            this.current.strokeColor = n
                        }
                        setFillRGBColor(e, t, r) {
                            const n = this.selectColor?.(e, t, r) || i.Util.makeHexColor(e, t, r);
                            this.ctx.fillStyle = n,
                            this.current.fillColor = n,
                            this.current.patternFill = !1
                        }
                        _getPattern(e, t=null) {
                            let r;
                            return this.cachedPatterns.has(e) ? r = this.cachedPatterns.get(e) : (r = (0,
                            s.getShadingPattern)(this.objs.get(e)),
                            this.cachedPatterns.set(e, r)),
                            t && (r.matrix = t),
                            r
                        }
                        shadingFill(e) {
                            if (!this.contentVisible)
                                return;
                            const t = this.ctx;
                            this.save();
                            const r = this._getPattern(e);
                            t.fillStyle = r.getPattern(t, this, (0,
                            n.getCurrentTransformInverse)(t), s.PathType.SHADING);
                            const a = (0,
                            n.getCurrentTransformInverse)(t);
                            if (a) {
                                const e = t.canvas
                                  , r = e.width
                                  , n = e.height
                                  , s = i.Util.applyTransform([0, 0], a)
                                  , o = i.Util.applyTransform([0, n], a)
                                  , l = i.Util.applyTransform([r, 0], a)
                                  , c = i.Util.applyTransform([r, n], a)
                                  , h = Math.min(s[0], o[0], l[0], c[0])
                                  , d = Math.min(s[1], o[1], l[1], c[1])
                                  , u = Math.max(s[0], o[0], l[0], c[0])
                                  , f = Math.max(s[1], o[1], l[1], c[1]);
                                this.ctx.fillRect(h, d, u - h, f - d)
                            } else
                                this.ctx.fillRect(-1e10, -1e10, 2e10, 2e10);
                            this.compose(this.current.getClippedPathBoundingBox()),
                            this.restore()
                        }
                        beginInlineImage() {
                            (0,
                            i.unreachable)("Should not call beginInlineImage")
                        }
                        beginImageData() {
                            (0,
                            i.unreachable)("Should not call beginImageData")
                        }
                        paintFormXObjectBegin(e, t) {
                            if (this.contentVisible && (this.save(),
                            this.baseTransformStack.push(this.baseTransform),
                            Array.isArray(e) && 6 === e.length && this.transform(...e),
                            this.baseTransform = (0,
                            n.getCurrentTransform)(this.ctx),
                            t)) {
                                const e = t[2] - t[0]
                                  , r = t[3] - t[1];
                                this.ctx.rect(t[0], t[1], e, r),
                                this.current.updateRectMinMax((0,
                                n.getCurrentTransform)(this.ctx), t),
                                this.clip(),
                                this.endPath()
                            }
                        }
                        paintFormXObjectEnd() {
                            this.contentVisible && (this.restore(),
                            this.baseTransform = this.baseTransformStack.pop())
                        }
                        beginGroup(e) {
                            if (!this.contentVisible)
                                return;
                            this.save(),
                            this.inSMaskMode && (this.endSMaskMode(),
                            this.current.activeSMask = null);
                            const t = this.ctx;
                            e.isolated || (0,
                            i.info)("TODO: Support non-isolated groups."),
                            e.knockout && (0,
                            i.warn)("Knockout groups not supported.");
                            const r = (0,
                            n.getCurrentTransform)(t);
                            if (e.matrix && t.transform(...e.matrix),
                            !e.bbox)
                                throw new Error("Bounding box is required.");
                            let s = i.Util.getAxialAlignedBoundingBox(e.bbox, (0,
                            n.getCurrentTransform)(t));
                            const a = [0, 0, t.canvas.width, t.canvas.height];
                            s = i.Util.intersect(s, a) || [0, 0, 0, 0];
                            const o = Math.floor(s[0])
                              , c = Math.floor(s[1]);
                            let h = Math.max(Math.ceil(s[2]) - o, 1)
                              , d = Math.max(Math.ceil(s[3]) - c, 1)
                              , u = 1
                              , f = 1;
                            h > l && (u = h / l,
                            h = l),
                            d > l && (f = d / l,
                            d = l),
                            this.current.startNewPathAndClipBox([0, 0, h, d]);
                            let p = "groupAt" + this.groupLevel;
                            e.smask && (p += "_smask_" + this.smaskCounter++ % 2);
                            const g = this.cachedCanvases.getCanvas(p, h, d)
                              , m = g.context;
                            m.scale(1 / u, 1 / f),
                            m.translate(-o, -c),
                            m.transform(...r),
                            e.smask ? this.smaskStack.push({
                                canvas: g.canvas,
                                context: m,
                                offsetX: o,
                                offsetY: c,
                                scaleX: u,
                                scaleY: f,
                                subtype: e.smask.subtype,
                                backdrop: e.smask.backdrop,
                                transferMap: e.smask.transferMap || null,
                                startTransformInverse: null
                            }) : (t.setTransform(1, 0, 0, 1, 0, 0),
                            t.translate(o, c),
                            t.scale(u, f),
                            t.save()),
                            _(t, m),
                            this.ctx = m,
                            this.setGState([["BM", "source-over"], ["ca", 1], ["CA", 1]]),
                            this.groupStack.push(t),
                            this.groupLevel++
                        }
                        endGroup(e) {
                            if (!this.contentVisible)
                                return;
                            this.groupLevel--;
                            const t = this.ctx
                              , r = this.groupStack.pop();
                            if (this.ctx = r,
                            this.ctx.imageSmoothingEnabled = !1,
                            e.smask)
                                this.tempSMask = this.smaskStack.pop(),
                                this.restore();
                            else {
                                this.ctx.restore();
                                const e = (0,
                                n.getCurrentTransform)(this.ctx);
                                this.restore(),
                                this.ctx.save(),
                                this.ctx.setTransform(...e);
                                const r = i.Util.getAxialAlignedBoundingBox([0, 0, t.canvas.width, t.canvas.height], e);
                                this.ctx.drawImage(t.canvas, 0, 0),
                                this.ctx.restore(),
                                this.compose(r)
                            }
                        }
                        beginAnnotation(e, t, r, s, a) {
                            if (this.#K(),
                            m(this.ctx, this.foregroundColor),
                            this.ctx.save(),
                            this.save(),
                            this.baseTransform && this.ctx.setTransform(...this.baseTransform),
                            Array.isArray(t) && 4 === t.length) {
                                const s = t[2] - t[0]
                                  , o = t[3] - t[1];
                                if (a && this.annotationCanvasMap) {
                                    (r = r.slice())[4] -= t[0],
                                    r[5] -= t[1],
                                    (t = t.slice())[0] = t[1] = 0,
                                    t[2] = s,
                                    t[3] = o;
                                    const [a,l] = i.Util.singularValueDecompose2dScale((0,
                                    n.getCurrentTransform)(this.ctx))
                                      , {viewportScale: c} = this
                                      , h = Math.ceil(s * this.outputScaleX * c)
                                      , d = Math.ceil(o * this.outputScaleY * c);
                                    this.annotationCanvas = this.canvasFactory.create(h, d);
                                    const {canvas: u, context: f} = this.annotationCanvas;
                                    this.annotationCanvasMap.set(e, u),
                                    this.annotationCanvas.savedCtx = this.ctx,
                                    this.ctx = f,
                                    this.ctx.setTransform(a, 0, 0, -l, 0, o * l),
                                    m(this.ctx, this.foregroundColor)
                                } else
                                    m(this.ctx, this.foregroundColor),
                                    this.ctx.rect(t[0], t[1], s, o),
                                    this.ctx.clip(),
                                    this.endPath()
                            }
                            this.current = new f(this.ctx.canvas.width,this.ctx.canvas.height),
                            this.transform(...r),
                            this.transform(...s)
                        }
                        endAnnotation() {
                            this.annotationCanvas && (this.ctx = this.annotationCanvas.savedCtx,
                            delete this.annotationCanvas.savedCtx,
                            delete this.annotationCanvas)
                        }
                        paintImageMaskXObject(e) {
                            if (!this.contentVisible)
                                return;
                            const t = e.count;
                            (e = this.getObject(e.data, e)).count = t;
                            const r = this.ctx
                              , n = this.processingType3;
                            if (n && (void 0 === n.compiled && (n.compiled = function(e) {
                                const {width: t, height: r} = e;
                                if (t > c || r > c)
                                    return null;
                                const n = new Uint8Array([0, 2, 4, 0, 1, 0, 5, 4, 8, 10, 0, 8, 0, 2, 1, 0])
                                  , i = t + 1;
                                let s, a, o, l = new Uint8Array(i * (r + 1));
                                const h = t + 7 & -8;
                                let d = new Uint8Array(h * r)
                                  , u = 0;
                                for (const c of e.data) {
                                    let e = 128;
                                    for (; e > 0; )
                                        d[u++] = c & e ? 0 : 255,
                                        e >>= 1
                                }
                                let f = 0;
                                for (u = 0,
                                0 !== d[u] && (l[0] = 1,
                                ++f),
                                a = 1; a < t; a++)
                                    d[u] !== d[u + 1] && (l[a] = d[u] ? 2 : 1,
                                    ++f),
                                    u++;
                                for (0 !== d[u] && (l[a] = 2,
                                ++f),
                                s = 1; s < r; s++) {
                                    u = s * h,
                                    o = s * i,
                                    d[u - h] !== d[u] && (l[o] = d[u] ? 1 : 8,
                                    ++f);
                                    let e = (d[u] ? 4 : 0) + (d[u - h] ? 8 : 0);
                                    for (a = 1; a < t; a++)
                                        e = (e >> 2) + (d[u + 1] ? 4 : 0) + (d[u - h + 1] ? 8 : 0),
                                        n[e] && (l[o + a] = n[e],
                                        ++f),
                                        u++;
                                    if (d[u - h] !== d[u] && (l[o + a] = d[u] ? 2 : 4,
                                    ++f),
                                    f > 1e3)
                                        return null
                                }
                                for (u = h * (r - 1),
                                o = s * i,
                                0 !== d[u] && (l[o] = 8,
                                ++f),
                                a = 1; a < t; a++)
                                    d[u] !== d[u + 1] && (l[o + a] = d[u] ? 4 : 8,
                                    ++f),
                                    u++;
                                if (0 !== d[u] && (l[o + a] = 4,
                                ++f),
                                f > 1e3)
                                    return null;
                                const p = new Int32Array([0, i, -1, 0, -i, 0, 0, 0, 1])
                                  , g = new Path2D;
                                for (s = 0; f && s <= r; s++) {
                                    let e = s * i;
                                    const r = e + t;
                                    for (; e < r && !l[e]; )
                                        e++;
                                    if (e === r)
                                        continue;
                                    g.moveTo(e % i, s);
                                    const n = e;
                                    let a = l[e];
                                    do {
                                        const t = p[a];
                                        do {
                                            e += t
                                        } while (!l[e]);
                                        const r = l[e];
                                        5 !== r && 10 !== r ? (a = r,
                                        l[e] = 0) : (a = r & 51 * a >> 4,
                                        l[e] &= a >> 2 | a << 2),
                                        g.lineTo(e % i, e / i | 0),
                                        l[e] || --f
                                    } while (n !== e);
                                    --s
                                }
                                return d = null,
                                l = null,
                                function(e) {
                                    e.save(),
                                    e.scale(1 / t, -1 / r),
                                    e.translate(0, -r),
                                    e.fill(g),
                                    e.beginPath(),
                                    e.restore()
                                }
                            }(e)),
                            n.compiled))
                                return void n.compiled(r);
                            const i = this._createMaskCanvas(e)
                              , s = i.canvas;
                            r.save(),
                            r.setTransform(1, 0, 0, 1, 0, 0),
                            r.drawImage(s, i.offsetX, i.offsetY),
                            r.restore(),
                            this.compose()
                        }
                        paintImageMaskXObjectRepeat(e, t, r=0, s=0, a, o) {
                            if (!this.contentVisible)
                                return;
                            e = this.getObject(e.data, e);
                            const l = this.ctx;
                            l.save();
                            const c = (0,
                            n.getCurrentTransform)(l);
                            l.transform(t, r, s, a, 0, 0);
                            const h = this._createMaskCanvas(e);
                            l.setTransform(1, 0, 0, 1, 0, 0);
                            for (let n = 0, d = o.length; n < d; n += 2) {
                                const e = i.Util.transform(c, [t, r, s, a, o[n], o[n + 1]])
                                  , [d,u] = i.Util.applyTransform([0, 0], e);
                                l.drawImage(h.canvas, d, u)
                            }
                            l.restore(),
                            this.compose()
                        }
                        paintImageMaskXObjectGroup(e) {
                            if (!this.contentVisible)
                                return;
                            const t = this.ctx
                              , r = this.current.fillColor
                              , i = this.current.patternFill;
                            for (const a of e) {
                                const {data: e, width: o, height: l, transform: c} = a
                                  , h = this.cachedCanvases.getCanvas("maskCanvas", o, l)
                                  , d = h.context;
                                d.save(),
                                g(d, this.getObject(e, a)),
                                d.globalCompositeOperation = "source-in",
                                d.fillStyle = i ? r.getPattern(d, this, (0,
                                n.getCurrentTransformInverse)(t), s.PathType.FILL) : r,
                                d.fillRect(0, 0, o, l),
                                d.restore(),
                                t.save(),
                                t.transform(...c),
                                t.scale(1, -1),
                                u(t, h.canvas, 0, 0, o, l, 0, -1, 1, 1),
                                t.restore()
                            }
                            this.compose()
                        }
                        paintImageXObject(e) {
                            if (!this.contentVisible)
                                return;
                            const t = this.getObject(e);
                            t ? this.paintInlineImageXObject(t) : (0,
                            i.warn)("Dependent image isn't ready yet")
                        }
                        paintImageXObjectRepeat(e, t, r, n) {
                            if (!this.contentVisible)
                                return;
                            const s = this.getObject(e);
                            if (!s)
                                return void (0,
                                i.warn)("Dependent image isn't ready yet");
                            const a = s.width
                              , o = s.height
                              , l = [];
                            for (let i = 0, c = n.length; i < c; i += 2)
                                l.push({
                                    transform: [t, 0, 0, r, n[i], n[i + 1]],
                                    x: 0,
                                    y: 0,
                                    w: a,
                                    h: o
                                });
                            this.paintInlineImageXObjectGroup(s, l)
                        }
                        paintInlineImageXObject(e) {
                            if (!this.contentVisible)
                                return;
                            const t = e.width
                              , r = e.height
                              , s = this.ctx;
                            let a;
                            if (this.save(),
                            s.scale(1 / t, -1 / r),
                            "function" === typeof HTMLElement && e instanceof HTMLElement || !e.data)
                                a = e;
                            else {
                                const n = this.cachedCanvases.getCanvas("inlineImage", t, r);
                                p(n.context, e, this.current.transferMaps),
                                a = n.canvas
                            }
                            const o = this._scaleImage(a, (0,
                            n.getCurrentTransformInverse)(s));
                            s.imageSmoothingEnabled = E((0,
                            n.getCurrentTransform)(s), e.interpolate);
                            const [l,c] = u(s, o.img, 0, 0, o.paintWidth, o.paintHeight, 0, -r, t, r);
                            if (this.imageLayer) {
                                const [t,s] = i.Util.applyTransform([0, -r], (0,
                                n.getCurrentTransform)(this.ctx));
                                this.imageLayer.appendImage({
                                    imgData: e,
                                    left: t,
                                    top: s,
                                    width: l,
                                    height: c
                                })
                            }
                            this.compose(),
                            this.restore()
                        }
                        paintInlineImageXObjectGroup(e, t) {
                            if (!this.contentVisible)
                                return;
                            const r = this.ctx
                              , s = e.width
                              , a = e.height
                              , o = this.cachedCanvases.getCanvas("inlineImage", s, a);
                            p(o.context, e, this.current.transferMaps);
                            for (const l of t) {
                                if (r.save(),
                                r.transform(...l.transform),
                                r.scale(1, -1),
                                u(r, o.canvas, l.x, l.y, l.w, l.h, 0, -1, 1, 1),
                                this.imageLayer) {
                                    const [t,r] = i.Util.applyTransform([l.x, l.y], (0,
                                    n.getCurrentTransform)(this.ctx));
                                    this.imageLayer.appendImage({
                                        imgData: e,
                                        left: t,
                                        top: r,
                                        width: s,
                                        height: a
                                    })
                                }
                                r.restore()
                            }
                            this.compose()
                        }
                        paintSolidColorImageMask() {
                            this.contentVisible && (this.ctx.fillRect(0, 0, 1, 1),
                            this.compose())
                        }
                        markPoint(e) {}
                        markPointProps(e, t) {}
                        beginMarkedContent(e) {
                            this.markedContentStack.push({
                                visible: !0
                            })
                        }
                        beginMarkedContentProps(e, t) {
                            "OC" === e ? this.markedContentStack.push({
                                visible: this.optionalContentConfig.isVisible(t)
                            }) : this.markedContentStack.push({
                                visible: !0
                            }),
                            this.contentVisible = this.isContentVisible()
                        }
                        endMarkedContent() {
                            this.markedContentStack.pop(),
                            this.contentVisible = this.isContentVisible()
                        }
                        beginCompat() {}
                        endCompat() {}
                        consumePath(e) {
                            const t = this.current.isEmptyClip();
                            this.pendingClip && this.current.updateClipFromPath(),
                            this.pendingClip || this.compose(e);
                            const r = this.ctx;
                            this.pendingClip && (t || (this.pendingClip === x ? r.clip("evenodd") : r.clip()),
                            this.pendingClip = null),
                            this.current.startNewPathAndClipBox(this.current.clipBox),
                            r.beginPath()
                        }
                        getSinglePixelWidth() {
                            if (!this._cachedGetSinglePixelWidth) {
                                const e = (0,
                                n.getCurrentTransform)(this.ctx);
                                if (0 === e[1] && 0 === e[2])
                                    this._cachedGetSinglePixelWidth = 1 / Math.min(Math.abs(e[0]), Math.abs(e[3]));
                                else {
                                    const t = Math.abs(e[0] * e[3] - e[2] * e[1])
                                      , r = Math.hypot(e[0], e[2])
                                      , n = Math.hypot(e[1], e[3]);
                                    this._cachedGetSinglePixelWidth = Math.max(r, n) / t
                                }
                            }
                            return this._cachedGetSinglePixelWidth
                        }
                        getScaleForStroking() {
                            if (!this._cachedScaleForStroking) {
                                const {lineWidth: e} = this.current
                                  , t = (0,
                                n.getCurrentTransform)(this.ctx);
                                let r, i;
                                if (0 === t[1] && 0 === t[2]) {
                                    const n = Math.abs(t[0])
                                      , s = Math.abs(t[3]);
                                    if (0 === e)
                                        r = 1 / n,
                                        i = 1 / s;
                                    else {
                                        const t = n * e
                                          , a = s * e;
                                        r = t < 1 ? 1 / t : 1,
                                        i = a < 1 ? 1 / a : 1
                                    }
                                } else {
                                    const n = Math.abs(t[0] * t[3] - t[2] * t[1])
                                      , s = Math.hypot(t[0], t[1])
                                      , a = Math.hypot(t[2], t[3]);
                                    if (0 === e)
                                        r = a / n,
                                        i = s / n;
                                    else {
                                        const t = e * n;
                                        r = a > t ? a / t : 1,
                                        i = s > t ? s / t : 1
                                    }
                                }
                                this._cachedScaleForStroking = [r, i]
                            }
                            return this._cachedScaleForStroking
                        }
                        rescaleAndStroke(e) {
                            const {ctx: t} = this
                              , {lineWidth: r} = this.current
                              , [i,s] = this.getScaleForStroking();
                            if (t.lineWidth = r || 1,
                            1 === i && 1 === s)
                                return void t.stroke();
                            let a, o, l;
                            e && (a = (0,
                            n.getCurrentTransform)(t),
                            o = t.getLineDash().slice(),
                            l = t.lineDashOffset),
                            t.scale(i, s);
                            const c = Math.max(i, s);
                            t.setLineDash(t.getLineDash().map((e => e / c))),
                            t.lineDashOffset /= c,
                            t.stroke(),
                            e && (t.setTransform(...a),
                            t.setLineDash(o),
                            t.lineDashOffset = l)
                        }
                        isContentVisible() {
                            for (let e = this.markedContentStack.length - 1; e >= 0; e--)
                                if (!this.markedContentStack[e].visible)
                                    return !1;
                            return !0
                        }
                    }
                    t.CanvasGraphics = C;
                    for (const R in i.OPS)
                        void 0 !== C.prototype[R] && (C.prototype[i.OPS[R]] = C.prototype[R])
                }
                , (e, t, r) => {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }),
                    t.TilingPattern = t.PathType = void 0,
                    t.getShadingPattern = function(e) {
                        switch (e[0]) {
                        case "RadialAxial":
                            return new c(e);
                        case "Mesh":
                            return new u(e);
                        case "Dummy":
                            return new f
                        }
                        throw new Error(`Unknown IR type: ${e[0]}`)
                    }
                    ;
                    var n = r(1)
                      , i = r(8)
                      , s = r(3);
                    const a = {
                        FILL: "Fill",
                        STROKE: "Stroke",
                        SHADING: "Shading"
                    };
                    function o(e, t) {
                        if (!t || s.isNodeJS)
                            return;
                        const r = t[2] - t[0]
                          , n = t[3] - t[1]
                          , i = new Path2D;
                        i.rect(t[0], t[1], r, n),
                        e.clip(i)
                    }
                    t.PathType = a;
                    class l {
                        constructor() {
                            this.constructor === l && (0,
                            n.unreachable)("Cannot initialize BaseShadingPattern.")
                        }
                        getPattern() {
                            (0,
                            n.unreachable)("Abstract method `getPattern` called.")
                        }
                    }
                    class c extends l {
                        constructor(e) {
                            super(),
                            this._type = e[1],
                            this._bbox = e[2],
                            this._colorStops = e[3],
                            this._p0 = e[4],
                            this._p1 = e[5],
                            this._r0 = e[6],
                            this._r1 = e[7],
                            this.matrix = null
                        }
                        _createGradient(e) {
                            let t;
                            "axial" === this._type ? t = e.createLinearGradient(this._p0[0], this._p0[1], this._p1[0], this._p1[1]) : "radial" === this._type && (t = e.createRadialGradient(this._p0[0], this._p0[1], this._r0, this._p1[0], this._p1[1], this._r1));
                            for (const r of this._colorStops)
                                t.addColorStop(r[0], r[1]);
                            return t
                        }
                        getPattern(e, t, r, s) {
                            let l;
                            if (s === a.STROKE || s === a.FILL) {
                                const a = t.current.getClippedPathBoundingBox(s, (0,
                                i.getCurrentTransform)(e)) || [0, 0, 0, 0]
                                  , h = Math.ceil(a[2] - a[0]) || 1
                                  , d = Math.ceil(a[3] - a[1]) || 1
                                  , u = t.cachedCanvases.getCanvas("pattern", h, d, !0)
                                  , f = u.context;
                                f.clearRect(0, 0, f.canvas.width, f.canvas.height),
                                f.beginPath(),
                                f.rect(0, 0, f.canvas.width, f.canvas.height),
                                f.translate(-a[0], -a[1]),
                                r = n.Util.transform(r, [1, 0, 0, 1, a[0], a[1]]),
                                f.transform(...t.baseTransform),
                                this.matrix && f.transform(...this.matrix),
                                o(f, this._bbox),
                                f.fillStyle = this._createGradient(f),
                                f.fill(),
                                l = e.createPattern(u.canvas, "no-repeat");
                                const p = new DOMMatrix(r);
                                try {
                                    l.setTransform(p)
                                } catch (c) {
                                    (0,
                                    n.warn)(`RadialAxialShadingPattern.getPattern: "${c?.message}".`)
                                }
                            } else
                                o(e, this._bbox),
                                l = this._createGradient(e);
                            return l
                        }
                    }
                    function h(e, t, r, n, i, s, a, o) {
                        const l = t.coords
                          , c = t.colors
                          , h = e.data
                          , d = 4 * e.width;
                        let u;
                        l[r + 1] > l[n + 1] && (u = r,
                        r = n,
                        n = u,
                        u = s,
                        s = a,
                        a = u),
                        l[n + 1] > l[i + 1] && (u = n,
                        n = i,
                        i = u,
                        u = a,
                        a = o,
                        o = u),
                        l[r + 1] > l[n + 1] && (u = r,
                        r = n,
                        n = u,
                        u = s,
                        s = a,
                        a = u);
                        const f = (l[r] + t.offsetX) * t.scaleX
                          , p = (l[r + 1] + t.offsetY) * t.scaleY
                          , g = (l[n] + t.offsetX) * t.scaleX
                          , _ = (l[n + 1] + t.offsetY) * t.scaleY
                          , m = (l[i] + t.offsetX) * t.scaleX
                          , b = (l[i + 1] + t.offsetY) * t.scaleY;
                        if (p >= b)
                            return;
                        const v = c[s]
                          , y = c[s + 1]
                          , A = c[s + 2]
                          , E = c[a]
                          , S = c[a + 1]
                          , w = c[a + 2]
                          , T = c[o]
                          , x = c[o + 1]
                          , C = c[o + 2]
                          , R = Math.round(p)
                          , k = Math.round(b);
                        let M, P, I, D, O, F, L, N;
                        for (let B = R; B <= k; B++) {
                            if (B < _) {
                                let e;
                                e = B < p ? 0 : (p - B) / (p - _),
                                M = f - (f - g) * e,
                                P = v - (v - E) * e,
                                I = y - (y - S) * e,
                                D = A - (A - w) * e
                            } else {
                                let e;
                                e = B > b ? 1 : _ === b ? 0 : (_ - B) / (_ - b),
                                M = g - (g - m) * e,
                                P = E - (E - T) * e,
                                I = S - (S - x) * e,
                                D = w - (w - C) * e
                            }
                            let e;
                            e = B < p ? 0 : B > b ? 1 : (p - B) / (p - b),
                            O = f - (f - m) * e,
                            F = v - (v - T) * e,
                            L = y - (y - x) * e,
                            N = A - (A - C) * e;
                            const t = Math.round(Math.min(M, O))
                              , r = Math.round(Math.max(M, O));
                            let n = d * B + 4 * t;
                            for (let i = t; i <= r; i++)
                                e = (M - i) / (M - O),
                                e < 0 ? e = 0 : e > 1 && (e = 1),
                                h[n++] = P - (P - F) * e | 0,
                                h[n++] = I - (I - L) * e | 0,
                                h[n++] = D - (D - N) * e | 0,
                                h[n++] = 255
                        }
                    }
                    function d(e, t, r) {
                        const n = t.coords
                          , i = t.colors;
                        let s, a;
                        switch (t.type) {
                        case "lattice":
                            const o = t.verticesPerRow
                              , l = Math.floor(n.length / o) - 1
                              , c = o - 1;
                            for (s = 0; s < l; s++) {
                                let t = s * o;
                                for (let s = 0; s < c; s++,
                                t++)
                                    h(e, r, n[t], n[t + 1], n[t + o], i[t], i[t + 1], i[t + o]),
                                    h(e, r, n[t + o + 1], n[t + 1], n[t + o], i[t + o + 1], i[t + 1], i[t + o])
                            }
                            break;
                        case "triangles":
                            for (s = 0,
                            a = n.length; s < a; s += 3)
                                h(e, r, n[s], n[s + 1], n[s + 2], i[s], i[s + 1], i[s + 2]);
                            break;
                        default:
                            throw new Error("illegal figure")
                        }
                    }
                    class u extends l {
                        constructor(e) {
                            super(),
                            this._coords = e[2],
                            this._colors = e[3],
                            this._figures = e[4],
                            this._bounds = e[5],
                            this._bbox = e[7],
                            this._background = e[8],
                            this.matrix = null
                        }
                        _createMeshCanvas(e, t, r) {
                            const n = Math.floor(this._bounds[0])
                              , i = Math.floor(this._bounds[1])
                              , s = Math.ceil(this._bounds[2]) - n
                              , a = Math.ceil(this._bounds[3]) - i
                              , o = Math.min(Math.ceil(Math.abs(s * e[0] * 1.1)), 3e3)
                              , l = Math.min(Math.ceil(Math.abs(a * e[1] * 1.1)), 3e3)
                              , c = s / o
                              , h = a / l
                              , u = {
                                coords: this._coords,
                                colors: this._colors,
                                offsetX: -n,
                                offsetY: -i,
                                scaleX: 1 / c,
                                scaleY: 1 / h
                            }
                              , f = o + 4
                              , p = l + 4
                              , g = r.getCanvas("mesh", f, p, !1)
                              , _ = g.context
                              , m = _.createImageData(o, l);
                            if (t) {
                                const e = m.data;
                                for (let r = 0, n = e.length; r < n; r += 4)
                                    e[r] = t[0],
                                    e[r + 1] = t[1],
                                    e[r + 2] = t[2],
                                    e[r + 3] = 255
                            }
                            for (const b of this._figures)
                                d(m, b, u);
                            return _.putImageData(m, 2, 2),
                            {
                                canvas: g.canvas,
                                offsetX: n - 2 * c,
                                offsetY: i - 2 * h,
                                scaleX: c,
                                scaleY: h
                            }
                        }
                        getPattern(e, t, r, s) {
                            let l;
                            if (o(e, this._bbox),
                            s === a.SHADING)
                                l = n.Util.singularValueDecompose2dScale((0,
                                i.getCurrentTransform)(e));
                            else if (l = n.Util.singularValueDecompose2dScale(t.baseTransform),
                            this.matrix) {
                                const e = n.Util.singularValueDecompose2dScale(this.matrix);
                                l = [l[0] * e[0], l[1] * e[1]]
                            }
                            const c = this._createMeshCanvas(l, s === a.SHADING ? null : this._background, t.cachedCanvases);
                            return s !== a.SHADING && (e.setTransform(...t.baseTransform),
                            this.matrix && e.transform(...this.matrix)),
                            e.translate(c.offsetX, c.offsetY),
                            e.scale(c.scaleX, c.scaleY),
                            e.createPattern(c.canvas, "no-repeat")
                        }
                    }
                    class f extends l {
                        getPattern() {
                            return "hotpink"
                        }
                    }
                    const p = 1
                      , g = 2;
                    class _ {
                        static get MAX_PATTERN_SIZE() {
                            return (0,
                            n.shadow)(this, "MAX_PATTERN_SIZE", 3e3)
                        }
                        constructor(e, t, r, n, i) {
                            this.operatorList = e[2],
                            this.matrix = e[3] || [1, 0, 0, 1, 0, 0],
                            this.bbox = e[4],
                            this.xstep = e[5],
                            this.ystep = e[6],
                            this.paintType = e[7],
                            this.tilingType = e[8],
                            this.color = t,
                            this.ctx = r,
                            this.canvasGraphicsFactory = n,
                            this.baseTransform = i
                        }
                        createPatternCanvas(e) {
                            const t = this.operatorList
                              , r = this.bbox
                              , s = this.xstep
                              , a = this.ystep
                              , o = this.paintType
                              , l = this.tilingType
                              , c = this.color
                              , h = this.canvasGraphicsFactory;
                            (0,
                            n.info)("TilingType: " + l);
                            const d = r[0]
                              , u = r[1]
                              , f = r[2]
                              , p = r[3]
                              , g = n.Util.singularValueDecompose2dScale(this.matrix)
                              , _ = n.Util.singularValueDecompose2dScale(this.baseTransform)
                              , m = [g[0] * _[0], g[1] * _[1]]
                              , b = this.getSizeAndScale(s, this.ctx.canvas.width, m[0])
                              , v = this.getSizeAndScale(a, this.ctx.canvas.height, m[1])
                              , y = e.cachedCanvases.getCanvas("pattern", b.size, v.size, !0)
                              , A = y.context
                              , E = h.createCanvasGraphics(A);
                            E.groupLevel = e.groupLevel,
                            this.setFillAndStrokeStyleToContext(E, o, c);
                            let S = d
                              , w = u
                              , T = f
                              , x = p;
                            return d < 0 && (S = 0,
                            T += Math.abs(d)),
                            u < 0 && (w = 0,
                            x += Math.abs(u)),
                            A.translate(-b.scale * S, -v.scale * w),
                            E.transform(b.scale, 0, 0, v.scale, 0, 0),
                            A.save(),
                            this.clipBbox(E, S, w, T, x),
                            E.baseTransform = (0,
                            i.getCurrentTransform)(E.ctx),
                            E.executeOperatorList(t),
                            E.endDrawing(),
                            {
                                canvas: y.canvas,
                                scaleX: b.scale,
                                scaleY: v.scale,
                                offsetX: S,
                                offsetY: w
                            }
                        }
                        getSizeAndScale(e, t, r) {
                            e = Math.abs(e);
                            const n = Math.max(_.MAX_PATTERN_SIZE, t);
                            let i = Math.ceil(e * r);
                            return i >= n ? i = n : r = i / e,
                            {
                                scale: r,
                                size: i
                            }
                        }
                        clipBbox(e, t, r, n, s) {
                            const a = n - t
                              , o = s - r;
                            e.ctx.rect(t, r, a, o),
                            e.current.updateRectMinMax((0,
                            i.getCurrentTransform)(e.ctx), [t, r, n, s]),
                            e.clip(),
                            e.endPath()
                        }
                        setFillAndStrokeStyleToContext(e, t, r) {
                            const i = e.ctx
                              , s = e.current;
                            switch (t) {
                            case p:
                                const e = this.ctx;
                                i.fillStyle = e.fillStyle,
                                i.strokeStyle = e.strokeStyle,
                                s.fillColor = e.fillStyle,
                                s.strokeColor = e.strokeStyle;
                                break;
                            case g:
                                const a = n.Util.makeHexColor(r[0], r[1], r[2]);
                                i.fillStyle = a,
                                i.strokeStyle = a,
                                s.fillColor = a,
                                s.strokeColor = a;
                                break;
                            default:
                                throw new n.FormatError(`Unsupported paint type: ${t}`)
                            }
                        }
                        getPattern(e, t, r, i) {
                            let s = r;
                            i !== a.SHADING && (s = n.Util.transform(s, t.baseTransform),
                            this.matrix && (s = n.Util.transform(s, this.matrix)));
                            const o = this.createPatternCanvas(t);
                            let l = new DOMMatrix(s);
                            l = l.translate(o.offsetX, o.offsetY),
                            l = l.scale(1 / o.scaleX, 1 / o.scaleY);
                            const c = e.createPattern(o.canvas, "repeat");
                            try {
                                c.setTransform(l)
                            } catch (h) {
                                (0,
                                n.warn)(`TilingPattern.getPattern: "${h?.message}".`)
                            }
                            return c
                        }
                    }
                    t.TilingPattern = _
                }
                , (e, t, r) => {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }),
                    t.applyMaskImageData = function({src: e, srcPos: t=0, dest: r, destPos: i=0, width: s, height: a, inverseDecode: o=!1}) {
                        const l = n.FeatureTest.isLittleEndian ? 4278190080 : 255
                          , [c,h] = o ? [0, l] : [l, 0]
                          , d = s >> 3
                          , u = 7 & s
                          , f = e.length;
                        r = new Uint32Array(r.buffer);
                        for (let n = 0; n < a; n++) {
                            for (const s = t + d; t < s; t++) {
                                const n = t < f ? e[t] : 255;
                                r[i++] = 128 & n ? h : c,
                                r[i++] = 64 & n ? h : c,
                                r[i++] = 32 & n ? h : c,
                                r[i++] = 16 & n ? h : c,
                                r[i++] = 8 & n ? h : c,
                                r[i++] = 4 & n ? h : c,
                                r[i++] = 2 & n ? h : c,
                                r[i++] = 1 & n ? h : c
                            }
                            if (0 === u)
                                continue;
                            const n = t < f ? e[t++] : 255;
                            for (let e = 0; e < u; e++)
                                r[i++] = n & 1 << 7 - e ? h : c
                        }
                        return {
                            srcPos: t,
                            destPos: i
                        }
                    }
                    ;
                    var n = r(1)
                }
                , (e, t) => {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }),
                    t.GlobalWorkerOptions = void 0;
                    const r = Object.create(null);
                    t.GlobalWorkerOptions = r,
                    r.workerPort = void 0 === r.workerPort ? null : r.workerPort,
                    r.workerSrc = void 0 === r.workerSrc ? "" : r.workerSrc
                }
                , (e, t, r) => {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }),
                    t.MessageHandler = void 0;
                    var n = r(1);
                    const i = 1
                      , s = 2
                      , a = 1
                      , o = 2
                      , l = 3
                      , c = 4
                      , h = 5
                      , d = 6
                      , u = 7
                      , f = 8;
                    function p(e) {
                        switch (e instanceof Error || "object" === typeof e && null !== e || (0,
                        n.unreachable)('wrapReason: Expected "reason" to be a (possibly cloned) Error.'),
                        e.name) {
                        case "AbortException":
                            return new n.AbortException(e.message);
                        case "MissingPDFException":
                            return new n.MissingPDFException(e.message);
                        case "PasswordException":
                            return new n.PasswordException(e.message,e.code);
                        case "UnexpectedResponseException":
                            return new n.UnexpectedResponseException(e.message,e.status);
                        case "UnknownErrorException":
                            return new n.UnknownErrorException(e.message,e.details);
                        default:
                            return new n.UnknownErrorException(e.message,e.toString())
                        }
                    }
                    t.MessageHandler = class {
                        constructor(e, t, r) {
                            this.sourceName = e,
                            this.targetName = t,
                            this.comObj = r,
                            this.callbackId = 1,
                            this.streamId = 1,
                            this.streamSinks = Object.create(null),
                            this.streamControllers = Object.create(null),
                            this.callbackCapabilities = Object.create(null),
                            this.actionHandler = Object.create(null),
                            this._onComObjOnMessage = e => {
                                const t = e.data;
                                if (t.targetName !== this.sourceName)
                                    return;
                                if (t.stream)
                                    return void this._processStreamMessage(t);
                                if (t.callback) {
                                    const e = t.callbackId
                                      , r = this.callbackCapabilities[e];
                                    if (!r)
                                        throw new Error(`Cannot resolve callback ${e}`);
                                    if (delete this.callbackCapabilities[e],
                                    t.callback === i)
                                        r.resolve(t.data);
                                    else {
                                        if (t.callback !== s)
                                            throw new Error("Unexpected callback case");
                                        r.reject(p(t.reason))
                                    }
                                    return
                                }
                                const n = this.actionHandler[t.action];
                                if (!n)
                                    throw new Error(`Unknown action from worker: ${t.action}`);
                                if (t.callbackId) {
                                    const e = this.sourceName
                                      , a = t.sourceName;
                                    new Promise((function(e) {
                                        e(n(t.data))
                                    }
                                    )).then((function(n) {
                                        r.postMessage({
                                            sourceName: e,
                                            targetName: a,
                                            callback: i,
                                            callbackId: t.callbackId,
                                            data: n
                                        })
                                    }
                                    ), (function(n) {
                                        r.postMessage({
                                            sourceName: e,
                                            targetName: a,
                                            callback: s,
                                            callbackId: t.callbackId,
                                            reason: p(n)
                                        })
                                    }
                                    ))
                                } else
                                    t.streamId ? this._createStreamSink(t) : n(t.data)
                            }
                            ,
                            r.addEventListener("message", this._onComObjOnMessage)
                        }
                        on(e, t) {
                            const r = this.actionHandler;
                            if (r[e])
                                throw new Error(`There is already an actionName called "${e}"`);
                            r[e] = t
                        }
                        send(e, t, r) {
                            this.comObj.postMessage({
                                sourceName: this.sourceName,
                                targetName: this.targetName,
                                action: e,
                                data: t
                            }, r)
                        }
                        sendWithPromise(e, t, r) {
                            const i = this.callbackId++
                              , s = (0,
                            n.createPromiseCapability)();
                            this.callbackCapabilities[i] = s;
                            try {
                                this.comObj.postMessage({
                                    sourceName: this.sourceName,
                                    targetName: this.targetName,
                                    action: e,
                                    callbackId: i,
                                    data: t
                                }, r)
                            } catch (a) {
                                s.reject(a)
                            }
                            return s.promise
                        }
                        sendWithStream(e, t, r, i) {
                            const s = this.streamId++
                              , o = this.sourceName
                              , l = this.targetName
                              , c = this.comObj;
                            return new ReadableStream({
                                start: r => {
                                    const a = (0,
                                    n.createPromiseCapability)();
                                    return this.streamControllers[s] = {
                                        controller: r,
                                        startCall: a,
                                        pullCall: null,
                                        cancelCall: null,
                                        isClosed: !1
                                    },
                                    c.postMessage({
                                        sourceName: o,
                                        targetName: l,
                                        action: e,
                                        streamId: s,
                                        data: t,
                                        desiredSize: r.desiredSize
                                    }, i),
                                    a.promise
                                }
                                ,
                                pull: e => {
                                    const t = (0,
                                    n.createPromiseCapability)();
                                    return this.streamControllers[s].pullCall = t,
                                    c.postMessage({
                                        sourceName: o,
                                        targetName: l,
                                        stream: d,
                                        streamId: s,
                                        desiredSize: e.desiredSize
                                    }),
                                    t.promise
                                }
                                ,
                                cancel: e => {
                                    (0,
                                    n.assert)(e instanceof Error, "cancel must have a valid reason");
                                    const t = (0,
                                    n.createPromiseCapability)();
                                    return this.streamControllers[s].cancelCall = t,
                                    this.streamControllers[s].isClosed = !0,
                                    c.postMessage({
                                        sourceName: o,
                                        targetName: l,
                                        stream: a,
                                        streamId: s,
                                        reason: p(e)
                                    }),
                                    t.promise
                                }
                            },r)
                        }
                        _createStreamSink(e) {
                            const t = e.streamId
                              , r = this.sourceName
                              , i = e.sourceName
                              , s = this.comObj
                              , a = this
                              , o = this.actionHandler[e.action]
                              , d = {
                                enqueue(e, a=1, o) {
                                    if (this.isCancelled)
                                        return;
                                    const l = this.desiredSize;
                                    this.desiredSize -= a,
                                    l > 0 && this.desiredSize <= 0 && (this.sinkCapability = (0,
                                    n.createPromiseCapability)(),
                                    this.ready = this.sinkCapability.promise),
                                    s.postMessage({
                                        sourceName: r,
                                        targetName: i,
                                        stream: c,
                                        streamId: t,
                                        chunk: e
                                    }, o)
                                },
                                close() {
                                    this.isCancelled || (this.isCancelled = !0,
                                    s.postMessage({
                                        sourceName: r,
                                        targetName: i,
                                        stream: l,
                                        streamId: t
                                    }),
                                    delete a.streamSinks[t])
                                },
                                error(e) {
                                    (0,
                                    n.assert)(e instanceof Error, "error must have a valid reason"),
                                    this.isCancelled || (this.isCancelled = !0,
                                    s.postMessage({
                                        sourceName: r,
                                        targetName: i,
                                        stream: h,
                                        streamId: t,
                                        reason: p(e)
                                    }))
                                },
                                sinkCapability: (0,
                                n.createPromiseCapability)(),
                                onPull: null,
                                onCancel: null,
                                isCancelled: !1,
                                desiredSize: e.desiredSize,
                                ready: null
                            };
                            d.sinkCapability.resolve(),
                            d.ready = d.sinkCapability.promise,
                            this.streamSinks[t] = d,
                            new Promise((function(t) {
                                t(o(e.data, d))
                            }
                            )).then((function() {
                                s.postMessage({
                                    sourceName: r,
                                    targetName: i,
                                    stream: f,
                                    streamId: t,
                                    success: !0
                                })
                            }
                            ), (function(e) {
                                s.postMessage({
                                    sourceName: r,
                                    targetName: i,
                                    stream: f,
                                    streamId: t,
                                    reason: p(e)
                                })
                            }
                            ))
                        }
                        _processStreamMessage(e) {
                            const t = e.streamId
                              , r = this.sourceName
                              , i = e.sourceName
                              , s = this.comObj
                              , g = this.streamControllers[t]
                              , _ = this.streamSinks[t];
                            switch (e.stream) {
                            case f:
                                e.success ? g.startCall.resolve() : g.startCall.reject(p(e.reason));
                                break;
                            case u:
                                e.success ? g.pullCall.resolve() : g.pullCall.reject(p(e.reason));
                                break;
                            case d:
                                if (!_) {
                                    s.postMessage({
                                        sourceName: r,
                                        targetName: i,
                                        stream: u,
                                        streamId: t,
                                        success: !0
                                    });
                                    break
                                }
                                _.desiredSize <= 0 && e.desiredSize > 0 && _.sinkCapability.resolve(),
                                _.desiredSize = e.desiredSize,
                                new Promise((function(e) {
                                    e(_.onPull && _.onPull())
                                }
                                )).then((function() {
                                    s.postMessage({
                                        sourceName: r,
                                        targetName: i,
                                        stream: u,
                                        streamId: t,
                                        success: !0
                                    })
                                }
                                ), (function(e) {
                                    s.postMessage({
                                        sourceName: r,
                                        targetName: i,
                                        stream: u,
                                        streamId: t,
                                        reason: p(e)
                                    })
                                }
                                ));
                                break;
                            case c:
                                if ((0,
                                n.assert)(g, "enqueue should have stream controller"),
                                g.isClosed)
                                    break;
                                g.controller.enqueue(e.chunk);
                                break;
                            case l:
                                if ((0,
                                n.assert)(g, "close should have stream controller"),
                                g.isClosed)
                                    break;
                                g.isClosed = !0,
                                g.controller.close(),
                                this._deleteStreamController(g, t);
                                break;
                            case h:
                                (0,
                                n.assert)(g, "error should have stream controller"),
                                g.controller.error(p(e.reason)),
                                this._deleteStreamController(g, t);
                                break;
                            case o:
                                e.success ? g.cancelCall.resolve() : g.cancelCall.reject(p(e.reason)),
                                this._deleteStreamController(g, t);
                                break;
                            case a:
                                if (!_)
                                    break;
                                new Promise((function(t) {
                                    t(_.onCancel && _.onCancel(p(e.reason)))
                                }
                                )).then((function() {
                                    s.postMessage({
                                        sourceName: r,
                                        targetName: i,
                                        stream: o,
                                        streamId: t,
                                        success: !0
                                    })
                                }
                                ), (function(e) {
                                    s.postMessage({
                                        sourceName: r,
                                        targetName: i,
                                        stream: o,
                                        streamId: t,
                                        reason: p(e)
                                    })
                                }
                                )),
                                _.sinkCapability.reject(p(e.reason)),
                                _.isCancelled = !0,
                                delete this.streamSinks[t];
                                break;
                            default:
                                throw new Error("Unexpected stream case")
                            }
                        }
                        async _deleteStreamController(e, t) {
                            await Promise.allSettled([e.startCall && e.startCall.promise, e.pullCall && e.pullCall.promise, e.cancelCall && e.cancelCall.promise]),
                            delete this.streamControllers[t]
                        }
                        destroy() {
                            this.comObj.removeEventListener("message", this._onComObjOnMessage)
                        }
                    }
                }
                , (e, t, r) => {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }),
                    t.Metadata = void 0;
                    var n = r(1);
                    t.Metadata = class {
                        #J;
                        #Q;
                        constructor({parsedData: e, rawData: t}) {
                            this.#J = e,
                            this.#Q = t
                        }
                        getRaw() {
                            return this.#Q
                        }
                        get(e) {
                            return this.#J.get(e) ?? null
                        }
                        getAll() {
                            return (0,
                            n.objectFromMap)(this.#J)
                        }
                        has(e) {
                            return this.#J.has(e)
                        }
                    }
                }
                , (e, t, r) => {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }),
                    t.OptionalContentConfig = void 0;
                    var n = r(1);
                    const i = Symbol("INTERNAL");
                    class s {
                        #ee = !0;
                        constructor(e, t) {
                            this.name = e,
                            this.intent = t
                        }
                        get visible() {
                            return this.#ee
                        }
                        _setVisible(e, t) {
                            e !== i && (0,
                            n.unreachable)("Internal method `_setVisible` called."),
                            this.#ee = t
                        }
                    }
                    t.OptionalContentConfig = class {
                        #te = !0;
                        #re = new Map;
                        #ne = null;
                        #ie = null;
                        constructor(e) {
                            if (this.name = null,
                            this.creator = null,
                            null !== e) {
                                this.name = e.name,
                                this.creator = e.creator,
                                this.#ie = e.order;
                                for (const t of e.groups)
                                    this.#re.set(t.id, new s(t.name,t.intent));
                                if ("OFF" === e.baseState)
                                    for (const e of this.#re.values())
                                        e._setVisible(i, !1);
                                for (const t of e.on)
                                    this.#re.get(t)._setVisible(i, !0);
                                for (const t of e.off)
                                    this.#re.get(t)._setVisible(i, !1);
                                this.#ne = new Map;
                                for (const [e,t] of this.#re)
                                    this.#ne.set(e, t.visible)
                            }
                        }
                        #se(e) {
                            const t = e.length;
                            if (t < 2)
                                return !0;
                            const r = e[0];
                            for (let i = 1; i < t; i++) {
                                const t = e[i];
                                let s;
                                if (Array.isArray(t))
                                    s = this.#se(t);
                                else {
                                    if (!this.#re.has(t))
                                        return (0,
                                        n.warn)(`Optional content group not found: ${t}`),
                                        !0;
                                    s = this.#re.get(t).visible
                                }
                                switch (r) {
                                case "And":
                                    if (!s)
                                        return !1;
                                    break;
                                case "Or":
                                    if (s)
                                        return !0;
                                    break;
                                case "Not":
                                    return !s;
                                default:
                                    return !0
                                }
                            }
                            return "And" === r
                        }
                        isVisible(e) {
                            if (0 === this.#re.size)
                                return !0;
                            if (!e)
                                return (0,
                                n.warn)("Optional content group not defined."),
                                !0;
                            if ("OCG" === e.type)
                                return this.#re.has(e.id) ? this.#re.get(e.id).visible : ((0,
                                n.warn)(`Optional content group not found: ${e.id}`),
                                !0);
                            if ("OCMD" === e.type) {
                                if (e.expression)
                                    return this.#se(e.expression);
                                if (!e.policy || "AnyOn" === e.policy) {
                                    for (const t of e.ids) {
                                        if (!this.#re.has(t))
                                            return (0,
                                            n.warn)(`Optional content group not found: ${t}`),
                                            !0;
                                        if (this.#re.get(t).visible)
                                            return !0
                                    }
                                    return !1
                                }
                                if ("AllOn" === e.policy) {
                                    for (const t of e.ids) {
                                        if (!this.#re.has(t))
                                            return (0,
                                            n.warn)(`Optional content group not found: ${t}`),
                                            !0;
                                        if (!this.#re.get(t).visible)
                                            return !1
                                    }
                                    return !0
                                }
                                if ("AnyOff" === e.policy) {
                                    for (const t of e.ids) {
                                        if (!this.#re.has(t))
                                            return (0,
                                            n.warn)(`Optional content group not found: ${t}`),
                                            !0;
                                        if (!this.#re.get(t).visible)
                                            return !0
                                    }
                                    return !1
                                }
                                if ("AllOff" === e.policy) {
                                    for (const t of e.ids) {
                                        if (!this.#re.has(t))
                                            return (0,
                                            n.warn)(`Optional content group not found: ${t}`),
                                            !0;
                                        if (this.#re.get(t).visible)
                                            return !1
                                    }
                                    return !0
                                }
                                return (0,
                                n.warn)(`Unknown optional content policy ${e.policy}.`),
                                !0
                            }
                            return (0,
                            n.warn)(`Unknown group type ${e.type}.`),
                            !0
                        }
                        setVisibility(e, t=!0) {
                            this.#re.has(e) ? (this.#re.get(e)._setVisible(i, !!t),
                            this.#te = null) : (0,
                            n.warn)(`Optional content group not found: ${e}`)
                        }
                        get hasInitialVisibility() {
                            if (null !== this.#te)
                                return this.#te;
                            for (const [e,t] of this.#re) {
                                const r = this.#ne.get(e);
                                if (t.visible !== r)
                                    return this.#te = !1
                            }
                            return this.#te = !0
                        }
                        getOrder() {
                            return this.#re.size ? this.#ie ? this.#ie.slice() : [...this.#re.keys()] : null
                        }
                        getGroups() {
                            return this.#re.size > 0 ? (0,
                            n.objectFromMap)(this.#re) : null
                        }
                        getGroup(e) {
                            return this.#re.get(e) || null
                        }
                    }
                }
                , (e, t, r) => {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }),
                    t.PDFDataTransportStream = void 0;
                    var n = r(1)
                      , i = r(8);
                    t.PDFDataTransportStream = class {
                        constructor(e, t) {
                            (0,
                            n.assert)(t, 'PDFDataTransportStream - missing required "pdfDataRangeTransport" argument.'),
                            this._queuedChunks = [],
                            this._progressiveDone = e.progressiveDone || !1,
                            this._contentDispositionFilename = e.contentDispositionFilename || null;
                            const r = e.initialData;
                            if (r?.length > 0) {
                                const e = new Uint8Array(r).buffer;
                                this._queuedChunks.push(e)
                            }
                            this._pdfDataRangeTransport = t,
                            this._isStreamingSupported = !e.disableStream,
                            this._isRangeSupported = !e.disableRange,
                            this._contentLength = e.length,
                            this._fullRequestReader = null,
                            this._rangeReaders = [],
                            this._pdfDataRangeTransport.addRangeListener(( (e, t) => {
                                this._onReceiveData({
                                    begin: e,
                                    chunk: t
                                })
                            }
                            )),
                            this._pdfDataRangeTransport.addProgressListener(( (e, t) => {
                                this._onProgress({
                                    loaded: e,
                                    total: t
                                })
                            }
                            )),
                            this._pdfDataRangeTransport.addProgressiveReadListener((e => {
                                this._onReceiveData({
                                    chunk: e
                                })
                            }
                            )),
                            this._pdfDataRangeTransport.addProgressiveDoneListener(( () => {
                                this._onProgressiveDone()
                            }
                            )),
                            this._pdfDataRangeTransport.transportReady()
                        }
                        _onReceiveData(e) {
                            const t = new Uint8Array(e.chunk).buffer;
                            if (void 0 === e.begin)
                                this._fullRequestReader ? this._fullRequestReader._enqueue(t) : this._queuedChunks.push(t);
                            else {
                                const r = this._rangeReaders.some((function(r) {
                                    return r._begin === e.begin && (r._enqueue(t),
                                    !0)
                                }
                                ));
                                (0,
                                n.assert)(r, "_onReceiveData - no `PDFDataTransportStreamRangeReader` instance found.")
                            }
                        }
                        get _progressiveDataLength() {
                            return this._fullRequestReader?._loaded ?? 0
                        }
                        _onProgress(e) {
                            if (void 0 === e.total) {
                                const t = this._rangeReaders[0];
                                t?.onProgress && t.onProgress({
                                    loaded: e.loaded
                                })
                            } else {
                                const t = this._fullRequestReader;
                                t?.onProgress && t.onProgress({
                                    loaded: e.loaded,
                                    total: e.total
                                })
                            }
                        }
                        _onProgressiveDone() {
                            this._fullRequestReader && this._fullRequestReader.progressiveDone(),
                            this._progressiveDone = !0
                        }
                        _removeRangeReader(e) {
                            const t = this._rangeReaders.indexOf(e);
                            t >= 0 && this._rangeReaders.splice(t, 1)
                        }
                        getFullReader() {
                            (0,
                            n.assert)(!this._fullRequestReader, "PDFDataTransportStream.getFullReader can only be called once.");
                            const e = this._queuedChunks;
                            return this._queuedChunks = null,
                            new s(this,e,this._progressiveDone,this._contentDispositionFilename)
                        }
                        getRangeReader(e, t) {
                            if (t <= this._progressiveDataLength)
                                return null;
                            const r = new a(this,e,t);
                            return this._pdfDataRangeTransport.requestDataRange(e, t),
                            this._rangeReaders.push(r),
                            r
                        }
                        cancelAllRequests(e) {
                            this._fullRequestReader && this._fullRequestReader.cancel(e);
                            for (const t of this._rangeReaders.slice(0))
                                t.cancel(e);
                            this._pdfDataRangeTransport.abort()
                        }
                    }
                    ;
                    class s {
                        constructor(e, t, r=!1, n=null) {
                            this._stream = e,
                            this._done = r || !1,
                            this._filename = (0,
                            i.isPdfFile)(n) ? n : null,
                            this._queuedChunks = t || [],
                            this._loaded = 0;
                            for (const i of this._queuedChunks)
                                this._loaded += i.byteLength;
                            this._requests = [],
                            this._headersReady = Promise.resolve(),
                            e._fullRequestReader = this,
                            this.onProgress = null
                        }
                        _enqueue(e) {
                            this._done || (this._requests.length > 0 ? this._requests.shift().resolve({
                                value: e,
                                done: !1
                            }) : this._queuedChunks.push(e),
                            this._loaded += e.byteLength)
                        }
                        get headersReady() {
                            return this._headersReady
                        }
                        get filename() {
                            return this._filename
                        }
                        get isRangeSupported() {
                            return this._stream._isRangeSupported
                        }
                        get isStreamingSupported() {
                            return this._stream._isStreamingSupported
                        }
                        get contentLength() {
                            return this._stream._contentLength
                        }
                        async read() {
                            if (this._queuedChunks.length > 0)
                                return {
                                    value: this._queuedChunks.shift(),
                                    done: !1
                                };
                            if (this._done)
                                return {
                                    value: void 0,
                                    done: !0
                                };
                            const e = (0,
                            n.createPromiseCapability)();
                            return this._requests.push(e),
                            e.promise
                        }
                        cancel(e) {
                            this._done = !0;
                            for (const t of this._requests)
                                t.resolve({
                                    value: void 0,
                                    done: !0
                                });
                            this._requests.length = 0
                        }
                        progressiveDone() {
                            this._done || (this._done = !0)
                        }
                    }
                    class a {
                        constructor(e, t, r) {
                            this._stream = e,
                            this._begin = t,
                            this._end = r,
                            this._queuedChunk = null,
                            this._requests = [],
                            this._done = !1,
                            this.onProgress = null
                        }
                        _enqueue(e) {
                            if (!this._done) {
                                if (0 === this._requests.length)
                                    this._queuedChunk = e;
                                else {
                                    this._requests.shift().resolve({
                                        value: e,
                                        done: !1
                                    });
                                    for (const e of this._requests)
                                        e.resolve({
                                            value: void 0,
                                            done: !0
                                        });
                                    this._requests.length = 0
                                }
                                this._done = !0,
                                this._stream._removeRangeReader(this)
                            }
                        }
                        get isStreamingSupported() {
                            return !1
                        }
                        async read() {
                            if (this._queuedChunk) {
                                const e = this._queuedChunk;
                                return this._queuedChunk = null,
                                {
                                    value: e,
                                    done: !1
                                }
                            }
                            if (this._done)
                                return {
                                    value: void 0,
                                    done: !0
                                };
                            const e = (0,
                            n.createPromiseCapability)();
                            return this._requests.push(e),
                            e.promise
                        }
                        cancel(e) {
                            this._done = !0;
                            for (const t of this._requests)
                                t.resolve({
                                    value: void 0,
                                    done: !0
                                });
                            this._requests.length = 0,
                            this._stream._removeRangeReader(this)
                        }
                    }
                }
                , (e, t) => {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }),
                    t.XfaText = void 0;
                    class r {
                        static textContent(e) {
                            const t = []
                              , n = {
                                items: t,
                                styles: Object.create(null)
                            };
                            return function e(n) {
                                if (!n)
                                    return;
                                let i = null;
                                const s = n.name;
                                if ("#text" === s)
                                    i = n.value;
                                else {
                                    if (!r.shouldBuildText(s))
                                        return;
                                    n?.attributes?.textContent ? i = n.attributes.textContent : n.value && (i = n.value)
                                }
                                if (null !== i && t.push({
                                    str: i
                                }),
                                n.children)
                                    for (const t of n.children)
                                        e(t)
                            }(e),
                            n
                        }
                        static shouldBuildText(e) {
                            return !("textarea" === e || "input" === e || "option" === e || "select" === e)
                        }
                    }
                    t.XfaText = r
                }
                , (e, t, r) => {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }),
                    t.NodeStandardFontDataFactory = t.NodeCanvasFactory = t.NodeCMapReaderFactory = void 0;
                    var n = r(9);
                    const i = function(e) {
                        return new Promise(( (t, r) => {
                            require$$0.readFile(e, ( (e, n) => {
                                !e && n ? t(new Uint8Array(n)) : r(new Error(e))
                            }
                            ))
                        }
                        ))
                    };
                    class s extends n.BaseCanvasFactory {
                        _createCanvas(e, t) {
                            return require$$1.createCanvas(e, t)
                        }
                    }
                    t.NodeCanvasFactory = s;
                    class a extends n.BaseCMapReaderFactory {
                        _fetchData(e, t) {
                            return i(e).then((e => ({
                                cMapData: e,
                                compressionType: t
                            })))
                        }
                    }
                    t.NodeCMapReaderFactory = a;
                    class o extends n.BaseStandardFontDataFactory {
                        _fetchData(e) {
                            return i(e)
                        }
                    }
                    t.NodeStandardFontDataFactory = o
                }
                , (e, t, r) => {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }),
                    t.AnnotationEditorLayer = void 0;
                    var n = r(7)
                      , i = r(1)
                      , s = r(23)
                      , a = r(24);
                    class o {
                        #ae;
                        #oe = !1;
                        #le = this.pointerup.bind(this);
                        #ce = this.pointerdown.bind(this);
                        #he = new Map;
                        #de = !1;
                        #ue = !1;
                        #fe;
                        static _initialized = !1;
                        constructor(e) {
                            o._initialized || (o._initialized = !0,
                            s.FreeTextEditor.initialize(e.l10n),
                            a.InkEditor.initialize(e.l10n),
                            e.uiManager.registerEditorTypes([s.FreeTextEditor, a.InkEditor])),
                            this.#fe = e.uiManager,
                            this.annotationStorage = e.annotationStorage,
                            this.pageIndex = e.pageIndex,
                            this.div = e.div,
                            this.#ae = e.accessibilityManager,
                            this.#fe.addLayer(this)
                        }
                        updateToolbar(e) {
                            this.#fe.updateToolbar(e)
                        }
                        updateMode(e=this.#fe.getMode()) {
                            this.#pe(),
                            e === i.AnnotationEditorType.INK ? (this.addInkEditorIfNeeded(!1),
                            this.disableClick()) : this.enableClick(),
                            this.#fe.unselectAll()
                        }
                        addInkEditorIfNeeded(e) {
                            if (e || this.#fe.getMode() === i.AnnotationEditorType.INK) {
                                if (!e)
                                    for (const e of this.#he.values())
                                        if (e.isEmpty())
                                            return void e.setInBackground();
                                this.#ge({
                                    offsetX: 0,
                                    offsetY: 0
                                }).setInBackground()
                            }
                        }
                        setEditingState(e) {
                            this.#fe.setEditingState(e)
                        }
                        addCommands(e) {
                            this.#fe.addCommands(e)
                        }
                        enable() {
                            this.div.style.pointerEvents = "auto";
                            for (const e of this.#he.values())
                                e.enableEditing()
                        }
                        disable() {
                            this.div.style.pointerEvents = "none";
                            for (const e of this.#he.values())
                                e.disableEditing()
                        }
                        setActiveEditor(e) {
                            this.#fe.getActive() !== e && this.#fe.setActiveEditor(e)
                        }
                        enableClick() {
                            this.div.addEventListener("pointerdown", this.#ce),
                            this.div.addEventListener("pointerup", this.#le)
                        }
                        disableClick() {
                            this.div.removeEventListener("pointerdown", this.#ce),
                            this.div.removeEventListener("pointerup", this.#le)
                        }
                        attach(e) {
                            this.#he.set(e.id, e)
                        }
                        detach(e) {
                            this.#he.delete(e.id),
                            this.#ae?.removePointerInTextLayer(e.contentDiv)
                        }
                        remove(e) {
                            this.#fe.removeEditor(e),
                            this.detach(e),
                            this.annotationStorage.remove(e.id),
                            e.div.style.display = "none",
                            setTimeout(( () => {
                                e.div.style.display = "",
                                e.div.remove(),
                                e.isAttachedToDOM = !1,
                                document.activeElement === document.body && this.#fe.focusMainContainer()
                            }
                            ), 0),
                            this.#ue || this.addInkEditorIfNeeded(!1)
                        }
                        #_e(e) {
                            e.parent !== this && (this.attach(e),
                            e.pageIndex = this.pageIndex,
                            e.parent?.detach(e),
                            e.parent = this,
                            e.div && e.isAttachedToDOM && (e.div.remove(),
                            this.div.append(e.div)))
                        }
                        add(e) {
                            if (this.#_e(e),
                            this.#fe.addEditor(e),
                            this.attach(e),
                            !e.isAttachedToDOM) {
                                const t = e.render();
                                this.div.append(t),
                                e.isAttachedToDOM = !0
                            }
                            this.moveEditorInDOM(e),
                            e.onceAdded(),
                            this.addToAnnotationStorage(e)
                        }
                        moveEditorInDOM(e) {
                            this.#ae?.moveElementInDOM(this.div, e.div, e.contentDiv, !0)
                        }
                        addToAnnotationStorage(e) {
                            e.isEmpty() || this.annotationStorage.has(e.id) || this.annotationStorage.setValue(e.id, e)
                        }
                        addOrRebuild(e) {
                            e.needsToBeRebuilt() ? e.rebuild() : this.add(e)
                        }
                        addANewEditor(e) {
                            this.addCommands({
                                cmd: () => {
                                    this.addOrRebuild(e)
                                }
                                ,
                                undo: () => {
                                    e.remove()
                                }
                                ,
                                mustExec: !0
                            })
                        }
                        addUndoableEditor(e) {
                            this.addCommands({
                                cmd: () => {
                                    this.addOrRebuild(e)
                                }
                                ,
                                undo: () => {
                                    e.remove()
                                }
                                ,
                                mustExec: !1
                            })
                        }
                        getNextId() {
                            return this.#fe.getId()
                        }
                        #me(e) {
                            switch (this.#fe.getMode()) {
                            case i.AnnotationEditorType.FREETEXT:
                                return new s.FreeTextEditor(e);
                            case i.AnnotationEditorType.INK:
                                return new a.InkEditor(e)
                            }
                            return null
                        }
                        deserialize(e) {
                            switch (e.annotationType) {
                            case i.AnnotationEditorType.FREETEXT:
                                return s.FreeTextEditor.deserialize(e, this);
                            case i.AnnotationEditorType.INK:
                                return a.InkEditor.deserialize(e, this)
                            }
                            return null
                        }
                        #ge(e) {
                            const t = this.getNextId()
                              , r = this.#me({
                                parent: this,
                                id: t,
                                x: e.offsetX,
                                y: e.offsetY
                            });
                            return r && this.add(r),
                            r
                        }
                        setSelected(e) {
                            this.#fe.setSelected(e)
                        }
                        toggleSelected(e) {
                            this.#fe.toggleSelected(e)
                        }
                        isSelected(e) {
                            return this.#fe.isSelected(e)
                        }
                        unselect(e) {
                            this.#fe.unselect(e)
                        }
                        pointerup(e) {
                            const t = n.KeyboardManager.platform.isMac;
                            0 !== e.button || e.ctrlKey && t || e.target === this.div && this.#de && (this.#de = !1,
                            this.#oe ? this.#ge(e) : this.#oe = !0)
                        }
                        pointerdown(e) {
                            const t = n.KeyboardManager.platform.isMac;
                            if (0 !== e.button || e.ctrlKey && t)
                                return;
                            if (e.target !== this.div)
                                return;
                            this.#de = !0;
                            const r = this.#fe.getActive();
                            this.#oe = !r || r.isEmpty()
                        }
                        drop(e) {
                            const t = e.dataTransfer.getData("text/plain")
                              , r = this.#fe.getEditor(t);
                            if (!r)
                                return;
                            e.preventDefault(),
                            e.dataTransfer.dropEffect = "move",
                            this.#_e(r);
                            const n = this.div.getBoundingClientRect()
                              , i = e.clientX - n.x
                              , s = e.clientY - n.y;
                            r.translate(i - r.startX, s - r.startY),
                            this.moveEditorInDOM(r),
                            r.div.focus()
                        }
                        dragover(e) {
                            e.preventDefault()
                        }
                        destroy() {
                            this.#fe.getActive()?.parent === this && this.#fe.setActiveEditor(null);
                            for (const e of this.#he.values())
                                this.#ae?.removePointerInTextLayer(e.contentDiv),
                                e.isAttachedToDOM = !1,
                                e.div.remove(),
                                e.parent = null;
                            this.div = null,
                            this.#he.clear(),
                            this.#fe.removeLayer(this)
                        }
                        #pe() {
                            this.#ue = !0;
                            for (const e of this.#he.values())
                                e.isEmpty() && e.remove();
                            this.#ue = !1
                        }
                        render(e) {
                            this.viewport = e.viewport,
                            (0,
                            n.bindEvents)(this, this.div, ["dragover", "drop"]),
                            this.setDimensions();
                            for (const t of this.#fe.getEditors(this.pageIndex))
                                this.add(t);
                            this.updateMode()
                        }
                        update(e) {
                            this.viewport = e.viewport,
                            this.setDimensions(),
                            this.updateMode()
                        }
                        get scaleFactor() {
                            return this.viewport.scale
                        }
                        get pageDimensions() {
                            const [e,t,r,n] = this.viewport.viewBox;
                            return [r - e, n - t]
                        }
                        get viewportBaseDimensions() {
                            const {width: e, height: t, rotation: r} = this.viewport;
                            return r % 180 === 0 ? [e, t] : [t, e]
                        }
                        setDimensions() {
                            const {width: e, height: t, rotation: r} = this.viewport
                              , n = r % 180 !== 0
                              , i = Math.floor(e) + "px"
                              , s = Math.floor(t) + "px";
                            this.div.style.width = n ? s : i,
                            this.div.style.height = n ? i : s,
                            this.div.setAttribute("data-main-rotation", r)
                        }
                    }
                    t.AnnotationEditorLayer = o
                }
                , (e, t, r) => {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }),
                    t.FreeTextEditor = void 0;
                    var n = r(1)
                      , i = r(7)
                      , s = r(6);
                    class a extends s.AnnotationEditor {
                        #be = this.editorDivBlur.bind(this);
                        #ve = this.editorDivFocus.bind(this);
                        #ye = this.editorDivKeydown.bind(this);
                        #Ae;
                        #Ee = "";
                        #Se = !1;
                        #we;
                        static _freeTextDefaultContent = "";
                        static _l10nPromise;
                        static _internalPadding = 0;
                        static _defaultColor = null;
                        static _defaultFontSize = 10;
                        static _keyboardManager = new i.KeyboardManager([[["ctrl+Enter", "mac+meta+Enter", "Escape", "mac+Escape"], a.prototype.commitOrRemove]]);
                        static _type = "freetext";
                        constructor(e) {
                            super({
                                ...e,
                                name: "freeTextEditor"
                            }),
                            this.#Ae = e.color || a._defaultColor || s.AnnotationEditor._defaultLineColor,
                            this.#we = e.fontSize || a._defaultFontSize
                        }
                        static initialize(e) {
                            this._l10nPromise = new Map(["free_text_default_content", "editor_free_text_aria_label"].map((t => [t, e.get(t)])));
                            const t = getComputedStyle(document.documentElement);
                            this._internalPadding = parseFloat(t.getPropertyValue("--freetext-padding"))
                        }
                        static updateDefaultParams(e, t) {
                            switch (e) {
                            case n.AnnotationEditorParamsType.FREETEXT_SIZE:
                                a._defaultFontSize = t;
                                break;
                            case n.AnnotationEditorParamsType.FREETEXT_COLOR:
                                a._defaultColor = t
                            }
                        }
                        updateParams(e, t) {
                            switch (e) {
                            case n.AnnotationEditorParamsType.FREETEXT_SIZE:
                                this.#Te(t);
                                break;
                            case n.AnnotationEditorParamsType.FREETEXT_COLOR:
                                this.#xe(t)
                            }
                        }
                        static get defaultPropertiesToUpdate() {
                            return [[n.AnnotationEditorParamsType.FREETEXT_SIZE, a._defaultFontSize], [n.AnnotationEditorParamsType.FREETEXT_COLOR, a._defaultColor || s.AnnotationEditor._defaultLineColor]]
                        }
                        get propertiesToUpdate() {
                            return [[n.AnnotationEditorParamsType.FREETEXT_SIZE, this.#we], [n.AnnotationEditorParamsType.FREETEXT_COLOR, this.#Ae]]
                        }
                        #Te(e) {
                            const t = e => {
                                this.editorDiv.style.fontSize = `calc(${e}px * var(--scale-factor))`,
                                this.translate(0, -(e - this.#we) * this.parent.scaleFactor),
                                this.#we = e,
                                this.#Ce()
                            }
                              , r = this.#we;
                            this.parent.addCommands({
                                cmd: () => {
                                    t(e)
                                }
                                ,
                                undo: () => {
                                    t(r)
                                }
                                ,
                                mustExec: !0,
                                type: n.AnnotationEditorParamsType.FREETEXT_SIZE,
                                overwriteIfSameType: !0,
                                keepUndo: !0
                            })
                        }
                        #xe(e) {
                            const t = this.#Ae;
                            this.parent.addCommands({
                                cmd: () => {
                                    this.#Ae = e,
                                    this.editorDiv.style.color = e
                                }
                                ,
                                undo: () => {
                                    this.#Ae = t,
                                    this.editorDiv.style.color = t
                                }
                                ,
                                mustExec: !0,
                                type: n.AnnotationEditorParamsType.FREETEXT_COLOR,
                                overwriteIfSameType: !0,
                                keepUndo: !0
                            })
                        }
                        getInitialTranslation() {
                            return [-a._internalPadding * this.parent.scaleFactor, -(a._internalPadding + this.#we) * this.parent.scaleFactor]
                        }
                        rebuild() {
                            super.rebuild(),
                            null !== this.div && (this.isAttachedToDOM || this.parent.add(this))
                        }
                        enableEditMode() {
                            this.isInEditMode() || (this.parent.setEditingState(!1),
                            this.parent.updateToolbar(n.AnnotationEditorType.FREETEXT),
                            super.enableEditMode(),
                            this.enableEditing(),
                            this.overlayDiv.classList.remove("enabled"),
                            this.editorDiv.contentEditable = !0,
                            this.div.draggable = !1,
                            this.editorDiv.addEventListener("keydown", this.#ye),
                            this.editorDiv.addEventListener("focus", this.#ve),
                            this.editorDiv.addEventListener("blur", this.#be))
                        }
                        disableEditMode() {
                            this.isInEditMode() && (this.parent.setEditingState(!0),
                            super.disableEditMode(),
                            this.disableEditing(),
                            this.overlayDiv.classList.add("enabled"),
                            this.editorDiv.contentEditable = !1,
                            this.div.draggable = !0,
                            this.editorDiv.removeEventListener("keydown", this.#ye),
                            this.editorDiv.removeEventListener("focus", this.#ve),
                            this.editorDiv.removeEventListener("blur", this.#be),
                            this.div.focus(),
                            this.isEditing = !1)
                        }
                        focusin(e) {
                            super.focusin(e),
                            e.target !== this.editorDiv && this.editorDiv.focus()
                        }
                        onceAdded() {
                            this.width || (this.enableEditMode(),
                            this.editorDiv.focus())
                        }
                        isEmpty() {
                            return !this.editorDiv || "" === this.editorDiv.innerText.trim()
                        }
                        remove() {
                            this.isEditing = !1,
                            this.parent.setEditingState(!0),
                            super.remove()
                        }
                        #Re() {
                            const e = this.editorDiv.getElementsByTagName("div");
                            if (0 === e.length)
                                return this.editorDiv.innerText;
                            const t = [];
                            for (let r = 0, n = e.length; r < n; r++) {
                                const n = e[r].firstChild;
                                "#text" === n?.nodeName ? t.push(n.data) : t.push("")
                            }
                            return t.join("\n")
                        }
                        #Ce() {
                            const [e,t] = this.parent.viewportBaseDimensions
                              , r = this.div.getBoundingClientRect();
                            this.width = r.width / e,
                            this.height = r.height / t
                        }
                        commit() {
                            super.commit(),
                            this.#Se || (this.#Se = !0,
                            this.parent.addUndoableEditor(this)),
                            this.disableEditMode(),
                            this.#Ee = this.#Re().trimEnd(),
                            this.#Ce()
                        }
                        shouldGetKeyboardEvents() {
                            return this.isInEditMode()
                        }
                        dblclick(e) {
                            this.enableEditMode(),
                            this.editorDiv.focus()
                        }
                        keydown(e) {
                            e.target === this.div && "Enter" === e.key && (this.enableEditMode(),
                            this.editorDiv.focus())
                        }
                        editorDivKeydown(e) {
                            a._keyboardManager.exec(this, e)
                        }
                        editorDivFocus(e) {
                            this.isEditing = !0
                        }
                        editorDivBlur(e) {
                            this.isEditing = !1
                        }
                        disableEditing() {
                            this.editorDiv.setAttribute("role", "comment"),
                            this.editorDiv.removeAttribute("aria-multiline")
                        }
                        enableEditing() {
                            this.editorDiv.setAttribute("role", "textbox"),
                            this.editorDiv.setAttribute("aria-multiline", !0)
                        }
                        render() {
                            if (this.div)
                                return this.div;
                            let e, t;
                            this.width && (e = this.x,
                            t = this.y),
                            super.render(),
                            this.editorDiv = document.createElement("div"),
                            this.editorDiv.className = "internal",
                            this.editorDiv.setAttribute("id", `${this.id}-editor`),
                            this.enableEditing(),
                            a._l10nPromise.get("editor_free_text_aria_label").then((e => this.editorDiv?.setAttribute("aria-label", e))),
                            a._l10nPromise.get("free_text_default_content").then((e => this.editorDiv?.setAttribute("default-content", e))),
                            this.editorDiv.contentEditable = !0;
                            const {style: r} = this.editorDiv;
                            if (r.fontSize = `calc(${this.#we}px * var(--scale-factor))`,
                            r.color = this.#Ae,
                            this.div.append(this.editorDiv),
                            this.overlayDiv = document.createElement("div"),
                            this.overlayDiv.classList.add("overlay", "enabled"),
                            this.div.append(this.overlayDiv),
                            (0,
                            i.bindEvents)(this, this.div, ["dblclick", "keydown"]),
                            this.width) {
                                const [r,n] = this.parent.viewportBaseDimensions;
                                this.setAt(e * r, t * n, this.width * r, this.height * n);
                                for (const e of this.#Ee.split("\n")) {
                                    const t = document.createElement("div");
                                    t.append(e ? document.createTextNode(e) : document.createElement("br")),
                                    this.editorDiv.append(t)
                                }
                                this.div.draggable = !0,
                                this.editorDiv.contentEditable = !1
                            } else
                                this.div.draggable = !1,
                                this.editorDiv.contentEditable = !0;
                            return this.div
                        }
                        get contentDiv() {
                            return this.editorDiv
                        }
                        static deserialize(e, t) {
                            const r = super.deserialize(e, t);
                            return r.#we = e.fontSize,
                            r.#Ae = n.Util.makeHexColor(...e.color),
                            r.#Ee = e.value,
                            r
                        }
                        serialize() {
                            if (this.isEmpty())
                                return null;
                            const e = a._internalPadding * this.parent.scaleFactor
                              , t = this.getRect(e, e)
                              , r = s.AnnotationEditor._colorManager.convert(getComputedStyle(this.editorDiv).color);
                            return {
                                annotationType: n.AnnotationEditorType.FREETEXT,
                                color: r,
                                fontSize: this.#we,
                                value: this.#Ee,
                                pageIndex: this.parent.pageIndex,
                                rect: t,
                                rotation: this.rotation
                            }
                        }
                    }
                    t.FreeTextEditor = a
                }
                , (e, t, r) => {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }),
                    t.InkEditor = void 0,
                    Object.defineProperty(t, "fitCurve", {
                        enumerable: !0,
                        get: function() {
                            return s.fitCurve
                        }
                    });
                    var n = r(1)
                      , i = r(6)
                      , s = r(25)
                      , a = r(7);
                    const o = 16;
                    class l extends i.AnnotationEditor {
                        #ke = 0;
                        #Me = 0;
                        #Pe = 0;
                        #Ie = this.canvasPointermove.bind(this);
                        #De = this.canvasPointerleave.bind(this);
                        #Oe = this.canvasPointerup.bind(this);
                        #Fe = this.canvasPointerdown.bind(this);
                        #Le = !1;
                        #Ne = !1;
                        #Be = null;
                        #Ue = null;
                        #je = 0;
                        #ze = 0;
                        #$e = null;
                        static _defaultColor = null;
                        static _defaultOpacity = 1;
                        static _defaultThickness = 1;
                        static _l10nPromise;
                        static _type = "ink";
                        constructor(e) {
                            super({
                                ...e,
                                name: "inkEditor"
                            }),
                            this.color = e.color || null,
                            this.thickness = e.thickness || null,
                            this.opacity = e.opacity || null,
                            this.paths = [],
                            this.bezierPath2D = [],
                            this.currentPath = [],
                            this.scaleFactor = 1,
                            this.translationX = this.translationY = 0,
                            this.x = 0,
                            this.y = 0
                        }
                        static initialize(e) {
                            this._l10nPromise = new Map(["editor_ink_canvas_aria_label", "editor_ink_aria_label"].map((t => [t, e.get(t)])))
                        }
                        static updateDefaultParams(e, t) {
                            switch (e) {
                            case n.AnnotationEditorParamsType.INK_THICKNESS:
                                l._defaultThickness = t;
                                break;
                            case n.AnnotationEditorParamsType.INK_COLOR:
                                l._defaultColor = t;
                                break;
                            case n.AnnotationEditorParamsType.INK_OPACITY:
                                l._defaultOpacity = t / 100
                            }
                        }
                        updateParams(e, t) {
                            switch (e) {
                            case n.AnnotationEditorParamsType.INK_THICKNESS:
                                this.#He(t);
                                break;
                            case n.AnnotationEditorParamsType.INK_COLOR:
                                this.#xe(t);
                                break;
                            case n.AnnotationEditorParamsType.INK_OPACITY:
                                this.#qe(t)
                            }
                        }
                        static get defaultPropertiesToUpdate() {
                            return [[n.AnnotationEditorParamsType.INK_THICKNESS, l._defaultThickness], [n.AnnotationEditorParamsType.INK_COLOR, l._defaultColor || i.AnnotationEditor._defaultLineColor], [n.AnnotationEditorParamsType.INK_OPACITY, Math.round(100 * l._defaultOpacity)]]
                        }
                        get propertiesToUpdate() {
                            return [[n.AnnotationEditorParamsType.INK_THICKNESS, this.thickness || l._defaultThickness], [n.AnnotationEditorParamsType.INK_COLOR, this.color || l._defaultColor || i.AnnotationEditor._defaultLineColor], [n.AnnotationEditorParamsType.INK_OPACITY, Math.round(100 * (this.opacity ?? l._defaultOpacity))]]
                        }
                        #He(e) {
                            const t = this.thickness;
                            this.parent.addCommands({
                                cmd: () => {
                                    this.thickness = e,
                                    this.#We()
                                }
                                ,
                                undo: () => {
                                    this.thickness = t,
                                    this.#We()
                                }
                                ,
                                mustExec: !0,
                                type: n.AnnotationEditorParamsType.INK_THICKNESS,
                                overwriteIfSameType: !0,
                                keepUndo: !0
                            })
                        }
                        #xe(e) {
                            const t = this.color;
                            this.parent.addCommands({
                                cmd: () => {
                                    this.color = e,
                                    this.#Ze()
                                }
                                ,
                                undo: () => {
                                    this.color = t,
                                    this.#Ze()
                                }
                                ,
                                mustExec: !0,
                                type: n.AnnotationEditorParamsType.INK_COLOR,
                                overwriteIfSameType: !0,
                                keepUndo: !0
                            })
                        }
                        #qe(e) {
                            e /= 100;
                            const t = this.opacity;
                            this.parent.addCommands({
                                cmd: () => {
                                    this.opacity = e,
                                    this.#Ze()
                                }
                                ,
                                undo: () => {
                                    this.opacity = t,
                                    this.#Ze()
                                }
                                ,
                                mustExec: !0,
                                type: n.AnnotationEditorParamsType.INK_OPACITY,
                                overwriteIfSameType: !0,
                                keepUndo: !0
                            })
                        }
                        rebuild() {
                            super.rebuild(),
                            null !== this.div && (this.canvas || (this.#Ge(),
                            this.#Xe()),
                            this.isAttachedToDOM || (this.parent.add(this),
                            this.#Ye()),
                            this.#We())
                        }
                        remove() {
                            null !== this.canvas && (this.isEmpty() || this.commit(),
                            this.canvas.width = this.canvas.height = 0,
                            this.canvas.remove(),
                            this.canvas = null,
                            this.#Ue.disconnect(),
                            this.#Ue = null,
                            super.remove())
                        }
                        enableEditMode() {
                            this.#Le || null === this.canvas || (super.enableEditMode(),
                            this.div.draggable = !1,
                            this.canvas.addEventListener("pointerdown", this.#Fe),
                            this.canvas.addEventListener("pointerup", this.#Oe))
                        }
                        disableEditMode() {
                            this.isInEditMode() && null !== this.canvas && (super.disableEditMode(),
                            this.div.draggable = !this.isEmpty(),
                            this.div.classList.remove("editing"),
                            this.canvas.removeEventListener("pointerdown", this.#Fe),
                            this.canvas.removeEventListener("pointerup", this.#Oe))
                        }
                        onceAdded() {
                            this.div.draggable = !this.isEmpty()
                        }
                        isEmpty() {
                            return 0 === this.paths.length || 1 === this.paths.length && 0 === this.paths[0].length
                        }
                        #Ve() {
                            const {width: e, height: t, rotation: r} = this.parent.viewport;
                            switch (r) {
                            case 90:
                                return [0, e, e, t];
                            case 180:
                                return [e, t, e, t];
                            case 270:
                                return [t, 0, e, t];
                            default:
                                return [0, 0, e, t]
                            }
                        }
                        #Ke() {
                            this.ctx.lineWidth = this.thickness * this.parent.scaleFactor / this.scaleFactor,
                            this.ctx.lineCap = "round",
                            this.ctx.lineJoin = "round",
                            this.ctx.miterLimit = 10,
                            this.ctx.strokeStyle = `${this.color}${(0,
                            a.opacityToHex)(this.opacity)}`
                        }
                        #Je(e, t) {
                            this.isEditing = !0,
                            this.#Ne || (this.#Ne = !0,
                            this.#Ye(),
                            this.thickness ||= l._defaultThickness,
                            this.color ||= l._defaultColor || i.AnnotationEditor._defaultLineColor,
                            this.opacity ??= l._defaultOpacity),
                            this.currentPath.push([e, t]),
                            this.#Be = null,
                            this.#Ke(),
                            this.ctx.beginPath(),
                            this.ctx.moveTo(e, t),
                            this.#$e = () => {
                                this.#$e && (this.#Be && (this.isEmpty() ? (this.ctx.setTransform(1, 0, 0, 1, 0, 0),
                                this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)) : this.#Ze(),
                                this.ctx.lineTo(...this.#Be),
                                this.#Be = null,
                                this.ctx.stroke()),
                                window.requestAnimationFrame(this.#$e))
                            }
                            ,
                            window.requestAnimationFrame(this.#$e)
                        }
                        #Qe(e, t) {
                            const [r,n] = this.currentPath.at(-1);
                            e === r && t === n || (this.currentPath.push([e, t]),
                            this.#Be = [e, t])
                        }
                        #et(e, t) {
                            this.ctx.closePath(),
                            this.#$e = null,
                            e = Math.min(Math.max(e, 0), this.canvas.width),
                            t = Math.min(Math.max(t, 0), this.canvas.height);
                            const [r,n] = this.currentPath.at(-1);
                            let i;
                            if (e === r && t === n || this.currentPath.push([e, t]),
                            1 !== this.currentPath.length)
                                i = (0,
                                s.fitCurve)(this.currentPath, 30, null);
                            else {
                                const r = [e, t];
                                i = [[r, r.slice(), r.slice(), r]]
                            }
                            const a = l.#tt(i);
                            this.currentPath.length = 0,
                            this.parent.addCommands({
                                cmd: () => {
                                    this.paths.push(i),
                                    this.bezierPath2D.push(a),
                                    this.rebuild()
                                }
                                ,
                                undo: () => {
                                    this.paths.pop(),
                                    this.bezierPath2D.pop(),
                                    0 === this.paths.length ? this.remove() : (this.canvas || (this.#Ge(),
                                    this.#Xe()),
                                    this.#We())
                                }
                                ,
                                mustExec: !0
                            })
                        }
                        #Ze() {
                            if (this.isEmpty())
                                return void this.#rt();
                            this.#Ke();
                            const {canvas: e, ctx: t} = this;
                            t.setTransform(1, 0, 0, 1, 0, 0),
                            t.clearRect(0, 0, e.width, e.height),
                            this.#rt();
                            for (const r of this.bezierPath2D)
                                t.stroke(r)
                        }
                        commit() {
                            this.#Le || (super.commit(),
                            this.isEditing = !1,
                            this.disableEditMode(),
                            this.setInForeground(),
                            this.#Le = !0,
                            this.div.classList.add("disabled"),
                            this.#We(!0),
                            this.parent.addInkEditorIfNeeded(!0),
                            this.parent.moveEditorInDOM(this),
                            this.div.focus())
                        }
                        focusin(e) {
                            super.focusin(e),
                            this.enableEditMode()
                        }
                        canvasPointerdown(e) {
                            0 === e.button && this.isInEditMode() && !this.#Le && (this.setInForeground(),
                            "mouse" !== e.type && this.div.focus(),
                            e.stopPropagation(),
                            this.canvas.addEventListener("pointerleave", this.#De),
                            this.canvas.addEventListener("pointermove", this.#Ie),
                            this.#Je(e.offsetX, e.offsetY))
                        }
                        canvasPointermove(e) {
                            e.stopPropagation(),
                            this.#Qe(e.offsetX, e.offsetY)
                        }
                        canvasPointerup(e) {
                            0 === e.button && this.isInEditMode() && 0 !== this.currentPath.length && (e.stopPropagation(),
                            this.#nt(e),
                            this.setInBackground())
                        }
                        canvasPointerleave(e) {
                            this.#nt(e),
                            this.setInBackground()
                        }
                        #nt(e) {
                            this.#et(e.offsetX, e.offsetY),
                            this.canvas.removeEventListener("pointerleave", this.#De),
                            this.canvas.removeEventListener("pointermove", this.#Ie),
                            this.parent.addToAnnotationStorage(this)
                        }
                        #Ge() {
                            this.canvas = document.createElement("canvas"),
                            this.canvas.width = this.canvas.height = 0,
                            this.canvas.className = "inkEditorCanvas",
                            l._l10nPromise.get("editor_ink_canvas_aria_label").then((e => this.canvas?.setAttribute("aria-label", e))),
                            this.div.append(this.canvas),
                            this.ctx = this.canvas.getContext("2d")
                        }
                        #Xe() {
                            this.#Ue = new ResizeObserver((e => {
                                const t = e[0].contentRect;
                                t.width && t.height && this.setDimensions(t.width, t.height)
                            }
                            )),
                            this.#Ue.observe(this.div)
                        }
                        render() {
                            if (this.div)
                                return this.div;
                            let e, t;
                            this.width && (e = this.x,
                            t = this.y),
                            super.render(),
                            l._l10nPromise.get("editor_ink_aria_label").then((e => this.div?.setAttribute("aria-label", e)));
                            const [r,n,i,s] = this.#Ve();
                            if (this.setAt(r, n, 0, 0),
                            this.setDims(i, s),
                            this.#Ge(),
                            this.width) {
                                const [r,n] = this.parent.viewportBaseDimensions;
                                this.setAt(e * r, t * n, this.width * r, this.height * n),
                                this.#Ne = !0,
                                this.#Ye(),
                                this.setDims(this.width * r, this.height * n),
                                this.#Ze(),
                                this.#it(),
                                this.div.classList.add("disabled")
                            } else
                                this.div.classList.add("editing"),
                                this.enableEditMode();
                            return this.#Xe(),
                            this.div
                        }
                        #Ye() {
                            if (!this.#Ne)
                                return;
                            const [e,t] = this.parent.viewportBaseDimensions;
                            this.canvas.width = Math.ceil(this.width * e),
                            this.canvas.height = Math.ceil(this.height * t),
                            this.#rt()
                        }
                        setDimensions(e, t) {
                            const r = Math.round(e)
                              , n = Math.round(t);
                            if (this.#je === r && this.#ze === n)
                                return;
                            this.#je = r,
                            this.#ze = n,
                            this.canvas.style.visibility = "hidden",
                            this.#ke && Math.abs(this.#ke - e / t) > .01 && (t = Math.ceil(e / this.#ke),
                            this.setDims(e, t));
                            const [i,s] = this.parent.viewportBaseDimensions;
                            this.width = e / i,
                            this.height = t / s,
                            this.#Le && this.#st(e, t),
                            this.#Ye(),
                            this.#Ze(),
                            this.canvas.style.visibility = "visible"
                        }
                        #st(e, t) {
                            const r = this.#at()
                              , n = (e - r) / this.#Pe
                              , i = (t - r) / this.#Me;
                            this.scaleFactor = Math.min(n, i)
                        }
                        #rt() {
                            const e = this.#at() / 2;
                            this.ctx.setTransform(this.scaleFactor, 0, 0, this.scaleFactor, this.translationX * this.scaleFactor + e, this.translationY * this.scaleFactor + e)
                        }
                        static #tt(e) {
                            const t = new Path2D;
                            for (let r = 0, n = e.length; r < n; r++) {
                                const [n,i,s,a] = e[r];
                                0 === r && t.moveTo(...n),
                                t.bezierCurveTo(i[0], i[1], s[0], s[1], a[0], a[1])
                            }
                            return t
                        }
                        #ot(e, t, r, n) {
                            const i = []
                              , s = this.thickness / 2;
                            let a, o;
                            for (const l of this.paths) {
                                a = [],
                                o = [];
                                for (let i = 0, c = l.length; i < c; i++) {
                                    const [c,h,d,u] = l[i]
                                      , f = e * (c[0] + t) + s
                                      , p = n - e * (c[1] + r) - s
                                      , g = e * (h[0] + t) + s
                                      , _ = n - e * (h[1] + r) - s
                                      , m = e * (d[0] + t) + s
                                      , b = n - e * (d[1] + r) - s
                                      , v = e * (u[0] + t) + s
                                      , y = n - e * (u[1] + r) - s;
                                    0 === i && (a.push(f, p),
                                    o.push(f, p)),
                                    a.push(g, _, m, b, v, y),
                                    this.#lt(f, p, g, _, m, b, v, y, 4, o)
                                }
                                i.push({
                                    bezier: a,
                                    points: o
                                })
                            }
                            return i
                        }
                        #lt(e, t, r, n, i, s, a, o, l, c) {
                            if (this.#ct(e, t, r, n, i, s, a, o))
                                c.push(a, o);
                            else {
                                for (let h = 1; h < l - 1; h++) {
                                    const d = h / l
                                      , u = 1 - d;
                                    let f = d * e + u * r
                                      , p = d * t + u * n
                                      , g = d * r + u * i
                                      , _ = d * n + u * s;
                                    f = d * f + u * g,
                                    p = d * p + u * _,
                                    g = d * g + u * (d * i + u * a),
                                    _ = d * _ + u * (d * s + u * o),
                                    f = d * f + u * g,
                                    p = d * p + u * _,
                                    c.push(f, p)
                                }
                                c.push(a, o)
                            }
                        }
                        #ct(e, t, r, n, i, s, a, o) {
                            const l = (3 * r - 2 * e - a) ** 2
                              , c = (3 * n - 2 * t - o) ** 2
                              , h = (3 * i - e - 2 * a) ** 2
                              , d = (3 * s - t - 2 * o) ** 2;
                            return Math.max(l, h) + Math.max(c, d) <= 10
                        }
                        #ht() {
                            let e = 1 / 0
                              , t = -1 / 0
                              , r = 1 / 0
                              , i = -1 / 0;
                            for (const s of this.paths)
                                for (const [a,o,l,c] of s) {
                                    const s = n.Util.bezierBoundingBox(...a, ...o, ...l, ...c);
                                    e = Math.min(e, s[0]),
                                    r = Math.min(r, s[1]),
                                    t = Math.max(t, s[2]),
                                    i = Math.max(i, s[3])
                                }
                            return [e, r, t, i]
                        }
                        #at() {
                            return this.#Le ? Math.ceil(this.thickness * this.parent.scaleFactor) : 0
                        }
                        #We(e=!1) {
                            if (this.isEmpty())
                                return;
                            if (!this.#Le)
                                return void this.#Ze();
                            const t = this.#ht()
                              , r = this.#at();
                            this.#Pe = Math.max(o, t[2] - t[0]),
                            this.#Me = Math.max(o, t[3] - t[1]);
                            const n = Math.ceil(r + this.#Pe * this.scaleFactor)
                              , i = Math.ceil(r + this.#Me * this.scaleFactor)
                              , [s,a] = this.parent.viewportBaseDimensions;
                            this.width = n / s,
                            this.height = i / a,
                            this.#ke = n / i,
                            this.#it();
                            const l = this.translationX
                              , c = this.translationY;
                            this.translationX = -t[0],
                            this.translationY = -t[1],
                            this.#Ye(),
                            this.#Ze(),
                            this.#je = n,
                            this.#ze = i,
                            this.setDims(n, i);
                            const h = e ? r / this.scaleFactor / 2 : 0;
                            this.translate(l - this.translationX - h, c - this.translationY - h)
                        }
                        #it() {
                            const {style: e} = this.div;
                            this.#ke >= 1 ? (e.minHeight = "16px",
                            e.minWidth = `${Math.round(this.#ke * o)}px`) : (e.minWidth = "16px",
                            e.minHeight = `${Math.round(o / this.#ke)}px`)
                        }
                        static deserialize(e, t) {
                            const r = super.deserialize(e, t);
                            r.thickness = e.thickness,
                            r.color = n.Util.makeHexColor(...e.color),
                            r.opacity = e.opacity;
                            const [i,s] = t.pageDimensions
                              , a = r.width * i
                              , l = r.height * s
                              , c = t.scaleFactor
                              , h = e.thickness / 2;
                            r.#ke = a / l,
                            r.#Le = !0,
                            r.#je = Math.round(a),
                            r.#ze = Math.round(l);
                            for (const {bezier: n} of e.paths) {
                                const e = [];
                                r.paths.push(e);
                                let t = c * (n[0] - h)
                                  , i = c * (l - n[1] - h);
                                for (let r = 2, a = n.length; r < a; r += 6) {
                                    const s = c * (n[r] - h)
                                      , a = c * (l - n[r + 1] - h)
                                      , o = c * (n[r + 2] - h)
                                      , d = c * (l - n[r + 3] - h)
                                      , u = c * (n[r + 4] - h)
                                      , f = c * (l - n[r + 5] - h);
                                    e.push([[t, i], [s, a], [o, d], [u, f]]),
                                    t = u,
                                    i = f
                                }
                                const s = this.#tt(e);
                                r.bezierPath2D.push(s)
                            }
                            const d = r.#ht();
                            return r.#Pe = Math.max(o, d[2] - d[0]),
                            r.#Me = Math.max(o, d[3] - d[1]),
                            r.#st(a, l),
                            r
                        }
                        serialize() {
                            if (this.isEmpty())
                                return null;
                            const e = this.getRect(0, 0)
                              , t = this.rotation % 180 === 0 ? e[3] - e[1] : e[2] - e[0]
                              , r = i.AnnotationEditor._colorManager.convert(this.ctx.strokeStyle);
                            return {
                                annotationType: n.AnnotationEditorType.INK,
                                color: r,
                                thickness: this.thickness,
                                opacity: this.opacity,
                                paths: this.#ot(this.scaleFactor / this.parent.scaleFactor, this.translationX, this.translationY, t),
                                pageIndex: this.parent.pageIndex,
                                rect: e,
                                rotation: this.rotation
                            }
                        }
                    }
                    t.InkEditor = l
                }
                , (e, t, r) => {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }),
                    t.fitCurve = void 0;
                    const n = r(26);
                    t.fitCurve = n
                }
                , e => {
                    function t(e, i, s, a, o) {
                        var c, h, d, u, f, p, g, _, m, b, v, y, A;
                        if (2 === e.length)
                            return y = l.vectorLen(l.subtract(e[0], e[1])) / 3,
                            [c = [e[0], l.addArrays(e[0], l.mulItems(i, y)), l.addArrays(e[1], l.mulItems(s, y)), e[1]]];
                        if (h = function(e) {
                            var t, r, n, i = [];
                            return e.forEach(( (e, s) => {
                                t = s ? r + l.vectorLen(l.subtract(e, n)) : 0,
                                i.push(t),
                                r = t,
                                n = e
                            }
                            )),
                            i = i.map((e => e / r))
                        }(e),
                        [c,u,p] = r(e, h, h, i, s, o),
                        0 === u || u < a)
                            return [c];
                        if (u < a * a)
                            for (d = h,
                            f = u,
                            g = p,
                            A = 0; A < 20; A++) {
                                if (d = n(c, e, d),
                                [c,u,p] = r(e, h, d, i, s, o),
                                u < a)
                                    return [c];
                                if (p === g) {
                                    let e = u / f;
                                    if (e > .9999 && e < 1.0001)
                                        break
                                }
                                f = u,
                                g = p
                            }
                        return v = [],
                        (_ = l.subtract(e[p - 1], e[p + 1])).every((e => 0 === e)) && (_ = l.subtract(e[p - 1], e[p]),
                        [_[0],_[1]] = [-_[1], _[0]]),
                        m = l.normalize(_),
                        b = l.mulItems(m, -1),
                        v = (v = v.concat(t(e.slice(0, p + 1), i, m, a, o))).concat(t(e.slice(p), b, s, a, o))
                    }
                    function r(e, t, r, n, i, o) {
                        var h, d, u;
                        return h = function(e, t, r, n) {
                            var i, s, a, o, h, d, u, f, p, g, _, m, b, v, y, A, E, S = e[0], w = e[e.length - 1];
                            for (i = [S, null, null, w],
                            s = l.zeros_Xx2x2(t.length),
                            b = 0,
                            v = t.length; b < v; b++)
                                E = 1 - (A = t[b]),
                                (a = s[b])[0] = l.mulItems(r, 3 * A * (E * E)),
                                a[1] = l.mulItems(n, 3 * E * (A * A));
                            for (o = [[0, 0], [0, 0]],
                            h = [0, 0],
                            b = 0,
                            v = e.length; b < v; b++)
                                A = t[b],
                                a = s[b],
                                o[0][0] += l.dot(a[0], a[0]),
                                o[0][1] += l.dot(a[0], a[1]),
                                o[1][0] += l.dot(a[0], a[1]),
                                o[1][1] += l.dot(a[1], a[1]),
                                y = l.subtract(e[b], c.q([S, S, w, w], A)),
                                h[0] += l.dot(a[0], y),
                                h[1] += l.dot(a[1], y);
                            return d = o[0][0] * o[1][1] - o[1][0] * o[0][1],
                            u = o[0][0] * h[1] - o[1][0] * h[0],
                            f = h[0] * o[1][1] - h[1] * o[0][1],
                            p = 0 === d ? 0 : f / d,
                            g = 0 === d ? 0 : u / d,
                            m = l.vectorLen(l.subtract(S, w)),
                            p < (_ = 1e-6 * m) || g < _ ? (i[1] = l.addArrays(S, l.mulItems(r, m / 3)),
                            i[2] = l.addArrays(w, l.mulItems(n, m / 3))) : (i[1] = l.addArrays(S, l.mulItems(r, p)),
                            i[2] = l.addArrays(w, l.mulItems(n, g))),
                            i
                        }(e, r, n, i),
                        [d,u] = function(e, t, r) {
                            var n, i, o, h, d, u, f, p;
                            i = 0,
                            o = Math.floor(e.length / 2);
                            const g = s(t, 10);
                            for (d = 0,
                            u = e.length; d < u; d++)
                                f = e[d],
                                p = a(0, r[d], g, 10),
                                (n = (h = l.subtract(c.q(t, p), f))[0] * h[0] + h[1] * h[1]) > i && (i = n,
                                o = d);
                            return [i, o]
                        }(e, h, t),
                        o && o({
                            bez: h,
                            points: e,
                            params: t,
                            maxErr: d,
                            maxPoint: u
                        }),
                        [h, d, u]
                    }
                    function n(e, t, r) {
                        return r.map(( (r, n) => i(e, t[n], r)))
                    }
                    function i(e, t, r) {
                        var n = l.subtract(c.q(e, r), t)
                          , i = c.qprime(e, r)
                          , s = l.mulMatrix(n, i)
                          , a = l.sum(l.squareItems(i)) + 2 * l.mulMatrix(n, c.qprimeprime(e, r));
                        return 0 === a ? r : r - s / a
                    }
                    var s = function(e, t) {
                        for (var r, n = [0], i = e[0], s = 0, a = 1; a <= t; a++)
                            r = c.q(e, a / t),
                            s += l.vectorLen(l.subtract(r, i)),
                            n.push(s),
                            i = r;
                        return n = n.map((e => e / s))
                    };
                    function a(e, t, r, n) {
                        if (t < 0)
                            return 0;
                        if (t > 1)
                            return 1;
                        for (var i, s, a, o, l = 1; l <= n; l++)
                            if (t <= r[l]) {
                                a = (l - 1) / n,
                                s = l / n,
                                o = (t - (i = r[l - 1])) / (r[l] - i) * (s - a) + a;
                                break
                            }
                        return o
                    }
                    function o(e, t) {
                        return l.normalize(l.subtract(e, t))
                    }
                    class l {
                        static zeros_Xx2x2(e) {
                            for (var t = []; e--; )
                                t.push([0, 0]);
                            return t
                        }
                        static mulItems(e, t) {
                            return e.map((e => e * t))
                        }
                        static mulMatrix(e, t) {
                            return e.reduce(( (e, r, n) => e + r * t[n]), 0)
                        }
                        static subtract(e, t) {
                            return e.map(( (e, r) => e - t[r]))
                        }
                        static addArrays(e, t) {
                            return e.map(( (e, r) => e + t[r]))
                        }
                        static addItems(e, t) {
                            return e.map((e => e + t))
                        }
                        static sum(e) {
                            return e.reduce(( (e, t) => e + t))
                        }
                        static dot(e, t) {
                            return l.mulMatrix(e, t)
                        }
                        static vectorLen(e) {
                            return Math.hypot(...e)
                        }
                        static divItems(e, t) {
                            return e.map((e => e / t))
                        }
                        static squareItems(e) {
                            return e.map((e => e * e))
                        }
                        static normalize(e) {
                            return this.divItems(e, this.vectorLen(e))
                        }
                    }
                    class c {
                        static q(e, t) {
                            var r = 1 - t
                              , n = l.mulItems(e[0], r * r * r)
                              , i = l.mulItems(e[1], 3 * r * r * t)
                              , s = l.mulItems(e[2], 3 * r * t * t)
                              , a = l.mulItems(e[3], t * t * t);
                            return l.addArrays(l.addArrays(n, i), l.addArrays(s, a))
                        }
                        static qprime(e, t) {
                            var r = 1 - t
                              , n = l.mulItems(l.subtract(e[1], e[0]), 3 * r * r)
                              , i = l.mulItems(l.subtract(e[2], e[1]), 6 * r * t)
                              , s = l.mulItems(l.subtract(e[3], e[2]), 3 * t * t);
                            return l.addArrays(l.addArrays(n, i), s)
                        }
                        static qprimeprime(e, t) {
                            return l.addArrays(l.mulItems(l.addArrays(l.subtract(e[2], l.mulItems(e[1], 2)), e[0]), 6 * (1 - t)), l.mulItems(l.addArrays(l.subtract(e[3], l.mulItems(e[2], 2)), e[1]), 6 * t))
                        }
                    }
                    e.exports = function(e, r, n) {
                        if (!Array.isArray(e))
                            throw new TypeError("First argument should be an array");
                        if (e.forEach((t => {
                            if (!Array.isArray(t) || t.some((e => "number" !== typeof e)) || t.length !== e[0].length)
                                throw Error("Each point should be an array of numbers. Each point should have the same amount of numbers.")
                        }
                        )),
                        (e = e.filter(( (t, r) => 0 === r || !t.every(( (t, n) => t === e[r - 1][n]))))).length < 2)
                            return [];
                        const i = e.length
                          , s = o(e[1], e[0])
                          , a = o(e[i - 2], e[i - 1]);
                        return t(e, s, a, r, n)
                    }
                    ,
                    e.exports.fitCubic = t,
                    e.exports.createTangent = o
                }
                , (e, t, r) => {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }),
                    t.AnnotationLayer = void 0;
                    var n = r(1)
                      , i = r(8)
                      , s = r(5)
                      , a = r(28)
                      , o = r(29);
                    const l = 1e3
                      , c = new WeakSet;
                    function h(e) {
                        return {
                            width: e[2] - e[0],
                            height: e[3] - e[1]
                        }
                    }
                    class d {
                        static create(e) {
                            switch (e.data.annotationType) {
                            case n.AnnotationType.LINK:
                                return new f(e);
                            case n.AnnotationType.TEXT:
                                return new p(e);
                            case n.AnnotationType.WIDGET:
                                switch (e.data.fieldType) {
                                case "Tx":
                                    return new _(e);
                                case "Btn":
                                    return e.data.radioButton ? new b(e) : e.data.checkBox ? new m(e) : new v(e);
                                case "Ch":
                                    return new y(e)
                                }
                                return new g(e);
                            case n.AnnotationType.POPUP:
                                return new A(e);
                            case n.AnnotationType.FREETEXT:
                                return new S(e);
                            case n.AnnotationType.LINE:
                                return new w(e);
                            case n.AnnotationType.SQUARE:
                                return new T(e);
                            case n.AnnotationType.CIRCLE:
                                return new x(e);
                            case n.AnnotationType.POLYLINE:
                                return new C(e);
                            case n.AnnotationType.CARET:
                                return new k(e);
                            case n.AnnotationType.INK:
                                return new M(e);
                            case n.AnnotationType.POLYGON:
                                return new R(e);
                            case n.AnnotationType.HIGHLIGHT:
                                return new P(e);
                            case n.AnnotationType.UNDERLINE:
                                return new I(e);
                            case n.AnnotationType.SQUIGGLY:
                                return new D(e);
                            case n.AnnotationType.STRIKEOUT:
                                return new O(e);
                            case n.AnnotationType.STAMP:
                                return new F(e);
                            case n.AnnotationType.FILEATTACHMENT:
                                return new L(e);
                            default:
                                return new u(e)
                            }
                        }
                    }
                    class u {
                        constructor(e, {isRenderable: t=!1, ignoreBorder: r=!1, createQuadrilaterals: n=!1}={}) {
                            this.isRenderable = t,
                            this.data = e.data,
                            this.layer = e.layer,
                            this.page = e.page,
                            this.viewport = e.viewport,
                            this.linkService = e.linkService,
                            this.downloadManager = e.downloadManager,
                            this.imageResourcesPath = e.imageResourcesPath,
                            this.renderForms = e.renderForms,
                            this.svgFactory = e.svgFactory,
                            this.annotationStorage = e.annotationStorage,
                            this.enableScripting = e.enableScripting,
                            this.hasJSActions = e.hasJSActions,
                            this._fieldObjects = e.fieldObjects,
                            this._mouseState = e.mouseState,
                            t && (this.container = this._createContainer(r)),
                            n && (this.quadrilaterals = this._createQuadrilaterals(r))
                        }
                        _createContainer(e=!1) {
                            const t = this.data
                              , r = this.page
                              , i = this.viewport
                              , s = document.createElement("section")
                              , {width: a, height: o} = h(t.rect)
                              , [l,c,d,u] = i.viewBox
                              , f = d - l
                              , p = u - c;
                            s.setAttribute("data-annotation-id", t.id);
                            const g = n.Util.normalizeRect([t.rect[0], r.view[3] - t.rect[1] + r.view[1], t.rect[2], r.view[3] - t.rect[3] + r.view[1]]);
                            if (!e && t.borderStyle.width > 0) {
                                s.style.borderWidth = `${t.borderStyle.width}px`;
                                const e = t.borderStyle.horizontalCornerRadius
                                  , r = t.borderStyle.verticalCornerRadius;
                                if (e > 0 || r > 0) {
                                    const t = `calc(${e}px * var(--scale-factor)) / calc(${r}px * var(--scale-factor))`;
                                    s.style.borderRadius = t
                                } else if (this instanceof b) {
                                    const e = `calc(${a}px * var(--scale-factor)) / calc(${o}px * var(--scale-factor))`;
                                    s.style.borderRadius = e
                                }
                                switch (t.borderStyle.style) {
                                case n.AnnotationBorderStyleType.SOLID:
                                    s.style.borderStyle = "solid";
                                    break;
                                case n.AnnotationBorderStyleType.DASHED:
                                    s.style.borderStyle = "dashed";
                                    break;
                                case n.AnnotationBorderStyleType.BEVELED:
                                    (0,
                                    n.warn)("Unimplemented border style: beveled");
                                    break;
                                case n.AnnotationBorderStyleType.INSET:
                                    (0,
                                    n.warn)("Unimplemented border style: inset");
                                    break;
                                case n.AnnotationBorderStyleType.UNDERLINE:
                                    s.style.borderBottomStyle = "solid"
                                }
                                const i = t.borderColor || null;
                                i ? s.style.borderColor = n.Util.makeHexColor(0 | i[0], 0 | i[1], 0 | i[2]) : s.style.borderWidth = 0
                            }
                            s.style.left = 100 * (g[0] - l) / f + "%",
                            s.style.top = 100 * (g[1] - c) / p + "%";
                            const {rotation: _} = t;
                            return t.hasOwnCanvas || 0 === _ ? (s.style.width = 100 * a / f + "%",
                            s.style.height = 100 * o / p + "%") : this.setRotation(_, s),
                            s
                        }
                        setRotation(e, t=this.container) {
                            const [r,n,i,s] = this.viewport.viewBox
                              , a = i - r
                              , o = s - n
                              , {width: l, height: c} = h(this.data.rect);
                            let d, u;
                            e % 180 === 0 ? (d = 100 * l / a,
                            u = 100 * c / o) : (d = 100 * c / a,
                            u = 100 * l / o),
                            t.style.width = `${d}%`,
                            t.style.height = `${u}%`,
                            t.setAttribute("data-main-rotation", (360 - e) % 360)
                        }
                        get _commonActions() {
                            const e = (e, t, r) => {
                                const n = r.detail[e];
                                r.target.style[t] = a.ColorConverters[`${n[0]}_HTML`](n.slice(1))
                            }
                            ;
                            return (0,
                            n.shadow)(this, "_commonActions", {
                                display: e => {
                                    const t = e.detail.display % 2 === 1;
                                    this.container.style.visibility = t ? "hidden" : "visible",
                                    this.annotationStorage.setValue(this.data.id, {
                                        hidden: t,
                                        print: 0 === e.detail.display || 3 === e.detail.display
                                    })
                                }
                                ,
                                print: e => {
                                    this.annotationStorage.setValue(this.data.id, {
                                        print: e.detail.print
                                    })
                                }
                                ,
                                hidden: e => {
                                    this.container.style.visibility = e.detail.hidden ? "hidden" : "visible",
                                    this.annotationStorage.setValue(this.data.id, {
                                        hidden: e.detail.hidden
                                    })
                                }
                                ,
                                focus: e => {
                                    setTimeout(( () => e.target.focus({
                                        preventScroll: !1
                                    })), 0)
                                }
                                ,
                                userName: e => {
                                    e.target.title = e.detail.userName
                                }
                                ,
                                readonly: e => {
                                    e.detail.readonly ? e.target.setAttribute("readonly", "") : e.target.removeAttribute("readonly")
                                }
                                ,
                                required: e => {
                                    this._setRequired(e.target, e.detail.required)
                                }
                                ,
                                bgColor: t => {
                                    e("bgColor", "backgroundColor", t)
                                }
                                ,
                                fillColor: t => {
                                    e("fillColor", "backgroundColor", t)
                                }
                                ,
                                fgColor: t => {
                                    e("fgColor", "color", t)
                                }
                                ,
                                textColor: t => {
                                    e("textColor", "color", t)
                                }
                                ,
                                borderColor: t => {
                                    e("borderColor", "borderColor", t)
                                }
                                ,
                                strokeColor: t => {
                                    e("strokeColor", "borderColor", t)
                                }
                                ,
                                rotation: e => {
                                    const t = e.detail.rotation;
                                    this.setRotation(t),
                                    this.annotationStorage.setValue(this.data.id, {
                                        rotation: t
                                    })
                                }
                            })
                        }
                        _dispatchEventFromSandbox(e, t) {
                            const r = this._commonActions;
                            for (const n of Object.keys(t.detail)) {
                                const i = e[n] || r[n];
                                i && i(t)
                            }
                        }
                        _setDefaultPropertiesFromJS(e) {
                            if (!this.enableScripting)
                                return;
                            const t = this.annotationStorage.getRawValue(this.data.id);
                            if (!t)
                                return;
                            const r = this._commonActions;
                            for (const [n,i] of Object.entries(t)) {
                                const s = r[n];
                                s && (s({
                                    detail: {
                                        [n]: i
                                    },
                                    target: e
                                }),
                                delete t[n])
                            }
                        }
                        _createQuadrilaterals(e=!1) {
                            if (!this.data.quadPoints)
                                return null;
                            const t = []
                              , r = this.data.rect;
                            for (const n of this.data.quadPoints)
                                this.data.rect = [n[2].x, n[2].y, n[1].x, n[1].y],
                                t.push(this._createContainer(e));
                            return this.data.rect = r,
                            t
                        }
                        _createPopup(e, t) {
                            let r = this.container;
                            this.quadrilaterals && (e = e || this.quadrilaterals,
                            r = this.quadrilaterals[0]),
                            e || ((e = document.createElement("div")).className = "popupTriggerArea",
                            r.append(e));
                            const n = new E({
                                container: r,
                                trigger: e,
                                color: t.color,
                                titleObj: t.titleObj,
                                modificationDate: t.modificationDate,
                                contentsObj: t.contentsObj,
                                richText: t.richText,
                                hideWrapper: !0
                            }).render();
                            n.style.left = "100%",
                            r.append(n)
                        }
                        _renderQuadrilaterals(e) {
                            for (const t of this.quadrilaterals)
                                t.className = e;
                            return this.quadrilaterals
                        }
                        render() {
                            (0,
                            n.unreachable)("Abstract method `AnnotationElement.render` called")
                        }
                        _getElementsByName(e, t=null) {
                            const r = [];
                            if (this._fieldObjects) {
                                const i = this._fieldObjects[e];
                                if (i)
                                    for (const {page: e, id: s, exportValues: a} of i) {
                                        if (-1 === e)
                                            continue;
                                        if (s === t)
                                            continue;
                                        const i = "string" === typeof a ? a : null
                                          , o = document.querySelector(`[data-element-id="${s}"]`);
                                        !o || c.has(o) ? r.push({
                                            id: s,
                                            exportValue: i,
                                            domElement: o
                                        }) : (0,
                                        n.warn)(`_getElementsByName - element not allowed: ${s}`)
                                    }
                                return r
                            }
                            for (const n of document.getElementsByName(e)) {
                                const {id: e, exportValue: i} = n;
                                e !== t && c.has(n) && r.push({
                                    id: e,
                                    exportValue: i,
                                    domElement: n
                                })
                            }
                            return r
                        }
                        static get platform() {
                            const e = "undefined" !== typeof navigator ? navigator.platform : "";
                            return (0,
                            n.shadow)(this, "platform", {
                                isWin: e.includes("Win"),
                                isMac: e.includes("Mac")
                            })
                        }
                    }
                    class f extends u {
                        constructor(e, t=null) {
                            super(e, {
                                isRenderable: !0,
                                ignoreBorder: !!t?.ignoreBorder,
                                createQuadrilaterals: !0
                            }),
                            this.isTooltipOnly = e.data.isTooltipOnly
                        }
                        render() {
                            const {data: e, linkService: t} = this
                              , r = document.createElement("a");
                            r.setAttribute("data-element-id", e.id);
                            let n = !1;
                            return e.url ? (t.addLinkAttributes(r, e.url, e.newWindow),
                            n = !0) : e.action ? (this._bindNamedAction(r, e.action),
                            n = !0) : e.dest ? (this._bindLink(r, e.dest),
                            n = !0) : (e.actions && (e.actions.Action || e.actions["Mouse Up"] || e.actions["Mouse Down"]) && this.enableScripting && this.hasJSActions && (this._bindJSAction(r, e),
                            n = !0),
                            e.resetForm ? (this._bindResetFormAction(r, e.resetForm),
                            n = !0) : this.isTooltipOnly && !n && (this._bindLink(r, ""),
                            n = !0)),
                            this.quadrilaterals ? this._renderQuadrilaterals("linkAnnotation").map(( (e, t) => {
                                const n = 0 === t ? r : r.cloneNode();
                                return e.append(n),
                                e
                            }
                            )) : (this.container.className = "linkAnnotation",
                            n && this.container.append(r),
                            this.container)
                        }
                        _bindLink(e, t) {
                            e.href = this.linkService.getDestinationHash(t),
                            e.onclick = () => (t && this.linkService.goToDestination(t),
                            !1),
                            (t || "" === t) && (e.className = "internalLink")
                        }
                        _bindNamedAction(e, t) {
                            e.href = this.linkService.getAnchorUrl(""),
                            e.onclick = () => (this.linkService.executeNamedAction(t),
                            !1),
                            e.className = "internalLink"
                        }
                        _bindJSAction(e, t) {
                            e.href = this.linkService.getAnchorUrl("");
                            const r = new Map([["Action", "onclick"], ["Mouse Up", "onmouseup"], ["Mouse Down", "onmousedown"]]);
                            for (const n of Object.keys(t.actions)) {
                                const i = r.get(n);
                                i && (e[i] = () => (this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
                                    source: this,
                                    detail: {
                                        id: t.id,
                                        name: n
                                    }
                                }),
                                !1))
                            }
                            e.onclick || (e.onclick = () => !1),
                            e.className = "internalLink"
                        }
                        _bindResetFormAction(e, t) {
                            const r = e.onclick;
                            if (r || (e.href = this.linkService.getAnchorUrl("")),
                            e.className = "internalLink",
                            !this._fieldObjects)
                                return (0,
                                n.warn)('_bindResetFormAction - "resetForm" action not supported, ensure that the `fieldObjects` parameter is provided.'),
                                void (r || (e.onclick = () => !1));
                            e.onclick = () => {
                                r && r();
                                const {fields: e, refs: i, include: s} = t
                                  , a = [];
                                if (0 !== e.length || 0 !== i.length) {
                                    const t = new Set(i);
                                    for (const r of e) {
                                        const e = this._fieldObjects[r] || [];
                                        for (const {id: r} of e)
                                            t.add(r)
                                    }
                                    for (const e of Object.values(this._fieldObjects))
                                        for (const r of e)
                                            t.has(r.id) === s && a.push(r)
                                } else
                                    for (const t of Object.values(this._fieldObjects))
                                        a.push(...t);
                                const o = this.annotationStorage
                                  , l = [];
                                for (const t of a) {
                                    const {id: e} = t;
                                    switch (l.push(e),
                                    t.type) {
                                    case "text":
                                        {
                                            const r = t.defaultValue || "";
                                            o.setValue(e, {
                                                value: r
                                            });
                                            break
                                        }
                                    case "checkbox":
                                    case "radiobutton":
                                        {
                                            const r = t.defaultValue === t.exportValues;
                                            o.setValue(e, {
                                                value: r
                                            });
                                            break
                                        }
                                    case "combobox":
                                    case "listbox":
                                        {
                                            const r = t.defaultValue || "";
                                            o.setValue(e, {
                                                value: r
                                            });
                                            break
                                        }
                                    default:
                                        continue
                                    }
                                    const r = document.querySelector(`[data-element-id="${e}"]`);
                                    r && (c.has(r) ? r.dispatchEvent(new Event("resetform")) : (0,
                                    n.warn)(`_bindResetFormAction - element not allowed: ${e}`))
                                }
                                return this.enableScripting && this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
                                    source: this,
                                    detail: {
                                        id: "app",
                                        ids: l,
                                        name: "ResetForm"
                                    }
                                }),
                                !1
                            }
                        }
                    }
                    class p extends u {
                        constructor(e) {
                            super(e, {
                                isRenderable: !!(e.data.hasPopup || e.data.titleObj?.str || e.data.contentsObj?.str || e.data.richText?.str)
                            })
                        }
                        render() {
                            this.container.className = "textAnnotation";
                            const e = document.createElement("img");
                            return e.src = this.imageResourcesPath + "annotation-" + this.data.name.toLowerCase() + ".svg",
                            e.alt = "[{{type}} Annotation]",
                            e.dataset.l10nId = "text_annotation_type",
                            e.dataset.l10nArgs = JSON.stringify({
                                type: this.data.name
                            }),
                            this.data.hasPopup || this._createPopup(e, this.data),
                            this.container.append(e),
                            this.container
                        }
                    }
                    class g extends u {
                        render() {
                            return this.data.alternativeText && (this.container.title = this.data.alternativeText),
                            this.container
                        }
                        _getKeyModifier(e) {
                            const {isWin: t, isMac: r} = u.platform;
                            return t && e.ctrlKey || r && e.metaKey
                        }
                        _setEventListener(e, t, r, n) {
                            t.includes("mouse") ? e.addEventListener(t, (e => {
                                this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
                                    source: this,
                                    detail: {
                                        id: this.data.id,
                                        name: r,
                                        value: n(e),
                                        shift: e.shiftKey,
                                        modifier: this._getKeyModifier(e)
                                    }
                                })
                            }
                            )) : e.addEventListener(t, (e => {
                                this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
                                    source: this,
                                    detail: {
                                        id: this.data.id,
                                        name: r,
                                        value: n(e)
                                    }
                                })
                            }
                            ))
                        }
                        _setEventListeners(e, t, r) {
                            for (const [n,i] of t)
                                ("Action" === i || this.data.actions?.[i]) && this._setEventListener(e, n, i, r)
                        }
                        _setBackgroundColor(e) {
                            const t = this.data.backgroundColor || null;
                            e.style.backgroundColor = null === t ? "transparent" : n.Util.makeHexColor(t[0], t[1], t[2])
                        }
                        _setTextStyle(e) {
                            const t = ["left", "center", "right"]
                              , {fontColor: r} = this.data.defaultAppearanceData
                              , i = this.data.defaultAppearanceData.fontSize || 9
                              , s = e.style;
                            let a;
                            if (this.data.multiLine) {
                                const e = Math.abs(this.data.rect[3] - this.data.rect[1])
                                  , t = e / (Math.round(e / (n.LINE_FACTOR * i)) || 1);
                                a = Math.min(i, Math.round(t / n.LINE_FACTOR))
                            } else {
                                const e = Math.abs(this.data.rect[3] - this.data.rect[1]);
                                a = Math.min(i, Math.round(e / n.LINE_FACTOR))
                            }
                            s.fontSize = `calc(${a}px * var(--scale-factor))`,
                            s.color = n.Util.makeHexColor(r[0], r[1], r[2]),
                            null !== this.data.textAlignment && (s.textAlign = t[this.data.textAlignment])
                        }
                        _setRequired(e, t) {
                            t ? e.setAttribute("required", !0) : e.removeAttribute("required"),
                            e.setAttribute("aria-required", t)
                        }
                    }
                    class _ extends g {
                        constructor(e) {
                            super(e, {
                                isRenderable: e.renderForms || !e.data.hasAppearance && !!e.data.fieldValue
                            })
                        }
                        setPropertyOnSiblings(e, t, r, n) {
                            const i = this.annotationStorage;
                            for (const s of this._getElementsByName(e.name, e.id))
                                s.domElement && (s.domElement[t] = r),
                                i.setValue(s.id, {
                                    [n]: r
                                })
                        }
                        render() {
                            const e = this.annotationStorage
                              , t = this.data.id;
                            this.container.className = "textWidgetAnnotation";
                            let r = null;
                            if (this.renderForms) {
                                const n = e.getValue(t, {
                                    value: this.data.fieldValue
                                });
                                let i = n.formattedValue || n.value || "";
                                const s = e.getValue(t, {
                                    charLimit: this.data.maxLen
                                }).charLimit;
                                s && i.length > s && (i = i.slice(0, s));
                                const a = {
                                    userValue: i,
                                    formattedValue: null,
                                    valueOnFocus: ""
                                };
                                this.data.multiLine ? (r = document.createElement("textarea"),
                                r.textContent = i,
                                this.data.doNotScroll && (r.style.overflowY = "hidden")) : (r = document.createElement("input"),
                                r.type = "text",
                                r.setAttribute("value", i),
                                this.data.doNotScroll && (r.style.overflowX = "hidden")),
                                c.add(r),
                                r.setAttribute("data-element-id", t),
                                r.disabled = this.data.readOnly,
                                r.name = this.data.fieldName,
                                r.tabIndex = l,
                                this._setRequired(r, this.data.required),
                                s && (r.maxLength = s),
                                r.addEventListener("input", (n => {
                                    e.setValue(t, {
                                        value: n.target.value
                                    }),
                                    this.setPropertyOnSiblings(r, "value", n.target.value, "value")
                                }
                                )),
                                r.addEventListener("resetform", (e => {
                                    const t = this.data.defaultFieldValue ?? "";
                                    r.value = a.userValue = t,
                                    a.formattedValue = null
                                }
                                ));
                                let o = e => {
                                    const {formattedValue: t} = a;
                                    null !== t && void 0 !== t && (e.target.value = t),
                                    e.target.scrollLeft = 0
                                }
                                ;
                                if (this.enableScripting && this.hasJSActions) {
                                    r.addEventListener("focus", (e => {
                                        a.userValue && (e.target.value = a.userValue),
                                        a.valueOnFocus = e.target.value
                                    }
                                    )),
                                    r.addEventListener("updatefromsandbox", (r => {
                                        const n = {
                                            value(r) {
                                                a.userValue = r.detail.value ?? "",
                                                e.setValue(t, {
                                                    value: a.userValue.toString()
                                                }),
                                                r.target.value = a.userValue
                                            },
                                            formattedValue(r) {
                                                const {formattedValue: n} = r.detail;
                                                a.formattedValue = n,
                                                null !== n && void 0 !== n && r.target !== document.activeElement && (r.target.value = n),
                                                e.setValue(t, {
                                                    formattedValue: n
                                                })
                                            },
                                            selRange(e) {
                                                e.target.setSelectionRange(...e.detail.selRange)
                                            },
                                            charLimit: r => {
                                                const {charLimit: n} = r.detail
                                                  , {target: i} = r;
                                                if (0 === n)
                                                    return void i.removeAttribute("maxLength");
                                                i.setAttribute("maxLength", n);
                                                let s = a.userValue;
                                                !s || s.length <= n || (s = s.slice(0, n),
                                                i.value = a.userValue = s,
                                                e.setValue(t, {
                                                    value: s
                                                }),
                                                this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
                                                    source: this,
                                                    detail: {
                                                        id: t,
                                                        name: "Keystroke",
                                                        value: s,
                                                        willCommit: !0,
                                                        commitKey: 1,
                                                        selStart: i.selectionStart,
                                                        selEnd: i.selectionEnd
                                                    }
                                                }))
                                            }
                                        };
                                        this._dispatchEventFromSandbox(n, r)
                                    }
                                    )),
                                    r.addEventListener("keydown", (e => {
                                        let r = -1;
                                        if ("Escape" === e.key ? r = 0 : "Enter" === e.key ? r = 2 : "Tab" === e.key && (r = 3),
                                        -1 === r)
                                            return;
                                        const {value: n} = e.target;
                                        a.valueOnFocus !== n && (a.userValue = n,
                                        this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
                                            source: this,
                                            detail: {
                                                id: t,
                                                name: "Keystroke",
                                                value: n,
                                                willCommit: !0,
                                                commitKey: r,
                                                selStart: e.target.selectionStart,
                                                selEnd: e.target.selectionEnd
                                            }
                                        }))
                                    }
                                    ));
                                    const n = o;
                                    o = null,
                                    r.addEventListener("blur", (e => {
                                        const {value: r} = e.target;
                                        a.userValue = r,
                                        this._mouseState.isDown && a.valueOnFocus !== r && this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
                                            source: this,
                                            detail: {
                                                id: t,
                                                name: "Keystroke",
                                                value: r,
                                                willCommit: !0,
                                                commitKey: 1,
                                                selStart: e.target.selectionStart,
                                                selEnd: e.target.selectionEnd
                                            }
                                        }),
                                        n(e)
                                    }
                                    )),
                                    this.data.actions?.Keystroke && r.addEventListener("beforeinput", (e => {
                                        const {data: r, target: n} = e
                                          , {value: i, selectionStart: s, selectionEnd: a} = n;
                                        let o = s
                                          , l = a;
                                        switch (e.inputType) {
                                        case "deleteWordBackward":
                                            {
                                                const e = i.substring(0, s).match(/\w*[^\w]*$/);
                                                e && (o -= e[0].length);
                                                break
                                            }
                                        case "deleteWordForward":
                                            {
                                                const e = i.substring(s).match(/^[^\w]*\w*/);
                                                e && (l += e[0].length);
                                                break
                                            }
                                        case "deleteContentBackward":
                                            s === a && (o -= 1);
                                            break;
                                        case "deleteContentForward":
                                            s === a && (l += 1)
                                        }
                                        e.preventDefault(),
                                        this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
                                            source: this,
                                            detail: {
                                                id: t,
                                                name: "Keystroke",
                                                value: i,
                                                change: r || "",
                                                willCommit: !1,
                                                selStart: o,
                                                selEnd: l
                                            }
                                        })
                                    }
                                    )),
                                    this._setEventListeners(r, [["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], (e => e.target.value))
                                }
                                if (o && r.addEventListener("blur", o),
                                this.data.comb) {
                                    const e = (this.data.rect[2] - this.data.rect[0]) / s;
                                    r.classList.add("comb"),
                                    r.style.letterSpacing = `calc(${e}px * var(--scale-factor) - 1ch)`
                                }
                            } else
                                r = document.createElement("div"),
                                r.textContent = this.data.fieldValue,
                                r.style.verticalAlign = "middle",
                                r.style.display = "table-cell";
                            return this._setTextStyle(r),
                            this._setBackgroundColor(r),
                            this._setDefaultPropertiesFromJS(r),
                            this.container.append(r),
                            this.container
                        }
                    }
                    class m extends g {
                        constructor(e) {
                            super(e, {
                                isRenderable: e.renderForms
                            })
                        }
                        render() {
                            const e = this.annotationStorage
                              , t = this.data
                              , r = t.id;
                            let n = e.getValue(r, {
                                value: t.exportValue === t.fieldValue
                            }).value;
                            "string" === typeof n && (n = "Off" !== n,
                            e.setValue(r, {
                                value: n
                            })),
                            this.container.className = "buttonWidgetAnnotation checkBox";
                            const i = document.createElement("input");
                            return c.add(i),
                            i.setAttribute("data-element-id", r),
                            i.disabled = t.readOnly,
                            this._setRequired(i, this.data.required),
                            i.type = "checkbox",
                            i.name = t.fieldName,
                            n && i.setAttribute("checked", !0),
                            i.setAttribute("exportValue", t.exportValue),
                            i.tabIndex = l,
                            i.addEventListener("change", (n => {
                                const {name: i, checked: s} = n.target;
                                for (const a of this._getElementsByName(i, r)) {
                                    const r = s && a.exportValue === t.exportValue;
                                    a.domElement && (a.domElement.checked = r),
                                    e.setValue(a.id, {
                                        value: r
                                    })
                                }
                                e.setValue(r, {
                                    value: s
                                })
                            }
                            )),
                            i.addEventListener("resetform", (e => {
                                const r = t.defaultFieldValue || "Off";
                                e.target.checked = r === t.exportValue
                            }
                            )),
                            this.enableScripting && this.hasJSActions && (i.addEventListener("updatefromsandbox", (t => {
                                const n = {
                                    value(t) {
                                        t.target.checked = "Off" !== t.detail.value,
                                        e.setValue(r, {
                                            value: t.target.checked
                                        })
                                    }
                                };
                                this._dispatchEventFromSandbox(n, t)
                            }
                            )),
                            this._setEventListeners(i, [["change", "Validate"], ["change", "Action"], ["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], (e => e.target.checked))),
                            this._setBackgroundColor(i),
                            this._setDefaultPropertiesFromJS(i),
                            this.container.append(i),
                            this.container
                        }
                    }
                    class b extends g {
                        constructor(e) {
                            super(e, {
                                isRenderable: e.renderForms
                            })
                        }
                        render() {
                            this.container.className = "buttonWidgetAnnotation radioButton";
                            const e = this.annotationStorage
                              , t = this.data
                              , r = t.id;
                            let n = e.getValue(r, {
                                value: t.fieldValue === t.buttonValue
                            }).value;
                            "string" === typeof n && (n = n !== t.buttonValue,
                            e.setValue(r, {
                                value: n
                            }));
                            const i = document.createElement("input");
                            if (c.add(i),
                            i.setAttribute("data-element-id", r),
                            i.disabled = t.readOnly,
                            this._setRequired(i, this.data.required),
                            i.type = "radio",
                            i.name = t.fieldName,
                            n && i.setAttribute("checked", !0),
                            i.tabIndex = l,
                            i.addEventListener("change", (t => {
                                const {name: n, checked: i} = t.target;
                                for (const s of this._getElementsByName(n, r))
                                    e.setValue(s.id, {
                                        value: !1
                                    });
                                e.setValue(r, {
                                    value: i
                                })
                            }
                            )),
                            i.addEventListener("resetform", (e => {
                                const r = t.defaultFieldValue;
                                e.target.checked = null !== r && void 0 !== r && r === t.buttonValue
                            }
                            )),
                            this.enableScripting && this.hasJSActions) {
                                const n = t.buttonValue;
                                i.addEventListener("updatefromsandbox", (t => {
                                    const i = {
                                        value: t => {
                                            const i = n === t.detail.value;
                                            for (const n of this._getElementsByName(t.target.name)) {
                                                const t = i && n.id === r;
                                                n.domElement && (n.domElement.checked = t),
                                                e.setValue(n.id, {
                                                    value: t
                                                })
                                            }
                                        }
                                    };
                                    this._dispatchEventFromSandbox(i, t)
                                }
                                )),
                                this._setEventListeners(i, [["change", "Validate"], ["change", "Action"], ["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], (e => e.target.checked))
                            }
                            return this._setBackgroundColor(i),
                            this._setDefaultPropertiesFromJS(i),
                            this.container.append(i),
                            this.container
                        }
                    }
                    class v extends f {
                        constructor(e) {
                            super(e, {
                                ignoreBorder: e.data.hasAppearance
                            })
                        }
                        render() {
                            const e = super.render();
                            e.className = "buttonWidgetAnnotation pushButton",
                            this.data.alternativeText && (e.title = this.data.alternativeText);
                            const t = e.lastChild;
                            return this.enableScripting && this.hasJSActions && t && (this._setDefaultPropertiesFromJS(t),
                            t.addEventListener("updatefromsandbox", (e => {
                                this._dispatchEventFromSandbox({}, e)
                            }
                            ))),
                            e
                        }
                    }
                    class y extends g {
                        constructor(e) {
                            super(e, {
                                isRenderable: e.renderForms
                            })
                        }
                        render() {
                            this.container.className = "choiceWidgetAnnotation";
                            const e = this.annotationStorage
                              , t = this.data.id
                              , r = e.getValue(t, {
                                value: this.data.fieldValue
                            })
                              , n = document.createElement("select");
                            c.add(n),
                            n.setAttribute("data-element-id", t),
                            n.disabled = this.data.readOnly,
                            this._setRequired(n, this.data.required),
                            n.name = this.data.fieldName,
                            n.tabIndex = l;
                            let i = this.data.combo && this.data.options.length > 0;
                            this.data.combo || (n.size = this.data.options.length,
                            this.data.multiSelect && (n.multiple = !0)),
                            n.addEventListener("resetform", (e => {
                                const t = this.data.defaultFieldValue;
                                for (const r of n.options)
                                    r.selected = r.value === t
                            }
                            ));
                            for (const l of this.data.options) {
                                const e = document.createElement("option");
                                e.textContent = l.displayValue,
                                e.value = l.exportValue,
                                r.value.includes(l.exportValue) && (e.setAttribute("selected", !0),
                                i = !1),
                                n.append(e)
                            }
                            let s = null;
                            if (i) {
                                const e = document.createElement("option");
                                e.value = " ",
                                e.setAttribute("hidden", !0),
                                e.setAttribute("selected", !0),
                                n.prepend(e),
                                s = () => {
                                    e.remove(),
                                    n.removeEventListener("input", s),
                                    s = null
                                }
                                ,
                                n.addEventListener("input", s)
                            }
                            const a = (e, t) => {
                                const r = t ? "value" : "textContent"
                                  , n = e.target.options;
                                return e.target.multiple ? Array.prototype.filter.call(n, (e => e.selected)).map((e => e[r])) : -1 === n.selectedIndex ? null : n[n.selectedIndex][r]
                            }
                              , o = e => {
                                const t = e.target.options;
                                return Array.prototype.map.call(t, (e => ({
                                    displayValue: e.textContent,
                                    exportValue: e.value
                                })))
                            }
                            ;
                            return this.enableScripting && this.hasJSActions ? (n.addEventListener("updatefromsandbox", (r => {
                                const i = {
                                    value(r) {
                                        s?.();
                                        const i = r.detail.value
                                          , o = new Set(Array.isArray(i) ? i : [i]);
                                        for (const e of n.options)
                                            e.selected = o.has(e.value);
                                        e.setValue(t, {
                                            value: a(r, !0)
                                        })
                                    },
                                    multipleSelection(e) {
                                        n.multiple = !0
                                    },
                                    remove(r) {
                                        const i = n.options
                                          , s = r.detail.remove;
                                        i[s].selected = !1,
                                        n.remove(s),
                                        i.length > 0 && -1 === Array.prototype.findIndex.call(i, (e => e.selected)) && (i[0].selected = !0),
                                        e.setValue(t, {
                                            value: a(r, !0),
                                            items: o(r)
                                        })
                                    },
                                    clear(r) {
                                        for (; 0 !== n.length; )
                                            n.remove(0);
                                        e.setValue(t, {
                                            value: null,
                                            items: []
                                        })
                                    },
                                    insert(r) {
                                        const {index: i, displayValue: s, exportValue: l} = r.detail.insert
                                          , c = n.children[i]
                                          , h = document.createElement("option");
                                        h.textContent = s,
                                        h.value = l,
                                        c ? c.before(h) : n.append(h),
                                        e.setValue(t, {
                                            value: a(r, !0),
                                            items: o(r)
                                        })
                                    },
                                    items(r) {
                                        const {items: i} = r.detail;
                                        for (; 0 !== n.length; )
                                            n.remove(0);
                                        for (const e of i) {
                                            const {displayValue: t, exportValue: r} = e
                                              , i = document.createElement("option");
                                            i.textContent = t,
                                            i.value = r,
                                            n.append(i)
                                        }
                                        n.options.length > 0 && (n.options[0].selected = !0),
                                        e.setValue(t, {
                                            value: a(r, !0),
                                            items: o(r)
                                        })
                                    },
                                    indices(r) {
                                        const n = new Set(r.detail.indices);
                                        for (const e of r.target.options)
                                            e.selected = n.has(e.index);
                                        e.setValue(t, {
                                            value: a(r, !0)
                                        })
                                    },
                                    editable(e) {
                                        e.target.disabled = !e.detail.editable
                                    }
                                };
                                this._dispatchEventFromSandbox(i, r)
                            }
                            )),
                            n.addEventListener("input", (r => {
                                const n = a(r, !0)
                                  , i = a(r, !1);
                                e.setValue(t, {
                                    value: n
                                }),
                                this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
                                    source: this,
                                    detail: {
                                        id: t,
                                        name: "Keystroke",
                                        value: i,
                                        changeEx: n,
                                        willCommit: !0,
                                        commitKey: 1,
                                        keyDown: !1
                                    }
                                })
                            }
                            )),
                            this._setEventListeners(n, [["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"], ["input", "Action"]], (e => e.target.checked))) : n.addEventListener("input", (function(r) {
                                e.setValue(t, {
                                    value: a(r, !0)
                                })
                            }
                            )),
                            this.data.combo && this._setTextStyle(n),
                            this._setBackgroundColor(n),
                            this._setDefaultPropertiesFromJS(n),
                            this.container.append(n),
                            this.container
                        }
                    }
                    class A extends u {
                        constructor(e) {
                            super(e, {
                                isRenderable: !!(e.data.titleObj?.str || e.data.contentsObj?.str || e.data.richText?.str)
                            })
                        }
                        render() {
                            if (this.container.className = "popupAnnotation",
                            ["Line", "Square", "Circle", "PolyLine", "Polygon", "Ink"].includes(this.data.parentType))
                                return this.container;
                            const e = `[data-annotation-id="${this.data.parentId}"]`
                              , t = this.layer.querySelectorAll(e);
                            if (0 === t.length)
                                return this.container;
                            const r = new E({
                                container: this.container,
                                trigger: Array.from(t),
                                color: this.data.color,
                                titleObj: this.data.titleObj,
                                modificationDate: this.data.modificationDate,
                                contentsObj: this.data.contentsObj,
                                richText: this.data.richText
                            })
                              , i = this.page
                              , s = n.Util.normalizeRect([this.data.parentRect[0], i.view[3] - this.data.parentRect[1] + i.view[1], this.data.parentRect[2], i.view[3] - this.data.parentRect[3] + i.view[1]])
                              , a = s[0] + this.data.parentRect[2] - this.data.parentRect[0]
                              , o = s[1]
                              , [l,c,h,d] = this.viewport.viewBox
                              , u = h - l
                              , f = d - c;
                            return this.container.style.left = 100 * (a - l) / u + "%",
                            this.container.style.top = 100 * (o - c) / f + "%",
                            this.container.append(r.render()),
                            this.container
                        }
                    }
                    class E {
                        constructor(e) {
                            this.container = e.container,
                            this.trigger = e.trigger,
                            this.color = e.color,
                            this.titleObj = e.titleObj,
                            this.modificationDate = e.modificationDate,
                            this.contentsObj = e.contentsObj,
                            this.richText = e.richText,
                            this.hideWrapper = e.hideWrapper || !1,
                            this.pinned = !1
                        }
                        render() {
                            const e = document.createElement("div");
                            e.className = "popupWrapper",
                            this.hideElement = this.hideWrapper ? e : this.container,
                            this.hideElement.hidden = !0;
                            const t = document.createElement("div");
                            t.className = "popup";
                            const r = this.color;
                            if (r) {
                                const e = .7 * (255 - r[0]) + r[0]
                                  , i = .7 * (255 - r[1]) + r[1]
                                  , s = .7 * (255 - r[2]) + r[2];
                                t.style.backgroundColor = n.Util.makeHexColor(0 | e, 0 | i, 0 | s)
                            }
                            const s = document.createElement("h1");
                            s.dir = this.titleObj.dir,
                            s.textContent = this.titleObj.str,
                            t.append(s);
                            const a = i.PDFDateString.toDateObject(this.modificationDate);
                            if (a) {
                                const e = document.createElement("span");
                                e.className = "popupDate",
                                e.textContent = "{{date}}, {{time}}",
                                e.dataset.l10nId = "annotation_date_string",
                                e.dataset.l10nArgs = JSON.stringify({
                                    date: a.toLocaleDateString(),
                                    time: a.toLocaleTimeString()
                                }),
                                t.append(e)
                            }
                            if (!this.richText?.str || this.contentsObj?.str && this.contentsObj.str !== this.richText.str) {
                                const e = this._formatContents(this.contentsObj);
                                t.append(e)
                            } else
                                o.XfaLayer.render({
                                    xfaHtml: this.richText.html,
                                    intent: "richText",
                                    div: t
                                }),
                                t.lastChild.className = "richText popupContent";
                            Array.isArray(this.trigger) || (this.trigger = [this.trigger]);
                            for (const n of this.trigger)
                                n.addEventListener("click", this._toggle.bind(this)),
                                n.addEventListener("mouseover", this._show.bind(this, !1)),
                                n.addEventListener("mouseout", this._hide.bind(this, !1));
                            return t.addEventListener("click", this._hide.bind(this, !0)),
                            e.append(t),
                            e
                        }
                        _formatContents({str: e, dir: t}) {
                            const r = document.createElement("p");
                            r.className = "popupContent",
                            r.dir = t;
                            const n = e.split(/(?:\r\n?|\n)/);
                            for (let i = 0, s = n.length; i < s; ++i) {
                                const e = n[i];
                                r.append(document.createTextNode(e)),
                                i < s - 1 && r.append(document.createElement("br"))
                            }
                            return r
                        }
                        _toggle() {
                            this.pinned ? this._hide(!0) : this._show(!0)
                        }
                        _show(e=!1) {
                            e && (this.pinned = !0),
                            this.hideElement.hidden && (this.hideElement.hidden = !1,
                            this.container.style.zIndex = parseInt(this.container.style.zIndex) + 1e3)
                        }
                        _hide(e=!0) {
                            e && (this.pinned = !1),
                            this.hideElement.hidden || this.pinned || (this.hideElement.hidden = !0,
                            this.container.style.zIndex = parseInt(this.container.style.zIndex) - 1e3)
                        }
                    }
                    class S extends u {
                        constructor(e) {
                            super(e, {
                                isRenderable: !!(e.data.hasPopup || e.data.titleObj?.str || e.data.contentsObj?.str || e.data.richText?.str),
                                ignoreBorder: !0
                            }),
                            this.textContent = e.data.textContent
                        }
                        render() {
                            if (this.container.className = "freeTextAnnotation",
                            this.textContent) {
                                const e = document.createElement("div");
                                e.className = "annotationTextContent",
                                e.setAttribute("role", "comment");
                                for (const t of this.textContent) {
                                    const r = document.createElement("span");
                                    r.textContent = t,
                                    e.append(r)
                                }
                                this.container.append(e)
                            }
                            return this.data.hasPopup || this._createPopup(null, this.data),
                            this.container
                        }
                    }
                    class w extends u {
                        constructor(e) {
                            super(e, {
                                isRenderable: !!(e.data.hasPopup || e.data.titleObj?.str || e.data.contentsObj?.str || e.data.richText?.str),
                                ignoreBorder: !0
                            })
                        }
                        render() {
                            this.container.className = "lineAnnotation";
                            const e = this.data
                              , {width: t, height: r} = h(e.rect)
                              , n = this.svgFactory.create(t, r, !0)
                              , i = this.svgFactory.createElement("svg:line");
                            return i.setAttribute("x1", e.rect[2] - e.lineCoordinates[0]),
                            i.setAttribute("y1", e.rect[3] - e.lineCoordinates[1]),
                            i.setAttribute("x2", e.rect[2] - e.lineCoordinates[2]),
                            i.setAttribute("y2", e.rect[3] - e.lineCoordinates[3]),
                            i.setAttribute("stroke-width", e.borderStyle.width || 1),
                            i.setAttribute("stroke", "transparent"),
                            i.setAttribute("fill", "transparent"),
                            n.append(i),
                            this.container.append(n),
                            this._createPopup(i, e),
                            this.container
                        }
                    }
                    class T extends u {
                        constructor(e) {
                            super(e, {
                                isRenderable: !!(e.data.hasPopup || e.data.titleObj?.str || e.data.contentsObj?.str || e.data.richText?.str),
                                ignoreBorder: !0
                            })
                        }
                        render() {
                            this.container.className = "squareAnnotation";
                            const e = this.data
                              , {width: t, height: r} = h(e.rect)
                              , n = this.svgFactory.create(t, r, !0)
                              , i = e.borderStyle.width
                              , s = this.svgFactory.createElement("svg:rect");
                            return s.setAttribute("x", i / 2),
                            s.setAttribute("y", i / 2),
                            s.setAttribute("width", t - i),
                            s.setAttribute("height", r - i),
                            s.setAttribute("stroke-width", i || 1),
                            s.setAttribute("stroke", "transparent"),
                            s.setAttribute("fill", "transparent"),
                            n.append(s),
                            this.container.append(n),
                            this._createPopup(s, e),
                            this.container
                        }
                    }
                    class x extends u {
                        constructor(e) {
                            super(e, {
                                isRenderable: !!(e.data.hasPopup || e.data.titleObj?.str || e.data.contentsObj?.str || e.data.richText?.str),
                                ignoreBorder: !0
                            })
                        }
                        render() {
                            this.container.className = "circleAnnotation";
                            const e = this.data
                              , {width: t, height: r} = h(e.rect)
                              , n = this.svgFactory.create(t, r, !0)
                              , i = e.borderStyle.width
                              , s = this.svgFactory.createElement("svg:ellipse");
                            return s.setAttribute("cx", t / 2),
                            s.setAttribute("cy", r / 2),
                            s.setAttribute("rx", t / 2 - i / 2),
                            s.setAttribute("ry", r / 2 - i / 2),
                            s.setAttribute("stroke-width", i || 1),
                            s.setAttribute("stroke", "transparent"),
                            s.setAttribute("fill", "transparent"),
                            n.append(s),
                            this.container.append(n),
                            this._createPopup(s, e),
                            this.container
                        }
                    }
                    class C extends u {
                        constructor(e) {
                            super(e, {
                                isRenderable: !!(e.data.hasPopup || e.data.titleObj?.str || e.data.contentsObj?.str || e.data.richText?.str),
                                ignoreBorder: !0
                            }),
                            this.containerClassName = "polylineAnnotation",
                            this.svgElementName = "svg:polyline"
                        }
                        render() {
                            this.container.className = this.containerClassName;
                            const e = this.data
                              , {width: t, height: r} = h(e.rect)
                              , n = this.svgFactory.create(t, r, !0);
                            let i = [];
                            for (const a of e.vertices) {
                                const t = a.x - e.rect[0]
                                  , r = e.rect[3] - a.y;
                                i.push(t + "," + r)
                            }
                            i = i.join(" ");
                            const s = this.svgFactory.createElement(this.svgElementName);
                            return s.setAttribute("points", i),
                            s.setAttribute("stroke-width", e.borderStyle.width || 1),
                            s.setAttribute("stroke", "transparent"),
                            s.setAttribute("fill", "transparent"),
                            n.append(s),
                            this.container.append(n),
                            this._createPopup(s, e),
                            this.container
                        }
                    }
                    class R extends C {
                        constructor(e) {
                            super(e),
                            this.containerClassName = "polygonAnnotation",
                            this.svgElementName = "svg:polygon"
                        }
                    }
                    class k extends u {
                        constructor(e) {
                            super(e, {
                                isRenderable: !!(e.data.hasPopup || e.data.titleObj?.str || e.data.contentsObj?.str || e.data.richText?.str),
                                ignoreBorder: !0
                            })
                        }
                        render() {
                            return this.container.className = "caretAnnotation",
                            this.data.hasPopup || this._createPopup(null, this.data),
                            this.container
                        }
                    }
                    class M extends u {
                        constructor(e) {
                            super(e, {
                                isRenderable: !!(e.data.hasPopup || e.data.titleObj?.str || e.data.contentsObj?.str || e.data.richText?.str),
                                ignoreBorder: !0
                            }),
                            this.containerClassName = "inkAnnotation",
                            this.svgElementName = "svg:polyline"
                        }
                        render() {
                            this.container.className = this.containerClassName;
                            const e = this.data
                              , {width: t, height: r} = h(e.rect)
                              , n = this.svgFactory.create(t, r, !0);
                            for (const i of e.inkLists) {
                                let t = [];
                                for (const n of i) {
                                    const r = n.x - e.rect[0]
                                      , i = e.rect[3] - n.y;
                                    t.push(`${r},${i}`)
                                }
                                t = t.join(" ");
                                const r = this.svgFactory.createElement(this.svgElementName);
                                r.setAttribute("points", t),
                                r.setAttribute("stroke-width", e.borderStyle.width || 1),
                                r.setAttribute("stroke", "transparent"),
                                r.setAttribute("fill", "transparent"),
                                this._createPopup(r, e),
                                n.append(r)
                            }
                            return this.container.append(n),
                            this.container
                        }
                    }
                    class P extends u {
                        constructor(e) {
                            super(e, {
                                isRenderable: !!(e.data.hasPopup || e.data.titleObj?.str || e.data.contentsObj?.str || e.data.richText?.str),
                                ignoreBorder: !0,
                                createQuadrilaterals: !0
                            })
                        }
                        render() {
                            return this.data.hasPopup || this._createPopup(null, this.data),
                            this.quadrilaterals ? this._renderQuadrilaterals("highlightAnnotation") : (this.container.className = "highlightAnnotation",
                            this.container)
                        }
                    }
                    class I extends u {
                        constructor(e) {
                            super(e, {
                                isRenderable: !!(e.data.hasPopup || e.data.titleObj?.str || e.data.contentsObj?.str || e.data.richText?.str),
                                ignoreBorder: !0,
                                createQuadrilaterals: !0
                            })
                        }
                        render() {
                            return this.data.hasPopup || this._createPopup(null, this.data),
                            this.quadrilaterals ? this._renderQuadrilaterals("underlineAnnotation") : (this.container.className = "underlineAnnotation",
                            this.container)
                        }
                    }
                    class D extends u {
                        constructor(e) {
                            super(e, {
                                isRenderable: !!(e.data.hasPopup || e.data.titleObj?.str || e.data.contentsObj?.str || e.data.richText?.str),
                                ignoreBorder: !0,
                                createQuadrilaterals: !0
                            })
                        }
                        render() {
                            return this.data.hasPopup || this._createPopup(null, this.data),
                            this.quadrilaterals ? this._renderQuadrilaterals("squigglyAnnotation") : (this.container.className = "squigglyAnnotation",
                            this.container)
                        }
                    }
                    class O extends u {
                        constructor(e) {
                            super(e, {
                                isRenderable: !!(e.data.hasPopup || e.data.titleObj?.str || e.data.contentsObj?.str || e.data.richText?.str),
                                ignoreBorder: !0,
                                createQuadrilaterals: !0
                            })
                        }
                        render() {
                            return this.data.hasPopup || this._createPopup(null, this.data),
                            this.quadrilaterals ? this._renderQuadrilaterals("strikeoutAnnotation") : (this.container.className = "strikeoutAnnotation",
                            this.container)
                        }
                    }
                    class F extends u {
                        constructor(e) {
                            super(e, {
                                isRenderable: !!(e.data.hasPopup || e.data.titleObj?.str || e.data.contentsObj?.str || e.data.richText?.str),
                                ignoreBorder: !0
                            })
                        }
                        render() {
                            return this.container.className = "stampAnnotation",
                            this.data.hasPopup || this._createPopup(null, this.data),
                            this.container
                        }
                    }
                    class L extends u {
                        constructor(e) {
                            super(e, {
                                isRenderable: !0
                            });
                            const {filename: t, content: r} = this.data.file;
                            this.filename = (0,
                            i.getFilenameFromUrl)(t),
                            this.content = r,
                            this.linkService.eventBus?.dispatch("fileattachmentannotation", {
                                source: this,
                                filename: t,
                                content: r
                            })
                        }
                        render() {
                            this.container.className = "fileAttachmentAnnotation";
                            const e = document.createElement("div");
                            return e.className = "popupTriggerArea",
                            e.addEventListener("dblclick", this._download.bind(this)),
                            !this.data.hasPopup && (this.data.titleObj?.str || this.data.contentsObj?.str || this.data.richText) && this._createPopup(e, this.data),
                            this.container.append(e),
                            this.container
                        }
                        _download() {
                            this.downloadManager?.openOrDownloadData(this.container, this.content, this.filename)
                        }
                    }
                    class N {
                        static #dt(e, t, r, n) {
                            const s = e.firstChild || e;
                            s.id = `${i.AnnotationPrefix}${t}`,
                            r.append(e),
                            n?.moveElementInDOM(r, e, s, !1)
                        }
                        static render(e) {
                            const {annotations: t, div: r, viewport: a, accessibilityManager: o} = e;
                            this.#ut(r, a);
                            let l = 0;
                            for (const c of t) {
                                if (c.annotationType !== n.AnnotationType.POPUP) {
                                    const {width: e, height: t} = h(c.rect);
                                    if (e <= 0 || t <= 0)
                                        continue
                                }
                                const t = d.create({
                                    data: c,
                                    layer: r,
                                    page: e.page,
                                    viewport: a,
                                    linkService: e.linkService,
                                    downloadManager: e.downloadManager,
                                    imageResourcesPath: e.imageResourcesPath || "",
                                    renderForms: !1 !== e.renderForms,
                                    svgFactory: new i.DOMSVGFactory,
                                    annotationStorage: e.annotationStorage || new s.AnnotationStorage,
                                    enableScripting: e.enableScripting,
                                    hasJSActions: e.hasJSActions,
                                    fieldObjects: e.fieldObjects,
                                    mouseState: e.mouseState || {
                                        isDown: !1
                                    }
                                });
                                if (t.isRenderable) {
                                    const e = t.render();
                                    if (c.hidden && (e.style.visibility = "hidden"),
                                    Array.isArray(e))
                                        for (const t of e)
                                            t.style.zIndex = l++,
                                            N.#dt(t, c.id, r, o);
                                    else
                                        e.style.zIndex = l++,
                                        t instanceof A ? r.prepend(e) : N.#dt(e, c.id, r, o)
                                }
                            }
                            this.#ft(r, e.annotationCanvasMap)
                        }
                        static update(e) {
                            const {annotationCanvasMap: t, div: r, viewport: n} = e;
                            this.#ut(r, n),
                            this.#ft(r, t),
                            r.hidden = !1
                        }
                        static #ut(e, {width: t, height: r, rotation: n}) {
                            const {style: i} = e
                              , s = n % 180 !== 0
                              , a = Math.floor(t) + "px"
                              , o = Math.floor(r) + "px";
                            i.width = s ? o : a,
                            i.height = s ? a : o,
                            e.setAttribute("data-main-rotation", n)
                        }
                        static #ft(e, t) {
                            if (t) {
                                for (const [r,n] of t) {
                                    const t = e.querySelector(`[data-annotation-id="${r}"]`);
                                    if (!t)
                                        continue;
                                    const {firstChild: i} = t;
                                    i ? "CANVAS" === i.nodeName ? i.replaceWith(n) : i.before(n) : t.append(n)
                                }
                                t.clear()
                            }
                        }
                    }
                    t.AnnotationLayer = N
                }
                , (e, t) => {
                    function r(e) {
                        return Math.floor(255 * Math.max(0, Math.min(1, e))).toString(16).padStart(2, "0")
                    }
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }),
                    t.ColorConverters = void 0,
                    t.ColorConverters = class {
                        static CMYK_G([e,t,r,n]) {
                            return ["G", 1 - Math.min(1, .3 * e + .59 * r + .11 * t + n)]
                        }
                        static G_CMYK([e]) {
                            return ["CMYK", 0, 0, 0, 1 - e]
                        }
                        static G_RGB([e]) {
                            return ["RGB", e, e, e]
                        }
                        static G_HTML([e]) {
                            const t = r(e);
                            return `#${t}${t}${t}`
                        }
                        static RGB_G([e,t,r]) {
                            return ["G", .3 * e + .59 * t + .11 * r]
                        }
                        static RGB_HTML([e,t,n]) {
                            return `#${r(e)}${r(t)}${r(n)}`
                        }
                        static T_HTML() {
                            return "#00000000"
                        }
                        static CMYK_RGB([e,t,r,n]) {
                            return ["RGB", 1 - Math.min(1, e + n), 1 - Math.min(1, r + n), 1 - Math.min(1, t + n)]
                        }
                        static CMYK_HTML(e) {
                            const t = this.CMYK_RGB(e).slice(1);
                            return this.RGB_HTML(t)
                        }
                        static RGB_CMYK([e,t,r]) {
                            const n = 1 - e
                              , i = 1 - t
                              , s = 1 - r;
                            return ["CMYK", n, i, s, Math.min(n, i, s)]
                        }
                    }
                }
                , (e, t, r) => {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }),
                    t.XfaLayer = void 0;
                    var n = r(20);
                    t.XfaLayer = class {
                        static setupStorage(e, t, r, n, i) {
                            const s = n.getValue(t, {
                                value: null
                            });
                            switch (r.name) {
                            case "textarea":
                                if (null !== s.value && (e.textContent = s.value),
                                "print" === i)
                                    break;
                                e.addEventListener("input", (e => {
                                    n.setValue(t, {
                                        value: e.target.value
                                    })
                                }
                                ));
                                break;
                            case "input":
                                if ("radio" === r.attributes.type || "checkbox" === r.attributes.type) {
                                    if (s.value === r.attributes.xfaOn ? e.setAttribute("checked", !0) : s.value === r.attributes.xfaOff && e.removeAttribute("checked"),
                                    "print" === i)
                                        break;
                                    e.addEventListener("change", (e => {
                                        n.setValue(t, {
                                            value: e.target.checked ? e.target.getAttribute("xfaOn") : e.target.getAttribute("xfaOff")
                                        })
                                    }
                                    ))
                                } else {
                                    if (null !== s.value && e.setAttribute("value", s.value),
                                    "print" === i)
                                        break;
                                    e.addEventListener("input", (e => {
                                        n.setValue(t, {
                                            value: e.target.value
                                        })
                                    }
                                    ))
                                }
                                break;
                            case "select":
                                if (null !== s.value)
                                    for (const e of r.children)
                                        e.attributes.value === s.value && (e.attributes.selected = !0);
                                e.addEventListener("input", (e => {
                                    const r = e.target.options
                                      , i = -1 === r.selectedIndex ? "" : r[r.selectedIndex].value;
                                    n.setValue(t, {
                                        value: i
                                    })
                                }
                                ))
                            }
                        }
                        static setAttributes({html: e, element: t, storage: r=null, intent: n, linkService: i}) {
                            const {attributes: s} = t
                              , a = e instanceof HTMLAnchorElement;
                            "radio" === s.type && (s.name = `${s.name}-${n}`);
                            for (const [o,l] of Object.entries(s))
                                if (null !== l && void 0 !== l)
                                    switch (o) {
                                    case "class":
                                        l.length && e.setAttribute(o, l.join(" "));
                                        break;
                                    case "dataId":
                                        break;
                                    case "id":
                                        e.setAttribute("data-element-id", l);
                                        break;
                                    case "style":
                                        Object.assign(e.style, l);
                                        break;
                                    case "textContent":
                                        e.textContent = l;
                                        break;
                                    default:
                                        (!a || "href" !== o && "newWindow" !== o) && e.setAttribute(o, l)
                                    }
                            a && i.addLinkAttributes(e, s.href, s.newWindow),
                            r && s.dataId && this.setupStorage(e, s.dataId, t, r)
                        }
                        static render(e) {
                            const t = e.annotationStorage
                              , r = e.linkService
                              , i = e.xfaHtml
                              , s = e.intent || "display"
                              , a = document.createElement(i.name);
                            i.attributes && this.setAttributes({
                                html: a,
                                element: i,
                                intent: s,
                                linkService: r
                            });
                            const o = [[i, -1, a]]
                              , l = e.div;
                            if (l.append(a),
                            e.viewport) {
                                const t = `matrix(${e.viewport.transform.join(",")})`;
                                l.style.transform = t
                            }
                            "richText" !== s && l.setAttribute("class", "xfaLayer xfaFont");
                            const c = [];
                            for (; o.length > 0; ) {
                                const [e,i,a] = o.at(-1);
                                if (i + 1 === e.children.length) {
                                    o.pop();
                                    continue
                                }
                                const l = e.children[++o.at(-1)[1]];
                                if (null === l)
                                    continue;
                                const {name: h} = l;
                                if ("#text" === h) {
                                    const e = document.createTextNode(l.value);
                                    c.push(e),
                                    a.append(e);
                                    continue
                                }
                                let d;
                                if (d = l?.attributes?.xmlns ? document.createElementNS(l.attributes.xmlns, h) : document.createElement(h),
                                a.append(d),
                                l.attributes && this.setAttributes({
                                    html: d,
                                    element: l,
                                    storage: t,
                                    intent: s,
                                    linkService: r
                                }),
                                l.children && l.children.length > 0)
                                    o.push([l, -1, d]);
                                else if (l.value) {
                                    const e = document.createTextNode(l.value);
                                    n.XfaText.shouldBuildText(h) && c.push(e),
                                    d.append(e)
                                }
                            }
                            for (const n of l.querySelectorAll(".xfaNonInteractive input, .xfaNonInteractive textarea"))
                                n.setAttribute("readOnly", !0);
                            return {
                                textDivs: c
                            }
                        }
                        static update(e) {
                            const t = `matrix(${e.viewport.transform.join(",")})`;
                            e.div.style.transform = t,
                            e.div.hidden = !1
                        }
                    }
                }
                , (e, t, r) => {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }),
                    t.TextLayerRenderTask = void 0,
                    t.renderTextLayer = function(e) {
                        const t = new f({
                            textContent: e.textContent,
                            textContentStream: e.textContentStream,
                            container: e.container,
                            viewport: e.viewport,
                            textDivs: e.textDivs,
                            textContentItemsStr: e.textContentItemsStr,
                            enhanceTextSelection: e.enhanceTextSelection
                        });
                        return t._render(e.timeout),
                        t
                    }
                    ;
                    var n = r(1)
                      , i = r(8);
                    const s = 30
                      , a = new Map
                      , o = /^\s+$/g;
                    function l(e, t, r, i) {
                        const l = document.createElement("span")
                          , c = e._enhanceTextSelection ? {
                            angle: 0,
                            canvasWidth: 0,
                            hasText: "" !== t.str,
                            hasEOL: t.hasEOL,
                            originalTransform: null,
                            paddingBottom: 0,
                            paddingLeft: 0,
                            paddingRight: 0,
                            paddingTop: 0,
                            scale: 1,
                            fontSize: 0
                        } : {
                            angle: 0,
                            canvasWidth: 0,
                            hasText: "" !== t.str,
                            hasEOL: t.hasEOL,
                            fontSize: 0
                        };
                        e._textDivs.push(l);
                        const h = n.Util.transform(e._viewport.transform, t.transform);
                        let d = Math.atan2(h[1], h[0]);
                        const u = r[t.fontName];
                        u.vertical && (d += Math.PI / 2);
                        const f = Math.hypot(h[2], h[3])
                          , p = f * function(e, t) {
                            const r = a.get(e);
                            if (r)
                                return r;
                            t.save(),
                            t.font = `30px ${e}`;
                            const n = t.measureText("");
                            let i = n.fontBoundingBoxAscent
                              , o = Math.abs(n.fontBoundingBoxDescent);
                            if (i) {
                                t.restore();
                                const r = i / (i + o);
                                return a.set(e, r),
                                r
                            }
                            t.strokeStyle = "red",
                            t.clearRect(0, 0, s, s),
                            t.strokeText("g", 0, 0);
                            let l = t.getImageData(0, 0, s, s).data;
                            o = 0;
                            for (let a = l.length - 1 - 3; a >= 0; a -= 4)
                                if (l[a] > 0) {
                                    o = Math.ceil(a / 4 / s);
                                    break
                                }
                            t.clearRect(0, 0, s, s),
                            t.strokeText("A", 0, s),
                            l = t.getImageData(0, 0, s, s).data,
                            i = 0;
                            for (let a = 0, c = l.length; a < c; a += 4)
                                if (l[a] > 0) {
                                    i = s - Math.floor(a / 4 / s);
                                    break
                                }
                            if (t.restore(),
                            i) {
                                const t = i / (i + o);
                                return a.set(e, t),
                                t
                            }
                            return a.set(e, .8),
                            .8
                        }(u.fontFamily, i);
                        let g, _;
                        0 === d ? (g = h[4],
                        _ = h[5] - p) : (g = h[4] + p * Math.sin(d),
                        _ = h[5] - p * Math.cos(d)),
                        l.style.left = `${g}px`,
                        l.style.top = `${_}px`,
                        l.style.fontSize = `${f}px`,
                        l.style.fontFamily = u.fontFamily,
                        c.fontSize = f,
                        l.setAttribute("role", "presentation"),
                        l.textContent = t.str,
                        l.dir = t.dir,
                        e._fontInspectorEnabled && (l.dataset.fontName = t.fontName),
                        0 !== d && (c.angle = d * (180 / Math.PI));
                        let m = !1;
                        if (t.str.length > 1 || e._enhanceTextSelection && o.test(t.str))
                            m = !0;
                        else if (" " !== t.str && t.transform[0] !== t.transform[3]) {
                            const e = Math.abs(t.transform[0])
                              , r = Math.abs(t.transform[3]);
                            e !== r && Math.max(e, r) / Math.min(e, r) > 1.5 && (m = !0)
                        }
                        if (m && (u.vertical ? c.canvasWidth = t.height * e._viewport.scale : c.canvasWidth = t.width * e._viewport.scale),
                        e._textDivProperties.set(l, c),
                        e._textContentStream && e._layoutText(l),
                        e._enhanceTextSelection && c.hasText) {
                            let r = 1
                              , i = 0;
                            0 !== d && (r = Math.cos(d),
                            i = Math.sin(d));
                            const s = (u.vertical ? t.height : t.width) * e._viewport.scale
                              , a = f;
                            let o, c;
                            0 !== d ? (o = [r, i, -i, r, g, _],
                            c = n.Util.getAxialAlignedBoundingBox([0, 0, s, a], o)) : c = [g, _, g + s, _ + a],
                            e._bounds.push({
                                left: c[0],
                                top: c[1],
                                right: c[2],
                                bottom: c[3],
                                div: l,
                                size: [s, a],
                                m: o
                            })
                        }
                    }
                    function c(e) {
                        if (e._canceled)
                            return;
                        const t = e._textDivs
                          , r = e._capability
                          , n = t.length;
                        if (n > 1e5)
                            return e._renderingDone = !0,
                            void r.resolve();
                        if (!e._textContentStream)
                            for (let i = 0; i < n; i++)
                                e._layoutText(t[i]);
                        e._renderingDone = !0,
                        r.resolve()
                    }
                    function h(e, t, r) {
                        let n = 0;
                        for (let i = 0; i < r; i++) {
                            const r = e[t++];
                            r > 0 && (n = n ? Math.min(r, n) : r)
                        }
                        return n
                    }
                    function d(e) {
                        const t = e._bounds
                          , r = e._viewport
                          , i = function(e, t, r) {
                            const n = r.map((function(e, t) {
                                return {
                                    x1: e.left,
                                    y1: e.top,
                                    x2: e.right,
                                    y2: e.bottom,
                                    index: t,
                                    x1New: void 0,
                                    x2New: void 0
                                }
                            }
                            ));
                            u(e, n);
                            const i = new Array(r.length);
                            for (const s of n) {
                                const e = s.index;
                                i[e] = {
                                    left: s.x1New,
                                    top: 0,
                                    right: s.x2New,
                                    bottom: 0
                                }
                            }
                            r.map((function(t, r) {
                                const s = i[r]
                                  , a = n[r];
                                a.x1 = t.top,
                                a.y1 = e - s.right,
                                a.x2 = t.bottom,
                                a.y2 = e - s.left,
                                a.index = r,
                                a.x1New = void 0,
                                a.x2New = void 0
                            }
                            )),
                            u(t, n);
                            for (const s of n) {
                                const e = s.index;
                                i[e].top = s.x1New,
                                i[e].bottom = s.x2New
                            }
                            return i
                        }(r.width, r.height, t);
                        for (let s = 0; s < i.length; s++) {
                            const r = t[s].div
                              , a = e._textDivProperties.get(r);
                            if (0 === a.angle) {
                                a.paddingLeft = t[s].left - i[s].left,
                                a.paddingTop = t[s].top - i[s].top,
                                a.paddingRight = i[s].right - t[s].right,
                                a.paddingBottom = i[s].bottom - t[s].bottom,
                                e._textDivProperties.set(r, a);
                                continue
                            }
                            const o = i[s]
                              , l = t[s]
                              , c = l.m
                              , d = c[0]
                              , u = c[1]
                              , f = [[0, 0], [0, l.size[1]], [l.size[0], 0], l.size]
                              , p = new Float64Array(64);
                            for (let e = 0, t = f.length; e < t; e++) {
                                const t = n.Util.applyTransform(f[e], c);
                                p[e + 0] = d && (o.left - t[0]) / d,
                                p[e + 4] = u && (o.top - t[1]) / u,
                                p[e + 8] = d && (o.right - t[0]) / d,
                                p[e + 12] = u && (o.bottom - t[1]) / u,
                                p[e + 16] = u && (o.left - t[0]) / -u,
                                p[e + 20] = d && (o.top - t[1]) / d,
                                p[e + 24] = u && (o.right - t[0]) / -u,
                                p[e + 28] = d && (o.bottom - t[1]) / d,
                                p[e + 32] = d && (o.left - t[0]) / -d,
                                p[e + 36] = u && (o.top - t[1]) / -u,
                                p[e + 40] = d && (o.right - t[0]) / -d,
                                p[e + 44] = u && (o.bottom - t[1]) / -u,
                                p[e + 48] = u && (o.left - t[0]) / u,
                                p[e + 52] = d && (o.top - t[1]) / -d,
                                p[e + 56] = u && (o.right - t[0]) / u,
                                p[e + 60] = d && (o.bottom - t[1]) / -d
                            }
                            const g = 1 + Math.min(Math.abs(d), Math.abs(u));
                            a.paddingLeft = h(p, 32, 16) / g,
                            a.paddingTop = h(p, 48, 16) / g,
                            a.paddingRight = h(p, 0, 16) / g,
                            a.paddingBottom = h(p, 16, 16) / g,
                            e._textDivProperties.set(r, a)
                        }
                    }
                    function u(e, t) {
                        t.sort((function(e, t) {
                            return e.x1 - t.x1 || e.index - t.index
                        }
                        ));
                        const r = [{
                            start: -1 / 0,
                            end: 1 / 0,
                            boundary: {
                                x1: -1 / 0,
                                y1: -1 / 0,
                                x2: 0,
                                y2: 1 / 0,
                                index: -1,
                                x1New: 0,
                                x2New: 0
                            }
                        }];
                        for (const n of t) {
                            let e = 0;
                            for (; e < r.length && r[e].end <= n.y1; )
                                e++;
                            let t, i, s = r.length - 1;
                            for (; s >= 0 && r[s].start >= n.y2; )
                                s--;
                            let a, o, l = -1 / 0;
                            for (a = e; a <= s; a++) {
                                let e;
                                t = r[a],
                                i = t.boundary,
                                e = i.x2 > n.x1 ? i.index > n.index ? i.x1New : n.x1 : void 0 === i.x2New ? (i.x2 + n.x1) / 2 : i.x2New,
                                e > l && (l = e)
                            }
                            for (n.x1New = l,
                            a = e; a <= s; a++)
                                t = r[a],
                                i = t.boundary,
                                void 0 === i.x2New ? i.x2 > n.x1 ? i.index > n.index && (i.x2New = i.x2) : i.x2New = l : i.x2New > l && (i.x2New = Math.max(l, i.x2));
                            const c = [];
                            let h = null;
                            for (a = e; a <= s; a++) {
                                t = r[a],
                                i = t.boundary;
                                const e = i.x2 > n.x2 ? i : n;
                                h === e ? c.at(-1).end = t.end : (c.push({
                                    start: t.start,
                                    end: t.end,
                                    boundary: e
                                }),
                                h = e)
                            }
                            for (r[e].start < n.y1 && (c[0].start = n.y1,
                            c.unshift({
                                start: r[e].start,
                                end: n.y1,
                                boundary: r[e].boundary
                            })),
                            n.y2 < r[s].end && (c.at(-1).end = n.y2,
                            c.push({
                                start: n.y2,
                                end: r[s].end,
                                boundary: r[s].boundary
                            })),
                            a = e; a <= s; a++) {
                                if (t = r[a],
                                i = t.boundary,
                                void 0 !== i.x2New)
                                    continue;
                                let n = !1;
                                for (o = e - 1; !n && o >= 0 && r[o].start >= i.y1; o--)
                                    n = r[o].boundary === i;
                                for (o = s + 1; !n && o < r.length && r[o].end <= i.y2; o++)
                                    n = r[o].boundary === i;
                                for (o = 0; !n && o < c.length; o++)
                                    n = c[o].boundary === i;
                                n || (i.x2New = l)
                            }
                            Array.prototype.splice.apply(r, [e, s - e + 1, ...c])
                        }
                        for (const n of r) {
                            const t = n.boundary;
                            void 0 === t.x2New && (t.x2New = Math.max(e, t.x2))
                        }
                    }
                    class f {
                        constructor({textContent: e, textContentStream: t, container: r, viewport: s, textDivs: a, textContentItemsStr: o, enhanceTextSelection: l}) {
                            l && (0,
                            i.deprecated)("The `enhanceTextSelection` functionality will be removed in the future."),
                            this._textContent = e,
                            this._textContentStream = t,
                            this._container = r,
                            this._document = r.ownerDocument,
                            this._viewport = s,
                            this._textDivs = a || [],
                            this._textContentItemsStr = o || [],
                            this._enhanceTextSelection = !!l,
                            this._fontInspectorEnabled = !!globalThis.FontInspector?.enabled,
                            this._reader = null,
                            this._layoutTextLastFontSize = null,
                            this._layoutTextLastFontFamily = null,
                            this._layoutTextCtx = null,
                            this._textDivProperties = new WeakMap,
                            this._renderingDone = !1,
                            this._canceled = !1,
                            this._capability = (0,
                            n.createPromiseCapability)(),
                            this._renderTimer = null,
                            this._bounds = [],
                            this._devicePixelRatio = globalThis.devicePixelRatio || 1,
                            this._capability.promise.finally(( () => {
                                this._enhanceTextSelection || (this._textDivProperties = null),
                                this._layoutTextCtx && (this._layoutTextCtx.canvas.width = 0,
                                this._layoutTextCtx.canvas.height = 0,
                                this._layoutTextCtx = null)
                            }
                            )).catch(( () => {}
                            ))
                        }
                        get promise() {
                            return this._capability.promise
                        }
                        cancel() {
                            this._canceled = !0,
                            this._reader && (this._reader.cancel(new n.AbortException("TextLayer task cancelled.")).catch(( () => {}
                            )),
                            this._reader = null),
                            null !== this._renderTimer && (clearTimeout(this._renderTimer),
                            this._renderTimer = null),
                            this._capability.reject(new Error("TextLayer task cancelled."))
                        }
                        _processItems(e, t) {
                            for (let r = 0, n = e.length; r < n; r++)
                                if (void 0 !== e[r].str)
                                    this._textContentItemsStr.push(e[r].str),
                                    l(this, e[r], t, this._layoutTextCtx);
                                else if ("beginMarkedContentProps" === e[r].type || "beginMarkedContent" === e[r].type) {
                                    const t = this._container;
                                    this._container = document.createElement("span"),
                                    this._container.classList.add("markedContent"),
                                    null !== e[r].id && this._container.setAttribute("id", `${e[r].id}`),
                                    t.append(this._container)
                                } else
                                    "endMarkedContent" === e[r].type && (this._container = this._container.parentNode)
                        }
                        _layoutText(e) {
                            const t = this._textDivProperties.get(e);
                            let r = "";
                            if (0 !== t.canvasWidth && t.hasText) {
                                const {fontFamily: n} = e.style
                                  , {fontSize: i} = t;
                                i === this._layoutTextLastFontSize && n === this._layoutTextLastFontFamily || (this._layoutTextCtx.font = `${i * this._devicePixelRatio}px ${n}`,
                                this._layoutTextLastFontSize = i,
                                this._layoutTextLastFontFamily = n);
                                const {width: s} = this._layoutTextCtx.measureText(e.textContent);
                                if (s > 0) {
                                    const e = this._devicePixelRatio * t.canvasWidth / s;
                                    this._enhanceTextSelection && (t.scale = e),
                                    r = `scaleX(${e})`
                                }
                            }
                            if (0 !== t.angle && (r = `rotate(${t.angle}deg) ${r}`),
                            r.length > 0 && (this._enhanceTextSelection && (t.originalTransform = r),
                            e.style.transform = r),
                            t.hasText && this._container.append(e),
                            t.hasEOL) {
                                const e = document.createElement("br");
                                e.setAttribute("role", "presentation"),
                                this._container.append(e)
                            }
                        }
                        _render(e=0) {
                            const t = (0,
                            n.createPromiseCapability)();
                            let r = Object.create(null);
                            const i = this._document.createElement("canvas");
                            if (i.height = i.width = s,
                            this._layoutTextCtx = i.getContext("2d", {
                                alpha: !1
                            }),
                            this._textContent) {
                                const e = this._textContent.items
                                  , r = this._textContent.styles;
                                this._processItems(e, r),
                                t.resolve()
                            } else {
                                if (!this._textContentStream)
                                    throw new Error('Neither "textContent" nor "textContentStream" parameters specified.');
                                {
                                    const e = () => {
                                        this._reader.read().then(( ({value: n, done: i}) => {
                                            i ? t.resolve() : (Object.assign(r, n.styles),
                                            this._processItems(n.items, r),
                                            e())
                                        }
                                        ), t.reject)
                                    }
                                    ;
                                    this._reader = this._textContentStream.getReader(),
                                    e()
                                }
                            }
                            t.promise.then(( () => {
                                r = null,
                                e ? this._renderTimer = setTimeout(( () => {
                                    c(this),
                                    this._renderTimer = null
                                }
                                ), e) : c(this)
                            }
                            ), this._capability.reject)
                        }
                        expandTextDivs(e=!1) {
                            if (!this._enhanceTextSelection || !this._renderingDone)
                                return;
                            null !== this._bounds && (d(this),
                            this._bounds = null);
                            const t = []
                              , r = [];
                            for (let n = 0, i = this._textDivs.length; n < i; n++) {
                                const i = this._textDivs[n]
                                  , s = this._textDivProperties.get(i);
                                s.hasText && (e ? (t.length = 0,
                                r.length = 0,
                                s.originalTransform && t.push(s.originalTransform),
                                s.paddingTop > 0 ? (r.push(`${s.paddingTop}px`),
                                t.push(`translateY(${-s.paddingTop}px)`)) : r.push(0),
                                s.paddingRight > 0 ? r.push(s.paddingRight / s.scale + "px") : r.push(0),
                                s.paddingBottom > 0 ? r.push(`${s.paddingBottom}px`) : r.push(0),
                                s.paddingLeft > 0 ? (r.push(s.paddingLeft / s.scale + "px"),
                                t.push(`translateX(${-s.paddingLeft / s.scale}px)`)) : r.push(0),
                                i.style.padding = r.join(" "),
                                t.length && (i.style.transform = t.join(" "))) : (i.style.padding = null,
                                i.style.transform = s.originalTransform))
                            }
                        }
                    }
                    t.TextLayerRenderTask = f
                }
                , (e, t, r) => {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }),
                    t.SVGGraphics = void 0;
                    var n = r(8)
                      , i = r(1)
                      , s = r(3);
                    let a = class {
                        constructor() {
                            (0,
                            i.unreachable)("Not implemented: SVGGraphics")
                        }
                    }
                    ;
                    t.SVGGraphics = a;
                    {
                        const o = {
                            fontStyle: "normal",
                            fontWeight: "normal",
                            fillColor: "#000000"
                        }
                          , l = "http://www.w3.org/XML/1998/namespace"
                          , c = "http://www.w3.org/1999/xlink"
                          , h = ["butt", "round", "square"]
                          , d = ["miter", "round", "bevel"]
                          , u = function(e, t="", r=!1) {
                            if (URL.createObjectURL && "undefined" !== typeof Blob && !r)
                                return URL.createObjectURL(new Blob([e],{
                                    type: t
                                }));
                            const n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
                            let i = `data:${t};base64,`;
                            for (let s = 0, a = e.length; s < a; s += 3) {
                                const t = 255 & e[s]
                                  , r = 255 & e[s + 1]
                                  , o = 255 & e[s + 2];
                                i += n[t >> 2] + n[(3 & t) << 4 | r >> 4] + n[s + 1 < a ? (15 & r) << 2 | o >> 6 : 64] + n[s + 2 < a ? 63 & o : 64]
                            }
                            return i
                        }
                          , f = function() {
                            const e = new Uint8Array([137, 80, 78, 71, 13, 10, 26, 10])
                              , t = new Int32Array(256);
                            for (let i = 0; i < 256; i++) {
                                let e = i;
                                for (let t = 0; t < 8; t++)
                                    e = 1 & e ? 3988292384 ^ e >> 1 & 2147483647 : e >> 1 & 2147483647;
                                t[i] = e
                            }
                            function r(e, r, n, i) {
                                let s = i;
                                const a = r.length;
                                n[s] = a >> 24 & 255,
                                n[s + 1] = a >> 16 & 255,
                                n[s + 2] = a >> 8 & 255,
                                n[s + 3] = 255 & a,
                                s += 4,
                                n[s] = 255 & e.charCodeAt(0),
                                n[s + 1] = 255 & e.charCodeAt(1),
                                n[s + 2] = 255 & e.charCodeAt(2),
                                n[s + 3] = 255 & e.charCodeAt(3),
                                s += 4,
                                n.set(r, s),
                                s += r.length;
                                const o = function(e, r, n) {
                                    let i = -1;
                                    for (let s = r; s < n; s++) {
                                        const r = 255 & (i ^ e[s]);
                                        i = i >>> 8 ^ t[r]
                                    }
                                    return -1 ^ i
                                }(n, i + 4, s);
                                n[s] = o >> 24 & 255,
                                n[s + 1] = o >> 16 & 255,
                                n[s + 2] = o >> 8 & 255,
                                n[s + 3] = 255 & o
                            }
                            function n(e) {
                                let t = e.length;
                                const r = 65535
                                  , n = Math.ceil(t / r)
                                  , i = new Uint8Array(2 + t + 5 * n + 4);
                                let s = 0;
                                i[s++] = 120,
                                i[s++] = 156;
                                let a = 0;
                                for (; t > r; )
                                    i[s++] = 0,
                                    i[s++] = 255,
                                    i[s++] = 255,
                                    i[s++] = 0,
                                    i[s++] = 0,
                                    i.set(e.subarray(a, a + r), s),
                                    s += r,
                                    a += r,
                                    t -= r;
                                i[s++] = 1,
                                i[s++] = 255 & t,
                                i[s++] = t >> 8 & 255,
                                i[s++] = 255 & ~t,
                                i[s++] = (65535 & ~t) >> 8 & 255,
                                i.set(e.subarray(a), s),
                                s += e.length - a;
                                const o = function(e, t, r) {
                                    let n = 1
                                      , i = 0;
                                    for (let s = t; s < r; ++s)
                                        n = (n + (255 & e[s])) % 65521,
                                        i = (i + n) % 65521;
                                    return i << 16 | n
                                }(e, 0, e.length);
                                return i[s++] = o >> 24 & 255,
                                i[s++] = o >> 16 & 255,
                                i[s++] = o >> 8 & 255,
                                i[s++] = 255 & o,
                                i
                            }
                            function a(t, a, o, l) {
                                const c = t.width
                                  , h = t.height;
                                let d, f, p;
                                const g = t.data;
                                switch (a) {
                                case i.ImageKind.GRAYSCALE_1BPP:
                                    f = 0,
                                    d = 1,
                                    p = c + 7 >> 3;
                                    break;
                                case i.ImageKind.RGB_24BPP:
                                    f = 2,
                                    d = 8,
                                    p = 3 * c;
                                    break;
                                case i.ImageKind.RGBA_32BPP:
                                    f = 6,
                                    d = 8,
                                    p = 4 * c;
                                    break;
                                default:
                                    throw new Error("invalid format")
                                }
                                const _ = new Uint8Array((1 + p) * h);
                                let m = 0
                                  , b = 0;
                                for (let e = 0; e < h; ++e)
                                    _[m++] = 0,
                                    _.set(g.subarray(b, b + p), m),
                                    b += p,
                                    m += p;
                                if (a === i.ImageKind.GRAYSCALE_1BPP && l) {
                                    m = 0;
                                    for (let e = 0; e < h; e++) {
                                        m++;
                                        for (let e = 0; e < p; e++)
                                            _[m++] ^= 255
                                    }
                                }
                                const v = new Uint8Array([c >> 24 & 255, c >> 16 & 255, c >> 8 & 255, 255 & c, h >> 24 & 255, h >> 16 & 255, h >> 8 & 255, 255 & h, d, f, 0, 0, 0])
                                  , y = function(e) {
                                    if (!s.isNodeJS)
                                        return n(e);
                                    try {
                                        let t;
                                        t = parseInt(browser$1.versions.node) >= 8 ? e : Buffer.from(e);
                                        const r = require$$2.deflateSync(t, {
                                            level: 9
                                        });
                                        return r instanceof Uint8Array ? r : new Uint8Array(r)
                                    } catch (t) {
                                        (0,
                                        i.warn)("Not compressing PNG because zlib.deflateSync is unavailable: " + t)
                                    }
                                    return n(e)
                                }(_)
                                  , A = e.length + 36 + v.length + y.length
                                  , E = new Uint8Array(A);
                                let S = 0;
                                return E.set(e, S),
                                S += e.length,
                                r("IHDR", v, E, S),
                                S += 12 + v.length,
                                r("IDATA", y, E, S),
                                S += 12 + y.length,
                                r("IEND", new Uint8Array(0), E, S),
                                u(E, "image/png", o)
                            }
                            return function(e, t, r) {
                                return a(e, void 0 === e.kind ? i.ImageKind.GRAYSCALE_1BPP : e.kind, t, r)
                            }
                        }();
                        class p {
                            constructor() {
                                this.fontSizeScale = 1,
                                this.fontWeight = o.fontWeight,
                                this.fontSize = 0,
                                this.textMatrix = i.IDENTITY_MATRIX,
                                this.fontMatrix = i.FONT_IDENTITY_MATRIX,
                                this.leading = 0,
                                this.textRenderingMode = i.TextRenderingMode.FILL,
                                this.textMatrixScale = 1,
                                this.x = 0,
                                this.y = 0,
                                this.lineX = 0,
                                this.lineY = 0,
                                this.charSpacing = 0,
                                this.wordSpacing = 0,
                                this.textHScale = 1,
                                this.textRise = 0,
                                this.fillColor = o.fillColor,
                                this.strokeColor = "#000000",
                                this.fillAlpha = 1,
                                this.strokeAlpha = 1,
                                this.lineWidth = 1,
                                this.lineJoin = "",
                                this.lineCap = "",
                                this.miterLimit = 0,
                                this.dashArray = [],
                                this.dashPhase = 0,
                                this.dependencies = [],
                                this.activeClipUrl = null,
                                this.clipGroup = null,
                                this.maskId = ""
                            }
                            clone() {
                                return Object.create(this)
                            }
                            setCurrentPoint(e, t) {
                                this.x = e,
                                this.y = t
                            }
                        }
                        function g(e) {
                            let t = [];
                            const r = [];
                            for (const n of e)
                                "save" !== n.fn ? "restore" === n.fn ? t = r.pop() : t.push(n) : (t.push({
                                    fnId: 92,
                                    fn: "group",
                                    items: []
                                }),
                                r.push(t),
                                t = t.at(-1).items);
                            return t
                        }
                        function _(e) {
                            if (Number.isInteger(e))
                                return e.toString();
                            const t = e.toFixed(10);
                            let r = t.length - 1;
                            if ("0" !== t[r])
                                return t;
                            do {
                                r--
                            } while ("0" === t[r]);
                            return t.substring(0, "." === t[r] ? r : r + 1)
                        }
                        function m(e) {
                            if (0 === e[4] && 0 === e[5]) {
                                if (0 === e[1] && 0 === e[2])
                                    return 1 === e[0] && 1 === e[3] ? "" : `scale(${_(e[0])} ${_(e[3])})`;
                                if (e[0] === e[3] && e[1] === -e[2])
                                    return `rotate(${_(180 * Math.acos(e[0]) / Math.PI)})`
                            } else if (1 === e[0] && 0 === e[1] && 0 === e[2] && 1 === e[3])
                                return `translate(${_(e[4])} ${_(e[5])})`;
                            return `matrix(${_(e[0])} ${_(e[1])} ${_(e[2])} ${_(e[3])} ${_(e[4])} ${_(e[5])})`
                        }
                        let b = 0
                          , v = 0
                          , y = 0;
                        t.SVGGraphics = a = class {
                            constructor(e, t, r=!1) {
                                (0,
                                n.deprecated)("The SVG back-end is no longer maintained and *may* be removed in the future."),
                                this.svgFactory = new n.DOMSVGFactory,
                                this.current = new p,
                                this.transformMatrix = i.IDENTITY_MATRIX,
                                this.transformStack = [],
                                this.extraStack = [],
                                this.commonObjs = e,
                                this.objs = t,
                                this.pendingClip = null,
                                this.pendingEOFill = !1,
                                this.embedFonts = !1,
                                this.embeddedFonts = Object.create(null),
                                this.cssStyle = null,
                                this.forceDataSchema = !!r,
                                this._operatorIdMapping = [];
                                for (const n in i.OPS)
                                    this._operatorIdMapping[i.OPS[n]] = n
                            }
                            save() {
                                this.transformStack.push(this.transformMatrix);
                                const e = this.current;
                                this.extraStack.push(e),
                                this.current = e.clone()
                            }
                            restore() {
                                this.transformMatrix = this.transformStack.pop(),
                                this.current = this.extraStack.pop(),
                                this.pendingClip = null,
                                this.tgrp = null
                            }
                            group(e) {
                                this.save(),
                                this.executeOpTree(e),
                                this.restore()
                            }
                            loadDependencies(e) {
                                const t = e.fnArray
                                  , r = e.argsArray;
                                for (let n = 0, s = t.length; n < s; n++)
                                    if (t[n] === i.OPS.dependency)
                                        for (const e of r[n]) {
                                            const t = e.startsWith("g_") ? this.commonObjs : this.objs
                                              , r = new Promise((r => {
                                                t.get(e, r)
                                            }
                                            ));
                                            this.current.dependencies.push(r)
                                        }
                                return Promise.all(this.current.dependencies)
                            }
                            transform(e, t, r, n, s, a) {
                                const o = [e, t, r, n, s, a];
                                this.transformMatrix = i.Util.transform(this.transformMatrix, o),
                                this.tgrp = null
                            }
                            getSVG(e, t) {
                                this.viewport = t;
                                const r = this._initialize(t);
                                return this.loadDependencies(e).then(( () => (this.transformMatrix = i.IDENTITY_MATRIX,
                                this.executeOpTree(this.convertOpList(e)),
                                r)))
                            }
                            convertOpList(e) {
                                const t = this._operatorIdMapping
                                  , r = e.argsArray
                                  , n = e.fnArray
                                  , i = [];
                                for (let s = 0, a = n.length; s < a; s++) {
                                    const e = n[s];
                                    i.push({
                                        fnId: e,
                                        fn: t[e],
                                        args: r[s]
                                    })
                                }
                                return g(i)
                            }
                            executeOpTree(e) {
                                for (const t of e) {
                                    const e = t.fn
                                      , r = t.fnId
                                      , n = t.args;
                                    switch (0 | r) {
                                    case i.OPS.beginText:
                                        this.beginText();
                                        break;
                                    case i.OPS.dependency:
                                        break;
                                    case i.OPS.setLeading:
                                        this.setLeading(n);
                                        break;
                                    case i.OPS.setLeadingMoveText:
                                        this.setLeadingMoveText(n[0], n[1]);
                                        break;
                                    case i.OPS.setFont:
                                        this.setFont(n);
                                        break;
                                    case i.OPS.showText:
                                    case i.OPS.showSpacedText:
                                        this.showText(n[0]);
                                        break;
                                    case i.OPS.endText:
                                        this.endText();
                                        break;
                                    case i.OPS.moveText:
                                        this.moveText(n[0], n[1]);
                                        break;
                                    case i.OPS.setCharSpacing:
                                        this.setCharSpacing(n[0]);
                                        break;
                                    case i.OPS.setWordSpacing:
                                        this.setWordSpacing(n[0]);
                                        break;
                                    case i.OPS.setHScale:
                                        this.setHScale(n[0]);
                                        break;
                                    case i.OPS.setTextMatrix:
                                        this.setTextMatrix(n[0], n[1], n[2], n[3], n[4], n[5]);
                                        break;
                                    case i.OPS.setTextRise:
                                        this.setTextRise(n[0]);
                                        break;
                                    case i.OPS.setTextRenderingMode:
                                        this.setTextRenderingMode(n[0]);
                                        break;
                                    case i.OPS.setLineWidth:
                                        this.setLineWidth(n[0]);
                                        break;
                                    case i.OPS.setLineJoin:
                                        this.setLineJoin(n[0]);
                                        break;
                                    case i.OPS.setLineCap:
                                        this.setLineCap(n[0]);
                                        break;
                                    case i.OPS.setMiterLimit:
                                        this.setMiterLimit(n[0]);
                                        break;
                                    case i.OPS.setFillRGBColor:
                                        this.setFillRGBColor(n[0], n[1], n[2]);
                                        break;
                                    case i.OPS.setStrokeRGBColor:
                                        this.setStrokeRGBColor(n[0], n[1], n[2]);
                                        break;
                                    case i.OPS.setStrokeColorN:
                                        this.setStrokeColorN(n);
                                        break;
                                    case i.OPS.setFillColorN:
                                        this.setFillColorN(n);
                                        break;
                                    case i.OPS.shadingFill:
                                        this.shadingFill(n[0]);
                                        break;
                                    case i.OPS.setDash:
                                        this.setDash(n[0], n[1]);
                                        break;
                                    case i.OPS.setRenderingIntent:
                                        this.setRenderingIntent(n[0]);
                                        break;
                                    case i.OPS.setFlatness:
                                        this.setFlatness(n[0]);
                                        break;
                                    case i.OPS.setGState:
                                        this.setGState(n[0]);
                                        break;
                                    case i.OPS.fill:
                                        this.fill();
                                        break;
                                    case i.OPS.eoFill:
                                        this.eoFill();
                                        break;
                                    case i.OPS.stroke:
                                        this.stroke();
                                        break;
                                    case i.OPS.fillStroke:
                                        this.fillStroke();
                                        break;
                                    case i.OPS.eoFillStroke:
                                        this.eoFillStroke();
                                        break;
                                    case i.OPS.clip:
                                        this.clip("nonzero");
                                        break;
                                    case i.OPS.eoClip:
                                        this.clip("evenodd");
                                        break;
                                    case i.OPS.paintSolidColorImageMask:
                                        this.paintSolidColorImageMask();
                                        break;
                                    case i.OPS.paintImageXObject:
                                        this.paintImageXObject(n[0]);
                                        break;
                                    case i.OPS.paintInlineImageXObject:
                                        this.paintInlineImageXObject(n[0]);
                                        break;
                                    case i.OPS.paintImageMaskXObject:
                                        this.paintImageMaskXObject(n[0]);
                                        break;
                                    case i.OPS.paintFormXObjectBegin:
                                        this.paintFormXObjectBegin(n[0], n[1]);
                                        break;
                                    case i.OPS.paintFormXObjectEnd:
                                        this.paintFormXObjectEnd();
                                        break;
                                    case i.OPS.closePath:
                                        this.closePath();
                                        break;
                                    case i.OPS.closeStroke:
                                        this.closeStroke();
                                        break;
                                    case i.OPS.closeFillStroke:
                                        this.closeFillStroke();
                                        break;
                                    case i.OPS.closeEOFillStroke:
                                        this.closeEOFillStroke();
                                        break;
                                    case i.OPS.nextLine:
                                        this.nextLine();
                                        break;
                                    case i.OPS.transform:
                                        this.transform(n[0], n[1], n[2], n[3], n[4], n[5]);
                                        break;
                                    case i.OPS.constructPath:
                                        this.constructPath(n[0], n[1]);
                                        break;
                                    case i.OPS.endPath:
                                        this.endPath();
                                        break;
                                    case 92:
                                        this.group(t.items);
                                        break;
                                    default:
                                        (0,
                                        i.warn)(`Unimplemented operator ${e}`)
                                    }
                                }
                            }
                            setWordSpacing(e) {
                                this.current.wordSpacing = e
                            }
                            setCharSpacing(e) {
                                this.current.charSpacing = e
                            }
                            nextLine() {
                                this.moveText(0, this.current.leading)
                            }
                            setTextMatrix(e, t, r, n, i, s) {
                                const a = this.current;
                                a.textMatrix = a.lineMatrix = [e, t, r, n, i, s],
                                a.textMatrixScale = Math.hypot(e, t),
                                a.x = a.lineX = 0,
                                a.y = a.lineY = 0,
                                a.xcoords = [],
                                a.ycoords = [],
                                a.tspan = this.svgFactory.createElement("svg:tspan"),
                                a.tspan.setAttributeNS(null, "font-family", a.fontFamily),
                                a.tspan.setAttributeNS(null, "font-size", `${_(a.fontSize)}px`),
                                a.tspan.setAttributeNS(null, "y", _(-a.y)),
                                a.txtElement = this.svgFactory.createElement("svg:text"),
                                a.txtElement.append(a.tspan)
                            }
                            beginText() {
                                const e = this.current;
                                e.x = e.lineX = 0,
                                e.y = e.lineY = 0,
                                e.textMatrix = i.IDENTITY_MATRIX,
                                e.lineMatrix = i.IDENTITY_MATRIX,
                                e.textMatrixScale = 1,
                                e.tspan = this.svgFactory.createElement("svg:tspan"),
                                e.txtElement = this.svgFactory.createElement("svg:text"),
                                e.txtgrp = this.svgFactory.createElement("svg:g"),
                                e.xcoords = [],
                                e.ycoords = []
                            }
                            moveText(e, t) {
                                const r = this.current;
                                r.x = r.lineX += e,
                                r.y = r.lineY += t,
                                r.xcoords = [],
                                r.ycoords = [],
                                r.tspan = this.svgFactory.createElement("svg:tspan"),
                                r.tspan.setAttributeNS(null, "font-family", r.fontFamily),
                                r.tspan.setAttributeNS(null, "font-size", `${_(r.fontSize)}px`),
                                r.tspan.setAttributeNS(null, "y", _(-r.y))
                            }
                            showText(e) {
                                const t = this.current
                                  , r = t.font
                                  , n = t.fontSize;
                                if (0 === n)
                                    return;
                                const s = t.fontSizeScale
                                  , a = t.charSpacing
                                  , c = t.wordSpacing
                                  , h = t.fontDirection
                                  , d = t.textHScale * h
                                  , u = r.vertical
                                  , f = u ? 1 : -1
                                  , p = r.defaultVMetrics
                                  , g = n * t.fontMatrix[0];
                                let b = 0;
                                for (const i of e) {
                                    if (null === i) {
                                        b += h * c;
                                        continue
                                    }
                                    if ("number" === typeof i) {
                                        b += f * i * n / 1e3;
                                        continue
                                    }
                                    const e = (i.isSpace ? c : 0) + a
                                      , o = i.fontChar;
                                    let l, d, _, m = i.width;
                                    if (u) {
                                        let e;
                                        const t = i.vmetric || p;
                                        e = i.vmetric ? t[1] : .5 * m,
                                        e = -e * g;
                                        const r = t[2] * g;
                                        m = t ? -t[0] : m,
                                        l = e / s,
                                        d = (b + r) / s
                                    } else
                                        l = b / s,
                                        d = 0;
                                    (i.isInFont || r.missingFile) && (t.xcoords.push(t.x + l),
                                    u && t.ycoords.push(-t.y + d),
                                    t.tspan.textContent += o),
                                    _ = u ? m * g - e * h : m * g + e * h,
                                    b += _
                                }
                                t.tspan.setAttributeNS(null, "x", t.xcoords.map(_).join(" ")),
                                u ? t.tspan.setAttributeNS(null, "y", t.ycoords.map(_).join(" ")) : t.tspan.setAttributeNS(null, "y", _(-t.y)),
                                u ? t.y -= b : t.x += b * d,
                                t.tspan.setAttributeNS(null, "font-family", t.fontFamily),
                                t.tspan.setAttributeNS(null, "font-size", `${_(t.fontSize)}px`),
                                t.fontStyle !== o.fontStyle && t.tspan.setAttributeNS(null, "font-style", t.fontStyle),
                                t.fontWeight !== o.fontWeight && t.tspan.setAttributeNS(null, "font-weight", t.fontWeight);
                                const v = t.textRenderingMode & i.TextRenderingMode.FILL_STROKE_MASK;
                                if (v === i.TextRenderingMode.FILL || v === i.TextRenderingMode.FILL_STROKE ? (t.fillColor !== o.fillColor && t.tspan.setAttributeNS(null, "fill", t.fillColor),
                                t.fillAlpha < 1 && t.tspan.setAttributeNS(null, "fill-opacity", t.fillAlpha)) : t.textRenderingMode === i.TextRenderingMode.ADD_TO_PATH ? t.tspan.setAttributeNS(null, "fill", "transparent") : t.tspan.setAttributeNS(null, "fill", "none"),
                                v === i.TextRenderingMode.STROKE || v === i.TextRenderingMode.FILL_STROKE) {
                                    const e = 1 / (t.textMatrixScale || 1);
                                    this._setStrokeAttributes(t.tspan, e)
                                }
                                let y = t.textMatrix;
                                0 !== t.textRise && (y = y.slice(),
                                y[5] += t.textRise),
                                t.txtElement.setAttributeNS(null, "transform", `${m(y)} scale(${_(d)}, -1)`),
                                t.txtElement.setAttributeNS(l, "xml:space", "preserve"),
                                t.txtElement.append(t.tspan),
                                t.txtgrp.append(t.txtElement),
                                this._ensureTransformGroup().append(t.txtElement)
                            }
                            setLeadingMoveText(e, t) {
                                this.setLeading(-t),
                                this.moveText(e, t)
                            }
                            addFontStyle(e) {
                                if (!e.data)
                                    throw new Error('addFontStyle: No font data available, ensure that the "fontExtraProperties" API parameter is set.');
                                this.cssStyle || (this.cssStyle = this.svgFactory.createElement("svg:style"),
                                this.cssStyle.setAttributeNS(null, "type", "text/css"),
                                this.defs.append(this.cssStyle));
                                const t = u(e.data, e.mimetype, this.forceDataSchema);
                                this.cssStyle.textContent += `@font-face { font-family: "${e.loadedName}"; src: url(${t}); }\n`
                            }
                            setFont(e) {
                                const t = this.current
                                  , r = this.commonObjs.get(e[0]);
                                let n = e[1];
                                t.font = r,
                                !this.embedFonts || r.missingFile || this.embeddedFonts[r.loadedName] || (this.addFontStyle(r),
                                this.embeddedFonts[r.loadedName] = r),
                                t.fontMatrix = r.fontMatrix || i.FONT_IDENTITY_MATRIX;
                                let s = "normal";
                                r.black ? s = "900" : r.bold && (s = "bold");
                                const a = r.italic ? "italic" : "normal";
                                n < 0 ? (n = -n,
                                t.fontDirection = -1) : t.fontDirection = 1,
                                t.fontSize = n,
                                t.fontFamily = r.loadedName,
                                t.fontWeight = s,
                                t.fontStyle = a,
                                t.tspan = this.svgFactory.createElement("svg:tspan"),
                                t.tspan.setAttributeNS(null, "y", _(-t.y)),
                                t.xcoords = [],
                                t.ycoords = []
                            }
                            endText() {
                                const e = this.current;
                                e.textRenderingMode & i.TextRenderingMode.ADD_TO_PATH_FLAG && e.txtElement?.hasChildNodes() && (e.element = e.txtElement,
                                this.clip("nonzero"),
                                this.endPath())
                            }
                            setLineWidth(e) {
                                e > 0 && (this.current.lineWidth = e)
                            }
                            setLineCap(e) {
                                this.current.lineCap = h[e]
                            }
                            setLineJoin(e) {
                                this.current.lineJoin = d[e]
                            }
                            setMiterLimit(e) {
                                this.current.miterLimit = e
                            }
                            setStrokeAlpha(e) {
                                this.current.strokeAlpha = e
                            }
                            setStrokeRGBColor(e, t, r) {
                                this.current.strokeColor = i.Util.makeHexColor(e, t, r)
                            }
                            setFillAlpha(e) {
                                this.current.fillAlpha = e
                            }
                            setFillRGBColor(e, t, r) {
                                this.current.fillColor = i.Util.makeHexColor(e, t, r),
                                this.current.tspan = this.svgFactory.createElement("svg:tspan"),
                                this.current.xcoords = [],
                                this.current.ycoords = []
                            }
                            setStrokeColorN(e) {
                                this.current.strokeColor = this._makeColorN_Pattern(e)
                            }
                            setFillColorN(e) {
                                this.current.fillColor = this._makeColorN_Pattern(e)
                            }
                            shadingFill(e) {
                                const t = this.viewport.width
                                  , r = this.viewport.height
                                  , n = i.Util.inverseTransform(this.transformMatrix)
                                  , s = i.Util.applyTransform([0, 0], n)
                                  , a = i.Util.applyTransform([0, r], n)
                                  , o = i.Util.applyTransform([t, 0], n)
                                  , l = i.Util.applyTransform([t, r], n)
                                  , c = Math.min(s[0], a[0], o[0], l[0])
                                  , h = Math.min(s[1], a[1], o[1], l[1])
                                  , d = Math.max(s[0], a[0], o[0], l[0])
                                  , u = Math.max(s[1], a[1], o[1], l[1])
                                  , f = this.svgFactory.createElement("svg:rect");
                                f.setAttributeNS(null, "x", c),
                                f.setAttributeNS(null, "y", h),
                                f.setAttributeNS(null, "width", d - c),
                                f.setAttributeNS(null, "height", u - h),
                                f.setAttributeNS(null, "fill", this._makeShadingPattern(e)),
                                this.current.fillAlpha < 1 && f.setAttributeNS(null, "fill-opacity", this.current.fillAlpha),
                                this._ensureTransformGroup().append(f)
                            }
                            _makeColorN_Pattern(e) {
                                return "TilingPattern" === e[0] ? this._makeTilingPattern(e) : this._makeShadingPattern(e)
                            }
                            _makeTilingPattern(e) {
                                const t = e[1]
                                  , r = e[2]
                                  , n = e[3] || i.IDENTITY_MATRIX
                                  , [s,a,o,l] = e[4]
                                  , c = e[5]
                                  , h = e[6]
                                  , d = e[7]
                                  , u = "shading" + y++
                                  , [f,p,g,_] = i.Util.normalizeRect([...i.Util.applyTransform([s, a], n), ...i.Util.applyTransform([o, l], n)])
                                  , [m,b] = i.Util.singularValueDecompose2dScale(n)
                                  , v = c * m
                                  , A = h * b
                                  , E = this.svgFactory.createElement("svg:pattern");
                                E.setAttributeNS(null, "id", u),
                                E.setAttributeNS(null, "patternUnits", "userSpaceOnUse"),
                                E.setAttributeNS(null, "width", v),
                                E.setAttributeNS(null, "height", A),
                                E.setAttributeNS(null, "x", `${f}`),
                                E.setAttributeNS(null, "y", `${p}`);
                                const S = this.svg
                                  , w = this.transformMatrix
                                  , T = this.current.fillColor
                                  , x = this.current.strokeColor
                                  , C = this.svgFactory.create(g - f, _ - p);
                                if (this.svg = C,
                                this.transformMatrix = n,
                                2 === d) {
                                    const e = i.Util.makeHexColor(...t);
                                    this.current.fillColor = e,
                                    this.current.strokeColor = e
                                }
                                return this.executeOpTree(this.convertOpList(r)),
                                this.svg = S,
                                this.transformMatrix = w,
                                this.current.fillColor = T,
                                this.current.strokeColor = x,
                                E.append(C.childNodes[0]),
                                this.defs.append(E),
                                `url(#${u})`
                            }
                            _makeShadingPattern(e) {
                                switch ("string" === typeof e && (e = this.objs.get(e)),
                                e[0]) {
                                case "RadialAxial":
                                    const t = "shading" + y++
                                      , r = e[3];
                                    let n;
                                    switch (e[1]) {
                                    case "axial":
                                        const r = e[4]
                                          , i = e[5];
                                        n = this.svgFactory.createElement("svg:linearGradient"),
                                        n.setAttributeNS(null, "id", t),
                                        n.setAttributeNS(null, "gradientUnits", "userSpaceOnUse"),
                                        n.setAttributeNS(null, "x1", r[0]),
                                        n.setAttributeNS(null, "y1", r[1]),
                                        n.setAttributeNS(null, "x2", i[0]),
                                        n.setAttributeNS(null, "y2", i[1]);
                                        break;
                                    case "radial":
                                        const s = e[4]
                                          , a = e[5]
                                          , o = e[6]
                                          , l = e[7];
                                        n = this.svgFactory.createElement("svg:radialGradient"),
                                        n.setAttributeNS(null, "id", t),
                                        n.setAttributeNS(null, "gradientUnits", "userSpaceOnUse"),
                                        n.setAttributeNS(null, "cx", a[0]),
                                        n.setAttributeNS(null, "cy", a[1]),
                                        n.setAttributeNS(null, "r", l),
                                        n.setAttributeNS(null, "fx", s[0]),
                                        n.setAttributeNS(null, "fy", s[1]),
                                        n.setAttributeNS(null, "fr", o);
                                        break;
                                    default:
                                        throw new Error(`Unknown RadialAxial type: ${e[1]}`)
                                    }
                                    for (const e of r) {
                                        const t = this.svgFactory.createElement("svg:stop");
                                        t.setAttributeNS(null, "offset", e[0]),
                                        t.setAttributeNS(null, "stop-color", e[1]),
                                        n.append(t)
                                    }
                                    return this.defs.append(n),
                                    `url(#${t})`;
                                case "Mesh":
                                    return (0,
                                    i.warn)("Unimplemented pattern Mesh"),
                                    null;
                                case "Dummy":
                                    return "hotpink";
                                default:
                                    throw new Error(`Unknown IR type: ${e[0]}`)
                                }
                            }
                            setDash(e, t) {
                                this.current.dashArray = e,
                                this.current.dashPhase = t
                            }
                            constructPath(e, t) {
                                const r = this.current;
                                let n = r.x
                                  , s = r.y
                                  , a = []
                                  , o = 0;
                                for (const l of e)
                                    switch (0 | l) {
                                    case i.OPS.rectangle:
                                        n = t[o++],
                                        s = t[o++];
                                        const e = n + t[o++]
                                          , r = s + t[o++];
                                        a.push("M", _(n), _(s), "L", _(e), _(s), "L", _(e), _(r), "L", _(n), _(r), "Z");
                                        break;
                                    case i.OPS.moveTo:
                                        n = t[o++],
                                        s = t[o++],
                                        a.push("M", _(n), _(s));
                                        break;
                                    case i.OPS.lineTo:
                                        n = t[o++],
                                        s = t[o++],
                                        a.push("L", _(n), _(s));
                                        break;
                                    case i.OPS.curveTo:
                                        n = t[o + 4],
                                        s = t[o + 5],
                                        a.push("C", _(t[o]), _(t[o + 1]), _(t[o + 2]), _(t[o + 3]), _(n), _(s)),
                                        o += 6;
                                        break;
                                    case i.OPS.curveTo2:
                                        a.push("C", _(n), _(s), _(t[o]), _(t[o + 1]), _(t[o + 2]), _(t[o + 3])),
                                        n = t[o + 2],
                                        s = t[o + 3],
                                        o += 4;
                                        break;
                                    case i.OPS.curveTo3:
                                        n = t[o + 2],
                                        s = t[o + 3],
                                        a.push("C", _(t[o]), _(t[o + 1]), _(n), _(s), _(n), _(s)),
                                        o += 4;
                                        break;
                                    case i.OPS.closePath:
                                        a.push("Z")
                                    }
                                a = a.join(" "),
                                r.path && e.length > 0 && e[0] !== i.OPS.rectangle && e[0] !== i.OPS.moveTo ? a = r.path.getAttributeNS(null, "d") + a : (r.path = this.svgFactory.createElement("svg:path"),
                                this._ensureTransformGroup().append(r.path)),
                                r.path.setAttributeNS(null, "d", a),
                                r.path.setAttributeNS(null, "fill", "none"),
                                r.element = r.path,
                                r.setCurrentPoint(n, s)
                            }
                            endPath() {
                                const e = this.current;
                                if (e.path = null,
                                !this.pendingClip)
                                    return;
                                if (!e.element)
                                    return void (this.pendingClip = null);
                                const t = "clippath" + b++
                                  , r = this.svgFactory.createElement("svg:clipPath");
                                r.setAttributeNS(null, "id", t),
                                r.setAttributeNS(null, "transform", m(this.transformMatrix));
                                const n = e.element.cloneNode(!0);
                                if ("evenodd" === this.pendingClip ? n.setAttributeNS(null, "clip-rule", "evenodd") : n.setAttributeNS(null, "clip-rule", "nonzero"),
                                this.pendingClip = null,
                                r.append(n),
                                this.defs.append(r),
                                e.activeClipUrl) {
                                    e.clipGroup = null;
                                    for (const e of this.extraStack)
                                        e.clipGroup = null;
                                    r.setAttributeNS(null, "clip-path", e.activeClipUrl)
                                }
                                e.activeClipUrl = `url(#${t})`,
                                this.tgrp = null
                            }
                            clip(e) {
                                this.pendingClip = e
                            }
                            closePath() {
                                const e = this.current;
                                if (e.path) {
                                    const t = `${e.path.getAttributeNS(null, "d")}Z`;
                                    e.path.setAttributeNS(null, "d", t)
                                }
                            }
                            setLeading(e) {
                                this.current.leading = -e
                            }
                            setTextRise(e) {
                                this.current.textRise = e
                            }
                            setTextRenderingMode(e) {
                                this.current.textRenderingMode = e
                            }
                            setHScale(e) {
                                this.current.textHScale = e / 100
                            }
                            setRenderingIntent(e) {}
                            setFlatness(e) {}
                            setGState(e) {
                                for (const [t,r] of e)
                                    switch (t) {
                                    case "LW":
                                        this.setLineWidth(r);
                                        break;
                                    case "LC":
                                        this.setLineCap(r);
                                        break;
                                    case "LJ":
                                        this.setLineJoin(r);
                                        break;
                                    case "ML":
                                        this.setMiterLimit(r);
                                        break;
                                    case "D":
                                        this.setDash(r[0], r[1]);
                                        break;
                                    case "RI":
                                        this.setRenderingIntent(r);
                                        break;
                                    case "FL":
                                        this.setFlatness(r);
                                        break;
                                    case "Font":
                                        this.setFont(r);
                                        break;
                                    case "CA":
                                        this.setStrokeAlpha(r);
                                        break;
                                    case "ca":
                                        this.setFillAlpha(r);
                                        break;
                                    default:
                                        (0,
                                        i.warn)(`Unimplemented graphic state operator ${t}`)
                                    }
                            }
                            fill() {
                                const e = this.current;
                                e.element && (e.element.setAttributeNS(null, "fill", e.fillColor),
                                e.element.setAttributeNS(null, "fill-opacity", e.fillAlpha),
                                this.endPath())
                            }
                            stroke() {
                                const e = this.current;
                                e.element && (this._setStrokeAttributes(e.element),
                                e.element.setAttributeNS(null, "fill", "none"),
                                this.endPath())
                            }
                            _setStrokeAttributes(e, t=1) {
                                const r = this.current;
                                let n = r.dashArray;
                                1 !== t && n.length > 0 && (n = n.map((function(e) {
                                    return t * e
                                }
                                ))),
                                e.setAttributeNS(null, "stroke", r.strokeColor),
                                e.setAttributeNS(null, "stroke-opacity", r.strokeAlpha),
                                e.setAttributeNS(null, "stroke-miterlimit", _(r.miterLimit)),
                                e.setAttributeNS(null, "stroke-linecap", r.lineCap),
                                e.setAttributeNS(null, "stroke-linejoin", r.lineJoin),
                                e.setAttributeNS(null, "stroke-width", _(t * r.lineWidth) + "px"),
                                e.setAttributeNS(null, "stroke-dasharray", n.map(_).join(" ")),
                                e.setAttributeNS(null, "stroke-dashoffset", _(t * r.dashPhase) + "px")
                            }
                            eoFill() {
                                this.current.element && this.current.element.setAttributeNS(null, "fill-rule", "evenodd"),
                                this.fill()
                            }
                            fillStroke() {
                                this.stroke(),
                                this.fill()
                            }
                            eoFillStroke() {
                                this.current.element && this.current.element.setAttributeNS(null, "fill-rule", "evenodd"),
                                this.fillStroke()
                            }
                            closeStroke() {
                                this.closePath(),
                                this.stroke()
                            }
                            closeFillStroke() {
                                this.closePath(),
                                this.fillStroke()
                            }
                            closeEOFillStroke() {
                                this.closePath(),
                                this.eoFillStroke()
                            }
                            paintSolidColorImageMask() {
                                const e = this.svgFactory.createElement("svg:rect");
                                e.setAttributeNS(null, "x", "0"),
                                e.setAttributeNS(null, "y", "0"),
                                e.setAttributeNS(null, "width", "1px"),
                                e.setAttributeNS(null, "height", "1px"),
                                e.setAttributeNS(null, "fill", this.current.fillColor),
                                this._ensureTransformGroup().append(e)
                            }
                            paintImageXObject(e) {
                                const t = e.startsWith("g_") ? this.commonObjs.get(e) : this.objs.get(e);
                                t ? this.paintInlineImageXObject(t) : (0,
                                i.warn)(`Dependent image with object ID ${e} is not ready yet`)
                            }
                            paintInlineImageXObject(e, t) {
                                const r = e.width
                                  , n = e.height
                                  , i = f(e, this.forceDataSchema, !!t)
                                  , s = this.svgFactory.createElement("svg:rect");
                                s.setAttributeNS(null, "x", "0"),
                                s.setAttributeNS(null, "y", "0"),
                                s.setAttributeNS(null, "width", _(r)),
                                s.setAttributeNS(null, "height", _(n)),
                                this.current.element = s,
                                this.clip("nonzero");
                                const a = this.svgFactory.createElement("svg:image");
                                a.setAttributeNS(c, "xlink:href", i),
                                a.setAttributeNS(null, "x", "0"),
                                a.setAttributeNS(null, "y", _(-n)),
                                a.setAttributeNS(null, "width", _(r) + "px"),
                                a.setAttributeNS(null, "height", _(n) + "px"),
                                a.setAttributeNS(null, "transform", `scale(${_(1 / r)} ${_(-1 / n)})`),
                                t ? t.append(a) : this._ensureTransformGroup().append(a)
                            }
                            paintImageMaskXObject(e) {
                                const t = this.current
                                  , r = e.width
                                  , n = e.height
                                  , i = t.fillColor;
                                t.maskId = "mask" + v++;
                                const s = this.svgFactory.createElement("svg:mask");
                                s.setAttributeNS(null, "id", t.maskId);
                                const a = this.svgFactory.createElement("svg:rect");
                                a.setAttributeNS(null, "x", "0"),
                                a.setAttributeNS(null, "y", "0"),
                                a.setAttributeNS(null, "width", _(r)),
                                a.setAttributeNS(null, "height", _(n)),
                                a.setAttributeNS(null, "fill", i),
                                a.setAttributeNS(null, "mask", `url(#${t.maskId})`),
                                this.defs.append(s),
                                this._ensureTransformGroup().append(a),
                                this.paintInlineImageXObject(e, s)
                            }
                            paintFormXObjectBegin(e, t) {
                                if (Array.isArray(e) && 6 === e.length && this.transform(e[0], e[1], e[2], e[3], e[4], e[5]),
                                t) {
                                    const e = t[2] - t[0]
                                      , r = t[3] - t[1]
                                      , n = this.svgFactory.createElement("svg:rect");
                                    n.setAttributeNS(null, "x", t[0]),
                                    n.setAttributeNS(null, "y", t[1]),
                                    n.setAttributeNS(null, "width", _(e)),
                                    n.setAttributeNS(null, "height", _(r)),
                                    this.current.element = n,
                                    this.clip("nonzero"),
                                    this.endPath()
                                }
                            }
                            paintFormXObjectEnd() {}
                            _initialize(e) {
                                const t = this.svgFactory.create(e.width, e.height)
                                  , r = this.svgFactory.createElement("svg:defs");
                                t.append(r),
                                this.defs = r;
                                const n = this.svgFactory.createElement("svg:g");
                                return n.setAttributeNS(null, "transform", m(e.transform)),
                                t.append(n),
                                this.svg = n,
                                t
                            }
                            _ensureClipGroup() {
                                if (!this.current.clipGroup) {
                                    const e = this.svgFactory.createElement("svg:g");
                                    e.setAttributeNS(null, "clip-path", this.current.activeClipUrl),
                                    this.svg.append(e),
                                    this.current.clipGroup = e
                                }
                                return this.current.clipGroup
                            }
                            _ensureTransformGroup() {
                                return this.tgrp || (this.tgrp = this.svgFactory.createElement("svg:g"),
                                this.tgrp.setAttributeNS(null, "transform", m(this.transformMatrix)),
                                this.current.activeClipUrl ? this._ensureClipGroup().append(this.tgrp) : this.svg.append(this.tgrp)),
                                this.tgrp
                            }
                        }
                    }
                }
                , (e, t, r) => {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }),
                    t.PDFNodeStream = void 0;
                    var n = r(1)
                      , i = r(33);
                    const s = require$$0
                      , a = require$$3
                      , o = require$$4
                      , l = require$$5
                      , c = /^file:\/\/\/[a-zA-Z]:\//;
                    t.PDFNodeStream = class {
                        constructor(e) {
                            this.source = e,
                            this.url = function(e) {
                                const t = l.parse(e);
                                return "file:" === t.protocol || t.host ? t : /^[a-z]:[/\\]/i.test(e) ? l.parse(`file:///${e}`) : (t.host || (t.protocol = "file:"),
                                t)
                            }(e.url),
                            this.isHttp = "http:" === this.url.protocol || "https:" === this.url.protocol,
                            this.isFsUrl = "file:" === this.url.protocol,
                            this.httpHeaders = this.isHttp && e.httpHeaders || {},
                            this._fullRequestReader = null,
                            this._rangeRequestReaders = []
                        }
                        get _progressiveDataLength() {
                            return this._fullRequestReader?._loaded ?? 0
                        }
                        getFullReader() {
                            return (0,
                            n.assert)(!this._fullRequestReader, "PDFNodeStream.getFullReader can only be called once."),
                            this._fullRequestReader = this.isFsUrl ? new g(this) : new f(this),
                            this._fullRequestReader
                        }
                        getRangeReader(e, t) {
                            if (t <= this._progressiveDataLength)
                                return null;
                            const r = this.isFsUrl ? new _(this,e,t) : new p(this,e,t);
                            return this._rangeRequestReaders.push(r),
                            r
                        }
                        cancelAllRequests(e) {
                            this._fullRequestReader && this._fullRequestReader.cancel(e);
                            for (const t of this._rangeRequestReaders.slice(0))
                                t.cancel(e)
                        }
                    }
                    ;
                    class h {
                        constructor(e) {
                            this._url = e.url,
                            this._done = !1,
                            this._storedError = null,
                            this.onProgress = null;
                            const t = e.source;
                            this._contentLength = t.length,
                            this._loaded = 0,
                            this._filename = null,
                            this._disableRange = t.disableRange || !1,
                            this._rangeChunkSize = t.rangeChunkSize,
                            this._rangeChunkSize || this._disableRange || (this._disableRange = !0),
                            this._isStreamingSupported = !t.disableStream,
                            this._isRangeSupported = !t.disableRange,
                            this._readableStream = null,
                            this._readCapability = (0,
                            n.createPromiseCapability)(),
                            this._headersCapability = (0,
                            n.createPromiseCapability)()
                        }
                        get headersReady() {
                            return this._headersCapability.promise
                        }
                        get filename() {
                            return this._filename
                        }
                        get contentLength() {
                            return this._contentLength
                        }
                        get isRangeSupported() {
                            return this._isRangeSupported
                        }
                        get isStreamingSupported() {
                            return this._isStreamingSupported
                        }
                        async read() {
                            if (await this._readCapability.promise,
                            this._done)
                                return {
                                    value: void 0,
                                    done: !0
                                };
                            if (this._storedError)
                                throw this._storedError;
                            const e = this._readableStream.read();
                            return null === e ? (this._readCapability = (0,
                            n.createPromiseCapability)(),
                            this.read()) : (this._loaded += e.length,
                            this.onProgress && this.onProgress({
                                loaded: this._loaded,
                                total: this._contentLength
                            }),
                            {
                                value: new Uint8Array(e).buffer,
                                done: !1
                            })
                        }
                        cancel(e) {
                            this._readableStream ? this._readableStream.destroy(e) : this._error(e)
                        }
                        _error(e) {
                            this._storedError = e,
                            this._readCapability.resolve()
                        }
                        _setReadableStream(e) {
                            this._readableStream = e,
                            e.on("readable", ( () => {
                                this._readCapability.resolve()
                            }
                            )),
                            e.on("end", ( () => {
                                e.destroy(),
                                this._done = !0,
                                this._readCapability.resolve()
                            }
                            )),
                            e.on("error", (e => {
                                this._error(e)
                            }
                            )),
                            !this._isStreamingSupported && this._isRangeSupported && this._error(new n.AbortException("streaming is disabled")),
                            this._storedError && this._readableStream.destroy(this._storedError)
                        }
                    }
                    class d {
                        constructor(e) {
                            this._url = e.url,
                            this._done = !1,
                            this._storedError = null,
                            this.onProgress = null,
                            this._loaded = 0,
                            this._readableStream = null,
                            this._readCapability = (0,
                            n.createPromiseCapability)();
                            const t = e.source;
                            this._isStreamingSupported = !t.disableStream
                        }
                        get isStreamingSupported() {
                            return this._isStreamingSupported
                        }
                        async read() {
                            if (await this._readCapability.promise,
                            this._done)
                                return {
                                    value: void 0,
                                    done: !0
                                };
                            if (this._storedError)
                                throw this._storedError;
                            const e = this._readableStream.read();
                            return null === e ? (this._readCapability = (0,
                            n.createPromiseCapability)(),
                            this.read()) : (this._loaded += e.length,
                            this.onProgress && this.onProgress({
                                loaded: this._loaded
                            }),
                            {
                                value: new Uint8Array(e).buffer,
                                done: !1
                            })
                        }
                        cancel(e) {
                            this._readableStream ? this._readableStream.destroy(e) : this._error(e)
                        }
                        _error(e) {
                            this._storedError = e,
                            this._readCapability.resolve()
                        }
                        _setReadableStream(e) {
                            this._readableStream = e,
                            e.on("readable", ( () => {
                                this._readCapability.resolve()
                            }
                            )),
                            e.on("end", ( () => {
                                e.destroy(),
                                this._done = !0,
                                this._readCapability.resolve()
                            }
                            )),
                            e.on("error", (e => {
                                this._error(e)
                            }
                            )),
                            this._storedError && this._readableStream.destroy(this._storedError)
                        }
                    }
                    function u(e, t) {
                        return {
                            protocol: e.protocol,
                            auth: e.auth,
                            host: e.hostname,
                            port: e.port,
                            path: e.path,
                            method: "GET",
                            headers: t
                        }
                    }
                    class f extends h {
                        constructor(e) {
                            super(e);
                            const t = t => {
                                if (404 === t.statusCode) {
                                    const e = new n.MissingPDFException(`Missing PDF "${this._url}".`);
                                    return this._storedError = e,
                                    void this._headersCapability.reject(e)
                                }
                                this._headersCapability.resolve(),
                                this._setReadableStream(t);
                                const r = e => this._readableStream.headers[e.toLowerCase()]
                                  , {allowRangeRequests: s, suggestedLength: a} = (0,
                                i.validateRangeRequestCapabilities)({
                                    getResponseHeader: r,
                                    isHttp: e.isHttp,
                                    rangeChunkSize: this._rangeChunkSize,
                                    disableRange: this._disableRange
                                });
                                this._isRangeSupported = s,
                                this._contentLength = a || this._contentLength,
                                this._filename = (0,
                                i.extractFilenameFromHeader)(r)
                            }
                            ;
                            this._request = null,
                            "http:" === this._url.protocol ? this._request = a.request(u(this._url, e.httpHeaders), t) : this._request = o.request(u(this._url, e.httpHeaders), t),
                            this._request.on("error", (e => {
                                this._storedError = e,
                                this._headersCapability.reject(e)
                            }
                            )),
                            this._request.end()
                        }
                    }
                    class p extends d {
                        constructor(e, t, r) {
                            super(e),
                            this._httpHeaders = {};
                            for (const n in e.httpHeaders) {
                                const t = e.httpHeaders[n];
                                "undefined" !== typeof t && (this._httpHeaders[n] = t)
                            }
                            this._httpHeaders.Range = `bytes=${t}-${r - 1}`;
                            const i = e => {
                                if (404 !== e.statusCode)
                                    this._setReadableStream(e);
                                else {
                                    const e = new n.MissingPDFException(`Missing PDF "${this._url}".`);
                                    this._storedError = e
                                }
                            }
                            ;
                            this._request = null,
                            "http:" === this._url.protocol ? this._request = a.request(u(this._url, this._httpHeaders), i) : this._request = o.request(u(this._url, this._httpHeaders), i),
                            this._request.on("error", (e => {
                                this._storedError = e
                            }
                            )),
                            this._request.end()
                        }
                    }
                    class g extends h {
                        constructor(e) {
                            super(e);
                            let t = decodeURIComponent(this._url.path);
                            c.test(this._url.href) && (t = t.replace(/^\//, "")),
                            s.lstat(t, ( (e, r) => {
                                if (e)
                                    return "ENOENT" === e.code && (e = new n.MissingPDFException(`Missing PDF "${t}".`)),
                                    this._storedError = e,
                                    void this._headersCapability.reject(e);
                                this._contentLength = r.size,
                                this._setReadableStream(s.createReadStream(t)),
                                this._headersCapability.resolve()
                            }
                            ))
                        }
                    }
                    class _ extends d {
                        constructor(e, t, r) {
                            super(e);
                            let n = decodeURIComponent(this._url.path);
                            c.test(this._url.href) && (n = n.replace(/^\//, "")),
                            this._setReadableStream(s.createReadStream(n, {
                                start: t,
                                end: r - 1
                            }))
                        }
                    }
                }
                , (e, t, r) => {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }),
                    t.createResponseStatusError = function(e, t) {
                        return 404 === e || 0 === e && t.startsWith("file:") ? new n.MissingPDFException('Missing PDF "' + t + '".') : new n.UnexpectedResponseException(`Unexpected server response (${e}) while retrieving PDF "${t}".`,e)
                    }
                    ,
                    t.extractFilenameFromHeader = function(e) {
                        const t = e("Content-Disposition");
                        if (t) {
                            let e = (0,
                            i.getFilenameFromContentDispositionHeader)(t);
                            if (e.includes("%"))
                                try {
                                    e = decodeURIComponent(e)
                                } catch (r) {}
                            if ((0,
                            s.isPdfFile)(e))
                                return e
                        }
                        return null
                    }
                    ,
                    t.validateRangeRequestCapabilities = function({getResponseHeader: e, isHttp: t, rangeChunkSize: r, disableRange: n}) {
                        const i = {
                            allowRangeRequests: !1,
                            suggestedLength: void 0
                        }
                          , s = parseInt(e("Content-Length"), 10);
                        return Number.isInteger(s) ? (i.suggestedLength = s,
                        s <= 2 * r || n || !t || "bytes" !== e("Accept-Ranges") || "identity" !== (e("Content-Encoding") || "identity") || (i.allowRangeRequests = !0),
                        i) : i
                    }
                    ,
                    t.validateResponseStatus = function(e) {
                        return 200 === e || 206 === e
                    }
                    ;
                    var n = r(1)
                      , i = r(34)
                      , s = r(8)
                }
                , (e, t, r) => {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }),
                    t.getFilenameFromContentDispositionHeader = function(e) {
                        let t = !0
                          , r = i("filename\\*", "i").exec(e);
                        if (r) {
                            r = r[1];
                            let e = o(r);
                            return e = unescape(e),
                            e = l(e),
                            e = c(e),
                            a(e)
                        }
                        if (r = function(e) {
                            const t = [];
                            let r;
                            const n = i("filename\\*((?!0\\d)\\d+)(\\*?)", "ig");
                            for (; null !== (r = n.exec(e)); ) {
                                let[,e,n,i] = r;
                                if (e = parseInt(e, 10),
                                e in t) {
                                    if (0 === e)
                                        break
                                } else
                                    t[e] = [n, i]
                            }
                            const s = [];
                            for (let i = 0; i < t.length && i in t; ++i) {
                                let[e,r] = t[i];
                                r = o(r),
                                e && (r = unescape(r),
                                0 === i && (r = l(r))),
                                s.push(r)
                            }
                            return s.join("")
                        }(e),
                        r)
                            return a(c(r));
                        if (r = i("filename", "i").exec(e),
                        r) {
                            r = r[1];
                            let e = o(r);
                            return e = c(e),
                            a(e)
                        }
                        function i(e, t) {
                            return new RegExp("(?:^|;)\\s*" + e + '\\s*=\\s*([^";\\s][^;\\s]*|"(?:[^"\\\\]|\\\\"?)+"?)',t)
                        }
                        function s(e, r) {
                            if (e) {
                                if (!/^[\x00-\xFF]+$/.test(r))
                                    return r;
                                try {
                                    const i = new TextDecoder(e,{
                                        fatal: !0
                                    })
                                      , s = (0,
                                    n.stringToBytes)(r);
                                    r = i.decode(s),
                                    t = !1
                                } catch (i) {}
                            }
                            return r
                        }
                        function a(e) {
                            return t && /[\x80-\xff]/.test(e) && (e = s("utf-8", e),
                            t && (e = s("iso-8859-1", e))),
                            e
                        }
                        function o(e) {
                            if (e.startsWith('"')) {
                                const t = e.slice(1).split('\\"');
                                for (let e = 0; e < t.length; ++e) {
                                    const r = t[e].indexOf('"');
                                    -1 !== r && (t[e] = t[e].slice(0, r),
                                    t.length = e + 1),
                                    t[e] = t[e].replace(/\\(.)/g, "$1")
                                }
                                e = t.join('"')
                            }
                            return e
                        }
                        function l(e) {
                            const t = e.indexOf("'");
                            return -1 === t ? e : s(e.slice(0, t), e.slice(t + 1).replace(/^[^']*'/, ""))
                        }
                        function c(e) {
                            return !e.startsWith("=?") || /[\x00-\x19\x80-\xff]/.test(e) ? e : e.replace(/=\?([\w-]*)\?([QqBb])\?((?:[^?]|\?(?!=))*)\?=/g, (function(e, t, r, n) {
                                if ("q" === r || "Q" === r)
                                    return s(t, n = (n = n.replace(/_/g, " ")).replace(/=([0-9a-fA-F]{2})/g, (function(e, t) {
                                        return String.fromCharCode(parseInt(t, 16))
                                    }
                                    )));
                                try {
                                    n = atob(n)
                                } catch (i) {}
                                return s(t, n)
                            }
                            ))
                        }
                        return ""
                    }
                    ;
                    var n = r(1)
                }
                , (e, t, r) => {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }),
                    t.PDFNetworkStream = void 0;
                    var n = r(1)
                      , i = r(33);
                    class s {
                        constructor(e, t={}) {
                            this.url = e,
                            this.isHttp = /^https?:/i.test(e),
                            this.httpHeaders = this.isHttp && t.httpHeaders || Object.create(null),
                            this.withCredentials = t.withCredentials || !1,
                            this.getXhr = t.getXhr || function() {
                                return new XMLHttpRequest
                            }
                            ,
                            this.currXhrId = 0,
                            this.pendingRequests = Object.create(null)
                        }
                        requestRange(e, t, r) {
                            const n = {
                                begin: e,
                                end: t
                            };
                            for (const i in r)
                                n[i] = r[i];
                            return this.request(n)
                        }
                        requestFull(e) {
                            return this.request(e)
                        }
                        request(e) {
                            const t = this.getXhr()
                              , r = this.currXhrId++
                              , n = this.pendingRequests[r] = {
                                xhr: t
                            };
                            t.open("GET", this.url),
                            t.withCredentials = this.withCredentials;
                            for (const i in this.httpHeaders) {
                                const e = this.httpHeaders[i];
                                "undefined" !== typeof e && t.setRequestHeader(i, e)
                            }
                            return this.isHttp && "begin"in e && "end"in e ? (t.setRequestHeader("Range", `bytes=${e.begin}-${e.end - 1}`),
                            n.expectedStatus = 206) : n.expectedStatus = 200,
                            t.responseType = "arraybuffer",
                            e.onError && (t.onerror = function(r) {
                                e.onError(t.status)
                            }
                            ),
                            t.onreadystatechange = this.onStateChange.bind(this, r),
                            t.onprogress = this.onProgress.bind(this, r),
                            n.onHeadersReceived = e.onHeadersReceived,
                            n.onDone = e.onDone,
                            n.onError = e.onError,
                            n.onProgress = e.onProgress,
                            t.send(null),
                            r
                        }
                        onProgress(e, t) {
                            const r = this.pendingRequests[e];
                            r && r.onProgress?.(t)
                        }
                        onStateChange(e, t) {
                            const r = this.pendingRequests[e];
                            if (!r)
                                return;
                            const i = r.xhr;
                            if (i.readyState >= 2 && r.onHeadersReceived && (r.onHeadersReceived(),
                            delete r.onHeadersReceived),
                            4 !== i.readyState)
                                return;
                            if (!(e in this.pendingRequests))
                                return;
                            if (delete this.pendingRequests[e],
                            0 === i.status && this.isHttp)
                                return void r.onError?.(i.status);
                            const s = i.status || 200;
                            if ((200 !== s || 206 !== r.expectedStatus) && s !== r.expectedStatus)
                                return void r.onError?.(i.status);
                            const a = function(e) {
                                const t = e.response;
                                return "string" !== typeof t ? t : (0,
                                n.stringToBytes)(t).buffer
                            }(i);
                            if (206 === s) {
                                const e = i.getResponseHeader("Content-Range")
                                  , t = /bytes (\d+)-(\d+)\/(\d+)/.exec(e);
                                r.onDone({
                                    begin: parseInt(t[1], 10),
                                    chunk: a
                                })
                            } else
                                a ? r.onDone({
                                    begin: 0,
                                    chunk: a
                                }) : r.onError?.(i.status)
                        }
                        getRequestXhr(e) {
                            return this.pendingRequests[e].xhr
                        }
                        isPendingRequest(e) {
                            return e in this.pendingRequests
                        }
                        abortRequest(e) {
                            const t = this.pendingRequests[e].xhr;
                            delete this.pendingRequests[e],
                            t.abort()
                        }
                    }
                    t.PDFNetworkStream = class {
                        constructor(e) {
                            this._source = e,
                            this._manager = new s(e.url,{
                                httpHeaders: e.httpHeaders,
                                withCredentials: e.withCredentials
                            }),
                            this._rangeChunkSize = e.rangeChunkSize,
                            this._fullRequestReader = null,
                            this._rangeRequestReaders = []
                        }
                        _onRangeRequestReaderClosed(e) {
                            const t = this._rangeRequestReaders.indexOf(e);
                            t >= 0 && this._rangeRequestReaders.splice(t, 1)
                        }
                        getFullReader() {
                            return (0,
                            n.assert)(!this._fullRequestReader, "PDFNetworkStream.getFullReader can only be called once."),
                            this._fullRequestReader = new a(this._manager,this._source),
                            this._fullRequestReader
                        }
                        getRangeReader(e, t) {
                            const r = new o(this._manager,e,t);
                            return r.onClosed = this._onRangeRequestReaderClosed.bind(this),
                            this._rangeRequestReaders.push(r),
                            r
                        }
                        cancelAllRequests(e) {
                            this._fullRequestReader?.cancel(e);
                            for (const t of this._rangeRequestReaders.slice(0))
                                t.cancel(e)
                        }
                    }
                    ;
                    class a {
                        constructor(e, t) {
                            this._manager = e;
                            const r = {
                                onHeadersReceived: this._onHeadersReceived.bind(this),
                                onDone: this._onDone.bind(this),
                                onError: this._onError.bind(this),
                                onProgress: this._onProgress.bind(this)
                            };
                            this._url = t.url,
                            this._fullRequestId = e.requestFull(r),
                            this._headersReceivedCapability = (0,
                            n.createPromiseCapability)(),
                            this._disableRange = t.disableRange || !1,
                            this._contentLength = t.length,
                            this._rangeChunkSize = t.rangeChunkSize,
                            this._rangeChunkSize || this._disableRange || (this._disableRange = !0),
                            this._isStreamingSupported = !1,
                            this._isRangeSupported = !1,
                            this._cachedChunks = [],
                            this._requests = [],
                            this._done = !1,
                            this._storedError = void 0,
                            this._filename = null,
                            this.onProgress = null
                        }
                        _onHeadersReceived() {
                            const e = this._fullRequestId
                              , t = this._manager.getRequestXhr(e)
                              , r = e => t.getResponseHeader(e)
                              , {allowRangeRequests: n, suggestedLength: s} = (0,
                            i.validateRangeRequestCapabilities)({
                                getResponseHeader: r,
                                isHttp: this._manager.isHttp,
                                rangeChunkSize: this._rangeChunkSize,
                                disableRange: this._disableRange
                            });
                            n && (this._isRangeSupported = !0),
                            this._contentLength = s || this._contentLength,
                            this._filename = (0,
                            i.extractFilenameFromHeader)(r),
                            this._isRangeSupported && this._manager.abortRequest(e),
                            this._headersReceivedCapability.resolve()
                        }
                        _onDone(e) {
                            if (e && (this._requests.length > 0 ? this._requests.shift().resolve({
                                value: e.chunk,
                                done: !1
                            }) : this._cachedChunks.push(e.chunk)),
                            this._done = !0,
                            !(this._cachedChunks.length > 0)) {
                                for (const e of this._requests)
                                    e.resolve({
                                        value: void 0,
                                        done: !0
                                    });
                                this._requests.length = 0
                            }
                        }
                        _onError(e) {
                            this._storedError = (0,
                            i.createResponseStatusError)(e, this._url),
                            this._headersReceivedCapability.reject(this._storedError);
                            for (const t of this._requests)
                                t.reject(this._storedError);
                            this._requests.length = 0,
                            this._cachedChunks.length = 0
                        }
                        _onProgress(e) {
                            this.onProgress?.({
                                loaded: e.loaded,
                                total: e.lengthComputable ? e.total : this._contentLength
                            })
                        }
                        get filename() {
                            return this._filename
                        }
                        get isRangeSupported() {
                            return this._isRangeSupported
                        }
                        get isStreamingSupported() {
                            return this._isStreamingSupported
                        }
                        get contentLength() {
                            return this._contentLength
                        }
                        get headersReady() {
                            return this._headersReceivedCapability.promise
                        }
                        async read() {
                            if (this._storedError)
                                throw this._storedError;
                            if (this._cachedChunks.length > 0)
                                return {
                                    value: this._cachedChunks.shift(),
                                    done: !1
                                };
                            if (this._done)
                                return {
                                    value: void 0,
                                    done: !0
                                };
                            const e = (0,
                            n.createPromiseCapability)();
                            return this._requests.push(e),
                            e.promise
                        }
                        cancel(e) {
                            this._done = !0,
                            this._headersReceivedCapability.reject(e);
                            for (const t of this._requests)
                                t.resolve({
                                    value: void 0,
                                    done: !0
                                });
                            this._requests.length = 0,
                            this._manager.isPendingRequest(this._fullRequestId) && this._manager.abortRequest(this._fullRequestId),
                            this._fullRequestReader = null
                        }
                    }
                    class o {
                        constructor(e, t, r) {
                            this._manager = e;
                            const n = {
                                onDone: this._onDone.bind(this),
                                onError: this._onError.bind(this),
                                onProgress: this._onProgress.bind(this)
                            };
                            this._url = e.url,
                            this._requestId = e.requestRange(t, r, n),
                            this._requests = [],
                            this._queuedChunk = null,
                            this._done = !1,
                            this._storedError = void 0,
                            this.onProgress = null,
                            this.onClosed = null
                        }
                        _close() {
                            this.onClosed?.(this)
                        }
                        _onDone(e) {
                            const t = e.chunk;
                            this._requests.length > 0 ? this._requests.shift().resolve({
                                value: t,
                                done: !1
                            }) : this._queuedChunk = t,
                            this._done = !0;
                            for (const r of this._requests)
                                r.resolve({
                                    value: void 0,
                                    done: !0
                                });
                            this._requests.length = 0,
                            this._close()
                        }
                        _onError(e) {
                            this._storedError = (0,
                            i.createResponseStatusError)(e, this._url);
                            for (const t of this._requests)
                                t.reject(this._storedError);
                            this._requests.length = 0,
                            this._queuedChunk = null
                        }
                        _onProgress(e) {
                            this.isStreamingSupported || this.onProgress?.({
                                loaded: e.loaded
                            })
                        }
                        get isStreamingSupported() {
                            return !1
                        }
                        async read() {
                            if (this._storedError)
                                throw this._storedError;
                            if (null !== this._queuedChunk) {
                                const e = this._queuedChunk;
                                return this._queuedChunk = null,
                                {
                                    value: e,
                                    done: !1
                                }
                            }
                            if (this._done)
                                return {
                                    value: void 0,
                                    done: !0
                                };
                            const e = (0,
                            n.createPromiseCapability)();
                            return this._requests.push(e),
                            e.promise
                        }
                        cancel(e) {
                            this._done = !0;
                            for (const t of this._requests)
                                t.resolve({
                                    value: void 0,
                                    done: !0
                                });
                            this._requests.length = 0,
                            this._manager.isPendingRequest(this._requestId) && this._manager.abortRequest(this._requestId),
                            this._close()
                        }
                    }
                }
                , (e, t, r) => {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }),
                    t.PDFFetchStream = void 0;
                    var n = r(1)
                      , i = r(33);
                    function s(e, t, r) {
                        return {
                            method: "GET",
                            headers: e,
                            signal: r.signal,
                            mode: "cors",
                            credentials: t ? "include" : "same-origin",
                            redirect: "follow"
                        }
                    }
                    function a(e) {
                        const t = new Headers;
                        for (const r in e) {
                            const n = e[r];
                            "undefined" !== typeof n && t.append(r, n)
                        }
                        return t
                    }
                    t.PDFFetchStream = class {
                        constructor(e) {
                            this.source = e,
                            this.isHttp = /^https?:/i.test(e.url),
                            this.httpHeaders = this.isHttp && e.httpHeaders || {},
                            this._fullRequestReader = null,
                            this._rangeRequestReaders = []
                        }
                        get _progressiveDataLength() {
                            return this._fullRequestReader?._loaded ?? 0
                        }
                        getFullReader() {
                            return (0,
                            n.assert)(!this._fullRequestReader, "PDFFetchStream.getFullReader can only be called once."),
                            this._fullRequestReader = new o(this),
                            this._fullRequestReader
                        }
                        getRangeReader(e, t) {
                            if (t <= this._progressiveDataLength)
                                return null;
                            const r = new l(this,e,t);
                            return this._rangeRequestReaders.push(r),
                            r
                        }
                        cancelAllRequests(e) {
                            this._fullRequestReader && this._fullRequestReader.cancel(e);
                            for (const t of this._rangeRequestReaders.slice(0))
                                t.cancel(e)
                        }
                    }
                    ;
                    class o {
                        constructor(e) {
                            this._stream = e,
                            this._reader = null,
                            this._loaded = 0,
                            this._filename = null;
                            const t = e.source;
                            this._withCredentials = t.withCredentials || !1,
                            this._contentLength = t.length,
                            this._headersCapability = (0,
                            n.createPromiseCapability)(),
                            this._disableRange = t.disableRange || !1,
                            this._rangeChunkSize = t.rangeChunkSize,
                            this._rangeChunkSize || this._disableRange || (this._disableRange = !0),
                            this._abortController = new AbortController,
                            this._isStreamingSupported = !t.disableStream,
                            this._isRangeSupported = !t.disableRange,
                            this._headers = a(this._stream.httpHeaders);
                            const r = t.url;
                            fetch(r, s(this._headers, this._withCredentials, this._abortController)).then((e => {
                                if (!(0,
                                i.validateResponseStatus)(e.status))
                                    throw (0,
                                    i.createResponseStatusError)(e.status, r);
                                this._reader = e.body.getReader(),
                                this._headersCapability.resolve();
                                const t = t => e.headers.get(t)
                                  , {allowRangeRequests: s, suggestedLength: a} = (0,
                                i.validateRangeRequestCapabilities)({
                                    getResponseHeader: t,
                                    isHttp: this._stream.isHttp,
                                    rangeChunkSize: this._rangeChunkSize,
                                    disableRange: this._disableRange
                                });
                                this._isRangeSupported = s,
                                this._contentLength = a || this._contentLength,
                                this._filename = (0,
                                i.extractFilenameFromHeader)(t),
                                !this._isStreamingSupported && this._isRangeSupported && this.cancel(new n.AbortException("Streaming is disabled."))
                            }
                            )).catch(this._headersCapability.reject),
                            this.onProgress = null
                        }
                        get headersReady() {
                            return this._headersCapability.promise
                        }
                        get filename() {
                            return this._filename
                        }
                        get contentLength() {
                            return this._contentLength
                        }
                        get isRangeSupported() {
                            return this._isRangeSupported
                        }
                        get isStreamingSupported() {
                            return this._isStreamingSupported
                        }
                        async read() {
                            await this._headersCapability.promise;
                            const {value: e, done: t} = await this._reader.read();
                            return t ? {
                                value: e,
                                done: t
                            } : (this._loaded += e.byteLength,
                            this.onProgress && this.onProgress({
                                loaded: this._loaded,
                                total: this._contentLength
                            }),
                            {
                                value: new Uint8Array(e).buffer,
                                done: !1
                            })
                        }
                        cancel(e) {
                            this._reader && this._reader.cancel(e),
                            this._abortController.abort()
                        }
                    }
                    class l {
                        constructor(e, t, r) {
                            this._stream = e,
                            this._reader = null,
                            this._loaded = 0;
                            const o = e.source;
                            this._withCredentials = o.withCredentials || !1,
                            this._readCapability = (0,
                            n.createPromiseCapability)(),
                            this._isStreamingSupported = !o.disableStream,
                            this._abortController = new AbortController,
                            this._headers = a(this._stream.httpHeaders),
                            this._headers.append("Range", `bytes=${t}-${r - 1}`);
                            const l = o.url;
                            fetch(l, s(this._headers, this._withCredentials, this._abortController)).then((e => {
                                if (!(0,
                                i.validateResponseStatus)(e.status))
                                    throw (0,
                                    i.createResponseStatusError)(e.status, l);
                                this._readCapability.resolve(),
                                this._reader = e.body.getReader()
                            }
                            )).catch(this._readCapability.reject),
                            this.onProgress = null
                        }
                        get isStreamingSupported() {
                            return this._isStreamingSupported
                        }
                        async read() {
                            await this._readCapability.promise;
                            const {value: e, done: t} = await this._reader.read();
                            return t ? {
                                value: e,
                                done: t
                            } : (this._loaded += e.byteLength,
                            this.onProgress && this.onProgress({
                                loaded: this._loaded
                            }),
                            {
                                value: new Uint8Array(e).buffer,
                                done: !1
                            })
                        }
                        cancel(e) {
                            this._reader && this._reader.cancel(e),
                            this._abortController.abort()
                        }
                    }
                }
                ]
                  , __webpack_module_cache__ = {};
                function __w_pdfjs_require__(e) {
                    var t = __webpack_module_cache__[e];
                    if (void 0 !== t)
                        return t.exports;
                    var r = __webpack_module_cache__[e] = {
                        exports: {}
                    };
                    return __webpack_modules__[e](r, r.exports, __w_pdfjs_require__),
                    r.exports
                }
                var __webpack_exports__ = {};
                return ( () => {
                    var e = __webpack_exports__;
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    }),
                    Object.defineProperty(e, "AnnotationEditorLayer", {
                        enumerable: !0,
                        get: function() {
                            return i.AnnotationEditorLayer
                        }
                    }),
                    Object.defineProperty(e, "AnnotationEditorParamsType", {
                        enumerable: !0,
                        get: function() {
                            return t.AnnotationEditorParamsType
                        }
                    }),
                    Object.defineProperty(e, "AnnotationEditorType", {
                        enumerable: !0,
                        get: function() {
                            return t.AnnotationEditorType
                        }
                    }),
                    Object.defineProperty(e, "AnnotationEditorUIManager", {
                        enumerable: !0,
                        get: function() {
                            return s.AnnotationEditorUIManager
                        }
                    }),
                    Object.defineProperty(e, "AnnotationLayer", {
                        enumerable: !0,
                        get: function() {
                            return a.AnnotationLayer
                        }
                    }),
                    Object.defineProperty(e, "AnnotationMode", {
                        enumerable: !0,
                        get: function() {
                            return t.AnnotationMode
                        }
                    }),
                    Object.defineProperty(e, "CMapCompressionType", {
                        enumerable: !0,
                        get: function() {
                            return t.CMapCompressionType
                        }
                    }),
                    Object.defineProperty(e, "GlobalWorkerOptions", {
                        enumerable: !0,
                        get: function() {
                            return o.GlobalWorkerOptions
                        }
                    }),
                    Object.defineProperty(e, "InvalidPDFException", {
                        enumerable: !0,
                        get: function() {
                            return t.InvalidPDFException
                        }
                    }),
                    Object.defineProperty(e, "LoopbackPort", {
                        enumerable: !0,
                        get: function() {
                            return r.LoopbackPort
                        }
                    }),
                    Object.defineProperty(e, "MissingPDFException", {
                        enumerable: !0,
                        get: function() {
                            return t.MissingPDFException
                        }
                    }),
                    Object.defineProperty(e, "OPS", {
                        enumerable: !0,
                        get: function() {
                            return t.OPS
                        }
                    }),
                    Object.defineProperty(e, "PDFDataRangeTransport", {
                        enumerable: !0,
                        get: function() {
                            return r.PDFDataRangeTransport
                        }
                    }),
                    Object.defineProperty(e, "PDFDateString", {
                        enumerable: !0,
                        get: function() {
                            return n.PDFDateString
                        }
                    }),
                    Object.defineProperty(e, "PDFWorker", {
                        enumerable: !0,
                        get: function() {
                            return r.PDFWorker
                        }
                    }),
                    Object.defineProperty(e, "PasswordResponses", {
                        enumerable: !0,
                        get: function() {
                            return t.PasswordResponses
                        }
                    }),
                    Object.defineProperty(e, "PermissionFlag", {
                        enumerable: !0,
                        get: function() {
                            return t.PermissionFlag
                        }
                    }),
                    Object.defineProperty(e, "PixelsPerInch", {
                        enumerable: !0,
                        get: function() {
                            return n.PixelsPerInch
                        }
                    }),
                    Object.defineProperty(e, "RenderingCancelledException", {
                        enumerable: !0,
                        get: function() {
                            return n.RenderingCancelledException
                        }
                    }),
                    Object.defineProperty(e, "SVGGraphics", {
                        enumerable: !0,
                        get: function() {
                            return h.SVGGraphics
                        }
                    }),
                    Object.defineProperty(e, "UNSUPPORTED_FEATURES", {
                        enumerable: !0,
                        get: function() {
                            return t.UNSUPPORTED_FEATURES
                        }
                    }),
                    Object.defineProperty(e, "UnexpectedResponseException", {
                        enumerable: !0,
                        get: function() {
                            return t.UnexpectedResponseException
                        }
                    }),
                    Object.defineProperty(e, "Util", {
                        enumerable: !0,
                        get: function() {
                            return t.Util
                        }
                    }),
                    Object.defineProperty(e, "VerbosityLevel", {
                        enumerable: !0,
                        get: function() {
                            return t.VerbosityLevel
                        }
                    }),
                    Object.defineProperty(e, "XfaLayer", {
                        enumerable: !0,
                        get: function() {
                            return d.XfaLayer
                        }
                    }),
                    Object.defineProperty(e, "build", {
                        enumerable: !0,
                        get: function() {
                            return r.build
                        }
                    }),
                    Object.defineProperty(e, "createPromiseCapability", {
                        enumerable: !0,
                        get: function() {
                            return t.createPromiseCapability
                        }
                    }),
                    Object.defineProperty(e, "createValidAbsoluteUrl", {
                        enumerable: !0,
                        get: function() {
                            return t.createValidAbsoluteUrl
                        }
                    }),
                    Object.defineProperty(e, "getDocument", {
                        enumerable: !0,
                        get: function() {
                            return r.getDocument
                        }
                    }),
                    Object.defineProperty(e, "getFilenameFromUrl", {
                        enumerable: !0,
                        get: function() {
                            return n.getFilenameFromUrl
                        }
                    }),
                    Object.defineProperty(e, "getPdfFilenameFromUrl", {
                        enumerable: !0,
                        get: function() {
                            return n.getPdfFilenameFromUrl
                        }
                    }),
                    Object.defineProperty(e, "getXfaPageViewport", {
                        enumerable: !0,
                        get: function() {
                            return n.getXfaPageViewport
                        }
                    }),
                    Object.defineProperty(e, "isPdfFile", {
                        enumerable: !0,
                        get: function() {
                            return n.isPdfFile
                        }
                    }),
                    Object.defineProperty(e, "loadScript", {
                        enumerable: !0,
                        get: function() {
                            return n.loadScript
                        }
                    }),
                    Object.defineProperty(e, "renderTextLayer", {
                        enumerable: !0,
                        get: function() {
                            return c.renderTextLayer
                        }
                    }),
                    Object.defineProperty(e, "shadow", {
                        enumerable: !0,
                        get: function() {
                            return t.shadow
                        }
                    }),
                    Object.defineProperty(e, "version", {
                        enumerable: !0,
                        get: function() {
                            return r.version
                        }
                    });
                    var t = __w_pdfjs_require__(1)
                      , r = __w_pdfjs_require__(4)
                      , n = __w_pdfjs_require__(8)
                      , i = __w_pdfjs_require__(22)
                      , s = __w_pdfjs_require__(7)
                      , a = __w_pdfjs_require__(27)
                      , o = __w_pdfjs_require__(15)
                      , l = __w_pdfjs_require__(3)
                      , c = __w_pdfjs_require__(30)
                      , h = __w_pdfjs_require__(31)
                      , d = __w_pdfjs_require__(29);
                    if (l.isNodeJS) {
                        const {PDFNodeStream: e} = __w_pdfjs_require__(32);
                        (0,
                        r.setPDFNetworkStreamFactory)((t => new e(t)))
                    } else {
                        const {PDFNetworkStream: e} = __w_pdfjs_require__(35)
                          , {PDFFetchStream: t} = __w_pdfjs_require__(36);
                        (0,
                        r.setPDFNetworkStreamFactory)((r => (0,
                        n.isValidFetchUrl)(r.url) ? new t(r) : new e(r)))
                    }
                }
                )(),
                __webpack_exports__
            }
            )(),
            module.exports = factory()
        }
        )(pdf$1);
        const pdf = pdf$1.exports;
        var pdf_1 = pdf
    }
}]);
//# sourceMappingURL=PDFViewer.b982567e.chunk.js.map
