import './Content.css'
import Card from './Card.js'
import Carousel from 'react-bootstrap/Carousel'
import BoatImage from '.././media/boat-with-girl.jpg'
import ClientCatchImage from '.././media/customer-with-fish.jpg'
import ClientGroupCatchImage from '.././media/customer-group-with-fish.jpg'

const contentText1 = 'In semper a enim ut rutrum. Mauris non luctus tortor. Cras varius orci est, at congue tortor lacinia pellentesque. Nunc elit risus, auctor vel purus id, dapibus consectetur dui. Sed rhoncus, est in ultrices tempus, dui dolor lacinia neque, vitae rhoncus est augue malesuada orci. Mauris ultricies elit sed mi placerat mollis. Etiam tristique consequat ante, eu iaculis odio efficitur vitae.'
const contentText2 = 'Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum eu commodo tellus, in posuere lorem. Vivamus ac laoreet lorem, ac aliquam dui. Donec velit orci, lobortis in varius eu, rhoncus ac diam. Donec vehicula metus a erat sodales cursus. Morbi at dignissim mi. Cras dui dolor, placerat vel diam eget, dignissim hendrerit orci. '

const contentText = contentText1 + contentText2;

const imageSlideshow = (
  <Carousel variant="dark" className='Carousel'>
    <Carousel.Item>
      <img
        className="d-block"
        src={BoatImage}
        alt="First slide"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block"
        src={ClientCatchImage}
        alt="Second slide"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block"
        src={ClientGroupCatchImage}
        alt="Third slide"
      />
    </Carousel.Item>
  </Carousel>
);

const Content = () => {
  return(
    <div className='Content'>      
      <Card text={contentText} image={BoatImage}/>
      <Card text={contentText} image={ClientCatchImage} />
      <Card text={contentText} image={ClientGroupCatchImage} />
      {imageSlideshow}
    </div>
  );
}

export default Content;