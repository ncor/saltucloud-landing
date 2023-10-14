const withNextIntl = require('next-intl/plugin')(
    './i18n.ts'
);

/** @type {import('next').NextConfig} */
const nextConfig = withNextIntl({
    output: 'standalone'
})

module.exports = nextConfig
