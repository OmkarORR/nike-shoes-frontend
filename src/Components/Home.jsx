
export default function Home()
{
    return(
        <section className="section">
            <div className="sec">
                <h1 className="text">Your Feet deserve the best</h1>
                <div className="para">
                <p className="p">your feet deserve the best and we're here to help you with our shoes your feet deserve the best and we're here to help you with our shoes.</p>
                </div>
                
                <button href="https://www.flipkart.com/" className="btn-shop">Shop Now</button>
                <button className="btn-cate">Category</button>

                <div className="flip">
                <p className="p1">Also Available On</p>
                
                <img src="public/images/flipkart.png" alt="flipkart"></img> 
                <img src="public/images/amazon.png" alt="amazon"></img>
                </div>

            </div>
            <div className="shoes-img">
                <img className="shoes-img" src="/images/shoesimage.png" alt="Shoe image"></img>
            </div>
        </section>
    )
}