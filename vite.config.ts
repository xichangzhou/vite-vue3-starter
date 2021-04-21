import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
// 如果编辑器提示 path 模块找不到，则可以安装一下 @types/node -> npm i @types/node -D
import { resolve } from "path";

const transformPath = (path: string) => {
    return resolve(__dirname, path);
};

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            "@": resolve(__dirname, "src"),
            "@components": transformPath("src/components"),
        },
    },
    base: "./", //设置打包路径
    server: {
        port: 3000, //设置服务启动端口号
        open: true, // 设置服务启动时是否自动打开浏览器
        cors: true, // 设置是否跨域

        // 设置代理
        // proxy: {
        //     "/api": {
        //         target: "http://xxx.xxx.xxx:8000",
        //         changeOrigin: true,
        //         secure: false,
        //         rewrite: (path) => path.replace("/api/", "/"),
        //     },
        // },
    },
});
