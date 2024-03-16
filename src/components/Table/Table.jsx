import PropTypes from 'prop-types';
import Tables from './Tables';

const Table = ({ tables }) => {
    return (
        <div className="overflow-x-auto border-2 rounded-xl min-w-fit">
            <h1 className="text-2xl">Want to cook: {tables.length}</h1>
            <hr />
            <table className="table">

                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Time</th>
                        <th>Calories</th>
                        <th></th>
                    </tr>

                </thead>


                <tbody>
                    {
                        tables.map(table =>
                            <tr key={table.recipe_id}>
                                <td>{table.recipe_id}</td>
                                <td>{table.recipe_name}</td>
                                <td>{table.preparing_time}</td>
                                <td>{table.calories}</td>
                                <td><button className='btn btn-accent rounded-xl'>Preparing</button></td>
                            </tr>)
                    }
                </tbody>

            </table>

            <h1 className="text-2xl">Currently cooking: 02</h1>

            <table className="table">

                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Time</th>
                        <th>Calories</th>
                        <th></th>
                    </tr>

                    <tr>
                        <th></th>
                        <th></th>
                        <th>Total Time = </th>
                        <th>Total Calories = </th>
                        <th></th>
                    </tr>

                </thead>


                <tbody>

                </tbody>

            </table>
        </div>
    );
};


Table.propTypes = {
    tables: PropTypes.array
}
export default Table;