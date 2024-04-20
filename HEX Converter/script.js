
  // Function to convert ASCII or Hexadecimal to other number systems
  function convertToOthers(inputValue, inputType) {
    if (inputType === 'ascii') {
      const hexArray = inputValue.split('').map(char => char.charCodeAt(0).toString(16));
      const hex = hexArray.join('');
      const binary = parseInt(hex, 16).toString(2);
      const decimal = parseInt(hex, 16).toString(10);
      return { ascii: inputValue, hex: hex.toUpperCase(), binary, decimal };
    } else if (inputType === 'hex') {
      const asciiArray = inputValue.match(/.{1,2}/g).map(hex => String.fromCharCode(parseInt(hex, 16)));
      const ascii = asciiArray.join('');
      const binary = parseInt(inputValue, 16).toString(2);
      const decimal = parseInt(inputValue, 16).toString(10);
      return { ascii, hex: inputValue.toUpperCase(), binary, decimal };
    } else if (inputType === 'binary') {
      const asciiArray = inputValue.match(/.{1,8}/g).map(bin => String.fromCharCode(parseInt(bin, 2)));
      const ascii = asciiArray.join('');
      const hex = parseInt(inputValue, 2).toString(16).toUpperCase();
      const decimal = parseInt(inputValue, 2).toString(10);
      return { ascii, hex, binary: inputValue, decimal };
    } else if (inputType === 'decimal') {
      const asciiArray = inputValue.split('').map(dec => String.fromCharCode(parseInt(dec, 10)));
      const ascii = asciiArray.join('');
      const hex = parseInt(inputValue, 10).toString(16).toUpperCase();
      const binary = parseInt(inputValue, 10).toString(2);
      return { ascii, hex, binary, decimal: inputValue };
    }
  }

  // Function to update inputs with conversion results
  function updateInputs(inputValue, inputType) {
    const { ascii, hex, binary, decimal } = convertToOthers(inputValue, inputType);
    document.getElementById('asciiInput').value = ascii;
    document.getElementById('hexInput').value = hex;
    document.getElementById('binaryInput').value = binary;
    document.getElementById('decimalInput').value = decimal;
  }

  // Event listeners for all input fields
  const inputFields = document.querySelectorAll('.form-control.green');
  inputFields.forEach(function(input) {
    input.addEventListener('input', function(e) {
      const inputValue = e.target.value.trim();
      const inputType = e.target.id.replace('Input', '');
      updateInputs(inputValue, inputType);
    });
  });

  // Event listener for reset button
  document.querySelector('button[type="reset"]').addEventListener('click', function() {
    inputFields.forEach(function(input) {
      input.value = '';
    });
  });



