type IncomeRecord = {
  [key: string]: number;
};

const riyadIncome: IncomeRecord = {
  // Assuming the structure of riyadIncome object
  salary: 3000,
  bonus: 500,
  // Add other income sources as needed
};

function getIncomeByKey(key: string): number | undefined {
  // This function safely accesses the income record by key
  return riyadIncome[key as keyof IncomeRecord];
}

// Example usage:
const key = 'salary';
const income = getIncomeByKey(key);
if (income !== undefined) {
  console.log(`The income for ${key} is: ${income}`);
} else {
  console.log(`No income record found for ${key}`);
}
