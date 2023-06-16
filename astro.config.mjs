import {defineConfig} from "astro/config";
import sitemap from '@astrojs/sitemap';
import vue from "@astrojs/vue";
import tailwind from "@astrojs/tailwind";
import svgLoader from "vite-svg-loader";
import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
    site: 'https://main--maison-painted-door.netlify.app',
    integrations: [
        sitemap({
            canonicalURL: 'https://main--maison-painted-door.netlify.app'
        }),
        vue(),
        tailwind(),
        partytown({
            // Adds dataLayer.push as a forwarding-event.
            config: {
                forward: ['dataLayer.push', 'gtag'],
            },
        }),
    ],
    vite: {
        plugins: [svgLoader()]
    }
});