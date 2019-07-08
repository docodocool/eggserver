// 在每一个客户端连接或者退出时发生作用，故而我们通常在这一步进行授权认证，对认证失败的客户端做出相应的处理
module.exports = () => async (ctx, next) => {
  const { socket } = ctx;
  console.log('a user connected: ', socket.id);
  ctx.socket.emit('res', 'connected!');
  await next();
  // execute when disconnect
  console.log('disconnected!');
};
