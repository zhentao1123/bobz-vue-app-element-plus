import { defineConfig } from 'vite';
import path from 'path';
import vue from '@vitejs/plugin-vue';
import babel from 'vite-babel-plugin';

//需要高版本的nodejs，v12会出错
// import ElementPlus from 'unplugin-element-plus/vite' 
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

/**
 *
 * 所有配置详见：https://www.vitejs.net/config/#mode
 */
export default defineConfig({
  /**
   * 插件配置
   */
  plugins: [
    vue(), 
    babel(),
    // ElementPlus({
    //   importStyle: 'sass',
    //   useSource: true
    // }),
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    })
  ],

  /**
   * 用于加载 .env 文件的目录。可以是一个绝对路径，也可以是相对于项目根的路径。默认：root
   */
  envDir: './env', //resolve(__dirname, 'env'),

  /**
   * 以 envPrefix 开头的环境变量会通过 import.meta.env 暴露在你的客户端源码中。默认：VITE_
   */
  envPrefix: ['APP_'], 

  resolve: {
    /**
     * 别名配置
     */
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },

  /**
   * logLevel
   * 类型： 'info' | 'warn' | 'error' | 'silent'
   * 调整控制台输出的级别，默认为 'info'。
   */
  // logLevel: 'info',

  build: {
    /**
     * 浏览器兼容性
     * 默认：modules
     */
    // target: 'modules',

    /**
     * 指定输出路径（相对于 项目根目录).
     * 默认：dist
     */
    // outDir: 'dist',

    /**
     * 指定生成静态资源的存放路径（相对于 build.outDir）。
     * 默认：assets
     */
    // assetsDir: 'assets',

    /**
     * 设置为 false 可以禁用最小化混淆，或是用来指定使用哪种混淆器。默认为 Esbuild，它比 terser 快 20-40 倍，压缩率只差 1%-2%。Benchmarks
     * 默认：esbuild
     */
    // minify: 'esbuild' ,// 混淆器

    /**
     * 当设置为 true，构建后将会生成 manifest.json 文件，包含了没有被 hash 的资源文件名和 hash 后版本的映射。可以为一些服务器框架渲染时提供正确的资源引入链接。
     */
    manifest: true,

    /**
     * 默认： 若 outDir 在 root 目录下，则为 true
     * 默认情况下，若 outDir 在 root 目录下，则 Vite 会在构建时清空该目录。若 outDir 在根目录之外则会抛出一个警告避免意外删除掉重要的文件。可以设置该选项来关闭这个警告。该功能也可以通过命令行参数 --emptyOutDir 来使用。
     */
    // emptyOutDir: true
  },

  server: {
    /**
     * 类型： boolean | CorsOptions
     * 为开发服务器配置 CORS。默认启用并允许任何源，传递一个 选项对象 来调整行为或设为 false 表示禁用。
     */
    core: true,

    /**
     * 在开发服务器启动时自动在浏览器中打开应用程序
     */
    //open: true,

    /**
     * server.host
     * 类型： string
     * 默认： '127.0.0.1'
     * 指定服务器应该监听哪个 IP 地址。 如果将此设置为 0.0.0.0 将监听所有地址，包括局域网和公网地址。
     * 也可以通过 CLI 使用 --host 0.0.0.0 或 --host 来设置。
     */
    // host: 'https://bobz-vue-app--3000.local-corp.webcontainer.io',

    /**
     * 端口
     * 默认 3000
     */
    // port: 80,

    /**
     * 设为 true 时若端口已被占用则会直接退出，而不是尝试下一个可用端口。
     */
    strictPort: true,

    proxy: {
      '/api': {
        target: 'http://127.0.0.1',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
      // '/api': 'http://127.0.0.1'
    },

    fs: {
      /**
       * 限制为工作区 root 路径以外的文件的访问。
       */
      // strict: false,
      // allow: [
      // 	// 搜索工作区的根目录
      // 	searchForWorkspaceRoot(process.cwd()),
      // 	// 自定义规则
      // 	'/data/custom'
      // ]
    },

    optimizeDeps: {
      /**
       * 打包器有时需要重命名符号以避免冲突。 设置此项为 true 可以在函数和类上保留 name 属性。 若想获取更多详情，请参阅 keepNames
       */
      // keepNames: true
    },
  },

  css: {
    preprocessorOptions: {
      scss: {
        /*
				引入comm.scss全局预定义变量，
				如果引入多个文件，
				可以使用
				'@import "@/assets/scss/globalVariable1.scss";@import "@/assets/scss/globalVariable2.scss";'
				这种格式
				 */
				// additionalData: '@import "@/styles/comm.scss";'
      }
    }
  }
});

//如果配置文件需要基于（serve 或 build）命令或者不同的 模式 来决定选项，则可以选择导出这样一个函数：
// export default defineConfig(({ command, mode }) => {
//   if (command === 'serve') {
//     return {
//       // serve 独有配置
//     }
//   } else {
//     return {
//       // build 独有配置
//     }
//   }
// })
