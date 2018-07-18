KY.onGet('/t5', async (ctx, next) => {
  ctx.send({
    name: 'you are visiting the path t5',
    mobile: '139*****245'
  });
});

KY.onGet('/t6', async (ctx, next) => {
  var r = await KY.httpClient.mock();
  ctx.send(r);
});

KY.onGet('/t7', async (ctx, next) => {
  var params = ctx.request.query;
  var r = await KY.httpClient.query(params);
  ctx.send(r);
});

KY.onGet('/t8', async (ctx, next) => {
  var params = ctx.request.query;
  var r = await KY.httpClient.mockPost(params);
  ctx.send(r);
});
