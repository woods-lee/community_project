import { defineStore } from "pinia";

export const useAuthStore = defineStore({
  id: "auth",
  state: () => ({
    loggedIn: 0,
  }),
  getters: {
    loggedIn: (state) => state.loggedIn,
  },
  actions: {
    increment() {
      this.counter++;
    },
    login(params) {
      return new Promise(async (resolve, reject) => {
        try {
          const rs = await axios.post("/api/auth/login", params);
          if (rs.data.ok) {
            const access = rs.data.result.accessToken;
            const refresh = rs.data.result.refreshToken;
            cookies.set(
              "accessToken",
              access,
              import.meta.env.VITE_ACCESS_TIME
            );
            cookies.set(
              "refreshToken",
              refresh,
              import.meta.env.VITE_REFRESH_TIME
            );
            this.loggedIn = true;
          }
          resolve(rs.data.msg);
        } catch (err) {
          console.error(err);
          reject(err);
        }
      });
    },
    verifyToken() {
      return new Promise(async (resolve, reject) => {
        try {
          const rs = await axios.post("/api/auth/accessTokenCheck");
          if (rs.data.ok) {
            resolve(true);
          } else {
            console.error(rs.data.msg);
            alert(rs.data.result);
            this.loggedIn = false;
            resolve(false);
          }
        } catch (err) {
          console.error(err);
          reject(err);
        }
      });
    },
    refreshToken() {
      return new Promise(async (resolve, reject) => {
        try {
          const rs = await axios.post("/api/auth/refreshToken");
          if (rs.data.ok) {
            const access = rs.data.result.accessToken;
            const refresh = rs.data.result.refreshToken;
            cookies.set(
              "accessToken",
              access,
              import.meta.env.VITE_ACCESS_TIME
            );
            cookies.set(
              "refreshToken",
              refresh,
              import.meta.env.VITE_REFRESH_TIME
            );
            this.loggedIn = true;
            resolve(true);
          } else {
            console.error(rs.data.msg);
            this.loggedIn = false;
            resolve(false);
          }
        } catch (err) {
          console.error(err);
          reject(err);
        }
      });
    },
  },
});
