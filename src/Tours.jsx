import Tour from './components/Tour';

const Tours = ({ tours, removeTour }) => {
  return (
    <div>
      <h1 className="text-center mb-4">Suggested Tours</h1>

      <div>
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
        })}
      </div>
    </div>
  );
};

export default Tours;
