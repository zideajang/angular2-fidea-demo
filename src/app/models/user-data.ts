export class User {
    id = 0;
    name = "";
    addresses: Address[];
}

export class Address{
    email = '';
    weixin = ''
}

export const users:User[] = [
    {
        id:1,
        name:"matthew",
        addresses:[
            {
                email: "matthew@163.com",
                weixin : "123"
            },
            {
                email: "zidea@163.com",
                weixin : "456"
            }
        ]
    },
    {
        id:2,
        name:"tina",
        addresses:[
            {
                email: "tina@163.com",
                weixin : "123"
            },
            {
                email: "christinacd@163.com",
                weixin : "456"
            }
        ]
    }
]
