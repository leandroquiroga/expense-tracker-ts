import { container_title,title_style, subTitle_style } from "./Title.css"

type TitleProps = {
  title: string,
  subTitle?: string,
};

const Title = ({ title, subTitle }: TitleProps) => {
  return (
    <article className={`${container_title}`}>
      <h1 className={`${title_style}`}>{title}</h1>
      <p className={`${subTitle_style}`}>{subTitle}</p>
    </article>
  );
};

export default Title;