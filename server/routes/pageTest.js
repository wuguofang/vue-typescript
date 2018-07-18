KY.onGet('/', async (ctx, next) => {
   ctx.body = 'you are visting the page index';
});

KY.onGet('/t1/user', async (ctx, next) => {
  ctx.body = 'you are visting the page /t1/user';
});

KY.onGet('/t2/:id', async (ctx, next) => {
  ctx.body = 'you are visiting the path /t2/' + ctx.params.id;
});

KY.onGet('/t3', async ctx => {
  ctx.redirect('/');
});

KY.onGet('/t4', async (ctx, next) => {
  ctx.body = 'you are visiting the path t4,and the query.id is' + ctx.request.query.id;
});

KY.onGet('/index', async (ctx) => {
  var r = await KY.httpClient.mock();
  // KY.logger(JSON.stringify(r));
  ctx.render('views/index.html', {
    title: 'index',
    list: r.data.projects,
    // list: [],
  });
});

KY.onGet('/step', async (ctx) => {
  ctx.render('views/test/step.html', {
    title: 'yes'
  });
});
