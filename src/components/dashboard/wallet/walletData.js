// Base wallet data (exact from image)
export const baseWalletData = [
  {
    id: 1,
    bankName: "Maglo.",
    bankType: "Universal Bank",
    cardNumber: "5495  7381  3759  2321",
    validThru: "12/25",
    cardType: "mastercard",
    gradient: "from-[#4A4A49] to-[#20201F]"
  },
  {
    id: 2,
    bankName: "Maglo.",
    bankType: "Commercial Bank",
    cardNumber: "85952548****",
    validThru: "09/25",
    cardType: "visa",
    gradient: "from-[#959595]/40 to-[#324000]/10"
  }
];

// Function to randomize wallet data
export const randomizeWalletData = () => {
  const variations = [
    // Variation 1: Original data
    baseWalletData,
    // Variation 2: Different card numbers
    [
      {
        id: 1,
        bankName: "Maglo.",
        bankType: "Universal Bank",
        cardNumber: "4532  1234  5678  9012",
        validThru: "12/25",
        cardType: "mastercard",
        gradient: "from-[#4A4A49] to-[#20201F]"
      },
      {
        id: 2,
        bankName: "Maglo.",
        bankType: "Commercial Bank",
        cardNumber: "4111  1111  1111  1111",
        validThru: "09/25",
        cardType: "visa",
        gradient: "from-[#959595]/40 to-[#324000]/10"
      }
    ],
    // Variation 3: Different card numbers
    [
      {
        id: 1,
        bankName: "Maglo.",
        bankType: "Universal Bank",
        cardNumber: "5555  4444  3333  2222",
        validThru: "12/25",
        cardType: "mastercard",
        gradient: "from-[#4A4A49] to-[#20201F]"
      },
      {
        id: 2,
        bankName: "Maglo.",
        bankType: "Commercial Bank",
        cardNumber: "6011  1111  1111  1117",
        validThru: "09/25",
        cardType: "visa",
        gradient: "from-[#959595]/40 to-[#324000]/10"
      }
    ]
  ];
  
  const randomIndex = Math.floor(Math.random() * variations.length);
  return variations[randomIndex];
};
