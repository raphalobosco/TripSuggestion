import { useEffect, useState } from 'react';
import Loading from './components/Loading';
import Tours from './Tours';

const url = 'https://course-api.com/react-tours-project';

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTour = tours.filter((tour) => tour.id !== id);
    setTours(newTour);
  };

  const fetchTours = async () => {
    setLoading(true);
    try {
      const res = await fetch(url);
      const tours = await res.json();
      setLoading(false);
      setTours(tours);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return (
      <main className="container py-5">
        <Loading />
      </main>
    );
  }

  return (
    <div className="container text-center py-5">
      <Tours tours={tours} removeTour={removeTour} />
      {tours == '' ? (
        <button className="col-8 btn btn-primary" onClick={() => fetchTours()}>
          Reload
        </button>
      ) : (
        ''
      )}
    </div>
  );
}

export default App;
