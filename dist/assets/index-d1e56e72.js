function hs(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != 'string' && !Array.isArray(r)) {
      for (const l in r)
        if (l !== 'default' && !(l in e)) {
          const o = Object.getOwnPropertyDescriptor(r, l);
          o &&
            Object.defineProperty(
              e,
              l,
              o.get ? o : { enumerable: !0, get: () => r[l] },
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
  );
}
(function () {
  const t = document.createElement('link').relList;
  if (t && t.supports && t.supports('modulepreload')) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const o of l)
      if (o.type === 'childList')
        for (const i of o.addedNodes)
          i.tagName === 'LINK' && i.rel === 'modulepreload' && r(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const o = {};
    return (
      l.integrity && (o.integrity = l.integrity),
      l.referrerPolicy && (o.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === 'use-credentials'
        ? (o.credentials = 'include')
        : l.crossOrigin === 'anonymous'
        ? (o.credentials = 'omit')
        : (o.credentials = 'same-origin'),
      o
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const o = n(l);
    fetch(l.href, o);
  }
})();
function ms(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
    ? e.default
    : e;
}
var vs = { exports: {} },
  al = {},
  ys = { exports: {} },
  T = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var er = Symbol.for('react.element'),
  Vc = Symbol.for('react.portal'),
  Wc = Symbol.for('react.fragment'),
  Hc = Symbol.for('react.strict_mode'),
  Qc = Symbol.for('react.profiler'),
  Kc = Symbol.for('react.provider'),
  Yc = Symbol.for('react.context'),
  Xc = Symbol.for('react.forward_ref'),
  Gc = Symbol.for('react.suspense'),
  Zc = Symbol.for('react.memo'),
  Jc = Symbol.for('react.lazy'),
  Ji = Symbol.iterator;
function qc(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (Ji && e[Ji]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var gs = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  ws = Object.assign,
  Ss = {};
function an(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Ss),
    (this.updater = n || gs);
}
an.prototype.isReactComponent = {};
an.prototype.setState = function (e, t) {
  if (typeof e != 'object' && typeof e != 'function' && e != null)
    throw Error(
      'setState(...): takes an object of state variables to update or a function which returns an object of state variables.',
    );
  this.updater.enqueueSetState(this, e, t, 'setState');
};
an.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
};
function ks() {}
ks.prototype = an.prototype;
function qo(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Ss),
    (this.updater = n || gs);
}
var bo = (qo.prototype = new ks());
bo.constructor = qo;
ws(bo, an.prototype);
bo.isPureReactComponent = !0;
var qi = Array.isArray,
  Es = Object.prototype.hasOwnProperty,
  ei = { current: null },
  xs = { key: !0, ref: !0, __self: !0, __source: !0 };
function Cs(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (o = '' + t.key),
    t))
      Es.call(t, r) && !xs.hasOwnProperty(r) && (l[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = n;
  else if (1 < u) {
    for (var s = Array(u), a = 0; a < u; a++) s[a] = arguments[a + 2];
    l.children = s;
  }
  if (e && e.defaultProps)
    for (r in ((u = e.defaultProps), u)) l[r] === void 0 && (l[r] = u[r]);
  return {
    $$typeof: er,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: ei.current,
  };
}
function bc(e, t) {
  return {
    $$typeof: er,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function ti(e) {
  return typeof e == 'object' && e !== null && e.$$typeof === er;
}
function ef(e) {
  var t = { '=': '=0', ':': '=2' };
  return (
    '$' +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var bi = /\/+/g;
function Ll(e, t) {
  return typeof e == 'object' && e !== null && e.key != null
    ? ef('' + e.key)
    : t.toString(36);
}
function _r(e, t, n, r, l) {
  var o = typeof e;
  (o === 'undefined' || o === 'boolean') && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else
    switch (o) {
      case 'string':
      case 'number':
        i = !0;
        break;
      case 'object':
        switch (e.$$typeof) {
          case er:
          case Vc:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (l = l(i)),
      (e = r === '' ? '.' + Ll(i, 0) : r),
      qi(l)
        ? ((n = ''),
          e != null && (n = e.replace(bi, '$&/') + '/'),
          _r(l, t, n, '', function (a) {
            return a;
          }))
        : l != null &&
          (ti(l) &&
            (l = bc(
              l,
              n +
                (!l.key || (i && i.key === l.key)
                  ? ''
                  : ('' + l.key).replace(bi, '$&/') + '/') +
                e,
            )),
          t.push(l)),
      1
    );
  if (((i = 0), (r = r === '' ? '.' : r + ':'), qi(e)))
    for (var u = 0; u < e.length; u++) {
      o = e[u];
      var s = r + Ll(o, u);
      i += _r(o, t, n, s, l);
    }
  else if (((s = qc(e)), typeof s == 'function'))
    for (e = s.call(e), u = 0; !(o = e.next()).done; )
      (o = o.value), (s = r + Ll(o, u++)), (i += _r(o, t, n, s, l));
  else if (o === 'object')
    throw (
      ((t = String(e)),
      Error(
        'Objects are not valid as a React child (found: ' +
          (t === '[object Object]'
            ? 'object with keys {' + Object.keys(e).join(', ') + '}'
            : t) +
          '). If you meant to render a collection of children, use an array instead.',
      ))
    );
  return i;
}
function sr(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    _r(e, r, '', '', function (o) {
      return t.call(n, o, l++);
    }),
    r
  );
}
function tf(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        },
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var ae = { current: null },
  Pr = { transition: null },
  nf = {
    ReactCurrentDispatcher: ae,
    ReactCurrentBatchConfig: Pr,
    ReactCurrentOwner: ei,
  };
T.Children = {
  map: sr,
  forEach: function (e, t, n) {
    sr(
      e,
      function () {
        t.apply(this, arguments);
      },
      n,
    );
  },
  count: function (e) {
    var t = 0;
    return (
      sr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      sr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!ti(e))
      throw Error(
        'React.Children.only expected to receive a single React element child.',
      );
    return e;
  },
};
T.Component = an;
T.Fragment = Wc;
T.Profiler = Qc;
T.PureComponent = qo;
T.StrictMode = Hc;
T.Suspense = Gc;
T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = nf;
T.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      'React.cloneElement(...): The argument must be a React element, but you passed ' +
        e +
        '.',
    );
  var r = ws({}, e.props),
    l = e.key,
    o = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (i = ei.current)),
      t.key !== void 0 && (l = '' + t.key),
      e.type && e.type.defaultProps)
    )
      var u = e.type.defaultProps;
    for (s in t)
      Es.call(t, s) &&
        !xs.hasOwnProperty(s) &&
        (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    u = Array(s);
    for (var a = 0; a < s; a++) u[a] = arguments[a + 2];
    r.children = u;
  }
  return { $$typeof: er, type: e.type, key: l, ref: o, props: r, _owner: i };
};
T.createContext = function (e) {
  return (
    (e = {
      $$typeof: Yc,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Kc, _context: e }),
    (e.Consumer = e)
  );
};
T.createElement = Cs;
T.createFactory = function (e) {
  var t = Cs.bind(null, e);
  return (t.type = e), t;
};
T.createRef = function () {
  return { current: null };
};
T.forwardRef = function (e) {
  return { $$typeof: Xc, render: e };
};
T.isValidElement = ti;
T.lazy = function (e) {
  return { $$typeof: Jc, _payload: { _status: -1, _result: e }, _init: tf };
};
T.memo = function (e, t) {
  return { $$typeof: Zc, type: e, compare: t === void 0 ? null : t };
};
T.startTransition = function (e) {
  var t = Pr.transition;
  Pr.transition = {};
  try {
    e();
  } finally {
    Pr.transition = t;
  }
};
T.unstable_act = function () {
  throw Error('act(...) is not supported in production builds of React.');
};
T.useCallback = function (e, t) {
  return ae.current.useCallback(e, t);
};
T.useContext = function (e) {
  return ae.current.useContext(e);
};
T.useDebugValue = function () {};
T.useDeferredValue = function (e) {
  return ae.current.useDeferredValue(e);
};
T.useEffect = function (e, t) {
  return ae.current.useEffect(e, t);
};
T.useId = function () {
  return ae.current.useId();
};
T.useImperativeHandle = function (e, t, n) {
  return ae.current.useImperativeHandle(e, t, n);
};
T.useInsertionEffect = function (e, t) {
  return ae.current.useInsertionEffect(e, t);
};
T.useLayoutEffect = function (e, t) {
  return ae.current.useLayoutEffect(e, t);
};
T.useMemo = function (e, t) {
  return ae.current.useMemo(e, t);
};
T.useReducer = function (e, t, n) {
  return ae.current.useReducer(e, t, n);
};
T.useRef = function (e) {
  return ae.current.useRef(e);
};
T.useState = function (e) {
  return ae.current.useState(e);
};
T.useSyncExternalStore = function (e, t, n) {
  return ae.current.useSyncExternalStore(e, t, n);
};
T.useTransition = function () {
  return ae.current.useTransition();
};
T.version = '18.2.0';
ys.exports = T;
var C = ys.exports;
const _s = ms(C),
  rf = hs({ __proto__: null, default: _s }, [C]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var lf = C,
  of = Symbol.for('react.element'),
  uf = Symbol.for('react.fragment'),
  sf = Object.prototype.hasOwnProperty,
  af = lf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  cf = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ps(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  n !== void 0 && (o = '' + n),
    t.key !== void 0 && (o = '' + t.key),
    t.ref !== void 0 && (i = t.ref);
  for (r in t) sf.call(t, r) && !cf.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: of,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: af.current,
  };
}
al.Fragment = uf;
al.jsx = Ps;
al.jsxs = Ps;
vs.exports = al;
var K = vs.exports,
  ro = {},
  Ns = { exports: {} },
  Se = {},
  Rs = { exports: {} },
  zs = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(x, z) {
    var L = x.length;
    x.push(z);
    e: for (; 0 < L; ) {
      var H = (L - 1) >>> 1,
        Z = x[H];
      if (0 < l(Z, z)) (x[H] = z), (x[L] = Z), (L = H);
      else break e;
    }
  }
  function n(x) {
    return x.length === 0 ? null : x[0];
  }
  function r(x) {
    if (x.length === 0) return null;
    var z = x[0],
      L = x.pop();
    if (L !== z) {
      x[0] = L;
      e: for (var H = 0, Z = x.length, ir = Z >>> 1; H < ir; ) {
        var wt = 2 * (H + 1) - 1,
          zl = x[wt],
          St = wt + 1,
          ur = x[St];
        if (0 > l(zl, L))
          St < Z && 0 > l(ur, zl)
            ? ((x[H] = ur), (x[St] = L), (H = St))
            : ((x[H] = zl), (x[wt] = L), (H = wt));
        else if (St < Z && 0 > l(ur, L)) (x[H] = ur), (x[St] = L), (H = St);
        else break e;
      }
    }
    return z;
  }
  function l(x, z) {
    var L = x.sortIndex - z.sortIndex;
    return L !== 0 ? L : x.id - z.id;
  }
  if (typeof performance == 'object' && typeof performance.now == 'function') {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var i = Date,
      u = i.now();
    e.unstable_now = function () {
      return i.now() - u;
    };
  }
  var s = [],
    a = [],
    p = 1,
    h = null,
    m = 3,
    S = !1,
    w = !1,
    g = !1,
    R = typeof setTimeout == 'function' ? setTimeout : null,
    f = typeof clearTimeout == 'function' ? clearTimeout : null,
    c = typeof setImmediate < 'u' ? setImmediate : null;
  typeof navigator < 'u' &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function d(x) {
    for (var z = n(a); z !== null; ) {
      if (z.callback === null) r(a);
      else if (z.startTime <= x)
        r(a), (z.sortIndex = z.expirationTime), t(s, z);
      else break;
      z = n(a);
    }
  }
  function v(x) {
    if (((g = !1), d(x), !w))
      if (n(s) !== null) (w = !0), Nl(k);
      else {
        var z = n(a);
        z !== null && Rl(v, z.startTime - x);
      }
  }
  function k(x, z) {
    (w = !1), g && ((g = !1), f(N), (N = -1)), (S = !0);
    var L = m;
    try {
      for (
        d(z), h = n(s);
        h !== null && (!(h.expirationTime > z) || (x && !Re()));

      ) {
        var H = h.callback;
        if (typeof H == 'function') {
          (h.callback = null), (m = h.priorityLevel);
          var Z = H(h.expirationTime <= z);
          (z = e.unstable_now()),
            typeof Z == 'function' ? (h.callback = Z) : h === n(s) && r(s),
            d(z);
        } else r(s);
        h = n(s);
      }
      if (h !== null) var ir = !0;
      else {
        var wt = n(a);
        wt !== null && Rl(v, wt.startTime - z), (ir = !1);
      }
      return ir;
    } finally {
      (h = null), (m = L), (S = !1);
    }
  }
  var _ = !1,
    P = null,
    N = -1,
    W = 5,
    O = -1;
  function Re() {
    return !(e.unstable_now() - O < W);
  }
  function pn() {
    if (P !== null) {
      var x = e.unstable_now();
      O = x;
      var z = !0;
      try {
        z = P(!0, x);
      } finally {
        z ? hn() : ((_ = !1), (P = null));
      }
    } else _ = !1;
  }
  var hn;
  if (typeof c == 'function')
    hn = function () {
      c(pn);
    };
  else if (typeof MessageChannel < 'u') {
    var Zi = new MessageChannel(),
      Ac = Zi.port2;
    (Zi.port1.onmessage = pn),
      (hn = function () {
        Ac.postMessage(null);
      });
  } else
    hn = function () {
      R(pn, 0);
    };
  function Nl(x) {
    (P = x), _ || ((_ = !0), hn());
  }
  function Rl(x, z) {
    N = R(function () {
      x(e.unstable_now());
    }, z);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (x) {
      x.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      w || S || ((w = !0), Nl(k));
    }),
    (e.unstable_forceFrameRate = function (x) {
      0 > x || 125 < x
        ? console.error(
            'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported',
          )
        : (W = 0 < x ? Math.floor(1e3 / x) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return m;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(s);
    }),
    (e.unstable_next = function (x) {
      switch (m) {
        case 1:
        case 2:
        case 3:
          var z = 3;
          break;
        default:
          z = m;
      }
      var L = m;
      m = z;
      try {
        return x();
      } finally {
        m = L;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (x, z) {
      switch (x) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          x = 3;
      }
      var L = m;
      m = x;
      try {
        return z();
      } finally {
        m = L;
      }
    }),
    (e.unstable_scheduleCallback = function (x, z, L) {
      var H = e.unstable_now();
      switch (
        (typeof L == 'object' && L !== null
          ? ((L = L.delay), (L = typeof L == 'number' && 0 < L ? H + L : H))
          : (L = H),
        x)
      ) {
        case 1:
          var Z = -1;
          break;
        case 2:
          Z = 250;
          break;
        case 5:
          Z = 1073741823;
          break;
        case 4:
          Z = 1e4;
          break;
        default:
          Z = 5e3;
      }
      return (
        (Z = L + Z),
        (x = {
          id: p++,
          callback: z,
          priorityLevel: x,
          startTime: L,
          expirationTime: Z,
          sortIndex: -1,
        }),
        L > H
          ? ((x.sortIndex = L),
            t(a, x),
            n(s) === null &&
              x === n(a) &&
              (g ? (f(N), (N = -1)) : (g = !0), Rl(v, L - H)))
          : ((x.sortIndex = Z), t(s, x), w || S || ((w = !0), Nl(k))),
        x
      );
    }),
    (e.unstable_shouldYield = Re),
    (e.unstable_wrapCallback = function (x) {
      var z = m;
      return function () {
        var L = m;
        m = z;
        try {
          return x.apply(this, arguments);
        } finally {
          m = L;
        }
      };
    });
})(zs);
Rs.exports = zs;
var ff = Rs.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ls = C,
  we = ff;
function y(e) {
  for (
    var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1;
    n < arguments.length;
    n++
  )
    t += '&args[]=' + encodeURIComponent(arguments[n]);
  return (
    'Minified React error #' +
    e +
    '; visit ' +
    t +
    ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
  );
}
var Ts = new Set(),
  Dn = {};
function Mt(e, t) {
  tn(e, t), tn(e + 'Capture', t);
}
function tn(e, t) {
  for (Dn[e] = t, e = 0; e < t.length; e++) Ts.add(t[e]);
}
var Ke = !(
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
  ),
  lo = Object.prototype.hasOwnProperty,
  df =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  eu = {},
  tu = {};
function pf(e) {
  return lo.call(tu, e)
    ? !0
    : lo.call(eu, e)
    ? !1
    : df.test(e)
    ? (tu[e] = !0)
    : ((eu[e] = !0), !1);
}
function hf(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case 'function':
    case 'symbol':
      return !0;
    case 'boolean':
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-');
    default:
      return !1;
  }
}
function mf(e, t, n, r) {
  if (t === null || typeof t > 'u' || hf(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function ce(e, t, n, r, l, o, i) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = i);
}
var ne = {};
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach(function (e) {
    ne[e] = new ce(e, 0, !1, e, null, !1, !1);
  });
[
  ['acceptCharset', 'accept-charset'],
  ['className', 'class'],
  ['htmlFor', 'for'],
  ['httpEquiv', 'http-equiv'],
].forEach(function (e) {
  var t = e[0];
  ne[t] = new ce(t, 1, !1, e[1], null, !1, !1);
});
['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
  ne[e] = new ce(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  'autoReverse',
  'externalResourcesRequired',
  'focusable',
  'preserveAlpha',
].forEach(function (e) {
  ne[e] = new ce(e, 2, !1, e, null, !1, !1);
});
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
  .split(' ')
  .forEach(function (e) {
    ne[e] = new ce(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
  ne[e] = new ce(e, 3, !0, e, null, !1, !1);
});
['capture', 'download'].forEach(function (e) {
  ne[e] = new ce(e, 4, !1, e, null, !1, !1);
});
['cols', 'rows', 'size', 'span'].forEach(function (e) {
  ne[e] = new ce(e, 6, !1, e, null, !1, !1);
});
['rowSpan', 'start'].forEach(function (e) {
  ne[e] = new ce(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var ni = /[\-:]([a-z])/g;
function ri(e) {
  return e[1].toUpperCase();
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(ni, ri);
    ne[t] = new ce(t, 1, !1, e, null, !1, !1);
  });
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(ni, ri);
    ne[t] = new ce(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
  });
['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
  var t = e.replace(ni, ri);
  ne[t] = new ce(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
});
['tabIndex', 'crossOrigin'].forEach(function (e) {
  ne[e] = new ce(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ne.xlinkHref = new ce(
  'xlinkHref',
  1,
  !1,
  'xlink:href',
  'http://www.w3.org/1999/xlink',
  !0,
  !1,
);
['src', 'href', 'action', 'formAction'].forEach(function (e) {
  ne[e] = new ce(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function li(e, t, n, r) {
  var l = ne.hasOwnProperty(t) ? ne[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== 'o' && t[0] !== 'O') ||
      (t[1] !== 'n' && t[1] !== 'N')) &&
    (mf(t, n, l, r) && (n = null),
    r || l === null
      ? pf(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
      : l.mustUseProperty
      ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : '') : n)
      : ((t = l.attributeName),
        (r = l.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((l = l.type),
            (n = l === 3 || (l === 4 && n === !0) ? '' : '' + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Ze = Ls.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  ar = Symbol.for('react.element'),
  Ft = Symbol.for('react.portal'),
  Ut = Symbol.for('react.fragment'),
  oi = Symbol.for('react.strict_mode'),
  oo = Symbol.for('react.profiler'),
  Os = Symbol.for('react.provider'),
  Is = Symbol.for('react.context'),
  ii = Symbol.for('react.forward_ref'),
  io = Symbol.for('react.suspense'),
  uo = Symbol.for('react.suspense_list'),
  ui = Symbol.for('react.memo'),
  qe = Symbol.for('react.lazy'),
  Ms = Symbol.for('react.offscreen'),
  nu = Symbol.iterator;
function mn(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (nu && e[nu]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var A = Object.assign,
  Tl;
function xn(e) {
  if (Tl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Tl = (t && t[1]) || '';
    }
  return (
    `
` +
    Tl +
    e
  );
}
var Ol = !1;
function Il(e, t) {
  if (!e || Ol) return '';
  Ol = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, 'props', {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == 'object' && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (a) {
          var r = a;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (a) {
          r = a;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (a) {
        r = a;
      }
      e();
    }
  } catch (a) {
    if (a && r && typeof a.stack == 'string') {
      for (
        var l = a.stack.split(`
`),
          o = r.stack.split(`
`),
          i = l.length - 1,
          u = o.length - 1;
        1 <= i && 0 <= u && l[i] !== o[u];

      )
        u--;
      for (; 1 <= i && 0 <= u; i--, u--)
        if (l[i] !== o[u]) {
          if (i !== 1 || u !== 1)
            do
              if ((i--, u--, 0 > u || l[i] !== o[u])) {
                var s =
                  `
` + l[i].replace(' at new ', ' at ');
                return (
                  e.displayName &&
                    s.includes('<anonymous>') &&
                    (s = s.replace('<anonymous>', e.displayName)),
                  s
                );
              }
            while (1 <= i && 0 <= u);
          break;
        }
    }
  } finally {
    (Ol = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : '') ? xn(e) : '';
}
function vf(e) {
  switch (e.tag) {
    case 5:
      return xn(e.type);
    case 16:
      return xn('Lazy');
    case 13:
      return xn('Suspense');
    case 19:
      return xn('SuspenseList');
    case 0:
    case 2:
    case 15:
      return (e = Il(e.type, !1)), e;
    case 11:
      return (e = Il(e.type.render, !1)), e;
    case 1:
      return (e = Il(e.type, !0)), e;
    default:
      return '';
  }
}
function so(e) {
  if (e == null) return null;
  if (typeof e == 'function') return e.displayName || e.name || null;
  if (typeof e == 'string') return e;
  switch (e) {
    case Ut:
      return 'Fragment';
    case Ft:
      return 'Portal';
    case oo:
      return 'Profiler';
    case oi:
      return 'StrictMode';
    case io:
      return 'Suspense';
    case uo:
      return 'SuspenseList';
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case Is:
        return (e.displayName || 'Context') + '.Consumer';
      case Os:
        return (e._context.displayName || 'Context') + '.Provider';
      case ii:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ''),
            (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
          e
        );
      case ui:
        return (
          (t = e.displayName || null), t !== null ? t : so(e.type) || 'Memo'
        );
      case qe:
        (t = e._payload), (e = e._init);
        try {
          return so(e(t));
        } catch {}
    }
  return null;
}
function yf(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return 'Cache';
    case 9:
      return (t.displayName || 'Context') + '.Consumer';
    case 10:
      return (t._context.displayName || 'Context') + '.Provider';
    case 18:
      return 'DehydratedFragment';
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ''),
        t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
      );
    case 7:
      return 'Fragment';
    case 5:
      return t;
    case 4:
      return 'Portal';
    case 3:
      return 'Root';
    case 6:
      return 'Text';
    case 16:
      return so(t);
    case 8:
      return t === oi ? 'StrictMode' : 'Mode';
    case 22:
      return 'Offscreen';
    case 12:
      return 'Profiler';
    case 21:
      return 'Scope';
    case 13:
      return 'Suspense';
    case 19:
      return 'SuspenseList';
    case 25:
      return 'TracingMarker';
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == 'function') return t.displayName || t.name || null;
      if (typeof t == 'string') return t;
  }
  return null;
}
function pt(e) {
  switch (typeof e) {
    case 'boolean':
    case 'number':
    case 'string':
    case 'undefined':
      return e;
    case 'object':
      return e;
    default:
      return '';
  }
}
function js(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === 'input' &&
    (t === 'checkbox' || t === 'radio')
  );
}
function gf(e) {
  var t = js(e) ? 'checked' : 'value',
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = '' + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < 'u' &&
    typeof n.get == 'function' &&
    typeof n.set == 'function'
  ) {
    var l = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (i) {
          (r = '' + i), o.call(this, i);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (i) {
          r = '' + i;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function cr(e) {
  e._valueTracker || (e._valueTracker = gf(e));
}
function Ds(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = '';
  return (
    e && (r = js(e) ? (e.checked ? 'true' : 'false') : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Fr(e) {
  if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u'))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function ao(e, t) {
  var n = t.checked;
  return A({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function ru(e, t) {
  var n = t.defaultValue == null ? '' : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = pt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === 'checkbox' || t.type === 'radio'
          ? t.checked != null
          : t.value != null,
    });
}
function Fs(e, t) {
  (t = t.checked), t != null && li(e, 'checked', t, !1);
}
function co(e, t) {
  Fs(e, t);
  var n = pt(t.value),
    r = t.type;
  if (n != null)
    r === 'number'
      ? ((n === 0 && e.value === '') || e.value != n) && (e.value = '' + n)
      : e.value !== '' + n && (e.value = '' + n);
  else if (r === 'submit' || r === 'reset') {
    e.removeAttribute('value');
    return;
  }
  t.hasOwnProperty('value')
    ? fo(e, t.type, n)
    : t.hasOwnProperty('defaultValue') && fo(e, t.type, pt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function lu(e, t, n) {
  if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
    var r = t.type;
    if (
      !(
        (r !== 'submit' && r !== 'reset') ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = '' + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== '' && (e.name = ''),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== '' && (e.name = n);
}
function fo(e, t, n) {
  (t !== 'number' || Fr(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = '' + e._wrapperState.initialValue)
      : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
}
var Cn = Array.isArray;
function Gt(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t['$' + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty('$' + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = '' + pt(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function po(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(y(91));
  return A({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: '' + e._wrapperState.initialValue,
  });
}
function ou(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(y(92));
      if (Cn(n)) {
        if (1 < n.length) throw Error(y(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ''), (n = t);
  }
  e._wrapperState = { initialValue: pt(n) };
}
function Us(e, t) {
  var n = pt(t.value),
    r = pt(t.defaultValue);
  n != null &&
    ((n = '' + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = '' + r);
}
function iu(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t);
}
function $s(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg';
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML';
    default:
      return 'http://www.w3.org/1999/xhtml';
  }
}
function ho(e, t) {
  return e == null || e === 'http://www.w3.org/1999/xhtml'
    ? $s(t)
    : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
    ? 'http://www.w3.org/1999/xhtml'
    : e;
}
var fr,
  Bs = (function (e) {
    return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e)
      e.innerHTML = t;
    else {
      for (
        fr = fr || document.createElement('div'),
          fr.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
          t = fr.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Fn(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Nn = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  wf = ['Webkit', 'ms', 'Moz', 'O'];
Object.keys(Nn).forEach(function (e) {
  wf.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Nn[t] = Nn[e]);
  });
});
function As(e, t, n) {
  return t == null || typeof t == 'boolean' || t === ''
    ? ''
    : n || typeof t != 'number' || t === 0 || (Nn.hasOwnProperty(e) && Nn[e])
    ? ('' + t).trim()
    : t + 'px';
}
function Vs(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf('--') === 0,
        l = As(n, t[n], r);
      n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var Sf = A(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  },
);
function mo(e, t) {
  if (t) {
    if (Sf[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(y(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(y(60));
      if (
        typeof t.dangerouslySetInnerHTML != 'object' ||
        !('__html' in t.dangerouslySetInnerHTML)
      )
        throw Error(y(61));
    }
    if (t.style != null && typeof t.style != 'object') throw Error(y(62));
  }
}
function vo(e, t) {
  if (e.indexOf('-') === -1) return typeof t.is == 'string';
  switch (e) {
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return !1;
    default:
      return !0;
  }
}
var yo = null;
function si(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var go = null,
  Zt = null,
  Jt = null;
function uu(e) {
  if ((e = rr(e))) {
    if (typeof go != 'function') throw Error(y(280));
    var t = e.stateNode;
    t && ((t = hl(t)), go(e.stateNode, e.type, t));
  }
}
function Ws(e) {
  Zt ? (Jt ? Jt.push(e) : (Jt = [e])) : (Zt = e);
}
function Hs() {
  if (Zt) {
    var e = Zt,
      t = Jt;
    if (((Jt = Zt = null), uu(e), t)) for (e = 0; e < t.length; e++) uu(t[e]);
  }
}
function Qs(e, t) {
  return e(t);
}
function Ks() {}
var Ml = !1;
function Ys(e, t, n) {
  if (Ml) return e(t, n);
  Ml = !0;
  try {
    return Qs(e, t, n);
  } finally {
    (Ml = !1), (Zt !== null || Jt !== null) && (Ks(), Hs());
  }
}
function Un(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = hl(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case 'onClick':
    case 'onClickCapture':
    case 'onDoubleClick':
    case 'onDoubleClickCapture':
    case 'onMouseDown':
    case 'onMouseDownCapture':
    case 'onMouseMove':
    case 'onMouseMoveCapture':
    case 'onMouseUp':
    case 'onMouseUpCapture':
    case 'onMouseEnter':
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === 'button' ||
          e === 'input' ||
          e === 'select' ||
          e === 'textarea'
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != 'function') throw Error(y(231, t, typeof n));
  return n;
}
var wo = !1;
if (Ke)
  try {
    var vn = {};
    Object.defineProperty(vn, 'passive', {
      get: function () {
        wo = !0;
      },
    }),
      window.addEventListener('test', vn, vn),
      window.removeEventListener('test', vn, vn);
  } catch {
    wo = !1;
  }
function kf(e, t, n, r, l, o, i, u, s) {
  var a = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, a);
  } catch (p) {
    this.onError(p);
  }
}
var Rn = !1,
  Ur = null,
  $r = !1,
  So = null,
  Ef = {
    onError: function (e) {
      (Rn = !0), (Ur = e);
    },
  };
function xf(e, t, n, r, l, o, i, u, s) {
  (Rn = !1), (Ur = null), kf.apply(Ef, arguments);
}
function Cf(e, t, n, r, l, o, i, u, s) {
  if ((xf.apply(this, arguments), Rn)) {
    if (Rn) {
      var a = Ur;
      (Rn = !1), (Ur = null);
    } else throw Error(y(198));
    $r || (($r = !0), (So = a));
  }
}
function jt(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Xs(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function su(e) {
  if (jt(e) !== e) throw Error(y(188));
}
function _f(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = jt(e)), t === null)) throw Error(y(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var o = l.alternate;
    if (o === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === o.child) {
      for (o = l.child; o; ) {
        if (o === n) return su(l), e;
        if (o === r) return su(l), t;
        o = o.sibling;
      }
      throw Error(y(188));
    }
    if (n.return !== r.return) (n = l), (r = o);
    else {
      for (var i = !1, u = l.child; u; ) {
        if (u === n) {
          (i = !0), (n = l), (r = o);
          break;
        }
        if (u === r) {
          (i = !0), (r = l), (n = o);
          break;
        }
        u = u.sibling;
      }
      if (!i) {
        for (u = o.child; u; ) {
          if (u === n) {
            (i = !0), (n = o), (r = l);
            break;
          }
          if (u === r) {
            (i = !0), (r = o), (n = l);
            break;
          }
          u = u.sibling;
        }
        if (!i) throw Error(y(189));
      }
    }
    if (n.alternate !== r) throw Error(y(190));
  }
  if (n.tag !== 3) throw Error(y(188));
  return n.stateNode.current === n ? e : t;
}
function Gs(e) {
  return (e = _f(e)), e !== null ? Zs(e) : null;
}
function Zs(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Zs(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Js = we.unstable_scheduleCallback,
  au = we.unstable_cancelCallback,
  Pf = we.unstable_shouldYield,
  Nf = we.unstable_requestPaint,
  Q = we.unstable_now,
  Rf = we.unstable_getCurrentPriorityLevel,
  ai = we.unstable_ImmediatePriority,
  qs = we.unstable_UserBlockingPriority,
  Br = we.unstable_NormalPriority,
  zf = we.unstable_LowPriority,
  bs = we.unstable_IdlePriority,
  cl = null,
  $e = null;
function Lf(e) {
  if ($e && typeof $e.onCommitFiberRoot == 'function')
    try {
      $e.onCommitFiberRoot(cl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Ie = Math.clz32 ? Math.clz32 : If,
  Tf = Math.log,
  Of = Math.LN2;
function If(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Tf(e) / Of) | 0)) | 0;
}
var dr = 64,
  pr = 4194304;
function _n(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Ar(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    o = e.pingedLanes,
    i = n & 268435455;
  if (i !== 0) {
    var u = i & ~l;
    u !== 0 ? (r = _n(u)) : ((o &= i), o !== 0 && (r = _n(o)));
  } else (i = n & ~l), i !== 0 ? (r = _n(i)) : o !== 0 && (r = _n(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (o = t & -t), l >= o || (l === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Ie(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function Mf(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function jf(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var i = 31 - Ie(o),
      u = 1 << i,
      s = l[i];
    s === -1
      ? (!(u & n) || u & r) && (l[i] = Mf(u, t))
      : s <= t && (e.expiredLanes |= u),
      (o &= ~u);
  }
}
function ko(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function ea() {
  var e = dr;
  return (dr <<= 1), !(dr & 4194240) && (dr = 64), e;
}
function jl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function tr(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Ie(t)),
    (e[t] = n);
}
function Df(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - Ie(n),
      o = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~o);
  }
}
function ci(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Ie(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var M = 0;
function ta(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var na,
  fi,
  ra,
  la,
  oa,
  Eo = !1,
  hr = [],
  ot = null,
  it = null,
  ut = null,
  $n = new Map(),
  Bn = new Map(),
  et = [],
  Ff =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' ',
    );
function cu(e, t) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      ot = null;
      break;
    case 'dragenter':
    case 'dragleave':
      it = null;
      break;
    case 'mouseover':
    case 'mouseout':
      ut = null;
      break;
    case 'pointerover':
    case 'pointerout':
      $n.delete(t.pointerId);
      break;
    case 'gotpointercapture':
    case 'lostpointercapture':
      Bn.delete(t.pointerId);
  }
}
function yn(e, t, n, r, l, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [l],
      }),
      t !== null && ((t = rr(t)), t !== null && fi(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function Uf(e, t, n, r, l) {
  switch (t) {
    case 'focusin':
      return (ot = yn(ot, e, t, n, r, l)), !0;
    case 'dragenter':
      return (it = yn(it, e, t, n, r, l)), !0;
    case 'mouseover':
      return (ut = yn(ut, e, t, n, r, l)), !0;
    case 'pointerover':
      var o = l.pointerId;
      return $n.set(o, yn($n.get(o) || null, e, t, n, r, l)), !0;
    case 'gotpointercapture':
      return (
        (o = l.pointerId), Bn.set(o, yn(Bn.get(o) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function ia(e) {
  var t = xt(e.target);
  if (t !== null) {
    var n = jt(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Xs(n)), t !== null)) {
          (e.blockedOn = t),
            oa(e.priority, function () {
              ra(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Nr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = xo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (yo = r), n.target.dispatchEvent(r), (yo = null);
    } else return (t = rr(n)), t !== null && fi(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function fu(e, t, n) {
  Nr(e) && n.delete(t);
}
function $f() {
  (Eo = !1),
    ot !== null && Nr(ot) && (ot = null),
    it !== null && Nr(it) && (it = null),
    ut !== null && Nr(ut) && (ut = null),
    $n.forEach(fu),
    Bn.forEach(fu);
}
function gn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Eo ||
      ((Eo = !0),
      we.unstable_scheduleCallback(we.unstable_NormalPriority, $f)));
}
function An(e) {
  function t(l) {
    return gn(l, e);
  }
  if (0 < hr.length) {
    gn(hr[0], e);
    for (var n = 1; n < hr.length; n++) {
      var r = hr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    ot !== null && gn(ot, e),
      it !== null && gn(it, e),
      ut !== null && gn(ut, e),
      $n.forEach(t),
      Bn.forEach(t),
      n = 0;
    n < et.length;
    n++
  )
    (r = et[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < et.length && ((n = et[0]), n.blockedOn === null); )
    ia(n), n.blockedOn === null && et.shift();
}
var qt = Ze.ReactCurrentBatchConfig,
  Vr = !0;
function Bf(e, t, n, r) {
  var l = M,
    o = qt.transition;
  qt.transition = null;
  try {
    (M = 1), di(e, t, n, r);
  } finally {
    (M = l), (qt.transition = o);
  }
}
function Af(e, t, n, r) {
  var l = M,
    o = qt.transition;
  qt.transition = null;
  try {
    (M = 4), di(e, t, n, r);
  } finally {
    (M = l), (qt.transition = o);
  }
}
function di(e, t, n, r) {
  if (Vr) {
    var l = xo(e, t, n, r);
    if (l === null) Ql(e, t, r, Wr, n), cu(e, r);
    else if (Uf(l, e, t, n, r)) r.stopPropagation();
    else if ((cu(e, r), t & 4 && -1 < Ff.indexOf(e))) {
      for (; l !== null; ) {
        var o = rr(l);
        if (
          (o !== null && na(o),
          (o = xo(e, t, n, r)),
          o === null && Ql(e, t, r, Wr, n),
          o === l)
        )
          break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else Ql(e, t, r, null, n);
  }
}
var Wr = null;
function xo(e, t, n, r) {
  if (((Wr = null), (e = si(r)), (e = xt(e)), e !== null))
    if (((t = jt(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Xs(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Wr = e), null;
}
function ua(e) {
  switch (e) {
    case 'cancel':
    case 'click':
    case 'close':
    case 'contextmenu':
    case 'copy':
    case 'cut':
    case 'auxclick':
    case 'dblclick':
    case 'dragend':
    case 'dragstart':
    case 'drop':
    case 'focusin':
    case 'focusout':
    case 'input':
    case 'invalid':
    case 'keydown':
    case 'keypress':
    case 'keyup':
    case 'mousedown':
    case 'mouseup':
    case 'paste':
    case 'pause':
    case 'play':
    case 'pointercancel':
    case 'pointerdown':
    case 'pointerup':
    case 'ratechange':
    case 'reset':
    case 'resize':
    case 'seeked':
    case 'submit':
    case 'touchcancel':
    case 'touchend':
    case 'touchstart':
    case 'volumechange':
    case 'change':
    case 'selectionchange':
    case 'textInput':
    case 'compositionstart':
    case 'compositionend':
    case 'compositionupdate':
    case 'beforeblur':
    case 'afterblur':
    case 'beforeinput':
    case 'blur':
    case 'fullscreenchange':
    case 'focus':
    case 'hashchange':
    case 'popstate':
    case 'select':
    case 'selectstart':
      return 1;
    case 'drag':
    case 'dragenter':
    case 'dragexit':
    case 'dragleave':
    case 'dragover':
    case 'mousemove':
    case 'mouseout':
    case 'mouseover':
    case 'pointermove':
    case 'pointerout':
    case 'pointerover':
    case 'scroll':
    case 'toggle':
    case 'touchmove':
    case 'wheel':
    case 'mouseenter':
    case 'mouseleave':
    case 'pointerenter':
    case 'pointerleave':
      return 4;
    case 'message':
      switch (Rf()) {
        case ai:
          return 1;
        case qs:
          return 4;
        case Br:
        case zf:
          return 16;
        case bs:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var nt = null,
  pi = null,
  Rr = null;
function sa() {
  if (Rr) return Rr;
  var e,
    t = pi,
    n = t.length,
    r,
    l = 'value' in nt ? nt.value : nt.textContent,
    o = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === l[o - r]; r++);
  return (Rr = l.slice(e, 1 < r ? 1 - r : void 0));
}
function zr(e) {
  var t = e.keyCode;
  return (
    'charCode' in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function mr() {
  return !0;
}
function du() {
  return !1;
}
function ke(e) {
  function t(n, r, l, o, i) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = i),
      (this.currentTarget = null);
    for (var u in e)
      e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(o) : o[u]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? mr
        : du),
      (this.isPropagationStopped = du),
      this
    );
  }
  return (
    A(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
          (this.isDefaultPrevented = mr));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
          (this.isPropagationStopped = mr));
      },
      persist: function () {},
      isPersistent: mr,
    }),
    t
  );
}
var cn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  hi = ke(cn),
  nr = A({}, cn, { view: 0, detail: 0 }),
  Vf = ke(nr),
  Dl,
  Fl,
  wn,
  fl = A({}, nr, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: mi,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return 'movementX' in e
        ? e.movementX
        : (e !== wn &&
            (wn && e.type === 'mousemove'
              ? ((Dl = e.screenX - wn.screenX), (Fl = e.screenY - wn.screenY))
              : (Fl = Dl = 0),
            (wn = e)),
          Dl);
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : Fl;
    },
  }),
  pu = ke(fl),
  Wf = A({}, fl, { dataTransfer: 0 }),
  Hf = ke(Wf),
  Qf = A({}, nr, { relatedTarget: 0 }),
  Ul = ke(Qf),
  Kf = A({}, cn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Yf = ke(Kf),
  Xf = A({}, cn, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Gf = ke(Xf),
  Zf = A({}, cn, { data: 0 }),
  hu = ke(Zf),
  Jf = {
    Esc: 'Escape',
    Spacebar: ' ',
    Left: 'ArrowLeft',
    Up: 'ArrowUp',
    Right: 'ArrowRight',
    Down: 'ArrowDown',
    Del: 'Delete',
    Win: 'OS',
    Menu: 'ContextMenu',
    Apps: 'ContextMenu',
    Scroll: 'ScrollLock',
    MozPrintableKey: 'Unidentified',
  },
  qf = {
    8: 'Backspace',
    9: 'Tab',
    12: 'Clear',
    13: 'Enter',
    16: 'Shift',
    17: 'Control',
    18: 'Alt',
    19: 'Pause',
    20: 'CapsLock',
    27: 'Escape',
    32: ' ',
    33: 'PageUp',
    34: 'PageDown',
    35: 'End',
    36: 'Home',
    37: 'ArrowLeft',
    38: 'ArrowUp',
    39: 'ArrowRight',
    40: 'ArrowDown',
    45: 'Insert',
    46: 'Delete',
    112: 'F1',
    113: 'F2',
    114: 'F3',
    115: 'F4',
    116: 'F5',
    117: 'F6',
    118: 'F7',
    119: 'F8',
    120: 'F9',
    121: 'F10',
    122: 'F11',
    123: 'F12',
    144: 'NumLock',
    145: 'ScrollLock',
    224: 'Meta',
  },
  bf = {
    Alt: 'altKey',
    Control: 'ctrlKey',
    Meta: 'metaKey',
    Shift: 'shiftKey',
  };
function ed(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = bf[e]) ? !!t[e] : !1;
}
function mi() {
  return ed;
}
var td = A({}, nr, {
    key: function (e) {
      if (e.key) {
        var t = Jf[e.key] || e.key;
        if (t !== 'Unidentified') return t;
      }
      return e.type === 'keypress'
        ? ((e = zr(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
        ? qf[e.keyCode] || 'Unidentified'
        : '';
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: mi,
    charCode: function (e) {
      return e.type === 'keypress' ? zr(e) : 0;
    },
    keyCode: function (e) {
      return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === 'keypress'
        ? zr(e)
        : e.type === 'keydown' || e.type === 'keyup'
        ? e.keyCode
        : 0;
    },
  }),
  nd = ke(td),
  rd = A({}, fl, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  mu = ke(rd),
  ld = A({}, nr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: mi,
  }),
  od = ke(ld),
  id = A({}, cn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  ud = ke(id),
  sd = A({}, fl, {
    deltaX: function (e) {
      return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return 'deltaY' in e
        ? e.deltaY
        : 'wheelDeltaY' in e
        ? -e.wheelDeltaY
        : 'wheelDelta' in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  ad = ke(sd),
  cd = [9, 13, 27, 32],
  vi = Ke && 'CompositionEvent' in window,
  zn = null;
Ke && 'documentMode' in document && (zn = document.documentMode);
var fd = Ke && 'TextEvent' in window && !zn,
  aa = Ke && (!vi || (zn && 8 < zn && 11 >= zn)),
  vu = String.fromCharCode(32),
  yu = !1;
function ca(e, t) {
  switch (e) {
    case 'keyup':
      return cd.indexOf(t.keyCode) !== -1;
    case 'keydown':
      return t.keyCode !== 229;
    case 'keypress':
    case 'mousedown':
    case 'focusout':
      return !0;
    default:
      return !1;
  }
}
function fa(e) {
  return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
}
var $t = !1;
function dd(e, t) {
  switch (e) {
    case 'compositionend':
      return fa(t);
    case 'keypress':
      return t.which !== 32 ? null : ((yu = !0), vu);
    case 'textInput':
      return (e = t.data), e === vu && yu ? null : e;
    default:
      return null;
  }
}
function pd(e, t) {
  if ($t)
    return e === 'compositionend' || (!vi && ca(e, t))
      ? ((e = sa()), (Rr = pi = nt = null), ($t = !1), e)
      : null;
  switch (e) {
    case 'paste':
      return null;
    case 'keypress':
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case 'compositionend':
      return aa && t.locale !== 'ko' ? null : t.data;
    default:
      return null;
  }
}
var hd = {
  color: !0,
  date: !0,
  datetime: !0,
  'datetime-local': !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function gu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === 'input' ? !!hd[e.type] : t === 'textarea';
}
function da(e, t, n, r) {
  Ws(r),
    (t = Hr(t, 'onChange')),
    0 < t.length &&
      ((n = new hi('onChange', 'change', null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Ln = null,
  Vn = null;
function md(e) {
  xa(e, 0);
}
function dl(e) {
  var t = Vt(e);
  if (Ds(t)) return e;
}
function vd(e, t) {
  if (e === 'change') return t;
}
var pa = !1;
if (Ke) {
  var $l;
  if (Ke) {
    var Bl = 'oninput' in document;
    if (!Bl) {
      var wu = document.createElement('div');
      wu.setAttribute('oninput', 'return;'),
        (Bl = typeof wu.oninput == 'function');
    }
    $l = Bl;
  } else $l = !1;
  pa = $l && (!document.documentMode || 9 < document.documentMode);
}
function Su() {
  Ln && (Ln.detachEvent('onpropertychange', ha), (Vn = Ln = null));
}
function ha(e) {
  if (e.propertyName === 'value' && dl(Vn)) {
    var t = [];
    da(t, Vn, e, si(e)), Ys(md, t);
  }
}
function yd(e, t, n) {
  e === 'focusin'
    ? (Su(), (Ln = t), (Vn = n), Ln.attachEvent('onpropertychange', ha))
    : e === 'focusout' && Su();
}
function gd(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown')
    return dl(Vn);
}
function wd(e, t) {
  if (e === 'click') return dl(t);
}
function Sd(e, t) {
  if (e === 'input' || e === 'change') return dl(t);
}
function kd(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var je = typeof Object.is == 'function' ? Object.is : kd;
function Wn(e, t) {
  if (je(e, t)) return !0;
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!lo.call(t, l) || !je(e[l], t[l])) return !1;
  }
  return !0;
}
function ku(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Eu(e, t) {
  var n = ku(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = ku(n);
  }
}
function ma(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? ma(e, t.parentNode)
      : 'contains' in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function va() {
  for (var e = window, t = Fr(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == 'string';
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Fr(e.document);
  }
  return t;
}
function yi(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === 'input' &&
      (e.type === 'text' ||
        e.type === 'search' ||
        e.type === 'tel' ||
        e.type === 'url' ||
        e.type === 'password')) ||
      t === 'textarea' ||
      e.contentEditable === 'true')
  );
}
function Ed(e) {
  var t = va(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    ma(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && yi(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        'selectionStart' in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = n.textContent.length,
          o = Math.min(r.start, l);
        (r = r.end === void 0 ? o : Math.min(r.end, l)),
          !e.extend && o > r && ((l = r), (r = o), (o = l)),
          (l = Eu(n, o));
        var i = Eu(n, r);
        l &&
          i &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== i.node ||
            e.focusOffset !== i.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(i.node, i.offset))
            : (t.setEnd(i.node, i.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == 'function' && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var xd = Ke && 'documentMode' in document && 11 >= document.documentMode,
  Bt = null,
  Co = null,
  Tn = null,
  _o = !1;
function xu(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  _o ||
    Bt == null ||
    Bt !== Fr(r) ||
    ((r = Bt),
    'selectionStart' in r && yi(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Tn && Wn(Tn, r)) ||
      ((Tn = r),
      (r = Hr(Co, 'onSelect')),
      0 < r.length &&
        ((t = new hi('onSelect', 'select', null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Bt))));
}
function vr(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n['Webkit' + e] = 'webkit' + t),
    (n['Moz' + e] = 'moz' + t),
    n
  );
}
var At = {
    animationend: vr('Animation', 'AnimationEnd'),
    animationiteration: vr('Animation', 'AnimationIteration'),
    animationstart: vr('Animation', 'AnimationStart'),
    transitionend: vr('Transition', 'TransitionEnd'),
  },
  Al = {},
  ya = {};
Ke &&
  ((ya = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete At.animationend.animation,
    delete At.animationiteration.animation,
    delete At.animationstart.animation),
  'TransitionEvent' in window || delete At.transitionend.transition);
function pl(e) {
  if (Al[e]) return Al[e];
  if (!At[e]) return e;
  var t = At[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in ya) return (Al[e] = t[n]);
  return e;
}
var ga = pl('animationend'),
  wa = pl('animationiteration'),
  Sa = pl('animationstart'),
  ka = pl('transitionend'),
  Ea = new Map(),
  Cu =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' ',
    );
function mt(e, t) {
  Ea.set(e, t), Mt(t, [e]);
}
for (var Vl = 0; Vl < Cu.length; Vl++) {
  var Wl = Cu[Vl],
    Cd = Wl.toLowerCase(),
    _d = Wl[0].toUpperCase() + Wl.slice(1);
  mt(Cd, 'on' + _d);
}
mt(ga, 'onAnimationEnd');
mt(wa, 'onAnimationIteration');
mt(Sa, 'onAnimationStart');
mt('dblclick', 'onDoubleClick');
mt('focusin', 'onFocus');
mt('focusout', 'onBlur');
mt(ka, 'onTransitionEnd');
tn('onMouseEnter', ['mouseout', 'mouseover']);
tn('onMouseLeave', ['mouseout', 'mouseover']);
tn('onPointerEnter', ['pointerout', 'pointerover']);
tn('onPointerLeave', ['pointerout', 'pointerover']);
Mt(
  'onChange',
  'change click focusin focusout input keydown keyup selectionchange'.split(
    ' ',
  ),
);
Mt(
  'onSelect',
  'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
    ' ',
  ),
);
Mt('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']);
Mt(
  'onCompositionEnd',
  'compositionend focusout keydown keypress keyup mousedown'.split(' '),
);
Mt(
  'onCompositionStart',
  'compositionstart focusout keydown keypress keyup mousedown'.split(' '),
);
Mt(
  'onCompositionUpdate',
  'compositionupdate focusout keydown keypress keyup mousedown'.split(' '),
);
var Pn =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' ',
    ),
  Pd = new Set('cancel close invalid load scroll toggle'.split(' ').concat(Pn));
function _u(e, t, n) {
  var r = e.type || 'unknown-event';
  (e.currentTarget = n), Cf(r, t, void 0, e), (e.currentTarget = null);
}
function xa(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var u = r[i],
            s = u.instance,
            a = u.currentTarget;
          if (((u = u.listener), s !== o && l.isPropagationStopped())) break e;
          _u(l, u, a), (o = s);
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((u = r[i]),
            (s = u.instance),
            (a = u.currentTarget),
            (u = u.listener),
            s !== o && l.isPropagationStopped())
          )
            break e;
          _u(l, u, a), (o = s);
        }
    }
  }
  if ($r) throw ((e = So), ($r = !1), (So = null), e);
}
function D(e, t) {
  var n = t[Lo];
  n === void 0 && (n = t[Lo] = new Set());
  var r = e + '__bubble';
  n.has(r) || (Ca(t, e, 2, !1), n.add(r));
}
function Hl(e, t, n) {
  var r = 0;
  t && (r |= 4), Ca(n, e, r, t);
}
var yr = '_reactListening' + Math.random().toString(36).slice(2);
function Hn(e) {
  if (!e[yr]) {
    (e[yr] = !0),
      Ts.forEach(function (n) {
        n !== 'selectionchange' && (Pd.has(n) || Hl(n, !1, e), Hl(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[yr] || ((t[yr] = !0), Hl('selectionchange', !1, t));
  }
}
function Ca(e, t, n, r) {
  switch (ua(t)) {
    case 1:
      var l = Bf;
      break;
    case 4:
      l = Af;
      break;
    default:
      l = di;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !wo ||
      (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
      ? e.addEventListener(t, n, { passive: l })
      : e.addEventListener(t, n, !1);
}
function Ql(e, t, n, r, l) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var u = r.stateNode.containerInfo;
        if (u === l || (u.nodeType === 8 && u.parentNode === l)) break;
        if (i === 4)
          for (i = r.return; i !== null; ) {
            var s = i.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = i.stateNode.containerInfo),
              s === l || (s.nodeType === 8 && s.parentNode === l))
            )
              return;
            i = i.return;
          }
        for (; u !== null; ) {
          if (((i = xt(u)), i === null)) return;
          if (((s = i.tag), s === 5 || s === 6)) {
            r = o = i;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
  Ys(function () {
    var a = o,
      p = si(n),
      h = [];
    e: {
      var m = Ea.get(e);
      if (m !== void 0) {
        var S = hi,
          w = e;
        switch (e) {
          case 'keypress':
            if (zr(n) === 0) break e;
          case 'keydown':
          case 'keyup':
            S = nd;
            break;
          case 'focusin':
            (w = 'focus'), (S = Ul);
            break;
          case 'focusout':
            (w = 'blur'), (S = Ul);
            break;
          case 'beforeblur':
          case 'afterblur':
            S = Ul;
            break;
          case 'click':
            if (n.button === 2) break e;
          case 'auxclick':
          case 'dblclick':
          case 'mousedown':
          case 'mousemove':
          case 'mouseup':
          case 'mouseout':
          case 'mouseover':
          case 'contextmenu':
            S = pu;
            break;
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            S = Hf;
            break;
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            S = od;
            break;
          case ga:
          case wa:
          case Sa:
            S = Yf;
            break;
          case ka:
            S = ud;
            break;
          case 'scroll':
            S = Vf;
            break;
          case 'wheel':
            S = ad;
            break;
          case 'copy':
          case 'cut':
          case 'paste':
            S = Gf;
            break;
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            S = mu;
        }
        var g = (t & 4) !== 0,
          R = !g && e === 'scroll',
          f = g ? (m !== null ? m + 'Capture' : null) : m;
        g = [];
        for (var c = a, d; c !== null; ) {
          d = c;
          var v = d.stateNode;
          if (
            (d.tag === 5 &&
              v !== null &&
              ((d = v),
              f !== null && ((v = Un(c, f)), v != null && g.push(Qn(c, v, d)))),
            R)
          )
            break;
          c = c.return;
        }
        0 < g.length &&
          ((m = new S(m, w, null, n, p)), h.push({ event: m, listeners: g }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((m = e === 'mouseover' || e === 'pointerover'),
          (S = e === 'mouseout' || e === 'pointerout'),
          m &&
            n !== yo &&
            (w = n.relatedTarget || n.fromElement) &&
            (xt(w) || w[Ye]))
        )
          break e;
        if (
          (S || m) &&
          ((m =
            p.window === p
              ? p
              : (m = p.ownerDocument)
              ? m.defaultView || m.parentWindow
              : window),
          S
            ? ((w = n.relatedTarget || n.toElement),
              (S = a),
              (w = w ? xt(w) : null),
              w !== null &&
                ((R = jt(w)), w !== R || (w.tag !== 5 && w.tag !== 6)) &&
                (w = null))
            : ((S = null), (w = a)),
          S !== w)
        ) {
          if (
            ((g = pu),
            (v = 'onMouseLeave'),
            (f = 'onMouseEnter'),
            (c = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') &&
              ((g = mu),
              (v = 'onPointerLeave'),
              (f = 'onPointerEnter'),
              (c = 'pointer')),
            (R = S == null ? m : Vt(S)),
            (d = w == null ? m : Vt(w)),
            (m = new g(v, c + 'leave', S, n, p)),
            (m.target = R),
            (m.relatedTarget = d),
            (v = null),
            xt(p) === a &&
              ((g = new g(f, c + 'enter', w, n, p)),
              (g.target = d),
              (g.relatedTarget = R),
              (v = g)),
            (R = v),
            S && w)
          )
            t: {
              for (g = S, f = w, c = 0, d = g; d; d = Dt(d)) c++;
              for (d = 0, v = f; v; v = Dt(v)) d++;
              for (; 0 < c - d; ) (g = Dt(g)), c--;
              for (; 0 < d - c; ) (f = Dt(f)), d--;
              for (; c--; ) {
                if (g === f || (f !== null && g === f.alternate)) break t;
                (g = Dt(g)), (f = Dt(f));
              }
              g = null;
            }
          else g = null;
          S !== null && Pu(h, m, S, g, !1),
            w !== null && R !== null && Pu(h, R, w, g, !0);
        }
      }
      e: {
        if (
          ((m = a ? Vt(a) : window),
          (S = m.nodeName && m.nodeName.toLowerCase()),
          S === 'select' || (S === 'input' && m.type === 'file'))
        )
          var k = vd;
        else if (gu(m))
          if (pa) k = Sd;
          else {
            k = gd;
            var _ = yd;
          }
        else
          (S = m.nodeName) &&
            S.toLowerCase() === 'input' &&
            (m.type === 'checkbox' || m.type === 'radio') &&
            (k = wd);
        if (k && (k = k(e, a))) {
          da(h, k, n, p);
          break e;
        }
        _ && _(e, m, a),
          e === 'focusout' &&
            (_ = m._wrapperState) &&
            _.controlled &&
            m.type === 'number' &&
            fo(m, 'number', m.value);
      }
      switch (((_ = a ? Vt(a) : window), e)) {
        case 'focusin':
          (gu(_) || _.contentEditable === 'true') &&
            ((Bt = _), (Co = a), (Tn = null));
          break;
        case 'focusout':
          Tn = Co = Bt = null;
          break;
        case 'mousedown':
          _o = !0;
          break;
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          (_o = !1), xu(h, n, p);
          break;
        case 'selectionchange':
          if (xd) break;
        case 'keydown':
        case 'keyup':
          xu(h, n, p);
      }
      var P;
      if (vi)
        e: {
          switch (e) {
            case 'compositionstart':
              var N = 'onCompositionStart';
              break e;
            case 'compositionend':
              N = 'onCompositionEnd';
              break e;
            case 'compositionupdate':
              N = 'onCompositionUpdate';
              break e;
          }
          N = void 0;
        }
      else
        $t
          ? ca(e, n) && (N = 'onCompositionEnd')
          : e === 'keydown' && n.keyCode === 229 && (N = 'onCompositionStart');
      N &&
        (aa &&
          n.locale !== 'ko' &&
          ($t || N !== 'onCompositionStart'
            ? N === 'onCompositionEnd' && $t && (P = sa())
            : ((nt = p),
              (pi = 'value' in nt ? nt.value : nt.textContent),
              ($t = !0))),
        (_ = Hr(a, N)),
        0 < _.length &&
          ((N = new hu(N, e, null, n, p)),
          h.push({ event: N, listeners: _ }),
          P ? (N.data = P) : ((P = fa(n)), P !== null && (N.data = P)))),
        (P = fd ? dd(e, n) : pd(e, n)) &&
          ((a = Hr(a, 'onBeforeInput')),
          0 < a.length &&
            ((p = new hu('onBeforeInput', 'beforeinput', null, n, p)),
            h.push({ event: p, listeners: a }),
            (p.data = P)));
    }
    xa(h, t);
  });
}
function Qn(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Hr(e, t) {
  for (var n = t + 'Capture', r = []; e !== null; ) {
    var l = e,
      o = l.stateNode;
    l.tag === 5 &&
      o !== null &&
      ((l = o),
      (o = Un(e, n)),
      o != null && r.unshift(Qn(e, o, l)),
      (o = Un(e, t)),
      o != null && r.push(Qn(e, o, l))),
      (e = e.return);
  }
  return r;
}
function Dt(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Pu(e, t, n, r, l) {
  for (var o = t._reactName, i = []; n !== null && n !== r; ) {
    var u = n,
      s = u.alternate,
      a = u.stateNode;
    if (s !== null && s === r) break;
    u.tag === 5 &&
      a !== null &&
      ((u = a),
      l
        ? ((s = Un(n, o)), s != null && i.unshift(Qn(n, s, u)))
        : l || ((s = Un(n, o)), s != null && i.push(Qn(n, s, u)))),
      (n = n.return);
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var Nd = /\r\n?/g,
  Rd = /\u0000|\uFFFD/g;
function Nu(e) {
  return (typeof e == 'string' ? e : '' + e)
    .replace(
      Nd,
      `
`,
    )
    .replace(Rd, '');
}
function gr(e, t, n) {
  if (((t = Nu(t)), Nu(e) !== t && n)) throw Error(y(425));
}
function Qr() {}
var Po = null,
  No = null;
function Ro(e, t) {
  return (
    e === 'textarea' ||
    e === 'noscript' ||
    typeof t.children == 'string' ||
    typeof t.children == 'number' ||
    (typeof t.dangerouslySetInnerHTML == 'object' &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var zo = typeof setTimeout == 'function' ? setTimeout : void 0,
  zd = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  Ru = typeof Promise == 'function' ? Promise : void 0,
  Ld =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof Ru < 'u'
      ? function (e) {
          return Ru.resolve(null).then(e).catch(Td);
        }
      : zo;
function Td(e) {
  setTimeout(function () {
    throw e;
  });
}
function Kl(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === '/$')) {
        if (r === 0) {
          e.removeChild(l), An(t);
          return;
        }
        r--;
      } else (n !== '$' && n !== '$?' && n !== '$!') || r++;
    n = l;
  } while (n);
  An(t);
}
function st(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break;
      if (t === '/$') return null;
    }
  }
  return e;
}
function zu(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === '$' || n === '$!' || n === '$?') {
        if (t === 0) return e;
        t--;
      } else n === '/$' && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var fn = Math.random().toString(36).slice(2),
  Ue = '__reactFiber$' + fn,
  Kn = '__reactProps$' + fn,
  Ye = '__reactContainer$' + fn,
  Lo = '__reactEvents$' + fn,
  Od = '__reactListeners$' + fn,
  Id = '__reactHandles$' + fn;
function xt(e) {
  var t = e[Ue];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Ye] || n[Ue])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = zu(e); e !== null; ) {
          if ((n = e[Ue])) return n;
          e = zu(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function rr(e) {
  return (
    (e = e[Ue] || e[Ye]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Vt(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(y(33));
}
function hl(e) {
  return e[Kn] || null;
}
var To = [],
  Wt = -1;
function vt(e) {
  return { current: e };
}
function F(e) {
  0 > Wt || ((e.current = To[Wt]), (To[Wt] = null), Wt--);
}
function j(e, t) {
  Wt++, (To[Wt] = e.current), (e.current = t);
}
var ht = {},
  ie = vt(ht),
  pe = vt(!1),
  zt = ht;
function nn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return ht;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    o;
  for (o in n) l[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function he(e) {
  return (e = e.childContextTypes), e != null;
}
function Kr() {
  F(pe), F(ie);
}
function Lu(e, t, n) {
  if (ie.current !== ht) throw Error(y(168));
  j(ie, t), j(pe, n);
}
function _a(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != 'function'))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(y(108, yf(e) || 'Unknown', l));
  return A({}, n, r);
}
function Yr(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || ht),
    (zt = ie.current),
    j(ie, e),
    j(pe, pe.current),
    !0
  );
}
function Tu(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(y(169));
  n
    ? ((e = _a(e, t, zt)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      F(pe),
      F(ie),
      j(ie, e))
    : F(pe),
    j(pe, n);
}
var Ve = null,
  ml = !1,
  Yl = !1;
function Pa(e) {
  Ve === null ? (Ve = [e]) : Ve.push(e);
}
function Md(e) {
  (ml = !0), Pa(e);
}
function yt() {
  if (!Yl && Ve !== null) {
    Yl = !0;
    var e = 0,
      t = M;
    try {
      var n = Ve;
      for (M = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Ve = null), (ml = !1);
    } catch (l) {
      throw (Ve !== null && (Ve = Ve.slice(e + 1)), Js(ai, yt), l);
    } finally {
      (M = t), (Yl = !1);
    }
  }
  return null;
}
var Ht = [],
  Qt = 0,
  Xr = null,
  Gr = 0,
  Ee = [],
  xe = 0,
  Lt = null,
  We = 1,
  He = '';
function kt(e, t) {
  (Ht[Qt++] = Gr), (Ht[Qt++] = Xr), (Xr = e), (Gr = t);
}
function Na(e, t, n) {
  (Ee[xe++] = We), (Ee[xe++] = He), (Ee[xe++] = Lt), (Lt = e);
  var r = We;
  e = He;
  var l = 32 - Ie(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var o = 32 - Ie(t) + l;
  if (30 < o) {
    var i = l - (l % 5);
    (o = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (l -= i),
      (We = (1 << (32 - Ie(t) + l)) | (n << l) | r),
      (He = o + e);
  } else (We = (1 << o) | (n << l) | r), (He = e);
}
function gi(e) {
  e.return !== null && (kt(e, 1), Na(e, 1, 0));
}
function wi(e) {
  for (; e === Xr; )
    (Xr = Ht[--Qt]), (Ht[Qt] = null), (Gr = Ht[--Qt]), (Ht[Qt] = null);
  for (; e === Lt; )
    (Lt = Ee[--xe]),
      (Ee[xe] = null),
      (He = Ee[--xe]),
      (Ee[xe] = null),
      (We = Ee[--xe]),
      (Ee[xe] = null);
}
var ge = null,
  ye = null,
  U = !1,
  Oe = null;
function Ra(e, t) {
  var n = Ce(5, null, null, 0);
  (n.elementType = 'DELETED'),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Ou(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (ge = e), (ye = st(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (ge = e), (ye = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Lt !== null ? { id: We, overflow: He } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Ce(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (ge = e),
            (ye = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Oo(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Io(e) {
  if (U) {
    var t = ye;
    if (t) {
      var n = t;
      if (!Ou(e, t)) {
        if (Oo(e)) throw Error(y(418));
        t = st(n.nextSibling);
        var r = ge;
        t && Ou(e, t)
          ? Ra(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (U = !1), (ge = e));
      }
    } else {
      if (Oo(e)) throw Error(y(418));
      (e.flags = (e.flags & -4097) | 2), (U = !1), (ge = e);
    }
  }
}
function Iu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  ge = e;
}
function wr(e) {
  if (e !== ge) return !1;
  if (!U) return Iu(e), (U = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== 'head' && t !== 'body' && !Ro(e.type, e.memoizedProps))),
    t && (t = ye))
  ) {
    if (Oo(e)) throw (za(), Error(y(418)));
    for (; t; ) Ra(e, t), (t = st(t.nextSibling));
  }
  if ((Iu(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(y(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === '/$') {
            if (t === 0) {
              ye = st(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== '$' && n !== '$!' && n !== '$?') || t++;
        }
        e = e.nextSibling;
      }
      ye = null;
    }
  } else ye = ge ? st(e.stateNode.nextSibling) : null;
  return !0;
}
function za() {
  for (var e = ye; e; ) e = st(e.nextSibling);
}
function rn() {
  (ye = ge = null), (U = !1);
}
function Si(e) {
  Oe === null ? (Oe = [e]) : Oe.push(e);
}
var jd = Ze.ReactCurrentBatchConfig;
function Le(e, t) {
  if (e && e.defaultProps) {
    (t = A({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var Zr = vt(null),
  Jr = null,
  Kt = null,
  ki = null;
function Ei() {
  ki = Kt = Jr = null;
}
function xi(e) {
  var t = Zr.current;
  F(Zr), (e._currentValue = t);
}
function Mo(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function bt(e, t) {
  (Jr = e),
    (ki = Kt = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (de = !0), (e.firstContext = null));
}
function Pe(e) {
  var t = e._currentValue;
  if (ki !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Kt === null)) {
      if (Jr === null) throw Error(y(308));
      (Kt = e), (Jr.dependencies = { lanes: 0, firstContext: e });
    } else Kt = Kt.next = e;
  return t;
}
var Ct = null;
function Ci(e) {
  Ct === null ? (Ct = [e]) : Ct.push(e);
}
function La(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), Ci(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    Xe(e, r)
  );
}
function Xe(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var be = !1;
function _i(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Ta(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Qe(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function at(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), I & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      Xe(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), Ci(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    Xe(e, n)
  );
}
function Lr(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), ci(e, n);
  }
}
function Mu(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var i = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (l = o = i) : (o = o.next = i), (n = n.next);
      } while (n !== null);
      o === null ? (l = o = t) : (o = o.next = t);
    } else l = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function qr(e, t, n, r) {
  var l = e.updateQueue;
  be = !1;
  var o = l.firstBaseUpdate,
    i = l.lastBaseUpdate,
    u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var s = u,
      a = s.next;
    (s.next = null), i === null ? (o = a) : (i.next = a), (i = s);
    var p = e.alternate;
    p !== null &&
      ((p = p.updateQueue),
      (u = p.lastBaseUpdate),
      u !== i &&
        (u === null ? (p.firstBaseUpdate = a) : (u.next = a),
        (p.lastBaseUpdate = s)));
  }
  if (o !== null) {
    var h = l.baseState;
    (i = 0), (p = a = s = null), (u = o);
    do {
      var m = u.lane,
        S = u.eventTime;
      if ((r & m) === m) {
        p !== null &&
          (p = p.next =
            {
              eventTime: S,
              lane: 0,
              tag: u.tag,
              payload: u.payload,
              callback: u.callback,
              next: null,
            });
        e: {
          var w = e,
            g = u;
          switch (((m = t), (S = n), g.tag)) {
            case 1:
              if (((w = g.payload), typeof w == 'function')) {
                h = w.call(S, h, m);
                break e;
              }
              h = w;
              break e;
            case 3:
              w.flags = (w.flags & -65537) | 128;
            case 0:
              if (
                ((w = g.payload),
                (m = typeof w == 'function' ? w.call(S, h, m) : w),
                m == null)
              )
                break e;
              h = A({}, h, m);
              break e;
            case 2:
              be = !0;
          }
        }
        u.callback !== null &&
          u.lane !== 0 &&
          ((e.flags |= 64),
          (m = l.effects),
          m === null ? (l.effects = [u]) : m.push(u));
      } else
        (S = {
          eventTime: S,
          lane: m,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null,
        }),
          p === null ? ((a = p = S), (s = h)) : (p = p.next = S),
          (i |= m);
      if (((u = u.next), u === null)) {
        if (((u = l.shared.pending), u === null)) break;
        (m = u),
          (u = m.next),
          (m.next = null),
          (l.lastBaseUpdate = m),
          (l.shared.pending = null);
      }
    } while (1);
    if (
      (p === null && (s = h),
      (l.baseState = s),
      (l.firstBaseUpdate = a),
      (l.lastBaseUpdate = p),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (i |= l.lane), (l = l.next);
      while (l !== t);
    } else o === null && (l.shared.lanes = 0);
    (Ot |= i), (e.lanes = i), (e.memoizedState = h);
  }
}
function ju(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != 'function'))
          throw Error(y(191, l));
        l.call(r);
      }
    }
}
var Oa = new Ls.Component().refs;
function jo(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : A({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var vl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? jt(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = se(),
      l = ft(e),
      o = Qe(r, l);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = at(e, o, l)),
      t !== null && (Me(t, e, l, r), Lr(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = se(),
      l = ft(e),
      o = Qe(r, l);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = at(e, o, l)),
      t !== null && (Me(t, e, l, r), Lr(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = se(),
      r = ft(e),
      l = Qe(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = at(e, l, r)),
      t !== null && (Me(t, e, r, n), Lr(t, e, r));
  },
};
function Du(e, t, n, r, l, o, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == 'function'
      ? e.shouldComponentUpdate(r, o, i)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Wn(n, r) || !Wn(l, o)
      : !0
  );
}
function Ia(e, t, n) {
  var r = !1,
    l = ht,
    o = t.contextType;
  return (
    typeof o == 'object' && o !== null
      ? (o = Pe(o))
      : ((l = he(t) ? zt : ie.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? nn(e, l) : ht)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = vl),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function Fu(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == 'function' &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && vl.enqueueReplaceState(t, t.state, null);
}
function Do(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = Oa), _i(e);
  var o = t.contextType;
  typeof o == 'object' && o !== null
    ? (l.context = Pe(o))
    : ((o = he(t) ? zt : ie.current), (l.context = nn(e, o))),
    (l.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == 'function' && (jo(e, t, o, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == 'function' ||
      typeof l.getSnapshotBeforeUpdate == 'function' ||
      (typeof l.UNSAFE_componentWillMount != 'function' &&
        typeof l.componentWillMount != 'function') ||
      ((t = l.state),
      typeof l.componentWillMount == 'function' && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == 'function' &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && vl.enqueueReplaceState(l, l.state, null),
      qr(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == 'function' && (e.flags |= 4194308);
}
function Sn(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(y(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(y(147, e));
      var l = r,
        o = '' + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == 'function' &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (i) {
            var u = l.refs;
            u === Oa && (u = l.refs = {}),
              i === null ? delete u[o] : (u[o] = i);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != 'string') throw Error(y(284));
    if (!n._owner) throw Error(y(290, e));
  }
  return e;
}
function Sr(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      y(
        31,
        e === '[object Object]'
          ? 'object with keys {' + Object.keys(t).join(', ') + '}'
          : e,
      ),
    ))
  );
}
function Uu(e) {
  var t = e._init;
  return t(e._payload);
}
function Ma(e) {
  function t(f, c) {
    if (e) {
      var d = f.deletions;
      d === null ? ((f.deletions = [c]), (f.flags |= 16)) : d.push(c);
    }
  }
  function n(f, c) {
    if (!e) return null;
    for (; c !== null; ) t(f, c), (c = c.sibling);
    return null;
  }
  function r(f, c) {
    for (f = new Map(); c !== null; )
      c.key !== null ? f.set(c.key, c) : f.set(c.index, c), (c = c.sibling);
    return f;
  }
  function l(f, c) {
    return (f = dt(f, c)), (f.index = 0), (f.sibling = null), f;
  }
  function o(f, c, d) {
    return (
      (f.index = d),
      e
        ? ((d = f.alternate),
          d !== null
            ? ((d = d.index), d < c ? ((f.flags |= 2), c) : d)
            : ((f.flags |= 2), c))
        : ((f.flags |= 1048576), c)
    );
  }
  function i(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function u(f, c, d, v) {
    return c === null || c.tag !== 6
      ? ((c = eo(d, f.mode, v)), (c.return = f), c)
      : ((c = l(c, d)), (c.return = f), c);
  }
  function s(f, c, d, v) {
    var k = d.type;
    return k === Ut
      ? p(f, c, d.props.children, v, d.key)
      : c !== null &&
        (c.elementType === k ||
          (typeof k == 'object' &&
            k !== null &&
            k.$$typeof === qe &&
            Uu(k) === c.type))
      ? ((v = l(c, d.props)), (v.ref = Sn(f, c, d)), (v.return = f), v)
      : ((v = Dr(d.type, d.key, d.props, null, f.mode, v)),
        (v.ref = Sn(f, c, d)),
        (v.return = f),
        v);
  }
  function a(f, c, d, v) {
    return c === null ||
      c.tag !== 4 ||
      c.stateNode.containerInfo !== d.containerInfo ||
      c.stateNode.implementation !== d.implementation
      ? ((c = to(d, f.mode, v)), (c.return = f), c)
      : ((c = l(c, d.children || [])), (c.return = f), c);
  }
  function p(f, c, d, v, k) {
    return c === null || c.tag !== 7
      ? ((c = Nt(d, f.mode, v, k)), (c.return = f), c)
      : ((c = l(c, d)), (c.return = f), c);
  }
  function h(f, c, d) {
    if ((typeof c == 'string' && c !== '') || typeof c == 'number')
      return (c = eo('' + c, f.mode, d)), (c.return = f), c;
    if (typeof c == 'object' && c !== null) {
      switch (c.$$typeof) {
        case ar:
          return (
            (d = Dr(c.type, c.key, c.props, null, f.mode, d)),
            (d.ref = Sn(f, null, c)),
            (d.return = f),
            d
          );
        case Ft:
          return (c = to(c, f.mode, d)), (c.return = f), c;
        case qe:
          var v = c._init;
          return h(f, v(c._payload), d);
      }
      if (Cn(c) || mn(c))
        return (c = Nt(c, f.mode, d, null)), (c.return = f), c;
      Sr(f, c);
    }
    return null;
  }
  function m(f, c, d, v) {
    var k = c !== null ? c.key : null;
    if ((typeof d == 'string' && d !== '') || typeof d == 'number')
      return k !== null ? null : u(f, c, '' + d, v);
    if (typeof d == 'object' && d !== null) {
      switch (d.$$typeof) {
        case ar:
          return d.key === k ? s(f, c, d, v) : null;
        case Ft:
          return d.key === k ? a(f, c, d, v) : null;
        case qe:
          return (k = d._init), m(f, c, k(d._payload), v);
      }
      if (Cn(d) || mn(d)) return k !== null ? null : p(f, c, d, v, null);
      Sr(f, d);
    }
    return null;
  }
  function S(f, c, d, v, k) {
    if ((typeof v == 'string' && v !== '') || typeof v == 'number')
      return (f = f.get(d) || null), u(c, f, '' + v, k);
    if (typeof v == 'object' && v !== null) {
      switch (v.$$typeof) {
        case ar:
          return (f = f.get(v.key === null ? d : v.key) || null), s(c, f, v, k);
        case Ft:
          return (f = f.get(v.key === null ? d : v.key) || null), a(c, f, v, k);
        case qe:
          var _ = v._init;
          return S(f, c, d, _(v._payload), k);
      }
      if (Cn(v) || mn(v)) return (f = f.get(d) || null), p(c, f, v, k, null);
      Sr(c, v);
    }
    return null;
  }
  function w(f, c, d, v) {
    for (
      var k = null, _ = null, P = c, N = (c = 0), W = null;
      P !== null && N < d.length;
      N++
    ) {
      P.index > N ? ((W = P), (P = null)) : (W = P.sibling);
      var O = m(f, P, d[N], v);
      if (O === null) {
        P === null && (P = W);
        break;
      }
      e && P && O.alternate === null && t(f, P),
        (c = o(O, c, N)),
        _ === null ? (k = O) : (_.sibling = O),
        (_ = O),
        (P = W);
    }
    if (N === d.length) return n(f, P), U && kt(f, N), k;
    if (P === null) {
      for (; N < d.length; N++)
        (P = h(f, d[N], v)),
          P !== null &&
            ((c = o(P, c, N)), _ === null ? (k = P) : (_.sibling = P), (_ = P));
      return U && kt(f, N), k;
    }
    for (P = r(f, P); N < d.length; N++)
      (W = S(P, f, N, d[N], v)),
        W !== null &&
          (e && W.alternate !== null && P.delete(W.key === null ? N : W.key),
          (c = o(W, c, N)),
          _ === null ? (k = W) : (_.sibling = W),
          (_ = W));
    return (
      e &&
        P.forEach(function (Re) {
          return t(f, Re);
        }),
      U && kt(f, N),
      k
    );
  }
  function g(f, c, d, v) {
    var k = mn(d);
    if (typeof k != 'function') throw Error(y(150));
    if (((d = k.call(d)), d == null)) throw Error(y(151));
    for (
      var _ = (k = null), P = c, N = (c = 0), W = null, O = d.next();
      P !== null && !O.done;
      N++, O = d.next()
    ) {
      P.index > N ? ((W = P), (P = null)) : (W = P.sibling);
      var Re = m(f, P, O.value, v);
      if (Re === null) {
        P === null && (P = W);
        break;
      }
      e && P && Re.alternate === null && t(f, P),
        (c = o(Re, c, N)),
        _ === null ? (k = Re) : (_.sibling = Re),
        (_ = Re),
        (P = W);
    }
    if (O.done) return n(f, P), U && kt(f, N), k;
    if (P === null) {
      for (; !O.done; N++, O = d.next())
        (O = h(f, O.value, v)),
          O !== null &&
            ((c = o(O, c, N)), _ === null ? (k = O) : (_.sibling = O), (_ = O));
      return U && kt(f, N), k;
    }
    for (P = r(f, P); !O.done; N++, O = d.next())
      (O = S(P, f, N, O.value, v)),
        O !== null &&
          (e && O.alternate !== null && P.delete(O.key === null ? N : O.key),
          (c = o(O, c, N)),
          _ === null ? (k = O) : (_.sibling = O),
          (_ = O));
    return (
      e &&
        P.forEach(function (pn) {
          return t(f, pn);
        }),
      U && kt(f, N),
      k
    );
  }
  function R(f, c, d, v) {
    if (
      (typeof d == 'object' &&
        d !== null &&
        d.type === Ut &&
        d.key === null &&
        (d = d.props.children),
      typeof d == 'object' && d !== null)
    ) {
      switch (d.$$typeof) {
        case ar:
          e: {
            for (var k = d.key, _ = c; _ !== null; ) {
              if (_.key === k) {
                if (((k = d.type), k === Ut)) {
                  if (_.tag === 7) {
                    n(f, _.sibling),
                      (c = l(_, d.props.children)),
                      (c.return = f),
                      (f = c);
                    break e;
                  }
                } else if (
                  _.elementType === k ||
                  (typeof k == 'object' &&
                    k !== null &&
                    k.$$typeof === qe &&
                    Uu(k) === _.type)
                ) {
                  n(f, _.sibling),
                    (c = l(_, d.props)),
                    (c.ref = Sn(f, _, d)),
                    (c.return = f),
                    (f = c);
                  break e;
                }
                n(f, _);
                break;
              } else t(f, _);
              _ = _.sibling;
            }
            d.type === Ut
              ? ((c = Nt(d.props.children, f.mode, v, d.key)),
                (c.return = f),
                (f = c))
              : ((v = Dr(d.type, d.key, d.props, null, f.mode, v)),
                (v.ref = Sn(f, c, d)),
                (v.return = f),
                (f = v));
          }
          return i(f);
        case Ft:
          e: {
            for (_ = d.key; c !== null; ) {
              if (c.key === _)
                if (
                  c.tag === 4 &&
                  c.stateNode.containerInfo === d.containerInfo &&
                  c.stateNode.implementation === d.implementation
                ) {
                  n(f, c.sibling),
                    (c = l(c, d.children || [])),
                    (c.return = f),
                    (f = c);
                  break e;
                } else {
                  n(f, c);
                  break;
                }
              else t(f, c);
              c = c.sibling;
            }
            (c = to(d, f.mode, v)), (c.return = f), (f = c);
          }
          return i(f);
        case qe:
          return (_ = d._init), R(f, c, _(d._payload), v);
      }
      if (Cn(d)) return w(f, c, d, v);
      if (mn(d)) return g(f, c, d, v);
      Sr(f, d);
    }
    return (typeof d == 'string' && d !== '') || typeof d == 'number'
      ? ((d = '' + d),
        c !== null && c.tag === 6
          ? (n(f, c.sibling), (c = l(c, d)), (c.return = f), (f = c))
          : (n(f, c), (c = eo(d, f.mode, v)), (c.return = f), (f = c)),
        i(f))
      : n(f, c);
  }
  return R;
}
var ln = Ma(!0),
  ja = Ma(!1),
  lr = {},
  Be = vt(lr),
  Yn = vt(lr),
  Xn = vt(lr);
function _t(e) {
  if (e === lr) throw Error(y(174));
  return e;
}
function Pi(e, t) {
  switch ((j(Xn, t), j(Yn, e), j(Be, lr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : ho(null, '');
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = ho(t, e));
  }
  F(Be), j(Be, t);
}
function on() {
  F(Be), F(Yn), F(Xn);
}
function Da(e) {
  _t(Xn.current);
  var t = _t(Be.current),
    n = ho(t, e.type);
  t !== n && (j(Yn, e), j(Be, n));
}
function Ni(e) {
  Yn.current === e && (F(Be), F(Yn));
}
var $ = vt(0);
function br(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === '$?' || n.data === '$!')
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Xl = [];
function Ri() {
  for (var e = 0; e < Xl.length; e++)
    Xl[e]._workInProgressVersionPrimary = null;
  Xl.length = 0;
}
var Tr = Ze.ReactCurrentDispatcher,
  Gl = Ze.ReactCurrentBatchConfig,
  Tt = 0,
  B = null,
  X = null,
  J = null,
  el = !1,
  On = !1,
  Gn = 0,
  Dd = 0;
function re() {
  throw Error(y(321));
}
function zi(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!je(e[n], t[n])) return !1;
  return !0;
}
function Li(e, t, n, r, l, o) {
  if (
    ((Tt = o),
    (B = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Tr.current = e === null || e.memoizedState === null ? Bd : Ad),
    (e = n(r, l)),
    On)
  ) {
    o = 0;
    do {
      if (((On = !1), (Gn = 0), 25 <= o)) throw Error(y(301));
      (o += 1),
        (J = X = null),
        (t.updateQueue = null),
        (Tr.current = Vd),
        (e = n(r, l));
    } while (On);
  }
  if (
    ((Tr.current = tl),
    (t = X !== null && X.next !== null),
    (Tt = 0),
    (J = X = B = null),
    (el = !1),
    t)
  )
    throw Error(y(300));
  return e;
}
function Ti() {
  var e = Gn !== 0;
  return (Gn = 0), e;
}
function Fe() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return J === null ? (B.memoizedState = J = e) : (J = J.next = e), J;
}
function Ne() {
  if (X === null) {
    var e = B.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = X.next;
  var t = J === null ? B.memoizedState : J.next;
  if (t !== null) (J = t), (X = e);
  else {
    if (e === null) throw Error(y(310));
    (X = e),
      (e = {
        memoizedState: X.memoizedState,
        baseState: X.baseState,
        baseQueue: X.baseQueue,
        queue: X.queue,
        next: null,
      }),
      J === null ? (B.memoizedState = J = e) : (J = J.next = e);
  }
  return J;
}
function Zn(e, t) {
  return typeof t == 'function' ? t(e) : t;
}
function Zl(e) {
  var t = Ne(),
    n = t.queue;
  if (n === null) throw Error(y(311));
  n.lastRenderedReducer = e;
  var r = X,
    l = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (l !== null) {
      var i = l.next;
      (l.next = o.next), (o.next = i);
    }
    (r.baseQueue = l = o), (n.pending = null);
  }
  if (l !== null) {
    (o = l.next), (r = r.baseState);
    var u = (i = null),
      s = null,
      a = o;
    do {
      var p = a.lane;
      if ((Tt & p) === p)
        s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: a.action,
              hasEagerState: a.hasEagerState,
              eagerState: a.eagerState,
              next: null,
            }),
          (r = a.hasEagerState ? a.eagerState : e(r, a.action));
      else {
        var h = {
          lane: p,
          action: a.action,
          hasEagerState: a.hasEagerState,
          eagerState: a.eagerState,
          next: null,
        };
        s === null ? ((u = s = h), (i = r)) : (s = s.next = h),
          (B.lanes |= p),
          (Ot |= p);
      }
      a = a.next;
    } while (a !== null && a !== o);
    s === null ? (i = r) : (s.next = u),
      je(r, t.memoizedState) || (de = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = s),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (o = l.lane), (B.lanes |= o), (Ot |= o), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Jl(e) {
  var t = Ne(),
    n = t.queue;
  if (n === null) throw Error(y(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    o = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var i = (l = l.next);
    do (o = e(o, i.action)), (i = i.next);
    while (i !== l);
    je(o, t.memoizedState) || (de = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function Fa() {}
function Ua(e, t) {
  var n = B,
    r = Ne(),
    l = t(),
    o = !je(r.memoizedState, l);
  if (
    (o && ((r.memoizedState = l), (de = !0)),
    (r = r.queue),
    Oi(Aa.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (J !== null && J.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Jn(9, Ba.bind(null, n, r, l, t), void 0, null),
      q === null)
    )
      throw Error(y(349));
    Tt & 30 || $a(n, t, l);
  }
  return l;
}
function $a(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = B.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (B.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Ba(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Va(t) && Wa(e);
}
function Aa(e, t, n) {
  return n(function () {
    Va(t) && Wa(e);
  });
}
function Va(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !je(e, n);
  } catch {
    return !0;
  }
}
function Wa(e) {
  var t = Xe(e, 1);
  t !== null && Me(t, e, 1, -1);
}
function $u(e) {
  var t = Fe();
  return (
    typeof e == 'function' && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Zn,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = $d.bind(null, B, e)),
    [t.memoizedState, e]
  );
}
function Jn(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = B.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (B.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Ha() {
  return Ne().memoizedState;
}
function Or(e, t, n, r) {
  var l = Fe();
  (B.flags |= e),
    (l.memoizedState = Jn(1 | t, n, void 0, r === void 0 ? null : r));
}
function yl(e, t, n, r) {
  var l = Ne();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (X !== null) {
    var i = X.memoizedState;
    if (((o = i.destroy), r !== null && zi(r, i.deps))) {
      l.memoizedState = Jn(t, n, o, r);
      return;
    }
  }
  (B.flags |= e), (l.memoizedState = Jn(1 | t, n, o, r));
}
function Bu(e, t) {
  return Or(8390656, 8, e, t);
}
function Oi(e, t) {
  return yl(2048, 8, e, t);
}
function Qa(e, t) {
  return yl(4, 2, e, t);
}
function Ka(e, t) {
  return yl(4, 4, e, t);
}
function Ya(e, t) {
  if (typeof t == 'function')
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Xa(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), yl(4, 4, Ya.bind(null, t, e), n)
  );
}
function Ii() {}
function Ga(e, t) {
  var n = Ne();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && zi(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Za(e, t) {
  var n = Ne();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && zi(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Ja(e, t, n) {
  return Tt & 21
    ? (je(n, t) || ((n = ea()), (B.lanes |= n), (Ot |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (de = !0)), (e.memoizedState = n));
}
function Fd(e, t) {
  var n = M;
  (M = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Gl.transition;
  Gl.transition = {};
  try {
    e(!1), t();
  } finally {
    (M = n), (Gl.transition = r);
  }
}
function qa() {
  return Ne().memoizedState;
}
function Ud(e, t, n) {
  var r = ft(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    ba(e))
  )
    ec(t, n);
  else if (((n = La(e, t, n, r)), n !== null)) {
    var l = se();
    Me(n, e, r, l), tc(n, t, r);
  }
}
function $d(e, t, n) {
  var r = ft(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (ba(e)) ec(t, l);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var i = t.lastRenderedState,
          u = o(i, n);
        if (((l.hasEagerState = !0), (l.eagerState = u), je(u, i))) {
          var s = t.interleaved;
          s === null
            ? ((l.next = l), Ci(t))
            : ((l.next = s.next), (s.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = La(e, t, l, r)),
      n !== null && ((l = se()), Me(n, e, r, l), tc(n, t, r));
  }
}
function ba(e) {
  var t = e.alternate;
  return e === B || (t !== null && t === B);
}
function ec(e, t) {
  On = el = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function tc(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), ci(e, n);
  }
}
var tl = {
    readContext: Pe,
    useCallback: re,
    useContext: re,
    useEffect: re,
    useImperativeHandle: re,
    useInsertionEffect: re,
    useLayoutEffect: re,
    useMemo: re,
    useReducer: re,
    useRef: re,
    useState: re,
    useDebugValue: re,
    useDeferredValue: re,
    useTransition: re,
    useMutableSource: re,
    useSyncExternalStore: re,
    useId: re,
    unstable_isNewReconciler: !1,
  },
  Bd = {
    readContext: Pe,
    useCallback: function (e, t) {
      return (Fe().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Pe,
    useEffect: Bu,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Or(4194308, 4, Ya.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Or(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Or(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Fe();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Fe();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Ud.bind(null, B, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Fe();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: $u,
    useDebugValue: Ii,
    useDeferredValue: function (e) {
      return (Fe().memoizedState = e);
    },
    useTransition: function () {
      var e = $u(!1),
        t = e[0];
      return (e = Fd.bind(null, e[1])), (Fe().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = B,
        l = Fe();
      if (U) {
        if (n === void 0) throw Error(y(407));
        n = n();
      } else {
        if (((n = t()), q === null)) throw Error(y(349));
        Tt & 30 || $a(r, t, n);
      }
      l.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (l.queue = o),
        Bu(Aa.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        Jn(9, Ba.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Fe(),
        t = q.identifierPrefix;
      if (U) {
        var n = He,
          r = We;
        (n = (r & ~(1 << (32 - Ie(r) - 1))).toString(32) + n),
          (t = ':' + t + 'R' + n),
          (n = Gn++),
          0 < n && (t += 'H' + n.toString(32)),
          (t += ':');
      } else (n = Dd++), (t = ':' + t + 'r' + n.toString(32) + ':');
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Ad = {
    readContext: Pe,
    useCallback: Ga,
    useContext: Pe,
    useEffect: Oi,
    useImperativeHandle: Xa,
    useInsertionEffect: Qa,
    useLayoutEffect: Ka,
    useMemo: Za,
    useReducer: Zl,
    useRef: Ha,
    useState: function () {
      return Zl(Zn);
    },
    useDebugValue: Ii,
    useDeferredValue: function (e) {
      var t = Ne();
      return Ja(t, X.memoizedState, e);
    },
    useTransition: function () {
      var e = Zl(Zn)[0],
        t = Ne().memoizedState;
      return [e, t];
    },
    useMutableSource: Fa,
    useSyncExternalStore: Ua,
    useId: qa,
    unstable_isNewReconciler: !1,
  },
  Vd = {
    readContext: Pe,
    useCallback: Ga,
    useContext: Pe,
    useEffect: Oi,
    useImperativeHandle: Xa,
    useInsertionEffect: Qa,
    useLayoutEffect: Ka,
    useMemo: Za,
    useReducer: Jl,
    useRef: Ha,
    useState: function () {
      return Jl(Zn);
    },
    useDebugValue: Ii,
    useDeferredValue: function (e) {
      var t = Ne();
      return X === null ? (t.memoizedState = e) : Ja(t, X.memoizedState, e);
    },
    useTransition: function () {
      var e = Jl(Zn)[0],
        t = Ne().memoizedState;
      return [e, t];
    },
    useMutableSource: Fa,
    useSyncExternalStore: Ua,
    useId: qa,
    unstable_isNewReconciler: !1,
  };
function un(e, t) {
  try {
    var n = '',
      r = t;
    do (n += vf(r)), (r = r.return);
    while (r);
    var l = n;
  } catch (o) {
    l =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function ql(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Fo(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Wd = typeof WeakMap == 'function' ? WeakMap : Map;
function nc(e, t, n) {
  (n = Qe(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      rl || ((rl = !0), (Yo = r)), Fo(e, t);
    }),
    n
  );
}
function rc(e, t, n) {
  (n = Qe(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == 'function') {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        Fo(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == 'function' &&
      (n.callback = function () {
        Fo(e, t),
          typeof r != 'function' &&
            (ct === null ? (ct = new Set([this])) : ct.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : '',
        });
      }),
    n
  );
}
function Au(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Wd();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = rp.bind(null, e, t, n)), t.then(e, e));
}
function Vu(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Wu(e, t, n, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Qe(-1, 1)), (t.tag = 2), at(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Hd = Ze.ReactCurrentOwner,
  de = !1;
function ue(e, t, n, r) {
  t.child = e === null ? ja(t, null, n, r) : ln(t, e.child, n, r);
}
function Hu(e, t, n, r, l) {
  n = n.render;
  var o = t.ref;
  return (
    bt(t, l),
    (r = Li(e, t, n, r, o, l)),
    (n = Ti()),
    e !== null && !de
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Ge(e, t, l))
      : (U && n && gi(t), (t.flags |= 1), ue(e, t, r, l), t.child)
  );
}
function Qu(e, t, n, r, l) {
  if (e === null) {
    var o = n.type;
    return typeof o == 'function' &&
      !Ai(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), lc(e, t, o, r, l))
      : ((e = Dr(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & l))) {
    var i = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Wn), n(i, r) && e.ref === t.ref)
    )
      return Ge(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = dt(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function lc(e, t, n, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Wn(o, r) && e.ref === t.ref)
      if (((de = !1), (t.pendingProps = r = o), (e.lanes & l) !== 0))
        e.flags & 131072 && (de = !0);
      else return (t.lanes = e.lanes), Ge(e, t, l);
  }
  return Uo(e, t, n, r, l);
}
function oc(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === 'hidden')
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        j(Xt, ve),
        (ve |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          j(Xt, ve),
          (ve |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        j(Xt, ve),
        (ve |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      j(Xt, ve),
      (ve |= r);
  return ue(e, t, l, n), t.child;
}
function ic(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Uo(e, t, n, r, l) {
  var o = he(n) ? zt : ie.current;
  return (
    (o = nn(t, o)),
    bt(t, l),
    (n = Li(e, t, n, r, o, l)),
    (r = Ti()),
    e !== null && !de
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Ge(e, t, l))
      : (U && r && gi(t), (t.flags |= 1), ue(e, t, n, l), t.child)
  );
}
function Ku(e, t, n, r, l) {
  if (he(n)) {
    var o = !0;
    Yr(t);
  } else o = !1;
  if ((bt(t, l), t.stateNode === null))
    Ir(e, t), Ia(t, n, r), Do(t, n, r, l), (r = !0);
  else if (e === null) {
    var i = t.stateNode,
      u = t.memoizedProps;
    i.props = u;
    var s = i.context,
      a = n.contextType;
    typeof a == 'object' && a !== null
      ? (a = Pe(a))
      : ((a = he(n) ? zt : ie.current), (a = nn(t, a)));
    var p = n.getDerivedStateFromProps,
      h =
        typeof p == 'function' ||
        typeof i.getSnapshotBeforeUpdate == 'function';
    h ||
      (typeof i.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof i.componentWillReceiveProps != 'function') ||
      ((u !== r || s !== a) && Fu(t, i, r, a)),
      (be = !1);
    var m = t.memoizedState;
    (i.state = m),
      qr(t, r, i, l),
      (s = t.memoizedState),
      u !== r || m !== s || pe.current || be
        ? (typeof p == 'function' && (jo(t, n, p, r), (s = t.memoizedState)),
          (u = be || Du(t, n, u, r, m, s, a))
            ? (h ||
                (typeof i.UNSAFE_componentWillMount != 'function' &&
                  typeof i.componentWillMount != 'function') ||
                (typeof i.componentWillMount == 'function' &&
                  i.componentWillMount(),
                typeof i.UNSAFE_componentWillMount == 'function' &&
                  i.UNSAFE_componentWillMount()),
              typeof i.componentDidMount == 'function' && (t.flags |= 4194308))
            : (typeof i.componentDidMount == 'function' && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = s)),
          (i.props = r),
          (i.state = s),
          (i.context = a),
          (r = u))
        : (typeof i.componentDidMount == 'function' && (t.flags |= 4194308),
          (r = !1));
  } else {
    (i = t.stateNode),
      Ta(e, t),
      (u = t.memoizedProps),
      (a = t.type === t.elementType ? u : Le(t.type, u)),
      (i.props = a),
      (h = t.pendingProps),
      (m = i.context),
      (s = n.contextType),
      typeof s == 'object' && s !== null
        ? (s = Pe(s))
        : ((s = he(n) ? zt : ie.current), (s = nn(t, s)));
    var S = n.getDerivedStateFromProps;
    (p =
      typeof S == 'function' ||
      typeof i.getSnapshotBeforeUpdate == 'function') ||
      (typeof i.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof i.componentWillReceiveProps != 'function') ||
      ((u !== h || m !== s) && Fu(t, i, r, s)),
      (be = !1),
      (m = t.memoizedState),
      (i.state = m),
      qr(t, r, i, l);
    var w = t.memoizedState;
    u !== h || m !== w || pe.current || be
      ? (typeof S == 'function' && (jo(t, n, S, r), (w = t.memoizedState)),
        (a = be || Du(t, n, a, r, m, w, s) || !1)
          ? (p ||
              (typeof i.UNSAFE_componentWillUpdate != 'function' &&
                typeof i.componentWillUpdate != 'function') ||
              (typeof i.componentWillUpdate == 'function' &&
                i.componentWillUpdate(r, w, s),
              typeof i.UNSAFE_componentWillUpdate == 'function' &&
                i.UNSAFE_componentWillUpdate(r, w, s)),
            typeof i.componentDidUpdate == 'function' && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != 'function' ||
              (u === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != 'function' ||
              (u === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = w)),
        (i.props = r),
        (i.state = w),
        (i.context = s),
        (r = a))
      : (typeof i.componentDidUpdate != 'function' ||
          (u === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != 'function' ||
          (u === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return $o(e, t, n, r, o, l);
}
function $o(e, t, n, r, l, o) {
  ic(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return l && Tu(t, n, !1), Ge(e, t, o);
  (r = t.stateNode), (Hd.current = t);
  var u =
    i && typeof n.getDerivedStateFromError != 'function' ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = ln(t, e.child, null, o)), (t.child = ln(t, null, u, o)))
      : ue(e, t, u, o),
    (t.memoizedState = r.state),
    l && Tu(t, n, !0),
    t.child
  );
}
function uc(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Lu(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Lu(e, t.context, !1),
    Pi(e, t.containerInfo);
}
function Yu(e, t, n, r, l) {
  return rn(), Si(l), (t.flags |= 256), ue(e, t, n, r), t.child;
}
var Bo = { dehydrated: null, treeContext: null, retryLane: 0 };
function Ao(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function sc(e, t, n) {
  var r = t.pendingProps,
    l = $.current,
    o = !1,
    i = (t.flags & 128) !== 0,
    u;
  if (
    ((u = i) ||
      (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    u
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    j($, l & 1),
    e === null)
  )
    return (
      Io(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === '$!'
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((i = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (i = { mode: 'hidden', children: i }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = i))
                : (o = Sl(i, r, 0, null)),
              (e = Nt(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = Ao(n)),
              (t.memoizedState = Bo),
              e)
            : Mi(t, i))
    );
  if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null)))
    return Qd(e, t, i, r, u, l, n);
  if (o) {
    (o = r.fallback), (i = t.mode), (l = e.child), (u = l.sibling);
    var s = { mode: 'hidden', children: r.children };
    return (
      !(i & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = s),
          (t.deletions = null))
        : ((r = dt(l, s)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      u !== null ? (o = dt(u, o)) : ((o = Nt(o, i, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? Ao(n)
          : {
              baseLanes: i.baseLanes | n,
              cachePool: null,
              transitions: i.transitions,
            }),
      (o.memoizedState = i),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = Bo),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = dt(o, { mode: 'visible', children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Mi(e, t) {
  return (
    (t = Sl({ mode: 'visible', children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function kr(e, t, n, r) {
  return (
    r !== null && Si(r),
    ln(t, e.child, null, n),
    (e = Mi(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Qd(e, t, n, r, l, o, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = ql(Error(y(422)))), kr(e, t, i, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (l = t.mode),
        (r = Sl({ mode: 'visible', children: r.children }, l, 0, null)),
        (o = Nt(o, l, i, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && ln(t, e.child, null, i),
        (t.child.memoizedState = Ao(i)),
        (t.memoizedState = Bo),
        o);
  if (!(t.mode & 1)) return kr(e, t, i, null);
  if (l.data === '$!') {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
    return (r = u), (o = Error(y(419))), (r = ql(o, r, void 0)), kr(e, t, i, r);
  }
  if (((u = (i & e.childLanes) !== 0), de || u)) {
    if (((r = q), r !== null)) {
      switch (i & -i) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = l & (r.suspendedLanes | i) ? 0 : l),
        l !== 0 &&
          l !== o.retryLane &&
          ((o.retryLane = l), Xe(e, l), Me(r, e, l, -1));
    }
    return Bi(), (r = ql(Error(y(421)))), kr(e, t, i, r);
  }
  return l.data === '$?'
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = lp.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (ye = st(l.nextSibling)),
      (ge = t),
      (U = !0),
      (Oe = null),
      e !== null &&
        ((Ee[xe++] = We),
        (Ee[xe++] = He),
        (Ee[xe++] = Lt),
        (We = e.id),
        (He = e.overflow),
        (Lt = t)),
      (t = Mi(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Xu(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Mo(e.return, t, n);
}
function bl(e, t, n, r, l) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = l));
}
function ac(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    o = r.tail;
  if ((ue(e, t, r.children, n), (r = $.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Xu(e, n, t);
        else if (e.tag === 19) Xu(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((j($, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case 'forwards':
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && br(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          bl(t, !1, l, n, o);
        break;
      case 'backwards':
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && br(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        bl(t, !0, n, null, o);
        break;
      case 'together':
        bl(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Ir(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Ge(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Ot |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(y(153));
  if (t.child !== null) {
    for (
      e = t.child, n = dt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = dt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Kd(e, t, n) {
  switch (t.tag) {
    case 3:
      uc(t), rn();
      break;
    case 5:
      Da(t);
      break;
    case 1:
      he(t.type) && Yr(t);
      break;
    case 4:
      Pi(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      j(Zr, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (j($, $.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? sc(e, t, n)
          : (j($, $.current & 1),
            (e = Ge(e, t, n)),
            e !== null ? e.sibling : null);
      j($, $.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return ac(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        j($, $.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), oc(e, t, n);
  }
  return Ge(e, t, n);
}
var cc, Vo, fc, dc;
cc = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Vo = function () {};
fc = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), _t(Be.current);
    var o = null;
    switch (n) {
      case 'input':
        (l = ao(e, l)), (r = ao(e, r)), (o = []);
        break;
      case 'select':
        (l = A({}, l, { value: void 0 })),
          (r = A({}, r, { value: void 0 })),
          (o = []);
        break;
      case 'textarea':
        (l = po(e, l)), (r = po(e, r)), (o = []);
        break;
      default:
        typeof l.onClick != 'function' &&
          typeof r.onClick == 'function' &&
          (e.onclick = Qr);
    }
    mo(n, r);
    var i;
    n = null;
    for (a in l)
      if (!r.hasOwnProperty(a) && l.hasOwnProperty(a) && l[a] != null)
        if (a === 'style') {
          var u = l[a];
          for (i in u) u.hasOwnProperty(i) && (n || (n = {}), (n[i] = ''));
        } else
          a !== 'dangerouslySetInnerHTML' &&
            a !== 'children' &&
            a !== 'suppressContentEditableWarning' &&
            a !== 'suppressHydrationWarning' &&
            a !== 'autoFocus' &&
            (Dn.hasOwnProperty(a)
              ? o || (o = [])
              : (o = o || []).push(a, null));
    for (a in r) {
      var s = r[a];
      if (
        ((u = l != null ? l[a] : void 0),
        r.hasOwnProperty(a) && s !== u && (s != null || u != null))
      )
        if (a === 'style')
          if (u) {
            for (i in u)
              !u.hasOwnProperty(i) ||
                (s && s.hasOwnProperty(i)) ||
                (n || (n = {}), (n[i] = ''));
            for (i in s)
              s.hasOwnProperty(i) &&
                u[i] !== s[i] &&
                (n || (n = {}), (n[i] = s[i]));
          } else n || (o || (o = []), o.push(a, n)), (n = s);
        else
          a === 'dangerouslySetInnerHTML'
            ? ((s = s ? s.__html : void 0),
              (u = u ? u.__html : void 0),
              s != null && u !== s && (o = o || []).push(a, s))
            : a === 'children'
            ? (typeof s != 'string' && typeof s != 'number') ||
              (o = o || []).push(a, '' + s)
            : a !== 'suppressContentEditableWarning' &&
              a !== 'suppressHydrationWarning' &&
              (Dn.hasOwnProperty(a)
                ? (s != null && a === 'onScroll' && D('scroll', e),
                  o || u === s || (o = []))
                : (o = o || []).push(a, s));
    }
    n && (o = o || []).push('style', n);
    var a = o;
    (t.updateQueue = a) && (t.flags |= 4);
  }
};
dc = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function kn(e, t) {
  if (!U)
    switch (e.tailMode) {
      case 'hidden':
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case 'collapsed':
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function le(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Yd(e, t, n) {
  var r = t.pendingProps;
  switch ((wi(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return le(t), null;
    case 1:
      return he(t.type) && Kr(), le(t), null;
    case 3:
      return (
        (r = t.stateNode),
        on(),
        F(pe),
        F(ie),
        Ri(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (wr(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Oe !== null && (Zo(Oe), (Oe = null)))),
        Vo(e, t),
        le(t),
        null
      );
    case 5:
      Ni(t);
      var l = _t(Xn.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        fc(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(y(166));
          return le(t), null;
        }
        if (((e = _t(Be.current)), wr(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[Ue] = t), (r[Kn] = o), (e = (t.mode & 1) !== 0), n)) {
            case 'dialog':
              D('cancel', r), D('close', r);
              break;
            case 'iframe':
            case 'object':
            case 'embed':
              D('load', r);
              break;
            case 'video':
            case 'audio':
              for (l = 0; l < Pn.length; l++) D(Pn[l], r);
              break;
            case 'source':
              D('error', r);
              break;
            case 'img':
            case 'image':
            case 'link':
              D('error', r), D('load', r);
              break;
            case 'details':
              D('toggle', r);
              break;
            case 'input':
              ru(r, o), D('invalid', r);
              break;
            case 'select':
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                D('invalid', r);
              break;
            case 'textarea':
              ou(r, o), D('invalid', r);
          }
          mo(n, o), (l = null);
          for (var i in o)
            if (o.hasOwnProperty(i)) {
              var u = o[i];
              i === 'children'
                ? typeof u == 'string'
                  ? r.textContent !== u &&
                    (o.suppressHydrationWarning !== !0 &&
                      gr(r.textContent, u, e),
                    (l = ['children', u]))
                  : typeof u == 'number' &&
                    r.textContent !== '' + u &&
                    (o.suppressHydrationWarning !== !0 &&
                      gr(r.textContent, u, e),
                    (l = ['children', '' + u]))
                : Dn.hasOwnProperty(i) &&
                  u != null &&
                  i === 'onScroll' &&
                  D('scroll', r);
            }
          switch (n) {
            case 'input':
              cr(r), lu(r, o, !0);
              break;
            case 'textarea':
              cr(r), iu(r);
              break;
            case 'select':
            case 'option':
              break;
            default:
              typeof o.onClick == 'function' && (r.onclick = Qr);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (i = l.nodeType === 9 ? l : l.ownerDocument),
            e === 'http://www.w3.org/1999/xhtml' && (e = $s(n)),
            e === 'http://www.w3.org/1999/xhtml'
              ? n === 'script'
                ? ((e = i.createElement('div')),
                  (e.innerHTML = '<script></script>'),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == 'string'
                ? (e = i.createElement(n, { is: r.is }))
                : ((e = i.createElement(n)),
                  n === 'select' &&
                    ((i = e),
                    r.multiple
                      ? (i.multiple = !0)
                      : r.size && (i.size = r.size)))
              : (e = i.createElementNS(e, n)),
            (e[Ue] = t),
            (e[Kn] = r),
            cc(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((i = vo(n, r)), n)) {
              case 'dialog':
                D('cancel', e), D('close', e), (l = r);
                break;
              case 'iframe':
              case 'object':
              case 'embed':
                D('load', e), (l = r);
                break;
              case 'video':
              case 'audio':
                for (l = 0; l < Pn.length; l++) D(Pn[l], e);
                l = r;
                break;
              case 'source':
                D('error', e), (l = r);
                break;
              case 'img':
              case 'image':
              case 'link':
                D('error', e), D('load', e), (l = r);
                break;
              case 'details':
                D('toggle', e), (l = r);
                break;
              case 'input':
                ru(e, r), (l = ao(e, r)), D('invalid', e);
                break;
              case 'option':
                l = r;
                break;
              case 'select':
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = A({}, r, { value: void 0 })),
                  D('invalid', e);
                break;
              case 'textarea':
                ou(e, r), (l = po(e, r)), D('invalid', e);
                break;
              default:
                l = r;
            }
            mo(n, l), (u = l);
            for (o in u)
              if (u.hasOwnProperty(o)) {
                var s = u[o];
                o === 'style'
                  ? Vs(e, s)
                  : o === 'dangerouslySetInnerHTML'
                  ? ((s = s ? s.__html : void 0), s != null && Bs(e, s))
                  : o === 'children'
                  ? typeof s == 'string'
                    ? (n !== 'textarea' || s !== '') && Fn(e, s)
                    : typeof s == 'number' && Fn(e, '' + s)
                  : o !== 'suppressContentEditableWarning' &&
                    o !== 'suppressHydrationWarning' &&
                    o !== 'autoFocus' &&
                    (Dn.hasOwnProperty(o)
                      ? s != null && o === 'onScroll' && D('scroll', e)
                      : s != null && li(e, o, s, i));
              }
            switch (n) {
              case 'input':
                cr(e), lu(e, r, !1);
                break;
              case 'textarea':
                cr(e), iu(e);
                break;
              case 'option':
                r.value != null && e.setAttribute('value', '' + pt(r.value));
                break;
              case 'select':
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? Gt(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      Gt(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == 'function' && (e.onclick = Qr);
            }
            switch (n) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                r = !!r.autoFocus;
                break e;
              case 'img':
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return le(t), null;
    case 6:
      if (e && t.stateNode != null) dc(e, t, e.memoizedProps, r);
      else {
        if (typeof r != 'string' && t.stateNode === null) throw Error(y(166));
        if (((n = _t(Xn.current)), _t(Be.current), wr(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Ue] = t),
            (o = r.nodeValue !== n) && ((e = ge), e !== null))
          )
            switch (e.tag) {
              case 3:
                gr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  gr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Ue] = t),
            (t.stateNode = r);
      }
      return le(t), null;
    case 13:
      if (
        (F($),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (U && ye !== null && t.mode & 1 && !(t.flags & 128))
          za(), rn(), (t.flags |= 98560), (o = !1);
        else if (((o = wr(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(y(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(y(317));
            o[Ue] = t;
          } else
            rn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          le(t), (o = !1);
        } else Oe !== null && (Zo(Oe), (Oe = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || $.current & 1 ? G === 0 && (G = 3) : Bi())),
          t.updateQueue !== null && (t.flags |= 4),
          le(t),
          null);
    case 4:
      return (
        on(), Vo(e, t), e === null && Hn(t.stateNode.containerInfo), le(t), null
      );
    case 10:
      return xi(t.type._context), le(t), null;
    case 17:
      return he(t.type) && Kr(), le(t), null;
    case 19:
      if ((F($), (o = t.memoizedState), o === null)) return le(t), null;
      if (((r = (t.flags & 128) !== 0), (i = o.rendering), i === null))
        if (r) kn(o, !1);
        else {
          if (G !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = br(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    kn(o, !1),
                    r = i.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (i = o.alternate),
                    i === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = i.childLanes),
                        (o.lanes = i.lanes),
                        (o.child = i.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = i.memoizedProps),
                        (o.memoizedState = i.memoizedState),
                        (o.updateQueue = i.updateQueue),
                        (o.type = i.type),
                        (e = i.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return j($, ($.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            Q() > sn &&
            ((t.flags |= 128), (r = !0), kn(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = br(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              kn(o, !0),
              o.tail === null && o.tailMode === 'hidden' && !i.alternate && !U)
            )
              return le(t), null;
          } else
            2 * Q() - o.renderingStartTime > sn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), kn(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((i.sibling = t.child), (t.child = i))
          : ((n = o.last),
            n !== null ? (n.sibling = i) : (t.child = i),
            (o.last = i));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = Q()),
          (t.sibling = null),
          (n = $.current),
          j($, r ? (n & 1) | 2 : n & 1),
          t)
        : (le(t), null);
    case 22:
    case 23:
      return (
        $i(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? ve & 1073741824 && (le(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : le(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(y(156, t.tag));
}
function Xd(e, t) {
  switch ((wi(t), t.tag)) {
    case 1:
      return (
        he(t.type) && Kr(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        on(),
        F(pe),
        F(ie),
        Ri(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Ni(t), null;
    case 13:
      if ((F($), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(y(340));
        rn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return F($), null;
    case 4:
      return on(), null;
    case 10:
      return xi(t.type._context), null;
    case 22:
    case 23:
      return $i(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Er = !1,
  oe = !1,
  Gd = typeof WeakSet == 'function' ? WeakSet : Set,
  E = null;
function Yt(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == 'function')
      try {
        n(null);
      } catch (r) {
        V(e, t, r);
      }
    else n.current = null;
}
function Wo(e, t, n) {
  try {
    n();
  } catch (r) {
    V(e, t, r);
  }
}
var Gu = !1;
function Zd(e, t) {
  if (((Po = Vr), (e = va()), yi(e))) {
    if ('selectionStart' in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var i = 0,
            u = -1,
            s = -1,
            a = 0,
            p = 0,
            h = e,
            m = null;
          t: for (;;) {
            for (
              var S;
              h !== n || (l !== 0 && h.nodeType !== 3) || (u = i + l),
                h !== o || (r !== 0 && h.nodeType !== 3) || (s = i + r),
                h.nodeType === 3 && (i += h.nodeValue.length),
                (S = h.firstChild) !== null;

            )
              (m = h), (h = S);
            for (;;) {
              if (h === e) break t;
              if (
                (m === n && ++a === l && (u = i),
                m === o && ++p === r && (s = i),
                (S = h.nextSibling) !== null)
              )
                break;
              (h = m), (m = h.parentNode);
            }
            h = S;
          }
          n = u === -1 || s === -1 ? null : { start: u, end: s };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (No = { focusedElem: e, selectionRange: n }, Vr = !1, E = t; E !== null; )
    if (((t = E), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (E = e);
    else
      for (; E !== null; ) {
        t = E;
        try {
          var w = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (w !== null) {
                  var g = w.memoizedProps,
                    R = w.memoizedState,
                    f = t.stateNode,
                    c = f.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? g : Le(t.type, g),
                      R,
                    );
                  f.__reactInternalSnapshotBeforeUpdate = c;
                }
                break;
              case 3:
                var d = t.stateNode.containerInfo;
                d.nodeType === 1
                  ? (d.textContent = '')
                  : d.nodeType === 9 &&
                    d.documentElement &&
                    d.removeChild(d.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(y(163));
            }
        } catch (v) {
          V(t, t.return, v);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (E = e);
          break;
        }
        E = t.return;
      }
  return (w = Gu), (Gu = !1), w;
}
function In(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        (l.destroy = void 0), o !== void 0 && Wo(t, n, o);
      }
      l = l.next;
    } while (l !== r);
  }
}
function gl(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Ho(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == 'function' ? t(e) : (t.current = e);
  }
}
function pc(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), pc(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Ue], delete t[Kn], delete t[Lo], delete t[Od], delete t[Id])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function hc(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Zu(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || hc(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Qo(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Qr));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Qo(e, t, n), e = e.sibling; e !== null; ) Qo(e, t, n), (e = e.sibling);
}
function Ko(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ko(e, t, n), e = e.sibling; e !== null; ) Ko(e, t, n), (e = e.sibling);
}
var b = null,
  Te = !1;
function Je(e, t, n) {
  for (n = n.child; n !== null; ) mc(e, t, n), (n = n.sibling);
}
function mc(e, t, n) {
  if ($e && typeof $e.onCommitFiberUnmount == 'function')
    try {
      $e.onCommitFiberUnmount(cl, n);
    } catch {}
  switch (n.tag) {
    case 5:
      oe || Yt(n, t);
    case 6:
      var r = b,
        l = Te;
      (b = null),
        Je(e, t, n),
        (b = r),
        (Te = l),
        b !== null &&
          (Te
            ? ((e = b),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : b.removeChild(n.stateNode));
      break;
    case 18:
      b !== null &&
        (Te
          ? ((e = b),
            (n = n.stateNode),
            e.nodeType === 8
              ? Kl(e.parentNode, n)
              : e.nodeType === 1 && Kl(e, n),
            An(e))
          : Kl(b, n.stateNode));
      break;
    case 4:
      (r = b),
        (l = Te),
        (b = n.stateNode.containerInfo),
        (Te = !0),
        Je(e, t, n),
        (b = r),
        (Te = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !oe &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var o = l,
            i = o.destroy;
          (o = o.tag),
            i !== void 0 && (o & 2 || o & 4) && Wo(n, t, i),
            (l = l.next);
        } while (l !== r);
      }
      Je(e, t, n);
      break;
    case 1:
      if (
        !oe &&
        (Yt(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == 'function')
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (u) {
          V(n, t, u);
        }
      Je(e, t, n);
      break;
    case 21:
      Je(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((oe = (r = oe) || n.memoizedState !== null), Je(e, t, n), (oe = r))
        : Je(e, t, n);
      break;
    default:
      Je(e, t, n);
  }
}
function Ju(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Gd()),
      t.forEach(function (r) {
        var l = op.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function ze(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var o = e,
          i = t,
          u = i;
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              (b = u.stateNode), (Te = !1);
              break e;
            case 3:
              (b = u.stateNode.containerInfo), (Te = !0);
              break e;
            case 4:
              (b = u.stateNode.containerInfo), (Te = !0);
              break e;
          }
          u = u.return;
        }
        if (b === null) throw Error(y(160));
        mc(o, i, l), (b = null), (Te = !1);
        var s = l.alternate;
        s !== null && (s.return = null), (l.return = null);
      } catch (a) {
        V(l, t, a);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) vc(t, e), (t = t.sibling);
}
function vc(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((ze(t, e), De(e), r & 4)) {
        try {
          In(3, e, e.return), gl(3, e);
        } catch (g) {
          V(e, e.return, g);
        }
        try {
          In(5, e, e.return);
        } catch (g) {
          V(e, e.return, g);
        }
      }
      break;
    case 1:
      ze(t, e), De(e), r & 512 && n !== null && Yt(n, n.return);
      break;
    case 5:
      if (
        (ze(t, e),
        De(e),
        r & 512 && n !== null && Yt(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          Fn(l, '');
        } catch (g) {
          V(e, e.return, g);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var o = e.memoizedProps,
          i = n !== null ? n.memoizedProps : o,
          u = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            u === 'input' && o.type === 'radio' && o.name != null && Fs(l, o),
              vo(u, i);
            var a = vo(u, o);
            for (i = 0; i < s.length; i += 2) {
              var p = s[i],
                h = s[i + 1];
              p === 'style'
                ? Vs(l, h)
                : p === 'dangerouslySetInnerHTML'
                ? Bs(l, h)
                : p === 'children'
                ? Fn(l, h)
                : li(l, p, h, a);
            }
            switch (u) {
              case 'input':
                co(l, o);
                break;
              case 'textarea':
                Us(l, o);
                break;
              case 'select':
                var m = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!o.multiple;
                var S = o.value;
                S != null
                  ? Gt(l, !!o.multiple, S, !1)
                  : m !== !!o.multiple &&
                    (o.defaultValue != null
                      ? Gt(l, !!o.multiple, o.defaultValue, !0)
                      : Gt(l, !!o.multiple, o.multiple ? [] : '', !1));
            }
            l[Kn] = o;
          } catch (g) {
            V(e, e.return, g);
          }
      }
      break;
    case 6:
      if ((ze(t, e), De(e), r & 4)) {
        if (e.stateNode === null) throw Error(y(162));
        (l = e.stateNode), (o = e.memoizedProps);
        try {
          l.nodeValue = o;
        } catch (g) {
          V(e, e.return, g);
        }
      }
      break;
    case 3:
      if (
        (ze(t, e), De(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          An(t.containerInfo);
        } catch (g) {
          V(e, e.return, g);
        }
      break;
    case 4:
      ze(t, e), De(e);
      break;
    case 13:
      ze(t, e),
        De(e),
        (l = e.child),
        l.flags & 8192 &&
          ((o = l.memoizedState !== null),
          (l.stateNode.isHidden = o),
          !o ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (Fi = Q())),
        r & 4 && Ju(e);
      break;
    case 22:
      if (
        ((p = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((oe = (a = oe) || p), ze(t, e), (oe = a)) : ze(t, e),
        De(e),
        r & 8192)
      ) {
        if (
          ((a = e.memoizedState !== null),
          (e.stateNode.isHidden = a) && !p && e.mode & 1)
        )
          for (E = e, p = e.child; p !== null; ) {
            for (h = E = p; E !== null; ) {
              switch (((m = E), (S = m.child), m.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  In(4, m, m.return);
                  break;
                case 1:
                  Yt(m, m.return);
                  var w = m.stateNode;
                  if (typeof w.componentWillUnmount == 'function') {
                    (r = m), (n = m.return);
                    try {
                      (t = r),
                        (w.props = t.memoizedProps),
                        (w.state = t.memoizedState),
                        w.componentWillUnmount();
                    } catch (g) {
                      V(r, n, g);
                    }
                  }
                  break;
                case 5:
                  Yt(m, m.return);
                  break;
                case 22:
                  if (m.memoizedState !== null) {
                    bu(h);
                    continue;
                  }
              }
              S !== null ? ((S.return = m), (E = S)) : bu(h);
            }
            p = p.sibling;
          }
        e: for (p = null, h = e; ; ) {
          if (h.tag === 5) {
            if (p === null) {
              p = h;
              try {
                (l = h.stateNode),
                  a
                    ? ((o = l.style),
                      typeof o.setProperty == 'function'
                        ? o.setProperty('display', 'none', 'important')
                        : (o.display = 'none'))
                    : ((u = h.stateNode),
                      (s = h.memoizedProps.style),
                      (i =
                        s != null && s.hasOwnProperty('display')
                          ? s.display
                          : null),
                      (u.style.display = As('display', i)));
              } catch (g) {
                V(e, e.return, g);
              }
            }
          } else if (h.tag === 6) {
            if (p === null)
              try {
                h.stateNode.nodeValue = a ? '' : h.memoizedProps;
              } catch (g) {
                V(e, e.return, g);
              }
          } else if (
            ((h.tag !== 22 && h.tag !== 23) ||
              h.memoizedState === null ||
              h === e) &&
            h.child !== null
          ) {
            (h.child.return = h), (h = h.child);
            continue;
          }
          if (h === e) break e;
          for (; h.sibling === null; ) {
            if (h.return === null || h.return === e) break e;
            p === h && (p = null), (h = h.return);
          }
          p === h && (p = null), (h.sibling.return = h.return), (h = h.sibling);
        }
      }
      break;
    case 19:
      ze(t, e), De(e), r & 4 && Ju(e);
      break;
    case 21:
      break;
    default:
      ze(t, e), De(e);
  }
}
function De(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (hc(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(y(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Fn(l, ''), (r.flags &= -33));
          var o = Zu(e);
          Ko(e, o, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            u = Zu(e);
          Qo(e, u, i);
          break;
        default:
          throw Error(y(161));
      }
    } catch (s) {
      V(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Jd(e, t, n) {
  (E = e), yc(e);
}
function yc(e, t, n) {
  for (var r = (e.mode & 1) !== 0; E !== null; ) {
    var l = E,
      o = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || Er;
      if (!i) {
        var u = l.alternate,
          s = (u !== null && u.memoizedState !== null) || oe;
        u = Er;
        var a = oe;
        if (((Er = i), (oe = s) && !a))
          for (E = l; E !== null; )
            (i = E),
              (s = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? es(l)
                : s !== null
                ? ((s.return = i), (E = s))
                : es(l);
        for (; o !== null; ) (E = o), yc(o), (o = o.sibling);
        (E = l), (Er = u), (oe = a);
      }
      qu(e);
    } else
      l.subtreeFlags & 8772 && o !== null ? ((o.return = l), (E = o)) : qu(e);
  }
}
function qu(e) {
  for (; E !== null; ) {
    var t = E;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              oe || gl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !oe)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Le(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var o = t.updateQueue;
              o !== null && ju(t, o, r);
              break;
            case 3:
              var i = t.updateQueue;
              if (i !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                ju(t, i, n);
              }
              break;
            case 5:
              var u = t.stateNode;
              if (n === null && t.flags & 4) {
                n = u;
                var s = t.memoizedProps;
                switch (t.type) {
                  case 'button':
                  case 'input':
                  case 'select':
                  case 'textarea':
                    s.autoFocus && n.focus();
                    break;
                  case 'img':
                    s.src && (n.src = s.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var a = t.alternate;
                if (a !== null) {
                  var p = a.memoizedState;
                  if (p !== null) {
                    var h = p.dehydrated;
                    h !== null && An(h);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(y(163));
          }
        oe || (t.flags & 512 && Ho(t));
      } catch (m) {
        V(t, t.return, m);
      }
    }
    if (t === e) {
      E = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (E = n);
      break;
    }
    E = t.return;
  }
}
function bu(e) {
  for (; E !== null; ) {
    var t = E;
    if (t === e) {
      E = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (E = n);
      break;
    }
    E = t.return;
  }
}
function es(e) {
  for (; E !== null; ) {
    var t = E;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            gl(4, t);
          } catch (s) {
            V(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == 'function') {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              V(t, l, s);
            }
          }
          var o = t.return;
          try {
            Ho(t);
          } catch (s) {
            V(t, o, s);
          }
          break;
        case 5:
          var i = t.return;
          try {
            Ho(t);
          } catch (s) {
            V(t, i, s);
          }
      }
    } catch (s) {
      V(t, t.return, s);
    }
    if (t === e) {
      E = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      (u.return = t.return), (E = u);
      break;
    }
    E = t.return;
  }
}
var qd = Math.ceil,
  nl = Ze.ReactCurrentDispatcher,
  ji = Ze.ReactCurrentOwner,
  _e = Ze.ReactCurrentBatchConfig,
  I = 0,
  q = null,
  Y = null,
  ee = 0,
  ve = 0,
  Xt = vt(0),
  G = 0,
  qn = null,
  Ot = 0,
  wl = 0,
  Di = 0,
  Mn = null,
  fe = null,
  Fi = 0,
  sn = 1 / 0,
  Ae = null,
  rl = !1,
  Yo = null,
  ct = null,
  xr = !1,
  rt = null,
  ll = 0,
  jn = 0,
  Xo = null,
  Mr = -1,
  jr = 0;
function se() {
  return I & 6 ? Q() : Mr !== -1 ? Mr : (Mr = Q());
}
function ft(e) {
  return e.mode & 1
    ? I & 2 && ee !== 0
      ? ee & -ee
      : jd.transition !== null
      ? (jr === 0 && (jr = ea()), jr)
      : ((e = M),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : ua(e.type))),
        e)
    : 1;
}
function Me(e, t, n, r) {
  if (50 < jn) throw ((jn = 0), (Xo = null), Error(y(185)));
  tr(e, n, r),
    (!(I & 2) || e !== q) &&
      (e === q && (!(I & 2) && (wl |= n), G === 4 && tt(e, ee)),
      me(e, r),
      n === 1 && I === 0 && !(t.mode & 1) && ((sn = Q() + 500), ml && yt()));
}
function me(e, t) {
  var n = e.callbackNode;
  jf(e, t);
  var r = Ar(e, e === q ? ee : 0);
  if (r === 0)
    n !== null && au(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && au(n), t === 1))
      e.tag === 0 ? Md(ts.bind(null, e)) : Pa(ts.bind(null, e)),
        Ld(function () {
          !(I & 6) && yt();
        }),
        (n = null);
    else {
      switch (ta(r)) {
        case 1:
          n = ai;
          break;
        case 4:
          n = qs;
          break;
        case 16:
          n = Br;
          break;
        case 536870912:
          n = bs;
          break;
        default:
          n = Br;
      }
      n = _c(n, gc.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function gc(e, t) {
  if (((Mr = -1), (jr = 0), I & 6)) throw Error(y(327));
  var n = e.callbackNode;
  if (en() && e.callbackNode !== n) return null;
  var r = Ar(e, e === q ? ee : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = ol(e, r);
  else {
    t = r;
    var l = I;
    I |= 2;
    var o = Sc();
    (q !== e || ee !== t) && ((Ae = null), (sn = Q() + 500), Pt(e, t));
    do
      try {
        tp();
        break;
      } catch (u) {
        wc(e, u);
      }
    while (1);
    Ei(),
      (nl.current = o),
      (I = l),
      Y !== null ? (t = 0) : ((q = null), (ee = 0), (t = G));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = ko(e)), l !== 0 && ((r = l), (t = Go(e, l)))), t === 1)
    )
      throw ((n = qn), Pt(e, 0), tt(e, r), me(e, Q()), n);
    if (t === 6) tt(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !bd(l) &&
          ((t = ol(e, r)),
          t === 2 && ((o = ko(e)), o !== 0 && ((r = o), (t = Go(e, o)))),
          t === 1))
      )
        throw ((n = qn), Pt(e, 0), tt(e, r), me(e, Q()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(y(345));
        case 2:
          Et(e, fe, Ae);
          break;
        case 3:
          if (
            (tt(e, r), (r & 130023424) === r && ((t = Fi + 500 - Q()), 10 < t))
          ) {
            if (Ar(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              se(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = zo(Et.bind(null, e, fe, Ae), t);
            break;
          }
          Et(e, fe, Ae);
          break;
        case 4:
          if ((tt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - Ie(r);
            (o = 1 << i), (i = t[i]), i > l && (l = i), (r &= ~o);
          }
          if (
            ((r = l),
            (r = Q() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * qd(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = zo(Et.bind(null, e, fe, Ae), r);
            break;
          }
          Et(e, fe, Ae);
          break;
        case 5:
          Et(e, fe, Ae);
          break;
        default:
          throw Error(y(329));
      }
    }
  }
  return me(e, Q()), e.callbackNode === n ? gc.bind(null, e) : null;
}
function Go(e, t) {
  var n = Mn;
  return (
    e.current.memoizedState.isDehydrated && (Pt(e, t).flags |= 256),
    (e = ol(e, t)),
    e !== 2 && ((t = fe), (fe = n), t !== null && Zo(t)),
    e
  );
}
function Zo(e) {
  fe === null ? (fe = e) : fe.push.apply(fe, e);
}
function bd(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            o = l.getSnapshot;
          l = l.value;
          try {
            if (!je(o(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function tt(e, t) {
  for (
    t &= ~Di,
      t &= ~wl,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Ie(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function ts(e) {
  if (I & 6) throw Error(y(327));
  en();
  var t = Ar(e, 0);
  if (!(t & 1)) return me(e, Q()), null;
  var n = ol(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = ko(e);
    r !== 0 && ((t = r), (n = Go(e, r)));
  }
  if (n === 1) throw ((n = qn), Pt(e, 0), tt(e, t), me(e, Q()), n);
  if (n === 6) throw Error(y(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Et(e, fe, Ae),
    me(e, Q()),
    null
  );
}
function Ui(e, t) {
  var n = I;
  I |= 1;
  try {
    return e(t);
  } finally {
    (I = n), I === 0 && ((sn = Q() + 500), ml && yt());
  }
}
function It(e) {
  rt !== null && rt.tag === 0 && !(I & 6) && en();
  var t = I;
  I |= 1;
  var n = _e.transition,
    r = M;
  try {
    if (((_e.transition = null), (M = 1), e)) return e();
  } finally {
    (M = r), (_e.transition = n), (I = t), !(I & 6) && yt();
  }
}
function $i() {
  (ve = Xt.current), F(Xt);
}
function Pt(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), zd(n)), Y !== null))
    for (n = Y.return; n !== null; ) {
      var r = n;
      switch ((wi(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Kr();
          break;
        case 3:
          on(), F(pe), F(ie), Ri();
          break;
        case 5:
          Ni(r);
          break;
        case 4:
          on();
          break;
        case 13:
          F($);
          break;
        case 19:
          F($);
          break;
        case 10:
          xi(r.type._context);
          break;
        case 22:
        case 23:
          $i();
      }
      n = n.return;
    }
  if (
    ((q = e),
    (Y = e = dt(e.current, null)),
    (ee = ve = t),
    (G = 0),
    (qn = null),
    (Di = wl = Ot = 0),
    (fe = Mn = null),
    Ct !== null)
  ) {
    for (t = 0; t < Ct.length; t++)
      if (((n = Ct[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          o = n.pending;
        if (o !== null) {
          var i = o.next;
          (o.next = l), (r.next = i);
        }
        n.pending = r;
      }
    Ct = null;
  }
  return e;
}
function wc(e, t) {
  do {
    var n = Y;
    try {
      if ((Ei(), (Tr.current = tl), el)) {
        for (var r = B.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        el = !1;
      }
      if (
        ((Tt = 0),
        (J = X = B = null),
        (On = !1),
        (Gn = 0),
        (ji.current = null),
        n === null || n.return === null)
      ) {
        (G = 1), (qn = t), (Y = null);
        break;
      }
      e: {
        var o = e,
          i = n.return,
          u = n,
          s = t;
        if (
          ((t = ee),
          (u.flags |= 32768),
          s !== null && typeof s == 'object' && typeof s.then == 'function')
        ) {
          var a = s,
            p = u,
            h = p.tag;
          if (!(p.mode & 1) && (h === 0 || h === 11 || h === 15)) {
            var m = p.alternate;
            m
              ? ((p.updateQueue = m.updateQueue),
                (p.memoizedState = m.memoizedState),
                (p.lanes = m.lanes))
              : ((p.updateQueue = null), (p.memoizedState = null));
          }
          var S = Vu(i);
          if (S !== null) {
            (S.flags &= -257),
              Wu(S, i, u, o, t),
              S.mode & 1 && Au(o, a, t),
              (t = S),
              (s = a);
            var w = t.updateQueue;
            if (w === null) {
              var g = new Set();
              g.add(s), (t.updateQueue = g);
            } else w.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              Au(o, a, t), Bi();
              break e;
            }
            s = Error(y(426));
          }
        } else if (U && u.mode & 1) {
          var R = Vu(i);
          if (R !== null) {
            !(R.flags & 65536) && (R.flags |= 256),
              Wu(R, i, u, o, t),
              Si(un(s, u));
            break e;
          }
        }
        (o = s = un(s, u)),
          G !== 4 && (G = 2),
          Mn === null ? (Mn = [o]) : Mn.push(o),
          (o = i);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var f = nc(o, s, t);
              Mu(o, f);
              break e;
            case 1:
              u = s;
              var c = o.type,
                d = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof c.getDerivedStateFromError == 'function' ||
                  (d !== null &&
                    typeof d.componentDidCatch == 'function' &&
                    (ct === null || !ct.has(d))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var v = rc(o, u, t);
                Mu(o, v);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      Ec(n);
    } catch (k) {
      (t = k), Y === n && n !== null && (Y = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function Sc() {
  var e = nl.current;
  return (nl.current = tl), e === null ? tl : e;
}
function Bi() {
  (G === 0 || G === 3 || G === 2) && (G = 4),
    q === null || (!(Ot & 268435455) && !(wl & 268435455)) || tt(q, ee);
}
function ol(e, t) {
  var n = I;
  I |= 2;
  var r = Sc();
  (q !== e || ee !== t) && ((Ae = null), Pt(e, t));
  do
    try {
      ep();
      break;
    } catch (l) {
      wc(e, l);
    }
  while (1);
  if ((Ei(), (I = n), (nl.current = r), Y !== null)) throw Error(y(261));
  return (q = null), (ee = 0), G;
}
function ep() {
  for (; Y !== null; ) kc(Y);
}
function tp() {
  for (; Y !== null && !Pf(); ) kc(Y);
}
function kc(e) {
  var t = Cc(e.alternate, e, ve);
  (e.memoizedProps = e.pendingProps),
    t === null ? Ec(e) : (Y = t),
    (ji.current = null);
}
function Ec(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Xd(n, t)), n !== null)) {
        (n.flags &= 32767), (Y = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (G = 6), (Y = null);
        return;
      }
    } else if (((n = Yd(n, t, ve)), n !== null)) {
      Y = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Y = t;
      return;
    }
    Y = t = e;
  } while (t !== null);
  G === 0 && (G = 5);
}
function Et(e, t, n) {
  var r = M,
    l = _e.transition;
  try {
    (_e.transition = null), (M = 1), np(e, t, n, r);
  } finally {
    (_e.transition = l), (M = r);
  }
  return null;
}
function np(e, t, n, r) {
  do en();
  while (rt !== null);
  if (I & 6) throw Error(y(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(y(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (Df(e, o),
    e === q && ((Y = q = null), (ee = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      xr ||
      ((xr = !0),
      _c(Br, function () {
        return en(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = _e.transition), (_e.transition = null);
    var i = M;
    M = 1;
    var u = I;
    (I |= 4),
      (ji.current = null),
      Zd(e, n),
      vc(n, e),
      Ed(No),
      (Vr = !!Po),
      (No = Po = null),
      (e.current = n),
      Jd(n),
      Nf(),
      (I = u),
      (M = i),
      (_e.transition = o);
  } else e.current = n;
  if (
    (xr && ((xr = !1), (rt = e), (ll = l)),
    (o = e.pendingLanes),
    o === 0 && (ct = null),
    Lf(n.stateNode),
    me(e, Q()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (rl) throw ((rl = !1), (e = Yo), (Yo = null), e);
  return (
    ll & 1 && e.tag !== 0 && en(),
    (o = e.pendingLanes),
    o & 1 ? (e === Xo ? jn++ : ((jn = 0), (Xo = e))) : (jn = 0),
    yt(),
    null
  );
}
function en() {
  if (rt !== null) {
    var e = ta(ll),
      t = _e.transition,
      n = M;
    try {
      if (((_e.transition = null), (M = 16 > e ? 16 : e), rt === null))
        var r = !1;
      else {
        if (((e = rt), (rt = null), (ll = 0), I & 6)) throw Error(y(331));
        var l = I;
        for (I |= 4, E = e.current; E !== null; ) {
          var o = E,
            i = o.child;
          if (E.flags & 16) {
            var u = o.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var a = u[s];
                for (E = a; E !== null; ) {
                  var p = E;
                  switch (p.tag) {
                    case 0:
                    case 11:
                    case 15:
                      In(8, p, o);
                  }
                  var h = p.child;
                  if (h !== null) (h.return = p), (E = h);
                  else
                    for (; E !== null; ) {
                      p = E;
                      var m = p.sibling,
                        S = p.return;
                      if ((pc(p), p === a)) {
                        E = null;
                        break;
                      }
                      if (m !== null) {
                        (m.return = S), (E = m);
                        break;
                      }
                      E = S;
                    }
                }
              }
              var w = o.alternate;
              if (w !== null) {
                var g = w.child;
                if (g !== null) {
                  w.child = null;
                  do {
                    var R = g.sibling;
                    (g.sibling = null), (g = R);
                  } while (g !== null);
                }
              }
              E = o;
            }
          }
          if (o.subtreeFlags & 2064 && i !== null) (i.return = o), (E = i);
          else
            e: for (; E !== null; ) {
              if (((o = E), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    In(9, o, o.return);
                }
              var f = o.sibling;
              if (f !== null) {
                (f.return = o.return), (E = f);
                break e;
              }
              E = o.return;
            }
        }
        var c = e.current;
        for (E = c; E !== null; ) {
          i = E;
          var d = i.child;
          if (i.subtreeFlags & 2064 && d !== null) (d.return = i), (E = d);
          else
            e: for (i = c; E !== null; ) {
              if (((u = E), u.flags & 2048))
                try {
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      gl(9, u);
                  }
                } catch (k) {
                  V(u, u.return, k);
                }
              if (u === i) {
                E = null;
                break e;
              }
              var v = u.sibling;
              if (v !== null) {
                (v.return = u.return), (E = v);
                break e;
              }
              E = u.return;
            }
        }
        if (
          ((I = l), yt(), $e && typeof $e.onPostCommitFiberRoot == 'function')
        )
          try {
            $e.onPostCommitFiberRoot(cl, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (M = n), (_e.transition = t);
    }
  }
  return !1;
}
function ns(e, t, n) {
  (t = un(n, t)),
    (t = nc(e, t, 1)),
    (e = at(e, t, 1)),
    (t = se()),
    e !== null && (tr(e, 1, t), me(e, t));
}
function V(e, t, n) {
  if (e.tag === 3) ns(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        ns(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == 'function' ||
          (typeof r.componentDidCatch == 'function' &&
            (ct === null || !ct.has(r)))
        ) {
          (e = un(n, e)),
            (e = rc(t, e, 1)),
            (t = at(t, e, 1)),
            (e = se()),
            t !== null && (tr(t, 1, e), me(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function rp(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = se()),
    (e.pingedLanes |= e.suspendedLanes & n),
    q === e &&
      (ee & n) === n &&
      (G === 4 || (G === 3 && (ee & 130023424) === ee && 500 > Q() - Fi)
        ? Pt(e, 0)
        : (Di |= n)),
    me(e, t);
}
function xc(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = pr), (pr <<= 1), !(pr & 130023424) && (pr = 4194304))
      : (t = 1));
  var n = se();
  (e = Xe(e, t)), e !== null && (tr(e, t, n), me(e, n));
}
function lp(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), xc(e, n);
}
function op(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(y(314));
  }
  r !== null && r.delete(t), xc(e, n);
}
var Cc;
Cc = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || pe.current) de = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (de = !1), Kd(e, t, n);
      de = !!(e.flags & 131072);
    }
  else (de = !1), U && t.flags & 1048576 && Na(t, Gr, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Ir(e, t), (e = t.pendingProps);
      var l = nn(t, ie.current);
      bt(t, n), (l = Li(null, t, r, e, l, n));
      var o = Ti();
      return (
        (t.flags |= 1),
        typeof l == 'object' &&
        l !== null &&
        typeof l.render == 'function' &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            he(r) ? ((o = !0), Yr(t)) : (o = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            _i(t),
            (l.updater = vl),
            (t.stateNode = l),
            (l._reactInternals = t),
            Do(t, r, e, n),
            (t = $o(null, t, r, !0, o, n)))
          : ((t.tag = 0), U && o && gi(t), ue(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Ir(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = up(r)),
          (e = Le(r, e)),
          l)
        ) {
          case 0:
            t = Uo(null, t, r, e, n);
            break e;
          case 1:
            t = Ku(null, t, r, e, n);
            break e;
          case 11:
            t = Hu(null, t, r, e, n);
            break e;
          case 14:
            t = Qu(null, t, r, Le(r.type, e), n);
            break e;
        }
        throw Error(y(306, r, ''));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Le(r, l)),
        Uo(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Le(r, l)),
        Ku(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((uc(t), e === null)) throw Error(y(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (l = o.element),
          Ta(e, t),
          qr(t, r, null, n);
        var i = t.memoizedState;
        if (((r = i.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: i.cache,
              pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
              transitions: i.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (l = un(Error(y(423)), t)), (t = Yu(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = un(Error(y(424)), t)), (t = Yu(e, t, r, n, l));
            break e;
          } else
            for (
              ye = st(t.stateNode.containerInfo.firstChild),
                ge = t,
                U = !0,
                Oe = null,
                n = ja(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((rn(), r === l)) {
            t = Ge(e, t, n);
            break e;
          }
          ue(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Da(t),
        e === null && Io(t),
        (r = t.type),
        (l = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (i = l.children),
        Ro(r, l) ? (i = null) : o !== null && Ro(r, o) && (t.flags |= 32),
        ic(e, t),
        ue(e, t, i, n),
        t.child
      );
    case 6:
      return e === null && Io(t), null;
    case 13:
      return sc(e, t, n);
    case 4:
      return (
        Pi(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = ln(t, null, r, n)) : ue(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Le(r, l)),
        Hu(e, t, r, l, n)
      );
    case 7:
      return ue(e, t, t.pendingProps, n), t.child;
    case 8:
      return ue(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ue(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (o = t.memoizedProps),
          (i = l.value),
          j(Zr, r._currentValue),
          (r._currentValue = i),
          o !== null)
        )
          if (je(o.value, i)) {
            if (o.children === l.children && !pe.current) {
              t = Ge(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var u = o.dependencies;
              if (u !== null) {
                i = o.child;
                for (var s = u.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (o.tag === 1) {
                      (s = Qe(-1, n & -n)), (s.tag = 2);
                      var a = o.updateQueue;
                      if (a !== null) {
                        a = a.shared;
                        var p = a.pending;
                        p === null
                          ? (s.next = s)
                          : ((s.next = p.next), (p.next = s)),
                          (a.pending = s);
                      }
                    }
                    (o.lanes |= n),
                      (s = o.alternate),
                      s !== null && (s.lanes |= n),
                      Mo(o.return, n, t),
                      (u.lanes |= n);
                    break;
                  }
                  s = s.next;
                }
              } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((i = o.return), i === null)) throw Error(y(341));
                (i.lanes |= n),
                  (u = i.alternate),
                  u !== null && (u.lanes |= n),
                  Mo(i, n, t),
                  (i = o.sibling);
              } else i = o.child;
              if (i !== null) i.return = o;
              else
                for (i = o; i !== null; ) {
                  if (i === t) {
                    i = null;
                    break;
                  }
                  if (((o = i.sibling), o !== null)) {
                    (o.return = i.return), (i = o);
                    break;
                  }
                  i = i.return;
                }
              o = i;
            }
        ue(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        bt(t, n),
        (l = Pe(l)),
        (r = r(l)),
        (t.flags |= 1),
        ue(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = Le(r, t.pendingProps)),
        (l = Le(r.type, l)),
        Qu(e, t, r, l, n)
      );
    case 15:
      return lc(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Le(r, l)),
        Ir(e, t),
        (t.tag = 1),
        he(r) ? ((e = !0), Yr(t)) : (e = !1),
        bt(t, n),
        Ia(t, r, l),
        Do(t, r, l, n),
        $o(null, t, r, !0, e, n)
      );
    case 19:
      return ac(e, t, n);
    case 22:
      return oc(e, t, n);
  }
  throw Error(y(156, t.tag));
};
function _c(e, t) {
  return Js(e, t);
}
function ip(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Ce(e, t, n, r) {
  return new ip(e, t, n, r);
}
function Ai(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function up(e) {
  if (typeof e == 'function') return Ai(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === ii)) return 11;
    if (e === ui) return 14;
  }
  return 2;
}
function dt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Ce(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Dr(e, t, n, r, l, o) {
  var i = 2;
  if (((r = e), typeof e == 'function')) Ai(e) && (i = 1);
  else if (typeof e == 'string') i = 5;
  else
    e: switch (e) {
      case Ut:
        return Nt(n.children, l, o, t);
      case oi:
        (i = 8), (l |= 8);
        break;
      case oo:
        return (
          (e = Ce(12, n, t, l | 2)), (e.elementType = oo), (e.lanes = o), e
        );
      case io:
        return (e = Ce(13, n, t, l)), (e.elementType = io), (e.lanes = o), e;
      case uo:
        return (e = Ce(19, n, t, l)), (e.elementType = uo), (e.lanes = o), e;
      case Ms:
        return Sl(n, l, o, t);
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case Os:
              i = 10;
              break e;
            case Is:
              i = 9;
              break e;
            case ii:
              i = 11;
              break e;
            case ui:
              i = 14;
              break e;
            case qe:
              (i = 16), (r = null);
              break e;
          }
        throw Error(y(130, e == null ? e : typeof e, ''));
    }
  return (
    (t = Ce(i, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function Nt(e, t, n, r) {
  return (e = Ce(7, e, r, t)), (e.lanes = n), e;
}
function Sl(e, t, n, r) {
  return (
    (e = Ce(22, e, r, t)),
    (e.elementType = Ms),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function eo(e, t, n) {
  return (e = Ce(6, e, null, t)), (e.lanes = n), e;
}
function to(e, t, n) {
  return (
    (t = Ce(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function sp(e, t, n, r, l) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = jl(0)),
    (this.expirationTimes = jl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = jl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function Vi(e, t, n, r, l, o, i, u, s) {
  return (
    (e = new sp(e, t, n, u, s)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = Ce(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    _i(o),
    e
  );
}
function ap(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Ft,
    key: r == null ? null : '' + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Pc(e) {
  if (!e) return ht;
  e = e._reactInternals;
  e: {
    if (jt(e) !== e || e.tag !== 1) throw Error(y(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (he(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(y(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (he(n)) return _a(e, n, t);
  }
  return t;
}
function Nc(e, t, n, r, l, o, i, u, s) {
  return (
    (e = Vi(n, r, !0, e, l, o, i, u, s)),
    (e.context = Pc(null)),
    (n = e.current),
    (r = se()),
    (l = ft(n)),
    (o = Qe(r, l)),
    (o.callback = t ?? null),
    at(n, o, l),
    (e.current.lanes = l),
    tr(e, l, r),
    me(e, r),
    e
  );
}
function kl(e, t, n, r) {
  var l = t.current,
    o = se(),
    i = ft(l);
  return (
    (n = Pc(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Qe(o, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = at(l, t, i)),
    e !== null && (Me(e, l, i, o), Lr(e, l, i)),
    i
  );
}
function il(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function rs(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Wi(e, t) {
  rs(e, t), (e = e.alternate) && rs(e, t);
}
function cp() {
  return null;
}
var Rc =
  typeof reportError == 'function'
    ? reportError
    : function (e) {
        console.error(e);
      };
function Hi(e) {
  this._internalRoot = e;
}
El.prototype.render = Hi.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(y(409));
  kl(e, t, null, null);
};
El.prototype.unmount = Hi.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    It(function () {
      kl(null, e, null, null);
    }),
      (t[Ye] = null);
  }
};
function El(e) {
  this._internalRoot = e;
}
El.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = la();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < et.length && t !== 0 && t < et[n].priority; n++);
    et.splice(n, 0, e), n === 0 && ia(e);
  }
};
function Qi(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function xl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
  );
}
function ls() {}
function fp(e, t, n, r, l) {
  if (l) {
    if (typeof r == 'function') {
      var o = r;
      r = function () {
        var a = il(i);
        o.call(a);
      };
    }
    var i = Nc(t, r, e, 0, null, !1, !1, '', ls);
    return (
      (e._reactRootContainer = i),
      (e[Ye] = i.current),
      Hn(e.nodeType === 8 ? e.parentNode : e),
      It(),
      i
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == 'function') {
    var u = r;
    r = function () {
      var a = il(s);
      u.call(a);
    };
  }
  var s = Vi(e, 0, !1, null, null, !1, !1, '', ls);
  return (
    (e._reactRootContainer = s),
    (e[Ye] = s.current),
    Hn(e.nodeType === 8 ? e.parentNode : e),
    It(function () {
      kl(t, s, n, r);
    }),
    s
  );
}
function Cl(e, t, n, r, l) {
  var o = n._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof l == 'function') {
      var u = l;
      l = function () {
        var s = il(i);
        u.call(s);
      };
    }
    kl(t, i, e, l);
  } else i = fp(n, t, e, l, r);
  return il(i);
}
na = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = _n(t.pendingLanes);
        n !== 0 &&
          (ci(t, n | 1), me(t, Q()), !(I & 6) && ((sn = Q() + 500), yt()));
      }
      break;
    case 13:
      It(function () {
        var r = Xe(e, 1);
        if (r !== null) {
          var l = se();
          Me(r, e, 1, l);
        }
      }),
        Wi(e, 1);
  }
};
fi = function (e) {
  if (e.tag === 13) {
    var t = Xe(e, 134217728);
    if (t !== null) {
      var n = se();
      Me(t, e, 134217728, n);
    }
    Wi(e, 134217728);
  }
};
ra = function (e) {
  if (e.tag === 13) {
    var t = ft(e),
      n = Xe(e, t);
    if (n !== null) {
      var r = se();
      Me(n, e, t, r);
    }
    Wi(e, t);
  }
};
la = function () {
  return M;
};
oa = function (e, t) {
  var n = M;
  try {
    return (M = e), t();
  } finally {
    M = n;
  }
};
go = function (e, t, n) {
  switch (t) {
    case 'input':
      if ((co(e, n), (t = n.name), n.type === 'radio' && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            'input[name=' + JSON.stringify('' + t) + '][type="radio"]',
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = hl(r);
            if (!l) throw Error(y(90));
            Ds(r), co(r, l);
          }
        }
      }
      break;
    case 'textarea':
      Us(e, n);
      break;
    case 'select':
      (t = n.value), t != null && Gt(e, !!n.multiple, t, !1);
  }
};
Qs = Ui;
Ks = It;
var dp = { usingClientEntryPoint: !1, Events: [rr, Vt, hl, Ws, Hs, Ui] },
  En = {
    findFiberByHostInstance: xt,
    bundleType: 0,
    version: '18.2.0',
    rendererPackageName: 'react-dom',
  },
  pp = {
    bundleType: En.bundleType,
    version: En.version,
    rendererPackageName: En.rendererPackageName,
    rendererConfig: En.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Ze.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Gs(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: En.findFiberByHostInstance || cp,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.2.0-next-9e3b772b8-20220608',
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var Cr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Cr.isDisabled && Cr.supportsFiber)
    try {
      (cl = Cr.inject(pp)), ($e = Cr);
    } catch {}
}
Se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = dp;
Se.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Qi(t)) throw Error(y(200));
  return ap(e, t, null, n);
};
Se.createRoot = function (e, t) {
  if (!Qi(e)) throw Error(y(299));
  var n = !1,
    r = '',
    l = Rc;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = Vi(e, 1, !1, null, null, n, !1, r, l)),
    (e[Ye] = t.current),
    Hn(e.nodeType === 8 ? e.parentNode : e),
    new Hi(t)
  );
};
Se.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == 'function'
      ? Error(y(188))
      : ((e = Object.keys(e).join(',')), Error(y(268, e)));
  return (e = Gs(t)), (e = e === null ? null : e.stateNode), e;
};
Se.flushSync = function (e) {
  return It(e);
};
Se.hydrate = function (e, t, n) {
  if (!xl(t)) throw Error(y(200));
  return Cl(null, e, t, !0, n);
};
Se.hydrateRoot = function (e, t, n) {
  if (!Qi(e)) throw Error(y(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    o = '',
    i = Rc;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = Nc(t, null, e, 1, n ?? null, l, !1, o, i)),
    (e[Ye] = t.current),
    Hn(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new El(t);
};
Se.render = function (e, t, n) {
  if (!xl(t)) throw Error(y(200));
  return Cl(null, e, t, !1, n);
};
Se.unmountComponentAtNode = function (e) {
  if (!xl(e)) throw Error(y(40));
  return e._reactRootContainer
    ? (It(function () {
        Cl(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Ye] = null);
        });
      }),
      !0)
    : !1;
};
Se.unstable_batchedUpdates = Ui;
Se.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!xl(n)) throw Error(y(200));
  if (e == null || e._reactInternals === void 0) throw Error(y(38));
  return Cl(e, t, n, !1, r);
};
Se.version = '18.2.0-next-9e3b772b8-20220608';
function zc() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(zc);
    } catch (e) {
      console.error(e);
    }
}
zc(), (Ns.exports = Se);
var Ki = Ns.exports;
const hp = ms(Ki),
  yh = hs({ __proto__: null, default: hp }, [Ki]);
var os = Ki;
(ro.createRoot = os.createRoot), (ro.hydrateRoot = os.hydrateRoot);
/**
 * @remix-run/router v1.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function bn() {
  return (
    (bn = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    bn.apply(this, arguments)
  );
}
var lt;
(function (e) {
  (e.Pop = 'POP'), (e.Push = 'PUSH'), (e.Replace = 'REPLACE');
})(lt || (lt = {}));
const is = 'popstate';
function mp(e) {
  e === void 0 && (e = {});
  function t(r, l) {
    let { pathname: o, search: i, hash: u } = r.location;
    return Jo(
      '',
      { pathname: o, search: i, hash: u },
      (l.state && l.state.usr) || null,
      (l.state && l.state.key) || 'default',
    );
  }
  function n(r, l) {
    return typeof l == 'string' ? l : Lc(l);
  }
  return yp(t, n, null, e);
}
function te(e, t) {
  if (e === !1 || e === null || typeof e > 'u') throw new Error(t);
}
function Yi(e, t) {
  if (!e) {
    typeof console < 'u' && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function vp() {
  return Math.random().toString(36).substr(2, 8);
}
function us(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function Jo(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    bn(
      { pathname: typeof e == 'string' ? e : e.pathname, search: '', hash: '' },
      typeof t == 'string' ? dn(t) : t,
      { state: n, key: (t && t.key) || r || vp() },
    )
  );
}
function Lc(e) {
  let { pathname: t = '/', search: n = '', hash: r = '' } = e;
  return (
    n && n !== '?' && (t += n.charAt(0) === '?' ? n : '?' + n),
    r && r !== '#' && (t += r.charAt(0) === '#' ? r : '#' + r),
    t
  );
}
function dn(e) {
  let t = {};
  if (e) {
    let n = e.indexOf('#');
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf('?');
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function yp(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: l = document.defaultView, v5Compat: o = !1 } = r,
    i = l.history,
    u = lt.Pop,
    s = null,
    a = p();
  a == null && ((a = 0), i.replaceState(bn({}, i.state, { idx: a }), ''));
  function p() {
    return (i.state || { idx: null }).idx;
  }
  function h() {
    u = lt.Pop;
    let R = p(),
      f = R == null ? null : R - a;
    (a = R), s && s({ action: u, location: g.location, delta: f });
  }
  function m(R, f) {
    u = lt.Push;
    let c = Jo(g.location, R, f);
    n && n(c, R), (a = p() + 1);
    let d = us(c, a),
      v = g.createHref(c);
    try {
      i.pushState(d, '', v);
    } catch (k) {
      if (k instanceof DOMException && k.name === 'DataCloneError') throw k;
      l.location.assign(v);
    }
    o && s && s({ action: u, location: g.location, delta: 1 });
  }
  function S(R, f) {
    u = lt.Replace;
    let c = Jo(g.location, R, f);
    n && n(c, R), (a = p());
    let d = us(c, a),
      v = g.createHref(c);
    i.replaceState(d, '', v),
      o && s && s({ action: u, location: g.location, delta: 0 });
  }
  function w(R) {
    let f = l.location.origin !== 'null' ? l.location.origin : l.location.href,
      c = typeof R == 'string' ? R : Lc(R);
    return (
      te(
        f,
        'No window.location.(origin|href) available to create URL for href: ' +
          c,
      ),
      new URL(c, f)
    );
  }
  let g = {
    get action() {
      return u;
    },
    get location() {
      return e(l, i);
    },
    listen(R) {
      if (s) throw new Error('A history only accepts one active listener');
      return (
        l.addEventListener(is, h),
        (s = R),
        () => {
          l.removeEventListener(is, h), (s = null);
        }
      );
    },
    createHref(R) {
      return t(l, R);
    },
    createURL: w,
    encodeLocation(R) {
      let f = w(R);
      return { pathname: f.pathname, search: f.search, hash: f.hash };
    },
    push: m,
    replace: S,
    go(R) {
      return i.go(R);
    },
  };
  return g;
}
var ss;
(function (e) {
  (e.data = 'data'),
    (e.deferred = 'deferred'),
    (e.redirect = 'redirect'),
    (e.error = 'error');
})(ss || (ss = {}));
function gp(e, t, n) {
  n === void 0 && (n = '/');
  let r = typeof t == 'string' ? dn(t) : t,
    l = Ic(r.pathname || '/', n);
  if (l == null) return null;
  let o = Tc(e);
  wp(o);
  let i = null;
  for (let u = 0; i == null && u < o.length; ++u) i = Rp(o[u], Tp(l));
  return i;
}
function Tc(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = '');
  let l = (o, i, u) => {
    let s = {
      relativePath: u === void 0 ? o.path || '' : u,
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: i,
      route: o,
    };
    s.relativePath.startsWith('/') &&
      (te(
        s.relativePath.startsWith(r),
        'Absolute route path "' +
          s.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          'must start with the combined path of all its parent routes.',
      ),
      (s.relativePath = s.relativePath.slice(r.length)));
    let a = Rt([r, s.relativePath]),
      p = n.concat(s);
    o.children &&
      o.children.length > 0 &&
      (te(
        o.index !== !0,
        'Index routes must not have child routes. Please remove ' +
          ('all child routes from route path "' + a + '".'),
      ),
      Tc(o.children, t, p, a)),
      !(o.path == null && !o.index) &&
        t.push({ path: a, score: Pp(a, o.index), routesMeta: p });
  };
  return (
    e.forEach((o, i) => {
      var u;
      if (o.path === '' || !((u = o.path) != null && u.includes('?'))) l(o, i);
      else for (let s of Oc(o.path)) l(o, i, s);
    }),
    t
  );
}
function Oc(e) {
  let t = e.split('/');
  if (t.length === 0) return [];
  let [n, ...r] = t,
    l = n.endsWith('?'),
    o = n.replace(/\?$/, '');
  if (r.length === 0) return l ? [o, ''] : [o];
  let i = Oc(r.join('/')),
    u = [];
  return (
    u.push(...i.map((s) => (s === '' ? o : [o, s].join('/')))),
    l && u.push(...i),
    u.map((s) => (e.startsWith('/') && s === '' ? '/' : s))
  );
}
function wp(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : Np(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex),
        ),
  );
}
const Sp = /^:\w+$/,
  kp = 3,
  Ep = 2,
  xp = 1,
  Cp = 10,
  _p = -2,
  as = (e) => e === '*';
function Pp(e, t) {
  let n = e.split('/'),
    r = n.length;
  return (
    n.some(as) && (r += _p),
    t && (r += Ep),
    n
      .filter((l) => !as(l))
      .reduce((l, o) => l + (Sp.test(o) ? kp : o === '' ? xp : Cp), r)
  );
}
function Np(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, l) => r === t[l])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function Rp(e, t) {
  let { routesMeta: n } = e,
    r = {},
    l = '/',
    o = [];
  for (let i = 0; i < n.length; ++i) {
    let u = n[i],
      s = i === n.length - 1,
      a = l === '/' ? t : t.slice(l.length) || '/',
      p = zp(
        { path: u.relativePath, caseSensitive: u.caseSensitive, end: s },
        a,
      );
    if (!p) return null;
    Object.assign(r, p.params);
    let h = u.route;
    o.push({
      params: r,
      pathname: Rt([l, p.pathname]),
      pathnameBase: jp(Rt([l, p.pathnameBase])),
      route: h,
    }),
      p.pathnameBase !== '/' && (l = Rt([l, p.pathnameBase]));
  }
  return o;
}
function zp(e, t) {
  typeof e == 'string' && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = Lp(e.path, e.caseSensitive, e.end),
    l = t.match(n);
  if (!l) return null;
  let o = l[0],
    i = o.replace(/(.)\/+$/, '$1'),
    u = l.slice(1);
  return {
    params: r.reduce((a, p, h) => {
      if (p === '*') {
        let m = u[h] || '';
        i = o.slice(0, o.length - m.length).replace(/(.)\/+$/, '$1');
      }
      return (a[p] = Op(u[h] || '', p)), a;
    }, {}),
    pathname: o,
    pathnameBase: i,
    pattern: e,
  };
}
function Lp(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    Yi(
      e === '*' || !e.endsWith('*') || e.endsWith('/*'),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, '/*') + '" because the `*` character must ') +
        'always follow a `/` in the pattern. To get rid of this warning, ' +
        ('please change the route path to "' + e.replace(/\*$/, '/*') + '".'),
    );
  let r = [],
    l =
      '^' +
      e
        .replace(/\/*\*?$/, '')
        .replace(/^\/*/, '/')
        .replace(/[\\.*+^$?{}|()[\]]/g, '\\$&')
        .replace(/\/:(\w+)/g, (i, u) => (r.push(u), '/([^\\/]+)'));
  return (
    e.endsWith('*')
      ? (r.push('*'),
        (l += e === '*' || e === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
      : n
      ? (l += '\\/*$')
      : e !== '' && e !== '/' && (l += '(?:(?=\\/|$))'),
    [new RegExp(l, t ? void 0 : 'i'), r]
  );
}
function Tp(e) {
  try {
    return decodeURI(e);
  } catch (t) {
    return (
      Yi(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ('encoding (' + t + ').'),
      ),
      e
    );
  }
}
function Op(e, t) {
  try {
    return decodeURIComponent(e);
  } catch (n) {
    return (
      Yi(
        !1,
        'The value for the URL param "' +
          t +
          '" will not be decoded because' +
          (' the string "' +
            e +
            '" is a malformed URL segment. This is probably') +
          (' due to a bad percent encoding (' + n + ').'),
      ),
      e
    );
  }
}
function Ic(e, t) {
  if (t === '/') return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith('/') ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== '/' ? null : e.slice(n) || '/';
}
function Ip(e, t) {
  t === void 0 && (t = '/');
  let {
    pathname: n,
    search: r = '',
    hash: l = '',
  } = typeof e == 'string' ? dn(e) : e;
  return {
    pathname: n ? (n.startsWith('/') ? n : Mp(n, t)) : t,
    search: Dp(r),
    hash: Fp(l),
  };
}
function Mp(e, t) {
  let n = t.replace(/\/+$/, '').split('/');
  return (
    e.split('/').forEach((l) => {
      l === '..' ? n.length > 1 && n.pop() : l !== '.' && n.push(l);
    }),
    n.length > 1 ? n.join('/') : '/'
  );
}
function no(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ('`to.' +
      t +
      '` field [' +
      JSON.stringify(r) +
      '].  Please separate it out to the ') +
    ('`to.' + n + '` field. Alternatively you may provide the full path as ') +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function Mc(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0),
  );
}
function jc(e, t, n, r) {
  r === void 0 && (r = !1);
  let l;
  typeof e == 'string'
    ? (l = dn(e))
    : ((l = bn({}, e)),
      te(
        !l.pathname || !l.pathname.includes('?'),
        no('?', 'pathname', 'search', l),
      ),
      te(
        !l.pathname || !l.pathname.includes('#'),
        no('#', 'pathname', 'hash', l),
      ),
      te(!l.search || !l.search.includes('#'), no('#', 'search', 'hash', l)));
  let o = e === '' || l.pathname === '',
    i = o ? '/' : l.pathname,
    u;
  if (r || i == null) u = n;
  else {
    let h = t.length - 1;
    if (i.startsWith('..')) {
      let m = i.split('/');
      for (; m[0] === '..'; ) m.shift(), (h -= 1);
      l.pathname = m.join('/');
    }
    u = h >= 0 ? t[h] : '/';
  }
  let s = Ip(l, u),
    a = i && i !== '/' && i.endsWith('/'),
    p = (o || i === '.') && n.endsWith('/');
  return !s.pathname.endsWith('/') && (a || p) && (s.pathname += '/'), s;
}
const Rt = (e) => e.join('/').replace(/\/\/+/g, '/'),
  jp = (e) => e.replace(/\/+$/, '').replace(/^\/*/, '/'),
  Dp = (e) => (!e || e === '?' ? '' : e.startsWith('?') ? e : '?' + e),
  Fp = (e) => (!e || e === '#' ? '' : e.startsWith('#') ? e : '#' + e);
function Up(e) {
  return (
    e != null &&
    typeof e.status == 'number' &&
    typeof e.statusText == 'string' &&
    typeof e.internal == 'boolean' &&
    'data' in e
  );
}
const Dc = ['post', 'put', 'patch', 'delete'];
new Set(Dc);
const $p = ['get', ...Dc];
new Set($p);
/**
 * React Router v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ul() {
  return (
    (ul = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ul.apply(this, arguments)
  );
}
const Xi = C.createContext(null),
  Bp = C.createContext(null),
  _l = C.createContext(null),
  Pl = C.createContext(null),
  gt = C.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Fc = C.createContext(null);
function or() {
  return C.useContext(Pl) != null;
}
function Gi() {
  return or() || te(!1), C.useContext(Pl).location;
}
function Uc(e) {
  C.useContext(_l).static || C.useLayoutEffect(e);
}
function Ap() {
  let { isDataRoute: e } = C.useContext(gt);
  return e ? nh() : Vp();
}
function Vp() {
  or() || te(!1);
  let e = C.useContext(Xi),
    { basename: t, navigator: n } = C.useContext(_l),
    { matches: r } = C.useContext(gt),
    { pathname: l } = Gi(),
    o = JSON.stringify(Mc(r).map((s) => s.pathnameBase)),
    i = C.useRef(!1);
  return (
    Uc(() => {
      i.current = !0;
    }),
    C.useCallback(
      function (s, a) {
        if ((a === void 0 && (a = {}), !i.current)) return;
        if (typeof s == 'number') {
          n.go(s);
          return;
        }
        let p = jc(s, JSON.parse(o), l, a.relative === 'path');
        e == null &&
          t !== '/' &&
          (p.pathname = p.pathname === '/' ? t : Rt([t, p.pathname])),
          (a.replace ? n.replace : n.push)(p, a.state, a);
      },
      [t, n, o, l, e],
    )
  );
}
const Wp = C.createContext(null);
function Hp(e) {
  let t = C.useContext(gt).outlet;
  return t && C.createElement(Wp.Provider, { value: e }, t);
}
function Qp(e, t) {
  return Kp(e, t);
}
function Kp(e, t, n) {
  or() || te(!1);
  let { navigator: r } = C.useContext(_l),
    { matches: l } = C.useContext(gt),
    o = l[l.length - 1],
    i = o ? o.params : {};
  o && o.pathname;
  let u = o ? o.pathnameBase : '/';
  o && o.route;
  let s = Gi(),
    a;
  if (t) {
    var p;
    let g = typeof t == 'string' ? dn(t) : t;
    u === '/' || ((p = g.pathname) != null && p.startsWith(u)) || te(!1),
      (a = g);
  } else a = s;
  let h = a.pathname || '/',
    m = u === '/' ? h : h.slice(u.length) || '/',
    S = gp(e, { pathname: m }),
    w = Jp(
      S &&
        S.map((g) =>
          Object.assign({}, g, {
            params: Object.assign({}, i, g.params),
            pathname: Rt([
              u,
              r.encodeLocation
                ? r.encodeLocation(g.pathname).pathname
                : g.pathname,
            ]),
            pathnameBase:
              g.pathnameBase === '/'
                ? u
                : Rt([
                    u,
                    r.encodeLocation
                      ? r.encodeLocation(g.pathnameBase).pathname
                      : g.pathnameBase,
                  ]),
          }),
        ),
      l,
      n,
    );
  return t && w
    ? C.createElement(
        Pl.Provider,
        {
          value: {
            location: ul(
              {
                pathname: '/',
                search: '',
                hash: '',
                state: null,
                key: 'default',
              },
              a,
            ),
            navigationType: lt.Pop,
          },
        },
        w,
      )
    : w;
}
function Yp() {
  let e = th(),
    t = Up(e)
      ? e.status + ' ' + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    l = { padding: '0.5rem', backgroundColor: 'rgba(200,200,200, 0.5)' },
    o = null;
  return C.createElement(
    C.Fragment,
    null,
    C.createElement('h2', null, 'Unexpected Application Error!'),
    C.createElement('h3', { style: { fontStyle: 'italic' } }, t),
    n ? C.createElement('pre', { style: l }, n) : null,
    o,
  );
}
const Xp = C.createElement(Yp, null);
class Gp extends C.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== 'idle' && t.revalidation === 'idle')
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error || n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      'React Router caught the following error during render',
      t,
      n,
    );
  }
  render() {
    return this.state.error
      ? C.createElement(
          gt.Provider,
          { value: this.props.routeContext },
          C.createElement(Fc.Provider, {
            value: this.state.error,
            children: this.props.component,
          }),
        )
      : this.props.children;
  }
}
function Zp(e) {
  let { routeContext: t, match: n, children: r } = e,
    l = C.useContext(Xi);
  return (
    l &&
      l.static &&
      l.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (l.staticContext._deepestRenderedBoundaryId = n.route.id),
    C.createElement(gt.Provider, { value: t }, r)
  );
}
function Jp(e, t, n) {
  var r;
  if ((t === void 0 && (t = []), n === void 0 && (n = null), e == null)) {
    var l;
    if ((l = n) != null && l.errors) e = n.matches;
    else return null;
  }
  let o = e,
    i = (r = n) == null ? void 0 : r.errors;
  if (i != null) {
    let u = o.findIndex(
      (s) => s.route.id && (i == null ? void 0 : i[s.route.id]),
    );
    u >= 0 || te(!1), (o = o.slice(0, Math.min(o.length, u + 1)));
  }
  return o.reduceRight((u, s, a) => {
    let p = s.route.id ? (i == null ? void 0 : i[s.route.id]) : null,
      h = null;
    n && (h = s.route.errorElement || Xp);
    let m = t.concat(o.slice(0, a + 1)),
      S = () => {
        let w;
        return (
          p
            ? (w = h)
            : s.route.Component
            ? (w = C.createElement(s.route.Component, null))
            : s.route.element
            ? (w = s.route.element)
            : (w = u),
          C.createElement(Zp, {
            match: s,
            routeContext: { outlet: u, matches: m, isDataRoute: n != null },
            children: w,
          })
        );
      };
    return n && (s.route.ErrorBoundary || s.route.errorElement || a === 0)
      ? C.createElement(Gp, {
          location: n.location,
          revalidation: n.revalidation,
          component: h,
          error: p,
          children: S(),
          routeContext: { outlet: null, matches: m, isDataRoute: !0 },
        })
      : S();
  }, null);
}
var $c = (function (e) {
    return (
      (e.UseBlocker = 'useBlocker'),
      (e.UseRevalidator = 'useRevalidator'),
      (e.UseNavigateStable = 'useNavigate'),
      e
    );
  })($c || {}),
  sl = (function (e) {
    return (
      (e.UseBlocker = 'useBlocker'),
      (e.UseLoaderData = 'useLoaderData'),
      (e.UseActionData = 'useActionData'),
      (e.UseRouteError = 'useRouteError'),
      (e.UseNavigation = 'useNavigation'),
      (e.UseRouteLoaderData = 'useRouteLoaderData'),
      (e.UseMatches = 'useMatches'),
      (e.UseRevalidator = 'useRevalidator'),
      (e.UseNavigateStable = 'useNavigate'),
      (e.UseRouteId = 'useRouteId'),
      e
    );
  })(sl || {});
function qp(e) {
  let t = C.useContext(Xi);
  return t || te(!1), t;
}
function bp(e) {
  let t = C.useContext(Bp);
  return t || te(!1), t;
}
function eh(e) {
  let t = C.useContext(gt);
  return t || te(!1), t;
}
function Bc(e) {
  let t = eh(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || te(!1), n.route.id;
}
function th() {
  var e;
  let t = C.useContext(Fc),
    n = bp(sl.UseRouteError),
    r = Bc(sl.UseRouteError);
  return t || ((e = n.errors) == null ? void 0 : e[r]);
}
function nh() {
  let { router: e } = qp($c.UseNavigateStable),
    t = Bc(sl.UseNavigateStable),
    n = C.useRef(!1);
  return (
    Uc(() => {
      n.current = !0;
    }),
    C.useCallback(
      function (l, o) {
        o === void 0 && (o = {}),
          n.current &&
            (typeof l == 'number'
              ? e.navigate(l)
              : e.navigate(l, ul({ fromRouteId: t }, o)));
      },
      [e, t],
    )
  );
}
function rh(e) {
  let { to: t, replace: n, state: r, relative: l } = e;
  or() || te(!1);
  let { matches: o } = C.useContext(gt),
    { pathname: i } = Gi(),
    u = Ap(),
    s = jc(
      t,
      Mc(o).map((p) => p.pathnameBase),
      i,
      l === 'path',
    ),
    a = JSON.stringify(s);
  return (
    C.useEffect(
      () => u(JSON.parse(a), { replace: n, state: r, relative: l }),
      [u, a, l, n, r],
    ),
    null
  );
}
function lh(e) {
  return Hp(e.context);
}
function oh(e) {
  let {
    basename: t = '/',
    children: n = null,
    location: r,
    navigationType: l = lt.Pop,
    navigator: o,
    static: i = !1,
  } = e;
  or() && te(!1);
  let u = t.replace(/^\/*/, '/'),
    s = C.useMemo(() => ({ basename: u, navigator: o, static: i }), [u, o, i]);
  typeof r == 'string' && (r = dn(r));
  let {
      pathname: a = '/',
      search: p = '',
      hash: h = '',
      state: m = null,
      key: S = 'default',
    } = r,
    w = C.useMemo(() => {
      let g = Ic(a, u);
      return g == null
        ? null
        : {
            location: { pathname: g, search: p, hash: h, state: m, key: S },
            navigationType: l,
          };
    }, [u, a, p, h, m, S, l]);
  return w == null
    ? null
    : C.createElement(
        _l.Provider,
        { value: s },
        C.createElement(Pl.Provider, { children: n, value: w }),
      );
}
new Promise(() => {});
/**
 * React Router DOM v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ const ih = 'startTransition',
  cs = rf[ih];
function uh(e) {
  let { basename: t, children: n, future: r, window: l } = e,
    o = C.useRef();
  o.current == null && (o.current = mp({ window: l, v5Compat: !0 }));
  let i = o.current,
    [u, s] = C.useState({ action: i.action, location: i.location }),
    { v7_startTransition: a } = r || {},
    p = C.useCallback(
      (h) => {
        a && cs ? cs(() => s(h)) : s(h);
      },
      [s, a],
    );
  return (
    C.useLayoutEffect(() => i.listen(p), [i, p]),
    C.createElement(oh, {
      basename: t,
      children: n,
      location: u.location,
      navigationType: u.action,
      navigator: i,
    })
  );
}
var fs;
(function (e) {
  (e.UseScrollRestoration = 'useScrollRestoration'),
    (e.UseSubmit = 'useSubmit'),
    (e.UseSubmitFetcher = 'useSubmitFetcher'),
    (e.UseFetcher = 'useFetcher');
})(fs || (fs = {}));
var ds;
(function (e) {
  (e.UseFetchers = 'useFetchers'),
    (e.UseScrollRestoration = 'useScrollRestoration');
})(ds || (ds = {}));
const sh = 'modulepreload',
  ah = function (e) {
    return '/' + e;
  },
  ps = {},
  ch = function (t, n, r) {
    if (!n || n.length === 0) return t();
    const l = document.getElementsByTagName('link');
    return Promise.all(
      n.map((o) => {
        if (((o = ah(o)), o in ps)) return;
        ps[o] = !0;
        const i = o.endsWith('.css'),
          u = i ? '[rel="stylesheet"]' : '';
        if (!!r)
          for (let p = l.length - 1; p >= 0; p--) {
            const h = l[p];
            if (h.href === o && (!i || h.rel === 'stylesheet')) return;
          }
        else if (document.querySelector(`link[href="${o}"]${u}`)) return;
        const a = document.createElement('link');
        if (
          ((a.rel = i ? 'stylesheet' : sh),
          i || ((a.as = 'script'), (a.crossOrigin = '')),
          (a.href = o),
          document.head.appendChild(a),
          i)
        )
          return new Promise((p, h) => {
            a.addEventListener('load', p),
              a.addEventListener('error', () =>
                h(new Error(`Unable to preload CSS for ${o}`)),
              );
          });
      }),
    )
      .then(() => t())
      .catch((o) => {
        const i = new Event('vite:preloadError', { cancelable: !0 });
        if (((i.payload = o), window.dispatchEvent(i), !i.defaultPrevented))
          throw o;
      });
  },
  fh = '/assets/react-35ef61ed.svg',
  dh = '/vite.svg';
function ph() {
  const [e, t] = C.useState(0);
  return K.jsxs(K.Fragment, {
    children: [
      K.jsxs('div', {
        children: [
          K.jsx('a', {
            href: 'https://vitejs.dev',
            target: '_blank',
            children: K.jsx('img', {
              src: dh,
              className: 'logo',
              alt: 'Vite logo',
            }),
          }),
          K.jsx('a', {
            href: 'https://react.dev',
            target: '_blank',
            children: K.jsx('img', {
              src: fh,
              className: 'logo react',
              alt: 'React logo',
            }),
          }),
        ],
      }),
      K.jsx('h1', { children: 'Vite + React' }),
      K.jsxs('div', {
        className: 'card',
        children: [
          K.jsxs('button', {
            onClick: () => t((n) => n + 1),
            children: ['count is ', e],
          }),
          K.jsxs('p', {
            children: [
              'Edit ',
              K.jsx('code', { children: 'src/App.tsx' }),
              ' and save to test HMR',
            ],
          }),
        ],
      }),
      K.jsx('p', {
        className: 'read-the-docs',
        children: 'Click on the Vite and React logos to learn more',
      }),
    ],
  });
}
const hh = () => K.jsxs('div', { children: ['ewew', K.jsx(lh, {})] }),
  mh = [
    {
      path: '/login',
      lazy: _s.lazy(() => ch(() => import('./index-aaabf9f1.js'), [])),
    },
    { path: '/', element: K.jsx(rh, { replace: !0, to: '/home' }) },
    {
      path: '/',
      element: K.jsx(hh, {}),
      children: [{ path: 'home', element: K.jsx(ph, {}) }],
    },
  ],
  vh = () => Qp(mh);
ro.createRoot(document.getElementById('root')).render(
  K.jsx(uh, { children: K.jsx(vh, {}) }),
);
export { _s as R, hp as a, rf as b, yh as c, ms as g, K as j, C as r };
