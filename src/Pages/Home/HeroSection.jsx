import HeroImage from "../../assets/hero_section_image.svg"

export default function HeroSection() {
    return (
        <section id="HeroSection" className="hero--section">
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    <p className="section--title">Olá, eu sou a Rosi Zomer</p>
                    <h1 className="hero--section--title">
                        <span className="hero--section--title--color">Costureira</span>{" "}
                        <br />
                    </h1>
                    <p className="hero--section-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam eligendi quisquam enim deleniti excepturi. Quam harum dolorum voluptatum officiis quis nostrum accusamus eius veritatis ut a! Autem ducimus dolore amet.</p>
                    <br />Lorem ipsum dolor sit amet.
                </div>
                <button className="btn btn-primary">Fale Conosco</button>
            </div>
            <div className="hero--section--img">
                <img src={HeroImage} alt="Banner Image" />
            </div>
        </section>
    )
}