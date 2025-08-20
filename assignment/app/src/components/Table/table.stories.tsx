import type { Meta, StoryObj } from "@storybook/react";
import { DataTable,} from "./table";

interface User {
  id: number;
  name: string;
  email: string;
}
interface Column<T> {
  key: string;
  title: string;
  dataIndex: keyof T;
  sortable?: boolean;
}

interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  loading?: boolean;
  selectable?: boolean;
  onRowSelect?: (rows: T[]) => void;
}
const cols: Column<User>[] = [
  { key: 'id', title: 'ID', dataIndex: 'id', sortable: true },
  { key: 'name', title: 'Name', dataIndex: 'name' },
  { key: 'email', title: 'Email', dataIndex: 'email' },
];

const data: User[] = [
  { id: 1, name: "Aarav ", email: "aarav@test.com" },
  { id: 2, name: " Patel", email: "diya@test.com" },
  { id: 3, name: "Rohan ", email: "rohan@test.com" },
  { id: 4, name: "Ananya Singh", email: "ananya@test.com" },
  { id: 5, name: "Mehta", email: "kabir@test.com" },
];


export default {
  title: "Components/DataTable",
  component: DataTable,
} as Meta<DataTableProps<User>>;

type Template = StoryObj<DataTableProps<User>>;

export const Default: Template = { args: { data, columns: cols } };

