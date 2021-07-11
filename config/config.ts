import { defineConfig } from 'umi';
// import routes from './routes';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  hash: true,
  history: {
    type: 'hash',
  },
  // layout: {
  //   name: 'Ant Design Pro111',
  //   locale: true,
  //   layout: 'side',
  // },
  // routes: routes,
  fastRefresh: {},
});
