import "./App.css";

function App() {
  return (
    <>
      <div className="cover">
        <h1>Discover what's out there.</h1>
        <form className="flex-form">
          <label htmlFor="from">
            <i className="ion-location" />
          </label>
          <input type="search" placeholder="Where do you want to go?" />
          <input type="submit" defaultValue="Search" />
        </form>
        <div id="madeby">
          <span>
            Photo by{" "}
            <a href="https://unsplash.com/@benblenner" target="_blank">
              Ben Blennerhassett
            </a>
          </span>
        </div>
      </div>
    </>
  );
}

export default App;
