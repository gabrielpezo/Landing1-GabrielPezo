import React from 'react';

const InteractiveEnglishExercise = () => {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
        <div className="container">
          <a className="navbar-brand text-success" href="#">English Exercises</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#categories">Categories</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Header */}
      <header className="bg-success text-white text-center py-4">
        <h1 className="display-4">Interactive English Exercise Database</h1>
        <p className="lead">Explore a wide range of interactive exercises to enhance English learning for educators and students.</p>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <h2>Discover Exercises to Empower Learning</h2>
      </section>

      {/* Categories Section */}
      <section id="categories" className="container my-5">
        <h2 className="text-center text-success mb-4">Explore Categories</h2>
        <div className="row g-4">
          <div className="col-lg-3 col-md-6">
            <div className="card feature shadow-sm border-0">
              <div className="card-body text-center">
                <h3 className="card-title text-success">Grammar Exercises</h3>
                <p className="card-text">Master English grammar with interactive activities tailored for all levels.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="card feature shadow-sm border-0">
              <div className="card-body text-center">
                <h3 className="card-title text-success">Vocabulary Exercises</h3>
                <p className="card-text">Expand your vocabulary with fun and engaging word-building challenges.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="card feature shadow-sm border-0">
              <div className="card-body text-center">
                <h3 className="card-title text-success">Pronunciation Practice</h3>
                <p className="card-text">Improve your speaking skills with tools and exercises for clear pronunciation.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="card feature shadow-sm border-0">
              <div className="card-body text-center">
                <h3 className="card-title text-success">Reading and Writing</h3>
                <p className="card-text">Enhance comprehension and writing abilities with guided exercises.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-3">
        <p className="mb-0">&copy; 2025 Interactive English Exercise Database. All Rights Reserved.</p>
      </footer>
    </>
  );
};

export default InteractiveEnglishExercise;