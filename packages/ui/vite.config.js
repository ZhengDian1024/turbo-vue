import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
    build: {
        watch: {
            // 深度监听配置
            include: ['src/**'],
            exclude: ['node_modules', 'dist']
        },
        lib: {
            entry: './src/index.js',
            name: 'ui',
            // 关键配置：明确指定输出格式
            formats: ['esm', 'cjs', 'umd'],
            fileName: (format) => `index.${format}.js`
        },
        rollupOptions: {
            external: ['vue'],
            output: {
                globals: {
                    vue: 'Vue'
                },
                // 确保 CJS 格式正确封装
                interop: 'auto',
                exports: 'named'
            }
        }
    },
    plugins: [vue()]
})
