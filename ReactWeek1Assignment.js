class Student {
    constructor(name, email, community) {
        this.name = name;
        this.email = email;
        this.community = community;
    }
};

class Bootcamp {
    constructor(name, level, students = []) {
        this.name = name;
        this.level = level;
        this.students = students;
    }
    registerStudent(studentToRegister) {
        const checkEmail = this.students.filter(student => student.email === studentToRegister.email);

        if (checkEmail.length !== 0) {
            console.log("This email already exist")
        } else {
            console.log("This is a new email.")
            this.students.push(studentToRegister);
            return this.students;
        }
    }
};






