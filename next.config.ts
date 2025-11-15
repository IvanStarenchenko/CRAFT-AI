// next.config.ts
import withBundleAnalyzer from '@next/bundle-analyzer'
import type { NextConfig } from 'next'
import path from 'path'

const withAnalyzer = withBundleAnalyzer({
	enabled: process.env.ANALYZE === 'true',
})

const nextConfig: NextConfig = {
	reactStrictMode: true,
	swcMinify: true,

	webpack: (config, { isServer }) => {
		config.module?.rules?.push({
			test: /\.svg$/i,
			issuer: /\.[jt]sx?$/,
			use: ['@svgr/webpack'],
		})

		config.resolve.alias = {
			...(config.resolve.alias || {}),
			'@components': path.resolve(__dirname, 'src/components'),
			'@utils': path.resolve(__dirname, 'src/utils'),
		}

		return config
	},
}

export default withAnalyzer(nextConfig)
