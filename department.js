var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Department = (function () {
    function Department(name) {
        this.name = name;
    }
    Department.prototype.printName = function () {
        document.write("Department name is " + this.name);
    };
    return Department;
}());
var AccountingDepartment = (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment(name) {
        return _super.call(this, name) || this;
    }
    AccountingDepartment.prototype.printMeeting = function () {
        document.write("Meeting for department " + this.name);
    };
    return AccountingDepartment;
}(Department));
var FinanceDepartment = (function (_super) {
    __extends(FinanceDepartment, _super);
    function FinanceDepartment(name) {
        return _super.call(this, name) || this;
    }
    FinanceDepartment.prototype.printMeeting = function () {
        document.write("Meeting for department " + this.name);
    };
    return FinanceDepartment;
}(Department));
var accDept = new AccountingDepartment("Accounts Section");
accDept.printName();
accDept.printMeeting();
var finDept = new FinanceDepartment("Finance Section");
finDept.printName();
finDept.printMeeting();
