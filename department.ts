abstract class Department {

    name: string;
    constructor (name) {
        this.name=name;
    }
    printName(): void { 
        document.write(`Department name is ${this.name}`); 
    }
    abstract printMeeting(): void;

}

class AccountingDepartment extends Department {
    
    constructor(name){
        super(name);
    }
    printMeeting(){
         document.write(`Meeting for department ${this.name}`);
    }
}

class FinanceDepartment extends Department {
    
    constructor(name){
        super(name);
    }
    printMeeting(){
         document.write(`Meeting for department ${this.name}`);
    }
}

var accDept=new AccountingDepartment("Accounts Section");
accDept.printName();
accDept.printMeeting();

var finDept=new FinanceDepartment("Finance Section");
finDept.printName();
finDept.printMeeting();