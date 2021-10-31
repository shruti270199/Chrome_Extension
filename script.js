fetch('https://favqs.com/api/qotd')
    .then(data => data.json())
    .then(jokeData => {
        const quoteText = jokeData.quote.body;
        const quoteElement = document.getElementById('quoteElement');

        quoteElement.innerHTML = quoteText;
    })