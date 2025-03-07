import { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const basePath = '/app-path'
const basePathConfig: NextConfig = {
  basePath,
  assetPrefix: basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: basePath,
        basePath: false,
        permanent: false
      }
    ]
  }
}

const nextConfig: NextConfig = {
  output: 'standalone',
  ...basePathConfig,
  experimental: {
    optimizePackageImports: [
      '@mantine/core',
      '@mantine/hooks',
      '@mantine/dates',
      '@mantine/form',
      '@mantine/modals',
      '@mantine/notifications'
    ]
  }
}

const withNextIntl = createNextIntlPlugin('./src/plugins/i18n/request.ts')
export default withNextIntl(nextConfig)
