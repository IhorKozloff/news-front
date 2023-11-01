import facebookImg from '../images/facebook.png';
import youtubeImg from '../images/youtube.png';
import telegramImg from '../images/telegram.png';
import tiktokImg from '../images/tiktok.png';

export const SocialLinksBar = () => {

    const imgClassNames = 'w-24 h-24';
    const refClassnames = 'flex flex-col justify-center items-center';
    const textClassnames = 'font-bold mt-4 block';

    return (
        <>
            <h3 className="font-bold text-3xl mb-10">Follow us on social networks</h3>
            <ul className="w-full flex justify-around items-center">
                <li>
                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className={refClassnames}>
                        <img src={facebookImg} alt="facebook logo" className={imgClassNames}/>
                        <span className={textClassnames}>Facebook</span>
                    </a>
                </li>

                <li>
                    <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className={refClassnames}>
                        <img src={youtubeImg} alt="youtube logo" className={imgClassNames}/>
                        <span className={textClassnames}>YouTube</span>
                    </a>
                </li>

                <li>
                    <a href="https://www.telegram.com" target="_blank" rel="noopener noreferrer" className={refClassnames}>
                        <img src={telegramImg} alt="telegram logo" className={imgClassNames}/>
                        <span className={textClassnames}>Telegram</span>
                    </a>
                </li>

                <li>
                    <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" className={refClassnames}>
                        <img src={tiktokImg} alt="tiktok logo" className={imgClassNames}/>
                        <span className={textClassnames}>TikTok</span>
                    </a>
                </li>
            </ul>
        </>
    );
};