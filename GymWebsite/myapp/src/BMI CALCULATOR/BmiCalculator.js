import React, { useState } from 'react'

export default function BmiCalculator() {
    const [height, setHeight] = useState(0);
    const [weight, setWeight] = useState(0);
    const [bmi, setBMI] = useState(0);
  
    const handleCalculate = (e) => {
      e.preventDefault();
      const heightInMeters = height / 100;
      const bmi = weight / (heightInMeters * heightInMeters);
      setBMI(bmi.toFixed(2));
    };
  return (
    
          <div className="bg-dark p-5">
            <div style={{ maxWidth: "100%"}} className="container">
                <h1 className="text-white">BMI Calculator</h1>
              <div className="row ">
                <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                  <div className="card">
                    <div class="card-body ">
                      <h5 class="card-title text-black text-center ">
                        BMI Calculator
                      </h5>
                      <form>
                        <div class="mb-2">
                          <label className="text-dark">Height (cm):</label>
                          <input
                            type="number"
                            value={height}
                            className="col-12 col-sm-12 col-md-12 col-lg-6 text-dark"
                            onChange={(e) => setHeight(e.target.value)}
                          />
                        </div>
                        <div class="mb-3">
                          <label className="text-dark text-center">
                            Weight (kg):
                          </label>
                          <input
                            type="number"
                            value={weight}
                            className="col-12 col-sm-12 col-md-12 col-lg-6 text-dark"
                            onChange={(e) => setWeight(e.target.value)}
                          />
                        </div>
                        <div>
                          <button
                            className="btn btn-sm btn-primary text-dark"
                            onClick={handleCalculate}
                          >
                            Calculate BMI
                          </button>
                          {bmi > 0 && (
                            <p className="text-dark">
                              Your BMI is: {bmi}.{" "}
                              {bmi < 18.5 && "and You are underweight."}
                              {bmi >= 18.5 &&
                                bmi < 25 &&
                                "and You are healthy."}
                              {bmi >= 25 &&
                                bmi < 30 &&
                                "and You are overweight."}
                              {bmi >= 30 && "and You are obese."}
                            </p>
                          )}
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
  )
}
