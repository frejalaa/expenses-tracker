import { FlatList, Text } from "react-native";
import ExpenseItem from "./ExpenseItem";

const renderExpenseItem = (itemData) => {
  return <ExpenseItem {...itemData.item} />
};

const ExpensesOutput = ({ expenses }) => {
  return <FlatList data={expenses} keyExtractor={(item) => item.id} renderItem={renderExpenseItem} />;
};

export default ExpensesOutput;
