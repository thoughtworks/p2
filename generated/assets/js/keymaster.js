//     keymaster.js
//     (c) 2011-2012 Thomas Fuchs
//     keymaster.js may be freely distributed under the MIT license.
(function(e) {
    function f(e, t) {
        var n = e.length;
        while (n--)
            if (e[n] === t)
                return n;
        return - 1
    }
    function l(e, t) {
        if (e.length != t.length)
            return !1;
        for (var n = 0; n < e.length; n++)
            if (e[n] !== t[n])
                return !1;
        return !0
    }
    function h(e) {
        for (t in r)
            r[t] = e[c[t]]
    }
    function p(e, t) {
        var i, o, u, l, c;
        i = e.keyCode, f(a, i)==-1 && a.push(i);
        if (i == 93 || i == 224)
            i = 91;
        if (i in r) {
            r[i]=!0;
            for (u in s)
                s[u] == i && (m[u]=!0);
            return 
        }
        h(e);
        if (!m.filter.call(this, e))
            return;
        if (!(i in n))
            return;
        for (l = 0; l < n[i].length; l++) {
            o = n[i][l];
            if (o.scope == t || o.scope == "all") {
                c = o.mods.length > 0;
                for (u in r)
                    if (!r[u] && f(o.mods, + u)>-1 || r[u] && f(o.mods, + u)==-1)
                        c=!1;
                (o.mods.length == 0&&!r[16]&&!r[18]&&!r[17]&&!r[91] || c) && o.method(e, o)===!1 && (e.preventDefault ? e.preventDefault() : e.returnValue=!1, e.stopPropagation && e.stopPropagation(), e.cancelBubble && (e.cancelBubble=!0))
            }
        }
    }
    function d(e) {
        var t = e.keyCode, n, i = f(a, t);
        i >= 0 && a.splice(i, 1);
        if (t == 93 || t == 224)
            t = 91;
        if (t in r) {
            r[t]=!1;
            for (n in s)
                s[n] == t && (m[n]=!1)
        }
    }
    function v() {
        for (t in r)
            r[t]=!1;
        for (t in s)
            m[t]=!1
    }
    function m(e, t, r) {
        var i, s, o, a;
        i = T(e), r === undefined && (r = t, t = "all");
        for (o = 0; o < i.length; o++)
            s = [], e = i[o].split("+"), e.length > 1 && (s = N(e), e = [e[e.length - 1]]), e = e[0], e = u(e), e in n || (n[e] = []), n[e].push({
                shortcut: i[o],
                scope: t,
                method: r,
                key: i[o],
                mods: s
            })
    }
    function g(e, t) {
        var r = e.split("+"), i = [], s, o;
        r.length > 1 && (i = N(r), e = r[r.length - 1]), e = u(e), t === undefined && (t = S());
        if (!n[e])
            return;
        for (s in n[e])
            o = n[e][s], o.scope === t && l(o.mods, i) && (n[e][s] = {})
    }
    function y(e) {
        return typeof e == "string" && (e = u(e)), f(a, e)!=-1
    }
    function b() {
        return a.slice(0)
    }
    function w(e) {
        var t = (e.target || e.srcElement).tagName;
        return t != "INPUT" && t != "SELECT" && t != "TEXTAREA"
    }
    function E(e) {
        i = e || "all"
    }
    function S() {
        return i || "all"
    }
    function x(e) {
        var t, r, i;
        for (t in n) {
            r = n[t];
            for (i = 0; i < r.length;)
                r[i].scope === e ? r.splice(i, 1) : i++
        }
    }
    function T(e) {
        var t;
        return e = e.replace(/\s/g, ""), t = e.split(","), t[t.length - 1] == "" && (t[t.length - 2] += ","), t
    }
    function N(e) {
        var t = e.slice(0, e.length - 1);
        for (mi = 0; mi < t.length; mi++)
            t[mi] = s[t[mi]];
        return t
    }
    function C(e, t, n) {
        e.addEventListener ? e.addEventListener(t, n, !1) : e.attachEvent && e.attachEvent("on" + t, function() {
            n(window.event)
        })
    }
    function L() {
        var t = e.key;
        return e.key = k, t
    }
    var t, n = {}, r = {
        16: !1,
        18: !1,
        17: !1,
        91: !1
    }, i = "all", s = {
        "⇧": 16,
        shift: 16,
        "⌥": 18,
        alt: 18,
        option: 18,
        "⌃": 17,
        ctrl: 17,
        control: 17,
        "⌘": 91,
        command: 91
    }, o = {
        backspace: 8,
        tab: 9,
        clear: 12,
        enter: 13,
        "return": 13,
        esc: 27,
        escape: 27,
        space: 32,
        left: 37,
        up: 38,
        right: 39,
        down: 40,
        del: 46,
        "delete": 46,
        home: 36,
        end: 35,
        pageup: 33,
        pagedown: 34,
        ",": 188,
        ".": 190,
        "/": 191,
        "`": 192,
        "-": 189,
        "=": 187,
        ";": 186,
        "'": 222,
        "[": 219,
        "]": 221,
        "\\": 220
    }, u = function(e) {
        return o[e] || e.toUpperCase().charCodeAt(0)
    }, a = [];
    for (t = 1; t < 20; t++)
        o["f" + t] = 111 + t;
    var c = {
        16: "shiftKey",
        18: "altKey",
        17: "ctrlKey",
        91: "metaKey"
    };
    for (t in s)
        m[t]=!1;
    C(document, "keydown", function(e) {
        p(e, i)
    }), C(document, "keyup", d), C(window, "focus", v);
    var k = e.key;
    e.key = m, e.key.setScope = E, e.key.getScope = S, e.key.deleteScope = x, e.key.filter = w, e.key.isPressed = y, e.key.getPressedKeyCodes = b, e.key.noConflict = L, e.key.unbind = g, typeof module != "undefined" && (module.exports = key)
})(this);


