import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
// https://vitejs.dev/config/
export default defineConfig({
// base: "/Sakura-Kimonos-Front/",
plugins: [react()],
test: {
environment: "jsdom",
globals: true
}
})