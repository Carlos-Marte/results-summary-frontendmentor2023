export const SummaryItem = ({ summaryName, summaryScore, summaryIcon, summaryColor }) => {
  return (
    <li className={`Summary-item Summary-item--color${summaryColor}`}>
      <div className='Summary-itemContainer'>
        <div className='Summary-itemName'>
          <img className='Summary-itemIcon' src={summaryIcon} alt={`Image of ${summaryName}`} />

          <span className={`Summary-summaryName Summary-summaryName--color${summaryColor}`}>{summaryName}</span>
        </div>

        <div className='Summary-itemScore'>
          <span className='Summary-scoreSpan Summary-scoreSpan--opacityFull'>{summaryScore}</span>
          <span className='Summary-scoreSpan'> / 100</span>
        </div>
      </div>
    </li>
  )
}
