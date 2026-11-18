import { useState } from 'react'
import './App.css'

function DenominationCard({ label, testId, count }) {
  return (
    <div className="col-xs-6 col-sm-3">
      <div className="well text-center">
        <h4>{label}</h4>
        <p data-testid={testId}>{count}</p>
      </div>
    </div>
  )
}

function App() {
  const [amountDue, setAmountDue] = useState(' ');
  const [amountReceived, setAmountReceived] = useState(' ');
  const [changeDue, setChangeDue] = useState(0);

  const [twenties, setTwenties] = useState(0);
  const [tens, setTens] = useState(0);
  const [fives, setFives] = useState(0);
  const [ones, setOnes] = useState(0);
  const [quarters, setQuarters] = useState(0);
  const [dimes, setDimes] = useState(0);
  const [nickels, setNickels] = useState(0);
  const [pennies, setPennies] = useState(0);

  function calculate() {
    const dueCents = Math.round(Number(amountDue) * 100)
    const receivedCents = Math.round(Number(amountReceived) * 100)
    const changeCents = receivedCents - dueCents

    setChangeDue(changeCents / 100)

    let remaining = Math.max(changeCents, 0)

    const twentiesCount = Math.floor(remaining / 2000)
    remaining = remaining % 2000

    const tensCount = Math.floor(remaining / 1000)
    remaining = remaining % 1000

    const fivesCount = Math.floor(remaining / 500)
    remaining = remaining % 500

    const onesCount = Math.floor(remaining / 100)
    remaining = remaining % 100

    const quartersCount = Math.floor(remaining / 25)
    remaining = remaining % 25

    const dimesCount = Math.floor(remaining / 10)
    remaining = remaining % 10

    const nickelsCount = Math.floor(remaining / 5)
    remaining = remaining % 5

    const penniesCount = remaining

    setTwenties(twentiesCount)
    setTens(tensCount)
    setFives(fivesCount)
    setOnes(onesCount)
    setQuarters(quartersCount)
    setDimes(dimesCount)
    setNickels(nickelsCount)
    setPennies(penniesCount)
  }

  return (
    <>
      <div className="container">
        <h1>Change Calculator</h1>
        <p className="lead">Making Cents of Your Change.</p>
        <hr />

        <div className="row">
          <div className="col-md-4">
            <div className="panel panel-default">
              <div className="panel-heading">Enter Information</div>
              <div className="panel-body">
                <div className="form-group">
                  <label htmlFor="amountDue">How much is due?</label>
                  <input id="amountDue" data-testid="amountDue" type="number" step="0.01" className="form-control"
                    value={amountDue} onChange={(e) => setAmountDue(e.target.value)} />
                </div>
                <div className="form-group">
                  <label htmlFor="amountReceived">How much was received?</label>
                  <input id="amountReceived" data-testid="amountReceived" type="number" step="0.01" className="form-control"
                    value={amountReceived} onChange={(e) => setAmountReceived(e.target.value)} />
                </div>
              </div>
              <div className="panel-footer">
                <button data-testid="calculate" className="btn btn-primary btn-block" onClick={calculate}>Calculate</button>
              </div>
            </div>
          </div>

          <div className="col-md-8">
            <div className="panel panel-default">
              <div className="panel-body">
                {changeDue >= 0 ? (
                  <div className="alert alert-success text-center">
                    The total change due is ${changeDue.toFixed(2)}
                  </div>
                ) : (
                  <div className="alert alert-danger text-center">
                    Additional money owed is ${Math.abs(changeDue).toFixed(2)}
                  </div>
                )}
                <div className="row">
                  <DenominationCard label="Twenties" testId="twenties" count={twenties} />
                  <DenominationCard label="Tens" testId="tens" count={tens} />
                  <DenominationCard label="Fives" testId="fives" count={fives} />
                  <DenominationCard label="Ones" testId="ones" count={ones} />
                  <DenominationCard label="Quarters" testId="quarters" count={quarters} />
                  <DenominationCard label="Dimes" testId="dimes" count={dimes} />
                  <DenominationCard label="Nickels" testId="nickels" count={nickels} />
                  <DenominationCard label="Pennies" testId="pennies" count={pennies} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
