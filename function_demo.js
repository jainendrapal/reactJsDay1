<!DOCTYPE html>
<html>
<head>
	<title></title>
	<script type="text/javascript">

		//Construction Version
		function Complex(real,imag){
			this.real=real;
			this.imag=imag;

			// this.showValues=function(){
			// 	alert("VAlues are"+this.real+" Imag "+this.imag)
			// }
		}

		Complex.prototype.showValues=function(){
			alert("Values are"+this.real+" Imag "+this.imag)
		}

		var c1=new Complex(10,20);
		//c1.showValues();

		var coll=new Array();
		coll.push(c1)
		coll.push(new Complex(200,300))
		coll.push(new Complex(400,500))
		coll.push(new Complex(200,300))
		coll.push(new Complex(300,800))

		for(i in coll){
			coll[i].showValues();
		}

	</script>
</head>
<body>

</body>
</html>