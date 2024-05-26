import styled from "styled-components";

function HomeMainSection() {
  const images = [
    "/src/assets/img/img_screen_1.png",
    "/src/assets/img/img_screen_2.png",
    "/src/assets/img/img_screen_3.png",
    "/src/assets/img/img_screen_4.png",
    "/src/assets/img/img_screen_5.png",
    "/src/assets/img/img_screen_6.png",
  ];

  return (
    <HomeMainWrapper>
      <HomeMainContainer>
        {images.map((src, index) => (
          <ImageWrapper key={index}>
            <img src={src} alt={`img-${index}`} />
          </ImageWrapper>
        ))}
      </HomeMainContainer>
    </HomeMainWrapper>
  );
}

export default HomeMainSection;

const HomeMainWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const HomeMainContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 1rem;
  width: 100%;
  height: 100%;
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`;
