const Notification = props => {
  //  Write your code here.
  const {imageStyle, nstyle, textContent, imageUrl} = props;
  return (
    <div className={nstyle}>
      <img className={imageStyle} src={imageUrl}/>
      <p>{textContent}</p>
    </div>
  )
}

const element = (
  //  Write your code here.   
  <div className="bg-container">
    <h1 className="heading">Notifications</h1>
    <Notification imageStyle="icon-image" nstyle="information" textContent="Information Messege" imageUrl = "https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"/>
    <Notification imageStyle="icon-image" nstyle="success" textContent="Success Messege" imageUrl = "https://assets.ccbp.in/frontend/react-js/success-icon-img.png"/>
    <Notification imageStyle="icon-image" nstyle="warning" textContent="Warning Messege" imageUrl = "https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"/>
    <Notification imageStyle="icon-image" nstyle="error" textContent="Error Messege" imageUrl = "https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"/>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
