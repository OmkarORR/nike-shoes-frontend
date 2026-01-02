export default function Contactus()
{
    return(
        <div>
            <section className="contactus">
                <div className="contact">
                    <h1 className="contact-title">Contact Us</h1>
                    <p className="Contact-p">LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU! WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE, EMAIL, OR SOCIAL MEDIA.</p>
                </div>
                <div className="forms">
                    <div className="Contact-form">
                        <div className="btn">
                            <button className="btn1"><img  className="call" src="/images/contactus1.png"/>VIA SUPPORT CHAT</button>
                            <button className="btn1"><img className="call" src="/images/contactusphone.png"/>VIA CALL</button>
                        </div>
                        <button className="btn3"><img className="call" src="/images/contactus2.png"/>VIA EMAIL FORM</button>
                        <div className="form-main">
                            <input  className="input" type="text" placeholder="Name"/>
                            <input  className="input" type="text" placeholder="Email"/>
                            <textarea className="input" type="multiline" placeholder="Description"></textarea>

                            <button className="btn4">Submit</button>
                        </div>
                    </div>
                    <div className="Contact-img">
                            <img src="/images/contact3.png" className="image"/>
                    </div>
                  
                </div>
            </section>
        </div>
    )
}