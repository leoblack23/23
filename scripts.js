document.addEventListener('DOMContentLoaded', async function() {
    const totalEarningsElement = document.getElementById('total-earnings');
    const cashbackGivenElement = document.getElementById('cashback-given');
    const yourEarningsElement = document.getElementById('your-earnings');
    const transactionTableElement = document.getElementById('transaction-table');

    let totalEarnings = 0;
    let cashbackGiven = 0;
    let yourEarnings = 0;

    const response = await fetch('https://<your_repl_url>/transactions');
    const transactions = await response.json();

    transactions.forEach(transaction => {
        totalEarnings += transaction.amount;
        cashbackGiven += transaction.cashback;
        yourEarnings += transaction.amount - transaction.cashback;

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${new Date(transaction.date).toLocaleDateString()}</td>
            <td>${transaction.fan}</td>
            <td>$${transaction.amount.toFixed(2)}</td>
            <td>$${transaction.cashback.toFixed(2)}</td>
        `;
        transactionTableElement.appendChild(row);
    });

    totalEarningsElement.textContent = totalEarnings.toFixed(2);
    cashbackGivenElement.textContent = cashbackGiven.toFixed(2);
    yourEarningsElement.textContent = yourEarnings.toFixed(2);
});
