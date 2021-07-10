import React from 'react';
import {
  Router as DefaultRouter,
  Route,
  Switch,
  StaticRouter,
} from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/lib/renderRoutes';
import history from '@@/history';
import RendererWrapper0 from '/Users/cherry/Desktop/workspaces/xls-market-web/src/pages/.umi/LocaleWrapper.jsx';
import { routerRedux, dynamic as _dvaDynamic } from 'dva';

const Router = routerRedux.ConnectedRouter;

const routes = [
  {
    path: '/',
    component: __IS_BROWSER
      ? _dvaDynamic({
          component: () =>
            import(/* webpackChunkName: "layouts__index" */ '../../layouts/index'),
        })
      : require('../../layouts/index').default,
    routes: [
      {
        '0': {
          path: '/',
          component: __IS_BROWSER
            ? dynamic({
                loader: () =>
                  import(/* webpackChunkName: "undefined" */ '../../../../pages/index'),
              })
            : require('../../../../pages/index').default,
        },
        '1': {
          path: '/dashboard',
          component: __IS_BROWSER
            ? dynamic({
                loader: () =>
                  import(/* webpackChunkName: "undefined" */ '../../../../pages/dashboard/index'),
              })
            : require('../../../../pages/dashboard/index').default,
        },
        '2': {
          path: '/workbench',
          component: __IS_BROWSER
            ? dynamic({
                loader: () =>
                  import(/* webpackChunkName: "undefined" */ '../../../../pages/workbench/index'),
              })
            : require('../../../../pages/workbench/index').default,
        },
        exact: true,
        _title: 'xls-market-web',
        _title_default: 'xls-market-web',
      },
      {
        component: () =>
          React.createElement(
            require('/Users/cherry/Desktop/workspaces/xls-market-web/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
              .default,
            { pagesPath: 'src/pages', hasRoutesInConfig: true },
          ),
        _title: 'xls-market-web',
        _title_default: 'xls-market-web',
      },
    ],
    _title: 'xls-market-web',
    _title_default: 'xls-market-web',
  },
  {
    component: () =>
      React.createElement(
        require('/Users/cherry/Desktop/workspaces/xls-market-web/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
          .default,
        { pagesPath: 'src/pages', hasRoutesInConfig: true },
      ),
    _title: 'xls-market-web',
    _title_default: 'xls-market-web',
  },
];
window.g_routes = routes;
const plugins = require('umi/_runtimePlugin');
plugins.applyForEach('patchRoutes', { initialValue: routes });

export { routes };

export default class RouterWrapper extends React.Component {
  unListen() {}

  constructor(props) {
    super(props);

    // route change handler
    function routeChangeHandler(location, action) {
      plugins.applyForEach('onRouteChange', {
        initialValue: {
          routes,
          location,
          action,
        },
      });
    }
    this.unListen = history.listen(routeChangeHandler);
    // dva 中 history.listen 会初始执行一次
    // 这里排除掉 dva 的场景，可以避免 onRouteChange 在启用 dva 后的初始加载时被多执行一次
    const isDva =
      history.listen
        .toString()
        .indexOf('callback(history.location, history.action)') > -1;
    if (!isDva) {
      routeChangeHandler(history.location);
    }
  }

  componentWillUnmount() {
    this.unListen();
  }

  render() {
    const props = this.props || {};
    return (
      <RendererWrapper0>
        <Router history={history}>{renderRoutes(routes, props)}</Router>
      </RendererWrapper0>
    );
  }
}
