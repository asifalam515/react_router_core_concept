import React from "react";
import { Link } from "react-router-dom";

const Photo = ({ photo }) => {
  const { id, title } = photo;
  console.log(photo);
  return (
    <div>
      <div className="card bg-primary text-primary-content w-96">
        <div className="card-body">
          <h2 className="card-title"> {title} </h2>

          <div className="card-actions justify-end">
            <Link to={`photo/${id}`} className="btn">
              See Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Photo;
