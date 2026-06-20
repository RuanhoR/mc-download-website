import data from './routes.json';

export interface RouteInfo {
  path: string;
  title: string;
  changefreq: string;
  priority: string;
}

export const routeInfos: RouteInfo[] = data;
