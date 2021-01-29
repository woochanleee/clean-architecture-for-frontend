import * as express from 'express';
import * as cors from 'cors';

const app: express.Express = express();
const router: express.Router = express.Router();

let toggle = true;

function changeToggle() {
  toggle = !toggle;
}

router.post('/auth', (req: express.Request, res: express.Response) => {
  changeToggle();
  toggle ? res.status(200).json({
    accessToken: 'jwt.jwt.jwt',
  }) : res.status(401).send();
});

const ONE_DAY = 86400000;

const todos = [
  {
    id: 1,
    author: 'woochanleee',
    content: 'clean',
    deadline: new Date(Date.now() + ONE_DAY * -1),
  },
  {
    id: 2,
    author: 'woochanleee',
    content: 'architecture',
    deadline: new Date(Date.now()),
  },
  {
    id: 3,
    author: 'woochanleee',
    content: 'for',
    deadline: new Date(Date.now() + ONE_DAY),
  },
  {
    id: 4,
    author: 'woochanleee',
    content: 'frontend',
    deadline: new Date(Date.now() + ONE_DAY * 2),
  },
];

interface TodoRequest {
  author: string;
  content: string;
}

router.get('/todos', (req: express.Request, res: express.Response) => {
  res.status(200).json({ todos })
});

router.get('/', (req: express.Request, res: express.Response) => {
  res.send("Hello, World!");
})

app.use(cors());
app.use(express.json());
app.use(router);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
