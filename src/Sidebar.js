import Help from './Help'

export default function Sidebar() {
    return <div className="sidebar">
        <form>
            <label>Filters</label>
            <input type='checkbox' value='checkbox' />
        </form>
        <Help />
    </div>
}