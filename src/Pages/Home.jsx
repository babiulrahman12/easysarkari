function Home() {
  return (
    <div style={{ padding: "20px" }}>
      {/* Hero Section */}
      <section
        style={{
          backgroundColor: "#e8f0fe",
          padding: "40px 20px",
          textAlign: "center",
          borderRadius: "10px",
          marginBottom: "30px"
        }}
      >
        <h1 style={{ fontSize: "2rem", marginBottom: "10px" }}>
          Find Government Jobs Easily
        </h1>
        <p style={{ fontSize: "1rem", marginBottom: "20px" }}>
          Sarkari Naukri updates, admit cards, results – all in one place!
        </p>
        <a
          href="#"
          style={{
            backgroundColor: "#1a73e8",
            color: "#fff",
            padding: "10px 20px",
            borderRadius: "5px",
            textDecoration: "none",
            fontWeight: "bold"
          }}
        >
          Apply Now
        </a>
      </section>

      <h2 style={{ textAlign: "center", color: "#1a73e8" }}>
        Welcome to EasySarkari
      </h2>

      {/* Latest Jobs Section */}
      <section style={{ marginTop: "30px" }}>
        <h3>Latest Jobs</h3>
        <div style={cardContainer}>
          <JobCard
            title="RRB NTPC 2025"
            description="Apply online for Non-Technical Popular Category"
            link="#"
          />
          <JobCard
            title="SSC CHSL 2025"
            description="Combined Higher Secondary Level Recruitment"
            link="#"
          />
        </div>
      </section>

      {/* Admit Cards Section */}
      <section style={{ marginTop: "40px" }}>
        <h3>Admit Cards</h3>
        <div style={cardContainer}>
          <JobCard
            title="UPSC CSE Prelims 2025"
            description="Download your admit card for UPSC Pre"
            link="#"
          />
          <JobCard
            title="IBPS PO 2025"
            description="IBPS PO Preliminary Admit Card available now"
            link="#"
          />
        </div>
      </section>

      {/* Results Section */}
      <section style={{ marginTop: "40px" }}>
        <h3>Results</h3>
        <div style={cardContainer}>
          <JobCard
            title="SSC GD Constable"
            description="Final result declared – Download now"
            link="#"
          />
          <JobCard
            title="Railway Group D"
            description="Check your result and cutoff marks"
            link="#"
          />
        </div>
      </section>
    </div>
  );
}

// Styles
const cardContainer = {
  display: "flex",
  gap: "20px",
  flexWrap: "wrap",
  marginTop: "10px"
};

// Reusable Card Component
function JobCard({ title, description, link }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "10px",
        padding: "15px",
        width: "250px",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
        background: "#f9f9f9"
      }}
    >
      <h4>{title}</h4>
      <p>{description}</p>
      <a href={link} style={{ color: "#1a73e8" }}>Apply Now</a>
    </div>
  );
}

export default Home;
