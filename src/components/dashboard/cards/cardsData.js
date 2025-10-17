// Transaction data for calculations
export const transactionData = [
  {
    id: 1,
    name: "iPhone 13 Pro MAX",
    business: "Apple. Inc",
    type: "Mobile",
    amount: 420.84,
    date: "14 Apr 2022",
    icon: "iphone.svg"
  },
  {
    id: 2,
    name: "Netflix Subscription",
    business: "Netflix",
    type: "Entertainment",
    amount: 100.00,
    date: "05 Apr 2022",
    icon: "netflix.svg"
  },
  {
    id: 3,
    name: "Figma Subscription",
    business: "Figma. Inc",
    type: "Software",
    amount: 244.20,
    date: "02 Apr 2022",
    icon: "figma.svg"
  }
];

// Calculate totals dynamically
export const calculateTotals = () => {
  const totalSpending = transactionData.reduce((sum, transaction) => sum + transaction.amount, 0);
  const baseBalance = 6000;
  const totalBalance = baseBalance - totalSpending;
  const totalSaved = 550.25;
  
  return {
    totalBalance: totalBalance.toFixed(2),
    totalSpending: totalSpending.toFixed(2),
    totalSaved: totalSaved.toFixed(2)
  };
};

// Function to randomize transaction data
export const randomizeTransactionData = () => {
  const variations = [
    // Variation 1: Original data
    [
      { name: "iPhone 13 Pro MAX", business: "Apple. Inc", amount: 420.84, date: "14 Apr 2022", type: "Mobile", icon: "iphone.svg" },
      { name: "Netflix Subscription", business: "Netflix", amount: 100.00, date: "05 Apr 2022", type: "Entertainment", icon: "netflix.svg" },
      { name: "Figma Subscription", business: "Figma. Inc", amount: 244.20, date: "02 Apr 2022", type: "Software", icon: "figma.svg" }
    ],
    // Variation 2: Different amounts and dates
    [
      { name: "MacBook Pro", business: "Apple. Inc", amount: 1899.99, date: "15 Apr 2022", type: "Electronics", icon: "iphone.svg" },
      { name: "Spotify Premium", business: "Spotify", amount: 9.99, date: "08 Apr 2022", type: "Entertainment", icon: "netflix.svg" },
      { name: "Adobe Creative", business: "Adobe Inc", amount: 299.99, date: "03 Apr 2022", type: "Software", icon: "figma.svg" }
    ],
    // Variation 3: Different transactions
    [
      { name: "Samsung Galaxy S22", business: "Samsung", amount: 799.99, date: "16 Apr 2022", type: "Mobile", icon: "iphone.svg" },
      { name: "YouTube Premium", business: "Google", amount: 11.99, date: "09 Apr 2022", type: "Entertainment", icon: "netflix.svg" },
      { name: "Microsoft Office", business: "Microsoft", amount: 149.99, date: "04 Apr 2022", type: "Software", icon: "figma.svg" }
    ],
    // Variation 4: More variations
    [
      { name: "AirPods Pro", business: "Apple. Inc", amount: 249.99, date: "17 Apr 2022", type: "Electronics", icon: "iphone.svg" },
      { name: "Disney+ Subscription", business: "Disney", amount: 7.99, date: "10 Apr 2022", type: "Entertainment", icon: "netflix.svg" },
      { name: "Canva Pro", business: "Canva", amount: 119.99, date: "05 Apr 2022", type: "Software", icon: "figma.svg" }
    ],
    // Variation 5: High-value transactions
    [
      { name: "iPad Pro", business: "Apple. Inc", amount: 1099.99, date: "18 Apr 2022", type: "Electronics", icon: "iphone.svg" },
      { name: "Amazon Prime", business: "Amazon", amount: 14.99, date: "11 Apr 2022", type: "Entertainment", icon: "netflix.svg" },
      { name: "Notion Pro", business: "Notion", amount: 8.00, date: "06 Apr 2022", type: "Software", icon: "figma.svg" }
    ]
  ];
  
  const randomIndex = Math.floor(Math.random() * variations.length);
  return variations[randomIndex];
};
