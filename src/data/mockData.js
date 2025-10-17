// Dummy data for the finance dashboard

export const mockTransactions = [
  {
    id: 1,
    type: 'expense',
    category: 'Mobile',
    description: 'Iphone 13 Pro MAX',
    business: 'Apple. Inc',
    amount: 420.84,
    date: '2022-04-14',
    currency: 'USD',
    icon: 'iphone'
  },
  {
    id: 2,
    type: 'expense',
    category: 'Entertainment',
    description: 'Netflix Subscription',
    business: 'Netflix',
    amount: 100.00,
    date: '2022-04-05',
    currency: 'USD',
    icon: 'netflix'
  },
  {
    id: 3,
    type: 'expense',
    category: 'Software',
    description: 'Figma Subscription',
    business: 'Figma. Inc',
    amount: 244.20,
    date: '2022-04-02',
    currency: 'USD',
    icon: 'figma'
  }
];

export const mockChartData = [
  { date: '2022-04-14', income: 4000, expense: 5000 },
  { date: '2022-04-15', income: 7000, expense: 6000 },
  { date: '2022-04-16', income: 6500, expense: 8000 },
  { date: '2022-04-17', income: 5500, expense: 3500 },
  { date: '2022-04-18', income: 1000, expense: 4500 },
  { date: '2022-04-19', income: 2000, expense: 2000 },
  { date: '2022-04-20', income: 3500, expense: 4500 }
];



export const mockStats = {
  totalBalance: 5240.21,
  monthlyIncome: 6200,
  monthlyExpense: 250.80,
  savingsRate: 95.0
};
