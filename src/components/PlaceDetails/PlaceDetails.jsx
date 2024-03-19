import React from "react";
import { MdPlace } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
function PlaceDetails({ place }) {
  return (
    <div className="md:w-[600px] w-[400px]  shadow-xl my-4">
      <div
        className=" h-[350px] w-[400px] md:w-[600px] md:h-[450px] bg-center  bg-cover"
        style={{
          "background-image": `url(${
            place.photo
              ? place.photo.images.large.url
              : "https://images.pexels.com/photos/460537/pexels-photo-460537.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          })`,
        }}
      ></div>
      <div className="bg-white">
        <h1 className=" font-semibold  text-xl p-4">{place.name}</h1>
        <div className="flex justify-between px-4 pb-2">
          <h4>Price</h4>
          <p>{place.price_level}</p>
        </div>
        <div className="flex justify-between px-4 pb-2">
          <h4>Ranking</h4>
          <p>{place.ranking}</p>
        </div>
        <div className="grid p-4 grid-cols-8 items-center gap-24 ">
          {place?.cuisine?.map((cusin, i) => (
    
              <div key={i} className="text-center  text-sm rounded-xl p-2 w-20 text-white bg-[#495664]">
                {cusin.name}
              </div>
           
          ))}
        </div>
        {place?.address && (
          <div className="flex justify-between px-4 pb-2">
            <MdPlace />
            <p>{place.address}</p>
          </div>
        )}
        {place?.phone && (
          <div className="flex justify-between px-4 pb-2">
            <FaPhone />
            <p>{place.phone}</p>
          </div>
        )}
        <div>
          {place?.wen_url && (
            <button
              className="p-4"
              onClick={() => window.open(place.wen_url, "_blank")}
            >
              Trip Advisor
            </button>
          )}
          {place?.website && (
            <button
              className="p-4"
              onClick={() => window.open(place.website, "_blank")}
            >
              Website
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default PlaceDetails;
