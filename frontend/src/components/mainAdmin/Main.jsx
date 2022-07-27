import "./Main.css";
import hello from '../../assets/Logo.png';
// import Charts from '../charts/Charts'


const Main = () => {
    return (
        <main style={{ overflowY: "scroll" }}>
            <div className="main__container">{/* === Container === */}

                <div className="main__title">{/* === Title === */}
                    <img src={hello} alt="hello" />
                    <div className="main_greeting">
                        <h1>Superlady Data</h1>
                        {/* <p>Bem-vindo ao seu painel</p> */}
                    </div>
                </div>

                <div className="main__cards">
                    <div className="card mt-3 mx-3">{/* === CARDS === */}
                        <i className="fa fa-file-text fa-2x text-lightblue"></i>
                        <div className="card_inner">
                            <p className="text-primary-p">Number of Regions</p>
                            <span className="font-bold text-title">25</span>
                        </div>
                    </div>

                    <div className="card mt-3 mx-3">{/* === CARDS === */}
                        <i className="fa fa-money-bill fa-2x text-red"></i>
                        <div className="card_inner">
                            <p className="text-primary-p">Number of Superladies</p>
                            <span className="font-bold text-title">50</span>
                        </div>
                    </div>

                    <div className="card mt-3 mx-3">{/* === CARDS === */}
                        <i className="fa fa-archive fa-2x text-yellow"></i>
                        <div className="card_inner">
                            <p className="text-primary-p">Average number of Superlady per region</p>
                            <span className="font-bold text-title">2</span>
                        </div>
                    </div>

                    <div className="card mt-3 mx-3">{/* === CARDS === */}
                        <i className="fa fa-bars fa-2x text-green"></i>
                        <div className="card_inner">
                            <p className="text-primary-p">Total womens enrolled</p>
                            <span className="font-bold text-title">400</span>
                        </div>
                    </div>
                </div>



            </div>
        </main>
    )
}

export default Main;