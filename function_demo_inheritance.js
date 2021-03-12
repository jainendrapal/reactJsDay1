<!DOCTYPE html>
<html>
<head>
	<title></title>
	<script type="text/javascript">

		//1
		function Car(){}
		Car.prototype.speed="Car Speed"
		Car.prototype.setSpeed=function(speed){
			this.speed=speed
			alert("car Speed is changed")
		}

		Car.prototype.showCarDetails=function(){
			alert("Car Details")
		}

		//2

		function Ferrari(){}
		
		Ferrari.prototype=new Car();
		Ferrari.prototype.constructor=Ferrari

		Ferrari.prototype.setSpeed=function(speed){

			this.speed=speed
			alert("Ferrari speed is changed")
		}

		

		var c1=new Ferrari();
		c1.setSpeed(100)
		c1.showCarDetails();	





	</script>
</head>
<body>

</body>
</html>