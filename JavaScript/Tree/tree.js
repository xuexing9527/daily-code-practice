const getTree = () => JSON.parse(JSON.stringify({
    key: '1',
    pKey: '0',
    children: [
        {
            key: '1_1',
            pKey: '1',
            children: [
                {
                    key: '1_1_1',
                    pKey: '1_1',
                    children: [
                        {
                            key: '1_1_1_1',
                            pKey: '1_1_1',
                            children: [
                                {
                                    key: '1_1_1_1_1',
                                    pKey: '1_1_1_1'
                                }
                            ]
                        },
                        {
                            key: '1_1_1_2',
                            pKey: '1_1_1_1'
                        },
                        {
                            key: '1_1_1_3',
                            pKey: '1_1_1_1'
                        },
                    ]
                },
                {
                    key: '1_1_2',
                    pKey: '1_1',
                },
                {
                    key: '1_1_3',
                    pKey: '1_1',
                },
            ]
        },
        {
            key: '1_2',
            pKey: '1',
            children: [
                {
                    key: '1_2_1',
                    pKey: '1_2',
                    children: [
                        {
                            key: '1_2_1_1',
                            pKey: '1_2_1',
                        }
                    ]
                }
            ]
        },
        {
            key: '1_3',
            pKey: '1',
            children: [
                {
                    key: '1_3_1',
                    pKey: '1_3',
                    children: [
                        {
                            key: '1_3_1_1',
                            pKey: '1_3',
                            children: [
                                {
                                    key: '1_3_1_1_1',
                                    pKey: '1_3_1_1'
                                }
                            ]
                        },
                        {
                            key: '1_3_1_2',
                            pKey: '1_3_1'
                        },
                        {
                            key: '1_3_1_3',
                            pKey: '1_3_1'
                        },
                    ]
                },
                {
                    key: '1_3_2',
                    pKey: '1_3',
                },
                {
                    key: '1_3_3',
                    pKey: '1_3',
                },

            ]
        },
        {
            key: '1_4',
            pKey: '1',
            children: [
                {
                    key: '1_4_1',
                    pKey: '1_4',
                },
                {
                    key: '1_4_2',
                    pKey: '1_4',
                    children: [
                        {
                            key: '1_4_2_1',
                            pKey: '1_4_2',
                        },
                    ]
                },

            ]
        }

    ]
}))

module.exports = getTree