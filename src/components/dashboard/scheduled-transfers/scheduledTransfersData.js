// Base scheduled transfers data (exact from image)
export const baseScheduledTransfersData = [
  {
    id: 1,
    name: "Saleh Ahmed",
    recipient: "Saleh Ahmed",
    account: "****1234",
    amount: 435.00,
    date: "April 28, 2022",
    time: "11:00",
    frequency: "Monthly",
    nextTransfer: "May 28, 2022",
    status: "Active",
    avatar: "salahah.png"
  },
  {
    id: 2,
    name: "Delowar Hossain",
    recipient: "Delowar Hossain",
    account: "****5678",
    amount: 132.00,
    date: "April 25, 2022",
    time: "11:00",
    frequency: "Weekly",
    nextTransfer: "May 2, 2022",
    status: "Active",
    avatar: "delower.png"
  },
  {
    id: 3,
    name: "Moinul Hasan Nayem",
    recipient: "Moinul Hasan Nayem",
    account: "****9012",
    amount: 826.00,
    date: "April 25, 2022",
    time: "11:00",
    frequency: "Bi-weekly",
    nextTransfer: "May 9, 2022",
    status: "Active",
    avatar: "mainul.png"
  },
  {
    id: 4,
    name: "Dr. Jubed Ahmed",
    recipient: "Dr. Jubed Ahmed",
    account: "****3456",
    amount: 435.00,
    date: "April 16, 2022",
    time: "11:00",
    frequency: "Monthly",
    nextTransfer: "May 16, 2022",
    status: "Pending",
    avatar: "drjubed.png"
  },
  {
    id: 5,
    name: "AR. Jakir Alp",
    recipient: "AR. Jakir Alp",
    account: "****7890",
    amount: 228.00,
    date: "April 14, 2022",
    time: "11:00",
    frequency: "Weekly",
    nextTransfer: "April 21, 2022",
    status: "Active",
    avatar: "ar.jakir.png"
  }
];

// Function to randomize scheduled transfers data
export const randomizeScheduledTransfersData = () => {
  const variations = [
    // Variation 1: Original data
    baseScheduledTransfersData,
    // Variation 2: Different amounts
    [
      { id: 1, name: "Saleh Ahmed", recipient: "Saleh Ahmed", account: "****1234", amount: 500.00, date: "April 28, 2022", time: "11:00", frequency: "Monthly", nextTransfer: "May 28, 2022", status: "Active", avatar: "salahah.png" },
      { id: 2, name: "Delowar Hossain", recipient: "Delowar Hossain", account: "****5678", amount: 150.00, date: "April 25, 2022", time: "11:00", frequency: "Weekly", nextTransfer: "May 2, 2022", status: "Active", avatar: "delower.png" },
      { id: 3, name: "Moinul Hasan Nayem", recipient: "Moinul Hasan Nayem", account: "****9012", amount: 900.00, date: "April 25, 2022", time: "11:00", frequency: "Bi-weekly", nextTransfer: "May 9, 2022", status: "Active", avatar: "mainul.png" },
      { id: 4, name: "Dr. Jubed Ahmed", recipient: "Dr. Jubed Ahmed", account: "****3456", amount: 400.00, date: "April 16, 2022", time: "11:00", frequency: "Monthly", nextTransfer: "May 16, 2022", status: "Pending", avatar: "drjubed.png" },
      { id: 5, name: "AR. Jakir Alp", recipient: "AR. Jakir Alp", account: "****7890", amount: 250.00, date: "April 14, 2022", time: "11:00", frequency: "Weekly", nextTransfer: "April 21, 2022", status: "Active", avatar: "ar.jakir.png" }
    ],
    // Variation 3: Different amounts
    [
      { id: 1, name: "Saleh Ahmed", recipient: "Saleh Ahmed", account: "****1234", amount: 350.00, date: "April 28, 2022", time: "11:00", frequency: "Monthly", nextTransfer: "May 28, 2022", status: "Active", avatar: "salahah.png" },
      { id: 2, name: "Delowar Hossain", recipient: "Delowar Hossain", account: "****5678", amount: 100.00, date: "April 25, 2022", time: "11:00", frequency: "Weekly", nextTransfer: "May 2, 2022", status: "Active", avatar: "delower.png" },
      { id: 3, name: "Moinul Hasan Nayem", recipient: "Moinul Hasan Nayem", account: "****9012", amount: 750.00, date: "April 25, 2022", time: "11:00", frequency: "Bi-weekly", nextTransfer: "May 9, 2022", status: "Active", avatar: "mainul.png" },
      { id: 4, name: "Dr. Jubed Ahmed", recipient: "Dr. Jubed Ahmed", account: "****3456", amount: 500.00, date: "April 16, 2022", time: "11:00", frequency: "Monthly", nextTransfer: "May 16, 2022", status: "Pending", avatar: "drjubed.png" },
      { id: 5, name: "AR. Jakir Alp", recipient: "AR. Jakir Alp", account: "****7890", amount: 200.00, date: "April 14, 2022", time: "11:00", frequency: "Weekly", nextTransfer: "April 21, 2022", status: "Active", avatar: "ar.jakir.png" }
    ]
  ];
  
  const randomIndex = Math.floor(Math.random() * variations.length);
  return variations[randomIndex];
};
