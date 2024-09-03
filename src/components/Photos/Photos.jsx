import React from "react";
import { useLoaderData } from "react-router-dom";
import Photo from "../Photo/Photo";

const Photos = () => {
  const photos = useLoaderData();

  return (
    <div>
      <h1 className="text center text-5xl">Photos</h1>
      <div className="grid grid-cols-3 gap-5">
        {photos.slice(1, 20).map((photo) => {
          return <Photo key={photo.id} photo={photo}></Photo>;
        })}
      </div>
    </div>
  );
};

export default Photos;
