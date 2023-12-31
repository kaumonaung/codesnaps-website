const withAnalyzer = require('@next/bundle-analyzer');
const { withContentlayer } = require('next-contentlayer');

const IS_PRODUCTION = process.env.NODE_ENV === 'production';
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: getRemotePatterns(),
  },
};

module.exports = withAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})(withContentlayer(nextConfig));

function getRemotePatterns() {
  // add here the remote patterns for your images
  const remotePatterns = [
    {
      protocol: 'https',
      hostname: 'dummyimage.com',
    },
    {
      protocol: 'https',
      hostname: 'img.logoipsum.com',
    },
    {
      protocol: 'https',
      hostname: 'ablcaocvmgtcodafwvoe.supabase.co',
    },
  ];

  if (SUPABASE_URL) {
    const hostname = new URL(SUPABASE_URL).hostname;
    remotePatterns.push({
      protocol: 'https',
      hostname,
    });
  }

  return IS_PRODUCTION
    ? remotePatterns
    : [
        {
          protocol: 'http',
          hostname: '127.0.0.1',
        },
        {
          protocol: 'http',
          hostname: 'localhost',
        },
        {
          protocol: 'https',
          hostname: 'dummyimage.com',
        },
        {
          protocol: 'https',
          hostname: 'img.logoipsum.com',
        },
        {
          protocol: 'https',
          hostname: 'ablcaocvmgtcodafwvoe.supabase.co',
        },
      ];
}
