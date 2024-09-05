new Promise(function() { console.log('为什么这里会直接执行？这不该是个回调吗？'); })
new Date(() => {console.log('这里会执行吗？')})

// 这里说明 promise 接收的回调函数 会 在 new 的过程中执行一次，这是为什么呢？