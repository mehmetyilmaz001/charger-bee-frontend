import { Role, User } from "./types";

export const mockUserList: User[] = [
    {
        id: "01",
        name: "Mehmet",
        surname: "Yılmaz",
        fullName: "Mehmet Yılmaz",
        createdDate: "2023-08-07 07:07:07",
        email: "mehmetyilmaz001@gmail.com",
        phone: "+905327408401",
        profilePicUrl: "",
        role: [
            { id: "01", name: "user" },
            { id: "02", name: "admin" },
        ]
    },
    {
        id: "02",
        name: "Semih",
        surname: "Yavuz",
        fullName: "Semih Yavuz",
        createdDate: "2023-08-08 08:08:08",
        email: "semihyavuz@gmail.com",
        phone: "+905327408401",
        profilePicUrl: "",
        role: [
            { id: "02", name: "admin" },
        ]
    }
];

export const mockRoleList: Role[] = [
    {
        id: "01",
        name: "admin"
    },
    {
        id: "02",
        name: "user"
    },
    {
        id: "03",
        name: "teacher"
    },
]