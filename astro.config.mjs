// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeRapide from 'starlight-theme-rapide'
import starlightBlog from 'starlight-blog'
import starlightVideos from 'starlight-videos'
import mermaid from 'astro-mermaid';
import plantuml from 'astro-plantuml';

// https://astro.build/config
export default defineConfig({
	integrations: [
		mermaid(),
		plantuml(),
		starlight({
			plugins: [starlightThemeRapide(), starlightBlog(), starlightVideos()],
			title: 'Club Algoritmia CUValles',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight'}],
			defaultLocale: 'es',
			sidebar: [
				{
					label: 'Programación Competitiva',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Introducción', slug: 'intro' },
						{ label: 'Programación Competitiva?', slug: 'intro/cp' },
						{ label: 'Reglas del ICPC', slug: 'intro/reglas' },
						{ label: 'Veredictos del Juez', slug: 'intro/juez' },
					],
				},
			],
		}),
	],
});
