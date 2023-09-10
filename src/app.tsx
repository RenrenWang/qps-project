import router from '@/router';
import { useRoutes } from 'react-router-dom';

export default () => {
  const routes = useRoutes(router);
  return routes;
};
