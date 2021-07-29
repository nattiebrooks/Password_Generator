
        var password = [];

        var lowerAlphabet = [...Array(26).keys()].map(i => String.fromCharCode(i + 97))
    
        var upperAlphabet = [...Array(26).keys()].map(i => String.fromCharCode(i + 97).toUpperCase());
      
         var numbers = [...Array(10).keys()];
        
         var specialCharacters = [...Array(15).keys()].map(i=> String.fromCharCode(i + 33));
         
          
         function createPassword(){

            var lengthValue = Number(document.getElementById('password-length').value);
    
            var length = (lengthValue > 0) ? lengthValue : 16;

            var charset = [...lowerAlphabet, ...upperAlphabet, ...numbers, ...specialCharacters].join('');
            // make sure text field is clear
            document.getElementById('password').innerText = '';

             while(password.length < length){
                 password.push(charset.charAt(Math.floor(Math.random() * charset.length + 1)));
                }                 
                
             document.getElementById('password').innerText = password.join('');
         }

        