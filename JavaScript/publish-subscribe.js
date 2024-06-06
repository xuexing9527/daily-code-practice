// const emitter = new Emitter();
// const sub1 = emitter.subscribe('click',  (...args)=> console.log(args));
// const sub2 = emitter.subscribe('click', (...args)=> console.log(args));
// emitter.emit('click', '1', '2');
// sub1.release(); // 单独释放

class Emitter {
  constructor() {
    // 事件
    this.methodList = [
      {
        methodName: '',
        callback: [
          // 记录顺序
          { cb: () => {}, cbKey: new Date().getTime() }
        ]
      }
    ]

    // 这里要对事件 进行 标识， 确定删除的事件key
    this.subscribeEventCbKeyObj = {
      subscribeEventCbKey: '',
      release: () => { this.release(this.subscribeEventCbKeyObj.subscribeEventCbKey) }
    }
  }

  subscribe(methodName, callback) {
    let cbKey = new Date().getTime()
    this.methodList.map(item => {
      if (item.methodName === methodName) {
        console.log('对已有事件添加回调...', callback)
        item.callback.push({ cb: callback, cbKey })
      } else {
        // 注册事件 + callback
        console.log('没有找到事件名，执行注册事件...')
        this.lison(methodName, callback, cbKey)
      }
    })

    // 返回 可供 release 取消订阅
    return {
      release: () => {
        this.release(cbKey)
        cbKey = null
      }
    }
  }

  // 注册事件
  lison(methodName, cb, cbKey) {
    console.log('开始注册事件...')
    console.log('此时的 listen cb 为:', cb)
    console.log('此时的 listen cb JSON 为:', JSON.stringify(cb))
    if (!methodName) { throw Error('事件名不合法') }

    let hasMethodName = false
    this.methodList.forEach(item => {
      if (item.methodName === methodName) {
        hasMethodName = true
      }
    })

    if (!hasMethodName) this.methodList.push({ methodName, callback: [{ cb, cbKey }] })
  }

  // 触发
  emit(methodName, { ...args }) {
    this.methodList.forEach(item => {
      if (item.methodName === methodName) {
        item.callback.forEach(cbItem => {
          cbItem.cb({ ...args })
        })
      }
    })
  }

  // 取消
  release(subscribeEventCbKey) {
    // 通过 cbKey 对 methodList 取消事件，然后
    this.methodList.forEach((item, itemIndex) => {
      item.callback.forEach((cbIt) => {
        if (cbIt.cbKey === subscribeEventCbKey) {
          this.methodList[itemIndex].callback = this.methodList[itemIndex].callback.filter(i => i.cbKey !== subscribeEventCbKey)
        }
      })
    })
  }
}


const emitter = new Emitter();
const sub1 = emitter.subscribe('click', (...args) => console.log('sub1 回调执行了...', args));
const sub2 = emitter.subscribe('click', (...args) => console.log('sub2 回调执行了...', args));
emitter.emit('click', '1', '2');
sub1.release(); // 单独释放
emitter.emit('click', '1', '2');