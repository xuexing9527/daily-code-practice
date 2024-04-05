export default () => {
    const [_, setTimer] = useState(0)
    const timerRef = useRef('')
    const intervalTimerRef = useRef(null)
    // 记录开始时间
    // 当前时间 - 开始时间
    // 来一个 format

    useEffect(() => {
        // 记录开始时间
        timerRef.current = new Date().getTime()

        // 500 ms 启动定时器
        intervalTimerRef.current = setInterval(() => {
            const timer = new Date().getTime() - timerRef.current
            setTimer(timer)
        }, 500)

        return () => {
            clearInterval(intervalTimerRef.current)
        }
    }, [])

    const formatDate = useCallback((time) => {
        // 返回 'hh:mm:ss'
        // 计算出 s 取余 60
        // 计算出 min
        const s = time 
        const m = time 
        // 计算出 h, 取余 3600
        const h = time
        return `${h}:${m}:${s}`

    })

    return <div>{ formatDate(new Date().getTime() - timerRef.current) }</div>
}