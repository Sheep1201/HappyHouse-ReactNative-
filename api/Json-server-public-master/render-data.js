const faker = require('faker');
const fs = require('fs');
faker.locale = "vi";
const randomUserList = (n)=>{
    const userList = [];
    if(n <= 0) return [];
    //Loop
    Array.from(new Array(n)).forEach(()=>{
        const _class = {
            id:faker.random.uuid(),
            username:faker.internet.email(),
            password: faker.internet.password()           
        }
        userList.push(_class)
    })
    return userList;
}
const randomRoomList = (n)=>{
    const roomList = [];
    if(n <= 0) return [];
    //Loop
    
    Array.from(new Array(n)).forEach(()=>{
        const _class = {
            id:faker.random.uuid(),
            nameroom:faker.internet.domainName(),
            image: faker.image.abstract(1234, 2345),
            address:faker.internet.domainName(),
            price:faker.random.number({min: 2.00, max: 10.00}),
        }
        roomList.push(_class)
    })
    return roomList;
}

(()=>{
    const userList= randomUserList(10)
    const roomList = randomRoomList(40)

    const db = {
        users:userList,
        rooms:roomList
    };
    //write db obj to db.json
    fs.writeFile('./db.json',JSON.stringify(db),()=>{
        console.log('Write successfully')
    });
})()