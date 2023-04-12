import { useState } from 'react';

const Tour = ({ id, name, info, price, image, removeTour }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <div className="card shadow  mx-auto mb-5">
      <img src={image} className="card-img-top" />
      <div className="card-body p-4">
        <h5 className="card-title">{name}</h5>
        <p className="card-text mb-4">
          {readMore ? info : `${info.substring(0, 200)}...`}
          <a
            className="text-primary mx-2"
            onClick={() => setReadMore(!readMore)}
          >
            {readMore ? 'show less' : 'show more'}
          </a>
        </p>

        <button className="btn btn-primary me-2">
          Get now for only <strong>€{price}</strong>
        </button>
        <button
          className="btn btn-outline-secondary"
          onClick={() => removeTour(id)}
        >
          Not interested
        </button>
      </div>
    </div>
  );
};

export default Tour;
