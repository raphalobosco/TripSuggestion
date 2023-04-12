const Loading = () => {
  return (
    <div className="card mx-auto" aria-hidden="true">
      <div className="card-img-top " />
      <div className="card-body">
        <h5 className="card-title placeholder-glow">
          <span className="placeholder col-6"></span>
        </h5>
        <p className="card-text placeholder-glow">
          <span className="placeholder col-7"></span>
          <span className="placeholder col-4"></span>
          <span className="placeholder col-4"></span>
          <span className="placeholder col-6"></span>
          <span className="placeholder col-8"></span>
        </p>
        <a className="btn btn-primary disabled placeholder col-6"></a>
      </div>
    </div>
  );
};

export default Loading;
