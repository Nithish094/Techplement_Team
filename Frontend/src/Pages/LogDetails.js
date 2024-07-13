import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaSort, FaSortUp, FaSortDown, FaTrash } from 'react-icons/fa';

function LogDetails() {
  const [logDetails, setLogDetails] = useState([]);
  const [sortConfig, setSortConfig] = useState({ key: 'Time', direction: 'ascending' });

  useEffect(() => {
    fetchLogDetails();
  }, []);

  const fetchLogDetails = async () => {
    try {
      const response = await axios.get('http://localhost:3050/logs');
      setLogDetails(response.data.users);
    } catch (error) {
      console.error('There was an error fetching the log details!', error);
    }
  };

  const deleteLogDetail = async (id) => {
    try {
      await axios.delete(`http://localhost:3050/log/${id}`);
      fetchLogDetails();
    } catch (error) {
      console.error('There was an error deleting the log detail!', error);
    }
  };

  const sortTable = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });

    const sortedData = [...logDetails].sort((a, b) => {
      if (key === 'Time') {
        return direction === 'ascending'
          ? new Date(a[key]) - new Date(b[key])
          : new Date(b[key]) - new Date(a[key]);
      } else {
        return direction === 'ascending'
          ? a[key].localeCompare(b[key])
          : b[key].localeCompare(a[key]);
      }
    });

    setLogDetails(sortedData);
  };

  const getSortIcon = (key) => {
    if (sortConfig.key !== key) {
      return <FaSort />;
    }
    if (sortConfig.direction === 'ascending') {
      return <FaSortUp />;
    }
    return <FaSortDown />;
  };

  return (
    <div className="container mt-5">
      <h2>Log Details</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Calculator Name</th>
            <th>Inputs</th>
            <th>Outputs</th>
            <th onClick={() => sortTable('Time')} style={{ cursor: 'pointer' }}>
              Time {getSortIcon('Time')}
            </th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {logDetails.map((log, index) => (
            <tr key={index}>
              <td>{log.id}</td>
              <td>{log.CalculatorName}</td>
              <td>{log.Inputs}</td>
              <td>{log.Outputs}</td>
              <td>{log.Time}</td>
              <td>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => deleteLogDetail(log.id)}
                >
                  <FaTrash /> Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default LogDetails;
