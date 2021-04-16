import RecommendedTile from '../recommended-tile/recommended-tile';
import styles from './recommended-list.module.css';

const RecommendedList = ({
  searchTerm,
  searchResults
}) => {
  // const searchResults = [{name: 'Shopify Inc', exchange: 'TSX', tickerSymbol: 'SHOP'},{name: 'Shopify Inc', exchange: 'TSX', tickerSymbol: 'SHOP'}]
  const listRecommendedTiles = searchResults.map((results) => {
    return (
      <RecommendedTile name = {results.name} exchange = {results.exchange} tickerSymbol = {results.tickerSymbol}/>
    )
  });

  return(
    <div className = {styles.mainContainer}>
      {listRecommendedTiles}
    </div>
  )
}

export default RecommendedList;