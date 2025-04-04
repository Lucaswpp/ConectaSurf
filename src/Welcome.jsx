import logo from "./assets/logoConectaSurf.png"

const Welcome = () => {
    return (
        <div className="style2-main">
            <h1 className="style2-main-title">SEJA BEM VINDO!!!</h1>

            <p className="style2-main-text">O Conecta Surf tem como objetivo tornar possível o sonho de aprender a surfar e criar novas conexões com o mar.</p>

            <div className="style2-main-contentImg">
                <img className="style2-main-contentImg-img" src={logo}/>
            </div>
        </div>
    );
}

export default Welcome;