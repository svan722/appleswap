import {
  a as i,
  m as l,
  s as u,
  x as t,
  G as s,
  D as c,
  H as n,
  Z as r,
  a8 as p,
} from "./index.d1971cae.js";
const d = i({
    components: {},
    setup() {
      const { t: e } = l(),
        a = [
          {
            social: e("routes.home.document.community.Twitter"),
            link: "https://twitter.com/",
          },
          {
            social: e("routes.home.document.community.Telegram"),
            link: " https://t.me/ ",
          },
          {
            social: e("routes.home.document.community.CMC"),
            link: e("routes.home.document.community.coming_soon"),
            unlink: !0,
          },
        ];
      return { t: e, List_community: a };
    },
  }),
  _ = { class: "w-full flex flex-col gap-12" },
  f = { class: "title-main-document" },
  h = { class: "flex flex-col gap-6" },
  k = { class: "title-second-document" },
  y = ["href"],
  w = { key: 1 };
function g(e, a, x, A, b, v) {
  return (
    t(),
    s("div", _, [
      c("p", f, n(e.t("routes.home.document.community.title")), 1),
      c("div", h, [
        (t(!0),
        s(
          r,
          null,
          p(
            e.List_community,
            (o, m) => (
              t(),
              s(
                "div",
                {
                  key: m,
                  class: "flex flex-row mobile:flex-wrap items-center gap-2",
                },
                [
                  c("span", k, n(o.social), 1),
                  o.unlink
                    ? (t(), s("p", w, n(o.link), 1))
                    : (t(),
                      s(
                        "a",
                        {
                          key: 0,
                          href: o.link,
                          ref_for: !0,
                          ref: "nofollow",
                          target: "_blank",
                          class: "underline",
                        },
                        n(o.link),
                        9,
                        y
                      )),
                ]
              )
            )
          ),
          128
        )),
      ]),
    ])
  );
}
var I = u(d, [["render", g]]);
export { I as default };
