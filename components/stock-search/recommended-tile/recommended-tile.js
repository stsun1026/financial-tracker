import styles from './recommended-tile.module.css';

const RecommendedTile = ({
  name, 
  exchange, 
  tickerSymbol, 
  onClick
}) => {
  return (  
    <div className = {styles.mainContainer} onClick = {onClick}>
      <div className = {styles.innerContainer}>
        <div className = {styles.nameAndSymbol}>
          <h1 className = {styles.tickerSymbol}>{tickerSymbol}</h1>
          <h2 className = {styles.stockName}>{name}</h2>
        </div>
        <h2 className = {styles.exchangeName}>{exchange}</h2>
      </div>
    </div>
  );
};

export default RecommendedTile;