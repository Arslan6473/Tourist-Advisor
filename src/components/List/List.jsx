import React from "react";
import PlaceDetails from "../PlaceDetails/PlaceDetails";
function List({ places, isLoading, type, setType }) {
  return (
    <div className="bg-[#495664] min-h-[88vh]">
      <div className="shadow-md">
        <h4 className="text-2xl text-white font-semibold px-4 py-2">
          Restaurants, Hotels & Attractions around you
        </h4>

        <div className="flex flex-col w-[150px] gap-2 px-4 py-1">
          <label  htmlFor="types" className="text-white text-sm pl-1">
            Type
          </label>
          <select
            onChange={(e) => setType(e.target.value)}
            name="types"
            id="types"
            value={type}
            className=" bg-[#495664] text-white border-b-2 focus:outline-none"
          >
            <option value="restaurants">Restaurants</option>
            <option value="hotels">Hotels</option>
            <option value="attractions">Attractions</option>
          </select>
        </div>
      </div>

      <div className="grid place-items-center overflow-x-hidden   gap-3 max-h-[380px] overflow-y-auto ">
        {isLoading ? (
          <>
            <h1 className="text-white text-3xl font-medium overflow-hidden p-4">Loding....</h1>
          </>
        ) : (
          <>
            {places?.map((place,i) => (
              <div>
                <PlaceDetails key={i} place={place} />
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}

export default List;
