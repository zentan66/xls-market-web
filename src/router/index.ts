import { IRoute } from '@umijs/types';
import Home from './home';

const routes: Array<IRoute> = [
  {
    path: '/',
    component: '../layouts',
    routes: [{ ...Home }],
  },
];

export default routes;
