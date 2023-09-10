import react from '@vitejs/plugin-react';
import { terser } from 'rollup-plugin-terser';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      // external: ['react', 'react-dom'],
      output: {
        manualChunks: {
          // 将 React 相关库打包成单独的 chunk 中
          'react-vendor': ['react', 'react-dom'],
          // 将组件库的代码打包
          library: ['antd'],
        },
      },
      plugins: [
        terser({
          format: {
            comments: false, // 去除注释
          },
        }),
      ],
    },
  },
  resolve: {
    alias: {
      '@': '/src/',
    },
  },
});
