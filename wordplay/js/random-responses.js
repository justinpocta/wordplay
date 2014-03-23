function randomResponse()
    {
      var response1 = new Array(
        "How should this feel?",
        "What's a fitting Spirit Animal?",
        "What's a key attribute?",
        "Name a related famous person?",
        "Any food group/item?",
        "Associated facial expression?",
        "Analogous gesture?",
        "Any rhyming word from the topic name?",
        "What is the main topic?",
        "What object could represent this?",
        "An analogy to describe your product's function?",
        "What related phrases do you know?",
        "Name an element from and analogous historical moment?",
        "A unique characteristic versus competitors?",
        "A unique quality you want to impact users?",
        "Does any color express this?",
        "Spelling variation of topik?",
        "Can you make a short joke?"
        )
      var randomNum = Math.floor(Math.random() * 5)
      document.getElementById('AddAWord').value = response1[randomNum];
    };

    function fieldPrep()
    {
      var response2 = new Array(
        "How should this feel?",
        "What's a fitting Spirit Animal?",
        "What's a key attribute?",
        "Name a related famous person?",
        "Any food group/item?",
        "Associated facial expression?",
        "Analogous gesture?",
        "Any rhyming word from the topic name?",
        "What is the main topic?",
        "What object could represent this?",
        "An analogy to describe your product's function?",
        "What related phrases do you know?",
        "Name an element from and analogous historical moment?",
        "A unique characteristic versus competitors?",
        "A unique quality you want to impact users?",
        "Does any color express this?"
        )
      var randomNum = Math.floor(Math.random() * 5)
      document.getElementById('AddAWord').value = 'e.g. ' + response2[randomNum];
    };
    // });