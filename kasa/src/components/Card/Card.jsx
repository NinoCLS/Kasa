import './card.scss'
import datas from '../../assets/api/housing.json'
import { Link } from 'react-router-dom';

const Card = () => {
	return  (
		<main className='home_gallery'>
			{datas.map(data => {
				return (
					<Link to={`/accomodation/${data.id}`}
					className='gallery_card' key={data.id}>
						<img src={data.cover} alt={data.title} />
						<h3>{data.title}</h3>
					</Link>
				)
			})}
		</main>
	)
};

export default Card;