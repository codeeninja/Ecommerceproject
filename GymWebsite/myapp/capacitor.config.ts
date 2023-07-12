import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.firnfineapp.app',
  appName: 'fitnfineapp',
  webDir: 'build',
  server: {
    androidScheme: 'https'
  }
};

export default config;
