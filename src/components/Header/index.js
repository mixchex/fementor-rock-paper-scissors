import React from "react";

const Header = ({ score = 0, type = "standard" }) => {
  return (
    <div className="flex justify-between items-center border border-outline p-4 rounded-lg sm:rounded-2xl">
      {type === "standard" ? (
        <h1 className="text-body sm:text-4xl leading-[1rem] sm:leading-[2rem] block text-white uppercase w-96">
          Rock
          <br />
          Paper
          <br />
          Scissors
        </h1>
      ) : (
        <h1 className="text-body sm:text-2xl leading-[0.8rem] sm:leading-[1.3rem] block text-white uppercase w-96">
          Rock
          <br />
          Paper
          <br />
          Scissors
          <br />
          Lizard
          <br />
          Spock
        </h1>
      )}
      <div className="bg-white text-center p-3 sm:p-4 rounded sm:rounded-lg">
        <div className="text-xs sm:text-sm tracking-widest text-score uppercase">
          Score
        </div>
        <div className="text-dark text-lg sm:text-5xl leading-tight">
          {score}
        </div>
      </div>
    </div>
  );
};
export default Header;
