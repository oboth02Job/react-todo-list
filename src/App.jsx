

export default function App() {
  return (
  <><form className="new-item-form">
    <div className="form-row">
      <label htmlFor="item">New Item</label>
      <input type="text" id="item"/>
    </div>
    
    <button className="btn">Add</button>
  </form>

      <h1 className="header">To do list</h1>

      <ul className="list">
        <li>
          <label>
            <input type="checkbox" />
            Item 1
          </label>

          <btn className="btn btn-danger">Delete</btn>
        </li>

  <li>
          <label>
            <input type="checkbox" />
            Item 2
          </label>

          <btn className="btn btn-danger">Delete</btn>
        </li>

</ul>

    </>
  )
}