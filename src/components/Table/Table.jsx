
const Table = () => {
    return (
        <div className="overflow-x-auto border-2 rounded-xl">
            <h1 className="text-2xl">Want to cook: 01</h1>
            <hr />
            <table className="table">
                
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Time</th>
                        <th>Calories</th>
                        <th></th>
                    </tr>
                </thead>

                
                <tbody>
                
                </tbody>
                
            </table>

            <h1 className="text-2xl">Currently cooking: 02</h1>

            <table className="table">
                
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Time</th>
                        <th>Calories</th>
                        <th></th>
                    </tr>
                </thead>

                
                <tbody>
                
                </tbody>
                
            </table>
        </div>
    );
};

export default Table;