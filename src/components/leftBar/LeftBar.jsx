import './leftBar.scss';
import Friends from "../../assets/1.png";
import Groups from "../../assets/2.png";
import Market from "../../assets/3.png";
import Watch from "../../assets/4.png";
import Memories from "../../assets/5.png";
import Events from "../../assets/6.png";
import Gaming from "../../assets/7.png";
import Gallery from "../../assets/8.png";
import Videos from "../../assets/9.png";
import Messages from "../../assets/10.png";
import Tutorials from "../../assets/11.png";
import Courses from "../../assets/12.png";
import Fund from "../../assets/13.png";

const LeftBar = () => {

    const profilePic = <div className="user">
        <img src="data:image/jpeg;base64,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"
            alt="" />
        <span>Susan Smith</span>
    </div>;

    return (
        <div className='leftBar'>
            <div className="container">
                <div className="menu">
                    <div className="user">
                        {profilePic}
                    </div>
                    <div className="item">
                        <img src={Friends}
                            alt="" />
                        <span>Friends</span>
                    </div>
                    <div className="item">
                        <img src={Groups}
                            alt="" />
                        <span>Groups</span>
                    </div>
                    <div className="item">
                        <img src={Market}
                            alt="" />
                        <span>Marketplace</span>
                    </div>
                    <div className="item">
                        <img src={Watch}
                            alt="" />
                        <span>Watch</span>
                    </div>
                    <div className="item">
                        <img src={Memories}
                            alt="" />
                        <span>Memories</span>
                    </div>
                </div>
                <hr />
                <div className="menu">
                    <span>Your shortcuts</span>
                    <div className="item">
                        <img src={Events}
                            alt="" />
                        <span>Events</span>
                    </div>
                    <div className="item">
                        <img src={Gaming}
                            alt="" />
                        <span>Gaming</span>
                    </div>
                    <div className="item">
                        <img src={Gallery}
                            alt="" />
                        <span>Gallery</span>
                    </div>
                    <div className="item">
                        <img src={Videos}
                            alt="" />
                        <span>Videos</span>
                    </div>
                    <div className="item">
                        <img src={Messages}
                            alt="" />
                        <span>Messages</span>
                    </div>
                </div>
                <hr />
                <div className="menu">
                    <span>Others</span>
                    <div className="item">
                        <img src={Tutorials}
                            alt="" />
                        <span>Tutorials</span>
                    </div>
                    <div className="item">
                        <img src={Courses}
                            alt="" />
                        <span>Courses</span>
                    </div>
                    <div className="item">
                        <img src={Fund}
                            alt="" />
                        <span>Fund</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeftBar
