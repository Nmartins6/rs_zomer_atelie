import provisory from "../../assets/hero_section_image.svg"

export default function AboutUs() {
    return (
        <section id="AboutUs" className="about--section">
            <div className="about--section--img">
            {/* I need to change this image after I receive the correct file */}
                <img src={provisory} alt="profile picture" />
            </div>
            <div className="hero--section--content-box about--section--box">
                <div className="hero--section--content">
                    <p className="section--title">Sobre Nós</p>
                    <h1 className="services--section--heading">RS Zomer</h1>
                    <p className="hero--section-description">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus voluptatem quaerat sed perspiciatis magni repellendus, excepturi numquam nam pariatur vel.
                    </p>
                    <p className="hero--section--description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus totam cupiditate architecto optio illo delectus!
                    </p>
                </div>
            </div>
        </section>
    )
}