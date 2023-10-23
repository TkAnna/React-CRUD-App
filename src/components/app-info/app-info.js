import './app-info.css';

const AppInfo = ({ increased, emploees }) => {

    return (
        <div className="app-info">
            <h1>Accounting of employees in the company</h1>
            <h2>Total number of employees: {emploees}</h2>
            <h2>A cash bonus receive: {increased}</h2>
        </div>
    )
}

export default AppInfo;