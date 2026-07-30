import React, { useState } from "react";
import reviews from "./data";

const Review = () => {
  const [index, setIndex] = useState(0);

  const checkNumber = (number) => {
    if (number > reviews.length - 1) {
      return 0;
    }
    if (number < 0) {
      return reviews.length - 1;
    }
    return number;
  };

  const nextPerson = () => {
    setIndex((prevIndex) => checkNumber(prevIndex + 1));
  };

  const prevPerson = () => {
    setIndex((prevIndex) => checkNumber(prevIndex - 1));
  };

  const randomPerson = () => {
    let random = Math.floor(Math.random() * reviews.length);

    while (random === index) {
      random = Math.floor(Math.random() * reviews.length);
    }

    setIndex(random);
  };

  const { id, name, job, image, text } = reviews[index];

  return (
    <article className="review">
      <img src={image} alt={name} className="person-img" />

      <h4 id={`author-${id}`} className="author">
        {name}
      </h4>

      <p className="job">{job}</p>

      <p className="info">{text}</p>

      <div>
        <button className="prev-btn" onClick={prevPerson}>
          Prev
        </button>

        <button className="next-btn" onClick={nextPerson}>
          Next
        </button>
      </div>

      <button className="random-btn" onClick={randomPerson}>
        surprise me
      </button>
    </article>
  );
};

export default Review;