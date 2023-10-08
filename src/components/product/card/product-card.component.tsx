import React, { memo, FC } from "react";
import { ProductModel } from "../../../models/product.model";
import {
  CardCont,
  LiStyle,
  Pechka,
  Photo,
  PhotoCont,
  TitleStyle,
} from "../../../App.style";
import { Description } from "../Descritpion";

export const ProductCard: FC<ProductModel> = memo(
  ({ id, title, price, description, image, category, rating }) => {
    return (
      <LiStyle key={id}>
        <TitleStyle>{title}</TitleStyle>
        <CardCont>
          <PhotoCont>
            <Photo src={image} alt={title} />
          </PhotoCont>
          <Pechka>
            {/* Вставляем компоненту Description здесь */}
            <Description text={description} maxLength={150} />
            {/* Другие детали о продукте */}
            <p>Price: ${price}</p>
          </Pechka>
        </CardCont>
        <p>Category: {category}</p>
        {typeof rating === "object" ? (
          <div>
            <p>Rating: {rating.rate}</p>
            <p>Number of ratings: {rating.count}</p>
          </div>
        ) : (
          <p>Rating: {rating}</p>
        )}
      </LiStyle>
    );
  }
);
