import {
  s as y,
  a as S,
  m as L,
  t as I,
  W as C,
  R as D,
  n as H,
  r as R,
  b as F,
  o as f,
  aE as T,
  bq as A,
  v as V,
  $,
  x as l,
  G as r,
  D as s,
  a0 as p,
  c as B,
  H as d,
  Z as x,
  a8 as w,
  F as E,
  Q as j,
  V as N,
  N as v,
} from "./index.d1971cae.js";
import { L as M } from "./ListSocial.49f3d56c.js";
import { a as W } from "./useContentViewHeight.dc2d1985.js";
import "./useWindowSizeFn.53d85835.js";
const q = S({
    name: "LayoutFooter",
    components: { ListSocial: M },
    setup() {
      const { t: e } = L(),
        n = I(),
        { getShowFooter: _ } = C(),
        { currentRoute: h } = D(),
        { prefixCls: b } = H("layout-footer"),
        g = R(null),
        { setFooterHeight: m } = W(),
        a = F(() => {
          var t, u;
          if (f(_)) {
            const i = (t = f(g)) == null ? void 0 : t.$el;
            m((i == null ? void 0 : i.offsetHeight) || 0);
          } else m(0);
          return f(_) && !((u = f(h).meta) != null && u.hiddenFooter);
        }),
        o = [
          {
            label: e("routes.home.footer.list_about.document"),
            link: "#/white-paper",
            target: "_self",
          },
          { label: "Roadmap", link: "roadmap", target: "_self" },
        ],
        c = [
          {
            label: e("routes.home.footer.list_service.swap"),
            link: "https://appleswap-dapp.vercel.app/",
            target: "_blank",
          },
          {
            label: e("routes.home.footer.list_service.top_trade"),
            link: "",
            target: "_self",
          },
        ];
      return {
        getShowLayoutFooter: a,
        prefixCls: b,
        currentRoute: h,
        t: e,
        openWindow: T,
        handleDirectHome: () => {
          window.open("#/home", "_self");
        },
        handleDirect: (t) => {
          var u, i;
          t.link
            ? t.link === "roadmap"
              ? v.currentRoute.value.name !== "Home"
                ? (n.setIdScroll("roadmap"),
                  n.setCheckIsScroll(!0),
                  v.push("/home"))
                : (u = document.getElementById("roadmap")) == null ||
                  u.scrollIntoView({ behavior: "smooth" })
              : t.link === "#/pitch-deck" && window.innerWidth < 768
              ? (i = document.getElementById("pitch-deck")) == null || i.click()
              : window.open(t.link, t.target)
            : n.setComingSoon(!0);
        },
        footerRef: g,
        Logo: A,
        LIST_ABOUT: o,
        LIST_SERVICE: c,
      };
    },
  }),
  O = {
    class:
      "max-w-[1620px] w-full m-auto flex flex-row justify-between gap-48 tablet:gap-8 mobile:flex-wrap mobile:gap-6",
  },
  P = {
    class: "w-full flex flex-col gap-[45px] tablet:gap-[20px] mobile:gap-5",
  },
  U = ["src"],
  z = ["innerHTML"],
  G = { class: "w-full grid grid-cols-2 gap-12" },
  Q = { class: "flex justify-end mobile:justify-start" },
  Z = { class: "flex flex-col gap-4" },
  J = { class: "text-xl tablet:text-lg font-semibold" },
  K = ["onClick"],
  X = { class: "flex justify-end mobile:justify-start" },
  Y = { class: "flex flex-col gap-4" },
  ee = { class: "text-xl tablet:text-lg font-semibold" },
  te = ["onClick"],
  oe = { class: "text-center mobile:text-xs" };
function se(e, n, _, h, b, g) {
  const m = V("ListSocial"),
    a = $("motion-form-multi-collapse");
  return e.getShowLayoutFooter
    ? N("", !0)
    : (l(),
      r(
        "div",
        {
          key: 0,
          id: "footer",
          class: j([
            "pb-6 w-full px-8 flex flex-col item-center gap-[117px] mobile:pb-[80px] tablet:gap-[48px] max-w-[1920px]",
            e.currentRoute.name === "Home" ? "pt-[350px]" : "pt-[48px]",
          ]),
          style: {
            background: `linear-gradient(
        180deg,
        rgba(255, 255, 255, 0.05) 0%,
        rgba(255, 255, 255, 0.05) 0.01%,
        rgba(255, 255, 255, 0) 100%
      ) !important`,
          },
        },
        [
          s("div", O, [
            s("div", P, [
              p(
                s(
                  "img",
                  {
                    onClick:
                      n[0] ||
                      (n[0] = (...o) =>
                        e.handleDirectHome && e.handleDirectHome(...o)),
                    class: "w-max-[221px] cursor-pointer",
                    src: e.Logo,
                  },
                  null,
                  8,
                  U
                ),
                [[a]]
              ),
              p(
                s(
                  "p",
                  {
                    class: "tablet:text-xs mobile:text-xs",
                    innerHTML: e.t("routes.home.footer.content_right"),
                  },
                  null,
                  8,
                  z
                ),
                [[a]]
              ),
              p(B(m, null, null, 512), [[a]]),
            ]),
            s("div", G, [
              s("div", Q, [
                p(
                  (l(),
                  r("div", Z, [
                    s("p", J, d(e.t("routes.home.footer.about")), 1),
                    (l(!0),
                    r(
                      x,
                      null,
                      w(
                        e.LIST_ABOUT,
                        (o, c) => (
                          l(),
                          r(
                            "a",
                            {
                              onClick: (k) => e.handleDirect(o),
                              class:
                                "tablet:text-sm !text-neuture-500 hover:!text-primary",
                              key: c,
                            },
                            d(o.label),
                            9,
                            K
                          )
                        )
                      ),
                      128
                    )),
                  ])),
                  [[a]]
                ),
              ]),
              s("div", X, [
                p(
                  (l(),
                  r("div", Y, [
                    s("p", ee, d(e.t("routes.home.footer.service")), 1),
                    (l(!0),
                    r(
                      x,
                      null,
                      w(
                        e.LIST_SERVICE,
                        (o, c) => (
                          l(),
                          r(
                            "a",
                            {
                              onClick: (k) => e.handleDirect(o),
                              class:
                                "tablet:text-sm !text-neuture-500 hover:!text-primary",
                              key: c,
                            },
                            d(o.label),
                            9,
                            te
                          )
                        )
                      ),
                      128
                    )),
                  ])),
                  [[a]]
                ),
              ]),
            ]),
          ]),
          p(
            (l(), r("p", oe, [E(d(e.t("routes.home.footer.copy_right")), 1)])),
            [[a]]
          ),
        ],
        2
      ));
}
var pe = y(q, [
  ["render", se],
  ["__scopeId", "data-v-2e3a1941"],
]);
export { pe as default };
