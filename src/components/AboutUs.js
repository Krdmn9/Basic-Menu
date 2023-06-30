import './AboutUs.css'
export default function AboutUs(props) {

    return (
        props.isVisibleAU && <div id="about-us-box">
        <p>About Us</p>
        <p>Gulbahce burger is a fast food joint in Urla/İzmir. It opened for business in 2023.</p>
        </div>
        
    )
}