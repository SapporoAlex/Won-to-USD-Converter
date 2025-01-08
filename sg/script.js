async function convertCurrency() {
    const won = document.getElementById('won').value;
    if (won <= 0) {
        document.getElementById('result').innerText = "Please enter a valid amount.";
        return;
    }

    const url = `https://api.exchangerate-api.com/v4/latest/KRW`; // You can use any reliable API
    const response = await fetch(url);
    const data = await response.json();

    if (data && data.rates && data.rates.USD) {
        const conversionRate = data.rates.USD;
        const convertedAmount = (won * conversionRate).toFixed(2);

        // Format the converted amount with commas and dollar sign
        const formattedAmount = `$${parseFloat(convertedAmount).toLocaleString()}`;

        document.getElementById('result').innerText = `${won} KRW = ${formattedAmount} USD`;
    } else {
        document.getElementById('result').innerText = "Error fetching exchange rate.";
    }
}

// Function to close the page
function closePage() {
    window.close();
}

// Event listener for pressing Enter to trigger the convertCurrency function
document.getElementById('won').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        convertCurrency();
    }
});
