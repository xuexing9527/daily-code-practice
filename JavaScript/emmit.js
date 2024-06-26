// 写一个方法，一边从本地取，一边 调用getRequiredInfo()
const getInof = async () => {
    return new Promise((resove, reject) => {
        let timer = null
        const info  = getLocal() // 从本地取
        let ms = new Date().getTime()

        timer = setInterval(async () => {
            if (info) {
                resove(info)
                clearInterval(timer)
                timer = null
            } else {
                const info = await getRequiredInfo()
            }

            if (new Date().getTime() - ms > 1500) {
                reject('超时')
            }
        }, 200)

    })
}

const infoPromise = await getInfo
infoPromise().then((info) => {
    getLogin()
})