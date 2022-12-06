/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Image from "next/image";

function detailVideoRecipe() {
  return (
    <div>
      <div className="container">
        <div className="row mb-5">
          <div className="col-7">
            <Image src="/vid1.png" width={970} height={500} />
            <h3 className="mt-4">
              Beef Steak with Curry Sauce - [Step 4] Cut the condiment and then
              mix it
            </h3>
            <h6 className="text-secondary">3 month ago</h6>
          </div>
          <div className="col-3 offset-2">
            <h4>Next</h4>
            <Image src="/vid2.png" width={290} height={150} />
            {/* <h6 className="text-white">[Step 5]</h6> */}
            <h6>
              Beef Steak with Curry Sauce - [Step 5] Saute condiments together
              until turn brown
            </h6>
            <p className="text-secondary">HanaLohana - 3 month ago</p>
            <Image src="/vid3.png" width={290} height={150} />
            {/* <h6 className="text-white">[Step 5]</h6> */}
            <h6>
              Beef Steak with Curry Sauce - [Step 6] Roast beef until it’s
              medium rare
            </h6>
            <p className="text-secondary">HanaLohana - 3 month ago</p>
            <Image src="/vid3.png" width={290} height={150} />
            {/* <h6 className="text-white">[Step 5]</h6> */}
            <h6>
              Beef Steak with Curry Sauce - [Step 7] Roast beef until it’s
              medium rare
            </h6>
            <p className="text-secondary">HanaLohana - 3 month ago</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default detailVideoRecipe;
