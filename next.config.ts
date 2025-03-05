import { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const nextConfig: NextConfig = {
  output: 'standalone',
  basePath: '/',
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
