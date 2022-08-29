import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes";

// import { useCookies } from "vue3-cookies";
// const { cookies } = useCookies();

export default function (store) {
  const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
  });
  // router.beforeEach(async (to, from, next) => {
  //   if (import.meta.env.VITE_IS_LOGIN === "Y") {
  //     const access = cookies.get("accessToken");
  //     const refresh = cookies.get("refreshToken");

  //     //@@ refreshToken이 없을 경우 로그인 창 띄우기
  //     if (refresh === null) {
  //       console.warn("need login...");
  //       store.commit("auth/needLogin", true);
  //     } else if (access === null && refresh !== null) {
  //       //refreshToken은 있고 accessToken만 있을 경우 재발급요청
  //       await store.dispatch("auth/refreshToken");
  //     } else {
  //       //토큰이 다 있다면 페이지 이동 전 토큰 검증
  //       await store.dispatch("auth/verifyToken");
  //     }
  //     return next();
  //   } else {
  //     store.commit("auth/needLogin", false);
  //     return next();
  //   }
  // });
  return router;
}
