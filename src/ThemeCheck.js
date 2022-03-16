const ThemeCheck = () => {
    return (
      <div style={{"height":"200px"}}>
        <button type="button" className="btn btn-primary">
          Primary
        </button>
        <button type="button" className="btn btn-secondary">
          Secondary
        </button>
        <button type="button" className="btn btn-success">
          Success
        </button>
        <button type="button" className="btn btn-danger">
          Danger
        </button>
        <button type="button" className="btn btn-tertiary">
          Warning
        </button>
        <button type="button" className="btn btn-info">
          Info
        </button>
      </div>
    );
}

export default ThemeCheck;