import { SummaryItem } from './SummaryItem'
import reactionIcon from '../../assets/images/icon-reaction.svg'
import memoryIcon from '../../assets/images/icon-memory.svg'
import verbalIcon from '../../assets/images/icon-verbal.svg'
import visualIcon from '../../assets/images/icon-visual.svg'

export const SummaryList = () => {
  return (
    <ul className='Summary-list'>
      <SummaryItem
        summaryName='Reaction'
        summaryScore={80}
        summaryIcon={reactionIcon}
        summaryColor='Red'
      />
      <SummaryItem
        summaryName='Memory'
        summaryScore={92}
        summaryIcon={memoryIcon}
        summaryColor='Yellow'
      />
      <SummaryItem
        summaryName='Verbal'
        summaryScore={61}
        summaryIcon={verbalIcon}
        summaryColor='Teal'
      />
      <SummaryItem
        summaryName='Visual'
        summaryScore={72}
        summaryIcon={visualIcon}
        summaryColor='Blue'
      />
    </ul>
  )
}
