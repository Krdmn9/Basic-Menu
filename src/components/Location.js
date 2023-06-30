import fakeMap from "./menu_pictures/fake_map_location.png";
import './Location.css'
export default function Location(props) {
    return (
        props.isVisibleL &&
        <div id="location-box">
            <div id="location-content">
                <p>Adress:</p>
                <p>12087 Sk. Gülbahçe/Urla/İzmir</p>
            </div>

            <img src={fakeMap} />
        </div>
    )

}