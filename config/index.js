const dev = process.env.NODE_ENV !== 'production';

export const hostAPI = dev ? 'http://localhost:3000/api/' : 'https://prod.server.com';
