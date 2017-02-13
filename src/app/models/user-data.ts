export class User {
    id = 0;
    name = "";
    addresses: Address[];
}

export class Address{
    city = "";
    email = '';
    weixin = ''
}

export const users:User[] = [
    {
        id:1,
        name:"matthew",
        addresses:[
            {
                city:"SH",
                email: "matthew@163.com",
                weixin : "123"
            },
            {
                city:"SY",
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
                city:"SY",
                email: "tina@163.com",
                weixin : "123"
            }
        ]
    }
]

export const cities = ['BJ', 'SH', 'SY', 'SZ'];