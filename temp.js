<!DOCTYPE html>
<html>
<head>
<style>
   body{
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
   }
   input,span{
      font-size: 20px;
   }
</style>
</head>
<body>
<h1>Temperature Converter</h1>
<h2>Type Temperature in celcius to convert it into fahrenheit</h2>
<p>
<label>Celcius</label>
<input id="inputKG" type="number" placeholder="Celcius"
oninput="CtoFConverter(this.value)" onchange="CtoFConverter(this.value)">
</p>
<p>Fahrenheit: <span class="fahrenheit"></span></p>
<script>
   function CtoFConverter(temp) {
      document.querySelector(".fahrenheit").innerHTML=(temp-32)/1.8;
   }
</script>
</body>
</html>