import {
  s as r,
  $ as s,
  a0 as l,
  x as c,
  G as p,
  D as d,
  H as _,
} from "./index.d1971cae.js";
const m = {
    props: { title: { type: String, default: "" } },
    setup() {
      return {
        handleDirect: () => {
          window.open("https://appleswap-dapp.vercel.app/", "_blank");
        },
      };
    },
  },
  x = { class: "text-2xl mobile:text-lg m-auto text-black font-medium" };
function u(a, e, i, t, v, b) {
  const n = s("motion");
  return l(
    (c(),
    p(
      "div",
      {
        initial: { scale: 0 },
        enter: { scale: 1, transition: { delay: 600 } },
        onClick:
          e[0] || (e[0] = (...o) => t.handleDirect && t.handleDirect(...o)),
        class:
          "h-[60px] button-trade cursor-pointer hover:bg-primary hover:mobile:bg-[#FFE7AA] w-full flex max-w-[289px] mobile:max-w-[200px] mobile:h-[40px] bg-[#FFE7AA] rounded-lg",
      },
      [d("span", x, _(i.title), 1)]
    )),
    [[n]]
  );
}
var h = r(m, [["render", u]]);
export { h as B };
