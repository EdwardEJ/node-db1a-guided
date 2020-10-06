const express = require('express');
const helmet = require('helmet'); //provides security defaults

const server = express();

server.use(helmet());
server.use(express.json()); //middleware built into express

server.get('/', (req, res) => {
  res.status(200).json({ hello: 'hi' });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Running on http://localhost:${PORT}`));
