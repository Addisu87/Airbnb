/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				hostname: 'bstgrdyurhlpzkfyoefz.supabase.co',
				protocol: 'https',
				port: '',
			},
		],
	},
};

export default nextConfig;
