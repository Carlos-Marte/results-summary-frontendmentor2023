import { SummaryList } from './SummaryList'

export const Summary = () => {
  return (
    <article className='Summary'>
      <h2 className='Summary-heading2'>Summary</h2>

      <SummaryList />

      <button className='Summary-button'>Continue</button>
    </article>
  )
}
