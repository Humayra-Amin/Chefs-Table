
const Banner = () => {
    return (
        <div>
            <div className="hero h-[600px] mt-14 rounded-3xl bg">
                <div className="hero"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="w-[897px]">
                        <h1 className="mb-5 lg:text-5xl font-bold">Discover an exceptional cooking class tailored for you!</h1>
                        <p className="mb-5">Indulge your culinary curiosity with our bespoke cooking classes, meticulously crafted to suit your taste and skill level. Embark on a gastronomic journey</p>

                        <button className="btn btn-accent rounded-full">Explore Now</button>
                        <button className="btn btn-outline border-white text-white ml-10 rounded-full">Our Feedback</button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;