import Navbar from "../Components/Navbar";
import data from "../utils/data";
import Image from "next/image";
const Try = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="columns">
          {data.products.map((product) => (
            <div className="column is-4" key={product.name}>
              <div className="card">
                <div className="card-image">
                  <figure className="image is-square">
                    <Image
                      src={product.image}
                      alt={product.name}
                      layout="fill"
                    />
                  </figure>
                  <div className="card-content">
                    <h1 className="title is-size-4">{product.name}</h1>
                    <h1 className="subtitle is-size-4">{product.price}</h1>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Try;
