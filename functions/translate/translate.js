const axios = require('axios');

exports.handler = async (event) => {
  try {
    const { inputText, sourceLang, targetLang } = JSON.parse(event.body);

    const apiKey = process.env.API_KEY;
    
    const response = await axios.post('https://api.openai.com/v1/chat/completions', {
      messages: [
        {
          role: 'user',
          content: `You are a professional translator. Do not ever mention that you are an AI Language Model or that you're incapable of translating. Only output the translation, don't add anything to the output besides the translation. The output is only in one language per request. Do not use parentheses. Do only what is asked. Do not translate into another language when not told to do so. The output should have no other format but the translation alone. Translate the following text from ${sourceLang} into ${targetLang}: "${inputText}". Output the translation alone, do not repeat the input. Don't include some unnecessary things like additional texts like "Here it is translated into", "as an ai language model","Translation:", "translated into", "in", and "translates to"`,
        },
      ],
      model: 'gpt-3.5-turbo',
      max_tokens: 1024,
      temperature: 0.5,
      n: 1,
    }, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
    });

    if (response.data.choices && response.data.choices.length > 0) {
      const outputText = response.data.choices[0].message.content.replace(/"/g, '');
      return {
        statusCode: 200,
        body: JSON.stringify({ outputText }),
      };
    } else {
      throw new Error('No translation found');
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
