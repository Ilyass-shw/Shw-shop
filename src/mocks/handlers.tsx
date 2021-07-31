// src/mocks/handlers.js
import { rest } from 'msw';
import data from '../Data';

export const handlers = [
  rest.get('https://ShopData', (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        data,
      }),
    );
  }),
  //   rest.get('*', (req, res, ctx) => {
  //     console.error(`Please add request handler for ${req.url.toString()}`);
  //     return res(
  //       ctx.status(500),
  //       ctx.json({ error: 'You must add request handler.' }),
  //     );
  //   }),
];
