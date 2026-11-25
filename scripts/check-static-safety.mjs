import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const read = (path) => readFile(new URL(path, import.meta.url), 'utf8');
const packageText = await read('../package.json');
const pkg = JSON.parse(packageText);
const index = await read('../index.html');
const dependabot = await read('../.github/dependabot.yml');
const securityContact = await read('../public/.well-known/security.txt');
const robots = await read('../public/robots.txt');
const notFound = await read('../public/404.html');

assert.equal(pkg.scripts.check, 'node scripts/check-static-safety.mjs');
assert.ok(index.includes('<html lang="en">'), 'HTML language must be set');
assert.ok(index.includes('<meta name="description"'), 'SEO description is missing');
assert.ok(index.includes('Content-Security-Policy'), 'CSP meta policy is missing');
assert.ok(index.includes("script-src 'self'"), 'CSP must restrict scripts to same-origin');
assert.ok(index.includes("object-src 'none'"), 'CSP must disable object content');
assert.ok(index.includes('https://fonts.googleapis.com'), 'Google Fonts style source must be allowed');
assert.ok(dependabot.startsWith('version: 2\\nupdates:') === false, 'Dependabot must use actual line breaks');
assert.ok(dependabot.startsWith('version: 2\nupdates:'), 'Dependabot version/update structure is missing');
assert.ok(!packageText.endsWith('\\n'), 'package.json must not end in a literal backslash-n');
assert.ok(securityContact.startsWith('Contact: mailto:'), 'security.txt contact is missing');
assert.ok(securityContact.includes('Expires:'), 'security.txt expiry is missing');
assert.ok(robots.includes('User-agent: *'), 'robots.txt is missing its user-agent');
assert.ok(notFound.includes('href="./"'), '404 page must provide a return-to-home link');
console.log('Static safety checks passed.');
