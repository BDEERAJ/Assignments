import { useState, useMemo, useEffect } from "react";
import "./table.css";

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

export function DataTable<T extends { id: string | number; [key: string]: any }>({
  data,
  columns,
  loading = false,
  selectable = false,
  onRowSelect,
}: DataTableProps<T>) {
  const [sortKey, setSortKey] = useState<keyof T | null>(null);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [selectedRows, setSelectedRows] = useState<T[]>([]);

  useEffect(() => {
    onRowSelect?.(selectedRows);
  }, [selectedRows, onRowSelect]);

  const handleSort = (col: Column<T>) => {
    if (!col.sortable) return;
    if (sortKey === col.dataIndex) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortKey(col.dataIndex);
      setSortOrder("asc");
    }
  };

  const sortedData = useMemo(() => {
    if (!sortKey) return data;
    return [...data].sort((a, b) => {
      const aValue = a[sortKey];
      const bValue = b[sortKey];
      if (aValue < bValue) return sortOrder === "asc" ? -1 : 1;
      if (aValue > bValue) return sortOrder === "asc" ? 1 : -1;
      return 0;
    });
  }, [data, sortKey, sortOrder]);

  const isRowSelected = (row: T) => {
    return selectedRows.some(selected => selected.id === row.id);
  };

  const handleSelectRow = (row: T) => {
    if (!selectable) return;
    if (isRowSelected(row)) {
      setSelectedRows(selectedRows.filter(r => r.id !== row.id));
    } else {
      setSelectedRows([...selectedRows, row]);
    }
  };

  const handleSelectAll = () => {
    if (selectedRows.length === data.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows([...data]);
    }
  };

  if (loading) {
    return (
      <>
      <div className="d-flex justify-content-center align-items-center ">
        <strong className="mx-2">Loading...</strong>
        <div className="spinner-border text-primary" role="status"></div>
      </div>
      </>
    );
  }

  if (!data.length) {
    return <div className="alert alert-secondary text-center">No data available</div>;
  }

  return (
    <div className="table-responsive">
      <table className="table table-striped table-hover align-middle">
        <thead className="table-light">
          <tr>
            {selectable && (
              <th className="select-cell">
                <input
                  type="checkbox"
                  checked={selectedRows.length === data.length && data.length > 0}
                  onChange={handleSelectAll}
                  aria-label="Select all rows"
                  
                />
              </th>
            )}
            {columns.map(col => (
              <th
                key={col.key}
                onClick={() => handleSort(col)}
                className={col.sortable ? "sortable" : ""}
              >
                {col.title}
                {sortKey === col.dataIndex && (
                  <span className="sort-icon">{sortOrder === "asc" ? "▲" : "▼"}</span>
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedData.map((row, idx) => (
            <tr key={row.id || idx} className={isRowSelected(row) ? "table-active" : ""}>
              {selectable && (
                <td className="select-cell">
                  <input
                    type="checkbox"
                    checked={isRowSelected(row)}
                    onChange={() => handleSelectRow(row)}
                    aria-label={`Select row ${idx + 1}`}
                  />
                </td>
              )}
              {columns.map(col => (
                <td key={col.key}>{row[col.dataIndex]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}