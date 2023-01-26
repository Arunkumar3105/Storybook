import React, { useState } from "react";
import Others from "../Others/Others";

function Findings({
  fyes,
  fno,
  swelling,
  erythema,
  effusion,
  ecchymosis,
  redness,
  edema,
  deformity,
  swelling1,
  erythema1,
  effusion1,
  ecchymosis1,
  redness1,
  edema1,
  deformity1,
  fnoother,
  fyesother,
}) {
  const [findyes, setFindyes] = useState(false);
  const [findno, setFindno] = useState(false);
  const [Swelling, setSwelling] = useState(true);
  const [Erythema, setErythema] = useState(true);
  const [Effusion, setEffusion] = useState(true);
  const [Ecchymosis, setEcchymosis] = useState(true);
  const [Redness, setRedness] = useState(true);
  const [Edema, setEdema] = useState(true);
  const [Deformity, setDeformity] = useState(true);
  const [Swelling1, setSwelling1] = useState(true);
  const [Erythema1, setErythema1] = useState(true);
  const [Effusion1, setEffusion1] = useState(true);
  const [Ecchymosis1, setEcchymosis1] = useState(true);
  const [Redness1, setRedness1] = useState(true);
  const [Edema1, setEdema1] = useState(true);
  const [Deformity1, setDeformity1] = useState(true);
  return (
    <span>
      {fno.map((value) => (
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
      {fyes.map((value) => (
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
            {Swelling1 ? (
              <>
                {swelling.map((value) => (
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
            {Erythema1 ? (
              <>
                {erythema.map((value) => (
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
            {Effusion1 ? (
              <>
                {effusion.map((value) => (
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
            {Ecchymosis1 ? (
              <>
                {ecchymosis.map((value) => (
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
            {Redness1 ? (
              <>
                {redness.map((value) => (
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
            {Edema1 ? (
              <>
                {edema.map((value) => (
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
            {Deformity1 ? (
              <>
                {deformity.map((value) => (
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
            <Others other={fnoother} />
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
            {Swelling ? (
              <>
                {swelling1.map((value) => (
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
            {Erythema ? (
              <>
                {erythema1.map((value) => (
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
            {Effusion ? (
              <>
                {effusion1.map((value) => (
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
            {Ecchymosis ? (
              <>
                {ecchymosis1.map((value) => (
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
            {Redness ? (
              <>
                {redness1.map((value) => (
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
            {Edema ? (
              <>
                {edema1.map((value) => (
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
            {Deformity ? (
              <>
                {deformity1.map((value) => (
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
            <Others other={fyesother} />
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
