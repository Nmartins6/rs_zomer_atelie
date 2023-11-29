import data from "../../data/index.json";

export default function ServicesOffered() {
    return (
        <section id="ServicesOffered" className="services--section">
            <div className="services--container">
                <p className="section--title">Confira</p>
                <h2 className="services--section--heading">Esses são nossos serviços</h2>
            </div>
            <div className="services--section--container">
                {data?.services?.map((item, index) => (
                    <div key={index} className="services--section--card">
                        <div className="services--section--icon">
                            <img src={item.src} alt="Service chain" />
                        </div>
                        <div className="services--section--card--content">
                            <h3 className="services--section--title">{item.title}</h3>
                            <p className="services--section--description">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}