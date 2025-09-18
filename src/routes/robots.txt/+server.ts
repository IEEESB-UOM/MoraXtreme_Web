import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ url }) => {
	const siteUrl = url.origin;
	
	const robotsTxt = `User-agent: *
Allow: /

# Sitemap
Sitemap: ${siteUrl}/sitemap.xml

# Crawl-delay
Crawl-delay: 1`;

	return new Response(robotsTxt, {
		headers: {
			'Content-Type': 'text/plain',
			'Cache-Control': 'max-age=86400'
		}
	});
};