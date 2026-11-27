import express from 'express';

const app = express();

app.get('/', (_request, response) => {
  const version = process.env.APP_VERSION ?? 'development';

  response.type('html').send(`
    <h1>CI/CD Lab</h1>
    <h2>Welcome to the CI/CD Lab</h2>
    <h2>Version: ${version}</h2>
    <p>This is a simple application to demonstrate CI/CD concepts.</p>
    <p>Use the following endpoints to check the application status:</p>
    <p>The application is running.</p>
    <p>Version ${version}</p>
  `);
});

app.get('/api/version', (_request, response) => {
  const version = process.env.APP_VERSION ?? 'development';
  
  response.json({
    version,
  });
});

app.get('/api/nothing', (_request, response) => {
  response.status(404).json({
    error: 'Not Found',
  });
});

app.get('/api/health', (_request, response) => {
  response.json({
    status: 'ok',
  });
});

app.get('/api/version', (_request, response) => {
  response.json({
    version: process.env.APP_VERSION ?? 'development',
  });
});

export default app;
