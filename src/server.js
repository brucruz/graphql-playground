import app from './app';

app.listen({ port: 4000 }).then(() => {
  console.log('Server is running in http://localhost:4000');
}).catch((e) => console.log(e));
