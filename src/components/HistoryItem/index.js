import './index.css'

const HistoryItem = props => {
  const {historyDetails, deleteHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyDetails

  const onClickDelete = () => {
    deleteHistory(id)
  }

  return (
    <li className="history-item">
      <div className="history-items-container">
        <p className="time-accessed"> {timeAccessed} </p>
        <div className="logo-container">
          <img src={logoUrl} className="logo" alt="domain logo" />
          <div className="title-domain-container">
            <p className="title"> {title} </p>
            <p className="domain"> {domainUrl} </p>
          </div>
        </div>
      </div>
      <button
        className="delete-button"
        type="button"
        onClick={onClickDelete}
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="delete-icon"
        />
      </button>
    </li>
  )
}

export default HistoryItem
