const ImageRating = ({ stars }) => {
  const renderStars = () => {
    const starIcons = [];
    const wholeStars = Math.floor(stars); // Get the whole number part
    const hasHalfStar = stars % 1 !== 0; // Check if there is a fractional part

    for (let i = 0; i < wholeStars; i++) {
      starIcons.push(<img key={i} src="../images/star.png" alt="star" />);
    }

    if (hasHalfStar) {
      starIcons.push(<img key="half" src="half-star.png" alt="half star" />);
    }

    return starIcons;
  };

  return <div className="card--stars">{renderStars()}</div>;
};

export default ImageRating;