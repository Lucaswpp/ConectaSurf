import logo from "./assets/logoConectaSurf.png"

const Welcome = () => {
    return (
        <div className="style2-main">
            <h1 className="style2-main-title">SEJA BEM VINDO!!!</h1>

            <p className="style2-main-text">A nossa Finalidade é, crescer a inclusão da prática do surf na nossa região de maneira Acessível com o Menor preço do mercado, visando apenas obter valores para custeamento e manutenção dos equipamentos utilizados no nosso Aulão</p>

            <div className="style2-main-contentImg">
                <img className="style2-main-contentImg-img" src={logo}/>
            </div>
        </div>
    );
}

export default Welcome;