import './ContactInfo.css'
import phoneEmblem from "./menu_pictures/phone emblem.jpg";
import instagramEmblem from "./menu_pictures/instagram_emblem.webp";
import twitterEmblem from "./menu_pictures/twitter_emblem.jpg";
import mailEmblem from "./menu_pictures/mail_emblem.png";
export default function ContactInfo(props) {
    return (
        props.isVisibleCI &&
        <div id="contact-info-box">
            <div>
                <img src={phoneEmblem} className="contact-icon" />
                    <span>+90 123 456 7788</span>
            </div>
            <div>
                <img src={instagramEmblem} className="contact-icon" />
                    <span>instagram.com/gbahceburger0</span>
            </div>
            <div>
                <img src={twitterEmblem} className="contact-icon" />
                    <span>twitter.com/gbahceburger</span>
            </div>
            <div>
                <img src={mailEmblem} className="contact-icon" />
                    <span>gbahceburger@mail.com</span>
            </div>
        </div>)
}