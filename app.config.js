import 'dotenv/config';

export default {
  name: 'super-eats',
  slug: 'super-eats',
  version: '1.0.0',
  orientation: 'portrait',
  icon: './assets/icon.png',
  splash: {
    image: './assets/splash.png',
    resizeMode: 'contain',
    backgroundColor: '#ffffff',
  },
  updates: {
    fallbackToCacheTimeout: 0,
  },
  assetBundlePatterns: ['**/*'],
  ios: {
    supportsTablet: true,
    infoPlist: {
      // UIBackgroundModes: ['location', 'fetch'],
    },
  },
  android: {
    adaptiveIcon: {
      foregroundImage: './assets/adaptive-icon.png',
      backgroundColor: '#FFFFFF',
    },
  },
  web: {
    favicon: './assets/favicon.png',
  },
  description: '',
  extra: {
    yelpApiKey: process.env.__SUPER_EATS__YELP_API_KEY,
    googleApiKey: process.env.__SUPER_EATS__GOOGLE_API_KEY,
  },
};
