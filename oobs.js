

		//1 base class
		function Person(fName,lName){
			this.firstName=fName
			this.lastName=lName
		}

		Person.prototype.getFullName=function(){
			return this.firstName+ ' '+this.lastName
		}

		//2 Derived Class
		function Employee(fName,lName,eId){
			Person.call(this,fName,lName)
			this.empId=eId
		}

		Employee.prototype=Object.create(Person.prototype)
		Employee.prototype.constructor=Employee

		Employee.prototype.getEmployeeDetails=function(){
			return [this.empId,this.firstName,this.lastName]
		}


		var e1=new Employee('Eshan','Madake',101)
		alert(e1.getFullName())
		alert(e1.getEmployeeDetails())