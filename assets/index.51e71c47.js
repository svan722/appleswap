var yt = Object.defineProperty;
var he = Object.getOwnPropertySymbols;
var Be = Object.prototype.hasOwnProperty,
  Fe = Object.prototype.propertyIsEnumerable;
var Ee = (e, t, o) =>
    t in e
      ? yt(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o })
      : (e[t] = o),
  le = (e, t) => {
    for (var o in t || (t = {})) Be.call(t, o) && Ee(e, o, t[o]);
    if (he) for (var o of he(t)) Fe.call(t, o) && Ee(e, o, t[o]);
    return e;
  };
var Re = (e, t) => {
  var o = {};
  for (var s in e) Be.call(e, s) && t.indexOf(s) < 0 && (o[s] = e[s]);
  if (e != null && he)
    for (var s of he(e)) t.indexOf(s) < 0 && Fe.call(e, s) && (o[s] = e[s]);
  return o;
};
var V = (e, t, o) =>
  new Promise((s, r) => {
    var a = (i) => {
        try {
          p(o.next(i));
        } catch (c) {
          r(c);
        }
      },
      l = (i) => {
        try {
          p(o.throw(i));
        } catch (c) {
          r(c);
        }
      },
      p = (i) => (i.done ? s(i.value) : Promise.resolve(i.value).then(a, l));
    p((o = o.apply(e, t)).next());
  });
import {
  q as Mt,
  c as A,
  A as wt,
  s as H,
  M as Ct,
  B as _t,
  r as W,
  t as oe,
  b as d,
  w as q,
  v,
  x as h,
  y as _,
  z as F,
  D as I,
  F as Ie,
  m as ue,
  G as O,
  H as ie,
  I as It,
  S as $t,
  J as Tt,
  a as E,
  K as y,
  L as z,
  n as K,
  N as D,
  O as de,
  Q as T,
  R as be,
  T as Ue,
  U as $e,
  o as n,
  V as N,
  W as ge,
  X as Ye,
  Y as kt,
  Z as X,
  $ as At,
  a0 as Te,
  a1 as ee,
  a2 as je,
  a3 as Lt,
  a4 as ke,
  a5 as Ae,
  a6 as j,
  a7 as Ve,
  a8 as ye,
  a9 as Xe,
  aa as Ze,
  ab as Se,
  ac as ve,
  ad as me,
  ae as Ge,
  af as Qe,
  ag as Je,
  ah as we,
  ai as Nt,
  aj as Ot,
  ak as Ce,
  al as qe,
  am as fe,
  an as _e,
  ao as et,
  ap as Le,
  aq as Q,
  ar as tt,
  as as nt,
  at as Ht,
  au as Pt,
  av as Et,
  aw as Bt,
  ax as Ft,
  ay as Rt,
  az as ot,
  aA as Dt,
  aB as te,
  aC as st,
  aD as at,
  aE as rt,
  aF as ce,
  aG as Kt,
  aH as J,
  aI as xt,
  aJ as zt,
  aK as lt,
  aL as Wt,
  k as Ut,
  aM as Yt,
  aN as De,
  aO as jt,
  aP as it,
  aQ as Vt,
  aR as ut,
  aS as Xt,
  aT as Zt,
  aU as Gt,
  aV as Qt,
  aW as Jt,
  aX as Ke,
  aY as qt,
  aZ as en,
} from "./index.d1971cae.js";
import { M as tn, D as nn } from "./index.b1e60f34.js";
import { b as on } from "./_baseIteratee.1443da6a.js";
import { u as sn, a as an } from "./useContentViewHeight.dc2d1985.js";
import { F as rn, a as ln } from "./FullscreenOutlined.29dbb5cc.js";
import { u as un } from "./lock.ce71015e.js";
function cn(e, t) {
  return e && e.length ? Mt(e, on(t)) : [];
}
var pn = {
    icon: {
      tag: "svg",
      attrs: { viewBox: "64 64 896 896", focusable: "false" },
      children: [
        {
          tag: "path",
          attrs: {
            d: "M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM142.4 642.1L298.7 519a8.84 8.84 0 000-13.9L142.4 381.9c-5.8-4.6-14.4-.5-14.4 6.9v246.3a8.9 8.9 0 0014.4 7z",
          },
        },
      ],
    },
    name: "menu-unfold",
    theme: "outlined",
  },
  dn = pn;
function xe(e) {
  for (var t = 1; t < arguments.length; t++) {
    var o = arguments[t] != null ? Object(arguments[t]) : {},
      s = Object.keys(o);
    typeof Object.getOwnPropertySymbols == "function" &&
      (s = s.concat(
        Object.getOwnPropertySymbols(o).filter(function (r) {
          return Object.getOwnPropertyDescriptor(o, r).enumerable;
        })
      )),
      s.forEach(function (r) {
        mn(e, r, o[r]);
      });
  }
  return e;
}
function mn(e, t, o) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: o,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = o),
    e
  );
}
var Ne = function (t, o) {
  var s = xe({}, t, o.attrs);
  return A(wt, xe({}, s, { icon: dn }), null);
};
Ne.displayName = "MenuUnfoldOutlined";
Ne.inheritAttrs = !1;
var gn = Ne,
  fn = "/assets/bg-coming-soon.06e69374.png",
  hn = "/assets/image_coming_soon.d2956c51.svg";
const Sn = {
    components: { Modal: Ct, Button: _t },
    setup() {
      const e = W(!1),
        t = oe(),
        o = () => {
          t.setComingSoon(!1);
        },
        s = d(() => t.modalComingSoon);
      return (
        q(
          () => s.value,
          () => {
            e.value = s.value;
          }
        ),
        { visible: e, BgComingSoon: fn, ImageComingSoon: hn, handleClose: o }
      );
    },
  },
  vn = {
    class:
      "min-h-[336px] mobile:min-h-[420px] flex relative w-full flex p-6 items-end",
  },
  bn = ["src"],
  yn = { class: "absolute left-0 right-0 -top-[100px] mobile:top-[50px]" },
  Mn = ["src"],
  wn = { class: "w-full flex flex-col gap-9" },
  Cn = I(
    "div",
    null,
    [
      I(
        "p",
        { class: "text-center relative text-xl font-bold !text-white" },
        "Coming soon"
      ),
      I(
        "p",
        { class: "text-center text-xl relative font-bold !text-white" },
        "Stay tuned!!!"
      ),
    ],
    -1
  );
function _n(e, t, o, s, r, a) {
  const l = v("Button"),
    p = v("Modal");
  return (
    h(),
    _(
      p,
      {
        centered: "",
        wrapClassName: "modal-coming-soon",
        visible: s.visible,
        "onUpdate:visible": t[0] || (t[0] = (i) => (s.visible = i)),
        title: "Basic Modal",
        closable: !1,
        maskClosable: !1,
      },
      {
        default: F(() => [
          I("div", vn, [
            I(
              "img",
              {
                class: "absolute top-0 bottom-0 right-0 left-0 w-full h-full",
                src: s.BgComingSoon,
              },
              null,
              8,
              bn
            ),
            I("div", yn, [
              I(
                "img",
                { class: "mx-auto w-[50%]", src: s.ImageComingSoon },
                null,
                8,
                Mn
              ),
            ]),
            I("div", wn, [
              Cn,
              A(
                l,
                {
                  class:
                    "w-full !text-[#FFE7AA] !hover:text-black !hover:bg-[#FFE7AA]",
                  onClick: s.handleClose,
                  type: "default",
                },
                { default: F(() => [Ie("Got it")]), _: 1 },
                8,
                ["onClick"]
              ),
            ]),
          ]),
        ]),
        _: 1,
      },
      8,
      ["visible"]
    )
  );
}
var In = H(Sn, [["render", _n]]);
const $n = {
    setup() {
      const { t: e } = ue();
      return {
        t: e,
        directPage: () => {
          window.open("https://appleswap-dapp.vercel.app/swap", "blank");
        },
      };
    },
  },
  Tn = { class: "flex w-[180px] mobile:w-[140px] w-full" },
  kn = { class: "text-black uppercase m-auto font-semibold text-base" };
function An(e, t, o, s, r, a) {
  return (
    h(),
    O("div", Tn, [
      I(
        "div",
        {
          onClick:
            t[0] || (t[0] = (...l) => s.directPage && s.directPage(...l)),
          class:
            "m-auto flex w-full cursor-pointer transition duration-300 max-w-[187px] h-[52px] mobile:h-10 hover:bg-primary mobile:hover:bg-yellow-1 rounded-lg bg-yellow-1",
        },
        [I("span", kn, ie(s.t("layout.header.enter_app")), 1)]
      ),
    ])
  );
}
var ct = H($n, [["render", An]]);
function ne(e, t = {}) {
  const {
    size: o = "small",
    delay: s = 100,
    timeout: r = 3e4,
    loading: a = !1,
    retry: l = !0,
  } = t;
  return It({
    loader: e,
    loadingComponent: a ? A($t, { spinning: !0, size: o }, null) : void 0,
    timeout: r,
    delay: s,
    onError: l
      ? (p, i, c, u) => {
          p.message.match(/fetch/) && u <= 3 ? i() : c();
        }
      : Tt,
  });
}
var Ln = "/assets/arrow-down.deb1cedd.svg";
const Nn = E({
    name: "HeaderTrigger",
    components: { MenuUnfoldOutlined: gn, MenuFoldOutlined: tn },
    props: { theme: y.oneOf(["light", "dark"]) },
    setup() {
      const { getCollapsed: e, toggleCollapsed: t } = z(),
        { prefixCls: o } = K("layout-header-trigger");
      return {
        getCollapsed: e,
        router: D,
        ArrowDown: Ln,
        toggleCollapsed: t,
        prefixCls: o,
      };
    },
  }),
  On = { class: "mobile:hidden" },
  Hn = {
    class: "hidden cursor-pointer mobile:flex flex-row gap-2 items-center",
  },
  Pn = { class: "font-bold text-primary uppercase" },
  En = ["src"];
function Bn(e, t, o, s, r, a) {
  const l = v("MenuUnfoldOutlined"),
    p = v("MenuFoldOutlined");
  return (
    h(),
    O(
      "span",
      {
        class: T([e.prefixCls, e.theme]),
        onClick:
          t[0] ||
          (t[0] = (...i) => e.toggleCollapsed && e.toggleCollapsed(...i)),
      },
      [
        I("div", On, [
          e.getCollapsed ? (h(), _(l, { key: 0 })) : (h(), _(p, { key: 1 })),
        ]),
        I("div", Hn, [
          I("p", Pn, ie(e.router.currentRoute.value.name), 1),
          I(
            "img",
            {
              src: e.ArrowDown,
              style: de(
                e.getCollapsed ? "" : "rotate: 180deg; padding-bottom: 4px"
              ),
            },
            null,
            12,
            En
          ),
        ]),
      ],
      2
    )
  );
}
var pt = H(Nn, [["render", Bn]]);
function Oe() {
  const e = oe(),
    t = d(() => e.getMultiTabsSetting.show),
    o = d(() => e.getMultiTabsSetting.showQuick),
    s = d(() => e.getMultiTabsSetting.showRedo),
    r = d(() => e.getMultiTabsSetting.showFold);
  function a(l) {
    e.setProjectConfig({ multiTabsSetting: l });
  }
  return {
    setMultipleTabSetting: a,
    getShowMultipleTab: t,
    getShowQuick: o,
    getShowRedo: s,
    getShowFold: r,
  };
}
function Fn() {
  const e = be(),
    { currentRoute: t } = e,
    { getShowMultipleTab: o } = Oe(),
    s = Ue(),
    r = d(() => l($e(e.getRoutes())) || []),
    a = d(() =>
      s.getTabList.reduce(
        (c, u) => (
          u.meta && Reflect.has(u.meta, "frameSrc") && c.push(u.name), c
        ),
        []
      )
    );
  function l(c) {
    let u = [];
    for (const m of c) {
      const { meta: { frameSrc: g } = {}, children: S } = m;
      g && u.push(m), S && S.length && u.push(...l(S));
    }
    return (u = cn(u, "name")), u;
  }
  function p(c) {
    return c.name === n(t).name;
  }
  function i(c) {
    return n(o) ? n(a).includes(c) : e.currentRoute.value.name === c;
  }
  return {
    hasRenderFrame: i,
    getFramePages: r,
    showIframe: p,
    getAllFramePages: l,
  };
}
const Rn = E({
    name: "FrameLayout",
    setup() {
      const { getFramePages: e, hasRenderFrame: t, showIframe: o } = Fn(),
        s = d(() => n(e).length > 0);
      return {
        getFramePages: e,
        hasRenderFrame: t,
        showIframe: o,
        showFrame: s,
      };
    },
  }),
  Dn = { key: 0 };
function Kn(e, t, o, s, r, a) {
  return e.showFrame ? (h(), O("div", Dn)) : N("", !0);
}
var xn = H(Rn, [["render", Kn]]);
function zn({
  route: e,
  openCache: t,
  cacheTabs: o,
  enableTransition: s,
  def: r,
}) {
  if (!s) return;
  const a = o.includes(e.name),
    l = "fade-slide";
  let p = l;
  return (
    t && (p = a && e.meta.loaded ? l : void 0), p || e.meta.transitionName || r
  );
}
const Wn = E({
  name: "PageLayout",
  components: { FrameLayout: xn },
  setup() {
    const { getShowMultipleTab: e } = Oe(),
      t = Ue(),
      { getOpenKeepAlive: o, getCanEmbedIFramePage: s } = ge(),
      { getBasicTransition: r, getEnableTransition: a } = Ye(),
      l = d(() => n(o) && n(e)),
      p = d(() => (n(o) ? t.getCachedTabList : []));
    return {
      getTransitionName: zn,
      openCache: l,
      router: D,
      getEnableTransition: a,
      getBasicTransition: r,
      getCaches: p,
      getCanEmbedIFramePage: s,
    };
  },
});
function Un(e, t, o, s, r, a) {
  const l = v("RouterView"),
    p = v("FrameLayout");
  return (
    h(),
    O(
      X,
      null,
      [
        A(l, null, {
          default: F(({ Component: i, route: c }) => [
            (h(), _(kt(i), { key: c.fullPath })),
          ]),
          _: 1,
        }),
        e.getCanEmbedIFramePage ? (h(), _(p, { key: 0 })) : N("", !0),
      ],
      64
    )
  );
}
var Yn = H(Wn, [["render", Un]]);
const jn = E({
    name: "LayoutContent",
    components: { PageLayout: Yn },
    setup() {
      const { prefixCls: e } = K("layout-content"),
        { getOpenPageLoading: t } = Ye(),
        { getLayoutContentMode: o, getPageLoading: s } = ge(),
        r = d(() => D.currentRoute.value.name);
      return (
        sn(),
        {
          prefixCls: e,
          routeName: r,
          getOpenPageLoading: t,
          getLayoutContentMode: o,
          getPageLoading: s,
        }
      );
    },
  }),
  Vn = I(
    "a",
    { id: "pitch-deck", href: "pitchdeck.pdf", target: "_blank", download: "" },
    null,
    -1
  );
function Xn(e, t, o, s, r, a) {
  const l = v("PageLayout"),
    p = At("loading");
  return Te(
    (h(),
    O(
      "div",
      {
        class: T([
          e.prefixCls,
          e.getLayoutContentMode,
          e.routeName === "About us" ? "" : "mt-20",
        ]),
      },
      [A(l), Vn],
      2
    )),
    [[p, e.getOpenPageLoading && e.getPageLoading]]
  );
}
var Zn = H(jn, [["render", Xn]]);
const Gn = {
    items: { type: Array, default: () => [] },
    collapsedShowTitle: y.bool,
    inlineIndent: y.number.def(20),
    mode: { type: String, default: ee.INLINE },
    type: { type: String, default: je.MIX },
    theme: { type: String, default: Lt.DARK },
    inlineCollapsed: y.bool,
    mixSider: y.bool,
    isHorizontal: y.bool,
    accordion: y.bool.def(!0),
    beforeClickFn: { type: Function, default: null },
  },
  dt = {
    item: { type: Object, default: () => ({}) },
    level: y.number,
    theme: y.oneOf(["dark", "light"]),
    showTitle: y.bool,
    isHorizontal: y.bool,
  },
  Qn = {
    item: { type: Object, default: null },
    showTitle: y.bool.def(!0),
    level: y.number.def(0),
    isHorizontal: y.bool.def(!0),
  },
  { t: Jn } = ue(),
  qn = E({
    name: "MenuItemContent",
    components: { Icon: ke },
    props: Qn,
    setup(e) {
      const { prefixCls: t } = K("basic-menu-item-content"),
        o = d(() => {
          var r;
          return Jn((r = e.item) == null ? void 0 : r.name);
        }),
        s = d(() => {
          var r, a;
          return D.currentRoute.value.fullPath.includes(e.item.path)
            ? (r = e.item) == null
              ? void 0
              : r.iconActive
            : (a = e.item) == null
            ? void 0
            : a.icon;
        });
      return { prefixCls: t, getI18nName: o, getIcon: s };
    },
  });
function eo(e, t, o, s, r, a) {
  const l = v("Icon");
  return (
    h(),
    O(
      "span",
      {
        class: T(
          `${e.prefixCls}- flex items-center text-base font-bold tablet:text-xs uppercase`
        ),
      },
      [
        e.getIcon
          ? (h(),
            _(
              l,
              {
                key: 0,
                icon: e.getIcon,
                size: 8,
                class: T(`${e.prefixCls}-wrapper__icon mr-2`),
              },
              null,
              8,
              ["icon", "class"]
            ))
          : N("", !0),
        Ie(" " + ie(e.getI18nName), 1),
      ],
      2
    )
  );
}
var mt = H(qn, [["render", eo]]);
const to = E({
  name: "BasicMenuItem",
  components: { MenuItem: Ae.Item, MenuItemContent: mt },
  props: dt,
  setup() {
    return {};
  },
});
function no(e, t, o, s, r, a) {
  const l = v("MenuItemContent"),
    p = v("MenuItem");
  return (
    h(),
    _(
      p,
      { key: e.item.path },
      {
        default: F(() => [
          A(l, j(e.$props, { item: e.item }), null, 16, ["item"]),
        ]),
        _: 1,
      }
    )
  );
}
var oo = H(to, [["render", no]]);
const so = E({
  name: "BasicSubMenuItem",
  isSubMenu: !0,
  components: { BasicMenuItem: oo, SubMenu: Ae.SubMenu, MenuItemContent: mt },
  props: dt,
  setup(e) {
    const { prefixCls: t } = K("basic-menu-item"),
      o = d(() => {
        var r;
        return !((r = e.item.meta) != null && r.hideMenu);
      });
    function s(r) {
      var a;
      return (
        !((a = r.meta) != null && a.hideChildrenInMenu) &&
        Reflect.has(r, "children") &&
        !!r.children &&
        r.children.length > 0
      );
    }
    return { prefixCls: t, menuHasChildren: s, getShowMenu: o };
  },
});
function ao(e, t, o, s, r, a) {
  const l = v("BasicMenuItem"),
    p = v("MenuItemContent"),
    i = v("BasicSubMenuItem", !0),
    c = v("SubMenu");
  return (
    h(),
    O(
      X,
      null,
      [
        !e.menuHasChildren(e.item) && e.getShowMenu
          ? (h(), _(l, Ve(j({ key: 0 }, e.$props)), null, 16))
          : N("", !0),
        e.menuHasChildren(e.item) && e.getShowMenu
          ? (h(),
            _(
              c,
              {
                class: T([e.theme]),
                key: `submenu-${e.item.path}`,
                popupClassName: "app-top-menu-popup",
              },
              {
                title: F(() => [
                  A(p, j(e.$props, { item: e.item }), null, 16, ["item"]),
                ]),
                default: F(() => [
                  (h(!0),
                  O(
                    X,
                    null,
                    ye(
                      e.item.children || [],
                      (u) => (
                        h(),
                        _(
                          i,
                          j({ key: u.path }, e.$props, { item: u }),
                          null,
                          16,
                          ["item"]
                        )
                      )
                    ),
                    128
                  )),
                ]),
                _: 1,
              },
              8,
              ["class"]
            ))
          : N("", !0),
      ],
      64
    )
  );
}
var ro = H(so, [["render", ao]]);
function lo(e, t, o, s) {
  const { getCollapsed: r, getIsMixSidebar: a } = z();
  function l(u) {
    return V(this, null, function* () {
      if (o.value === ee.HORIZONTAL) return;
      const m = n(a);
      Xe(
        () => {
          const g = $e(t.value);
          if ((g == null ? void 0 : g.length) === 0) {
            e.openKeys = [];
            return;
          }
          n(s)
            ? (e.openKeys = Se(g, u))
            : (e.openKeys = Ze([...e.openKeys, ...Se(g, u)]));
        },
        16,
        !m
      );
    });
  }
  const p = d(() => ((n(a) ? !1 : n(r)) ? e.collapsedOpenKeys : e.openKeys));
  function i() {
    (e.selectedKeys = []), (e.openKeys = []);
  }
  function c(u) {
    if (n(o) === ee.HORIZONTAL || !n(s) || n(a)) e.openKeys = u;
    else {
      const m = [];
      for (const { children: g, path: S } of n(t))
        g && g.length > 0 && m.push(S);
      if (n(r)) e.collapsedOpenKeys = u;
      else {
        const g = u.find((S) => e.openKeys.indexOf(S) === -1);
        m.indexOf(g) === -1 ? (e.openKeys = u) : (e.openKeys = g ? [g] : []);
      }
    }
  }
  return { setOpenKeys: l, resetKeys: i, getOpenKeys: p, handleOpenChange: c };
}
const io = E({
  name: "BasicMenu",
  components: { Menu: Ae, BasicSubMenuItem: ro },
  props: Gn,
  emits: ["menuClick"],
  setup(e, { emit: t }) {
    const o = W(!1),
      s = oe(),
      { t: r } = ue(),
      a = W(""),
      l = ve({
        defaultSelectedKeys: [],
        openKeys: [],
        selectedKeys: [],
        collapsedOpenKeys: [],
      }),
      { prefixCls: p } = K("basic-menu"),
      { items: i, mode: c, accordion: u } = me(e),
      { getCollapsed: m, getTopMenuAlign: g, getSplit: S } = z(),
      { currentRoute: f } = be(),
      { handleOpenChange: b, setOpenKeys: M, getOpenKeys: L } = lo(l, i, c, u),
      $ = d(() => {
        const { type: w, mode: R } = e;
        return (
          (w === je.TOP_MENU && R === ee.HORIZONTAL) || (e.isHorizontal && n(S))
        );
      }),
      C = d(() => {
        const w = e.isHorizontal && n(S) ? "start" : n(g);
        return [
          p,
          `justify-${w}`,
          {
            [`${p}__second`]: !e.isHorizontal && n(S),
            [`${p}__sidebar-hor`]: n($),
          },
        ];
      }),
      k = d(() => {
        const w = e.mode === ee.INLINE,
          R = {};
        return w && (R.inlineCollapsed = e.mixSider ? !1 : n(m)), R;
      });
    Ge((w) => {
      var R;
      w.name !== Qe &&
        (B(w),
        (a.value = (R = w.meta) == null ? void 0 : R.currentActiveMenu),
        n(a) && ((l.selectedKeys = [n(a)]), M(n(a))));
    }),
      !e.mixSider &&
        q(
          () => e.items,
          () => {
            B();
          }
        );
    function x(R) {
      return V(this, arguments, function* ({ key: w }) {
        var U, Y;
        if (["/more-service", "/more-service/top-trader"].includes(w))
          s.setComingSoon(!0);
        else
          switch (w) {
            case "/perpetual":
              window.open("https://pro.appleswap.ai/", "blank");
              break;
            case "/swap":
              window.open("https://appleswap-dapp.vercel.app/swap", "blank");
              break;
            case "/more-service/staking":
              window.open("https://appleswap-dapp.vercel.app/stake", "blank");
              break;
            case "/more-service/liquidity":
              window.open("https://appleswap-dapp.vercel.app/pools", "blank");
              break;
            case "/more-service/farming":
              window.open("https://appleswap-dapp.vercel.app/farm", "blank");
              break;
            case "/roadmap":
              D.currentRoute.value.name !== "Home"
                ? (s.setIdScroll("roadmap"),
                  s.setCheckIsScroll(!0),
                  D.push("/home"))
                : (U = document.getElementById("roadmap")) == null ||
                  U.scrollIntoView({ behavior: "smooth" });
              break;
            case "/support":
              D.currentRoute.value.name !== "Home"
                ? (s.setIdScroll("form-support"),
                  s.setCheckIsScroll(!0),
                  D.push("/home"))
                : (Y = document.getElementById("form-support")) == null ||
                  Y.scrollIntoView({ behavior: "smooth" });
              break;
            default:
              const { beforeClickFn: se } = e;
              if (se && Je(se) && !(yield se(w))) return;
              t("menuClick", w), (o.value = !0), (l.selectedKeys = [w]);
          }
      });
    }
    function B(w) {
      return V(this, null, function* () {
        var Z;
        if (n(o)) {
          o.value = !1;
          return;
        }
        const R =
          ((Z = (w || n(f)).meta) == null ? void 0 : Z.currentActiveMenu) ||
          (w || n(f)).path;
        if ((M(R), !n(a)))
          if (e.isHorizontal && n(S)) {
            const U = yield we(R);
            l.selectedKeys = [U];
          } else {
            const U = yield Se(e.items, R);
            l.selectedKeys = U;
          }
      });
    }
    return le(
      {
        handleMenuClick: x,
        getInlineCollapseOptions: k,
        getMenuClass: C,
        handleOpenChange: b,
        getOpenKeys: L,
        t: r,
      },
      me(l)
    );
  },
});
function uo(e, t, o, s, r, a) {
  const l = v("BasicSubMenuItem"),
    p = v("Menu");
  return (
    h(),
    _(
      p,
      j(
        {
          selectedKeys: e.selectedKeys,
          defaultSelectedKeys: e.defaultSelectedKeys,
          mode: e.mode,
          openKeys: e.getOpenKeys,
          inlineIndent: e.inlineIndent,
          theme: e.theme,
          onOpenChange: e.handleOpenChange,
          class: [e.getMenuClass, "menu-basic-custom"],
          subMenuOpenDelay: 0.2,
        },
        e.getInlineCollapseOptions,
        { onClick: e.handleMenuClick }
      ),
      {
        default: F(() => [
          (h(!0),
          O(
            X,
            null,
            ye(
              e.items,
              (i) => (
                h(),
                _(
                  l,
                  {
                    key: i.path,
                    item: i,
                    theme: e.theme,
                    isHorizontal: e.isHorizontal,
                  },
                  null,
                  8,
                  ["item", "theme", "isHorizontal"]
                )
              )
            ),
            128
          )),
        ]),
        _: 1,
      },
      16,
      [
        "selectedKeys",
        "defaultSelectedKeys",
        "mode",
        "openKeys",
        "inlineIndent",
        "theme",
        "onOpenChange",
        "class",
        "onClick",
      ]
    )
  );
}
var co = H(io, [["render", uo]]);
const gt = Symbol();
function po(e) {
  return Nt(e, gt, { readonly: !1, native: !0 });
}
function ft() {
  return Ot(gt);
}
const mo = E({
  name: "Menu",
  props: {
    theme: y.oneOf(["light", "dark"]).def("light"),
    activeName: y.oneOfType([y.string, y.number]),
    openNames: { type: Array, default: () => [] },
    accordion: y.bool.def(!0),
    width: y.string.def("100%"),
    collapsedWidth: y.string.def("92px"),
    indentSize: y.number.def(16),
    collapse: y.bool.def(!0),
    activeSubMenuNames: { type: Array, default: () => [] },
  },
  emits: ["select", "open-change"],
  setup(e, { emit: t }) {
    const o = et(),
      s = Le(),
      r = W(""),
      a = W([]),
      { prefixCls: l } = K("menu"),
      p = W(!1);
    po({ rootMenuEmitter: o, activeName: r });
    const i = d(() => {
      const { theme: f } = e;
      return [
        l,
        `${l}-${f}`,
        `${l}-vertical`,
        { [`${l}-collapse`]: e.collapse },
      ];
    });
    Ce(() => {
      a.value = e.openNames;
    }),
      Ce(() => {
        e.activeName && (r.value = e.activeName);
      }),
      q(
        () => e.openNames,
        () => {
          _e(() => {
            c();
          });
        }
      );
    function c() {
      o.emit("on-update-opened", a.value);
    }
    function u(f) {
      a.value.includes(f) || (a.value.push(f), c());
    }
    function m(f) {
      (a.value = a.value.filter((b) => b !== f)), c();
    }
    function g() {
      (a.value = []), c();
    }
    function S(f) {
      f !== -1 && ((a.value = a.value.slice(0, f + 1)), c());
    }
    return (
      qe(`subMenu:${s == null ? void 0 : s.uid}`, {
        addSubMenu: u,
        removeSubMenu: m,
        getOpenNames: () => a.value,
        removeAll: g,
        isRemoveAllPopup: p,
        sliceIndex: S,
        level: 0,
        props: e,
      }),
      fe(() => {
        (a.value = e.collapse ? [] : [...e.openNames]),
          c(),
          o.on("on-menu-item-select", (f) => {
            (r.value = f),
              _e(() => {
                e.collapse && g();
              }),
              t("select", f);
          }),
          o.on("open-name-change", ({ name: f, opened: b }) => {
            if (b && !a.value.includes(f)) a.value.push(f);
            else if (!b) {
              const M = a.value.findIndex((L) => L === f);
              M !== -1 && a.value.splice(M, 1);
            }
          });
      }),
      { getClass: i, openedNames: a }
    );
  },
});
function go(e, t, o, s, r, a) {
  return h(), O("ul", { class: T(e.getClass) }, [Q(e.$slots, "default")], 2);
}
var fo = H(mo, [["render", go]]);
function ht(e) {
  const t = d(() => a(["Menu", "SubMenu"])),
    o = d(() => a(["Menu"])),
    s = d(() => a(["SubMenu"])),
    r = d(() => {
      var m, g, S;
      let i = e == null ? void 0 : e.parent;
      if (!i) return {};
      const c =
        (g = (m = n(o)) == null ? void 0 : m.props.indentSize) != null ? g : 20;
      let u = c;
      if ((S = n(o)) != null && S.props.collapse) u = c;
      else
        for (; i && i.type.name !== "Menu"; )
          i.type.name === "SubMenu" && (u += c), (i = i.parent);
      return { paddingLeft: u + "px" };
    });
  function a(i) {
    let c = e == null ? void 0 : e.parent;
    if (!c) return null;
    for (; c && i.indexOf(c.type.name) === -1; ) c = c.parent;
    return c;
  }
  function l() {
    let i = e;
    if (!i) return { uidList: [], list: [] };
    const c = [];
    for (; i && i.type.name !== "Menu"; )
      i.type.name === "SubMenu" && c.push(i), (i = i.parent);
    return { uidList: c.map((u) => u.uid), list: c };
  }
  function p(i, c = "SubMenu") {
    let u = i.parent;
    for (; u; ) {
      if (u.type.name !== c) return u;
      u = u.parent;
    }
    return u;
  }
  return {
    getParentMenu: t,
    getParentInstance: p,
    getParentRootMenu: o,
    getParentList: l,
    getParentSubMenu: s,
    getItemStyle: r,
  };
}
const ho = E({
  name: "MenuItem",
  components: { Tooltip: tt },
  props: { name: { type: [String, Number], required: !0 }, disabled: y.bool },
  setup(e, { slots: t }) {
    const o = Le(),
      s = W(!1),
      {
        getItemStyle: r,
        getParentList: a,
        getParentMenu: l,
        getParentRootMenu: p,
      } = ht(o),
      { prefixCls: i } = K("menu"),
      { rootMenuEmitter: c, activeName: u } = ft(),
      m = d(() => [
        `${i}-item`,
        {
          [`${i}-item-active`]: n(s),
          [`${i}-item-selected`]: n(s),
          [`${i}-item-disabled`]: !!e.disabled,
        },
      ]),
      g = d(() => {
        var b;
        return (b = n(p)) == null ? void 0 : b.props.collapse;
      }),
      S = d(() => {
        var b;
        return (
          ((b = n(l)) == null ? void 0 : b.type.name) === "Menu" &&
          n(g) &&
          t.title
        );
      });
    function f() {
      const { disabled: b } = e;
      if (b || (c.emit("on-menu-item-select", e.name), n(g))) return;
      const { uidList: M } = a();
      c.emit("on-update-opened", {
        opend: !1,
        parent: o == null ? void 0 : o.parent,
        uidList: M,
      });
    }
    return (
      q(
        () => u.value,
        (b) => {
          if (b === e.name) {
            const { list: M, uidList: L } = a();
            (s.value = !0),
              M.forEach(($) => {
                $.proxy && ($.proxy.active = !0);
              }),
              c.emit("on-update-active-name:submenu", L);
          } else s.value = !1;
        },
        { immediate: !0 }
      ),
      {
        getClass: m,
        prefixCls: i,
        getItemStyle: r,
        getCollapse: g,
        handleClickItem: f,
        showTooptip: S,
      }
    );
  },
});
function So(e, t, o, s, r, a) {
  const l = v("Tooltip");
  return (
    h(),
    O(
      "li",
      {
        class: T(e.getClass),
        onClick:
          t[0] ||
          (t[0] = nt(
            (...p) => e.handleClickItem && e.handleClickItem(...p),
            ["stop"]
          )),
        style: de(e.getCollapse ? {} : e.getItemStyle),
      },
      [
        e.showTooptip
          ? (h(),
            _(
              l,
              { key: 0, placement: "right" },
              {
                title: F(() => [Q(e.$slots, "title")]),
                default: F(() => [
                  I(
                    "div",
                    { class: T(`${e.prefixCls}-tooltip`) },
                    [Q(e.$slots, "default")],
                    2
                  ),
                ]),
                _: 3,
              }
            ))
          : (h(),
            O(
              X,
              { key: 1 },
              [Q(e.$slots, "default"), Q(e.$slots, "title")],
              64
            )),
      ],
      6
    )
  );
}
var vo = H(ho, [["render", So]]);
const ze = 200,
  bo = E({
    name: "SubMenu",
    components: { Icon: ke, CollapseTransition: Ht, Popover: Pt },
    props: {
      name: { type: [String, Number], required: !0 },
      disabled: y.bool,
      collapsedShowTitle: y.bool,
    },
    setup(e) {
      var Pe;
      const t = Le(),
        o = ve({ active: !1, opened: !1 }),
        s = ve({ timeout: null, mouseInChild: !1, isChild: !1 }),
        {
          getParentSubMenu: r,
          getItemStyle: a,
          getParentMenu: l,
          getParentList: p,
        } = ht(t),
        { prefixCls: i } = K("menu"),
        c = et(),
        { rootMenuEmitter: u } = ft(),
        {
          addSubMenu: m,
          removeSubMenu: g,
          removeAll: S,
          getOpenNames: f,
          isRemoveAllPopup: b,
          sliceIndex: M,
          level: L,
          props: $,
          handleMouseleave: C,
        } = Et(`subMenu:${(Pe = l.value) == null ? void 0 : Pe.uid}`),
        k = d(() => [
          `${i}-submenu`,
          {
            [`${i}-item-active`]: o.active,
            [`${i}-opened`]: o.opened,
            [`${i}-submenu-disabled`]: e.disabled,
            [`${i}-submenu-has-parent-submenu`]: n(r),
            [`${i}-child-item-active`]: o.active,
          },
        ]),
        x = d(() => $.accordion),
        B = d(() => $.collapse),
        w = d(() => $.theme),
        R = d(() => ({ minWidth: "200px" })),
        Z = d(() => {
          const P = e.name;
          return n(B) ? f().includes(P) : o.opened;
        }),
        U = d(() => {
          const P = $.activeSubMenuNames.includes(e.name);
          return [
            `${i}-submenu-title`,
            {
              [`${i}-submenu-active`]: P,
              [`${i}-submenu-active-border`]: P && L === 0,
              [`${i}-submenu-collapse`]: n(B) && L === 0,
            },
          ];
        });
      function Y(P) {
        return n(B) ? { onMouseenter: pe, onMouseleave: () => G(P) } : {};
      }
      function se() {
        const { disabled: P } = e;
        if (P || n(B)) return;
        const ae = o.opened;
        if (n(x)) {
          const { uidList: re } = p();
          u.emit("on-update-opened", {
            opend: !1,
            parent: t == null ? void 0 : t.parent,
            uidList: re,
          });
        } else u.emit("open-name-change", { name: e.name, opened: !ae });
        o.opened = !ae;
      }
      function pe() {
        if (e.disabled) return;
        c.emit("submenu:mouse-enter-child");
        const ae = f().findIndex((Me) => Me === e.name);
        M(ae),
          L === 0 && f().length === 2 && S(),
          (s.isChild = f().includes(e.name)),
          clearTimeout(s.timeout),
          (s.timeout = setTimeout(() => {
            m(e.name);
          }, ze));
      }
      function G(P = !1) {
        var re;
        ((re = l.value) == null ? void 0 : re.props.name) || (b.value = !0),
          f().slice(-1)[0] === e.name && (s.isChild = !1),
          c.emit("submenu:mouse-leave-child"),
          s.timeout &&
            (clearTimeout(s.timeout),
            (s.timeout = setTimeout(() => {
              b.value ? S() : s.mouseInChild || g(e.name);
            }, ze))),
          P && r.value && (C == null || C(!0));
      }
      Bt(() => {
        c.on("submenu:mouse-enter-child", () => {
          (s.mouseInChild = !0), (b.value = !1), clearTimeout(s.timeout);
        }),
          c.on("submenu:mouse-leave-child", () => {
            s.isChild || ((s.mouseInChild = !1), clearTimeout(s.timeout));
          }),
          u.on("on-update-opened", (P) => {
            if (!n(B)) {
              if (Ft(P)) {
                o.opened = P;
                return;
              }
              if (Rt(P) && $.accordion) {
                const { opend: ae, parent: re, uidList: Me } = P;
                re === (t == null ? void 0 : t.parent)
                  ? (o.opened = ae)
                  : Me.includes(t == null ? void 0 : t.uid) || (o.opened = !1);
                return;
              }
              e.name && Array.isArray(P) && (o.opened = P.includes(e.name));
            }
          }),
          u.on("on-update-active-name:submenu", (P) => {
            t != null &&
              t.uid &&
              (o.active = P.includes(t == null ? void 0 : t.uid));
          });
      });
      function bt(P) {
        o.opened = P;
      }
      return (
        qe(`subMenu:${t == null ? void 0 : t.uid}`, {
          addSubMenu: m,
          removeSubMenu: g,
          getOpenNames: f,
          removeAll: S,
          isRemoveAllPopup: b,
          sliceIndex: M,
          level: L + 1,
          handleMouseleave: G,
          props: $,
        }),
        le(
          le(
            {
              getClass: k,
              prefixCls: i,
              getCollapse: B,
              getItemStyle: a,
              handleClick: se,
              handleVisibleChange: bt,
              getParentSubMenu: r,
              getOverlayStyle: R,
              getTheme: w,
              getIsOpend: Z,
              getEvents: Y,
              getSubClass: U,
            },
            me(o)
          ),
          me(s)
        )
      );
    },
  });
function yo(e, t, o, s, r, a) {
  const l = v("Icon"),
    p = v("CollapseTransition"),
    i = v("Popover");
  return (
    h(),
    O(
      "li",
      { class: T(e.getClass) },
      [
        e.getCollapse
          ? (h(),
            _(
              i,
              {
                key: 1,
                placement: "right",
                overlayClassName: `${e.prefixCls}-menu-popover`,
                visible: e.getIsOpend,
                onVisibleChange: e.handleVisibleChange,
                overlayStyle: e.getOverlayStyle,
                align: { offset: [0, 0] },
              },
              {
                content: F(() => [
                  I(
                    "div",
                    Ve(Dt(e.getEvents(!0))),
                    [
                      I(
                        "ul",
                        {
                          class: T([
                            e.prefixCls,
                            `${e.prefixCls}-${e.getTheme}`,
                            `${e.prefixCls}-popup`,
                          ]),
                        },
                        [Q(e.$slots, "default")],
                        2
                      ),
                    ],
                    16
                  ),
                ]),
                default: F(() => [
                  I(
                    "div",
                    j({ class: e.getSubClass }, e.getEvents(!1)),
                    [
                      I(
                        "div",
                        {
                          class: T([
                            {
                              [`${e.prefixCls}-submenu-popup`]:
                                !e.getParentSubMenu,
                              [`${e.prefixCls}-submenu-collapsed-show-tit`]:
                                e.collapsedShowTitle,
                            },
                          ]),
                        },
                        [Q(e.$slots, "title")],
                        2
                      ),
                      e.getParentSubMenu
                        ? (h(),
                          _(
                            l,
                            {
                              key: 0,
                              icon: "eva:arrow-ios-downward-outline",
                              size: 14,
                              class: T(`${e.prefixCls}-submenu-title-icon`),
                            },
                            null,
                            8,
                            ["class"]
                          ))
                        : N("", !0),
                    ],
                    16
                  ),
                ]),
                _: 3,
              },
              8,
              ["overlayClassName", "visible", "onVisibleChange", "overlayStyle"]
            ))
          : (h(),
            O(
              X,
              { key: 0 },
              [
                I(
                  "div",
                  {
                    class: T(`${e.prefixCls}-submenu-title`),
                    onClick:
                      t[0] ||
                      (t[0] = nt(
                        (...c) => e.handleClick && e.handleClick(...c),
                        ["stop"]
                      )),
                    style: de(e.getItemStyle),
                  },
                  [
                    Q(e.$slots, "title"),
                    A(
                      l,
                      {
                        icon: "eva:arrow-ios-downward-outline",
                        size: 14,
                        class: T(`${e.prefixCls}-submenu-title-icon`),
                      },
                      null,
                      8,
                      ["class"]
                    ),
                  ],
                  6
                ),
                A(p, null, {
                  default: F(() => [
                    Te(
                      I(
                        "ul",
                        { class: T(e.prefixCls) },
                        [Q(e.$slots, "default")],
                        2
                      ),
                      [[ot, e.opened]]
                    ),
                  ]),
                  _: 3,
                }),
              ],
              64
            )),
      ],
      2
    )
  );
}
var Mo = H(bo, [["render", yo]]);
const wo = E({
    name: "SimpleSubMenu",
    components: {
      SubMenu: Mo,
      MenuItem: vo,
      SimpleMenuTag: ne(() =>
        te(
          () =>
            Promise.resolve().then(function () {
              return Ho;
            }),
          void 0
        )
      ),
      Icon: ke,
    },
    props: {
      item: { type: Object, default: () => ({}) },
      parent: y.bool,
      collapsedShowTitle: y.bool,
      collapse: y.bool,
      theme: y.oneOf(["dark", "light"]),
    },
    setup(e) {
      const { t } = ue(),
        { prefixCls: o } = K("simple-menu"),
        { toggleCollapsed: s } = z(),
        r = d(() => {
          var m, g;
          return !(
            (g = (m = e.item) == null ? void 0 : m.meta) != null && g.hideMenu
          );
        }),
        a = d(() => {
          var m, g, S;
          return D.currentRoute.value.fullPath.includes(
            (m = e.item) == null ? void 0 : m.path
          )
            ? (g = e.item) == null
              ? void 0
              : g.iconActive
            : (S = e.item) == null
            ? void 0
            : S.icon;
        }),
        l = d(() => {
          var m;
          return t((m = e.item) == null ? void 0 : m.name);
        }),
        p = d(() => !e.collapse || !e.parent),
        i = d(() => !!e.collapse && !!e.parent),
        c = d(() => [
          { [`${o}__parent`]: e.parent, [`${o}__children`]: !e.parent },
        ]);
      function u(m) {
        var g;
        return (
          !((g = m.meta) != null && g.hideChildrenInMenu) &&
          Reflect.has(m, "children") &&
          !!m.children &&
          m.children.length > 0
        );
      }
      return {
        prefixCls: o,
        menuHasChildren: u,
        toggleCollapsed: s,
        getShowMenu: r,
        router: D,
        getIcon: a,
        getI18nName: l,
        getShowSubTitle: p,
        getLevelClass: c,
        getIsCollapseParent: i,
      };
    },
  }),
  Co = { key: 1, class: "mt-2 collapse-title" };
function _o(e, t, o, s, r, a) {
  const l = v("MenuItem"),
    p = v("Icon"),
    i = v("SimpleMenuTag"),
    c = v("SimpleSubMenu", !0),
    u = v("SubMenu");
  return (
    h(),
    O(
      X,
      null,
      [
        !e.menuHasChildren(e.item) && e.getShowMenu
          ? (h(),
            _(
              l,
              j(
                { key: 0, name: e.item.path, onClick: e.toggleCollapsed },
                e.$props,
                {
                  class: [
                    "!text-black flex justify-center !text-xl !font-medium",
                  ],
                }
              ),
              {
                title: F(() => {
                  var m;
                  return [
                    I(
                      "p",
                      {
                        class: T([
                          "ml-2 text-center uppercase text-[#949494]",
                          `${e.prefixCls}-sub-title`,
                          e.router.currentRoute.value.fullPath.includes(
                            (m = e.item) == null ? void 0 : m.path
                          )
                            ? "!text-primary font-bold"
                            : "",
                        ]),
                      },
                      ie(e.getI18nName),
                      3
                    ),
                  ];
                }),
                _: 1,
              },
              16,
              ["name", "onClick"]
            ))
          : N("", !0),
        e.menuHasChildren(e.item) && e.getShowMenu
          ? (h(),
            _(
              u,
              {
                key: 1,
                name: e.item.path,
                class: T([
                  e.getLevelClass,
                  e.theme,
                  "!flex justify-center items-center flex-col gap-4",
                ]),
                collapsedShowTitle: e.collapsedShowTitle,
              },
              {
                title: F(() => [
                  e.getIcon
                    ? (h(),
                      _(p, { key: 0, icon: e.getIcon, size: 24 }, null, 8, [
                        "icon",
                      ]))
                    : N("", !0),
                  e.collapsedShowTitle && e.getIsCollapseParent
                    ? (h(), O("div", Co, ie(e.getI18nName), 1))
                    : N("", !0),
                  Te(
                    I(
                      "span",
                      {
                        class: T([
                          "ml-2",
                          `${e.prefixCls} uppercase text-neuture-600 font-medium text-xl !text-center`,
                        ]),
                      },
                      ie(e.getI18nName),
                      3
                    ),
                    [[ot, e.getShowSubTitle]]
                  ),
                  A(
                    i,
                    {
                      item: e.item,
                      collapseParent: !!e.collapse && !!e.parent,
                    },
                    null,
                    8,
                    ["item", "collapseParent"]
                  ),
                ]),
                default: F(() => [
                  (h(!0),
                  O(
                    X,
                    null,
                    ye(
                      e.item.children || [],
                      (m) => (
                        h(),
                        _(
                          c,
                          j({ key: m.paramPath || m.path }, e.$props, {
                            item: m,
                            parent: !1,
                          }),
                          null,
                          16,
                          ["item"]
                        )
                      )
                    ),
                    128
                  )),
                ]),
                _: 1,
              },
              8,
              ["name", "class", "collapsedShowTitle"]
            ))
          : N("", !0),
      ],
      64
    )
  );
}
var Io = H(wo, [["render", _o]]);
function $o(e, t, o, s, r) {
  const a = st(l, 50);
  function l(i) {
    return V(this, null, function* () {
      const c = !s.value,
        u = $e(t.value);
      Xe(
        () => {
          if ((u == null ? void 0 : u.length) === 0) {
            (e.activeSubMenuNames = []), (e.openNames = []);
            return;
          }
          const m = Se(u, i);
          n(o) ? (e.openNames = m) : (e.openNames = Ze([...e.openNames, ...m])),
            (e.activeSubMenuNames = e.openNames);
        },
        30,
        c
      );
    });
  }
  const p = d(() => (n(r) ? [] : e.openNames));
  return { setOpenKeys: a, getOpenKeys: p };
}
const To = E({
  name: "SimpleMenu",
  components: { Menu: fo, SimpleSubMenu: Io },
  inheritAttrs: !1,
  props: {
    items: { type: Array, default: () => [] },
    collapse: y.bool,
    mixSider: y.bool,
    theme: y.string,
    accordion: y.bool.def(!0),
    collapsedShowTitle: y.bool,
    beforeClickFn: { type: Function },
    isSplitMenu: y.bool,
  },
  emits: ["menuClick"],
  setup(e, { attrs: t, emit: o }) {
    const s = oe(),
      r = W(""),
      { t: a } = ue(),
      l = W(!1),
      p = ve({ activeName: "", openNames: [], activeSubMenuNames: [] }),
      { currentRoute: i } = be(),
      { prefixCls: c } = K("simple-menu"),
      { items: u, accordion: m, mixSider: g, collapse: S } = me(e),
      { setOpenKeys: f, getOpenKeys: b } = $o(p, u, m, g, S),
      M = d(() => le(le({}, t), e));
    q(
      () => e.collapse,
      (C) => {
        C ? (p.openNames = []) : f(i.value.path);
      },
      { immediate: !0 }
    ),
      q(
        () => e.items,
        () => {
          !e.isSplitMenu || f(i.value.path);
        },
        { flush: "post" }
      ),
      Ge((C) => {
        var k;
        C.name !== Qe &&
          ((r.value = (k = C.meta) == null ? void 0 : k.currentActiveMenu),
          L(C),
          n(r) && ((p.activeName = n(r)), f(n(r))));
      });
    function L(C) {
      return V(this, null, function* () {
        if (n(l)) {
          l.value = !1;
          return;
        }
        const k = (C || n(i)).path;
        (p.activeName = k), f(k);
      });
    }
    function $(C) {
      return V(this, null, function* () {
        var x, B;
        if (["/more-service", "/more-service/top-trader"].includes(C))
          s.setComingSoon(!0);
        else
          switch (C) {
            case "/perpetual":
              window.open("https://pro.appleswap.ai/", "blank");
              break;
            case "/more-service/staking":
              window.open("https://appleswap-dapp.vercel.app/stake", "blank");
              break;
            case "/more-service/liquidity":
              window.open("https://appleswap-dapp.vercel.app/pools", "blank");
              break;
            case "/more-service/farming":
              window.open("https://appleswap-dapp.vercel.app/farm", "blank");
              break;
            case "/swap":
              window.open("https://appleswap-dapp.vercel.app/swap", "blank");
              break;
            case "/roadmap":
              D.currentRoute.value.name !== "Home"
                ? (s.setIdScroll("roadmap"),
                  s.setCheckIsScroll(!0),
                  D.push("/home"))
                : (x = document.getElementById("roadmap")) == null ||
                  x.scrollIntoView({ behavior: "smooth" });
              break;
            case "/support":
              D.currentRoute.value.name !== "Home"
                ? (s.setIdScroll("form-support"),
                  s.setCheckIsScroll(!0),
                  D.push("/home"))
                : (B = document.getElementById("form-support")) == null ||
                  B.scrollIntoView({ behavior: "smooth" });
              break;
            default:
              if (at(C)) {
                rt(C);
                return;
              }
              const { beforeClickFn: w } = e;
              if (w && Je(w) && !(yield w(C))) return;
              o("menuClick", C), (l.value = !0), f(C), (p.activeName = C);
          }
      });
    }
    return le(
      { prefixCls: c, getBindValues: M, t: a, handleSelect: $, getOpenKeys: b },
      me(p)
    );
  },
});
function ko(e, t, o, s, r, a) {
  const l = v("SimpleSubMenu"),
    p = v("Menu");
  return (
    h(),
    _(
      p,
      j(e.getBindValues, {
        activeName: e.activeName,
        openNames: e.getOpenKeys,
        class: e.prefixCls,
        activeSubMenuNames: e.activeSubMenuNames,
        onSelect: e.handleSelect,
      }),
      {
        default: F(() => [
          (h(!0),
          O(
            X,
            null,
            ye(
              e.items,
              (i) => (
                h(),
                _(
                  l,
                  {
                    key: i.path,
                    item: i,
                    parent: !0,
                    collapsedShowTitle: e.collapsedShowTitle,
                    collapse: e.collapse,
                  },
                  null,
                  8,
                  ["item", "collapsedShowTitle", "collapse"]
                )
              )
            ),
            128
          )),
        ]),
        _: 1,
      },
      16,
      ["activeName", "openNames", "class", "activeSubMenuNames", "onSelect"]
    )
  );
}
var Ao = H(To, [["render", ko]]);
const Lo = E({
  name: "SimpleMenuTag",
  props: {
    item: { type: Object, default: () => ({}) },
    dot: y.bool,
    collapseParent: y.bool,
  },
  setup(e) {
    const { prefixCls: t } = K("simple-menu"),
      o = d(() => {
        const { item: a } = e;
        if (!a) return !1;
        const { tag: l } = a;
        if (!l) return !1;
        const { dot: p, content: i } = l;
        return !(!p && !i);
      }),
      s = d(() => {
        if (!o.value) return "";
        const { item: a, collapseParent: l } = e,
          { tag: p } = a,
          { dot: i, content: c } = p;
        return i || l ? "" : c;
      });
    return {
      getTagClass: d(() => {
        const { item: a, collapseParent: l } = e,
          { tag: p = {} } = a || {},
          { dot: i, type: c = "error" } = p,
          u = `${t}-tag`;
        return [
          u,
          [`${u}--${c}`],
          { [`${u}--collapse`]: l, [`${u}--dot`]: i || e.dot },
        ];
      }),
      getShowTag: o,
      getContent: s,
    };
  },
});
function No(e, t, o, s, r, a) {
  return e.getShowTag
    ? (h(), O("span", { key: 0, class: T(e.getTagClass) }, ie(e.getContent), 3))
    : N("", !0);
}
var Oo = H(Lo, [["render", No]]),
  Ho = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Oo },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
function Po(e) {
  const t = W([]),
    { currentRoute: o } = be(),
    { getIsMobile: s } = ce(),
    r = Kt(),
    { setMenuSetting: a, getIsHorizontal: l, getSplit: p } = z(),
    i = lt(S, 50),
    c = d(() => n(e) !== J.LEFT && !n(l)),
    u = d(() => !n(p) || n(e) !== J.LEFT),
    m = d(() => n(e) === J.TOP),
    g = d(() => n(e) === J.NONE || !n(p));
  q(
    [() => n(o).path, () => n(e)],
    (M) =>
      V(this, [M], function* ([b]) {
        if (n(c) || n(s)) return;
        const { meta: L } = n(o),
          $ = L.currentActiveMenu;
        let C = yield we(b);
        C || (C = yield we($)), C && i(C);
      }),
    { immediate: !0 }
  ),
    q(
      [() => r.getLastBuildMenuTime, () => r.getBackMenuList],
      () => {
        f();
      },
      { immediate: !0 }
    ),
    q(
      () => p.value,
      () => {
        n(c) || f();
      }
    );
  function S(b) {
    return V(this, null, function* () {
      if (n(u) || n(s)) return;
      const M = yield Wt(b);
      if (!M || !M.length) {
        a({ hidden: !0 }), (t.value = []);
        return;
      }
      a({ hidden: !1 }), (t.value = M);
    });
  }
  function f() {
    return V(this, null, function* () {
      if (n(g) || n(s)) {
        t.value = yield xt();
        return;
      }
      if (n(m)) {
        const b = yield zt();
        t.value = b;
        return;
      }
    });
  }
  return { menusRef: t };
}
var St = E({
  name: "LayoutMenu",
  props: {
    theme: y.oneOf(["light", "dark"]),
    splitType: { type: Number, default: J.NONE },
    isHorizontal: y.bool,
    menuMode: { type: [String], default: "" },
  },
  setup(e) {
    const t = Ut(),
      {
        getMenuMode: o,
        getMenuType: s,
        getMenuTheme: r,
        getCollapsed: a,
        getCollapsedShowTitle: l,
        getAccordion: p,
        getIsSidebarType: i,
        getSplit: c,
      } = z(),
      { getShowLogo: u } = ge(),
      { menusRef: m } = Po(Yt(e, "splitType")),
      { getIsMobile: g } = ce(),
      S = d(() => (n(g) ? ee.INLINE : e.menuMode || n(o))),
      f = d(() => e.theme || n(r)),
      b = d(() => n(u) && n(i)),
      M = d(() => {
        const k = n(m);
        return {
          menus: k,
          beforeClickFn: $,
          items: k,
          theme: n(f),
          accordion: n(p),
          collapse: n(a),
          collapsedShowTitle: n(l),
          onMenuClick: L,
        };
      });
    function L(k) {
      t(k);
    }
    function $(k) {
      return V(this, null, function* () {
        return at(k) ? (rt(k), !1) : !0;
      });
    }
    function C() {
      const B = n(M),
        { menus: k } = B,
        x = Re(B, ["menus"]);
      return !k || !k.length
        ? null
        : e.isHorizontal
        ? A(
            co,
            j(x, {
              isHorizontal: e.isHorizontal,
              type: n(s),
              showLogo: n(b),
              mode: n(S),
              items: k,
            }),
            null
          )
        : A(Ao, j(x, { isSplitMenu: n(c), items: k }), null);
    }
    return () => A(X, null, [C()]);
  },
});
const Eo = E({
  name: "LayoutTrigger",
  components: {
    SiderTrigger: ne(() =>
      te(
        () => import("./SiderTrigger.6fe57d63.js"),
        [
          "assets/SiderTrigger.6fe57d63.js",
          "assets/index.d1971cae.js",
          "assets/index.9df13cc8.css",
        ]
      )
    ),
    HeaderTrigger: pt,
  },
  props: { sider: y.bool.def(!0), theme: y.oneOf(["light", "dark"]) },
});
function Bo(e, t, o, s, r, a) {
  const l = v("SiderTrigger"),
    p = v("HeaderTrigger");
  return e.sider
    ? (h(), _(l, { key: 0 }))
    : (h(), _(p, { key: 1, theme: e.theme }, null, 8, ["theme"]));
}
var vt = H(Eo, [["render", Bo]]);
function Fo() {
  const e = oe(),
    { getMiniWidthNumber: t } = z(),
    o = d(() => n(t));
  function s(r) {
    e.setProjectConfig({ menuSetting: { siderHidden: r } });
  }
  return { getCollapsedWidth: o, onBreakpointChange: s };
}
function Ro(e) {
  const { getTrigger: t, getSplit: o } = z(),
    s = d(() => {
      const a = n(t);
      return a !== De.NONE && !n(e) && (a === De.FOOTER || n(o));
    });
  return {
    getTriggerAttr: d(() => (n(s) ? {} : { trigger: null })),
    getShowTrigger: s,
  };
}
function Do(e, t, o = !1) {
  const { getMiniWidthNumber: s, getCollapsed: r, setMenuSetting: a } = z();
  fe(() => {
    _e(() => {
      st(c, 80)();
    });
  });
  function l(u) {
    var g;
    const m = n(u);
    return m
      ? Reflect.has(m, "$el")
        ? (g = n(u)) == null
          ? void 0
          : g.$el
        : n(u)
      : null;
  }
  function p(u, m, g) {
    document.onmousemove = function (S) {
      let f = u.left + (S.clientX - g);
      S = S || window.event;
      const b = 800,
        M = n(s);
      return (
        f < 0 && (f = 0),
        f > b && (f = b),
        f < M && (f = M),
        (u.style.left = m.style.width = f + "px"),
        !1
      );
    };
  }
  function i(u) {
    const m = l(e);
    document.onmouseup = function () {
      var S;
      (document.onmousemove = null),
        (document.onmouseup = null),
        (m.style.transition = "width 0.2s");
      const g = parseInt(m.style.width);
      if (o) a({ menuWidth: g });
      else {
        const f = n(s);
        n(r)
          ? g > f && a({ collapsed: !1, menuWidth: g })
          : g > f + 20
          ? a({ menuWidth: g })
          : a({ collapsed: !0 });
      }
      (S = u.releaseCapture) == null || S.call(u);
    };
  }
  function c() {
    const u = l(t);
    if (!u) return;
    const m = l(e);
    !m ||
      (u.onmousedown = (g) => {
        var f;
        m.style.transition = "unset";
        const S = g == null ? void 0 : g.clientX;
        return (
          (u.left = u.offsetLeft),
          p(u, m, S),
          i(u),
          (f = u.setCapture) == null || f.call(u),
          !1
        );
      });
  }
  return {};
}
const Ko = E({
  name: "LayoutSideBar",
  components: { LayoutMenu: St },
  setup() {
    const e = W(null),
      t = W(null),
      {
        getCollapsed: o,
        getMenuWidth: s,
        getSplit: r,
        getMenuTheme: a,
        getRealWidth: l,
        getMenuHidden: p,
        getMenuFixed: i,
        getIsMixMode: c,
        toggleCollapsed: u,
      } = z(),
      { prefixCls: m } = K("layout-sideBar"),
      { getIsMobile: g } = ce(),
      { getTriggerAttr: S, getShowTrigger: f } = Ro(g);
    Do(t, e);
    const { getCollapsedWidth: b, onBreakpointChange: M } = Fo(),
      L = d(() => (n(r) ? ee.INLINE : null)),
      $ = d(() => (n(r) ? J.LEFT : J.NONE)),
      C = d(() => (n(r) ? !n(p) : !0)),
      k = d(() => [m, { [`${m}--fixed`]: n(i), [`${m}--mix`]: n(c) && !n(g) }]),
      x = d(() => {
        const w = `${n(l)}px`;
        return {
          width: w,
          overflow: "hidden",
          flex: `0 0 ${w}`,
          maxWidth: w,
          minWidth: w,
          transition: "all 0.2s",
        };
      }),
      B = jt(vt);
    return {
      prefixCls: m,
      sideRef: t,
      dragBarRef: e,
      getIsMobile: g,
      getHiddenDomStyle: x,
      getSiderClass: k,
      getTrigger: B,
      getTriggerAttr: S,
      getCollapsedWidth: b,
      getMenuFixed: i,
      showClassSideBarRef: C,
      getMenuWidth: s,
      getCollapsed: o,
      getMenuTheme: a,
      onBreakpointChange: M,
      getMode: L,
      getSplitType: $,
      getShowTrigger: f,
      toggleCollapsed: u,
    };
  },
});
function xo(e, t, o, s, r, a) {
  const l = v("LayoutMenu");
  return (
    h(),
    _(
      l,
      { theme: e.getMenuTheme, menuMode: e.getMode, splitType: e.getSplitType },
      null,
      8,
      ["theme", "menuMode", "splitType"]
    )
  );
}
var zo = H(Ko, [["render", xo]]);
const Wo = E({
    name: "SiderWrapper",
    components: { Sider: zo, Drawer: nn },
    setup() {
      const { prefixCls: e } = K("layout-sider-wrapper"),
        { getIsMobile: t } = ce(),
        {
          setMenuSetting: o,
          getCollapsed: s,
          getMenuWidth: r,
          getIsMixSidebar: a,
        } = z();
      function l() {
        o({ collapsed: !0 });
      }
      return (
        fe(() => {
          l();
        }),
        {
          prefixCls: e,
          getIsMobile: t,
          getCollapsed: s,
          handleClose: l,
          getMenuWidth: r,
          getIsMixSidebar: a,
        }
      );
    },
  }),
  Uo = { class: "pb-[62px] flex flex-col items-center gap-4 bg-[#100C15]" };
function Yo(e, t, o, s, r, a) {
  const l = v("Sider"),
    p = v("Drawer");
  return e.getIsMobile
    ? (h(),
      _(
        p,
        {
          key: 0,
          placement: "bottom",
          class: T(e.prefixCls),
          closable: !1,
          getContainer: null,
          visible: !e.getCollapsed,
          onClose: e.handleClose,
        },
        { default: F(() => [I("div", Uo, [A(l)])]), _: 1 },
        8,
        ["class", "visible", "onClose"]
      ))
    : N("", !0);
}
var jo = H(Wo, [["render", Yo]]);
function He() {
  const { getFullContent: e } = it(),
    t = oe(),
    o = d(() => !n(e) && n(S) && n(M) && !n(u) && !n(c)),
    s = d(() => !n(L) && !n(o)),
    r = d(() => {
      const Y = !n(e) && n(M);
      return (Y && !n(S)) || (Y && n(u)) || (Y && n(c));
    }),
    {
      getMenuMode: a,
      getSplit: l,
      getShowHeaderTrigger: p,
      getIsSidebarType: i,
      getIsMixSidebar: c,
      getIsTopMenu: u,
    } = z(),
    { getShowBreadCrumb: m, getShowLogo: g } = ge(),
    S = d(() => !n(i) && n(M)),
    f = d(() => t.getHeaderSetting.showDoc),
    b = d(() => t.getHeaderSetting.theme),
    M = d(() => t.getHeaderSetting.show),
    L = d(() => t.getHeaderSetting.fixed),
    $ = d(() => t.getHeaderSetting.bgColor),
    C = d(() => t.getHeaderSetting.showSearch),
    k = d(() => t.getHeaderSetting.useLockPage),
    x = d(() => t.getHeaderSetting.showFullScreen),
    B = d(() => t.getHeaderSetting.showNotice),
    w = d(() => n(a) !== ee.HORIZONTAL && n(m) && !n(l)),
    R = d(() => n(g) && !n(i) && !n(c)),
    Z = d(() => n(w) || n(p));
  function U(Y) {
    t.setProjectConfig({ headerSetting: Y });
  }
  return {
    setHeaderSetting: U,
    getShowDoc: f,
    getShowSearch: C,
    getHeaderTheme: b,
    getUseLockPage: k,
    getShowFullScreen: x,
    getShowNotice: B,
    getShowBread: w,
    getShowContent: Z,
    getShowHeaderLogo: R,
    getShowHeader: M,
    getFixed: L,
    getShowMixHeaderRef: S,
    getShowFullHeaderRef: o,
    getShowInsetHeaderRef: r,
    getUnFixedAndFull: s,
    getHeaderBgColor: $,
  };
}
E({
  name: "FullScreen",
  components: {
    FullscreenExitOutlined: rn,
    FullscreenOutlined: ln,
    Tooltip: tt,
  },
  setup() {
    const { t: e } = ue(),
      { toggle: t, isFullscreen: o } = Vt();
    o.value = !!(
      document.fullscreenElement ||
      document.webkitFullscreenElement ||
      document.mozFullScreenElement ||
      document.msFullscreenElement
    );
    const s = d(() => D.currentRoute.value.name);
    return {
      getTitle: d(() =>
        n(o)
          ? e("layout.header.tooltipExitFull")
          : e("layout.header.tooltipEntryFull")
      ),
      renderRouteName: s,
      isFullscreen: o,
      toggle: t,
    };
  },
});
const Vo = ne(
    () =>
      te(
        () => import("./index.5cfcf310.js"),
        [
          "assets/index.5cfcf310.js",
          "assets/index.1df29431.css",
          "assets/index.d1971cae.js",
          "assets/index.9df13cc8.css",
          "assets/index.c3bcf95c.js",
          "assets/index.7debb409.css",
          "assets/useAttrs.f0190cce.js",
          "assets/useWindowSizeFn.53d85835.js",
          "assets/FullscreenOutlined.29dbb5cc.js",
          "assets/index.b1e60f34.js",
          "assets/index.464798c8.css",
          "assets/_baseIteratee.1443da6a.js",
          "assets/useContentViewHeight.dc2d1985.js",
          "assets/lock.ce71015e.js",
        ]
      ),
    { loading: !0 }
  ),
  Xo = ne(() =>
    te(
      () => import("./Breadcrumb.7af93145.js"),
      [
        "assets/Breadcrumb.7af93145.js",
        "assets/Breadcrumb.e29f3496.css",
        "assets/index.d1971cae.js",
        "assets/index.9df13cc8.css",
      ]
    )
  ),
  Zo = ne(() =>
    te(
      () => import("./index.5ce39d10.js"),
      [
        "assets/index.5ce39d10.js",
        "assets/index.dee8d5f9.css",
        "assets/index.d1971cae.js",
        "assets/index.9df13cc8.css",
        "assets/index.9926ed3c.js",
        "assets/index.796089b3.css",
        "assets/index.ccfcbf16.js",
        "assets/index.a18cc309.css",
        "assets/index.a7e04f12.js",
        "assets/index.f0d4e072.css",
        "assets/CopyOutlined.125c21ba.js",
      ]
    )
  ),
  Go = ne(() =>
    te(
      () => import("./ErrorAction.6502cb5b.js"),
      [
        "assets/ErrorAction.6502cb5b.js",
        "assets/index.d1971cae.js",
        "assets/index.9df13cc8.css",
        "assets/index.9926ed3c.js",
        "assets/index.796089b3.css",
      ]
    )
  );
const Qo = E({
  name: "LayoutHeader",
  components: {
    Header: ut.Header,
    AppLogo: Xt,
    LayoutTrigger: vt,
    LayoutBreadcrumb: Xo,
    LayoutMenu: St,
    UserDropDown: Vo,
    AppLocalePicker: Zt,
    ButtonEnterApp: ct,
    Notify: Zo,
    AppSearch: Gt,
    ErrorAction: Go,
    SettingDrawer: ne(
      () =>
        te(
          () =>
            import("./index.a39d9f65.js").then(function (e) {
              return e.i;
            }),
          [
            "assets/index.a39d9f65.js",
            "assets/index.de188c04.css",
            "assets/index.d1971cae.js",
            "assets/index.9df13cc8.css",
            "assets/index.b1e60f34.js",
            "assets/index.464798c8.css",
            "assets/useAttrs.f0190cce.js",
          ]
        ),
      { loading: !0 }
    ),
  },
  props: { fixed: y.bool },
  setup(e) {
    const t = W(!1),
      o = W(0),
      s = 40,
      { prefixCls: r } = K("layout-header"),
      {
        getShowTopMenu: a,
        getShowHeaderTrigger: l,
        getSplit: p,
        getIsMixMode: i,
        getMenuWidth: c,
        getIsMixSidebar: u,
      } = z(),
      {
        getUseErrorHandle: m,
        getShowSettingButton: g,
        getSettingButtonPosition: S,
      } = ge(),
      {
        getHeaderTheme: f,
        getShowFullScreen: b,
        getShowNotice: M,
        getShowContent: L,
        getShowBread: $,
        getShowHeaderLogo: C,
        getShowHeader: k,
        getShowSearch: x,
      } = He(),
      { getShowLocalePicker: B } = Qt(),
      { getIsMobile: w } = ce(),
      R = d(() => {
        const G = n(f);
        return [
          r,
          {
            [`${r}--fixed`]: e.fixed,
            [`${r}--mobile`]: n(w),
            [`${r}--${G}`]: G,
          },
        ];
      }),
      Z = d(() => {
        if (!n(g)) return !1;
        const G = n(S);
        return G === Ke.AUTO ? n(k) : G === Ke.HEADER;
      }),
      U = d(() =>
        !n(i) || n(w) ? {} : { width: `${n(c) < 180 ? 180 : n(c)}px` }
      ),
      Y = d(() => (n(p) ? J.TOP : J.NONE)),
      se = d(() => ee.HORIZONTAL),
      pe = () => {
        window.pageYOffset < 0 ||
          Math.abs(window.pageYOffset - o.value) < s ||
          ((t.value = window.pageYOffset < o.value),
          (o.value = window.pageYOffset));
      };
    return (
      fe(() => {
        document.body.addEventListener("scroll", pe);
      }),
      Jt(() => {
        document.body.removeEventListener("scroll", pe);
      }),
      {
        prefixCls: r,
        onScroll: pe,
        showHeaderScroll: t,
        getHeaderClass: R,
        getShowHeaderLogo: C,
        getHeaderTheme: f,
        getShowHeaderTrigger: l,
        getIsMobile: w,
        getShowBread: $,
        getShowContent: L,
        getSplitType: Y,
        getSplit: p,
        getMenuMode: se,
        getShowTopMenu: a,
        getShowLocalePicker: B,
        getShowFullScreen: b,
        getShowNotice: M,
        getUseErrorHandle: m,
        getLogoWidth: U,
        getIsMixSidebar: u,
        getShowSettingButton: g,
        getShowSetting: Z,
        getShowSearch: x,
      }
    );
  },
});
function Jo(e, t, o, s, r, a) {
  const l = v("AppLogo"),
    p = v("LayoutTrigger"),
    i = v("LayoutBreadcrumb"),
    c = v("LayoutMenu"),
    u = v("AppSearch"),
    m = v("ErrorAction"),
    g = v("Notify"),
    S = v("ButtonEnterApp"),
    f = v("UserDropDown"),
    b = v("SettingDrawer"),
    M = v("Header");
  return (
    h(),
    O(
      "div",
      {
        class: T([
          e.getHeaderClass,
          "header-animation w-full !border-l-0 !z-100 !justify-center",
          e.showHeaderScroll ? "is-hidden" : "",
        ]),
      },
      [
        A(
          M,
          {
            onClick: e.onScroll,
            class: T([e.getHeaderClass, "max-w-[1920px]"]),
            style: {
              border: "unset !important",
              "z-index": "1000000000 !important",
            },
          },
          {
            default: F(() => [
              I(
                "div",
                { class: T(`${e.prefixCls}-left`) },
                [
                  e.getShowHeaderLogo || e.getIsMobile
                    ? (h(),
                      _(
                        l,
                        {
                          key: 0,
                          class: T(`${e.prefixCls}-logo`),
                          theme: e.getHeaderTheme,
                          style: de(e.getLogoWidth),
                        },
                        null,
                        8,
                        ["class", "theme", "style"]
                      ))
                    : N("", !0),
                  e.getShowContent &&
                  e.getShowHeaderTrigger &&
                  !e.getSplit &&
                  !e.getIsMixSidebar
                    ? (h(),
                      _(
                        p,
                        { key: 1, theme: e.getHeaderTheme, sider: !1 },
                        null,
                        8,
                        ["theme"]
                      ))
                    : N("", !0),
                  e.getShowContent && e.getShowBread
                    ? (h(),
                      _(i, { key: 2, theme: e.getHeaderTheme }, null, 8, [
                        "theme",
                      ]))
                    : N("", !0),
                ],
                2
              ),
              e.getShowTopMenu && !e.getIsMobile
                ? (h(),
                  O(
                    "div",
                    { key: 0, class: T(`${e.prefixCls}-menu`) },
                    [
                      A(
                        c,
                        {
                          isHorizontal: !0,
                          theme: e.getHeaderTheme,
                          splitType: e.getSplitType,
                          menuMode: e.getMenuMode,
                        },
                        null,
                        8,
                        ["theme", "splitType", "menuMode"]
                      ),
                    ],
                    2
                  ))
                : N("", !0),
              I(
                "div",
                { class: T(`${e.prefixCls}-action !h-full`) },
                [
                  e.getShowSearch
                    ? (h(),
                      _(
                        u,
                        { key: 0, class: T(`${e.prefixCls}-action__item `) },
                        null,
                        8,
                        ["class"]
                      ))
                    : N("", !0),
                  e.getUseErrorHandle
                    ? (h(),
                      _(
                        m,
                        {
                          key: 1,
                          class: T(`${e.prefixCls}-action__item error-action`),
                        },
                        null,
                        8,
                        ["class"]
                      ))
                    : N("", !0),
                  e.getShowNotice
                    ? (h(),
                      _(
                        g,
                        {
                          key: 2,
                          class: T(`${e.prefixCls}-action__item notify-item`),
                        },
                        null,
                        8,
                        ["class"]
                      ))
                    : N("", !0),
                  A(S, { class: "mx-6" }),
                  N("", !0),
                  N("", !0),
                ],
                2
              ),
            ]),
            _: 1,
          },
          8,
          ["onClick", "class"]
        ),
      ],
      2
    )
  );
}
var qo = H(Qo, [["render", Jo]]);
const We = 48,
  es = 32,
  ts = E({
    name: "LayoutMultipleHeader",
    components: { LayoutHeader: qo },
    setup() {
      const { setHeaderHeight: e } = an(),
        { prefixCls: t } = K("layout-multiple-header"),
        { getCalcContentWidth: o, getSplit: s } = z(),
        { getIsMobile: r } = ce(),
        {
          getFixed: a,
          getShowInsetHeaderRef: l,
          getShowFullHeaderRef: p,
          getHeaderTheme: i,
          getShowHeader: c,
        } = He(),
        { getFullContent: u } = it(),
        { getShowMultipleTab: m } = Oe(),
        g = d(() => n(m) && !n(u)),
        S = d(() => n(a) || n(p)),
        f = d(() => {
          const $ = {};
          return (
            n(a) && ($.width = n(r) ? "100%" : n(o)),
            n(p) && ($.top = `${We}px`),
            $
          );
        }),
        b = d(() => n(a) || n(p)),
        M = d(() => {
          let $ = 0;
          return (
            (n(p) || !n(s)) && n(c) && !n(u) && ($ += We),
            n(m) && !n(u) && ($ += es),
            e($),
            { height: `${$}px` }
          );
        });
      return {
        getClass: d(() => [t, `${t}--${n(i)}`, { [`${t}--fixed`]: n(b) }]),
        prefixCls: t,
        getPlaceholderDomStyle: M,
        getIsFixed: b,
        getWrapStyle: f,
        getIsShowPlaceholderDom: S,
        getShowTabs: g,
        getShowInsetHeaderRef: l,
      };
    },
  });
function ns(e, t, o, s, r, a) {
  const l = v("LayoutHeader");
  return (
    h(),
    O(
      X,
      null,
      [
        e.getIsShowPlaceholderDom
          ? (h(),
            O("div", { key: 0, style: de(e.getPlaceholderDomStyle) }, null, 4))
          : N("", !0),
        I(
          "div",
          { style: de(e.getWrapStyle), class: T(e.getClass) },
          [A(l)],
          6
        ),
      ],
      64
    )
  );
}
var os = H(ts, [
  ["render", ns],
  ["__scopeId", "data-v-2de85851"],
]);
function ss() {
  const { getLockTime: e } = ge(),
    t = un(),
    o = qt(),
    s = oe();
  let r;
  function a() {
    window.clearTimeout(r);
  }
  function l() {
    if (!o.getToken) {
      a();
      return;
    }
    const c = s.getProjectConfig.lockTime;
    if (!c || c < 1) {
      a();
      return;
    }
    a(),
      (r = setTimeout(() => {
        p();
      }, c * 60 * 1e3));
  }
  function p() {
    t.setLockInfo({ isLock: !0, pwd: void 0 });
  }
  Ce((c) => {
    o.getToken ? l() : a(),
      c(() => {
        a();
      });
  }),
    en(() => {
      a();
    });
  const i = lt(l, 2e3);
  return d(() => (n(e) ? { onKeyup: i, onMousemove: i } : (a(), {})));
}
var as =
  "data:image/png;base64,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";
const rs = {
    setup() {
      const { t: e } = ue();
      return {
        t: e,
        IconLogo: as,
        directPage: () => {
          window.open(
            "https://appleswap-dapp.vercel.app/swap?currency0=0x55d398326f99059fF775485246999027B3197955&currency1=0x0c59d2Dc24798Ff6869DE428aA931A862C4E9994",
            "blank"
          );
        },
      };
    },
  },
  ls = {
    class:
      "flex w-[180px] button-pink-sale fixed top-[85vh] tablet:top-[64vh] right-[50px] mobile:w-[140px] !mobile:scale-50 w-full",
    style: { "z-index": "100000" },
  },
  is = {
    href: "https://appleswap-dapp.vercel.app/swap?currency0=0x55d398326f99059fF775485246999027B3197955&currency1=0x0c59d2Dc24798Ff6869DE428aA931A862C4E9994&chain=bsc",
    target: "_blank",
    rel: "nofollow",
    class: "wrap",
  },
  us = { class: "button flex flex-row items-center !pl-7 gap-4" },
  cs = {
    class: "rounded-full w-[48px] h-[48px] flex",
    style: { background: "rgba(54, 50, 56, 1)" },
  },
  ps = ["src"];
function ds(e, t, o, s, r, a) {
  return null
}
var ms = H(rs, [
  ["render", ds],
  ["__scopeId", "data-v-2963ba50"],
]);
const gs = E({
    name: "DefaultLayout",
    components: {
      LayoutFeatures: ne(() =>
        te(
          () => import("./index.4dd06b9c.js"),
          [
            "assets/index.4dd06b9c.js",
            "assets/index.fb9c6b2a.css",
            "assets/index.d1971cae.js",
            "assets/index.9df13cc8.css",
            "assets/index.b1e60f34.js",
            "assets/index.464798c8.css",
            "assets/_baseIteratee.1443da6a.js",
            "assets/useContentViewHeight.dc2d1985.js",
            "assets/useWindowSizeFn.53d85835.js",
            "assets/FullscreenOutlined.29dbb5cc.js",
            "assets/lock.ce71015e.js",
          ]
        )
      ),
      LayoutFooter: ne(() =>
        te(
          () => import("./index.c3c60f2c.js"),
          [
            "assets/index.c3c60f2c.js",
            "assets/index.795114de.css",
            "assets/index.d1971cae.js",
            "assets/index.9df13cc8.css",
            "assets/ListSocial.49f3d56c.js",
            "assets/ListSocial.27c241ea.css",
            "assets/useContentViewHeight.dc2d1985.js",
            "assets/useWindowSizeFn.53d85835.js",
          ]
        )
      ),
      LayoutContent: Zn,
      LayoutSideBar: jo,
      ButtonEnterApp: ct,
      ModalComingSoon: In,
      LayoutMultipleHeader: os,
      ButtonToPinkSale: ms,
      Layout: ut,
      HeaderTrigger: pt,
    },
    setup() {
      const { prefixCls: e } = K("default-layout"),
        { getIsMobile: t } = ce(),
        { getShowFullHeaderRef: o } = He(),
        { getShowSidebar: s, getIsMixSidebar: r, getShowMenu: a } = z(),
        l = oe(),
        p = ss(),
        i = d(() => D.currentRoute.value.name),
        c = d(() => {
          let m = ["ant-layout"];
          return (n(r) || n(a)) && m.push("ant-layout-has-sider"), m;
        }),
        u = d(() => (window.innerWidth < 767 ? "Mobile" : "NoMobile"));
      return (
        fe(() => {
          setTimeout(() => {
            l.setModalPromotion(!0);
          }, 200);
        }),
        {
          routeName: i,
          checkDevice: u,
          getShowFullHeaderRef: o,
          getShowSidebar: s,
          prefixCls: e,
          getIsMobile: t,
          getIsMixSidebar: r,
          layoutClass: c,
          lockEvents: p,
        }
      );
    },
  }),
  fs = {
    class:
      "fixed hidden mobile:flex bottom-0 items-center justify-between py-[9px] px-3 left-0 right-0 h-[62px] w-screen bg-white",
    style: { "z-index": "10000000000000" },
  },
  hs = { class: "flex flex-row items-center gap-6" };
function Ss(e, t, o, s, r, a) {
  const l = v("LayoutFeatures"),
    p = v("LayoutSideBar"),
    i = v("LayoutMultipleHeader"),
    c = v("LayoutContent"),
    u = v("LayoutFooter"),
    m = v("ButtonEnterApp"),
    g = v("ModalComingSoon"),
    S = v("HeaderTrigger"),
    f = v("ButtonToPinkSale"),
    b = v("Layout");
  return (
    h(),
    _(
      b,
      j({ class: [e.routeName, e.prefixCls] }, e.lockEvents),
      {
        default: F(() => [
          A(l),
          A(
            b,
            { class: T([e.layoutClass]) },
            {
              default: F(() => [
                e.getShowSidebar ? (h(), _(p, { key: 0 })) : N("", !0),
                A(
                  b,
                  { class: T(`${e.prefixCls}-main`) },
                  {
                    default: F(() => [
                      e.checkDevice !== "Mobile"
                        ? (h(), _(i, { key: 0 }))
                        : N("", !0),
                      A(c),
                      A(u),
                      I("div", fs, [I("div", hs, [A(m)]), A(g), A(S)]),
                      A(f),
                    ]),
                    _: 1,
                  },
                  8,
                  ["class"]
                ),
              ]),
              _: 1,
            },
            8,
            ["class"]
          ),
        ]),
        _: 1,
      },
      16,
      ["class"]
    )
  );
}
var vs = H(gs, [["render", Ss]]),
  $s = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: vs },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
export { Oe as a, ne as c, $s as i, He as u };
