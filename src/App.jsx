import './App.css'

function DenominationCard({ label, testId, count}) {
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
  // Add you

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
                  <input id="amountDue" data-testid="amountDue" type="number" step="0.01" className="form-control" />
                </div>
                <div className="form-group">
                  <label htmlFor="amountReceived">How much was received?</label>
                  <input id="amountReceived" data-testid="amountReceived" type="number" step="0.01" className="form-control" />
                </div>
              </div>
              <div className="panel-footer">
                <button data-testid="calculate" className="btn btn-primary btn-block">Calculate</button>
              </div>
            </div>
          </div>

          <div className="col-md-8">
            <div className="panel panel-default">
              <div className="panel-body">
                <div className="alert alert-sucess text-center">The total change due is $0.00</div>
                <div className="row">
                  <DenominationCard label="Twenties" testId="twenties" count={0} />
                  <DenominationCard label="Tens" testId="tens" count={0} />
                  <DenominationCard label="Fives" testId="fives" count={0} />
                  <DenominationCard label="Ones" testId="ones" count={0} />
                  <DenominationCard label="Quarters" testId="quarters" count={0} />
                  <DenominationCard label="Dimes" testId="dimes" count={0} />
                  <DenominationCard label="Nickels" testId="nickels" count={0} />
                  <DenominationCard label="Pennies" testId="pennies" count={0} />
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
