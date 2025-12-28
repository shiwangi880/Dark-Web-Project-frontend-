import React, { useEffect, useState } from "react";
import "../styles/dashboard.css";
import { getListings } from "../api/api";
import "../styles/listing.css";


function Listings() {
  const [listings, setListings] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const data = await getListings();
        setListings(data); // ✅ FIX
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchListings();
  }, []);

  const filtered = listings.filter(
    (l) =>
      l.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      l.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <p>Loading listings...</p>;

  return (
    <div className="listings-page">
      <h2>All Listings</h2>

      <input
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="table-card">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Price</th>
              <th>Frequency</th>
              <th>Risk</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr><td colSpan="6">No data</td></tr>
            ) : (
              filtered.map((i) => (
                <tr key={i.id}>
                  <td>{i.id}</td>
                  <td>{i.title}</td>
                  <td>${i.price}</td>
                  <td>{i.frequency}</td>
                  <td>{i.risk_score}</td>
                  <td>{i.status}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Listings;
