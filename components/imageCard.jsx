"use client";
import Typography from "./typography";
import Link from "next/link";

const ImageCards = ({
  heading = "Demo Heading",
  link = "",
  description = "Lorem Ipsum dolor sits on the wall",
  imageLink = "https://ik.imagekit.io/flyde/Hirezy/Widget.png?updatedAt=1761895813353",
  textPosition = "top",
  classNameCustom = "",
  imageClassName = "",
  variant = "compact",
}) => {
  const isRight = textPosition === "right";
  const isSoldOut = description?.toLowerCase().includes("sold out");

  const TextBlock = () => (
    <div className="image-card__content">
      <Typography variant="h3">{heading}</Typography>

      <Typography variant="body-4" className="color-black-400">
        {description}
      </Typography>
    </div>
  );

  return (
    <div
      className={`
        image-card
        image-card--${variant}
        ${isRight ? "image-card--right" : ""}
        ${classNameCustom}
        ${isSoldOut ? " cursor-pointer" : "cursor-pointer"}
      `}
    >
      {textPosition === "top" && <TextBlock />}

      <div className="image-card__media">
        <img
          src={imageLink}
          alt="image card"
          className={`image-card__img ${imageClassName}`}
        />
      </div>

      {textPosition === "bottom" && <TextBlock />}
      {textPosition === "right" && <TextBlock />}
    </div>
  );
  // ✅ conditional render
  if (isSoldOut) {
    return CardContent; // ❌ no link
  }

  return (
    <Link href={link} className="block">
      {CardContent}
    </Link>
  );
};;

export default ImageCards;
