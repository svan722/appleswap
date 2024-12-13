import {
  s as n,
  x as e,
  G as t,
  Z as c,
  a8 as l,
  D as i,
  Q as _,
} from "./index.d1971cae.js";
var g = "/assets/logo-facebook.f2a4f072.svg",
  f = "/assets/logo-telegram.751e0b18.svg",
  m = "/assets/logo-twitter.b255f11c.svg";
const L = {
    name: "ListSocial",
    setup() {
      return {
        LIST_SOCIAL: [
          { icon: m, link: "https://twitter.com/" },
          { icon: f, link: "https://t.me/" },
        ],
      };
    },
  },
  k = ["href"],
  p = ["src"];
function h(a, u, w, o, d, v) {
  return (
    e(),
    t(
      "div",
      {
        class: _([
          "grid w-full gap-4 max-w-[250px] mt-[30px]",
          `grid-cols-${o.LIST_SOCIAL.length}`,
        ]),
      },
      [
        (e(!0),
        t(
          c,
          null,
          l(
            o.LIST_SOCIAL,
            (s, r) => (
              e(),
              t(
                "a",
                {
                  key: r,
                  href: s.link,
                  target: "_blank",
                  ref_for: !0,
                  ref: "nofollow",
                  class: "flex item-social",
                },
                [i("img", { class: "m-auto", src: s.icon }, null, 8, p)],
                8,
                k
              )
            )
          ),
          128
        )),
      ],
      2
    )
  );
}
var x = n(L, [["render", h]]);
export { x as L };
