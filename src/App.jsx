import  { useState, useEffect } from "react";
import "./App.css";

const colorBands = [
  { color: "black", value: 0, multiplier: 1  },
  { color: "brown", value: 1, multiplier: 10},
  { color: "red", value: 2, multiplier: 100},
  { color: "orange", value: 3, multiplier: 1000 },
  { color: "yellow", value: 4, multiplier: 10000},
  { color: "green", value: 5, multiplier: 100000 },
  { color: "blue", value: 6, multiplier: 1000000 },
  { color: "violet", value: 7, multiplier: 10000000 },
  { color: "gray", value: 8},
  { color: "white", value: 9 },
  { color: "gold", value: null, multiplier: 0.1, tolerance: 5 },
  { color: "silver", value: null, multiplier: 0.01, tolerance: 10 },
];

function App() {
  const [band1, setBand1] = useState(null);
  const [band2, setBand2] = useState(null);
  const [multiplier, setMultiplier] = useState(null);
  const [tolerance, setTolerance] = useState(null);
  const [resistanceValue, setResistanceValue] = useState("");

  // useEffect para calcular el valor automáticamente cuando todos los selects tengan valor
  useEffect(() => {
    console.log(multiplier);
    if (band1 !== null && band2 !== null && multiplier !== null) {
      const value = (band1 * 10 + band2) * multiplier;
      const tol = tolerance !== null ? `± ${tolerance}%` : "";
      setResistanceValue(`${value}Ω ${tol}`);
    }
  }, [band1, band2, multiplier, tolerance]);

  return (
    <div className="App">
      <h1>Calculadora de Resistencia PWA</h1>
      {/* Placeholder para la imagen de las equivalencias de colores */}
      <div className="image-placeholder">
        <img src="tabla.png" height={300}/>
      </div>
      
      <div className="selectors">
        <div>
          <label>Banda 1: </label>
          <select onChange={(e) => setBand1(Number(e.target.value))}>
            <option value="">Selecciona un color</option>
            {colorBands.map(
              (band, index) =>
                band.value !== null && (
                  <option
                    key={index}
                    value={band.value}
                    style={{ backgroundColor: band.color, color: "#fff" }}
                  >
                    {band.color}
                  </option>
                )
            )}
          </select>
        </div>

        <div>
          <label>Banda 2: </label>
          <select onChange={(e) => setBand2(Number(e.target.value))}>
            <option value="">Selecciona un color</option>
            {colorBands.map(
              (band, index) =>
                band.value !== undefined && (
                  <option
                    key={index}
                    value={band.value}
                    style={{ backgroundColor: band.color, color: "#fff" }}
                  >
                    {band.color}
                  </option>
                )
            )}
          </select>
        </div>

        <div>
          <label>Multiplicador: </label>
          <select onChange={(e) => setMultiplier(Number(e.target.value).toFixed(2))}>
            <option value="">Selecciona un color</option>
            {colorBands.map(
              (band, index) =>
                band.multiplier !== undefined && (
                  console.log(band.multiplier), 
                  <option
                    key={index}
                    value={band.multiplier}
                    style={{ backgroundColor: band.color, color: "#fff" }}
                  >
                    {band.color}
                  </option>
                )
            )}
          </select>
        </div>

        <div>
          <label>Tolerancia: </label>
          <select onChange={(e) => setTolerance(Number(e.target.value))}>
            <option value="">Selecciona un color</option>
            {colorBands.map(
              (band, index) =>
                band.tolerance !== undefined && (
                  <option
                    key={index}
                    value={band.tolerance}
                    style={{ backgroundColor: band.color, color: "#fff" }}
                  >
                    {band.color}
                  </option>
                )
            )}
          </select>
        </div>
      </div>

      <div>
        <h3>Valor de la Resistencia:</h3>
        <p>{resistanceValue}</p>
      </div>
    </div>
  );
}

export default App;
