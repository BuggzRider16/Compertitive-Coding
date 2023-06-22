const IdInsertor = (data,subArrayKey) => {
    return data.map(item => ({
        ...item,
        id: Math.floor((Math.random() * 1000) + 1),
        [subArrayKey]: IdInsertor(item.replies)
    }))
}
const data = [
    {
        comment: "It is good",
        author: "abhishek1",
        replies: [
            {
                comment: "this is what you think",
                author: "rohit1",
                replies: []
            },
            {
                comment: "this is what you think",
                author: "rohit2",
                replies: [
                    {
                        comment: "this is what you think",
                        author: "rohit2.1",
                        replies: []
                    },
                    {
                        comment: "this is what you think",
                        author: "rohit2.2",
                        replies: []
                    }
                ]
            },
            {
                comment: "this is what you think",
                author: "rohit3",
                replies: []
            }
        ]
    },
    {
        comment: "It is good",
        author: "abhishek2",
        replies: [
            {
                comment: "this is what you think",
                author: "rohit2.1",
                replies: []
            },
            {
                comment: "this is what you think",
                author: "rohit",
                replies: [
                    {
                        comment: "this is what you think",
                        author: "rohit",
                        replies: []
                    },
                    {
                        comment: "this is what you think",
                        author: "rohit",
                        replies: []
                    }
                ]
            },
            {
                comment: "this is what you think",
                author: "rohit",
                replies: []
            }
        ]
    },
    {
        comment: "It is good",
        author: "abhishek",
        replies: [
            {
                comment: "this is what you think",
                author: "rohit",
                replies: []
            },
            {
                comment: "this is what you think",
                author: "rohit",
                replies: [
                    {
                        comment: "this is what you think",
                        author: "rohit",
                        replies: []
                    },
                    {
                        comment: "this is what you think",
                        author: "rohit",
                        replies: []
                    }
                ]
            },
            {
                comment: "this is what you think",
                author: "rohit",
                replies: []
            }
        ]
    }
]
console.log(IdInsertor(data,'replies')) 