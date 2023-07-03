import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';
import reactRefresh from "@vitejs/plugin-react-refresh";
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), reactRefresh(), vanillaExtractPlugin()],
});
