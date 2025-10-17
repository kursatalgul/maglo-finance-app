// Base chart data (exact from image)
export const baseChartData = [
  { name: "Apr 14", income: 5500, expenses: 3200 },
  { name: "Apr 15", income: 4200, expenses: 2800 },
  { name: "Apr 16", income: 3800, expenses: 3100 },
  { name: "Apr 17", income: 5500, expenses: 2900 },
  { name: "Apr 18", income: 4800, expenses: 3500 },
  { name: "Apr 19", income: 5200, expenses: 3200 },
  { name: "Apr 20", income: 4600, expenses: 2800 }
];

// Function to randomize chart data
export const randomizeChartData = () => {
  const variations = [
    // Variation 1: Original data
    baseChartData,
    // Variation 2: Different values
    [
      { name: "Apr 14", income: 6000, expenses: 3500 },
      { name: "Apr 15", income: 4500, expenses: 3000 },
      { name: "Apr 16", income: 4000, expenses: 3200 },
      { name: "Apr 17", income: 5800, expenses: 3100 },
      { name: "Apr 18", income: 5000, expenses: 3700 },
      { name: "Apr 19", income: 5500, expenses: 3400 },
      { name: "Apr 20", income: 4800, expenses: 3000 }
    ],
    // Variation 3: Different values
    [
      { name: "Apr 14", income: 5000, expenses: 3000 },
      { name: "Apr 15", income: 4000, expenses: 2500 },
      { name: "Apr 16", income: 3500, expenses: 2800 },
      { name: "Apr 17", income: 5200, expenses: 2700 },
      { name: "Apr 18", income: 4600, expenses: 3300 },
      { name: "Apr 19", income: 5000, expenses: 3000 },
      { name: "Apr 20", income: 4400, expenses: 2600 }
    ]
  ];
  
  const randomIndex = Math.floor(Math.random() * variations.length);
  return variations[randomIndex];
};
