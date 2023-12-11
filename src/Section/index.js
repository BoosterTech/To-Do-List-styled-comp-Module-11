import React from "react";
import "./style.css";

const Section = ({ title, extraHeaderContent, bodyContent, id, headerType }) => (
    <section className="section">
        <div className={id}>
            <h2 className={headerType}>{title}</h2>
            {extraHeaderContent}
        </div>
        {bodyContent}
    </section>
);

export default Section;