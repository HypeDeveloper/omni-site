import { Button, ServiceBoxes } from "../../tools/utils";

export default function Home() {
    return (
        <>
            <main className="darkMode">
                <section className="homeHeroOne">
                    <div className="homeHeroInfo">
                        <h1> Pay with ease, </h1>
                        <h1 className="red"> Your way, </h1>
                        <h1 className="yellow"> Every day, </h1>

                        <p>
                            Omni simplifies your payment experience, anytime and anywhere, switch to Omni for a hassle-free payment experience.
                        </p>

                        <Button text={'get started'} />
                    </div>
                    <div className="homeHeroImg">
                        <div className="imgBox">

                        </div>
                    </div>
                </section>


                {/* About Us */}

                <section className="aboutUs">
                    <div className="aboutUs_Wrap">
                        <div className="aboutUsIntro">
                            <h1>
                                What Do <br /> <span className="red">
                                We Do
                                </span>
                            </h1>
                            <Button text={'pay a bill'} />
                        </div>
                        <p>
                            We help you stay connected and keep your essential services running smoothly with our hassle-free platform. Get instant recharge of airtime, data bundles, cable TV, and electricity bills payment all in one place.
                        </p>
                    </div>
                </section>


                {/* Services */}
                <section className="Services">
                    <ServiceBoxes 
                        point={'right'}
                        subText={'Airtime'}
                        bttnText={'View airtime plans'}
                        pText={'Enjoy as much as 3% discount on airtime purchase on our platform'}
                        header={'Enjoy massive Airtime Discounts'}
                    />

                    <ServiceBoxes 
                        point={'left'}
                        subText={'Data'}
                        bttnText={'View airtime plans'}
                        pText={'Enjoy as much as 3% discount on airtime purchase on our platform'}
                        header={'Enjoy massive Airtime Discounts'}
                    />

<ServiceBoxes 
                        point={'right'}
                        subText={'Airtime'}
                        bttnText={'View airtime plans'}
                        pText={'Enjoy as much as 3% discount on airtime purchase on our platform'}
                        header={'Enjoy massive Airtime Discounts'}
                    />

                    <ServiceBoxes 
                        point={'left'}
                        subText={'Data'}
                        bttnText={'View airtime plans'}
                        pText={'Enjoy as much as 3% discount on airtime purchase on our platform'}
                        header={'Enjoy massive Airtime Discounts'}
                    />
                </section>



                {/* special Deals */}
                <section className="special">
                    <div className="specialWrap">
                        <div className="GetBanner">
                            <div className="getInfos">
                                
                            </div>
                        </div>
                        <div className="TextSection">
                            <h1>
                                Enjoy more for less
                            </h1>
                            <p>
                            Joining us gives you huge  discounts from Airtime Top-up down to your Electricity Subscription Service
                            </p>
                            <Button text={'Join Now'}/>
                        </div>
                    </div>
                </section>

            </main>
        </>
    )
}