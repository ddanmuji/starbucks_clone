console.log('test');

async function test() {
  const promise = Promise.resolve('test2');
  console.log(await promise);
}
test();
