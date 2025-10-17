// Shared data system - all components will use the same transaction data
import { randomizeTransactionsData } from '../components/dashboard/recent-transactions/transactionsData';

// Generate shared transaction data
export const getSharedTransactionData = () => {
  return randomizeTransactionsData();
};

// Calculate totals based on transaction data
export const calculateTotalsFromTransactions = (transactions) => {
  const totalSpending = transactions.reduce((sum, transaction) => sum + transaction.amount, 0);
  const baseBalance = 6000;
  const totalBalance = baseBalance - totalSpending;
  
  // Calculate total saved based on transaction data
  // If spending is high, saved amount is lower, if spending is low, saved amount is higher
  const baseSaved = 550.25;
  const spendingFactor = totalSpending / 765.04; // Original total was 765.04
  const totalSaved = baseSaved * (1.5 - spendingFactor); // Inverse relationship
  
  return {
    totalBalance: totalBalance.toFixed(2),
    totalSpending: totalSpending.toFixed(2),
    totalSaved: totalSaved.toFixed(2)
  };
};

// Generate chart data based on transaction data and period
export const generateChartDataFromTransactions = (transactions, period = "week") => {
  const totalSpending = transactions.reduce((sum, transaction) => sum + transaction.amount, 0);
  const originalTotal = 765.04; // Original total from base data
  const adjustmentFactor = totalSpending / originalTotal;

  if (period === "week") {
    // Base chart data for 7 days
    const baseChartData = [
      { name: "Apr 14", income: 5500, expenses: 3200 },
      { name: "Apr 15", income: 4200, expenses: 2800 },
      { name: "Apr 16", income: 3800, expenses: 3100 },
      { name: "Apr 17", income: 5500, expenses: 2900 },
      { name: "Apr 18", income: 4800, expenses: 3500 },
      { name: "Apr 19", income: 5200, expenses: 3200 },
      { name: "Apr 20", income: 4600, expenses: 2800 }
    ];

    const variations = [
      { factor: 0.8, day: 0 },
      { factor: 1.2, day: 1 },
      { factor: 0.9, day: 2 },
      { factor: 1.1, day: 3 },
      { factor: 1.3, day: 4 },
      { factor: 0.7, day: 5 },
      { factor: 1.0, day: 6 }
    ];

    return baseChartData.map((day, index) => {
      const variation = variations[index];
      const adjustedExpenses = Math.round(day.expenses * adjustmentFactor * variation.factor);
      const adjustedIncome = Math.round(day.income * (0.9 + Math.random() * 0.2));
      
      return {
        ...day,
        income: adjustedIncome,
        expenses: adjustedExpenses
      };
    });
  }

  if (period === "month") {
    // Generate 30 days of data
    const monthData = [];
    const baseIncome = 5000;
    const baseExpenses = 3000;
    
    for (let i = 0; i < 30; i++) {
      const day = i + 1;
      const income = Math.round(baseIncome * (0.8 + Math.random() * 0.4) * adjustmentFactor);
      const expenses = Math.round(baseExpenses * (0.7 + Math.random() * 0.6) * adjustmentFactor);
      
      monthData.push({
        name: `Day ${day}`,
        income: income,
        expenses: expenses
      });
    }
    
    return monthData;
  }

  if (period === "year") {
    // Generate 12 months of data
    const yearData = [];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const baseIncome = 15000;
    const baseExpenses = 10000;
    
    months.forEach((month, index) => {
      const income = Math.round(baseIncome * (0.8 + Math.random() * 0.4) * adjustmentFactor);
      const expenses = Math.round(baseExpenses * (0.7 + Math.random() * 0.6) * adjustmentFactor);
      
      yearData.push({
        name: month,
        income: income,
        expenses: expenses
      });
    });
    
    return yearData;
  }

  return [];
};

// Generate shared data for all components
export const getSharedDashboardData = (period = "week") => {
  const transactions = getSharedTransactionData();
  const totals = calculateTotalsFromTransactions(transactions);
  const chartData = generateChartDataFromTransactions(transactions, period);
  
  return {
    transactions,
    totals,
    chartData
  };
};
