export default function ContactUs() {
    return (
        <section id="ContactUs" className="contact--section">
            <div>
                <p className="sub--title">Deixe sua mensagem</p>
                <h2>Fale Conosco</h2>
                <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, asperiores!</p>
            </div>
            <form action="" className="contact--form--container">
                <div className="contact--container">
                    <label htmlFor="first-name" className="contact--label">
                        <span className="name-md">Nome:</span>
                        <input type="text"
                            className="contact--input text-md"
                            name="first-name"
                            id="first-name"
                            required />
                    </label>
                    <label htmlFor="email" className="contact--label">
                            <span className="name-md">Sobrenome:</span>
                            <input type="email"
                            className="contact--input text-md"
                            name="email"
                            id="email"
                            required />
                    </label>
                    <label htmlFor="phone-number" className="contact--label">
                        <span className="name-md">Telefone:</span>
                        <input type="number"
                        className="contact--input text-md"
                        name="phone-number"
                        id="phone-number"
                        required />
                    </label>
                </div>
                <label htmlFor="choose-topic" className="contact--label">
                    <span className="name-md">Escolha uma opção:</span>
                    <select name="option" id="choose-topic"
                    className="contact--input text-md" >
                        <option value="0">Escolha uma opção...</option>
                        <option value="1">Item 1</option>
                        <option value="2">Item 2</option>
                        <option value="3">Item 3</option>
                    </select>
                </label>
                <label htmlFor="message" className="contact--label">
                    <span className="text-md">Mensagem:</span>
                    <textarea name="message"
                    id="message"
                    className="contact--input text-md" 
                    rows="8">
                </textarea>
                </label>
                <label htmlFor="checkbox" className="checkbox--label">
                    <input type="checkbox" 
                    name="checkbox" required/>
                    <span className="text-sm">Aceito ser contatado(a) via whatsapp!</span>
                </label>
                <div>
                    <button className="btn btn-primary contact--form--btn">Enviar</button>
                </div>
            </form>
        </section>
    )
}