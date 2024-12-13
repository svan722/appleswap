import { B as h, F as u, a as f, b as w } from "./form-swap-mobile.c71c707f.js";
import { B as g } from "./ButtonTrading.569c3a95.js";
import v from "./OurService.cd989aa5.js";
import {
  s as y,
  m as F,
  aF as S,
  bq as B,
  v as c,
  $ as s,
  x as o,
  G as l,
  D as t,
  a0 as i,
  H as m,
  F as k,
  c as p,
  O as M,
} from "./index.d1971cae.js";
const T = {
    components: { ButtonTrading: g, OurService: v },
    setup() {
      const { t: a } = F(),
        { getIsMobile: n } = S();
      return {
        t: a,
        BackgroundMain: h,
        getIsMobile: n,
        FormSwap: u,
        FormSwapCenter: f,
        FormSwapMobile: w,
        Logo: B,
      };
    },
  },
  z = { class: "home-main relative", style: { background: "#100c15" } },
  C = t(
    "div",
    {
      class:
        "bg-yellow-custom h-full w-full absolute z-1 right-0 top-0 bottom-0",
    },
    null,
    -1
  ),
  D = {
    class:
      "pt-[110px] mobile:pt-8 tablet:pt-12 tablet:pb-[150px] mobile:pb-[150px] px-3",
    style: { background: "rgba(0, 0, 0, 0.5)" },
  },
  H = { class: "hidden mobile:flex mb-[32px]" },
  I = { href: "/", ref: "nofollow", class: "m-auto" },
  L = ["src"],
  O = { class: "flex flex-col justify-center w-full items-center gap-4" },
  j = {
    style: { "z-index": "1000" },
    href: "https://appleswap-dapp.vercel.app/swap",
    ref: "nofollow",
    target: "_blank",
    class:
      "h-[34px] cursor-pointer flex max-w-[330px] mobile:max-w-[200px] w-full border border-yellow-1 rounded-[33px]",
  },
  A = { class: "text-yellow-1 m-auto font-semibold text-xl mobile:text-xs" },
  N = {
    class:
      "w-full flex items-center gap-[45px] tablet:gap-6 mobile:gap-[29px] flex-col",
  },
  V = ["innerHTML"],
  E = {
    class:
      "max-w-[532px] mobile:max-w-[274px] text-neuture-400 text-base tablet:text-sm mobile:text-xs font-medium text-center",
  },
  q = {
    class: "relative min-h-[690px] tablet:min-h-[500px] mobile:min-h-[220px]",
  },
  G = ["src"],
  J = {
    initial: { opacity: 0, y: 100 },
    enter: { opacity: 1, y: 0, transition: { delay: 600, duration: 600 } },
    class:
      "w-full absolute flex top-[120px] mobile:top-[-30px] tablet:top-[-48px]",
  },
  K = ["src"],
  P = ["src"],
  Q = ["src"],
  R = {
    class:
      "w-full bg-[#100C15] flex justify-center py-12 mt-[200px] tablet:mt-0 mobile:mt-0 mobile:pt-0",
  };
function U(a, n, W, e, X, Y) {
  const x = c("ButtonTrading"),
    d = c("OurService"),
    r = s("motion-title-main"),
    _ = s("motion-content-title-main"),
    b = s("motion");
  return (
    o(),
    l("div", z, [
      C,
      t("div", D, [
        t("div", H, [
          t(
            "a",
            I,
            [t("img", { class: "w-[220px]", src: e.Logo }, null, 8, L)],
            512
          ),
        ]),
        t("div", O, [
          i(
            (o(),
            l("a", j, [
              t("span", A, m(e.t("routes.home.home_main.first_title")), 1),
            ])),
            [[r]]
          ),
          t("div", N, [
            i(
              t(
                "h1",
                {
                  class:
                    "text-5xl leading-[62px] tablet:text-4xl mobile:text-lg max-w-[1077px] text-center font-bold mb-0 !text-white",
                  innerHTML: e.t("routes.home.home_main.main_title"),
                },
                null,
                8,
                V
              ),
              [[r]]
            ),
            i(
              (o(),
              l("p", E, [k(m(e.t("routes.home.home_main.main_content")), 1)])),
              [[_]]
            ),
            p(
              x,
              {
                class: "z-2",
                title: e.t("routes.home.home_main.trade_button"),
              },
              null,
              8,
              ["title"]
            ),
          ]),
        ]),
      ]),
      t("div", q, [
        t("img", { class: "w-full", src: e.BackgroundMain }, null, 8, G),
        i(
          (o(),
          l("div", J, [
            t(
              "div",
              {
                class:
                  "w-full relative max-w-[693px] tablet:max-w-[428px] mobile:max-w-[280px] mobile:h-[168px] mobile:border-none flex m-auto h-[479px] tablet:h-[400px] border-[#FFE7AA] border-4 rounded-2xl",
                style: M(
                  e.getIsMobile
                    ? ""
                    : "background: radial-gradient(84.91% 121.61% at 50% 50%, #000000 0%, #291d31 100%)"
                ),
              },
              [
                t(
                  "img",
                  {
                    class:
                      "m-auto tablet:w-[229px] mobile:w-[120px] mobile:hidden",
                    src: e.FormSwap,
                  },
                  null,
                  8,
                  K
                ),
                t(
                  "img",
                  {
                    class: "m-auto tablet:w-[229px] mobile:block hidden",
                    src: e.FormSwapCenter,
                  },
                  null,
                  8,
                  P
                ),
                t(
                  "img",
                  {
                    class:
                      "absolute top-[90px] mobile:hidden right-[-133px] tablet:right-[-90px] tablet:top-[164px] tablet:w-[161px] mobile:w-[76px] mobile:right-[-30px] mobile:top-[40px]",
                    src: e.FormSwapMobile,
                  },
                  null,
                  8,
                  Q
                ),
              ],
              4
            ),
          ])),
          [[b]]
        ),
      ]),
      t("div", R, [p(d)]),
    ])
  );
}
var ot = y(T, [["render", U]]);
export { ot as default };
