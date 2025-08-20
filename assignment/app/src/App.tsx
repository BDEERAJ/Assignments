import React, { useState, useEffect } from "react";
import InputField from "./components/inputField/input";
import { DataTable } from "./components/Table/table";
import "./App.css";

interface User { id: number; name: string; email: string; }

const data: User[] = [
  { id: 1, name: "Aarav ", email: "aarav@test.com" },
  { id: 2, name: " Patel", email: "diya@test.com" },
  { id: 3, name: "Rohan ", email: "rohan@test.com" },
  { id: 4, name: " Singh", email: "ananya@test.com" },
  { id: 5, name: "Kabir ", email: "kabir@test.com" },
];


const App: React.FC = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    document.body.className = '';
    document.body.classList.add(`${theme}-mode`);
  }, [theme]);

  return (
    <div className="app-wrapper">
      <div className="container py-5">
        <div className="d-flex justify-content-center align-items-center mb-5">
          <h1 className="display-4 fw-bold text-center m-0">User Dashboard</h1>
          <button onClick={toggleTheme} className="btn btn-outline-secondary ms-4">
            Toggle Theme
          </button>
        </div>

        <div className="card rounded-4 custom-card mx-auto">
          <div className="card-body p-4 p-lg-5">
            <div className="mb-5">
              <InputField
                label="Email Address"
                placeholder="name@example.com"
                helperText="We'll never share your email."
              />
            </div>

            <div className="table-responsive">
              <DataTable
                data={data}
                columns={[
                  { key: "id", title: "ID", dataIndex: "id" },
                  { key: "name", title: "Name", dataIndex: "name" },
                  { key: "email", title: "Email", dataIndex: "email" },
                ]}
                selectable={true}
                loading={false}
                onRowSelect={(rows) => console.log("Selected rows:", rows)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;