import { app_create, app_run } from "./core/app.js";
import { account_router } from "./routes/account.js";
import { index_router } from "./routes/index.js";
import { planner_router } from "./routes/planner.js";
import { wiki_router } from "./routes/wiki.js";

const app = app_create();

app.use('/', index_router);
app.use('/planner', planner_router);
app.use('/wiki', wiki_router);
app.use('/account', account_router);

app_run(app);
