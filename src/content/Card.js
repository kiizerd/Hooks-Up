import './Card.css'

const Card = (props) => {
  const truncateString = (str, maxSize) => {
    if (str.length <= maxSize) {
      return str
    }

    return str.slice(0, maxSize) + '...'
  }

  const truncatedText = truncateString(props.text, 200);

  if (props.image) {

    return(
      <div className="Card">
        <img
          className='Card-image'
          src={props.image}
          alt="The boat the tours are taken on."></img>
          <p className='Card-text'>
            {truncatedText}
          </p>
      </div>
    );
  } else {
    return(
      <div className="Card">
        {truncatedText}
      </div>
    );
  }
}

export default Card;