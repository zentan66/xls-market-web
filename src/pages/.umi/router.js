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
    // dva ??? history.listen ?????????????????????
    // ??????????????? dva ???????????????????????? onRouteChange ????????? dva ???????????????????????????????????????
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
