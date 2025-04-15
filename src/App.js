import React, { useEffect, useState } from "react";

function App() {
  const unlockedScreen = () => {
    return <div style={{ textAlign: "center" }}>Login oldunuz.</div>;
  };

  return (
    <CombinationLock combination={[1, 2, 3, 4]} NextScreen={unlockedScreen} />
  );
}

const CombinationLock = ({ combination, NextScreen }) => {
  const numbersArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [operatorNums, setOperatorNums] = useState([]);
  const [correct, setCorrect] = useState(null);

  useEffect(() => {
    if (operatorNums.length === 4) {
      operatorNums.join("") === combination.join("")
        ? setCorrect(true)
        : alert("yanlış kombinasyon");
      setOperatorNums([]);
    }
  }, [operatorNums]);

  const handleClick = (num) => {
    if (operatorNums.length < 4) {
      setOperatorNums((prev) => [...prev, num]);
    }
  };
  return (
    <div>
      {correct ? (
        NextScreen()
      ) : (
        <div className="border-2 border-black w-[350px] flex flex-col  ">
          <input
            value={operatorNums.join("")}
            className="w-full py-10 text-center border-2 border-black text-6xl"
          />
          <div className="grid grid-cols-3   ">
            {numbersArr.map((num) => {
              return (
                <button
                  key={num}
                  onClick={() => handleClick(num)}
                  className="border-2 border-black text-xl p-10 "
                >
                  {num}
                </button>
              );
            })}
            <div></div>
            <button
              onClick={() => handleClick(0)}
              className="border-2 border-black text-xl p-10"
            >
              0
            </button>
            <div></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
