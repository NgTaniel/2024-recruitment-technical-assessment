import "./DivComponent.css"

const DivComponent = ({ isOpen, onClose, children }: any) => {
  
  if (!isOpen) {
    return null;
  }

  return (
    <div id='overlay' onClick={onClose}>
        <div id='contents'>
            {children}
        </div>
    </div>
  )
}

export default DivComponent