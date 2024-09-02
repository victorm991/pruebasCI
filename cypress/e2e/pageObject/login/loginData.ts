interface credentials{
    username: string,
    password: string

}
export class loginData{
    static invalidCredentials: credentials ={
        username: "abc",
        password: "abc123"
    }
    static validCredentiasl: credentials = {
        username: "Admin",
        password: "admin123"
    }
}

export default loginData;