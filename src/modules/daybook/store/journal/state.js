
export default () => ({
    isLoading: true,
    entries: [ 
        {
            id: new Date().getTime(),
            date: new Date().toDateString(),
            text: 'Eiusmod qui qui fugiat tempor adipisicing ex id laborum consequat.',
            picture: null
        },
        {
            id: new Date().getTime() + 1000,
            date: new Date().toDateString(),
            text: 'Anim qui eiusmod tempor labore aliquip irure velit consectetur nisi aute voluptate non nulla magna.',
            picture: null
        },
        {
            id: new Date().getTime() + 2000,
            date: new Date().toDateString(),
            text: 'Veniam do est minim ea incididunt enim magna id nulla occaecat sunt ipsum et.',
            picture: null
        }
    ]
})