export const Results = () => {
  return (
    <article className='Results'>
      <p className='Results-paragraph'>Your result</p>

      <div className='Results-score'>
        <p className='Results-paragraph'>
          <span className='Results-spanBig'>76</span> of 100
        </p>
      </div>

      <div className='Results-texts'>
        <h2 className='Results-heading2'>Great</h2>
        <p className='Results-paragraph'>
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </div>
    </article>
  )
}
