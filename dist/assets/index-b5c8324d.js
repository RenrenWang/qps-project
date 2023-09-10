import { b as Ee, R as Re, d as be, r as u } from './react-vendor-eb7cafb8.js';
(function () {
  const e = document.createElement('link').relList;
  if (!(e && e.supports && e.supports('modulepreload'))) {
    for (const n of document.querySelectorAll('link[rel="modulepreload"]'))
      t(n);
    new MutationObserver((n) => {
      for (const a of n)
        if (a.type === 'childList')
          for (const r of a.addedNodes)
            r.tagName === 'LINK' && r.rel === 'modulepreload' && t(r);
    }).observe(document, { childList: !0, subtree: !0 });
  }
  function t(n) {
    if (n.ep) return;
    n.ep = !0;
    const a = (function (r) {
      const o = {};
      return (
        r.integrity && (o.integrity = r.integrity),
        r.referrerPolicy && (o.referrerPolicy = r.referrerPolicy),
        r.crossOrigin === 'use-credentials'
          ? (o.credentials = 'include')
          : r.crossOrigin === 'anonymous'
          ? (o.credentials = 'omit')
          : (o.credentials = 'same-origin'),
        o
      );
    })(n);
    fetch(n.href, a);
  }
})();
var ue = { exports: {} },
  $ = {},
  Ce = u,
  we = Symbol.for('react.element'),
  Se = Symbol.for('react.fragment'),
  Pe = Object.prototype.hasOwnProperty,
  je = Ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Ue = { key: !0, ref: !0, __self: !0, __source: !0 };
function X(e, t, n) {
  var a,
    r = {},
    o = null,
    c = null;
  for (a in (n !== void 0 && (o = '' + n),
  t.key !== void 0 && (o = '' + t.key),
  t.ref !== void 0 && (c = t.ref),
  t))
    Pe.call(t, a) && !Ue.hasOwnProperty(a) && (r[a] = t[a]);
  if (e && e.defaultProps)
    for (a in (t = e.defaultProps)) r[a] === void 0 && (r[a] = t[a]);
  return {
    $$typeof: we,
    type: e,
    key: o,
    ref: c,
    props: r,
    _owner: je.current,
  };
}
($.Fragment = Se), ($.jsx = X), ($.jsxs = X), (ue.exports = $);
var P,
  v = ue.exports,
  J = {},
  Z = be;
function _() {
  return (
    (_ = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var a in n)
              Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
          }
          return e;
        }),
    _.apply(this, arguments)
  );
}
(J.createRoot = Z.createRoot),
  (J.hydrateRoot = Z.hydrateRoot),
  (function (e) {
    (e.Pop = 'POP'), (e.Push = 'PUSH'), (e.Replace = 'REPLACE');
  })(P || (P = {}));
const ee = 'popstate';
function Le(e) {
  return (
    e === void 0 && (e = {}),
    (function (t, n, a, r) {
      r === void 0 && (r = {});
      let { window: o = document.defaultView, v5Compat: c = !1 } = r,
        i = o.history,
        l = P.Pop,
        s = null,
        h = p();
      h == null && ((h = 0), i.replaceState(_({}, i.state, { idx: h }), ''));
      function p() {
        return (i.state || { idx: null }).idx;
      }
      function m() {
        l = P.Pop;
        let d = p(),
          g = d == null ? null : d - h;
        (h = d), s && s({ action: l, location: b.location, delta: g });
      }
      function y(d, g) {
        l = P.Push;
        let f = M(b.location, d, g);
        a && a(f, d), (h = p() + 1);
        let C = te(f, h),
          U = b.createHref(f);
        try {
          i.pushState(C, '', U);
        } catch (w) {
          if (w instanceof DOMException && w.name === 'DataCloneError') throw w;
          o.location.assign(U);
        }
        c && s && s({ action: l, location: b.location, delta: 1 });
      }
      function S(d, g) {
        l = P.Replace;
        let f = M(b.location, d, g);
        a && a(f, d), (h = p());
        let C = te(f, h),
          U = b.createHref(f);
        i.replaceState(C, '', U),
          c && s && s({ action: l, location: b.location, delta: 0 });
      }
      function R(d) {
        let g =
            o.location.origin !== 'null' ? o.location.origin : o.location.href,
          f = typeof d == 'string' ? d : ne(d);
        return (
          x(
            g,
            'No window.location.(origin|href) available to create URL for href: ' +
              f,
          ),
          new URL(f, g)
        );
      }
      let b = {
        get action() {
          return l;
        },
        get location() {
          return t(o, i);
        },
        listen(d) {
          if (s) throw new Error('A history only accepts one active listener');
          return (
            o.addEventListener(ee, m),
            (s = d),
            () => {
              o.removeEventListener(ee, m), (s = null);
            }
          );
        },
        createHref: (d) => n(o, d),
        createURL: R,
        encodeLocation(d) {
          let g = R(d);
          return { pathname: g.pathname, search: g.search, hash: g.hash };
        },
        push: y,
        replace: S,
        go: (d) => i.go(d),
      };
      return b;
    })(
      function (t, n) {
        let { pathname: a, search: r, hash: o } = t.location;
        return M(
          '',
          { pathname: a, search: r, hash: o },
          (n.state && n.state.usr) || null,
          (n.state && n.state.key) || 'default',
        );
      },
      function (t, n) {
        return typeof n == 'string' ? n : ne(n);
      },
      null,
      e,
    )
  );
}
function x(e, t) {
  if (e === !1 || e == null) throw new Error(t);
}
function H(e, t) {
  if (!e) {
    typeof console < 'u' && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function te(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function M(e, t, n, a) {
  return (
    n === void 0 && (n = null),
    _(
      { pathname: typeof e == 'string' ? e : e.pathname, search: '', hash: '' },
      typeof t == 'string' ? O(t) : t,
      {
        state: n,
        key: (t && t.key) || a || Math.random().toString(36).substr(2, 8),
      },
    )
  );
}
function ne(e) {
  let { pathname: t = '/', search: n = '', hash: a = '' } = e;
  return (
    n && n !== '?' && (t += n.charAt(0) === '?' ? n : '?' + n),
    a && a !== '#' && (t += a.charAt(0) === '#' ? a : '#' + a),
    t
  );
}
function O(e) {
  let t = {};
  if (e) {
    let n = e.indexOf('#');
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let a = e.indexOf('?');
    a >= 0 && ((t.search = e.substr(a)), (e = e.substr(0, a))),
      e && (t.pathname = e);
  }
  return t;
}
var re;
function Oe(e, t, n) {
  n === void 0 && (n = '/');
  let a = pe((typeof t == 'string' ? O(t) : t).pathname || '/', n);
  if (a == null) return null;
  let r = he(e);
  (function (c) {
    c.sort((i, l) =>
      i.score !== l.score
        ? l.score - i.score
        : (function (s, h) {
            return s.length === h.length &&
              s.slice(0, -1).every((m, y) => m === h[y])
              ? s[s.length - 1] - h[h.length - 1]
              : 0;
          })(
            i.routesMeta.map((s) => s.childrenIndex),
            l.routesMeta.map((s) => s.childrenIndex),
          ),
    );
  })(r);
  let o = null;
  for (let c = 0; o == null && c < r.length; ++c) o = Te(r[c], Ae(a));
  return o;
}
function he(e, t, n, a) {
  t === void 0 && (t = []), n === void 0 && (n = []), a === void 0 && (a = '');
  let r = (o, c, i) => {
    let l = {
      relativePath: i === void 0 ? o.path || '' : i,
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: c,
      route: o,
    };
    l.relativePath.startsWith('/') &&
      (x(
        l.relativePath.startsWith(a),
        'Absolute route path "' +
          l.relativePath +
          '" nested under path "' +
          a +
          '" is not valid. An absolute child route path must start with the combined path of all its parent routes.',
      ),
      (l.relativePath = l.relativePath.slice(a.length)));
    let s = L([a, l.relativePath]),
      h = n.concat(l);
    o.children &&
      o.children.length > 0 &&
      (x(
        o.index !== !0,
        'Index routes must not have child routes. Please remove all child routes from route path "' +
          s +
          '".',
      ),
      he(o.children, t, h, s)),
      (o.path != null || o.index) &&
        t.push({ path: s, score: De(s, o.index), routesMeta: h });
  };
  return (
    e.forEach((o, c) => {
      var i;
      if (o.path !== '' && (i = o.path) != null && i.includes('?'))
        for (let l of de(o.path)) r(o, c, l);
      else r(o, c);
    }),
    t
  );
}
function de(e) {
  let t = e.split('/');
  if (t.length === 0) return [];
  let [n, ...a] = t,
    r = n.endsWith('?'),
    o = n.replace(/\?$/, '');
  if (a.length === 0) return r ? [o, ''] : [o];
  let c = de(a.join('/')),
    i = [];
  return (
    i.push(...c.map((l) => (l === '' ? o : [o, l].join('/')))),
    r && i.push(...c),
    i.map((l) => (e.startsWith('/') && l === '' ? '/' : l))
  );
}
(function (e) {
  (e.data = 'data'),
    (e.deferred = 'deferred'),
    (e.redirect = 'redirect'),
    (e.error = 'error');
})(re || (re = {}));
const ke = /^:\w+$/,
  Ne = 3,
  _e = 2,
  Be = 1,
  $e = 10,
  We = -2,
  ae = (e) => e === '*';
function De(e, t) {
  let n = e.split('/'),
    a = n.length;
  return (
    n.some(ae) && (a += We),
    t && (a += _e),
    n
      .filter((r) => !ae(r))
      .reduce((r, o) => r + (ke.test(o) ? Ne : o === '' ? Be : $e), a)
  );
}
function Te(e, t) {
  let { routesMeta: n } = e,
    a = {},
    r = '/',
    o = [];
  for (let c = 0; c < n.length; ++c) {
    let i = n[c],
      l = c === n.length - 1,
      s = r === '/' ? t : t.slice(r.length) || '/',
      h = Ie(
        { path: i.relativePath, caseSensitive: i.caseSensitive, end: l },
        s,
      );
    if (!h) return null;
    Object.assign(a, h.params);
    let p = i.route;
    o.push({
      params: a,
      pathname: L([r, h.pathname]),
      pathnameBase: Me(L([r, h.pathnameBase])),
      route: p,
    }),
      h.pathnameBase !== '/' && (r = L([r, h.pathnameBase]));
  }
  return o;
}
function Ie(e, t) {
  typeof e == 'string' && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, a] = (function (l, s, h) {
      s === void 0 && (s = !1),
        h === void 0 && (h = !0),
        H(
          l === '*' || !l.endsWith('*') || l.endsWith('/*'),
          'Route path "' +
            l +
            '" will be treated as if it were "' +
            l.replace(/\*$/, '/*') +
            '" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "' +
            l.replace(/\*$/, '/*') +
            '".',
        );
      let p = [],
        m =
          '^' +
          l
            .replace(/\/*\*?$/, '')
            .replace(/^\/*/, '/')
            .replace(/[\\.*+^$?{}|()[\]]/g, '\\$&')
            .replace(/\/:(\w+)/g, (S, R) => (p.push(R), '/([^\\/]+)'));
      return (
        l.endsWith('*')
          ? (p.push('*'),
            (m += l === '*' || l === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
          : h
          ? (m += '\\/*$')
          : l !== '' && l !== '/' && (m += '(?:(?=\\/|$))'),
        [new RegExp(m, s ? void 0 : 'i'), p]
      );
    })(e.path, e.caseSensitive, e.end),
    r = t.match(n);
  if (!r) return null;
  let o = r[0],
    c = o.replace(/(.)\/+$/, '$1'),
    i = r.slice(1);
  return {
    params: a.reduce((l, s, h) => {
      if (s === '*') {
        let p = i[h] || '';
        c = o.slice(0, o.length - p.length).replace(/(.)\/+$/, '$1');
      }
      return (
        (l[s] = (function (p, m) {
          try {
            return decodeURIComponent(p);
          } catch (y) {
            return (
              H(
                !1,
                'The value for the URL param "' +
                  m +
                  '" will not be decoded because the string "' +
                  p +
                  '" is a malformed URL segment. This is probably due to a bad percent encoding (' +
                  y +
                  ').',
              ),
              p
            );
          }
        })(i[h] || '', s)),
        l
      );
    }, {}),
    pathname: o,
    pathnameBase: c,
    pattern: e,
  };
}
function Ae(e) {
  try {
    return decodeURI(e);
  } catch (t) {
    return (
      H(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (' +
          t +
          ').',
      ),
      e
    );
  }
}
function pe(e, t) {
  if (t === '/') return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith('/') ? t.length - 1 : t.length,
    a = e.charAt(n);
  return a && a !== '/' ? null : e.slice(n) || '/';
}
function F(e, t, n, a) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified `to." +
    t +
    '` field [' +
    JSON.stringify(a) +
    '].  Please separate it out to the `to.' +
    n +
    '` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'
  );
}
function fe(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0),
  );
}
function me(e, t, n, a) {
  let r;
  a === void 0 && (a = !1),
    typeof e == 'string'
      ? (r = O(e))
      : ((r = _({}, e)),
        x(
          !r.pathname || !r.pathname.includes('?'),
          F('?', 'pathname', 'search', r),
        ),
        x(
          !r.pathname || !r.pathname.includes('#'),
          F('#', 'pathname', 'hash', r),
        ),
        x(!r.search || !r.search.includes('#'), F('#', 'search', 'hash', r)));
  let o,
    c = e === '' || r.pathname === '',
    i = c ? '/' : r.pathname;
  if (a || i == null) o = n;
  else {
    let p = t.length - 1;
    if (i.startsWith('..')) {
      let m = i.split('/');
      for (; m[0] === '..'; ) m.shift(), (p -= 1);
      r.pathname = m.join('/');
    }
    o = p >= 0 ? t[p] : '/';
  }
  let l = (function (p, m) {
      m === void 0 && (m = '/');
      let {
        pathname: y,
        search: S = '',
        hash: R = '',
      } = typeof p == 'string' ? O(p) : p;
      return {
        pathname: y
          ? y.startsWith('/')
            ? y
            : (function (d, g) {
                let f = g.replace(/\/+$/, '').split('/');
                return (
                  d.split('/').forEach((C) => {
                    C === '..'
                      ? f.length > 1 && f.pop()
                      : C !== '.' && f.push(C);
                  }),
                  f.length > 1 ? f.join('/') : '/'
                );
              })(y, m)
          : m,
        search: Fe(S),
        hash: Je(R),
      };
    })(r, o),
    s = i && i !== '/' && i.endsWith('/'),
    h = (c || i === '.') && n.endsWith('/');
  return l.pathname.endsWith('/') || (!s && !h) || (l.pathname += '/'), l;
}
const L = (e) => e.join('/').replace(/\/\/+/g, '/'),
  Me = (e) => e.replace(/\/+$/, '').replace(/^\/*/, '/'),
  Fe = (e) => (e && e !== '?' ? (e.startsWith('?') ? e : '?' + e) : ''),
  Je = (e) => (e && e !== '#' ? (e.startsWith('#') ? e : '#' + e) : ''),
  ve = ['post', 'put', 'patch', 'delete'];
new Set(ve);
const He = ['get', ...ve];
function W() {
  return (
    (W = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var a in n)
              Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
          }
          return e;
        }),
    W.apply(this, arguments)
  );
}
new Set(He);
const V = u.createContext(null),
  Ve = u.createContext(null),
  T = u.createContext(null),
  I = u.createContext(null),
  j = u.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  ge = u.createContext(null);
function B() {
  return u.useContext(I) != null;
}
function q() {
  return B() || x(!1), u.useContext(I).location;
}
function oe(e) {
  u.useContext(T).static || u.useLayoutEffect(e);
}
function qe() {
  let { isDataRoute: e } = u.useContext(j);
  return e
    ? (function () {
        let { router: t } = (function (o) {
            let c = u.useContext(V);
            return c || x(!1), c;
          })(ye.UseNavigateStable),
          n = xe(D.UseNavigateStable),
          a = u.useRef(!1);
        return (
          oe(() => {
            a.current = !0;
          }),
          u.useCallback(
            function (o, c) {
              c === void 0 && (c = {}),
                a.current &&
                  (typeof o == 'number'
                    ? t.navigate(o)
                    : t.navigate(o, W({ fromRouteId: n }, c)));
            },
            [t, n],
          )
        );
      })()
    : (function () {
        B() || x(!1);
        let t = u.useContext(V),
          { basename: n, navigator: a } = u.useContext(T),
          { matches: r } = u.useContext(j),
          { pathname: o } = q(),
          c = JSON.stringify(fe(r).map((l) => l.pathnameBase)),
          i = u.useRef(!1);
        return (
          oe(() => {
            i.current = !0;
          }),
          u.useCallback(
            function (l, s) {
              if ((s === void 0 && (s = {}), !i.current)) return;
              if (typeof l == 'number') return void a.go(l);
              let h = me(l, JSON.parse(c), o, s.relative === 'path');
              t == null &&
                n !== '/' &&
                (h.pathname = h.pathname === '/' ? n : L([n, h.pathname])),
                (s.replace ? a.replace : a.push)(h, s.state, s);
            },
            [n, a, c, o, t],
          )
        );
      })();
}
const ze = u.createContext(null);
function Ke(e, t) {
  return (function (n, a, r) {
    B() || x(!1);
    let { navigator: o } = u.useContext(T),
      { matches: c } = u.useContext(j),
      i = c[c.length - 1],
      l = i ? i.params : {};
    !i || i.pathname;
    let s = i ? i.pathnameBase : '/';
    i && i.route;
    let h,
      p = q();
    if (a) {
      var m;
      let d = typeof a == 'string' ? O(a) : a;
      s === '/' || ((m = d.pathname) != null && m.startsWith(s)) || x(!1),
        (h = d);
    } else h = p;
    let y = h.pathname || '/',
      S = s === '/' ? y : y.slice(s.length) || '/',
      R = Oe(n, { pathname: S }),
      b = (function (d, g, f) {
        var C, U;
        if ((g === void 0 && (g = []), f === void 0 && (f = null), d == null)) {
          if ((U = f) == null || !U.errors) return null;
          d = f.matches;
        }
        let w = d,
          k = (C = f) == null ? void 0 : C.errors;
        if (k != null) {
          let N = w.findIndex(
            (E) => E.route.id && (k == null ? void 0 : k[E.route.id]),
          );
          N >= 0 || x(!1), (w = w.slice(0, Math.min(w.length, N + 1)));
        }
        return w.reduceRight((N, E, z) => {
          let K = E.route.id ? (k == null ? void 0 : k[E.route.id]) : null,
            A = null;
          f && (A = E.route.errorElement || Ge);
          let Y = g.concat(w.slice(0, z + 1)),
            G = () => {
              let Q;
              return (
                (Q = K
                  ? A
                  : E.route.Component
                  ? u.createElement(E.route.Component, null)
                  : E.route.element
                  ? E.route.element
                  : N),
                u.createElement(Xe, {
                  match: E,
                  routeContext: {
                    outlet: N,
                    matches: Y,
                    isDataRoute: f != null,
                  },
                  children: Q,
                })
              );
            };
          return f && (E.route.ErrorBoundary || E.route.errorElement || z === 0)
            ? u.createElement(Qe, {
                location: f.location,
                revalidation: f.revalidation,
                component: A,
                error: K,
                children: G(),
                routeContext: { outlet: null, matches: Y, isDataRoute: !0 },
              })
            : G();
        }, null);
      })(
        R &&
          R.map((d) =>
            Object.assign({}, d, {
              params: Object.assign({}, l, d.params),
              pathname: L([
                s,
                o.encodeLocation
                  ? o.encodeLocation(d.pathname).pathname
                  : d.pathname,
              ]),
              pathnameBase:
                d.pathnameBase === '/'
                  ? s
                  : L([
                      s,
                      o.encodeLocation
                        ? o.encodeLocation(d.pathnameBase).pathname
                        : d.pathnameBase,
                    ]),
            }),
          ),
        c,
        r,
      );
    return a && b
      ? u.createElement(
          I.Provider,
          {
            value: {
              location: W(
                {
                  pathname: '/',
                  search: '',
                  hash: '',
                  state: null,
                  key: 'default',
                },
                h,
              ),
              navigationType: P.Pop,
            },
          },
          b,
        )
      : b;
  })(e, t);
}
function Ye() {
  let e = (function () {
      var r;
      let o = u.useContext(ge),
        c = (function (l) {
          let s = u.useContext(Ve);
          return s || x(!1), s;
        })(D.UseRouteError),
        i = xe(D.UseRouteError);
      return o || ((r = c.errors) == null ? void 0 : r[i]);
    })(),
    t = (function (r) {
      return (
        r != null &&
        typeof r.status == 'number' &&
        typeof r.statusText == 'string' &&
        typeof r.internal == 'boolean' &&
        'data' in r
      );
    })(e)
      ? e.status + ' ' + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    a = { padding: '0.5rem', backgroundColor: 'rgba(200,200,200, 0.5)' };
  return u.createElement(
    u.Fragment,
    null,
    u.createElement('h2', null, 'Unexpected Application Error!'),
    u.createElement('h3', { style: { fontStyle: 'italic' } }, t),
    n ? u.createElement('pre', { style: a }, n) : null,
    null,
  );
}
const Ge = u.createElement(Ye, null);
class Qe extends u.Component {
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
      ? u.createElement(
          j.Provider,
          { value: this.props.routeContext },
          u.createElement(ge.Provider, {
            value: this.state.error,
            children: this.props.component,
          }),
        )
      : this.props.children;
  }
}
function Xe(e) {
  let { routeContext: t, match: n, children: a } = e,
    r = u.useContext(V);
  return (
    r &&
      r.static &&
      r.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (r.staticContext._deepestRenderedBoundaryId = n.route.id),
    u.createElement(j.Provider, { value: t }, a)
  );
}
var ye = (function (e) {
    return (
      (e.UseBlocker = 'useBlocker'),
      (e.UseRevalidator = 'useRevalidator'),
      (e.UseNavigateStable = 'useNavigate'),
      e
    );
  })(ye || {}),
  D = (function (e) {
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
  })(D || {});
function xe(e) {
  let t = (function (a) {
      let r = u.useContext(j);
      return r || x(!1), r;
    })(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || x(!1), n.route.id;
}
function Ze(e) {
  let { to: t, replace: n, state: a, relative: r } = e;
  B() || x(!1);
  let { matches: o } = u.useContext(j),
    { pathname: c } = q(),
    i = qe(),
    l = me(
      t,
      fe(o).map((h) => h.pathnameBase),
      c,
      r === 'path',
    ),
    s = JSON.stringify(l);
  return (
    u.useEffect(
      () => i(JSON.parse(s), { replace: n, state: a, relative: r }),
      [i, s, r, n, a],
    ),
    null
  );
}
function et(e) {
  return (function (t) {
    let n = u.useContext(j).outlet;
    return n && u.createElement(ze.Provider, { value: t }, n);
  })(e.context);
}
function tt(e) {
  let {
    basename: t = '/',
    children: n = null,
    location: a,
    navigationType: r = P.Pop,
    navigator: o,
    static: c = !1,
  } = e;
  B() && x(!1);
  let i = t.replace(/^\/*/, '/'),
    l = u.useMemo(() => ({ basename: i, navigator: o, static: c }), [i, o, c]);
  typeof a == 'string' && (a = O(a));
  let {
      pathname: s = '/',
      search: h = '',
      hash: p = '',
      state: m = null,
      key: y = 'default',
    } = a,
    S = u.useMemo(() => {
      let R = pe(s, i);
      return R == null
        ? null
        : {
            location: { pathname: R, search: h, hash: p, state: m, key: y },
            navigationType: r,
          };
    }, [i, s, h, p, m, y, r]);
  return S == null
    ? null
    : u.createElement(
        T.Provider,
        { value: l },
        u.createElement(I.Provider, { children: n, value: S }),
      );
}
new Promise(() => {});
const le = Ee.startTransition;
function nt(e) {
  let { basename: t, children: n, future: a, window: r } = e,
    o = u.useRef();
  o.current == null && (o.current = Le({ window: r, v5Compat: !0 }));
  let c = o.current,
    [i, l] = u.useState({ action: c.action, location: c.location }),
    { v7_startTransition: s } = a || {},
    h = u.useCallback(
      (p) => {
        s && le ? le(() => l(p)) : l(p);
      },
      [l, s],
    );
  return (
    u.useLayoutEffect(() => c.listen(h), [c, h]),
    u.createElement(tt, {
      basename: t,
      children: n,
      location: i.location,
      navigationType: i.action,
      navigator: c,
    })
  );
}
var ie, se;
(function (e) {
  (e.UseScrollRestoration = 'useScrollRestoration'),
    (e.UseSubmit = 'useSubmit'),
    (e.UseSubmitFetcher = 'useSubmitFetcher'),
    (e.UseFetcher = 'useFetcher');
})(ie || (ie = {})),
  (function (e) {
    (e.UseFetchers = 'useFetchers'),
      (e.UseScrollRestoration = 'useScrollRestoration');
  })(se || (se = {}));
const ce = {},
  rt = () => v.jsxs('div', { children: ['ewew', v.jsx(et, {})] });
function at() {
  const [e, t] = u.useState(0);
  return v.jsxs(v.Fragment, {
    children: [
      v.jsxs('div', {
        children: [
          v.jsx('a', {
            href: 'https://vitejs.dev',
            target: '_blank',
            children: v.jsx('img', {
              src: '/vite.svg',
              className: 'logo',
              alt: 'Vite logo',
            }),
          }),
          v.jsx('a', {
            href: 'https://react.dev',
            target: '_blank',
            children: v.jsx('img', {
              src: '/assets/react-35ef61ed.svg',
              className: 'logo react',
              alt: 'React logo',
            }),
          }),
        ],
      }),
      v.jsx('h1', { children: 'Vite + React' }),
      v.jsxs('div', {
        className: 'card',
        children: [
          v.jsxs('button', {
            onClick: () => t((n) => n + 1),
            children: ['count is ', e],
          }),
          v.jsxs('p', {
            children: [
              'Edit ',
              v.jsx('code', { children: 'src/App.tsx' }),
              ' and save to test HMR',
            ],
          }),
        ],
      }),
      v.jsx('p', {
        className: 'read-the-docs',
        children: 'Click on the Vite and React logos to learn more',
      }),
    ],
  });
}
const ot = [
    {
      path: '/login',
      lazy: Re.lazy(() =>
        (function (e, t, n) {
          if (!t || t.length === 0) return e();
          const a = document.getElementsByTagName('link');
          return Promise.all(
            t.map((r) => {
              if (
                (r = (function (l) {
                  return '/' + l;
                })(r)) in ce
              )
                return;
              ce[r] = !0;
              const o = r.endsWith('.css'),
                c = o ? '[rel="stylesheet"]' : '';
              if (n)
                for (let l = a.length - 1; l >= 0; l--) {
                  const s = a[l];
                  if (s.href === r && (!o || s.rel === 'stylesheet')) return;
                }
              else if (document.querySelector(`link[href="${r}"]${c}`)) return;
              const i = document.createElement('link');
              return (
                (i.rel = o ? 'stylesheet' : 'modulepreload'),
                o || ((i.as = 'script'), (i.crossOrigin = '')),
                (i.href = r),
                document.head.appendChild(i),
                o
                  ? new Promise((l, s) => {
                      i.addEventListener('load', l),
                        i.addEventListener('error', () =>
                          s(new Error(`Unable to preload CSS for ${r}`)),
                        );
                    })
                  : void 0
              );
            }),
          )
            .then(() => e())
            .catch((r) => {
              const o = new Event('vite:preloadError', { cancelable: !0 });
              if (
                ((o.payload = r), window.dispatchEvent(o), !o.defaultPrevented)
              )
                throw r;
            });
        })(
          () => import('./index-8654f0b2.js'),
          [
            'assets/index-8654f0b2.js',
            'assets/library-85b72b63.js',
            'assets/react-vendor-eb7cafb8.js',
          ],
        ),
      ),
    },
    { path: '/', element: v.jsx(Ze, { replace: !0, to: '/home' }) },
    {
      path: '/',
      element: v.jsx(rt, {}),
      children: [{ path: 'home', element: v.jsx(at, {}) }],
    },
  ],
  lt = () => Ke(ot);
J.createRoot(document.getElementById('root')).render(
  v.jsx(nt, { children: v.jsx(lt, {}) }),
);
export { v as j };
