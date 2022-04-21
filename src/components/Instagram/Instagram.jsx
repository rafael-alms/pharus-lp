import * as S from './Instagram.style';
import InstagramFeed from "react-ig-feed";
//import "react-ig-feed/dist/index.css";

const Instagram = () => {

    return (
        <S.Container>
            <p className='titulo'>Enquanto isso, no Instagram...</p>
            <InstagramFeed className="instaStyle"
                token="IGQVJXLUlmOHd3TnhJUnEtUlZAoRVhJUUhLT3JobHpwSm51aE9YUzMtWnNDaGJXMmM0TU1zdkJHbUZA3SjZAodFZA3QmtlX1B3WlBnUTVNQk90b3lTS3dEMXRpZATNIVVJaXzFnMmFsN0F4dEdxRG1xZA1NMNQZDZD"
                counter="6"
            />
        </S.Container>
    )
}
       
export default Instagram;