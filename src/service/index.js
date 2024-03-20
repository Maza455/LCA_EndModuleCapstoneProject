import axios from "axios";
import store from "../store/index2.js";

const URL = "https://lc-capstoneendmodueproject-1.onrender.com/";

const axiosInstance = axios.create({
    baseURL: URL,
});

axiosInstance.interceptors.request.use((req) => {
    const accessToken = localStorage.getItem("access_token");
    if (accessToken) {
        req.headers.Authorization = `Bearer ${accessToken}`;
    }
    return req;
});

axiosInstance.interceptors.response.use(
    (res) => res,
    async (error) => {
        if (error.response.status === 401) {
            try {
                const refreshToken = store.state.auth.tokens.refreshToken;
                const response = await axiosInstance.get("/refresh", null, {
                    headers: {
                        Authorization: `Bearer ${refreshToken}`
                    },
                });
                const accessToken = response.data.access_token;
                store.commit("auth/refreshToken", accessToken);
                error.config.headers.Authorization = `Bearer ${accessToken}`;
                return axiosInstance(error.config);
            } catch {
                store.dispatch("auth/logOut");
                return Promise.reject(error);
            }
        } else {
            return Promise.reject(error);
        }
    }
);

export default axiosInstance;