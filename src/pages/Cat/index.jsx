import React from "react";
import CardCat from "../../components/cardCat";

const Cat = () => {
  return (
    <div>
      <div className="py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <CardCat
                imageUrl="http://placekitten.com/g/300/200"
                title="First Post"
                published="6 feb, 2020"
              />
            </div>
            <div className="col-md-4">
              <CardCat
                imageUrl="http://placekitten.com/300/200"
                title="Second Post"
                published="5 feb, 2020"
              />
            </div>
            <div className="col-md-4">
              <CardCat
                imageUrl="http://placekitten.com/g/300/200"
                title="Third Post"
                published="3 feb, 2020"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cat;
