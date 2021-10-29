import '../../styles/footer.scss';

const Footer = () => {
  return (
    <div className="Footer">
      <div> 
        <h1 className="footer--font footer--title"> HeLP Network </h1> 
        {/* <p className="footer--font">(Helping and Law Professionals)</p>  */}
      </div>
      <h4 className="footer--font"> Help. Learn. Connect. Grow.</h4>
      <p className="footer--font mission--text"> Our mission is to connect expertise across speciality areas of public helping professions to ask and find questions to important legal and ethical concerns central to helping to support our communities and each other. </p>
    </div>
  )
}

export default Footer;