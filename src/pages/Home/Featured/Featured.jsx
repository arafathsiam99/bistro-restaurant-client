import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import './Featured.css'

const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-8 my-20">
            <SectionTitle
                subHeading="check it out"
                heading="featured item">
            </SectionTitle>
            <div className="md:flex justify-center bg-slate-500 bg-opacity-60 items-center pb-20 pt-12 px-36">
                <div><img src={featuredImg} alt="" /></div>
                <div className="md:ml-10">
                    <p>Aug 05, 2024</p>
                    <p className="uppercase"> Where can i get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil illo atque recusandae voluptate explicabo dignissimos incidunt odio cupiditate rem, quas error? Repellat, et? Explicabo nobis ad expedita quae excepturi illum modi labore fugiat libero optio, voluptatum inventore nesciunt sint, rerum autem dicta, accusamus ut fuga nostrum aliquam soluta? Officiis, doloremque.</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;