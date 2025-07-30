 function convertTemperature() {
      const temp = parseFloat(document.getElementById("temperature").value);
      const from = document.getElementById("from").value;
      const to = document.getElementById("to").value;
      let result;

      if (isNaN(temp)) {
        document.getElementById("result").innerText = "Please enter a valid temperature!";
        return;
      }

      if (from === to) {
        result = temp;
      } else {
        if (from === "C") {
          result = to === "F" ? (temp * 9/5) + 32 : temp + 273.15;
        } else if (from === "F") {
          result = to === "C" ? (temp - 32) * 5/9 : (temp - 32) * 5/9 + 273.15;
        } else if (from === "K") {
          result = to === "C" ? temp - 273.15 : (temp - 273.15) * 9/5 + 32;
        }
      }

      document.getElementById("result").innerText = `${temp}° ${from} = ${result.toFixed(2)}° ${to}`;
    }

    function resetFields() {
      document.getElementById("temperature").value = "";
      document.getElementById("from").value = "C";
      document.getElementById("to").value = "C";
      document.getElementById("result").innerText = "";
    }