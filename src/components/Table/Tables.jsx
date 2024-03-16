import PropTypes from 'prop-types';

const Tables = ({ tables }) => {
    const { recipe_name, preparing_time, calories } = tables;
    return (
        <div>
            <table className="table">

                <thead>
                    <tr>
                        <th></th>
                        <th>{recipe_name}</th>
                        <th>{preparing_time}</th>
                        <th>{calories}</th>
                        <th></th>
                        <td><button className='btn btn-accent rounded-xl'>Preparing</button></td>
                    </tr>

                </thead>


                <tbody>

                </tbody>

            </table>
        </div>
    );
};

Tables.propTypes = {
    tables: PropTypes.object
};

export default Tables;