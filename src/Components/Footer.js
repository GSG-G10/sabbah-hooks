const Footer = ({taskAdded, setTaskAdded, active, setActive}) => {
    const clearClass = active ? 'active': 'not-active'
    return (
        <div className="footer">
      <p className="para">
        As the saying goes, <br /> instead of waiting, why not do it now?
      </p>
      <button className={clearClass} id="clear" onClick= {() => {
          setActive(false)
        localStorage.removeItem('tasks')
        setTaskAdded(!taskAdded)
      }}>Clear All</button>
    </div>
    )
}

export default Footer;
