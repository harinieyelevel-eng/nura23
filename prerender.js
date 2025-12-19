import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const toAbsolute = (p) => path.resolve(__dirname, p);

const template = fs.readFileSync(toAbsolute('dist/client/index.html'), 'utf-8');

const { render } = await import('./dist/server/entry-server.js');

const routesToPrerender = [
    '/',
    '/about',
    '/services',
    '/services/skin-care',
    '/services/aesthetics',
    '/services/hair-treatment',
    '/services/wellness',
    '/product',
    '/academy',
    '/articles',
    '/contact',
    '/articles/future-skincare-2025',
    '/articles/traditional-body-spa',
    '/articles/ageless-beauty',
    '/articles/holistic-glow',
    '/articles/spa-day-2025',
    '/articles/beauty-trends-2025',
    '/articles/bridal-glow',
    '/articles/aesthetics-wellness',
    '/articles/skin-every-age',
    '/articles/self-care-success'
];

(async () => {
    // pre-render each route...
    for (const url of routesToPrerender) {
        const appHtml = render(url);
        const { html: renderedHtml, helmet } = appHtml;

        // Convert helmet data to string
        const helmetTitle = helmet.title.toString();
        const helmetMeta = helmet.meta.toString();
        const appHead = helmetTitle + helmetMeta;

        const html = template
            .replace('<!--app-head-->', appHead)
            .replace('<!--app-html-->', renderedHtml);

        const filePath = `dist/client${url === '/' ? '/index.html' : `${url}/index.html`}`;

        // ensure dir
        const dir = path.dirname(filePath);
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }

        fs.writeFileSync(toAbsolute(filePath), html);
        console.log('pre-rendered:', filePath);
    }
})();
