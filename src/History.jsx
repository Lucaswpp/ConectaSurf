import img from "./assets/manWater.png"

const History = () => {
    return (
        <div className="style3-main">
            <h1 className="style3-main-title">Como surgiu o conecta surf ?</h1>

            <p className="style3-main-text">O Conecta Surf, deu inicio através do desejo em poder tornar possível o sonho de aprender a surfar e criar novas conexões com o mar.
            </p>

            <div className="style3-main-content-position-img">
                <div className="style3-main-contentImg">
                    <img className="style3-main-contentImg-img" src={img}></img>
                </div>
            </div>

        </div>
    )
}

export default History