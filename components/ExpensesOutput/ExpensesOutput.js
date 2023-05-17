// React Native imports
import { View, StyleSheet } from "react-native";

// Components imports
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../../constants/styles";

const DUMMY_EXPENSES = [
  {
    id: 1,
    description: 'Groceries',
    amount: 50.75,
    date: new Date('2023-05-01'),
  },
  {
    id: 2,
    description: 'Dinner with friends',
    amount: 80.20,
    date: new Date('2023-05-09'),
  },
  {
    id: 3,
    description: 'Movie tickets',
    amount: 25.50,
    date: new Date('2023-05-08'),
  },
  {
    id: 4,
    description: 'Gasoline',
    amount: 40.00,
    date: new Date('2023-05-07'),
  },
  {
    id: 5,
    description: 'Coffee',
    amount: 4.75,
    date: new Date('2023-05-06'),
  },
  {
    id: 6,
    description: 'Books',
    amount: 30.50,
    date: new Date('2023-05-05'),
  },
  {
    id: 7,
    description: 'Gym membership',
    amount: 75.00,
    date: new Date('2023-05-04'),
  },
  {
    id: 8,
    description: 'Concert tickets',
    amount: 120.50,
    date: new Date('2023-05-03'),
  },
  {
    id: 9,
    description: 'Clothing',
    amount: 60.25,
    date: new Date('2023-05-02'),
  },
  {
    id: 10,
    description: 'Transportation',
    amount: 15.00,
    date: new Date('2023-05-01'),
  },
  {
    id: 11,
    description: 'Lunch',
    amount: 12.80,
    date: new Date('2023-04-30'),
  },
  {
    id: 12,
    description: 'Gift',
    amount: 50.00,
    date: new Date('2023-04-29'),
  },
  {
    id: 13,
    description: 'Phone bill',
    amount: 85.30,
    date: new Date('2023-04-28'),
  },
  {
    id: 14,
    description: 'Haircut',
    amount: 35.00,
    date: new Date('2023-04-27'),
  },
  {
    id: 15,
    description: 'Home maintenance',
    amount: 200.00,
    date: new Date('2023-04-26'),
  },
];

const ExpensesOutput = ({ expenses, expensesPeriod }) => {

  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
};

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.primary700,
    paddingHorizontal: 24,
    paddingTop: 24,
  }
});