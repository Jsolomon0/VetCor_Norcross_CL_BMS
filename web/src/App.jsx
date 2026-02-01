import React, { useEffect, useState } from "react";

const API_BASE = "http://localhost:3000";

export default function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch(`${API_BASE}/health`)
      .then((res) => res.json())
      .then(() => fetch(`${API_BASE}/projects`, {
        headers: { Authorization: "Bearer demo" }
      }))
      .then((res) => res.json())
      .then((data) => setProjects(data.projects || []))
      .catch(() => setProjects([]));
  }, []);

  return (
    <div className="page">
      <header>
        <h1>Business Management System</h1>
        <p>MVP scaffold is running.</p>
      </header>
      <section>
        <h2>Projects</h2>
        {projects.length === 0 ? (
          <p>No projects yet.</p>
        ) : (
          <ul>
            {projects.map((p) => (
              <li key={p.id}>{p.name}</li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
