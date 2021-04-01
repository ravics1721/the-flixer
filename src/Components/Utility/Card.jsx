import React from "react";
import PropTypes from "prop-types";
import { getImage } from "../../Services/movies";
import "../Style/card.css";
import { Link } from "react-router-dom";
import { toNameDate } from "../../Services/utility";

const Card = ({ id, rating, title, relDate, path, isTV }) => {
  const src = getImage(path);
  return (
    <div>
      <div class="card">
        <Link to={isTV ? `/tv/${id}` : `/movie/${id}`}>
          <div class="img" style={{ backgroundImage: `url(${src})` }}></div>
        </Link>
        <div class="rating">{rating}⭐</div>
        <h2 class="title">
          <Link to={isTV ? `/tv/${id}` : `/movie/${id}`} className="card-link">
            {title}
          </Link>
        </h2>
        <p class="released">{toNameDate(relDate)}</p>
      </div>
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.string,
  rating: PropTypes.number,
  title: PropTypes.string,
  relDate: PropTypes.string,
  path: PropTypes.string,
  isTV: PropTypes.bool,
};

export default Card;
