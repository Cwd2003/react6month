import React from "react";

export default function ChefSection() {
    return (
        <section className="chef-wrapper">
            <h1 className="chef-title">John Doe</h1>

            <div className="chef-layout">
                {/* Left Column */}
                <div className="chef-column">
                    <img
                        src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092"
                        alt="Dish 1"
                        className="chef-image"
                    />
                    <div className="arrow">↓</div>
                    <p className="chef-text">
                        Diam dolor diam ipsum et, tempor voluptua sit consetetur sit.
                        Aliquyam diam amet diam et eos sadipscing labore. Clita erat ipsum
                        et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo
                        justo et tempor consetetur takimata eirmod.
                    </p>
                </div>

                {/* Center Column */}
                <div className="chef-column center">
                    <img
                        src="https://thumbs.dreamstime.com/z/cooking-chef-12619869.jpg"
                        alt="Chef"
                        className="chef-image large"
                    />
                </div>

                {/* Right Column */}
                <div className="chef-column">
                    <p className="chef-text">
                        Diam dolor diam ipsum et, tempor voluptua sit consetetur sit.
                        Aliquyam diam amet diam et eos sadipscing labore. Clita erat ipsum
                        et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo
                        justo et tempor consetetur takimata eirmod.
                    </p>
                    <div className="arrow">↑</div>
                    <img
                        src="https://images.unsplash.com/photo-1551218808-94e220e084d2"
                        alt="Dish 2"
                        className="chef-image"
                    />
                </div>
            </div>
        </section>
    );
}
