import { paraglide } from '@inlang/paraglide-js-adapter-sveltekit/vite'
import { sveltekit } from '@sveltejs/kit/vite'
import { enhancedImages } from '@sveltejs/enhanced-img'
import { defineConfig } from 'vitest/config'

export default defineConfig({
	plugins: [
		paraglide({
			project: './project.inlang',
			outdir: './src/paraglide'
		}),

		enhancedImages(),
		sveltekit()
	],
	test: {
		include: ['src/**/*.test.ts']
	}
})
