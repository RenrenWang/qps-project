import {
  g as If,
  b as Jo,
  c as Nf,
  a as Tf,
  R as Y,
  d as kc,
  r as s,
} from './react-vendor-eb7cafb8.js';
function Rt(e, t) {
  if (!(e instanceof t))
    throw new TypeError('Cannot call a class as a function');
}
function pe(e) {
  return (
    (pe =
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
    pe(e)
  );
}
function jc(e) {
  var t = (function (n, r) {
    if (pe(n) !== 'object' || n === null) return n;
    var o = n[Symbol.toPrimitive];
    if (o !== void 0) {
      var i = o.call(n, r || 'default');
      if (pe(i) !== 'object') return i;
      throw new TypeError('@@toPrimitive must return a primitive value.');
    }
    return (r === 'string' ? String : Number)(n);
  })(e, 'string');
  return pe(t) === 'symbol' ? t : String(t);
}
function Vl(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      'value' in r && (r.writable = !0),
      Object.defineProperty(e, jc(r.key), r);
  }
}
function It(e, t, n) {
  return (
    t && Vl(e.prototype, t),
    n && Vl(e, n),
    Object.defineProperty(e, 'prototype', { writable: !1 }),
    e
  );
}
function Yi(e, t) {
  return (
    (Yi = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, r) {
          return (n.__proto__ = r), n;
        }),
    Yi(e, t)
  );
}
function ei(e, t) {
  if (typeof t != 'function' && t !== null)
    throw new TypeError('Super expression must either be null or a function');
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, 'prototype', { writable: !1 }),
    t && Yi(e, t);
}
function Vo(e) {
  return (
    (Vo = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (t) {
          return t.__proto__ || Object.getPrototypeOf(t);
        }),
    Vo(e)
  );
}
function fe(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return e;
}
function ti(e) {
  var t = (function () {
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
  })();
  return function () {
    var n,
      r = Vo(e);
    if (t) {
      var o = Vo(this).constructor;
      n = Reflect.construct(r, arguments, o);
    } else n = r.apply(this, arguments);
    return (function (i, a) {
      if (a && (pe(a) === 'object' || typeof a == 'function')) return a;
      if (a !== void 0)
        throw new TypeError(
          'Derived constructors may only return object or undefined',
        );
      return fe(i);
    })(this, n);
  };
}
var mi,
  Pc = { exports: {} };
(mi = Pc),
  (function () {
    var e = {}.hasOwnProperty;
    function t() {
      for (var n = [], r = 0; r < arguments.length; r++) {
        var o = arguments[r];
        if (o) {
          var i = typeof o;
          if (i === 'string' || i === 'number') n.push(o);
          else if (Array.isArray(o)) {
            if (o.length) {
              var a = t.apply(null, o);
              a && n.push(a);
            }
          } else if (i === 'object') {
            if (
              o.toString !== Object.prototype.toString &&
              !o.toString.toString().includes('[native code]')
            ) {
              n.push(o.toString());
              continue;
            }
            for (var l in o) e.call(o, l) && o[l] && n.push(l);
          }
        }
      }
      return n.join(' ');
    }
    mi.exports ? ((t.default = t), (mi.exports = t)) : (window.classNames = t);
  })();
const Q = If(Pc.exports);
function Se() {
  return (
    (Se = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Se.apply(this, arguments)
  );
}
var Fc = { exports: {} },
  me = {},
  Be = typeof Symbol == 'function' && Symbol.for,
  Ki = Be ? Symbol.for('react.element') : 60103,
  Qi = Be ? Symbol.for('react.portal') : 60106,
  $o = Be ? Symbol.for('react.fragment') : 60107,
  Eo = Be ? Symbol.for('react.strict_mode') : 60108,
  So = Be ? Symbol.for('react.profiler') : 60114,
  Oo = Be ? Symbol.for('react.provider') : 60109,
  ko = Be ? Symbol.for('react.context') : 60110,
  Zi = Be ? Symbol.for('react.async_mode') : 60111,
  qo = Be ? Symbol.for('react.concurrent_mode') : 60111,
  jo = Be ? Symbol.for('react.forward_ref') : 60112,
  Po = Be ? Symbol.for('react.suspense') : 60113,
  _f = Be ? Symbol.for('react.suspense_list') : 60120,
  Fo = Be ? Symbol.for('react.memo') : 60115,
  Mo = Be ? Symbol.for('react.lazy') : 60116,
  zf = Be ? Symbol.for('react.block') : 60121,
  Lf = Be ? Symbol.for('react.fundamental') : 60117,
  Hf = Be ? Symbol.for('react.responder') : 60118,
  Bf = Be ? Symbol.for('react.scope') : 60119;
function nt(e) {
  if (typeof e == 'object' && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Ki:
        switch ((e = e.type)) {
          case Zi:
          case qo:
          case $o:
          case So:
          case Eo:
          case Po:
            return e;
          default:
            switch ((e = e && e.$$typeof)) {
              case ko:
              case jo:
              case Mo:
              case Fo:
              case Oo:
                return e;
              default:
                return t;
            }
        }
      case Qi:
        return t;
    }
  }
}
function ql(e) {
  return nt(e) === qo;
}
(me.AsyncMode = Zi),
  (me.ConcurrentMode = qo),
  (me.ContextConsumer = ko),
  (me.ContextProvider = Oo),
  (me.Element = Ki),
  (me.ForwardRef = jo),
  (me.Fragment = $o),
  (me.Lazy = Mo),
  (me.Memo = Fo),
  (me.Portal = Qi),
  (me.Profiler = So),
  (me.StrictMode = Eo),
  (me.Suspense = Po),
  (me.isAsyncMode = function (e) {
    return ql(e) || nt(e) === Zi;
  }),
  (me.isConcurrentMode = ql),
  (me.isContextConsumer = function (e) {
    return nt(e) === ko;
  }),
  (me.isContextProvider = function (e) {
    return nt(e) === Oo;
  }),
  (me.isElement = function (e) {
    return typeof e == 'object' && e !== null && e.$$typeof === Ki;
  }),
  (me.isForwardRef = function (e) {
    return nt(e) === jo;
  }),
  (me.isFragment = function (e) {
    return nt(e) === $o;
  }),
  (me.isLazy = function (e) {
    return nt(e) === Mo;
  }),
  (me.isMemo = function (e) {
    return nt(e) === Fo;
  }),
  (me.isPortal = function (e) {
    return nt(e) === Qi;
  }),
  (me.isProfiler = function (e) {
    return nt(e) === So;
  }),
  (me.isStrictMode = function (e) {
    return nt(e) === Eo;
  }),
  (me.isSuspense = function (e) {
    return nt(e) === Po;
  }),
  (me.isValidElementType = function (e) {
    return (
      typeof e == 'string' ||
      typeof e == 'function' ||
      e === $o ||
      e === qo ||
      e === So ||
      e === Eo ||
      e === Po ||
      e === _f ||
      (typeof e == 'object' &&
        e !== null &&
        (e.$$typeof === Mo ||
          e.$$typeof === Fo ||
          e.$$typeof === Oo ||
          e.$$typeof === ko ||
          e.$$typeof === jo ||
          e.$$typeof === Lf ||
          e.$$typeof === Hf ||
          e.$$typeof === Bf ||
          e.$$typeof === zf))
    );
  }),
  (me.typeOf = nt),
  (Fc.exports = me);
var Mc = Fc.exports;
function _r(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    n = [];
  return (
    Y.Children.forEach(e, function (r) {
      (r != null || t.keepEmpty) &&
        (Array.isArray(r)
          ? (n = n.concat(_r(r)))
          : Mc.isFragment(r) && r.props
          ? (n = n.concat(_r(r.props.children, t)))
          : n.push(r));
    }),
    n
  );
}
var Ji = {};
function Df(e, t) {}
function Wf(e, t) {}
function Ac(e, t, n) {
  t || Ji[n] || (e(!1, n), (Ji[n] = !0));
}
function at(e, t) {
  Ac(Df, e, t);
}
function A(e, t, n) {
  return (
    (t = jc(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function Xl(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function z(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Xl(Object(n), !0).forEach(function (r) {
          A(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : Xl(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function ea(e, t, n) {
  var r = s.useRef({});
  return (
    ('value' in r.current && !n(r.current.condition, t)) ||
      ((r.current.value = e()), (r.current.condition = t)),
    r.current.value
  );
}
function _a(e, t) {
  typeof e == 'function'
    ? e(t)
    : pe(e) === 'object' && e && 'current' in e && (e.current = t);
}
function Xt() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var r = t.filter(function (o) {
    return o;
  });
  return r.length <= 1
    ? r[0]
    : function (o) {
        t.forEach(function (i) {
          _a(i, o);
        });
      };
}
function Rc() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return ea(
    function () {
      return Xt.apply(void 0, t);
    },
    t,
    function (r, o) {
      return (
        r.length !== o.length ||
        r.every(function (i, a) {
          return i !== o[a];
        })
      );
    },
  );
}
function tr(e) {
  var t,
    n,
    r = Mc.isMemo(e) ? e.type.type : e.type;
  return (
    !!(
      typeof r != 'function' ||
      ((t = r.prototype) !== null && t !== void 0 && t.render)
    ) &&
    !!(
      typeof e != 'function' ||
      ((n = e.prototype) !== null && n !== void 0 && n.render)
    )
  );
}
function Ao(e) {
  return e instanceof HTMLElement || e instanceof SVGElement;
}
function ta(e) {
  return Ao(e) ? e : e instanceof Y.Component ? Tf.findDOMNode(e) : null;
}
(at.preMessage = function (e) {}),
  (at.resetWarned = function () {
    Ji = {};
  }),
  (at.noteOnce = function (e, t) {
    Ac(Wf, e, t);
  });
var Ic = (function () {
    if (typeof Map < 'u') return Map;
    function e(t, n) {
      var r = -1;
      return (
        t.some(function (o, i) {
          return o[0] === n && ((r = i), !0);
        }),
        r
      );
    }
    return (function () {
      function t() {
        this.__entries__ = [];
      }
      return (
        Object.defineProperty(t.prototype, 'size', {
          get: function () {
            return this.__entries__.length;
          },
          enumerable: !0,
          configurable: !0,
        }),
        (t.prototype.get = function (n) {
          var r = e(this.__entries__, n),
            o = this.__entries__[r];
          return o && o[1];
        }),
        (t.prototype.set = function (n, r) {
          var o = e(this.__entries__, n);
          ~o ? (this.__entries__[o][1] = r) : this.__entries__.push([n, r]);
        }),
        (t.prototype.delete = function (n) {
          var r = this.__entries__,
            o = e(r, n);
          ~o && r.splice(o, 1);
        }),
        (t.prototype.has = function (n) {
          return !!~e(this.__entries__, n);
        }),
        (t.prototype.clear = function () {
          this.__entries__.splice(0);
        }),
        (t.prototype.forEach = function (n, r) {
          r === void 0 && (r = null);
          for (var o = 0, i = this.__entries__; o < i.length; o++) {
            var a = i[o];
            n.call(r, a[1], a[0]);
          }
        }),
        t
      );
    })();
  })(),
  na =
    typeof window < 'u' &&
    typeof document < 'u' &&
    window.document === document,
  Xo =
    typeof global < 'u' && global.Math === Math
      ? global
      : typeof self < 'u' && self.Math === Math
      ? self
      : typeof window < 'u' && window.Math === Math
      ? window
      : Function('return this')(),
  Vf =
    typeof requestAnimationFrame == 'function'
      ? requestAnimationFrame.bind(Xo)
      : function (e) {
          return setTimeout(function () {
            return e(Date.now());
          }, 1e3 / 60);
        },
  qf = ['top', 'right', 'bottom', 'left', 'width', 'height', 'size', 'weight'],
  Xf = typeof MutationObserver < 'u',
  Gf = (function () {
    function e() {
      (this.connected_ = !1),
        (this.mutationEventsAdded_ = !1),
        (this.mutationsObserver_ = null),
        (this.observers_ = []),
        (this.onTransitionEnd_ = this.onTransitionEnd_.bind(this)),
        (this.refresh = (function (t, n) {
          var r = !1,
            o = !1,
            i = 0;
          function a() {
            r && ((r = !1), t()), o && c();
          }
          function l() {
            Vf(a);
          }
          function c() {
            var u = Date.now();
            if (r) {
              if (u - i < 2) return;
              o = !0;
            } else (r = !0), (o = !1), setTimeout(l, n);
            i = u;
          }
          return c;
        })(this.refresh.bind(this), 20));
    }
    return (
      (e.prototype.addObserver = function (t) {
        ~this.observers_.indexOf(t) || this.observers_.push(t),
          this.connected_ || this.connect_();
      }),
      (e.prototype.removeObserver = function (t) {
        var n = this.observers_,
          r = n.indexOf(t);
        ~r && n.splice(r, 1),
          !n.length && this.connected_ && this.disconnect_();
      }),
      (e.prototype.refresh = function () {
        this.updateObservers_() && this.refresh();
      }),
      (e.prototype.updateObservers_ = function () {
        var t = this.observers_.filter(function (n) {
          return n.gatherActive(), n.hasActive();
        });
        return (
          t.forEach(function (n) {
            return n.broadcastActive();
          }),
          t.length > 0
        );
      }),
      (e.prototype.connect_ = function () {
        na &&
          !this.connected_ &&
          (document.addEventListener('transitionend', this.onTransitionEnd_),
          window.addEventListener('resize', this.refresh),
          Xf
            ? ((this.mutationsObserver_ = new MutationObserver(this.refresh)),
              this.mutationsObserver_.observe(document, {
                attributes: !0,
                childList: !0,
                characterData: !0,
                subtree: !0,
              }))
            : (document.addEventListener('DOMSubtreeModified', this.refresh),
              (this.mutationEventsAdded_ = !0)),
          (this.connected_ = !0));
      }),
      (e.prototype.disconnect_ = function () {
        na &&
          this.connected_ &&
          (document.removeEventListener('transitionend', this.onTransitionEnd_),
          window.removeEventListener('resize', this.refresh),
          this.mutationsObserver_ && this.mutationsObserver_.disconnect(),
          this.mutationEventsAdded_ &&
            document.removeEventListener('DOMSubtreeModified', this.refresh),
          (this.mutationsObserver_ = null),
          (this.mutationEventsAdded_ = !1),
          (this.connected_ = !1));
      }),
      (e.prototype.onTransitionEnd_ = function (t) {
        var n = t.propertyName,
          r = n === void 0 ? '' : n;
        qf.some(function (o) {
          return !!~r.indexOf(o);
        }) && this.refresh();
      }),
      (e.getInstance = function () {
        return this.instance_ || (this.instance_ = new e()), this.instance_;
      }),
      (e.instance_ = null),
      e
    );
  })(),
  Gl = function (e, t) {
    for (var n = 0, r = Object.keys(t); n < r.length; n++) {
      var o = r[n];
      Object.defineProperty(e, o, {
        value: t[o],
        enumerable: !1,
        writable: !1,
        configurable: !0,
      });
    }
    return e;
  },
  Qn = function (e) {
    return (e && e.ownerDocument && e.ownerDocument.defaultView) || Xo;
  },
  Tc = ni(0, 0, 0, 0);
function Ro(e) {
  return parseFloat(e) || 0;
}
function Ul(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  return t.reduce(function (r, o) {
    return r + Ro(e['border-' + o + '-width']);
  }, 0);
}
function Uf(e) {
  var t = e.clientWidth,
    n = e.clientHeight;
  if (!t && !n) return Tc;
  var r = Qn(e).getComputedStyle(e),
    o = (function (f) {
      for (
        var g = {}, b = 0, m = ['top', 'right', 'bottom', 'left'];
        b < m.length;
        b++
      ) {
        var p = m[b],
          h = f['padding-' + p];
        g[p] = Ro(h);
      }
      return g;
    })(r),
    i = o.left + o.right,
    a = o.top + o.bottom,
    l = Ro(r.width),
    c = Ro(r.height);
  if (
    (r.boxSizing === 'border-box' &&
      (Math.round(l + i) !== t && (l -= Ul(r, 'left', 'right') + i),
      Math.round(c + a) !== n && (c -= Ul(r, 'top', 'bottom') + a)),
    !(function (f) {
      return f === Qn(f).document.documentElement;
    })(e))
  ) {
    var u = Math.round(l + i) - t,
      d = Math.round(c + a) - n;
    Math.abs(u) !== 1 && (l -= u), Math.abs(d) !== 1 && (c -= d);
  }
  return ni(o.left, o.top, l, c);
}
var Yf =
  typeof SVGGraphicsElement < 'u'
    ? function (e) {
        return e instanceof Qn(e).SVGGraphicsElement;
      }
    : function (e) {
        return e instanceof Qn(e).SVGElement && typeof e.getBBox == 'function';
      };
function Kf(e) {
  return na
    ? Yf(e)
      ? (function (t) {
          var n = t.getBBox();
          return ni(0, 0, n.width, n.height);
        })(e)
      : Uf(e)
    : Tc;
}
function ni(e, t, n, r) {
  return { x: e, y: t, width: n, height: r };
}
var Qf = (function () {
    function e(t) {
      (this.broadcastWidth = 0),
        (this.broadcastHeight = 0),
        (this.contentRect_ = ni(0, 0, 0, 0)),
        (this.target = t);
    }
    return (
      (e.prototype.isActive = function () {
        var t = Kf(this.target);
        return (
          (this.contentRect_ = t),
          t.width !== this.broadcastWidth || t.height !== this.broadcastHeight
        );
      }),
      (e.prototype.broadcastRect = function () {
        var t = this.contentRect_;
        return (
          (this.broadcastWidth = t.width), (this.broadcastHeight = t.height), t
        );
      }),
      e
    );
  })(),
  Zf = function (e, t) {
    var n = (function (r) {
      var o = r.x,
        i = r.y,
        a = r.width,
        l = r.height,
        c = typeof DOMRectReadOnly < 'u' ? DOMRectReadOnly : Object,
        u = Object.create(c.prototype);
      return (
        Gl(u, {
          x: o,
          y: i,
          width: a,
          height: l,
          top: i,
          right: o + a,
          bottom: l + i,
          left: o,
        }),
        u
      );
    })(t);
    Gl(this, { target: e, contentRect: n });
  },
  Jf = (function () {
    function e(t, n, r) {
      if (
        ((this.activeObservations_ = []),
        (this.observations_ = new Ic()),
        typeof t != 'function')
      )
        throw new TypeError(
          'The callback provided as parameter 1 is not a function.',
        );
      (this.callback_ = t), (this.controller_ = n), (this.callbackCtx_ = r);
    }
    return (
      (e.prototype.observe = function (t) {
        if (!arguments.length)
          throw new TypeError('1 argument required, but only 0 present.');
        if (typeof Element < 'u' && Element instanceof Object) {
          if (!(t instanceof Qn(t).Element))
            throw new TypeError('parameter 1 is not of type "Element".');
          var n = this.observations_;
          n.has(t) ||
            (n.set(t, new Qf(t)),
            this.controller_.addObserver(this),
            this.controller_.refresh());
        }
      }),
      (e.prototype.unobserve = function (t) {
        if (!arguments.length)
          throw new TypeError('1 argument required, but only 0 present.');
        if (typeof Element < 'u' && Element instanceof Object) {
          if (!(t instanceof Qn(t).Element))
            throw new TypeError('parameter 1 is not of type "Element".');
          var n = this.observations_;
          n.has(t) &&
            (n.delete(t), n.size || this.controller_.removeObserver(this));
        }
      }),
      (e.prototype.disconnect = function () {
        this.clearActive(),
          this.observations_.clear(),
          this.controller_.removeObserver(this);
      }),
      (e.prototype.gatherActive = function () {
        var t = this;
        this.clearActive(),
          this.observations_.forEach(function (n) {
            n.isActive() && t.activeObservations_.push(n);
          });
      }),
      (e.prototype.broadcastActive = function () {
        if (this.hasActive()) {
          var t = this.callbackCtx_,
            n = this.activeObservations_.map(function (r) {
              return new Zf(r.target, r.broadcastRect());
            });
          this.callback_.call(t, n, t), this.clearActive();
        }
      }),
      (e.prototype.clearActive = function () {
        this.activeObservations_.splice(0);
      }),
      (e.prototype.hasActive = function () {
        return this.activeObservations_.length > 0;
      }),
      e
    );
  })(),
  Nc = typeof WeakMap < 'u' ? new WeakMap() : new Ic(),
  _c = function e(t) {
    if (!(this instanceof e))
      throw new TypeError('Cannot call a class as a function.');
    if (!arguments.length)
      throw new TypeError('1 argument required, but only 0 present.');
    var n = Gf.getInstance(),
      r = new Jf(t, n, this);
    Nc.set(this, r);
  };
['observe', 'unobserve', 'disconnect'].forEach(function (e) {
  _c.prototype[e] = function () {
    var t;
    return (t = Nc.get(this))[e].apply(t, arguments);
  };
});
var ep = Xo.ResizeObserver !== void 0 ? Xo.ResizeObserver : _c,
  Jt = new Map(),
  Yl = new ep(function (e) {
    e.forEach(function (t) {
      var n,
        r = t.target;
      (n = Jt.get(r)) === null ||
        n === void 0 ||
        n.forEach(function (o) {
          return o(r);
        });
    });
  }),
  tp = (function (e) {
    ei(n, s.Component);
    var t = ti(n);
    function n() {
      return Rt(this, n), t.apply(this, arguments);
    }
    return (
      It(n, [
        {
          key: 'render',
          value: function () {
            return this.props.children;
          },
        },
      ]),
      n
    );
  })(),
  ra = s.createContext(null);
function np(e, t) {
  var n = e.children,
    r = e.disabled,
    o = s.useRef(null),
    i = s.useRef(null),
    a = s.useContext(ra),
    l = typeof n == 'function',
    c = l ? n(o) : n,
    u = s.useRef({ width: -1, height: -1, offsetWidth: -1, offsetHeight: -1 }),
    d = !l && s.isValidElement(c) && tr(c),
    f = d ? c.ref : null,
    g = s.useMemo(
      function () {
        return Xt(f, o);
      },
      [f, o],
    ),
    b = function () {
      return ta(o.current) || ta(i.current);
    };
  s.useImperativeHandle(t, function () {
    return b();
  });
  var m = s.useRef(e);
  m.current = e;
  var p = s.useCallback(function (h) {
    var y = m.current,
      v = y.onResize,
      w = y.data,
      S = h.getBoundingClientRect(),
      k = S.width,
      $ = S.height,
      x = h.offsetWidth,
      O = h.offsetHeight,
      F = Math.floor(k),
      P = Math.floor($);
    if (
      u.current.width !== F ||
      u.current.height !== P ||
      u.current.offsetWidth !== x ||
      u.current.offsetHeight !== O
    ) {
      var N = { width: F, height: P, offsetWidth: x, offsetHeight: O };
      u.current = N;
      var I = x === Math.round(k) ? k : x,
        T = O === Math.round($) ? $ : O,
        L = z(z({}, N), {}, { offsetWidth: I, offsetHeight: T });
      a == null || a(L, h, w),
        v &&
          Promise.resolve().then(function () {
            v(L, h);
          });
    }
  }, []);
  return (
    s.useEffect(
      function () {
        var h,
          y,
          v = b();
        return (
          v &&
            !r &&
            ((h = v),
            (y = p),
            Jt.has(h) || (Jt.set(h, new Set()), Yl.observe(h)),
            Jt.get(h).add(y)),
          function () {
            return (function (w, S) {
              Jt.has(w) &&
                (Jt.get(w).delete(S),
                Jt.get(w).size || (Yl.unobserve(w), Jt.delete(w)));
            })(v, p);
          }
        );
      },
      [o.current, r],
    ),
    s.createElement(tp, { ref: i }, d ? s.cloneElement(c, { ref: g }) : c)
  );
}
var rp = s.forwardRef(np);
function op(e, t) {
  var n = e.children;
  return (typeof n == 'function' ? [n] : _r(n)).map(function (r, o) {
    var i =
      (r == null ? void 0 : r.key) ||
      ''.concat('rc-observer-key', '-').concat(o);
    return s.createElement(
      rp,
      Se({}, e, { key: i, ref: o === 0 ? t : void 0 }),
      r,
    );
  });
}
var ri = s.forwardRef(op);
function qr(e, t) {
  var n = z({}, e);
  return (
    Array.isArray(t) &&
      t.forEach(function (r) {
        delete n[r];
      }),
    n
  );
}
function oa(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function zc(e) {
  if (
    (typeof Symbol < 'u' && e[Symbol.iterator] != null) ||
    e['@@iterator'] != null
  )
    return Array.from(e);
}
function za(e, t) {
  if (e) {
    if (typeof e == 'string') return oa(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    return (
      n === 'Object' && e.constructor && (n = e.constructor.name),
      n === 'Map' || n === 'Set'
        ? Array.from(e)
        : n === 'Arguments' ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
        ? oa(e, t)
        : void 0
    );
  }
}
function K(e) {
  return (
    (function (t) {
      if (Array.isArray(t)) return oa(t);
    })(e) ||
    zc(e) ||
    za(e) ||
    (function () {
      throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    })()
  );
}
ri.Collection = function (e) {
  var t = e.children,
    n = e.onBatchResize,
    r = s.useRef(0),
    o = s.useRef([]),
    i = s.useContext(ra),
    a = s.useCallback(
      function (l, c, u) {
        r.current += 1;
        var d = r.current;
        o.current.push({ size: l, element: c, data: u }),
          Promise.resolve().then(function () {
            d === r.current && (n == null || n(o.current), (o.current = []));
          }),
          i == null || i(l, c, u);
      },
      [n, i],
    );
  return s.createElement(ra.Provider, { value: a }, t);
};
var Lc = function (e) {
    return +setTimeout(e, 16);
  },
  Hc = function (e) {
    return clearTimeout(e);
  };
typeof window < 'u' &&
  'requestAnimationFrame' in window &&
  ((Lc = function (e) {
    return window.requestAnimationFrame(e);
  }),
  (Hc = function (e) {
    return window.cancelAnimationFrame(e);
  }));
var ip = 0,
  La = new Map();
function Bc(e) {
  La.delete(e);
}
var lt = function (e) {
  var t = (ip += 1);
  return (
    (function n(r) {
      if (r === 0) Bc(t), e();
      else {
        var o = Lc(function () {
          n(r - 1);
        });
        La.set(t, o);
      }
    })(arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1),
    t
  );
};
function ia(e) {
  for (var t, n = 0, r = 0, o = e.length; o >= 4; ++r, o -= 4)
    (t =
      1540483477 *
        (65535 &
          (t =
            (255 & e.charCodeAt(r)) |
            ((255 & e.charCodeAt(++r)) << 8) |
            ((255 & e.charCodeAt(++r)) << 16) |
            ((255 & e.charCodeAt(++r)) << 24))) +
      ((59797 * (t >>> 16)) << 16)),
      (n =
        (1540483477 * (65535 & (t ^= t >>> 24)) +
          ((59797 * (t >>> 16)) << 16)) ^
        (1540483477 * (65535 & n) + ((59797 * (n >>> 16)) << 16)));
  switch (o) {
    case 3:
      n ^= (255 & e.charCodeAt(r + 2)) << 16;
    case 2:
      n ^= (255 & e.charCodeAt(r + 1)) << 8;
    case 1:
      n =
        1540483477 * (65535 & (n ^= 255 & e.charCodeAt(r))) +
        ((59797 * (n >>> 16)) << 16);
  }
  return (
    ((n =
      1540483477 * (65535 & (n ^= n >>> 13)) + ((59797 * (n >>> 16)) << 16)) ^
      (n >>> 15)) >>>
    0
  ).toString(36);
}
function st(e, t) {
  if (e == null) return {};
  var n,
    r,
    o = (function (a, l) {
      if (a == null) return {};
      var c,
        u,
        d = {},
        f = Object.keys(a);
      for (u = 0; u < f.length; u++)
        (c = f[u]), l.indexOf(c) >= 0 || (d[c] = a[c]);
      return d;
    })(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (r = 0; r < i.length; r++)
      (n = i[r]),
        t.indexOf(n) >= 0 ||
          (Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
  }
  return o;
}
function Dc(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 && arguments[2],
    r = new Set();
  return (function o(i, a) {
    var l = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1,
      c = r.has(i);
    if ((at(!c, 'Warning: There may be circular references'), c)) return !1;
    if (i === a) return !0;
    if (n && l > 1) return !1;
    r.add(i);
    var u = l + 1;
    if (Array.isArray(i)) {
      if (!Array.isArray(a) || i.length !== a.length) return !1;
      for (var d = 0; d < i.length; d++) if (!o(i[d], a[d], u)) return !1;
      return !0;
    }
    if (i && a && pe(i) === 'object' && pe(a) === 'object') {
      var f = Object.keys(i);
      return (
        f.length === Object.keys(a).length &&
        f.every(function (g) {
          return o(i[g], a[g], u);
        })
      );
    }
    return !1;
  })(e, t);
}
lt.cancel = function (e) {
  var t = La.get(e);
  return Bc(t), Hc(t);
};
var ap = (function () {
    function e(t) {
      Rt(this, e),
        A(this, 'instanceId', void 0),
        A(this, 'cache', new Map()),
        (this.instanceId = t);
    }
    return (
      It(e, [
        {
          key: 'get',
          value: function (t) {
            return this.cache.get(t.join('%')) || null;
          },
        },
        {
          key: 'update',
          value: function (t, n) {
            var r = t.join('%'),
              o = n(this.cache.get(r));
            o === null ? this.cache.delete(r) : this.cache.set(r, o);
          },
        },
      ]),
      e
    );
  })(),
  aa = 'data-token-hash',
  gn = 'data-css-hash',
  Un = '__cssinjs_instance__',
  lp = s.createContext({
    hashPriority: 'low',
    cache: (function () {
      var e = Math.random().toString(12).slice(2);
      if (typeof document < 'u' && document.head && document.body) {
        var t = document.body.querySelectorAll('style['.concat(gn, ']')) || [],
          n = document.head.firstChild;
        Array.from(t).forEach(function (o) {
          (o[Un] = o[Un] || e), o[Un] === e && document.head.insertBefore(o, n);
        });
        var r = {};
        Array.from(document.querySelectorAll('style['.concat(gn, ']'))).forEach(
          function (o) {
            var i,
              a = o.getAttribute(gn);
            r[a]
              ? o[Un] === e &&
                ((i = o.parentNode) === null ||
                  i === void 0 ||
                  i.removeChild(o))
              : (r[a] = !0);
          },
        );
      }
      return new ap(e);
    })(),
    defaultCache: !0,
  });
const Ha = lp;
function Qe() {
  return !(
    typeof window > 'u' ||
    !window.document ||
    !window.document.createElement
  );
}
var Kl = 'data-rc-order',
  Ql = 'data-rc-priority',
  sp = 'rc-util-key',
  la = new Map();
function Wc() {
  var e = (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {})
    .mark;
  return e ? (e.startsWith('data-') ? e : 'data-'.concat(e)) : sp;
}
function oi(e) {
  return e.attachTo
    ? e.attachTo
    : document.querySelector('head') || document.body;
}
function Vc(e) {
  return Array.from((la.get(e) || e).children).filter(function (t) {
    return t.tagName === 'STYLE';
  });
}
function Zl(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!Qe()) return null;
  var n = t.csp,
    r = t.prepend,
    o = t.priority,
    i = o === void 0 ? 0 : o,
    a = (function (g) {
      return g === 'queue' ? 'prependQueue' : g ? 'prepend' : 'append';
    })(r),
    l = a === 'prependQueue',
    c = document.createElement('style');
  c.setAttribute(Kl, a),
    l && i && c.setAttribute(Ql, ''.concat(i)),
    n != null && n.nonce && (c.nonce = n == null ? void 0 : n.nonce),
    (c.innerHTML = e);
  var u = oi(t),
    d = u.firstChild;
  if (r) {
    if (l) {
      var f = Vc(u).filter(function (g) {
        if (!['prepend', 'prependQueue'].includes(g.getAttribute(Kl)))
          return !1;
        var b = Number(g.getAttribute(Ql) || 0);
        return i >= b;
      });
      if (f.length) return u.insertBefore(c, f[f.length - 1].nextSibling), c;
    }
    u.insertBefore(c, d);
  } else u.appendChild(c);
  return c;
}
function qc(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return Vc(oi(t)).find(function (n) {
    return n.getAttribute(Wc(t)) === e;
  });
}
function Go(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    n = qc(e, t);
  n && oi(t).removeChild(n);
}
function Zn(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  (function (c, u) {
    var d = la.get(c);
    if (
      !d ||
      !(function (b, m) {
        if (!b) return !1;
        if (b.contains) return b.contains(m);
        for (var p = m; p; ) {
          if (p === b) return !0;
          p = p.parentNode;
        }
        return !1;
      })(document, d)
    ) {
      var f = Zl('', u),
        g = f.parentNode;
      la.set(c, g), c.removeChild(f);
    }
  })(oi(n), n);
  var r = qc(t, n);
  if (r) {
    var o, i, a;
    return (
      (o = n.csp) !== null &&
        o !== void 0 &&
        o.nonce &&
        r.nonce !== ((i = n.csp) === null || i === void 0 ? void 0 : i.nonce) &&
        (r.nonce = (a = n.csp) === null || a === void 0 ? void 0 : a.nonce),
      r.innerHTML !== e && (r.innerHTML = e),
      r
    );
  }
  var l = Zl(e, n);
  return l.setAttribute(Wc(n), t), l;
}
function Xc(e) {
  if (Array.isArray(e)) return e;
}
function Gc() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function G(e, t) {
  return (
    Xc(e) ||
    (function (n, r) {
      var o =
        n == null
          ? null
          : (typeof Symbol < 'u' && n[Symbol.iterator]) || n['@@iterator'];
      if (o != null) {
        var i,
          a,
          l,
          c,
          u = [],
          d = !0,
          f = !1;
        try {
          if (((l = (o = o.call(n)).next), r === 0)) {
            if (Object(o) !== o) return;
            d = !1;
          } else
            for (
              ;
              !(d = (i = l.call(o)).done) && (u.push(i.value), u.length !== r);
              d = !0
            );
        } catch (g) {
          (f = !0), (a = g);
        } finally {
          try {
            if (!d && o.return != null && ((c = o.return()), Object(c) !== c))
              return;
          } finally {
            if (f) throw a;
          }
        }
        return u;
      }
    })(e, t) ||
    za(e, t) ||
    Gc()
  );
}
var sa = (function () {
  function e() {
    Rt(this, e),
      A(this, 'cache', void 0),
      A(this, 'keys', void 0),
      A(this, 'cacheCallTimes', void 0),
      (this.cache = new Map()),
      (this.keys = []),
      (this.cacheCallTimes = 0);
  }
  return (
    It(e, [
      {
        key: 'size',
        value: function () {
          return this.keys.length;
        },
      },
      {
        key: 'internalGet',
        value: function (t) {
          var n,
            r,
            o = arguments.length > 1 && arguments[1] !== void 0 && arguments[1],
            i = { map: this.cache };
          return (
            t.forEach(function (a) {
              var l, c;
              i
                ? (i =
                    (l = i) === null ||
                    l === void 0 ||
                    (c = l.map) === null ||
                    c === void 0
                      ? void 0
                      : c.get(a))
                : (i = void 0);
            }),
            (n = i) !== null &&
              n !== void 0 &&
              n.value &&
              o &&
              (i.value[1] = this.cacheCallTimes++),
            (r = i) === null || r === void 0 ? void 0 : r.value
          );
        },
      },
      {
        key: 'get',
        value: function (t) {
          var n;
          return (n = this.internalGet(t, !0)) === null || n === void 0
            ? void 0
            : n[0];
        },
      },
      {
        key: 'has',
        value: function (t) {
          return !!this.internalGet(t);
        },
      },
      {
        key: 'set',
        value: function (t, n) {
          var r = this;
          if (!this.has(t)) {
            if (this.size() + 1 > e.MAX_CACHE_SIZE + e.MAX_CACHE_OFFSET) {
              var o = this.keys.reduce(
                  function (l, c) {
                    var u = G(l, 2)[1];
                    return r.internalGet(c)[1] < u
                      ? [c, r.internalGet(c)[1]]
                      : l;
                  },
                  [this.keys[0], this.cacheCallTimes],
                ),
                i = G(o, 1)[0];
              this.delete(i);
            }
            this.keys.push(t);
          }
          var a = this.cache;
          t.forEach(function (l, c) {
            if (c === t.length - 1)
              a.set(l, { value: [n, r.cacheCallTimes++] });
            else {
              var u = a.get(l);
              u ? u.map || (u.map = new Map()) : a.set(l, { map: new Map() }),
                (a = a.get(l).map);
            }
          });
        },
      },
      {
        key: 'deleteByPath',
        value: function (t, n) {
          var r,
            o = t.get(n[0]);
          if (n.length === 1)
            return (
              o.map ? t.set(n[0], { map: o.map }) : t.delete(n[0]),
              (r = o.value) === null || r === void 0 ? void 0 : r[0]
            );
          var i = this.deleteByPath(o.map, n.slice(1));
          return (o.map && o.map.size !== 0) || o.value || t.delete(n[0]), i;
        },
      },
      {
        key: 'delete',
        value: function (t) {
          if (this.has(t))
            return (
              (this.keys = this.keys.filter(function (n) {
                return !(function (r, o) {
                  if (r.length !== o.length) return !1;
                  for (var i = 0; i < r.length; i++)
                    if (r[i] !== o[i]) return !1;
                  return !0;
                })(n, t);
              })),
              this.deleteByPath(this.cache, t)
            );
        },
      },
    ]),
    e
  );
})();
A(sa, 'MAX_CACHE_SIZE', 20), A(sa, 'MAX_CACHE_OFFSET', 5);
var Jl = 0,
  Uc = (function () {
    function e(t) {
      Rt(this, e),
        A(this, 'derivatives', void 0),
        A(this, 'id', void 0),
        (this.derivatives = Array.isArray(t) ? t : [t]),
        (this.id = Jl),
        t.length === 0 && t.length,
        (Jl += 1);
    }
    return (
      It(e, [
        {
          key: 'getDerivativeToken',
          value: function (t) {
            return this.derivatives.reduce(
              function (n, r) {
                return r(t, n);
              },
              void 0,
            );
          },
        },
      ]),
      e
    );
  })(),
  hi = new sa();
function ca(e) {
  var t = Array.isArray(e) ? e : [e];
  return hi.has(t) || hi.set(t, new Uc(t)), hi.get(t);
}
var es = new WeakMap();
function Io(e) {
  var t = es.get(e) || '';
  return (
    t ||
      (Object.keys(e).forEach(function (n) {
        var r = e[n];
        (t += n),
          r instanceof Uc
            ? (t += r.id)
            : r && pe(r) === 'object'
            ? (t += Io(r))
            : (t += r);
      }),
      es.set(e, t)),
    t
  );
}
var $r = 'random-'
    .concat(Date.now(), '-')
    .concat(Math.random())
    .replace(/\./g, ''),
  ts = '_bAmBoO_',
  vi = void 0;
function cp() {
  return (
    vi === void 0 &&
      (vi = (function (e, t, n) {
        if (Qe()) {
          var r, o;
          Zn(e, $r);
          var i = document.createElement('div');
          (i.style.position = 'fixed'),
            (i.style.left = '0'),
            (i.style.top = '0'),
            t == null || t(i),
            document.body.appendChild(i);
          var a = n
            ? n(i)
            : (r = getComputedStyle(i).content) === null || r === void 0
            ? void 0
            : r.includes(ts);
          return (
            (o = i.parentNode) === null || o === void 0 || o.removeChild(i),
            Go($r),
            a
          );
        }
        return !1;
      })(
        '@layer '
          .concat($r, ' { .')
          .concat($r, ' { content: "')
          .concat(ts, '"!important; } }'),
        function (e) {
          e.className = $r;
        },
      )),
    vi
  );
}
var ns = Qe() ? s.useLayoutEffect : s.useEffect,
  He = function (e, t) {
    var n = s.useRef(!0);
    ns(function () {
      return e(n.current);
    }, t),
      ns(function () {
        return (
          (n.current = !1),
          function () {
            n.current = !0;
          }
        );
      }, []);
  },
  rs = function (e, t) {
    He(function (n) {
      if (!n) return e();
    }, t);
  },
  os = z({}, Jo).useInsertionEffect;
const up = os
    ? function (e, t, n) {
        return os(function () {
          return e(), t();
        }, n);
      }
    : function (e, t, n) {
        s.useMemo(e, n),
          He(function () {
            return t(!0);
          }, n);
      },
  dp =
    z({}, Jo).useInsertionEffect !== void 0
      ? function (e) {
          var t = [],
            n = !1;
          return (
            s.useEffect(function () {
              return (
                (n = !1),
                function () {
                  (n = !0),
                    t.length &&
                      t.forEach(function (r) {
                        return r();
                      });
                }
              );
            }, e),
            function (r) {
              n || t.push(r);
            }
          );
        }
      : function () {
          return function (e) {
            e();
          };
        };
function Yc(e, t, n, r, o) {
  var i = s.useContext(Ha).cache,
    a = [e].concat(K(t)),
    l = a.join('_'),
    c = dp([l]),
    u = function (f) {
      i.update(a, function (g) {
        var b = G(g || [], 2),
          m = b[0],
          p = [m === void 0 ? 0 : m, b[1] || n()];
        return f ? f(p) : p;
      });
    };
  s.useMemo(
    function () {
      u();
    },
    [l],
  );
  var d = i.get(a)[1];
  return (
    up(
      function () {
        o == null || o(d);
      },
      function (f) {
        return (
          u(function (g) {
            var b = G(g, 2),
              m = b[0],
              p = b[1];
            return f && m === 0 && (o == null || o(d)), [m + 1, p];
          }),
          function () {
            i.update(a, function (g) {
              var b = G(g || [], 2),
                m = b[0],
                p = m === void 0 ? 0 : m,
                h = b[1];
              return p - 1 === 0
                ? (c(function () {
                    return r == null ? void 0 : r(h, !1);
                  }),
                  null)
                : [p - 1, h];
            });
          }
        );
      },
      [l],
    ),
    d
  );
}
var fp = {},
  pp = 'css',
  pn = new Map(),
  gp = 0;
function mp(e, t) {
  pn.set(e, (pn.get(e) || 0) - 1);
  var n = Array.from(pn.keys()),
    r = n.filter(function (o) {
      return (pn.get(o) || 0) <= 0;
    });
  n.length - r.length > gp &&
    r.forEach(function (o) {
      (function (i, a) {
        typeof document < 'u' &&
          document
            .querySelectorAll('style['.concat(aa, '="').concat(i, '"]'))
            .forEach(function (l) {
              var c;
              l[Un] === a &&
                ((c = l.parentNode) === null ||
                  c === void 0 ||
                  c.removeChild(l));
            });
      })(o, t),
        pn.delete(o);
    });
}
var hp = function (e, t, n, r) {
  var o = z(z({}, n.getDerivativeToken(e)), t);
  return r && (o = r(o)), o;
};
function vp(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
    r = s.useContext(Ha).cache.instanceId,
    o = n.salt,
    i = o === void 0 ? '' : o,
    a = n.override,
    l = a === void 0 ? fp : a,
    c = n.formatToken,
    u = n.getComputedToken,
    d = s.useMemo(
      function () {
        return Object.assign.apply(Object, [{}].concat(K(t)));
      },
      [t],
    ),
    f = s.useMemo(
      function () {
        return Io(d);
      },
      [d],
    ),
    g = s.useMemo(
      function () {
        return Io(l);
      },
      [l],
    ),
    b = Yc(
      'token',
      [i, e.id, f, g],
      function () {
        var m = u ? u(d, l, e) : hp(d, l, e, c),
          p = (function (y, v) {
            return ia(''.concat(v, '_').concat(Io(y)));
          })(m, i);
        (m._tokenKey = p),
          (function (y) {
            pn.set(y, (pn.get(y) || 0) + 1);
          })(p);
        var h = ''.concat(pp, '-').concat(ia(p));
        return (m._hashId = h), [m, h];
      },
      function (m) {
        mp(m[0]._tokenKey, r);
      },
    );
  return b;
}
var bp = {
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
  Kc = 'comm',
  Qc = 'rule',
  Zc = 'decl',
  yp = '@import',
  xp = '@keyframes',
  wp = '@layer',
  Cp = Math.abs,
  Ba = String.fromCharCode;
function Jc(e) {
  return e.trim();
}
function To(e, t, n) {
  return e.replace(t, n);
}
function $p(e, t) {
  return e.indexOf(t);
}
function zr(e, t) {
  return 0 | e.charCodeAt(t);
}
function Lr(e, t, n) {
  return e.slice(t, n);
}
function Wt(e) {
  return e.length;
}
function co(e, t) {
  return t.push(e), e;
}
var ii = 1,
  Jn = 1,
  eu = 0,
  mt = 0,
  Ae = 0,
  er = '';
function Da(e, t, n, r, o, i, a, l) {
  return {
    value: e,
    root: t,
    parent: n,
    type: r,
    props: o,
    children: i,
    line: ii,
    column: Jn,
    length: a,
    return: '',
    siblings: l,
  };
}
function Ep() {
  return (
    (Ae = mt > 0 ? zr(er, --mt) : 0), Jn--, Ae === 10 && ((Jn = 1), ii--), Ae
  );
}
function Ot() {
  return (
    (Ae = mt < eu ? zr(er, mt++) : 0), Jn++, Ae === 10 && ((Jn = 1), ii++), Ae
  );
}
function yn() {
  return zr(er, mt);
}
function No() {
  return mt;
}
function ai(e, t) {
  return Lr(er, e, t);
}
function ua(e) {
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
function bi(e) {
  return Jc(ai(mt - 1, da(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Sp(e) {
  for (; (Ae = yn()) && Ae < 33; ) Ot();
  return ua(e) > 2 || ua(Ae) > 3 ? '' : ' ';
}
function Op(e, t) {
  for (
    ;
    --t &&
    Ot() &&
    !(Ae < 48 || Ae > 102 || (Ae > 57 && Ae < 65) || (Ae > 70 && Ae < 97));

  );
  return ai(e, No() + (t < 6 && yn() == 32 && Ot() == 32));
}
function da(e) {
  for (; Ot(); )
    switch (Ae) {
      case e:
        return mt;
      case 34:
      case 39:
        e !== 34 && e !== 39 && da(Ae);
        break;
      case 40:
        e === 41 && da(e);
        break;
      case 92:
        Ot();
    }
  return mt;
}
function kp(e, t) {
  for (; Ot() && e + Ae !== 57 && (e + Ae !== 84 || yn() !== 47); );
  return '/*' + ai(t, mt - 1) + '*' + Ba(e === 47 ? e : Ot());
}
function jp(e) {
  for (; !ua(yn()); ) Ot();
  return ai(e, mt);
}
function Pp(e) {
  return (function (t) {
    return (er = ''), t;
  })(
    _o(
      '',
      null,
      null,
      null,
      [''],
      (e = (function (t) {
        return (ii = Jn = 1), (eu = Wt((er = t))), (mt = 0), [];
      })(e)),
      0,
      [0],
      e,
    ),
  );
}
function _o(e, t, n, r, o, i, a, l, c) {
  for (
    var u = 0,
      d = 0,
      f = a,
      g = 0,
      b = 0,
      m = 0,
      p = 1,
      h = 1,
      y = 1,
      v = 0,
      w = '',
      S = o,
      k = i,
      $ = r,
      x = w;
    h;

  )
    switch (((m = v), (v = Ot()))) {
      case 40:
        if (m != 108 && zr(x, f - 1) == 58) {
          $p((x += To(bi(v), '&', '&\f')), '&\f') != -1 && (y = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        x += bi(v);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        x += Sp(m);
        break;
      case 92:
        x += Op(No() - 1, 7);
        continue;
      case 47:
        switch (yn()) {
          case 42:
          case 47:
            co(Fp(kp(Ot(), No()), t, n, c), c);
            break;
          default:
            x += '/';
        }
        break;
      case 123 * p:
        l[u++] = Wt(x) * y;
      case 125 * p:
      case 59:
      case 0:
        switch (v) {
          case 0:
          case 125:
            h = 0;
          case 59 + d:
            y == -1 && (x = To(x, /\f/g, '')),
              b > 0 &&
                Wt(x) - f &&
                co(
                  b > 32
                    ? as(x + ';', r, n, f - 1, c)
                    : as(To(x, ' ', '') + ';', r, n, f - 2, c),
                  c,
                );
            break;
          case 59:
            x += ';';
          default:
            if (
              (co(
                ($ = is(x, t, n, u, d, o, l, w, (S = []), (k = []), f, i)),
                i,
              ),
              v === 123)
            )
              if (d === 0) _o(x, t, $, $, S, i, f, l, k);
              else
                switch (g === 99 && zr(x, 3) === 110 ? 100 : g) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    _o(
                      e,
                      $,
                      $,
                      r && co(is(e, $, $, 0, 0, o, l, w, o, (S = []), f, k), k),
                      o,
                      k,
                      f,
                      l,
                      r ? S : k,
                    );
                    break;
                  default:
                    _o(x, $, $, $, [''], k, 0, l, k);
                }
        }
        (u = d = b = 0), (p = y = 1), (w = x = ''), (f = a);
        break;
      case 58:
        (f = 1 + Wt(x)), (b = m);
      default:
        if (p < 1) {
          if (v == 123) --p;
          else if (v == 125 && p++ == 0 && Ep() == 125) continue;
        }
        switch (((x += Ba(v)), v * p)) {
          case 38:
            y = d > 0 ? 1 : ((x += '\f'), -1);
            break;
          case 44:
            (l[u++] = (Wt(x) - 1) * y), (y = 1);
            break;
          case 64:
            yn() === 45 && (x += bi(Ot())),
              (g = yn()),
              (d = f = Wt((w = x += jp(No())))),
              v++;
            break;
          case 45:
            m === 45 && Wt(x) == 2 && (p = 0);
        }
    }
  return i;
}
function is(e, t, n, r, o, i, a, l, c, u, d, f) {
  for (
    var g = o - 1,
      b = o === 0 ? i : [''],
      m = (function (k) {
        return k.length;
      })(b),
      p = 0,
      h = 0,
      y = 0;
    p < r;
    ++p
  )
    for (var v = 0, w = Lr(e, g + 1, (g = Cp((h = a[p])))), S = e; v < m; ++v)
      (S = Jc(h > 0 ? b[v] + ' ' + w : To(w, /&\f/g, b[v]))) && (c[y++] = S);
  return Da(e, t, n, o === 0 ? Qc : l, c, u, d, f);
}
function Fp(e, t, n, r) {
  return Da(e, t, n, Kc, Ba(Ae), Lr(e, 2, -2), 0, r);
}
function as(e, t, n, r, o) {
  return Da(e, t, n, Zc, Lr(e, 0, r), Lr(e, r + 1, -1), r, o);
}
function fa(e, t) {
  for (var n = '', r = 0; r < e.length; r++) n += t(e[r], r, e, t) || '';
  return n;
}
function Mp(e, t, n, r) {
  switch (e.type) {
    case wp:
      if (e.children.length) break;
    case yp:
    case Zc:
      return (e.return = e.return || e.value);
    case Kc:
      return '';
    case xp:
      return (e.return = e.value + '{' + fa(e.children, r) + '}');
    case Qc:
      if (!Wt((e.value = e.props.join(',')))) return '';
  }
  return Wt((n = fa(e.children, r)))
    ? (e.return = e.value + '{' + n + '}')
    : '';
}
var mn,
  ls = 'data-ant-cssinjs-cache-path',
  ss = '_FILE_STYLE__',
  tu = !0;
function Ap(e) {
  return (
    (function () {
      if (!mn && ((mn = {}), Qe())) {
        var t = document.createElement('div');
        (t.className = ls),
          (t.style.position = 'fixed'),
          (t.style.visibility = 'hidden'),
          (t.style.top = '-9999px'),
          document.body.appendChild(t);
        var n = getComputedStyle(t).content || '';
        (n = n.replace(/^"/, '').replace(/"$/, ''))
          .split(';')
          .forEach(function (i) {
            var a = G(i.split(':'), 2),
              l = a[0],
              c = a[1];
            mn[l] = c;
          });
        var r,
          o = document.querySelector('style['.concat(ls, ']'));
        o &&
          ((tu = !1),
          (r = o.parentNode) === null || r === void 0 || r.removeChild(o)),
          document.body.removeChild(t);
      }
    })(),
    !!mn[e]
  );
}
var cs = Qe(),
  us = '_multi_value_';
function ds(e) {
  return fa(Pp(e), Mp).replace(/\{%%%\:[^;];}/g, ';');
}
var Rp = function e(t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    r =
      arguments.length > 2 && arguments[2] !== void 0
        ? arguments[2]
        : { root: !0, parentSelectors: [] },
    o = r.root,
    i = r.injectHash,
    a = r.parentSelectors,
    l = n.hashId,
    c = n.layer;
  n.path;
  var u = n.hashPriority,
    d = n.transformers,
    f = d === void 0 ? [] : d;
  n.linters;
  var g = '',
    b = {};
  function m(v) {
    var w = v.getName(l);
    if (!b[w]) {
      var S = G(e(v.style, n, { root: !1, parentSelectors: a }), 1)[0];
      b[w] = '@keyframes '.concat(v.getName(l)).concat(S);
    }
  }
  var p = (function v(w) {
    var S = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    return (
      w.forEach(function (k) {
        Array.isArray(k) ? v(k, S) : k && S.push(k);
      }),
      S
    );
  })(Array.isArray(t) ? t : [t]);
  if (
    (p.forEach(function (v) {
      var w = typeof v != 'string' || o ? v : {};
      if (typeof w == 'string')
        g += ''.concat(
          w,
          `
`,
        );
      else if (w._keyframe) m(w);
      else {
        var S = f.reduce(function (k, $) {
          var x;
          return (
            ($ == null || (x = $.visit) === null || x === void 0
              ? void 0
              : x.call($, k)) || k
          );
        }, w);
        Object.keys(S).forEach(function (k) {
          var $ = S[k];
          if (
            pe($) !== 'object' ||
            !$ ||
            (k === 'animationName' && $._keyframe) ||
            (function (_) {
              return (
                pe(_) === 'object' && _ && ('_skip_check_' in _ || us in _)
              );
            })($)
          ) {
            let _ = function (E, C) {
              var j = E.replace(/[A-Z]/g, function (R) {
                  return '-'.concat(R.toLowerCase());
                }),
                M = C;
              bp[E] ||
                typeof M != 'number' ||
                M === 0 ||
                (M = ''.concat(M, 'px')),
                E === 'animationName' &&
                  C != null &&
                  C._keyframe &&
                  (m(C), (M = C.getName(l))),
                (g += ''.concat(j, ':').concat(M, ';'));
            };
            var x,
              O =
                (x = $ == null ? void 0 : $.value) !== null && x !== void 0
                  ? x
                  : $;
            pe($) === 'object' && $ != null && $[us] && Array.isArray(O)
              ? O.forEach(function (E) {
                  _(k, E);
                })
              : _(k, O);
          } else {
            var F = !1,
              P = k.trim(),
              N = !1;
            (o || i) && l
              ? P.startsWith('@')
                ? (F = !0)
                : (P = (function (_, E, C) {
                    if (!E) return _;
                    var j = '.'.concat(E),
                      M = C === 'low' ? ':where('.concat(j, ')') : j,
                      R = _.split(',').map(function (B) {
                        var D,
                          H = B.trim().split(/\s+/),
                          W = H[0] || '',
                          X =
                            ((D = W.match(/^\w+/)) === null || D === void 0
                              ? void 0
                              : D[0]) || '';
                        return [
                          (W = ''
                            .concat(X)
                            .concat(M)
                            .concat(W.slice(X.length))),
                        ]
                          .concat(K(H.slice(1)))
                          .join(' ');
                      });
                    return R.join(',');
                  })(k, l, u))
              : !o || l || (P !== '&' && P !== '') || ((P = ''), (N = !0));
            var I = G(
                e($, n, {
                  root: N,
                  injectHash: F,
                  parentSelectors: [].concat(K(a), [P]),
                }),
                2,
              ),
              T = I[0],
              L = I[1];
            (b = z(z({}, b), L)), (g += ''.concat(P).concat(T));
          }
        });
      }
    }),
    o)
  ) {
    if (c && cp()) {
      var h = c.split(','),
        y = h[h.length - 1].trim();
      (g = '@layer '.concat(y, ' {').concat(g, '}')),
        h.length > 1 && (g = '@layer '.concat(c, '{%%%:%}').concat(g));
    }
  } else g = '{'.concat(g, '}');
  return [g, b];
};
function Ip() {
  return null;
}
function pa(e, t) {
  var n = e.token,
    r = e.path,
    o = e.hashId,
    i = e.layer,
    a = e.nonce,
    l = e.clientOnly,
    c = e.order,
    u = c === void 0 ? 0 : c,
    d = s.useContext(Ha),
    f = d.autoClear;
  d.mock;
  var g = d.defaultCache,
    b = d.hashPriority,
    m = d.container,
    p = d.ssrInline,
    h = d.transformers,
    y = d.linters,
    v = d.cache,
    w = n._tokenKey,
    S = [w].concat(K(r)),
    k = cs,
    $ = Yc(
      'style',
      S,
      function () {
        var N = S.join('|');
        if (Ap(N)) {
          var I = (function (D) {
              var H = mn[D],
                W = null;
              if (H && Qe())
                if (tu) W = ss;
                else {
                  var X = document.querySelector(
                    'style['.concat(gn, '="').concat(mn[D], '"]'),
                  );
                  X ? (W = X.innerHTML) : delete mn[D];
                }
              return [W, H];
            })(N),
            T = G(I, 2),
            L = T[0],
            _ = T[1];
          if (L) return [L, w, _, {}, l, u];
        }
        var E = t(),
          C = G(
            Rp(E, {
              hashId: o,
              hashPriority: b,
              layer: i,
              path: r.join('-'),
              transformers: h,
              linters: y,
            }),
            2,
          ),
          j = C[0],
          M = C[1],
          R = ds(j),
          B = (function (D, H) {
            return ia(''.concat(D.join('%')).concat(H));
          })(S, R);
        return [R, w, B, M, l, u];
      },
      function (N, I) {
        var T = G(N, 3)[2];
        (I || f) && cs && Go(T, { mark: gn });
      },
      function (N) {
        var I = G(N, 4),
          T = I[0];
        I[1];
        var L = I[2],
          _ = I[3];
        if (k && T !== ss) {
          var E = { mark: gn, prepend: 'queue', attachTo: m, priority: u },
            C = typeof a == 'function' ? a() : a;
          C && (E.csp = { nonce: C });
          var j = Zn(T, L, E);
          (j[Un] = v.instanceId),
            j.setAttribute(aa, w),
            Object.keys(_).forEach(function (M) {
              Zn(ds(_[M]), '_effect-'.concat(M), E);
            });
        }
      },
    ),
    x = G($, 3),
    O = x[0],
    F = x[1],
    P = x[2];
  return function (N) {
    var I, T;
    return (
      p && !k && g
        ? (I = s.createElement(
            'style',
            Se({}, (A((T = {}), aa, F), A(T, gn, P), T), {
              dangerouslySetInnerHTML: { __html: O },
            }),
          ))
        : (I = s.createElement(Ip, null)),
      s.createElement(s.Fragment, null, I, N)
    );
  };
}
var ht = (function () {
  function e(t, n) {
    Rt(this, e),
      A(this, 'name', void 0),
      A(this, 'style', void 0),
      A(this, '_keyframe', !0),
      (this.name = t),
      (this.style = n);
  }
  return (
    It(e, [
      {
        key: 'getName',
        value: function () {
          var t =
            arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : '';
          return t ? ''.concat(t, '-').concat(this.name) : this.name;
        },
      },
    ]),
    e
  );
})();
function _n(e) {
  return (e.notSplit = !0), e;
}
_n(['borderTop', 'borderBottom']),
  _n(['borderTop']),
  _n(['borderBottom']),
  _n(['borderLeft', 'borderRight']),
  _n(['borderLeft']),
  _n(['borderRight']);
const Wa = s.createContext({});
function St(e, t) {
  for (var n = e, r = 0; r < t.length; r += 1) {
    if (n == null) return;
    n = n[t[r]];
  }
  return n;
}
function nu(e, t, n, r) {
  if (!t.length) return n;
  var o,
    i,
    a = Xc((o = t)) || zc(o) || za(o) || Gc(),
    l = a[0],
    c = a.slice(1);
  return (
    (i = e || typeof l != 'number' ? (Array.isArray(e) ? K(e) : z({}, e)) : []),
    r && n === void 0 && c.length === 1
      ? delete i[l][c[0]]
      : (i[l] = nu(i[l], c, n, r)),
    i
  );
}
function Et(e, t, n) {
  var r = arguments.length > 3 && arguments[3] !== void 0 && arguments[3];
  return t.length && r && n === void 0 && !St(e, t.slice(0, -1))
    ? e
    : nu(e, t, n, r);
}
function fs(e) {
  return Array.isArray(e) ? [] : {};
}
var Tp = typeof Reflect > 'u' ? Object.keys : Reflect.ownKeys;
function Yn() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var r = fs(t[0]);
  return (
    t.forEach(function (o) {
      (function i(a, l) {
        var c,
          u = new Set(l),
          d = St(o, a),
          f = Array.isArray(d);
        if (
          f ||
          (pe((c = d)) === 'object' &&
            c !== null &&
            Object.getPrototypeOf(c) === Object.prototype)
        ) {
          if (!u.has(d)) {
            u.add(d);
            var g = St(r, a);
            f
              ? (r = Et(r, a, []))
              : (g && pe(g) === 'object') || (r = Et(r, a, fs(d))),
              Tp(d).forEach(function (b) {
                i([].concat(K(a), [b]), u);
              });
          }
        } else r = Et(r, a, d);
      })([]);
    }),
    r
  );
}
const ru = s.createContext(void 0),
  ou = {
    placeholder: 'Select time',
    rangePlaceholder: ['Start time', 'End time'],
  },
  ps = {
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
      {
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
      },
    ),
    timePickerLocale: Object.assign({}, ou),
  },
  et = '${label} is not a valid ${type}',
  wn = {
    locale: 'en',
    Pagination: {
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
    },
    DatePicker: ps,
    TimePicker: ou,
    Calendar: ps,
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
          string: et,
          method: et,
          array: et,
          object: et,
          number: et,
          date: et,
          boolean: et,
          integer: et,
          float: et,
          regexp: et,
          email: et,
          url: et,
          hex: et,
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
  };
Object.assign({}, wn.Modal);
let zo = [];
const gs = () =>
    zo.reduce((e, t) => Object.assign(Object.assign({}, e), t), wn.Modal),
  Va = s.createContext(void 0),
  Np = (e, t) => {
    const n = s.useContext(Va);
    return [
      s.useMemo(() => {
        var o;
        const i = t || wn[e],
          a = (o = n == null ? void 0 : n[e]) !== null && o !== void 0 ? o : {};
        return Object.assign(
          Object.assign({}, typeof i == 'function' ? i() : i),
          a || {},
        );
      }, [e, t, n]),
      s.useMemo(() => {
        const o = n == null ? void 0 : n.locale;
        return n != null && n.exist && !o ? wn.locale : o;
      }, [n]),
    ];
  },
  _p = (e) => {
    const { locale: t = {}, children: n, _ANT_MARK__: r } = e;
    s.useEffect(
      () =>
        (function (a) {
          if (a) {
            const l = Object.assign({}, a);
            return (
              zo.push(l),
              gs(),
              () => {
                (zo = zo.filter((c) => c !== l)), gs();
              }
            );
          }
          Object.assign({}, wn.Modal);
        })(t && t.Modal),
      [t],
    );
    const o = s.useMemo(
      () => Object.assign(Object.assign({}, t), { exist: !0 }),
      [t],
    );
    return s.createElement(Va.Provider, { value: o }, n);
  },
  Uo = [
    'blue',
    'purple',
    'cyan',
    'green',
    'magenta',
    'pink',
    'red',
    'orange',
    'yellow',
    'volcano',
    'geekblue',
    'lime',
    'gold',
  ],
  zp = '5.9.0';
function We(e, t) {
  (function (r) {
    return typeof r == 'string' && r.indexOf('.') !== -1 && parseFloat(r) === 1;
  })(e) && (e = '100%');
  var n = (function (r) {
    return typeof r == 'string' && r.indexOf('%') !== -1;
  })(e);
  return (
    (e = t === 360 ? e : Math.min(t, Math.max(0, parseFloat(e)))),
    n && (e = parseInt(String(e * t), 10) / 100),
    Math.abs(e - t) < 1e-6
      ? 1
      : (e =
          t === 360
            ? (e < 0 ? (e % t) + t : e % t) / parseFloat(String(t))
            : (e % t) / parseFloat(String(t)))
  );
}
function uo(e) {
  return Math.min(1, Math.max(0, e));
}
function iu(e) {
  return (e = parseFloat(e)), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function fo(e) {
  return e <= 1 ? ''.concat(100 * Number(e), '%') : e;
}
function hn(e) {
  return e.length === 1 ? '0' + e : String(e);
}
function ms(e, t, n) {
  (e = We(e, 255)), (t = We(t, 255)), (n = We(n, 255));
  var r = Math.max(e, t, n),
    o = Math.min(e, t, n),
    i = 0,
    a = 0,
    l = (r + o) / 2;
  if (r === o) (a = 0), (i = 0);
  else {
    var c = r - o;
    switch (((a = l > 0.5 ? c / (2 - r - o) : c / (r + o)), r)) {
      case e:
        i = (t - n) / c + (t < n ? 6 : 0);
        break;
      case t:
        i = (n - e) / c + 2;
        break;
      case n:
        i = (e - t) / c + 4;
    }
    i /= 6;
  }
  return { h: i, s: a, l };
}
function yi(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? e + 6 * n * (t - e)
      : n < 0.5
      ? t
      : n < 2 / 3
      ? e + (t - e) * (2 / 3 - n) * 6
      : e
  );
}
function ga(e, t, n) {
  (e = We(e, 255)), (t = We(t, 255)), (n = We(n, 255));
  var r = Math.max(e, t, n),
    o = Math.min(e, t, n),
    i = 0,
    a = r,
    l = r - o,
    c = r === 0 ? 0 : l / r;
  if (r === o) i = 0;
  else {
    switch (r) {
      case e:
        i = (t - n) / l + (t < n ? 6 : 0);
        break;
      case t:
        i = (n - e) / l + 2;
        break;
      case n:
        i = (e - t) / l + 4;
    }
    i /= 6;
  }
  return { h: i, s: c, v: a };
}
function ma(e, t, n, r) {
  var o = [
    hn(Math.round(e).toString(16)),
    hn(Math.round(t).toString(16)),
    hn(Math.round(n).toString(16)),
  ];
  return r &&
    o[0].startsWith(o[0].charAt(1)) &&
    o[1].startsWith(o[1].charAt(1)) &&
    o[2].startsWith(o[2].charAt(1))
    ? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0)
    : o.join('');
}
function Lp(e) {
  return Math.round(255 * parseFloat(e)).toString(16);
}
function hs(e) {
  return rt(e) / 255;
}
function rt(e) {
  return parseInt(e, 16);
}
var ha = {
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
function Vn(e) {
  var t = { r: 0, g: 0, b: 0 },
    n = 1,
    r = null,
    o = null,
    i = null,
    a = !1,
    l = !1;
  return (
    typeof e == 'string' &&
      (e = (function (c) {
        if (((c = c.trim().toLowerCase()), c.length === 0)) return !1;
        var u = !1;
        if (ha[c]) (c = ha[c]), (u = !0);
        else if (c === 'transparent')
          return { r: 0, g: 0, b: 0, a: 0, format: 'name' };
        var d = Ct.rgb.exec(c);
        return d
          ? { r: d[1], g: d[2], b: d[3] }
          : ((d = Ct.rgba.exec(c)),
            d
              ? { r: d[1], g: d[2], b: d[3], a: d[4] }
              : ((d = Ct.hsl.exec(c)),
                d
                  ? { h: d[1], s: d[2], l: d[3] }
                  : ((d = Ct.hsla.exec(c)),
                    d
                      ? { h: d[1], s: d[2], l: d[3], a: d[4] }
                      : ((d = Ct.hsv.exec(c)),
                        d
                          ? { h: d[1], s: d[2], v: d[3] }
                          : ((d = Ct.hsva.exec(c)),
                            d
                              ? { h: d[1], s: d[2], v: d[3], a: d[4] }
                              : ((d = Ct.hex8.exec(c)),
                                d
                                  ? {
                                      r: rt(d[1]),
                                      g: rt(d[2]),
                                      b: rt(d[3]),
                                      a: hs(d[4]),
                                      format: u ? 'name' : 'hex8',
                                    }
                                  : ((d = Ct.hex6.exec(c)),
                                    d
                                      ? {
                                          r: rt(d[1]),
                                          g: rt(d[2]),
                                          b: rt(d[3]),
                                          format: u ? 'name' : 'hex',
                                        }
                                      : ((d = Ct.hex4.exec(c)),
                                        d
                                          ? {
                                              r: rt(d[1] + d[1]),
                                              g: rt(d[2] + d[2]),
                                              b: rt(d[3] + d[3]),
                                              a: hs(d[4] + d[4]),
                                              format: u ? 'name' : 'hex8',
                                            }
                                          : ((d = Ct.hex3.exec(c)),
                                            d
                                              ? {
                                                  r: rt(d[1] + d[1]),
                                                  g: rt(d[2] + d[2]),
                                                  b: rt(d[3] + d[3]),
                                                  format: u ? 'name' : 'hex',
                                                }
                                              : !1)))))))));
      })(e)),
    typeof e == 'object' &&
      (Ht(e.r) && Ht(e.g) && Ht(e.b)
        ? ((t = (function (c, u, d) {
            return {
              r: 255 * We(c, 255),
              g: 255 * We(u, 255),
              b: 255 * We(d, 255),
            };
          })(e.r, e.g, e.b)),
          (a = !0),
          (l = String(e.r).substr(-1) === '%' ? 'prgb' : 'rgb'))
        : Ht(e.h) && Ht(e.s) && Ht(e.v)
        ? ((r = fo(e.s)),
          (o = fo(e.v)),
          (t = (function (c, u, d) {
            (c = 6 * We(c, 360)), (u = We(u, 100)), (d = We(d, 100));
            var f = Math.floor(c),
              g = c - f,
              b = d * (1 - u),
              m = d * (1 - g * u),
              p = d * (1 - (1 - g) * u),
              h = f % 6;
            return {
              r: 255 * [d, m, b, b, p, d][h],
              g: 255 * [p, d, d, m, b, b][h],
              b: 255 * [b, b, p, d, d, m][h],
            };
          })(e.h, r, o)),
          (a = !0),
          (l = 'hsv'))
        : Ht(e.h) &&
          Ht(e.s) &&
          Ht(e.l) &&
          ((r = fo(e.s)),
          (i = fo(e.l)),
          (t = (function (c, u, d) {
            var f, g, b;
            if (((c = We(c, 360)), (u = We(u, 100)), (d = We(d, 100)), u === 0))
              (g = d), (b = d), (f = d);
            else {
              var m = d < 0.5 ? d * (1 + u) : d + u - d * u,
                p = 2 * d - m;
              (f = yi(p, m, c + 1 / 3)),
                (g = yi(p, m, c)),
                (b = yi(p, m, c - 1 / 3));
            }
            return { r: 255 * f, g: 255 * g, b: 255 * b };
          })(e.h, r, i)),
          (a = !0),
          (l = 'hsl')),
      Object.prototype.hasOwnProperty.call(e, 'a') && (n = e.a)),
    (n = iu(n)),
    {
      ok: a,
      format: e.format || l,
      r: Math.min(255, Math.max(t.r, 0)),
      g: Math.min(255, Math.max(t.g, 0)),
      b: Math.min(255, Math.max(t.b, 0)),
      a: n,
    }
  );
}
var en = '(?:'
    .concat('[-\\+]?\\d*\\.\\d+%?', ')|(?:')
    .concat('[-\\+]?\\d+%?', ')'),
  xi = '[\\s|\\(]+('
    .concat(en, ')[,|\\s]+(')
    .concat(en, ')[,|\\s]+(')
    .concat(en, ')\\s*\\)?'),
  wi = '[\\s|\\(]+('
    .concat(en, ')[,|\\s]+(')
    .concat(en, ')[,|\\s]+(')
    .concat(en, ')[,|\\s]+(')
    .concat(en, ')\\s*\\)?'),
  Ct = {
    CSS_UNIT: new RegExp(en),
    rgb: new RegExp('rgb' + xi),
    rgba: new RegExp('rgba' + wi),
    hsl: new RegExp('hsl' + xi),
    hsla: new RegExp('hsla' + wi),
    hsv: new RegExp('hsv' + xi),
    hsva: new RegExp('hsva' + wi),
    hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
    hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  };
function Ht(e) {
  return !!Ct.CSS_UNIT.exec(String(e));
}
var it = (function () {
    function e(t, n) {
      var r;
      if ((t === void 0 && (t = ''), n === void 0 && (n = {}), t instanceof e))
        return t;
      typeof t == 'number' &&
        (t = (function (i) {
          return { r: i >> 16, g: (65280 & i) >> 8, b: 255 & i };
        })(t)),
        (this.originalInput = t);
      var o = Vn(t);
      (this.originalInput = t),
        (this.r = o.r),
        (this.g = o.g),
        (this.b = o.b),
        (this.a = o.a),
        (this.roundA = Math.round(100 * this.a) / 100),
        (this.format = (r = n.format) !== null && r !== void 0 ? r : o.format),
        (this.gradientType = n.gradientType),
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
        return (299 * t.r + 587 * t.g + 114 * t.b) / 1e3;
      }),
      (e.prototype.getLuminance = function () {
        var t = this.toRgb(),
          n = t.r / 255,
          r = t.g / 255,
          o = t.b / 255;
        return (
          0.2126 *
            (n <= 0.03928 ? n / 12.92 : Math.pow((n + 0.055) / 1.055, 2.4)) +
          0.7152 *
            (r <= 0.03928 ? r / 12.92 : Math.pow((r + 0.055) / 1.055, 2.4)) +
          0.0722 *
            (o <= 0.03928 ? o / 12.92 : Math.pow((o + 0.055) / 1.055, 2.4))
        );
      }),
      (e.prototype.getAlpha = function () {
        return this.a;
      }),
      (e.prototype.setAlpha = function (t) {
        return (
          (this.a = iu(t)), (this.roundA = Math.round(100 * this.a) / 100), this
        );
      }),
      (e.prototype.isMonochrome = function () {
        return this.toHsl().s === 0;
      }),
      (e.prototype.toHsv = function () {
        var t = ga(this.r, this.g, this.b);
        return { h: 360 * t.h, s: t.s, v: t.v, a: this.a };
      }),
      (e.prototype.toHsvString = function () {
        var t = ga(this.r, this.g, this.b),
          n = Math.round(360 * t.h),
          r = Math.round(100 * t.s),
          o = Math.round(100 * t.v);
        return this.a === 1
          ? 'hsv('.concat(n, ', ').concat(r, '%, ').concat(o, '%)')
          : 'hsva('
              .concat(n, ', ')
              .concat(r, '%, ')
              .concat(o, '%, ')
              .concat(this.roundA, ')');
      }),
      (e.prototype.toHsl = function () {
        var t = ms(this.r, this.g, this.b);
        return { h: 360 * t.h, s: t.s, l: t.l, a: this.a };
      }),
      (e.prototype.toHslString = function () {
        var t = ms(this.r, this.g, this.b),
          n = Math.round(360 * t.h),
          r = Math.round(100 * t.s),
          o = Math.round(100 * t.l);
        return this.a === 1
          ? 'hsl('.concat(n, ', ').concat(r, '%, ').concat(o, '%)')
          : 'hsla('
              .concat(n, ', ')
              .concat(r, '%, ')
              .concat(o, '%, ')
              .concat(this.roundA, ')');
      }),
      (e.prototype.toHex = function (t) {
        return t === void 0 && (t = !1), ma(this.r, this.g, this.b, t);
      }),
      (e.prototype.toHexString = function (t) {
        return t === void 0 && (t = !1), '#' + this.toHex(t);
      }),
      (e.prototype.toHex8 = function (t) {
        return (
          t === void 0 && (t = !1),
          (function (n, r, o, i, a) {
            var l = [
              hn(Math.round(n).toString(16)),
              hn(Math.round(r).toString(16)),
              hn(Math.round(o).toString(16)),
              hn(Lp(i)),
            ];
            return a &&
              l[0].startsWith(l[0].charAt(1)) &&
              l[1].startsWith(l[1].charAt(1)) &&
              l[2].startsWith(l[2].charAt(1)) &&
              l[3].startsWith(l[3].charAt(1))
              ? l[0].charAt(0) +
                  l[1].charAt(0) +
                  l[2].charAt(0) +
                  l[3].charAt(0)
              : l.join('');
          })(this.r, this.g, this.b, this.a, t)
        );
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
          n = Math.round(this.g),
          r = Math.round(this.b);
        return this.a === 1
          ? 'rgb('.concat(t, ', ').concat(n, ', ').concat(r, ')')
          : 'rgba('
              .concat(t, ', ')
              .concat(n, ', ')
              .concat(r, ', ')
              .concat(this.roundA, ')');
      }),
      (e.prototype.toPercentageRgb = function () {
        var t = function (n) {
          return ''.concat(Math.round(100 * We(n, 255)), '%');
        };
        return { r: t(this.r), g: t(this.g), b: t(this.b), a: this.a };
      }),
      (e.prototype.toPercentageRgbString = function () {
        var t = function (n) {
          return Math.round(100 * We(n, 255));
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
          var t = '#' + ma(this.r, this.g, this.b, !1),
            n = 0,
            r = Object.entries(ha);
          n < r.length;
          n++
        ) {
          var o = r[n],
            i = o[0];
          if (t === o[1]) return i;
        }
        return !1;
      }),
      (e.prototype.toString = function (t) {
        var n = !!t;
        t = t ?? this.format;
        var r = !1,
          o = this.a < 1 && this.a >= 0;
        return n || !o || (!t.startsWith('hex') && t !== 'name')
          ? (t === 'rgb' && (r = this.toRgbString()),
            t === 'prgb' && (r = this.toPercentageRgbString()),
            (t !== 'hex' && t !== 'hex6') || (r = this.toHexString()),
            t === 'hex3' && (r = this.toHexString(!0)),
            t === 'hex4' && (r = this.toHex8String(!0)),
            t === 'hex8' && (r = this.toHex8String()),
            t === 'name' && (r = this.toName()),
            t === 'hsl' && (r = this.toHslString()),
            t === 'hsv' && (r = this.toHsvString()),
            r || this.toHexString())
          : t === 'name' && this.a === 0
          ? this.toName()
          : this.toRgbString();
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
        var n = this.toHsl();
        return (n.l += t / 100), (n.l = uo(n.l)), new e(n);
      }),
      (e.prototype.brighten = function (t) {
        t === void 0 && (t = 10);
        var n = this.toRgb();
        return (
          (n.r = Math.max(
            0,
            Math.min(255, n.r - Math.round((-t / 100) * 255)),
          )),
          (n.g = Math.max(
            0,
            Math.min(255, n.g - Math.round((-t / 100) * 255)),
          )),
          (n.b = Math.max(
            0,
            Math.min(255, n.b - Math.round((-t / 100) * 255)),
          )),
          new e(n)
        );
      }),
      (e.prototype.darken = function (t) {
        t === void 0 && (t = 10);
        var n = this.toHsl();
        return (n.l -= t / 100), (n.l = uo(n.l)), new e(n);
      }),
      (e.prototype.tint = function (t) {
        return t === void 0 && (t = 10), this.mix('white', t);
      }),
      (e.prototype.shade = function (t) {
        return t === void 0 && (t = 10), this.mix('black', t);
      }),
      (e.prototype.desaturate = function (t) {
        t === void 0 && (t = 10);
        var n = this.toHsl();
        return (n.s -= t / 100), (n.s = uo(n.s)), new e(n);
      }),
      (e.prototype.saturate = function (t) {
        t === void 0 && (t = 10);
        var n = this.toHsl();
        return (n.s += t / 100), (n.s = uo(n.s)), new e(n);
      }),
      (e.prototype.greyscale = function () {
        return this.desaturate(100);
      }),
      (e.prototype.spin = function (t) {
        var n = this.toHsl(),
          r = (n.h + t) % 360;
        return (n.h = r < 0 ? 360 + r : r), new e(n);
      }),
      (e.prototype.mix = function (t, n) {
        n === void 0 && (n = 50);
        var r = this.toRgb(),
          o = new e(t).toRgb(),
          i = n / 100;
        return new e({
          r: (o.r - r.r) * i + r.r,
          g: (o.g - r.g) * i + r.g,
          b: (o.b - r.b) * i + r.b,
          a: (o.a - r.a) * i + r.a,
        });
      }),
      (e.prototype.analogous = function (t, n) {
        t === void 0 && (t = 6), n === void 0 && (n = 30);
        var r = this.toHsl(),
          o = 360 / n,
          i = [this];
        for (r.h = (r.h - ((o * t) >> 1) + 720) % 360; --t; )
          (r.h = (r.h + o) % 360), i.push(new e(r));
        return i;
      }),
      (e.prototype.complement = function () {
        var t = this.toHsl();
        return (t.h = (t.h + 180) % 360), new e(t);
      }),
      (e.prototype.monochromatic = function (t) {
        t === void 0 && (t = 6);
        for (
          var n = this.toHsv(), r = n.h, o = n.s, i = n.v, a = [], l = 1 / t;
          t--;

        )
          a.push(new e({ h: r, s: o, v: i })), (i = (i + l) % 1);
        return a;
      }),
      (e.prototype.splitcomplement = function () {
        var t = this.toHsl(),
          n = t.h;
        return [
          this,
          new e({ h: (n + 72) % 360, s: t.s, l: t.l }),
          new e({ h: (n + 216) % 360, s: t.s, l: t.l }),
        ];
      }),
      (e.prototype.onBackground = function (t) {
        var n = this.toRgb(),
          r = new e(t).toRgb(),
          o = n.a + r.a * (1 - n.a);
        return new e({
          r: (n.r * n.a + r.r * r.a * (1 - n.a)) / o,
          g: (n.g * n.a + r.g * r.a * (1 - n.a)) / o,
          b: (n.b * n.a + r.b * r.a * (1 - n.a)) / o,
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
          var n = this.toHsl(), r = n.h, o = [this], i = 360 / t, a = 1;
          a < t;
          a++
        )
          o.push(new e({ h: (r + a * i) % 360, s: n.s, l: n.l }));
        return o;
      }),
      (e.prototype.equals = function (t) {
        return this.toRgbString() === new e(t).toRgbString();
      }),
      e
    );
  })(),
  po = 2,
  vs = 0.16,
  Hp = 0.05,
  Bp = 0.05,
  Dp = 0.15,
  au = 5,
  lu = 4,
  Wp = [
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
function bs(e) {
  var t = ga(e.r, e.g, e.b);
  return { h: 360 * t.h, s: t.s, v: t.v };
}
function go(e) {
  var t = e.r,
    n = e.g,
    r = e.b;
  return '#'.concat(ma(t, n, r, !1));
}
function ys(e, t, n) {
  var r;
  return (
    (r =
      Math.round(e.h) >= 60 && Math.round(e.h) <= 240
        ? n
          ? Math.round(e.h) - po * t
          : Math.round(e.h) + po * t
        : n
        ? Math.round(e.h) + po * t
        : Math.round(e.h) - po * t) < 0
      ? (r += 360)
      : r >= 360 && (r -= 360),
    r
  );
}
function xs(e, t, n) {
  return e.h === 0 && e.s === 0
    ? e.s
    : ((r = n ? e.s - vs * t : t === lu ? e.s + vs : e.s + Hp * t) > 1 &&
        (r = 1),
      n && t === au && r > 0.1 && (r = 0.1),
      r < 0.06 && (r = 0.06),
      Number(r.toFixed(2)));
  var r;
}
function ws(e, t, n) {
  var r;
  return (
    (r = n ? e.v + Bp * t : e.v - Dp * t) > 1 && (r = 1), Number(r.toFixed(2))
  );
}
function Cn(e) {
  for (
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      n = [],
      r = Vn(e),
      o = au;
    o > 0;
    o -= 1
  ) {
    var i = bs(r),
      a = go(Vn({ h: ys(i, o, !0), s: xs(i, o, !0), v: ws(i, o, !0) }));
    n.push(a);
  }
  n.push(go(r));
  for (var l = 1; l <= lu; l += 1) {
    var c = bs(r),
      u = go(Vn({ h: ys(c, l), s: xs(c, l), v: ws(c, l) }));
    n.push(u);
  }
  return t.theme === 'dark'
    ? Wp.map(function (d) {
        var f = d.index,
          g = d.opacity,
          b = go(
            (function (m, p, h) {
              var y = h / 100;
              return {
                r: (p.r - m.r) * y + m.r,
                g: (p.g - m.g) * y + m.g,
                b: (p.b - m.b) * y + m.b,
              };
            })(Vn(t.backgroundColor || '#141414'), Vn(n[f]), 100 * g),
          );
        return b;
      })
    : n;
}
var Ci = {
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
  Lo = {},
  $i = {};
Object.keys(Ci).forEach(function (e) {
  (Lo[e] = Cn(Ci[e])),
    (Lo[e].primary = Lo[e][5]),
    ($i[e] = Cn(Ci[e], { theme: 'dark', backgroundColor: '#141414' })),
    ($i[e].primary = $i[e][5]);
});
var Vp = Lo.blue;
const qp = (e) => {
    const { controlHeight: t } = e;
    return {
      controlHeightSM: 0.75 * t,
      controlHeightXS: 0.5 * t,
      controlHeightLG: 1.25 * t,
    };
  },
  su = {
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
  li = Object.assign(Object.assign({}, su), {
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
  Xp = (e) => {
    let t = e,
      n = e,
      r = e,
      o = e;
    return (
      e < 6 && e >= 5
        ? (t = e + 1)
        : e < 16 && e >= 6
        ? (t = e + 2)
        : e >= 16 && (t = 16),
      e < 7 && e >= 5
        ? (n = 4)
        : e < 8 && e >= 7
        ? (n = 5)
        : e < 14 && e >= 8
        ? (n = 6)
        : e < 16 && e >= 14
        ? (n = 7)
        : e >= 16 && (n = 8),
      e < 6 && e >= 2 ? (r = 1) : e >= 6 && (r = 2),
      e > 4 && e < 8 ? (o = 4) : e >= 8 && (o = 6),
      {
        borderRadius: e > 16 ? 16 : e,
        borderRadiusXS: r,
        borderRadiusSM: n,
        borderRadiusLG: t,
        borderRadiusOuter: o,
      }
    );
  },
  Bt = (e, t) => new it(e).setAlpha(t).toRgbString(),
  Er = (e, t) => new it(e).darken(t).toHexString(),
  Gp = (e) => {
    const t = Cn(e);
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
  Up = (e, t) => {
    const n = e || '#fff',
      r = t || '#000';
    return {
      colorBgBase: n,
      colorTextBase: r,
      colorText: Bt(r, 0.88),
      colorTextSecondary: Bt(r, 0.65),
      colorTextTertiary: Bt(r, 0.45),
      colorTextQuaternary: Bt(r, 0.25),
      colorFill: Bt(r, 0.15),
      colorFillSecondary: Bt(r, 0.06),
      colorFillTertiary: Bt(r, 0.04),
      colorFillQuaternary: Bt(r, 0.02),
      colorBgLayout: Er(n, 4),
      colorBgContainer: Er(n, 0),
      colorBgElevated: Er(n, 0),
      colorBgSpotlight: Bt(r, 0.85),
      colorBorder: Er(n, 15),
      colorBorderSecondary: Er(n, 6),
    };
  },
  Yp = (e) => {
    const t = (function (o) {
        const i = new Array(10).fill(null).map((a, l) => {
          const c = l - 1,
            u = o * Math.pow(2.71828, c / 5),
            d = l > 1 ? Math.floor(u) : Math.ceil(u);
          return 2 * Math.floor(d / 2);
        });
        return (i[1] = o), i.map((a) => ({ size: a, lineHeight: (a + 8) / a }));
      })(e),
      n = t.map((o) => o.size),
      r = t.map((o) => o.lineHeight);
    return {
      fontSizeSM: n[0],
      fontSize: n[1],
      fontSizeLG: n[2],
      fontSizeXL: n[3],
      fontSizeHeading1: n[6],
      fontSizeHeading2: n[5],
      fontSizeHeading3: n[4],
      fontSizeHeading4: n[3],
      fontSizeHeading5: n[2],
      lineHeight: r[1],
      lineHeightLG: r[2],
      lineHeightSM: r[0],
      lineHeightHeading1: r[6],
      lineHeightHeading2: r[5],
      lineHeightHeading3: r[4],
      lineHeightHeading4: r[3],
      lineHeightHeading5: r[2],
    };
  },
  cu = ca(function (e) {
    const t = Object.keys(su)
      .map((n) => {
        const r = Cn(e[n]);
        return new Array(10)
          .fill(1)
          .reduce(
            (o, i, a) => (
              (o[`${n}-${a + 1}`] = r[a]), (o[`${n}${a + 1}`] = r[a]), o
            ),
            {},
          );
      })
      .reduce((n, r) => (n = Object.assign(Object.assign({}, n), r)), {});
    return Object.assign(
      Object.assign(
        Object.assign(
          Object.assign(
            Object.assign(
              Object.assign(Object.assign({}, e), t),
              (function (n, r) {
                let {
                  generateColorPalettes: o,
                  generateNeutralColorPalettes: i,
                } = r;
                const {
                    colorSuccess: a,
                    colorWarning: l,
                    colorError: c,
                    colorInfo: u,
                    colorPrimary: d,
                    colorBgBase: f,
                    colorTextBase: g,
                  } = n,
                  b = o(d),
                  m = o(a),
                  p = o(l),
                  h = o(c),
                  y = o(u),
                  v = i(f, g),
                  w = o(n.colorLink || n.colorInfo);
                return Object.assign(Object.assign({}, v), {
                  colorPrimaryBg: b[1],
                  colorPrimaryBgHover: b[2],
                  colorPrimaryBorder: b[3],
                  colorPrimaryBorderHover: b[4],
                  colorPrimaryHover: b[5],
                  colorPrimary: b[6],
                  colorPrimaryActive: b[7],
                  colorPrimaryTextHover: b[8],
                  colorPrimaryText: b[9],
                  colorPrimaryTextActive: b[10],
                  colorSuccessBg: m[1],
                  colorSuccessBgHover: m[2],
                  colorSuccessBorder: m[3],
                  colorSuccessBorderHover: m[4],
                  colorSuccessHover: m[4],
                  colorSuccess: m[6],
                  colorSuccessActive: m[7],
                  colorSuccessTextHover: m[8],
                  colorSuccessText: m[9],
                  colorSuccessTextActive: m[10],
                  colorErrorBg: h[1],
                  colorErrorBgHover: h[2],
                  colorErrorBorder: h[3],
                  colorErrorBorderHover: h[4],
                  colorErrorHover: h[5],
                  colorError: h[6],
                  colorErrorActive: h[7],
                  colorErrorTextHover: h[8],
                  colorErrorText: h[9],
                  colorErrorTextActive: h[10],
                  colorWarningBg: p[1],
                  colorWarningBgHover: p[2],
                  colorWarningBorder: p[3],
                  colorWarningBorderHover: p[4],
                  colorWarningHover: p[4],
                  colorWarning: p[6],
                  colorWarningActive: p[7],
                  colorWarningTextHover: p[8],
                  colorWarningText: p[9],
                  colorWarningTextActive: p[10],
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
                  colorLinkHover: w[4],
                  colorLink: w[6],
                  colorLinkActive: w[7],
                  colorBgMask: new it('#000').setAlpha(0.45).toRgbString(),
                  colorWhite: '#fff',
                });
              })(e, {
                generateColorPalettes: Gp,
                generateNeutralColorPalettes: Up,
              }),
            ),
            Yp(e.fontSize),
          ),
          (function (n) {
            const { sizeUnit: r, sizeStep: o } = n;
            return {
              sizeXXL: r * (o + 8),
              sizeXL: r * (o + 4),
              sizeLG: r * (o + 2),
              sizeMD: r * (o + 1),
              sizeMS: r * o,
              size: r * o,
              sizeSM: r * (o - 1),
              sizeXS: r * (o - 2),
              sizeXXS: r * (o - 3),
            };
          })(e),
        ),
        qp(e),
      ),
      (function (n) {
        const {
          motionUnit: r,
          motionBase: o,
          borderRadius: i,
          lineWidth: a,
        } = n;
        return Object.assign(
          {
            motionDurationFast: `${(o + r).toFixed(1)}s`,
            motionDurationMid: `${(o + 2 * r).toFixed(1)}s`,
            motionDurationSlow: `${(o + 3 * r).toFixed(1)}s`,
            lineWidthBold: a + 1,
          },
          Xp(i),
        );
      })(e),
    );
  }),
  uu = { token: li, hashed: !0 },
  du = Y.createContext(uu);
function Ei(e) {
  return e >= 0 && e <= 255;
}
function mo(e, t) {
  const { r: n, g: r, b: o, a: i } = new it(e).toRgb();
  if (i < 1) return e;
  const { r: a, g: l, b: c } = new it(t).toRgb();
  for (let u = 0.01; u <= 1; u += 0.01) {
    const d = Math.round((n - a * (1 - u)) / u),
      f = Math.round((r - l * (1 - u)) / u),
      g = Math.round((o - c * (1 - u)) / u);
    if (Ei(d) && Ei(f) && Ei(g))
      return new it({
        r: d,
        g: f,
        b: g,
        a: Math.round(100 * u) / 100,
      }).toRgbString();
  }
  return new it({ r: n, g: r, b: o, a: 1 }).toRgbString();
}
var Kp =
  (globalThis && globalThis.__rest) ||
  function (e, t) {
    var n = {};
    for (var r in e)
      Object.prototype.hasOwnProperty.call(e, r) &&
        t.indexOf(r) < 0 &&
        (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == 'function') {
      var o = 0;
      for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
        t.indexOf(r[o]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
          (n[r[o]] = e[r[o]]);
    }
    return n;
  };
function fu(e) {
  const { override: t } = e,
    n = Kp(e, ['override']),
    r = Object.assign({}, t);
  Object.keys(li).forEach((l) => {
    delete r[l];
  });
  const o = Object.assign(Object.assign({}, n), r),
    i = 1200,
    a = 1600;
  if (o.motion === !1) {
    const l = '0s';
    (o.motionDurationFast = l),
      (o.motionDurationMid = l),
      (o.motionDurationSlow = l);
  }
  return Object.assign(
    Object.assign(Object.assign({}, o), {
      colorFillContent: o.colorFillSecondary,
      colorFillContentHover: o.colorFill,
      colorFillAlter: o.colorFillQuaternary,
      colorBgContainerDisabled: o.colorFillTertiary,
      colorBorderBg: o.colorBgContainer,
      colorSplit: mo(o.colorBorderSecondary, o.colorBgContainer),
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
      colorErrorOutline: mo(o.colorErrorBg, o.colorBgContainer),
      colorWarningOutline: mo(o.colorWarningBg, o.colorBgContainer),
      fontSizeIcon: o.fontSizeSM,
      lineWidthFocus: 4 * o.lineWidth,
      lineWidth: o.lineWidth,
      controlOutlineWidth: 2 * o.lineWidth,
      controlInteractiveSize: o.controlHeight / 2,
      controlItemBgHover: o.colorFillTertiary,
      controlItemBgActive: o.colorPrimaryBg,
      controlItemBgActiveHover: o.colorPrimaryBgHover,
      controlItemBgActiveDisabled: o.colorFill,
      controlTmpOutline: o.colorFillQuaternary,
      controlOutline: mo(o.colorPrimaryBg, o.colorBgContainer),
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
      screenXS: 480,
      screenXSMin: 480,
      screenXSMax: 575,
      screenSM: 576,
      screenSMMin: 576,
      screenSMMax: 767,
      screenMD: 768,
      screenMDMin: 768,
      screenMDMax: 991,
      screenLG: 992,
      screenLGMin: 992,
      screenLGMax: 1199,
      screenXL: i,
      screenXLMin: i,
      screenXLMax: 1599,
      screenXXL: a,
      screenXXLMin: a,
      boxShadowPopoverArrow: '2px 2px 5px rgba(0, 0, 0, 0.05)',
      boxShadowCard: `
      0 1px 2px -2px ${new it('rgba(0, 0, 0, 0.16)').toRgbString()},
      0 3px 6px 0 ${new it('rgba(0, 0, 0, 0.12)').toRgbString()},
      0 5px 12px 4px ${new it('rgba(0, 0, 0, 0.09)').toRgbString()}
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
    r,
  );
}
var Cs =
  (globalThis && globalThis.__rest) ||
  function (e, t) {
    var n = {};
    for (var r in e)
      Object.prototype.hasOwnProperty.call(e, r) &&
        t.indexOf(r) < 0 &&
        (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == 'function') {
      var o = 0;
      for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
        t.indexOf(r[o]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
          (n[r[o]] = e[r[o]]);
    }
    return n;
  };
const pu = (e, t, n) => {
  const r = n.getDerivativeToken(e),
    { override: o } = t,
    i = Cs(t, ['override']);
  let a = Object.assign(Object.assign({}, r), { override: o });
  return (
    (a = fu(a)),
    i &&
      Object.entries(i).forEach((l) => {
        let [c, u] = l;
        const { theme: d } = u,
          f = Cs(u, ['theme']);
        let g = f;
        d &&
          (g = pu(Object.assign(Object.assign({}, a), f), { override: f }, d)),
          (a[c] = g);
      }),
    a
  );
};
function Sn() {
  const { token: e, hashed: t, theme: n, components: r } = Y.useContext(du),
    o = `${zp}-${t || ''}`,
    i = n || cu,
    [a, l] = vp(i, [li, e], {
      salt: o,
      override: Object.assign({ override: e }, r),
      getComputedToken: pu,
      formatToken: fu,
    });
  return [i, a, t ? l : ''];
}
function Mt(e) {
  var t = s.useRef();
  t.current = e;
  var n = s.useCallback(function () {
    for (var r, o = arguments.length, i = new Array(o), a = 0; a < o; a++)
      i[a] = arguments[a];
    return (r = t.current) === null || r === void 0
      ? void 0
      : r.call.apply(r, [t].concat(i));
  }, []);
  return n;
}
function xn(e) {
  var t = s.useRef(!1),
    n = G(s.useState(e), 2),
    r = n[0],
    o = n[1];
  return (
    s.useEffect(function () {
      return (
        (t.current = !1),
        function () {
          t.current = !0;
        }
      );
    }, []),
    [
      r,
      function (i, a) {
        (a && t.current) || o(i);
      },
    ]
  );
}
function Si(e) {
  return e !== void 0;
}
function si(e, t) {
  var n = t || {},
    r = n.defaultValue,
    o = n.value,
    i = n.onChange,
    a = n.postState,
    l = G(
      xn(function () {
        return Si(o)
          ? o
          : Si(r)
          ? typeof r == 'function'
            ? r()
            : r
          : typeof e == 'function'
          ? e()
          : e;
      }),
      2,
    ),
    c = l[0],
    u = l[1],
    d = o !== void 0 ? o : c,
    f = a ? a(d) : d,
    g = Mt(i),
    b = G(xn([d]), 2),
    m = b[0],
    p = b[1];
  return (
    rs(
      function () {
        var h = m[0];
        c !== h && g(c, h);
      },
      [m],
    ),
    rs(
      function () {
        Si(o) || u(o);
      },
      [o],
    ),
    [
      f,
      Mt(function (h, y) {
        u(h, y), p([d], y);
      }),
    ]
  );
}
const gu = 'anticon',
  Re = s.createContext({
    getPrefixCls: (e, t) => t || (e ? `ant-${e}` : 'ant'),
    iconPrefixCls: gu,
  }),
  Qp = (e, t, n, r, o) => {
    const i = e / 2,
      a = i,
      l = (1 * n) / Math.sqrt(2),
      c = i - n * (1 - 1 / Math.sqrt(2)),
      u = i - t * (1 / Math.sqrt(2)),
      d = n * (Math.sqrt(2) - 1) + t * (1 / Math.sqrt(2)),
      f = 2 * i - u,
      g = d,
      b = 2 * i - l,
      m = c,
      p = 2 * i - 0,
      h = a,
      y = i * Math.sqrt(2) + n * (Math.sqrt(2) - 2),
      v = n * (Math.sqrt(2) - 1);
    return {
      pointerEvents: 'none',
      width: e,
      height: e,
      overflow: 'hidden',
      '&::before': {
        position: 'absolute',
        bottom: 0,
        insetInlineStart: 0,
        width: e,
        height: e / 2,
        background: r,
        clipPath: {
          _multi_value_: !0,
          value: [
            `polygon(${v}px 100%, 50% ${v}px, ${
              2 * i - v
            }px 100%, ${v}px 100%)`,
            `path('M 0 ${a} A ${n} ${n} 0 0 0 ${l} ${c} L ${u} ${d} A ${t} ${t} 0 0 1 ${f} ${g} L ${b} ${m} A ${n} ${n} 0 0 0 ${p} ${h} Z')`,
          ],
        },
        content: '""',
      },
      '&::after': {
        content: '""',
        position: 'absolute',
        width: y,
        height: y,
        bottom: 0,
        insetInline: 0,
        margin: 'auto',
        borderRadius: { _skip_check_: !0, value: `0 0 ${t}px 0` },
        transform: 'translateY(50%) rotate(-135deg)',
        boxShadow: o,
        zIndex: 0,
        background: 'transparent',
      },
    };
  },
  Xr = (e) => ({
    boxSizing: 'border-box',
    margin: 0,
    padding: 0,
    color: e.colorText,
    fontSize: e.fontSize,
    lineHeight: e.lineHeight,
    listStyle: 'none',
    fontFamily: e.fontFamily,
  }),
  Zp = (e) => ({
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
  Jp = (e, t) => {
    const { fontFamily: n, fontSize: r } = e,
      o = `[class^="${t}"], [class*=" ${t}"]`;
    return {
      [o]: {
        fontFamily: n,
        fontSize: r,
        boxSizing: 'border-box',
        '&::before, &::after': { boxSizing: 'border-box' },
        [o]: {
          boxSizing: 'border-box',
          '&::before, &::after': { boxSizing: 'border-box' },
        },
      },
    };
  },
  eg = (e) => ({
    outline: `${e.lineWidthFocus}px solid ${e.colorPrimaryBorder}`,
    outlineOffset: 1,
    transition: 'outline-offset 0s, outline 0s',
  }),
  tg = (e) => ({ '&:focus-visible': Object.assign({}, eg(e)) }),
  mu = typeof CSSINJS_STATISTIC < 'u';
let va = !0;
function Ge() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  if (!mu) return Object.assign.apply(Object, [{}].concat(t));
  va = !1;
  const r = {};
  return (
    t.forEach((o) => {
      Object.keys(o).forEach((i) => {
        Object.defineProperty(r, i, {
          configurable: !0,
          enumerable: !0,
          get: () => o[i],
        });
      });
    }),
    (va = !0),
    r
  );
}
const $s = {};
function ng() {}
const hu = (e, t) => {
  const [n, r] = Sn();
  return pa(
    {
      theme: n,
      token: r,
      hashId: '',
      path: ['ant-design-icons', e],
      nonce: () => (t == null ? void 0 : t.nonce),
    },
    () => [
      {
        [`.${e}`]: Object.assign(
          Object.assign(
            {},
            {
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
            },
          ),
          { [`.${e} .${e}-icon`]: { display: 'block' } },
        ),
      },
    ],
  );
};
function tn(e, t, n) {
  let r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
  const o = Array.isArray(e) ? e : [e, e],
    [i] = o,
    a = o.join('-');
  return (l) => {
    const [c, u, d] = Sn(),
      { getPrefixCls: f, iconPrefixCls: g, csp: b } = s.useContext(Re),
      m = f(),
      p = {
        theme: c,
        token: u,
        hashId: d,
        nonce: () => (b == null ? void 0 : b.nonce),
        clientOnly: r.clientOnly,
        order: r.order || -999,
      };
    return (
      pa(
        Object.assign(Object.assign({}, p), {
          clientOnly: !1,
          path: ['Shared', m],
        }),
        () => [{ '&': Zp(u) }],
      ),
      hu(g),
      [
        pa(Object.assign(Object.assign({}, p), { path: [a, l, g] }), () => {
          const { token: h, flush: y } = (function (x) {
              let O,
                F = x,
                P = ng;
              return (
                mu &&
                  ((O = new Set()),
                  (F = new Proxy(x, { get: (N, I) => (va && O.add(I), N[I]) })),
                  (P = (N, I) => {
                    var T;
                    $s[N] = {
                      global: Array.from(O),
                      component: Object.assign(
                        Object.assign(
                          {},
                          (T = $s[N]) === null || T === void 0
                            ? void 0
                            : T.component,
                        ),
                        I,
                      ),
                    };
                  })),
                { token: F, keys: O, flush: P }
              );
            })(u),
            v = Object.assign({}, u[i]);
          if (r.deprecatedTokens) {
            const { deprecatedTokens: x } = r;
            x.forEach((O) => {
              let [F, P] = O;
              var N;
              ((v != null && v[F]) || (v != null && v[P])) &&
                (((N = v[P]) !== null && N !== void 0) ||
                  (v[P] = v == null ? void 0 : v[F]));
            });
          }
          const w = typeof n == 'function' ? n(Ge(h, v ?? {})) : n,
            S = Object.assign(Object.assign({}, w), v),
            k = Ge(
              h,
              {
                componentCls: `.${l}`,
                prefixCls: l,
                iconCls: `.${g}`,
                antCls: `.${m}`,
              },
              S,
            ),
            $ = t(k, {
              hashId: d,
              prefixCls: l,
              rootPrefixCls: m,
              iconPrefixCls: g,
              overrideComponentToken: v,
            });
          return y(i, S), [r.resetStyle === !1 ? null : Jp(u, l), $];
        }),
        d,
      ]
    );
  };
}
const vu = (e, t, n, r) => {
  const o = tn(e, t, n, Object.assign({ resetStyle: !1, order: -998 }, r));
  return (i) => {
    let { prefixCls: a } = i;
    return o(a), null;
  };
};
function rg(e, t) {
  return Uo.reduce((n, r) => {
    const o = e[`${r}1`],
      i = e[`${r}3`],
      a = e[`${r}6`],
      l = e[`${r}7`];
    return Object.assign(
      Object.assign({}, n),
      t(r, { lightColor: o, lightBorderColor: i, darkColor: a, textColor: l }),
    );
  }, {});
}
const og = `-ant-${Date.now()}-${Math.random()}`;
function ig(e, t) {
  const n = (function (r, o) {
    const i = {},
      a = (c, u) => {
        let d = c.clone();
        return (d = (u == null ? void 0 : u(d)) || d), d.toRgbString();
      },
      l = (c, u) => {
        const d = new it(c),
          f = Cn(d.toRgbString());
        (i[`${u}-color`] = a(d)),
          (i[`${u}-color-disabled`] = f[1]),
          (i[`${u}-color-hover`] = f[4]),
          (i[`${u}-color-active`] = f[6]),
          (i[`${u}-color-outline`] = d.clone().setAlpha(0.2).toRgbString()),
          (i[`${u}-color-deprecated-bg`] = f[0]),
          (i[`${u}-color-deprecated-border`] = f[2]);
      };
    if (o.primaryColor) {
      l(o.primaryColor, 'primary');
      const c = new it(o.primaryColor),
        u = Cn(c.toRgbString());
      u.forEach((f, g) => {
        i[`primary-${g + 1}`] = f;
      }),
        (i['primary-color-deprecated-l-35'] = a(c, (f) => f.lighten(35))),
        (i['primary-color-deprecated-l-20'] = a(c, (f) => f.lighten(20))),
        (i['primary-color-deprecated-t-20'] = a(c, (f) => f.tint(20))),
        (i['primary-color-deprecated-t-50'] = a(c, (f) => f.tint(50))),
        (i['primary-color-deprecated-f-12'] = a(c, (f) =>
          f.setAlpha(0.12 * f.getAlpha()),
        ));
      const d = new it(u[0]);
      (i['primary-color-active-deprecated-f-30'] = a(d, (f) =>
        f.setAlpha(0.3 * f.getAlpha()),
      )),
        (i['primary-color-active-deprecated-d-02'] = a(d, (f) => f.darken(2)));
    }
    return (
      o.successColor && l(o.successColor, 'success'),
      o.warningColor && l(o.warningColor, 'warning'),
      o.errorColor && l(o.errorColor, 'error'),
      o.infoColor && l(o.infoColor, 'info'),
      `
  :root {
    ${Object.keys(i).map((c) => `--${r}-${c}: ${i[c]};`).join(`
`)}
  }
  `.trim()
    );
  })(e, t);
  Qe() && Zn(n, `${og}-dynamic-theme`);
}
const ba = s.createContext(!1),
  bu = (e) => {
    let { children: t, disabled: n } = e;
    const r = s.useContext(ba);
    return s.createElement(ba.Provider, { value: n ?? r }, t);
  },
  Gr = ba,
  ya = s.createContext(void 0),
  yu = (e) => {
    let { children: t, size: n } = e;
    const r = s.useContext(ya);
    return s.createElement(ya.Provider, { value: n || r }, t);
  },
  Ho = ya;
var ag = ['children'],
  xu = s.createContext({});
function lg(e) {
  var t = e.children,
    n = st(e, ag);
  return s.createElement(xu.Provider, { value: n }, t);
}
var sg = (function (e) {
    ei(n, s.Component);
    var t = ti(n);
    function n() {
      return Rt(this, n), t.apply(this, arguments);
    }
    return (
      It(n, [
        {
          key: 'render',
          value: function () {
            return this.props.children;
          },
        },
      ]),
      n
    );
  })(),
  fn = 'none',
  ho = 'appear',
  vo = 'enter',
  bo = 'leave',
  Es = 'none',
  $t = 'prepare',
  qn = 'start',
  Kn = 'active',
  qa = 'end',
  wu = 'prepared';
function Ss(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n['Webkit'.concat(e)] = 'webkit'.concat(t)),
    (n['Moz'.concat(e)] = 'moz'.concat(t)),
    (n['ms'.concat(e)] = 'MS'.concat(t)),
    (n['O'.concat(e)] = 'o'.concat(t.toLowerCase())),
    n
  );
}
var Os,
  Oi,
  yo,
  cg =
    ((Os = Qe()),
    (Oi = typeof window < 'u' ? window : {}),
    (yo = {
      animationend: Ss('Animation', 'AnimationEnd'),
      transitionend: Ss('Transition', 'TransitionEnd'),
    }),
    Os &&
      ('AnimationEvent' in Oi || delete yo.animationend.animation,
      'TransitionEvent' in Oi || delete yo.transitionend.transition),
    yo),
  Cu = {};
if (Qe()) {
  var ug = document.createElement('div');
  Cu = ug.style;
}
var xo = {};
function $u(e) {
  if (xo[e]) return xo[e];
  var t = cg[e];
  if (t)
    for (var n = Object.keys(t), r = n.length, o = 0; o < r; o += 1) {
      var i = n[o];
      if (Object.prototype.hasOwnProperty.call(t, i) && i in Cu)
        return (xo[e] = t[i]), xo[e];
    }
  return '';
}
var Eu = $u('animationend'),
  Su = $u('transitionend'),
  Ou = !(!Eu || !Su),
  ks = Eu || 'animationend',
  js = Su || 'transitionend';
function Ps(e, t) {
  return e
    ? pe(e) === 'object'
      ? e[
          t.replace(/-\w/g, function (n) {
            return n[1].toUpperCase();
          })
        ]
      : ''.concat(e, '-').concat(t)
    : null;
}
const dg = function (e) {
  var t = s.useRef(),
    n = s.useRef(e);
  n.current = e;
  var r = s.useCallback(function (i) {
    n.current(i);
  }, []);
  function o(i) {
    i && (i.removeEventListener(js, r), i.removeEventListener(ks, r));
  }
  return (
    s.useEffect(function () {
      return function () {
        o(t.current);
      };
    }, []),
    [
      function (i) {
        t.current && t.current !== i && o(t.current),
          i &&
            i !== t.current &&
            (i.addEventListener(js, r),
            i.addEventListener(ks, r),
            (t.current = i));
      },
      o,
    ]
  );
};
var ku = Qe() ? s.useLayoutEffect : s.useEffect,
  fg = [$t, qn, Kn, qa],
  pg = [$t, wu],
  ju = !1,
  gg = !0;
function Fs(e) {
  return e === Kn || e === qa;
}
const mg = function (e, t, n) {
    var r = G(xn(Es), 2),
      o = r[0],
      i = r[1],
      a = (function () {
        var f = s.useRef(null);
        function g() {
          lt.cancel(f.current);
        }
        return (
          s.useEffect(function () {
            return function () {
              g();
            };
          }, []),
          [
            function b(m) {
              var p =
                arguments.length > 1 && arguments[1] !== void 0
                  ? arguments[1]
                  : 2;
              g();
              var h = lt(function () {
                p <= 1
                  ? m({
                      isCanceled: function () {
                        return h !== f.current;
                      },
                    })
                  : b(m, p - 1);
              });
              f.current = h;
            },
            g,
          ]
        );
      })(),
      l = G(a, 2),
      c = l[0],
      u = l[1],
      d = t ? pg : fg;
    return (
      ku(
        function () {
          if (o !== Es && o !== qa) {
            var f = d.indexOf(o),
              g = d[f + 1],
              b = n(o);
            b === ju
              ? i(g, !0)
              : g &&
                c(function (m) {
                  function p() {
                    m.isCanceled() || i(g, !0);
                  }
                  b === !0 ? p() : Promise.resolve(b).then(p);
                });
          }
        },
        [e, o],
      ),
      s.useEffect(function () {
        return function () {
          u();
        };
      }, []),
      [
        function () {
          i($t, !0);
        },
        o,
      ]
    );
  },
  nr = (function (e) {
    var t = e;
    pe(e) === 'object' && (t = e.transitionSupport);
    var n = s.forwardRef(function (r, o) {
      var i = r.visible,
        a = i === void 0 || i,
        l = r.removeOnLeave,
        c = l === void 0 || l,
        u = r.forceRender,
        d = r.children,
        f = r.motionName,
        g = r.leavedClassName,
        b = r.eventProps,
        m = (function (L, _) {
          return !(!L.motionName || !t || _ === !1);
        })(r, s.useContext(xu).motion),
        p = s.useRef(),
        h = s.useRef(),
        y = (function (L, _, E, C) {
          var j = C.motionEnter,
            M = j === void 0 || j,
            R = C.motionAppear,
            B = R === void 0 || R,
            D = C.motionLeave,
            H = D === void 0 || D,
            W = C.motionDeadline,
            X = C.motionLeaveImmediately,
            q = C.onAppearPrepare,
            Z = C.onEnterPrepare,
            ce = C.onLeavePrepare,
            ge = C.onAppearStart,
            Oe = C.onEnterStart,
            re = C.onLeaveStart,
            U = C.onAppearActive,
            ee = C.onEnterActive,
            be = C.onLeaveActive,
            Fe = C.onAppearEnd,
            De = C.onEnterEnd,
            we = C.onLeaveEnd,
            $e = C.onVisibleChanged,
            ie = G(xn(), 2),
            Ce = ie[0],
            Ye = ie[1],
            rn = G(xn(fn), 2),
            Ee = rn[0],
            Gt = rn[1],
            kn = G(xn(null), 2),
            jn = kn[0],
            Ze = kn[1],
            on = s.useRef(!1),
            an = s.useRef(null);
          function kt() {
            return E();
          }
          var Me = s.useRef(!1);
          function vt() {
            Gt(fn, !0), Ze(null, !0);
          }
          function jt(te) {
            var ne = kt();
            if (!te || te.deadline || te.target === ne) {
              var oe,
                he = Me.current;
              Ee === ho && he
                ? (oe = Fe == null ? void 0 : Fe(ne, te))
                : Ee === vo && he
                ? (oe = De == null ? void 0 : De(ne, te))
                : Ee === bo && he && (oe = we == null ? void 0 : we(ne, te)),
                Ee !== fn && he && oe !== !1 && vt();
            }
          }
          var rr = G(dg(jt), 1)[0],
            Ut = function (te) {
              var ne, oe, he;
              switch (te) {
                case ho:
                  return A((ne = {}), $t, q), A(ne, qn, ge), A(ne, Kn, U), ne;
                case vo:
                  return A((oe = {}), $t, Z), A(oe, qn, Oe), A(oe, Kn, ee), oe;
                case bo:
                  return A((he = {}), $t, ce), A(he, qn, re), A(he, Kn, be), he;
                default:
                  return {};
              }
            },
            ct = s.useMemo(
              function () {
                return Ut(Ee);
              },
              [Ee],
            ),
            Tt = G(
              mg(Ee, !L, function (te) {
                if (te === $t) {
                  var ne = ct[$t];
                  return ne ? ne(kt()) : ju;
                }
                var oe;
                return (
                  je in ct &&
                    Ze(
                      ((oe = ct[je]) === null || oe === void 0
                        ? void 0
                        : oe.call(ct, kt(), null)) || null,
                    ),
                  je === Kn &&
                    (rr(kt()),
                    W > 0 &&
                      (clearTimeout(an.current),
                      (an.current = setTimeout(function () {
                        jt({ deadline: !0 });
                      }, W)))),
                  je === wu && vt(),
                  gg
                );
              }),
              2,
            ),
            Nt = Tt[0],
            je = Tt[1],
            Ne = Fs(je);
          (Me.current = Ne),
            ku(
              function () {
                Ye(_);
                var te,
                  ne = on.current;
                (on.current = !0),
                  !ne && _ && B && (te = ho),
                  ne && _ && M && (te = vo),
                  ((ne && !_ && H) || (!ne && X && !_ && H)) && (te = bo);
                var oe = Ut(te);
                te && (L || oe[$t]) ? (Gt(te), Nt()) : Gt(fn);
              },
              [_],
            ),
            s.useEffect(
              function () {
                ((Ee === ho && !B) || (Ee === vo && !M) || (Ee === bo && !H)) &&
                  Gt(fn);
              },
              [B, M, H],
            ),
            s.useEffect(function () {
              return function () {
                (on.current = !1), clearTimeout(an.current);
              };
            }, []);
          var ut = s.useRef(!1);
          s.useEffect(
            function () {
              Ce && (ut.current = !0),
                Ce !== void 0 &&
                  Ee === fn &&
                  ((ut.current || Ce) && ($e == null || $e(Ce)),
                  (ut.current = !0));
            },
            [Ce, Ee],
          );
          var Yt = jn;
          return (
            ct[$t] && je === qn && (Yt = z({ transition: 'none' }, Yt)),
            [Ee, je, Yt, Ce ?? _]
          );
        })(
          m,
          a,
          function () {
            try {
              return p.current instanceof HTMLElement
                ? p.current
                : ta(h.current);
            } catch {
              return null;
            }
          },
          r,
        ),
        v = G(y, 4),
        w = v[0],
        S = v[1],
        k = v[2],
        $ = v[3],
        x = s.useRef($);
      $ && (x.current = !0);
      var O,
        F = s.useCallback(
          function (L) {
            (p.current = L), _a(o, L);
          },
          [o],
        ),
        P = z(z({}, b), {}, { visible: a });
      if (d)
        if (w === fn)
          O = $
            ? d(z({}, P), F)
            : !c && x.current && g
            ? d(z(z({}, P), {}, { className: g }), F)
            : u || (!c && !g)
            ? d(z(z({}, P), {}, { style: { display: 'none' } }), F)
            : null;
        else {
          var N, I;
          S === $t
            ? (I = 'prepare')
            : Fs(S)
            ? (I = 'active')
            : S === qn && (I = 'start');
          var T = Ps(f, ''.concat(w, '-').concat(I));
          O = d(
            z(
              z({}, P),
              {},
              {
                className: Q(
                  Ps(f, w),
                  ((N = {}), A(N, T, T && I), A(N, f, typeof f == 'string'), N),
                ),
                style: k,
              },
            ),
            F,
          );
        }
      else O = null;
      return (
        s.isValidElement(O) &&
          tr(O) &&
          (O.ref || (O = s.cloneElement(O, { ref: F }))),
        s.createElement(sg, { ref: h }, O)
      );
    });
    return (n.displayName = 'CSSMotion'), n;
  })(Ou);
var ki = 'add',
  ji = 'keep',
  Pi = 'remove',
  Fi = 'removed';
function hg(e) {
  var t;
  return z(
    z({}, (t = e && pe(e) === 'object' && 'key' in e ? e : { key: e })),
    {},
    { key: String(t.key) },
  );
}
function Mi() {
  return (
    arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : []
  ).map(hg);
}
var vg = ['component', 'children', 'onVisibleChanged', 'onAllRemoved'],
  bg = ['status'],
  yg = [
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
const xg = (function (e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : nr,
    n = (function (r) {
      ei(i, s.Component);
      var o = ti(i);
      function i() {
        var a;
        Rt(this, i);
        for (var l = arguments.length, c = new Array(l), u = 0; u < l; u++)
          c[u] = arguments[u];
        return (
          A(fe((a = o.call.apply(o, [this].concat(c)))), 'state', {
            keyEntities: [],
          }),
          A(fe(a), 'removeKey', function (d) {
            var f = a.state.keyEntities.map(function (g) {
              return g.key !== d ? g : z(z({}, g), {}, { status: Fi });
            });
            return (
              a.setState({ keyEntities: f }),
              f.filter(function (g) {
                return g.status !== Fi;
              }).length
            );
          }),
          a
        );
      }
      return (
        It(
          i,
          [
            {
              key: 'render',
              value: function () {
                var a = this,
                  l = this.state.keyEntities,
                  c = this.props,
                  u = c.component,
                  d = c.children,
                  f = c.onVisibleChanged,
                  g = c.onAllRemoved,
                  b = st(c, vg),
                  m = u || s.Fragment,
                  p = {};
                return (
                  yg.forEach(function (h) {
                    (p[h] = b[h]), delete b[h];
                  }),
                  delete b.keys,
                  s.createElement(
                    m,
                    b,
                    l.map(function (h, y) {
                      var v = h.status,
                        w = st(h, bg),
                        S = v === ki || v === ji;
                      return s.createElement(
                        t,
                        Se({}, p, {
                          key: w.key,
                          visible: S,
                          eventProps: w,
                          onVisibleChanged: function (k) {
                            f == null || f(k, { key: w.key }),
                              k || (a.removeKey(w.key) === 0 && g && g());
                          },
                        }),
                        function (k, $) {
                          return d(z(z({}, k), {}, { index: y }), $);
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
              value: function (a, l) {
                var c = a.keys,
                  u = l.keyEntities,
                  d = Mi(c),
                  f = (function () {
                    var g =
                        arguments.length > 0 && arguments[0] !== void 0
                          ? arguments[0]
                          : [],
                      b =
                        arguments.length > 1 && arguments[1] !== void 0
                          ? arguments[1]
                          : [],
                      m = [],
                      p = 0,
                      h = b.length,
                      y = Mi(g),
                      v = Mi(b);
                    y.forEach(function (S) {
                      for (var k = !1, $ = p; $ < h; $ += 1) {
                        var x = v[$];
                        if (x.key === S.key) {
                          p < $ &&
                            ((m = m.concat(
                              v.slice(p, $).map(function (O) {
                                return z(z({}, O), {}, { status: ki });
                              }),
                            )),
                            (p = $)),
                            m.push(z(z({}, x), {}, { status: ji })),
                            (p += 1),
                            (k = !0);
                          break;
                        }
                      }
                      k || m.push(z(z({}, S), {}, { status: Pi }));
                    }),
                      p < h &&
                        (m = m.concat(
                          v.slice(p).map(function (S) {
                            return z(z({}, S), {}, { status: ki });
                          }),
                        ));
                    var w = {};
                    return (
                      m.forEach(function (S) {
                        var k = S.key;
                        w[k] = (w[k] || 0) + 1;
                      }),
                      Object.keys(w)
                        .filter(function (S) {
                          return w[S] > 1;
                        })
                        .forEach(function (S) {
                          (m = m.filter(function (k) {
                            var $ = k.key,
                              x = k.status;
                            return $ !== S || x !== Pi;
                          })).forEach(function (k) {
                            k.key === S && (k.status = ji);
                          });
                        }),
                      m
                    );
                  })(u, d);
                return {
                  keyEntities: f.filter(function (g) {
                    var b = u.find(function (m) {
                      var p = m.key;
                      return g.key === p;
                    });
                    return !b || b.status !== Fi || g.status !== Pi;
                  }),
                };
              },
            },
          ],
        ),
        i
      );
    })();
  return A(n, 'defaultProps', { component: 'div' }), n;
})(Ou);
function wg(e) {
  const { children: t } = e,
    [, n] = Sn(),
    { motion: r } = n,
    o = s.useRef(!1);
  return (
    (o.current = o.current || r === !1),
    o.current ? s.createElement(lg, { motion: r }, t) : t
  );
}
var Cg =
  (globalThis && globalThis.__rest) ||
  function (e, t) {
    var n = {};
    for (var r in e)
      Object.prototype.hasOwnProperty.call(e, r) &&
        t.indexOf(r) < 0 &&
        (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == 'function') {
      var o = 0;
      for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
        t.indexOf(r[o]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
          (n[r[o]] = e[r[o]]);
    }
    return n;
  };
const $g = [
  'getTargetContainer',
  'getPopupContainer',
  'renderEmpty',
  'pageHeader',
  'input',
  'pagination',
  'form',
  'select',
  'button',
];
let Ms;
const Eg = (e) => {
    const {
        children: t,
        csp: n,
        autoInsertSpaceInButton: r,
        alert: o,
        anchor: i,
        form: a,
        locale: l,
        componentSize: c,
        direction: u,
        space: d,
        virtual: f,
        dropdownMatchSelectWidth: g,
        popupMatchSelectWidth: b,
        popupOverflow: m,
        legacyLocale: p,
        parentContext: h,
        iconPrefixCls: y,
        theme: v,
        componentDisabled: w,
        segmented: S,
        statistic: k,
        spin: $,
        calendar: x,
        carousel: O,
        cascader: F,
        collapse: P,
        typography: N,
        checkbox: I,
        descriptions: T,
        divider: L,
        drawer: _,
        skeleton: E,
        steps: C,
        image: j,
        layout: M,
        list: R,
        mentions: B,
        modal: D,
        progress: H,
        result: W,
        slider: X,
        breadcrumb: q,
        menu: Z,
        pagination: ce,
        input: ge,
        empty: Oe,
        badge: re,
        radio: U,
        rate: ee,
        switch: be,
        transfer: Fe,
        avatar: De,
        message: we,
        tag: $e,
        table: ie,
        card: Ce,
        tabs: Ye,
        timeline: rn,
        timePicker: Ee,
        upload: Gt,
        notification: kn,
        tree: jn,
        colorPicker: Ze,
        datePicker: on,
        wave: an,
      } = e,
      kt = s.useCallback(
        (te, ne) => {
          const { prefixCls: oe } = e;
          if (ne) return ne;
          const he = oe || h.getPrefixCls('');
          return te ? `${he}-${te}` : he;
        },
        [h.getPrefixCls, e.prefixCls],
      ),
      Me = y || h.iconPrefixCls || gu,
      vt = Me !== h.iconPrefixCls,
      jt = n || h.csp,
      rr = hu(Me, jt),
      Ut = (function (te, ne) {
        const oe = te || {},
          he = oe.inherit !== !1 && ne ? ne : uu;
        return ea(
          () => {
            if (!te) return ne;
            const Ke = Object.assign({}, he.components);
            return (
              Object.keys(te.components || {}).forEach((bt) => {
                Ke[bt] = Object.assign(
                  Object.assign({}, Ke[bt]),
                  te.components[bt],
                );
              }),
              Object.assign(Object.assign(Object.assign({}, he), oe), {
                token: Object.assign(Object.assign({}, he.token), oe.token),
                components: Ke,
              })
            );
          },
          [oe, he],
          (Ke, bt) => Ke.some((ln, sn) => !Dc(ln, bt[sn], !0)),
        );
      })(v, h.theme),
      ct = {
        csp: jt,
        autoInsertSpaceInButton: r,
        alert: o,
        anchor: i,
        locale: l || p,
        direction: u,
        space: d,
        virtual: f,
        popupMatchSelectWidth: b ?? g,
        popupOverflow: m,
        getPrefixCls: kt,
        iconPrefixCls: Me,
        theme: Ut,
        segmented: S,
        statistic: k,
        spin: $,
        calendar: x,
        carousel: O,
        cascader: F,
        collapse: P,
        typography: N,
        checkbox: I,
        descriptions: T,
        divider: L,
        drawer: _,
        skeleton: E,
        steps: C,
        image: j,
        input: ge,
        layout: M,
        list: R,
        mentions: B,
        modal: D,
        progress: H,
        result: W,
        slider: X,
        breadcrumb: q,
        menu: Z,
        pagination: ce,
        empty: Oe,
        badge: re,
        radio: U,
        rate: ee,
        switch: be,
        transfer: Fe,
        avatar: De,
        message: we,
        tag: $e,
        table: ie,
        card: Ce,
        tabs: Ye,
        timeline: rn,
        timePicker: Ee,
        upload: Gt,
        notification: kn,
        tree: jn,
        colorPicker: Ze,
        datePicker: on,
        wave: an,
      },
      Tt = Object.assign({}, h);
    Object.keys(ct).forEach((te) => {
      ct[te] !== void 0 && (Tt[te] = ct[te]);
    }),
      $g.forEach((te) => {
        const ne = e[te];
        ne && (Tt[te] = ne);
      });
    const Nt = ea(
        () => Tt,
        Tt,
        (te, ne) => {
          const oe = Object.keys(te),
            he = Object.keys(ne);
          return oe.length !== he.length || oe.some((Ke) => te[Ke] !== ne[Ke]);
        },
      ),
      je = s.useMemo(() => ({ prefixCls: Me, csp: jt }), [Me, jt]);
    let Ne = vt ? rr(t) : t;
    const ut = s.useMemo(() => {
      var te, ne, oe, he;
      return Yn(
        ((te = wn.Form) === null || te === void 0
          ? void 0
          : te.defaultValidateMessages) || {},
        ((oe =
          (ne = Nt.locale) === null || ne === void 0 ? void 0 : ne.Form) ===
          null || oe === void 0
          ? void 0
          : oe.defaultValidateMessages) || {},
        ((he = Nt.form) === null || he === void 0
          ? void 0
          : he.validateMessages) || {},
        (a == null ? void 0 : a.validateMessages) || {},
      );
    }, [Nt, a == null ? void 0 : a.validateMessages]);
    Object.keys(ut).length > 0 &&
      (Ne = s.createElement(ru.Provider, { value: ut }, t)),
      l &&
        (Ne = s.createElement(
          _p,
          { locale: l, _ANT_MARK__: 'internalMark' },
          Ne,
        )),
      (Me || jt) && (Ne = s.createElement(Wa.Provider, { value: je }, Ne)),
      c && (Ne = s.createElement(yu, { size: c }, Ne)),
      (Ne = s.createElement(wg, null, Ne));
    const Yt = s.useMemo(() => {
      const te = Ut || {},
        { algorithm: ne, token: oe, components: he } = te,
        Ke = Cg(te, ['algorithm', 'token', 'components']),
        bt = ne && (!Array.isArray(ne) || ne.length > 0) ? ca(ne) : cu,
        ln = {};
      return (
        Object.entries(he || {}).forEach((sn) => {
          let [Kr, Qr] = sn;
          const dt = Object.assign({}, Qr);
          'algorithm' in dt &&
            (dt.algorithm === !0
              ? (dt.theme = bt)
              : (Array.isArray(dt.algorithm) ||
                  typeof dt.algorithm == 'function') &&
                (dt.theme = ca(dt.algorithm)),
            delete dt.algorithm),
            (ln[Kr] = dt);
        }),
        Object.assign(Object.assign({}, Ke), {
          theme: bt,
          token: Object.assign(Object.assign({}, li), oe),
          components: ln,
        })
      );
    }, [Ut]);
    return (
      v && (Ne = s.createElement(du.Provider, { value: Yt }, Ne)),
      w !== void 0 && (Ne = s.createElement(bu, { disabled: w }, Ne)),
      s.createElement(Re.Provider, { value: Nt }, Ne)
    );
  },
  Sr = (e) => {
    const t = s.useContext(Re),
      n = s.useContext(Va);
    return s.createElement(
      Eg,
      Object.assign({ parentContext: t, legacyLocale: n }, e),
    );
  };
(Sr.ConfigContext = Re),
  (Sr.SizeContext = Ho),
  (Sr.config = (e) => {
    let { prefixCls: t, iconPrefixCls: n, theme: r } = e;
    t !== void 0 && (Ms = t),
      r &&
        (function (o) {
          return Object.keys(o).some((i) => i.endsWith('Color'));
        })(r) &&
        ig(Ms || 'ant', r);
  }),
  (Sr.useConfig = function () {
    return {
      componentDisabled: s.useContext(Gr),
      componentSize: s.useContext(Ho),
    };
  }),
  Object.defineProperty(Sr, 'SizeContext', { get: () => Ho });
const Sg = {
  icon: {
    tag: 'svg',
    attrs: { viewBox: '64 64 896 896', focusable: 'false' },
    children: [
      {
        tag: 'path',
        attrs: {
          d: 'M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z',
        },
      },
    ],
  },
  name: 'check-circle',
  theme: 'filled',
};
function As(e) {
  var t;
  return e == null || (t = e.getRootNode) === null || t === void 0
    ? void 0
    : t.call(e);
}
function Bo(e) {
  return (function (t) {
    return As(t) instanceof ShadowRoot;
  })(e)
    ? As(e)
    : null;
}
function Rs(e) {
  return (
    pe(e) === 'object' &&
    typeof e.name == 'string' &&
    typeof e.theme == 'string' &&
    (pe(e.icon) === 'object' || typeof e.icon == 'function')
  );
}
function Is() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return Object.keys(e).reduce(function (t, n) {
    var r,
      o = e[n];
    return (
      n === 'class'
        ? ((t.className = o), delete t.class)
        : (delete t[n],
          (t[
            ((r = n),
            r.replace(/-(.)/g, function (i, a) {
              return a.toUpperCase();
            }))
          ] = o)),
      t
    );
  }, {});
}
function xa(e, t, n) {
  return n
    ? Y.createElement(
        e.tag,
        z(z({ key: t }, Is(e.attrs)), n),
        (e.children || []).map(function (r, o) {
          return xa(r, ''.concat(t, '-').concat(e.tag, '-').concat(o));
        }),
      )
    : Y.createElement(
        e.tag,
        z({ key: t }, Is(e.attrs)),
        (e.children || []).map(function (r, o) {
          return xa(r, ''.concat(t, '-').concat(e.tag, '-').concat(o));
        }),
      );
}
function Pu(e) {
  return Cn(e)[0];
}
function Fu(e) {
  return e ? (Array.isArray(e) ? e : [e]) : [];
}
var Og = [
    'icon',
    'className',
    'onClick',
    'style',
    'primaryColor',
    'secondaryColor',
  ],
  kr = { primaryColor: '#333', secondaryColor: '#E6E6E6', calculated: !1 },
  Do = function (e) {
    var t,
      n,
      r,
      o,
      i,
      a,
      l,
      c = e.icon,
      u = e.className,
      d = e.onClick,
      f = e.style,
      g = e.primaryColor,
      b = e.secondaryColor,
      m = st(e, Og),
      p = s.useRef(),
      h = kr;
    if (
      (g && (h = { primaryColor: g, secondaryColor: b || Pu(g) }),
      (t = p),
      (n = s.useContext(Wa)),
      (r = n.csp),
      (o = n.prefixCls),
      (i = `
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
`),
      o && (i = i.replace(/anticon/g, o)),
      s.useEffect(function () {
        var v = Bo(t.current);
        Zn(i, '@ant-design-icons', { prepend: !0, csp: r, attachTo: v });
      }, []),
      (a = Rs(c)),
      (l = 'icon should be icon definiton, but got '.concat(c)),
      at(a, '[@ant-design/icons] '.concat(l)),
      !Rs(c))
    )
      return null;
    var y = c;
    return (
      y &&
        typeof y.icon == 'function' &&
        (y = z(
          z({}, y),
          {},
          { icon: y.icon(h.primaryColor, h.secondaryColor) },
        )),
      xa(
        y.icon,
        'svg-'.concat(y.name),
        z(
          z(
            {
              className: u,
              onClick: d,
              style: f,
              'data-icon': y.name,
              width: '1em',
              height: '1em',
              fill: 'currentColor',
              'aria-hidden': 'true',
            },
            m,
          ),
          {},
          { ref: p },
        ),
      )
    );
  };
(Do.displayName = 'IconReact'),
  (Do.getTwoToneColors = function () {
    return z({}, kr);
  }),
  (Do.setTwoToneColors = function (e) {
    var t = e.primaryColor,
      n = e.secondaryColor;
    (kr.primaryColor = t),
      (kr.secondaryColor = n || Pu(t)),
      (kr.calculated = !!n);
  });
const Xa = Do;
function Mu(e) {
  var t = G(Fu(e), 2),
    n = t[0],
    r = t[1];
  return Xa.setTwoToneColors({ primaryColor: n, secondaryColor: r });
}
var kg = [
  'className',
  'icon',
  'spin',
  'rotate',
  'tabIndex',
  'onClick',
  'twoToneColor',
];
Mu(Vp.primary);
var Wo = s.forwardRef(function (e, t) {
  var n,
    r = e.className,
    o = e.icon,
    i = e.spin,
    a = e.rotate,
    l = e.tabIndex,
    c = e.onClick,
    u = e.twoToneColor,
    d = st(e, kg),
    f = s.useContext(Wa),
    g = f.prefixCls,
    b = g === void 0 ? 'anticon' : g,
    m = f.rootClassName,
    p = Q(
      m,
      b,
      (A((n = {}), ''.concat(b, '-').concat(o.name), !!o.name),
      A(n, ''.concat(b, '-spin'), !!i || o.name === 'loading'),
      n),
      r,
    ),
    h = l;
  h === void 0 && c && (h = -1);
  var y = a
      ? {
          msTransform: 'rotate('.concat(a, 'deg)'),
          transform: 'rotate('.concat(a, 'deg)'),
        }
      : void 0,
    v = G(Fu(u), 2),
    w = v[0],
    S = v[1];
  return s.createElement(
    'span',
    Se({ role: 'img', 'aria-label': o.name }, d, {
      ref: t,
      tabIndex: h,
      onClick: c,
      className: p,
    }),
    s.createElement(Xa, {
      icon: o,
      primaryColor: w,
      secondaryColor: S,
      style: y,
    }),
  );
});
(Wo.displayName = 'AntdIcon'),
  (Wo.getTwoToneColor = function () {
    var e = Xa.getTwoToneColors();
    return e.calculated ? [e.primaryColor, e.secondaryColor] : e.primaryColor;
  }),
  (Wo.setTwoToneColor = Mu);
const nn = Wo;
var jg = function (e, t) {
  return s.createElement(nn, Se({}, e, { ref: t, icon: Sg }));
};
const Pg = s.forwardRef(jg),
  Fg = {
    icon: {
      tag: 'svg',
      attrs: {
        'fill-rule': 'evenodd',
        viewBox: '64 64 896 896',
        focusable: 'false',
      },
      children: [
        {
          tag: 'path',
          attrs: {
            d: 'M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm127.98 274.82h-.04l-.08.06L512 466.75 384.14 338.88c-.04-.05-.06-.06-.08-.06a.12.12 0 00-.07 0c-.03 0-.05.01-.09.05l-45.02 45.02a.2.2 0 00-.05.09.12.12 0 000 .07v.02a.27.27 0 00.06.06L466.75 512 338.88 639.86c-.05.04-.06.06-.06.08a.12.12 0 000 .07c0 .03.01.05.05.09l45.02 45.02a.2.2 0 00.09.05.12.12 0 00.07 0c.02 0 .04-.01.08-.05L512 557.25l127.86 127.87c.04.04.06.05.08.05a.12.12 0 00.07 0c.03 0 .05-.01.09-.05l45.02-45.02a.2.2 0 00.05-.09.12.12 0 000-.07v-.02a.27.27 0 00-.05-.06L557.25 512l127.87-127.86c.04-.04.05-.06.05-.08a.12.12 0 000-.07c0-.03-.01-.05-.05-.09l-45.02-45.02a.2.2 0 00-.09-.05.12.12 0 00-.07 0z',
          },
        },
      ],
    },
    name: 'close-circle',
    theme: 'filled',
  };
var Mg = function (e, t) {
  return s.createElement(nn, Se({}, e, { ref: t, icon: Fg }));
};
const Ga = s.forwardRef(Mg),
  Ag = {
    icon: {
      tag: 'svg',
      attrs: { viewBox: '64 64 896 896', focusable: 'false' },
      children: [
        {
          tag: 'path',
          attrs: {
            d: 'M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z',
          },
        },
      ],
    },
    name: 'exclamation-circle',
    theme: 'filled',
  };
var Rg = function (e, t) {
  return s.createElement(nn, Se({}, e, { ref: t, icon: Ag }));
};
const Ig = s.forwardRef(Rg),
  { isValidElement: ci } = Jo;
function Au(e) {
  return e && ci(e) && e.type === s.Fragment;
}
function $n(e, t) {
  return (function (n, r, o) {
    return ci(n)
      ? s.cloneElement(n, typeof o == 'function' ? o(n.props || {}) : o)
      : r;
  })(e, e, t);
}
const Ts = (e) => typeof e == 'object' && e != null && e.nodeType === 1,
  Ns = (e, t) => (!t || e !== 'hidden') && e !== 'visible' && e !== 'clip',
  Ai = (e, t) => {
    if (e.clientHeight < e.scrollHeight || e.clientWidth < e.scrollWidth) {
      const n = getComputedStyle(e, null);
      return (
        Ns(n.overflowY, t) ||
        Ns(n.overflowX, t) ||
        ((r) => {
          const o = ((i) => {
            if (!i.ownerDocument || !i.ownerDocument.defaultView) return null;
            try {
              return i.ownerDocument.defaultView.frameElement;
            } catch {
              return null;
            }
          })(r);
          return (
            !!o &&
            (o.clientHeight < r.scrollHeight || o.clientWidth < r.scrollWidth)
          );
        })(e)
      );
    }
    return !1;
  },
  wo = (e, t, n, r, o, i, a, l) =>
    (i < e && a > t) || (i > e && a < t)
      ? 0
      : (i <= e && l <= n) || (a >= t && l >= n)
      ? i - e - r
      : (a > t && l < n) || (i < e && l > n)
      ? a - t + o
      : 0,
  Tg = (e) => {
    const t = e.parentElement;
    return t ?? (e.getRootNode().host || null);
  },
  _s = (e, t) => {
    var n, r, o, i;
    if (typeof document > 'u') return [];
    const {
        scrollMode: a,
        block: l,
        inline: c,
        boundary: u,
        skipOverflowHiddenElements: d,
      } = t,
      f = typeof u == 'function' ? u : (I) => I !== u;
    if (!Ts(e)) throw new TypeError('Invalid target');
    const g = document.scrollingElement || document.documentElement,
      b = [];
    let m = e;
    for (; Ts(m) && f(m); ) {
      if (((m = Tg(m)), m === g)) {
        b.push(m);
        break;
      }
      (m != null &&
        m === document.body &&
        Ai(m) &&
        !Ai(document.documentElement)) ||
        (m != null && Ai(m, d) && b.push(m));
    }
    const p =
        (r = (n = window.visualViewport) == null ? void 0 : n.width) != null
          ? r
          : innerWidth,
      h =
        (i = (o = window.visualViewport) == null ? void 0 : o.height) != null
          ? i
          : innerHeight,
      { scrollX: y, scrollY: v } = window,
      {
        height: w,
        width: S,
        top: k,
        right: $,
        bottom: x,
        left: O,
      } = e.getBoundingClientRect();
    let F = l === 'start' || l === 'nearest' ? k : l === 'end' ? x : k + w / 2,
      P = c === 'center' ? O + S / 2 : c === 'end' ? $ : O;
    const N = [];
    for (let I = 0; I < b.length; I++) {
      const T = b[I],
        {
          height: L,
          width: _,
          top: E,
          right: C,
          bottom: j,
          left: M,
        } = T.getBoundingClientRect();
      if (
        a === 'if-needed' &&
        k >= 0 &&
        O >= 0 &&
        x <= h &&
        $ <= p &&
        k >= E &&
        x <= j &&
        O >= M &&
        $ <= C
      )
        return N;
      const R = getComputedStyle(T),
        B = parseInt(R.borderLeftWidth, 10),
        D = parseInt(R.borderTopWidth, 10),
        H = parseInt(R.borderRightWidth, 10),
        W = parseInt(R.borderBottomWidth, 10);
      let X = 0,
        q = 0;
      const Z = 'offsetWidth' in T ? T.offsetWidth - T.clientWidth - B - H : 0,
        ce = 'offsetHeight' in T ? T.offsetHeight - T.clientHeight - D - W : 0,
        ge =
          'offsetWidth' in T
            ? T.offsetWidth === 0
              ? 0
              : _ / T.offsetWidth
            : 0,
        Oe =
          'offsetHeight' in T
            ? T.offsetHeight === 0
              ? 0
              : L / T.offsetHeight
            : 0;
      if (g === T)
        (X =
          l === 'start'
            ? F
            : l === 'end'
            ? F - h
            : l === 'nearest'
            ? wo(v, v + h, h, D, W, v + F, v + F + w, w)
            : F - h / 2),
          (q =
            c === 'start'
              ? P
              : c === 'center'
              ? P - p / 2
              : c === 'end'
              ? P - p
              : wo(y, y + p, p, B, H, y + P, y + P + S, S)),
          (X = Math.max(0, X + v)),
          (q = Math.max(0, q + y));
      else {
        (X =
          l === 'start'
            ? F - E - D
            : l === 'end'
            ? F - j + W + ce
            : l === 'nearest'
            ? wo(E, j, L, D, W + ce, F, F + w, w)
            : F - (E + L / 2) + ce / 2),
          (q =
            c === 'start'
              ? P - M - B
              : c === 'center'
              ? P - (M + _ / 2) + Z / 2
              : c === 'end'
              ? P - C + H + Z
              : wo(M, C, _, B, H + Z, P, P + S, S));
        const { scrollLeft: re, scrollTop: U } = T;
        (X = Math.max(0, Math.min(U + X / Oe, T.scrollHeight - L / Oe + ce))),
          (q = Math.max(0, Math.min(re + q / ge, T.scrollWidth - _ / ge + Z))),
          (F += U - X),
          (P += re - q);
      }
      N.push({ el: T, top: X, left: q });
    }
    return N;
  },
  Ng = (e) =>
    e === !1
      ? { block: 'end', inline: 'nearest' }
      : ((t) => t === Object(t) && Object.keys(t).length !== 0)(e)
      ? e
      : { block: 'start', inline: 'nearest' },
  _g = {
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
var zg = function (e, t) {
  return s.createElement(nn, Se({}, e, { ref: t, icon: _g }));
};
const Ru = s.forwardRef(zg);
function Ue() {
  Ue = function () {
    return t;
  };
  var e,
    t = {},
    n = Object.prototype,
    r = n.hasOwnProperty,
    o =
      Object.defineProperty ||
      function (E, C, j) {
        E[C] = j.value;
      },
    i = typeof Symbol == 'function' ? Symbol : {},
    a = i.iterator || '@@iterator',
    l = i.asyncIterator || '@@asyncIterator',
    c = i.toStringTag || '@@toStringTag';
  function u(E, C, j) {
    return (
      Object.defineProperty(E, C, {
        value: j,
        enumerable: !0,
        configurable: !0,
        writable: !0,
      }),
      E[C]
    );
  }
  try {
    u({}, '');
  } catch {
    u = function (C, j, M) {
      return (C[j] = M);
    };
  }
  function d(E, C, j, M) {
    var R = C && C.prototype instanceof y ? C : y,
      B = Object.create(R.prototype),
      D = new L(M || []);
    return o(B, '_invoke', { value: P(E, j, D) }), B;
  }
  function f(E, C, j) {
    try {
      return { type: 'normal', arg: E.call(C, j) };
    } catch (M) {
      return { type: 'throw', arg: M };
    }
  }
  t.wrap = d;
  var g = 'suspendedStart',
    b = 'suspendedYield',
    m = 'executing',
    p = 'completed',
    h = {};
  function y() {}
  function v() {}
  function w() {}
  var S = {};
  u(S, a, function () {
    return this;
  });
  var k = Object.getPrototypeOf,
    $ = k && k(k(_([])));
  $ && $ !== n && r.call($, a) && (S = $);
  var x = (w.prototype = y.prototype = Object.create(S));
  function O(E) {
    ['next', 'throw', 'return'].forEach(function (C) {
      u(E, C, function (j) {
        return this._invoke(C, j);
      });
    });
  }
  function F(E, C) {
    function j(R, B, D, H) {
      var W = f(E[R], E, B);
      if (W.type !== 'throw') {
        var X = W.arg,
          q = X.value;
        return q && pe(q) == 'object' && r.call(q, '__await')
          ? C.resolve(q.__await).then(
              function (Z) {
                j('next', Z, D, H);
              },
              function (Z) {
                j('throw', Z, D, H);
              },
            )
          : C.resolve(q).then(
              function (Z) {
                (X.value = Z), D(X);
              },
              function (Z) {
                return j('throw', Z, D, H);
              },
            );
      }
      H(W.arg);
    }
    var M;
    o(this, '_invoke', {
      value: function (R, B) {
        function D() {
          return new C(function (H, W) {
            j(R, B, H, W);
          });
        }
        return (M = M ? M.then(D, D) : D());
      },
    });
  }
  function P(E, C, j) {
    var M = g;
    return function (R, B) {
      if (M === m) throw new Error('Generator is already running');
      if (M === p) {
        if (R === 'throw') throw B;
        return { value: e, done: !0 };
      }
      for (j.method = R, j.arg = B; ; ) {
        var D = j.delegate;
        if (D) {
          var H = N(D, j);
          if (H) {
            if (H === h) continue;
            return H;
          }
        }
        if (j.method === 'next') j.sent = j._sent = j.arg;
        else if (j.method === 'throw') {
          if (M === g) throw ((M = p), j.arg);
          j.dispatchException(j.arg);
        } else j.method === 'return' && j.abrupt('return', j.arg);
        M = m;
        var W = f(E, C, j);
        if (W.type === 'normal') {
          if (((M = j.done ? p : b), W.arg === h)) continue;
          return { value: W.arg, done: j.done };
        }
        W.type === 'throw' && ((M = p), (j.method = 'throw'), (j.arg = W.arg));
      }
    };
  }
  function N(E, C) {
    var j = C.method,
      M = E.iterator[j];
    if (M === e)
      return (
        (C.delegate = null),
        (j === 'throw' &&
          E.iterator.return &&
          ((C.method = 'return'),
          (C.arg = e),
          N(E, C),
          C.method === 'throw')) ||
          (j !== 'return' &&
            ((C.method = 'throw'),
            (C.arg = new TypeError(
              "The iterator does not provide a '" + j + "' method",
            )))),
        h
      );
    var R = f(M, E.iterator, C.arg);
    if (R.type === 'throw')
      return (C.method = 'throw'), (C.arg = R.arg), (C.delegate = null), h;
    var B = R.arg;
    return B
      ? B.done
        ? ((C[E.resultName] = B.value),
          (C.next = E.nextLoc),
          C.method !== 'return' && ((C.method = 'next'), (C.arg = e)),
          (C.delegate = null),
          h)
        : B
      : ((C.method = 'throw'),
        (C.arg = new TypeError('iterator result is not an object')),
        (C.delegate = null),
        h);
  }
  function I(E) {
    var C = { tryLoc: E[0] };
    1 in E && (C.catchLoc = E[1]),
      2 in E && ((C.finallyLoc = E[2]), (C.afterLoc = E[3])),
      this.tryEntries.push(C);
  }
  function T(E) {
    var C = E.completion || {};
    (C.type = 'normal'), delete C.arg, (E.completion = C);
  }
  function L(E) {
    (this.tryEntries = [{ tryLoc: 'root' }]),
      E.forEach(I, this),
      this.reset(!0);
  }
  function _(E) {
    if (E || E === '') {
      var C = E[a];
      if (C) return C.call(E);
      if (typeof E.next == 'function') return E;
      if (!isNaN(E.length)) {
        var j = -1,
          M = function R() {
            for (; ++j < E.length; )
              if (r.call(E, j)) return (R.value = E[j]), (R.done = !1), R;
            return (R.value = e), (R.done = !0), R;
          };
        return (M.next = M);
      }
    }
    throw new TypeError(pe(E) + ' is not iterable');
  }
  return (
    (v.prototype = w),
    o(x, 'constructor', { value: w, configurable: !0 }),
    o(w, 'constructor', { value: v, configurable: !0 }),
    (v.displayName = u(w, c, 'GeneratorFunction')),
    (t.isGeneratorFunction = function (E) {
      var C = typeof E == 'function' && E.constructor;
      return (
        !!C && (C === v || (C.displayName || C.name) === 'GeneratorFunction')
      );
    }),
    (t.mark = function (E) {
      return (
        Object.setPrototypeOf
          ? Object.setPrototypeOf(E, w)
          : ((E.__proto__ = w), u(E, c, 'GeneratorFunction')),
        (E.prototype = Object.create(x)),
        E
      );
    }),
    (t.awrap = function (E) {
      return { __await: E };
    }),
    O(F.prototype),
    u(F.prototype, l, function () {
      return this;
    }),
    (t.AsyncIterator = F),
    (t.async = function (E, C, j, M, R) {
      R === void 0 && (R = Promise);
      var B = new F(d(E, C, j, M), R);
      return t.isGeneratorFunction(C)
        ? B
        : B.next().then(function (D) {
            return D.done ? D.value : B.next();
          });
    }),
    O(x),
    u(x, c, 'Generator'),
    u(x, a, function () {
      return this;
    }),
    u(x, 'toString', function () {
      return '[object Generator]';
    }),
    (t.keys = function (E) {
      var C = Object(E),
        j = [];
      for (var M in C) j.push(M);
      return (
        j.reverse(),
        function R() {
          for (; j.length; ) {
            var B = j.pop();
            if (B in C) return (R.value = B), (R.done = !1), R;
          }
          return (R.done = !0), R;
        }
      );
    }),
    (t.values = _),
    (L.prototype = {
      constructor: L,
      reset: function (E) {
        if (
          ((this.prev = 0),
          (this.next = 0),
          (this.sent = this._sent = e),
          (this.done = !1),
          (this.delegate = null),
          (this.method = 'next'),
          (this.arg = e),
          this.tryEntries.forEach(T),
          !E)
        )
          for (var C in this)
            C.charAt(0) === 't' &&
              r.call(this, C) &&
              !isNaN(+C.slice(1)) &&
              (this[C] = e);
      },
      stop: function () {
        this.done = !0;
        var E = this.tryEntries[0].completion;
        if (E.type === 'throw') throw E.arg;
        return this.rval;
      },
      dispatchException: function (E) {
        if (this.done) throw E;
        var C = this;
        function j(W, X) {
          return (
            (B.type = 'throw'),
            (B.arg = E),
            (C.next = W),
            X && ((C.method = 'next'), (C.arg = e)),
            !!X
          );
        }
        for (var M = this.tryEntries.length - 1; M >= 0; --M) {
          var R = this.tryEntries[M],
            B = R.completion;
          if (R.tryLoc === 'root') return j('end');
          if (R.tryLoc <= this.prev) {
            var D = r.call(R, 'catchLoc'),
              H = r.call(R, 'finallyLoc');
            if (D && H) {
              if (this.prev < R.catchLoc) return j(R.catchLoc, !0);
              if (this.prev < R.finallyLoc) return j(R.finallyLoc);
            } else if (D) {
              if (this.prev < R.catchLoc) return j(R.catchLoc, !0);
            } else {
              if (!H) throw new Error('try statement without catch or finally');
              if (this.prev < R.finallyLoc) return j(R.finallyLoc);
            }
          }
        }
      },
      abrupt: function (E, C) {
        for (var j = this.tryEntries.length - 1; j >= 0; --j) {
          var M = this.tryEntries[j];
          if (
            M.tryLoc <= this.prev &&
            r.call(M, 'finallyLoc') &&
            this.prev < M.finallyLoc
          ) {
            var R = M;
            break;
          }
        }
        R &&
          (E === 'break' || E === 'continue') &&
          R.tryLoc <= C &&
          C <= R.finallyLoc &&
          (R = null);
        var B = R ? R.completion : {};
        return (
          (B.type = E),
          (B.arg = C),
          R
            ? ((this.method = 'next'), (this.next = R.finallyLoc), h)
            : this.complete(B)
        );
      },
      complete: function (E, C) {
        if (E.type === 'throw') throw E.arg;
        return (
          E.type === 'break' || E.type === 'continue'
            ? (this.next = E.arg)
            : E.type === 'return'
            ? ((this.rval = this.arg = E.arg),
              (this.method = 'return'),
              (this.next = 'end'))
            : E.type === 'normal' && C && (this.next = C),
          h
        );
      },
      finish: function (E) {
        for (var C = this.tryEntries.length - 1; C >= 0; --C) {
          var j = this.tryEntries[C];
          if (j.finallyLoc === E)
            return this.complete(j.completion, j.afterLoc), T(j), h;
        }
      },
      catch: function (E) {
        for (var C = this.tryEntries.length - 1; C >= 0; --C) {
          var j = this.tryEntries[C];
          if (j.tryLoc === E) {
            var M = j.completion;
            if (M.type === 'throw') {
              var R = M.arg;
              T(j);
            }
            return R;
          }
        }
        throw new Error('illegal catch attempt');
      },
      delegateYield: function (E, C, j) {
        return (
          (this.delegate = { iterator: _(E), resultName: C, nextLoc: j }),
          this.method === 'next' && (this.arg = e),
          h
        );
      },
    }),
    t
  );
}
function zs(e, t, n, r, o, i, a) {
  try {
    var l = e[i](a),
      c = l.value;
  } catch (u) {
    return void n(u);
  }
  l.done ? t(c) : Promise.resolve(c).then(r, o);
}
function On(e) {
  return function () {
    var t = this,
      n = arguments;
    return new Promise(function (r, o) {
      var i = e.apply(t, n);
      function a(c) {
        zs(i, r, o, a, l, 'next', c);
      }
      function l(c) {
        zs(i, r, o, a, l, 'throw', c);
      }
      a(void 0);
    });
  };
}
var Yo,
  Ur = z({}, Nf),
  Lg = Ur.version,
  Hg = Ur.render,
  Bg = Ur.unmountComponentAtNode;
try {
  Number((Lg || '').split('.')[0]) >= 18 && (Yo = Ur.createRoot);
} catch {}
function Ls(e) {
  var t = Ur.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  t && pe(t) === 'object' && (t.usingClientEntryPoint = e);
}
var Ko = '__rc_react_root__';
function Dg(e, t) {
  Yo
    ? (function (n, r) {
        Ls(!0);
        var o = r[Ko] || Yo(r);
        Ls(!1), o.render(n), (r[Ko] = o);
      })(e, t)
    : (function (n, r) {
        Hg(n, r);
      })(e, t);
}
function Wg(e) {
  return Iu.apply(this, arguments);
}
function Iu() {
  return (Iu = On(
    Ue().mark(function e(t) {
      return Ue().wrap(function (n) {
        for (;;)
          switch ((n.prev = n.next)) {
            case 0:
              return n.abrupt(
                'return',
                Promise.resolve().then(function () {
                  var r;
                  (r = t[Ko]) === null || r === void 0 || r.unmount(),
                    delete t[Ko];
                }),
              );
            case 1:
            case 'end':
              return n.stop();
          }
      }, e);
    }),
  )).apply(this, arguments);
}
function Vg(e) {
  Bg(e);
}
function Tu() {
  return (Tu = On(
    Ue().mark(function e(t) {
      return Ue().wrap(function (n) {
        for (;;)
          switch ((n.prev = n.next)) {
            case 0:
              if (Yo === void 0) {
                n.next = 2;
                break;
              }
              return n.abrupt('return', Wg(t));
            case 2:
              Vg(t);
            case 3:
            case 'end':
              return n.stop();
          }
      }, e);
    }),
  )).apply(this, arguments);
}
const Ri = () => ({ height: 0, opacity: 0 }),
  Hs = (e) => {
    const { scrollHeight: t } = e;
    return { height: t, opacity: 1 };
  },
  qg = (e) => ({ height: e ? e.offsetHeight : 0 }),
  Ii = (e, t) =>
    (t == null ? void 0 : t.deadline) === !0 || t.propertyName === 'height',
  Xg = (e, t, n) => (n !== void 0 ? n : `${e}-${t}`),
  Bs = function () {
    return {
      motionName: `${
        arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 'ant'
      }-motion-collapse`,
      onAppearStart: Ri,
      onEnterStart: Ri,
      onAppearActive: Hs,
      onEnterActive: Hs,
      onLeaveStart: qg,
      onLeaveActive: Ri,
      onAppearEnd: Ii,
      onEnterEnd: Ii,
      onLeaveEnd: Ii,
      motionDeadline: 500,
    };
  },
  Ua = function (e) {
    if (!e) return !1;
    if (e instanceof Element) {
      if (e.offsetParent) return !0;
      if (e.getBBox) {
        var t = e.getBBox(),
          n = t.width,
          r = t.height;
        if (n || r) return !0;
      }
      if (e.getBoundingClientRect) {
        var o = e.getBoundingClientRect(),
          i = o.width,
          a = o.height;
        if (i || a) return !0;
      }
    }
    return !1;
  },
  Gg = (e) => {
    const { componentCls: t, colorPrimary: n } = e;
    return {
      [t]: {
        position: 'absolute',
        background: 'transparent',
        pointerEvents: 'none',
        boxSizing: 'border-box',
        color: `var(--wave-color, ${n})`,
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
  Ug = tn('Wave', (e) => [Gg(e)]);
function Ti(e) {
  return (
    e &&
    e !== '#fff' &&
    e !== '#ffffff' &&
    e !== 'rgb(255, 255, 255)' &&
    e !== 'rgba(255, 255, 255, 1)' &&
    (function (t) {
      const n = (t || '').match(/rgba?\((\d*), (\d*), (\d*)(, [\d.]*)?\)/);
      return !(n && n[1] && n[2] && n[3] && n[1] === n[2] && n[2] === n[3]);
    })(e) &&
    !/rgba\((?:\d*, ){3}0\)/.test(e) &&
    e !== 'transparent'
  );
}
const Nu = 'ant-wave-target';
function Ni(e) {
  return Number.isNaN(e) ? 0 : e;
}
const Yg = (e) => {
    const { className: t, target: n, component: r } = e,
      o = s.useRef(null),
      [i, a] = s.useState(null),
      [l, c] = s.useState([]),
      [u, d] = s.useState(0),
      [f, g] = s.useState(0),
      [b, m] = s.useState(0),
      [p, h] = s.useState(0),
      [y, v] = s.useState(!1),
      w = {
        left: u,
        top: f,
        width: b,
        height: p,
        borderRadius: l.map(($) => `${$}px`).join(' '),
      };
    function S() {
      const $ = getComputedStyle(n);
      a(
        (function (L) {
          const {
            borderTopColor: _,
            borderColor: E,
            backgroundColor: C,
          } = getComputedStyle(L);
          return Ti(_) ? _ : Ti(E) ? E : Ti(C) ? C : null;
        })(n),
      );
      const x = $.position === 'static',
        { borderLeftWidth: O, borderTopWidth: F } = $;
      d(x ? n.offsetLeft : Ni(-parseFloat(O))),
        g(x ? n.offsetTop : Ni(-parseFloat(F))),
        m(n.offsetWidth),
        h(n.offsetHeight);
      const {
        borderTopLeftRadius: P,
        borderTopRightRadius: N,
        borderBottomLeftRadius: I,
        borderBottomRightRadius: T,
      } = $;
      c([P, N, T, I].map((L) => Ni(parseFloat(L))));
    }
    if (
      (i && (w['--wave-color'] = i),
      s.useEffect(() => {
        if (n) {
          const $ = lt(() => {
            S(), v(!0);
          });
          let x;
          return (
            typeof ResizeObserver < 'u' &&
              ((x = new ResizeObserver(S)), x.observe(n)),
            () => {
              lt.cancel($), x == null || x.disconnect();
            }
          );
        }
      }, []),
      !y)
    )
      return null;
    const k =
      (r === 'Checkbox' || r === 'Radio') &&
      (n == null ? void 0 : n.classList.contains(Nu));
    return s.createElement(
      nr,
      {
        visible: !0,
        motionAppear: !0,
        motionName: 'wave-motion',
        motionDeadline: 5e3,
        onAppearEnd: ($, x) => {
          var O;
          if (x.deadline || x.propertyName === 'opacity') {
            const F =
              (O = o.current) === null || O === void 0
                ? void 0
                : O.parentElement;
            (function (P) {
              return Tu.apply(this, arguments);
            })(F).then(() => {
              F == null || F.remove();
            });
          }
          return !1;
        },
      },
      ($) => {
        let { className: x } = $;
        return s.createElement('div', {
          ref: o,
          className: Q(t, { 'wave-quick': k }, x),
          style: w,
        });
      },
    );
  },
  Kg = (e, t) => {
    var n;
    const { component: r } = t;
    if (
      r === 'Checkbox' &&
      !(!((n = e.querySelector('input')) === null || n === void 0) && n.checked)
    )
      return;
    const o = document.createElement('div');
    (o.style.position = 'absolute'),
      (o.style.left = '0px'),
      (o.style.top = '0px'),
      e == null || e.insertBefore(o, e == null ? void 0 : e.firstChild),
      Dg(s.createElement(Yg, Object.assign({}, t, { target: e })), o);
  },
  Qg = (e) => {
    const { children: t, disabled: n, component: r } = e,
      { getPrefixCls: o } = s.useContext(Re),
      i = s.useRef(null),
      a = o('wave'),
      [, l] = Ug(a),
      c = (function (u, d, f) {
        const { wave: g } = s.useContext(Re),
          [, b, m] = Sn(),
          p = Mt((y) => {
            const v = u.current;
            if ((g != null && g.disabled) || !v) return;
            const w = v.querySelector(`.${Nu}`) || v,
              { showEffect: S } = g || {};
            (S || Kg)(w, {
              className: d,
              token: b,
              component: f,
              event: y,
              hashId: m,
            });
          }),
          h = s.useRef();
        return (y) => {
          lt.cancel(h.current),
            (h.current = lt(() => {
              p(y);
            }));
        };
      })(i, Q(a, l), r);
    return (
      Y.useEffect(() => {
        const u = i.current;
        if (!u || u.nodeType !== 1 || n) return;
        const d = (f) => {
          !Ua(f.target) ||
            !u.getAttribute ||
            u.getAttribute('disabled') ||
            u.disabled ||
            u.className.includes('disabled') ||
            u.className.includes('-leave') ||
            c(f);
        };
        return (
          u.addEventListener('click', d, !0),
          () => {
            u.removeEventListener('click', d, !0);
          }
        );
      }, [n]),
      Y.isValidElement(t) ? $n(t, { ref: tr(t) ? Xt(t.ref, i) : i }) : t ?? null
    );
  },
  Yr = (e) => {
    const t = Y.useContext(Ho);
    return Y.useMemo(
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
  };
globalThis && globalThis.__rest;
const _u = s.createContext(null),
  Ya = (e, t) => {
    const n = s.useContext(_u),
      r = s.useMemo(() => {
        if (!n) return '';
        const { compactDirection: o, isFirstItem: i, isLastItem: a } = n,
          l = o === 'vertical' ? '-vertical-' : '-';
        return Q(`${e}-compact${l}item`, {
          [`${e}-compact${l}first-item`]: i,
          [`${e}-compact${l}last-item`]: a,
          [`${e}-compact${l}item-rtl`]: t === 'rtl',
        });
      }, [e, t, n]);
    return {
      compactSize: n == null ? void 0 : n.compactSize,
      compactDirection: n == null ? void 0 : n.compactDirection,
      compactItemClassnames: r,
    };
  },
  wa = (e) => {
    let { children: t } = e;
    return s.createElement(_u.Provider, { value: null }, t);
  };
var Zg =
  (globalThis && globalThis.__rest) ||
  function (e, t) {
    var n = {};
    for (var r in e)
      Object.prototype.hasOwnProperty.call(e, r) &&
        t.indexOf(r) < 0 &&
        (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == 'function') {
      var o = 0;
      for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
        t.indexOf(r[o]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
          (n[r[o]] = e[r[o]]);
    }
    return n;
  };
const zu = s.createContext(void 0),
  Jg = (e) => {
    const { getPrefixCls: t, direction: n } = s.useContext(Re),
      { prefixCls: r, size: o, className: i } = e,
      a = Zg(e, ['prefixCls', 'size', 'className']),
      l = t('btn-group', r),
      [, , c] = Sn();
    let u = '';
    switch (o) {
      case 'large':
        u = 'lg';
        break;
      case 'small':
        u = 'sm';
    }
    const d = Q(l, { [`${l}-${u}`]: u, [`${l}-rtl`]: n === 'rtl' }, i, c);
    return s.createElement(
      zu.Provider,
      { value: o },
      s.createElement('div', Object.assign({}, a, { className: d })),
    );
  },
  Ds = /^[\u4e00-\u9fa5]{2}$/,
  Ca = Ds.test.bind(Ds);
function Ws(e) {
  return typeof e == 'string';
}
function _i(e) {
  return e === 'text' || e === 'link';
}
function em(e, t) {
  let n = !1;
  const r = [];
  return (
    Y.Children.forEach(e, (o) => {
      const i = typeof o,
        a = i === 'string' || i === 'number';
      if (n && a) {
        const l = r.length - 1,
          c = r[l];
        r[l] = `${c}${o}`;
      } else r.push(o);
      n = a;
    }),
    Y.Children.map(r, (o) =>
      (function (i, a) {
        if (i == null) return;
        const l = a ? ' ' : '';
        return typeof i != 'string' &&
          typeof i != 'number' &&
          Ws(i.type) &&
          Ca(i.props.children)
          ? $n(i, { children: i.props.children.split('').join(l) })
          : Ws(i)
          ? Ca(i)
            ? Y.createElement('span', null, i.split('').join(l))
            : Y.createElement('span', null, i)
          : Au(i)
          ? Y.createElement('span', null, i)
          : i;
      })(o, t),
    )
  );
}
const tm = s.forwardRef((e, t) => {
    const { className: n, style: r, children: o, prefixCls: i } = e,
      a = Q(`${i}-icon`, n);
    return Y.createElement('span', { ref: t, className: a, style: r }, o);
  }),
  Lu = tm,
  Vs = s.forwardRef((e, t) => {
    let { prefixCls: n, className: r, style: o, iconClassName: i } = e;
    const a = Q(`${n}-loading-icon`, r);
    return Y.createElement(
      Lu,
      { prefixCls: n, className: a, style: o, ref: t },
      Y.createElement(Ru, { className: i }),
    );
  }),
  zi = () => ({ width: 0, opacity: 0, transform: 'scale(0)' }),
  Li = (e) => ({ width: e.scrollWidth, opacity: 1, transform: 'scale(1)' }),
  nm = (e) => {
    const {
        prefixCls: t,
        loading: n,
        existIcon: r,
        className: o,
        style: i,
      } = e,
      a = !!n;
    return r
      ? Y.createElement(Vs, { prefixCls: t, className: o, style: i })
      : Y.createElement(
          nr,
          {
            visible: a,
            motionName: `${t}-loading-icon-motion`,
            removeOnLeave: !0,
            onAppearStart: zi,
            onAppearActive: Li,
            onEnterStart: zi,
            onEnterActive: Li,
            onLeaveStart: Li,
            onLeaveActive: zi,
          },
          (l, c) => {
            let { className: u, style: d } = l;
            return Y.createElement(Vs, {
              prefixCls: t,
              className: o,
              style: Object.assign(Object.assign({}, i), d),
              ref: c,
              iconClassName: u,
            });
          },
        );
  },
  qs = (e, t) => ({
    [`> span, > ${e}`]: {
      '&:not(:last-child)': {
        [`&, & > ${e}`]: { '&:not(:disabled)': { borderInlineEndColor: t } },
      },
      '&:not(:first-child)': {
        [`&, & > ${e}`]: { '&:not(:disabled)': { borderInlineStartColor: t } },
      },
    },
  }),
  rm = (e) => {
    const {
      componentCls: t,
      fontSize: n,
      lineWidth: r,
      groupBorderColor: o,
      colorErrorHover: i,
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
              marginInlineStart: -r,
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
          [`${t}-icon-only`]: { fontSize: n },
        },
        qs(`${t}-primary`, o),
        qs(`${t}-danger`, i),
      ],
    };
  },
  om = (e) => {
    const { componentCls: t, iconCls: n, fontWeight: r } = e;
    return {
      [t]: {
        outline: 'none',
        position: 'relative',
        display: 'inline-block',
        fontWeight: r,
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
        [`> ${n} + span, > span + ${n}`]: { marginInlineStart: e.marginXS },
        [`&:not(${t}-icon-only) > ${t}-icon`]: {
          [`&${t}-loading-icon, &:not(:last-child)`]: {
            marginInlineEnd: e.marginXS,
          },
        },
        '> a': { color: 'currentColor' },
        '&:not(:disabled)': Object.assign({}, tg(e)),
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
                height: `calc(100% + ${2 * e.lineWidth}px)`,
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
                  width: `calc(100% + ${2 * e.lineWidth}px)`,
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
  Vt = (e, t, n) => ({
    [`&:not(:disabled):not(${e}-disabled)`]: { '&:hover': t, '&:active': n },
  }),
  im = (e) => ({
    minWidth: e.controlHeight,
    paddingInlineStart: 0,
    paddingInlineEnd: 0,
    borderRadius: '50%',
  }),
  am = (e) => ({
    borderRadius: e.controlHeight,
    paddingInlineStart: e.controlHeight / 2,
    paddingInlineEnd: e.controlHeight / 2,
  }),
  lm = (e) => ({
    cursor: 'not-allowed',
    borderColor: e.borderColorDisabled,
    color: e.colorTextDisabled,
    backgroundColor: e.colorBgContainerDisabled,
    boxShadow: 'none',
  }),
  Hr = (e, t, n, r, o, i, a, l) => ({
    [`&${e}-background-ghost`]: Object.assign(
      Object.assign(
        {
          color: n || void 0,
          backgroundColor: t,
          borderColor: r || void 0,
          boxShadow: 'none',
        },
        Vt(
          e,
          Object.assign({ backgroundColor: t }, a),
          Object.assign({ backgroundColor: t }, l),
        ),
      ),
      {
        '&:disabled': {
          cursor: 'not-allowed',
          color: o || void 0,
          borderColor: i || void 0,
        },
      },
    ),
  }),
  Ka = (e) => ({
    [`&:disabled, &${e.componentCls}-disabled`]: Object.assign({}, lm(e)),
  }),
  Hu = (e) => Object.assign({}, Ka(e)),
  Qo = (e) => ({
    [`&:disabled, &${e.componentCls}-disabled`]: {
      cursor: 'not-allowed',
      color: e.colorTextDisabled,
    },
  }),
  Bu = (e) =>
    Object.assign(
      Object.assign(
        Object.assign(
          Object.assign(Object.assign({}, Hu(e)), {
            backgroundColor: e.defaultBg,
            borderColor: e.defaultBorderColor,
            color: e.defaultColor,
            boxShadow: e.defaultShadow,
          }),
          Vt(
            e.componentCls,
            { color: e.colorPrimaryHover, borderColor: e.colorPrimaryHover },
            { color: e.colorPrimaryActive, borderColor: e.colorPrimaryActive },
          ),
        ),
        Hr(
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
              Vt(
                e.componentCls,
                {
                  color: e.colorErrorHover,
                  borderColor: e.colorErrorBorderHover,
                },
                { color: e.colorErrorActive, borderColor: e.colorErrorActive },
              ),
            ),
            Hr(
              e.componentCls,
              e.ghostBg,
              e.colorError,
              e.colorError,
              e.colorTextDisabled,
              e.colorBorder,
            ),
          ),
          Ka(e),
        ),
      },
    ),
  sm = (e) =>
    Object.assign(
      Object.assign(
        Object.assign(
          Object.assign(Object.assign({}, Hu(e)), {
            color: e.primaryColor,
            backgroundColor: e.colorPrimary,
            boxShadow: e.primaryShadow,
          }),
          Vt(
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
        Hr(
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
              Vt(
                e.componentCls,
                { backgroundColor: e.colorErrorHover },
                { backgroundColor: e.colorErrorActive },
              ),
            ),
            Hr(
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
          Ka(e),
        ),
      },
    ),
  cm = (e) =>
    Object.assign(Object.assign({}, Bu(e)), { borderStyle: 'dashed' }),
  um = (e) =>
    Object.assign(
      Object.assign(
        Object.assign(
          { color: e.colorLink },
          Vt(
            e.componentCls,
            { color: e.colorLinkHover, backgroundColor: e.linkHoverBg },
            { color: e.colorLinkActive },
          ),
        ),
        Qo(e),
      ),
      {
        [`&${e.componentCls}-dangerous`]: Object.assign(
          Object.assign(
            { color: e.colorError },
            Vt(
              e.componentCls,
              { color: e.colorErrorHover },
              { color: e.colorErrorActive },
            ),
          ),
          Qo(e),
        ),
      },
    ),
  dm = (e) =>
    Object.assign(
      Object.assign(
        Object.assign(
          {},
          Vt(
            e.componentCls,
            { color: e.colorText, backgroundColor: e.textHoverBg },
            { color: e.colorText, backgroundColor: e.colorBgTextActive },
          ),
        ),
        Qo(e),
      ),
      {
        [`&${e.componentCls}-dangerous`]: Object.assign(
          Object.assign({ color: e.colorError }, Qo(e)),
          Vt(
            e.componentCls,
            { color: e.colorErrorHover, backgroundColor: e.colorErrorBg },
            { color: e.colorErrorHover, backgroundColor: e.colorErrorBg },
          ),
        ),
      },
    ),
  fm = (e) => {
    const { componentCls: t } = e;
    return {
      [`${t}-default`]: Bu(e),
      [`${t}-primary`]: sm(e),
      [`${t}-dashed`]: cm(e),
      [`${t}-link`]: um(e),
      [`${t}-text`]: dm(e),
      [`${t}-ghost`]: Hr(
        e.componentCls,
        e.ghostBg,
        e.colorBgContainer,
        e.colorBgContainer,
        e.colorTextDisabled,
        e.colorBorder,
      ),
    };
  },
  Qa = function (e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : '';
    const {
      componentCls: n,
      controlHeight: r,
      fontSize: o,
      lineHeight: i,
      lineWidth: a,
      borderRadius: l,
      buttonPaddingHorizontal: c,
      iconCls: u,
    } = e;
    return [
      {
        [`${n}${t}`]: {
          fontSize: o,
          height: r,
          padding: `${Math.max(0, (r - o * i) / 2 - a)}px ${c}px`,
          borderRadius: l,
          [`&${`${n}-icon-only`}`]: {
            width: r,
            paddingInlineStart: 0,
            paddingInlineEnd: 0,
            [`&${n}-round`]: { width: 'auto' },
            [u]: { fontSize: e.buttonIconOnlyFontSize },
          },
          [`&${n}-loading`]: { opacity: e.opacityLoading, cursor: 'default' },
          [`${n}-loading-icon`]: {
            transition: `width ${e.motionDurationSlow} ${e.motionEaseInOut}, opacity ${e.motionDurationSlow} ${e.motionEaseInOut}`,
          },
        },
      },
      { [`${n}${n}-circle${t}`]: im(e) },
      { [`${n}${n}-round${t}`]: am(e) },
    ];
  },
  pm = (e) => Qa(Ge(e, { fontSize: e.contentFontSize })),
  gm = (e) => {
    const t = Ge(e, {
      controlHeight: e.controlHeightSM,
      fontSize: e.contentFontSizeSM,
      padding: e.paddingXS,
      buttonPaddingHorizontal: e.paddingInlineSM,
      borderRadius: e.borderRadiusSM,
      buttonIconOnlyFontSize: e.onlyIconSizeSM,
    });
    return Qa(t, `${e.componentCls}-sm`);
  },
  mm = (e) => {
    const t = Ge(e, {
      controlHeight: e.controlHeightLG,
      fontSize: e.contentFontSizeLG,
      buttonPaddingHorizontal: e.paddingInlineLG,
      borderRadius: e.borderRadiusLG,
      buttonIconOnlyFontSize: e.onlyIconSizeLG,
    });
    return Qa(t, `${e.componentCls}-lg`);
  },
  hm = (e) => {
    const { componentCls: t } = e;
    return { [t]: { [`&${t}-block`]: { width: '100%' } } };
  },
  Du = (e) => {
    const { paddingInline: t, onlyIconSize: n } = e;
    return Ge(e, { buttonPaddingHorizontal: t, buttonIconOnlyFontSize: n });
  },
  Wu = (e) => ({
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
  vm = tn(
    'Button',
    (e) => {
      const t = Du(e);
      return [om(t), gm(t), pm(t), mm(t), hm(t), fm(t), rm(t)];
    },
    Wu,
  );
function bm(e, t, n) {
  const { focusElCls: r, focus: o, borderElCls: i } = n,
    a = i ? '> *' : '',
    l = ['hover', o ? 'focus' : null, 'active']
      .filter(Boolean)
      .map((c) => `&:${c} ${a}`)
      .join(',');
  return {
    [`&-item:not(${t}-last-item)`]: { marginInlineEnd: -e.lineWidth },
    '&-item': Object.assign(
      Object.assign(
        { [l]: { zIndex: 2 } },
        r ? { [`&${r}`]: { zIndex: 2 } } : {},
      ),
      { [`&[disabled] ${a}`]: { zIndex: 0 } },
    ),
  };
}
function ym(e, t, n) {
  const { borderElCls: r } = n,
    o = r ? `> ${r}` : '';
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
function Vu(e) {
  let t =
    arguments.length > 1 && arguments[1] !== void 0
      ? arguments[1]
      : { focus: !0 };
  const { componentCls: n } = e,
    r = `${n}-compact`;
  return { [r]: Object.assign(Object.assign({}, bm(e, r, t)), ym(n, r, t)) };
}
function xm(e, t) {
  return {
    [`&-item:not(${t}-last-item)`]: { marginBottom: -e.lineWidth },
    '&-item': {
      '&:hover,&:focus,&:active': { zIndex: 2 },
      '&[disabled]': { zIndex: 0 },
    },
  };
}
function wm(e) {
  const t = `${e.componentCls}-compact-vertical`;
  return {
    [t]: Object.assign(
      Object.assign({}, xm(e, t)),
      ((n = e.componentCls),
      (r = t),
      {
        [`&-item:not(${r}-first-item):not(${r}-last-item)`]: {
          borderRadius: 0,
        },
        [`&-item${r}-first-item:not(${r}-last-item)`]: {
          [`&, &${n}-sm, &${n}-lg`]: {
            borderEndEndRadius: 0,
            borderEndStartRadius: 0,
          },
        },
        [`&-item${r}-last-item:not(${r}-first-item)`]: {
          [`&, &${n}-sm, &${n}-lg`]: {
            borderStartStartRadius: 0,
            borderStartEndRadius: 0,
          },
        },
      }),
    ),
  };
  var n, r;
}
const Cm = vu(
  ['Button', 'compact'],
  (e) => {
    const t = Du(e);
    return [Vu(t), wm(t)];
  },
  Wu,
);
var $m =
  (globalThis && globalThis.__rest) ||
  function (e, t) {
    var n = {};
    for (var r in e)
      Object.prototype.hasOwnProperty.call(e, r) &&
        t.indexOf(r) < 0 &&
        (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == 'function') {
      var o = 0;
      for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
        t.indexOf(r[o]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
          (n[r[o]] = e[r[o]]);
    }
    return n;
  };
const Em = (e, t) => {
    var n, r;
    const {
        loading: o = !1,
        prefixCls: i,
        type: a = 'default',
        danger: l,
        shape: c = 'default',
        size: u,
        styles: d,
        disabled: f,
        className: g,
        rootClassName: b,
        children: m,
        icon: p,
        ghost: h = !1,
        block: y = !1,
        htmlType: v = 'button',
        classNames: w,
        style: S = {},
      } = e,
      k = $m(e, [
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
        getPrefixCls: $,
        autoInsertSpaceInButton: x,
        direction: O,
        button: F,
      } = s.useContext(Re),
      P = $('btn', i),
      [N, I] = vm(P),
      T = s.useContext(Gr),
      L = f ?? T,
      _ = s.useContext(zu),
      E = s.useMemo(
        () =>
          (function (ie) {
            if (typeof ie == 'object' && ie) {
              const Ce = ie == null ? void 0 : ie.delay;
              return {
                loading: !1,
                delay: Number.isNaN(Ce) || typeof Ce != 'number' ? 0 : Ce,
              };
            }
            return { loading: !!ie, delay: 0 };
          })(o),
        [o],
      ),
      [C, j] = s.useState(E.loading),
      [M, R] = s.useState(!1),
      B = Xt(t, s.createRef()),
      D = s.Children.count(m) === 1 && !p && !_i(a);
    s.useEffect(() => {
      let ie = null;
      return (
        E.delay > 0
          ? (ie = setTimeout(() => {
              (ie = null), j(!0);
            }, E.delay))
          : j(E.loading),
        function () {
          ie && (clearTimeout(ie), (ie = null));
        }
      );
    }, [E]),
      s.useEffect(() => {
        if (!B || !B.current || x === !1) return;
        const ie = B.current.textContent;
        D && Ca(ie) ? M || R(!0) : M && R(!1);
      }, [B]);
    const H = (ie) => {
        const { onClick: Ce } = e;
        C || L ? ie.preventDefault() : Ce == null || Ce(ie);
      },
      W = x !== !1,
      { compactSize: X, compactItemClassnames: q } = Ya(P, O),
      Z = { large: 'lg', small: 'sm', middle: void 0 },
      ce = Yr((ie) => {
        var Ce, Ye;
        return (Ye = (Ce = u ?? X) !== null && Ce !== void 0 ? Ce : _) !==
          null && Ye !== void 0
          ? Ye
          : ie;
      }),
      ge = (ce && Z[ce]) || '',
      Oe = C ? 'loading' : p,
      re = qr(k, ['navigate']),
      U = Q(
        P,
        I,
        {
          [`${P}-${c}`]: c !== 'default' && c,
          [`${P}-${a}`]: a,
          [`${P}-${ge}`]: ge,
          [`${P}-icon-only`]: !m && m !== 0 && !!Oe,
          [`${P}-background-ghost`]: h && !_i(a),
          [`${P}-loading`]: C,
          [`${P}-two-chinese-chars`]: M && W && !C,
          [`${P}-block`]: y,
          [`${P}-dangerous`]: !!l,
          [`${P}-rtl`]: O === 'rtl',
        },
        q,
        g,
        b,
        F == null ? void 0 : F.className,
      ),
      ee = Object.assign(Object.assign({}, F == null ? void 0 : F.style), S),
      be = Q(
        w == null ? void 0 : w.icon,
        (n = F == null ? void 0 : F.classNames) === null || n === void 0
          ? void 0
          : n.icon,
      ),
      Fe = Object.assign(
        Object.assign({}, (d == null ? void 0 : d.icon) || {}),
        ((r = F == null ? void 0 : F.styles) === null || r === void 0
          ? void 0
          : r.icon) || {},
      ),
      De =
        p && !C
          ? Y.createElement(Lu, { prefixCls: P, className: be, style: Fe }, p)
          : Y.createElement(nm, { existIcon: !!p, prefixCls: P, loading: !!C }),
      we = m || m === 0 ? em(m, D && W) : null;
    if (re.href !== void 0)
      return N(
        Y.createElement(
          'a',
          Object.assign({}, re, {
            className: Q(U, { [`${P}-disabled`]: L }),
            style: ee,
            onClick: H,
            ref: B,
          }),
          De,
          we,
        ),
      );
    let $e = Y.createElement(
      'button',
      Object.assign({}, k, {
        type: v,
        className: U,
        style: ee,
        onClick: H,
        disabled: L,
        ref: B,
      }),
      De,
      we,
      q && Y.createElement(Cm, { key: 'compact', prefixCls: P }),
    );
    return (
      _i(a) ||
        ($e = Y.createElement(Qg, { component: 'Button', disabled: !!C }, $e)),
      N($e)
    );
  },
  $a = s.forwardRef(Em);
($a.Group = Jg), ($a.__ANT_BUTTON = !0);
const Sm = $a;
var Hi,
  Xs = s.createContext(null),
  Gs = [];
function Us(e) {
  var t = e.match(/^(.*)px$/),
    n = Number(t == null ? void 0 : t[1]);
  return Number.isNaN(n)
    ? (function (r) {
        if (typeof document > 'u') return 0;
        if (r || Hi === void 0) {
          var o = document.createElement('div');
          (o.style.width = '100%'), (o.style.height = '200px');
          var i = document.createElement('div'),
            a = i.style;
          (a.position = 'absolute'),
            (a.top = '0'),
            (a.left = '0'),
            (a.pointerEvents = 'none'),
            (a.visibility = 'hidden'),
            (a.width = '200px'),
            (a.height = '150px'),
            (a.overflow = 'hidden'),
            i.appendChild(o),
            document.body.appendChild(i);
          var l = o.offsetWidth;
          i.style.overflow = 'scroll';
          var c = o.offsetWidth;
          l === c && (c = i.clientWidth),
            document.body.removeChild(i),
            (Hi = l - c);
        }
        return Hi;
      })()
    : n;
}
var Om = 'rc-util-locker-'.concat(Date.now()),
  Ys = 0;
function km(e) {
  var t = !!e,
    n = G(
      s.useState(function () {
        return (Ys += 1), ''.concat(Om, '_').concat(Ys);
      }),
      1,
    )[0];
  He(
    function () {
      if (t) {
        var r = (function (i) {
            if (!(typeof document < 'u' && i && i instanceof Element))
              return { width: 0, height: 0 };
            var a = getComputedStyle(i, '::-webkit-scrollbar'),
              l = a.width,
              c = a.height;
            return { width: Us(l), height: Us(c) };
          })(document.body).width,
          o =
            document.body.scrollHeight >
              (window.innerHeight || document.documentElement.clientHeight) &&
            window.innerWidth > document.body.offsetWidth;
        Zn(
          `
html body {
  overflow-y: hidden;
  `.concat(
            o ? 'width: calc(100% - '.concat(r, 'px);') : '',
            `
}`,
          ),
          n,
        );
      } else Go(n);
      return function () {
        Go(n);
      };
    },
    [t, n],
  );
}
var Ks = !1,
  Qs = function (e) {
    return (
      e !== !1 &&
      (Qe() && e
        ? typeof e == 'string'
          ? document.querySelector(e)
          : typeof e == 'function'
          ? e()
          : e
        : null)
    );
  },
  Zs = s.forwardRef(function (e, t) {
    var n = e.open,
      r = e.autoLock,
      o = e.getContainer;
    e.debug;
    var i = e.autoDestroy,
      a = i === void 0 || i,
      l = e.children,
      c = G(s.useState(n), 2),
      u = c[0],
      d = c[1],
      f = u || n;
    s.useEffect(
      function () {
        (a || n) && d(n);
      },
      [n, a],
    );
    var g = G(
        s.useState(function () {
          return Qs(o);
        }),
        2,
      ),
      b = g[0],
      m = g[1];
    s.useEffect(function () {
      var F = Qs(o);
      m(F ?? null);
    });
    var p = (function (F, P) {
        var N = G(
            s.useState(function () {
              return Qe() ? document.createElement('div') : null;
            }),
            1,
          )[0],
          I = s.useRef(!1),
          T = s.useContext(Xs),
          L = G(s.useState(Gs), 2),
          _ = L[0],
          E = L[1],
          C =
            T ||
            (I.current
              ? void 0
              : function (R) {
                  E(function (B) {
                    return [R].concat(K(B));
                  });
                });
        function j() {
          N.parentElement || document.body.appendChild(N), (I.current = !0);
        }
        function M() {
          var R;
          (R = N.parentElement) === null || R === void 0 || R.removeChild(N),
            (I.current = !1);
        }
        return (
          He(
            function () {
              return F ? (T ? T(j) : j()) : M(), M;
            },
            [F],
          ),
          He(
            function () {
              _.length &&
                (_.forEach(function (R) {
                  return R();
                }),
                E(Gs));
            },
            [_],
          ),
          [N, C]
        );
      })(f && !b),
      h = G(p, 2),
      y = h[0],
      v = h[1],
      w = b ?? y;
    km(r && n && Qe() && (w === y || w === document.body));
    var S = null;
    l && tr(l) && t && (S = l.ref);
    var k = Rc(S, t);
    if (!f || !Qe() || b === void 0) return null;
    var $,
      x = w === !1 || (typeof $ == 'boolean' && (Ks = $), Ks),
      O = l;
    return (
      t && (O = s.cloneElement(l, { ref: k })),
      s.createElement(Xs.Provider, { value: v }, x ? O : kc.createPortal(O, w))
    );
  }),
  Js = 0;
function jm(e) {
  var t = G(s.useState('ssr-id'), 2),
    n = t[0],
    r = t[1],
    o = z({}, Jo).useId,
    i = o == null ? void 0 : o();
  return (
    s.useEffect(function () {
      if (!o) {
        var a = Js;
        (Js += 1), r('rc_unique_'.concat(a));
      }
    }, []),
    e || i || n
  );
}
var vn = 'RC_FORM_INTERNAL_HOOKS',
  ve = function () {
    at(
      !1,
      'Can not find FormContext. Please make sure you wrap Field under Form.',
    );
  },
  En = s.createContext({
    getFieldValue: ve,
    getFieldsValue: ve,
    getFieldError: ve,
    getFieldWarning: ve,
    getFieldsError: ve,
    isFieldsTouched: ve,
    isFieldTouched: ve,
    isFieldValidating: ve,
    isFieldsValidating: ve,
    resetFields: ve,
    setFields: ve,
    setFieldValue: ve,
    setFieldsValue: ve,
    validateFields: ve,
    submit: ve,
    getInternalHooks: function () {
      return (
        ve(),
        {
          dispatch: ve,
          initEntityValue: ve,
          registerField: ve,
          useSubscribe: ve,
          setInitialValues: ve,
          destroyForm: ve,
          setCallbacks: ve,
          registerWatch: ve,
          getFields: ve,
          setValidateMessages: ve,
          setPreserve: ve,
          getInitialValue: ve,
        }
      );
    },
  }),
  Br = s.createContext(null);
function Ea(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function bn() {
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
function Sa(e) {
  return (
    (Sa = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (t) {
          return t.__proto__ || Object.getPrototypeOf(t);
        }),
    Sa(e)
  );
}
function Dr(e, t) {
  return (
    (Dr = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, r) {
          return (n.__proto__ = r), n;
        }),
    Dr(e, t)
  );
}
function Oa(e, t, n) {
  return (
    (Oa = (function () {
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
    })()
      ? Reflect.construct.bind()
      : function (r, o, i) {
          var a = [null];
          a.push.apply(a, o);
          var l = new (Function.bind.apply(r, a))();
          return i && Dr(l, i.prototype), l;
        }),
    Oa.apply(null, arguments)
  );
}
function ka(e) {
  var t = typeof Map == 'function' ? new Map() : void 0;
  return (
    (ka = function (n) {
      if (
        n === null ||
        ((r = n), Function.toString.call(r).indexOf('[native code]') === -1)
      )
        return n;
      var r;
      if (typeof n != 'function')
        throw new TypeError(
          'Super expression must either be null or a function',
        );
      if (t !== void 0) {
        if (t.has(n)) return t.get(n);
        t.set(n, o);
      }
      function o() {
        return Oa(n, arguments, Sa(this).constructor);
      }
      return (
        (o.prototype = Object.create(n.prototype, {
          constructor: {
            value: o,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
        Dr(o, n)
      );
    }),
    ka(e)
  );
}
var Pm = /%[sdj%]/g,
  Fm = function () {};
function ja(e) {
  if (!e || !e.length) return null;
  var t = {};
  return (
    e.forEach(function (n) {
      var r = n.field;
      (t[r] = t[r] || []), t[r].push(n);
    }),
    t
  );
}
function ot(e) {
  for (
    var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
    r < t;
    r++
  )
    n[r - 1] = arguments[r];
  var o = 0,
    i = n.length;
  if (typeof e == 'function') return e.apply(null, n);
  if (typeof e == 'string') {
    var a = e.replace(Pm, function (l) {
      if (l === '%%') return '%';
      if (o >= i) return l;
      switch (l) {
        case '%s':
          return String(n[o++]);
        case '%d':
          return Number(n[o++]);
        case '%j':
          try {
            return JSON.stringify(n[o++]);
          } catch {
            return '[Circular]';
          }
          break;
        default:
          return l;
      }
    });
    return a;
  }
  return e;
}
function Te(e, t) {
  return (
    e == null ||
    !(t !== 'array' || !Array.isArray(e) || e.length) ||
    !(
      !(function (n) {
        return (
          n === 'string' ||
          n === 'url' ||
          n === 'hex' ||
          n === 'email' ||
          n === 'date' ||
          n === 'pattern'
        );
      })(t) ||
      typeof e != 'string' ||
      e
    )
  );
}
function ec(e, t, n) {
  var r = 0,
    o = e.length;
  (function i(a) {
    if (a && a.length) n(a);
    else {
      var l = r;
      (r += 1), l < o ? t(e[l], i) : n([]);
    }
  })([]);
}
typeof process < 'u' && process.env;
var tc = (function (e) {
  var t, n;
  function r(o, i) {
    var a;
    return (
      ((a = e.call(this, 'Async Validation Error') || this).errors = o),
      (a.fields = i),
      a
    );
  }
  return (
    (n = e),
    ((t = r).prototype = Object.create(n.prototype)),
    (t.prototype.constructor = t),
    Dr(t, n),
    r
  );
})(ka(Error));
function Mm(e, t, n, r, o) {
  if (t.first) {
    var i = new Promise(function (g, b) {
      var m = (function (p) {
        var h = [];
        return (
          Object.keys(p).forEach(function (y) {
            h.push.apply(h, p[y] || []);
          }),
          h
        );
      })(e);
      ec(m, n, function (p) {
        return r(p), p.length ? b(new tc(p, ja(p))) : g(o);
      });
    });
    return (
      i.catch(function (g) {
        return g;
      }),
      i
    );
  }
  var a = t.firstFields === !0 ? Object.keys(e) : t.firstFields || [],
    l = Object.keys(e),
    c = l.length,
    u = 0,
    d = [],
    f = new Promise(function (g, b) {
      var m = function (p) {
        if ((d.push.apply(d, p), ++u === c))
          return r(d), d.length ? b(new tc(d, ja(d))) : g(o);
      };
      l.length || (r(d), g(o)),
        l.forEach(function (p) {
          var h = e[p];
          a.indexOf(p) !== -1
            ? ec(h, n, m)
            : (function (y, v, w) {
                var S = [],
                  k = 0,
                  $ = y.length;
                function x(O) {
                  S.push.apply(S, O || []), ++k === $ && w(S);
                }
                y.forEach(function (O) {
                  v(O, x);
                });
              })(h, n, m);
        });
    });
  return (
    f.catch(function (g) {
      return g;
    }),
    f
  );
}
function nc(e, t) {
  return function (n) {
    var r, o;
    return (
      (r = e.fullFields
        ? (function (i, a) {
            for (var l = i, c = 0; c < a.length; c++) {
              if (l == null) return l;
              l = l[a[c]];
            }
            return l;
          })(t, e.fullFields)
        : t[n.field || e.fullField]),
      (o = n) && o.message !== void 0
        ? ((n.field = n.field || e.fullField), (n.fieldValue = r), n)
        : {
            message: typeof n == 'function' ? n() : n,
            fieldValue: r,
            field: n.field || e.fullField,
          }
    );
  };
}
function rc(e, t) {
  if (t) {
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = t[n];
        typeof r == 'object' && typeof e[n] == 'object'
          ? (e[n] = bn({}, e[n], r))
          : (e[n] = r);
      }
  }
  return e;
}
var Bi,
  oc = function (e, t, n, r, o, i) {
    !e.required ||
      (n.hasOwnProperty(e.field) && !Te(t, i || e.type)) ||
      r.push(ot(o.messages.required, e.fullField));
  },
  Am =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
  Rm = /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i,
  jr = {
    integer: function (e) {
      return jr.number(e) && parseInt(e, 10) === e;
    },
    float: function (e) {
      return jr.number(e) && !jr.integer(e);
    },
    array: function (e) {
      return Array.isArray(e);
    },
    regexp: function (e) {
      if (e instanceof RegExp) return !0;
      try {
        return !!new RegExp(e);
      } catch {
        return !1;
      }
    },
    date: function (e) {
      return (
        typeof e.getTime == 'function' &&
        typeof e.getMonth == 'function' &&
        typeof e.getYear == 'function' &&
        !isNaN(e.getTime())
      );
    },
    number: function (e) {
      return !isNaN(e) && typeof e == 'number';
    },
    object: function (e) {
      return typeof e == 'object' && !jr.array(e);
    },
    method: function (e) {
      return typeof e == 'function';
    },
    email: function (e) {
      return typeof e == 'string' && e.length <= 320 && !!e.match(Am);
    },
    url: function (e) {
      return (
        typeof e == 'string' &&
        e.length <= 2048 &&
        !!e.match(
          (function () {
            if (Bi) return Bi;
            var t = '[a-fA-F\\d:]',
              n = function (g) {
                return g && g.includeBoundaries
                  ? '(?:(?<=\\s|^)(?=' + t + ')|(?<=' + t + ')(?=\\s|$))'
                  : '';
              },
              r =
                '(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}',
              o = '[a-fA-F\\d]{1,4}',
              i = (
                `
(?:
(?:` +
                o +
                ':){7}(?:' +
                o +
                `|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8
(?:` +
                o +
                ':){6}(?:' +
                r +
                '|:' +
                o +
                `|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4
(?:` +
                o +
                ':){5}(?::' +
                r +
                '|(?::' +
                o +
                `){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4
(?:` +
                o +
                ':){4}(?:(?::' +
                o +
                '){0,1}:' +
                r +
                '|(?::' +
                o +
                `){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4
(?:` +
                o +
                ':){3}(?:(?::' +
                o +
                '){0,2}:' +
                r +
                '|(?::' +
                o +
                `){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4
(?:` +
                o +
                ':){2}(?:(?::' +
                o +
                '){0,3}:' +
                r +
                '|(?::' +
                o +
                `){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4
(?:` +
                o +
                ':){1}(?:(?::' +
                o +
                '){0,4}:' +
                r +
                '|(?::' +
                o +
                `){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4
(?::(?:(?::` +
                o +
                '){0,5}:' +
                r +
                '|(?::' +
                o +
                `){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4
)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1
`
              )
                .replace(/\s*\/\/.*$/gm, '')
                .replace(/\n/g, '')
                .trim(),
              a = new RegExp('(?:^' + r + '$)|(?:^' + i + '$)'),
              l = new RegExp('^' + r + '$'),
              c = new RegExp('^' + i + '$'),
              u = function (g) {
                return g && g.exact
                  ? a
                  : new RegExp(
                      '(?:' + n(g) + r + n(g) + ')|(?:' + n(g) + i + n(g) + ')',
                      'g',
                    );
              };
            (u.v4 = function (g) {
              return g && g.exact ? l : new RegExp('' + n(g) + r + n(g), 'g');
            }),
              (u.v6 = function (g) {
                return g && g.exact ? c : new RegExp('' + n(g) + i + n(g), 'g');
              });
            var d = u.v4().source,
              f = u.v6().source;
            return (Bi = new RegExp(
              '(?:^(?:(?:(?:[a-z]+:)?//)|www\\.)(?:\\S+(?::\\S*)?@)?(?:localhost|' +
                d +
                '|' +
                f +
                '|(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))(?::\\d{2,5})?(?:[/?#][^\\s"]*)?$)',
              'i',
            ));
          })(),
        )
      );
    },
    hex: function (e) {
      return typeof e == 'string' && !!e.match(Rm);
    },
  },
  zn = 'enum',
  se = {
    required: oc,
    whitespace: function (e, t, n, r, o) {
      (/^\s+$/.test(t) || t === '') &&
        r.push(ot(o.messages.whitespace, e.fullField));
    },
    type: function (e, t, n, r, o) {
      if (e.required && t === void 0) oc(e, t, n, r, o);
      else {
        var i = e.type;
        [
          'integer',
          'float',
          'array',
          'regexp',
          'object',
          'method',
          'email',
          'number',
          'date',
          'url',
          'hex',
        ].indexOf(i) > -1
          ? jr[i](t) || r.push(ot(o.messages.types[i], e.fullField, e.type))
          : i &&
            typeof t !== e.type &&
            r.push(ot(o.messages.types[i], e.fullField, e.type));
      }
    },
    range: function (e, t, n, r, o) {
      var i = typeof e.len == 'number',
        a = typeof e.min == 'number',
        l = typeof e.max == 'number',
        c = t,
        u = null,
        d = typeof t == 'number',
        f = typeof t == 'string',
        g = Array.isArray(t);
      if ((d ? (u = 'number') : f ? (u = 'string') : g && (u = 'array'), !u))
        return !1;
      g && (c = t.length),
        f && (c = t.replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, '_').length),
        i
          ? c !== e.len && r.push(ot(o.messages[u].len, e.fullField, e.len))
          : a && !l && c < e.min
          ? r.push(ot(o.messages[u].min, e.fullField, e.min))
          : l && !a && c > e.max
          ? r.push(ot(o.messages[u].max, e.fullField, e.max))
          : a &&
            l &&
            (c < e.min || c > e.max) &&
            r.push(ot(o.messages[u].range, e.fullField, e.min, e.max));
    },
    enum: function (e, t, n, r, o) {
      (e[zn] = Array.isArray(e[zn]) ? e[zn] : []),
        e[zn].indexOf(t) === -1 &&
          r.push(ot(o.messages[zn], e.fullField, e[zn].join(', ')));
    },
    pattern: function (e, t, n, r, o) {
      e.pattern &&
        (e.pattern instanceof RegExp
          ? ((e.pattern.lastIndex = 0),
            e.pattern.test(t) ||
              r.push(
                ot(o.messages.pattern.mismatch, e.fullField, t, e.pattern),
              ))
          : typeof e.pattern == 'string' &&
            (new RegExp(e.pattern).test(t) ||
              r.push(
                ot(o.messages.pattern.mismatch, e.fullField, t, e.pattern),
              )));
    },
  },
  Di = function (e, t, n, r, o) {
    var i = e.type,
      a = [];
    if (e.required || (!e.required && r.hasOwnProperty(e.field))) {
      if (Te(t, i) && !e.required) return n();
      se.required(e, t, r, a, o, i), Te(t, i) || se.type(e, t, r, a, o);
    }
    n(a);
  },
  Mr = {
    string: function (e, t, n, r, o) {
      var i = [];
      if (e.required || (!e.required && r.hasOwnProperty(e.field))) {
        if (Te(t, 'string') && !e.required) return n();
        se.required(e, t, r, i, o, 'string'),
          Te(t, 'string') ||
            (se.type(e, t, r, i, o),
            se.range(e, t, r, i, o),
            se.pattern(e, t, r, i, o),
            e.whitespace === !0 && se.whitespace(e, t, r, i, o));
      }
      n(i);
    },
    method: function (e, t, n, r, o) {
      var i = [];
      if (e.required || (!e.required && r.hasOwnProperty(e.field))) {
        if (Te(t) && !e.required) return n();
        se.required(e, t, r, i, o), t !== void 0 && se.type(e, t, r, i, o);
      }
      n(i);
    },
    number: function (e, t, n, r, o) {
      var i = [];
      if (e.required || (!e.required && r.hasOwnProperty(e.field))) {
        if ((t === '' && (t = void 0), Te(t) && !e.required)) return n();
        se.required(e, t, r, i, o),
          t !== void 0 && (se.type(e, t, r, i, o), se.range(e, t, r, i, o));
      }
      n(i);
    },
    boolean: function (e, t, n, r, o) {
      var i = [];
      if (e.required || (!e.required && r.hasOwnProperty(e.field))) {
        if (Te(t) && !e.required) return n();
        se.required(e, t, r, i, o), t !== void 0 && se.type(e, t, r, i, o);
      }
      n(i);
    },
    regexp: function (e, t, n, r, o) {
      var i = [];
      if (e.required || (!e.required && r.hasOwnProperty(e.field))) {
        if (Te(t) && !e.required) return n();
        se.required(e, t, r, i, o), Te(t) || se.type(e, t, r, i, o);
      }
      n(i);
    },
    integer: function (e, t, n, r, o) {
      var i = [];
      if (e.required || (!e.required && r.hasOwnProperty(e.field))) {
        if (Te(t) && !e.required) return n();
        se.required(e, t, r, i, o),
          t !== void 0 && (se.type(e, t, r, i, o), se.range(e, t, r, i, o));
      }
      n(i);
    },
    float: function (e, t, n, r, o) {
      var i = [];
      if (e.required || (!e.required && r.hasOwnProperty(e.field))) {
        if (Te(t) && !e.required) return n();
        se.required(e, t, r, i, o),
          t !== void 0 && (se.type(e, t, r, i, o), se.range(e, t, r, i, o));
      }
      n(i);
    },
    array: function (e, t, n, r, o) {
      var i = [];
      if (e.required || (!e.required && r.hasOwnProperty(e.field))) {
        if (t == null && !e.required) return n();
        se.required(e, t, r, i, o, 'array'),
          t != null && (se.type(e, t, r, i, o), se.range(e, t, r, i, o));
      }
      n(i);
    },
    object: function (e, t, n, r, o) {
      var i = [];
      if (e.required || (!e.required && r.hasOwnProperty(e.field))) {
        if (Te(t) && !e.required) return n();
        se.required(e, t, r, i, o), t !== void 0 && se.type(e, t, r, i, o);
      }
      n(i);
    },
    enum: function (e, t, n, r, o) {
      var i = [];
      if (e.required || (!e.required && r.hasOwnProperty(e.field))) {
        if (Te(t) && !e.required) return n();
        se.required(e, t, r, i, o), t !== void 0 && se.enum(e, t, r, i, o);
      }
      n(i);
    },
    pattern: function (e, t, n, r, o) {
      var i = [];
      if (e.required || (!e.required && r.hasOwnProperty(e.field))) {
        if (Te(t, 'string') && !e.required) return n();
        se.required(e, t, r, i, o),
          Te(t, 'string') || se.pattern(e, t, r, i, o);
      }
      n(i);
    },
    date: function (e, t, n, r, o) {
      var i = [];
      if (e.required || (!e.required && r.hasOwnProperty(e.field))) {
        if (Te(t, 'date') && !e.required) return n();
        var a;
        se.required(e, t, r, i, o),
          !Te(t, 'date') &&
            ((a = t instanceof Date ? t : new Date(t)),
            se.type(e, a, r, i, o),
            a && se.range(e, a.getTime(), r, i, o));
      }
      n(i);
    },
    url: Di,
    hex: Di,
    email: Di,
    required: function (e, t, n, r, o) {
      var i = [],
        a = Array.isArray(t) ? 'array' : typeof t;
      se.required(e, t, r, i, o, a), n(i);
    },
    any: function (e, t, n, r, o) {
      var i = [];
      if (e.required || (!e.required && r.hasOwnProperty(e.field))) {
        if (Te(t) && !e.required) return n();
        se.required(e, t, r, i, o);
      }
      n(i);
    },
  };
function Pa() {
  return {
    default: 'Validation error on field %s',
    required: '%s is required',
    enum: '%s must be one of %s',
    whitespace: '%s cannot be empty',
    date: {
      format: '%s date %s is invalid for format %s',
      parse: '%s date could not be parsed, %s is invalid ',
      invalid: '%s date %s is invalid',
    },
    types: {
      string: '%s is not a %s',
      method: '%s is not a %s (function)',
      array: '%s is not an %s',
      object: '%s is not an %s',
      number: '%s is not a %s',
      date: '%s is not a %s',
      boolean: '%s is not a %s',
      integer: '%s is not an %s',
      float: '%s is not a %s',
      regexp: '%s is not a valid %s',
      email: '%s is not a valid %s',
      url: '%s is not a valid %s',
      hex: '%s is not a valid %s',
    },
    string: {
      len: '%s must be exactly %s characters',
      min: '%s must be at least %s characters',
      max: '%s cannot be longer than %s characters',
      range: '%s must be between %s and %s characters',
    },
    number: {
      len: '%s must equal %s',
      min: '%s cannot be less than %s',
      max: '%s cannot be greater than %s',
      range: '%s must be between %s and %s',
    },
    array: {
      len: '%s must be exactly %s in length',
      min: '%s cannot be less than %s in length',
      max: '%s cannot be greater than %s in length',
      range: '%s must be between %s and %s in length',
    },
    pattern: { mismatch: '%s value %s does not match pattern %s' },
    clone: function () {
      var e = JSON.parse(JSON.stringify(this));
      return (e.clone = this.clone), e;
    },
  };
}
var Fa = Pa(),
  Pr = (function () {
    function e(n) {
      (this.rules = null), (this._messages = Fa), this.define(n);
    }
    var t = e.prototype;
    return (
      (t.define = function (n) {
        var r = this;
        if (!n) throw new Error('Cannot configure a schema with no rules');
        if (typeof n != 'object' || Array.isArray(n))
          throw new Error('Rules must be an object');
        (this.rules = {}),
          Object.keys(n).forEach(function (o) {
            var i = n[o];
            r.rules[o] = Array.isArray(i) ? i : [i];
          });
      }),
      (t.messages = function (n) {
        return n && (this._messages = rc(Pa(), n)), this._messages;
      }),
      (t.validate = function (n, r, o) {
        var i = this;
        r === void 0 && (r = {}), o === void 0 && (o = function () {});
        var a = n,
          l = r,
          c = o;
        if (
          (typeof l == 'function' && ((c = l), (l = {})),
          !this.rules || Object.keys(this.rules).length === 0)
        )
          return c && c(null, a), Promise.resolve(a);
        if (l.messages) {
          var u = this.messages();
          u === Fa && (u = Pa()), rc(u, l.messages), (l.messages = u);
        } else l.messages = this.messages();
        var d = {};
        (l.keys || Object.keys(this.rules)).forEach(function (g) {
          var b = i.rules[g],
            m = a[g];
          b.forEach(function (p) {
            var h = p;
            typeof h.transform == 'function' &&
              (a === n && (a = bn({}, a)), (m = a[g] = h.transform(m))),
              ((h =
                typeof h == 'function'
                  ? { validator: h }
                  : bn({}, h)).validator = i.getValidationMethod(h)),
              h.validator &&
                ((h.field = g),
                (h.fullField = h.fullField || g),
                (h.type = i.getType(h)),
                (d[g] = d[g] || []),
                d[g].push({ rule: h, value: m, source: a, field: g }));
          });
        });
        var f = {};
        return Mm(
          d,
          l,
          function (g, b) {
            var m,
              p = g.rule,
              h = !(
                (p.type !== 'object' && p.type !== 'array') ||
                (typeof p.fields != 'object' &&
                  typeof p.defaultField != 'object')
              );
            function y(w, S) {
              return bn({}, S, {
                fullField: p.fullField + '.' + w,
                fullFields: p.fullFields ? [].concat(p.fullFields, [w]) : [w],
              });
            }
            function v(w) {
              w === void 0 && (w = []);
              var S = Array.isArray(w) ? w : [w];
              !l.suppressWarning &&
                S.length &&
                e.warning('async-validator:', S),
                S.length && p.message !== void 0 && (S = [].concat(p.message));
              var k = S.map(nc(p, a));
              if (l.first && k.length) return (f[p.field] = 1), b(k);
              if (h) {
                if (p.required && !g.value)
                  return (
                    p.message !== void 0
                      ? (k = [].concat(p.message).map(nc(p, a)))
                      : l.error &&
                        (k = [l.error(p, ot(l.messages.required, p.field))]),
                    b(k)
                  );
                var $ = {};
                p.defaultField &&
                  Object.keys(g.value).map(function (F) {
                    $[F] = p.defaultField;
                  }),
                  ($ = bn({}, $, g.rule.fields));
                var x = {};
                Object.keys($).forEach(function (F) {
                  var P = $[F],
                    N = Array.isArray(P) ? P : [P];
                  x[F] = N.map(y.bind(null, F));
                });
                var O = new e(x);
                O.messages(l.messages),
                  g.rule.options &&
                    ((g.rule.options.messages = l.messages),
                    (g.rule.options.error = l.error)),
                  O.validate(g.value, g.rule.options || l, function (F) {
                    var P = [];
                    k && k.length && P.push.apply(P, k),
                      F && F.length && P.push.apply(P, F),
                      b(P.length ? P : null);
                  });
              } else b(k);
            }
            if (
              ((h = h && (p.required || (!p.required && g.value))),
              (p.field = g.field),
              p.asyncValidator)
            )
              m = p.asyncValidator(p, g.value, v, g.source, l);
            else if (p.validator) {
              try {
                m = p.validator(p, g.value, v, g.source, l);
              } catch (w) {
                console.error == null || console.error(w),
                  l.suppressValidatorError ||
                    setTimeout(function () {
                      throw w;
                    }, 0),
                  v(w.message);
              }
              m === !0
                ? v()
                : m === !1
                ? v(
                    typeof p.message == 'function'
                      ? p.message(p.fullField || p.field)
                      : p.message || (p.fullField || p.field) + ' fails',
                  )
                : m instanceof Array
                ? v(m)
                : m instanceof Error && v(m.message);
            }
            m &&
              m.then &&
              m.then(
                function () {
                  return v();
                },
                function (w) {
                  return v(w);
                },
              );
          },
          function (g) {
            (function (b) {
              var m = [],
                p = {};
              function h(v) {
                var w;
                Array.isArray(v) ? (m = (w = m).concat.apply(w, v)) : m.push(v);
              }
              for (var y = 0; y < b.length; y++) h(b[y]);
              m.length ? ((p = ja(m)), c(m, p)) : c(null, a);
            })(g);
          },
          a,
        );
      }),
      (t.getType = function (n) {
        if (
          (n.type === void 0 &&
            n.pattern instanceof RegExp &&
            (n.type = 'pattern'),
          typeof n.validator != 'function' &&
            n.type &&
            !Mr.hasOwnProperty(n.type))
        )
          throw new Error(ot('Unknown rule type %s', n.type));
        return n.type || 'string';
      }),
      (t.getValidationMethod = function (n) {
        if (typeof n.validator == 'function') return n.validator;
        var r = Object.keys(n),
          o = r.indexOf('message');
        return (
          o !== -1 && r.splice(o, 1),
          r.length === 1 && r[0] === 'required'
            ? Mr.required
            : Mr[this.getType(n)] || void 0
        );
      }),
      e
    );
  })();
(Pr.register = function (e, t) {
  if (typeof t != 'function')
    throw new Error(
      'Cannot register a validator by type, validator is not a function',
    );
  Mr[e] = t;
}),
  (Pr.warning = Fm),
  (Pr.messages = Fa),
  (Pr.validators = Mr);
var tt = "'${name}' is not a valid ${type}",
  qu = {
    default: "Validation error on field '${name}'",
    required: "'${name}' is required",
    enum: "'${name}' must be one of [${enum}]",
    whitespace: "'${name}' cannot be empty",
    date: {
      format: "'${name}' is invalid for format date",
      parse: "'${name}' could not be parsed as date",
      invalid: "'${name}' is invalid date",
    },
    types: {
      string: tt,
      method: tt,
      array: tt,
      object: tt,
      number: tt,
      date: tt,
      boolean: tt,
      integer: tt,
      float: tt,
      regexp: tt,
      email: tt,
      url: tt,
      hex: tt,
    },
    string: {
      len: "'${name}' must be exactly ${len} characters",
      min: "'${name}' must be at least ${min} characters",
      max: "'${name}' cannot be longer than ${max} characters",
      range: "'${name}' must be between ${min} and ${max} characters",
    },
    number: {
      len: "'${name}' must equal ${len}",
      min: "'${name}' cannot be less than ${min}",
      max: "'${name}' cannot be greater than ${max}",
      range: "'${name}' must be between ${min} and ${max}",
    },
    array: {
      len: "'${name}' must be exactly ${len} in length",
      min: "'${name}' cannot be less than ${min} in length",
      max: "'${name}' cannot be greater than ${max} in length",
      range: "'${name}' must be between ${min} and ${max} in length",
    },
    pattern: { mismatch: "'${name}' does not match pattern ${pattern}" },
  },
  ic = Pr;
function Im(e, t) {
  return e.replace(/\$\{\w+\}/g, function (n) {
    var r = n.slice(2, -1);
    return t[r];
  });
}
var ac = 'CODE_LOGIC_ERROR';
function Ma(e, t, n, r, o) {
  return Aa.apply(this, arguments);
}
function Aa() {
  return (
    (Aa = On(
      Ue().mark(function e(t, n, r, o, i) {
        var a, l, c, u, d, f, g, b, m;
        return Ue().wrap(
          function (p) {
            for (;;)
              switch ((p.prev = p.next)) {
                case 0:
                  return (
                    delete (a = z({}, r)).ruleIndex,
                    (ic.warning = function () {}),
                    a.validator &&
                      ((l = a.validator),
                      (a.validator = function () {
                        try {
                          return l.apply(void 0, arguments);
                        } catch (h) {
                          return console.error(h), Promise.reject(ac);
                        }
                      })),
                    (c = null),
                    a &&
                      a.type === 'array' &&
                      a.defaultField &&
                      ((c = a.defaultField), delete a.defaultField),
                    (u = new ic(A({}, t, [a]))),
                    (d = Yn(qu, o.validateMessages)),
                    u.messages(d),
                    (f = []),
                    (p.prev = 10),
                    (p.next = 13),
                    Promise.resolve(u.validate(A({}, t, n), z({}, o)))
                  );
                case 13:
                  p.next = 18;
                  break;
                case 15:
                  (p.prev = 15),
                    (p.t0 = p.catch(10)),
                    p.t0.errors &&
                      (f = p.t0.errors.map(function (h, y) {
                        var v = h.message,
                          w = v === ac ? d.default : v;
                        return s.isValidElement(w)
                          ? s.cloneElement(w, { key: 'error_'.concat(y) })
                          : w;
                      }));
                case 18:
                  if (f.length || !c) {
                    p.next = 23;
                    break;
                  }
                  return (
                    (p.next = 21),
                    Promise.all(
                      n.map(function (h, y) {
                        return Ma(''.concat(t, '.').concat(y), h, c, o, i);
                      }),
                    )
                  );
                case 21:
                  return (
                    (g = p.sent),
                    p.abrupt(
                      'return',
                      g.reduce(function (h, y) {
                        return [].concat(K(h), K(y));
                      }, []),
                    )
                  );
                case 23:
                  return (
                    (b = z(
                      z({}, r),
                      {},
                      { name: t, enum: (r.enum || []).join(', ') },
                      i,
                    )),
                    (m = f.map(function (h) {
                      return typeof h == 'string' ? Im(h, b) : h;
                    })),
                    p.abrupt('return', m)
                  );
                case 26:
                case 'end':
                  return p.stop();
              }
          },
          e,
          null,
          [[10, 15]],
        );
      }),
    )),
    Aa.apply(this, arguments)
  );
}
function Tm(e, t, n, r, o, i) {
  var a,
    l = e.join('.'),
    c = n
      .map(function (d, f) {
        var g = d.validator,
          b = z(z({}, d), {}, { ruleIndex: f });
        return (
          g &&
            (b.validator = function (m, p, h) {
              var y = !1,
                v = g(m, p, function () {
                  for (
                    var w = arguments.length, S = new Array(w), k = 0;
                    k < w;
                    k++
                  )
                    S[k] = arguments[k];
                  Promise.resolve().then(function () {
                    at(
                      !y,
                      'Your validator function has already return a promise. `callback` will be ignored.',
                    ),
                      y || h.apply(void 0, S);
                  });
                });
              at(
                (y =
                  v &&
                  typeof v.then == 'function' &&
                  typeof v.catch == 'function'),
                '`callback` is deprecated. Please return a promise instead.',
              ),
                y &&
                  v
                    .then(function () {
                      h();
                    })
                    .catch(function (w) {
                      h(w || ' ');
                    });
            }),
          b
        );
      })
      .sort(function (d, f) {
        var g = d.warningOnly,
          b = d.ruleIndex,
          m = f.warningOnly,
          p = f.ruleIndex;
        return !!g == !!m ? b - p : g ? 1 : -1;
      });
  if (o === !0)
    a = new Promise(
      (function () {
        var d = On(
          Ue().mark(function f(g, b) {
            var m, p, h;
            return Ue().wrap(function (y) {
              for (;;)
                switch ((y.prev = y.next)) {
                  case 0:
                    m = 0;
                  case 1:
                    if (!(m < c.length)) {
                      y.next = 12;
                      break;
                    }
                    return (p = c[m]), (y.next = 5), Ma(l, t, p, r, i);
                  case 5:
                    if (!(h = y.sent).length) {
                      y.next = 9;
                      break;
                    }
                    return b([{ errors: h, rule: p }]), y.abrupt('return');
                  case 9:
                    (m += 1), (y.next = 1);
                    break;
                  case 12:
                    g([]);
                  case 13:
                  case 'end':
                    return y.stop();
                }
            }, f);
          }),
        );
        return function (f, g) {
          return d.apply(this, arguments);
        };
      })(),
    );
  else {
    var u = c.map(function (d) {
      return Ma(l, t, d, r, i).then(function (f) {
        return { errors: f, rule: d };
      });
    });
    a = (
      o
        ? (function (d) {
            return Gu.apply(this, arguments);
          })(u)
        : (function (d) {
            return Xu.apply(this, arguments);
          })(u)
    ).then(function (d) {
      return Promise.reject(d);
    });
  }
  return (
    a.catch(function (d) {
      return d;
    }),
    a
  );
}
function Xu() {
  return (Xu = On(
    Ue().mark(function e(t) {
      return Ue().wrap(function (n) {
        for (;;)
          switch ((n.prev = n.next)) {
            case 0:
              return n.abrupt(
                'return',
                Promise.all(t).then(function (r) {
                  var o;
                  return (o = []).concat.apply(o, K(r));
                }),
              );
            case 1:
            case 'end':
              return n.stop();
          }
      }, e);
    }),
  )).apply(this, arguments);
}
function Gu() {
  return (Gu = On(
    Ue().mark(function e(t) {
      var n;
      return Ue().wrap(function (r) {
        for (;;)
          switch ((r.prev = r.next)) {
            case 0:
              return (
                (n = 0),
                r.abrupt(
                  'return',
                  new Promise(function (o) {
                    t.forEach(function (i) {
                      i.then(function (a) {
                        a.errors.length && o([a]),
                          (n += 1) === t.length && o([]);
                      });
                    });
                  }),
                )
              );
            case 2:
            case 'end':
              return r.stop();
          }
      }, e);
    }),
  )).apply(this, arguments);
}
function Pe(e) {
  return Ea(e);
}
function lc(e, t) {
  var n = {};
  return (
    t.forEach(function (r) {
      var o = St(e, r);
      n = Et(n, r, o);
    }),
    n
  );
}
function Ar(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 && arguments[2];
  return (
    e &&
    e.some(function (r) {
      return Uu(t, r, n);
    })
  );
}
function Uu(e, t) {
  return (
    !(!e || !t) &&
    !(
      !(arguments.length > 2 && arguments[2] !== void 0 && arguments[2]) &&
      e.length !== t.length
    ) &&
    t.every(function (n, r) {
      return e[r] === n;
    })
  );
}
function Nm(e) {
  var t = arguments.length <= 1 ? void 0 : arguments[1];
  return t && t.target && pe(t.target) === 'object' && e in t.target
    ? t.target[e]
    : t;
}
function sc(e, t, n) {
  var r = e.length;
  if (t < 0 || t >= r || n < 0 || n >= r) return e;
  var o = e[t],
    i = t - n;
  return i > 0
    ? [].concat(K(e.slice(0, n)), [o], K(e.slice(n, t)), K(e.slice(t + 1, r)))
    : i < 0
    ? [].concat(
        K(e.slice(0, t)),
        K(e.slice(t + 1, n + 1)),
        [o],
        K(e.slice(n + 1, r)),
      )
    : e;
}
var _m = ['name'],
  pt = [];
function cc(e, t, n, r, o, i) {
  return typeof e == 'function'
    ? e(t, n, 'source' in i ? { source: i.source } : {})
    : r !== o;
}
var Ra = (function (e) {
  ei(n, s.Component);
  var t = ti(n);
  function n(r) {
    var o;
    return (
      Rt(this, n),
      A(fe((o = t.call(this, r))), 'state', { resetCount: 0 }),
      A(fe(o), 'cancelRegisterFunc', null),
      A(fe(o), 'mounted', !1),
      A(fe(o), 'touched', !1),
      A(fe(o), 'dirty', !1),
      A(fe(o), 'validatePromise', void 0),
      A(fe(o), 'prevValidating', void 0),
      A(fe(o), 'errors', pt),
      A(fe(o), 'warnings', pt),
      A(fe(o), 'cancelRegister', function () {
        var i = o.props,
          a = i.preserve,
          l = i.isListField,
          c = i.name;
        o.cancelRegisterFunc && o.cancelRegisterFunc(l, a, Pe(c)),
          (o.cancelRegisterFunc = null);
      }),
      A(fe(o), 'getNamePath', function () {
        var i = o.props,
          a = i.name,
          l = i.fieldContext.prefixName;
        return a !== void 0 ? [].concat(K(l === void 0 ? [] : l), K(a)) : [];
      }),
      A(fe(o), 'getRules', function () {
        var i = o.props,
          a = i.rules,
          l = a === void 0 ? [] : a,
          c = i.fieldContext;
        return l.map(function (u) {
          return typeof u == 'function' ? u(c) : u;
        });
      }),
      A(fe(o), 'refresh', function () {
        o.mounted &&
          o.setState(function (i) {
            return { resetCount: i.resetCount + 1 };
          });
      }),
      A(fe(o), 'metaCache', null),
      A(fe(o), 'triggerMetaEvent', function (i) {
        var a = o.props.onMetaChange;
        if (a) {
          var l = z(z({}, o.getMeta()), {}, { destroy: i });
          Dc(o.metaCache, l) || a(l), (o.metaCache = l);
        } else o.metaCache = null;
      }),
      A(fe(o), 'onStoreChange', function (i, a, l) {
        var c = o.props,
          u = c.shouldUpdate,
          d = c.dependencies,
          f = d === void 0 ? [] : d,
          g = c.onReset,
          b = l.store,
          m = o.getNamePath(),
          p = o.getValue(i),
          h = o.getValue(b),
          y = a && Ar(a, m);
        switch (
          (l.type === 'valueUpdate' &&
            l.source === 'external' &&
            p !== h &&
            ((o.touched = !0),
            (o.dirty = !0),
            (o.validatePromise = null),
            (o.errors = pt),
            (o.warnings = pt),
            o.triggerMetaEvent()),
          l.type)
        ) {
          case 'reset':
            if (!a || y)
              return (
                (o.touched = !1),
                (o.dirty = !1),
                (o.validatePromise = void 0),
                (o.errors = pt),
                (o.warnings = pt),
                o.triggerMetaEvent(),
                g == null || g(),
                void o.refresh()
              );
            break;
          case 'remove':
            if (u) return void o.reRender();
            break;
          case 'setField':
            if (y) {
              var v = l.data;
              return (
                'touched' in v && (o.touched = v.touched),
                'validating' in v &&
                  !('originRCField' in v) &&
                  (o.validatePromise = v.validating
                    ? Promise.resolve([])
                    : null),
                'errors' in v && (o.errors = v.errors || pt),
                'warnings' in v && (o.warnings = v.warnings || pt),
                (o.dirty = !0),
                o.triggerMetaEvent(),
                void o.reRender()
              );
            }
            if (u && !m.length && cc(u, i, b, p, h, l))
              return void o.reRender();
            break;
          case 'dependenciesUpdate':
            if (
              f.map(Pe).some(function (w) {
                return Ar(l.relatedFields, w);
              })
            )
              return void o.reRender();
            break;
          default:
            if (y || ((!f.length || m.length || u) && cc(u, i, b, p, h, l)))
              return void o.reRender();
        }
        u === !0 && o.reRender();
      }),
      A(fe(o), 'validateRules', function (i) {
        var a = o.getNamePath(),
          l = o.getValue(),
          c = i || {},
          u = c.triggerName,
          d = c.validateOnly,
          f = d !== void 0 && d,
          g = Promise.resolve().then(
            On(
              Ue().mark(function b() {
                var m, p, h, y, v, w, S;
                return Ue().wrap(function (k) {
                  for (;;)
                    switch ((k.prev = k.next)) {
                      case 0:
                        if (o.mounted) {
                          k.next = 2;
                          break;
                        }
                        return k.abrupt('return', []);
                      case 2:
                        if (
                          ((m = o.props),
                          (p = m.validateFirst),
                          (h = p !== void 0 && p),
                          (y = m.messageVariables),
                          (v = m.validateDebounce),
                          (w = o.getRules()),
                          u &&
                            (w = w
                              .filter(function ($) {
                                return $;
                              })
                              .filter(function ($) {
                                var x = $.validateTrigger;
                                return !x || Ea(x).includes(u);
                              })),
                          !v || !u)
                        ) {
                          k.next = 10;
                          break;
                        }
                        return (
                          (k.next = 8),
                          new Promise(function ($) {
                            setTimeout($, v);
                          })
                        );
                      case 8:
                        if (o.validatePromise === g) {
                          k.next = 10;
                          break;
                        }
                        return k.abrupt('return', []);
                      case 10:
                        return (
                          (S = Tm(a, l, w, i, h, y))
                            .catch(function ($) {
                              return $;
                            })
                            .then(function () {
                              var $ =
                                arguments.length > 0 && arguments[0] !== void 0
                                  ? arguments[0]
                                  : pt;
                              if (o.validatePromise === g) {
                                var x;
                                o.validatePromise = null;
                                var O = [],
                                  F = [];
                                (x = $.forEach) === null ||
                                  x === void 0 ||
                                  x.call($, function (P) {
                                    var N = P.rule.warningOnly,
                                      I = P.errors,
                                      T = I === void 0 ? pt : I;
                                    N
                                      ? F.push.apply(F, K(T))
                                      : O.push.apply(O, K(T));
                                  }),
                                  (o.errors = O),
                                  (o.warnings = F),
                                  o.triggerMetaEvent(),
                                  o.reRender();
                              }
                            }),
                          k.abrupt('return', S)
                        );
                      case 13:
                      case 'end':
                        return k.stop();
                    }
                }, b);
              }),
            ),
          );
        return (
          f ||
            ((o.validatePromise = g),
            (o.dirty = !0),
            (o.errors = pt),
            (o.warnings = pt),
            o.triggerMetaEvent(),
            o.reRender()),
          g
        );
      }),
      A(fe(o), 'isFieldValidating', function () {
        return !!o.validatePromise;
      }),
      A(fe(o), 'isFieldTouched', function () {
        return o.touched;
      }),
      A(fe(o), 'isFieldDirty', function () {
        return (
          !(!o.dirty && o.props.initialValue === void 0) ||
          (0, o.props.fieldContext.getInternalHooks(vn).getInitialValue)(
            o.getNamePath(),
          ) !== void 0
        );
      }),
      A(fe(o), 'getErrors', function () {
        return o.errors;
      }),
      A(fe(o), 'getWarnings', function () {
        return o.warnings;
      }),
      A(fe(o), 'isListField', function () {
        return o.props.isListField;
      }),
      A(fe(o), 'isList', function () {
        return o.props.isList;
      }),
      A(fe(o), 'isPreserve', function () {
        return o.props.preserve;
      }),
      A(fe(o), 'getMeta', function () {
        return (
          (o.prevValidating = o.isFieldValidating()),
          {
            touched: o.isFieldTouched(),
            validating: o.prevValidating,
            errors: o.errors,
            warnings: o.warnings,
            name: o.getNamePath(),
            validated: o.validatePromise === null,
          }
        );
      }),
      A(fe(o), 'getOnlyChild', function (i) {
        if (typeof i == 'function') {
          var a = o.getMeta();
          return z(
            z(
              {},
              o.getOnlyChild(i(o.getControlled(), a, o.props.fieldContext)),
            ),
            {},
            { isFunction: !0 },
          );
        }
        var l = _r(i);
        return l.length === 1 && s.isValidElement(l[0])
          ? { child: l[0], isFunction: !1 }
          : { child: l, isFunction: !1 };
      }),
      A(fe(o), 'getValue', function (i) {
        var a = o.props.fieldContext.getFieldsValue,
          l = o.getNamePath();
        return St(i || a(!0), l);
      }),
      A(fe(o), 'getControlled', function () {
        var i =
            arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
          a = o.props,
          l = a.trigger,
          c = a.validateTrigger,
          u = a.getValueFromEvent,
          d = a.normalize,
          f = a.valuePropName,
          g = a.getValueProps,
          b = a.fieldContext,
          m = c !== void 0 ? c : b.validateTrigger,
          p = o.getNamePath(),
          h = b.getInternalHooks,
          y = b.getFieldsValue,
          v = h(vn).dispatch,
          w = o.getValue(),
          S =
            g ||
            function (x) {
              return A({}, f, x);
            },
          k = i[l],
          $ = z(z({}, i), S(w));
        return (
          ($[l] = function () {
            var x;
            (o.touched = !0), (o.dirty = !0), o.triggerMetaEvent();
            for (var O = arguments.length, F = new Array(O), P = 0; P < O; P++)
              F[P] = arguments[P];
            (x = u ? u.apply(void 0, F) : Nm.apply(void 0, [f].concat(F))),
              d && (x = d(x, w, y(!0))),
              v({ type: 'updateValue', namePath: p, value: x }),
              k && k.apply(void 0, F);
          }),
          Ea(m || []).forEach(function (x) {
            var O = $[x];
            $[x] = function () {
              O && O.apply(void 0, arguments);
              var F = o.props.rules;
              F &&
                F.length &&
                v({ type: 'validateField', namePath: p, triggerName: x });
            };
          }),
          $
        );
      }),
      r.fieldContext &&
        (0, (0, r.fieldContext.getInternalHooks)(vn).initEntityValue)(fe(o)),
      o
    );
  }
  return (
    It(n, [
      {
        key: 'componentDidMount',
        value: function () {
          var r = this.props,
            o = r.shouldUpdate,
            i = r.fieldContext;
          if (((this.mounted = !0), i)) {
            var a = (0, i.getInternalHooks)(vn).registerField;
            this.cancelRegisterFunc = a(this);
          }
          o === !0 && this.reRender();
        },
      },
      {
        key: 'componentWillUnmount',
        value: function () {
          this.cancelRegister(), this.triggerMetaEvent(!0), (this.mounted = !1);
        },
      },
      {
        key: 'reRender',
        value: function () {
          this.mounted && this.forceUpdate();
        },
      },
      {
        key: 'render',
        value: function () {
          var r,
            o = this.state.resetCount,
            i = this.props.children,
            a = this.getOnlyChild(i),
            l = a.child;
          return (
            a.isFunction
              ? (r = l)
              : s.isValidElement(l)
              ? (r = s.cloneElement(l, this.getControlled(l.props)))
              : (at(!l, '`children` of Field is not validate ReactElement.'),
                (r = l)),
            s.createElement(s.Fragment, { key: o }, r)
          );
        },
      },
    ]),
    n
  );
})();
function Za(e) {
  var t = e.name,
    n = st(e, _m),
    r = s.useContext(En),
    o = s.useContext(Br),
    i = t !== void 0 ? Pe(t) : void 0,
    a = 'keep';
  return (
    n.isListField || (a = '_'.concat((i || []).join('_'))),
    s.createElement(
      Ra,
      Se({ key: a, name: i, isListField: !!o }, n, { fieldContext: r }),
    )
  );
}
function Yu(e) {
  var t = e.name,
    n = e.initialValue,
    r = e.children,
    o = e.rules,
    i = e.validateTrigger,
    a = e.isListField,
    l = s.useContext(En),
    c = s.useContext(Br),
    u = s.useRef({ keys: [], id: 0 }).current,
    d = s.useMemo(
      function () {
        var b = Pe(l.prefixName) || [];
        return [].concat(K(b), K(Pe(t)));
      },
      [l.prefixName, t],
    ),
    f = s.useMemo(
      function () {
        return z(z({}, l), {}, { prefixName: d });
      },
      [l, d],
    ),
    g = s.useMemo(
      function () {
        return {
          getKey: function (b) {
            var m = d.length,
              p = b[m];
            return [u.keys[p], b.slice(m + 1)];
          },
        };
      },
      [d],
    );
  return typeof r != 'function'
    ? (at(!1, 'Form.List only accepts function as children.'), null)
    : s.createElement(
        Br.Provider,
        { value: g },
        s.createElement(
          En.Provider,
          { value: f },
          s.createElement(
            Za,
            {
              name: [],
              shouldUpdate: function (b, m, p) {
                return p.source !== 'internal' && b !== m;
              },
              rules: o,
              validateTrigger: i,
              initialValue: n,
              isList: !0,
              isListField: a ?? !!c,
            },
            function (b, m) {
              var p = b.value,
                h = p === void 0 ? [] : p,
                y = b.onChange,
                v = l.getFieldValue,
                w = function () {
                  return v(d || []) || [];
                },
                S = {
                  add: function ($, x) {
                    var O = w();
                    x >= 0 && x <= O.length
                      ? ((u.keys = [].concat(
                          K(u.keys.slice(0, x)),
                          [u.id],
                          K(u.keys.slice(x)),
                        )),
                        y([].concat(K(O.slice(0, x)), [$], K(O.slice(x)))))
                      : ((u.keys = [].concat(K(u.keys), [u.id])),
                        y([].concat(K(O), [$]))),
                      (u.id += 1);
                  },
                  remove: function ($) {
                    var x = w(),
                      O = new Set(Array.isArray($) ? $ : [$]);
                    O.size <= 0 ||
                      ((u.keys = u.keys.filter(function (F, P) {
                        return !O.has(P);
                      })),
                      y(
                        x.filter(function (F, P) {
                          return !O.has(P);
                        }),
                      ));
                  },
                  move: function ($, x) {
                    if ($ !== x) {
                      var O = w();
                      $ < 0 ||
                        $ >= O.length ||
                        x < 0 ||
                        x >= O.length ||
                        ((u.keys = sc(u.keys, $, x)), y(sc(O, $, x)));
                    }
                  },
                },
                k = h || [];
              return (
                Array.isArray(k) || (k = []),
                r(
                  k.map(function ($, x) {
                    var O = u.keys[x];
                    return (
                      O === void 0 &&
                        ((u.keys[x] = u.id), (O = u.keys[x]), (u.id += 1)),
                      { name: x, key: O, isListField: !0 }
                    );
                  }),
                  S,
                  m,
                )
              );
            },
          ),
        ),
      );
}
A(Ra, 'contextType', En),
  A(Ra, 'defaultProps', { trigger: 'onChange', valuePropName: 'value' });
var Ku = '__@field_split__';
function Wi(e) {
  return e
    .map(function (t) {
      return ''.concat(pe(t), ':').concat(t);
    })
    .join(Ku);
}
var Ln = (function () {
    function e() {
      Rt(this, e), A(this, 'kvs', new Map());
    }
    return (
      It(e, [
        {
          key: 'set',
          value: function (t, n) {
            this.kvs.set(Wi(t), n);
          },
        },
        {
          key: 'get',
          value: function (t) {
            return this.kvs.get(Wi(t));
          },
        },
        {
          key: 'update',
          value: function (t, n) {
            var r = n(this.get(t));
            r ? this.set(t, r) : this.delete(t);
          },
        },
        {
          key: 'delete',
          value: function (t) {
            this.kvs.delete(Wi(t));
          },
        },
        {
          key: 'map',
          value: function (t) {
            return K(this.kvs.entries()).map(function (n) {
              var r = G(n, 2),
                o = r[0],
                i = r[1],
                a = o.split(Ku);
              return t({
                key: a.map(function (l) {
                  var c = G(l.match(/^([^:]*):(.*)$/), 3),
                    u = c[1],
                    d = c[2];
                  return u === 'number' ? Number(d) : d;
                }),
                value: i,
              });
            });
          },
        },
        {
          key: 'toJSON',
          value: function () {
            var t = {};
            return (
              this.map(function (n) {
                var r = n.key,
                  o = n.value;
                return (t[r.join('.')] = o), null;
              }),
              t
            );
          },
        },
      ]),
      e
    );
  })(),
  zm = ['name'],
  Lm = It(function e(t) {
    var n = this;
    Rt(this, e),
      A(this, 'formHooked', !1),
      A(this, 'forceRootUpdate', void 0),
      A(this, 'subscribable', !0),
      A(this, 'store', {}),
      A(this, 'fieldEntities', []),
      A(this, 'initialValues', {}),
      A(this, 'callbacks', {}),
      A(this, 'validateMessages', null),
      A(this, 'preserve', null),
      A(this, 'lastValidatePromise', null),
      A(this, 'getForm', function () {
        return {
          getFieldValue: n.getFieldValue,
          getFieldsValue: n.getFieldsValue,
          getFieldError: n.getFieldError,
          getFieldWarning: n.getFieldWarning,
          getFieldsError: n.getFieldsError,
          isFieldsTouched: n.isFieldsTouched,
          isFieldTouched: n.isFieldTouched,
          isFieldValidating: n.isFieldValidating,
          isFieldsValidating: n.isFieldsValidating,
          resetFields: n.resetFields,
          setFields: n.setFields,
          setFieldValue: n.setFieldValue,
          setFieldsValue: n.setFieldsValue,
          validateFields: n.validateFields,
          submit: n.submit,
          _init: !0,
          getInternalHooks: n.getInternalHooks,
        };
      }),
      A(this, 'getInternalHooks', function (r) {
        return r === vn
          ? ((n.formHooked = !0),
            {
              dispatch: n.dispatch,
              initEntityValue: n.initEntityValue,
              registerField: n.registerField,
              useSubscribe: n.useSubscribe,
              setInitialValues: n.setInitialValues,
              destroyForm: n.destroyForm,
              setCallbacks: n.setCallbacks,
              setValidateMessages: n.setValidateMessages,
              getFields: n.getFields,
              setPreserve: n.setPreserve,
              getInitialValue: n.getInitialValue,
              registerWatch: n.registerWatch,
            })
          : (at(
              !1,
              '`getInternalHooks` is internal usage. Should not call directly.',
            ),
            null);
      }),
      A(this, 'useSubscribe', function (r) {
        n.subscribable = r;
      }),
      A(this, 'prevWithoutPreserves', null),
      A(this, 'setInitialValues', function (r, o) {
        if (((n.initialValues = r || {}), o)) {
          var i,
            a = Yn(r, n.store);
          (i = n.prevWithoutPreserves) === null ||
            i === void 0 ||
            i.map(function (l) {
              var c = l.key;
              a = Et(a, c, St(r, c));
            }),
            (n.prevWithoutPreserves = null),
            n.updateStore(a);
        }
      }),
      A(this, 'destroyForm', function () {
        var r = new Ln();
        n.getFieldEntities(!0).forEach(function (o) {
          n.isMergedPreserve(o.isPreserve()) || r.set(o.getNamePath(), !0);
        }),
          (n.prevWithoutPreserves = r);
      }),
      A(this, 'getInitialValue', function (r) {
        var o = St(n.initialValues, r);
        return r.length ? Yn(o) : o;
      }),
      A(this, 'setCallbacks', function (r) {
        n.callbacks = r;
      }),
      A(this, 'setValidateMessages', function (r) {
        n.validateMessages = r;
      }),
      A(this, 'setPreserve', function (r) {
        n.preserve = r;
      }),
      A(this, 'watchList', []),
      A(this, 'registerWatch', function (r) {
        return (
          n.watchList.push(r),
          function () {
            n.watchList = n.watchList.filter(function (o) {
              return o !== r;
            });
          }
        );
      }),
      A(this, 'notifyWatch', function () {
        var r =
          arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
        if (n.watchList.length) {
          var o = n.getFieldsValue(),
            i = n.getFieldsValue(!0);
          n.watchList.forEach(function (a) {
            a(o, i, r);
          });
        }
      }),
      A(this, 'timeoutId', null),
      A(this, 'warningUnhooked', function () {}),
      A(this, 'updateStore', function (r) {
        n.store = r;
      }),
      A(this, 'getFieldEntities', function () {
        return arguments.length > 0 && arguments[0] !== void 0 && arguments[0]
          ? n.fieldEntities.filter(function (r) {
              return r.getNamePath().length;
            })
          : n.fieldEntities;
      }),
      A(this, 'getFieldsMap', function () {
        var r = arguments.length > 0 && arguments[0] !== void 0 && arguments[0],
          o = new Ln();
        return (
          n.getFieldEntities(r).forEach(function (i) {
            var a = i.getNamePath();
            o.set(a, i);
          }),
          o
        );
      }),
      A(this, 'getFieldEntitiesForNamePathList', function (r) {
        if (!r) return n.getFieldEntities(!0);
        var o = n.getFieldsMap(!0);
        return r.map(function (i) {
          var a = Pe(i);
          return o.get(a) || { INVALIDATE_NAME_PATH: Pe(i) };
        });
      }),
      A(this, 'getFieldsValue', function (r, o) {
        var i, a, l;
        if (
          (n.warningUnhooked(),
          r === !0 || Array.isArray(r)
            ? ((i = r), (a = o))
            : r && pe(r) === 'object' && ((l = r.strict), (a = r.filter)),
          i === !0 && !a)
        )
          return n.store;
        var c = n.getFieldEntitiesForNamePathList(Array.isArray(i) ? i : null),
          u = [];
        return (
          c.forEach(function (d) {
            var f,
              g,
              b,
              m,
              p =
                'INVALIDATE_NAME_PATH' in d
                  ? d.INVALIDATE_NAME_PATH
                  : d.getNamePath();
            if (l) {
              if ((b = (m = d).isList) !== null && b !== void 0 && b.call(m))
                return;
            } else if (
              !i &&
              (f = (g = d).isListField) !== null &&
              f !== void 0 &&
              f.call(g)
            )
              return;
            if (a) {
              var h = 'getMeta' in d ? d.getMeta() : null;
              a(h) && u.push(p);
            } else u.push(p);
          }),
          lc(n.store, u.map(Pe))
        );
      }),
      A(this, 'getFieldValue', function (r) {
        n.warningUnhooked();
        var o = Pe(r);
        return St(n.store, o);
      }),
      A(this, 'getFieldsError', function (r) {
        return (
          n.warningUnhooked(),
          n.getFieldEntitiesForNamePathList(r).map(function (o, i) {
            return o && !('INVALIDATE_NAME_PATH' in o)
              ? {
                  name: o.getNamePath(),
                  errors: o.getErrors(),
                  warnings: o.getWarnings(),
                }
              : { name: Pe(r[i]), errors: [], warnings: [] };
          })
        );
      }),
      A(this, 'getFieldError', function (r) {
        n.warningUnhooked();
        var o = Pe(r);
        return n.getFieldsError([o])[0].errors;
      }),
      A(this, 'getFieldWarning', function (r) {
        n.warningUnhooked();
        var o = Pe(r);
        return n.getFieldsError([o])[0].warnings;
      }),
      A(this, 'isFieldsTouched', function () {
        n.warningUnhooked();
        for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
          o[i] = arguments[i];
        var a,
          l = o[0],
          c = o[1],
          u = !1;
        o.length === 0
          ? (a = null)
          : o.length === 1
          ? Array.isArray(l)
            ? ((a = l.map(Pe)), (u = !1))
            : ((a = null), (u = l))
          : ((a = l.map(Pe)), (u = c));
        var d = n.getFieldEntities(!0),
          f = function (p) {
            return p.isFieldTouched();
          };
        if (!a) return u ? d.every(f) : d.some(f);
        var g = new Ln();
        a.forEach(function (p) {
          g.set(p, []);
        }),
          d.forEach(function (p) {
            var h = p.getNamePath();
            a.forEach(function (y) {
              y.every(function (v, w) {
                return h[w] === v;
              }) &&
                g.update(y, function (v) {
                  return [].concat(K(v), [p]);
                });
            });
          });
        var b = function (p) {
            return p.some(f);
          },
          m = g.map(function (p) {
            return p.value;
          });
        return u ? m.every(b) : m.some(b);
      }),
      A(this, 'isFieldTouched', function (r) {
        return n.warningUnhooked(), n.isFieldsTouched([r]);
      }),
      A(this, 'isFieldsValidating', function (r) {
        n.warningUnhooked();
        var o = n.getFieldEntities();
        if (!r)
          return o.some(function (a) {
            return a.isFieldValidating();
          });
        var i = r.map(Pe);
        return o.some(function (a) {
          var l = a.getNamePath();
          return Ar(i, l) && a.isFieldValidating();
        });
      }),
      A(this, 'isFieldValidating', function (r) {
        return n.warningUnhooked(), n.isFieldsValidating([r]);
      }),
      A(this, 'resetWithFieldInitialValue', function () {
        var r =
            arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
          o = new Ln(),
          i = n.getFieldEntities(!0);
        i.forEach(function (l) {
          var c = l.props.initialValue,
            u = l.getNamePath();
          if (c !== void 0) {
            var d = o.get(u) || new Set();
            d.add({ entity: l, value: c }), o.set(u, d);
          }
        });
        var a;
        r.entities
          ? (a = r.entities)
          : r.namePathList
          ? ((a = []),
            r.namePathList.forEach(function (l) {
              var c,
                u = o.get(l);
              u &&
                (c = a).push.apply(
                  c,
                  K(
                    K(u).map(function (d) {
                      return d.entity;
                    }),
                  ),
                );
            }))
          : (a = i),
          a.forEach(function (l) {
            if (l.props.initialValue !== void 0) {
              var c = l.getNamePath();
              if (n.getInitialValue(c) !== void 0)
                at(
                  !1,
                  "Form already set 'initialValues' with path '".concat(
                    c.join('.'),
                    "'. Field can not overwrite it.",
                  ),
                );
              else {
                var u = o.get(c);
                if (u && u.size > 1)
                  at(
                    !1,
                    "Multiple Field with path '".concat(
                      c.join('.'),
                      "' set 'initialValue'. Can not decide which one to pick.",
                    ),
                  );
                else if (u) {
                  var d = n.getFieldValue(c);
                  (r.skipExist && d !== void 0) ||
                    n.updateStore(Et(n.store, c, K(u)[0].value));
                }
              }
            }
          });
      }),
      A(this, 'resetFields', function (r) {
        n.warningUnhooked();
        var o = n.store;
        if (!r)
          return (
            n.updateStore(Yn(n.initialValues)),
            n.resetWithFieldInitialValue(),
            n.notifyObservers(o, null, { type: 'reset' }),
            void n.notifyWatch()
          );
        var i = r.map(Pe);
        i.forEach(function (a) {
          var l = n.getInitialValue(a);
          n.updateStore(Et(n.store, a, l));
        }),
          n.resetWithFieldInitialValue({ namePathList: i }),
          n.notifyObservers(o, i, { type: 'reset' }),
          n.notifyWatch(i);
      }),
      A(this, 'setFields', function (r) {
        n.warningUnhooked();
        var o = n.store,
          i = [];
        r.forEach(function (a) {
          var l = a.name,
            c = st(a, zm),
            u = Pe(l);
          i.push(u),
            'value' in c && n.updateStore(Et(n.store, u, c.value)),
            n.notifyObservers(o, [u], { type: 'setField', data: a });
        }),
          n.notifyWatch(i);
      }),
      A(this, 'getFields', function () {
        return n.getFieldEntities(!0).map(function (r) {
          var o = r.getNamePath(),
            i = z(
              z({}, r.getMeta()),
              {},
              { name: o, value: n.getFieldValue(o) },
            );
          return Object.defineProperty(i, 'originRCField', { value: !0 }), i;
        });
      }),
      A(this, 'initEntityValue', function (r) {
        var o = r.props.initialValue;
        if (o !== void 0) {
          var i = r.getNamePath();
          St(n.store, i) === void 0 && n.updateStore(Et(n.store, i, o));
        }
      }),
      A(this, 'isMergedPreserve', function (r) {
        var o = r !== void 0 ? r : n.preserve;
        return o == null || o;
      }),
      A(this, 'registerField', function (r) {
        n.fieldEntities.push(r);
        var o = r.getNamePath();
        if ((n.notifyWatch([o]), r.props.initialValue !== void 0)) {
          var i = n.store;
          n.resetWithFieldInitialValue({ entities: [r], skipExist: !0 }),
            n.notifyObservers(i, [r.getNamePath()], {
              type: 'valueUpdate',
              source: 'internal',
            });
        }
        return function (a, l) {
          var c =
            arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
          if (
            ((n.fieldEntities = n.fieldEntities.filter(function (f) {
              return f !== r;
            })),
            !n.isMergedPreserve(l) && (!a || c.length > 1))
          ) {
            var u = a ? void 0 : n.getInitialValue(o);
            if (
              o.length &&
              n.getFieldValue(o) !== u &&
              n.fieldEntities.every(function (f) {
                return !Uu(f.getNamePath(), o);
              })
            ) {
              var d = n.store;
              n.updateStore(Et(d, o, u, !0)),
                n.notifyObservers(d, [o], { type: 'remove' }),
                n.triggerDependenciesUpdate(d, o);
            }
          }
          n.notifyWatch([o]);
        };
      }),
      A(this, 'dispatch', function (r) {
        switch (r.type) {
          case 'updateValue':
            var o = r.namePath,
              i = r.value;
            n.updateValue(o, i);
            break;
          case 'validateField':
            var a = r.namePath,
              l = r.triggerName;
            n.validateFields([a], { triggerName: l });
        }
      }),
      A(this, 'notifyObservers', function (r, o, i) {
        if (n.subscribable) {
          var a = z(z({}, i), {}, { store: n.getFieldsValue(!0) });
          n.getFieldEntities().forEach(function (l) {
            (0, l.onStoreChange)(r, o, a);
          });
        } else n.forceRootUpdate();
      }),
      A(this, 'triggerDependenciesUpdate', function (r, o) {
        var i = n.getDependencyChildrenFields(o);
        return (
          i.length && n.validateFields(i),
          n.notifyObservers(r, i, {
            type: 'dependenciesUpdate',
            relatedFields: [o].concat(K(i)),
          }),
          i
        );
      }),
      A(this, 'updateValue', function (r, o) {
        var i = Pe(r),
          a = n.store;
        n.updateStore(Et(n.store, i, o)),
          n.notifyObservers(a, [i], {
            type: 'valueUpdate',
            source: 'internal',
          }),
          n.notifyWatch([i]);
        var l = n.triggerDependenciesUpdate(a, i),
          c = n.callbacks.onValuesChange;
        c && c(lc(n.store, [i]), n.getFieldsValue()),
          n.triggerOnFieldsChange([i].concat(K(l)));
      }),
      A(this, 'setFieldsValue', function (r) {
        n.warningUnhooked();
        var o = n.store;
        if (r) {
          var i = Yn(n.store, r);
          n.updateStore(i);
        }
        n.notifyObservers(o, null, { type: 'valueUpdate', source: 'external' }),
          n.notifyWatch();
      }),
      A(this, 'setFieldValue', function (r, o) {
        n.setFields([{ name: r, value: o }]);
      }),
      A(this, 'getDependencyChildrenFields', function (r) {
        var o = new Set(),
          i = [],
          a = new Ln();
        return (
          n.getFieldEntities().forEach(function (l) {
            (l.props.dependencies || []).forEach(function (c) {
              var u = Pe(c);
              a.update(u, function () {
                var d =
                  arguments.length > 0 && arguments[0] !== void 0
                    ? arguments[0]
                    : new Set();
                return d.add(l), d;
              });
            });
          }),
          (function l(c) {
            (a.get(c) || new Set()).forEach(function (u) {
              if (!o.has(u)) {
                o.add(u);
                var d = u.getNamePath();
                u.isFieldDirty() && d.length && (i.push(d), l(d));
              }
            });
          })(r),
          i
        );
      }),
      A(this, 'triggerOnFieldsChange', function (r, o) {
        var i = n.callbacks.onFieldsChange;
        if (i) {
          var a = n.getFields();
          if (o) {
            var l = new Ln();
            o.forEach(function (u) {
              var d = u.name,
                f = u.errors;
              l.set(d, f);
            }),
              a.forEach(function (u) {
                u.errors = l.get(u.name) || u.errors;
              });
          }
          var c = a.filter(function (u) {
            var d = u.name;
            return Ar(r, d);
          });
          c.length && i(c, a);
        }
      }),
      A(this, 'validateFields', function (r, o) {
        var i, a, l;
        n.warningUnhooked(),
          Array.isArray(r) || typeof r == 'string' || typeof o == 'string'
            ? ((a = r), (l = o))
            : (l = r);
        var c = !!a,
          u = c ? a.map(Pe) : [],
          d = [],
          f = String(Date.now()),
          g = new Set(),
          b = (i = l) === null || i === void 0 ? void 0 : i.recursive;
        n.getFieldEntities(!0).forEach(function (y) {
          if (
            (c || u.push(y.getNamePath()),
            y.props.rules && y.props.rules.length)
          ) {
            var v = y.getNamePath();
            if ((g.add(v.join(f)), !c || Ar(u, v, b))) {
              var w = y.validateRules(
                z({ validateMessages: z(z({}, qu), n.validateMessages) }, l),
              );
              d.push(
                w
                  .then(function () {
                    return { name: v, errors: [], warnings: [] };
                  })
                  .catch(function (S) {
                    var k,
                      $ = [],
                      x = [];
                    return (
                      (k = S.forEach) === null ||
                        k === void 0 ||
                        k.call(S, function (O) {
                          var F = O.rule.warningOnly,
                            P = O.errors;
                          F ? x.push.apply(x, K(P)) : $.push.apply($, K(P));
                        }),
                      $.length
                        ? Promise.reject({ name: v, errors: $, warnings: x })
                        : { name: v, errors: $, warnings: x }
                    );
                  }),
              );
            }
          }
        });
        var m = (function (y) {
          var v = !1,
            w = y.length,
            S = [];
          return y.length
            ? new Promise(function (k, $) {
                y.forEach(function (x, O) {
                  x.catch(function (F) {
                    return (v = !0), F;
                  }).then(function (F) {
                    (w -= 1), (S[O] = F), w > 0 || (v && $(S), k(S));
                  });
                });
              })
            : Promise.resolve([]);
        })(d);
        (n.lastValidatePromise = m),
          m
            .catch(function (y) {
              return y;
            })
            .then(function (y) {
              var v = y.map(function (w) {
                return w.name;
              });
              n.notifyObservers(n.store, v, { type: 'validateFinish' }),
                n.triggerOnFieldsChange(v, y);
            });
        var p = m
          .then(function () {
            return n.lastValidatePromise === m
              ? Promise.resolve(n.getFieldsValue(u))
              : Promise.reject([]);
          })
          .catch(function (y) {
            var v = y.filter(function (w) {
              return w && w.errors.length;
            });
            return Promise.reject({
              values: n.getFieldsValue(u),
              errorFields: v,
              outOfDate: n.lastValidatePromise !== m,
            });
          });
        p.catch(function (y) {
          return y;
        });
        var h = u.filter(function (y) {
          return g.has(y.join(f));
        });
        return n.triggerOnFieldsChange(h), p;
      }),
      A(this, 'submit', function () {
        n.warningUnhooked(),
          n
            .validateFields()
            .then(function (r) {
              var o = n.callbacks.onFinish;
              if (o)
                try {
                  o(r);
                } catch (i) {
                  console.error(i);
                }
            })
            .catch(function (r) {
              var o = n.callbacks.onFinishFailed;
              o && o(r);
            });
      }),
      (this.forceRootUpdate = t);
  });
function Ja(e) {
  var t = s.useRef(),
    n = G(s.useState({}), 2)[1];
  if (!t.current)
    if (e) t.current = e;
    else {
      var r = new Lm(function () {
        n({});
      });
      t.current = r.getForm();
    }
  return [t.current];
}
var Ia = s.createContext({
    triggerFormChange: function () {},
    triggerFormFinish: function () {},
    registerForm: function () {},
    unregisterForm: function () {},
  }),
  Qu = function (e) {
    var t = e.validateMessages,
      n = e.onFormChange,
      r = e.onFormFinish,
      o = e.children,
      i = s.useContext(Ia),
      a = s.useRef({});
    return s.createElement(
      Ia.Provider,
      {
        value: z(
          z({}, i),
          {},
          {
            validateMessages: z(z({}, i.validateMessages), t),
            triggerFormChange: function (l, c) {
              n && n(l, { changedFields: c, forms: a.current }),
                i.triggerFormChange(l, c);
            },
            triggerFormFinish: function (l, c) {
              r && r(l, { values: c, forms: a.current }),
                i.triggerFormFinish(l, c);
            },
            registerForm: function (l, c) {
              l && (a.current = z(z({}, a.current), {}, A({}, l, c))),
                i.registerForm(l, c);
            },
            unregisterForm: function (l) {
              var c = z({}, a.current);
              delete c[l], (a.current = c), i.unregisterForm(l);
            },
          },
        ),
      },
      o,
    );
  },
  Hm = [
    'name',
    'initialValues',
    'fields',
    'form',
    'preserve',
    'children',
    'component',
    'validateMessages',
    'validateTrigger',
    'onValuesChange',
    'onFieldsChange',
    'onFinish',
    'onFinishFailed',
  ],
  Bm = function (e, t) {
    var n = e.name,
      r = e.initialValues,
      o = e.fields,
      i = e.form,
      a = e.preserve,
      l = e.children,
      c = e.component,
      u = c === void 0 ? 'form' : c,
      d = e.validateMessages,
      f = e.validateTrigger,
      g = f === void 0 ? 'onChange' : f,
      b = e.onValuesChange,
      m = e.onFieldsChange,
      p = e.onFinish,
      h = e.onFinishFailed,
      y = st(e, Hm),
      v = s.useContext(Ia),
      w = G(Ja(i), 1)[0],
      S = w.getInternalHooks(vn),
      k = S.useSubscribe,
      $ = S.setInitialValues,
      x = S.setCallbacks,
      O = S.setValidateMessages,
      F = S.setPreserve,
      P = S.destroyForm;
    s.useImperativeHandle(t, function () {
      return w;
    }),
      s.useEffect(
        function () {
          return (
            v.registerForm(n, w),
            function () {
              v.unregisterForm(n);
            }
          );
        },
        [v, w, n],
      ),
      O(z(z({}, v.validateMessages), d)),
      x({
        onValuesChange: b,
        onFieldsChange: function (C) {
          if ((v.triggerFormChange(n, C), m)) {
            for (
              var j = arguments.length, M = new Array(j > 1 ? j - 1 : 0), R = 1;
              R < j;
              R++
            )
              M[R - 1] = arguments[R];
            m.apply(void 0, [C].concat(M));
          }
        },
        onFinish: function (C) {
          v.triggerFormFinish(n, C), p && p(C);
        },
        onFinishFailed: h,
      }),
      F(a);
    var N,
      I = s.useRef(null);
    $(r, !I.current),
      I.current || (I.current = !0),
      s.useEffect(function () {
        return P;
      }, []);
    var T = typeof l == 'function';
    T ? (N = l(w.getFieldsValue(!0), w)) : (N = l), k(!T);
    var L = s.useRef();
    s.useEffect(
      function () {
        (function (C, j) {
          if (C === j) return !0;
          if (
            (!C && j) ||
            (C && !j) ||
            !C ||
            !j ||
            pe(C) !== 'object' ||
            pe(j) !== 'object'
          )
            return !1;
          var M = Object.keys(C),
            R = Object.keys(j);
          return K(new Set([].concat(M, R))).every(function (B) {
            var D = C[B],
              H = j[B];
            return (
              (typeof D == 'function' && typeof H == 'function') || D === H
            );
          });
        })(L.current || [], o || []) || w.setFields(o || []),
          (L.current = o);
      },
      [o, w],
    );
    var _ = s.useMemo(
        function () {
          return z(z({}, w), {}, { validateTrigger: g });
        },
        [w, g],
      ),
      E = s.createElement(
        Br.Provider,
        { value: null },
        s.createElement(En.Provider, { value: _ }, N),
      );
    return u === !1
      ? E
      : s.createElement(
          u,
          Se({}, y, {
            onSubmit: function (C) {
              C.preventDefault(), C.stopPropagation(), w.submit();
            },
            onReset: function (C) {
              var j;
              C.preventDefault(),
                w.resetFields(),
                (j = y.onReset) === null || j === void 0 || j.call(y, C);
            },
          }),
          E,
        );
  };
function uc(e) {
  try {
    return JSON.stringify(e);
  } catch {
    return Math.random();
  }
}
function Zu() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var r = t[0],
    o = r === void 0 ? [] : r,
    i = t[1],
    a = i === void 0 ? {} : i,
    l = (function (w) {
      return w && !!w._init;
    })(a)
      ? { form: a }
      : a,
    c = l.form,
    u = G(s.useState(), 2),
    d = u[0],
    f = u[1],
    g = s.useMemo(
      function () {
        return uc(d);
      },
      [d],
    ),
    b = s.useRef(g);
  b.current = g;
  var m = s.useContext(En),
    p = c || m,
    h = p && p._init,
    y = Pe(o),
    v = s.useRef(y);
  return (
    (v.current = y),
    s.useEffect(
      function () {
        if (h) {
          var w = p.getFieldsValue,
            S = (0, (0, p.getInternalHooks)(vn).registerWatch)(function ($, x) {
              var O = St(l.preserve ? x : $, v.current),
                F = uc(O);
              b.current !== F && ((b.current = F), f(O));
            }),
            k = St(l.preserve ? w(!0) : w(), v.current);
          return d !== k && f(k), S;
        }
      },
      [h],
    ),
    d
  );
}
var Xn = s.forwardRef(Bm);
(Xn.FormProvider = Qu),
  (Xn.Field = Za),
  (Xn.List = Yu),
  (Xn.useForm = Ja),
  (Xn.useWatch = Zu);
const qt = s.createContext({
    labelAlign: 'right',
    vertical: !1,
    itemRef: () => {},
  }),
  Ju = s.createContext(null),
  ed = (e) => {
    const t = qr(e, ['prefixCls']);
    return s.createElement(Qu, Object.assign({}, t));
  },
  el = s.createContext({ prefixCls: '' }),
  At = s.createContext({}),
  dc = (e) => {
    let { children: t, status: n, override: r } = e;
    const o = s.useContext(At),
      i = s.useMemo(() => {
        const a = Object.assign({}, o);
        return (
          r && delete a.isFormItemInput,
          n && (delete a.status, delete a.hasFeedback, delete a.feedbackIcon),
          a
        );
      }, [n, r, o]);
    return s.createElement(At.Provider, { value: i }, t);
  },
  Dm = (e) => ({ animationDuration: e, animationFillMode: 'both' }),
  Wm = (e) => ({ animationDuration: e, animationFillMode: 'both' }),
  Vm = function (e, t, n, r) {
    const o =
      arguments.length > 4 && arguments[4] !== void 0 && arguments[4]
        ? '&'
        : '';
    return {
      [`
      ${o}${e}-enter,
      ${o}${e}-appear
    `]: Object.assign(Object.assign({}, Dm(r)), {
        animationPlayState: 'paused',
      }),
      [`${o}${e}-leave`]: Object.assign(Object.assign({}, Wm(r)), {
        animationPlayState: 'paused',
      }),
      [`
      ${o}${e}-enter${e}-enter-active,
      ${o}${e}-appear${e}-appear-active
    `]: { animationName: t, animationPlayState: 'running' },
      [`${o}${e}-leave${e}-leave-active`]: {
        animationName: n,
        animationPlayState: 'running',
        pointerEvents: 'none',
      },
    };
  },
  tl = new ht('antZoomIn', {
    '0%': { transform: 'scale(0.2)', opacity: 0 },
    '100%': { transform: 'scale(1)', opacity: 1 },
  }),
  qm = new ht('antZoomOut', {
    '0%': { transform: 'scale(1)' },
    '100%': { transform: 'scale(0.2)', opacity: 0 },
  }),
  fc = new ht('antZoomBigIn', {
    '0%': { transform: 'scale(0.8)', opacity: 0 },
    '100%': { transform: 'scale(1)', opacity: 1 },
  }),
  pc = new ht('antZoomBigOut', {
    '0%': { transform: 'scale(1)' },
    '100%': { transform: 'scale(0.8)', opacity: 0 },
  }),
  Xm = new ht('antZoomUpIn', {
    '0%': { transform: 'scale(0.8)', transformOrigin: '50% 0%', opacity: 0 },
    '100%': { transform: 'scale(1)', transformOrigin: '50% 0%' },
  }),
  Gm = new ht('antZoomUpOut', {
    '0%': { transform: 'scale(1)', transformOrigin: '50% 0%' },
    '100%': { transform: 'scale(0.8)', transformOrigin: '50% 0%', opacity: 0 },
  }),
  Um = new ht('antZoomLeftIn', {
    '0%': { transform: 'scale(0.8)', transformOrigin: '0% 50%', opacity: 0 },
    '100%': { transform: 'scale(1)', transformOrigin: '0% 50%' },
  }),
  Ym = new ht('antZoomLeftOut', {
    '0%': { transform: 'scale(1)', transformOrigin: '0% 50%' },
    '100%': { transform: 'scale(0.8)', transformOrigin: '0% 50%', opacity: 0 },
  }),
  Km = new ht('antZoomRightIn', {
    '0%': { transform: 'scale(0.8)', transformOrigin: '100% 50%', opacity: 0 },
    '100%': { transform: 'scale(1)', transformOrigin: '100% 50%' },
  }),
  Qm = new ht('antZoomRightOut', {
    '0%': { transform: 'scale(1)', transformOrigin: '100% 50%' },
    '100%': {
      transform: 'scale(0.8)',
      transformOrigin: '100% 50%',
      opacity: 0,
    },
  }),
  Zm = new ht('antZoomDownIn', {
    '0%': { transform: 'scale(0.8)', transformOrigin: '50% 100%', opacity: 0 },
    '100%': { transform: 'scale(1)', transformOrigin: '50% 100%' },
  }),
  Jm = new ht('antZoomDownOut', {
    '0%': { transform: 'scale(1)', transformOrigin: '50% 100%' },
    '100%': {
      transform: 'scale(0.8)',
      transformOrigin: '50% 100%',
      opacity: 0,
    },
  }),
  eh = {
    zoom: { inKeyframes: tl, outKeyframes: qm },
    'zoom-big': { inKeyframes: fc, outKeyframes: pc },
    'zoom-big-fast': { inKeyframes: fc, outKeyframes: pc },
    'zoom-left': { inKeyframes: Um, outKeyframes: Ym },
    'zoom-right': { inKeyframes: Km, outKeyframes: Qm },
    'zoom-up': { inKeyframes: Xm, outKeyframes: Gm },
    'zoom-down': { inKeyframes: Zm, outKeyframes: Jm },
  },
  th = (e, t) => {
    const { antCls: n } = e,
      r = `${n}-${t}`,
      { inKeyframes: o, outKeyframes: i } = eh[t];
    return [
      Vm(
        r,
        o,
        i,
        t === 'zoom-big-fast' ? e.motionDurationFast : e.motionDurationMid,
      ),
      {
        [`
        ${r}-enter,
        ${r}-appear
      `]: {
          transform: 'scale(0)',
          opacity: 0,
          animationTimingFunction: e.motionEaseOutCirc,
          '&-prepare': { transform: 'none' },
        },
        [`${r}-leave`]: { animationTimingFunction: e.motionEaseInOutCirc },
      },
    ];
  },
  nh = (e) => ({
    [e.componentCls]: {
      [`${e.antCls}-motion-collapse-legacy`]: {
        overflow: 'hidden',
        '&-active': {
          transition: `height ${e.motionDurationMid} ${e.motionEaseInOut},
        opacity ${e.motionDurationMid} ${e.motionEaseInOut} !important`,
        },
      },
      [`${e.antCls}-motion-collapse`]: {
        overflow: 'hidden',
        transition: `height ${e.motionDurationMid} ${e.motionEaseInOut},
        opacity ${e.motionDurationMid} ${e.motionEaseInOut} !important`,
      },
    },
  });
var gc = s.createContext(null);
function mc(e) {
  return e ? (Array.isArray(e) ? e : [e]) : [];
}
function rh() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [],
    t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  return arguments.length > 2 && arguments[2]
    ? e[0] === t[0]
    : e[0] === t[0] && e[1] === t[1];
}
function hc(e, t, n, r) {
  return (
    t ||
    (n
      ? { motionName: ''.concat(e, '-').concat(n) }
      : r
      ? { motionName: r }
      : null)
  );
}
function Rr(e) {
  return e.ownerDocument.defaultView;
}
function Vi(e) {
  for (
    var t = [],
      n = e == null ? void 0 : e.parentElement,
      r = ['hidden', 'scroll', 'clip', 'auto'];
    n;

  ) {
    var o = Rr(n).getComputedStyle(n);
    [o.overflowX, o.overflowY, o.overflow].some(function (i) {
      return r.includes(i);
    }) && t.push(n),
      (n = n.parentElement);
  }
  return t;
}
function Wr(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  return Number.isNaN(e) ? t : e;
}
function Or(e) {
  return Wr(parseFloat(e), 0);
}
function vc(e, t) {
  var n = z({}, e);
  return (
    (t || []).forEach(function (r) {
      if (!(r instanceof HTMLBodyElement || r instanceof HTMLHtmlElement)) {
        var o = Rr(r).getComputedStyle(r),
          i = o.overflow,
          a = o.overflowClipMargin,
          l = o.borderTopWidth,
          c = o.borderBottomWidth,
          u = o.borderLeftWidth,
          d = o.borderRightWidth,
          f = r.getBoundingClientRect(),
          g = r.offsetHeight,
          b = r.clientHeight,
          m = r.offsetWidth,
          p = r.clientWidth,
          h = Or(l),
          y = Or(c),
          v = Or(u),
          w = Or(d),
          S = Wr(Math.round((f.width / m) * 1e3) / 1e3),
          k = Wr(Math.round((f.height / g) * 1e3) / 1e3),
          $ = (m - p - v - w) * S,
          x = (g - b - h - y) * k,
          O = h * k,
          F = y * k,
          P = v * S,
          N = w * S,
          I = 0,
          T = 0;
        if (i === 'clip') {
          var L = Or(a);
          (I = L * S), (T = L * k);
        }
        var _ = f.x + P - I,
          E = f.y + O - T,
          C = _ + f.width + 2 * I - P - N - $,
          j = E + f.height + 2 * T - O - F - x;
        (n.left = Math.max(n.left, _)),
          (n.top = Math.max(n.top, E)),
          (n.right = Math.min(n.right, C)),
          (n.bottom = Math.min(n.bottom, j));
      }
    }),
    n
  );
}
function bc(e) {
  var t = ''.concat(
      arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0,
    ),
    n = t.match(/^(.*)\%$/);
  return n ? e * (parseFloat(n[1]) / 100) : parseFloat(t);
}
function yc(e, t) {
  var n = G(t || [], 2),
    r = n[0],
    o = n[1];
  return [bc(e.width, r), bc(e.height, o)];
}
function xc() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : '';
  return [e[0], e[1]];
}
function Hn(e, t) {
  var n,
    r = t[0],
    o = t[1];
  return (
    (n = r === 't' ? e.y : r === 'b' ? e.y + e.height : e.y + e.height / 2),
    { x: o === 'l' ? e.x : o === 'r' ? e.x + e.width : e.x + e.width / 2, y: n }
  );
}
function Zt(e, t) {
  var n = { t: 'b', b: 't', l: 'r', r: 'l' };
  return e
    .map(function (r, o) {
      return o === t ? n[r] || 'c' : r;
    })
    .join('');
}
function oh(e) {
  var t = e.prefixCls,
    n = e.align,
    r = e.arrow,
    o = e.arrowPos,
    i = r || {},
    a = i.className,
    l = i.content,
    c = o.x,
    u = c === void 0 ? 0 : c,
    d = o.y,
    f = d === void 0 ? 0 : d,
    g = s.useRef();
  if (!n || !n.points) return null;
  var b = { position: 'absolute' };
  if (n.autoArrow !== !1) {
    var m = n.points[0],
      p = n.points[1],
      h = m[0],
      y = m[1],
      v = p[0],
      w = p[1];
    h !== v && ['t', 'b'].includes(h)
      ? h === 't'
        ? (b.top = 0)
        : (b.bottom = 0)
      : (b.top = f),
      y !== w && ['l', 'r'].includes(y)
        ? y === 'l'
          ? (b.left = 0)
          : (b.right = 0)
        : (b.left = u);
  }
  return s.createElement(
    'div',
    { ref: g, className: Q(''.concat(t, '-arrow'), a), style: b },
    l,
  );
}
function ih(e) {
  var t = e.prefixCls,
    n = e.open,
    r = e.zIndex,
    o = e.mask,
    i = e.motion;
  return o
    ? s.createElement(
        nr,
        Se({}, i, { motionAppear: !0, visible: n, removeOnLeave: !0 }),
        function (a) {
          var l = a.className;
          return s.createElement('div', {
            style: { zIndex: r },
            className: Q(''.concat(t, '-mask'), l),
          });
        },
      )
    : null;
}
var ah = s.memo(
    function (e) {
      return e.children;
    },
    function (e, t) {
      return t.cache;
    },
  ),
  lh = s.forwardRef(function (e, t) {
    var n = e.popup,
      r = e.className,
      o = e.prefixCls,
      i = e.style,
      a = e.target,
      l = e.onVisibleChanged,
      c = e.open,
      u = e.keepDom,
      d = e.onClick,
      f = e.mask,
      g = e.arrow,
      b = e.arrowPos,
      m = e.align,
      p = e.motion,
      h = e.maskMotion,
      y = e.forceRender,
      v = e.getPopupContainer,
      w = e.autoDestroy,
      S = e.portal,
      k = e.zIndex,
      $ = e.onMouseEnter,
      x = e.onMouseLeave,
      O = e.onPointerEnter,
      F = e.ready,
      P = e.offsetX,
      N = e.offsetY,
      I = e.offsetR,
      T = e.offsetB,
      L = e.onAlign,
      _ = e.onPrepare,
      E = e.stretch,
      C = e.targetWidth,
      j = e.targetHeight,
      M = typeof n == 'function' ? n() : n,
      R = c || u,
      B = (v == null ? void 0 : v.length) > 0,
      D = G(s.useState(!v || !B), 2),
      H = D[0],
      W = D[1];
    if (
      (He(
        function () {
          !H && B && a && W(!0);
        },
        [H, B, a],
      ),
      !H)
    )
      return null;
    var X = 'auto',
      q = { left: '-1000vw', top: '-1000vh', right: X, bottom: X };
    if (F || !c) {
      var Z = m.points,
        ce = m._experimental,
        ge = ce == null ? void 0 : ce.dynamicInset,
        Oe = ge && Z[0][1] === 'r',
        re = ge && Z[0][0] === 'b';
      Oe ? ((q.right = I), (q.left = X)) : ((q.left = P), (q.right = X)),
        re ? ((q.bottom = T), (q.top = X)) : ((q.top = N), (q.bottom = X));
    }
    var U = {};
    return (
      E &&
        (E.includes('height') && j
          ? (U.height = j)
          : E.includes('minHeight') && j && (U.minHeight = j),
        E.includes('width') && C
          ? (U.width = C)
          : E.includes('minWidth') && C && (U.minWidth = C)),
      c || (U.pointerEvents = 'none'),
      s.createElement(
        S,
        {
          open: y || R,
          getContainer:
            v &&
            function () {
              return v(a);
            },
          autoDestroy: w,
        },
        s.createElement(ih, {
          prefixCls: o,
          open: c,
          zIndex: k,
          mask: f,
          motion: h,
        }),
        s.createElement(ri, { onResize: L, disabled: !c }, function (ee) {
          return s.createElement(
            nr,
            Se(
              {
                motionAppear: !0,
                motionEnter: !0,
                motionLeave: !0,
                removeOnLeave: !1,
                forceRender: y,
                leavedClassName: ''.concat(o, '-hidden'),
              },
              p,
              {
                onAppearPrepare: _,
                onEnterPrepare: _,
                visible: c,
                onVisibleChanged: function (be) {
                  var Fe;
                  p == null ||
                    (Fe = p.onVisibleChanged) === null ||
                    Fe === void 0 ||
                    Fe.call(p, be),
                    l(be);
                },
              },
            ),
            function (be, Fe) {
              var De = be.className,
                we = be.style,
                $e = Q(o, De, r);
              return s.createElement(
                'div',
                {
                  ref: Xt(ee, t, Fe),
                  className: $e,
                  style: z(
                    z(
                      z(
                        z(
                          {
                            '--arrow-x': ''.concat(b.x || 0, 'px'),
                            '--arrow-y': ''.concat(b.y || 0, 'px'),
                          },
                          q,
                        ),
                        U,
                      ),
                      we,
                    ),
                    {},
                    { boxSizing: 'border-box', zIndex: k },
                    i,
                  ),
                  onMouseEnter: $,
                  onMouseLeave: x,
                  onPointerEnter: O,
                  onClick: d,
                },
                g &&
                  s.createElement(oh, {
                    prefixCls: o,
                    arrow: g,
                    arrowPos: b,
                    align: m,
                  }),
                s.createElement(ah, { cache: !c }, M),
              );
            },
          );
        }),
      )
    );
  }),
  sh = s.forwardRef(function (e, t) {
    var n = e.children,
      r = e.getTriggerDOMNode,
      o = tr(n),
      i = s.useCallback(
        function (l) {
          _a(t, r ? r(l) : l);
        },
        [r],
      ),
      a = Rc(i, n.ref);
    return o ? s.cloneElement(n, { ref: a }) : n;
  }),
  ch = [
    'prefixCls',
    'children',
    'action',
    'showAction',
    'hideAction',
    'popupVisible',
    'defaultPopupVisible',
    'onPopupVisibleChange',
    'afterPopupVisibleChange',
    'mouseEnterDelay',
    'mouseLeaveDelay',
    'focusDelay',
    'blurDelay',
    'mask',
    'maskClosable',
    'getPopupContainer',
    'forceRender',
    'autoDestroy',
    'destroyPopupOnHide',
    'popup',
    'popupClassName',
    'popupStyle',
    'popupPlacement',
    'builtinPlacements',
    'popupAlign',
    'zIndex',
    'stretch',
    'getPopupClassNameFromAlign',
    'alignPoint',
    'onPopupClick',
    'onPopupAlign',
    'arrow',
    'popupMotion',
    'maskMotion',
    'popupTransitionName',
    'popupAnimation',
    'maskTransitionName',
    'maskAnimation',
    'className',
    'getTriggerDOMNode',
  ];
const uh = (function () {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Zs,
    t = s.forwardRef(function (n, r) {
      var o = n.prefixCls,
        i = o === void 0 ? 'rc-trigger-popup' : o,
        a = n.children,
        l = n.action,
        c = l === void 0 ? 'hover' : l,
        u = n.showAction,
        d = n.hideAction,
        f = n.popupVisible,
        g = n.defaultPopupVisible,
        b = n.onPopupVisibleChange,
        m = n.afterPopupVisibleChange,
        p = n.mouseEnterDelay,
        h = n.mouseLeaveDelay,
        y = h === void 0 ? 0.1 : h,
        v = n.focusDelay,
        w = n.blurDelay,
        S = n.mask,
        k = n.maskClosable,
        $ = k === void 0 || k,
        x = n.getPopupContainer,
        O = n.forceRender,
        F = n.autoDestroy,
        P = n.destroyPopupOnHide,
        N = n.popup,
        I = n.popupClassName,
        T = n.popupStyle,
        L = n.popupPlacement,
        _ = n.builtinPlacements,
        E = _ === void 0 ? {} : _,
        C = n.popupAlign,
        j = n.zIndex,
        M = n.stretch,
        R = n.getPopupClassNameFromAlign,
        B = n.alignPoint,
        D = n.onPopupClick,
        H = n.onPopupAlign,
        W = n.arrow,
        X = n.popupMotion,
        q = n.maskMotion,
        Z = n.popupTransitionName,
        ce = n.popupAnimation,
        ge = n.maskTransitionName,
        Oe = n.maskAnimation,
        re = n.className,
        U = n.getTriggerDOMNode,
        ee = st(n, ch),
        be = F || P || !1,
        Fe = G(s.useState(!1), 2),
        De = Fe[0],
        we = Fe[1];
      He(function () {
        we(
          (function () {
            if (typeof navigator > 'u' || typeof window > 'u') return !1;
            var V = navigator.userAgent || navigator.vendor || window.opera;
            return (
              /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(
                V,
              ) ||
              /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(
                V == null ? void 0 : V.substr(0, 4),
              )
            );
          })(),
        );
      }, []);
      var $e = s.useRef({}),
        ie = s.useContext(gc),
        Ce = s.useMemo(
          function () {
            return {
              registerSubPopup: function (V, J) {
                ($e.current[V] = J), ie == null || ie.registerSubPopup(V, J);
              },
            };
          },
          [ie],
        ),
        Ye = jm(),
        rn = G(s.useState(null), 2),
        Ee = rn[0],
        Gt = rn[1],
        kn = Mt(function (V) {
          Ao(V) && Ee !== V && Gt(V), ie == null || ie.registerSubPopup(Ye, V);
        }),
        jn = G(s.useState(null), 2),
        Ze = jn[0],
        on = jn[1],
        an = Mt(function (V) {
          Ao(V) && Ze !== V && on(V);
        }),
        kt = s.Children.only(a),
        Me = (kt == null ? void 0 : kt.props) || {},
        vt = {},
        jt = Mt(function (V) {
          var J,
            ae,
            ue = Ze;
          return (
            (ue == null ? void 0 : ue.contains(V)) ||
            ((J = Bo(ue)) === null || J === void 0 ? void 0 : J.host) === V ||
            V === ue ||
            (Ee == null ? void 0 : Ee.contains(V)) ||
            ((ae = Bo(Ee)) === null || ae === void 0 ? void 0 : ae.host) ===
              V ||
            V === Ee ||
            Object.values($e.current).some(function (de) {
              return (de == null ? void 0 : de.contains(V)) || V === de;
            })
          );
        }),
        rr = hc(i, X, ce, Z),
        Ut = hc(i, q, Oe, ge),
        ct = G(s.useState(g || !1), 2),
        Tt = ct[0],
        Nt = ct[1],
        je = f ?? Tt,
        Ne = Mt(function (V) {
          f === void 0 && Nt(V);
        });
      He(
        function () {
          Nt(f || !1);
        },
        [f],
      );
      var ut = s.useRef(je);
      ut.current = je;
      var Yt = Mt(function (V) {
          kc.flushSync(function () {
            je !== V && (Ne(V), b == null || b(V));
          });
        }),
        te = s.useRef(),
        ne = function () {
          clearTimeout(te.current);
        },
        oe = function (V) {
          var J =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
          ne(),
            J === 0
              ? Yt(V)
              : (te.current = setTimeout(function () {
                  Yt(V);
                }, 1e3 * J));
        };
      s.useEffect(function () {
        return ne;
      }, []);
      var he = G(s.useState(!1), 2),
        Ke = he[0],
        bt = he[1];
      He(
        function (V) {
          (V && !je) || bt(!0);
        },
        [je],
      );
      var ln = G(s.useState(null), 2),
        sn = ln[0],
        Kr = ln[1],
        Qr = G(s.useState([0, 0]), 2),
        dt = Qr[0],
        Od = Qr[1],
        Zr = function (V) {
          Od([V.clientX, V.clientY]);
        },
        kd = (function (V, J, ae, ue, de, Ve, Ie) {
          var _e = G(
              s.useState({
                ready: !1,
                offsetX: 0,
                offsetY: 0,
                offsetR: 0,
                offsetB: 0,
                arrowX: 0,
                arrowY: 0,
                scaleX: 1,
                scaleY: 1,
                align: de[ue] || {},
              }),
              2,
            ),
            ye = _e[0],
            ft = _e[1],
            Je = s.useRef(0),
            _t = s.useMemo(
              function () {
                return J ? Vi(J) : [];
              },
              [J],
            ),
            qe = s.useRef({});
          V || (qe.current = {});
          var Mn = Mt(function () {
              if (J && ae && V) {
                let Ft = function (Cr, kf) {
                    var so =
                        arguments.length > 2 && arguments[2] !== void 0
                          ? arguments[2]
                          : vl,
                      Dl = Xe.x + Cr,
                      Wl = Xe.y + kf,
                      jf = Dl + Tn,
                      Pf = Wl + In,
                      Ff = Math.max(Dl, so.left),
                      Mf = Math.max(Wl, so.top),
                      Af = Math.min(jf, so.right),
                      Rf = Math.min(Pf, so.bottom);
                    return Math.max(0, (Af - Ff) * (Rf - Mf));
                  },
                  Bl = function () {
                    (gr = Xe.y + Le),
                      (oo = gr + In),
                      (mr = Xe.x + ze),
                      (io = mr + Tn);
                  };
                var Pt,
                  Kt,
                  xe,
                  le = J,
                  ar = le.ownerDocument,
                  cn = Rr(le).getComputedStyle(le),
                  lr = cn.width,
                  Ud = cn.height,
                  Yd = cn.position,
                  Kd = le.style.left,
                  Qd = le.style.top,
                  Zd = le.style.right,
                  Jd = le.style.bottom,
                  An = z(z({}, de[ue]), Ve),
                  un = ar.createElement('div');
                if (
                  ((Pt = le.parentElement) === null ||
                    Pt === void 0 ||
                    Pt.appendChild(un),
                  (un.style.left = ''.concat(le.offsetLeft, 'px')),
                  (un.style.top = ''.concat(le.offsetTop, 'px')),
                  (un.style.position = Yd),
                  (un.style.height = ''.concat(le.offsetHeight, 'px')),
                  (un.style.width = ''.concat(le.offsetWidth, 'px')),
                  (le.style.left = '0'),
                  (le.style.top = '0'),
                  (le.style.right = 'auto'),
                  (le.style.bottom = 'auto'),
                  Array.isArray(ae))
                )
                  xe = { x: ae[0], y: ae[1], width: 0, height: 0 };
                else {
                  var no = ae.getBoundingClientRect();
                  xe = { x: no.x, y: no.y, width: no.width, height: no.height };
                }
                var Xe = le.getBoundingClientRect(),
                  Rn = ar.documentElement,
                  ef = Rn.clientWidth,
                  tf = Rn.clientHeight,
                  nf = Rn.scrollWidth,
                  rf = Rn.scrollHeight,
                  pl = Rn.scrollTop,
                  gl = Rn.scrollLeft,
                  In = Xe.height,
                  Tn = Xe.width,
                  sr = xe.height,
                  cr = xe.width,
                  of = { left: 0, top: 0, right: ef, bottom: tf },
                  af = { left: -gl, top: -pl, right: nf - gl, bottom: rf - pl },
                  ur = An.htmlRegion,
                  ml = 'visible',
                  hl = 'visibleFirst';
                ur !== 'scroll' && ur !== hl && (ur = ml);
                var dr = ur === hl,
                  lf = vc(af, _t),
                  ke = vc(of, _t),
                  vl = ur === ml ? ke : lf,
                  ro = dr ? ke : vl;
                (le.style.left = 'auto'),
                  (le.style.top = 'auto'),
                  (le.style.right = '0'),
                  (le.style.bottom = '0');
                var bl = le.getBoundingClientRect();
                (le.style.left = Kd),
                  (le.style.top = Qd),
                  (le.style.right = Zd),
                  (le.style.bottom = Jd),
                  (Kt = le.parentElement) === null ||
                    Kt === void 0 ||
                    Kt.removeChild(un);
                var fr = Wr(Math.round((Tn / parseFloat(lr)) * 1e3) / 1e3),
                  pr = Wr(Math.round((In / parseFloat(Ud)) * 1e3) / 1e3);
                if (fr === 0 || pr === 0 || (Ao(ae) && !Ua(ae))) return;
                var sf = An.offset,
                  cf = An.targetOffset,
                  yl = G(yc(Xe, sf), 2),
                  zt = yl[0],
                  Lt = yl[1],
                  xl = G(yc(xe, cf), 2),
                  uf = xl[0],
                  df = xl[1];
                (xe.x -= uf), (xe.y -= df);
                var wl = G(An.points || [], 2),
                  ff = wl[0],
                  dn = xc(wl[1]),
                  xt = xc(ff),
                  Cl = Hn(xe, dn),
                  $l = Hn(Xe, xt),
                  Nn = z({}, An),
                  ze = Cl.x - $l.x + zt,
                  Le = Cl.y - $l.y + Lt,
                  gr,
                  oo,
                  mr,
                  io,
                  Qt = Ft(ze, Le),
                  ao = Ft(ze, Le, ke),
                  El = Hn(xe, ['t', 'l']),
                  Sl = Hn(Xe, ['t', 'l']),
                  Ol = Hn(xe, ['b', 'r']),
                  kl = Hn(Xe, ['b', 'r']),
                  lo = An.overflow || {},
                  pf = lo.adjustX,
                  gf = lo.adjustY,
                  jl = lo.shiftX,
                  Pl = lo.shiftY,
                  Fl = function (Cr) {
                    return typeof Cr == 'boolean' ? Cr : Cr >= 0;
                  };
                Bl();
                var Ml = Fl(gf),
                  Al = xt[0] === dn[0];
                if (Ml && xt[0] === 't' && (oo > ro.bottom || qe.current.bt)) {
                  var hr = Le;
                  Al ? (hr -= In - sr) : (hr = El.y - kl.y - Lt);
                  var Rl = Ft(ze, hr),
                    mf = Ft(ze, hr, ke);
                  Rl > Qt || (Rl === Qt && (!dr || mf >= ao))
                    ? ((qe.current.bt = !0),
                      (Le = hr),
                      (Lt = -Lt),
                      (Nn.points = [Zt(xt, 0), Zt(dn, 0)]))
                    : (qe.current.bt = !1);
                }
                if (Ml && xt[0] === 'b' && (gr < ro.top || qe.current.tb)) {
                  var vr = Le;
                  Al ? (vr += In - sr) : (vr = Ol.y - Sl.y - Lt);
                  var Il = Ft(ze, vr),
                    hf = Ft(ze, vr, ke);
                  Il > Qt || (Il === Qt && (!dr || hf >= ao))
                    ? ((qe.current.tb = !0),
                      (Le = vr),
                      (Lt = -Lt),
                      (Nn.points = [Zt(xt, 0), Zt(dn, 0)]))
                    : (qe.current.tb = !1);
                }
                var Tl = Fl(pf),
                  Nl = xt[1] === dn[1];
                if (Tl && xt[1] === 'l' && (io > ro.right || qe.current.rl)) {
                  var br = ze;
                  Nl ? (br -= Tn - cr) : (br = El.x - kl.x - zt);
                  var _l = Ft(br, Le),
                    vf = Ft(br, Le, ke);
                  _l > Qt || (_l === Qt && (!dr || vf >= ao))
                    ? ((qe.current.rl = !0),
                      (ze = br),
                      (zt = -zt),
                      (Nn.points = [Zt(xt, 1), Zt(dn, 1)]))
                    : (qe.current.rl = !1);
                }
                if (Tl && xt[1] === 'r' && (mr < ro.left || qe.current.lr)) {
                  var yr = ze;
                  Nl ? (yr += Tn - cr) : (yr = Ol.x - Sl.x - zt);
                  var zl = Ft(yr, Le),
                    bf = Ft(yr, Le, ke);
                  zl > Qt || (zl === Qt && (!dr || bf >= ao))
                    ? ((qe.current.lr = !0),
                      (ze = yr),
                      (zt = -zt),
                      (Nn.points = [Zt(xt, 1), Zt(dn, 1)]))
                    : (qe.current.lr = !1);
                }
                Bl();
                var xr = jl === !0 ? 0 : jl;
                typeof xr == 'number' &&
                  (mr < ke.left &&
                    ((ze -= mr - ke.left - zt),
                    xe.x + cr < ke.left + xr &&
                      (ze += xe.x - ke.left + cr - xr)),
                  io > ke.right &&
                    ((ze -= io - ke.right - zt),
                    xe.x > ke.right - xr && (ze += xe.x - ke.right + xr)));
                var wr = Pl === !0 ? 0 : Pl;
                typeof wr == 'number' &&
                  (gr < ke.top &&
                    ((Le -= gr - ke.top - Lt),
                    xe.y + sr < ke.top + wr && (Le += xe.y - ke.top + sr - wr)),
                  oo > ke.bottom &&
                    ((Le -= oo - ke.bottom - Lt),
                    xe.y > ke.bottom - wr && (Le += xe.y - ke.bottom + wr)));
                var pi = Xe.x + ze,
                  yf = pi + Tn,
                  gi = Xe.y + Le,
                  xf = gi + In,
                  Ll = xe.x,
                  wf = Ll + cr,
                  Hl = xe.y,
                  Cf = Hl + sr,
                  $f = (Math.max(pi, Ll) + Math.min(yf, wf)) / 2 - pi,
                  Ef = (Math.max(gi, Hl) + Math.min(xf, Cf)) / 2 - gi;
                Ie == null || Ie(J, Nn);
                var Sf = bl.right - Xe.x - (ze + Xe.width),
                  Of = bl.bottom - Xe.y - (Le + Xe.height);
                ft({
                  ready: !0,
                  offsetX: ze / fr,
                  offsetY: Le / pr,
                  offsetR: Sf / fr,
                  offsetB: Of / pr,
                  arrowX: $f / fr,
                  arrowY: Ef / pr,
                  scaleX: fr,
                  scaleY: pr,
                  align: Nn,
                });
              }
            }),
            ir = function () {
              ft(function (Pt) {
                return z(z({}, Pt), {}, { ready: !1 });
              });
            };
          return (
            He(ir, [ue]),
            He(
              function () {
                V || ir();
              },
              [V],
            ),
            [
              ye.ready,
              ye.offsetX,
              ye.offsetY,
              ye.offsetR,
              ye.offsetB,
              ye.arrowX,
              ye.arrowY,
              ye.scaleX,
              ye.scaleY,
              ye.align,
              function () {
                Je.current += 1;
                var Pt = Je.current;
                Promise.resolve().then(function () {
                  Je.current === Pt && Mn();
                });
              },
            ]
          );
        })(je, Ee, B ? dt : Ze, L, E, C, H),
        yt = G(kd, 11),
        jd = yt[0],
        Pd = yt[1],
        Fd = yt[2],
        Md = yt[3],
        Ad = yt[4],
        Rd = yt[5],
        Id = yt[6],
        Td = yt[7],
        Nd = yt[8],
        Jr = yt[9],
        ui = yt[10],
        _d = (function (V, J, ae, ue) {
          return s.useMemo(
            function () {
              var de = mc(ae ?? J),
                Ve = mc(ue ?? J),
                Ie = new Set(de),
                _e = new Set(Ve);
              return (
                V &&
                  (Ie.has('hover') && (Ie.delete('hover'), Ie.add('click')),
                  _e.has('hover') && (_e.delete('hover'), _e.add('click'))),
                [Ie, _e]
              );
            },
            [V, J, ae, ue],
          );
        })(De, c, u, d),
        al = G(_d, 2),
        eo = al[0],
        or = al[1],
        ll = eo.has('click'),
        to = or.has('click') || or.has('contextMenu'),
        Pn = Mt(function () {
          Ke || ui();
        });
      (function (V, J, ae, ue, de) {
        He(
          function () {
            if (V && J && ae) {
              let Je = function () {
                ue(), de();
              };
              var Ve = ae,
                Ie = Vi(J),
                _e = Vi(Ve),
                ye = Rr(Ve),
                ft = new Set([ye].concat(K(Ie), K(_e)));
              return (
                ft.forEach(function (_t) {
                  _t.addEventListener('scroll', Je, { passive: !0 });
                }),
                ye.addEventListener('resize', Je, { passive: !0 }),
                ue(),
                function () {
                  ft.forEach(function (_t) {
                    _t.removeEventListener('scroll', Je),
                      ye.removeEventListener('resize', Je);
                  });
                }
              );
            }
          },
          [V, J, ae],
        );
      })(je, Ze, Ee, Pn, function () {
        ut.current && B && to && oe(!1);
      }),
        He(
          function () {
            Pn();
          },
          [dt, L],
        ),
        He(
          function () {
            !je || (E != null && E[L]) || Pn();
          },
          [JSON.stringify(C)],
        );
      var zd = s.useMemo(
        function () {
          var V = (function (J, ae, ue, de) {
            for (
              var Ve = ue.points, Ie = Object.keys(J), _e = 0;
              _e < Ie.length;
              _e += 1
            ) {
              var ye,
                ft = Ie[_e];
              if (
                rh(
                  (ye = J[ft]) === null || ye === void 0 ? void 0 : ye.points,
                  Ve,
                  de,
                )
              )
                return ''.concat(ae, '-placement-').concat(ft);
            }
            return '';
          })(E, i, Jr, B);
          return Q(V, R == null ? void 0 : R(Jr));
        },
        [Jr, R, E, i, B],
      );
      s.useImperativeHandle(r, function () {
        return { forceAlign: Pn };
      });
      var sl = G(s.useState(0), 2),
        Ld = sl[0],
        Hd = sl[1],
        cl = G(s.useState(0), 2),
        Bd = cl[0],
        Dd = cl[1],
        ul = function () {
          if (M && Ze) {
            var V = Ze.getBoundingClientRect();
            Hd(V.width), Dd(V.height);
          }
        };
      function Fn(V, J, ae, ue) {
        vt[V] = function (de) {
          var Ve;
          ue == null || ue(de), oe(J, ae);
          for (
            var Ie = arguments.length,
              _e = new Array(Ie > 1 ? Ie - 1 : 0),
              ye = 1;
            ye < Ie;
            ye++
          )
            _e[ye - 1] = arguments[ye];
          (Ve = Me[V]) === null ||
            Ve === void 0 ||
            Ve.call.apply(Ve, [Me, de].concat(_e));
        };
      }
      He(
        function () {
          sn && (ui(), sn(), Kr(null));
        },
        [sn],
      ),
        (ll || to) &&
          (vt.onClick = function (V) {
            var J;
            ut.current && to ? oe(!1) : !ut.current && ll && (Zr(V), oe(!0));
            for (
              var ae = arguments.length,
                ue = new Array(ae > 1 ? ae - 1 : 0),
                de = 1;
              de < ae;
              de++
            )
              ue[de - 1] = arguments[de];
            (J = Me.onClick) === null ||
              J === void 0 ||
              J.call.apply(J, [Me, V].concat(ue));
          }),
        (function (V, J, ae, ue, de, Ve, Ie, _e) {
          var ye = s.useRef(V),
            ft = s.useRef(!1);
          ye.current !== V && ((ft.current = !0), (ye.current = V)),
            s.useEffect(
              function () {
                var Je = lt(function () {
                  ft.current = !1;
                });
                return function () {
                  lt.cancel(Je);
                };
              },
              [V],
            ),
            s.useEffect(
              function () {
                if (J && ue && (!de || Ve)) {
                  var Je = function () {
                      var ar = !1;
                      return [
                        function (cn) {
                          var lr = cn.target;
                          ar = Ie(lr);
                        },
                        function (cn) {
                          var lr = cn.target;
                          ft.current || !ye.current || ar || Ie(lr) || _e(!1);
                        },
                      ];
                    },
                    _t = G(Je(), 2),
                    qe = _t[0],
                    Mn = _t[1],
                    ir = G(Je(), 2),
                    Pt = ir[0],
                    Kt = ir[1],
                    xe = Rr(ue);
                  xe.addEventListener('mousedown', qe, !0),
                    xe.addEventListener('click', Mn, !0),
                    xe.addEventListener('contextmenu', Mn, !0);
                  var le = Bo(ae);
                  return (
                    le &&
                      (le.addEventListener('mousedown', Pt, !0),
                      le.addEventListener('click', Kt, !0),
                      le.addEventListener('contextmenu', Kt, !0)),
                    function () {
                      xe.removeEventListener('mousedown', qe, !0),
                        xe.removeEventListener('click', Mn, !0),
                        xe.removeEventListener('contextmenu', Mn, !0),
                        le &&
                          (le.removeEventListener('mousedown', Pt, !0),
                          le.removeEventListener('click', Kt, !0),
                          le.removeEventListener('contextmenu', Kt, !0));
                    }
                  );
                }
              },
              [J, ae, ue, de, Ve],
            );
        })(je, to, Ze, Ee, S, $, jt, oe);
      var di,
        dl,
        Wd = eo.has('hover'),
        Vd = or.has('hover');
      Wd &&
        (Fn('onMouseEnter', !0, p, function (V) {
          Zr(V);
        }),
        Fn('onPointerEnter', !0, p, function (V) {
          Zr(V);
        }),
        (di = function () {
          (je || Ke) && oe(!0, p);
        }),
        B &&
          (vt.onMouseMove = function (V) {
            var J;
            (J = Me.onMouseMove) === null || J === void 0 || J.call(Me, V);
          })),
        Vd &&
          (Fn('onMouseLeave', !1, y),
          Fn('onPointerLeave', !1, y),
          (dl = function () {
            oe(!1, y);
          })),
        eo.has('focus') && Fn('onFocus', !0, v),
        or.has('focus') && Fn('onBlur', !1, w),
        eo.has('contextMenu') &&
          (vt.onContextMenu = function (V) {
            var J;
            ut.current && or.has('contextMenu') ? oe(!1) : (Zr(V), oe(!0)),
              V.preventDefault();
            for (
              var ae = arguments.length,
                ue = new Array(ae > 1 ? ae - 1 : 0),
                de = 1;
              de < ae;
              de++
            )
              ue[de - 1] = arguments[de];
            (J = Me.onContextMenu) === null ||
              J === void 0 ||
              J.call.apply(J, [Me, V].concat(ue));
          }),
        re && (vt.className = Q(Me.className, re));
      var fi = z(z({}, Me), vt),
        fl = {};
      [
        'onContextMenu',
        'onClick',
        'onMouseDown',
        'onTouchStart',
        'onMouseEnter',
        'onMouseLeave',
        'onFocus',
        'onBlur',
      ].forEach(function (V) {
        ee[V] &&
          (fl[V] = function () {
            for (
              var J, ae = arguments.length, ue = new Array(ae), de = 0;
              de < ae;
              de++
            )
              ue[de] = arguments[de];
            (J = fi[V]) === null ||
              J === void 0 ||
              J.call.apply(J, [fi].concat(ue)),
              ee[V].apply(ee, ue);
          });
      });
      var qd = s.cloneElement(kt, z(z({}, fi), fl)),
        Xd = { x: Rd, y: Id },
        Gd = W ? z({}, W !== !0 ? W : {}) : null;
      return s.createElement(
        s.Fragment,
        null,
        s.createElement(
          ri,
          {
            disabled: !je,
            ref: an,
            onResize: function () {
              ul(), Pn();
            },
          },
          s.createElement(sh, { getTriggerDOMNode: U }, qd),
        ),
        s.createElement(
          gc.Provider,
          { value: Ce },
          s.createElement(lh, {
            portal: e,
            ref: kn,
            prefixCls: i,
            popup: N,
            className: Q(I, zd),
            style: T,
            target: Ze,
            onMouseEnter: di,
            onMouseLeave: dl,
            onPointerEnter: di,
            zIndex: j,
            open: je,
            keepDom: Ke,
            onClick: D,
            mask: S,
            motion: rr,
            maskMotion: Ut,
            onVisibleChanged: function (V) {
              bt(!1), ui(), m == null || m(V);
            },
            onPrepare: function () {
              return new Promise(function (V) {
                ul(),
                  Kr(function () {
                    return V;
                  });
              });
            },
            forceRender: O,
            autoDestroy: be,
            getPopupContainer: x,
            align: Jr,
            arrow: Gd,
            arrowPos: Xd,
            ready: jd,
            offsetX: Pd,
            offsetY: Fd,
            offsetR: Md,
            offsetB: Ad,
            onAlign: Pn,
            stretch: M,
            targetWidth: Ld / Td,
            targetHeight: Bd / Nd,
          }),
        ),
      );
    });
  return t;
})(Zs);
function Ir(e, t, n) {
  return Q({
    [`${e}-status-success`]: t === 'success',
    [`${e}-status-warning`]: t === 'warning',
    [`${e}-status-error`]: t === 'error',
    [`${e}-status-validating`]: t === 'validating',
    [`${e}-has-feedback`]: n,
  });
}
const td = (e, t) => t || e,
  dh = {
    icon: {
      tag: 'svg',
      attrs: { viewBox: '64 64 896 896', focusable: 'false' },
      children: [
        {
          tag: 'path',
          attrs: {
            d: 'M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z',
          },
        },
      ],
    },
    name: 'search',
    theme: 'outlined',
  };
var fh = function (e, t) {
  return s.createElement(nn, Se({}, e, { ref: t, icon: dh }));
};
const ph = s.forwardRef(fh),
  Vr = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs'];
function gh() {
  const [, e] = Sn(),
    t = ((n) => ({
      xs: `(max-width: ${n.screenXSMax}px)`,
      sm: `(min-width: ${n.screenSM}px)`,
      md: `(min-width: ${n.screenMD}px)`,
      lg: `(min-width: ${n.screenLG}px)`,
      xl: `(min-width: ${n.screenXL}px)`,
      xxl: `(min-width: ${n.screenXXL}px)`,
    }))(
      ((n) => {
        const r = n,
          o = [].concat(Vr).reverse();
        return (
          o.forEach((i, a) => {
            const l = i.toUpperCase(),
              c = `screen${l}Min`,
              u = `screen${l}`;
            if (!(r[c] <= r[u]))
              throw new Error(`${c}<=${u} fails : !(${r[c]}<=${r[u]})`);
            if (a < o.length - 1) {
              const d = `screen${l}Max`;
              if (!(r[u] <= r[d]))
                throw new Error(`${u}<=${d} fails : !(${r[u]}<=${r[d]})`);
              const f = `screen${o[a + 1].toUpperCase()}Min`;
              if (!(r[d] <= r[f]))
                throw new Error(`${d}<=${f} fails : !(${r[d]}<=${r[f]})`);
            }
          }),
          n
        );
      })(e),
    );
  return Y.useMemo(() => {
    const n = new Map();
    let r = -1,
      o = {};
    return {
      matchHandlers: {},
      dispatch: (i) => ((o = i), n.forEach((a) => a(o)), n.size >= 1),
      subscribe(i) {
        return n.size || this.register(), (r += 1), n.set(r, i), i(o), r;
      },
      unsubscribe(i) {
        n.delete(i), n.size || this.unregister();
      },
      unregister() {
        Object.keys(t).forEach((i) => {
          const a = t[i],
            l = this.matchHandlers[a];
          l == null || l.mql.removeListener(l == null ? void 0 : l.listener);
        }),
          n.clear();
      },
      register() {
        Object.keys(t).forEach((i) => {
          const a = t[i],
            l = (u) => {
              let { matches: d } = u;
              this.dispatch(Object.assign(Object.assign({}, o), { [i]: d }));
            },
            c = window.matchMedia(a);
          c.addListener(l),
            (this.matchHandlers[a] = { mql: c, listener: l }),
            l(c);
        });
      },
      responsiveMap: t,
    };
  }, [e]);
}
var Bn = { shiftX: 64, adjustY: 1 },
  Dn = { adjustX: 1, shiftY: !0 },
  gt = [0, 0],
  mh = {
    left: {
      points: ['cr', 'cl'],
      overflow: Dn,
      offset: [-4, 0],
      targetOffset: gt,
    },
    right: {
      points: ['cl', 'cr'],
      overflow: Dn,
      offset: [4, 0],
      targetOffset: gt,
    },
    top: {
      points: ['bc', 'tc'],
      overflow: Bn,
      offset: [0, -4],
      targetOffset: gt,
    },
    bottom: {
      points: ['tc', 'bc'],
      overflow: Bn,
      offset: [0, 4],
      targetOffset: gt,
    },
    topLeft: {
      points: ['bl', 'tl'],
      overflow: Bn,
      offset: [0, -4],
      targetOffset: gt,
    },
    leftTop: {
      points: ['tr', 'tl'],
      overflow: Dn,
      offset: [-4, 0],
      targetOffset: gt,
    },
    topRight: {
      points: ['br', 'tr'],
      overflow: Bn,
      offset: [0, -4],
      targetOffset: gt,
    },
    rightTop: {
      points: ['tl', 'tr'],
      overflow: Dn,
      offset: [4, 0],
      targetOffset: gt,
    },
    bottomRight: {
      points: ['tr', 'br'],
      overflow: Bn,
      offset: [0, 4],
      targetOffset: gt,
    },
    rightBottom: {
      points: ['bl', 'br'],
      overflow: Dn,
      offset: [4, 0],
      targetOffset: gt,
    },
    bottomLeft: {
      points: ['tl', 'bl'],
      overflow: Bn,
      offset: [0, 4],
      targetOffset: gt,
    },
    leftBottom: {
      points: ['br', 'bl'],
      overflow: Dn,
      offset: [-4, 0],
      targetOffset: gt,
    },
  };
function nd(e) {
  var t = e.children,
    n = e.prefixCls,
    r = e.id,
    o = e.overlayInnerStyle,
    i = e.className,
    a = e.style;
  return s.createElement(
    'div',
    { className: Q(''.concat(n, '-content'), i), style: a },
    s.createElement(
      'div',
      { className: ''.concat(n, '-inner'), id: r, role: 'tooltip', style: o },
      typeof t == 'function' ? t() : t,
    ),
  );
}
var hh = [
    'overlayClassName',
    'trigger',
    'mouseEnterDelay',
    'mouseLeaveDelay',
    'overlayStyle',
    'prefixCls',
    'children',
    'onVisibleChange',
    'afterVisibleChange',
    'transitionName',
    'animation',
    'motion',
    'placement',
    'align',
    'destroyTooltipOnHide',
    'defaultVisible',
    'getTooltipContainer',
    'overlayInnerStyle',
    'arrowContent',
    'overlay',
    'id',
    'showArrow',
  ],
  vh = function (e, t) {
    var n = e.overlayClassName,
      r = e.trigger,
      o = r === void 0 ? ['hover'] : r,
      i = e.mouseEnterDelay,
      a = i === void 0 ? 0 : i,
      l = e.mouseLeaveDelay,
      c = l === void 0 ? 0.1 : l,
      u = e.overlayStyle,
      d = e.prefixCls,
      f = d === void 0 ? 'rc-tooltip' : d,
      g = e.children,
      b = e.onVisibleChange,
      m = e.afterVisibleChange,
      p = e.transitionName,
      h = e.animation,
      y = e.motion,
      v = e.placement,
      w = v === void 0 ? 'right' : v,
      S = e.align,
      k = S === void 0 ? {} : S,
      $ = e.destroyTooltipOnHide,
      x = $ !== void 0 && $,
      O = e.defaultVisible,
      F = e.getTooltipContainer,
      P = e.overlayInnerStyle;
    e.arrowContent;
    var N = e.overlay,
      I = e.id,
      T = e.showArrow,
      L = T === void 0 || T,
      _ = st(e, hh),
      E = s.useRef(null);
    s.useImperativeHandle(t, function () {
      return E.current;
    });
    var C = z({}, _);
    return (
      'visible' in e && (C.popupVisible = e.visible),
      s.createElement(
        uh,
        Se(
          {
            popupClassName: n,
            prefixCls: f,
            popup: function () {
              return s.createElement(
                nd,
                { key: 'content', prefixCls: f, id: I, overlayInnerStyle: P },
                N,
              );
            },
            action: o,
            builtinPlacements: mh,
            popupPlacement: w,
            ref: E,
            popupAlign: k,
            getPopupContainer: F,
            onPopupVisibleChange: b,
            afterPopupVisibleChange: m,
            popupTransitionName: p,
            popupAnimation: h,
            popupMotion: y,
            defaultPopupVisible: O,
            autoDestroy: x,
            mouseLeaveDelay: c,
            popupStyle: u,
            mouseEnterDelay: a,
            arrow: L,
          },
          C,
        ),
        g,
      )
    );
  };
const bh = s.forwardRef(vh),
  rd = 8;
function od(e) {
  const t = rd,
    { contentRadius: n, limitVerticalRadius: r } = e,
    o = n > 12 ? n + 2 : 12;
  return { dropdownArrowOffset: o, dropdownArrowOffsetVertical: r ? t : o };
}
function Co(e, t) {
  return e ? t : {};
}
function yh(e, t) {
  const {
      componentCls: n,
      sizePopupArrow: r,
      borderRadiusXS: o,
      borderRadiusOuter: i,
      boxShadowPopoverArrow: a,
    } = e,
    {
      colorBg: l,
      contentRadius: c = e.borderRadiusLG,
      limitVerticalRadius: u,
      arrowDistance: d = 0,
      arrowPlacement: f = { left: !0, right: !0, top: !0, bottom: !0 },
    } = t,
    { dropdownArrowOffsetVertical: g, dropdownArrowOffset: b } = od({
      contentRadius: c,
      limitVerticalRadius: u,
    });
  return {
    [n]: Object.assign(
      Object.assign(
        Object.assign(
          Object.assign(
            {
              [`${n}-arrow`]: [
                Object.assign(
                  Object.assign(
                    { position: 'absolute', zIndex: 1, display: 'block' },
                    Qp(r, o, i, l, a),
                  ),
                  { '&:before': { background: l } },
                ),
              ],
            },
            Co(!!f.top, {
              [[
                `&-placement-top ${n}-arrow`,
                `&-placement-topLeft ${n}-arrow`,
                `&-placement-topRight ${n}-arrow`,
              ].join(',')]: {
                bottom: d,
                transform: 'translateY(100%) rotate(180deg)',
              },
              [`&-placement-top ${n}-arrow`]: {
                left: { _skip_check_: !0, value: '50%' },
                transform: 'translateX(-50%) translateY(100%) rotate(180deg)',
              },
              [`&-placement-topLeft ${n}-arrow`]: {
                left: { _skip_check_: !0, value: b },
              },
              [`&-placement-topRight ${n}-arrow`]: {
                right: { _skip_check_: !0, value: b },
              },
            }),
          ),
          Co(!!f.bottom, {
            [[
              `&-placement-bottom ${n}-arrow`,
              `&-placement-bottomLeft ${n}-arrow`,
              `&-placement-bottomRight ${n}-arrow`,
            ].join(',')]: { top: d, transform: 'translateY(-100%)' },
            [`&-placement-bottom ${n}-arrow`]: {
              left: { _skip_check_: !0, value: '50%' },
              transform: 'translateX(-50%) translateY(-100%)',
            },
            [`&-placement-bottomLeft ${n}-arrow`]: {
              left: { _skip_check_: !0, value: b },
            },
            [`&-placement-bottomRight ${n}-arrow`]: {
              right: { _skip_check_: !0, value: b },
            },
          }),
        ),
        Co(!!f.left, {
          [[
            `&-placement-left ${n}-arrow`,
            `&-placement-leftTop ${n}-arrow`,
            `&-placement-leftBottom ${n}-arrow`,
          ].join(',')]: {
            right: { _skip_check_: !0, value: d },
            transform: 'translateX(100%) rotate(90deg)',
          },
          [`&-placement-left ${n}-arrow`]: {
            top: { _skip_check_: !0, value: '50%' },
            transform: 'translateY(-50%) translateX(100%) rotate(90deg)',
          },
          [`&-placement-leftTop ${n}-arrow`]: { top: g },
          [`&-placement-leftBottom ${n}-arrow`]: { bottom: g },
        }),
      ),
      Co(!!f.right, {
        [[
          `&-placement-right ${n}-arrow`,
          `&-placement-rightTop ${n}-arrow`,
          `&-placement-rightBottom ${n}-arrow`,
        ].join(',')]: {
          left: { _skip_check_: !0, value: d },
          transform: 'translateX(-100%) rotate(-90deg)',
        },
        [`&-placement-right ${n}-arrow`]: {
          top: { _skip_check_: !0, value: '50%' },
          transform: 'translateY(-50%) translateX(-100%) rotate(-90deg)',
        },
        [`&-placement-rightTop ${n}-arrow`]: { top: g },
        [`&-placement-rightBottom ${n}-arrow`]: { bottom: g },
      }),
    ),
  };
}
const wc = {
    left: { points: ['cr', 'cl'] },
    right: { points: ['cl', 'cr'] },
    top: { points: ['bc', 'tc'] },
    bottom: { points: ['tc', 'bc'] },
    topLeft: { points: ['bl', 'tl'] },
    leftTop: { points: ['tr', 'tl'] },
    topRight: { points: ['br', 'tr'] },
    rightTop: { points: ['tl', 'tr'] },
    bottomRight: { points: ['tr', 'br'] },
    rightBottom: { points: ['bl', 'br'] },
    bottomLeft: { points: ['tl', 'bl'] },
    leftBottom: { points: ['br', 'bl'] },
  },
  xh = {
    topLeft: { points: ['bl', 'tc'] },
    leftTop: { points: ['tr', 'cl'] },
    topRight: { points: ['br', 'tc'] },
    rightTop: { points: ['tl', 'cr'] },
    bottomRight: { points: ['tr', 'bc'] },
    rightBottom: { points: ['bl', 'cr'] },
    bottomLeft: { points: ['tl', 'bc'] },
    leftBottom: { points: ['br', 'cl'] },
  },
  wh = new Set([
    'topLeft',
    'topRight',
    'bottomLeft',
    'bottomRight',
    'leftTop',
    'leftBottom',
    'rightTop',
    'rightBottom',
  ]);
function Ch(e) {
  const {
      arrowWidth: t,
      autoAdjustOverflow: n,
      arrowPointAtCenter: r,
      offset: o,
      borderRadius: i,
      visibleFirst: a,
    } = e,
    l = t / 2,
    c = {};
  return (
    Object.keys(wc).forEach((u) => {
      const d = (r && xh[u]) || wc[u],
        f = Object.assign(Object.assign({}, d), { offset: [0, 0] });
      switch (((c[u] = f), wh.has(u) && (f.autoArrow = !1), u)) {
        case 'top':
        case 'topLeft':
        case 'topRight':
          f.offset[1] = -l - o;
          break;
        case 'bottom':
        case 'bottomLeft':
        case 'bottomRight':
          f.offset[1] = l + o;
          break;
        case 'left':
        case 'leftTop':
        case 'leftBottom':
          f.offset[0] = -l - o;
          break;
        case 'right':
        case 'rightTop':
        case 'rightBottom':
          f.offset[0] = l + o;
      }
      const g = od({ contentRadius: i, limitVerticalRadius: !0 });
      if (r)
        switch (u) {
          case 'topLeft':
          case 'bottomLeft':
            f.offset[0] = -g.dropdownArrowOffset - l;
            break;
          case 'topRight':
          case 'bottomRight':
            f.offset[0] = g.dropdownArrowOffset + l;
            break;
          case 'leftTop':
          case 'rightTop':
            f.offset[1] = -g.dropdownArrowOffset - l;
            break;
          case 'leftBottom':
          case 'rightBottom':
            f.offset[1] = g.dropdownArrowOffset + l;
        }
      (f.overflow = (function (b, m, p, h) {
        if (h === !1) return { adjustX: !1, adjustY: !1 };
        const y = h && typeof h == 'object' ? h : {},
          v = {};
        switch (b) {
          case 'top':
          case 'bottom':
            v.shiftX = 2 * m.dropdownArrowOffset + p;
            break;
          case 'left':
          case 'right':
            v.shiftY = 2 * m.dropdownArrowOffsetVertical + p;
        }
        const w = Object.assign(Object.assign({}, v), y);
        return w.shiftX || (w.adjustX = !0), w.shiftY || (w.adjustY = !0), w;
      })(u, g, t, n)),
        a && (f.htmlRegion = 'visibleFirst');
    }),
    c
  );
}
const $h = (e) => {
    const {
      componentCls: t,
      tooltipMaxWidth: n,
      tooltipColor: r,
      tooltipBg: o,
      tooltipBorderRadius: i,
      zIndexPopup: a,
      controlHeight: l,
      boxShadowSecondary: c,
      paddingSM: u,
      paddingXS: d,
      tooltipRadiusOuter: f,
    } = e;
    return [
      {
        [t]: Object.assign(
          Object.assign(
            Object.assign(Object.assign({}, Xr(e)), {
              position: 'absolute',
              zIndex: a,
              display: 'block',
              width: 'max-content',
              maxWidth: n,
              visibility: 'visible',
              transformOrigin: 'var(--arrow-x, 50%) var(--arrow-y, 50%)',
              '&-hidden': { display: 'none' },
              '--antd-arrow-background-color': o,
              [`${t}-inner`]: {
                minWidth: l,
                minHeight: l,
                padding: `${u / 2}px ${d}px`,
                color: r,
                textAlign: 'start',
                textDecoration: 'none',
                wordWrap: 'break-word',
                backgroundColor: o,
                borderRadius: i,
                boxShadow: c,
                boxSizing: 'border-box',
              },
              [[
                '&-placement-left',
                '&-placement-leftTop',
                '&-placement-leftBottom',
                '&-placement-right',
                '&-placement-rightTop',
                '&-placement-rightBottom',
              ].join(',')]: {
                [`${t}-inner`]: { borderRadius: Math.min(i, rd) },
              },
              [`${t}-content`]: { position: 'relative' },
            }),
            rg(e, (g, b) => {
              let { darkColor: m } = b;
              return {
                [`&${t}-${g}`]: {
                  [`${t}-inner`]: { backgroundColor: m },
                  [`${t}-arrow`]: { '--antd-arrow-background-color': m },
                },
              };
            }),
          ),
          { '&-rtl': { direction: 'rtl' } },
        ),
      },
      yh(Ge(e, { borderRadiusOuter: f }), {
        colorBg: 'var(--antd-arrow-background-color)',
        contentRadius: i,
        limitVerticalRadius: !0,
      }),
      {
        [`${t}-pure`]: {
          position: 'relative',
          maxWidth: 'none',
          margin: e.sizePopupArrow,
        },
      },
    ];
  },
  id = (e, t) =>
    tn(
      'Tooltip',
      (r) => {
        if (t === !1) return [];
        const {
            borderRadius: o,
            colorTextLightSolid: i,
            colorBgDefault: a,
            borderRadiusOuter: l,
          } = r,
          c = Ge(r, {
            tooltipMaxWidth: 250,
            tooltipColor: i,
            tooltipBorderRadius: o,
            tooltipBg: a,
            tooltipRadiusOuter: l > 4 ? 4 : l,
          });
        return [$h(c), th(r, 'zoom-big-fast')];
      },
      (r) => {
        let { zIndexPopupBase: o, colorBgSpotlight: i } = r;
        return { zIndexPopup: o + 70, colorBgDefault: i };
      },
      { resetStyle: !1 },
    )(e),
  Eh = Uo.map((e) => `${e}-inverse`);
function ad(e, t) {
  const n = (function (a) {
      return arguments.length > 1 && arguments[1] !== void 0 && !arguments[1]
        ? Uo.includes(a)
        : [].concat(K(Eh), K(Uo)).includes(a);
    })(t),
    r = Q({ [`${e}-${t}`]: t && n }),
    o = {},
    i = {};
  return (
    t && !n && ((o.background = t), (i['--antd-arrow-background-color'] = t)),
    { className: r, overlayStyle: o, arrowStyle: i }
  );
}
const Sh = (e) => {
  const {
      prefixCls: t,
      className: n,
      placement: r = 'top',
      title: o,
      color: i,
      overlayInnerStyle: a,
    } = e,
    { getPrefixCls: l } = s.useContext(Re),
    c = l('tooltip', t),
    [u, d] = id(c, !0),
    f = ad(c, i),
    g = f.arrowStyle,
    b = Object.assign(Object.assign({}, a), f.overlayStyle),
    m = Q(d, c, `${c}-pure`, `${c}-placement-${r}`, n, f.className);
  return u(
    s.createElement(
      'div',
      { className: m, style: g },
      s.createElement('div', { className: `${c}-arrow` }),
      s.createElement(
        nd,
        Object.assign({}, e, {
          className: d,
          prefixCls: c,
          overlayInnerStyle: b,
        }),
        o,
      ),
    ),
  );
};
var Oh =
  (globalThis && globalThis.__rest) ||
  function (e, t) {
    var n = {};
    for (var r in e)
      Object.prototype.hasOwnProperty.call(e, r) &&
        t.indexOf(r) < 0 &&
        (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == 'function') {
      var o = 0;
      for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
        t.indexOf(r[o]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
          (n[r[o]] = e[r[o]]);
    }
    return n;
  };
function kh(e, t) {
  const n = e.type;
  if (
    ((n.__ANT_BUTTON === !0 || e.type === 'button') && e.props.disabled) ||
    (n.__ANT_SWITCH === !0 && (e.props.disabled || e.props.loading)) ||
    (n.__ANT_RADIO === !0 && e.props.disabled)
  ) {
    const { picked: r, omitted: o } = ((l, c) => {
        const u = {},
          d = Object.assign({}, l);
        return (
          c.forEach((f) => {
            l && f in l && ((u[f] = l[f]), delete d[f]);
          }),
          { picked: u, omitted: d }
        );
      })(e.props.style, [
        'position',
        'left',
        'right',
        'top',
        'bottom',
        'float',
        'display',
        'zIndex',
      ]),
      i = Object.assign(Object.assign({ display: 'inline-block' }, r), {
        cursor: 'not-allowed',
        width: e.props.block ? '100%' : void 0,
      }),
      a = $n(e, {
        style: Object.assign(Object.assign({}, o), { pointerEvents: 'none' }),
        className: null,
      });
    return s.createElement(
      'span',
      {
        style: i,
        className: Q(e.props.className, `${t}-disabled-compatible-wrapper`),
      },
      a,
    );
  }
  return e;
}
const ld = s.forwardRef((e, t) => {
  var n, r;
  const {
      prefixCls: o,
      openClassName: i,
      getTooltipContainer: a,
      overlayClassName: l,
      color: c,
      overlayInnerStyle: u,
      children: d,
      afterOpenChange: f,
      afterVisibleChange: g,
      destroyTooltipOnHide: b,
      arrow: m = !0,
      title: p,
      overlay: h,
      builtinPlacements: y,
      arrowPointAtCenter: v = !1,
      autoAdjustOverflow: w = !0,
    } = e,
    S = !!m,
    [, k] = Sn(),
    { getPopupContainer: $, getPrefixCls: x, direction: O } = s.useContext(Re),
    F = s.useRef(null),
    P = () => {
      var we;
      (we = F.current) === null || we === void 0 || we.forceAlign();
    };
  s.useImperativeHandle(t, () => ({
    forceAlign: P,
    forcePopupAlign: () => {
      P();
    },
  }));
  const [N, I] = si(!1, {
      value: (n = e.open) !== null && n !== void 0 ? n : e.visible,
      defaultValue:
        (r = e.defaultOpen) !== null && r !== void 0 ? r : e.defaultVisible,
    }),
    T = !p && !h && p !== 0,
    L = s.useMemo(() => {
      var we, $e;
      let ie = v;
      return (
        typeof m == 'object' &&
          (ie =
            ($e =
              (we = m.pointAtCenter) !== null && we !== void 0
                ? we
                : m.arrowPointAtCenter) !== null && $e !== void 0
              ? $e
              : v),
        y ||
          Ch({
            arrowPointAtCenter: ie,
            autoAdjustOverflow: w,
            arrowWidth: S ? k.sizePopupArrow : 0,
            borderRadius: k.borderRadius,
            offset: k.marginXXS,
            visibleFirst: !0,
          })
      );
    }, [v, m, y, k]),
    _ = s.useMemo(() => (p === 0 ? p : h || p || ''), [h, p]),
    E = s.createElement(wa, null, typeof _ == 'function' ? _() : _),
    {
      getPopupContainer: C,
      placement: j = 'top',
      mouseEnterDelay: M = 0.1,
      mouseLeaveDelay: R = 0.1,
      overlayStyle: B,
      rootClassName: D,
    } = e,
    H = Oh(e, [
      'getPopupContainer',
      'placement',
      'mouseEnterDelay',
      'mouseLeaveDelay',
      'overlayStyle',
      'rootClassName',
    ]),
    W = x('tooltip', o),
    X = x(),
    q = e['data-popover-inject'];
  let Z = N;
  'open' in e || 'visible' in e || !T || (Z = !1);
  const ce = kh(ci(d) && !Au(d) ? d : s.createElement('span', null, d), W),
    ge = ce.props,
    Oe =
      ge.className && typeof ge.className != 'string'
        ? ge.className
        : Q(ge.className, i || `${W}-open`),
    [re, U] = id(W, !q),
    ee = ad(W, c),
    be = ee.arrowStyle,
    Fe = Object.assign(Object.assign({}, u), ee.overlayStyle),
    De = Q(l, { [`${W}-rtl`]: O === 'rtl' }, ee.className, D, U);
  return re(
    s.createElement(
      bh,
      Object.assign({}, H, {
        showArrow: S,
        placement: j,
        mouseEnterDelay: M,
        mouseLeaveDelay: R,
        prefixCls: W,
        overlayClassName: De,
        overlayStyle: Object.assign(Object.assign({}, be), B),
        getTooltipContainer: C || a || $,
        ref: F,
        builtinPlacements: L,
        overlay: E,
        visible: Z,
        onVisibleChange: (we) => {
          var $e, ie;
          I(!T && we),
            T ||
              (($e = e.onOpenChange) === null ||
                $e === void 0 ||
                $e.call(e, we),
              (ie = e.onVisibleChange) === null ||
                ie === void 0 ||
                ie.call(e, we));
        },
        afterVisibleChange: f ?? g,
        overlayInnerStyle: Fe,
        arrowContent: s.createElement('span', {
          className: `${W}-arrow-content`,
        }),
        motion: {
          motionName: Xg(X, 'zoom-big-fast', e.transitionName),
          motionDeadline: 1e3,
        },
        destroyTooltipOnHide: !!b,
      }),
      Z ? $n(ce, { className: Oe }) : ce,
    ),
  );
});
ld._InternalPanelDoNotUseOrYouWillBeFired = Sh;
const jh = ld,
  nl = (e) => ({ borderColor: e.hoverBorderColor }),
  Ta = (e) => ({
    borderColor: e.activeBorderColor,
    boxShadow: e.activeShadow,
    outline: 0,
  }),
  sd = (e) => ({
    color: e.colorTextDisabled,
    backgroundColor: e.colorBgContainerDisabled,
    borderColor: e.colorBorder,
    boxShadow: 'none',
    cursor: 'not-allowed',
    opacity: 1,
    '&:hover': Object.assign(
      {},
      nl(Ge(e, { hoverBorderColor: e.colorBorder })),
    ),
  }),
  cd = (e) => {
    const {
      paddingBlockLG: t,
      fontSizeLG: n,
      lineHeightLG: r,
      borderRadiusLG: o,
      paddingInlineLG: i,
    } = e;
    return {
      padding: `${t}px ${i}px`,
      fontSize: n,
      lineHeight: r,
      borderRadius: o,
    };
  },
  ud = (e) => ({
    padding: `${e.paddingBlockSM}px ${e.paddingInlineSM}px`,
    borderRadius: e.borderRadiusSM,
  }),
  dd = (e, t) => {
    const {
      componentCls: n,
      colorError: r,
      colorWarning: o,
      errorActiveShadow: i,
      warningActiveShadow: a,
      colorErrorBorderHover: l,
      colorWarningBorderHover: c,
    } = e;
    return {
      [`&-status-error:not(${t}-disabled):not(${t}-borderless)${t}`]: {
        borderColor: r,
        '&:hover': { borderColor: l },
        '&:focus, &-focused': Object.assign(
          {},
          Ta(Ge(e, { activeBorderColor: r, activeShadow: i })),
        ),
        [`${n}-prefix, ${n}-suffix`]: { color: r },
      },
      [`&-status-warning:not(${t}-disabled):not(${t}-borderless)${t}`]: {
        borderColor: o,
        '&:hover': { borderColor: c },
        '&:focus, &-focused': Object.assign(
          {},
          Ta(Ge(e, { activeBorderColor: o, activeShadow: a })),
        ),
        [`${n}-prefix, ${n}-suffix`]: { color: o },
      },
    };
  },
  fd = (e) =>
    Object.assign(
      Object.assign(
        {
          position: 'relative',
          display: 'inline-block',
          width: '100%',
          minWidth: 0,
          padding: `${e.paddingBlock}px ${e.paddingInline}px`,
          color: e.colorText,
          fontSize: e.fontSize,
          lineHeight: e.lineHeight,
          backgroundColor: e.colorBgContainer,
          backgroundImage: 'none',
          borderWidth: e.lineWidth,
          borderStyle: e.lineType,
          borderColor: e.colorBorder,
          borderRadius: e.borderRadius,
          transition: `all ${e.motionDurationMid}`,
        },
        {
          '&::-moz-placeholder': { opacity: 1 },
          '&::placeholder': {
            color: e.colorTextPlaceholder,
            userSelect: 'none',
          },
          '&:placeholder-shown': { textOverflow: 'ellipsis' },
        },
      ),
      {
        '&:hover': Object.assign({}, nl(e)),
        '&:focus, &-focused': Object.assign({}, Ta(e)),
        '&-disabled, &[disabled]': Object.assign({}, sd(e)),
        '&-borderless': {
          '&, &:hover, &:focus, &-focused, &-disabled, &[disabled]': {
            backgroundColor: 'transparent',
            border: 'none',
            boxShadow: 'none',
          },
        },
        'textarea&': {
          maxWidth: '100%',
          height: 'auto',
          minHeight: e.controlHeight,
          lineHeight: e.lineHeight,
          verticalAlign: 'bottom',
          transition: `all ${e.motionDurationSlow}, height 0s`,
          resize: 'vertical',
        },
        '&-lg': Object.assign({}, cd(e)),
        '&-sm': Object.assign({}, ud(e)),
        '&-rtl': { direction: 'rtl' },
        '&-textarea-rtl': { direction: 'rtl' },
      },
    ),
  Ph = (e) => {
    const { componentCls: t, antCls: n } = e;
    return {
      position: 'relative',
      display: 'table',
      width: '100%',
      borderCollapse: 'separate',
      borderSpacing: 0,
      "&[class*='col-']": {
        paddingInlineEnd: e.paddingXS,
        '&:last-child': { paddingInlineEnd: 0 },
      },
      [`&-lg ${t}, &-lg > ${t}-group-addon`]: Object.assign({}, cd(e)),
      [`&-sm ${t}, &-sm > ${t}-group-addon`]: Object.assign({}, ud(e)),
      [`&-lg ${n}-select-single ${n}-select-selector`]: {
        height: e.controlHeightLG,
      },
      [`&-sm ${n}-select-single ${n}-select-selector`]: {
        height: e.controlHeightSM,
      },
      [`> ${t}`]: {
        display: 'table-cell',
        '&:not(:first-child):not(:last-child)': { borderRadius: 0 },
      },
      [`${t}-group`]: {
        '&-addon, &-wrap': {
          display: 'table-cell',
          width: 1,
          whiteSpace: 'nowrap',
          verticalAlign: 'middle',
          '&:not(:first-child):not(:last-child)': { borderRadius: 0 },
        },
        '&-wrap > *': { display: 'block !important' },
        '&-addon': {
          position: 'relative',
          padding: `0 ${e.paddingInline}px`,
          color: e.colorText,
          fontWeight: 'normal',
          fontSize: e.fontSize,
          textAlign: 'center',
          backgroundColor: e.colorFillAlter,
          border: `${e.lineWidth}px ${e.lineType} ${e.colorBorder}`,
          borderRadius: e.borderRadius,
          transition: `all ${e.motionDurationSlow}`,
          lineHeight: 1,
          [`${n}-select`]: {
            margin: `-${e.paddingBlock + 1}px -${e.paddingInline}px`,
            [`&${n}-select-single:not(${n}-select-customize-input)`]: {
              [`${n}-select-selector`]: {
                backgroundColor: 'inherit',
                border: `${e.lineWidth}px ${e.lineType} transparent`,
                boxShadow: 'none',
              },
            },
            '&-open, &-focused': {
              [`${n}-select-selector`]: { color: e.colorPrimary },
            },
          },
          [`${n}-cascader-picker`]: {
            margin: `-9px -${e.paddingInline}px`,
            backgroundColor: 'transparent',
            [`${n}-cascader-input`]: {
              textAlign: 'start',
              border: 0,
              boxShadow: 'none',
            },
          },
        },
        '&-addon:first-child': { borderInlineEnd: 0 },
        '&-addon:last-child': { borderInlineStart: 0 },
      },
      [`${t}`]: {
        width: '100%',
        marginBottom: 0,
        textAlign: 'inherit',
        '&:focus': { zIndex: 1, borderInlineEndWidth: 1 },
        '&:hover': {
          zIndex: 1,
          borderInlineEndWidth: 1,
          [`${t}-search-with-button &`]: { zIndex: 0 },
        },
      },
      [`> ${t}:first-child, ${t}-group-addon:first-child`]: {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0,
        [`${n}-select ${n}-select-selector`]: {
          borderStartEndRadius: 0,
          borderEndEndRadius: 0,
        },
      },
      [`> ${t}-affix-wrapper`]: {
        [`&:not(:first-child) ${t}`]: {
          borderStartStartRadius: 0,
          borderEndStartRadius: 0,
        },
        [`&:not(:last-child) ${t}`]: {
          borderStartEndRadius: 0,
          borderEndEndRadius: 0,
        },
      },
      [`> ${t}:last-child, ${t}-group-addon:last-child`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0,
        [`${n}-select ${n}-select-selector`]: {
          borderStartStartRadius: 0,
          borderEndStartRadius: 0,
        },
      },
      [`${t}-affix-wrapper`]: {
        '&:not(:last-child)': {
          borderStartEndRadius: 0,
          borderEndEndRadius: 0,
          [`${t}-search &`]: {
            borderStartStartRadius: e.borderRadius,
            borderEndStartRadius: e.borderRadius,
          },
        },
        [`&:not(:first-child), ${t}-search &:not(:first-child)`]: {
          borderStartStartRadius: 0,
          borderEndStartRadius: 0,
        },
      },
      [`&${t}-group-compact`]: Object.assign(
        Object.assign(
          { display: 'block' },
          {
            '&::before': { display: 'table', content: '""' },
            '&::after': { display: 'table', clear: 'both', content: '""' },
          },
        ),
        {
          [`${t}-group-addon, ${t}-group-wrap, > ${t}`]: {
            '&:not(:first-child):not(:last-child)': {
              borderInlineEndWidth: e.lineWidth,
              '&:hover': { zIndex: 1 },
              '&:focus': { zIndex: 1 },
            },
          },
          '& > *': {
            display: 'inline-block',
            float: 'none',
            verticalAlign: 'top',
            borderRadius: 0,
          },
          [`
        & > ${t}-affix-wrapper,
        & > ${t}-number-affix-wrapper,
        & > ${n}-picker-range
      `]: { display: 'inline-flex' },
          '& > *:not(:last-child)': {
            marginInlineEnd: -e.lineWidth,
            borderInlineEndWidth: e.lineWidth,
          },
          [`${t}`]: { float: 'none' },
          [`& > ${n}-select > ${n}-select-selector,
      & > ${n}-select-auto-complete ${t},
      & > ${n}-cascader-picker ${t},
      & > ${t}-group-wrapper ${t}`]: {
            borderInlineEndWidth: e.lineWidth,
            borderRadius: 0,
            '&:hover': { zIndex: 1 },
            '&:focus': { zIndex: 1 },
          },
          [`& > ${n}-select-focused`]: { zIndex: 1 },
          [`& > ${n}-select > ${n}-select-arrow`]: { zIndex: 1 },
          [`& > *:first-child,
      & > ${n}-select:first-child > ${n}-select-selector,
      & > ${n}-select-auto-complete:first-child ${t},
      & > ${n}-cascader-picker:first-child ${t}`]: {
            borderStartStartRadius: e.borderRadius,
            borderEndStartRadius: e.borderRadius,
          },
          [`& > *:last-child,
      & > ${n}-select:last-child > ${n}-select-selector,
      & > ${n}-cascader-picker:last-child ${t},
      & > ${n}-cascader-picker-focused:last-child ${t}`]: {
            borderInlineEndWidth: e.lineWidth,
            borderStartEndRadius: e.borderRadius,
            borderEndEndRadius: e.borderRadius,
          },
          [`& > ${n}-select-auto-complete ${t}`]: { verticalAlign: 'top' },
          [`${t}-group-wrapper + ${t}-group-wrapper`]: {
            marginInlineStart: -e.lineWidth,
            [`${t}-affix-wrapper`]: { borderRadius: 0 },
          },
          [`${t}-group-wrapper:not(:last-child)`]: {
            [`&${t}-search > ${t}-group`]: {
              [`& > ${t}-group-addon > ${t}-search-button`]: {
                borderRadius: 0,
              },
              [`& > ${t}`]: {
                borderStartStartRadius: e.borderRadius,
                borderStartEndRadius: 0,
                borderEndEndRadius: 0,
                borderEndStartRadius: e.borderRadius,
              },
            },
          },
        },
      ),
    };
  },
  Fh = (e) => {
    const { componentCls: t, controlHeightSM: n, lineWidth: r } = e,
      o = (n - 2 * r - 16) / 2;
    return {
      [t]: Object.assign(
        Object.assign(Object.assign(Object.assign({}, Xr(e)), fd(e)), dd(e, t)),
        {
          '&[type="color"]': {
            height: e.controlHeight,
            [`&${t}-lg`]: { height: e.controlHeightLG },
            [`&${t}-sm`]: { height: n, paddingTop: o, paddingBottom: o },
          },
          '&[type="search"]::-webkit-search-cancel-button, &[type="search"]::-webkit-search-decoration':
            { '-webkit-appearance': 'none' },
        },
      ),
    };
  },
  Mh = (e) => {
    const { componentCls: t } = e;
    return {
      [`${t}-clear-icon`]: {
        margin: 0,
        color: e.colorTextQuaternary,
        fontSize: e.fontSizeIcon,
        verticalAlign: -1,
        cursor: 'pointer',
        transition: `color ${e.motionDurationSlow}`,
        '&:hover': { color: e.colorTextTertiary },
        '&:active': { color: e.colorText },
        '&-hidden': { visibility: 'hidden' },
        '&-has-suffix': { margin: `0 ${e.inputAffixPadding}px` },
      },
    };
  },
  Ah = (e) => {
    const {
      componentCls: t,
      inputAffixPadding: n,
      colorTextDescription: r,
      motionDurationSlow: o,
      colorIcon: i,
      colorIconHover: a,
      iconCls: l,
    } = e;
    return {
      [`${t}-affix-wrapper`]: Object.assign(
        Object.assign(
          Object.assign(
            Object.assign(Object.assign({}, fd(e)), {
              display: 'inline-flex',
              [`&:not(${t}-affix-wrapper-disabled):hover`]: Object.assign(
                Object.assign({}, nl(e)),
                { zIndex: 1, [`${t}-search-with-button &`]: { zIndex: 0 } },
              ),
              '&-focused, &:focus': { zIndex: 1 },
              '&-disabled': {
                [`${t}[disabled]`]: { background: 'transparent' },
              },
              [`> input${t}`]: {
                padding: 0,
                fontSize: 'inherit',
                border: 'none',
                borderRadius: 0,
                outline: 'none',
                '&::-ms-reveal': { display: 'none' },
                '&:focus': { boxShadow: 'none !important' },
              },
              '&::before': {
                display: 'inline-block',
                width: 0,
                visibility: 'hidden',
                content: '"\\a0"',
              },
              [`${t}`]: {
                '&-prefix, &-suffix': {
                  display: 'flex',
                  flex: 'none',
                  alignItems: 'center',
                  '> *:not(:last-child)': { marginInlineEnd: e.paddingXS },
                },
                '&-show-count-suffix': { color: r },
                '&-show-count-has-suffix': { marginInlineEnd: e.paddingXXS },
                '&-prefix': { marginInlineEnd: n },
                '&-suffix': { marginInlineStart: n },
              },
            }),
            Mh(e),
          ),
          {
            [`${l}${t}-password-icon`]: {
              color: i,
              cursor: 'pointer',
              transition: `all ${o}`,
              '&:hover': { color: a },
            },
          },
        ),
        dd(e, `${t}-affix-wrapper`),
      ),
    };
  },
  Rh = (e) => {
    const {
      componentCls: t,
      colorError: n,
      colorWarning: r,
      borderRadiusLG: o,
      borderRadiusSM: i,
    } = e;
    return {
      [`${t}-group`]: Object.assign(
        Object.assign(Object.assign({}, Xr(e)), Ph(e)),
        {
          '&-rtl': { direction: 'rtl' },
          '&-wrapper': {
            display: 'inline-block',
            width: '100%',
            textAlign: 'start',
            verticalAlign: 'top',
            '&-rtl': { direction: 'rtl' },
            '&-lg': {
              [`${t}-group-addon`]: { borderRadius: o, fontSize: e.fontSizeLG },
            },
            '&-sm': { [`${t}-group-addon`]: { borderRadius: i } },
            '&-status-error': {
              [`${t}-group-addon`]: { color: n, borderColor: n },
            },
            '&-status-warning': {
              [`${t}-group-addon`]: { color: r, borderColor: r },
            },
            '&-disabled': { [`${t}-group-addon`]: Object.assign({}, sd(e)) },
            [`&:not(${t}-compact-first-item):not(${t}-compact-last-item)${t}-compact-item`]:
              { [`${t}, ${t}-group-addon`]: { borderRadius: 0 } },
            [`&:not(${t}-compact-last-item)${t}-compact-first-item`]: {
              [`${t}, ${t}-group-addon`]: {
                borderStartEndRadius: 0,
                borderEndEndRadius: 0,
              },
            },
            [`&:not(${t}-compact-first-item)${t}-compact-last-item`]: {
              [`${t}, ${t}-group-addon`]: {
                borderStartStartRadius: 0,
                borderEndStartRadius: 0,
              },
            },
          },
        },
      ),
    };
  },
  Ih = (e) => {
    const { componentCls: t, antCls: n } = e,
      r = `${t}-search`;
    return {
      [r]: {
        [`${t}`]: {
          '&:hover, &:focus': {
            borderColor: e.colorPrimaryHover,
            [`+ ${t}-group-addon ${r}-button:not(${n}-btn-primary)`]: {
              borderInlineStartColor: e.colorPrimaryHover,
            },
          },
        },
        [`${t}-affix-wrapper`]: { borderRadius: 0 },
        [`${t}-lg`]: { lineHeight: e.lineHeightLG - 2e-4 },
        [`> ${t}-group`]: {
          [`> ${t}-group-addon:last-child`]: {
            insetInlineStart: -1,
            padding: 0,
            border: 0,
            [`${r}-button`]: {
              paddingTop: 0,
              paddingBottom: 0,
              borderStartStartRadius: 0,
              borderStartEndRadius: e.borderRadius,
              borderEndEndRadius: e.borderRadius,
              borderEndStartRadius: 0,
              boxShadow: 'none',
            },
            [`${r}-button:not(${n}-btn-primary)`]: {
              color: e.colorTextDescription,
              '&:hover': { color: e.colorPrimaryHover },
              '&:active': { color: e.colorPrimaryActive },
              [`&${n}-btn-loading::before`]: {
                insetInlineStart: 0,
                insetInlineEnd: 0,
                insetBlockStart: 0,
                insetBlockEnd: 0,
              },
            },
          },
        },
        [`${r}-button`]: {
          height: e.controlHeight,
          '&:hover, &:focus': { zIndex: 1 },
        },
        [`&-large ${r}-button`]: { height: e.controlHeightLG },
        [`&-small ${r}-button`]: { height: e.controlHeightSM },
        '&-rtl': { direction: 'rtl' },
        [`&${t}-compact-item`]: {
          [`&:not(${t}-compact-last-item)`]: {
            [`${t}-group-addon`]: {
              [`${t}-search-button`]: {
                marginInlineEnd: -e.lineWidth,
                borderRadius: 0,
              },
            },
          },
          [`&:not(${t}-compact-first-item)`]: {
            [`${t},${t}-affix-wrapper`]: { borderRadius: 0 },
          },
          [`> ${t}-group-addon ${t}-search-button,
        > ${t},
        ${t}-affix-wrapper`]: { '&:hover,&:focus,&:active': { zIndex: 2 } },
          [`> ${t}-affix-wrapper-focused`]: { zIndex: 2 },
        },
      },
    };
  },
  Th = (e) => {
    const { componentCls: t, paddingLG: n } = e,
      r = `${t}-textarea`;
    return {
      [r]: {
        position: 'relative',
        '&-show-count': {
          [`> ${t}`]: { height: '100%' },
          [`${t}-data-count`]: {
            position: 'absolute',
            bottom: -e.fontSize * e.lineHeight,
            insetInlineEnd: 0,
            color: e.colorTextDescription,
            whiteSpace: 'nowrap',
            pointerEvents: 'none',
          },
        },
        '&-allow-clear': { [`> ${t}`]: { paddingInlineEnd: n } },
        [`&-affix-wrapper${r}-has-feedback`]: {
          [`${t}`]: { paddingInlineEnd: n },
        },
        [`&-affix-wrapper${t}-affix-wrapper`]: {
          padding: 0,
          [`> textarea${t}`]: {
            fontSize: 'inherit',
            border: 'none',
            outline: 'none',
            '&:focus': { boxShadow: 'none !important' },
          },
          [`${t}-suffix`]: {
            margin: 0,
            '> *:not(:last-child)': { marginInline: 0 },
            [`${t}-clear-icon`]: {
              position: 'absolute',
              insetInlineEnd: e.paddingXS,
              insetBlockStart: e.paddingXS,
            },
            [`${r}-suffix`]: {
              position: 'absolute',
              top: 0,
              insetInlineEnd: e.paddingInline,
              bottom: 0,
              zIndex: 1,
              display: 'inline-flex',
              alignItems: 'center',
              margin: 'auto',
              pointerEvents: 'none',
            },
          },
        },
      },
    };
  },
  rl = tn(
    'Input',
    (e) => {
      const t = Ge(
        e,
        (function (n) {
          return Ge(n, { inputAffixPadding: n.paddingXXS });
        })(e),
      );
      return [Fh(t), Th(t), Ah(t), Rh(t), Ih(t), Vu(t)];
    },
    (e) => {
      const {
        controlHeight: t,
        fontSize: n,
        lineHeight: r,
        lineWidth: o,
        controlHeightSM: i,
        controlHeightLG: a,
        fontSizeLG: l,
        lineHeightLG: c,
        paddingSM: u,
        controlPaddingHorizontalSM: d,
        controlPaddingHorizontal: f,
        colorFillAlter: g,
        colorPrimaryHover: b,
        controlOutlineWidth: m,
        controlOutline: p,
        colorErrorOutline: h,
        colorWarningOutline: y,
      } = e;
      return {
        paddingBlock: Math.max(Math.round(((t - n * r) / 2) * 10) / 10 - o, 3),
        paddingBlockSM: Math.max(
          Math.round(((i - n * r) / 2) * 10) / 10 - o,
          0,
        ),
        paddingBlockLG: Math.ceil(((a - l * c) / 2) * 10) / 10 - o,
        paddingInline: u - o,
        paddingInlineSM: d - o,
        paddingInlineLG: f - o,
        addonBg: g,
        activeBorderColor: b,
        hoverBorderColor: b,
        activeShadow: `0 0 0 ${m}px ${p}`,
        errorActiveShadow: `0 0 0 ${m}px ${h}`,
        warningActiveShadow: `0 0 0 ${m}px ${y}`,
      };
    },
  ),
  pd = s.createContext({}),
  Nh = (e) => {
    const { componentCls: t } = e;
    return {
      [t]: {
        display: 'flex',
        flexFlow: 'row wrap',
        minWidth: 0,
        '&::before, &::after': { display: 'flex' },
        '&-no-wrap': { flexWrap: 'nowrap' },
        '&-start': { justifyContent: 'flex-start' },
        '&-center': { justifyContent: 'center' },
        '&-end': { justifyContent: 'flex-end' },
        '&-space-between': { justifyContent: 'space-between' },
        '&-space-around': { justifyContent: 'space-around' },
        '&-space-evenly': { justifyContent: 'space-evenly' },
        '&-top': { alignItems: 'flex-start' },
        '&-middle': { alignItems: 'center' },
        '&-bottom': { alignItems: 'flex-end' },
      },
    };
  },
  _h = (e) => {
    const { componentCls: t } = e;
    return { [t]: { position: 'relative', maxWidth: '100%', minHeight: 1 } };
  },
  qi = (e, t) =>
    ((n, r) => {
      const { componentCls: o, gridColumns: i } = n,
        a = {};
      for (let l = i; l >= 0; l--)
        l === 0
          ? ((a[`${o}${r}-${l}`] = { display: 'none' }),
            (a[`${o}-push-${l}`] = { insetInlineStart: 'auto' }),
            (a[`${o}-pull-${l}`] = { insetInlineEnd: 'auto' }),
            (a[`${o}${r}-push-${l}`] = { insetInlineStart: 'auto' }),
            (a[`${o}${r}-pull-${l}`] = { insetInlineEnd: 'auto' }),
            (a[`${o}${r}-offset-${l}`] = { marginInlineStart: 0 }),
            (a[`${o}${r}-order-${l}`] = { order: 0 }))
          : ((a[`${o}${r}-${l}`] = [
              { '--ant-display': 'block', display: 'block' },
              {
                display: 'var(--ant-display)',
                flex: `0 0 ${(l / i) * 100}%`,
                maxWidth: (l / i) * 100 + '%',
              },
            ]),
            (a[`${o}${r}-push-${l}`] = {
              insetInlineStart: (l / i) * 100 + '%',
            }),
            (a[`${o}${r}-pull-${l}`] = { insetInlineEnd: (l / i) * 100 + '%' }),
            (a[`${o}${r}-offset-${l}`] = {
              marginInlineStart: (l / i) * 100 + '%',
            }),
            (a[`${o}${r}-order-${l}`] = { order: l }));
      return a;
    })(e, t),
  zh = tn('Grid', (e) => [Nh(e)]),
  Lh = tn('Grid', (e) => {
    const t = Ge(e, { gridColumns: 24 }),
      n = {
        '-sm': t.screenSMMin,
        '-md': t.screenMDMin,
        '-lg': t.screenLGMin,
        '-xl': t.screenXLMin,
        '-xxl': t.screenXXLMin,
      };
    return [
      _h(t),
      qi(t, ''),
      qi(t, '-xs'),
      Object.keys(n)
        .map((r) =>
          ((o, i, a) => ({
            [`@media (min-width: ${i}px)`]: Object.assign({}, qi(o, a)),
          }))(t, n[r], r),
        )
        .reduce((r, o) => Object.assign(Object.assign({}, r), o), {}),
    ];
  });
var Hh =
  (globalThis && globalThis.__rest) ||
  function (e, t) {
    var n = {};
    for (var r in e)
      Object.prototype.hasOwnProperty.call(e, r) &&
        t.indexOf(r) < 0 &&
        (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == 'function') {
      var o = 0;
      for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
        t.indexOf(r[o]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
          (n[r[o]] = e[r[o]]);
    }
    return n;
  };
const Bh = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
  Dh = s.forwardRef((e, t) => {
    const { getPrefixCls: n, direction: r } = s.useContext(Re),
      { gutter: o, wrap: i } = s.useContext(pd),
      {
        prefixCls: a,
        span: l,
        order: c,
        offset: u,
        push: d,
        pull: f,
        className: g,
        children: b,
        flex: m,
        style: p,
      } = e,
      h = Hh(e, [
        'prefixCls',
        'span',
        'order',
        'offset',
        'push',
        'pull',
        'className',
        'children',
        'flex',
        'style',
      ]),
      y = n('col', a),
      [v, w] = Lh(y);
    let S = {};
    Bh.forEach((x) => {
      let O = {};
      const F = e[x];
      typeof F == 'number'
        ? (O.span = F)
        : typeof F == 'object' && (O = F || {}),
        delete h[x],
        (S = Object.assign(Object.assign({}, S), {
          [`${y}-${x}-${O.span}`]: O.span !== void 0,
          [`${y}-${x}-order-${O.order}`]: O.order || O.order === 0,
          [`${y}-${x}-offset-${O.offset}`]: O.offset || O.offset === 0,
          [`${y}-${x}-push-${O.push}`]: O.push || O.push === 0,
          [`${y}-${x}-pull-${O.pull}`]: O.pull || O.pull === 0,
          [`${y}-${x}-flex-${O.flex}`]: O.flex || O.flex === 'auto',
          [`${y}-rtl`]: r === 'rtl',
        }));
    });
    const k = Q(
        y,
        {
          [`${y}-${l}`]: l !== void 0,
          [`${y}-order-${c}`]: c,
          [`${y}-offset-${u}`]: u,
          [`${y}-push-${d}`]: d,
          [`${y}-pull-${f}`]: f,
        },
        g,
        S,
        w,
      ),
      $ = {};
    if (o && o[0] > 0) {
      const x = o[0] / 2;
      ($.paddingLeft = x), ($.paddingRight = x);
    }
    return (
      m &&
        (($.flex = (function (x) {
          return typeof x == 'number'
            ? `${x} ${x} auto`
            : /^\d+(\.\d+)?(px|em|rem|%)$/.test(x)
            ? `0 0 ${x}`
            : x;
        })(m)),
        i !== !1 || $.minWidth || ($.minWidth = 0)),
      v(
        s.createElement(
          'div',
          Object.assign({}, h, {
            style: Object.assign(Object.assign({}, $), p),
            className: k,
            ref: t,
          }),
          b,
        ),
      )
    );
  }),
  gd = Dh;
var Wh =
  (globalThis && globalThis.__rest) ||
  function (e, t) {
    var n = {};
    for (var r in e)
      Object.prototype.hasOwnProperty.call(e, r) &&
        t.indexOf(r) < 0 &&
        (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == 'function') {
      var o = 0;
      for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
        t.indexOf(r[o]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
          (n[r[o]] = e[r[o]]);
    }
    return n;
  };
function Cc(e, t) {
  const [n, r] = s.useState(typeof e == 'string' ? e : '');
  return (
    s.useEffect(() => {
      (() => {
        if ((typeof e == 'string' && r(e), typeof e == 'object'))
          for (let o = 0; o < Vr.length; o++) {
            const i = Vr[o];
            if (!t[i]) continue;
            const a = e[i];
            if (a !== void 0) return void r(a);
          }
      })();
    }, [JSON.stringify(e), t]),
    n
  );
}
const Vh = s.forwardRef((e, t) => {
    const {
        prefixCls: n,
        justify: r,
        align: o,
        className: i,
        style: a,
        children: l,
        gutter: c = 0,
        wrap: u,
      } = e,
      d = Wh(e, [
        'prefixCls',
        'justify',
        'align',
        'className',
        'style',
        'children',
        'gutter',
        'wrap',
      ]),
      { getPrefixCls: f, direction: g } = s.useContext(Re),
      [b, m] = s.useState({ xs: !0, sm: !0, md: !0, lg: !0, xl: !0, xxl: !0 }),
      [p, h] = s.useState({ xs: !1, sm: !1, md: !1, lg: !1, xl: !1, xxl: !1 }),
      y = Cc(o, p),
      v = Cc(r, p),
      w = s.useRef(c),
      S = gh();
    s.useEffect(() => {
      const _ = S.subscribe((E) => {
        h(E);
        const C = w.current || 0;
        ((!Array.isArray(C) && typeof C == 'object') ||
          (Array.isArray(C) &&
            (typeof C[0] == 'object' || typeof C[1] == 'object'))) &&
          m(E);
      });
      return () => S.unsubscribe(_);
    }, []);
    const k = f('row', n),
      [$, x] = zh(k),
      O = (() => {
        const _ = [void 0, void 0];
        return (
          (Array.isArray(c) ? c : [c, void 0]).forEach((E, C) => {
            if (typeof E == 'object')
              for (let j = 0; j < Vr.length; j++) {
                const M = Vr[j];
                if (b[M] && E[M] !== void 0) {
                  _[C] = E[M];
                  break;
                }
              }
            else _[C] = E;
          }),
          _
        );
      })(),
      F = Q(
        k,
        {
          [`${k}-no-wrap`]: u === !1,
          [`${k}-${v}`]: v,
          [`${k}-${y}`]: y,
          [`${k}-rtl`]: g === 'rtl',
        },
        i,
        x,
      ),
      P = {},
      N = O[0] != null && O[0] > 0 ? O[0] / -2 : void 0;
    N && ((P.marginLeft = N), (P.marginRight = N)), ([, P.rowGap] = O);
    const [I, T] = O,
      L = s.useMemo(() => ({ gutter: [I, T], wrap: u }), [I, T, u]);
    return $(
      s.createElement(
        pd.Provider,
        { value: L },
        s.createElement(
          'div',
          Object.assign({}, d, {
            className: F,
            style: Object.assign(Object.assign({}, P), a),
            ref: t,
          }),
          l,
        ),
      ),
    );
  }),
  qh = Vh;
function Wn(e) {
  return !(!e.addonBefore && !e.addonAfter);
}
function Xi(e) {
  return !!(e.prefix || e.suffix || e.allowClear);
}
function Tr(e, t, n, r) {
  if (n) {
    var o = t;
    if (t.type === 'click') {
      var i = e.cloneNode(!0);
      return (
        (o = Object.create(t, {
          target: { value: i },
          currentTarget: { value: i },
        })),
        (i.value = ''),
        void n(o)
      );
    }
    if (r !== void 0)
      return (
        (o = Object.create(t, {
          target: { value: e },
          currentTarget: { value: e },
        })),
        (e.value = r),
        void n(o)
      );
    n(o);
  }
}
function Na(e) {
  return e == null ? '' : String(e);
}
var md = function (e) {
    var t,
      n,
      r = e.inputElement,
      o = e.prefixCls,
      i = e.prefix,
      a = e.suffix,
      l = e.addonBefore,
      c = e.addonAfter,
      u = e.className,
      d = e.style,
      f = e.disabled,
      g = e.readOnly,
      b = e.focused,
      m = e.triggerFocus,
      p = e.allowClear,
      h = e.value,
      y = e.handleReset,
      v = e.hidden,
      w = e.classes,
      S = e.classNames,
      k = e.dataAttrs,
      $ = e.styles,
      x = e.components,
      O = (x == null ? void 0 : x.affixWrapper) || 'span',
      F = (x == null ? void 0 : x.groupWrapper) || 'span',
      P = (x == null ? void 0 : x.wrapper) || 'span',
      N = (x == null ? void 0 : x.groupAddon) || 'span',
      I = s.useRef(null),
      T = s.cloneElement(r, {
        value: h,
        hidden: v,
        className:
          Q(
            (t = r.props) === null || t === void 0 ? void 0 : t.className,
            !Xi(e) && !Wn(e) && u,
          ) || null,
        style: z(
          z({}, (n = r.props) === null || n === void 0 ? void 0 : n.style),
          Xi(e) || Wn(e) ? {} : d,
        ),
      });
    if (Xi(e)) {
      var L,
        _ = ''.concat(o, '-affix-wrapper'),
        E = Q(
          _,
          (A((L = {}), ''.concat(_, '-disabled'), f),
          A(L, ''.concat(_, '-focused'), b),
          A(L, ''.concat(_, '-readonly'), g),
          A(L, ''.concat(_, '-input-with-clear-btn'), a && p && h),
          L),
          !Wn(e) && u,
          w == null ? void 0 : w.affixWrapper,
          S == null ? void 0 : S.affixWrapper,
        ),
        C =
          (a || p) &&
          Y.createElement(
            'span',
            {
              className: Q(
                ''.concat(o, '-suffix'),
                S == null ? void 0 : S.suffix,
              ),
              style: $ == null ? void 0 : $.suffix,
            },
            (function () {
              var D;
              if (!p) return null;
              var H = !f && !g && h,
                W = ''.concat(o, '-clear-icon'),
                X =
                  pe(p) === 'object' && p != null && p.clearIcon
                    ? p.clearIcon
                    : '✖';
              return Y.createElement(
                'span',
                {
                  onClick: y,
                  onMouseDown: function (q) {
                    return q.preventDefault();
                  },
                  className: Q(
                    W,
                    ((D = {}),
                    A(D, ''.concat(W, '-hidden'), !H),
                    A(D, ''.concat(W, '-has-suffix'), !!a),
                    D),
                  ),
                  role: 'button',
                  tabIndex: -1,
                },
                X,
              );
            })(),
            a,
          );
      T = Y.createElement(
        O,
        Se(
          {
            className: E,
            style: z(
              z({}, Wn(e) ? void 0 : d),
              $ == null ? void 0 : $.affixWrapper,
            ),
            hidden: !Wn(e) && v,
            onClick: function (D) {
              var H;
              (H = I.current) !== null &&
                H !== void 0 &&
                H.contains(D.target) &&
                (m == null || m());
            },
          },
          k == null ? void 0 : k.affixWrapper,
          { ref: I },
        ),
        i &&
          Y.createElement(
            'span',
            {
              className: Q(
                ''.concat(o, '-prefix'),
                S == null ? void 0 : S.prefix,
              ),
              style: $ == null ? void 0 : $.prefix,
            },
            i,
          ),
        s.cloneElement(r, { value: h, hidden: null }),
        C,
      );
    }
    if (Wn(e)) {
      var j = ''.concat(o, '-group'),
        M = ''.concat(j, '-addon'),
        R = Q(''.concat(o, '-wrapper'), j, w == null ? void 0 : w.wrapper),
        B = Q(''.concat(o, '-group-wrapper'), u, w == null ? void 0 : w.group);
      return Y.createElement(
        F,
        { className: B, style: d, hidden: v },
        Y.createElement(
          P,
          { className: R },
          l && Y.createElement(N, { className: M }, l),
          s.cloneElement(T, { hidden: null }),
          c && Y.createElement(N, { className: M }, c),
        ),
      );
    }
    return T;
  },
  Xh = [
    'autoComplete',
    'onChange',
    'onFocus',
    'onBlur',
    'onPressEnter',
    'onKeyDown',
    'prefixCls',
    'disabled',
    'htmlSize',
    'className',
    'maxLength',
    'suffix',
    'showCount',
    'type',
    'classes',
    'classNames',
    'styles',
  ],
  Gh = s.forwardRef(function (e, t) {
    var n = e.autoComplete,
      r = e.onChange,
      o = e.onFocus,
      i = e.onBlur,
      a = e.onPressEnter,
      l = e.onKeyDown,
      c = e.prefixCls,
      u = c === void 0 ? 'rc-input' : c,
      d = e.disabled,
      f = e.htmlSize,
      g = e.className,
      b = e.maxLength,
      m = e.suffix,
      p = e.showCount,
      h = e.type,
      y = h === void 0 ? 'text' : h,
      v = e.classes,
      w = e.classNames,
      S = e.styles,
      k = st(e, Xh),
      $ = G(si(e.defaultValue, { value: e.value }), 2),
      x = $[0],
      O = $[1],
      F = G(s.useState(!1), 2),
      P = F[0],
      N = F[1],
      I = s.useRef(null),
      T = function (M) {
        I.current &&
          (function (R, B) {
            if (R) {
              R.focus(B);
              var D = (B || {}).cursor;
              if (D) {
                var H = R.value.length;
                switch (D) {
                  case 'start':
                    R.setSelectionRange(0, 0);
                    break;
                  case 'end':
                    R.setSelectionRange(H, H);
                    break;
                  default:
                    R.setSelectionRange(0, H);
                }
              }
            }
          })(I.current, M);
      };
    s.useImperativeHandle(t, function () {
      return {
        focus: T,
        blur: function () {
          var M;
          (M = I.current) === null || M === void 0 || M.blur();
        },
        setSelectionRange: function (M, R, B) {
          var D;
          (D = I.current) === null ||
            D === void 0 ||
            D.setSelectionRange(M, R, B);
        },
        select: function () {
          var M;
          (M = I.current) === null || M === void 0 || M.select();
        },
        input: I.current,
      };
    }),
      s.useEffect(
        function () {
          N(function (M) {
            return (!M || !d) && M;
          });
        },
        [d],
      );
    var L,
      _ = function (M) {
        e.value === void 0 && O(M.target.value),
          I.current && Tr(I.current, M, r);
      },
      E = function (M) {
        a && M.key === 'Enter' && a(M), l == null || l(M);
      },
      C = function (M) {
        N(!0), o == null || o(M);
      },
      j = function (M) {
        N(!1), i == null || i(M);
      };
    return Y.createElement(
      md,
      Se({}, k, {
        prefixCls: u,
        className: g,
        inputElement:
          ((L = qr(e, [
            'prefixCls',
            'onPressEnter',
            'addonBefore',
            'addonAfter',
            'prefix',
            'suffix',
            'allowClear',
            'defaultValue',
            'showCount',
            'classes',
            'htmlSize',
            'styles',
            'classNames',
          ])),
          Y.createElement(
            'input',
            Se({ autoComplete: n }, L, {
              onChange: _,
              onFocus: C,
              onBlur: j,
              onKeyDown: E,
              className: Q(
                u,
                A({}, ''.concat(u, '-disabled'), d),
                w == null ? void 0 : w.input,
              ),
              style: S == null ? void 0 : S.input,
              ref: I,
              size: f,
              type: y,
            }),
          )),
        handleReset: function (M) {
          O(''), T(), I.current && Tr(I.current, M, r);
        },
        value: Na(x),
        focused: P,
        triggerFocus: T,
        suffix: (function () {
          var M = Number(b) > 0;
          if (m || p) {
            var R = Na(x),
              B = K(R).length,
              D =
                pe(p) === 'object'
                  ? p.formatter({ value: R, count: B, maxLength: b })
                  : ''.concat(B).concat(M ? ' / '.concat(b) : '');
            return Y.createElement(
              Y.Fragment,
              null,
              !!p &&
                Y.createElement(
                  'span',
                  {
                    className: Q(
                      ''.concat(u, '-show-count-suffix'),
                      A({}, ''.concat(u, '-show-count-has-suffix'), !!m),
                      w == null ? void 0 : w.count,
                    ),
                    style: z({}, S == null ? void 0 : S.count),
                  },
                  D,
                ),
              m,
            );
          }
          return null;
        })(),
        disabled: d,
        classes: v,
        classNames: w,
        styles: S,
      }),
    );
  });
const Uh = (e) => {
  const { getPrefixCls: t, direction: n } = s.useContext(Re),
    { prefixCls: r, className: o } = e,
    i = t('input-group', r),
    a = t('input'),
    [l, c] = rl(a),
    u = Q(
      i,
      {
        [`${i}-lg`]: e.size === 'large',
        [`${i}-sm`]: e.size === 'small',
        [`${i}-compact`]: e.compact,
        [`${i}-rtl`]: n === 'rtl',
      },
      c,
      o,
    ),
    d = s.useContext(At),
    f = s.useMemo(
      () => Object.assign(Object.assign({}, d), { isFormItemInput: !1 }),
      [d],
    );
  return l(
    s.createElement(
      'span',
      {
        className: u,
        style: e.style,
        onMouseEnter: e.onMouseEnter,
        onMouseLeave: e.onMouseLeave,
        onFocus: e.onFocus,
        onBlur: e.onBlur,
      },
      s.createElement(At.Provider, { value: f }, e.children),
    ),
  );
};
function hd(e, t) {
  const n = s.useRef([]),
    r = () => {
      n.current.push(
        setTimeout(() => {
          var o, i, a, l;
          !((o = e.current) === null || o === void 0) &&
            o.input &&
            ((i = e.current) === null || i === void 0
              ? void 0
              : i.input.getAttribute('type')) === 'password' &&
            !((a = e.current) === null || a === void 0) &&
            a.input.hasAttribute('value') &&
            ((l = e.current) === null ||
              l === void 0 ||
              l.input.removeAttribute('value'));
        }),
      );
    };
  return (
    s.useEffect(
      () => (
        t && r(),
        () =>
          n.current.forEach((o) => {
            o && clearTimeout(o);
          })
      ),
      [],
    ),
    r
  );
}
var Yh =
  (globalThis && globalThis.__rest) ||
  function (e, t) {
    var n = {};
    for (var r in e)
      Object.prototype.hasOwnProperty.call(e, r) &&
        t.indexOf(r) < 0 &&
        (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == 'function') {
      var o = 0;
      for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
        t.indexOf(r[o]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
          (n[r[o]] = e[r[o]]);
    }
    return n;
  };
const Kh = s.forwardRef((e, t) => {
    var n;
    const {
        prefixCls: r,
        bordered: o = !0,
        status: i,
        size: a,
        disabled: l,
        onBlur: c,
        onFocus: u,
        suffix: d,
        allowClear: f,
        addonAfter: g,
        addonBefore: b,
        className: m,
        style: p,
        styles: h,
        rootClassName: y,
        onChange: v,
        classNames: w,
      } = e,
      S = Yh(e, [
        'prefixCls',
        'bordered',
        'status',
        'size',
        'disabled',
        'onBlur',
        'onFocus',
        'suffix',
        'allowClear',
        'addonAfter',
        'addonBefore',
        'className',
        'style',
        'styles',
        'rootClassName',
        'onChange',
        'classNames',
      ]),
      { getPrefixCls: k, direction: $, input: x } = Y.useContext(Re),
      O = k('input', r),
      F = s.useRef(null),
      [P, N] = rl(O),
      { compactSize: I, compactItemClassnames: T } = Ya(O, $),
      L = Yr((q) => {
        var Z;
        return (Z = a ?? I) !== null && Z !== void 0 ? Z : q;
      }),
      _ = Y.useContext(Gr),
      E = l ?? _,
      { status: C, hasFeedback: j, feedbackIcon: M } = s.useContext(At),
      R = td(C, i),
      B =
        (function (q) {
          return !!(q.prefix || q.suffix || q.allowClear);
        })(e) || !!j,
      D = s.useRef(B);
    s.useEffect(() => {
      B && D.current, (D.current = B);
    }, [B]);
    const H = hd(F, !0),
      W = (j || d) && Y.createElement(Y.Fragment, null, d, j && M);
    let X;
    return (
      typeof f == 'object' && f != null && f.clearIcon
        ? (X = f)
        : f && (X = { clearIcon: Y.createElement(Ga, null) }),
      P(
        Y.createElement(
          Gh,
          Object.assign(
            {
              ref: Xt(t, F),
              prefixCls: O,
              autoComplete: x == null ? void 0 : x.autoComplete,
            },
            S,
            {
              disabled: E,
              onBlur: (q) => {
                H(), c == null || c(q);
              },
              onFocus: (q) => {
                H(), u == null || u(q);
              },
              style: Object.assign(
                Object.assign({}, x == null ? void 0 : x.style),
                p,
              ),
              styles: Object.assign(
                Object.assign({}, x == null ? void 0 : x.styles),
                h,
              ),
              suffix: W,
              allowClear: X,
              className: Q(m, y, T, x == null ? void 0 : x.className),
              onChange: (q) => {
                H(), v == null || v(q);
              },
              addonAfter:
                g &&
                Y.createElement(
                  wa,
                  null,
                  Y.createElement(dc, { override: !0, status: !0 }, g),
                ),
              addonBefore:
                b &&
                Y.createElement(
                  wa,
                  null,
                  Y.createElement(dc, { override: !0, status: !0 }, b),
                ),
              classNames: Object.assign(
                Object.assign(
                  Object.assign({}, w),
                  x == null ? void 0 : x.classNames,
                ),
                {
                  input: Q(
                    {
                      [`${O}-sm`]: L === 'small',
                      [`${O}-lg`]: L === 'large',
                      [`${O}-rtl`]: $ === 'rtl',
                      [`${O}-borderless`]: !o,
                    },
                    !B && Ir(O, R),
                    w == null ? void 0 : w.input,
                    (n = x == null ? void 0 : x.classNames) === null ||
                      n === void 0
                      ? void 0
                      : n.input,
                    N,
                  ),
                },
              ),
              classes: {
                affixWrapper: Q(
                  {
                    [`${O}-affix-wrapper-sm`]: L === 'small',
                    [`${O}-affix-wrapper-lg`]: L === 'large',
                    [`${O}-affix-wrapper-rtl`]: $ === 'rtl',
                    [`${O}-affix-wrapper-borderless`]: !o,
                  },
                  Ir(`${O}-affix-wrapper`, R, j),
                  N,
                ),
                wrapper: Q({ [`${O}-group-rtl`]: $ === 'rtl' }, N),
                group: Q(
                  {
                    [`${O}-group-wrapper-sm`]: L === 'small',
                    [`${O}-group-wrapper-lg`]: L === 'large',
                    [`${O}-group-wrapper-rtl`]: $ === 'rtl',
                    [`${O}-group-wrapper-disabled`]: E,
                  },
                  Ir(`${O}-group-wrapper`, R, j),
                  N,
                ),
              },
            },
          ),
        ),
      )
    );
  }),
  ol = Kh,
  Qh = {
    icon: {
      tag: 'svg',
      attrs: { viewBox: '64 64 896 896', focusable: 'false' },
      children: [
        {
          tag: 'path',
          attrs: {
            d: 'M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z',
          },
        },
        {
          tag: 'path',
          attrs: {
            d: 'M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z',
          },
        },
      ],
    },
    name: 'eye-invisible',
    theme: 'outlined',
  };
var Zh = function (e, t) {
  return s.createElement(nn, Se({}, e, { ref: t, icon: Qh }));
};
const Jh = s.forwardRef(Zh),
  e0 = {
    icon: {
      tag: 'svg',
      attrs: { viewBox: '64 64 896 896', focusable: 'false' },
      children: [
        {
          tag: 'path',
          attrs: {
            d: 'M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z',
          },
        },
      ],
    },
    name: 'eye',
    theme: 'outlined',
  };
var t0 = function (e, t) {
  return s.createElement(nn, Se({}, e, { ref: t, icon: e0 }));
};
const n0 = s.forwardRef(t0);
var r0 =
  (globalThis && globalThis.__rest) ||
  function (e, t) {
    var n = {};
    for (var r in e)
      Object.prototype.hasOwnProperty.call(e, r) &&
        t.indexOf(r) < 0 &&
        (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == 'function') {
      var o = 0;
      for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
        t.indexOf(r[o]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
          (n[r[o]] = e[r[o]]);
    }
    return n;
  };
const o0 = (e) => (e ? s.createElement(n0, null) : s.createElement(Jh, null)),
  i0 = { click: 'onClick', hover: 'onMouseOver' },
  a0 = s.forwardRef((e, t) => {
    const { visibilityToggle: n = !0 } = e,
      r = typeof n == 'object' && n.visible !== void 0,
      [o, i] = s.useState(() => !!r && n.visible),
      a = s.useRef(null);
    s.useEffect(() => {
      r && i(n.visible);
    }, [r, n]);
    const l = hd(a),
      c = () => {
        const { disabled: S } = e;
        S ||
          (o && l(),
          i((k) => {
            var $;
            const x = !k;
            return (
              typeof n == 'object' &&
                (($ = n.onVisibleChange) === null ||
                  $ === void 0 ||
                  $.call(n, x)),
              x
            );
          }));
      },
      { className: u, prefixCls: d, inputPrefixCls: f, size: g } = e,
      b = r0(e, ['className', 'prefixCls', 'inputPrefixCls', 'size']),
      { getPrefixCls: m } = s.useContext(Re),
      p = m('input', f),
      h = m('input-password', d),
      y =
        n &&
        ((S) => {
          const { action: k = 'click', iconRender: $ = o0 } = e,
            x = i0[k] || '',
            O = $(o),
            F = {
              [x]: c,
              className: `${S}-icon`,
              key: 'passwordIcon',
              onMouseDown: (P) => {
                P.preventDefault();
              },
              onMouseUp: (P) => {
                P.preventDefault();
              },
            };
          return s.cloneElement(
            s.isValidElement(O) ? O : s.createElement('span', null, O),
            F,
          );
        })(h),
      v = Q(h, u, { [`${h}-${g}`]: !!g }),
      w = Object.assign(
        Object.assign({}, qr(b, ['suffix', 'iconRender', 'visibilityToggle'])),
        {
          type: o ? 'text' : 'password',
          className: v,
          prefixCls: p,
          suffix: y,
        },
      );
    return (
      g && (w.size = g),
      s.createElement(ol, Object.assign({ ref: Xt(t, a) }, w))
    );
  }),
  l0 = a0;
var s0 =
  (globalThis && globalThis.__rest) ||
  function (e, t) {
    var n = {};
    for (var r in e)
      Object.prototype.hasOwnProperty.call(e, r) &&
        t.indexOf(r) < 0 &&
        (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == 'function') {
      var o = 0;
      for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
        t.indexOf(r[o]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
          (n[r[o]] = e[r[o]]);
    }
    return n;
  };
const c0 = s.forwardRef((e, t) => {
    const {
        prefixCls: n,
        inputPrefixCls: r,
        className: o,
        size: i,
        suffix: a,
        enterButton: l = !1,
        addonAfter: c,
        loading: u,
        disabled: d,
        onSearch: f,
        onChange: g,
        onCompositionStart: b,
        onCompositionEnd: m,
      } = e,
      p = s0(e, [
        'prefixCls',
        'inputPrefixCls',
        'className',
        'size',
        'suffix',
        'enterButton',
        'addonAfter',
        'loading',
        'disabled',
        'onSearch',
        'onChange',
        'onCompositionStart',
        'onCompositionEnd',
      ]),
      { getPrefixCls: h, direction: y } = s.useContext(Re),
      v = s.useRef(!1),
      w = h('input-search', n),
      S = h('input', r),
      { compactSize: k } = Ya(w, y),
      $ = Yr((E) => {
        var C;
        return (C = i ?? k) !== null && C !== void 0 ? C : E;
      }),
      x = s.useRef(null),
      O = (E) => {
        var C;
        document.activeElement ===
          ((C = x.current) === null || C === void 0 ? void 0 : C.input) &&
          E.preventDefault();
      },
      F = (E) => {
        var C, j;
        f &&
          f(
            (j =
              (C = x.current) === null || C === void 0 ? void 0 : C.input) ===
              null || j === void 0
              ? void 0
              : j.value,
            E,
            { source: 'input' },
          );
      },
      P = typeof l == 'boolean' ? s.createElement(ph, null) : null,
      N = `${w}-button`;
    let I;
    const T = l || {},
      L = T.type && T.type.__ANT_BUTTON === !0;
    (I =
      L || T.type === 'button'
        ? $n(
            T,
            Object.assign(
              {
                onMouseDown: O,
                onClick: (E) => {
                  var C, j;
                  (j =
                    (C = T == null ? void 0 : T.props) === null || C === void 0
                      ? void 0
                      : C.onClick) === null ||
                    j === void 0 ||
                    j.call(C, E),
                    F(E);
                },
                key: 'enterButton',
              },
              L ? { className: N, size: $ } : {},
            ),
          )
        : s.createElement(
            Sm,
            {
              className: N,
              type: l ? 'primary' : void 0,
              size: $,
              disabled: d,
              key: 'enterButton',
              onMouseDown: O,
              onClick: F,
              loading: u,
              icon: P,
            },
            l,
          )),
      c && (I = [I, $n(c, { key: 'addonAfter' })]);
    const _ = Q(
      w,
      {
        [`${w}-rtl`]: y === 'rtl',
        [`${w}-${$}`]: !!$,
        [`${w}-with-button`]: !!l,
      },
      o,
    );
    return s.createElement(
      ol,
      Object.assign(
        {
          ref: Xt(x, t),
          onPressEnter: (E) => {
            v.current || u || F(E);
          },
        },
        p,
        {
          size: $,
          onCompositionStart: (E) => {
            (v.current = !0), b == null || b(E);
          },
          onCompositionEnd: (E) => {
            (v.current = !1), m == null || m(E);
          },
          prefixCls: S,
          addonAfter: I,
          suffix: a,
          onChange: (E) => {
            E &&
              E.target &&
              E.type === 'click' &&
              f &&
              f(E.target.value, E, { source: 'clear' }),
              g && g(E);
          },
          className: _,
          disabled: d,
        },
      ),
    );
  }),
  u0 = c0;
var wt,
  d0 = [
    'letter-spacing',
    'line-height',
    'padding-top',
    'padding-bottom',
    'font-family',
    'font-weight',
    'font-size',
    'font-variant',
    'text-rendering',
    'text-transform',
    'width',
    'text-indent',
    'padding-left',
    'padding-right',
    'border-width',
    'box-sizing',
    'word-break',
    'white-space',
  ],
  Gi = {};
function f0(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 && arguments[1],
    n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null,
    r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
  wt ||
    ((wt = document.createElement('textarea')).setAttribute('tab-index', '-1'),
    wt.setAttribute('aria-hidden', 'true'),
    document.body.appendChild(wt)),
    e.getAttribute('wrap')
      ? wt.setAttribute('wrap', e.getAttribute('wrap'))
      : wt.removeAttribute('wrap');
  var o = (function (p) {
      var h = arguments.length > 1 && arguments[1] !== void 0 && arguments[1],
        y =
          p.getAttribute('id') ||
          p.getAttribute('data-reactid') ||
          p.getAttribute('name');
      if (h && Gi[y]) return Gi[y];
      var v = window.getComputedStyle(p),
        w =
          v.getPropertyValue('box-sizing') ||
          v.getPropertyValue('-moz-box-sizing') ||
          v.getPropertyValue('-webkit-box-sizing'),
        S =
          parseFloat(v.getPropertyValue('padding-bottom')) +
          parseFloat(v.getPropertyValue('padding-top')),
        k =
          parseFloat(v.getPropertyValue('border-bottom-width')) +
          parseFloat(v.getPropertyValue('border-top-width')),
        $ = {
          sizingStyle: d0
            .map(function (x) {
              return ''.concat(x, ':').concat(v.getPropertyValue(x));
            })
            .join(';'),
          paddingSize: S,
          borderSize: k,
          boxSizing: w,
        };
      return h && y && (Gi[y] = $), $;
    })(e, t),
    i = o.paddingSize,
    a = o.borderSize,
    l = o.boxSizing,
    c = o.sizingStyle;
  wt.setAttribute(
    'style',
    ''.concat(c, ';').concat(`
  min-height:0 !important;
  max-height:none !important;
  height:0 !important;
  visibility:hidden !important;
  overflow:hidden !important;
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
  pointer-events: none !important;
`),
  ),
    (wt.value = e.value || e.placeholder || '');
  var u,
    d = void 0,
    f = void 0,
    g = wt.scrollHeight;
  if (
    (l === 'border-box' ? (g += a) : l === 'content-box' && (g -= i),
    n !== null || r !== null)
  ) {
    wt.value = ' ';
    var b = wt.scrollHeight - i;
    n !== null &&
      ((d = b * n),
      l === 'border-box' && (d = d + i + a),
      (g = Math.max(d, g))),
      r !== null &&
        ((f = b * r),
        l === 'border-box' && (f = f + i + a),
        (u = g > f ? '' : 'hidden'),
        (g = Math.min(f, g)));
  }
  var m = { height: g, overflowY: u, resize: 'none' };
  return d && (m.minHeight = d), f && (m.maxHeight = f), m;
}
var p0 = [
    'prefixCls',
    'onPressEnter',
    'defaultValue',
    'value',
    'autoSize',
    'onResize',
    'className',
    'style',
    'disabled',
    'onChange',
    'onInternalAutoSize',
  ],
  g0 = s.forwardRef(function (e, t) {
    var n = e,
      r = n.prefixCls;
    n.onPressEnter;
    var o = n.defaultValue,
      i = n.value,
      a = n.autoSize,
      l = n.onResize,
      c = n.className,
      u = n.style,
      d = n.disabled,
      f = n.onChange;
    n.onInternalAutoSize;
    var g = st(n, p0),
      b = G(
        si(o, {
          value: i,
          postState: function (E) {
            return E ?? '';
          },
        }),
        2,
      ),
      m = b[0],
      p = b[1],
      h = s.useRef();
    s.useImperativeHandle(t, function () {
      return { textArea: h.current };
    });
    var y = G(
        s.useMemo(
          function () {
            return a && pe(a) === 'object' ? [a.minRows, a.maxRows] : [];
          },
          [a],
        ),
        2,
      ),
      v = y[0],
      w = y[1],
      S = !!a,
      k = G(s.useState(2), 2),
      $ = k[0],
      x = k[1],
      O = G(s.useState(), 2),
      F = O[0],
      P = O[1],
      N = function () {
        x(0);
      };
    He(
      function () {
        S && N();
      },
      [i, v, w, S],
    ),
      He(
        function () {
          if ($ === 0) x(1);
          else if ($ === 1) {
            var E = f0(h.current, !1, v, w);
            x(2), P(E);
          } else
            (function () {
              try {
                if (document.activeElement === h.current) {
                  var C = h.current,
                    j = C.selectionStart,
                    M = C.selectionEnd,
                    R = C.scrollTop;
                  h.current.setSelectionRange(j, M), (h.current.scrollTop = R);
                }
              } catch {}
            })();
        },
        [$],
      );
    var I = s.useRef(),
      T = function () {
        lt.cancel(I.current);
      };
    s.useEffect(function () {
      return T;
    }, []);
    var L = S ? F : null,
      _ = z(z({}, u), L);
    return (
      ($ !== 0 && $ !== 1) ||
        ((_.overflowY = 'hidden'), (_.overflowX = 'hidden')),
      s.createElement(
        ri,
        {
          onResize: function (E) {
            $ === 2 &&
              (l == null || l(E),
              a &&
                (T(),
                (I.current = lt(function () {
                  N();
                }))));
          },
          disabled: !(a || l),
        },
        s.createElement(
          'textarea',
          Se({}, g, {
            ref: h,
            style: _,
            className: Q(r, c, A({}, ''.concat(r, '-disabled'), d)),
            disabled: d,
            value: m,
            onChange: function (E) {
              p(E.target.value), f == null || f(E);
            },
          }),
        ),
      )
    );
  }),
  m0 = [
    'defaultValue',
    'value',
    'onFocus',
    'onBlur',
    'onChange',
    'allowClear',
    'maxLength',
    'onCompositionStart',
    'onCompositionEnd',
    'suffix',
    'prefixCls',
    'classes',
    'showCount',
    'className',
    'style',
    'disabled',
    'hidden',
    'classNames',
    'styles',
    'onResize',
  ];
function vd(e, t) {
  return K(e || '')
    .slice(0, t)
    .join('');
}
function $c(e, t, n, r) {
  var o = n;
  return (
    e
      ? (o = vd(n, r))
      : K(t || '').length < n.length && K(n || '').length > r && (o = t),
    o
  );
}
var h0 = Y.forwardRef(function (e, t) {
    var n,
      r = e.defaultValue,
      o = e.value,
      i = e.onFocus,
      a = e.onBlur,
      l = e.onChange,
      c = e.allowClear,
      u = e.maxLength,
      d = e.onCompositionStart,
      f = e.onCompositionEnd,
      g = e.suffix,
      b = e.prefixCls,
      m = b === void 0 ? 'rc-textarea' : b,
      p = e.classes,
      h = e.showCount,
      y = e.className,
      v = e.style,
      w = e.disabled,
      S = e.hidden,
      k = e.classNames,
      $ = e.styles,
      x = e.onResize,
      O = st(e, m0),
      F = G(si(r, { value: o, defaultValue: r }), 2),
      P = F[0],
      N = F[1],
      I = s.useRef(null),
      T = G(Y.useState(!1), 2),
      L = T[0],
      _ = T[1],
      E = G(Y.useState(!1), 2),
      C = E[0],
      j = E[1],
      M = Y.useRef(),
      R = Y.useRef(0),
      B = G(Y.useState(null), 2),
      D = B[0],
      H = B[1],
      W = function () {
        var U;
        (U = I.current) === null || U === void 0 || U.textArea.focus();
      };
    s.useImperativeHandle(t, function () {
      return {
        resizableTextArea: I.current,
        focus: W,
        blur: function () {
          var U;
          (U = I.current) === null || U === void 0 || U.textArea.blur();
        },
      };
    }),
      s.useEffect(
        function () {
          _(function (U) {
            return !w && U;
          });
        },
        [w],
      );
    var X = Number(u) > 0,
      q = Na(P);
    !C && X && o == null && (q = vd(q, u));
    var Z,
      ce = g;
    if (h) {
      var ge = K(q).length;
      (Z =
        pe(h) === 'object'
          ? h.formatter({ value: q, count: ge, maxLength: u })
          : ''.concat(ge).concat(X ? ' / '.concat(u) : '')),
        (ce = Y.createElement(
          Y.Fragment,
          null,
          ce,
          Y.createElement(
            'span',
            {
              className: Q(
                ''.concat(m, '-data-count'),
                k == null ? void 0 : k.count,
              ),
              style: $ == null ? void 0 : $.count,
            },
            Z,
          ),
        ));
    }
    var Oe = !O.autoSize && !h && !c,
      re = Y.createElement(md, {
        value: q,
        allowClear: c,
        handleReset: function (U) {
          var ee;
          N(''),
            W(),
            Tr(
              (ee = I.current) === null || ee === void 0 ? void 0 : ee.textArea,
              U,
              l,
            );
        },
        suffix: ce,
        prefixCls: m,
        classes: {
          affixWrapper: Q(
            p == null ? void 0 : p.affixWrapper,
            ((n = {}),
            A(n, ''.concat(m, '-show-count'), h),
            A(n, ''.concat(m, '-textarea-allow-clear'), c),
            n),
          ),
        },
        disabled: w,
        focused: L,
        className: y,
        style: z(z({}, v), D && !Oe ? { height: 'auto' } : {}),
        dataAttrs: {
          affixWrapper: { 'data-count': typeof Z == 'string' ? Z : void 0 },
        },
        hidden: S,
        inputElement: Y.createElement(
          g0,
          Se({}, O, {
            onKeyDown: function (U) {
              var ee = O.onPressEnter,
                be = O.onKeyDown;
              U.key === 'Enter' && ee && ee(U), be == null || be(U);
            },
            onChange: function (U) {
              var ee = U.target.value;
              !C &&
                X &&
                (ee = $c(
                  U.target.selectionStart >= u + 1 ||
                    U.target.selectionStart === ee.length ||
                    !U.target.selectionStart,
                  P,
                  ee,
                  u,
                )),
                N(ee),
                Tr(U.currentTarget, U, l, ee);
            },
            onFocus: function (U) {
              _(!0), i == null || i(U);
            },
            onBlur: function (U) {
              _(!1), a == null || a(U);
            },
            onCompositionStart: function (U) {
              j(!0),
                (M.current = P),
                (R.current = U.currentTarget.selectionStart),
                d == null || d(U);
            },
            onCompositionEnd: function (U) {
              j(!1);
              var ee,
                be = U.currentTarget.value;
              X &&
                (be = $c(
                  R.current >= u + 1 ||
                    R.current ===
                      ((ee = M.current) === null || ee === void 0
                        ? void 0
                        : ee.length),
                  M.current,
                  be,
                  u,
                )),
                be !== P && (N(be), Tr(U.currentTarget, U, l, be)),
                f == null || f(U);
            },
            className: k == null ? void 0 : k.textarea,
            style: z(
              z({}, $ == null ? void 0 : $.textarea),
              {},
              { resize: v == null ? void 0 : v.resize },
            ),
            disabled: w,
            prefixCls: m,
            onResize: function (U) {
              var ee;
              x == null || x(U),
                (ee = I.current) !== null &&
                  ee !== void 0 &&
                  ee.textArea.style.height &&
                  H(!0);
            },
            ref: I,
          }),
        ),
      });
    return re;
  }),
  v0 =
    (globalThis && globalThis.__rest) ||
    function (e, t) {
      var n = {};
      for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) &&
          t.indexOf(r) < 0 &&
          (n[r] = e[r]);
      if (e != null && typeof Object.getOwnPropertySymbols == 'function') {
        var o = 0;
        for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
          t.indexOf(r[o]) < 0 &&
            Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
            (n[r[o]] = e[r[o]]);
      }
      return n;
    };
const b0 = s.forwardRef((e, t) => {
    const {
        prefixCls: n,
        bordered: r = !0,
        size: o,
        disabled: i,
        status: a,
        allowClear: l,
        showCount: c,
        classNames: u,
        rootClassName: d,
        className: f,
      } = e,
      g = v0(e, [
        'prefixCls',
        'bordered',
        'size',
        'disabled',
        'status',
        'allowClear',
        'showCount',
        'classNames',
        'rootClassName',
        'className',
      ]),
      { getPrefixCls: b, direction: m } = s.useContext(Re),
      p = Yr(o),
      h = s.useContext(Gr),
      y = i ?? h,
      { status: v, hasFeedback: w, feedbackIcon: S } = s.useContext(At),
      k = td(v, a),
      $ = s.useRef(null);
    s.useImperativeHandle(t, () => {
      var N;
      return {
        resizableTextArea:
          (N = $.current) === null || N === void 0
            ? void 0
            : N.resizableTextArea,
        focus: (I) => {
          var T, L;
          (function (_, E) {
            if (!_) return;
            _.focus(E);
            const { cursor: C } = E || {};
            if (C) {
              const j = _.value.length;
              switch (C) {
                case 'start':
                  _.setSelectionRange(0, 0);
                  break;
                case 'end':
                  _.setSelectionRange(j, j);
                  break;
                default:
                  _.setSelectionRange(0, j);
              }
            }
          })(
            (L =
              (T = $.current) === null || T === void 0
                ? void 0
                : T.resizableTextArea) === null || L === void 0
              ? void 0
              : L.textArea,
            I,
          );
        },
        blur: () => {
          var I;
          return (I = $.current) === null || I === void 0 ? void 0 : I.blur();
        },
      };
    });
    const x = b('input', n);
    let O;
    typeof l == 'object' && l != null && l.clearIcon
      ? (O = l)
      : l && (O = { clearIcon: s.createElement(Ga, null) });
    const [F, P] = rl(x);
    return F(
      s.createElement(
        h0,
        Object.assign({}, g, {
          disabled: y,
          allowClear: O,
          className: Q(f, d),
          classes: {
            affixWrapper: Q(
              `${x}-textarea-affix-wrapper`,
              {
                [`${x}-affix-wrapper-rtl`]: m === 'rtl',
                [`${x}-affix-wrapper-borderless`]: !r,
                [`${x}-affix-wrapper-sm`]: p === 'small',
                [`${x}-affix-wrapper-lg`]: p === 'large',
                [`${x}-textarea-show-count`]: c,
              },
              Ir(`${x}-affix-wrapper`, k),
              P,
            ),
          },
          classNames: Object.assign(Object.assign({}, u), {
            textarea: Q(
              {
                [`${x}-borderless`]: !r,
                [`${x}-sm`]: p === 'small',
                [`${x}-lg`]: p === 'large',
              },
              Ir(x, k),
              P,
              u == null ? void 0 : u.textarea,
            ),
          }),
          prefixCls: x,
          suffix:
            w &&
            s.createElement('span', { className: `${x}-textarea-suffix` }, S),
          showCount: c,
          ref: $,
        }),
      ),
    );
  }),
  Fr = ol;
(Fr.Group = Uh), (Fr.Search = u0), (Fr.TextArea = b0), (Fr.Password = l0);
const Y0 = Fr;
function Zo(e) {
  const [t, n] = s.useState(e);
  return (
    s.useEffect(() => {
      const r = setTimeout(
        () => {
          n(e);
        },
        e.length ? 0 : 10,
      );
      return () => {
        clearTimeout(r);
      };
    }, [e]),
    t
  );
}
const y0 = (e) => {
    const { componentCls: t } = e,
      n = `${t}-show-help-item`;
    return {
      [`${t}-show-help`]: {
        transition: `opacity ${e.motionDurationSlow} ${e.motionEaseInOut}`,
        '&-appear, &-enter': { opacity: 0, '&-active': { opacity: 1 } },
        '&-leave': { opacity: 1, '&-active': { opacity: 0 } },
        [n]: {
          overflow: 'hidden',
          transition: `height ${e.motionDurationSlow} ${e.motionEaseInOut},
                     opacity ${e.motionDurationSlow} ${e.motionEaseInOut},
                     transform ${e.motionDurationSlow} ${e.motionEaseInOut} !important`,
          [`&${n}-appear, &${n}-enter`]: {
            transform: 'translateY(-5px)',
            opacity: 0,
            '&-active': { transform: 'translateY(0)', opacity: 1 },
          },
          [`&${n}-leave-active`]: { transform: 'translateY(-5px)' },
        },
      },
    };
  },
  x0 = (e) => ({
    legend: {
      display: 'block',
      width: '100%',
      marginBottom: e.marginLG,
      padding: 0,
      color: e.colorTextDescription,
      fontSize: e.fontSizeLG,
      lineHeight: 'inherit',
      border: 0,
      borderBottom: `${e.lineWidth}px ${e.lineType} ${e.colorBorder}`,
    },
    label: { fontSize: e.fontSize },
    'input[type="search"]': { boxSizing: 'border-box' },
    'input[type="radio"], input[type="checkbox"]': { lineHeight: 'normal' },
    'input[type="file"]': { display: 'block' },
    'input[type="range"]': { display: 'block', width: '100%' },
    'select[multiple], select[size]': { height: 'auto' },
    "input[type='file']:focus,\n  input[type='radio']:focus,\n  input[type='checkbox']:focus":
      {
        outline: 0,
        boxShadow: `0 0 0 ${e.controlOutlineWidth}px ${e.controlOutline}`,
      },
    output: {
      display: 'block',
      paddingTop: 15,
      color: e.colorText,
      fontSize: e.fontSize,
      lineHeight: e.lineHeight,
    },
  }),
  Ec = (e, t) => {
    const { formItemCls: n } = e;
    return {
      [n]: {
        [`${n}-label > label`]: { height: t },
        [`${n}-control-input`]: { minHeight: t },
      },
    };
  },
  w0 = (e) => {
    const { componentCls: t } = e;
    return {
      [e.componentCls]: Object.assign(
        Object.assign(Object.assign({}, Xr(e)), x0(e)),
        {
          [`${t}-text`]: {
            display: 'inline-block',
            paddingInlineEnd: e.paddingSM,
          },
          '&-small': Object.assign({}, Ec(e, e.controlHeightSM)),
          '&-large': Object.assign({}, Ec(e, e.controlHeightLG)),
        },
      ),
    };
  },
  C0 = (e) => {
    const {
      formItemCls: t,
      iconCls: n,
      componentCls: r,
      rootPrefixCls: o,
      labelRequiredMarkColor: i,
      labelColor: a,
      labelFontSize: l,
      labelHeight: c,
      labelColonMarginInlineStart: u,
      labelColonMarginInlineEnd: d,
      itemMarginBottom: f,
    } = e;
    return {
      [t]: Object.assign(Object.assign({}, Xr(e)), {
        marginBottom: f,
        verticalAlign: 'top',
        '&-with-help': { transition: 'none' },
        [`&-hidden,
        &-hidden.${o}-row`]: { display: 'none' },
        '&-has-warning': { [`${t}-split`]: { color: e.colorError } },
        '&-has-error': { [`${t}-split`]: { color: e.colorWarning } },
        [`${t}-label`]: {
          flexGrow: 0,
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          textAlign: 'end',
          verticalAlign: 'middle',
          '&-left': { textAlign: 'start' },
          '&-wrap': {
            overflow: 'unset',
            lineHeight: `${e.lineHeight} - 0.25em`,
            whiteSpace: 'unset',
          },
          '> label': {
            position: 'relative',
            display: 'inline-flex',
            alignItems: 'center',
            maxWidth: '100%',
            height: c,
            color: a,
            fontSize: l,
            [`> ${n}`]: { fontSize: e.fontSize, verticalAlign: 'top' },
            [`&${t}-required:not(${t}-required-mark-optional)::before`]: {
              display: 'inline-block',
              marginInlineEnd: e.marginXXS,
              color: i,
              fontSize: e.fontSize,
              fontFamily: 'SimSun, sans-serif',
              lineHeight: 1,
              content: '"*"',
              [`${r}-hide-required-mark &`]: { display: 'none' },
            },
            [`${t}-optional`]: {
              display: 'inline-block',
              marginInlineStart: e.marginXXS,
              color: e.colorTextDescription,
              [`${r}-hide-required-mark &`]: { display: 'none' },
            },
            [`${t}-tooltip`]: {
              color: e.colorTextDescription,
              cursor: 'help',
              writingMode: 'horizontal-tb',
              marginInlineStart: e.marginXXS,
            },
            '&::after': {
              content: '":"',
              position: 'relative',
              marginBlock: 0,
              marginInlineStart: u,
              marginInlineEnd: d,
            },
            [`&${t}-no-colon::after`]: { content: '"\\a0"' },
          },
        },
        [`${t}-control`]: {
          '--ant-display': 'flex',
          flexDirection: 'column',
          flexGrow: 1,
          [`&:first-child:not([class^="'${o}-col-'"]):not([class*="' ${o}-col-'"])`]:
            { width: '100%' },
          '&-input': {
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            minHeight: e.controlHeight,
            '&-content': { flex: 'auto', maxWidth: '100%' },
          },
        },
        [t]: {
          '&-explain, &-extra': {
            clear: 'both',
            color: e.colorTextDescription,
            fontSize: e.fontSize,
            lineHeight: e.lineHeight,
          },
          '&-explain-connected': { width: '100%' },
          '&-extra': {
            minHeight: e.controlHeightSM,
            transition: `color ${e.motionDurationMid} ${e.motionEaseOut}`,
          },
          '&-explain': {
            '&-error': { color: e.colorError },
            '&-warning': { color: e.colorWarning },
          },
        },
        [`&-with-help ${t}-explain`]: { height: 'auto', opacity: 1 },
        [`${t}-feedback-icon`]: {
          fontSize: e.fontSize,
          textAlign: 'center',
          visibility: 'visible',
          animationName: tl,
          animationDuration: e.motionDurationMid,
          animationTimingFunction: e.motionEaseOutBack,
          pointerEvents: 'none',
          '&-success': { color: e.colorSuccess },
          '&-error': { color: e.colorError },
          '&-warning': { color: e.colorWarning },
          '&-validating': { color: e.colorPrimary },
        },
      }),
    };
  },
  $0 = (e) => {
    const { componentCls: t, formItemCls: n } = e;
    return {
      [`${t}-horizontal`]: {
        [`${n}-label`]: { flexGrow: 0 },
        [`${n}-control`]: { flex: '1 1 0', minWidth: 0 },
        [`${n}-label[class$='-24'], ${n}-label[class*='-24 ']`]: {
          [`& + ${n}-control`]: { minWidth: 'unset' },
        },
      },
    };
  },
  E0 = (e) => {
    const { componentCls: t, formItemCls: n } = e;
    return {
      [`${t}-inline`]: {
        display: 'flex',
        flexWrap: 'wrap',
        [n]: {
          flex: 'none',
          marginInlineEnd: e.margin,
          marginBottom: 0,
          '&-row': { flexWrap: 'nowrap' },
          [`> ${n}-label,
        > ${n}-control`]: { display: 'inline-block', verticalAlign: 'top' },
          [`> ${n}-label`]: { flex: 'none' },
          [`${t}-text`]: { display: 'inline-block' },
          [`${n}-has-feedback`]: { display: 'inline-block' },
        },
      },
    };
  },
  Gn = (e) => ({
    padding: e.verticalLabelPadding,
    margin: e.verticalLabelMargin,
    whiteSpace: 'initial',
    textAlign: 'start',
    '> label': { margin: 0, '&::after': { visibility: 'hidden' } },
  }),
  S0 = (e) => {
    const { componentCls: t, formItemCls: n, rootPrefixCls: r } = e;
    return {
      [`${n} ${n}-label`]: Gn(e),
      [t]: {
        [n]: {
          flexWrap: 'wrap',
          [`${n}-label, ${n}-control`]: {
            [`&:not([class*=" ${r}-col-xs"])`]: {
              flex: '0 0 100%',
              maxWidth: '100%',
            },
          },
        },
      },
    };
  },
  O0 = (e) => {
    const { componentCls: t, formItemCls: n, rootPrefixCls: r } = e;
    return {
      [`${t}-vertical`]: {
        [n]: {
          '&-row': { flexDirection: 'column' },
          '&-label > label': { height: 'auto' },
          [`${t}-item-control`]: { width: '100%' },
        },
      },
      [`${t}-vertical ${n}-label,
      .${r}-col-24${n}-label,
      .${r}-col-xl-24${n}-label`]: Gn(e),
      [`@media (max-width: ${e.screenXSMax}px)`]: [
        S0(e),
        { [t]: { [`.${r}-col-xs-24${n}-label`]: Gn(e) } },
      ],
      [`@media (max-width: ${e.screenSMMax}px)`]: {
        [t]: { [`.${r}-col-sm-24${n}-label`]: Gn(e) },
      },
      [`@media (max-width: ${e.screenMDMax}px)`]: {
        [t]: { [`.${r}-col-md-24${n}-label`]: Gn(e) },
      },
      [`@media (max-width: ${e.screenLGMax}px)`]: {
        [t]: { [`.${r}-col-lg-24${n}-label`]: Gn(e) },
      },
    };
  },
  bd = (e, t) =>
    Ge(e, { formItemCls: `${e.componentCls}-item`, rootPrefixCls: t }),
  il = tn(
    'Form',
    (e, t) => {
      let { rootPrefixCls: n } = t;
      const r = bd(e, n);
      return [w0(r), C0(r), y0(r), $0(r), E0(r), O0(r), nh(r), tl];
    },
    (e) => ({
      labelRequiredMarkColor: e.colorError,
      labelColor: e.colorTextHeading,
      labelFontSize: e.fontSize,
      labelHeight: e.controlHeight,
      labelColonMarginInlineStart: e.marginXXS / 2,
      labelColonMarginInlineEnd: e.marginXS,
      itemMarginBottom: e.marginLG,
      verticalLabelPadding: `0 0 ${e.paddingXS}px`,
      verticalLabelMargin: 0,
    }),
    { order: -1e3 },
  ),
  Sc = [];
function Ui(e, t, n) {
  return {
    key:
      typeof e == 'string'
        ? e
        : `${t}-${
            arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0
          }`,
    error: e,
    errorStatus: n,
  };
}
const yd = (e) => {
    let {
      help: t,
      helpStatus: n,
      errors: r = Sc,
      warnings: o = Sc,
      className: i,
      fieldId: a,
      onVisibleChanged: l,
    } = e;
    const { prefixCls: c } = s.useContext(el),
      u = `${c}-item-explain`,
      [, d] = il(c),
      f = s.useMemo(() => Bs(c), [c]),
      g = Zo(r),
      b = Zo(o),
      m = s.useMemo(
        () =>
          t != null
            ? [Ui(t, 'help', n)]
            : [].concat(
                K(g.map((h, y) => Ui(h, 'error', 'error', y))),
                K(b.map((h, y) => Ui(h, 'warning', 'warning', y))),
              ),
        [t, n, g, b],
      ),
      p = {};
    return (
      a && (p.id = `${a}_help`),
      s.createElement(
        nr,
        {
          motionDeadline: f.motionDeadline,
          motionName: `${c}-show-help`,
          visible: !!m.length,
          onVisibleChanged: l,
        },
        (h) => {
          const { className: y, style: v } = h;
          return s.createElement(
            'div',
            Object.assign({}, p, {
              className: Q(u, y, i, d),
              style: v,
              role: 'alert',
            }),
            s.createElement(
              xg,
              Object.assign({ keys: m }, Bs(c), {
                motionName: `${c}-show-help-item`,
                component: !1,
              }),
              (w) => {
                const {
                  key: S,
                  error: k,
                  errorStatus: $,
                  className: x,
                  style: O,
                } = w;
                return s.createElement(
                  'div',
                  { key: S, className: Q(x, { [`${u}-${$}`]: $ }), style: O },
                  k,
                );
              },
            ),
          );
        },
      )
    );
  },
  k0 = ['parentNode'],
  j0 = 'form_item';
function Nr(e) {
  return e === void 0 || e === !1 ? [] : Array.isArray(e) ? e : [e];
}
function xd(e, t) {
  if (!e.length) return;
  const n = e.join('_');
  return t ? `${t}_${n}` : k0.includes(n) ? `${j0}_${n}` : n;
}
function wd(e, t, n, r, o, i) {
  let a = r;
  return (
    i !== void 0
      ? (a = i)
      : n.validating
      ? (a = 'validating')
      : e.length
      ? (a = 'error')
      : t.length
      ? (a = 'warning')
      : (n.touched || (o && n.validated)) && (a = 'success'),
    a
  );
}
function Oc(e) {
  return Nr(e).join('_');
}
function Cd(e) {
  const [t] = Ja(),
    n = s.useRef({}),
    r = s.useMemo(
      () =>
        e ??
        Object.assign(Object.assign({}, t), {
          __INTERNAL__: {
            itemRef: (o) => (i) => {
              const a = Oc(o);
              i ? (n.current[a] = i) : delete n.current[a];
            },
          },
          scrollToField: function (o) {
            let i =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : {};
            const a = xd(Nr(o), r.__INTERNAL__.name),
              l = a ? document.getElementById(a) : null;
            l &&
              (function (c, u) {
                if (
                  !c.isConnected ||
                  !((f) => {
                    let g = f;
                    for (; g && g.parentNode; ) {
                      if (g.parentNode === document) return !0;
                      g =
                        g.parentNode instanceof ShadowRoot
                          ? g.parentNode.host
                          : g.parentNode;
                    }
                    return !1;
                  })(c)
                )
                  return;
                if (
                  ((f) =>
                    typeof f == 'object' && typeof f.behavior == 'function')(u)
                )
                  return u.behavior(_s(c, u));
                const d =
                  typeof u == 'boolean' || u == null ? void 0 : u.behavior;
                for (const { el: f, top: g, left: b } of _s(c, Ng(u)))
                  f.scroll({ top: g, left: b, behavior: d });
              })(
                l,
                Object.assign({ scrollMode: 'if-needed', block: 'nearest' }, i),
              );
          },
          getFieldInstance: (o) => {
            const i = Oc(o);
            return n.current[i];
          },
        }),
      [e, t],
    );
  return [r];
}
var P0 =
  (globalThis && globalThis.__rest) ||
  function (e, t) {
    var n = {};
    for (var r in e)
      Object.prototype.hasOwnProperty.call(e, r) &&
        t.indexOf(r) < 0 &&
        (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == 'function') {
      var o = 0;
      for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
        t.indexOf(r[o]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
          (n[r[o]] = e[r[o]]);
    }
    return n;
  };
const F0 = (e, t) => {
    const n = s.useContext(Gr),
      { getPrefixCls: r, direction: o, form: i } = s.useContext(Re),
      {
        prefixCls: a,
        className: l,
        rootClassName: c,
        size: u,
        disabled: d = n,
        form: f,
        colon: g,
        labelAlign: b,
        labelWrap: m,
        labelCol: p,
        wrapperCol: h,
        hideRequiredMark: y,
        layout: v = 'horizontal',
        scrollToFirstError: w,
        requiredMark: S,
        onFinishFailed: k,
        name: $,
        style: x,
        feedbackIcons: O,
      } = e,
      F = P0(e, [
        'prefixCls',
        'className',
        'rootClassName',
        'size',
        'disabled',
        'form',
        'colon',
        'labelAlign',
        'labelWrap',
        'labelCol',
        'wrapperCol',
        'hideRequiredMark',
        'layout',
        'scrollToFirstError',
        'requiredMark',
        'onFinishFailed',
        'name',
        'style',
        'feedbackIcons',
      ]),
      P = Yr(u),
      N = s.useContext(ru),
      I = s.useMemo(
        () =>
          S !== void 0
            ? S
            : i && i.requiredMark !== void 0
            ? i.requiredMark
            : !y,
        [y, S, i],
      ),
      T = g ?? (i == null ? void 0 : i.colon),
      L = r('form', a),
      [_, E] = il(L),
      C = Q(
        L,
        `${L}-${v}`,
        {
          [`${L}-hide-required-mark`]: I === !1,
          [`${L}-rtl`]: o === 'rtl',
          [`${L}-${P}`]: P,
        },
        E,
        i == null ? void 0 : i.className,
        l,
        c,
      ),
      [j] = Cd(f),
      { __INTERNAL__: M } = j;
    M.name = $;
    const R = s.useMemo(
      () => ({
        name: $,
        labelAlign: b,
        labelCol: p,
        labelWrap: m,
        wrapperCol: h,
        vertical: v === 'vertical',
        colon: T,
        requiredMark: I,
        itemRef: M.itemRef,
        form: j,
        feedbackIcons: O,
      }),
      [$, b, p, h, v, T, I, j, O],
    );
    s.useImperativeHandle(t, () => j);
    const B = (D, H) => {
      if (D) {
        let W = { block: 'nearest' };
        typeof D == 'object' && (W = D), j.scrollToField(H, W);
      }
    };
    return _(
      s.createElement(
        bu,
        { disabled: d },
        s.createElement(
          yu,
          { size: P },
          s.createElement(
            ed,
            Object.assign({}, { validateMessages: N }),
            s.createElement(
              qt.Provider,
              { value: R },
              s.createElement(
                Xn,
                Object.assign({ id: $ }, F, {
                  name: $,
                  onFinishFailed: (D) => {
                    if ((k == null || k(D), D.errorFields.length)) {
                      const H = D.errorFields[0].name;
                      if (w !== void 0) return void B(w, H);
                      i &&
                        i.scrollToFirstError !== void 0 &&
                        B(i.scrollToFirstError, H);
                    }
                  },
                  form: j,
                  style: Object.assign(
                    Object.assign({}, i == null ? void 0 : i.style),
                    x,
                  ),
                  className: C,
                }),
              ),
            ),
          ),
        ),
      ),
    );
  },
  M0 = s.forwardRef(F0),
  $d = () => {
    const { status: e, errors: t = [], warnings: n = [] } = s.useContext(At);
    return { status: e, errors: t, warnings: n };
  };
$d.Context = At;
const A0 = $d,
  R0 = (e) => {
    const { formItemCls: t } = e;
    return {
      '@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none)':
        { [`${t}-control`]: { display: 'flex' } },
    };
  },
  I0 = vu(['Form', 'item-item'], (e, t) => {
    let { rootPrefixCls: n } = t;
    const r = bd(e, n);
    return [R0(r)];
  }),
  T0 = (e) => {
    const {
        prefixCls: t,
        status: n,
        wrapperCol: r,
        children: o,
        errors: i,
        warnings: a,
        _internalItemRender: l,
        extra: c,
        help: u,
        fieldId: d,
        marginBottom: f,
        onErrorVisibleChanged: g,
      } = e,
      b = `${t}-item`,
      m = s.useContext(qt),
      p = r || m.wrapperCol || {},
      h = Q(`${b}-control`, p.className),
      y = s.useMemo(() => Object.assign({}, m), [m]);
    delete y.labelCol, delete y.wrapperCol;
    const v = s.createElement(
        'div',
        { className: `${b}-control-input` },
        s.createElement('div', { className: `${b}-control-input-content` }, o),
      ),
      w = s.useMemo(() => ({ prefixCls: t, status: n }), [t, n]),
      S =
        f !== null || i.length || a.length
          ? s.createElement(
              'div',
              { style: { display: 'flex', flexWrap: 'nowrap' } },
              s.createElement(
                el.Provider,
                { value: w },
                s.createElement(yd, {
                  fieldId: d,
                  errors: i,
                  warnings: a,
                  help: u,
                  helpStatus: n,
                  className: `${b}-explain-connected`,
                  onVisibleChanged: g,
                }),
              ),
              !!f && s.createElement('div', { style: { width: 0, height: f } }),
            )
          : null,
      k = {};
    d && (k.id = `${d}_extra`);
    const $ = c
        ? s.createElement(
            'div',
            Object.assign({}, k, { className: `${b}-extra` }),
            c,
          )
        : null,
      x =
        l && l.mark === 'pro_table_render' && l.render
          ? l.render(e, { input: v, errorList: S, extra: $ })
          : s.createElement(s.Fragment, null, v, S, $);
    return s.createElement(
      qt.Provider,
      { value: y },
      s.createElement(gd, Object.assign({}, p, { className: h }), x),
      s.createElement(I0, { prefixCls: t }),
    );
  },
  N0 = {
    icon: {
      tag: 'svg',
      attrs: { viewBox: '64 64 896 896', focusable: 'false' },
      children: [
        {
          tag: 'path',
          attrs: {
            d: 'M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z',
          },
        },
        {
          tag: 'path',
          attrs: {
            d: 'M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0130.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1080 0 40 40 0 10-80 0z',
          },
        },
      ],
    },
    name: 'question-circle',
    theme: 'outlined',
  };
var _0 = function (e, t) {
  return s.createElement(nn, Se({}, e, { ref: t, icon: N0 }));
};
const z0 = s.forwardRef(_0);
var L0 =
  (globalThis && globalThis.__rest) ||
  function (e, t) {
    var n = {};
    for (var r in e)
      Object.prototype.hasOwnProperty.call(e, r) &&
        t.indexOf(r) < 0 &&
        (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == 'function') {
      var o = 0;
      for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
        t.indexOf(r[o]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
          (n[r[o]] = e[r[o]]);
    }
    return n;
  };
const H0 = (e) => {
    let {
      prefixCls: t,
      label: n,
      htmlFor: r,
      labelCol: o,
      labelAlign: i,
      colon: a,
      required: l,
      requiredMark: c,
      tooltip: u,
    } = e;
    var d;
    const [f] = Np('Form'),
      {
        vertical: g,
        labelAlign: b,
        labelCol: m,
        labelWrap: p,
        colon: h,
      } = s.useContext(qt);
    if (!n) return null;
    const y = o || m || {},
      v = `${t}-item-label`,
      w = Q(v, (i || b) === 'left' && `${v}-left`, y.className, {
        [`${v}-wrap`]: !!p,
      });
    let S = n;
    const k = a === !0 || (h !== !1 && a !== !1);
    k &&
      !g &&
      typeof n == 'string' &&
      n.trim() !== '' &&
      (S = n.replace(/[:|：]\s*$/, ''));
    const $ = (function (P) {
      return P
        ? typeof P != 'object' || s.isValidElement(P)
          ? { title: P }
          : P
        : null;
    })(u);
    if ($) {
      const { icon: P = s.createElement(z0, null) } = $,
        N = L0($, ['icon']),
        I = s.createElement(
          jh,
          Object.assign({}, N),
          s.cloneElement(P, { className: `${t}-item-tooltip`, title: '' }),
        );
      S = s.createElement(s.Fragment, null, S, I);
    }
    const x = c === 'optional',
      O = typeof c == 'function';
    O
      ? (S = c(S, { required: !!l }))
      : x &&
        !l &&
        (S = s.createElement(
          s.Fragment,
          null,
          S,
          s.createElement(
            'span',
            { className: `${t}-item-optional`, title: '' },
            (f == null ? void 0 : f.optional) ||
              ((d = wn.Form) === null || d === void 0 ? void 0 : d.optional),
          ),
        ));
    const F = Q({
      [`${t}-item-required`]: l,
      [`${t}-item-required-mark-optional`]: x || O,
      [`${t}-item-no-colon`]: !k,
    });
    return s.createElement(
      gd,
      Object.assign({}, y, { className: w }),
      s.createElement(
        'label',
        { htmlFor: r, className: F, title: typeof n == 'string' ? n : '' },
        S,
      ),
    );
  },
  B0 = { success: Pg, warning: Ig, error: Ga, validating: Ru };
function Ed(e) {
  let {
    children: t,
    errors: n,
    warnings: r,
    hasFeedback: o,
    validateStatus: i,
    prefixCls: a,
    meta: l,
    noStyle: c,
  } = e;
  const u = `${a}-item`,
    { feedbackIcons: d } = s.useContext(qt),
    f = wd(n, r, l, null, !!o, i),
    { isFormItemInput: g, status: b } = s.useContext(At),
    m = s.useMemo(() => {
      var p;
      let h;
      if (o) {
        const w = (o !== !0 && o.icons) || d,
          S =
            f &&
            ((p =
              w == null ? void 0 : w({ status: f, errors: n, warnings: r })) ===
              null || p === void 0
              ? void 0
              : p[f]),
          k = f && B0[f];
        h =
          S !== !1 && k
            ? s.createElement(
                'span',
                {
                  className: Q(`${u}-feedback-icon`, `${u}-feedback-icon-${f}`),
                },
                S || s.createElement(k, null),
              )
            : null;
      }
      let y = !0,
        v = f || '';
      return (
        c && ((y = g), (v = (f ?? b) || '')),
        {
          status: v,
          errors: n,
          warnings: r,
          hasFeedback: !!o,
          feedbackIcon: h,
          isFormItemInput: y,
        }
      );
    }, [f, o, c, g, b]);
  return s.createElement(At.Provider, { value: m }, t);
}
var D0 =
  (globalThis && globalThis.__rest) ||
  function (e, t) {
    var n = {};
    for (var r in e)
      Object.prototype.hasOwnProperty.call(e, r) &&
        t.indexOf(r) < 0 &&
        (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == 'function') {
      var o = 0;
      for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
        t.indexOf(r[o]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
          (n[r[o]] = e[r[o]]);
    }
    return n;
  };
function W0(e) {
  const {
      prefixCls: t,
      className: n,
      rootClassName: r,
      style: o,
      help: i,
      errors: a,
      warnings: l,
      validateStatus: c,
      meta: u,
      hasFeedback: d,
      hidden: f,
      children: g,
      fieldId: b,
      required: m,
      isRequired: p,
      onSubItemMetaChange: h,
    } = e,
    y = D0(e, [
      'prefixCls',
      'className',
      'rootClassName',
      'style',
      'help',
      'errors',
      'warnings',
      'validateStatus',
      'meta',
      'hasFeedback',
      'hidden',
      'children',
      'fieldId',
      'required',
      'isRequired',
      'onSubItemMetaChange',
    ]),
    v = `${t}-item`,
    { requiredMark: w } = s.useContext(qt),
    S = s.useRef(null),
    k = Zo(a),
    $ = Zo(l),
    x = i != null,
    O = !!(x || a.length || l.length),
    F = !!S.current && Ua(S.current),
    [P, N] = s.useState(null);
  He(() => {
    if (O && S.current) {
      const L = getComputedStyle(S.current);
      N(parseInt(L.marginBottom, 10));
    }
  }, [O, F]);
  const I = (function () {
      let L = arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
      return wd(L ? k : u.errors, L ? $ : u.warnings, u, '', !!d, c);
    })(),
    T = Q(v, n, r, {
      [`${v}-with-help`]: x || k.length || $.length,
      [`${v}-has-feedback`]: I && d,
      [`${v}-has-success`]: I === 'success',
      [`${v}-has-warning`]: I === 'warning',
      [`${v}-has-error`]: I === 'error',
      [`${v}-is-validating`]: I === 'validating',
      [`${v}-hidden`]: f,
    });
  return s.createElement(
    'div',
    { className: T, style: o, ref: S },
    s.createElement(
      qh,
      Object.assign(
        { className: `${v}-row` },
        qr(y, [
          '_internalItemRender',
          'colon',
          'dependencies',
          'extra',
          'fieldKey',
          'getValueFromEvent',
          'getValueProps',
          'htmlFor',
          'id',
          'initialValue',
          'isListField',
          'label',
          'labelAlign',
          'labelCol',
          'labelWrap',
          'messageVariables',
          'name',
          'normalize',
          'noStyle',
          'preserve',
          'requiredMark',
          'rules',
          'shouldUpdate',
          'trigger',
          'tooltip',
          'validateFirst',
          'validateTrigger',
          'valuePropName',
          'wrapperCol',
          'validateDebounce',
        ]),
      ),
      s.createElement(
        H0,
        Object.assign({ htmlFor: b }, e, {
          requiredMark: w,
          required: m ?? p,
          prefixCls: t,
        }),
      ),
      s.createElement(
        T0,
        Object.assign({}, e, u, {
          errors: k,
          warnings: $,
          prefixCls: t,
          status: I,
          help: i,
          marginBottom: P,
          onErrorVisibleChanged: (L) => {
            L || N(null);
          },
        }),
        s.createElement(
          Ju.Provider,
          { value: h },
          s.createElement(
            Ed,
            {
              prefixCls: t,
              meta: u,
              errors: u.errors,
              warnings: u.warnings,
              hasFeedback: d,
              validateStatus: I,
            },
            g,
          ),
        ),
      ),
    ),
    !!P &&
      s.createElement('div', {
        className: `${v}-margin-offset`,
        style: { marginBottom: -P },
      }),
  );
}
const V0 = s.memo(
    (e) => {
      let { children: t } = e;
      return t;
    },
    (e, t) =>
      e.value === t.value &&
      e.update === t.update &&
      e.childProps.length === t.childProps.length &&
      e.childProps.every((n, r) => n === t.childProps[r]),
  ),
  Sd = function (e) {
    const {
        name: t,
        noStyle: n,
        className: r,
        dependencies: o,
        prefixCls: i,
        shouldUpdate: a,
        rules: l,
        children: c,
        required: u,
        label: d,
        messageVariables: f,
        trigger: g = 'onChange',
        validateTrigger: b,
        hidden: m,
        help: p,
      } = e,
      { getPrefixCls: h } = s.useContext(Re),
      { name: y } = s.useContext(qt),
      v = (function (H) {
        if (typeof H == 'function') return H;
        const W = _r(H);
        return W.length <= 1 ? W[0] : W;
      })(c),
      w = typeof v == 'function',
      S = s.useContext(Ju),
      { validateTrigger: k } = s.useContext(En),
      $ = b !== void 0 ? b : k,
      x = (function (H) {
        return H != null;
      })(t),
      O = h('form', i),
      [F, P] = il(O),
      N = s.useContext(Br),
      I = s.useRef(),
      [T, L] = (function (H) {
        const [W, X] = s.useState(H),
          q = s.useRef(null),
          Z = s.useRef([]),
          ce = s.useRef(!1);
        return (
          s.useEffect(
            () => (
              (ce.current = !1),
              () => {
                (ce.current = !0), lt.cancel(q.current), (q.current = null);
              }
            ),
            [],
          ),
          [
            W,
            function (ge) {
              ce.current ||
                (q.current === null &&
                  ((Z.current = []),
                  (q.current = lt(() => {
                    (q.current = null),
                      X((Oe) => {
                        let re = Oe;
                        return (
                          Z.current.forEach((U) => {
                            re = U(re);
                          }),
                          re
                        );
                      });
                  }))),
                Z.current.push(ge));
            },
          ]
        );
      })({}),
      [_, E] = xn(() => ({
        errors: [],
        warnings: [],
        touched: !1,
        validating: !1,
        name: [],
        validated: !1,
      })),
      C = (H, W) => {
        L((X) => {
          const q = Object.assign({}, X),
            Z = [].concat(K(H.name.slice(0, -1)), K(W)).join('__SPLIT__');
          return H.destroy ? delete q[Z] : (q[Z] = H), q;
        });
      },
      [j, M] = s.useMemo(() => {
        const H = K(_.errors),
          W = K(_.warnings);
        return (
          Object.values(T).forEach((X) => {
            H.push.apply(H, K(X.errors || [])),
              W.push.apply(W, K(X.warnings || []));
          }),
          [H, W]
        );
      }, [T, _.errors, _.warnings]),
      R = (function () {
        const { itemRef: H } = s.useContext(qt),
          W = s.useRef({});
        return function (X, q) {
          const Z = q && typeof q == 'object' && q.ref,
            ce = X.join('_');
          return (
            (W.current.name === ce && W.current.originRef === Z) ||
              ((W.current.name = ce),
              (W.current.originRef = Z),
              (W.current.ref = Xt(H(X), Z))),
            W.current.ref
          );
        };
      })();
    function B(H, W, X) {
      return n && !m
        ? s.createElement(
            Ed,
            {
              prefixCls: O,
              hasFeedback: e.hasFeedback,
              validateStatus: e.validateStatus,
              meta: _,
              errors: j,
              warnings: M,
              noStyle: !0,
            },
            H,
          )
        : s.createElement(
            W0,
            Object.assign({ key: 'row' }, e, {
              className: Q(r, P),
              prefixCls: O,
              fieldId: W,
              isRequired: X,
              errors: j,
              warnings: M,
              meta: _,
              onSubItemMetaChange: C,
            }),
            H,
          );
    }
    if (!x && !w && !o) return F(B(v));
    let D = {};
    return (
      typeof d == 'string' ? (D.label = d) : t && (D.label = String(t)),
      f && (D = Object.assign(Object.assign({}, D), f)),
      F(
        s.createElement(
          Za,
          Object.assign({}, e, {
            messageVariables: D,
            trigger: g,
            validateTrigger: $,
            onMetaChange: (H) => {
              const W = N == null ? void 0 : N.getKey(H.name);
              if (
                (E(
                  H.destroy
                    ? {
                        errors: [],
                        warnings: [],
                        touched: !1,
                        validating: !1,
                        name: [],
                        validated: !1,
                      }
                    : H,
                  !0,
                ),
                n && p !== !1 && S)
              ) {
                let X = H.name;
                if (H.destroy) X = I.current || X;
                else if (W !== void 0) {
                  const [q, Z] = W;
                  (X = [q].concat(K(Z))), (I.current = X);
                }
                S(H, X);
              }
            },
          }),
          (H, W, X) => {
            const q = Nr(t).length && W ? W.name : [],
              Z = xd(q, y),
              ce =
                u !== void 0
                  ? u
                  : !(
                      !l ||
                      !l.some((re) => {
                        if (
                          re &&
                          typeof re == 'object' &&
                          re.required &&
                          !re.warningOnly
                        )
                          return !0;
                        if (typeof re == 'function') {
                          const U = re(X);
                          return U && U.required && !U.warningOnly;
                        }
                        return !1;
                      })
                    ),
              ge = Object.assign({}, H);
            let Oe = null;
            if (Array.isArray(v) && x) Oe = v;
            else if (!(w && ((!a && !o) || x))) {
              if (!o || w || x)
                if (ci(v)) {
                  const re = Object.assign(Object.assign({}, v.props), ge);
                  if (
                    (re.id || (re.id = Z),
                    p || j.length > 0 || M.length > 0 || e.extra)
                  ) {
                    const ee = [];
                    (p || j.length > 0) && ee.push(`${Z}_help`),
                      e.extra && ee.push(`${Z}_extra`),
                      (re['aria-describedby'] = ee.join(' '));
                  }
                  j.length > 0 && (re['aria-invalid'] = 'true'),
                    ce && (re['aria-required'] = 'true'),
                    tr(v) && (re.ref = R(q, v)),
                    new Set([].concat(K(Nr(g)), K(Nr($)))).forEach((ee) => {
                      re[ee] = function () {
                        for (
                          var be,
                            Fe,
                            De,
                            we,
                            $e,
                            ie = arguments.length,
                            Ce = new Array(ie),
                            Ye = 0;
                          Ye < ie;
                          Ye++
                        )
                          Ce[Ye] = arguments[Ye];
                        (De = ge[ee]) === null ||
                          De === void 0 ||
                          (be = De).call.apply(be, [ge].concat(Ce)),
                          ($e = (we = v.props)[ee]) === null ||
                            $e === void 0 ||
                            (Fe = $e).call.apply(Fe, [we].concat(Ce));
                      };
                    });
                  const U = [
                    re['aria-required'],
                    re['aria-invalid'],
                    re['aria-describedby'],
                  ];
                  Oe = s.createElement(
                    V0,
                    {
                      value: ge[e.valuePropName || 'value'],
                      update: v,
                      childProps: U,
                    },
                    $n(v, re),
                  );
                } else Oe = w && (a || o) && !x ? v(X) : v;
            }
            return B(Oe, Z, ce);
          },
        ),
      )
    );
  };
Sd.useStatus = A0;
const q0 = Sd;
var X0 =
  (globalThis && globalThis.__rest) ||
  function (e, t) {
    var n = {};
    for (var r in e)
      Object.prototype.hasOwnProperty.call(e, r) &&
        t.indexOf(r) < 0 &&
        (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == 'function') {
      var o = 0;
      for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
        t.indexOf(r[o]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
          (n[r[o]] = e[r[o]]);
    }
    return n;
  };
const G0 = (e) => {
    var { prefixCls: t, children: n } = e,
      r = X0(e, ['prefixCls', 'children']);
    const { getPrefixCls: o } = s.useContext(Re),
      i = o('form', t),
      a = s.useMemo(() => ({ prefixCls: i, status: 'error' }), [i]);
    return s.createElement(Yu, Object.assign({}, r), (l, c, u) =>
      s.createElement(
        el.Provider,
        { value: a },
        n(
          l.map((d) =>
            Object.assign(Object.assign({}, d), { fieldKey: d.key }),
          ),
          c,
          { errors: u.errors, warnings: u.warnings },
        ),
      ),
    );
  },
  Dt = M0;
(Dt.Item = q0),
  (Dt.List = G0),
  (Dt.ErrorList = yd),
  (Dt.useForm = Cd),
  (Dt.useFormInstance = function () {
    const { form: e } = s.useContext(qt);
    return e;
  }),
  (Dt.useWatch = Zu),
  (Dt.Provider = ed),
  (Dt.create = () => {});
const K0 = Dt;
export { Sm as B, K0 as F, Y0 as I };
