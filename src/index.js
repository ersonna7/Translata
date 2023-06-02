$(document).ready(function() {
    $('#translate-btn').click(function() {
      var inputText = $('#input').val();
      var sourceLang = $('#source-language').val();
      var targetLang = $('#target-language').val();
  
    fetch('/.netlify/functions/translate', {  
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          inputText: inputText,
          sourceLang: sourceLang,
          targetLang: targetLang
        })
      })
        .then(response => response.json())
        .then(data => {
          var outputText = data.outputText;
          $('#output').val(outputText);
        })
        .catch(() => {
          alert('Error in sending request to server. Please wait for 20 seconds and then submit the request.');
        });
    });
  
    // set greeting based on time of day
    function setGreeting() {
      var date = new Date();
      var hour = date.getHours();
  
      var greetingText = document.getElementById('greeting-text');
    
        if (hour >= 5 && hour < 12) {
          greetingText.textContent = 'Good morning | Magandang umaga | Maogmang aga | Maayong buntag | Buenos dias | Maayong aga | Naimbag nga bigat | Magandang umaga | Maabig ya agew | Maupay nga aga | Gudmorning 🌞👋🏼🙌🏼 | Good morning | Magandang umaga | Maogmang aga | Maayong buntag | Buenos dias | Maayong aga | Naimbag nga bigat | Magandang umaga | Maabig ya agew | Maupay nga aga | Gudmorning 🌞👋🏼🙌🏼 | Good morning | Magandang umaga | Maogmang aga | Maayong buntag | Buenos dias | Maayong aga | Naimbag nga bigat | Magandang umaga | Maabig ya agew | Maupay nga aga | Gudmorning 🌞👋🏼🙌🏼 |';
        } else if (hour >= 12 && hour < 18) {
          greetingText.textContent = 'Good afternoon | Magandang hapon | Maayong hapon | Maayong hapon | Buenas tardes | Maayong hapon | Naimbag nga malem | Maupay nga kulop | Gud pm 🌞👋🏼👌🏼 | Good afternoon | Magandang hapon | Maayong hapon | Maayong hapon | Buenas tardes | Maayong hapon | Naimbag nga malem | Maupay nga kulop | Gud pm 🌞👋🏼👌🏼 | Good afternoon | Magandang hapon | Maayong hapon | Maayong hapon | Buenas tardes | Maayong hapon | Naimbag nga malem | Maupay nga kulop | Gud pm 🌞👋🏼👌🏼 |';
        } else {
          greetingText.textContent = 'Good evening | Magandang gabi | Maayong gab-i | Maayong gabii | Buenas noches | Maayong gab-i | Naimbag nga rabii | Magandang gabi | Maupay nga gab-i | GudEvneng 🌃🌙😎 | Good evening | Magandang gabi | Maayong gab-i | Maayong gabii | Buenas noches | Maayong gab-i | Naimbag nga rabii | Magandang gabi | Maupay nga gab-i | GudEvneng 🌃🌙😎 | Good evening | Magandang gabi | Maayong gab-i | Maayong gabii | Buenas noches | Maayong gab-i | Naimbag nga rabii | Magandang gabi | Maupay nga gab-i | GudEvneng 🌃🌙😎 |';
        }
      }
    
      setGreeting();
    });
