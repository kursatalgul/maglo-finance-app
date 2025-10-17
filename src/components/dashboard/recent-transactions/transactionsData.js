// Base transaction data (exact from image)
export const baseTransactionsData = [
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

// Function to randomize transaction data (only amounts and dates change, names stay the same)
export const randomizeTransactionsData = () => {
  const variations = [
    // Variation 1: Original data
    [
      { name: "iPhone 13 Pro MAX", business: "Apple. Inc", amount: 420.84, date: "14 Apr 2022", type: "Mobile", icon: "iphone.svg" },
      { name: "Netflix Subscription", business: "Netflix", amount: 100.00, date: "05 Apr 2022", type: "Entertainment", icon: "netflix.svg" },
      { name: "Figma Subscription", business: "Figma. Inc", amount: 244.20, date: "02 Apr 2022", type: "Software", icon: "figma.svg" }
    ],
    // Variation 2: Different amounts and dates
    [
      { name: "iPhone 13 Pro MAX", business: "Apple. Inc", amount: 899.99, date: "15 Apr 2022", type: "Mobile", icon: "iphone.svg" },
      { name: "Netflix Subscription", business: "Netflix", amount: 15.99, date: "08 Apr 2022", type: "Entertainment", icon: "netflix.svg" },
      { name: "Figma Subscription", business: "Figma. Inc", amount: 299.99, date: "03 Apr 2022", type: "Software", icon: "figma.svg" }
    ],
    // Variation 3: Different amounts and dates
    [
      { name: "iPhone 13 Pro MAX", business: "Apple. Inc", amount: 799.99, date: "16 Apr 2022", type: "Mobile", icon: "iphone.svg" },
      { name: "Netflix Subscription", business: "Netflix", amount: 12.99, date: "09 Apr 2022", type: "Entertainment", icon: "netflix.svg" },
      { name: "Figma Subscription", business: "Figma. Inc", amount: 149.99, date: "04 Apr 2022", type: "Software", icon: "figma.svg" }
    ],
    // Variation 4: Different amounts and dates
    [
      { name: "iPhone 13 Pro MAX", business: "Apple. Inc", amount: 649.99, date: "17 Apr 2022", type: "Mobile", icon: "iphone.svg" },
      { name: "Netflix Subscription", business: "Netflix", amount: 8.99, date: "10 Apr 2022", type: "Entertainment", icon: "netflix.svg" },
      { name: "Figma Subscription", business: "Figma. Inc", amount: 199.99, date: "05 Apr 2022", type: "Software", icon: "figma.svg" }
    ],
    // Variation 5: Different amounts and dates
    [
      { name: "iPhone 13 Pro MAX", business: "Apple. Inc", amount: 1099.99, date: "18 Apr 2022", type: "Mobile", icon: "iphone.svg" },
      { name: "Netflix Subscription", business: "Netflix", amount: 19.99, date: "11 Apr 2022", type: "Entertainment", icon: "netflix.svg" },
      { name: "Figma Subscription", business: "Figma. Inc", amount: 99.99, date: "06 Apr 2022", type: "Software", icon: "figma.svg" }
    ],
    // Variation 6: Different amounts and dates
    [
      { name: "iPhone 13 Pro MAX", business: "Apple. Inc", amount: 549.99, date: "19 Apr 2022", type: "Mobile", icon: "iphone.svg" },
      { name: "Netflix Subscription", business: "Netflix", amount: 6.99, date: "12 Apr 2022", type: "Entertainment", icon: "netflix.svg" },
      { name: "Figma Subscription", business: "Figma. Inc", amount: 349.99, date: "07 Apr 2022", type: "Software", icon: "figma.svg" }
    ],
    // Variation 7: Different amounts and dates
    [
      { name: "iPhone 13 Pro MAX", business: "Apple. Inc", amount: 749.99, date: "20 Apr 2022", type: "Mobile", icon: "iphone.svg" },
      { name: "Netflix Subscription", business: "Netflix", amount: 11.99, date: "13 Apr 2022", type: "Entertainment", icon: "netflix.svg" },
      { name: "Figma Subscription", business: "Figma. Inc", amount: 79.99, date: "08 Apr 2022", type: "Software", icon: "figma.svg" }
    ]
  ];
  
  const randomIndex = Math.floor(Math.random() * variations.length);
  return variations[randomIndex];
};
