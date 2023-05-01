import './pageTwo.css'

function PageTwo() {
    return (
        <div className="pageTwo">
            <div className='pageTwoHeader'>
                <p>About <span>SATYAPAN</span></p>
                <div className='description'>
                    <p>A seamless solution for digital verification of business, 
                        employees, and other associated entities</p>
                    <span>Working with Digital India and Tradeocean to create a simple and 
                        affordable ‘secure’ solution for digital verification targeting the B2B market
                        which can be used without any intervention.
                    </span>
                </div>
            </div>
            <div className='pageGrid'>
                <div className='container-one'>
                    <span>Trust</span>
                    <p>A solution that empowers businesses to reliably verify professional
                        artifacts of individuals and third party entities
                    </p>
                </div>
                <div className='container-two'>
                    <span>Saftey</span>
                    <p>A solution that empowers businesses to reliably verify professional
                        artifacts of individuals and third party entities
                    </p>
                </div>
                <div className='container-three'>
                    <span>Validity</span>
                    <p>Providing factual and accurate information validated through authentic 
                        entities
                    </p>
                </div>
            </div>
        </div>
    );
}

export default PageTwo;