import './profile.scss';
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useContext } from 'react';
import { AuthenticationContext } from '../../context/authenticationContext';
import Posts from '../../components/posts/Posts';

const Profile = () => {
    const { loggedUser } = useContext(AuthenticationContext);

    return (
        <div className='profile'>
            <div className="images">
                <img src='http://hd.wallpaperswide.com/thumbs/the_old_fashioned_way-t2.jpg' alt="" className='cover' />
                <img src={loggedUser.profilePic} alt="" className='profilePic' />
            </div>
            <div className="profileContainer">
                <div className="userInfo">
                    <div className="left">
                        <a href="http://facebook.com">
                            <FacebookTwoToneIcon fontSize='large' />
                        </a>
                        <a href="http://facebook.com">
                            <InstagramIcon fontSize='large' />
                        </a>
                        <a href="http://facebook.com">
                            <PinterestIcon fontSize='large' />
                        </a>
                        <a href="http://facebook.com">
                            <TwitterIcon fontSize='large' />
                        </a>
                        <a href="http://facebook.com">
                            <LinkedInIcon fontSize='large' />
                        </a>
                    </div>
                    <div className="center">
                        <span>{loggedUser.name}</span>
                        <div className="info">
                            <div className="item">
                                <PlaceIcon />
                                <span>South Africa</span>
                            </div>
                            <div className="item">
                                <LanguageIcon />
                                <span>mondli.dev</span>
                            </div>
                        </div>
                        <button>follow</button>
                    </div>
                    <div className="right">
                        <EmailOutlinedIcon />
                        <MoreVertIcon />
                    </div>
                </div>
                <Posts />
            </div>
        </div>
    )
}

export default Profile
