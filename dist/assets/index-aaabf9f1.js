import {
  g as Fa,
  c as Ga,
  b as Qr,
  j as Sn,
  R as U,
  a as Wa,
  r as u,
} from './index-d1e56e72.js';
function gt(e, t) {
  if (!(e instanceof t))
    throw new TypeError('Cannot call a class as a function');
}
function K(e) {
  '@babel/helpers - typeof';
  return (
    (K =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == 'function' &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? 'symbol'
              : typeof t;
          }),
    K(e)
  );
}
function Ua(e, t) {
  if (K(e) !== 'object' || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || 'default');
    if (K(n) !== 'object') return n;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (t === 'string' ? String : Number)(e);
}
function co(e) {
  var t = Ua(e, 'string');
  return K(t) === 'symbol' ? t : String(t);
}
function xn(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      'value' in n && (n.writable = !0),
      Object.defineProperty(e, co(n.key), n);
  }
}
function ht(e, t, r) {
  return (
    t && xn(e.prototype, t),
    r && xn(e, r),
    Object.defineProperty(e, 'prototype', { writable: !1 }),
    e
  );
}
function Tr(e, t) {
  return (
    (Tr = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, o) {
          return (n.__proto__ = o), n;
        }),
    Tr(e, t)
  );
}
function so(e, t) {
  if (typeof t != 'function' && t !== null)
    throw new TypeError('Super expression must either be null or a function');
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, 'prototype', { writable: !1 }),
    t && Tr(e, t);
}
function Ht(e) {
  return (
    (Ht = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    Ht(e)
  );
}
function Xa() {
  if (typeof Reflect > 'u' || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == 'function') return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {}),
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function Or(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return e;
}
function Va(e, t) {
  if (t && (K(t) === 'object' || typeof t == 'function')) return t;
  if (t !== void 0)
    throw new TypeError(
      'Derived constructors may only return object or undefined',
    );
  return Or(e);
}
function lo(e) {
  var t = Xa();
  return function () {
    var n = Ht(e),
      o;
    if (t) {
      var a = Ht(this).constructor;
      o = Reflect.construct(n, arguments, a);
    } else o = n.apply(this, arguments);
    return Va(this, o);
  };
}
var uo = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ (function (e) {
  (function () {
    var t = {}.hasOwnProperty;
    function r() {
      for (var n = [], o = 0; o < arguments.length; o++) {
        var a = arguments[o];
        if (a) {
          var i = typeof a;
          if (i === 'string' || i === 'number') n.push(a);
          else if (Array.isArray(a)) {
            if (a.length) {
              var c = r.apply(null, a);
              c && n.push(c);
            }
          } else if (i === 'object') {
            if (
              a.toString !== Object.prototype.toString &&
              !a.toString.toString().includes('[native code]')
            ) {
              n.push(a.toString());
              continue;
            }
            for (var l in a) t.call(a, l) && a[l] && n.push(l);
          }
        }
      }
      return n.join(' ');
    }
    e.exports ? ((r.default = r), (e.exports = r)) : (window.classNames = r);
  })();
})(uo);
var Ka = uo.exports;
const pe = Fa(Ka);
function Qe() {
  return (
    (Qe = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Qe.apply(this, arguments)
  );
}
var fo = { exports: {} },
  D = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var J = typeof Symbol == 'function' && Symbol.for,
  Zr = J ? Symbol.for('react.element') : 60103,
  Jr = J ? Symbol.for('react.portal') : 60106,
  Ft = J ? Symbol.for('react.fragment') : 60107,
  Wt = J ? Symbol.for('react.strict_mode') : 60108,
  Gt = J ? Symbol.for('react.profiler') : 60114,
  Ut = J ? Symbol.for('react.provider') : 60109,
  Xt = J ? Symbol.for('react.context') : 60110,
  en = J ? Symbol.for('react.async_mode') : 60111,
  Vt = J ? Symbol.for('react.concurrent_mode') : 60111,
  Kt = J ? Symbol.for('react.forward_ref') : 60112,
  qt = J ? Symbol.for('react.suspense') : 60113,
  qa = J ? Symbol.for('react.suspense_list') : 60120,
  Yt = J ? Symbol.for('react.memo') : 60115,
  Qt = J ? Symbol.for('react.lazy') : 60116,
  Ya = J ? Symbol.for('react.block') : 60121,
  Qa = J ? Symbol.for('react.fundamental') : 60117,
  Za = J ? Symbol.for('react.responder') : 60118,
  Ja = J ? Symbol.for('react.scope') : 60119;
function ue(e) {
  if (typeof e == 'object' && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Zr:
        switch (((e = e.type), e)) {
          case en:
          case Vt:
          case Ft:
          case Gt:
          case Wt:
          case qt:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case Xt:
              case Kt:
              case Qt:
              case Yt:
              case Ut:
                return e;
              default:
                return t;
            }
        }
      case Jr:
        return t;
    }
  }
}
function go(e) {
  return ue(e) === Vt;
}
D.AsyncMode = en;
D.ConcurrentMode = Vt;
D.ContextConsumer = Xt;
D.ContextProvider = Ut;
D.Element = Zr;
D.ForwardRef = Kt;
D.Fragment = Ft;
D.Lazy = Qt;
D.Memo = Yt;
D.Portal = Jr;
D.Profiler = Gt;
D.StrictMode = Wt;
D.Suspense = qt;
D.isAsyncMode = function (e) {
  return go(e) || ue(e) === en;
};
D.isConcurrentMode = go;
D.isContextConsumer = function (e) {
  return ue(e) === Xt;
};
D.isContextProvider = function (e) {
  return ue(e) === Ut;
};
D.isElement = function (e) {
  return typeof e == 'object' && e !== null && e.$$typeof === Zr;
};
D.isForwardRef = function (e) {
  return ue(e) === Kt;
};
D.isFragment = function (e) {
  return ue(e) === Ft;
};
D.isLazy = function (e) {
  return ue(e) === Qt;
};
D.isMemo = function (e) {
  return ue(e) === Yt;
};
D.isPortal = function (e) {
  return ue(e) === Jr;
};
D.isProfiler = function (e) {
  return ue(e) === Gt;
};
D.isStrictMode = function (e) {
  return ue(e) === Wt;
};
D.isSuspense = function (e) {
  return ue(e) === qt;
};
D.isValidElementType = function (e) {
  return (
    typeof e == 'string' ||
    typeof e == 'function' ||
    e === Ft ||
    e === Vt ||
    e === Gt ||
    e === Wt ||
    e === qt ||
    e === qa ||
    (typeof e == 'object' &&
      e !== null &&
      (e.$$typeof === Qt ||
        e.$$typeof === Yt ||
        e.$$typeof === Ut ||
        e.$$typeof === Xt ||
        e.$$typeof === Kt ||
        e.$$typeof === Qa ||
        e.$$typeof === Za ||
        e.$$typeof === Ja ||
        e.$$typeof === Ya))
  );
};
D.typeOf = ue;
fo.exports = D;
var ei = fo.exports,
  Ar = {},
  ti = function (t) {};
function ri(e, t) {}
function ni(e, t) {}
function oi() {
  Ar = {};
}
function ho(e, t, r) {
  !t && !Ar[r] && (e(!1, r), (Ar[r] = !0));
}
function pt(e, t) {
  ho(ri, e, t);
}
function ai(e, t) {
  ho(ni, e, t);
}
pt.preMessage = ti;
pt.resetWarned = oi;
pt.noteOnce = ai;
function G(e, t, r) {
  return (
    (t = co(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function Cn(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function I(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Cn(Object(r), !0).forEach(function (n) {
          G(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : Cn(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function po(e, t, r) {
  var n = u.useRef({});
  return (
    (!('value' in n.current) || r(n.current.condition, t)) &&
      ((n.current.value = e()), (n.current.condition = t)),
    n.current.value
  );
}
function vo(e, t) {
  typeof e == 'function'
    ? e(t)
    : K(e) === 'object' && e && 'current' in e && (e.current = t);
}
function mo() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  var n = t.filter(function (o) {
    return o;
  });
  return n.length <= 1
    ? n[0]
    : function (o) {
        t.forEach(function (a) {
          vo(a, o);
        });
      };
}
function bo(e) {
  var t,
    r,
    n = ei.isMemo(e) ? e.type.type : e.type;
  return !(
    (typeof n == 'function' &&
      !((t = n.prototype) !== null && t !== void 0 && t.render)) ||
    (typeof e == 'function' &&
      !((r = e.prototype) !== null && r !== void 0 && r.render))
  );
}
function ii(e) {
  return e instanceof HTMLElement || e instanceof SVGElement;
}
function ci(e) {
  return ii(e) ? e : e instanceof U.Component ? Wa.findDOMNode(e) : null;
}
function si(e, t) {
  var r = I({}, e);
  return (
    Array.isArray(t) &&
      t.forEach(function (n) {
        delete r[n];
      }),
    r
  );
}
function $r(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function li(e) {
  if (Array.isArray(e)) return $r(e);
}
function yo(e) {
  if (
    (typeof Symbol < 'u' && e[Symbol.iterator] != null) ||
    e['@@iterator'] != null
  )
    return Array.from(e);
}
function tn(e, t) {
  if (e) {
    if (typeof e == 'string') return $r(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === 'Object' && e.constructor && (r = e.constructor.name),
      r === 'Map' || r === 'Set')
    )
      return Array.from(e);
    if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return $r(e, t);
  }
}
function ui() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function De(e) {
  return li(e) || yo(e) || tn(e) || ui();
}
var So = function (t) {
    return +setTimeout(t, 16);
  },
  xo = function (t) {
    return clearTimeout(t);
  };
typeof window < 'u' &&
  'requestAnimationFrame' in window &&
  ((So = function (t) {
    return window.requestAnimationFrame(t);
  }),
  (xo = function (t) {
    return window.cancelAnimationFrame(t);
  }));
var En = 0,
  rn = new Map();
function Co(e) {
  rn.delete(e);
}
var ze = function (t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  En += 1;
  var n = En;
  function o(a) {
    if (a === 0) Co(n), t();
    else {
      var i = So(function () {
        o(a - 1);
      });
      rn.set(n, i);
    }
  }
  return o(r), n;
};
ze.cancel = function (e) {
  var t = rn.get(e);
  return Co(t), xo(t);
};
function nn(e) {
  for (var t = 0, r, n = 0, o = e.length; o >= 4; ++n, o -= 4)
    (r =
      (e.charCodeAt(n) & 255) |
      ((e.charCodeAt(++n) & 255) << 8) |
      ((e.charCodeAt(++n) & 255) << 16) |
      ((e.charCodeAt(++n) & 255) << 24)),
      (r = (r & 65535) * 1540483477 + (((r >>> 16) * 59797) << 16)),
      (r ^= r >>> 24),
      (t =
        ((r & 65535) * 1540483477 + (((r >>> 16) * 59797) << 16)) ^
        ((t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)));
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(n + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(n + 1) & 255) << 8;
    case 1:
      (t ^= e.charCodeAt(n) & 255),
        (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16));
  }
  return (
    (t ^= t >>> 13),
    (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)),
    ((t ^ (t >>> 15)) >>> 0).toString(36)
  );
}
function fi(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    o,
    a;
  for (a = 0; a < n.length; a++)
    (o = n[a]), !(t.indexOf(o) >= 0) && (r[o] = e[o]);
  return r;
}
function ct(e, t) {
  if (e == null) return {};
  var r = fi(e, t),
    n,
    o;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (o = 0; o < a.length; o++)
      (n = a[o]),
        !(t.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, n) &&
          (r[n] = e[n]);
  }
  return r;
}
function di(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1,
    n = new Set();
  function o(a, i) {
    var c = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1,
      l = n.has(a);
    if ((pt(!l, 'Warning: There may be circular references'), l)) return !1;
    if (a === i) return !0;
    if (r && c > 1) return !1;
    n.add(a);
    var s = c + 1;
    if (Array.isArray(a)) {
      if (!Array.isArray(i) || a.length !== i.length) return !1;
      for (var f = 0; f < a.length; f++) if (!o(a[f], i[f], s)) return !1;
      return !0;
    }
    if (a && i && K(a) === 'object' && K(i) === 'object') {
      var d = Object.keys(a);
      return d.length !== Object.keys(i).length
        ? !1
        : d.every(function (h) {
            return o(a[h], i[h], s);
          });
    }
    return !1;
  }
  return o(e, t);
}
var wn = '%',
  gi = (function () {
    function e(t) {
      gt(this, e),
        G(this, 'instanceId', void 0),
        G(this, 'cache', new Map()),
        (this.instanceId = t);
    }
    return (
      ht(e, [
        {
          key: 'get',
          value: function (r) {
            return this.cache.get(r.join(wn)) || null;
          },
        },
        {
          key: 'update',
          value: function (r, n) {
            var o = r.join(wn),
              a = this.cache.get(o),
              i = n(a);
            i === null ? this.cache.delete(o) : this.cache.set(o, i);
          },
        },
      ]),
      e
    );
  })(),
  Rr = 'data-token-hash',
  Be = 'data-css-hash',
  Ke = '__cssinjs_instance__';
function hi() {
  var e = Math.random().toString(12).slice(2);
  if (typeof document < 'u' && document.head && document.body) {
    var t = document.body.querySelectorAll('style['.concat(Be, ']')) || [],
      r = document.head.firstChild;
    Array.from(t).forEach(function (o) {
      (o[Ke] = o[Ke] || e), o[Ke] === e && document.head.insertBefore(o, r);
    });
    var n = {};
    Array.from(document.querySelectorAll('style['.concat(Be, ']'))).forEach(
      function (o) {
        var a = o.getAttribute(Be);
        if (n[a]) {
          if (o[Ke] === e) {
            var i;
            (i = o.parentNode) === null || i === void 0 || i.removeChild(o);
          }
        } else n[a] = !0;
      },
    );
  }
  return new gi(e);
}
var pi = u.createContext({
  hashPriority: 'low',
  cache: hi(),
  defaultCache: !0,
});
const on = pi;
function ye() {
  return !!(
    typeof window < 'u' &&
    window.document &&
    window.document.createElement
  );
}
function vi(e, t) {
  if (!e) return !1;
  if (e.contains) return e.contains(t);
  for (var r = t; r; ) {
    if (r === e) return !0;
    r = r.parentNode;
  }
  return !1;
}
var Tn = 'data-rc-order',
  On = 'data-rc-priority',
  mi = 'rc-util-key',
  Pr = new Map();
function Eo() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
    t = e.mark;
  return t ? (t.startsWith('data-') ? t : 'data-'.concat(t)) : mi;
}
function Zt(e) {
  if (e.attachTo) return e.attachTo;
  var t = document.querySelector('head');
  return t || document.body;
}
function bi(e) {
  return e === 'queue' ? 'prependQueue' : e ? 'prepend' : 'append';
}
function wo(e) {
  return Array.from((Pr.get(e) || e).children).filter(function (t) {
    return t.tagName === 'STYLE';
  });
}
function To(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!ye()) return null;
  var r = t.csp,
    n = t.prepend,
    o = t.priority,
    a = o === void 0 ? 0 : o,
    i = bi(n),
    c = i === 'prependQueue',
    l = document.createElement('style');
  l.setAttribute(Tn, i),
    c && a && l.setAttribute(On, ''.concat(a)),
    r != null && r.nonce && (l.nonce = r == null ? void 0 : r.nonce),
    (l.innerHTML = e);
  var s = Zt(t),
    f = s.firstChild;
  if (n) {
    if (c) {
      var d = wo(s).filter(function (h) {
        if (!['prepend', 'prependQueue'].includes(h.getAttribute(Tn)))
          return !1;
        var b = Number(h.getAttribute(On) || 0);
        return a >= b;
      });
      if (d.length) return s.insertBefore(l, d[d.length - 1].nextSibling), l;
    }
    s.insertBefore(l, f);
  } else s.appendChild(l);
  return l;
}
function Oo(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    r = Zt(t);
  return wo(r).find(function (n) {
    return n.getAttribute(Eo(t)) === e;
  });
}
function Ao(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    r = Oo(e, t);
  if (r) {
    var n = Zt(t);
    n.removeChild(r);
  }
}
function yi(e, t) {
  var r = Pr.get(e);
  if (!r || !vi(document, r)) {
    var n = To('', t),
      o = n.parentNode;
    Pr.set(e, o), e.removeChild(n);
  }
}
function st(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
    n = Zt(r);
  yi(n, r);
  var o = Oo(t, r);
  if (o) {
    var a, i;
    if (
      (a = r.csp) !== null &&
      a !== void 0 &&
      a.nonce &&
      o.nonce !== ((i = r.csp) === null || i === void 0 ? void 0 : i.nonce)
    ) {
      var c;
      o.nonce = (c = r.csp) === null || c === void 0 ? void 0 : c.nonce;
    }
    return o.innerHTML !== e && (o.innerHTML = e), o;
  }
  var l = To(e, r);
  return l.setAttribute(Eo(r), t), l;
}
function $o(e) {
  if (Array.isArray(e)) return e;
}
function Si(e, t) {
  var r =
    e == null
      ? null
      : (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator'];
  if (r != null) {
    var n,
      o,
      a,
      i,
      c = [],
      l = !0,
      s = !1;
    try {
      if (((a = (r = r.call(e)).next), t === 0)) {
        if (Object(r) !== r) return;
        l = !1;
      } else
        for (
          ;
          !(l = (n = a.call(r)).done) && (c.push(n.value), c.length !== t);
          l = !0
        );
    } catch (f) {
      (s = !0), (o = f);
    } finally {
      try {
        if (!l && r.return != null && ((i = r.return()), Object(i) !== i))
          return;
      } finally {
        if (s) throw o;
      }
    }
    return c;
  }
}
function Ro() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function V(e, t) {
  return $o(e) || Si(e, t) || tn(e, t) || Ro();
}
function xi(e, t) {
  if (e.length !== t.length) return !1;
  for (var r = 0; r < e.length; r++) if (e[r] !== t[r]) return !1;
  return !0;
}
var an = (function () {
  function e() {
    gt(this, e),
      G(this, 'cache', void 0),
      G(this, 'keys', void 0),
      G(this, 'cacheCallTimes', void 0),
      (this.cache = new Map()),
      (this.keys = []),
      (this.cacheCallTimes = 0);
  }
  return (
    ht(e, [
      {
        key: 'size',
        value: function () {
          return this.keys.length;
        },
      },
      {
        key: 'internalGet',
        value: function (r) {
          var n,
            o,
            a =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : !1,
            i = { map: this.cache };
          return (
            r.forEach(function (c) {
              if (!i) i = void 0;
              else {
                var l, s;
                i =
                  (l = i) === null ||
                  l === void 0 ||
                  (s = l.map) === null ||
                  s === void 0
                    ? void 0
                    : s.get(c);
              }
            }),
            (n = i) !== null &&
              n !== void 0 &&
              n.value &&
              a &&
              (i.value[1] = this.cacheCallTimes++),
            (o = i) === null || o === void 0 ? void 0 : o.value
          );
        },
      },
      {
        key: 'get',
        value: function (r) {
          var n;
          return (n = this.internalGet(r, !0)) === null || n === void 0
            ? void 0
            : n[0];
        },
      },
      {
        key: 'has',
        value: function (r) {
          return !!this.internalGet(r);
        },
      },
      {
        key: 'set',
        value: function (r, n) {
          var o = this;
          if (!this.has(r)) {
            if (this.size() + 1 > e.MAX_CACHE_SIZE + e.MAX_CACHE_OFFSET) {
              var a = this.keys.reduce(
                  function (s, f) {
                    var d = V(s, 2),
                      h = d[1];
                    return o.internalGet(f)[1] < h
                      ? [f, o.internalGet(f)[1]]
                      : s;
                  },
                  [this.keys[0], this.cacheCallTimes],
                ),
                i = V(a, 1),
                c = i[0];
              this.delete(c);
            }
            this.keys.push(r);
          }
          var l = this.cache;
          r.forEach(function (s, f) {
            if (f === r.length - 1)
              l.set(s, { value: [n, o.cacheCallTimes++] });
            else {
              var d = l.get(s);
              d ? d.map || (d.map = new Map()) : l.set(s, { map: new Map() }),
                (l = l.get(s).map);
            }
          });
        },
      },
      {
        key: 'deleteByPath',
        value: function (r, n) {
          var o = r.get(n[0]);
          if (n.length === 1) {
            var a;
            return (
              o.map ? r.set(n[0], { map: o.map }) : r.delete(n[0]),
              (a = o.value) === null || a === void 0 ? void 0 : a[0]
            );
          }
          var i = this.deleteByPath(o.map, n.slice(1));
          return (!o.map || o.map.size === 0) && !o.value && r.delete(n[0]), i;
        },
      },
      {
        key: 'delete',
        value: function (r) {
          if (this.has(r))
            return (
              (this.keys = this.keys.filter(function (n) {
                return !xi(n, r);
              })),
              this.deleteByPath(this.cache, r)
            );
        },
      },
    ]),
    e
  );
})();
G(an, 'MAX_CACHE_SIZE', 20);
G(an, 'MAX_CACHE_OFFSET', 5);
var An = 0,
  Po = (function () {
    function e(t) {
      gt(this, e),
        G(this, 'derivatives', void 0),
        G(this, 'id', void 0),
        (this.derivatives = Array.isArray(t) ? t : [t]),
        (this.id = An),
        t.length === 0 && (t.length > 0, void 0),
        (An += 1);
    }
    return (
      ht(e, [
        {
          key: 'getDerivativeToken',
          value: function (r) {
            return this.derivatives.reduce(
              function (n, o) {
                return o(r, n);
              },
              void 0,
            );
          },
        },
      ]),
      e
    );
  })(),
  lr = new an();
function jr(e) {
  var t = Array.isArray(e) ? e : [e];
  return lr.has(t) || lr.set(t, new Po(t)), lr.get(t);
}
var $n = new WeakMap();
function zt(e) {
  var t = $n.get(e) || '';
  return (
    t ||
      (Object.keys(e).forEach(function (r) {
        var n = e[r];
        (t += r),
          n instanceof Po
            ? (t += n.id)
            : n && K(n) === 'object'
            ? (t += zt(n))
            : (t += n);
      }),
      $n.set(e, t)),
    t
  );
}
function Ci(e, t) {
  return nn(''.concat(t, '_').concat(zt(e)));
}
var at = 'random-'
    .concat(Date.now(), '-')
    .concat(Math.random())
    .replace(/\./g, ''),
  jo = '_bAmBoO_';
function Ei(e, t, r) {
  if (ye()) {
    var n, o;
    st(e, at);
    var a = document.createElement('div');
    (a.style.position = 'fixed'),
      (a.style.left = '0'),
      (a.style.top = '0'),
      t == null || t(a),
      document.body.appendChild(a);
    var i = r
      ? r(a)
      : (n = getComputedStyle(a).content) === null || n === void 0
      ? void 0
      : n.includes(jo);
    return (
      (o = a.parentNode) === null || o === void 0 || o.removeChild(a), Ao(at), i
    );
  }
  return !1;
}
var ur = void 0;
function wi() {
  return (
    ur === void 0 &&
      (ur = Ei(
        '@layer '
          .concat(at, ' { .')
          .concat(at, ' { content: "')
          .concat(jo, '"!important; } }'),
        function (e) {
          e.className = at;
        },
      )),
    ur
  );
}
var Rn = ye() ? u.useLayoutEffect : u.useEffect,
  Ti = function (t, r) {
    var n = u.useRef(!0);
    Rn(function () {
      return t(n.current);
    }, r),
      Rn(function () {
        return (
          (n.current = !1),
          function () {
            n.current = !0;
          }
        );
      }, []);
  },
  Oi = I({}, Qr),
  Pn = Oi.useInsertionEffect,
  Ai = function (t, r, n) {
    u.useMemo(t, n),
      Ti(function () {
        return r(!0);
      }, n);
  },
  $i = Pn
    ? function (e, t, r) {
        return Pn(function () {
          return e(), t();
        }, r);
      }
    : Ai;
const Ri = $i;
var Pi = I({}, Qr),
  ji = Pi.useInsertionEffect,
  Ii = function (t) {
    var r = [],
      n = !1;
    function o(a) {
      n || r.push(a);
    }
    return (
      u.useEffect(function () {
        return (
          (n = !1),
          function () {
            (n = !0),
              r.length &&
                r.forEach(function (a) {
                  return a();
                });
          }
        );
      }, t),
      o
    );
  },
  Mi = function () {
    return function (t) {
      t();
    };
  },
  Li = typeof ji < 'u' ? Ii : Mi;
const _i = Li;
function Io(e, t, r, n, o) {
  var a = u.useContext(on),
    i = a.cache,
    c = [e].concat(De(t)),
    l = c.join('_'),
    s = _i([l]),
    f = function (S) {
      i.update(c, function (y) {
        var E = y || [],
          $ = V(E, 2),
          C = $[0],
          O = C === void 0 ? 0 : C,
          R = $[1],
          P = R,
          T = P || r(),
          m = [O, T];
        return S ? S(m) : m;
      });
    };
  u.useMemo(
    function () {
      f();
    },
    [l],
  );
  var d = i.get(c),
    h = d[1];
  return (
    Ri(
      function () {
        o == null || o(h);
      },
      function (b) {
        return (
          f(function (S) {
            var y = V(S, 2),
              E = y[0],
              $ = y[1];
            return b && E === 0 && (o == null || o(h)), [E + 1, $];
          }),
          function () {
            i.update(c, function (S) {
              var y = S || [],
                E = V(y, 2),
                $ = E[0],
                C = $ === void 0 ? 0 : $,
                O = E[1],
                R = C - 1;
              return R === 0
                ? (s(function () {
                    return n == null ? void 0 : n(O, !1);
                  }),
                  null)
                : [C - 1, O];
            });
          }
        );
      },
      [l],
    ),
    h
  );
}
var Bi = {},
  ki = 'css',
  Le = new Map();
function Hi(e) {
  Le.set(e, (Le.get(e) || 0) + 1);
}
function zi(e, t) {
  if (typeof document < 'u') {
    var r = document.querySelectorAll(
      'style['.concat(Rr, '="').concat(e, '"]'),
    );
    r.forEach(function (n) {
      if (n[Ke] === t) {
        var o;
        (o = n.parentNode) === null || o === void 0 || o.removeChild(n);
      }
    });
  }
}
var Ni = 0;
function Di(e, t) {
  Le.set(e, (Le.get(e) || 0) - 1);
  var r = Array.from(Le.keys()),
    n = r.filter(function (o) {
      var a = Le.get(o) || 0;
      return a <= 0;
    });
  r.length - n.length > Ni &&
    n.forEach(function (o) {
      zi(o, t), Le.delete(o);
    });
}
var Fi = function (t, r, n, o) {
  var a = n.getDerivativeToken(t),
    i = I(I({}, a), r);
  return o && (i = o(i)), i;
};
function Wi(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
    n = u.useContext(on),
    o = n.cache.instanceId,
    a = r.salt,
    i = a === void 0 ? '' : a,
    c = r.override,
    l = c === void 0 ? Bi : c,
    s = r.formatToken,
    f = r.getComputedToken,
    d = u.useMemo(
      function () {
        return Object.assign.apply(Object, [{}].concat(De(t)));
      },
      [t],
    ),
    h = u.useMemo(
      function () {
        return zt(d);
      },
      [d],
    ),
    b = u.useMemo(
      function () {
        return zt(l);
      },
      [l],
    ),
    S = Io(
      'token',
      [i, e.id, h, b],
      function () {
        var y = f ? f(d, l, e) : Fi(d, l, e, s),
          E = Ci(y, i);
        (y._tokenKey = E), Hi(E);
        var $ = ''.concat(ki, '-').concat(nn(E));
        return (y._hashId = $), [y, $];
      },
      function (y) {
        Di(y[0]._tokenKey, o);
      },
    );
  return S;
}
var Gi = {
    animationIterationCount: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  Mo = 'comm',
  Lo = 'rule',
  _o = 'decl',
  Ui = '@import',
  Xi = '@keyframes',
  Vi = '@layer',
  Ki = Math.abs,
  cn = String.fromCharCode;
function Bo(e) {
  return e.trim();
}
function It(e, t, r) {
  return e.replace(t, r);
}
function qi(e, t) {
  return e.indexOf(t);
}
function lt(e, t) {
  return e.charCodeAt(t) | 0;
}
function ut(e, t, r) {
  return e.slice(t, r);
}
function we(e) {
  return e.length;
}
function Yi(e) {
  return e.length;
}
function Ct(e, t) {
  return t.push(e), e;
}
var Jt = 1,
  Ze = 1,
  ko = 0,
  fe = 0,
  Q = 0,
  et = '';
function sn(e, t, r, n, o, a, i, c) {
  return {
    value: e,
    root: t,
    parent: r,
    type: n,
    props: o,
    children: a,
    line: Jt,
    column: Ze,
    length: i,
    return: '',
    siblings: c,
  };
}
function Qi() {
  return Q;
}
function Zi() {
  return (Q = fe > 0 ? lt(et, --fe) : 0), Ze--, Q === 10 && ((Ze = 1), Jt--), Q;
}
function ve() {
  return (
    (Q = fe < ko ? lt(et, fe++) : 0), Ze++, Q === 10 && ((Ze = 1), Jt++), Q
  );
}
function ke() {
  return lt(et, fe);
}
function Mt() {
  return fe;
}
function er(e, t) {
  return ut(et, e, t);
}
function Ir(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Ji(e) {
  return (Jt = Ze = 1), (ko = we((et = e))), (fe = 0), [];
}
function ec(e) {
  return (et = ''), e;
}
function fr(e) {
  return Bo(er(fe - 1, Mr(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function tc(e) {
  for (; (Q = ke()) && Q < 33; ) ve();
  return Ir(e) > 2 || Ir(Q) > 3 ? '' : ' ';
}
function rc(e, t) {
  for (
    ;
    --t &&
    ve() &&
    !(Q < 48 || Q > 102 || (Q > 57 && Q < 65) || (Q > 70 && Q < 97));

  );
  return er(e, Mt() + (t < 6 && ke() == 32 && ve() == 32));
}
function Mr(e) {
  for (; ve(); )
    switch (Q) {
      case e:
        return fe;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Mr(Q);
        break;
      case 40:
        e === 41 && Mr(e);
        break;
      case 92:
        ve();
        break;
    }
  return fe;
}
function nc(e, t) {
  for (; ve() && e + Q !== 47 + 10; )
    if (e + Q === 42 + 42 && ke() === 47) break;
  return '/*' + er(t, fe - 1) + '*' + cn(e === 47 ? e : ve());
}
function oc(e) {
  for (; !Ir(ke()); ) ve();
  return er(e, fe);
}
function ac(e) {
  return ec(Lt('', null, null, null, [''], (e = Ji(e)), 0, [0], e));
}
function Lt(e, t, r, n, o, a, i, c, l) {
  for (
    var s = 0,
      f = 0,
      d = i,
      h = 0,
      b = 0,
      S = 0,
      y = 1,
      E = 1,
      $ = 1,
      C = 0,
      O = '',
      R = o,
      P = a,
      T = n,
      m = O;
    E;

  )
    switch (((S = C), (C = ve()))) {
      case 40:
        if (S != 108 && lt(m, d - 1) == 58) {
          qi((m += It(fr(C), '&', '&\f')), '&\f') != -1 && ($ = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        m += fr(C);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        m += tc(S);
        break;
      case 92:
        m += rc(Mt() - 1, 7);
        continue;
      case 47:
        switch (ke()) {
          case 42:
          case 47:
            Ct(ic(nc(ve(), Mt()), t, r, l), l);
            break;
          default:
            m += '/';
        }
        break;
      case 123 * y:
        c[s++] = we(m) * $;
      case 125 * y:
      case 59:
      case 0:
        switch (C) {
          case 0:
          case 125:
            E = 0;
          case 59 + f:
            $ == -1 && (m = It(m, /\f/g, '')),
              b > 0 &&
                we(m) - d &&
                Ct(
                  b > 32
                    ? In(m + ';', n, r, d - 1, l)
                    : In(It(m, ' ', '') + ';', n, r, d - 2, l),
                  l,
                );
            break;
          case 59:
            m += ';';
          default:
            if (
              (Ct(
                (T = jn(m, t, r, s, f, o, c, O, (R = []), (P = []), d, a)),
                a,
              ),
              C === 123)
            )
              if (f === 0) Lt(m, t, T, T, R, a, d, c, P);
              else
                switch (h === 99 && lt(m, 3) === 110 ? 100 : h) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Lt(
                      e,
                      T,
                      T,
                      n && Ct(jn(e, T, T, 0, 0, o, c, O, o, (R = []), d, P), P),
                      o,
                      P,
                      d,
                      c,
                      n ? R : P,
                    );
                    break;
                  default:
                    Lt(m, T, T, T, [''], P, 0, c, P);
                }
        }
        (s = f = b = 0), (y = $ = 1), (O = m = ''), (d = i);
        break;
      case 58:
        (d = 1 + we(m)), (b = S);
      default:
        if (y < 1) {
          if (C == 123) --y;
          else if (C == 125 && y++ == 0 && Zi() == 125) continue;
        }
        switch (((m += cn(C)), C * y)) {
          case 38:
            $ = f > 0 ? 1 : ((m += '\f'), -1);
            break;
          case 44:
            (c[s++] = (we(m) - 1) * $), ($ = 1);
            break;
          case 64:
            ke() === 45 && (m += fr(ve())),
              (h = ke()),
              (f = d = we((O = m += oc(Mt())))),
              C++;
            break;
          case 45:
            S === 45 && we(m) == 2 && (y = 0);
        }
    }
  return a;
}
function jn(e, t, r, n, o, a, i, c, l, s, f, d) {
  for (
    var h = o - 1, b = o === 0 ? a : [''], S = Yi(b), y = 0, E = 0, $ = 0;
    y < n;
    ++y
  )
    for (var C = 0, O = ut(e, h + 1, (h = Ki((E = i[y])))), R = e; C < S; ++C)
      (R = Bo(E > 0 ? b[C] + ' ' + O : It(O, /&\f/g, b[C]))) && (l[$++] = R);
  return sn(e, t, r, o === 0 ? Lo : c, l, s, f, d);
}
function ic(e, t, r, n) {
  return sn(e, t, r, Mo, cn(Qi()), ut(e, 2, -2), 0, n);
}
function In(e, t, r, n, o) {
  return sn(e, t, r, _o, ut(e, 0, n), ut(e, n + 1, -1), n, o);
}
function Lr(e, t) {
  for (var r = '', n = 0; n < e.length; n++) r += t(e[n], n, e, t) || '';
  return r;
}
function cc(e, t, r, n) {
  switch (e.type) {
    case Vi:
      if (e.children.length) break;
    case Ui:
    case _o:
      return (e.return = e.return || e.value);
    case Mo:
      return '';
    case Xi:
      return (e.return = e.value + '{' + Lr(e.children, n) + '}');
    case Lo:
      if (!we((e.value = e.props.join(',')))) return '';
  }
  return we((r = Lr(e.children, n)))
    ? (e.return = e.value + '{' + r + '}')
    : '';
}
var Mn = 'data-ant-cssinjs-cache-path',
  Ho = '_FILE_STYLE__',
  He,
  zo = !0;
function sc() {
  if (!He && ((He = {}), ye())) {
    var e = document.createElement('div');
    (e.className = Mn),
      (e.style.position = 'fixed'),
      (e.style.visibility = 'hidden'),
      (e.style.top = '-9999px'),
      document.body.appendChild(e);
    var t = getComputedStyle(e).content || '';
    (t = t.replace(/^"/, '').replace(/"$/, '')),
      t.split(';').forEach(function (o) {
        var a = o.split(':'),
          i = V(a, 2),
          c = i[0],
          l = i[1];
        He[c] = l;
      });
    var r = document.querySelector('style['.concat(Mn, ']'));
    if (r) {
      var n;
      (zo = !1),
        (n = r.parentNode) === null || n === void 0 || n.removeChild(r);
    }
    document.body.removeChild(e);
  }
}
function lc(e) {
  return sc(), !!He[e];
}
function uc(e) {
  var t = He[e],
    r = null;
  if (t && ye())
    if (zo) r = Ho;
    else {
      var n = document.querySelector(
        'style['.concat(Be, '="').concat(He[e], '"]'),
      );
      n ? (r = n.innerHTML) : delete He[e];
    }
  return [r, t];
}
var Ln = ye(),
  fc = '_skip_check_',
  No = '_multi_value_';
function _n(e) {
  var t = Lr(ac(e), cc);
  return t.replace(/\{%%%\:[^;];}/g, ';');
}
function dc(e) {
  return K(e) === 'object' && e && (fc in e || No in e);
}
function gc(e, t, r) {
  if (!t) return e;
  var n = '.'.concat(t),
    o = r === 'low' ? ':where('.concat(n, ')') : n,
    a = e.split(',').map(function (i) {
      var c,
        l = i.trim().split(/\s+/),
        s = l[0] || '',
        f =
          ((c = s.match(/^\w+/)) === null || c === void 0 ? void 0 : c[0]) ||
          '';
      return (
        (s = ''.concat(f).concat(o).concat(s.slice(f.length))),
        [s].concat(De(l.slice(1))).join(' ')
      );
    });
  return a.join(',');
}
var hc = function e(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    n =
      arguments.length > 2 && arguments[2] !== void 0
        ? arguments[2]
        : { root: !0, parentSelectors: [] },
    o = n.root,
    a = n.injectHash,
    i = n.parentSelectors,
    c = r.hashId,
    l = r.layer;
  r.path;
  var s = r.hashPriority,
    f = r.transformers,
    d = f === void 0 ? [] : f;
  r.linters;
  var h = '',
    b = {};
  function S(O) {
    var R = O.getName(c);
    if (!b[R]) {
      var P = e(O.style, r, { root: !1, parentSelectors: i }),
        T = V(P, 1),
        m = T[0];
      b[R] = '@keyframes '.concat(O.getName(c)).concat(m);
    }
  }
  function y(O) {
    var R = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    return (
      O.forEach(function (P) {
        Array.isArray(P) ? y(P, R) : P && R.push(P);
      }),
      R
    );
  }
  var E = y(Array.isArray(t) ? t : [t]);
  if (
    (E.forEach(function (O) {
      var R = typeof O == 'string' && !o ? {} : O;
      if (typeof R == 'string')
        h += ''.concat(
          R,
          `
`,
        );
      else if (R._keyframe) S(R);
      else {
        var P = d.reduce(function (T, m) {
          var z;
          return (
            (m == null || (z = m.visit) === null || z === void 0
              ? void 0
              : z.call(m, T)) || T
          );
        }, R);
        Object.keys(P).forEach(function (T) {
          var m = P[T];
          if (
            K(m) === 'object' &&
            m &&
            (T !== 'animationName' || !m._keyframe) &&
            !dc(m)
          ) {
            var z = !1,
              j = T.trim(),
              L = !1;
            (o || a) && c
              ? j.startsWith('@')
                ? (z = !0)
                : (j = gc(T, c, s))
              : o && !c && (j === '&' || j === '') && ((j = ''), (L = !0));
            var B = e(m, r, {
                root: L,
                injectHash: z,
                parentSelectors: [].concat(De(i), [j]),
              }),
              k = V(B, 2),
              M = k[0],
              F = k[1];
            (b = I(I({}, b), F)), (h += ''.concat(j).concat(M));
          } else {
            let g = function (p, x) {
              var A = p.replace(/[A-Z]/g, function (_) {
                  return '-'.concat(_.toLowerCase());
                }),
                w = x;
              !Gi[p] &&
                typeof w == 'number' &&
                w !== 0 &&
                (w = ''.concat(w, 'px')),
                p === 'animationName' &&
                  x !== null &&
                  x !== void 0 &&
                  x._keyframe &&
                  (S(x), (w = x.getName(c))),
                (h += ''.concat(A, ':').concat(w, ';'));
            };
            var H,
              v =
                (H = m == null ? void 0 : m.value) !== null && H !== void 0
                  ? H
                  : m;
            K(m) === 'object' &&
            m !== null &&
            m !== void 0 &&
            m[No] &&
            Array.isArray(v)
              ? v.forEach(function (p) {
                  g(T, p);
                })
              : g(T, v);
          }
        });
      }
    }),
    !o)
  )
    h = '{'.concat(h, '}');
  else if (l && wi()) {
    var $ = l.split(','),
      C = $[$.length - 1].trim();
    (h = '@layer '.concat(C, ' {').concat(h, '}')),
      $.length > 1 && (h = '@layer '.concat(l, '{%%%:%}').concat(h));
  }
  return [h, b];
};
function pc(e, t) {
  return nn(''.concat(e.join('%')).concat(t));
}
function vc() {
  return null;
}
function _r(e, t) {
  var r = e.token,
    n = e.path,
    o = e.hashId,
    a = e.layer,
    i = e.nonce,
    c = e.clientOnly,
    l = e.order,
    s = l === void 0 ? 0 : l,
    f = u.useContext(on),
    d = f.autoClear;
  f.mock;
  var h = f.defaultCache,
    b = f.hashPriority,
    S = f.container,
    y = f.ssrInline,
    E = f.transformers,
    $ = f.linters,
    C = f.cache,
    O = r._tokenKey,
    R = [O].concat(De(n)),
    P = Ln,
    T = Io(
      'style',
      R,
      function () {
        var B = R.join('|');
        if (lc(B)) {
          var k = uc(B),
            M = V(k, 2),
            F = M[0],
            H = M[1];
          if (F) return [F, O, H, {}, c, s];
        }
        var v = t(),
          g = hc(v, {
            hashId: o,
            hashPriority: b,
            layer: a,
            path: n.join('-'),
            transformers: E,
            linters: $,
          }),
          p = V(g, 2),
          x = p[0],
          A = p[1],
          w = _n(x),
          _ = pc(R, w);
        return [w, O, _, A, c, s];
      },
      function (B, k) {
        var M = V(B, 3),
          F = M[2];
        (k || d) && Ln && Ao(F, { mark: Be });
      },
      function (B) {
        var k = V(B, 4),
          M = k[0];
        k[1];
        var F = k[2],
          H = k[3];
        if (P && M !== Ho) {
          var v = { mark: Be, prepend: 'queue', attachTo: S, priority: s },
            g = typeof i == 'function' ? i() : i;
          g && (v.csp = { nonce: g });
          var p = st(M, F, v);
          (p[Ke] = C.instanceId),
            p.setAttribute(Rr, O),
            Object.keys(H).forEach(function (x) {
              st(_n(H[x]), '_effect-'.concat(x), v);
            });
        }
      },
    ),
    m = V(T, 3),
    z = m[0],
    j = m[1],
    L = m[2];
  return function (B) {
    var k;
    if (!y || P || !h) k = u.createElement(vc, null);
    else {
      var M;
      k = u.createElement(
        'style',
        Qe({}, ((M = {}), G(M, Rr, j), G(M, Be, L), M), {
          dangerouslySetInnerHTML: { __html: z },
        }),
      );
    }
    return u.createElement(u.Fragment, null, k, B);
  };
}
function Xe(e) {
  return (e.notSplit = !0), e;
}
Xe(['borderTop', 'borderBottom']),
  Xe(['borderTop']),
  Xe(['borderBottom']),
  Xe(['borderLeft', 'borderRight']),
  Xe(['borderLeft']),
  Xe(['borderRight']);
var mc = u.createContext({});
const ln = mc;
function bc(e) {
  return $o(e) || yo(e) || tn(e) || Ro();
}
function Br(e, t) {
  for (var r = e, n = 0; n < t.length; n += 1) {
    if (r == null) return;
    r = r[t[n]];
  }
  return r;
}
function Do(e, t, r, n) {
  if (!t.length) return r;
  var o = bc(t),
    a = o[0],
    i = o.slice(1),
    c;
  return (
    !e && typeof a == 'number'
      ? (c = [])
      : Array.isArray(e)
      ? (c = De(e))
      : (c = I({}, e)),
    n && r === void 0 && i.length === 1
      ? delete c[a][i[0]]
      : (c[a] = Do(c[a], i, r, n)),
    c
  );
}
function dr(e, t, r) {
  var n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  return t.length && n && r === void 0 && !Br(e, t.slice(0, -1))
    ? e
    : Do(e, t, r, n);
}
function yc(e) {
  return (
    K(e) === 'object' &&
    e !== null &&
    Object.getPrototypeOf(e) === Object.prototype
  );
}
function Bn(e) {
  return Array.isArray(e) ? [] : {};
}
var Sc = typeof Reflect > 'u' ? Object.keys : Reflect.ownKeys;
function xc() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  var n = Bn(t[0]);
  return (
    t.forEach(function (o) {
      function a(i, c) {
        var l = new Set(c),
          s = Br(o, i),
          f = Array.isArray(s);
        if (f || yc(s)) {
          if (!l.has(s)) {
            l.add(s);
            var d = Br(n, i);
            f
              ? (n = dr(n, i, []))
              : (!d || K(d) !== 'object') && (n = dr(n, i, Bn(s))),
              Sc(s).forEach(function (h) {
                a([].concat(De(i), [h]), l);
              });
          }
        } else n = dr(n, i, s);
      }
      a([]);
    }),
    n
  );
}
const Cc = u.createContext(void 0),
  Ec = {
    items_per_page: '/ page',
    jump_to: 'Go to',
    jump_to_confirm: 'confirm',
    page: 'Page',
    prev_page: 'Previous Page',
    next_page: 'Next Page',
    prev_5: 'Previous 5 Pages',
    next_5: 'Next 5 Pages',
    prev_3: 'Previous 3 Pages',
    next_3: 'Next 3 Pages',
    page_size: 'Page Size',
  };
var wc = {
  locale: 'en_US',
  today: 'Today',
  now: 'Now',
  backToToday: 'Back to today',
  ok: 'OK',
  clear: 'Clear',
  month: 'Month',
  year: 'Year',
  timeSelect: 'select time',
  dateSelect: 'select date',
  weekSelect: 'Choose a week',
  monthSelect: 'Choose a month',
  yearSelect: 'Choose a year',
  decadeSelect: 'Choose a decade',
  yearFormat: 'YYYY',
  dateFormat: 'M/D/YYYY',
  dayFormat: 'D',
  dateTimeFormat: 'M/D/YYYY HH:mm:ss',
  monthBeforeYear: !0,
  previousMonth: 'Previous month (PageUp)',
  nextMonth: 'Next month (PageDown)',
  previousYear: 'Last year (Control + left)',
  nextYear: 'Next year (Control + right)',
  previousDecade: 'Last decade',
  nextDecade: 'Next decade',
  previousCentury: 'Last century',
  nextCentury: 'Next century',
};
const Tc = {
    placeholder: 'Select time',
    rangePlaceholder: ['Start time', 'End time'],
  },
  Fo = Tc,
  Oc = {
    lang: Object.assign(
      {
        placeholder: 'Select date',
        yearPlaceholder: 'Select year',
        quarterPlaceholder: 'Select quarter',
        monthPlaceholder: 'Select month',
        weekPlaceholder: 'Select week',
        rangePlaceholder: ['Start date', 'End date'],
        rangeYearPlaceholder: ['Start year', 'End year'],
        rangeQuarterPlaceholder: ['Start quarter', 'End quarter'],
        rangeMonthPlaceholder: ['Start month', 'End month'],
        rangeWeekPlaceholder: ['Start week', 'End week'],
      },
      wc,
    ),
    timePickerLocale: Object.assign({}, Fo),
  },
  kn = Oc,
  ce = '${label} is not a valid ${type}',
  Ac = {
    locale: 'en',
    Pagination: Ec,
    DatePicker: kn,
    TimePicker: Fo,
    Calendar: kn,
    global: { placeholder: 'Please select' },
    Table: {
      filterTitle: 'Filter menu',
      filterConfirm: 'OK',
      filterReset: 'Reset',
      filterEmptyText: 'No filters',
      filterCheckall: 'Select all items',
      filterSearchPlaceholder: 'Search in filters',
      emptyText: 'No data',
      selectAll: 'Select current page',
      selectInvert: 'Invert current page',
      selectNone: 'Clear all data',
      selectionAll: 'Select all data',
      sortTitle: 'Sort',
      expand: 'Expand row',
      collapse: 'Collapse row',
      triggerDesc: 'Click to sort descending',
      triggerAsc: 'Click to sort ascending',
      cancelSort: 'Click to cancel sorting',
    },
    Tour: { Next: 'Next', Previous: 'Previous', Finish: 'Finish' },
    Modal: { okText: 'OK', cancelText: 'Cancel', justOkText: 'OK' },
    Popconfirm: { okText: 'OK', cancelText: 'Cancel' },
    Transfer: {
      titles: ['', ''],
      searchPlaceholder: 'Search here',
      itemUnit: 'item',
      itemsUnit: 'items',
      remove: 'Remove',
      selectCurrent: 'Select current page',
      removeCurrent: 'Remove current page',
      selectAll: 'Select all data',
      removeAll: 'Remove all data',
      selectInvert: 'Invert current page',
    },
    Upload: {
      uploading: 'Uploading...',
      removeFile: 'Remove file',
      uploadError: 'Upload error',
      previewFile: 'Preview file',
      downloadFile: 'Download file',
    },
    Empty: { description: 'No data' },
    Icon: { icon: 'icon' },
    Text: { edit: 'Edit', copy: 'Copy', copied: 'Copied', expand: 'Expand' },
    PageHeader: { back: 'Back' },
    Form: {
      optional: '(optional)',
      defaultValidateMessages: {
        default: 'Field validation error for ${label}',
        required: 'Please enter ${label}',
        enum: '${label} must be one of [${enum}]',
        whitespace: '${label} cannot be a blank character',
        date: {
          format: '${label} date format is invalid',
          parse: '${label} cannot be converted to a date',
          invalid: '${label} is an invalid date',
        },
        types: {
          string: ce,
          method: ce,
          array: ce,
          object: ce,
          number: ce,
          date: ce,
          boolean: ce,
          integer: ce,
          float: ce,
          regexp: ce,
          email: ce,
          url: ce,
          hex: ce,
        },
        string: {
          len: '${label} must be ${len} characters',
          min: '${label} must be at least ${min} characters',
          max: '${label} must be up to ${max} characters',
          range: '${label} must be between ${min}-${max} characters',
        },
        number: {
          len: '${label} must be equal to ${len}',
          min: '${label} must be minimum ${min}',
          max: '${label} must be maximum ${max}',
          range: '${label} must be between ${min}-${max}',
        },
        array: {
          len: 'Must be ${len} ${label}',
          min: 'At least ${min} ${label}',
          max: 'At most ${max} ${label}',
          range: 'The amount of ${label} must be between ${min}-${max}',
        },
        pattern: { mismatch: '${label} does not match the pattern ${pattern}' },
      },
    },
    Image: { preview: 'Preview' },
    QRCode: { expired: 'QR code expired', refresh: 'Refresh' },
    ColorPicker: { presetEmpty: 'Empty' },
  },
  tr = Ac;
Object.assign({}, tr.Modal);
let _t = [];
const Hn = () =>
  _t.reduce((e, t) => Object.assign(Object.assign({}, e), t), tr.Modal);
function $c(e) {
  if (e) {
    const t = Object.assign({}, e);
    return (
      _t.push(t),
      Hn(),
      () => {
        (_t = _t.filter((r) => r !== t)), Hn();
      }
    );
  }
  Object.assign({}, tr.Modal);
}
const Rc = u.createContext(void 0),
  Wo = Rc,
  Pc = 'internalMark',
  jc = (e) => {
    const { locale: t = {}, children: r, _ANT_MARK__: n } = e;
    u.useEffect(() => $c(t && t.Modal), [t]);
    const o = u.useMemo(
      () => Object.assign(Object.assign({}, t), { exist: !0 }),
      [t],
    );
    return u.createElement(Wo.Provider, { value: o }, r);
  },
  Ic = jc,
  Mc = '5.9.0';
function te(e, t) {
  Lc(e) && (e = '100%');
  var r = _c(e);
  return (
    (e = t === 360 ? e : Math.min(t, Math.max(0, parseFloat(e)))),
    r && (e = parseInt(String(e * t), 10) / 100),
    Math.abs(e - t) < 1e-6
      ? 1
      : (t === 360
          ? (e = (e < 0 ? (e % t) + t : e % t) / parseFloat(String(t)))
          : (e = (e % t) / parseFloat(String(t))),
        e)
  );
}
function Et(e) {
  return Math.min(1, Math.max(0, e));
}
function Lc(e) {
  return typeof e == 'string' && e.indexOf('.') !== -1 && parseFloat(e) === 1;
}
function _c(e) {
  return typeof e == 'string' && e.indexOf('%') !== -1;
}
function Go(e) {
  return (e = parseFloat(e)), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function wt(e) {
  return e <= 1 ? ''.concat(Number(e) * 100, '%') : e;
}
function _e(e) {
  return e.length === 1 ? '0' + e : String(e);
}
function Bc(e, t, r) {
  return { r: te(e, 255) * 255, g: te(t, 255) * 255, b: te(r, 255) * 255 };
}
function zn(e, t, r) {
  (e = te(e, 255)), (t = te(t, 255)), (r = te(r, 255));
  var n = Math.max(e, t, r),
    o = Math.min(e, t, r),
    a = 0,
    i = 0,
    c = (n + o) / 2;
  if (n === o) (i = 0), (a = 0);
  else {
    var l = n - o;
    switch (((i = c > 0.5 ? l / (2 - n - o) : l / (n + o)), n)) {
      case e:
        a = (t - r) / l + (t < r ? 6 : 0);
        break;
      case t:
        a = (r - e) / l + 2;
        break;
      case r:
        a = (e - t) / l + 4;
        break;
    }
    a /= 6;
  }
  return { h: a, s: i, l: c };
}
function gr(e, t, r) {
  return (
    r < 0 && (r += 1),
    r > 1 && (r -= 1),
    r < 1 / 6
      ? e + (t - e) * (6 * r)
      : r < 1 / 2
      ? t
      : r < 2 / 3
      ? e + (t - e) * (2 / 3 - r) * 6
      : e
  );
}
function kc(e, t, r) {
  var n, o, a;
  if (((e = te(e, 360)), (t = te(t, 100)), (r = te(r, 100)), t === 0))
    (o = r), (a = r), (n = r);
  else {
    var i = r < 0.5 ? r * (1 + t) : r + t - r * t,
      c = 2 * r - i;
    (n = gr(c, i, e + 1 / 3)), (o = gr(c, i, e)), (a = gr(c, i, e - 1 / 3));
  }
  return { r: n * 255, g: o * 255, b: a * 255 };
}
function kr(e, t, r) {
  (e = te(e, 255)), (t = te(t, 255)), (r = te(r, 255));
  var n = Math.max(e, t, r),
    o = Math.min(e, t, r),
    a = 0,
    i = n,
    c = n - o,
    l = n === 0 ? 0 : c / n;
  if (n === o) a = 0;
  else {
    switch (n) {
      case e:
        a = (t - r) / c + (t < r ? 6 : 0);
        break;
      case t:
        a = (r - e) / c + 2;
        break;
      case r:
        a = (e - t) / c + 4;
        break;
    }
    a /= 6;
  }
  return { h: a, s: l, v: i };
}
function Hc(e, t, r) {
  (e = te(e, 360) * 6), (t = te(t, 100)), (r = te(r, 100));
  var n = Math.floor(e),
    o = e - n,
    a = r * (1 - t),
    i = r * (1 - o * t),
    c = r * (1 - (1 - o) * t),
    l = n % 6,
    s = [r, i, a, a, c, r][l],
    f = [c, r, r, i, a, a][l],
    d = [a, a, c, r, r, i][l];
  return { r: s * 255, g: f * 255, b: d * 255 };
}
function Hr(e, t, r, n) {
  var o = [
    _e(Math.round(e).toString(16)),
    _e(Math.round(t).toString(16)),
    _e(Math.round(r).toString(16)),
  ];
  return n &&
    o[0].startsWith(o[0].charAt(1)) &&
    o[1].startsWith(o[1].charAt(1)) &&
    o[2].startsWith(o[2].charAt(1))
    ? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0)
    : o.join('');
}
function zc(e, t, r, n, o) {
  var a = [
    _e(Math.round(e).toString(16)),
    _e(Math.round(t).toString(16)),
    _e(Math.round(r).toString(16)),
    _e(Nc(n)),
  ];
  return o &&
    a[0].startsWith(a[0].charAt(1)) &&
    a[1].startsWith(a[1].charAt(1)) &&
    a[2].startsWith(a[2].charAt(1)) &&
    a[3].startsWith(a[3].charAt(1))
    ? a[0].charAt(0) + a[1].charAt(0) + a[2].charAt(0) + a[3].charAt(0)
    : a.join('');
}
function Nc(e) {
  return Math.round(parseFloat(e) * 255).toString(16);
}
function Nn(e) {
  return se(e) / 255;
}
function se(e) {
  return parseInt(e, 16);
}
function Dc(e) {
  return { r: e >> 16, g: (e & 65280) >> 8, b: e & 255 };
}
var zr = {
  aliceblue: '#f0f8ff',
  antiquewhite: '#faebd7',
  aqua: '#00ffff',
  aquamarine: '#7fffd4',
  azure: '#f0ffff',
  beige: '#f5f5dc',
  bisque: '#ffe4c4',
  black: '#000000',
  blanchedalmond: '#ffebcd',
  blue: '#0000ff',
  blueviolet: '#8a2be2',
  brown: '#a52a2a',
  burlywood: '#deb887',
  cadetblue: '#5f9ea0',
  chartreuse: '#7fff00',
  chocolate: '#d2691e',
  coral: '#ff7f50',
  cornflowerblue: '#6495ed',
  cornsilk: '#fff8dc',
  crimson: '#dc143c',
  cyan: '#00ffff',
  darkblue: '#00008b',
  darkcyan: '#008b8b',
  darkgoldenrod: '#b8860b',
  darkgray: '#a9a9a9',
  darkgreen: '#006400',
  darkgrey: '#a9a9a9',
  darkkhaki: '#bdb76b',
  darkmagenta: '#8b008b',
  darkolivegreen: '#556b2f',
  darkorange: '#ff8c00',
  darkorchid: '#9932cc',
  darkred: '#8b0000',
  darksalmon: '#e9967a',
  darkseagreen: '#8fbc8f',
  darkslateblue: '#483d8b',
  darkslategray: '#2f4f4f',
  darkslategrey: '#2f4f4f',
  darkturquoise: '#00ced1',
  darkviolet: '#9400d3',
  deeppink: '#ff1493',
  deepskyblue: '#00bfff',
  dimgray: '#696969',
  dimgrey: '#696969',
  dodgerblue: '#1e90ff',
  firebrick: '#b22222',
  floralwhite: '#fffaf0',
  forestgreen: '#228b22',
  fuchsia: '#ff00ff',
  gainsboro: '#dcdcdc',
  ghostwhite: '#f8f8ff',
  goldenrod: '#daa520',
  gold: '#ffd700',
  gray: '#808080',
  green: '#008000',
  greenyellow: '#adff2f',
  grey: '#808080',
  honeydew: '#f0fff0',
  hotpink: '#ff69b4',
  indianred: '#cd5c5c',
  indigo: '#4b0082',
  ivory: '#fffff0',
  khaki: '#f0e68c',
  lavenderblush: '#fff0f5',
  lavender: '#e6e6fa',
  lawngreen: '#7cfc00',
  lemonchiffon: '#fffacd',
  lightblue: '#add8e6',
  lightcoral: '#f08080',
  lightcyan: '#e0ffff',
  lightgoldenrodyellow: '#fafad2',
  lightgray: '#d3d3d3',
  lightgreen: '#90ee90',
  lightgrey: '#d3d3d3',
  lightpink: '#ffb6c1',
  lightsalmon: '#ffa07a',
  lightseagreen: '#20b2aa',
  lightskyblue: '#87cefa',
  lightslategray: '#778899',
  lightslategrey: '#778899',
  lightsteelblue: '#b0c4de',
  lightyellow: '#ffffe0',
  lime: '#00ff00',
  limegreen: '#32cd32',
  linen: '#faf0e6',
  magenta: '#ff00ff',
  maroon: '#800000',
  mediumaquamarine: '#66cdaa',
  mediumblue: '#0000cd',
  mediumorchid: '#ba55d3',
  mediumpurple: '#9370db',
  mediumseagreen: '#3cb371',
  mediumslateblue: '#7b68ee',
  mediumspringgreen: '#00fa9a',
  mediumturquoise: '#48d1cc',
  mediumvioletred: '#c71585',
  midnightblue: '#191970',
  mintcream: '#f5fffa',
  mistyrose: '#ffe4e1',
  moccasin: '#ffe4b5',
  navajowhite: '#ffdead',
  navy: '#000080',
  oldlace: '#fdf5e6',
  olive: '#808000',
  olivedrab: '#6b8e23',
  orange: '#ffa500',
  orangered: '#ff4500',
  orchid: '#da70d6',
  palegoldenrod: '#eee8aa',
  palegreen: '#98fb98',
  paleturquoise: '#afeeee',
  palevioletred: '#db7093',
  papayawhip: '#ffefd5',
  peachpuff: '#ffdab9',
  peru: '#cd853f',
  pink: '#ffc0cb',
  plum: '#dda0dd',
  powderblue: '#b0e0e6',
  purple: '#800080',
  rebeccapurple: '#663399',
  red: '#ff0000',
  rosybrown: '#bc8f8f',
  royalblue: '#4169e1',
  saddlebrown: '#8b4513',
  salmon: '#fa8072',
  sandybrown: '#f4a460',
  seagreen: '#2e8b57',
  seashell: '#fff5ee',
  sienna: '#a0522d',
  silver: '#c0c0c0',
  skyblue: '#87ceeb',
  slateblue: '#6a5acd',
  slategray: '#708090',
  slategrey: '#708090',
  snow: '#fffafa',
  springgreen: '#00ff7f',
  steelblue: '#4682b4',
  tan: '#d2b48c',
  teal: '#008080',
  thistle: '#d8bfd8',
  tomato: '#ff6347',
  turquoise: '#40e0d0',
  violet: '#ee82ee',
  wheat: '#f5deb3',
  white: '#ffffff',
  whitesmoke: '#f5f5f5',
  yellow: '#ffff00',
  yellowgreen: '#9acd32',
};
function Ve(e) {
  var t = { r: 0, g: 0, b: 0 },
    r = 1,
    n = null,
    o = null,
    a = null,
    i = !1,
    c = !1;
  return (
    typeof e == 'string' && (e = Gc(e)),
    typeof e == 'object' &&
      (Ce(e.r) && Ce(e.g) && Ce(e.b)
        ? ((t = Bc(e.r, e.g, e.b)),
          (i = !0),
          (c = String(e.r).substr(-1) === '%' ? 'prgb' : 'rgb'))
        : Ce(e.h) && Ce(e.s) && Ce(e.v)
        ? ((n = wt(e.s)),
          (o = wt(e.v)),
          (t = Hc(e.h, n, o)),
          (i = !0),
          (c = 'hsv'))
        : Ce(e.h) &&
          Ce(e.s) &&
          Ce(e.l) &&
          ((n = wt(e.s)),
          (a = wt(e.l)),
          (t = kc(e.h, n, a)),
          (i = !0),
          (c = 'hsl')),
      Object.prototype.hasOwnProperty.call(e, 'a') && (r = e.a)),
    (r = Go(r)),
    {
      ok: i,
      format: e.format || c,
      r: Math.min(255, Math.max(t.r, 0)),
      g: Math.min(255, Math.max(t.g, 0)),
      b: Math.min(255, Math.max(t.b, 0)),
      a: r,
    }
  );
}
var Fc = '[-\\+]?\\d+%?',
  Wc = '[-\\+]?\\d*\\.\\d+%?',
  $e = '(?:'.concat(Wc, ')|(?:').concat(Fc, ')'),
  hr = '[\\s|\\(]+('
    .concat($e, ')[,|\\s]+(')
    .concat($e, ')[,|\\s]+(')
    .concat($e, ')\\s*\\)?'),
  pr = '[\\s|\\(]+('
    .concat($e, ')[,|\\s]+(')
    .concat($e, ')[,|\\s]+(')
    .concat($e, ')[,|\\s]+(')
    .concat($e, ')\\s*\\)?'),
  ge = {
    CSS_UNIT: new RegExp($e),
    rgb: new RegExp('rgb' + hr),
    rgba: new RegExp('rgba' + pr),
    hsl: new RegExp('hsl' + hr),
    hsla: new RegExp('hsla' + pr),
    hsv: new RegExp('hsv' + hr),
    hsva: new RegExp('hsva' + pr),
    hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
    hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  };
function Gc(e) {
  if (((e = e.trim().toLowerCase()), e.length === 0)) return !1;
  var t = !1;
  if (zr[e]) (e = zr[e]), (t = !0);
  else if (e === 'transparent')
    return { r: 0, g: 0, b: 0, a: 0, format: 'name' };
  var r = ge.rgb.exec(e);
  return r
    ? { r: r[1], g: r[2], b: r[3] }
    : ((r = ge.rgba.exec(e)),
      r
        ? { r: r[1], g: r[2], b: r[3], a: r[4] }
        : ((r = ge.hsl.exec(e)),
          r
            ? { h: r[1], s: r[2], l: r[3] }
            : ((r = ge.hsla.exec(e)),
              r
                ? { h: r[1], s: r[2], l: r[3], a: r[4] }
                : ((r = ge.hsv.exec(e)),
                  r
                    ? { h: r[1], s: r[2], v: r[3] }
                    : ((r = ge.hsva.exec(e)),
                      r
                        ? { h: r[1], s: r[2], v: r[3], a: r[4] }
                        : ((r = ge.hex8.exec(e)),
                          r
                            ? {
                                r: se(r[1]),
                                g: se(r[2]),
                                b: se(r[3]),
                                a: Nn(r[4]),
                                format: t ? 'name' : 'hex8',
                              }
                            : ((r = ge.hex6.exec(e)),
                              r
                                ? {
                                    r: se(r[1]),
                                    g: se(r[2]),
                                    b: se(r[3]),
                                    format: t ? 'name' : 'hex',
                                  }
                                : ((r = ge.hex4.exec(e)),
                                  r
                                    ? {
                                        r: se(r[1] + r[1]),
                                        g: se(r[2] + r[2]),
                                        b: se(r[3] + r[3]),
                                        a: Nn(r[4] + r[4]),
                                        format: t ? 'name' : 'hex8',
                                      }
                                    : ((r = ge.hex3.exec(e)),
                                      r
                                        ? {
                                            r: se(r[1] + r[1]),
                                            g: se(r[2] + r[2]),
                                            b: se(r[3] + r[3]),
                                            format: t ? 'name' : 'hex',
                                          }
                                        : !1)))))))));
}
function Ce(e) {
  return !!ge.CSS_UNIT.exec(String(e));
}
var le = (function () {
    function e(t, r) {
      t === void 0 && (t = ''), r === void 0 && (r = {});
      var n;
      if (t instanceof e) return t;
      typeof t == 'number' && (t = Dc(t)), (this.originalInput = t);
      var o = Ve(t);
      (this.originalInput = t),
        (this.r = o.r),
        (this.g = o.g),
        (this.b = o.b),
        (this.a = o.a),
        (this.roundA = Math.round(100 * this.a) / 100),
        (this.format = (n = r.format) !== null && n !== void 0 ? n : o.format),
        (this.gradientType = r.gradientType),
        this.r < 1 && (this.r = Math.round(this.r)),
        this.g < 1 && (this.g = Math.round(this.g)),
        this.b < 1 && (this.b = Math.round(this.b)),
        (this.isValid = o.ok);
    }
    return (
      (e.prototype.isDark = function () {
        return this.getBrightness() < 128;
      }),
      (e.prototype.isLight = function () {
        return !this.isDark();
      }),
      (e.prototype.getBrightness = function () {
        var t = this.toRgb();
        return (t.r * 299 + t.g * 587 + t.b * 114) / 1e3;
      }),
      (e.prototype.getLuminance = function () {
        var t = this.toRgb(),
          r,
          n,
          o,
          a = t.r / 255,
          i = t.g / 255,
          c = t.b / 255;
        return (
          a <= 0.03928
            ? (r = a / 12.92)
            : (r = Math.pow((a + 0.055) / 1.055, 2.4)),
          i <= 0.03928
            ? (n = i / 12.92)
            : (n = Math.pow((i + 0.055) / 1.055, 2.4)),
          c <= 0.03928
            ? (o = c / 12.92)
            : (o = Math.pow((c + 0.055) / 1.055, 2.4)),
          0.2126 * r + 0.7152 * n + 0.0722 * o
        );
      }),
      (e.prototype.getAlpha = function () {
        return this.a;
      }),
      (e.prototype.setAlpha = function (t) {
        return (
          (this.a = Go(t)), (this.roundA = Math.round(100 * this.a) / 100), this
        );
      }),
      (e.prototype.isMonochrome = function () {
        var t = this.toHsl().s;
        return t === 0;
      }),
      (e.prototype.toHsv = function () {
        var t = kr(this.r, this.g, this.b);
        return { h: t.h * 360, s: t.s, v: t.v, a: this.a };
      }),
      (e.prototype.toHsvString = function () {
        var t = kr(this.r, this.g, this.b),
          r = Math.round(t.h * 360),
          n = Math.round(t.s * 100),
          o = Math.round(t.v * 100);
        return this.a === 1
          ? 'hsv('.concat(r, ', ').concat(n, '%, ').concat(o, '%)')
          : 'hsva('
              .concat(r, ', ')
              .concat(n, '%, ')
              .concat(o, '%, ')
              .concat(this.roundA, ')');
      }),
      (e.prototype.toHsl = function () {
        var t = zn(this.r, this.g, this.b);
        return { h: t.h * 360, s: t.s, l: t.l, a: this.a };
      }),
      (e.prototype.toHslString = function () {
        var t = zn(this.r, this.g, this.b),
          r = Math.round(t.h * 360),
          n = Math.round(t.s * 100),
          o = Math.round(t.l * 100);
        return this.a === 1
          ? 'hsl('.concat(r, ', ').concat(n, '%, ').concat(o, '%)')
          : 'hsla('
              .concat(r, ', ')
              .concat(n, '%, ')
              .concat(o, '%, ')
              .concat(this.roundA, ')');
      }),
      (e.prototype.toHex = function (t) {
        return t === void 0 && (t = !1), Hr(this.r, this.g, this.b, t);
      }),
      (e.prototype.toHexString = function (t) {
        return t === void 0 && (t = !1), '#' + this.toHex(t);
      }),
      (e.prototype.toHex8 = function (t) {
        return t === void 0 && (t = !1), zc(this.r, this.g, this.b, this.a, t);
      }),
      (e.prototype.toHex8String = function (t) {
        return t === void 0 && (t = !1), '#' + this.toHex8(t);
      }),
      (e.prototype.toHexShortString = function (t) {
        return (
          t === void 0 && (t = !1),
          this.a === 1 ? this.toHexString(t) : this.toHex8String(t)
        );
      }),
      (e.prototype.toRgb = function () {
        return {
          r: Math.round(this.r),
          g: Math.round(this.g),
          b: Math.round(this.b),
          a: this.a,
        };
      }),
      (e.prototype.toRgbString = function () {
        var t = Math.round(this.r),
          r = Math.round(this.g),
          n = Math.round(this.b);
        return this.a === 1
          ? 'rgb('.concat(t, ', ').concat(r, ', ').concat(n, ')')
          : 'rgba('
              .concat(t, ', ')
              .concat(r, ', ')
              .concat(n, ', ')
              .concat(this.roundA, ')');
      }),
      (e.prototype.toPercentageRgb = function () {
        var t = function (r) {
          return ''.concat(Math.round(te(r, 255) * 100), '%');
        };
        return { r: t(this.r), g: t(this.g), b: t(this.b), a: this.a };
      }),
      (e.prototype.toPercentageRgbString = function () {
        var t = function (r) {
          return Math.round(te(r, 255) * 100);
        };
        return this.a === 1
          ? 'rgb('
              .concat(t(this.r), '%, ')
              .concat(t(this.g), '%, ')
              .concat(t(this.b), '%)')
          : 'rgba('
              .concat(t(this.r), '%, ')
              .concat(t(this.g), '%, ')
              .concat(t(this.b), '%, ')
              .concat(this.roundA, ')');
      }),
      (e.prototype.toName = function () {
        if (this.a === 0) return 'transparent';
        if (this.a < 1) return !1;
        for (
          var t = '#' + Hr(this.r, this.g, this.b, !1),
            r = 0,
            n = Object.entries(zr);
          r < n.length;
          r++
        ) {
          var o = n[r],
            a = o[0],
            i = o[1];
          if (t === i) return a;
        }
        return !1;
      }),
      (e.prototype.toString = function (t) {
        var r = !!t;
        t = t ?? this.format;
        var n = !1,
          o = this.a < 1 && this.a >= 0,
          a = !r && o && (t.startsWith('hex') || t === 'name');
        return a
          ? t === 'name' && this.a === 0
            ? this.toName()
            : this.toRgbString()
          : (t === 'rgb' && (n = this.toRgbString()),
            t === 'prgb' && (n = this.toPercentageRgbString()),
            (t === 'hex' || t === 'hex6') && (n = this.toHexString()),
            t === 'hex3' && (n = this.toHexString(!0)),
            t === 'hex4' && (n = this.toHex8String(!0)),
            t === 'hex8' && (n = this.toHex8String()),
            t === 'name' && (n = this.toName()),
            t === 'hsl' && (n = this.toHslString()),
            t === 'hsv' && (n = this.toHsvString()),
            n || this.toHexString());
      }),
      (e.prototype.toNumber = function () {
        return (
          (Math.round(this.r) << 16) +
          (Math.round(this.g) << 8) +
          Math.round(this.b)
        );
      }),
      (e.prototype.clone = function () {
        return new e(this.toString());
      }),
      (e.prototype.lighten = function (t) {
        t === void 0 && (t = 10);
        var r = this.toHsl();
        return (r.l += t / 100), (r.l = Et(r.l)), new e(r);
      }),
      (e.prototype.brighten = function (t) {
        t === void 0 && (t = 10);
        var r = this.toRgb();
        return (
          (r.r = Math.max(
            0,
            Math.min(255, r.r - Math.round(255 * -(t / 100))),
          )),
          (r.g = Math.max(
            0,
            Math.min(255, r.g - Math.round(255 * -(t / 100))),
          )),
          (r.b = Math.max(
            0,
            Math.min(255, r.b - Math.round(255 * -(t / 100))),
          )),
          new e(r)
        );
      }),
      (e.prototype.darken = function (t) {
        t === void 0 && (t = 10);
        var r = this.toHsl();
        return (r.l -= t / 100), (r.l = Et(r.l)), new e(r);
      }),
      (e.prototype.tint = function (t) {
        return t === void 0 && (t = 10), this.mix('white', t);
      }),
      (e.prototype.shade = function (t) {
        return t === void 0 && (t = 10), this.mix('black', t);
      }),
      (e.prototype.desaturate = function (t) {
        t === void 0 && (t = 10);
        var r = this.toHsl();
        return (r.s -= t / 100), (r.s = Et(r.s)), new e(r);
      }),
      (e.prototype.saturate = function (t) {
        t === void 0 && (t = 10);
        var r = this.toHsl();
        return (r.s += t / 100), (r.s = Et(r.s)), new e(r);
      }),
      (e.prototype.greyscale = function () {
        return this.desaturate(100);
      }),
      (e.prototype.spin = function (t) {
        var r = this.toHsl(),
          n = (r.h + t) % 360;
        return (r.h = n < 0 ? 360 + n : n), new e(r);
      }),
      (e.prototype.mix = function (t, r) {
        r === void 0 && (r = 50);
        var n = this.toRgb(),
          o = new e(t).toRgb(),
          a = r / 100,
          i = {
            r: (o.r - n.r) * a + n.r,
            g: (o.g - n.g) * a + n.g,
            b: (o.b - n.b) * a + n.b,
            a: (o.a - n.a) * a + n.a,
          };
        return new e(i);
      }),
      (e.prototype.analogous = function (t, r) {
        t === void 0 && (t = 6), r === void 0 && (r = 30);
        var n = this.toHsl(),
          o = 360 / r,
          a = [this];
        for (n.h = (n.h - ((o * t) >> 1) + 720) % 360; --t; )
          (n.h = (n.h + o) % 360), a.push(new e(n));
        return a;
      }),
      (e.prototype.complement = function () {
        var t = this.toHsl();
        return (t.h = (t.h + 180) % 360), new e(t);
      }),
      (e.prototype.monochromatic = function (t) {
        t === void 0 && (t = 6);
        for (
          var r = this.toHsv(), n = r.h, o = r.s, a = r.v, i = [], c = 1 / t;
          t--;

        )
          i.push(new e({ h: n, s: o, v: a })), (a = (a + c) % 1);
        return i;
      }),
      (e.prototype.splitcomplement = function () {
        var t = this.toHsl(),
          r = t.h;
        return [
          this,
          new e({ h: (r + 72) % 360, s: t.s, l: t.l }),
          new e({ h: (r + 216) % 360, s: t.s, l: t.l }),
        ];
      }),
      (e.prototype.onBackground = function (t) {
        var r = this.toRgb(),
          n = new e(t).toRgb(),
          o = r.a + n.a * (1 - r.a);
        return new e({
          r: (r.r * r.a + n.r * n.a * (1 - r.a)) / o,
          g: (r.g * r.a + n.g * n.a * (1 - r.a)) / o,
          b: (r.b * r.a + n.b * n.a * (1 - r.a)) / o,
          a: o,
        });
      }),
      (e.prototype.triad = function () {
        return this.polyad(3);
      }),
      (e.prototype.tetrad = function () {
        return this.polyad(4);
      }),
      (e.prototype.polyad = function (t) {
        for (
          var r = this.toHsl(), n = r.h, o = [this], a = 360 / t, i = 1;
          i < t;
          i++
        )
          o.push(new e({ h: (n + i * a) % 360, s: r.s, l: r.l }));
        return o;
      }),
      (e.prototype.equals = function (t) {
        return this.toRgbString() === new e(t).toRgbString();
      }),
      e
    );
  })(),
  Tt = 2,
  Dn = 0.16,
  Uc = 0.05,
  Xc = 0.05,
  Vc = 0.15,
  Uo = 5,
  Xo = 4,
  Kc = [
    { index: 7, opacity: 0.15 },
    { index: 6, opacity: 0.25 },
    { index: 5, opacity: 0.3 },
    { index: 5, opacity: 0.45 },
    { index: 5, opacity: 0.65 },
    { index: 5, opacity: 0.85 },
    { index: 4, opacity: 0.9 },
    { index: 3, opacity: 0.95 },
    { index: 2, opacity: 0.97 },
    { index: 1, opacity: 0.98 },
  ];
function Fn(e) {
  var t = e.r,
    r = e.g,
    n = e.b,
    o = kr(t, r, n);
  return { h: o.h * 360, s: o.s, v: o.v };
}
function Ot(e) {
  var t = e.r,
    r = e.g,
    n = e.b;
  return '#'.concat(Hr(t, r, n, !1));
}
function qc(e, t, r) {
  var n = r / 100,
    o = {
      r: (t.r - e.r) * n + e.r,
      g: (t.g - e.g) * n + e.g,
      b: (t.b - e.b) * n + e.b,
    };
  return o;
}
function Wn(e, t, r) {
  var n;
  return (
    Math.round(e.h) >= 60 && Math.round(e.h) <= 240
      ? (n = r ? Math.round(e.h) - Tt * t : Math.round(e.h) + Tt * t)
      : (n = r ? Math.round(e.h) + Tt * t : Math.round(e.h) - Tt * t),
    n < 0 ? (n += 360) : n >= 360 && (n -= 360),
    n
  );
}
function Gn(e, t, r) {
  if (e.h === 0 && e.s === 0) return e.s;
  var n;
  return (
    r ? (n = e.s - Dn * t) : t === Xo ? (n = e.s + Dn) : (n = e.s + Uc * t),
    n > 1 && (n = 1),
    r && t === Uo && n > 0.1 && (n = 0.1),
    n < 0.06 && (n = 0.06),
    Number(n.toFixed(2))
  );
}
function Un(e, t, r) {
  var n;
  return (
    r ? (n = e.v + Xc * t) : (n = e.v - Vc * t),
    n > 1 && (n = 1),
    Number(n.toFixed(2))
  );
}
function Ne(e) {
  for (
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      r = [],
      n = Ve(e),
      o = Uo;
    o > 0;
    o -= 1
  ) {
    var a = Fn(n),
      i = Ot(Ve({ h: Wn(a, o, !0), s: Gn(a, o, !0), v: Un(a, o, !0) }));
    r.push(i);
  }
  r.push(Ot(n));
  for (var c = 1; c <= Xo; c += 1) {
    var l = Fn(n),
      s = Ot(Ve({ h: Wn(l, c), s: Gn(l, c), v: Un(l, c) }));
    r.push(s);
  }
  return t.theme === 'dark'
    ? Kc.map(function (f) {
        var d = f.index,
          h = f.opacity,
          b = Ot(qc(Ve(t.backgroundColor || '#141414'), Ve(r[d]), h * 100));
        return b;
      })
    : r;
}
var vr = {
    red: '#F5222D',
    volcano: '#FA541C',
    orange: '#FA8C16',
    gold: '#FAAD14',
    yellow: '#FADB14',
    lime: '#A0D911',
    green: '#52C41A',
    cyan: '#13C2C2',
    blue: '#1677FF',
    geekblue: '#2F54EB',
    purple: '#722ED1',
    magenta: '#EB2F96',
    grey: '#666666',
  },
  Bt = {},
  mr = {};
Object.keys(vr).forEach(function (e) {
  (Bt[e] = Ne(vr[e])),
    (Bt[e].primary = Bt[e][5]),
    (mr[e] = Ne(vr[e], { theme: 'dark', backgroundColor: '#141414' })),
    (mr[e].primary = mr[e][5]);
});
var Yc = Bt.blue;
const Qc = (e) => {
    const { controlHeight: t } = e;
    return {
      controlHeightSM: t * 0.75,
      controlHeightXS: t * 0.5,
      controlHeightLG: t * 1.25,
    };
  },
  Zc = Qc;
function Jc(e) {
  const { sizeUnit: t, sizeStep: r } = e;
  return {
    sizeXXL: t * (r + 8),
    sizeXL: t * (r + 4),
    sizeLG: t * (r + 2),
    sizeMD: t * (r + 1),
    sizeMS: t * r,
    size: t * r,
    sizeSM: t * (r - 1),
    sizeXS: t * (r - 2),
    sizeXXS: t * (r - 3),
  };
}
const Vo = {
    blue: '#1677ff',
    purple: '#722ED1',
    cyan: '#13C2C2',
    green: '#52C41A',
    magenta: '#EB2F96',
    pink: '#eb2f96',
    red: '#F5222D',
    orange: '#FA8C16',
    yellow: '#FADB14',
    volcano: '#FA541C',
    geekblue: '#2F54EB',
    gold: '#FAAD14',
    lime: '#A0D911',
  },
  es = Object.assign(Object.assign({}, Vo), {
    colorPrimary: '#1677ff',
    colorSuccess: '#52c41a',
    colorWarning: '#faad14',
    colorError: '#ff4d4f',
    colorInfo: '#1677ff',
    colorLink: '',
    colorTextBase: '',
    colorBgBase: '',
    fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
'Noto Color Emoji'`,
    fontFamilyCode:
      "'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace",
    fontSize: 14,
    lineWidth: 1,
    lineType: 'solid',
    motionUnit: 0.1,
    motionBase: 0,
    motionEaseOutCirc: 'cubic-bezier(0.08, 0.82, 0.17, 1)',
    motionEaseInOutCirc: 'cubic-bezier(0.78, 0.14, 0.15, 0.86)',
    motionEaseOut: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
    motionEaseInOut: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    motionEaseOutBack: 'cubic-bezier(0.12, 0.4, 0.29, 1.46)',
    motionEaseInBack: 'cubic-bezier(0.71, -0.46, 0.88, 0.6)',
    motionEaseInQuint: 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
    motionEaseOutQuint: 'cubic-bezier(0.23, 1, 0.32, 1)',
    borderRadius: 6,
    sizeUnit: 4,
    sizeStep: 4,
    sizePopupArrow: 16,
    controlHeight: 32,
    zIndexBase: 0,
    zIndexPopupBase: 1e3,
    opacityImage: 1,
    wireframe: !1,
    motion: !0,
  }),
  rr = es;
function ts(e, t) {
  let { generateColorPalettes: r, generateNeutralColorPalettes: n } = t;
  const {
      colorSuccess: o,
      colorWarning: a,
      colorError: i,
      colorInfo: c,
      colorPrimary: l,
      colorBgBase: s,
      colorTextBase: f,
    } = e,
    d = r(l),
    h = r(o),
    b = r(a),
    S = r(i),
    y = r(c),
    E = n(s, f),
    $ = e.colorLink || e.colorInfo,
    C = r($);
  return Object.assign(Object.assign({}, E), {
    colorPrimaryBg: d[1],
    colorPrimaryBgHover: d[2],
    colorPrimaryBorder: d[3],
    colorPrimaryBorderHover: d[4],
    colorPrimaryHover: d[5],
    colorPrimary: d[6],
    colorPrimaryActive: d[7],
    colorPrimaryTextHover: d[8],
    colorPrimaryText: d[9],
    colorPrimaryTextActive: d[10],
    colorSuccessBg: h[1],
    colorSuccessBgHover: h[2],
    colorSuccessBorder: h[3],
    colorSuccessBorderHover: h[4],
    colorSuccessHover: h[4],
    colorSuccess: h[6],
    colorSuccessActive: h[7],
    colorSuccessTextHover: h[8],
    colorSuccessText: h[9],
    colorSuccessTextActive: h[10],
    colorErrorBg: S[1],
    colorErrorBgHover: S[2],
    colorErrorBorder: S[3],
    colorErrorBorderHover: S[4],
    colorErrorHover: S[5],
    colorError: S[6],
    colorErrorActive: S[7],
    colorErrorTextHover: S[8],
    colorErrorText: S[9],
    colorErrorTextActive: S[10],
    colorWarningBg: b[1],
    colorWarningBgHover: b[2],
    colorWarningBorder: b[3],
    colorWarningBorderHover: b[4],
    colorWarningHover: b[4],
    colorWarning: b[6],
    colorWarningActive: b[7],
    colorWarningTextHover: b[8],
    colorWarningText: b[9],
    colorWarningTextActive: b[10],
    colorInfoBg: y[1],
    colorInfoBgHover: y[2],
    colorInfoBorder: y[3],
    colorInfoBorderHover: y[4],
    colorInfoHover: y[4],
    colorInfo: y[6],
    colorInfoActive: y[7],
    colorInfoTextHover: y[8],
    colorInfoText: y[9],
    colorInfoTextActive: y[10],
    colorLinkHover: C[4],
    colorLink: C[6],
    colorLinkActive: C[7],
    colorBgMask: new le('#000').setAlpha(0.45).toRgbString(),
    colorWhite: '#fff',
  });
}
const rs = (e) => {
    let t = e,
      r = e,
      n = e,
      o = e;
    return (
      e < 6 && e >= 5
        ? (t = e + 1)
        : e < 16 && e >= 6
        ? (t = e + 2)
        : e >= 16 && (t = 16),
      e < 7 && e >= 5
        ? (r = 4)
        : e < 8 && e >= 7
        ? (r = 5)
        : e < 14 && e >= 8
        ? (r = 6)
        : e < 16 && e >= 14
        ? (r = 7)
        : e >= 16 && (r = 8),
      e < 6 && e >= 2 ? (n = 1) : e >= 6 && (n = 2),
      e > 4 && e < 8 ? (o = 4) : e >= 8 && (o = 6),
      {
        borderRadius: e > 16 ? 16 : e,
        borderRadiusXS: n,
        borderRadiusSM: r,
        borderRadiusLG: t,
        borderRadiusOuter: o,
      }
    );
  },
  ns = rs;
function os(e) {
  const { motionUnit: t, motionBase: r, borderRadius: n, lineWidth: o } = e;
  return Object.assign(
    {
      motionDurationFast: `${(r + t).toFixed(1)}s`,
      motionDurationMid: `${(r + t * 2).toFixed(1)}s`,
      motionDurationSlow: `${(r + t * 3).toFixed(1)}s`,
      lineWidthBold: o + 1,
    },
    ns(n),
  );
}
const Ee = (e, t) => new le(e).setAlpha(t).toRgbString(),
  ot = (e, t) => new le(e).darken(t).toHexString(),
  as = (e) => {
    const t = Ne(e);
    return {
      1: t[0],
      2: t[1],
      3: t[2],
      4: t[3],
      5: t[4],
      6: t[5],
      7: t[6],
      8: t[4],
      9: t[5],
      10: t[6],
    };
  },
  is = (e, t) => {
    const r = e || '#fff',
      n = t || '#000';
    return {
      colorBgBase: r,
      colorTextBase: n,
      colorText: Ee(n, 0.88),
      colorTextSecondary: Ee(n, 0.65),
      colorTextTertiary: Ee(n, 0.45),
      colorTextQuaternary: Ee(n, 0.25),
      colorFill: Ee(n, 0.15),
      colorFillSecondary: Ee(n, 0.06),
      colorFillTertiary: Ee(n, 0.04),
      colorFillQuaternary: Ee(n, 0.02),
      colorBgLayout: ot(r, 4),
      colorBgContainer: ot(r, 0),
      colorBgElevated: ot(r, 0),
      colorBgSpotlight: Ee(n, 0.85),
      colorBorder: ot(r, 15),
      colorBorderSecondary: ot(r, 6),
    };
  };
function cs(e) {
  const t = new Array(10).fill(null).map((r, n) => {
    const o = n - 1,
      a = e * Math.pow(2.71828, o / 5),
      i = n > 1 ? Math.floor(a) : Math.ceil(a);
    return Math.floor(i / 2) * 2;
  });
  return (
    (t[1] = e),
    t.map((r) => {
      const n = r + 8;
      return { size: r, lineHeight: n / r };
    })
  );
}
const ss = (e) => {
    const t = cs(e),
      r = t.map((o) => o.size),
      n = t.map((o) => o.lineHeight);
    return {
      fontSizeSM: r[0],
      fontSize: r[1],
      fontSizeLG: r[2],
      fontSizeXL: r[3],
      fontSizeHeading1: r[6],
      fontSizeHeading2: r[5],
      fontSizeHeading3: r[4],
      fontSizeHeading4: r[3],
      fontSizeHeading5: r[2],
      lineHeight: n[1],
      lineHeightLG: n[2],
      lineHeightSM: n[0],
      lineHeightHeading1: n[6],
      lineHeightHeading2: n[5],
      lineHeightHeading3: n[4],
      lineHeightHeading4: n[3],
      lineHeightHeading5: n[2],
    };
  },
  ls = ss;
function us(e) {
  const t = Object.keys(Vo)
    .map((r) => {
      const n = Ne(e[r]);
      return new Array(10)
        .fill(1)
        .reduce(
          (o, a, i) => (
            (o[`${r}-${i + 1}`] = n[i]), (o[`${r}${i + 1}`] = n[i]), o
          ),
          {},
        );
    })
    .reduce((r, n) => ((r = Object.assign(Object.assign({}, r), n)), r), {});
  return Object.assign(
    Object.assign(
      Object.assign(
        Object.assign(
          Object.assign(
            Object.assign(Object.assign({}, e), t),
            ts(e, {
              generateColorPalettes: as,
              generateNeutralColorPalettes: is,
            }),
          ),
          ls(e.fontSize),
        ),
        Jc(e),
      ),
      Zc(e),
    ),
    os(e),
  );
}
const Ko = jr(us),
  qo = { token: rr, hashed: !0 },
  Yo = U.createContext(qo);
function br(e) {
  return e >= 0 && e <= 255;
}
function At(e, t) {
  const { r, g: n, b: o, a } = new le(e).toRgb();
  if (a < 1) return e;
  const { r: i, g: c, b: l } = new le(t).toRgb();
  for (let s = 0.01; s <= 1; s += 0.01) {
    const f = Math.round((r - i * (1 - s)) / s),
      d = Math.round((n - c * (1 - s)) / s),
      h = Math.round((o - l * (1 - s)) / s);
    if (br(f) && br(d) && br(h))
      return new le({
        r: f,
        g: d,
        b: h,
        a: Math.round(s * 100) / 100,
      }).toRgbString();
  }
  return new le({ r, g: n, b: o, a: 1 }).toRgbString();
}
var fs =
  (globalThis && globalThis.__rest) ||
  function (e, t) {
    var r = {};
    for (var n in e)
      Object.prototype.hasOwnProperty.call(e, n) &&
        t.indexOf(n) < 0 &&
        (r[n] = e[n]);
    if (e != null && typeof Object.getOwnPropertySymbols == 'function')
      for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
        t.indexOf(n[o]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, n[o]) &&
          (r[n[o]] = e[n[o]]);
    return r;
  };
function Qo(e) {
  const { override: t } = e,
    r = fs(e, ['override']),
    n = Object.assign({}, t);
  Object.keys(rr).forEach((h) => {
    delete n[h];
  });
  const o = Object.assign(Object.assign({}, r), n),
    a = 480,
    i = 576,
    c = 768,
    l = 992,
    s = 1200,
    f = 1600;
  if (o.motion === !1) {
    const h = '0s';
    (o.motionDurationFast = h),
      (o.motionDurationMid = h),
      (o.motionDurationSlow = h);
  }
  return Object.assign(
    Object.assign(Object.assign({}, o), {
      colorFillContent: o.colorFillSecondary,
      colorFillContentHover: o.colorFill,
      colorFillAlter: o.colorFillQuaternary,
      colorBgContainerDisabled: o.colorFillTertiary,
      colorBorderBg: o.colorBgContainer,
      colorSplit: At(o.colorBorderSecondary, o.colorBgContainer),
      colorTextPlaceholder: o.colorTextQuaternary,
      colorTextDisabled: o.colorTextQuaternary,
      colorTextHeading: o.colorText,
      colorTextLabel: o.colorTextSecondary,
      colorTextDescription: o.colorTextTertiary,
      colorTextLightSolid: o.colorWhite,
      colorHighlight: o.colorError,
      colorBgTextHover: o.colorFillSecondary,
      colorBgTextActive: o.colorFill,
      colorIcon: o.colorTextTertiary,
      colorIconHover: o.colorText,
      colorErrorOutline: At(o.colorErrorBg, o.colorBgContainer),
      colorWarningOutline: At(o.colorWarningBg, o.colorBgContainer),
      fontSizeIcon: o.fontSizeSM,
      lineWidthFocus: o.lineWidth * 4,
      lineWidth: o.lineWidth,
      controlOutlineWidth: o.lineWidth * 2,
      controlInteractiveSize: o.controlHeight / 2,
      controlItemBgHover: o.colorFillTertiary,
      controlItemBgActive: o.colorPrimaryBg,
      controlItemBgActiveHover: o.colorPrimaryBgHover,
      controlItemBgActiveDisabled: o.colorFill,
      controlTmpOutline: o.colorFillQuaternary,
      controlOutline: At(o.colorPrimaryBg, o.colorBgContainer),
      lineType: o.lineType,
      borderRadius: o.borderRadius,
      borderRadiusXS: o.borderRadiusXS,
      borderRadiusSM: o.borderRadiusSM,
      borderRadiusLG: o.borderRadiusLG,
      fontWeightStrong: 600,
      opacityLoading: 0.65,
      linkDecoration: 'none',
      linkHoverDecoration: 'none',
      linkFocusDecoration: 'none',
      controlPaddingHorizontal: 12,
      controlPaddingHorizontalSM: 8,
      paddingXXS: o.sizeXXS,
      paddingXS: o.sizeXS,
      paddingSM: o.sizeSM,
      padding: o.size,
      paddingMD: o.sizeMD,
      paddingLG: o.sizeLG,
      paddingXL: o.sizeXL,
      paddingContentHorizontalLG: o.sizeLG,
      paddingContentVerticalLG: o.sizeMS,
      paddingContentHorizontal: o.sizeMS,
      paddingContentVertical: o.sizeSM,
      paddingContentHorizontalSM: o.size,
      paddingContentVerticalSM: o.sizeXS,
      marginXXS: o.sizeXXS,
      marginXS: o.sizeXS,
      marginSM: o.sizeSM,
      margin: o.size,
      marginMD: o.sizeMD,
      marginLG: o.sizeLG,
      marginXL: o.sizeXL,
      marginXXL: o.sizeXXL,
      boxShadow: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
      boxShadowSecondary: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
      boxShadowTertiary: `
      0 1px 2px 0 rgba(0, 0, 0, 0.03),
      0 1px 6px -1px rgba(0, 0, 0, 0.02),
      0 2px 4px 0 rgba(0, 0, 0, 0.02)
    `,
      screenXS: a,
      screenXSMin: a,
      screenXSMax: i - 1,
      screenSM: i,
      screenSMMin: i,
      screenSMMax: c - 1,
      screenMD: c,
      screenMDMin: c,
      screenMDMax: l - 1,
      screenLG: l,
      screenLGMin: l,
      screenLGMax: s - 1,
      screenXL: s,
      screenXLMin: s,
      screenXLMax: f - 1,
      screenXXL: f,
      screenXXLMin: f,
      boxShadowPopoverArrow: '2px 2px 5px rgba(0, 0, 0, 0.05)',
      boxShadowCard: `
      0 1px 2px -2px ${new le('rgba(0, 0, 0, 0.16)').toRgbString()},
      0 3px 6px 0 ${new le('rgba(0, 0, 0, 0.12)').toRgbString()},
      0 5px 12px 4px ${new le('rgba(0, 0, 0, 0.09)').toRgbString()}
    `,
      boxShadowDrawerRight: `
      -6px 0 16px 0 rgba(0, 0, 0, 0.08),
      -3px 0 6px -4px rgba(0, 0, 0, 0.12),
      -9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
      boxShadowDrawerLeft: `
      6px 0 16px 0 rgba(0, 0, 0, 0.08),
      3px 0 6px -4px rgba(0, 0, 0, 0.12),
      9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
      boxShadowDrawerUp: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
      boxShadowDrawerDown: `
      0 -6px 16px 0 rgba(0, 0, 0, 0.08),
      0 -3px 6px -4px rgba(0, 0, 0, 0.12),
      0 -9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
      boxShadowTabsOverflowLeft: 'inset 10px 0 8px -8px rgba(0, 0, 0, 0.08)',
      boxShadowTabsOverflowRight: 'inset -10px 0 8px -8px rgba(0, 0, 0, 0.08)',
      boxShadowTabsOverflowTop: 'inset 0 10px 8px -8px rgba(0, 0, 0, 0.08)',
      boxShadowTabsOverflowBottom: 'inset 0 -10px 8px -8px rgba(0, 0, 0, 0.08)',
    }),
    n,
  );
}
var Xn =
  (globalThis && globalThis.__rest) ||
  function (e, t) {
    var r = {};
    for (var n in e)
      Object.prototype.hasOwnProperty.call(e, n) &&
        t.indexOf(n) < 0 &&
        (r[n] = e[n]);
    if (e != null && typeof Object.getOwnPropertySymbols == 'function')
      for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
        t.indexOf(n[o]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, n[o]) &&
          (r[n[o]] = e[n[o]]);
    return r;
  };
const Zo = (e, t, r) => {
  const n = r.getDerivativeToken(e),
    { override: o } = t,
    a = Xn(t, ['override']);
  let i = Object.assign(Object.assign({}, n), { override: o });
  return (
    (i = Qo(i)),
    a &&
      Object.entries(a).forEach((c) => {
        let [l, s] = c;
        const { theme: f } = s,
          d = Xn(s, ['theme']);
        let h = d;
        f &&
          (h = Zo(Object.assign(Object.assign({}, i), d), { override: d }, f)),
          (i[l] = h);
      }),
    i
  );
};
function vt() {
  const { token: e, hashed: t, theme: r, components: n } = U.useContext(Yo),
    o = `${Mc}-${t || ''}`,
    a = r || Ko,
    [i, c] = Wi(a, [rr, e], {
      salt: o,
      override: Object.assign({ override: e }, n),
      getComputedToken: Zo,
      formatToken: Qo,
    });
  return [a, i, t ? c : ''];
}
function ds(e) {
  var t = u.useRef();
  t.current = e;
  var r = u.useCallback(function () {
    for (var n, o = arguments.length, a = new Array(o), i = 0; i < o; i++)
      a[i] = arguments[i];
    return (n = t.current) === null || n === void 0
      ? void 0
      : n.call.apply(n, [t].concat(a));
  }, []);
  return r;
}
function kt(e) {
  var t = u.useRef(!1),
    r = u.useState(e),
    n = V(r, 2),
    o = n[0],
    a = n[1];
  u.useEffect(function () {
    return (
      (t.current = !1),
      function () {
        t.current = !0;
      }
    );
  }, []);
  function i(c, l) {
    (l && t.current) || a(c);
  }
  return [o, i];
}
const Jo = 'anticon',
  gs = (e, t) => t || (e ? `ant-${e}` : 'ant'),
  Re = u.createContext({ getPrefixCls: gs, iconPrefixCls: Jo }),
  hs = () => ({
    display: 'inline-flex',
    alignItems: 'center',
    color: 'inherit',
    fontStyle: 'normal',
    lineHeight: 0,
    textAlign: 'center',
    textTransform: 'none',
    verticalAlign: '-0.125em',
    textRendering: 'optimizeLegibility',
    '-webkit-font-smoothing': 'antialiased',
    '-moz-osx-font-smoothing': 'grayscale',
    '> *': { lineHeight: 1 },
    svg: { display: 'inline-block' },
  }),
  ps = (e) => ({
    a: {
      color: e.colorLink,
      textDecoration: e.linkDecoration,
      backgroundColor: 'transparent',
      outline: 'none',
      cursor: 'pointer',
      transition: `color ${e.motionDurationSlow}`,
      '-webkit-text-decoration-skip': 'objects',
      '&:hover': { color: e.colorLinkHover },
      '&:active': { color: e.colorLinkActive },
      '&:active,\n  &:hover': {
        textDecoration: e.linkHoverDecoration,
        outline: 0,
      },
      '&:focus': { textDecoration: e.linkFocusDecoration, outline: 0 },
      '&[disabled]': { color: e.colorTextDisabled, cursor: 'not-allowed' },
    },
  }),
  vs = (e, t) => {
    const { fontFamily: r, fontSize: n } = e,
      o = `[class^="${t}"], [class*=" ${t}"]`;
    return {
      [o]: {
        fontFamily: r,
        fontSize: n,
        boxSizing: 'border-box',
        '&::before, &::after': { boxSizing: 'border-box' },
        [o]: {
          boxSizing: 'border-box',
          '&::before, &::after': { boxSizing: 'border-box' },
        },
      },
    };
  },
  ms = (e) => ({
    outline: `${e.lineWidthFocus}px solid ${e.colorPrimaryBorder}`,
    outlineOffset: 1,
    transition: 'outline-offset 0s, outline 0s',
  }),
  bs = (e) => ({ '&:focus-visible': Object.assign({}, ms(e)) }),
  ea = typeof CSSINJS_STATISTIC < 'u';
let Nr = !0;
function Je() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  if (!ea) return Object.assign.apply(Object, [{}].concat(t));
  Nr = !1;
  const n = {};
  return (
    t.forEach((o) => {
      Object.keys(o).forEach((i) => {
        Object.defineProperty(n, i, {
          configurable: !0,
          enumerable: !0,
          get: () => o[i],
        });
      });
    }),
    (Nr = !0),
    n
  );
}
const Vn = {};
function ys() {}
function Ss(e) {
  let t,
    r = e,
    n = ys;
  return (
    ea &&
      ((t = new Set()),
      (r = new Proxy(e, {
        get(o, a) {
          return Nr && t.add(a), o[a];
        },
      })),
      (n = (o, a) => {
        var i;
        Vn[o] = {
          global: Array.from(t),
          component: Object.assign(
            Object.assign(
              {},
              (i = Vn[o]) === null || i === void 0 ? void 0 : i.component,
            ),
            a,
          ),
        };
      })),
    { token: r, keys: t, flush: n }
  );
}
const xs = (e, t) => {
    const [r, n] = vt();
    return _r(
      {
        theme: r,
        token: n,
        hashId: '',
        path: ['ant-design-icons', e],
        nonce: () => (t == null ? void 0 : t.nonce),
      },
      () => [
        {
          [`.${e}`]: Object.assign(Object.assign({}, hs()), {
            [`.${e} .${e}-icon`]: { display: 'block' },
          }),
        },
      ],
    );
  },
  ta = xs;
function un(e, t, r) {
  let n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
  const o = Array.isArray(e) ? e : [e, e],
    [a] = o,
    i = o.join('-');
  return (c) => {
    const [l, s, f] = vt(),
      { getPrefixCls: d, iconPrefixCls: h, csp: b } = u.useContext(Re),
      S = d(),
      y = {
        theme: l,
        token: s,
        hashId: f,
        nonce: () => (b == null ? void 0 : b.nonce),
        clientOnly: n.clientOnly,
        order: n.order || -999,
      };
    return (
      _r(
        Object.assign(Object.assign({}, y), {
          clientOnly: !1,
          path: ['Shared', S],
        }),
        () => [{ '&': ps(s) }],
      ),
      ta(h),
      [
        _r(Object.assign(Object.assign({}, y), { path: [i, c, h] }), () => {
          const { token: E, flush: $ } = Ss(s),
            C = Object.assign({}, s[a]);
          if (n.deprecatedTokens) {
            const { deprecatedTokens: z } = n;
            z.forEach((j) => {
              let [L, B] = j;
              var k;
              ((C != null && C[L]) || (C != null && C[B])) &&
                (((k = C[B]) !== null && k !== void 0) ||
                  (C[B] = C == null ? void 0 : C[L]));
            });
          }
          const O = typeof r == 'function' ? r(Je(E, C ?? {})) : r,
            R = Object.assign(Object.assign({}, O), C),
            P = `.${c}`,
            T = Je(
              E,
              {
                componentCls: P,
                prefixCls: c,
                iconCls: `.${h}`,
                antCls: `.${S}`,
              },
              R,
            ),
            m = t(T, {
              hashId: f,
              prefixCls: c,
              rootPrefixCls: S,
              iconPrefixCls: h,
              overrideComponentToken: C,
            });
          return $(a, R), [n.resetStyle === !1 ? null : vs(s, c), m];
        }),
        f,
      ]
    );
  };
}
const Cs = (e, t, r, n) => {
    const o = un(e, t, r, Object.assign({ resetStyle: !1, order: -998 }, n));
    return (i) => {
      let { prefixCls: c } = i;
      return o(c), null;
    };
  },
  Es = `-ant-${Date.now()}-${Math.random()}`;
function ws(e, t) {
  const r = {},
    n = (i, c) => {
      let l = i.clone();
      return (l = (c == null ? void 0 : c(l)) || l), l.toRgbString();
    },
    o = (i, c) => {
      const l = new le(i),
        s = Ne(l.toRgbString());
      (r[`${c}-color`] = n(l)),
        (r[`${c}-color-disabled`] = s[1]),
        (r[`${c}-color-hover`] = s[4]),
        (r[`${c}-color-active`] = s[6]),
        (r[`${c}-color-outline`] = l.clone().setAlpha(0.2).toRgbString()),
        (r[`${c}-color-deprecated-bg`] = s[0]),
        (r[`${c}-color-deprecated-border`] = s[2]);
    };
  if (t.primaryColor) {
    o(t.primaryColor, 'primary');
    const i = new le(t.primaryColor),
      c = Ne(i.toRgbString());
    c.forEach((s, f) => {
      r[`primary-${f + 1}`] = s;
    }),
      (r['primary-color-deprecated-l-35'] = n(i, (s) => s.lighten(35))),
      (r['primary-color-deprecated-l-20'] = n(i, (s) => s.lighten(20))),
      (r['primary-color-deprecated-t-20'] = n(i, (s) => s.tint(20))),
      (r['primary-color-deprecated-t-50'] = n(i, (s) => s.tint(50))),
      (r['primary-color-deprecated-f-12'] = n(i, (s) =>
        s.setAlpha(s.getAlpha() * 0.12),
      ));
    const l = new le(c[0]);
    (r['primary-color-active-deprecated-f-30'] = n(l, (s) =>
      s.setAlpha(s.getAlpha() * 0.3),
    )),
      (r['primary-color-active-deprecated-d-02'] = n(l, (s) => s.darken(2)));
  }
  return (
    t.successColor && o(t.successColor, 'success'),
    t.warningColor && o(t.warningColor, 'warning'),
    t.errorColor && o(t.errorColor, 'error'),
    t.infoColor && o(t.infoColor, 'info'),
    `
  :root {
    ${Object.keys(r).map((i) => `--${e}-${i}: ${r[i]};`).join(`
`)}
  }
  `.trim()
  );
}
function Ts(e, t) {
  const r = ws(e, t);
  ye() && st(r, `${Es}-dynamic-theme`);
}
const Dr = u.createContext(!1),
  Os = (e) => {
    let { children: t, disabled: r } = e;
    const n = u.useContext(Dr);
    return u.createElement(Dr.Provider, { value: r ?? n }, t);
  },
  ra = Dr,
  Fr = u.createContext(void 0),
  As = (e) => {
    let { children: t, size: r } = e;
    const n = u.useContext(Fr);
    return u.createElement(Fr.Provider, { value: r || n }, t);
  },
  nr = Fr;
function $s() {
  const e = u.useContext(ra),
    t = u.useContext(nr);
  return { componentDisabled: e, componentSize: t };
}
function Rs(e, t) {
  const r = e || {},
    n = r.inherit === !1 || !t ? qo : t;
  return po(
    () => {
      if (!e) return t;
      const o = Object.assign({}, n.components);
      return (
        Object.keys(e.components || {}).forEach((a) => {
          o[a] = Object.assign(Object.assign({}, o[a]), e.components[a]);
        }),
        Object.assign(Object.assign(Object.assign({}, n), r), {
          token: Object.assign(Object.assign({}, n.token), r.token),
          components: o,
        })
      );
    },
    [r, n],
    (o, a) =>
      o.some((i, c) => {
        const l = a[c];
        return !di(i, l, !0);
      }),
  );
}
var Ps = ['children'],
  na = u.createContext({});
function js(e) {
  var t = e.children,
    r = ct(e, Ps);
  return u.createElement(na.Provider, { value: r }, t);
}
var Is = (function (e) {
    so(r, e);
    var t = lo(r);
    function r() {
      return gt(this, r), t.apply(this, arguments);
    }
    return (
      ht(r, [
        {
          key: 'render',
          value: function () {
            return this.props.children;
          },
        },
      ]),
      r
    );
  })(u.Component),
  Me = 'none',
  $t = 'appear',
  Rt = 'enter',
  Pt = 'leave',
  Kn = 'none',
  he = 'prepare',
  qe = 'start',
  Ye = 'active',
  fn = 'end',
  oa = 'prepared';
function qn(e, t) {
  var r = {};
  return (
    (r[e.toLowerCase()] = t.toLowerCase()),
    (r['Webkit'.concat(e)] = 'webkit'.concat(t)),
    (r['Moz'.concat(e)] = 'moz'.concat(t)),
    (r['ms'.concat(e)] = 'MS'.concat(t)),
    (r['O'.concat(e)] = 'o'.concat(t.toLowerCase())),
    r
  );
}
function Ms(e, t) {
  var r = {
    animationend: qn('Animation', 'AnimationEnd'),
    transitionend: qn('Transition', 'TransitionEnd'),
  };
  return (
    e &&
      ('AnimationEvent' in t || delete r.animationend.animation,
      'TransitionEvent' in t || delete r.transitionend.transition),
    r
  );
}
var Ls = Ms(ye(), typeof window < 'u' ? window : {}),
  aa = {};
if (ye()) {
  var _s = document.createElement('div');
  aa = _s.style;
}
var jt = {};
function ia(e) {
  if (jt[e]) return jt[e];
  var t = Ls[e];
  if (t)
    for (var r = Object.keys(t), n = r.length, o = 0; o < n; o += 1) {
      var a = r[o];
      if (Object.prototype.hasOwnProperty.call(t, a) && a in aa)
        return (jt[e] = t[a]), jt[e];
    }
  return '';
}
var ca = ia('animationend'),
  sa = ia('transitionend'),
  la = !!(ca && sa),
  Yn = ca || 'animationend',
  Qn = sa || 'transitionend';
function Zn(e, t) {
  if (!e) return null;
  if (K(e) === 'object') {
    var r = t.replace(/-\w/g, function (n) {
      return n[1].toUpperCase();
    });
    return e[r];
  }
  return ''.concat(e, '-').concat(t);
}
const Bs = function (e) {
  var t = u.useRef(),
    r = u.useRef(e);
  r.current = e;
  var n = u.useCallback(function (i) {
    r.current(i);
  }, []);
  function o(i) {
    i && (i.removeEventListener(Qn, n), i.removeEventListener(Yn, n));
  }
  function a(i) {
    t.current && t.current !== i && o(t.current),
      i &&
        i !== t.current &&
        (i.addEventListener(Qn, n), i.addEventListener(Yn, n), (t.current = i));
  }
  return (
    u.useEffect(function () {
      return function () {
        o(t.current);
      };
    }, []),
    [a, o]
  );
};
var ua = ye() ? u.useLayoutEffect : u.useEffect;
const ks = function () {
  var e = u.useRef(null);
  function t() {
    ze.cancel(e.current);
  }
  function r(n) {
    var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
    t();
    var a = ze(function () {
      o <= 1
        ? n({
            isCanceled: function () {
              return a !== e.current;
            },
          })
        : r(n, o - 1);
    });
    e.current = a;
  }
  return (
    u.useEffect(function () {
      return function () {
        t();
      };
    }, []),
    [r, t]
  );
};
var Hs = [he, qe, Ye, fn],
  zs = [he, oa],
  fa = !1,
  Ns = !0;
function da(e) {
  return e === Ye || e === fn;
}
const Ds = function (e, t, r) {
  var n = kt(Kn),
    o = V(n, 2),
    a = o[0],
    i = o[1],
    c = ks(),
    l = V(c, 2),
    s = l[0],
    f = l[1];
  function d() {
    i(he, !0);
  }
  var h = t ? zs : Hs;
  return (
    ua(
      function () {
        if (a !== Kn && a !== fn) {
          var b = h.indexOf(a),
            S = h[b + 1],
            y = r(a);
          y === fa
            ? i(S, !0)
            : S &&
              s(function (E) {
                function $() {
                  E.isCanceled() || i(S, !0);
                }
                y === !0 ? $() : Promise.resolve(y).then($);
              });
        }
      },
      [e, a],
    ),
    u.useEffect(function () {
      return function () {
        f();
      };
    }, []),
    [d, a]
  );
};
function Fs(e, t, r, n) {
  var o = n.motionEnter,
    a = o === void 0 ? !0 : o,
    i = n.motionAppear,
    c = i === void 0 ? !0 : i,
    l = n.motionLeave,
    s = l === void 0 ? !0 : l,
    f = n.motionDeadline,
    d = n.motionLeaveImmediately,
    h = n.onAppearPrepare,
    b = n.onEnterPrepare,
    S = n.onLeavePrepare,
    y = n.onAppearStart,
    E = n.onEnterStart,
    $ = n.onLeaveStart,
    C = n.onAppearActive,
    O = n.onEnterActive,
    R = n.onLeaveActive,
    P = n.onAppearEnd,
    T = n.onEnterEnd,
    m = n.onLeaveEnd,
    z = n.onVisibleChanged,
    j = kt(),
    L = V(j, 2),
    B = L[0],
    k = L[1],
    M = kt(Me),
    F = V(M, 2),
    H = F[0],
    v = F[1],
    g = kt(null),
    p = V(g, 2),
    x = p[0],
    A = p[1],
    w = u.useRef(!1),
    _ = u.useRef(null);
  function X() {
    return r();
  }
  var q = u.useRef(!1);
  function ne() {
    v(Me, !0), A(null, !0);
  }
  function oe(Y) {
    var N = X();
    if (!(Y && !Y.deadline && Y.target !== N)) {
      var W = q.current,
        re;
      H === $t && W
        ? (re = P == null ? void 0 : P(N, Y))
        : H === Rt && W
        ? (re = T == null ? void 0 : T(N, Y))
        : H === Pt && W && (re = m == null ? void 0 : m(N, Y)),
        H !== Me && W && re !== !1 && ne();
    }
  }
  var ae = Bs(oe),
    tt = V(ae, 1),
    Fe = tt[0],
    Pe = function (N) {
      var W, re, Ie;
      switch (N) {
        case $t:
          return (W = {}), G(W, he, h), G(W, qe, y), G(W, Ye, C), W;
        case Rt:
          return (re = {}), G(re, he, b), G(re, qe, E), G(re, Ye, O), re;
        case Pt:
          return (Ie = {}), G(Ie, he, S), G(Ie, qe, $), G(Ie, Ye, R), Ie;
        default:
          return {};
      }
    },
    Se = u.useMemo(
      function () {
        return Pe(H);
      },
      [H],
    ),
    We = Ds(H, !e, function (Y) {
      if (Y === he) {
        var N = Se[he];
        return N ? N(X()) : fa;
      }
      if (de in Se) {
        var W;
        A(
          ((W = Se[de]) === null || W === void 0
            ? void 0
            : W.call(Se, X(), null)) || null,
        );
      }
      return (
        de === Ye &&
          (Fe(X()),
          f > 0 &&
            (clearTimeout(_.current),
            (_.current = setTimeout(function () {
              oe({ deadline: !0 });
            }, f)))),
        de === oa && ne(),
        Ns
      );
    }),
    je = V(We, 2),
    Ge = je[0],
    de = je[1],
    rt = da(de);
  (q.current = rt),
    ua(
      function () {
        k(t);
        var Y = w.current;
        w.current = !0;
        var N;
        !Y && t && c && (N = $t),
          Y && t && a && (N = Rt),
          ((Y && !t && s) || (!Y && d && !t && s)) && (N = Pt);
        var W = Pe(N);
        N && (e || W[he]) ? (v(N), Ge()) : v(Me);
      },
      [t],
    ),
    u.useEffect(
      function () {
        ((H === $t && !c) || (H === Rt && !a) || (H === Pt && !s)) && v(Me);
      },
      [c, a, s],
    ),
    u.useEffect(function () {
      return function () {
        (w.current = !1), clearTimeout(_.current);
      };
    }, []);
  var Oe = u.useRef(!1);
  u.useEffect(
    function () {
      B && (Oe.current = !0),
        B !== void 0 &&
          H === Me &&
          ((Oe.current || B) && (z == null || z(B)), (Oe.current = !0));
    },
    [B, H],
  );
  var Ae = x;
  return (
    Se[he] && de === qe && (Ae = I({ transition: 'none' }, Ae)),
    [H, de, Ae, B ?? t]
  );
}
function Ws(e) {
  var t = e;
  K(e) === 'object' && (t = e.transitionSupport);
  function r(o, a) {
    return !!(o.motionName && t && a !== !1);
  }
  var n = u.forwardRef(function (o, a) {
    var i = o.visible,
      c = i === void 0 ? !0 : i,
      l = o.removeOnLeave,
      s = l === void 0 ? !0 : l,
      f = o.forceRender,
      d = o.children,
      h = o.motionName,
      b = o.leavedClassName,
      S = o.eventProps,
      y = u.useContext(na),
      E = y.motion,
      $ = r(o, E),
      C = u.useRef(),
      O = u.useRef();
    function R() {
      try {
        return C.current instanceof HTMLElement ? C.current : ci(O.current);
      } catch {
        return null;
      }
    }
    var P = Fs($, c, R, o),
      T = V(P, 4),
      m = T[0],
      z = T[1],
      j = T[2],
      L = T[3],
      B = u.useRef(L);
    L && (B.current = !0);
    var k = u.useCallback(
        function (A) {
          (C.current = A), vo(a, A);
        },
        [a],
      ),
      M,
      F = I(I({}, S), {}, { visible: c });
    if (!d) M = null;
    else if (m === Me)
      L
        ? (M = d(I({}, F), k))
        : !s && B.current && b
        ? (M = d(I(I({}, F), {}, { className: b }), k))
        : f || (!s && !b)
        ? (M = d(I(I({}, F), {}, { style: { display: 'none' } }), k))
        : (M = null);
    else {
      var H, v;
      z === he
        ? (v = 'prepare')
        : da(z)
        ? (v = 'active')
        : z === qe && (v = 'start');
      var g = Zn(h, ''.concat(m, '-').concat(v));
      M = d(
        I(
          I({}, F),
          {},
          {
            className: pe(
              Zn(h, m),
              ((H = {}), G(H, g, g && v), G(H, h, typeof h == 'string'), H),
            ),
            style: j,
          },
        ),
        k,
      );
    }
    if (u.isValidElement(M) && bo(M)) {
      var p = M,
        x = p.ref;
      x || (M = u.cloneElement(M, { ref: k }));
    }
    return u.createElement(Is, { ref: O }, M);
  });
  return (n.displayName = 'CSSMotion'), n;
}
const dn = Ws(la);
var Wr = 'add',
  Gr = 'keep',
  Ur = 'remove',
  yr = 'removed';
function Gs(e) {
  var t;
  return (
    e && K(e) === 'object' && 'key' in e ? (t = e) : (t = { key: e }),
    I(I({}, t), {}, { key: String(t.key) })
  );
}
function Xr() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  return e.map(Gs);
}
function Us() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [],
    t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [],
    r = [],
    n = 0,
    o = t.length,
    a = Xr(e),
    i = Xr(t);
  a.forEach(function (s) {
    for (var f = !1, d = n; d < o; d += 1) {
      var h = i[d];
      if (h.key === s.key) {
        n < d &&
          ((r = r.concat(
            i.slice(n, d).map(function (b) {
              return I(I({}, b), {}, { status: Wr });
            }),
          )),
          (n = d)),
          r.push(I(I({}, h), {}, { status: Gr })),
          (n += 1),
          (f = !0);
        break;
      }
    }
    f || r.push(I(I({}, s), {}, { status: Ur }));
  }),
    n < o &&
      (r = r.concat(
        i.slice(n).map(function (s) {
          return I(I({}, s), {}, { status: Wr });
        }),
      ));
  var c = {};
  r.forEach(function (s) {
    var f = s.key;
    c[f] = (c[f] || 0) + 1;
  });
  var l = Object.keys(c).filter(function (s) {
    return c[s] > 1;
  });
  return (
    l.forEach(function (s) {
      (r = r.filter(function (f) {
        var d = f.key,
          h = f.status;
        return d !== s || h !== Ur;
      })),
        r.forEach(function (f) {
          f.key === s && (f.status = Gr);
        });
    }),
    r
  );
}
var Xs = ['component', 'children', 'onVisibleChanged', 'onAllRemoved'],
  Vs = ['status'],
  Ks = [
    'eventProps',
    'visible',
    'children',
    'motionName',
    'motionAppear',
    'motionEnter',
    'motionLeave',
    'motionLeaveImmediately',
    'motionDeadline',
    'removeOnLeave',
    'leavedClassName',
    'onAppearPrepare',
    'onAppearStart',
    'onAppearActive',
    'onAppearEnd',
    'onEnterStart',
    'onEnterActive',
    'onEnterEnd',
    'onLeaveStart',
    'onLeaveActive',
    'onLeaveEnd',
  ];
function qs(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : dn,
    r = (function (n) {
      so(a, n);
      var o = lo(a);
      function a() {
        var i;
        gt(this, a);
        for (var c = arguments.length, l = new Array(c), s = 0; s < c; s++)
          l[s] = arguments[s];
        return (
          (i = o.call.apply(o, [this].concat(l))),
          G(Or(i), 'state', { keyEntities: [] }),
          G(Or(i), 'removeKey', function (f) {
            var d = i.state.keyEntities,
              h = d.map(function (b) {
                return b.key !== f ? b : I(I({}, b), {}, { status: yr });
              });
            return (
              i.setState({ keyEntities: h }),
              h.filter(function (b) {
                var S = b.status;
                return S !== yr;
              }).length
            );
          }),
          i
        );
      }
      return (
        ht(
          a,
          [
            {
              key: 'render',
              value: function () {
                var c = this,
                  l = this.state.keyEntities,
                  s = this.props,
                  f = s.component,
                  d = s.children,
                  h = s.onVisibleChanged,
                  b = s.onAllRemoved,
                  S = ct(s, Xs),
                  y = f || u.Fragment,
                  E = {};
                return (
                  Ks.forEach(function ($) {
                    (E[$] = S[$]), delete S[$];
                  }),
                  delete S.keys,
                  u.createElement(
                    y,
                    S,
                    l.map(function ($, C) {
                      var O = $.status,
                        R = ct($, Vs),
                        P = O === Wr || O === Gr;
                      return u.createElement(
                        t,
                        Qe({}, E, {
                          key: R.key,
                          visible: P,
                          eventProps: R,
                          onVisibleChanged: function (m) {
                            if ((h == null || h(m, { key: R.key }), !m)) {
                              var z = c.removeKey(R.key);
                              z === 0 && b && b();
                            }
                          },
                        }),
                        function (T, m) {
                          return d(I(I({}, T), {}, { index: C }), m);
                        },
                      );
                    }),
                  )
                );
              },
            },
          ],
          [
            {
              key: 'getDerivedStateFromProps',
              value: function (c, l) {
                var s = c.keys,
                  f = l.keyEntities,
                  d = Xr(s),
                  h = Us(f, d);
                return {
                  keyEntities: h.filter(function (b) {
                    var S = f.find(function (y) {
                      var E = y.key;
                      return b.key === E;
                    });
                    return !(S && S.status === yr && b.status === Ur);
                  }),
                };
              },
            },
          ],
        ),
        a
      );
    })(u.Component);
  return G(r, 'defaultProps', { component: 'div' }), r;
}
qs(la);
function Ys(e) {
  const { children: t } = e,
    [, r] = vt(),
    { motion: n } = r,
    o = u.useRef(!1);
  return (
    (o.current = o.current || n === !1),
    o.current ? u.createElement(js, { motion: n }, t) : t
  );
}
var Qs =
  (globalThis && globalThis.__rest) ||
  function (e, t) {
    var r = {};
    for (var n in e)
      Object.prototype.hasOwnProperty.call(e, n) &&
        t.indexOf(n) < 0 &&
        (r[n] = e[n]);
    if (e != null && typeof Object.getOwnPropertySymbols == 'function')
      for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
        t.indexOf(n[o]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, n[o]) &&
          (r[n[o]] = e[n[o]]);
    return r;
  };
const Zs = [
    'getTargetContainer',
    'getPopupContainer',
    'renderEmpty',
    'pageHeader',
    'input',
    'pagination',
    'form',
    'select',
    'button',
  ],
  Js = 'ant';
let ga;
function el() {
  return ga || Js;
}
function tl(e) {
  return Object.keys(e).some((t) => t.endsWith('Color'));
}
const rl = (e) => {
    let { prefixCls: t, iconPrefixCls: r, theme: n } = e;
    t !== void 0 && (ga = t), n && tl(n) && Ts(el(), n);
  },
  nl = (e) => {
    const {
        children: t,
        csp: r,
        autoInsertSpaceInButton: n,
        alert: o,
        anchor: a,
        form: i,
        locale: c,
        componentSize: l,
        direction: s,
        space: f,
        virtual: d,
        dropdownMatchSelectWidth: h,
        popupMatchSelectWidth: b,
        popupOverflow: S,
        legacyLocale: y,
        parentContext: E,
        iconPrefixCls: $,
        theme: C,
        componentDisabled: O,
        segmented: R,
        statistic: P,
        spin: T,
        calendar: m,
        carousel: z,
        cascader: j,
        collapse: L,
        typography: B,
        checkbox: k,
        descriptions: M,
        divider: F,
        drawer: H,
        skeleton: v,
        steps: g,
        image: p,
        layout: x,
        list: A,
        mentions: w,
        modal: _,
        progress: X,
        result: q,
        slider: ne,
        breadcrumb: oe,
        menu: ae,
        pagination: tt,
        input: Fe,
        empty: Pe,
        badge: Se,
        radio: We,
        rate: je,
        switch: Ge,
        transfer: de,
        avatar: rt,
        message: Oe,
        tag: Ae,
        table: Y,
        card: N,
        tabs: W,
        timeline: re,
        timePicker: Ie,
        upload: $a,
        notification: Ra,
        tree: Pa,
        colorPicker: ja,
        datePicker: Ia,
        wave: Ma,
      } = e,
      La = u.useCallback(
        (Z, ee) => {
          const { prefixCls: me } = e;
          if (ee) return ee;
          const be = me || E.getPrefixCls('');
          return Z ? `${be}-${Z}` : be;
        },
        [E.getPrefixCls, e.prefixCls],
      ),
      Ue = $ || E.iconPrefixCls || Jo,
      _a = Ue !== E.iconPrefixCls,
      nt = r || E.csp,
      Ba = ta(Ue, nt),
      cr = Rs(C, E.theme),
      sr = {
        csp: nt,
        autoInsertSpaceInButton: n,
        alert: o,
        anchor: a,
        locale: c || y,
        direction: s,
        space: f,
        virtual: d,
        popupMatchSelectWidth: b ?? h,
        popupOverflow: S,
        getPrefixCls: La,
        iconPrefixCls: Ue,
        theme: cr,
        segmented: R,
        statistic: P,
        spin: T,
        calendar: m,
        carousel: z,
        cascader: j,
        collapse: L,
        typography: B,
        checkbox: k,
        descriptions: M,
        divider: F,
        drawer: H,
        skeleton: v,
        steps: g,
        image: p,
        input: Fe,
        layout: x,
        list: A,
        mentions: w,
        modal: _,
        progress: X,
        result: q,
        slider: ne,
        breadcrumb: oe,
        menu: ae,
        pagination: tt,
        empty: Pe,
        badge: Se,
        radio: We,
        rate: je,
        switch: Ge,
        transfer: de,
        avatar: rt,
        message: Oe,
        tag: Ae,
        table: Y,
        card: N,
        tabs: W,
        timeline: re,
        timePicker: Ie,
        upload: $a,
        notification: Ra,
        tree: Pa,
        colorPicker: ja,
        datePicker: Ia,
        wave: Ma,
      },
      yt = Object.assign({}, E);
    Object.keys(sr).forEach((Z) => {
      sr[Z] !== void 0 && (yt[Z] = sr[Z]);
    }),
      Zs.forEach((Z) => {
        const ee = e[Z];
        ee && (yt[Z] = ee);
      });
    const St = po(
        () => yt,
        yt,
        (Z, ee) => {
          const me = Object.keys(Z),
            be = Object.keys(ee);
          return me.length !== be.length || me.some((xt) => Z[xt] !== ee[xt]);
        },
      ),
      ka = u.useMemo(() => ({ prefixCls: Ue, csp: nt }), [Ue, nt]);
    let ie = _a ? Ba(t) : t;
    const mn = u.useMemo(() => {
      var Z, ee, me, be;
      return xc(
        ((Z = tr.Form) === null || Z === void 0
          ? void 0
          : Z.defaultValidateMessages) || {},
        ((me =
          (ee = St.locale) === null || ee === void 0 ? void 0 : ee.Form) ===
          null || me === void 0
          ? void 0
          : me.defaultValidateMessages) || {},
        ((be = St.form) === null || be === void 0
          ? void 0
          : be.validateMessages) || {},
        (i == null ? void 0 : i.validateMessages) || {},
      );
    }, [St, i == null ? void 0 : i.validateMessages]);
    Object.keys(mn).length > 0 &&
      (ie = u.createElement(Cc.Provider, { value: mn }, t)),
      c && (ie = u.createElement(Ic, { locale: c, _ANT_MARK__: Pc }, ie)),
      (Ue || nt) && (ie = u.createElement(ln.Provider, { value: ka }, ie)),
      l && (ie = u.createElement(As, { size: l }, ie)),
      (ie = u.createElement(Ys, null, ie));
    const Ha = u.useMemo(() => {
      const Z = cr || {},
        { algorithm: ee, token: me, components: be } = Z,
        xt = Qs(Z, ['algorithm', 'token', 'components']),
        bn = ee && (!Array.isArray(ee) || ee.length > 0) ? jr(ee) : Ko,
        yn = {};
      return (
        Object.entries(be || {}).forEach((za) => {
          let [Na, Da] = za;
          const xe = Object.assign({}, Da);
          'algorithm' in xe &&
            (xe.algorithm === !0
              ? (xe.theme = bn)
              : (Array.isArray(xe.algorithm) ||
                  typeof xe.algorithm == 'function') &&
                (xe.theme = jr(xe.algorithm)),
            delete xe.algorithm),
            (yn[Na] = xe);
        }),
        Object.assign(Object.assign({}, xt), {
          theme: bn,
          token: Object.assign(Object.assign({}, rr), me),
          components: yn,
        })
      );
    }, [cr]);
    return (
      C && (ie = u.createElement(Yo.Provider, { value: Ha }, ie)),
      O !== void 0 && (ie = u.createElement(Os, { disabled: O }, ie)),
      u.createElement(Re.Provider, { value: St }, ie)
    );
  },
  mt = (e) => {
    const t = u.useContext(Re),
      r = u.useContext(Wo);
    return u.createElement(
      nl,
      Object.assign({ parentContext: t, legacyLocale: r }, e),
    );
  };
mt.ConfigContext = Re;
mt.SizeContext = nr;
mt.config = rl;
mt.useConfig = $s;
Object.defineProperty(mt, 'SizeContext', { get: () => nr });
function ha(e) {
  var t;
  return e == null || (t = e.getRootNode) === null || t === void 0
    ? void 0
    : t.call(e);
}
function ol(e) {
  return ha(e) instanceof ShadowRoot;
}
function al(e) {
  return ol(e) ? ha(e) : null;
}
function il(e) {
  return e.replace(/-(.)/g, function (t, r) {
    return r.toUpperCase();
  });
}
function cl(e, t) {
  pt(e, '[@ant-design/icons] '.concat(t));
}
function Jn(e) {
  return (
    K(e) === 'object' &&
    typeof e.name == 'string' &&
    typeof e.theme == 'string' &&
    (K(e.icon) === 'object' || typeof e.icon == 'function')
  );
}
function eo() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return Object.keys(e).reduce(function (t, r) {
    var n = e[r];
    switch (r) {
      case 'class':
        (t.className = n), delete t.class;
        break;
      default:
        delete t[r], (t[il(r)] = n);
    }
    return t;
  }, {});
}
function Vr(e, t, r) {
  return r
    ? U.createElement(
        e.tag,
        I(I({ key: t }, eo(e.attrs)), r),
        (e.children || []).map(function (n, o) {
          return Vr(n, ''.concat(t, '-').concat(e.tag, '-').concat(o));
        }),
      )
    : U.createElement(
        e.tag,
        I({ key: t }, eo(e.attrs)),
        (e.children || []).map(function (n, o) {
          return Vr(n, ''.concat(t, '-').concat(e.tag, '-').concat(o));
        }),
      );
}
function pa(e) {
  return Ne(e)[0];
}
function va(e) {
  return e ? (Array.isArray(e) ? e : [e]) : [];
}
var sl = `
.anticon {
  display: inline-block;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.anticon > * {
  line-height: 1;
}

.anticon svg {
  display: inline-block;
}

.anticon::before {
  display: none;
}

.anticon .anticon-icon {
  display: block;
}

.anticon[tabindex] {
  cursor: pointer;
}

.anticon-spin::before,
.anticon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`,
  ll = function (t) {
    var r = u.useContext(ln),
      n = r.csp,
      o = r.prefixCls,
      a = sl;
    o && (a = a.replace(/anticon/g, o)),
      u.useEffect(function () {
        var i = t.current,
          c = al(i);
        st(a, '@ant-design-icons', { prepend: !0, csp: n, attachTo: c });
      }, []);
  },
  ul = [
    'icon',
    'className',
    'onClick',
    'style',
    'primaryColor',
    'secondaryColor',
  ],
  it = { primaryColor: '#333', secondaryColor: '#E6E6E6', calculated: !1 };
function fl(e) {
  var t = e.primaryColor,
    r = e.secondaryColor;
  (it.primaryColor = t),
    (it.secondaryColor = r || pa(t)),
    (it.calculated = !!r);
}
function dl() {
  return I({}, it);
}
var or = function (t) {
  var r = t.icon,
    n = t.className,
    o = t.onClick,
    a = t.style,
    i = t.primaryColor,
    c = t.secondaryColor,
    l = ct(t, ul),
    s = u.useRef(),
    f = it;
  if (
    (i && (f = { primaryColor: i, secondaryColor: c || pa(i) }),
    ll(s),
    cl(Jn(r), 'icon should be icon definiton, but got '.concat(r)),
    !Jn(r))
  )
    return null;
  var d = r;
  return (
    d &&
      typeof d.icon == 'function' &&
      (d = I(I({}, d), {}, { icon: d.icon(f.primaryColor, f.secondaryColor) })),
    Vr(
      d.icon,
      'svg-'.concat(d.name),
      I(
        I(
          {
            className: n,
            onClick: o,
            style: a,
            'data-icon': d.name,
            width: '1em',
            height: '1em',
            fill: 'currentColor',
            'aria-hidden': 'true',
          },
          l,
        ),
        {},
        { ref: s },
      ),
    )
  );
};
or.displayName = 'IconReact';
or.getTwoToneColors = dl;
or.setTwoToneColors = fl;
const gn = or;
function ma(e) {
  var t = va(e),
    r = V(t, 2),
    n = r[0],
    o = r[1];
  return gn.setTwoToneColors({ primaryColor: n, secondaryColor: o });
}
function gl() {
  var e = gn.getTwoToneColors();
  return e.calculated ? [e.primaryColor, e.secondaryColor] : e.primaryColor;
}
var hl = [
  'className',
  'icon',
  'spin',
  'rotate',
  'tabIndex',
  'onClick',
  'twoToneColor',
];
ma(Yc.primary);
var ar = u.forwardRef(function (e, t) {
  var r,
    n = e.className,
    o = e.icon,
    a = e.spin,
    i = e.rotate,
    c = e.tabIndex,
    l = e.onClick,
    s = e.twoToneColor,
    f = ct(e, hl),
    d = u.useContext(ln),
    h = d.prefixCls,
    b = h === void 0 ? 'anticon' : h,
    S = d.rootClassName,
    y = pe(
      S,
      b,
      ((r = {}),
      G(r, ''.concat(b, '-').concat(o.name), !!o.name),
      G(r, ''.concat(b, '-spin'), !!a || o.name === 'loading'),
      r),
      n,
    ),
    E = c;
  E === void 0 && l && (E = -1);
  var $ = i
      ? {
          msTransform: 'rotate('.concat(i, 'deg)'),
          transform: 'rotate('.concat(i, 'deg)'),
        }
      : void 0,
    C = va(s),
    O = V(C, 2),
    R = O[0],
    P = O[1];
  return u.createElement(
    'span',
    Qe({ role: 'img', 'aria-label': o.name }, f, {
      ref: t,
      tabIndex: E,
      onClick: l,
      className: y,
    }),
    u.createElement(gn, {
      icon: o,
      primaryColor: R,
      secondaryColor: P,
      style: $,
    }),
  );
});
ar.displayName = 'AntdIcon';
ar.getTwoToneColor = gl;
ar.setTwoToneColor = ma;
const pl = ar,
  { isValidElement: ba } = Qr;
function vl(e) {
  return e && ba(e) && e.type === u.Fragment;
}
function ml(e, t, r) {
  return ba(e)
    ? u.cloneElement(e, typeof r == 'function' ? r(e.props || {}) : r)
    : t;
}
function ya(e, t) {
  return ml(e, e, t);
}
var bl = {
  icon: {
    tag: 'svg',
    attrs: { viewBox: '0 0 1024 1024', focusable: 'false' },
    children: [
      {
        tag: 'path',
        attrs: {
          d: 'M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z',
        },
      },
    ],
  },
  name: 'loading',
  theme: 'outlined',
};
const yl = bl;
var Sl = function (t, r) {
  return u.createElement(pl, Qe({}, t, { ref: r, icon: yl }));
};
const xl = u.forwardRef(Sl);
function ft() {
  ft = function () {
    return t;
  };
  var e,
    t = {},
    r = Object.prototype,
    n = r.hasOwnProperty,
    o =
      Object.defineProperty ||
      function (v, g, p) {
        v[g] = p.value;
      },
    a = typeof Symbol == 'function' ? Symbol : {},
    i = a.iterator || '@@iterator',
    c = a.asyncIterator || '@@asyncIterator',
    l = a.toStringTag || '@@toStringTag';
  function s(v, g, p) {
    return (
      Object.defineProperty(v, g, {
        value: p,
        enumerable: !0,
        configurable: !0,
        writable: !0,
      }),
      v[g]
    );
  }
  try {
    s({}, '');
  } catch {
    s = function (p, x, A) {
      return (p[x] = A);
    };
  }
  function f(v, g, p, x) {
    var A = g && g.prototype instanceof $ ? g : $,
      w = Object.create(A.prototype),
      _ = new F(x || []);
    return o(w, '_invoke', { value: L(v, p, _) }), w;
  }
  function d(v, g, p) {
    try {
      return { type: 'normal', arg: v.call(g, p) };
    } catch (x) {
      return { type: 'throw', arg: x };
    }
  }
  t.wrap = f;
  var h = 'suspendedStart',
    b = 'suspendedYield',
    S = 'executing',
    y = 'completed',
    E = {};
  function $() {}
  function C() {}
  function O() {}
  var R = {};
  s(R, i, function () {
    return this;
  });
  var P = Object.getPrototypeOf,
    T = P && P(P(H([])));
  T && T !== r && n.call(T, i) && (R = T);
  var m = (O.prototype = $.prototype = Object.create(R));
  function z(v) {
    ['next', 'throw', 'return'].forEach(function (g) {
      s(v, g, function (p) {
        return this._invoke(g, p);
      });
    });
  }
  function j(v, g) {
    function p(A, w, _, X) {
      var q = d(v[A], v, w);
      if (q.type !== 'throw') {
        var ne = q.arg,
          oe = ne.value;
        return oe && K(oe) == 'object' && n.call(oe, '__await')
          ? g.resolve(oe.__await).then(
              function (ae) {
                p('next', ae, _, X);
              },
              function (ae) {
                p('throw', ae, _, X);
              },
            )
          : g.resolve(oe).then(
              function (ae) {
                (ne.value = ae), _(ne);
              },
              function (ae) {
                return p('throw', ae, _, X);
              },
            );
      }
      X(q.arg);
    }
    var x;
    o(this, '_invoke', {
      value: function (w, _) {
        function X() {
          return new g(function (q, ne) {
            p(w, _, q, ne);
          });
        }
        return (x = x ? x.then(X, X) : X());
      },
    });
  }
  function L(v, g, p) {
    var x = h;
    return function (A, w) {
      if (x === S) throw new Error('Generator is already running');
      if (x === y) {
        if (A === 'throw') throw w;
        return { value: e, done: !0 };
      }
      for (p.method = A, p.arg = w; ; ) {
        var _ = p.delegate;
        if (_) {
          var X = B(_, p);
          if (X) {
            if (X === E) continue;
            return X;
          }
        }
        if (p.method === 'next') p.sent = p._sent = p.arg;
        else if (p.method === 'throw') {
          if (x === h) throw ((x = y), p.arg);
          p.dispatchException(p.arg);
        } else p.method === 'return' && p.abrupt('return', p.arg);
        x = S;
        var q = d(v, g, p);
        if (q.type === 'normal') {
          if (((x = p.done ? y : b), q.arg === E)) continue;
          return { value: q.arg, done: p.done };
        }
        q.type === 'throw' && ((x = y), (p.method = 'throw'), (p.arg = q.arg));
      }
    };
  }
  function B(v, g) {
    var p = g.method,
      x = v.iterator[p];
    if (x === e)
      return (
        (g.delegate = null),
        (p === 'throw' &&
          v.iterator.return &&
          ((g.method = 'return'),
          (g.arg = e),
          B(v, g),
          g.method === 'throw')) ||
          (p !== 'return' &&
            ((g.method = 'throw'),
            (g.arg = new TypeError(
              "The iterator does not provide a '" + p + "' method",
            )))),
        E
      );
    var A = d(x, v.iterator, g.arg);
    if (A.type === 'throw')
      return (g.method = 'throw'), (g.arg = A.arg), (g.delegate = null), E;
    var w = A.arg;
    return w
      ? w.done
        ? ((g[v.resultName] = w.value),
          (g.next = v.nextLoc),
          g.method !== 'return' && ((g.method = 'next'), (g.arg = e)),
          (g.delegate = null),
          E)
        : w
      : ((g.method = 'throw'),
        (g.arg = new TypeError('iterator result is not an object')),
        (g.delegate = null),
        E);
  }
  function k(v) {
    var g = { tryLoc: v[0] };
    1 in v && (g.catchLoc = v[1]),
      2 in v && ((g.finallyLoc = v[2]), (g.afterLoc = v[3])),
      this.tryEntries.push(g);
  }
  function M(v) {
    var g = v.completion || {};
    (g.type = 'normal'), delete g.arg, (v.completion = g);
  }
  function F(v) {
    (this.tryEntries = [{ tryLoc: 'root' }]),
      v.forEach(k, this),
      this.reset(!0);
  }
  function H(v) {
    if (v || v === '') {
      var g = v[i];
      if (g) return g.call(v);
      if (typeof v.next == 'function') return v;
      if (!isNaN(v.length)) {
        var p = -1,
          x = function A() {
            for (; ++p < v.length; )
              if (n.call(v, p)) return (A.value = v[p]), (A.done = !1), A;
            return (A.value = e), (A.done = !0), A;
          };
        return (x.next = x);
      }
    }
    throw new TypeError(K(v) + ' is not iterable');
  }
  return (
    (C.prototype = O),
    o(m, 'constructor', { value: O, configurable: !0 }),
    o(O, 'constructor', { value: C, configurable: !0 }),
    (C.displayName = s(O, l, 'GeneratorFunction')),
    (t.isGeneratorFunction = function (v) {
      var g = typeof v == 'function' && v.constructor;
      return (
        !!g && (g === C || (g.displayName || g.name) === 'GeneratorFunction')
      );
    }),
    (t.mark = function (v) {
      return (
        Object.setPrototypeOf
          ? Object.setPrototypeOf(v, O)
          : ((v.__proto__ = O), s(v, l, 'GeneratorFunction')),
        (v.prototype = Object.create(m)),
        v
      );
    }),
    (t.awrap = function (v) {
      return { __await: v };
    }),
    z(j.prototype),
    s(j.prototype, c, function () {
      return this;
    }),
    (t.AsyncIterator = j),
    (t.async = function (v, g, p, x, A) {
      A === void 0 && (A = Promise);
      var w = new j(f(v, g, p, x), A);
      return t.isGeneratorFunction(g)
        ? w
        : w.next().then(function (_) {
            return _.done ? _.value : w.next();
          });
    }),
    z(m),
    s(m, l, 'Generator'),
    s(m, i, function () {
      return this;
    }),
    s(m, 'toString', function () {
      return '[object Generator]';
    }),
    (t.keys = function (v) {
      var g = Object(v),
        p = [];
      for (var x in g) p.push(x);
      return (
        p.reverse(),
        function A() {
          for (; p.length; ) {
            var w = p.pop();
            if (w in g) return (A.value = w), (A.done = !1), A;
          }
          return (A.done = !0), A;
        }
      );
    }),
    (t.values = H),
    (F.prototype = {
      constructor: F,
      reset: function (g) {
        if (
          ((this.prev = 0),
          (this.next = 0),
          (this.sent = this._sent = e),
          (this.done = !1),
          (this.delegate = null),
          (this.method = 'next'),
          (this.arg = e),
          this.tryEntries.forEach(M),
          !g)
        )
          for (var p in this)
            p.charAt(0) === 't' &&
              n.call(this, p) &&
              !isNaN(+p.slice(1)) &&
              (this[p] = e);
      },
      stop: function () {
        this.done = !0;
        var g = this.tryEntries[0].completion;
        if (g.type === 'throw') throw g.arg;
        return this.rval;
      },
      dispatchException: function (g) {
        if (this.done) throw g;
        var p = this;
        function x(ne, oe) {
          return (
            (_.type = 'throw'),
            (_.arg = g),
            (p.next = ne),
            oe && ((p.method = 'next'), (p.arg = e)),
            !!oe
          );
        }
        for (var A = this.tryEntries.length - 1; A >= 0; --A) {
          var w = this.tryEntries[A],
            _ = w.completion;
          if (w.tryLoc === 'root') return x('end');
          if (w.tryLoc <= this.prev) {
            var X = n.call(w, 'catchLoc'),
              q = n.call(w, 'finallyLoc');
            if (X && q) {
              if (this.prev < w.catchLoc) return x(w.catchLoc, !0);
              if (this.prev < w.finallyLoc) return x(w.finallyLoc);
            } else if (X) {
              if (this.prev < w.catchLoc) return x(w.catchLoc, !0);
            } else {
              if (!q) throw new Error('try statement without catch or finally');
              if (this.prev < w.finallyLoc) return x(w.finallyLoc);
            }
          }
        }
      },
      abrupt: function (g, p) {
        for (var x = this.tryEntries.length - 1; x >= 0; --x) {
          var A = this.tryEntries[x];
          if (
            A.tryLoc <= this.prev &&
            n.call(A, 'finallyLoc') &&
            this.prev < A.finallyLoc
          ) {
            var w = A;
            break;
          }
        }
        w &&
          (g === 'break' || g === 'continue') &&
          w.tryLoc <= p &&
          p <= w.finallyLoc &&
          (w = null);
        var _ = w ? w.completion : {};
        return (
          (_.type = g),
          (_.arg = p),
          w
            ? ((this.method = 'next'), (this.next = w.finallyLoc), E)
            : this.complete(_)
        );
      },
      complete: function (g, p) {
        if (g.type === 'throw') throw g.arg;
        return (
          g.type === 'break' || g.type === 'continue'
            ? (this.next = g.arg)
            : g.type === 'return'
            ? ((this.rval = this.arg = g.arg),
              (this.method = 'return'),
              (this.next = 'end'))
            : g.type === 'normal' && p && (this.next = p),
          E
        );
      },
      finish: function (g) {
        for (var p = this.tryEntries.length - 1; p >= 0; --p) {
          var x = this.tryEntries[p];
          if (x.finallyLoc === g)
            return this.complete(x.completion, x.afterLoc), M(x), E;
        }
      },
      catch: function (g) {
        for (var p = this.tryEntries.length - 1; p >= 0; --p) {
          var x = this.tryEntries[p];
          if (x.tryLoc === g) {
            var A = x.completion;
            if (A.type === 'throw') {
              var w = A.arg;
              M(x);
            }
            return w;
          }
        }
        throw new Error('illegal catch attempt');
      },
      delegateYield: function (g, p, x) {
        return (
          (this.delegate = { iterator: H(g), resultName: p, nextLoc: x }),
          this.method === 'next' && (this.arg = e),
          E
        );
      },
    }),
    t
  );
}
function to(e, t, r, n, o, a, i) {
  try {
    var c = e[a](i),
      l = c.value;
  } catch (s) {
    r(s);
    return;
  }
  c.done ? t(l) : Promise.resolve(l).then(n, o);
}
function Sa(e) {
  return function () {
    var t = this,
      r = arguments;
    return new Promise(function (n, o) {
      var a = e.apply(t, r);
      function i(l) {
        to(a, n, o, i, c, 'next', l);
      }
      function c(l) {
        to(a, n, o, i, c, 'throw', l);
      }
      i(void 0);
    });
  };
}
var bt = I({}, Ga),
  Cl = bt.version,
  El = bt.render,
  wl = bt.unmountComponentAtNode,
  ir;
try {
  var Tl = Number((Cl || '').split('.')[0]);
  Tl >= 18 && (ir = bt.createRoot);
} catch {}
function ro(e) {
  var t = bt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  t && K(t) === 'object' && (t.usingClientEntryPoint = e);
}
var Nt = '__rc_react_root__';
function Ol(e, t) {
  ro(!0);
  var r = t[Nt] || ir(t);
  ro(!1), r.render(e), (t[Nt] = r);
}
function Al(e, t) {
  El(e, t);
}
function $l(e, t) {
  if (ir) {
    Ol(e, t);
    return;
  }
  Al(e, t);
}
function Rl(e) {
  return Kr.apply(this, arguments);
}
function Kr() {
  return (
    (Kr = Sa(
      ft().mark(function e(t) {
        return ft().wrap(function (n) {
          for (;;)
            switch ((n.prev = n.next)) {
              case 0:
                return n.abrupt(
                  'return',
                  Promise.resolve().then(function () {
                    var o;
                    (o = t[Nt]) === null || o === void 0 || o.unmount(),
                      delete t[Nt];
                  }),
                );
              case 1:
              case 'end':
                return n.stop();
            }
        }, e);
      }),
    )),
    Kr.apply(this, arguments)
  );
}
function Pl(e) {
  wl(e);
}
function jl(e) {
  return qr.apply(this, arguments);
}
function qr() {
  return (
    (qr = Sa(
      ft().mark(function e(t) {
        return ft().wrap(function (n) {
          for (;;)
            switch ((n.prev = n.next)) {
              case 0:
                if (ir === void 0) {
                  n.next = 2;
                  break;
                }
                return n.abrupt('return', Rl(t));
              case 2:
                Pl(t);
              case 3:
              case 'end':
                return n.stop();
            }
        }, e);
      }),
    )),
    qr.apply(this, arguments)
  );
}
const Il = function (e) {
    if (!e) return !1;
    if (e instanceof Element) {
      if (e.offsetParent) return !0;
      if (e.getBBox) {
        var t = e.getBBox(),
          r = t.width,
          n = t.height;
        if (r || n) return !0;
      }
      if (e.getBoundingClientRect) {
        var o = e.getBoundingClientRect(),
          a = o.width,
          i = o.height;
        if (a || i) return !0;
      }
    }
    return !1;
  },
  Ml = (e) => {
    const { componentCls: t, colorPrimary: r } = e;
    return {
      [t]: {
        position: 'absolute',
        background: 'transparent',
        pointerEvents: 'none',
        boxSizing: 'border-box',
        color: `var(--wave-color, ${r})`,
        boxShadow: '0 0 0 0 currentcolor',
        opacity: 0.2,
        '&.wave-motion-appear': {
          transition: [
            `box-shadow 0.4s ${e.motionEaseOutCirc}`,
            `opacity 2s ${e.motionEaseOutCirc}`,
          ].join(','),
          '&-active': { boxShadow: '0 0 0 6px currentcolor', opacity: 0 },
          '&.wave-quick': {
            transition: [
              `box-shadow 0.3s ${e.motionEaseInOut}`,
              `opacity 0.35s ${e.motionEaseInOut}`,
            ].join(','),
          },
        },
      },
    };
  },
  Ll = un('Wave', (e) => [Ml(e)]);
function _l(e) {
  const t = (e || '').match(/rgba?\((\d*), (\d*), (\d*)(, [\d.]*)?\)/);
  return t && t[1] && t[2] && t[3] ? !(t[1] === t[2] && t[2] === t[3]) : !0;
}
function Sr(e) {
  return (
    e &&
    e !== '#fff' &&
    e !== '#ffffff' &&
    e !== 'rgb(255, 255, 255)' &&
    e !== 'rgba(255, 255, 255, 1)' &&
    _l(e) &&
    !/rgba\((?:\d*, ){3}0\)/.test(e) &&
    e !== 'transparent'
  );
}
function Bl(e) {
  const {
    borderTopColor: t,
    borderColor: r,
    backgroundColor: n,
  } = getComputedStyle(e);
  return Sr(t) ? t : Sr(r) ? r : Sr(n) ? n : null;
}
const xa = 'ant-wave-target';
function xr(e) {
  return Number.isNaN(e) ? 0 : e;
}
const kl = (e) => {
    const { className: t, target: r, component: n } = e,
      o = u.useRef(null),
      [a, i] = u.useState(null),
      [c, l] = u.useState([]),
      [s, f] = u.useState(0),
      [d, h] = u.useState(0),
      [b, S] = u.useState(0),
      [y, E] = u.useState(0),
      [$, C] = u.useState(!1),
      O = {
        left: s,
        top: d,
        width: b,
        height: y,
        borderRadius: c.map((T) => `${T}px`).join(' '),
      };
    a && (O['--wave-color'] = a);
    function R() {
      const T = getComputedStyle(r);
      i(Bl(r));
      const m = T.position === 'static',
        { borderLeftWidth: z, borderTopWidth: j } = T;
      f(m ? r.offsetLeft : xr(-parseFloat(z))),
        h(m ? r.offsetTop : xr(-parseFloat(j))),
        S(r.offsetWidth),
        E(r.offsetHeight);
      const {
        borderTopLeftRadius: L,
        borderTopRightRadius: B,
        borderBottomLeftRadius: k,
        borderBottomRightRadius: M,
      } = T;
      l([L, B, M, k].map((F) => xr(parseFloat(F))));
    }
    if (
      (u.useEffect(() => {
        if (r) {
          const T = ze(() => {
            R(), C(!0);
          });
          let m;
          return (
            typeof ResizeObserver < 'u' &&
              ((m = new ResizeObserver(R)), m.observe(r)),
            () => {
              ze.cancel(T), m == null || m.disconnect();
            }
          );
        }
      }, []),
      !$)
    )
      return null;
    const P =
      (n === 'Checkbox' || n === 'Radio') &&
      (r == null ? void 0 : r.classList.contains(xa));
    return u.createElement(
      dn,
      {
        visible: !0,
        motionAppear: !0,
        motionName: 'wave-motion',
        motionDeadline: 5e3,
        onAppearEnd: (T, m) => {
          var z;
          if (m.deadline || m.propertyName === 'opacity') {
            const j =
              (z = o.current) === null || z === void 0
                ? void 0
                : z.parentElement;
            jl(j).then(() => {
              j == null || j.remove();
            });
          }
          return !1;
        },
      },
      (T) => {
        let { className: m } = T;
        return u.createElement('div', {
          ref: o,
          className: pe(t, { 'wave-quick': P }, m),
          style: O,
        });
      },
    );
  },
  Hl = (e, t) => {
    var r;
    const { component: n } = t;
    if (
      n === 'Checkbox' &&
      !(!((r = e.querySelector('input')) === null || r === void 0) && r.checked)
    )
      return;
    const o = document.createElement('div');
    (o.style.position = 'absolute'),
      (o.style.left = '0px'),
      (o.style.top = '0px'),
      e == null || e.insertBefore(o, e == null ? void 0 : e.firstChild),
      $l(u.createElement(kl, Object.assign({}, t, { target: e })), o);
  },
  zl = Hl;
function Nl(e, t, r) {
  const { wave: n } = u.useContext(Re),
    [, o, a] = vt(),
    i = ds((s) => {
      const f = e.current;
      if ((n != null && n.disabled) || !f) return;
      const d = f.querySelector(`.${xa}`) || f,
        { showEffect: h } = n || {};
      (h || zl)(d, {
        className: t,
        token: o,
        component: r,
        event: s,
        hashId: a,
      });
    }),
    c = u.useRef();
  return (s) => {
    ze.cancel(c.current),
      (c.current = ze(() => {
        i(s);
      }));
  };
}
const Dl = (e) => {
    const { children: t, disabled: r, component: n } = e,
      { getPrefixCls: o } = u.useContext(Re),
      a = u.useRef(null),
      i = o('wave'),
      [, c] = Ll(i),
      l = Nl(a, pe(i, c), n);
    if (
      (U.useEffect(() => {
        const f = a.current;
        if (!f || f.nodeType !== 1 || r) return;
        const d = (h) => {
          !Il(h.target) ||
            !f.getAttribute ||
            f.getAttribute('disabled') ||
            f.disabled ||
            f.className.includes('disabled') ||
            f.className.includes('-leave') ||
            l(h);
        };
        return (
          f.addEventListener('click', d, !0),
          () => {
            f.removeEventListener('click', d, !0);
          }
        );
      }, [r]),
      !U.isValidElement(t))
    )
      return t ?? null;
    const s = bo(t) ? mo(t.ref, a) : a;
    return ya(t, { ref: s });
  },
  Fl = Dl,
  Wl = (e) => {
    const t = U.useContext(nr);
    return U.useMemo(
      () =>
        e
          ? typeof e == 'string'
            ? e ?? t
            : e instanceof Function
            ? e(t)
            : t
          : t,
      [e, t],
    );
  },
  Gl = Wl;
globalThis && globalThis.__rest;
const Ul = u.createContext(null),
  Xl = (e, t) => {
    const r = u.useContext(Ul),
      n = u.useMemo(() => {
        if (!r) return '';
        const { compactDirection: o, isFirstItem: a, isLastItem: i } = r,
          c = o === 'vertical' ? '-vertical-' : '-';
        return pe(`${e}-compact${c}item`, {
          [`${e}-compact${c}first-item`]: a,
          [`${e}-compact${c}last-item`]: i,
          [`${e}-compact${c}item-rtl`]: t === 'rtl',
        });
      }, [e, t, r]);
    return {
      compactSize: r == null ? void 0 : r.compactSize,
      compactDirection: r == null ? void 0 : r.compactDirection,
      compactItemClassnames: n,
    };
  };
var Vl =
  (globalThis && globalThis.__rest) ||
  function (e, t) {
    var r = {};
    for (var n in e)
      Object.prototype.hasOwnProperty.call(e, n) &&
        t.indexOf(n) < 0 &&
        (r[n] = e[n]);
    if (e != null && typeof Object.getOwnPropertySymbols == 'function')
      for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
        t.indexOf(n[o]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, n[o]) &&
          (r[n[o]] = e[n[o]]);
    return r;
  };
const Ca = u.createContext(void 0),
  Kl = (e) => {
    const { getPrefixCls: t, direction: r } = u.useContext(Re),
      { prefixCls: n, size: o, className: a } = e,
      i = Vl(e, ['prefixCls', 'size', 'className']),
      c = t('btn-group', n),
      [, , l] = vt();
    let s = '';
    switch (o) {
      case 'large':
        s = 'lg';
        break;
      case 'small':
        s = 'sm';
        break;
    }
    const f = pe(c, { [`${c}-${s}`]: s, [`${c}-rtl`]: r === 'rtl' }, a, l);
    return u.createElement(
      Ca.Provider,
      { value: o },
      u.createElement('div', Object.assign({}, i, { className: f })),
    );
  },
  ql = Kl,
  no = /^[\u4e00-\u9fa5]{2}$/,
  Yr = no.test.bind(no);
function oo(e) {
  return typeof e == 'string';
}
function Cr(e) {
  return e === 'text' || e === 'link';
}
function Yl(e, t) {
  if (e == null) return;
  const r = t ? ' ' : '';
  return typeof e != 'string' &&
    typeof e != 'number' &&
    oo(e.type) &&
    Yr(e.props.children)
    ? ya(e, { children: e.props.children.split('').join(r) })
    : oo(e)
    ? Yr(e)
      ? U.createElement('span', null, e.split('').join(r))
      : U.createElement('span', null, e)
    : vl(e)
    ? U.createElement('span', null, e)
    : e;
}
function Ql(e, t) {
  let r = !1;
  const n = [];
  return (
    U.Children.forEach(e, (o) => {
      const a = typeof o,
        i = a === 'string' || a === 'number';
      if (r && i) {
        const c = n.length - 1,
          l = n[c];
        n[c] = `${l}${o}`;
      } else n.push(o);
      r = i;
    }),
    U.Children.map(n, (o) => Yl(o, t))
  );
}
const Zl = u.forwardRef((e, t) => {
    const { className: r, style: n, children: o, prefixCls: a } = e,
      i = pe(`${a}-icon`, r);
    return U.createElement('span', { ref: t, className: i, style: n }, o);
  }),
  Ea = Zl,
  ao = u.forwardRef((e, t) => {
    let { prefixCls: r, className: n, style: o, iconClassName: a } = e;
    const i = pe(`${r}-loading-icon`, n);
    return U.createElement(
      Ea,
      { prefixCls: r, className: i, style: o, ref: t },
      U.createElement(xl, { className: a }),
    );
  }),
  Er = () => ({ width: 0, opacity: 0, transform: 'scale(0)' }),
  wr = (e) => ({ width: e.scrollWidth, opacity: 1, transform: 'scale(1)' }),
  Jl = (e) => {
    const {
        prefixCls: t,
        loading: r,
        existIcon: n,
        className: o,
        style: a,
      } = e,
      i = !!r;
    return n
      ? U.createElement(ao, { prefixCls: t, className: o, style: a })
      : U.createElement(
          dn,
          {
            visible: i,
            motionName: `${t}-loading-icon-motion`,
            removeOnLeave: !0,
            onAppearStart: Er,
            onAppearActive: wr,
            onEnterStart: Er,
            onEnterActive: wr,
            onLeaveStart: wr,
            onLeaveActive: Er,
          },
          (c, l) => {
            let { className: s, style: f } = c;
            return U.createElement(ao, {
              prefixCls: t,
              className: o,
              style: Object.assign(Object.assign({}, a), f),
              ref: l,
              iconClassName: s,
            });
          },
        );
  },
  eu = Jl,
  io = (e, t) => ({
    [`> span, > ${e}`]: {
      '&:not(:last-child)': {
        [`&, & > ${e}`]: { '&:not(:disabled)': { borderInlineEndColor: t } },
      },
      '&:not(:first-child)': {
        [`&, & > ${e}`]: { '&:not(:disabled)': { borderInlineStartColor: t } },
      },
    },
  }),
  tu = (e) => {
    const {
      componentCls: t,
      fontSize: r,
      lineWidth: n,
      groupBorderColor: o,
      colorErrorHover: a,
    } = e;
    return {
      [`${t}-group`]: [
        {
          position: 'relative',
          display: 'inline-flex',
          [`> span, > ${t}`]: {
            '&:not(:last-child)': {
              [`&, & > ${t}`]: {
                borderStartEndRadius: 0,
                borderEndEndRadius: 0,
              },
            },
            '&:not(:first-child)': {
              marginInlineStart: -n,
              [`&, & > ${t}`]: {
                borderStartStartRadius: 0,
                borderEndStartRadius: 0,
              },
            },
          },
          [t]: {
            position: 'relative',
            zIndex: 1,
            '&:hover,\n          &:focus,\n          &:active': { zIndex: 2 },
            '&[disabled]': { zIndex: 0 },
          },
          [`${t}-icon-only`]: { fontSize: r },
        },
        io(`${t}-primary`, o),
        io(`${t}-danger`, a),
      ],
    };
  },
  ru = tu,
  nu = (e) => {
    const { componentCls: t, iconCls: r, fontWeight: n } = e;
    return {
      [t]: {
        outline: 'none',
        position: 'relative',
        display: 'inline-block',
        fontWeight: n,
        whiteSpace: 'nowrap',
        textAlign: 'center',
        backgroundImage: 'none',
        backgroundColor: 'transparent',
        border: `${e.lineWidth}px ${e.lineType} transparent`,
        cursor: 'pointer',
        transition: `all ${e.motionDurationMid} ${e.motionEaseInOut}`,
        userSelect: 'none',
        touchAction: 'manipulation',
        lineHeight: e.lineHeight,
        color: e.colorText,
        '&:disabled > *': { pointerEvents: 'none' },
        '> span': { display: 'inline-block' },
        [`${t}-icon`]: { lineHeight: 0 },
        [`> ${r} + span, > span + ${r}`]: { marginInlineStart: e.marginXS },
        [`&:not(${t}-icon-only) > ${t}-icon`]: {
          [`&${t}-loading-icon, &:not(:last-child)`]: {
            marginInlineEnd: e.marginXS,
          },
        },
        '> a': { color: 'currentColor' },
        '&:not(:disabled)': Object.assign({}, bs(e)),
        [`&-icon-only${t}-compact-item`]: { flex: 'none' },
        [`&-compact-item${t}-primary`]: {
          [`&:not([disabled]) + ${t}-compact-item${t}-primary:not([disabled])`]:
            {
              position: 'relative',
              '&:before': {
                position: 'absolute',
                top: -e.lineWidth,
                insetInlineStart: -e.lineWidth,
                display: 'inline-block',
                width: e.lineWidth,
                height: `calc(100% + ${e.lineWidth * 2}px)`,
                backgroundColor: e.colorPrimaryHover,
                content: '""',
              },
            },
        },
        '&-compact-vertical-item': {
          [`&${t}-primary`]: {
            [`&:not([disabled]) + ${t}-compact-vertical-item${t}-primary:not([disabled])`]:
              {
                position: 'relative',
                '&:before': {
                  position: 'absolute',
                  top: -e.lineWidth,
                  insetInlineStart: -e.lineWidth,
                  display: 'inline-block',
                  width: `calc(100% + ${e.lineWidth * 2}px)`,
                  height: e.lineWidth,
                  backgroundColor: e.colorPrimaryHover,
                  content: '""',
                },
              },
          },
        },
      },
    };
  },
  Te = (e, t, r) => ({
    [`&:not(:disabled):not(${e}-disabled)`]: { '&:hover': t, '&:active': r },
  }),
  ou = (e) => ({
    minWidth: e.controlHeight,
    paddingInlineStart: 0,
    paddingInlineEnd: 0,
    borderRadius: '50%',
  }),
  au = (e) => ({
    borderRadius: e.controlHeight,
    paddingInlineStart: e.controlHeight / 2,
    paddingInlineEnd: e.controlHeight / 2,
  }),
  iu = (e) => ({
    cursor: 'not-allowed',
    borderColor: e.borderColorDisabled,
    color: e.colorTextDisabled,
    backgroundColor: e.colorBgContainerDisabled,
    boxShadow: 'none',
  }),
  dt = (e, t, r, n, o, a, i, c) => ({
    [`&${e}-background-ghost`]: Object.assign(
      Object.assign(
        {
          color: r || void 0,
          backgroundColor: t,
          borderColor: n || void 0,
          boxShadow: 'none',
        },
        Te(
          e,
          Object.assign({ backgroundColor: t }, i),
          Object.assign({ backgroundColor: t }, c),
        ),
      ),
      {
        '&:disabled': {
          cursor: 'not-allowed',
          color: o || void 0,
          borderColor: a || void 0,
        },
      },
    ),
  }),
  hn = (e) => ({
    [`&:disabled, &${e.componentCls}-disabled`]: Object.assign({}, iu(e)),
  }),
  wa = (e) => Object.assign({}, hn(e)),
  Dt = (e) => ({
    [`&:disabled, &${e.componentCls}-disabled`]: {
      cursor: 'not-allowed',
      color: e.colorTextDisabled,
    },
  }),
  Ta = (e) =>
    Object.assign(
      Object.assign(
        Object.assign(
          Object.assign(Object.assign({}, wa(e)), {
            backgroundColor: e.defaultBg,
            borderColor: e.defaultBorderColor,
            color: e.defaultColor,
            boxShadow: e.defaultShadow,
          }),
          Te(
            e.componentCls,
            { color: e.colorPrimaryHover, borderColor: e.colorPrimaryHover },
            { color: e.colorPrimaryActive, borderColor: e.colorPrimaryActive },
          ),
        ),
        dt(
          e.componentCls,
          e.ghostBg,
          e.defaultGhostColor,
          e.defaultGhostBorderColor,
          e.colorTextDisabled,
          e.colorBorder,
        ),
      ),
      {
        [`&${e.componentCls}-dangerous`]: Object.assign(
          Object.assign(
            Object.assign(
              { color: e.colorError, borderColor: e.colorError },
              Te(
                e.componentCls,
                {
                  color: e.colorErrorHover,
                  borderColor: e.colorErrorBorderHover,
                },
                { color: e.colorErrorActive, borderColor: e.colorErrorActive },
              ),
            ),
            dt(
              e.componentCls,
              e.ghostBg,
              e.colorError,
              e.colorError,
              e.colorTextDisabled,
              e.colorBorder,
            ),
          ),
          hn(e),
        ),
      },
    ),
  cu = (e) =>
    Object.assign(
      Object.assign(
        Object.assign(
          Object.assign(Object.assign({}, wa(e)), {
            color: e.primaryColor,
            backgroundColor: e.colorPrimary,
            boxShadow: e.primaryShadow,
          }),
          Te(
            e.componentCls,
            {
              color: e.colorTextLightSolid,
              backgroundColor: e.colorPrimaryHover,
            },
            {
              color: e.colorTextLightSolid,
              backgroundColor: e.colorPrimaryActive,
            },
          ),
        ),
        dt(
          e.componentCls,
          e.ghostBg,
          e.colorPrimary,
          e.colorPrimary,
          e.colorTextDisabled,
          e.colorBorder,
          { color: e.colorPrimaryHover, borderColor: e.colorPrimaryHover },
          { color: e.colorPrimaryActive, borderColor: e.colorPrimaryActive },
        ),
      ),
      {
        [`&${e.componentCls}-dangerous`]: Object.assign(
          Object.assign(
            Object.assign(
              {
                backgroundColor: e.colorError,
                boxShadow: e.dangerShadow,
                color: e.dangerColor,
              },
              Te(
                e.componentCls,
                { backgroundColor: e.colorErrorHover },
                { backgroundColor: e.colorErrorActive },
              ),
            ),
            dt(
              e.componentCls,
              e.ghostBg,
              e.colorError,
              e.colorError,
              e.colorTextDisabled,
              e.colorBorder,
              { color: e.colorErrorHover, borderColor: e.colorErrorHover },
              { color: e.colorErrorActive, borderColor: e.colorErrorActive },
            ),
          ),
          hn(e),
        ),
      },
    ),
  su = (e) =>
    Object.assign(Object.assign({}, Ta(e)), { borderStyle: 'dashed' }),
  lu = (e) =>
    Object.assign(
      Object.assign(
        Object.assign(
          { color: e.colorLink },
          Te(
            e.componentCls,
            { color: e.colorLinkHover, backgroundColor: e.linkHoverBg },
            { color: e.colorLinkActive },
          ),
        ),
        Dt(e),
      ),
      {
        [`&${e.componentCls}-dangerous`]: Object.assign(
          Object.assign(
            { color: e.colorError },
            Te(
              e.componentCls,
              { color: e.colorErrorHover },
              { color: e.colorErrorActive },
            ),
          ),
          Dt(e),
        ),
      },
    ),
  uu = (e) =>
    Object.assign(
      Object.assign(
        Object.assign(
          {},
          Te(
            e.componentCls,
            { color: e.colorText, backgroundColor: e.textHoverBg },
            { color: e.colorText, backgroundColor: e.colorBgTextActive },
          ),
        ),
        Dt(e),
      ),
      {
        [`&${e.componentCls}-dangerous`]: Object.assign(
          Object.assign({ color: e.colorError }, Dt(e)),
          Te(
            e.componentCls,
            { color: e.colorErrorHover, backgroundColor: e.colorErrorBg },
            { color: e.colorErrorHover, backgroundColor: e.colorErrorBg },
          ),
        ),
      },
    ),
  fu = (e) => {
    const { componentCls: t } = e;
    return {
      [`${t}-default`]: Ta(e),
      [`${t}-primary`]: cu(e),
      [`${t}-dashed`]: su(e),
      [`${t}-link`]: lu(e),
      [`${t}-text`]: uu(e),
      [`${t}-ghost`]: dt(
        e.componentCls,
        e.ghostBg,
        e.colorBgContainer,
        e.colorBgContainer,
        e.colorTextDisabled,
        e.colorBorder,
      ),
    };
  },
  pn = function (e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : '';
    const {
        componentCls: r,
        controlHeight: n,
        fontSize: o,
        lineHeight: a,
        lineWidth: i,
        borderRadius: c,
        buttonPaddingHorizontal: l,
        iconCls: s,
      } = e,
      f = Math.max(0, (n - o * a) / 2 - i),
      d = `${r}-icon-only`;
    return [
      {
        [`${r}${t}`]: {
          fontSize: o,
          height: n,
          padding: `${f}px ${l}px`,
          borderRadius: c,
          [`&${d}`]: {
            width: n,
            paddingInlineStart: 0,
            paddingInlineEnd: 0,
            [`&${r}-round`]: { width: 'auto' },
            [s]: { fontSize: e.buttonIconOnlyFontSize },
          },
          [`&${r}-loading`]: { opacity: e.opacityLoading, cursor: 'default' },
          [`${r}-loading-icon`]: {
            transition: `width ${e.motionDurationSlow} ${e.motionEaseInOut}, opacity ${e.motionDurationSlow} ${e.motionEaseInOut}`,
          },
        },
      },
      { [`${r}${r}-circle${t}`]: ou(e) },
      { [`${r}${r}-round${t}`]: au(e) },
    ];
  },
  du = (e) => pn(Je(e, { fontSize: e.contentFontSize })),
  gu = (e) => {
    const t = Je(e, {
      controlHeight: e.controlHeightSM,
      fontSize: e.contentFontSizeSM,
      padding: e.paddingXS,
      buttonPaddingHorizontal: e.paddingInlineSM,
      borderRadius: e.borderRadiusSM,
      buttonIconOnlyFontSize: e.onlyIconSizeSM,
    });
    return pn(t, `${e.componentCls}-sm`);
  },
  hu = (e) => {
    const t = Je(e, {
      controlHeight: e.controlHeightLG,
      fontSize: e.contentFontSizeLG,
      buttonPaddingHorizontal: e.paddingInlineLG,
      borderRadius: e.borderRadiusLG,
      buttonIconOnlyFontSize: e.onlyIconSizeLG,
    });
    return pn(t, `${e.componentCls}-lg`);
  },
  pu = (e) => {
    const { componentCls: t } = e;
    return { [t]: { [`&${t}-block`]: { width: '100%' } } };
  },
  Oa = (e) => {
    const { paddingInline: t, onlyIconSize: r } = e;
    return Je(e, { buttonPaddingHorizontal: t, buttonIconOnlyFontSize: r });
  },
  Aa = (e) => ({
    fontWeight: 400,
    defaultShadow: `0 ${e.controlOutlineWidth}px 0 ${e.controlTmpOutline}`,
    primaryShadow: `0 ${e.controlOutlineWidth}px 0 ${e.controlOutline}`,
    dangerShadow: `0 ${e.controlOutlineWidth}px 0 ${e.colorErrorOutline}`,
    primaryColor: e.colorTextLightSolid,
    dangerColor: e.colorTextLightSolid,
    borderColorDisabled: e.colorBorder,
    defaultGhostColor: e.colorBgContainer,
    ghostBg: 'transparent',
    defaultGhostBorderColor: e.colorBgContainer,
    paddingInline: e.paddingContentHorizontal - e.lineWidth,
    paddingInlineLG: e.paddingContentHorizontal - e.lineWidth,
    paddingInlineSM: 8 - e.lineWidth,
    onlyIconSize: e.fontSizeLG,
    onlyIconSizeSM: e.fontSizeLG - 2,
    onlyIconSizeLG: e.fontSizeLG + 2,
    groupBorderColor: e.colorPrimaryHover,
    linkHoverBg: 'transparent',
    textHoverBg: e.colorBgTextHover,
    defaultColor: e.colorText,
    defaultBg: e.colorBgContainer,
    defaultBorderColor: e.colorBorder,
    defaultBorderColorDisabled: e.colorBorder,
    contentFontSize: e.fontSize,
    contentFontSizeSM: e.fontSize,
    contentFontSizeLG: e.fontSizeLG,
  }),
  vu = un(
    'Button',
    (e) => {
      const t = Oa(e);
      return [nu(t), gu(t), du(t), hu(t), pu(t), fu(t), ru(t)];
    },
    Aa,
  );
function mu(e, t, r) {
  const { focusElCls: n, focus: o, borderElCls: a } = r,
    i = a ? '> *' : '',
    c = ['hover', o ? 'focus' : null, 'active']
      .filter(Boolean)
      .map((l) => `&:${l} ${i}`)
      .join(',');
  return {
    [`&-item:not(${t}-last-item)`]: { marginInlineEnd: -e.lineWidth },
    '&-item': Object.assign(
      Object.assign(
        { [c]: { zIndex: 2 } },
        n ? { [`&${n}`]: { zIndex: 2 } } : {},
      ),
      { [`&[disabled] ${i}`]: { zIndex: 0 } },
    ),
  };
}
function bu(e, t, r) {
  const { borderElCls: n } = r,
    o = n ? `> ${n}` : '';
  return {
    [`&-item:not(${t}-first-item):not(${t}-last-item) ${o}`]: {
      borderRadius: 0,
    },
    [`&-item:not(${t}-last-item)${t}-first-item`]: {
      [`& ${o}, &${e}-sm ${o}, &${e}-lg ${o}`]: {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0,
      },
    },
    [`&-item:not(${t}-first-item)${t}-last-item`]: {
      [`& ${o}, &${e}-sm ${o}, &${e}-lg ${o}`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0,
      },
    },
  };
}
function yu(e) {
  let t =
    arguments.length > 1 && arguments[1] !== void 0
      ? arguments[1]
      : { focus: !0 };
  const { componentCls: r } = e,
    n = `${r}-compact`;
  return { [n]: Object.assign(Object.assign({}, mu(e, n, t)), bu(r, n, t)) };
}
function Su(e, t) {
  return {
    [`&-item:not(${t}-last-item)`]: { marginBottom: -e.lineWidth },
    '&-item': {
      '&:hover,&:focus,&:active': { zIndex: 2 },
      '&[disabled]': { zIndex: 0 },
    },
  };
}
function xu(e, t) {
  return {
    [`&-item:not(${t}-first-item):not(${t}-last-item)`]: { borderRadius: 0 },
    [`&-item${t}-first-item:not(${t}-last-item)`]: {
      [`&, &${e}-sm, &${e}-lg`]: {
        borderEndEndRadius: 0,
        borderEndStartRadius: 0,
      },
    },
    [`&-item${t}-last-item:not(${t}-first-item)`]: {
      [`&, &${e}-sm, &${e}-lg`]: {
        borderStartStartRadius: 0,
        borderStartEndRadius: 0,
      },
    },
  };
}
function Cu(e) {
  const t = `${e.componentCls}-compact-vertical`;
  return {
    [t]: Object.assign(Object.assign({}, Su(e, t)), xu(e.componentCls, t)),
  };
}
const Eu = Cs(
  ['Button', 'compact'],
  (e) => {
    const t = Oa(e);
    return [yu(t), Cu(t)];
  },
  Aa,
);
var wu =
  (globalThis && globalThis.__rest) ||
  function (e, t) {
    var r = {};
    for (var n in e)
      Object.prototype.hasOwnProperty.call(e, n) &&
        t.indexOf(n) < 0 &&
        (r[n] = e[n]);
    if (e != null && typeof Object.getOwnPropertySymbols == 'function')
      for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
        t.indexOf(n[o]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, n[o]) &&
          (r[n[o]] = e[n[o]]);
    return r;
  };
function Tu(e) {
  if (typeof e == 'object' && e) {
    const t = e == null ? void 0 : e.delay;
    return {
      loading: !1,
      delay: !Number.isNaN(t) && typeof t == 'number' ? t : 0,
    };
  }
  return { loading: !!e, delay: 0 };
}
const Ou = (e, t) => {
    var r, n;
    const {
        loading: o = !1,
        prefixCls: a,
        type: i = 'default',
        danger: c,
        shape: l = 'default',
        size: s,
        styles: f,
        disabled: d,
        className: h,
        rootClassName: b,
        children: S,
        icon: y,
        ghost: E = !1,
        block: $ = !1,
        htmlType: C = 'button',
        classNames: O,
        style: R = {},
      } = e,
      P = wu(e, [
        'loading',
        'prefixCls',
        'type',
        'danger',
        'shape',
        'size',
        'styles',
        'disabled',
        'className',
        'rootClassName',
        'children',
        'icon',
        'ghost',
        'block',
        'htmlType',
        'classNames',
        'style',
      ]),
      {
        getPrefixCls: T,
        autoInsertSpaceInButton: m,
        direction: z,
        button: j,
      } = u.useContext(Re),
      L = T('btn', a),
      [B, k] = vu(L),
      M = u.useContext(ra),
      F = d ?? M,
      H = u.useContext(Ca),
      v = u.useMemo(() => Tu(o), [o]),
      [g, p] = u.useState(v.loading),
      [x, A] = u.useState(!1),
      _ = mo(t, u.createRef()),
      X = u.Children.count(S) === 1 && !y && !Cr(i);
    u.useEffect(() => {
      let N = null;
      v.delay > 0
        ? (N = setTimeout(() => {
            (N = null), p(!0);
          }, v.delay))
        : p(v.loading);
      function W() {
        N && (clearTimeout(N), (N = null));
      }
      return W;
    }, [v]),
      u.useEffect(() => {
        if (!_ || !_.current || m === !1) return;
        const N = _.current.textContent;
        X && Yr(N) ? x || A(!0) : x && A(!1);
      }, [_]);
    const q = (N) => {
        const { onClick: W } = e;
        if (g || F) {
          N.preventDefault();
          return;
        }
        W == null || W(N);
      },
      ne = m !== !1,
      { compactSize: oe, compactItemClassnames: ae } = Xl(L, z),
      tt = { large: 'lg', small: 'sm', middle: void 0 },
      Fe = Gl((N) => {
        var W, re;
        return (re = (W = s ?? oe) !== null && W !== void 0 ? W : H) !== null &&
          re !== void 0
          ? re
          : N;
      }),
      Pe = (Fe && tt[Fe]) || '',
      Se = g ? 'loading' : y,
      We = si(P, ['navigate']),
      je = pe(
        L,
        k,
        {
          [`${L}-${l}`]: l !== 'default' && l,
          [`${L}-${i}`]: i,
          [`${L}-${Pe}`]: Pe,
          [`${L}-icon-only`]: !S && S !== 0 && !!Se,
          [`${L}-background-ghost`]: E && !Cr(i),
          [`${L}-loading`]: g,
          [`${L}-two-chinese-chars`]: x && ne && !g,
          [`${L}-block`]: $,
          [`${L}-dangerous`]: !!c,
          [`${L}-rtl`]: z === 'rtl',
        },
        ae,
        h,
        b,
        j == null ? void 0 : j.className,
      ),
      Ge = Object.assign(Object.assign({}, j == null ? void 0 : j.style), R),
      de = pe(
        O == null ? void 0 : O.icon,
        (r = j == null ? void 0 : j.classNames) === null || r === void 0
          ? void 0
          : r.icon,
      ),
      rt = Object.assign(
        Object.assign({}, (f == null ? void 0 : f.icon) || {}),
        ((n = j == null ? void 0 : j.styles) === null || n === void 0
          ? void 0
          : n.icon) || {},
      ),
      Oe =
        y && !g
          ? U.createElement(Ea, { prefixCls: L, className: de, style: rt }, y)
          : U.createElement(eu, { existIcon: !!y, prefixCls: L, loading: !!g }),
      Ae = S || S === 0 ? Ql(S, X && ne) : null;
    if (We.href !== void 0)
      return B(
        U.createElement(
          'a',
          Object.assign({}, We, {
            className: pe(je, { [`${L}-disabled`]: F }),
            style: Ge,
            onClick: q,
            ref: _,
          }),
          Oe,
          Ae,
        ),
      );
    let Y = U.createElement(
      'button',
      Object.assign({}, P, {
        type: C,
        className: je,
        style: Ge,
        onClick: q,
        disabled: F,
        ref: _,
      }),
      Oe,
      Ae,
      ae && U.createElement(Eu, { key: 'compact', prefixCls: L }),
    );
    return (
      Cr(i) ||
        (Y = U.createElement(Fl, { component: 'Button', disabled: !!g }, Y)),
      B(Y)
    );
  },
  vn = u.forwardRef(Ou);
vn.Group = ql;
vn.__ANT_BUTTON = !0;
const Au = vn,
  Ru = () =>
    Sn.jsx('div', {
      children: Sn.jsx(Au, { type: 'primary', children: 'Button' }),
    });
export { Ru as default };
