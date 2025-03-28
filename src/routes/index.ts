import { Hono } from 'hono';

import { ApiResponse } from '@/utils/ApiResponse';
import { utilsRouter } from './utils/urls';
import { productRouter } from './product';
import { adminRouter } from './admin';

const app = new Hono();

export const routes = app
  .get('/health-check', (c) => {
    console.log('health check');
    return c.json(
      new ApiResponse(200, {
        status: 'api working, live and kicking!',
      })
    );
  })
  .route('/admin', adminRouter)
  .route('/utils', utilsRouter)
  .route('/product', productRouter);

export type AppType = typeof routes;
