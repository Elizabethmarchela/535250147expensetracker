const expenseName = document.getElementById("expense-name");
const expenseAmount = document.getElementById("expense-amount");
const expenseCategory = document.getElementById("expense-category");
const expenseDate = document.getElementById("expense-date");
const addExpense = document.getElementById("add-expense");
const expenseTable = document.getElementById("expense-table");
const totalExpense = document.getElementById("total-expense");
const totalData = document.getElementById("total-data");

let expenses = [];

function checkInput() {
    addExpense.disabled = !(
        expenseName.value.trim() &&
        expenseAmount.value > 0 &&
        expenseCategory.value &&
        expenseDate.value
    );
}

expenseName.addEventListener("input", checkInput);
expenseAmount.addEventListener("input", checkInput);
expenseCategory.addEventListener("change", checkInput);
expenseDate.addEventListener("change", checkInput);

addExpense.addEventListener("click", function() {
    let expense = {
        id: Date.now(),
        name: expenseName.value,
        amount: Number(expenseAmount.value),
        category: expenseCategory.value,
        date: expenseDate.value
    };
    
    expenses.push(expense);
    displayExpenses();
    
    expenseName.value = "";
    expenseAmount.value = "";
    expenseCategory.value = "";
    expenseDate.value = "";
    addExpense.disabled = true;
});

function displayExpenses() {
    expenseTable.innerHTML = "";
    let total = 0;
    
    for (let i = 0; i < expenses.length; i++) {
        let expense = expenses[i];
        let row = document.createElement("tr");
        
        row.innerHTML = `
        <td>${expense.name}</td>
        <td>Rp ${expense.amount.toLocaleString("id-ID")}</td>
        <td>${expense.category}</td>
        <td>${expense.date}</td>
        <td>
            <button class="delete-btn" onclick="deleteExpense(${i})">
                Delete
            </button>
        </td>`;
        
        expenseTable.appendChild(row);
        total = total + expense.amount;
    }
    
    totalExpense.textContent = total.toLocaleString("id-ID");
    totalData.textContent = expenses.length;
}

function deleteExpense(index) {
    let newExpenses = [];
    for (let i = 0; i < expenses.length; i++) {
        if (i !== index) {
            newExpenses.push(expenses[i]);
        }
    }
    
    expenses = newExpenses;
    displayExpenses();
}
