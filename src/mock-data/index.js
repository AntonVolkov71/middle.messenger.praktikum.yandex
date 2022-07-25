const existUsers = [
    {id: 1,
        login: 'Anton',
        password: '123456',
        email: 'volk@ura.ru',
        name: 'Anton',
        secondName: 'Volkov',
        nameInChat: 'Aleshka',
        phone: '+7(999)999 99 99',
        avatar: 'https://images.unsplash.com/photo-1520542059400-dc9d1d8ae9de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
    },
]

const sizeChats = 20;

function getHoursMinutes() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const addZeroMinutes = minutes.toString().length < 2 ? `0${minutes}` : minutes

    const result = `${hours}:${addZeroMinutes}`
    return result
}

const urlAvatars = [
    'https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80',
    'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1143&q=80',
    'https://images.unsplash.com/photo-1573865526739-10659fec78a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1915&q=80',
    'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80',
    'https://images.unsplash.com/photo-1495360010541-f48722b34f7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80',
    'https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    '',
    'https://images.unsplash.com/photo-1537033206914-9d3551ff8103?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    '',
    'https://images.unsplash.com/photo-1527153857715-3908f2bae5e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y293fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    '',
    'https://images.unsplash.com/photo-1439434768192-c60615c1b3c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YnVsbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
]

function randomString() {
    return (Math.random() + 1).toString(36).substring(7);
}

function createMockChats(sizeChats) {
    return Array(sizeChats).fill({}).map((_, i) => (
        {
            id: i,
            name: randomString(),
            dataLastMessage: {
                content: i % 2 ? randomString() : 'Изображение',
                time: getHoursMinutes(),
                ofUnread: Math.floor(Math.random() * 10)
            },
            avatar: urlAvatars[i],
            active: false
        }
    ))
}

function activeChatsOptions() {
    return [
        {
            id: 0,
            linkUser: {
                id: 2,
                name: 'Vasya',
                avatar: urlAvatars[1]
            },
            messages: [
                {
                    id: 1,
                    content: {
                        text: 'message not my',
                        image: null
                    },
                    time: getHoursMinutes(),
                    author: {
                        id: 2,
                    },
                },
                {
                    id: 2,
                    content: {
                        text: 'messagedskajdklsajlkdjaskjdlkasjdlkjaskdjaljdlkajd;klajflk;sjdklgjfd;gkjsdfkgjdaskfkhajk fhskdjfh ljsdhfljk hsdkjlfh sldkjhf ksjdhdf kjshdfjkhs djfhdkjhf skjdhfksh ldfhsl kfsdkjhf jkshdf lhsdfkh skdhf lshdfk jshdlfh sldkjhf sldhfl shdflj hsdlkfh slkdhf lskdhflkshdf lkjhsdk; dlkjgd;flkjgs;lkdfjgl;kdfsjl my',
                        image: null
                    },
                    time: getHoursMinutes(),
                    author: {
                        id: 1,
                    },
                    unread: true
                },
                {
                    id: 3,
                    content: {
                        text: null,
                        image: urlAvatars[5]
                    },
                    time: getHoursMinutes(),
                    author: {
                        id: 2,
                    },
                },
                {
                    id: 4,
                    content: {
                        text: 'message my',
                        image: null
                    },
                    time: getHoursMinutes(),
                    author: {
                        id: 1,
                    },
                    unread: false
                },
            ]
        },
    ]
}

const chats = createMockChats(sizeChats)

export {existUsers, chats, activeChatsOptions}