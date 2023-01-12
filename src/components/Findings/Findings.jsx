import React, { useState } from "react";
import Others from "../Others/Others";

function Findings({
  Fyes,
  Fno,
  Swelling,
  Erythema,
  Effusion,
  Ecchymosis,
  Redness,
  Edema,
  Deformity,
  Swelling1,
  Erythema1,
  Effusion1,
  Ecchymosis1,
  Redness1,
  Edema1,
  Deformity1,
  FNoother,
  FyesOther,
}) {
  const [findyes, setFindyes] = useState(false);
  const [findno, setFindno] = useState(false);
  const [swelling, setSwelling] = useState(true);
  const [erythema, setErythema] = useState(true);
  const [effusion, setEffusion] = useState(true);
  const [ecchymosis, setEcchymosis] = useState(true);
  const [redness, setRedness] = useState(true);
  const [edema, setEdema] = useState(true);
  const [deformity, setDeformity] = useState(true);
  const [swelling1, setSwelling1] = useState(true);
  const [erythema1, setErythema1] = useState(true);
  const [effusion1, setEffusion1] = useState(true);
  const [ecchymosis1, setEcchymosis1] = useState(true);
  const [redness1, setRedness1] = useState(true);
  const [edema1, setEdema1] = useState(true);
  const [deformity1, setDeformity1] = useState(true);
  return (
    <span>
      {Fno.map((value) => (
        <span className="scar">
          <label>
            <input
              type="checkbox"
              name={value.name}
              onClick={() => setFindno(true)}
            />
            <span>No</span>
          </label>
        </span>
      ))}
      {Fyes.map((value) => (
        <span className="scar">
          <label>
            <input
              type="checkbox"
              name={value.name}
              onClick={() => setFindyes(true)}
            />
            <span>Yes</span>
          </label>
        </span>
      ))}
      <span className="reset">
        <label>
          <input
            type="radio"
            name="Reset"
            onClick={() => {
              setFindyes(false);
              setFindno(false);
              setSwelling1(true);
              setErythema1(true);
              setEffusion1(true);
              setEcchymosis1(true);
              setRedness1(true);
              setEdema1(true);
              setDeformity1(true);
              setSwelling(true);
              setErythema(true);
              setEffusion(true);
              setEcchymosis(true);
              setRedness(true);
              setEdema(true);
              setDeformity(true);
            }}
          />
          <span>Resest</span>
        </label>
      </span>
      <br />

      {findno ? (
        <span>
          <h4>No</h4>
          <div style={{ display: "flex" }}>
            {swelling1 ? (
              <>
                {Swelling.map((value) => (
                  <span className="scar">
                    <label>
                      <input
                        type="checkbox"
                        name={value.name}
                        onClick={() => setSwelling(false)}
                      />
                      <span>Swelling</span>
                    </label>
                  </span>
                ))}
              </>
            ) : null}
            {erythema1 ? (
              <>
                {Erythema.map((value) => (
                  <span className="scar">
                    <label>
                      <input
                        type="checkbox"
                        name={value.name}
                        onClick={() => setErythema(false)}
                      />
                      <span>Erythema</span>
                    </label>
                  </span>
                ))}
              </>
            ) : null}
            {effusion1 ? (
              <>
                {Effusion.map((value) => (
                  <span className="scar">
                    <label>
                      <input
                        type="checkbox"
                        name={value.name}
                        onClick={() => setEffusion(false)}
                      />
                      <span>Effusion</span>
                    </label>
                  </span>
                ))}
              </>
            ) : null}
            {ecchymosis1 ? (
              <>
                {Ecchymosis.map((value) => (
                  <span className="exam1">
                    <label>
                      <input
                        type="checkbox"
                        name={value.name}
                        onClick={() => setEcchymosis(false)}
                      />
                      <span>Ecchymosis</span>
                    </label>
                  </span>
                ))}
              </>
            ) : null}
            {redness1 ? (
              <>
                {Redness.map((value) => (
                  <span className="scar">
                    <label>
                      <input
                        type="checkbox"
                        name={value.name}
                        onClick={() => setRedness(false)}
                      />
                      <span>Redness</span>
                    </label>
                  </span>
                ))}
              </>
            ) : null}
            {edema1 ? (
              <>
                {Edema.map((value) => (
                  <span className="scar">
                    <label>
                      <input
                        type="checkbox"
                        name={value.name}
                        onClick={() => setEdema(false)}
                      />
                      <span>Edema</span>
                    </label>
                  </span>
                ))}
              </>
            ) : null}
            {deformity1 ? (
              <>
                {Deformity.map((value) => (
                  <span className="scar">
                    <label>
                      <input
                        type="checkbox"
                        name={value.name}
                        onClick={() => setDeformity(false)}
                      />
                      <span>Deformity</span>
                    </label>
                  </span>
                ))}
              </>
            ) : null}
            <Others other={FNoother} />
            <span className="reset">
              <label>
                <input
                  type={"radio"}
                  name="fReser"
                  onClick={() => {
                    setSwelling(true);
                    setErythema(true);
                    setEffusion(true);
                    setEcchymosis(true);
                    setRedness(true);
                    setEdema(true);
                    setDeformity(true);
                  }}
                />
                <span>Reset</span>
              </label>
            </span>
          </div>
        </span>
      ) : null}
      <br />
      {findyes ? (
        <span>
          <h4>Yes</h4>
          <div style={{ display: "flex" }}>
            {swelling ? (
              <>
                {Swelling1.map((value) => (
                  <span className="scar">
                    <label>
                      <input
                        type="checkbox"
                        name={value.name}
                        onClick={() => setSwelling1(false)}
                      />
                      <span>Swelling</span>
                    </label>
                  </span>
                ))}
              </>
            ) : null}
            {erythema ? (
              <>
                {Erythema1.map((value) => (
                  <span className="scar">
                    <label>
                      <input
                        type="checkbox"
                        name={value.name}
                        onClick={() => setErythema1(false)}
                      />
                      <span>Erythema</span>
                    </label>
                  </span>
                ))}
              </>
            ) : null}
            {effusion ? (
              <>
                {Effusion1.map((value) => (
                  <span className="scar">
                    <label>
                      <input
                        type="checkbox"
                        name={value.name}
                        onClick={() => setEffusion1(false)}
                      />
                      <span>Effusion</span>
                    </label>
                  </span>
                ))}
              </>
            ) : null}
            {ecchymosis ? (
              <>
                {Ecchymosis1.map((value) => (
                  <span className="exam1">
                    <label>
                      <input
                        type="checkbox"
                        name={value.name}
                        onClick={() => setEcchymosis1(false)}
                      />
                      <span>Ecchymosis</span>
                    </label>
                  </span>
                ))}
              </>
            ) : null}
            {redness ? (
              <>
                {Redness1.map((value) => (
                  <span className="scar">
                    <label>
                      <input
                        type="checkbox"
                        name={value.name}
                        onClick={() => setRedness1(false)}
                      />
                      <span>Redness</span>
                    </label>
                  </span>
                ))}
              </>
            ) : null}
            {edema ? (
              <>
                {Edema1.map((value) => (
                  <span className="scar">
                    <label>
                      <input
                        type="checkbox"
                        name={value.name}
                        onClick={() => setEdema1(false)}
                      />
                      <span>Edema</span>
                    </label>
                  </span>
                ))}
              </>
            ) : null}
            {deformity ? (
              <>
                {Deformity1.map((value) => (
                  <span className="scar">
                    <label>
                      <input
                        type="checkbox"
                        name={value.name}
                        onClick={() => setDeformity1(false)}
                      />
                      <span>Deformity</span>
                    </label>
                  </span>
                ))}
              </>
            ) : null}
            <Others other={FyesOther} />
            <span className="reset">
              <label>
                <input
                  type={"radio"}
                  name="fReser"
                  onClick={() => {
                    setSwelling1(true);
                    setErythema1(true);
                    setEffusion1(true);
                    setEcchymosis1(true);
                    setRedness1(true);
                    setEdema1(true);
                    setDeformity1(true);
                  }}
                />
                <span>Reset</span>
              </label>
            </span>
          </div>
        </span>
      ) : null}
    </span>
  );
}
export default Findings;
