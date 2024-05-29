import styled from 'styled-components';

const Content = styled.div`
  max-width: 340px;
  height: 360px;

  & .main_img {
    width: 100%;
    height: 70%;
    border-radius: 20px;
  }

  & .content-paragraph {
    display: flex;
    margin-top: 16px;
  }

  & .sub_img {
    width: 40px;
    height: 40px;
    border-radius: 20px;
  }

  & .content-info {
    margin-left: 20px;
    width: calc(100% - 60px);
  }

  & .content-info h4 {
    font-weight: 500;
    height: 40px;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-word;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    line-height: 1.2rem;
    margin-bottom: 10px;
  }

  & .content-info p {
    color: #808080;
  }

  & #content-info-number span {
    margin: 0 5px;
  }
`;

function MainSection(props) {
  const { img_src_main, img_src_sub, title, creator, views, time } = props;

  return (
    <Content>
      <div className="content-container">
        <img className="main_img" src={img_src_main} alt="썸네일" />
        <div className="content-paragraph">
          <img className="sub_img" src={img_src_sub} alt="제작자 프로필" />
          <div className='content-info'>
            <h4>{title}</h4>
            <p>{creator}</p>
            <p id='content-info-number'>
              {views}<span>•</span>{time}
            </p>
          </div>
        </div>
      </div>
    </Content>
  );
}

export default MainSection;
