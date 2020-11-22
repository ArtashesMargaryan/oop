let data = {
    'useNname': 'Artur',
    'login': 'Artur123',
    'password': '******'
}
let userBase = {
    1: {
        'id': 1,
        'login': 'Artashes',
        'password': 'passArtashes'
    },
    2: {
        'id': 2,
        'login': 'Vardan',
        'password': 'passVardan'
    },
    3: {
        'id': 3,
        'login': 'Aram',
        'password': 'passVardan'
    }
}
class User {
    constructor(data = 'null', base = 'null') {
        this.userName = data.useNname;
        this.login = data.login;
        this.password = data.password;
        this.base = base;
    }
    checkLogin(login) {
        for (let key in this.base) {
            if (login == this.base[key]['login']) {
                return parseInt(key);
            } else { return true }
        }
    }
    logIn(login, password) {
        const idKey = this.checkLogin(login)

        if (Number.isInteger(idKey)) {
            if (this.base[`${idKey}`]['password'] === password) {
                return `${idKey}&login`
            } else {
                return "dontLogin";
            }

        } else { return false }
    }

}
class Student extends User {
    constructor() {
        super();
        this.status = 'student';
    }
    set UserName(params) {
        this.userName = params;
        return 'ok';
    }
    get UserName() {
        return this.userName;
    }
}
//const user = new User(data1, userBase1)
const stud = new Student();
stud.UserName = "Vandam"
console.warn(stud);
