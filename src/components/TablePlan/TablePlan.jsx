import { AiOutlineCheck } from "react-icons/ai";
const TablePlan = () => {
  return (
    <>
      <h2 className="display-6 text-center mb-4">Compare Plans</h2>
      <div className="container">
        <div className="table-responsive">
          <table className="table text-center">
            <thead>
              <tr>
                <th style={{ width: "34%" }}></th>
                <th style={{ width: "22%" }}>Free</th>
                <th style={{ width: "22%" }}>Pro</th>
                <th style={{ width: "22%" }}>Enterprise</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="text-start">
                  Public
                </th>
                <td>
                  <AiOutlineCheck />
                </td>
                <td>
                  <AiOutlineCheck />
                </td>
                <td>
                  <AiOutlineCheck />
                </td>
              </tr>
              <tr>
                <th scope="row" className="text-start">
                  Private
                </th>
                <td></td>
                <td>
                  <AiOutlineCheck />
                </td>
                <td>
                  <AiOutlineCheck />
                </td>
              </tr>
            </tbody>

            <tbody>
              <tr>
                <th scope="row" className="text-start">
                  Permissions
                </th>
                <td>
                  <AiOutlineCheck />
                </td>
                <td>
                  <AiOutlineCheck />
                </td>
                <td>
                  <AiOutlineCheck />
                </td>
              </tr>
              <tr>
                <th scope="row" className="text-start">
                  Sharing
                </th>
                <td></td>
                <td>
                  <AiOutlineCheck />
                </td>
                <td>
                  <AiOutlineCheck />
                </td>
              </tr>
              <tr>
                <th scope="row" className="text-start">
                  Unlimited members
                </th>
                <td></td>
                <td>
                  <AiOutlineCheck />
                </td>
                <td>
                  <AiOutlineCheck />
                </td>
              </tr>
              <tr>
                <th scope="row" className="text-start">
                  Extra security
                </th>
                <td></td>
                <td></td>
                <td>
                  <AiOutlineCheck />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default TablePlan;
