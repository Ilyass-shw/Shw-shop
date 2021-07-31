import 'whatwg-fetch';
import { setupServer } from 'msw/node';
import { handlers } from './mocks/handlers';
const server = setupServer(...handlers);
beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

export { server };
