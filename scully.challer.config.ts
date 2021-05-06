import {ScullyConfig} from '@scullyio/scully';

export const config: ScullyConfig = {
  projectRoot: './src',
  projectName: 'challer',
  outDir: './dist/static',
  routes: {},
  extraRoutes: [
    '/',
    '/home',
    '/about-us',
    '/policy',
    '/privacypolicy',
    '/legal',
    '/eula',
    '/business',
    '/vision',
    '/contact',
    '/contact-cv',
    '/home-challer',
    '/story',
    '/mision',
    '/ranking',
    '/download',
  ],
  puppeteerLaunchOptions: {
    args: [
      '--disable-gpu',
      '--renderer',
      '--no-sandbox',
      '--no-service-autorun',
      '--no-experiments',
      '--no-default-browser-check',
      '--disable-dev-shm-usage',
      '--disable-setuid-sandbox',
      '--disable-setuid-sandbox',
      '--no-first-run',
      '--no-zygote',
      '--single-process',
      '--disable-extensions'
    ]
  }
};
