import ArticleStyles from "../styles/Articles.module.css";

const Articles = () => {
  return (
    <div className={ArticleStyles.main}>
      <div className={ArticleStyles.image}>
        <img
          src="https://res.cloudinary.com/dxh1uvmlw/image/upload/v1643810788/project/test1_kqsder.jpg"
          alt="code"
        />
      </div>
      <div className={ArticleStyles.preview}>
        <h6>how to center a image in div ?</h6>
        <p>
          first make image as block (default image are inline). then use margin
          top margin and auto. It will automatic make image center using remaing
          width. <br />
          second way. make parent element display flex and make center using justify content attribute.
          make image bit cover or contain by image size
        </p>
      </div>
    </div>
  );
};

export default Articles;
