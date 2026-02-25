export default function CompanyComparison() {
  return (
    <div className="card">
      <h3>Investment Comparison</h3>

      <table>
        <thead>
          <tr>
            <th></th>
            <th>Company A</th>
            <th>Company B</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Risk</td>
            <td>High</td>
            <td>Moderate</td>
          </tr>
          <tr>
            <td>Return</td>
            <td>Higher</td>
            <td>Stable</td>
          </tr>
          <tr>
            <td>Liquidity</td>
            <td>Medium</td>
            <td>High</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
