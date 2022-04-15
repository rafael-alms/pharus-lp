import * as S from './Home.style'
import Header from '../../components/Header'
import Inicio from '../../components/Inicio'
import Descricao from '../../components/Descricao'
import Estatisticas from '../../components/Estatisticas'
//import { useNavigate } from 'react-router-dom'
//import { Link } from 'react-router-dom'

const Home = () => {

  /*$(function() {
    let REF = this;
     //defina aqui o token gerado após clicar em  "Generate Token"
      const token = "";

      const url = 'https://graph.instagram.com/me/media?access_token='+token+'&fields=media_url,media_type,caption,permalink';
      //percorremos as imagens recebidas
      $.get(url).then(function(response){
            let images = response.data;
            let images_content = '<div class="row">';
            for(let c = 0; c < images.length; c++){
                let pic = images[c];
                let caption = pic.caption !== null ? pic.caption : '';
                images_content += '<div class="col-md-3"><a target="_target" href="'+pic.permalink+'"><img title="'+caption+'" alt="'+caption+'" src="'+pic.media_url+'" width="128"></a></div>';
            }
            images_content += '</div>';
            $('#insta').html(images_content);
      });

  });*/

    return (
    <>
      <S.Container>
        <div className='header'><Header /></div>
        {/*<Link to="/home">Home sem reload</Link>*/}
        {/* <div id="insta"></div> */}
        <div className='inicio'><Inicio /></div>
        <div className='description'><Descricao /></div>
        <div className='statistics'><Estatisticas /></div>
      </S.Container>
    </>
  );
}

export default Home;