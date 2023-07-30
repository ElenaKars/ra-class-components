import ShowItem from './components/ShowItem';

export const App = (item) => {
  return (
    <div className="container">
      <div className="background-element">
      </div>
      <div className="highlight-window">
        <div className='highlight-overlay'></div>
      </div>
      <div className="window">
        <ShowItem item={item} />
      </div>
    </div>
    )
};
